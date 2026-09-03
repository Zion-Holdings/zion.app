# Zion Monetization Execution Checklist

Ações necessárias para concluir monetização. Cada item tem um responsável humano, pois cria contas/assinaturas externas.

## Contas obrigatórias
- [ ] Stripe: criar conta em https://dashboard.stripe.com/register
- [ ] HubSpot: criar conta em https://app.hubspot.com/signup
- [ ] Calendly: confirmar plano pago em https://calendly.com/pricing
- [ ] Resend: criar conta em https://resend.com/signup
- [ ] WhatsApp Business API: ativar em https://business.whatsapp.com/
- [ ] Composio: conectar apps faltantes no dashboard https://app.composio.dev/
  - [ ] HubSpot
  - [ ] Gmail
  - [ ] Notion
  - [ ] Slack
  - [ ] SendGrid
  - [ ] ActiveCampaign

## Secrets a atualizar no GitHub após conexões
- [ ] COMPOSIO_HUBSPOT_CONNECTION_ID
- [ ] COMPOSIO_GMAIL_CONNECTION_ID
- [ ] COMPOSIO_NOTION_CONNECTION_ID
- [ ] COMPOSIO_SLACK_CONNECTION_ID
- [ ] COMPOSIO_SENDGRID_CONNECTION_ID
- [ ] COMPOSIO_ACTIVECAMPAIGN_CONNECTION_ID

## Workflows a habilitar/validar
- [ ] Disparar manualmente: composio-zion-master.yml
- [ ] Validar run e corrigir erros
- [ ] Após sucesso, habilitar schedule diário/semanal conforme necessidade

## Páginas a verificar ao vivo
- [ ] /ai-saas-monetization/
- [ ] /managed-soc-pricing/
- [ ] /partner-program/
- [ ] /ai-revenue-automation-services/
- [ ] /ai-customer-support-automation/
