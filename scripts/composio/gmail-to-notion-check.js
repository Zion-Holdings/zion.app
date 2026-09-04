const { Composio } = require('@composio/core');
(async () => {
  const composio = new Composio({ apiKey: process.env.COMPOSIO_API_KEY });
  const gmail = await composio.connectedAccounts.list({ toolkitSlug: 'gmail' });
  const notion = await composio.connectedAccounts.list({ toolkitSlug: 'notion' });
  console.log('Gmail accounts:', gmail.items?.map(i => i.id));
  console.log('Notion accounts:', notion.items?.map(i => i.id));
})();
