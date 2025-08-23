const fs = require('fs');
const path = require('path');
const glob = require('glob').sync || require('glob');

function findFiles(patterns, cwd) {
  const files = new Set();
  for (const pattern of patterns) {
    for (const file of glob.sync(pattern, { cwd, nodir: true, ignore: ['**/node_modules/**', '**/.next/**', '**/out/**'] })) {
      files.add(path.resolve(cwd, file));
    }
  }
  return Array.from(files);
}

function analyzeFile(filePath) {
  const src = fs.readFileSync(filePath, 'utf8');
  const issues = [];

  // naive regex for <img ...>
  const imgTagRegex = /<img\b[^>]*>/gim;
  const altAttrRegex = /\balt\s*=\s*("[^"]*"|'[^']*'|{[^}]*})/i;
  const srcAttrRegex = /\bsrc\s*=\s*("[^"]*"|'[^']*'|{[^}]*})/i;

  let match;
  while ((match = imgTagRegex.exec(src))) {
    const tag = match[0];
    const hasAlt = altAttrRegex.test(tag);
    if (!hasAlt) {
      const srcMatch = tag.match(srcAttrRegex);
      const raw = srcMatch ? srcMatch[1] : '""';
      const suggestion = suggestAltFromSrc(raw.replace(/^\{|\}|"|\'|`/g, ''));
      issues.push({ type: 'img-missing-alt', tag, suggestion });
    }
  }

  // naive regex for <Image ...> (Next.js)
  const imageCompRegex = /<Image\b[^>]*>/gim;
  while ((match = imageCompRegex.exec(src))) {
    const tag = match[0];
    const hasAlt = altAttrRegex.test(tag);
    if (!hasAlt) {
      issues.push({ type: 'next-image-missing-alt', tag, suggestion: 'Provide concise, descriptive alt text.' });
    }
  }

  return issues;
}

function suggestAltFromSrc(src) {
  try {
    const parsed = new URL(src, 'https://example.com');
    const base = path.basename(parsed.pathname || '').replace(/\.[a-zA-Z0-9]+$/, '');
    if (!base) return 'Decorative image';
    return base.replace(/[-_]+/g, ' ').replace(/\s+/g, ' ').trim();
  } catch {
    return 'Image';
  }
}

function main() {
  const root = path.resolve(__dirname, '..');
  const cwd = root;
  const sources = findFiles(['pages/**/*.{js,jsx,ts,tsx}', 'components/**/*.{js,jsx,ts,tsx}'], cwd);

  const results = [];
  for (const file of sources) {
    const issues = analyzeFile(file);
    if (issues.length) {
      results.push({ file: path.relative(root, file), issues });
    }
  }

  const reportsDir = path.join(root, 'public', 'reports');
  fs.mkdirSync(reportsDir, { recursive: true });

  const jsonPath = path.join(reportsDir, 'a11y-alt-report.json');
  fs.writeFileSync(jsonPath, JSON.stringify({ generatedAtUtc: new Date().toISOString(), totalFiles: sources.length, items: results }, null, 2));

  const mdLines = [
    '# Accessibility Alt Text Report',
    '',
    `Generated: ${new Date().toISOString()}`,
    '',
    `Scanned files: ${sources.length}`,
    '',
  ];
  for (const item of results) {
    mdLines.push(`## ${item.file}`);
    for (const issue of item.issues) {
      mdLines.push(`- ${issue.type}: ${issue.suggestion}`);
    }
    mdLines.push('');
  }

  const docsDir = path.join(root, 'docs');
  fs.mkdirSync(docsDir, { recursive: true });
  fs.writeFileSync(path.join(docsDir, 'A11Y_ALT_REPORT.md'), mdLines.join('\n'));

  console.log(`A11y report written. Files: ${sources.length}, Issues: ${results.reduce((a,b)=>a+b.issues.length,0)}`);
}

if (require.main === module) {
  main();
}