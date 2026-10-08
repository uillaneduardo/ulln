# Design System v1.0

Tokens canônicos: `src/styles/tokens.css`. CSS Modules para estilos locais.

| Token | Valor |
|---|---|
| background | `#101114` |
| surface | `#191B1F` |
| elevated | `#24272C` |
| border | `#353941` |
| text | `#F5F5F2` |
| muted | `#B8BDC7` |
| accent | `#C4F46D` |
| accent hover | `#D8FF91` |

Fontes: Space Grotesk (títulos), Inter (corpo), JetBrains Mono (metadados). Spacing base 4px, containers máximo 1280px. Raios 6/10/16px. Componentes em `src/components/ui` e navegação em `src/components/navigation`.

Regras: contraste de texto WCAG 2.2 AA como alvo; foco visível; botões ≥44px; HTML semântico; `prefers-reduced-motion`; layouts fluidos.
