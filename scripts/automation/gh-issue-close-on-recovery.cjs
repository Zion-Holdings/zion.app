const fs = require('fs');
const path = require('path');

/**
 * gh-issue-close-on-recovery.cjs
 * Checks if a GitHub issue should be closed based on recovery status.
 */
const GH_TOKEN = process.env.GH_TOKEN || process.env.GITHUB_TOKEN;
const REPO = process.env.GITHUB_REPOSITORY || 'Zion-support/zion-support.github.io';

async function checkAndClose() {
  if (!GH_TOKEN) {
    console.log('GH_TOKEN not available');
    process.exit(0);
  }
  
  const https = require('https');
  const url = `https://api.github.com/repos/${REPO}/issues?state=open&labels=recovered`;
  
  return new Promise((resolve) => {
    const req = https.get(url, {
      headers: {
        'Authorization': `Bearer ${GH_TOKEN}`,
        'Accept': 'application/vnd.github+json',
        'User-Agent': 'hermes-agent'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const issues = JSON.parse(data);
          console.log(`Found ${issues.length} issues with 'recovered' label`);
          resolve(issues);
        } catch {
          resolve([]);
        }
      });
    });
    req.on('error', () => resolve([]));
    req.setTimeout(10000, () => { req.destroy(); resolve([]); });
  });
}

module.exports = { checkAndClose };

if (require.main === module) {
  checkAndClose().then(() => process.exit(0));
}
