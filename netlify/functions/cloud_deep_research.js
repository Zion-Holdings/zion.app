// netlify/functions/cloud_deep_research.js
exports.config = { schedule: '*/3 * * * *' };

exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node automation/cloud-site-crawler.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/cloud-deep-research-factory.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/cloud-playbook-factory.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/cloud-blueprint-factory.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/cloud-content-advertiser.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/docs-pages-indexer.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/front-index-directory-builder.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/front-index-advertiser.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/homepage-updater.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/advanced-git-sync.cjs || node automation/git-sync.cjs || true', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: 'cloud_deep_research: ok' };
  } catch (e) {
    return { statusCode: 200, body: 'cloud_deep_research: error ' + String(e) };
  }
};

// netlify/functions/cloud_deep_research.js
exports.config = { schedule: '*/3 * * * *' };

exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node automation/cloud-site-crawler.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/cloud-deep-research-factory.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/cloud-content-advertiser.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/docs-pages-indexer.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/front-index-directory-builder.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/front-index-advertiser.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/homepage-updater.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/advanced-git-sync.cjs || node automation/git-sync.cjs || true', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: 'cloud_deep_research: ok' };
  } catch (e) {
    return { statusCode: 200, body: 'cloud_deep_research: error ' + String(e) };
  }
};


