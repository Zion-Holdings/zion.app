# Zion Tech Group — Memory & Status

## Última atualização: 2026-09-03T07:35 UTC

### Repositório
- **main:** 41a4e9959c1 (fix: correct lead stats)
- **gh-pages:** LIVE — last-modified 2026-09-03T05:36:05 GMT
- **Branches ativas:** content-loop-exponential, content-wave-20260824003707, hero-carousel, malta-pages-restore, site-audit-fixes

### Site Live
- Homepage → HTTP 200 ✓
- Sitemap → HTTP 200 ✓
- Rotas 404: /testimonials, /service-comparison, /tools/2026-ma-due-diligence-checklist, /monetization-hub

### Lead CRM & Outreach (DADOS REAIS — verificado)
- **138 leads** em all-leads.json (status: discovered)
- **0 outreach-ready** (todos estacionaram em discovered)
- Miner: 12 queries/ciclo, 0 contacts, 0 new, avg ~9.75s/query, status ok
- Envio bloqueado: blocked_no_outreach_ready_leads
- Monitor: 52 inbox_interest, 0 hot_followup sent
- AÇÃO NECESSÁRIA: Ajustar queries/critérios para avançar leads → outreach-ready

### Composio
- Workflows em .github/workflows/composio-zion-master.yml
- CLI falha no Android — usar GitHub Actions

### Próximos passos
1. Ajustar queries do minerador para qualificar leads (discovered → outreach-ready)
2. Corrigir 404s no deploy (peaceiris/actions-gh-pages@v4 flatten)
3. Validar se all-leads.json é o dataset completo

### Notas
- Preferência: trio concreto (arquivo + ação + parâmetros)
- Browser indisponível em Android/Termux
- Sem status loops ou silence patterns
