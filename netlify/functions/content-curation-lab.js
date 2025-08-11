// netlify/functions/content-curation-lab.js
exports.handler = async function() {
  const fs = require('fs');
  const path = require('path');
  const { execSync } = require('child_process');

  const nowIso = new Date().toISOString();

  function ensureDir(dirPath) { fs.mkdirSync(dirPath, { recursive: true }); }

  function run(cmd) {
    try { execSync(cmd, { stdio: 'inherit', shell: true }); } catch (e) { /* keep going */ }
  }

  try {
    // Update curated front indexes and README/search
    run('node automation/front-index-directory-builder.cjs || true');
    run('node automation/front-index-ads.cjs || true');
    run('node scripts/generate-readme.js || true');
    run('node scripts/generate-search-index.js || true');

    // Compose a small public registry of curated items
    const publicDir = path.join(process.cwd(), 'public', 'automation');
    ensureDir(publicDir);
    const registryPath = path.join(publicDir, 'content-curation-registry.json');
    const existing = fs.existsSync(registryPath) ? JSON.parse(fs.readFileSync(registryPath, 'utf8')) : { items: [] };
    const item = { id: nowIso, title: 'Curation refresh', actions: ['front-index', 'ads', 'readme', 'search'], at: nowIso };
    existing.items.unshift(item);
    existing.items = existing.items.slice(0, 50);
    fs.writeFileSync(registryPath, JSON.stringify(existing, null, 2));

    // Commit and push
    run('git config user.name "zion-bot" && git config user.email "bot@zion.app"');
    run(`git add -A && (git commit -m ${JSON.stringify('chore(curate): refresh curated content [ci skip]')} || true) && (git push origin main || true)`);

    return { statusCode: 200, body: JSON.stringify({ ok: true, registryPath }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};