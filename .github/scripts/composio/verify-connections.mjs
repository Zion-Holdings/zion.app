import { Composio } from '@composio/core';

const composio = new Composio({ apiKey: process.env.COMPOSIO_API_KEY });
const connections = {
  calendly: process.env.COMPOSIO_CALENDLY_CONNECTION_ID,
  whatsapp: process.env.COMPOSIO_WHATSAPP_CONNECTION_ID,
  stripe: process.env.COMPOSIO_STRIPE_CONNECTION_ID,
  resend: process.env.COMPOSIO_RESEND_CONNECTION_ID,
  brevo: process.env.COMPOSIO_BREVO_CONNECTION_ID,
  firecrawl: process.env.COMPOSIO_FIRECRAWL_CONNECTION_ID,
  serpapi: process.env.COMPOSIO_SERPAPI_CONNECTION_ID,
  tavily: process.env.COMPOSIO_TAVILY_CONNECTION_ID,
  onepassword: process.env.COMPOSIO_1PASSWORD_CONNECTION_ID,
};

async function verify() {
  const results = {};
  for (const [name, id] of Object.entries(connections)) {
    if (!id) {
      results[name] = { status: 'skipped', reason: 'no connection id' };
      continue;
    }
    try {
      const tools = await composio.getTools({ connectionIds: [id], userId: 'zion-verify' });
      results[name] = { status: 'ok', tool_count: tools.length };
    } catch (e) {
      results[name] = { status: 'error', message: e.message };
    }
  }
  console.log(JSON.stringify(results, null, 2));
}

verify().catch((err) => {
  console.error('FATAL:', err);
  process.exit(1);
});
