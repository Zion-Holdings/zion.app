const fs = require('fs');
const path = require('path');

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function readFileSafe(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (e) {
    return '';
  }
}

function listFilesRecursive(dirPath, exts) {
  const results = [];
  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    const full = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      results.push(...listFilesRecursive(full, exts));
    } else if (exts.includes(path.extname(entry.name))) {
      results.push(full);
    }
  }
  return results;
}

function countLineNumberFromIndex(text, index) {
  const snippet = text.slice(0, index);
  return snippet.split('\n').length;
}

function analyzeFile(filePath) {
  const relPath = path.relative(process.cwd(), filePath);
  const content = readFileSafe(filePath);
  const findings = [];

  // <Image ...> and <img ...>
  const imageTagRegex = /<(Image|img)\b[^>]*>/g;
  let match;
  while ((match = imageTagRegex.exec(content))) {
    const tag = match[0];
    const tagName = match[1];
    const idx = match.index;
    const line = countLineNumberFromIndex(content, idx);
    const hasAlt = /\balt\s*=/.test(tag);
    const hasDimension = /\b(width|height|sizes|fill)\s*=/.test(tag);

    if (!hasAlt) {
      findings.push({ type: 'missing-alt', tag: tagName, line, snippet: tag.slice(0, 140) });
    }
    if (!hasDimension) {
      findings.push({ type: 'missing-dimensions', tag: tagName, line, snippet: tag.slice(0, 140) });
    }
  }

  // <a ...>
  const anchorRegex = /<a\b[^>]*>/g;
  while ((match = anchorRegex.exec(content))) {
    const tag = match[0];
    const idx = match.index;
    const line = countLineNumberFromIndex(content, idx);
    const hrefMatch = tag.match(/\bhref\s*=\s*("([^"]*)"|'([^']*)'|\{([^}]*)\})/);
    const hrefVal = hrefMatch ? (hrefMatch[2] || hrefMatch[3] || hrefMatch[4] || '') : '';
    const hasHref = Boolean(hrefMatch);
    const isBadHref = hrefVal === '#' || hrefVal.startsWith('javascript:');
    if (!hasHref || isBadHref) {
      findings.push({ type: 'anchor-nohref', tag: 'a', line, snippet: tag.slice(0, 140) });
    }
  }

  // large inline SVG without role/title
  const svgRegex = /<svg\b[^>]*>/g;
  while ((match = svgRegex.exec(content))) {
    const tag = match[0];
    const idx = match.index;
    const line = countLineNumberFromIndex(content, idx);
    const hasTitle = /<title>/.test(content.slice(idx, idx + 500));
    const hasRole = /\brole\s*=/.test(tag);
    if (!hasTitle && !hasRole) {
      findings.push({ type: 'svg-missing-accessibility', tag: 'svg', line, snippet: tag.slice(0, 140) });
    }
  }

  return { file: relPath, findings };
}

function generateSummaryMarkdown(results) {
  const totalFiles = results.length;
  const totalFindings = results.reduce((sum, r) => sum + r.findings.length, 0);
  const byType = {};
  for (const r of results) {
    for (const f of r.findings) {
      byType[f.type] = (byType[f.type] || 0) + 1;
    }
  }

  let md = '# UX Friction Report\n\n';
  md += `Scanned ${totalFiles} files. Found ${totalFindings} issues.\n\n`;
  md += '## Totals by Issue Type\n\n';
  for (const [type, count] of Object.entries(byType)) {
    md += `- ${type}: ${count}\n`;
  }
  md += '\n## Notable Files\n\n';
  const sorted = [...results].sort((a, b) => b.findings.length - a.findings.length).slice(0, 20);
  for (const r of sorted) {
    if (r.findings.length === 0) continue;
    md += `### ${r.file}\n`;
    for (const f of r.findings.slice(0, 10)) {
      md += `- [${f.type}] line ${f.line}: \`${f.snippet}\`\n`;
    }
    md += '\n';
  }
  return md;
}

function main() {
  const root = process.cwd();
  const targets = [path.join(root, 'pages'), path.join(root, 'components')].filter((p) => fs.existsSync(p));
  const files = targets.flatMap((t) => listFilesRecursive(t, ['.tsx', '.jsx']))
    .filter((f) => !/\/pages\/api\//.test(f))
    .filter((f) => !/\/_app\.|\/_document\.|\/_error\./.test(f));

  const results = files.map(analyzeFile);

  const outDirPublic = path.join(root, 'public', 'reports');
  const outDirDocs = path.join(root, 'docs', 'reports');
  ensureDir(outDirPublic);
  ensureDir(outDirDocs);

  const jsonPath = path.join(outDirPublic, 'ux-friction-report.json');
  const mdPath = path.join(outDirDocs, 'ux-friction.md');

  fs.writeFileSync(jsonPath, JSON.stringify({ generatedAt: new Date().toISOString(), results }, null, 2));
  fs.writeFileSync(mdPath, generateSummaryMarkdown(results), 'utf8');

  console.log('Wrote UX friction reports:', { jsonPath, mdPath, filesScanned: files.length });
}

if (require.main === module) {
  main();
}