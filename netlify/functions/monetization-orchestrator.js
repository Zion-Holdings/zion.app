const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relativePath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relativePath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.config = {
  schedule: '*/15 * * * *',
};

exports.handler = async () => {
  const logs = [];
  function step(name, rel, args = []) {
    logs.push(`\n=== ${name} ===`);
    const { status, stdout, stderr } = runNode(rel, args);
    if (stdout) logs.push(stdout);
    if (stderr) logs.push(stderr);
    logs.push(`exit=${status}`);
    return status;
  }

  // Run a suite of revenue idea agents
  step('revenue:add_contact_sales_cta', 'automation/revenue-ideas-agents/add_contact_sales_cta_on_enterprise_pages.cjs');
  step('revenue:add_newsletter_paywall_teaser', 'automation/revenue-ideas-agents/add_newsletter_paywall_teaser_on_long_posts.cjs');
  step('revenue:create_affiliate_link_wrappers', 'automation/revenue-ideas-agents/create_affiliate_link_wrappers_for_blog_posts.cjs');
  step('revenue:generate_paid_consultation_component', 'automation/revenue-ideas-agents/generate_paid_consultation_booking_component.cjs');
  step('revenue:introduce_pricing_cta_sections', 'automation/revenue-ideas-agents/introduce_pricing_cta_sections_on_high_traffic_pages.cjs');

  step('git:sync', 'automation/advanced-git-sync.cjs');

  return { statusCode: 200, headers: { 'content-type': 'text/plain' }, body: logs.join('\n') };
};