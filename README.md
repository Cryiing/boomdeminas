# Estoque — Pão de Queijo

Primeira versão do sistema para registrar produção do Pão de Queijo de Requeijão.

## Regra

- 1 caixa cheia = 20 unidades
- 3 caixas = 60 unidades
- 3 caixas + 7 avulsas = 67 unidades

## 1. Criar o projeto no Supabase

Entre no Supabase e crie um projeto.

Depois abra:

**SQL Editor → New query**

Cole TODO o conteúdo de `supabase.sql` e clique em **Run**.

O banco terá:

- `estoque` — quantidade atual
- `producoes` — histórico de entradas
- `registrar_producao()` — função que calcula e registra a entrada

## 2. Criar o usuário

No Supabase:

**Authentication → Users → Add user**

Crie um e-mail e senha para testar.

Por enquanto o e-mail do usuário também aparece como responsável no histórico.

## 3. Pegar os dados do projeto

No Supabase abra:

**Connect → API**

Pegue:

- Project URL
- Publishable key

Abra `app.js` e substitua:

```js
const SUPABASE_URL = "COLE_SUA_PROJECT_URL_AQUI";
const SUPABASE_PUBLISHABLE_KEY = "COLE_SUA_PUBLISHABLE_KEY_AQUI";
```

IMPORTANTE:
- A chave que vai no site é a **Publishable key**.
- NUNCA coloque a `service_role` key no HTML/JavaScript do site.

## 4. Testar

Como é um site estático, você pode abrir usando um servidor local.

Se tiver VS Code, uma forma simples é usar a extensão **Live Server**.

Depois faça login e teste:

- 1 caixa → +20
- 5 caixas → +100
- 5 caixas + 3 avulsas → +103

O estoque e o histórico devem atualizar automaticamente.

## Próxima evolução

Depois de validar essa versão, podemos adicionar:

1. retirada de produtos
2. outros sabores/tamanhos
3. usuários com nome e função
4. dashboard
5. filtros e relatórios
6. estoque mínimo
7. WhatsApp
8. hospedagem
