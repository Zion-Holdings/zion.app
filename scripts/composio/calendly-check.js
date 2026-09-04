const { Composio } = require('@composio/core');
(async () => {
  const composio = new Composio({ apiKey: process.env.COMPOSIO_API_KEY });
  const cal = await composio.connectedAccounts.list({ toolkitSlug: 'calendly' });
  console.log('Calendly accounts:', cal.items?.map(i => i.id));
})();
