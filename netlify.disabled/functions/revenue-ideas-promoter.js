const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.config = {
  schedule: '41 */4 * * *', // every 4 hours
};

exports.handler = async () => {
  const logs = [];
  function logStep(name, fn) {
    logs.push(`\n=== ${name} ===`);
    const { status, stdout, stderr } = fn();
    if (stdout) logs.push(stdout);
    if (stderr) logs.push(stderr);
    logs.push(`exit=${status}`);
    return status;
  }

  // Run a suite of revenue ideas agents to enrich pages with monetization CTAs
  const agents = [
    'automation/revenue-ideas-agents/add_contact_sales_cta_on_enterprise_pages.cjs',
    'automation/revenue-ideas-agents/introduce_pricing_cta_sections_on_high_traffic_pages.cjs',
    'automation/revenue-ideas-agents/add_newsletter_paywall_teaser_on_long_posts.cjs',
    'automation/revenue-ideas-agents/create_affiliate_link_wrappers_for_blog_posts.cjs',
    'automation/revenue-ideas-agents/generate_paid_consultation_booking_component.cjs'
  ];

  for (const agent of agents) {
    logStep(`revenue:agent:${path.basename(agent)}`, () => runNode(agent));
  }

  // Attempt to push any changes
  logStep('git:sync', () => runNode('automation/advanced-git-sync.cjs'));

  return { statusCode: 200, body: logs.join('\n') };
};