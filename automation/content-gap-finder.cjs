#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

const STOP = new Set(('a,an,the,and,or,for,of,to,in,on,with,by,from,as,at,be,are,is,was,were,will,can,if,then,else,this,that,these,those,our,your,their,about,into,over,under,after,before,not,do,does,did,done,have,has,had,more,most,less,least,very,just,it,its,also,how,what,why,when,where,who,which,vs,via,per,one,two,three,using,use,used,new,auto,cloud,app').split(','));

function ensureDir(dirPath) { fs.mkdirSync(dirPath, { recursive: true }); }
function read(file) { try { return fs.readFileSync(file, 'utf8'); } catch { return ''; } }

function tokenize(text) {
  return (text.toLowerCase().replace(/[^a-z0-9_\-\s]/g, ' ').split(/\s+/).filter(Boolean));
}

function topKeywords(corpus, n = 50) {
  const freq = new Map();
  for (const doc of corpus) {
    const seen = new Set();
    for (const tok of tokenize(doc)) {
      if (STOP.has(tok)) continue;
      if (tok.length < 3) continue;
      if (seen.has(tok)) continue;
      seen.add(tok);
      freq.set(tok, (freq.get(tok) || 0) + 1);
    }
  }
  const arr = Array.from(freq.entries()).sort((a,b)=>b[1]-a[1]);
  return arr.slice(0, n).map(([term, count]) => ({ term, count }));
}

async function main() {
  const root = process.cwd();
  const pageFiles = await glob(['pages/**/*.{tsx,jsx,ts,js,md,mdx}'], { cwd: root, nodir: true, ignore: ['**/_*.*','**/api/**'] });
  const docFiles = await glob(['docs/**/*.{md,mdx}'], { cwd: root, nodir: true });

  const pagesCorpus = pageFiles.map(f => read(path.join(root,f))).filter(Boolean);
  const docsCorpus = docFiles.map(f => read(path.join(root,f))).filter(Boolean);

  const pageTop = topKeywords(pagesCorpus, 80);
  const docsTop = topKeywords(docsCorpus, 80);

  const docsSet = new Set(docsTop.map(k => k.term));
  const gaps = pageTop.filter(k => !docsSet.has(k.term)).slice(0, 30);

  const out = {
    generatedAt: new Date().toISOString(),
    pageKeywordLeaders: pageTop,
    docsKeywordLeaders: docsTop,
    suggestedTopics: gaps,
  };

  const outDir = path.join(root, 'public', 'reports', 'content-gaps');
  ensureDir(outDir);
  fs.writeFileSync(path.join(outDir, 'latest.json'), JSON.stringify(out, null, 2), 'utf8');
  fs.writeFileSync(path.join(outDir, 'index.html'), `<!doctype html><meta charset="utf-8"><title>Content Gap Finder</title><style>body{font-family:system-ui;padding:24px;max-width:880px;margin:auto;background:#0b1020;color:#e6e9ef} h1,h2{color:#fff} code{background:#111827;padding:2px 4px;border-radius:4px}</style><h1>Content Gap Finder</h1><p>Generated at ${out.generatedAt}</p><h2>Suggested Topics</h2><ol>${out.suggestedTopics.map(t=>`<li><code>${t.term}</code> (${t.count})</li>`).join('')}</ol>`, 'utf8');

  console.log('Content gap analysis complete.');
}

main().catch(err => { console.error(err); process.exit(1); });