#!/usr/bin/env node
'use strict';

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const REPO = '/Users/klebergarciaalcatrao/zion-support.github.io';

function run(tool, payload = {}) {
  try {
    const cmd = ['composio', 'run', JSON.stringify({ tool, input: payload })];
    const out = execSync(cmd.join(' '), { encoding: 'utf8', timeout: 60000, cwd: REPO });
    let data;
    try { data = JSON.parse(out); } catch { data = { raw: out }; }
    return { ok: !data.error, data };
  } catch (e) {
    return { ok: false, error: e.message || String(e) };
  }
}

const ts = new Date().toISOString();
const outDir = path.join(REPO, 'automation', 'reports');
fs.mkdirSync(outDir, { recursive: true });

console.log('🚀 Composio Max Zion - Using all connected apps\n');

console.log('1️⃣ LINEAR — creating issue for site fixes');
const linear = run('LINEAR_CREATE_LINEAR_ISSUE', {
  team_id: 'a92e1670-db71-4cec-bb71-b3c647ca164b',
  title: `Site integrity fixes + expansion directive — ${ts}`,
  description: 'Automated: reduced internal broken links from 198 to 0, added favicon fallback, placeholder pages, category redirects. Pushed to gh-pages.',
  priority: 1,
});
console.log(JSON.stringify(linear, null, 2));

console.log('\n2️⃣ GITHUB — creating issue with audit results');
const github = run('GITHUB_CREATE_AN_ISSUE', {
  owner: 'Zion-support',
  repo: 'zion-support.github.io',
  title: `Site health audit: link fixes, missing pages, sitemap sync — ${ts}`,
  body: `Automated site integrity pass completed.\n\n- Internal broken links reduced from 198 to 0\n- Added favicon.ico -> favicon.svg fallback\n- Created missing pages: agents-monitoring, testimonials, sla, category pages\n- Updated _redirects with 200 fallbacks and 301 category mappings\n- sitemap.xml synchronized\n\nCommit: 8ed0b448ecf\nDeploy: gh-pages`,
});
console.log(JSON.stringify(github, null, 2));

console.log('\n3️⃣ GOOGLE ANALYTICS — fetching account summary');
const analytics = run('GOOGLE_ANALYTICS_LIST_ACCOUNT_SUMMARIES', {});
console.log(JSON.stringify(analytics, null, 2));

console.log('\n4️⃣ GOOGLE CALENDAR — listing calendars');
const calendar = run('GOOGLECALENDAR_LIST_CALENDARS', {});
console.log(JSON.stringify(calendar, null, 2));

console.log('\n5️⃣ GOOGLE SHEETS — searching Zion sheets');
const sheets = run('GOOGLESHEETS_SEARCH_SPREADSHEETS', { query: 'zion' });
console.log(JSON.stringify(sheets, null, 2));

console.log('\n6️⃣ CLOUDFLARE — listing zones');
const cloudflare = run('CLOUDFLARE_LIST_ZONES', {});
console.log(JSON.stringify(cloudflare, null, 2));

console.log('\n7️⃣ SENTRY — org details');
const sentry = run('SENTRY_GET_ORGANIZATION_DETAILS', {});
console.log(JSON.stringify(sentry, null, 2));

console.log('\n8️⃣ GMAIL — listing threads');
const gmail = run('GMAIL_LIST_THREADS', { max_results: 10 });
console.log(JSON.stringify(gmail, null, 2));

console.log('\n9️⃣ APOLLO — enrich sample lead');
const apollo = run('APOLLO_PEOPLE_ENRICHMENT', { q_keywords: 'ziontechgroup.com', person_titles: ['CTO', 'VP Engineering'] });
console.log(JSON.stringify(apollo, null, 2));

const report = {
  timestamp: ts,
  linear,
  github,
  analytics,
  calendar,
  sheets,
  cloudflare,
  sentry,
  gmail,
  apollo,
};

const outFile = path.join(outDir, `composio-maximize-${Date.now()}.json`);
fs.writeFileSync(outFile, JSON.stringify(report, null, 2));
console.log(`\n✅ Report saved: ${outFile}`);
