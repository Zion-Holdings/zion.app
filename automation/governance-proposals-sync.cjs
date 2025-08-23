#!/usr/bin/env node
/*
  Fetch governance proposals from GitHub issues labeled `proposal` and write to data/governance/proposals.json
  Requires: GITHUB_TOKEN in env (provided by GitHub Actions)
*/

const fs = require('fs');
const path = require('path');
const https = require('https');

const repo = process.env.GITHUB_REPOSITORY || 'Zion-Holdings/zion.app';
const token = process.env.GITHUB_TOKEN || process.env.INPUT_GITHUB_TOKEN || '';

function ghGetJson(route){
  const opts = {
    hostname: 'api.github.com',
    path: route,
    method: 'GET',
    headers: {
      'User-Agent': 'zion-automations',
      'Accept': 'application/vnd.github+json'
    }
  };
  if (token) opts.headers.Authorization = `Bearer ${token}`;
  return new Promise((resolve, reject) => {
    const req = https.request(opts, res => {
      let body='';
      res.on('data', d => body += d);
      res.on('end', () => {
        if (res.statusCode && res.statusCode >= 200 && res.statusCode < 300) {
          try { resolve(JSON.parse(body)); } catch(e){ reject(e); }
        } else {
          reject(new Error(`GitHub API ${res.statusCode}: ${body}`));
        }
      });
    });
    req.on('error', reject);
    req.end();
  });
}

async function main(){
  const issues = await ghGetJson(`/repos/${repo}/issues?labels=proposal&state=open&per_page=100`);
  const proposals = issues.filter(i => !i.pull_request).map(i => ({
    id: i.number,
    title: i.title,
    url: i.html_url,
    author: i.user && i.user.login,
    created_at: i.created_at,
    comments: i.comments,
    labels: (i.labels||[]).map(l=>typeof l==='string'?l:l.name)
  }));

  const outDir = path.join(process.cwd(), 'data', 'governance');
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, 'proposals.json');
  fs.writeFileSync(outPath, JSON.stringify({ updatedAt: new Date().toISOString(), proposals }, null, 2));
  console.log(`Wrote ${proposals.length} proposals to ${outPath}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});