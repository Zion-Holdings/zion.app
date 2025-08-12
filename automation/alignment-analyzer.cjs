#!/usr/bin/env node
/*
 Alignment Analyzer
 - Reads latest chat, doc, and site crawl
 - Produces an action plan highlighting gaps between desired topics and site
*/

const fs = require('fs-extra');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const publicDir = path.join(repoRoot, 'public', 'reports', 'alignment');

function tryReadJson(p){ try { return fs.readJsonSync(p); } catch { return null; } }

function tokenize(text){
  const stop = new Set(['the','and','of','to','a','in','for','on','is','it','that','as','with','are','be','this','by','or','from','an','at','we','you','your','our','can','will','not','have','has','was','were','but','about']);
  return (text||'')
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g,' ')
    .split(/\s+/)
    .filter(w => w && !stop.has(w) && w.length > 2);
}

function topKeywords(text, limit){
  const freq = new Map();
  for (const w of tokenize(text)) freq.set(w, (freq.get(w)||0)+1);
  return [...freq.entries()].sort((a,b)=>b[1]-a[1]).slice(0, limit).map(([w])=>w);
}

function buildPlan(chat, doc, site){
  const chatText = chat?.conversation?.text || (chat?.conversation?.messages||[]).map(m=>m.content).join(' ') || '';
  const docText = doc?.doc?.text || '';
  const siteText = (site?.pages||[]).map(p=>`${p.title} ${p.h1} ${p.desc} ${p.text||''}`).join(' ');

  const desired = new Set([ ...topKeywords(chatText, 80), ...topKeywords(docText, 80) ]);
  const present = new Set(topKeywords(siteText, 200));
  const gaps = [...desired].filter(k => !present.has(k));

  const tasks = gaps.slice(0, 50).map((kw, i) => ({
    id: `gap-${i+1}`,
    type: 'content-gap',
    keyword: kw,
    recommendation: `Create or enhance a section/page featuring "${kw}". Consider homepage promos and internal links.`,
    suggestedScripts: [
      'npm run homepage:update',
      'npm run front:directory',
      'npm run front:continuous'
    ]
  }));

  // Detect broken/error pages in crawl
  for (const p of site?.pages || []) {
    if (p.error) {
      tasks.push({
        id: `fix-${Buffer.from(p.url).toString('base64').slice(0,8)}`,
        type: 'page-error',
        url: p.url,
        recommendation: `Investigate and fix fetch error for ${p.url}.`,
        suggestedScripts: [ 'npm run links:scan' ]
      });
    }
  }

  // Summaries
  const summary = {
    totals: {
      sitePages: site?.pages?.length || 0,
      desiredKeywords: desired.size,
      presentKeywords: present.size,
      gapCount: gaps.length,
      taskCount: tasks.length
    },
    topDesired: [...desired].slice(0, 50)
  };

  return { summary, tasks };
}

async function main(){
  await fs.mkdirs(publicDir);
  const chat = tryReadJson(path.join(publicDir,'chat-latest.json'));
  const doc = tryReadJson(path.join(publicDir,'doc-latest.json'));
  const site = tryReadJson(path.join(publicDir,'site-latest.json'));

  const plan = buildPlan(chat, doc, site);
  await fs.writeJson(path.join(publicDir,'plan-latest.json'), plan, { spaces: 2 });
  await fs.writeJson(path.join(publicDir,'summary-latest.json'), plan.summary, { spaces: 2 });
  console.log('[alignment-analyzer] Wrote plan-latest.json and summary-latest.json');
}

main().catch(err=>{ console.error('[alignment-analyzer] Error:', err); process.exitCode=1; });


