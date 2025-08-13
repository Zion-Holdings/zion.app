'use strict';

const fs = require('fs');
const path = require('path');

function readYamlName(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const match = content.match(/^name:\s*(.+)$/m);
    return match ? match[1].trim() : path.basename(filePath);
  } catch {
    return path.basename(filePath);
  }
}

function listWorkflows() {
  const workflowsDir = path.join(__dirname, '..', '.github', 'workflows');
  if (!fs.existsSync(workflowsDir)) return [];
  const entries = fs.readdirSync(workflowsDir).filter(f => f.endsWith('.yml') || f.endsWith('.yaml'));
  return entries.map(file => {
    const full = path.join(workflowsDir, file);
    const name = readYamlName(full);
    return { file, name, url: `https://github.com/Zion-Holdings/zion.app/actions/workflows/${file}` };
  }).sort((a,b)=> a.name.localeCompare(b.name));
}

function renderHtml(items) {
  const rows = items.map(i => `{"name":"${i.name.replace(/"/g,'\"')}","file":"${i.file}","url":"${i.url}"}`).join(',');
  const json = `[${rows}]`;
  const outDir = path.join(__dirname, '..', 'public', 'automation');
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'workflows.json'), json);
}

function updateContentRegistry(items) {
  try {
    const registryPath = path.join(__dirname, '..', 'public', 'automation', 'content-registry.json');
    const prev = fs.existsSync(registryPath) ? JSON.parse(fs.readFileSync(registryPath, 'utf8')) : {};
    prev.workflows = items;
    fs.writeFileSync(registryPath, JSON.stringify(prev, null, 2));
  } catch (e) {
    console.log('Registry update skipped:', e.message);
  }
}

function injectHomepagePromos(items) {
  const indexPage = path.join(__dirname, '..', 'pages', 'index.tsx');
  try {
    let src = fs.readFileSync(indexPage, 'utf8');
    const start = '{/* AUTO-GENERATED: HOME_LATEST_CONTENT_START */';
    const end = '{/* AUTO-GENERATED: HOME_LATEST_CONTENT_END */}';
    const insert = `\n  <section className="mx-auto max-w-7xl px-6 pb-6">\n    <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Live GitHub Automations</h2>\n    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">\n      ${items.slice(0,9).map(i=>`<a href=\"${i.url}\" className=\"group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover\" target=\"_blank\" rel=\"noopener\">\n        <div className=\"pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100\" />\n        <h3 className=\"text-lg font-semibold\">${i.name}</h3>\n        <p className=\"mt-1 text-sm text-white/75\">Open workflow →</p>\n      </a>`).join('\n      ')}\n    </div>\n  </section>\n`;
    // Append insert just after start marker to keep existing block
    const idx = src.indexOf(start);
    if (idx !== -1) {
      const insertPos = src.indexOf('\n', idx) + 1;
      src = src.slice(0, insertPos) + insert + src.slice(insertPos);
      fs.writeFileSync(indexPage, src);
    }
  } catch (e) {
    console.log('Homepage injection skipped:', e.message);
  }
}

function injectFrontPromos(items) {
  const frontPage = path.join(__dirname, '..', 'pages', 'main', 'front', 'index.tsx');
  try {
    let src = fs.readFileSync(frontPage, 'utf8');
    const marker = 'Cloud Automations (live)';
    const block = items.slice(0,10).map(i => `                <a className="glow-card rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10" href="${i.url}" target="_blank" rel="noopener">${i.name} →</a>`).join('\n');
    src = src.replace(/(\{\s*\/\* Cloud Automations Spotlight \*\/[\s\S]*?<div className=\"grid[\s\S]*?>)([\s\S]*?)(<\/div>\s*<\/div>\s*<\/div>)/m, `$1\n${block}\n$3`);
    fs.writeFileSync(frontPage, src);
  } catch (e) {
    console.log('Frontpage injection skipped:', e.message);
  }
}

(function main(){
  const items = listWorkflows();
  renderHtml(items);
  updateContentRegistry(items);
  injectHomepagePromos(items);
  injectFrontPromos(items);
  console.log(`Workflow dashboard generated (${items.length} items).`);
})();


