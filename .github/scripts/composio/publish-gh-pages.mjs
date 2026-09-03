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
  'faq/index.html',
  'composio-vs-zapier/index.html',
  'login/index.html',
  'academy/index.html',
  'admin-dashboard/index.html',
  'pricing-calculator/index.html',
  'security/index.html',
  'ai/index.html',
  'ai-agents/index.html',
  'careers/index.html',
  'jobs/index.html',
  'docs/index.html',
  'legal/index.html',
  'about/index.html',
  'case-studies/index.html',
  'enterprise/index.html',
  'newsletter/index.html',
  'consulting/index.html',
  'discovery/index.html',
  'start/index.html',
  'get-started/index.html',
  'support/index.html',
  'help/index.html',
  'company/index.html',
  'sla/index.html',
  'automation/index.html',
  'industries/index.html',
  'cloud/index.html',
  'resources/index.html',
  'configurator/index.html',
  'agents-monitoring/index.html',
  'micro-saas/index.html',
  'lead-crm/index.html',
  'products/index.html',
  'roicalculator/index.html',
  'proposal/index.html',
  'integrations/index.html',
  'roadmap/index.html',
  'subscribe/index.html',
  'use-cases/index.html',
  'book/index.html',
  'plans/index.html',
  'heritage/index.html',
  'composio/index.html',
  'composio-vs-n8n-make/index.html',
  'paid-consultation/index.html',
  'success-stories/index.html',
  'stripe-payment-links/index.html',
  'contact/index.html',
  'pricing/index.html',
  'services/index.html',
  'blog/index.html',
  'marketplace/index.html',
  'monetization/index.html',
  'consultation/index.html',
  'free-consultation/index.html',
  'managed-it-services/index.html',
  'ai-consulting/index.html',
  'it-consulting/index.html',
  'partner-program/index.html',
  'affiliate-program/index.html',
  'msp-services/index.html',
  'it-support/index.html',
  'ai-automation/index.html',
  'ai-managed-services/index.html',
  'affiliates/index.html',
  'free-tools-hub/index.html',
  'services/ai-automation/index.html',
  'composio-automation-stack/index.html',
  'integrations/composio/index.html',
  'tools/index.html',
  'tools/json-formatter/index.html',
  'tools/qr-code-generator/index.html',
  'tools/phishing-analyzer/index.html',
  'free-ai-readiness-audit/index.html',
  'data-analytics/index.html',
  'devops-automation/index.html',
  'micro-saas-services/index.html',
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

  // GitHub Pages is serving public/ when that folder exists. Write both roots.
  const upserts = [];
  for (const path of FILES) {
    const content = readFileSync(new URL(`../../../${path}`, import.meta.url), 'utf8');
    upserts.push({ path, content, encoding: 'utf-8' });
    upserts.push({ path: `public/${path}`, content, encoding: 'utf-8' });
  }
  upserts.push({ path: 'public/.nojekyll', content: '', encoding: 'utf-8' });
  upserts.push({ path: 'public/CNAME', content: 'ziontechgroup.com\n', encoding: 'utf-8' });

  const commit = await executeTool('github', 'GITHUB_COMMIT_MULTIPLE_FILES', {
    owner: OWNER,
    repo: REPO,
    branch: BRANCH,
    message: 'fix(pages): restore Discovery homepage and kill stale service aliases',
    upserts,
  }, active);
  console.log('commit', commit.ok ? 'ok' : commit.error);

  const pages = await executeTool('github', 'GITHUB_CREATE_OR_UPDATE_GITHUB_PAGES_SITE', {
    owner: OWNER,
    repo: REPO,
    cname: 'ziontechgroup.com',
    build_type: 'legacy',
    source_branch: 'gh-pages',
    source_path: '/',
  }, active);
  console.log('pages source', pages.ok ? (pages.data?.source || 'ok') : pages.error);

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
