# Arquitetura

SPA estática React 19 + Vite + TypeScript strict + React Router. Componentes reutilizáveis e CSS Modules com tokens semânticos. Sem API, banco ou autenticação no M0. `src/app` controla as rotas; `src/pages` contém páginas; `src/components` contém UI e navegação; `content/` fica reservado a Markdown do M1.

## Contrato de dados futuro

Projeto: `slug`, `title`, `summary`, `category`, `status`, `technologies`, `featured`, `links`, `updatedAt`. O M0 não implementa ingestão de Markdown.

## Decisões

- Build estático, dependências instaladas no build, Nginx para produção.
- Testes Vitest + Testing Library.
- Não acoplar aos serviços WappHub ou ao banco existente.
- Rotas desconhecidas geram uma página 404 no cliente; com fallback SPA o HTML inicial é entregue com status HTTP 200. Se exigido 404 HTTP real, adotar SSR ou rotas estáticas geradas no futuro.
