# Zion Tech Group — Memory & Status

## Última atualização: 2026-09-03T07:30 UTC

### Repositório
- main: 647f5e8e591 (push origin main)
- gh-pages: build `built` mas arquivos não servidos no root
- Working dir: `/data/data/com.termux/files/home/ztg/repo`

### Site Live (verificado)
- Homepage `https://ziontechgroup.com/` → HTTP 200
- `/sitemap.xml` → HTTP 200
- `/pricing` → 301 (redirect)
- `/services` → 301 (redirect)
- **TODAS as demais rotas → 404**:
  - `/about`, `/contact`, `/blog`
  - `/testimonials/`, `/service-comparison/`
  - `/tools/2026-ma-due-diligence-checklist/`
  - `/monetization-hub/`
  - `/cookie-policy`, `/privacy`, `/terms`
  - `/assessments`, `/help`
  - `/integrations/composio/`, `/services/whatsapp-monetizacao/`

### Diagnóstico do blocker
- GitHub Pages build completo (`built`) mas conteúdo não é servido
- Causa provável: arquivos em `public/` no gh-pages em vez de root, ou source mal configurado
- Mirror workflow quebrado: exige `npm ci` sem package.json
- Solução necessária: deploy via Actions com peaceiris/actions-gh-pages@4 fazendo flatten de public/→root

### Lead CRM & Outreach
- 1933 leads em all-leads.json
- 693 outreach-ready
- Miner: 12 queries/ciclo, 0 contacts, 0 new leads, status ok
- Monitor: 52 inbox_interest, 0 hot_followup sent
- Envio: blocked_by_config_or_env

### Composio
- Workflows em .github/workflows/composio-zion-master.yml
- CLI falha no Android — usar GitHub Actions ou REST API

### Notas operacionais
- Preferência: trio concreto (arquivo + ação + parâmetros)
- Sem entregar resultado novo quando repetir pedido
- Pages source = branch gh-pages (não artifact)
- Site HTML estático puro (não Next.js, sem package.json)
