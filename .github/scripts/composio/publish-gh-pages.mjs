/**
 * Publish selected static files to origin/gh-pages via Composio GitHub.
 * Live Pages source is legacy / gh-pages — PR merge is not enough.
 */
import { readFileSync } from 'node:fs';
import { discoverZionConnections, executeTool, composioFetch } from './discover-connections.mjs';

const OWNER = 'Zion-support';
const REPO = 'zion-support.github.io';
const BRANCH = 'gh-pages';

const FILES = [
  'index.html',
  'robots.txt',
  'sitemap.xml',
  'llms.txt',
  'privacy/index.html',
  'terms/index.html',
  'cookies/index.html',
  'health/index.html',
  'ai-services/index.html',
  'affiliate/index.html',
  'partners/index.html',
  'dashboard/index.html',
  'growth/index.html',
  'press/index.html',
  'portal/index.html',
  'status/index.html',
];

async function main() {
  const { active, inventory } = await discoverZionConnections();
  console.log(JSON.stringify({
    activeToolkits: inventory.activeToolkits,
    expiredOrFailed: inventory.expiredOrFailedToolkits,
    kleberHint: 'check user_id separately',
  }, null, 2));

  const schema = await composioFetch('/tools/GITHUB_COMMIT_MULTIPLE_FILES');
  const props = schema.data?.input_parameters?.properties || schema.data?.parameters?.properties || {};
  console.log('commit schema keys', Object.keys(props));

  const upserts = FILES.map((path) => ({
    path,
    content: readFileSync(new URL(`../../../${path}`, import.meta.url), 'utf8'),
    encoding: 'utf-8',
  }));

  const commit = await executeTool('github', 'GITHUB_COMMIT_MULTIPLE_FILES', {
    owner: OWNER,
    repo: REPO,
    branch: BRANCH,
    message: 'fix(pages): legal, sitemap, honest partners, remaining 404s',
    upserts,
  }, active);
  console.log('commit', commit.ok ? 'ok' : commit.error);

  const build = await executeTool('github', 'GITHUB_REQUEST_A_GITHUB_PAGES_BUILD', {
    owner: OWNER,
    repo: REPO,
  }, active);
  console.log('pages build', build.ok ? 'requested' : build.error);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
