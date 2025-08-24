const fs = require('fs');
const path = require('path');

function ensureDir(dirPath) { fs.mkdirSync(dirPath, { recursive: true }); }

function listFilesRecursive(dir, exts) {
  const files = [];
  const stack = [dir];
  while (stack.length) {
    const cur = stack.pop();
    const stat = fs.statSync(cur);
    if (stat.isDirectory()) {
      for (const ent of fs.readdirSync(cur)) {
        if (ent.startsWith('.')) continue;
        stack.push(path.join(cur, ent));
      }
    } else if (exts.includes(path.extname(cur))) {
      files.push(cur);
    }
  }
  return files;
}

function extractPropsAndComponents(content) {
  const interfaces = [];
  const types = [];
  const components = [];

  const interfaceRegex = /interface\s+([A-Za-z0-9_]+Props?)\s*\{[\s\S]*?\}/g;
  const typeRegex = /type\s+([A-Za-z0-9_]+Props?)\s*=\s*[\s\S]*?;/g;
  const exportFunctionRegex = /export\s+(default\s+)?function\s+([A-Za-z0-9_]+)\s*\(/g;
  const constComponentRegex = /export\s+const\s+([A-Za-z0-9_]+)\s*=\s*\(/g;

  let m;
  while ((m = interfaceRegex.exec(content))) interfaces.push(m[1]);
  while ((m = typeRegex.exec(content))) types.push(m[1]);
  while ((m = exportFunctionRegex.exec(content))) components.push(m[2]);
  while ((m = constComponentRegex.exec(content))) components.push(m[1]);

  return { interfaces: Array.from(new Set(interfaces)), types: Array.from(new Set(types)), components: Array.from(new Set(components)) };
}

function generateDocs(componentsDir, outDir) {
  const files = listFilesRecursive(componentsDir, ['.tsx', '.ts', '.jsx', '.js']);
  const entries = [];
  for (const file of files) {
    const rel = path.relative(componentsDir, file);
    const content = fs.readFileSync(file, 'utf8');
    const { interfaces, types, components } = extractPropsAndComponents(content);
    entries.push({ file: rel, interfaces, types, components });
  }
  const totalComponents = entries.reduce((acc, e) => acc + e.components.length, 0);

  ensureDir(outDir);
  fs.writeFileSync(path.join(outDir, 'components-props.json'), JSON.stringify({ generatedAt: new Date().toISOString(), totalFiles: files.length, totalComponents, entries }, null, 2));

  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Component Props Docs</title>
<style>
  body { font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; background:#0b1220; color:#e5e7eb; margin:0; padding:2rem; }
  h1 { margin:0 0 1rem; }
  .muted { color:#9ca3af; }
  .card { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); border-radius: 12px; padding: 1rem; margin: 0.5rem 0; }
  code { background: rgba(255,255,255,0.1); padding: 0.2rem 0.3rem; border-radius: 6px; }
  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); gap: 0.75rem; }
</style>
</head>
<body>
  <h1>Component Props Docs</h1>
  <p class="muted">Auto-generated from files in <code>components/</code>. Shows detected components and props type interfaces.</p>
  <p>Total files: ${files.length} • Components detected: ${totalComponents}</p>
  <div class="grid">
    ${entries.map(e => `<div class=card>
      <div><strong>${e.file}</strong></div>
      ${e.components.length ? `<div>Components: ${e.components.map(c=>`<code>${c}</code>`).join(' ')}</div>` : '<div class=muted>No exported components detected</div>'}
      ${e.interfaces.length ? `<div>Interfaces: ${e.interfaces.map(i=>`<code>${i}</code>`).join(' ')}</div>` : ''}
      ${e.types.length ? `<div>Types: ${e.types.map(t=>`<code>${t}</code>`).join(' ')}</div>` : ''}
    </div>`).join('')}
  </div>
</body>
</html>`;
  fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');

  console.log(`[component-props-docs] Processed ${files.length} files, found ${totalComponents} components.`);
}

function main() {
  const projectRoot = path.resolve(__dirname, '..');
  const componentsDir = path.join(projectRoot, 'components');
  const outDir = path.join(projectRoot, 'public', 'reports', 'components');
  generateDocs(componentsDir, outDir);
}

if (require.main === module) {
  try { main(); process.exit(0); } catch (e) { console.error(e); process.exit(1); }
}