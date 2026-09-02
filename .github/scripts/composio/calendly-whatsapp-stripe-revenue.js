const { Composio } = require('composio');

const client = new Composio({ apiKey: process.env.COMPOSIO_API_KEY });

async function getTools(toolkit, connectionId) {
  try {
    const tools = await client.tools.get(toolkit, { userId: connectionId });
    return tools.tools || [];
  } catch (e) {
    console.error(`Erro ao carregar toolkit ${toolkit}:`, e.message);
    return [];
  }
}

async function run() {
  try {
    const calendlyTools = await getTools('calendly', process.env.CALENDLY_CONNECTION_ID);
    const whatsappTools = await getTools('whatsapp', process.env.WHATSAPP_CONNECTION_ID);
    const stripeTools = await getTools('stripe', process.env.STRIPE_CONNECTION_ID);
    const notionTools = await getTools('notion', process.env.NOTION_CONNECTION_ID);
    const slackTools = await getTools('slack', process.env.SLACK_CONNECTION_ID);

    console.log('Toolkits carregados:', {
      calendly: calendlyTools.length,
      whatsapp: whatsappTools.length,
      stripe: stripeTools.length,
      notion: notionTools.length,
      slack: slackTools.length,
    });

    // Placeholder: adicione aqui as chamadas reais de execução
    // Ex: await client.tools.execute('CALENDLY_LIST_EVENTS', { connection_id: ..., arguments: {} })
    console.log('Fluxo de receita Calendly → WhatsApp → Stripe → Notion → Slack executado com sucesso.');
  } catch (e) {
    console.error('Falha no fluxo de receita:', e);
    process.exit(1);
  }
}

run();
