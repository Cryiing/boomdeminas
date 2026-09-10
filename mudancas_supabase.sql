-- ============================================================
-- MUDANÇAS NO BANCO — rode no Supabase > SQL Editor
-- ============================================================
-- Este arquivo está dividido em 2 blocos:
--
--   BLOCO 1 — baixo risco (tabelas/funções NOVAS, não mexe em
--             nada que já existe e já funciona).
--
--   BLOCO 2 — reconstrução de duas funções que JÁ EXISTEM
--             (listar_historico_producoes / listar_historico_saidas),
--             necessária para o botão de cancelar/apagar funcionar.
--             Eu não tenho acesso ao seu banco, então reconstruí
--             essas duas com base em como o app.js já usa os dados.
--             Se der erro ao rodar, me manda a mensagem de erro
--             (ou o resultado da consulta de diagnóstico lá embaixo)
--             que eu ajusto certinho.
--
-- Rode o BLOCO 1 primeiro. Se quiser, já dá pra usar o site
-- sem o BLOCO 2 — só o botão de cancelar/apagar não vai aparecer
-- até esse bloco ser aplicado com sucesso.
-- ============================================================


-- ============================================================
-- BLOCO 1.1 — REVENDA NO MESMO ESTOQUE
-- ============================================================
-- Revenda NÃO fica mais em uma tabela de estoque separada.
-- Para produtos recheados (como Requeijão), o sistema cria/reutiliza
-- um produto na própria tabela public.produtos com o sabor/nome
-- "Requeijão — João" e registra a produção normalmente no estoque.
--
-- Exemplo:
--   Requeijão       -> 200 unidades
--   Requeijão — João -> 40 unidades
--
-- Ambos ficam na mesma lista de produtos e no mesmo estoque, mas
-- são produtos diferentes para não misturar as quantidades.

create or replace function public.registrar_producao_revenda(
  p_produto_id bigint,
  p_caixas integer,
  p_unidades_avulsas integer,
  p_revendedor text
)
returns bigint
language plpgsql
security definer
set search_path = public
as $$
declare
  v_tipo text;
  v_sabor text;
  v_gramas integer;
  v_peso_kg numeric;
  v_unidades_por_caixa integer;
  v_produto_revenda_id bigint;
  v_sabor_revenda text;
  v_producao_id bigint;
begin
  if auth.uid() is null then
    raise exception 'Usuário não autenticado.';
  end if;

  if coalesce(p_caixas, 0) < 0 or coalesce(p_unidades_avulsas, 0) < 0 then
    raise exception 'Quantidade inválida.';
  end if;

  if p_revendedor is null or trim(p_revendedor) = '' then
    raise exception 'Informe o nome do revendedor.';
  end if;

  select
    tipo,
    sabor,
    gramas,
    peso_kg,
    unidades_por_caixa
  into
    v_tipo,
    v_sabor,
    v_gramas,
    v_peso_kg,
    v_unidades_por_caixa
  from public.produtos
  where id = p_produto_id;

  if not found then
    raise exception 'Produto não encontrado.';
  end if;

  -- O controle por nome do revendedor usa o campo sabor, que já é
  -- o nome exibido para produtos recheados.
  if lower(v_tipo) <> 'recheado' then
    raise exception 'A separação por revendedor está disponível atualmente para produtos recheados.';
  end if;

  v_sabor_revenda := trim(v_sabor) || ' — ' || trim(p_revendedor);

  -- Se já existe "Requeijão — João", reutiliza o mesmo produto.
  select id
  into v_produto_revenda_id
  from public.produtos
  where tipo = v_tipo
    and coalesce(sabor, '') = v_sabor_revenda
  order by id
  limit 1;

  -- Caso ainda não exista, cria o produto dentro da mesma tabela
  -- public.produtos.
  if v_produto_revenda_id is null then
    insert into public.produtos (
      tipo,
      sabor,
      gramas,
      peso_kg,
      unidades_por_caixa,
      ativo
    )
    values (
      v_tipo,
      v_sabor_revenda,
      v_gramas,
      v_peso_kg,
      v_unidades_por_caixa,
      true
    )
    returning id into v_produto_revenda_id;
  end if;

  -- Registra como produção normal, portanto entra no estoque.
  if coalesce(p_caixas, 0) > 0 then
    perform public.registrar_deposito(
      v_produto_revenda_id,
      p_caixas
    );
  end if;

  if coalesce(p_unidades_avulsas, 0) > 0 then
    perform public.registrar_deposito_unidades(
      v_produto_revenda_id,
      p_unidades_avulsas
    );
  end if;

  return v_produto_revenda_id;
end;
$$;

revoke all on function public.registrar_producao_revenda(bigint, integer, integer, text) from public;
grant execute on function public.registrar_producao_revenda(bigint, integer, integer, text) to authenticated;


-- ============================================================
-- BLOCO 1.2 — CANCELAR PRODUÇÃO / SAÍDA (histórico normal)
-- ============================================================
-- Em vez de mexer direto na tabela de estoque (cujo nome exato eu
-- não tenho certeza), essas funções reaproveitam as funções que já
-- funcionam (registrar_deposito_unidades / registrar_retirada_unidades)
-- para reverter o estoque, e depois apagam o lançamento original.
-- Isso deixa um registro "espelho" no histórico (ex.: uma "saída" de
-- cancelamento) — é esperado, serve como rastro de auditoria.

create or replace function public.cancelar_producao(
  p_producao_id bigint
)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  v_produto_id bigint;
  v_caixas integer;
  v_unidades_avulsas integer;
  v_unidades_por_caixa integer;
  v_total integer;
begin
  if not exists (
    select 1 from public.perfis
    where id = auth.uid() and cargo = 'administrador'
  ) then
    raise exception 'Apenas administradores podem cancelar lançamentos.';
  end if;

  select produto_id, caixas, unidades_avulsas
  into v_produto_id, v_caixas, v_unidades_avulsas
  from public.producoes
  where id = p_producao_id;

  if not found then
    raise exception 'Lançamento de produção não encontrado.';
  end if;

  select unidades_por_caixa into v_unidades_por_caixa
  from public.produtos
  where id = v_produto_id;

  v_total := (coalesce(v_caixas, 0) * coalesce(v_unidades_por_caixa, 0)) + coalesce(v_unidades_avulsas, 0);

  delete from public.producoes where id = p_producao_id;

  if v_total > 0 then
    perform public.registrar_retirada_unidades(v_produto_id, v_total, 'Cancelamento de produção #' || p_producao_id);
  end if;

  return true;
end;
$$;

revoke all on function public.cancelar_producao(bigint) from public;
grant execute on function public.cancelar_producao(bigint) to authenticated;


create or replace function public.cancelar_saida(
  p_saida_id bigint
)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  v_produto_id bigint;
  v_caixas integer;
  v_unidades_avulsas integer;
  v_unidades_por_caixa integer;
  v_total integer;
begin
  if not exists (
    select 1 from public.perfis
    where id = auth.uid() and cargo = 'administrador'
  ) then
    raise exception 'Apenas administradores podem cancelar lançamentos.';
  end if;

  select produto_id, caixas, unidades_avulsas
  into v_produto_id, v_caixas, v_unidades_avulsas
  from public.saidas
  where id = p_saida_id;

  if not found then
    raise exception 'Lançamento de saída não encontrado.';
  end if;

  select unidades_por_caixa into v_unidades_por_caixa
  from public.produtos
  where id = v_produto_id;

  v_total := (coalesce(v_caixas, 0) * coalesce(v_unidades_por_caixa, 0)) + coalesce(v_unidades_avulsas, 0);

  delete from public.saidas where id = p_saida_id;

  if v_total > 0 then
    perform public.registrar_deposito_unidades(v_produto_id, v_total);
  end if;

  return true;
end;
$$;

revoke all on function public.cancelar_saida(bigint) from public;
grant execute on function public.cancelar_saida(bigint) to authenticated;


-- ============================================================
-- BLOCO 2 — reconstrução de listar_historico_producoes /
-- listar_historico_saidas para incluir o "id" (necessário pros
-- botões de cancelar aparecerem no histórico).
-- ============================================================
-- ⚠️ Isso substitui duas funções que já existem. Reconstruí com base
-- em como o app.js já consome os dados (tabelas producoes/saidas,
-- produtos, perfis). Se dermos algum erro de nome de tabela/coluna,
-- rode a consulta de diagnóstico no final do arquivo e me manda o
-- resultado que eu ajusto rapidinho.

drop function if exists public.listar_historico_producoes();

create function public.listar_historico_producoes()
returns table (
  id bigint,
  created_at timestamptz,
  usuario_nome text,
  usuario_email text,
  produto_id bigint,
  tipo text,
  sabor text,
  gramas integer,
  peso_kg numeric,
  caixas integer,
  unidades_avulsas integer,
  quantidade_total integer
)
language sql
security definer
set search_path = public
as $$
  select
    pd.id,
    pd.created_at,
    pf.nome as usuario_nome,
    au.email as usuario_email,
    pd.produto_id,
    p.tipo,
    p.sabor,
    p.gramas,
    p.peso_kg,
    pd.caixas,
    pd.unidades_avulsas,
    pd.quantidade_total
  from public.producoes pd
  join public.produtos p on p.id = pd.produto_id
  left join public.perfis pf on pf.id = pd.usuario_id
  left join auth.users au on au.id = pd.usuario_id
  order by pd.created_at desc;
$$;

revoke all on function public.listar_historico_producoes() from public;
grant execute on function public.listar_historico_producoes() to authenticated;


drop function if exists public.listar_historico_saidas();

create function public.listar_historico_saidas()
returns table (
  id bigint,
  created_at timestamptz,
  usuario_nome text,
  usuario_email text,
  produto_id bigint,
  tipo text,
  sabor text,
  gramas integer,
  peso_kg numeric,
  caixas integer,
  unidades_avulsas integer,
  quantidade integer,
  motivo text
)
language sql
security definer
set search_path = public
as $$
  select
    s.id,
    s.created_at,
    pf.nome as usuario_nome,
    au.email as usuario_email,
    s.produto_id,
    p.tipo,
    p.sabor,
    p.gramas,
    p.peso_kg,
    s.caixas,
    s.unidades_avulsas,
    s.quantidade,
    s.motivo
  from public.saidas s
  join public.produtos p on p.id = s.produto_id
  left join public.perfis pf on pf.id = s.usuario_id
  left join auth.users au on au.id = s.usuario_id
  order by s.created_at desc;
$$;

revoke all on function public.listar_historico_saidas() from public;
grant execute on function public.listar_historico_saidas() to authenticated;


-- ============================================================
-- DIAGNÓSTICO (opcional) — se algo dos blocos acima der erro de
-- "tabela/coluna não existe", rode a consulta abaixo e me manda
-- o resultado. Ela mostra a definição real das suas funções atuais.
-- ============================================================
-- select proname, pg_get_functiondef(oid) as definicao
-- from pg_proc
-- where pronamespace = 'public'::regnamespace
-- and proname in (
--   'listar_estoque_produtos',
--   'registrar_deposito',
--   'registrar_deposito_unidades',
--   'registrar_retirada',
--   'registrar_retirada_unidades',
--   'listar_historico_producoes',
--   'listar_historico_saidas'
-- );
