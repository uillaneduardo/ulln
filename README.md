# ULLN — Site pessoal

Site de Uillan Eduardo com apresentação pessoal e catálogo de projetos públicos.

## Stack

- HTML semântico, CSS responsivo e JavaScript puro (sem React, Vite ou dependências de build).
- Rotas reais na barra de endereços via History API: `/`, `/projetos`, `/laboratorio`, `/sobre`.
- O Nginx entrega `index.html` nas rotas de aplicação para permitir atualização e abertura de URL direta.
- Catálogo de aplicações e links externos editável no topo de `site/app.js`.

## Desenvolvimento local

Abra `site/index.html` por um servidor HTTP com fallback de SPA. Para simular a configuração de produção, use Docker:

```bash
docker compose up -d --build
curl -I http://127.0.0.1:8181
curl -I http://127.0.0.1:8181/projetos
```

## Deploy no homelab

```bash
cd ~/homelab/apps/ulln
git pull origin main
docker compose up -d --build
```

A porta `8181` permanece exposta apenas em `127.0.0.1` do host. O Cloudflare Tunnel existente deve continuar usando o mesmo origin válido da instalação atual. Nenhuma rota do Cloudflare precisa mudar com esta atualização.

## Segurança

A listagem do portfólio inclui somente aplicações selecionadas. Não publique endpoints internos, credenciais, endereços de serviços de administração ou links privados sem revisão.

> A implementação React anterior permanece no repositório como legado, mas **não é utilizada** no Docker de produção.
