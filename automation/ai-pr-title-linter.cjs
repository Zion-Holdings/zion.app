#!/usr/bin/env node
/* Lint open PR titles and comment if they don't match Conventional Commits */
const https = require('https');

const repo = process.env.GITHUB_REPOSITORY;
const token = process.env.GITHUB_TOKEN;
if (!repo || !token){
  console.error('Missing GITHUB_REPOSITORY or GITHUB_TOKEN');
  process.exit(0);
}

function gh(route, method='GET', body){
  const opts = { hostname: 'api.github.com', path: route, method, headers: {
    'User-Agent':'zion-automations','Accept':'application/vnd.github+json','Authorization':`Bearer ${token}`
  }};
  return new Promise((resolve, reject) => {
    const req = https.request(opts, res => { let data=''; res.on('data', d=> data+=d); res.on('end', ()=> {
      try { resolve({ status: res.statusCode, data: JSON.parse(data||'{}') }); } catch{ resolve({ status: res.statusCode, data: {} }); }
    }); });
    req.on('error', reject);
    if (body){ req.write(JSON.stringify(body)); }
    req.end();
  });
}

const regex = /^(feat|fix|chore|docs|refactor|perf|test|build|ci|style)(\(.+\))?:\s.+/;

async function run(){
  const { data: pulls } = await gh(`/repos/${repo}/pulls?state=open&per_page=50`);
  for (const pr of pulls){
    if (!regex.test(pr.title)){
      await gh(`/repos/${repo}/issues/${pr.number}/comments`, 'POST', { body: `Please update the PR title to follow Conventional Commits, e.g. \`feat(scope): short description\`.` });
      console.log('Commented on PR', pr.number);
    }
  }
}

run().catch(e=>{ console.error(e); process.exit(1); });