exports.config = { schedule: '*/5 * * * *' };

exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    // Crawl and fix links
    execSync('node automation/site-link-crawler.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/site-link-fixer.cjs || true', { stdio: 'inherit', shell: true });

    // Scan and fix broken images
    execSync('node automation/broken-image-scanner.cjs || true', { stdio: 'inherit', shell: true });

    // Optimize media and regenerate OG images
    execSync('node automation/og-image-generator.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/optimize-images.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/image-optimizer.cjs || true', { stdio: 'inherit', shell: true });

    // Commit and push changes
    execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "chore(auto-heal): links + media optimization [skip ci]" || true) && (git push origin main || true)', { stdio: 'inherit', shell: true });

    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'auto-heal-and-optimize' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};