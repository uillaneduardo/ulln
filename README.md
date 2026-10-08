# ULLN — Digital Lab

Laboratório independente de tecnologia, software, infraestrutura e experimentação.

**Site planejado:** https://ulln.com.br

Este repositório contém o website e seu design system. Consulte `docs/` para arquitetura, identidade e milestones.

## Desenvolvimento

```bash
npm ci
npm run dev
```

## Produção

```bash
docker compose up -d --build
```

O deploy em produção é uma etapa manual, posterior aos testes locais.
