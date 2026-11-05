# ULLN — Conteúdo e catálogo público

## Estrutura da página

- **Início:** apresentação pessoal, áreas de atuação, três projetos em destaque e introdução ao laboratório.
- **Projetos:** diretório pesquisável por nome, descrição e categoria; todos os links externos abrem em uma nova guia.
- **Laboratório:** contexto público sobre infraestrutura e experimentação, sem dados operacionais.
- **Artigos:** seção preparada para conteúdo futuro.
- **Sobre:** apresentação de Uillan Eduardo e de suas atividades.

## Fonte dos projetos

O catálogo fica em `src/data/projects.ts`. Cada item contém `slug`, `name`, `category`, `summary`, `url` e o indicador opcional `featured`. Atualizar o arquivo para adicionar, remover ou editar aplicações; não é necessário banco de dados.

A lista inicial foi curada a partir dos domínios informados pelo proprietário. A presença do link **não** representa disponibilidade monitorada, aplicação estável ou certificação de acesso público. Confirmar os domínios antes de divulgar amplamente.

## Segurança

A página pública **não lista** origens internas do tunnel, IPs, portas Docker, SSH, Cockpit, Portainer, painéis administrativos, bancos, nem endpoints restritos. Manter aplicações administrativas protegidas por Cloudflare Access / autenticação adequada, independentemente de sua inclusão no portfólio.

## Publicação

Seguir `docs/DEPLOYMENT.md` para executar a aplicação em Docker no homelab e apontar a rota `ulln.com.br` do Cloudflare Tunnel para a origem alcançável. Este commit não altera tunnel, DNS ou containers de produção.

## Verificação antes do deploy

Executar `npm ci`, `npm run typecheck`, `npm run lint`, `npm run test`, `npm run build` e `docker compose build`. Verificar navegação, links, busca, filtros e layout mobile. Os testes não foram executados neste ambiente conectado ao repositório.
