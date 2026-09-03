# Zion Tech Group — CEO Status

CEO: Kleber Garcia Alcatrão
Company: Zion Tech Group
Last updated: 2026-09-03T07:30 UTC

## Site (live)
- Homepage: https://ziontechgroup.com → HTTP 200
- Sitemap: /sitemap.xml → HTTP 200
- /pricing → 301 (redirect ativo)
- /services → 301 (redirect ativo)

## 404 routes (bloqueando o site)
- /about, /contact, /blog
- /testimonials/, /service-comparison/
- /tools/2026-ma-due-diligence-checklist/
- /monetization-hub/
- /cookie-policy, /privacy, /terms
- /assessments, /help
- /integrations/composio/
- /services/whatsapp-monetizacao/

## Diagnóstico
- GitHub Pages build = `built` mas conteúdo não é servido
- Causa: arquivos em public/ no gh-pages OU source mal configurado
- Mirror workflow quebrado (exige npm ci sem package.json)
- Solução: Actions com peaceiris/actions-gh-pages@4, flatten public/→root

## Lead CRM
- 1933 leads | 693 outreach-ready
- Miner: 12 queries/ciclo, 0 contacts, 0 new leads
- Outreach: blocked_by_config_or_env
