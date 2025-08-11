const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');

function readFileSafe(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (e) {
    return '';
  }
}

function extractHeadingsFromMarkdown(content) {
  const lines = content.split('\n');
  const headings = [];
  for (const line of lines) {
    const m = /^(#{1,6})\s+(.+?)\s*$/.exec(line.trim());
    if (m) headings.push(m[2].trim());
  }
  return headings;
}

function extractHeadingsFromTsx(content) {
  const headings = [];
  const tagRegex = /<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/gi;
  let match;
  while ((match = tagRegex.exec(content)) !== null) {
    const inner = match[2]
      .replace(/<[^>]+>/g, ' ')
      .replace(/\{[^}]+\}/g, ' ')
      .replace(/&[^;]+;/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    if (inner) headings.push(inner);
  }
  return headings;
}

function addToMap(map, heading) {
  const key = heading.toLowerCase();
  map[key] = (map[key] || 0) + 1;
}

function main() {
  const root = path.resolve(__dirname, '..');
  const pagesPattern = path.join(root, 'pages', '**', '*.{md,mdx,tsx,ts,jsx,js}');
  const docsPattern = path.join(root, 'docs', '**', '*.{md,mdx}');

  const files = [
    ...glob.sync(pagesPattern, { nodir: true }),
    ...glob.sync(docsPattern, { nodir: true }),
  ];

  const topicsMap = {};
  const byFile = [];

  for (const file of files) {
    const rel = path.relative(root, file);
    const content = readFileSafe(file);
    const ext = path.extname(file).toLowerCase();
    let headings = [];
    if (ext === '.md' || ext === '.mdx') {
      headings = extractHeadingsFromMarkdown(content);
    } else {
      headings = extractHeadingsFromTsx(content);
    }
    if (headings.length > 0) {
      byFile.push({ file: rel, headings });
      for (const h of headings) addToMap(topicsMap, h);
    }
  }

  const sorted = Object.entries(topicsMap).sort((a, b) => b[1] - a[1]);
  const outputJson = path.join(root, 'data', 'topics-map.json');
  const outputMarkdown = path.join(root, 'docs', 'topics-map.md');

  fs.ensureDirSync(path.dirname(outputJson));
  fs.writeFileSync(outputJson, JSON.stringify({ generatedAt: new Date().toISOString(), totals: { files: files.length, topics: sorted.length }, byFile, topics: Object.fromEntries(sorted) }, null, 2));

  const md = [];
  md.push('# Topics Map');
  md.push('');
  md.push(`Generated at ${new Date().toISOString()}`);
  md.push('');
  md.push('## Top Topics');
  md.push('');
  const topN = sorted.slice(0, 50);
  for (const [topic, count] of topN) {
    md.push(`- ${topic} — ${count}`);
  }
  md.push('');
  md.push('## Files with Headings');
  md.push('');
  for (const f of byFile) {
    md.push(`### ${f.file}`);
    for (const h of f.headings) {
      md.push(`- ${h}`);
    }
    md.push('');
  }

  fs.ensureDirSync(path.dirname(outputMarkdown));
  fs.writeFileSync(outputMarkdown, md.join('\n'));

  console.log(`Wrote ${outputJson}`);
  console.log(`Wrote ${outputMarkdown}`);
}

if (require.main === module) {
  try {
    main();
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}