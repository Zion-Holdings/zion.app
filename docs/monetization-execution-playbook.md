# Zion Tech Group — Monetization Execution Playbook

## Stack atual recomendado
- Agendamento: Calendly `kleber-ziontechgroup`
- Pagamentos: Stripe / buy.stripe.com
- CRM: HubSpot
- Notificações: Resend, SendGrid, WhatsApp
- Automação: Composio workflows + GitHub Actions

## Fluxo 1: Lead → Consultoria
1. Lead chega por formulário, WhatsApp ou Cold Email
2. Composio cria/atualiza deal no HubSpot
3. Calendly envia link de agendamento
4. No booking, workflow envia confirmação por WhatsApp + email Resend/SendGrid
5. Faturamento via Stripe Payment Link ou Checkout

## Fluxo 2: Assinatura/SaaS
1. Cliente escolhe plano Starter/Growth
2. Cobrança via Stripe Billing/Checkout
3. webhook atualiza HubSpot e Notion
4. Resend envia invoice/notificação

## Fluxo 3: Parcerias
1. Preenche `/partnerships/`
2. HubSpot cria partnership deal
3. Notion registra terms + contacts
4. Follow-up por WhatsApp + email

## Próximas ações executáveis
- Conectar HubSpot, Gmail, Notion, Slack, SendGrid, ActiveCampaign no Composio
- Ativar workflows: composio-calendly-whatsapp-stripe-revenue e composio-hubspot-lead-monetization
- Publicar payment links no pricing e nos CTAs
- Disparar primeiro outreach para 3–5 empresas por dia
