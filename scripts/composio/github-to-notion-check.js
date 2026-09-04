const { Composio } = require('@composio/core');
(async () => {
  const composio = new Composio({ apiKey: process.env.COMPOSIO_API_KEY });
  const gh = await composio.connectedAccounts.list({ toolkitSlug: 'github' });
  const notion = await composio.connectedAccounts.list({ toolkitSlug: 'notion' });
  console.log('GitHub accounts:', gh.items?.map(i => i.id));
  console.log('Notion accounts:', notion.items?.map(i => i.id));
})();
