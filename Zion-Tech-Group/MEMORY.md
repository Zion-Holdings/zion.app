# Zion Tech Group — Memory & Status

## Última atualização: 2026-09-03T03:30 UTC

### Repositório
- **main:** db927ec301d (fix: skip out/ copying root HTML pages)
- **gh-pages:** sincronizado via Actions (build_and_deploy.yml)
- **Branches ativas:** content-loop-exponential, content-wave-20260824003707, hero-carousel, malta-pages-restore, site-audit-fixes
- **Não commitado:** lead-crm/miner_health.json, miner_health_history.json, miner_log.json, outreach_monitor/, ceo-status.json

### Site Live
- Homepage, services, tools, blog, contact, about, ai, health — todos 200
- ziontechgroup.com → HTTP 200 ✓
- Rotas monetização LIVE: /pricing, /checkout, /booking, /affiliate
- 404s: /service-comparison/, /testimonials/, /tools/2026-ma-due-diligence-checklist/, /monetization-hub/
- 325 páginas no repo

### Lead CRM & Outreach
- 1933 leads em all-leads.json
- 693 contatos outreach-ready
- Minerador: último run 2026-09-03T00:00-03:00, exit_code 0, 11 queries, 0 contacts, 0 new
- Nota: "High-frequency run completed without emails sent."
- Envio bloqueado: send_verification_result.json indica blocked_by_config_or_env
- Monitor: 52 inbox_interest (3 ticks), 0 hot_followup sent

### Composio
- Workflows em .github/workflows/composio-zion-master.yml
- Secrets: COMPOSIO_API_KEY, CALENDLY, WHATSAPP, STRIPE, RESEND, 1PASSWORD
- CLI falha no Android — usar GitHub Actions ou REST API

### Próximos passos críticos
1. Investigar 0 contatos no minerador (rate-limit/mudança API)
2. Corrigir 4 rotas 404
3. Desbloquear envio no lead-crm (blocked_by_config_or_env)
4. Mesclar branches com conteúdo pronto (content-loop-exponential)
5. Ativar monetização: Stripe, Calendly, WhatsApp Business

### Notas operacionais
- Browser indisponível em Android/Termux
- Sempre entregar resultado novo quando repetir pedido
- Sem status loops ou silence patterns
- Preferência: trio concreto (arquivo + ação + parâmetros)
- Gateway rodando (PID 12900)
