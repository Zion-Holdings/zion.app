// netlify/functions/revenue-ideas-lab.js
exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    // Run revenue ideas agents to generate proposals and actions
    execSync('node automation/revenue-ideas-agents/generate_paid_consultation_booking_component.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/revenue-ideas-agents/add_newsletter_paywall_teaser_on_long_posts.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/revenue-ideas-agents/introduce_pricing_cta_sections_on_high_traffic_pages.cjs || true', { stdio: 'inherit', shell: true });

    // Update front/home promos to surface revenue ideas
    execSync('node automation/homepage-auto-advertiser.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/front-index-auto-advertiser.cjs || true', { stdio: 'inherit', shell: true });

    // Sync changes back to the repository
    execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "feat(autonomy): revenue ideas lab updates [ci skip]" || true) && (git push origin main || true)', { stdio: 'inherit', shell: true });

    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'revenue-ideas-lab' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};

exports.config = {
  schedule: '*/10 * * * *',
};