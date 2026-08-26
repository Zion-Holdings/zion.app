const https = require('https');
const fs = require('fs');
const { URL } = require('url');

const seen = new Set();
const sources = [
  'https://ziontechgroup.com',
  'https://ziontechgroup.com/tools/',
  'https://ziontechgroup.com/sitemap.xml',
];
const errors = [];
const toolUrls = [];
const extraUrls = [];

function sleep(ms){ return new Promise((res)=>setTimeout(res,ms)); }
function get(url){
  return new Promise((resolve)=>{
    const req = https.get(url, {headers:{'User-Agent':'Hermes-Crawler'}}, (res)=>{
      let b=''; res.on('data', c=>b+=c); res.on('end', ()=>resolve({status:res.statusCode, buffer:b}));
    });
    req.on('error', ()=>resolve({status:0, buffer:''}));
    req.setTimeout(10000, ()=>{req.destroy(); resolve({status:0, buffer:''});});
  });
}
function resolveHref(raw, origin) {
  try {
    const u = new URL(raw, origin);
    if (!u.hostname || u.hostname === 'ziontechgroup.com' || u.hostname.endsWith('.ziontechgroup.com')) return u.href;
  } catch {}
  return null;
}
function parseLinks(body, origin) {
  const out = new Set();
  try {
    const doc = new (require('url').URL)(origin);
  } catch {}
  const r1 = /href="([^"#].*?)"/g;
  for (const m of body.matchAll(r1)) {
    const resolved = resolveHref(m[1], origin);
    if (resolved) out.add(resolved);
  }
  const r2 = /href="\/([^"#][^"]*)"/g;
  for (const m of body.matchAll(r2)) {
    const p = decodeURIComponent(m[1]);
    if (p.startsWith('_next/static/') || p.includes('#')) continue;
    out.add('https://ziontechgroup.com/' + p);
  }
  return [...out];
}

(async ()=>{
  const queue = [];
  for (const origin of sources) queue.push(origin);
  const sampled = [];
  while (queue.length) {
    const url = queue.shift();
    if (seen.has(url)) continue;
    seen.add(url);
    try {
      const { status, buffer } = await get(url);
      sampled.push({url, status});
      if (status === 404 && !url.includes('_next')) errors.push({url, status});
      if (!buffer) continue;
      if (url.endsWith('/sitemap.xml')) {
        const urls = (buffer.match(/<loc>(.*?)<\/loc>/g)||[]).map(x=>x.replace(/<loc>|<\/loc>/g,''));
        extraUrls.push(...urls.slice(0,120));
        continue;
      }
      const links = parseLinks(buffer, url);
      for (const link of links) {
        if (link.includes('/tools/')) toolUrls.push(link);
        if (!seen.has(link)) queue.push(link);
      }
    } catch (e) { errors.push({url, error: e.message}); }
    if (sampled.length > 120) break;
  }
  const report = {
    checkedAt: new Date().toISOString(),
    sampled: sampled.length,
    errors,
    toolUrls: toolUrls,
    extraTested: extraUrls.slice(0,80),
    sampleStatuses: sampled.slice(0,120),
  };
  fs.writeFileSync('C:/Users/Zion/zion-support.github.io/automation/reports/live-crawl-latest.json', JSON.stringify(report, null, 2));
  console.log(JSON.stringify({sampled: sampled.length, errors, toolUrls: toolUrls.slice(0,10), extraTested: extraUrls.slice(0,10)}));
})();
