const https = require('https');
const fs = require('fs');
const path = require('path');
const token = fs.readFileSync(path.join(process.env.USERPROFILE, '.gh_token'), 'utf8').trim();
const r = https.request({
  hostname: 'api.github.com',
  path: '/repos/Zion-support/zion-support.github.io/pages',
  method: 'GET',
  headers: {
    Authorization: `token ${token}`,
    Accept: 'application/vnd.github+json',
    'User-Agent': 'Hermes-Agent'
  }
}, res => {
  let raw = '';
  res.on('data', d => raw += d);
  res.on('end', () => console.log(raw));
});
r.on('error', e => console.error(e.message));
r.end();
