const fs = require('fs');
const path = require('path');
const https = require('https');

const repo = 'Zion-support/zion-support.github.io';
const tokenFile = path.join(process.env.USERPROFILE || process.env.HOME, '.gh_token');
const token = fs.readFileSync(tokenFile, 'utf8').trim();
const cwd = process.cwd();

async function request(method, urlPath, body) {
  return new Promise((resolve, reject) => {
    const payload = body ? JSON.stringify(body) : null;
    const req = https.request({
      hostname: 'api.github.com',
      path: urlPath,
      method,
      headers: {
        Authorization: `token ${token}`,
        Accept: 'application/vnd.github+json',
        'User-Agent': 'Hermes-Agent',
        ...(payload ? { 'Content-Type': 'application/json' } : {}),
      },
    }, res => {
      let raw = '';
      res.on('data', chunk => raw += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(raw)); }
        catch { resolve(raw); }
      });
    });
    req.on('error', reject);
    if (payload) req.write(payload);
    req.end();
  });
}

async function curl(url) {
  const { execSync } = require('child_process');
  try {
    const out = execSync(`curl -fsS -o /dev/null -w "%{http_code}" "${url}"`, { encoding: 'utf8', stdio: ['pipe','pipe','pipe'] });
    return out.trim();
  } catch (e) {
    return '000';
  }
}

(async () => {
  const pagesResp = await request('GET', `/repos/${repo}/pages`);
  const report = {
    verifiedAt: new Date().toISOString(),
    pages: {
      status: pagesResp.status,
      buildType: pagesResp.build_type,
      sourceBranch: pagesResp.source?.branch,
      htmlUrl: pagesResp.html_url,
      custom404: pagesResp.custom_404,
      httpsEnforced: pagesResp.https_enforced,
    },
    live: {
      home: await curl(pagesResp.html_url || 'https://ziontechgroup.com'),
      services: await curl((pagesResp.html_url || 'https://ziontechgroup.com') + '/services/'),
    },
    artifacts: {
      outIndex: fs.existsSync(path.join(cwd, 'out', 'index.html')),
      sitemap: fs.existsSync(path.join(cwd, 'out', 'sitemap.xml')),
    }
  };
  const outDir = path.join(cwd, 'automation', 'reports');
  fs.mkdirSync(outDir, { recursive: true });
  const outFile = path.join(outDir, 'deploy-verification-latest.json');
  fs.writeFileSync(outFile, JSON.stringify(report, null, 2));
  console.log('wrote', outFile);
  if (report.live.home === '200') {
    console.log('pages live OK');
  } else {
    console.log('pages live warn home=', report.live.home, 'services=', report.live.services);
  }
  process.exit(0);
})().catch(err => {
  console.error('verify-deploy failed:', err.message);
  process.exit(1);
});
