import { Composio } from 'composio';

const composio = Composio({ apiKey: process.env.COMPOSIO_API_KEY });

async function logPipeline() {
  const notion = await composio.connectedAccounts.get(process.env.NOTION_CONNECTION_ID);
  
  const opportunities = [
    { title: 'AI Customer Support Pilot - Prospect A', stage: 'Discovery', value: '$5,000' },
    { title: 'Managed IT Services - Prospect B', stage: 'Proposal', value: '$3,000/mo' },
    { title: 'Cloud Migration - Prospect C', stage: 'Negotiation', value: '$15,000' }
  ];

  for (const opp in opportunities) {
    try {
      const result = await composio.tools.execute('notion', 'create_page', {
        connectionId: process.env.NOTION_CONNECTION_ID,
        params: {
          database_id: process.env.NOTION_OPPORTUNITIES_DB_ID,
          properties: {
            title: { title: [{ text: { content: opportunities[opp].title }] },
            Stage: { select: { name: opportunities[opp].stage } },
            Value: { number: parseFloat(opportunities[opp].value.replace(/[^0-9.]/g, '')) }
          }
        }
      });
      console.log(`Logged to Notion: ${opportunities[opp].title}`);
    } catch (err) {
      console.error(`Failed to log ${opportunities[opp].title}:`, err.message);
    }
  }
}

logPipeline();
