import { Composio } from 'composio';

const composio = Composio({ apiKey: process.env.COMPOSIO_API_KEY });

async function notifySales() {
  const slack = await composio.connectedAccounts.get(process.env.SLACK_CONNECTION_ID);
  
  try {
    const result = await composio.tools.execute('slack', 'send_message', {
      connectionId: process.env.SLACK_CONNECTION_ID,
      params: {
        channel: process.env.SLACK_SALES_CHANNEL || '#sales',
        text: '🚀 New revenue pipeline update: 3 new opportunities logged in Notion. Total pipeline value: $23,000+'
      }
    });
    console.log('Slack notification sent:', result.success ? 'OK' : 'FAILED');
  } catch (err) {
    console.error('Failed to send Slack notification:', err.message);
  }
}

notifySales();
