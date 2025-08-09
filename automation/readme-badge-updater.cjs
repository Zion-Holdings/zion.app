#!/usr/bin/env node
/* Update README.md with repo stats badges. Creates README if missing. */
const fs = require('fs');
const https = require('https');

const repo = process.env.GITHUB_REPOSITORY || 'Zion-Holdings/zion.app';
const token = process.env.GITHUB_TOKEN || process.env.INPUT_GITHUB_TOKEN || '';

function ghGetJson(route){
  const opts = { hostname: 'api.github.com', path: route, method: 'GET', headers: {'User-Agent':'zion-automations','Accept':'application/vnd.github+json'} };
  if (token) opts.headers.Authorization = `Bearer ${token}`;
  return new Promise((resolve, reject) => {
    const req = https.request(opts, res => { let body=''; res.on('data', d=> body+=d); res.on('end', ()=> {
      if (res.statusCode >=200 && res.statusCode <300){ try{ resolve(JSON.parse(body)); }catch(e){ reject(e);} } else { reject(new Error(body)); }
    }); });
    req.on('error', reject); req.end();
  });
}

async function main(){
  const [issues, pulls, repoInfo] = await Promise.all([
    ghGetJson(`/repos/${repo}/issues?state=open&per_page=1`),
    ghGetJson(`/repos/${repo}/pulls?state=open&per_page=1`),
    ghGetJson(`/repos/${repo}`)
  ]);
  // GitHub API returns a list for issues; we need counts via repoInfo.open_issues_count includes PRs; we'll approximate using pulls length for display.
  const openIssues = repoInfo.open_issues_count;
  const openPRs = Array.isArray(pulls) ? pulls.length : 0; // note: only page-size placeholder
  const updatedAt = new Date(repoInfo.updated_at).toISOString().slice(0,10);

  const badges = `<!-- AUTO_BADGES_START -->\n![Open Issues](https://img.shields.io/github/issues/${repo}.svg) ![Open PRs](https://img.shields.io/github/issues-pr/${repo}.svg) ![Last Updated](https://img.shields.io/badge/updated-${updatedAt}-blue)\n<!-- AUTO_BADGES_END -->`;

  let readme = '';
  try { readme = fs.readFileSync('README.md','utf8'); } catch{ readme = '# Zion OS\n\n' + badges + '\n'; }
  if (/<!-- AUTO_BADGES_START -->[\s\S]*?<!-- AUTO_BADGES_END -->/m.test(readme)){
    readme = readme.replace(/<!-- AUTO_BADGES_START -->[\s\S]*?<!-- AUTO_BADGES_END -->/m, badges);
  } else {
    readme = badges + '\n\n' + readme;
  }
  fs.writeFileSync('README.md', readme);
  console.log('README badges updated');
}

main().catch(e=>{ console.error(e); process.exit(1); });