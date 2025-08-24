const fs = require('fs');
const path = require('path');

function ensureDir(p) { fs.mkdirSync(p, { recursive: true }); }
function writeFile(filePath, content) { ensureDir(path.dirname(filePath)); fs.writeFileSync(filePath, content); }

function collectFiles(rootDirs) {
  const files = [];
  function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name === 'node_modules' || entry.name === '.git') continue;
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (/\.(js|jsx|ts|tsx|cjs|mjs)$/.test(entry.name)) files.push(full);
    }
  }
  rootDirs.forEach((d) => { if (fs.existsSync(d)) walk(d); });
  return files;
}

function analyzePatterns(files) {
  const counts = {
    imports: {},
    libraries: { 'next/link': 0, 'next/head': 0, 'framer-motion': 0, 'lucide-react': 0, 'tailwind': 0 },
    uiEffects: { gradient: 0, blur: 0, marquee: 0, tilt: 0 },
    fileTypes: { js: 0, jsx: 0, ts: 0, tsx: 0, cjs: 0, mjs: 0 }
  };
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const ext = path.extname(file).replace('.', '');
    if (counts.fileTypes[ext] !== undefined) counts.fileTypes[ext]++;

    // naive import extraction
    const importRe = /from\s+['"]([^'"]+)['"];?|require\((['"])([^'\"]+)\2\)/g;
    let m;
    while ((m = importRe.exec(content))) {
      const mod = m[1] || m[3];
      counts.imports[mod] = (counts.imports[mod] || 0) + 1;
      if (counts.libraries.hasOwnProperty(mod)) counts.libraries[mod]++;
    }

    if (/className=["'][^"']*gradient/i.test(content)) counts.uiEffects.gradient++;
    if (/backdrop-blur|blur-\w+/i.test(content)) counts.uiEffects.blur++;
    if (/marquee__track|marquee/i.test(content)) counts.uiEffects.marquee++;
    if (/tilt-on-hover/i.test(content)) counts.uiEffects.tilt++;
    if (/className=/i.test(content)) counts.libraries.tailwind++;
  }

  // Top imports
  const topImports = Object.entries(counts.imports).sort((a, b) => b[1] - a[1]).slice(0, 25).map(([name, used]) => ({ name, used }));
  return { counts, topImports };
}

function toMarkdown(report) {
  const lines = [];
  lines.push('# Code Patterns Report');
  lines.push('');
  lines.push(`Generated: ${new Date().toISOString()}`);
  lines.push('');
  lines.push('## Top Imports');
  report.topImports.forEach((i) => lines.push(`- ${i.name}: ${i.used}`));
  lines.push('');
  lines.push('## Libraries Usage');
  Object.entries(report.counts.libraries).forEach(([lib, num]) => lines.push(`- ${lib}: ${num}`));
  lines.push('');
  lines.push('## UI Effects Signals');
  Object.entries(report.counts.uiEffects).forEach(([k, v]) => lines.push(`- ${k}: ${v}`));
  lines.push('');
  lines.push('## File Types');
  Object.entries(report.counts.fileTypes).forEach(([k, v]) => lines.push(`- ${k}: ${v}`));
  lines.push('');
  lines.push('_Automatic patterns miner to guide refactors and design consistency._');
  return lines.join('\n');
}

(function main() {
  const files = collectFiles(['pages', 'components', 'automation', 'netlify/functions', 'scripts']);
  const report = analyzePatterns(files);
  const jsonPath = path.join('data', 'reports', 'patterns', 'patterns.json');
  const mdPath = path.join('data', 'reports', 'patterns', 'patterns.md');
  writeFile(jsonPath, JSON.stringify(report, null, 2));
  writeFile(mdPath, toMarkdown(report));
  console.log(`[patterns-miner] wrote ${jsonPath} and ${mdPath}`);
})();