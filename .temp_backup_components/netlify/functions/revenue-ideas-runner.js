const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.config = {
  schedule: '0 */2 * * *',
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

  logStep('revenue:consultation', () => runNode('automation/revenue-ideas-agents/generate_paid_consultation_booking_component.cjs'));
  logStep('revenue:pricing-cta', () => runNode('automation/revenue-ideas-agents/introduce_pricing_cta_sections_on_high_traffic_pages.cjs'));
  logStep('revenue:contact-sales', () => runNode('automation/revenue-ideas-agents/add_contact_sales_cta_on_enterprise_pages.cjs'));
  logStep('revenue:newsletter-paywall', () => runNode('automation/revenue-ideas-agents/add_newsletter_paywall_teaser_on_long_posts.cjs'));
  logStep('revenue:affiliate-wrappers', () => runNode('automation/revenue-ideas-agents/create_affiliate_link_wrappers_for_blog_posts.cjs'));

  // Sync results back to repository
  logStep('git:sync', () => runNode('automation/advanced-git-sync.cjs'));

  return { statusCode: 200, body: logs.join('\n') };
};