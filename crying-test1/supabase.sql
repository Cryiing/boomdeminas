-- ============================================
-- ESTOQUE - PÃO DE QUEIJO DE REQUEIJÃO
-- Rode este arquivo no Supabase > SQL Editor.
-- ============================================

-- 1. Tabela com o estoque atual
create table if not exists public.estoque (
  id bigint generated always as identity primary key,
  produto text not null unique,
  quantidade integer not null default 0 check (quantidade >= 0),
  updated_at timestamptz not null default now()
);

-- Produto inicial
insert into public.estoque (produto, quantidade)
values ('Pao de Queijo Requeijao', 0)
on conflict (produto) do nothing;


-- 2. Histórico de produções
create table if not exists public.producoes (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  usuario_id uuid not null references auth.users(id),
  usuario_email text,
  caixas integer not null check (caixas >= 0),
  unidades_avulsas integer not null check (unidades_avulsas >= 0),
  quantidade_total integer not null check (quantidade_total > 0)
);


-- 3. Segurança
alter table public.estoque enable row level security;
alter table public.producoes enable row level security;

-- Usuários logados podem consultar o estoque.
drop policy if exists "usuarios logados podem ver estoque" on public.estoque;
create policy "usuarios logados podem ver estoque"
on public.estoque
for select
to authenticated
using (true);

-- Usuários logados podem consultar o histórico.
drop policy if exists "usuarios logados podem ver producoes" on public.producoes;
create policy "usuarios logados podem ver producoes"
on public.producoes
for select
to authenticated
using (true);


-- 4. Função atômica para registrar produção.
-- Cada caixa = 20 unidades.
-- Ela grava o histórico e soma no estoque na mesma operação.
create or replace function public.registrar_producao(
  p_caixas integer,
  p_unidades_avulsas integer
)
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare
  v_total integer;
  v_email text;
begin
  if auth.uid() is null then
    raise exception 'Usuário não autenticado.';
  end if;

  if p_caixas < 0 or p_unidades_avulsas < 0 then
    raise exception 'Quantidade inválida.';
  end if;

  v_total := (p_caixas * 20) + p_unidades_avulsas;

  if v_total <= 0 then
    raise exception 'Informe pelo menos uma unidade.';
  end if;

  select email into v_email
  from auth.users
  where id = auth.uid();

  -- Atualiza o estoque.
  update public.estoque
  set quantidade = quantidade + v_total,
      updated_at = now()
  where produto = 'Pao de Queijo Requeijao';

  if not found then
    raise exception 'Produto não encontrado no estoque.';
  end if;

  -- Registra quem produziu e quanto.
  insert into public.producoes (
    usuario_id,
    usuario_email,
    caixas,
    unidades_avulsas,
    quantidade_total
  )
  values (
    auth.uid(),
    v_email,
    p_caixas,
    p_unidades_avulsas,
    v_total
  );

  return v_total;
end;
$$;

-- Só usuários autenticados podem executar a função.
revoke all on function public.registrar_producao(integer, integer) from public;
grant execute on function public.registrar_producao(integer, integer) to authenticated;
