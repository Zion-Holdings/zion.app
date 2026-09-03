/**
 * Zion Composio Maximize Engine
 * Auto-discovers every ACTIVE connected toolkit and runs a verified read playbook.
 * Does not depend on COMPOSIO_*_CONNECTION_ID secrets.
 */
import fs from 'node:fs';
import path from 'node:path';
import { discoverZionConnections, executeTool } from './discover-connections.mjs';

const PLAYBOOK = [
  { toolkit: 'github', tool: 'GITHUB_GET_THE_AUTHENTICATED_USER', args: {} },
  { toolkit: 'calendly', tool: 'CALENDLY_GET_CURRENT_USER', args: {} },
  { toolkit: 'resend', tool: 'RESEND_LIST_WEBHOOKS', args: {} },
  { toolkit: 'resend', tool: 'RESEND_LIST_AUDIENCES', args: {} },
  { toolkit: 'stripe', tool: 'STRIPE_LIST_PRODUCTS', args: { limit: 20 } },
  { toolkit: 'stripe', tool: 'STRIPE_LIST_CHARGES', args: { limit: 10 } },
  { toolkit: 'stripe', tool: 'STRIPE_LIST_CUSTOMERS', args: { limit: 10 } },
  { toolkit: 'resend', tool: 'RESEND_LIST_DOMAINS', args: {} },
  { toolkit: 'gmail', tool: 'GMAIL_FETCH_EMAILS', args: { max_results: 5, query: 'newer_than:7d' } },
  { toolkit: 'notion', tool: 'NOTION_SEARCH_NOTION_PAGE', args: { query: 'Zion', page_size: 10 } },
  { toolkit: 'slack', tool: 'SLACK_LIST_ALL_CHANNELS', args: { limit: 30, exclude_archived: true } },
  { toolkit: 'linear', tool: 'LINEAR_LIST_LINEAR_ISSUES', args: { first: 10 } },
  { toolkit: 'tavily', tool: 'TAVILY_SEARCH', args: { query: 'AI automation agency competitors Europe 2026', max_results: 5, include_answer: true } },
  // SerpAPI / Hunter / OpenRouter quotas are exhausted — skip so scheduled
  // maximize does not keep 429/402ing. Re-enable after credits are topped up.
  { toolkit: 'telegram', tool: 'TELEGRAM_GET_ME', args: {} },
  { toolkit: 'telegram', tool: 'TELEGRAM_GET_UPDATES', args: { limit: 5 } },
  { toolkit: 'googlesheets', tool: 'GOOGLESHEETS_GET_SHEET_NAMES', args: { spreadsheet_id: '1RE4UUTu9AOTvH_gZPECjIhT3ye561Z01NF2QEzgd_cY' } },
  { toolkit: 'airtable', tool: 'AIRTABLE_GET_BASE_SCHEMA', args: { baseId: 'appsO95N9PqNEuwUX' } },
  { toolkit: 'youtube', tool: 'YOUTUBE_LIST_CHANNEL_VIDEOS', args: { channelId: 'UCKrJNz3OqQ6Im9bQbJko7Ug', maxResults: 11 } },
  { toolkit: 'instagram', tool: 'INSTAGRAM_GET_USER_INSIGHTS', args: { ig_user_id: '27786273507741648', metric: ['reach', 'profile_views', 'website_clicks'], period: 'day', since: '2026-08-26', until: '2026-09-02' } },
  { toolkit: 'ninox', tool: 'NINOX_GET_DATABASES', args: { team_id: 'wxqWQrgFhMysSM99M' } },
  { toolkit: 'cursor', tool: 'CURSOR_LIST_AGENTS', args: { limit: 10 } },
  { toolkit: 'linkedin', tool: 'LINKEDIN_GET_MY_INFO', args: {} },
  { toolkit: 'instagram', tool: 'INSTAGRAM_GET_USER_INFO', args: {} },
  { toolkit: 'instagram', tool: 'INSTAGRAM_GET_IG_USER_MEDIA', args: { ig_user_id: '27786273507741648', limit: 5 } },
  { toolkit: 'github', tool: 'GITHUB_LIST_REPOSITORIES_FOR_THE_AUTHENTICATED_USER', args: { per_page: 10, sort: 'updated' } },
  { toolkit: 'discord', tool: 'DISCORD_LIST_MY_GUILDS', args: { with_counts: false } },
  { toolkit: 'googlecalendar', tool: 'GOOGLECALENDAR_EVENTS_LIST', args: { calendarId: 'primary', maxResults: 5, singleEvents: true, orderBy: 'startTime' } },
  { toolkit: 'youtube', tool: 'YOUTUBE_GET_CHANNEL_STATISTICS', args: { id: 'UCKrJNz3OqQ6Im9bQbJko7Ug' } },
  { toolkit: 'sentry', tool: 'SENTRY_GET_PROJECT_LIST', args: {} },
  { toolkit: 'sentry', tool: 'SENTRY_LIST_AN_ORGANIZATIONS_ISSUES', args: { organization_id_or_slug: 'zion-holdings', query: 'is:unresolved', limit: 5 } },
  { toolkit: 'github', tool: 'GITHUB_GET_PAGES_SITE', args: { owner: 'Zion-support', repo: 'zion-support.github.io' } },
  { toolkit: 'github', tool: 'GITHUB_GET_LATEST_PAGES_BUILD', args: { owner: 'Zion-support', repo: 'zion-support.github.io' } },
  { toolkit: 'cloudflare', tool: 'CLOUDFLARE_LIST_ZONES', args: { per_page: 5 } },
  { toolkit: 'supabase', tool: 'SUPABASE_LIST_ALL_PROJECTS', args: {} },
  { toolkit: 'airtable', tool: 'AIRTABLE_LIST_BASES', args: {} },
  { toolkit: 'googlecalendar', tool: 'GOOGLECALENDAR_LIST_CALENDARS', args: {} },
  { toolkit: 'cursor', tool: 'CURSOR_GET_ME', args: {} },
  { toolkit: 'hugging_face', tool: 'HUGGING_FACE_GET_WHOAMI', args: {} },
  { toolkit: 'discord', tool: 'DISCORD_GET_MY_USER', args: {} },
  { toolkit: 'ninox', tool: 'NINOX_LIST_TEAMS', args: {} },
  { toolkit: '_1password', tool: '_1PASSWORD_LIST_VAULTS', args: {} },
];

function compact(result) {
  if (!result?.data) return { ok: result.ok, error: result.error, skipped: result.skipped };
  const data = result.data;
  if (Array.isArray(data)) return { ok: true, count: data.length };
  if (typeof data !== 'object') return { ok: true };
  const keys = Object.keys(data);
  const summary = { ok: true, keys: keys.slice(0, 12) };
  for (const key of ['id', 'name', 'email', 'status', 'username', 'login', 'total_credits', 'plan_name']) {
    if (data[key] != null && typeof data[key] !== 'object') summary[key] = data[key];
  }
  for (const key of keys) {
    if (Array.isArray(data[key])) summary[`${key}_count`] = data[key].length;
  }
  return summary;
}

async function run() {
  const ts = new Date().toISOString();
  console.log(`\n═══ ZION COMPOSIO MAXIMIZE ENGINE — ${ts} ═══\n`);

  const { active, inventory } = await discoverZionConnections();
  console.log(`Accounts: ${inventory.totalAccounts}`);
  console.log(`ACTIVE toolkits (${inventory.activeToolkits.length}): ${inventory.activeToolkits.join(', ')}`);
  console.log(`No ACTIVE connection (${inventory.expiredOrFailedToolkits.length}): ${inventory.expiredOrFailedToolkits.join(', ')}`);

  const executions = [];
  for (const step of PLAYBOOK) {
    process.stdout.write(`→ ${step.toolkit.padEnd(16)} ${step.tool} `);
    const result = await executeTool(step.toolkit, step.tool, step.args, active);
    executions.push({ ...step, ...compact(result), http: result.http });
    console.log(result.skipped ? `SKIP ${result.reason}` : result.ok ? 'OK' : `FAIL ${JSON.stringify(result.error).slice(0, 120)}`);
  }

  const { restoreDiscoveryOnGhPages } = await import('./restore-discovery-on-gh-pages.mjs');
  const liveRestore = await restoreDiscoveryOnGhPages({ ifLeftover: true });
  console.log('live restore', liveRestore.skipped ? `SKIP ${liveRestore.reason}` : (liveRestore.ok ? `ok ${liveRestore.sha}` : `FAIL ${JSON.stringify(liveRestore.error).slice(0, 120)}`));

  const report = {
    timestamp: ts,
    engine: 'zion-composio-engine',
    inventory,
    activeToolkits: Object.keys(active).sort(),
    executions,
    liveRestore,
    healthScore: Math.round((inventory.activeToolkits.length / Math.max(1, inventory.activeToolkits.length + inventory.expiredOrFailedToolkits.length)) * 100),
  };

  const outDir = path.join(process.cwd(), 'automation', 'reports');
  fs.mkdirSync(outDir, { recursive: true });
  const outFile = path.join(outDir, 'composio-live-report.json');
  fs.writeFileSync(outFile, JSON.stringify(report, null, 2));
  console.log(`\nHealth score: ${report.healthScore}%`);
  console.log(`Report: ${outFile}`);
  return report;
}

run().catch((error) => {
  console.error('FATAL:', error);
  process.exit(1);
});
