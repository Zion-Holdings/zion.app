# Zion Tech Group — Memory & Status

## Última atualização: 2026-09-03T09:30 UTC

### Identidade
- CEO: Kleber Garcia Alcatrão
- Company: Zion Tech Group
- Contato: kleber@ziontechgroup.com | Telegram: -1003886112318

### Repositório
- **main:** commit mais recente 41a4e9959c1
- **gh-pages:** LIVE
- **Branches ativas:** content-loop-exponential, content-wave-20260824003707, hero-carousel, malta-pages-restore, site-audit-fixes

### Site Live
- Homepage → HTTP 200 ✓
- Sitemap → HTTP 200 ✓
- **NOVO modelo de negócio**: 4 ofertas ativas via /book/, /plans/, /services/
  - Discovery $99, Consulting $499, Starter $2,500, Growth $8,000/mo
- **Rotas antigas REMOVIDAS intencionalmente** (não são mais 404s críticos):
  - /testimonials, /service-comparison, /tools/2026-ma-due-diligence-checklist, /monetization-hub
  - /about, /contact, /blog, /pricing, /cookie-policy, /privacy, /terms, /assessments, /help
- HTTP behavior: inconsistente entre edge nodes do CDN (200/404/301)
- Página 404 customizada informa remoção das rotas antigas

### Lead CRM & Outreach (DADOS REAIS)
- **138 leads** em all-leads.json (status: discovered)
- **0 outreach-ready** (todos estacionaram em discovered)
- Miner: 12 queries/ciclo, 0 contacts, 0 new, avg ~9.75s/query, status ok
- Envio bloqueado: blocked_no_outreach_ready_leads
- Monitor: 52 inbox_interest, 0 hot_followup sent

### Composio
- Workflows em .github/workflows/composio-zion-master.yml
- CLI falha no Android — usar GitHub Actions

### Próximos passos
1. Ajustar queries do minerador para qualificar leads (discovered → outreach-ready)
2. Validar se all-leads.json é o dataset completo
3. Acompanhar métricas das 4 ofertas ativas (/book/ e /plans/)

### Notas
- Preferência: trio concreto (arquivo + ação + parâmetros)
- Browser indisponível em Android/Termux
- Sem status loops ou silence patterns
- Rotas 404 antigos NÃO são problema de deploy — foram removidas de propósito
