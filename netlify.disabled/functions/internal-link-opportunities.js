exports.handler = async function() {
  const fs = require('fs');
  const path = require('path');
  const { execSync } = require('child_process');

  function listFiles(dir, exts) {
    const results = [];
    function walk(current) {
      const entries = fs.readdirSync(current, { withFileTypes: true });
      for (const entry of entries) {
        const full = path.join(current, entry.name);
        if (entry.isDirectory()) {
          // skip some directories
          if (/^\.|node_modules|.next|out|public|data|automation|netlify\/functions|docs\/reports/.test(entry.name)) continue;
          walk(full);
        } else if (exts.includes(path.extname(entry.name))) {
          results.push(full);
        }
      }
    }
    try { walk(dir); } catch (_) {}
    return results;
  }

  function readText(filePath) {
    try { return fs.readFileSync(filePath, 'utf8'); } catch { return ''; }
  }

  function toSlug(filePath) {
    const rel = filePath.replace(path.resolve(process.cwd()), '').replace(/^\//, '');
    if (rel.startsWith('pages/')) {
      let p = rel.replace(/^pages\//, '').replace(/index\.(tsx|ts|jsx|js)$/i, '').replace(/\.(tsx|ts|jsx|js)$/i, '');
      if (!p) return '/';
      if (!p.startsWith('/')) p = '/' + p;
      return p;
    }
    return '/';
  }

  const STOPWORDS = new Set(('a,an,the,and,or,of,to,in,on,for,with,by,as,at,from,that,this,these,those,be,have,has,had,do,does,did,not,are,is,was,were,it,its,into,our,your,we,you,us,they,them,can,will,may,should,would,about,more,most,less,least,over,under,again,ever,never,also,just,than,then,so,such,which,within,without,across,between,via,per'.split(',')));

  function extractWords(text) {
    const noCode = text
      .replace(/<[^>]+>/g, ' ') // jsx tags
      .replace(/[`'"\-_.]/g, ' ') // punctuation
      .replace(/\{[^}]*\}/g, ' ') // braces content
      .replace(/\([^)]+\)/g, ' ') // parentheses
      .toLowerCase();
    const words = noCode.match(/[a-z][a-z0-9]{2,}/g) || [];
    const filtered = words.filter(w => !STOPWORDS.has(w) && w.length > 2);
    return filtered;
  }

  function topTerms(words, k = 20) {
    const map = new Map();
    for (const w of words) map.set(w, (map.get(w) || 0) + 1);
    return Array.from(map.entries()).sort((a,b) => b[1]-a[1]).slice(0, k).map(([term, score]) => ({ term, score }));
  }

  function jaccard(a, b) {
    const A = new Set(a);
    const B = new Set(b);
    let inter = 0;
    for (const x of A) if (B.has(x)) inter++;
    const union = A.size + B.size - inter;
    return union ? inter / union : 0;
  }

  try {
    const root = process.cwd();
    const pageFiles = listFiles(path.join(root, 'pages'), ['.tsx', '.ts', '.jsx', '.js']).filter(f => !/api\//.test(f));
    const docs = pageFiles.map(f => {
      const text = readText(f);
      const words = extractWords(text);
      const slug = toSlug(f);
      const terms = topTerms(words, 30);
      return { slug, file: path.relative(root, f), terms, words };
    }).filter(d => d.slug);

    // Build link map
    const fileToContent = new Map(pageFiles.map(f => [f, readText(f)]));
    function hasLink(fromFile, toSlug) {
      const content = fileToContent.get(fromFile) || '';
      return content.includes(`href=\"${toSlug}\"`) || content.includes(`href=\'${toSlug}\'`) || content.includes(`Link href=\"${toSlug}\"`) || content.includes(`Link href=\'${toSlug}\'`);
    }

    const opportunities = [];
    for (let i = 0; i < docs.length; i++) {
      for (let j = 0; j < docs.length; j++) {
        if (i === j) continue;
        const A = docs[i];
        const B = docs[j];
        if (A.slug === '/' || B.slug === '/') continue;
        const sim = jaccard(A.terms.map(t => t.term), B.terms.map(t => t.term));
        if (sim >= 0.22 && !hasLink(A.file, B.slug)) {
          opportunities.push({ from: A.slug, to: B.slug, score: Number(sim.toFixed(3)) });
        }
      }
    }

    // Rank per from
    const byFrom = new Map();
    for (const opp of opportunities) {
      const arr = byFrom.get(opp.from) || [];
      arr.push(opp);
      byFrom.set(opp.from, arr);
    }

    const ranked = Array.from(byFrom.entries()).map(([from, arr]) => {
      return { from, suggestions: arr.sort((a,b) => b.score - a.score).slice(0, 8) };
    }).sort((a,b) => b.suggestions.length - a.suggestions.length);

    const outDir = path.join(root, 'public', 'reports', 'internal-links');
    fs.mkdirSync(outDir, { recursive: true });

    const jsonPath = path.join(outDir, 'opportunities.json');
    fs.writeFileSync(jsonPath, JSON.stringify({ generatedAt: new Date().toISOString(), pages: ranked }, null, 2));

    // Simple HTML report
    const htmlPath = path.join(outDir, 'index.html');
    const html = `<!doctype html><html><head><meta charset="utf-8"/><title>Internal Link Opportunities</title><meta name="viewport" content="width=device-width, initial-scale=1"/><style>body{font-family:ui-sans-serif,system-ui,Arial;padding:24px;background:#0b1220;color:#e5e7eb}a{color:#67e8f9;text-decoration:none}section{margin:16px 0;padding:16px;border:1px solid #1f2937;border-radius:12px;background:#111827}h1{margin:0 0 12px;font-size:20px}ul{margin:8px 0 0 20px}small{color:#9ca3af}</style></head><body><h1>Internal Link Opportunities</h1><small>Generated ${new Date().toISOString()}</small>${ranked.map(r => `<section><div><strong>${r.from}</strong></div><ul>${r.suggestions.map(s => `<li><a href="${s.to}">${s.to}</a> <small>(${s.score})</small></li>`).join('')}</ul></section>`).join('')}</body></html>`;
    fs.writeFileSync(htmlPath, html);

    // Commit and push
    try {
      execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app"', { stdio: 'inherit', shell: true });
      execSync('git add -A', { stdio: 'inherit', shell: true });
      execSync('git commit -m "feat(automation): internal link opportunities report [skip ci]" || true', { stdio: 'inherit', shell: true });
      execSync('git push origin main || true', { stdio: 'inherit', shell: true });
    } catch (_) {}

    return { statusCode: 200, body: JSON.stringify({ ok: true, pages: ranked.length }) };
  } catch (err) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(err && err.stack || err) }) };
  }
};