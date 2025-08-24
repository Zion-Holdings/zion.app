// netlify/functions/revenue-ideas-orchestrator.js
exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    const agents = [
      'automation/revenue-ideas-agents/add_contact_sales_cta_on_enterprise_pages.cjs',
      'automation/revenue-ideas-agents/add_newsletter_paywall_teaser_on_long_posts.cjs',
      'automation/revenue-ideas-agents/create_affiliate_link_wrappers_for_blog_posts.cjs',
      'automation/revenue-ideas-agents/generate_paid_consultation_booking_component.cjs',
      'automation/revenue-ideas-agents/introduce_pricing_cta_sections_on_high_traffic_pages.cjs',
    ];
    for (const script of agents) {
      execSync(`node ${script} || true`, { stdio: 'inherit', shell: true });
    }
    execSync('node automation/git-sync.cjs || true', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'revenue-ideas-orchestrator' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};