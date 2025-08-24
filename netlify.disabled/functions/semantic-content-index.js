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

  function read(filePath) { try { return fs.readFileSync(filePath, 'utf8'); } catch { return ''; } }
  function toSlug(filePath) {
    const rel = filePath.replace(/^.*?pages\//, '').replace(/index\.(tsx|ts|jsx|js)$/i, '').replace(/\.(tsx|ts|jsx|js)$/i, '');
    return ('/' + rel).replace(/\\/g, '/').replace(/\/\/+/g, '/');
  }

  const STOP = new Set(('a,an,the,and,or,of,to,in,on,for,with,by,as,at,from,that,this,these,those,be,have,has,had,do,does,did,not,are,is,was,were,it,its,our,can,will,may,should,would,about,more,most,less,least,over,under,again,also,just,than,then,so,such,which,within,without,across,between,via,per,into,near,each,any,all'.split(',')));
  function tokenize(text) {
    const t = text
      .replace(/<[^>]+>/g, ' ')
      .replace(/\{[^}]*\}/g, ' ')
      .replace(/[`'"\-_.]/g, ' ')
      .toLowerCase();
    const words = t.match(/[a-z][a-z0-9]{2,}/g) || [];
    return words.filter(w => !STOP.has(w));
  }

  try {
    const root = process.cwd();
    const files = listFiles(path.join(root, 'pages'), ['.tsx', '.ts', '.jsx', '.js']).filter(f => !/api\//.test(f));
    const docs = files.map(f => ({ slug: toSlug(f), file: path.relative(root, f), words: tokenize(read(f)) }));

    // Build document frequencies
    const df = new Map();
    for (const d of docs) {
      const seen = new Set(d.words);
      for (const w of seen) df.set(w, (df.get(w) || 0) + 1);
    }
    const N = docs.length || 1;

    const index = docs.map(d => {
      const tf = new Map();
      for (const w of d.words) tf.set(w, (tf.get(w) || 0) + 1);
      const scored = Array.from(tf.entries()).map(([w, f]) => {
        const idf = Math.log((N + 1) / ((df.get(w) || 0) + 1));
        return { term: w, score: Number((f * idf).toFixed(4)) };
      }).sort((a,b) => b.score - a.score).slice(0, 40);
      return { slug: d.slug, file: d.file, keywords: scored };
    });

    const outDir = path.join(root, 'public', 'search');
    fs.mkdirSync(outDir, { recursive: true });
    const outPath = path.join(outDir, 'semantic-index.json');
    fs.writeFileSync(outPath, JSON.stringify({ generatedAt: new Date().toISOString(), documents: index }, null, 2));

    try {
      execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app"', { stdio: 'inherit', shell: true });
      execSync('git add -A', { stdio: 'inherit', shell: true });
      execSync('git commit -m "feat(search): semantic content index generated [skip ci]" || true', { stdio: 'inherit', shell: true });
      execSync('git push origin main || true', { stdio: 'inherit', shell: true });
    } catch (_) {}

    return { statusCode: 200, body: JSON.stringify({ ok: true, documents: index.length }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e && e.stack || e) }) };
  }
};