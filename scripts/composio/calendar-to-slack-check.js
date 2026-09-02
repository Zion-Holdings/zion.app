const { Composio } = require('@composio/core');
(async () => {
  const composio = new Composio({ apiKey: process.env.COMPOSIO_API_KEY });
  const cal = await composio.connectedAccounts.list({ toolkitSlug: 'googlecalendar' });
  const slack = await composio.connectedAccounts.list({ toolkitSlug: 'slack' });
  console.log('Calendar accounts:', cal.items?.map(i => i.id));
  console.log('Slack accounts:', slack.items?.map(i => i.id));
})();
