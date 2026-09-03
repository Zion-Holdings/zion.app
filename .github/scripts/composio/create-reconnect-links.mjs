/**
 * Mint short-lived Composio Connect Links for expired-only toolkits
 * onto kleber@ziontechgroup.com. Prints redirect URLs (≈10 min TTL).
 * Does not write URLs to git. Optional Slack notify if --slack.
 */
import { composioFetch, discoverZionConnections } from './discover-connections.mjs';

const USER = process.env.ZION_USER_ID || 'kleber@ziontechgroup.com';
const AUTH = {
  hubspot: 'ac_RfR0aCEDSDbE',
  jira: 'ac_L3C6yoVWQNOI',
  nocrm_io: 'ac_KxL62U7nPZ-0',
  perplexityai: 'ac_Qzqbke9J1o0r',
};

async function run() {
  const { inventory } = await discoverZionConnections();
  const links = [];
  for (const [toolkit, auth_config_id] of Object.entries(AUTH)) {
    const hasActive = inventory.activeToolkits.includes(toolkit);
    if (hasActive) {
      console.log(`skip ${toolkit}: already ACTIVE`);
      continue;
    }
    const { ok, status, data } = await composioFetch('/connected_accounts/link', {
      method: 'POST',
      body: { auth_config_id, user_id: USER },
    });
    const url = data.redirect_url || data.redirectUrl;
    console.log(`${toolkit} ${status} ${url || JSON.stringify(data).slice(0, 200)} expires ${data.expires_at || '?'}`);
    if (ok && url) links.push({ toolkit, url, expires_at: data.expires_at });
  }
  const notify = process.argv.includes('--slack') || process.argv.includes('--notify');
  if (notify && links.length) {
    const { executeTool, newestActiveByToolkit, listAllConnectedAccounts } = await import('./discover-connections.mjs');
    const active = newestActiveByToolkit(await listAllConnectedAccounts());
    const md = [
      '*Composio Connect Links* (~10 min TTL) — open as kleber@ziontechgroup.com',
      ...links.map((l) => `• ${l.toolkit}: ${l.url}`),
      'After authorize, ACTIVE must land on kleber@ — not a playground row.',
    ].join('\n');
    const slack = await executeTool('slack', 'SLACK_SEND_MESSAGE', { channel: 'C9375BEBA', markdown_text: md }, active);
    const telegram = await executeTool('telegram', 'TELEGRAM_SEND_MESSAGE', {
      chat_id: '-1003886112318',
      text: md.replace(/\*/g, ''),
      disable_web_page_preview: false,
    }, active);
    const resend = await executeTool('resend', 'RESEND_SEND_EMAIL', {
      from: 'Zion Tech Group <noreply@ziontechgroup.com>',
      to: ['kleber@ziontechgroup.com'],
      subject: '[Zion] Fresh Composio Connect Links (~10 min)',
      text: md.replace(/\*/g, ''),
    }, active);
    console.log('notify', { slack: slack.ok, telegram: telegram.ok, resend: resend.ok });
  }
  return links;
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
