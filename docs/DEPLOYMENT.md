# Deploy — Homelab

**Pré-requisitos:** Docker Engine e Docker Compose.

```bash
git clone https://github.com/uillaneduardo/ulln.git
cd ulln
cp .env.example .env
docker compose up -d --build
docker compose ps
curl -I http://127.0.0.1:8181
```

A porta padrão 8181 está vinculada a `127.0.0.1` e não fica exposta na LAN. Modifique `ULLN_PORT` em `.env` caso necessário.

## Cloudflare Tunnel

Após verificar a aplicação, crie um hostname público `ulln.com.br` no tunnel existente apontando para um origin alcançável pelo processo `cloudflared`. Se o tunnel estiver em outro container, **127.0.0.1 aponta para ele próprio, não para o host**. Nesse caso, conecte ambos à mesma rede Docker externa ou configure outro endereço privado alcançável; valide o nome da rede e não altere containers existentes sem verificar. Configure também `www.ulln.com.br` com redirecionamento para o domínio canônico, se desejado. Teste HTTPS e headers após a publicação.

**Importante:** este repositório não modifica sua infraestrutura; não publique segredos no Git. A primeira publicação é manual.
