const fs = require('fs');
const path = require('path');

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function readJsonSafe(filePath, fallback) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (e) {
    return fallback;
  }
}

function readTextSafe(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (e) {
    return '';
  }
}

function deriveItems({ todoJson, todoMd, hotspotsJson, typeHealthJson }) {
  const items = [];

  // From TODO summary JSON
  if (todoJson && Array.isArray(todoJson.items)) {
    todoJson.items.slice(0, 50).forEach((t) => {
      items.push({ kind: 'todo', title: t.title || t.file || 'TODO', detail: t.detail || '', weight: 5 });
    });
  }

  // From TODO report Markdown
  if (todoMd) {
    const lines = todoMd.split(/\r?\n/).filter(Boolean);
    lines.forEach((ln) => {
      if (/^\s*-\s+/.test(ln)) {
        items.push({ kind: 'todo-md', title: ln.replace(/^\s*-\s+/, '').slice(0, 140), detail: '', weight: 4 });
      }
    });
  }

  // From hotspots: prioritize top files for refactor tasks
  if (hotspotsJson && Array.isArray(hotspotsJson.hotspots)) {
    hotspotsJson.hotspots.slice(0, 20).forEach((h) => {
      items.push({ kind: 'refactor', title: `Reduce complexity in ${h.file}`, detail: `Score ${h.score}, lines ${h.lineCount}`, weight: 6 });
    });
  }

  // From type health signals
  if (typeHealthJson && Array.isArray(typeHealthJson.perFile)) {
    typeHealthJson.perFile.slice(0, 20).forEach((f) => {
      if ((f.any + f.tsIgnore + f.eslintDisable) > 0) {
        items.push({ kind: 'types', title: `Improve types in ${f.file}`, detail: `${f.any} any, ${f.tsIgnore} @ts-ignore`, weight: 6 });
      }
    });
  }

  // Rank by weight, then name
  items.sort((a, b) => (b.weight || 0) - (a.weight || 0) || a.title.localeCompare(b.title));
  return items;
}

(function main() {
  const root = path.resolve(__dirname, '..');
  const publicDir = path.join(root, 'public', 'automation');
  const docsDir = path.join(root, 'docs');
  ensureDir(publicDir);
  ensureDir(docsDir);

  const todoJson = readJsonSafe(path.join(publicDir, 'todo-summary.json'), { items: [] });
  const todoMd = readTextSafe(path.join(root, 'docs', 'TODO_REPORT.md'));
  const hotspotsJson = readJsonSafe(path.join(publicDir, 'hotspots.json'), { hotspots: [] });
  const typeHealthJson = readJsonSafe(path.join(publicDir, 'type-health.json'), { perFile: [], totals: {} });

  const items = deriveItems({ todoJson, todoMd, hotspotsJson, typeHealthJson });

  // Write JSON
  const jsonOut = path.join(publicDir, 'roadmap.json');
  fs.writeFileSync(jsonOut, JSON.stringify({ generatedAt: new Date().toISOString(), items }, null, 2));

  // Write Markdown
  const md = [];
  md.push('# Autonomous Roadmap');
  md.push('');
  md.push(`Generated: ${new Date().toISOString()}`);
  md.push('');
  items.slice(0, 100).forEach((it, idx) => {
    md.push(`- [${idx + 1}] (${it.kind}) ${it.title}${it.detail ? ` — ${it.detail}` : ''}`);
  });
  fs.writeFileSync(path.join(docsDir, 'ROADMAP_AUTO.md'), md.join('\n'));

  console.log('Roadmap generated with', items.length, 'items');
})();