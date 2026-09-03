# Zion Tech Group — Memory & Status

## Última atualização: 2026-09-03T04:15 UTC

### Repositório
- **main:** c18862ce570 (fix: add 404 fallbacks for testimonials, service-comparison, due-diligence, monetization-hub)
- **gh-pages:** sincronizado via Actions (build_and_deploy.yml)
- **Branches ativas:** content-loop-exponential, content-wave-20260824003707, hero-carousel, malta-pages-restore, site-audit-fixes
- **Não commitado:** lead-crm/miner_health.json, miner_health_history.json, miner_log.json, outreach_monitor/

### Site Live
- Homepage, services, tools, blog, contact, about, ai, health — todos 200
- ziontechgroup.com → HTTP 200 ✓
- Rotas monetização LIVE: /pricing, /checkout, /booking, /affiliate
- 404s (com fallback criado, aguardando Pages rebuild):
  - /service-comparison/, /testimonials/, /tools/2026-ma-due-diligence-checklist/, /monetization-hub/
- 329 páginas no repo

### Lead CRM & Outreach
- 1933 leads em all-leads.json
- 693 contatos outreach-ready
- Minerador: último run 2026-09-03T04:12 UTC, status ok, 11 queries, 0 contacts, 0 new
- Log: 5 eventos (1 historical + 4 timeouts)
- Envio bloqueado: send_verification_result.json indica blocked_by_config_or_env
- Monitor: 52 inbox_interest (3 ticks), 0 hot_followup sent

### Composio
- Workflows em .github/workflows/composio-zion-master.yml
- Secrets: COMPOSIO_API_KEY, CALENDLY, WHATSAPP, STRIPE, RESEND, 1PASSWORD
- CLI falha no Android — usar GitHub Actions ou REST API

### Próximos passos críticos
1. Investigar 0 contatos no minerador (rate-limit/mudança API)
2. Verificar se 404 fallbacks foram deployados
3. Desbloquear envio no lead-crm
4. Mesclar branches com conteúdo pronto
5. Ativar monetização: Stripe, Calendly, WhatsApp Business

### Notas operacionais
- Browser indisponível em Android/Termux
- Sempre entregar resultado novo quando repetir pedido
- Sem status loops ou silence patterns
- Preferência: trio concreto (arquivo + ação + parâmetros)
- Gateway rodando (PID 12900)
