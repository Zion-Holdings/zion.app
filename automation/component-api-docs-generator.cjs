const fs = require('fs');
const path = require('path');
const glob = require('glob');

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function parsePropsFromContent(content) {
  const props = new Set();

  // Match interface/type Props
  const interfaceMatch = content.match(/(?:export\s+)?(?:interface|type)\s+(\w*Props)\s*=?\s*\{([\s\S]*?)\}/m);
  if (interfaceMatch) {
    const body = interfaceMatch[2];
    const lines = body.split(/\r?\n/);
    for (const line of lines) {
      const m = line.match(/^(\s*)(\w+)\??:\s*([^;]+);?/);
      if (m) props.add(m[2]);
    }
  }

  // Match function component argument destructuring
  const argMatch = content.match(/function\s+\w+\s*\(\s*\{([^\}]*)\}/m) || content.match(/\(([^\)]*)\)\s*=>/m);
  if (argMatch) {
    const names = argMatch[1]
      .split(',')
      .map((s) => s.trim().replace(/:\s*[^,]+/, ''))
      .map((s) => s.replace(/\s*=.*/, ''))
      .filter((s) => s && /[a-zA-Z_][a-zA-Z0-9_]*/.test(s));
    names.forEach((n) => props.add(n));
  }

  return Array.from(props);
}

function analyzeComponents(rootDir) {
  const compDir = path.join(rootDir, 'components');
  const files = glob.sync('**/*.{tsx,ts,jsx,js}', { cwd: compDir, nodir: true });
  const docs = [];
  for (const rel of files) {
    const abs = path.join(compDir, rel);
    const src = fs.readFileSync(abs, 'utf8');
    const props = parsePropsFromContent(src);
    docs.push({ component: rel.replace(/\.(tsx|ts|jsx|js)$/i, ''), file: `components/${rel}`, props });
  }
  return docs;
}

function writeDocs(rootDir, docs) {
  const docsDir = path.join(rootDir, 'docs', 'components');
  const publicDir = path.join(rootDir, 'public', 'automation');
  ensureDir(docsDir);
  ensureDir(publicDir);

  // Per-component pages
  for (const d of docs) {
    const md = [];
    md.push(`# ${d.component}`);
    md.push('');
    md.push(`File: \`${d.file}\``);
    md.push('');
    if (d.props.length) {
      md.push('## Props');
      md.push('');
      d.props.forEach((p) => md.push(`- ${p}`));
    } else {
      md.push('_No props detected heuristically_');
    }
    const subdir = path.join(docsDir, path.dirname(d.component));
    ensureDir(subdir);
    const outPath = path.join(docsDir, `${path.basename(d.component)}.md`);
    fs.writeFileSync(outPath, md.join('\n'));
  }

  // Index
  const index = [];
  index.push('# Component API Index');
  index.push('');
  for (const d of docs) {
    const mdFile = `docs/components/${path.basename(d.component)}.md`;
    index.push(`- [${d.component}](/${mdFile})`);
  }
  fs.writeFileSync(path.join(rootDir, 'docs', 'COMPONENT_API_INDEX.md'), index.join('\n'));

  // JSON summary
  fs.writeFileSync(path.join(publicDir, 'component-api.json'), JSON.stringify({ generatedAt: new Date().toISOString(), components: docs }, null, 2));
}

(function main() {
  const rootDir = path.resolve(__dirname, '..');
  const docs = analyzeComponents(rootDir);
  writeDocs(rootDir, docs);
  console.log('Component API docs generated for', docs.length, 'components');
})();