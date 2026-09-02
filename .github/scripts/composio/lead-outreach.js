import { Composio } from 'composio';

const composio = Composio({ apiKey: process.env.COMPOSIO_API_KEY });

async function sendOutreach() {
  const gmail = await composio.connectedAccounts.get(process.env.GMAIL_CONNECTION_ID);
  
  const leads = [
    { to: 'prospect@example.com', subject: 'AI/IT Services Proposal - Zion Tech Group', body: 'Hi,\n\nWe specialize in AI, cloud, and cybersecurity services. Can we schedule a 15-min call?\n\nBest,\nZion Tech Group' },
    { to: 'partner@example.com', subject: 'Partnership Opportunity - Zion Tech Group', body: 'Hi,\n\nWe are looking for technology partners. Are you open to a collaboration?\n\nBest,\nZion Tech Group' }
  ];

  for (const lead of leads) {
    try {
      const result = await composio.tools.execute('gmail', 'send_email', {
        connectionId: process.env.GMAIL_CONNECTION_ID,
        params: {
          to: lead.to,
          subject: lead.subject,
          body: lead.body
        }
      });
      console.log(`Sent to ${lead.to}:`, result.success ? 'OK' : 'FAILED');
    } catch (err) {
      console.error(`Failed to send to ${lead.to}:`, err.message);
    }
  }
}

sendOutreach();
