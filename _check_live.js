const https = require('https');
const paths = ['/success-stories','/use-cases','/tools/ai-quick-audit','/tools/phishing-analyzer','/industries'];
Promise.all(paths.map(path => new Promise(resolve => {
  https.get({ hostname: 'ziontechgroup.com', path, rejectUnauthorized: false }, res => {
    let d = '';
    res.on('data', c => d += c);
    res.on('end', () => resolve({ path, code: res.statusCode, body: d.slice(0,120).replace(/\n/g,' ') }));
  }).on('error', e => resolve({ path, code: 'err', body: e.message }));
})))
.then(results => results.forEach(x => console.log(x.path, x.code, x.body)));
