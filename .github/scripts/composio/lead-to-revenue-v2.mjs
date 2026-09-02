import { discoverZionConnections, executeTool } from './discover-connections.mjs';

async function run() {
  const ts = new Date().toISOString();
  console.log(`\n═══ ZION LEAD-TO-REVENUE v3 (auto-discover) — ${ts} ═══\n`);

  const { active } = await discoverZionConnections();
  const summary = { timestamp: ts, leads: [], notifications: [] };

  console.log('→ Gmail: recent threads');
  const gmail = await executeTool('gmail', 'GMAIL_FETCH_EMAILS', { max_results: 10, query: 'newer_than:7d' }, active);
  summary.leads.push({ type: 'gmail', count: gmail.ok ? (gmail.data?.messages || []).length : 0, ok: gmail.ok });

  console.log('→ Notion: Zion pages');
  const notion = await executeTool('notion', 'NOTION_SEARCH_NOTION_PAGE', { query: 'Zion', page_size: 10 }, active);
  summary.leads.push({ type: 'notion', count: notion.ok ? (notion.data?.results || []).length : 0, ok: notion.ok });

  console.log('→ Linear: open issues');
  const linear = await executeTool('linear', 'LINEAR_LIST_LINEAR_ISSUES', { first: 15 }, active);
  summary.leads.push({ type: 'linear', count: linear.ok ? (linear.data?.issues || []).length : 0, ok: linear.ok });

  console.log('→ Hunter: account quota');
  const hunter = await executeTool('hunter', 'HUNTER_ACCOUNT_INFORMATION', {}, active);
  summary.leads.push({ type: 'hunter', remaining: hunter.data?.searches?.remaining ?? null, ok: hunter.ok });

  if (active.hubspot) {
    console.log('→ HubSpot: contacts');
    const contacts = await executeTool('hubspot', 'HUBSPOT_FETCH_CONTACTS', { limit: 20 }, active);
    summary.leads.push({ type: 'hubspot_contacts', count: contacts.ok ? (contacts.data?.data || []).length : 0, ok: contacts.ok });
  } else {
    summary.leads.push({ type: 'hubspot', skipped: true, reason: 'all HubSpot connections are EXPIRED' });
  }

  const slackMsg = `Zion Lead Update (${ts.slice(0, 10)})
Gmail: ${summary.leads.find((l) => l.type === 'gmail')?.count ?? 'n/a'}
Notion: ${summary.leads.find((l) => l.type === 'notion')?.count ?? 'n/a'}
Linear: ${summary.leads.find((l) => l.type === 'linear')?.count ?? 'n/a'}
HubSpot: ${active.hubspot ? 'ACTIVE' : 'EXPIRED — reconnect required'}`;

  if (active.slack) {
    console.log('→ Slack: support channel');
    const slack = await executeTool('slack', 'SLACK_SEND_MESSAGE', {
      channel: process.env.SLACK_CHANNEL || 'C9375BEBA',
      markdown_text: slackMsg,
    }, active);
    summary.notifications.push({ channel: 'slack', ok: slack.ok });
  }

  console.log('\n═══ LEAD-TO-REVENUE COMPLETE ═══');
  console.log(JSON.stringify(summary, null, 2));
  return summary;
}

run().catch((error) => {
  console.error('FATAL:', error);
  process.exit(1);
});
