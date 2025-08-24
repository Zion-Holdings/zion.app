const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.handler = async () => {
  const steps = [];
  const scripts = [
    'automation/revenue-ideas-agents/add_contact_sales_cta_on_enterprise_pages.cjs',
    'automation/revenue-ideas-agents/add_newsletter_paywall_teaser_on_long_posts.cjs',
    'automation/revenue-ideas-agents/create_affiliate_link_wrappers_for_blog_posts.cjs',
    'automation/revenue-ideas-agents/generate_paid_consultation_booking_component.cjs',
    'automation/revenue-ideas-agents/introduce_pricing_cta_sections_on_high_traffic_pages.cjs',
  ];

  for (const script of scripts) {
    const result = runNode(script);
    steps.push({ name: script, exit: result.status, stdout: result.stdout, stderr: result.stderr });
  }

  const sync = runNode('automation/advanced-git-sync.cjs');
  steps.push({ name: 'automation/advanced-git-sync.cjs', exit: sync.status, stdout: sync.stdout, stderr: sync.stderr });

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ triggeredAt: new Date().toISOString(), steps }, null, 2),
  };
};