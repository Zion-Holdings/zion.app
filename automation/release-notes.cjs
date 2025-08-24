#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function getLatestTag(){
  try { return execSync('git describe --tags --abbrev=0', { encoding:'utf8' }).trim(); } catch { return null; }
}
function getCommitsSince(tag){
  const range = tag ? `${tag}..HEAD` : '';
  try {
    const raw = execSync(`git log ${range} --pretty=format:%h||%s||%an||%ad --date=short`, { encoding:'utf8' });
    return raw.split('\n').filter(Boolean).map(l=>{ const [h,s,a,d]=l.split('||'); return {h,s,a,d}; });
  } catch { return []; }
}
function render(tag, commits){
  const now = new Date().toISOString().slice(0,10);
  const lines = [`# Release Notes (${now})`, tag ? `Since tag: ${tag}` : 'Initial release notes', ''];
  const groups = { Features:[], Fixes:[], Docs:[], Chore:[], Refactor:[], Other:[] };
  for(const c of commits){
    const s=c.s||'';
    if(/^feat/i.test(s)) groups.Features.push(c);
    else if(/^fix/i.test(s)) groups.Fixes.push(c);
    else if(/^docs/i.test(s)) groups.Docs.push(c);
    else if(/^chore/i.test(s)) groups.Chore.push(c);
    else if(/^refactor/i.test(s)) groups.Refactor.push(c);
    else groups.Other.push(c);
  }
  for(const [k,arr] of Object.entries(groups)){
    if(!arr.length) continue;
    lines.push(`## ${k}`);
    for(const c of arr){ lines.push(`- ${c.s} (${c.h}, ${c.d})`); }
    lines.push('');
  }
  return lines.join('\n');
}
(function main(){
  const tag=getLatestTag();
  const commits=getCommitsSince(tag);
  const out=render(tag, commits);
  const outDir=path.join(process.cwd(),'docs');
  if(!fs.existsSync(outDir)) fs.mkdirSync(outDir,{recursive:true});
  fs.writeFileSync(path.join(outDir,'RELEASE_NOTES.md'), out);
  console.log('Wrote docs/RELEASE_NOTES.md');
})();