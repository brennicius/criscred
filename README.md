# CrisCred

Formulários INSS, CLT e FGTS e painel com filtros por atendimento, data e modalidade e exclusão individual ou em lote.

## Cloudflare Workers

1. Crie um banco D1 chamado `criscred` em Storage & databases > D1.
2. Substitua o `database_id` de exemplo em `wrangler.jsonc` pelo Database ID real (não é senha).
3. Conecte este repositório ao Workers: nome `criscred`, branch `main`, raiz `/`.
4. Build: `pnpm run build`. Deploy: `pnpm run deploy`.
5. Configure nos Secrets do Worker `ADMIN_USER` e `ADMIN_PASSWORD` (senha aleatória com pelo menos 16 caracteres). Nunca coloque credenciais no GitHub.
6. Formulário na URL workers.dev; painel em `/solicitacoes`, com usuário e senha solicitados pelo navegador.

O deploy aplica migrações D1 antes de publicar. Configure o ID real antes do primeiro deploy. O banco começa vazio; solicitações da hospedagem anterior não são transferidas automaticamente.

## Desenvolvimento

Node >=22.13 e pnpm 11.25.0. `pnpm install --frozen-lockfile`, `pnpm run build`, `pnpm run typecheck`. Credenciais locais em `.dev.vars` (ignorado pelo git). Banco local: `pnpm exec wrangler d1 migrations apply DB --local`.

O formulário é público. Painel e API usam HTTP Basic sobre HTTPS; credenciais ausentes ou senha curta bloqueiam acesso. Alterações verificam origem e exclusões exigem confirmação. Não coletamos CPF, documentos nem dados bancários.
