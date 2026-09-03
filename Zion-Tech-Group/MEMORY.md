# Zion Tech Group — Memory & Status

## Última atualização: 2026-09-03

### Repositório
- **main:** ddc4b92 (monetization hub + SEO pages + .gitignore update)
- **gh-pages:** a7042ee (sync via Actions)
- **Branches ativas:** content-loop-exponential, content-wave-20260824003707, hero-carousel, malta-pages-restore, site-audit-fixes

### Site Live
- Homepage, services, tools, blog, contact, about, ai, health — todos 200
- Monetization hub: /monetization, /pricing, /payment-success, /payment-cancelled, /digital-transformation, /managed-soc-pricing, /ai-voice-customer-service

### Lead CRM & Outreach
- 1933 leads em all-leads.json
- 138 contatos qualidade (mined_contact_quality.jsonl)
- Minerador: timeouts frequentes em queries longas (subject:AI services, platform engineering)
- Envio bloqueado: send_verification_result.json indica blocked_by_config_or_env
- Email interaction agent: última execução 2026-08-24, 0 emails não lidos

### Composio
- Workflows em .github/workflows/composio-zion-master.yml
- Secrets: COMPOSIO_API_KEY, CALENDLY, WHATSAPP, STRIPE, RESEND, 1PASSWORD
- CLI falha no Android — usar GitHub Actions ou REST API

### Próximos passos críticos
1. Ajustar Pages source → Deploy from branch (ou Actions sync)
2. Desbloquear envio no lead-crm (verificar send_verification_result.json)
3. Mesclar branches com conteúdo pronto (content-loop-exponential)
4. Ativar monetização: Stripe, Calendly, WhatsApp Business (dashboard humano)

### Notas operacionais
- Browser indisponível em Android/Termux — não pedir ao usuário para visitar sites
- Sempre entregar resultado novo quando repetir pedido (novas rotas, novo conteúdo, nova automação)
- Sem status loops ou silence patterns
- Preferência: trio concreto (arquivo + ação + parâmetros)
