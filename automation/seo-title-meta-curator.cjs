#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

function* walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name.startsWith('.git')) continue;
      yield* walk(full);
    } else {
      yield full;
    }
  }
}

function analyzeFile(filePath, content) {
  const issues = [];
  const titleMatch = content.match(/<title>([\s\S]*?)<\/title>/i);
  const metaDescMatch = content.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["'][^>]*>/i);
  const exportHeadMatch = content.match(/<Head>[\s\S]*?<\/Head>/i);

  const title = titleMatch ? titleMatch[1].trim() : null;
  const description = metaDescMatch ? metaDescMatch[1].trim() : null;

  if (!exportHeadMatch) {
    issues.push({ type: 'no-head', message: 'Missing <Head> block' });
  }
  if (!title) {
    issues.push({ type: 'missing-title', message: 'Missing <title>' });
  } else if (title.length < 12) {
    issues.push({ type: 'short-title', message: 'Title is likely too short', value: title });
  }
  if (!description) {
    issues.push({ type: 'missing-description', message: 'Missing meta description' });
  } else if (description.length < 40) {
    issues.push({ type: 'short-description', message: 'Description is short', value: description });
  }

  return { title, description, issues };
}

function main() {
  const root = path.resolve(__dirname, '..');
  const pagesDir = path.join(root, 'pages');
  const report = { generatedAt: new Date().toISOString(), files: [], duplicates: { titles: [], descriptions: [] } };

  const titleToFiles = new Map();
  const descToFiles = new Map();

  for (const file of walk(pagesDir)) {
    if (!/\.(tsx|jsx|html)$/i.test(file)) continue;
    const content = fs.readFileSync(file, 'utf8');
    const rel = path.relative(root, file);
    const result = analyzeFile(file, content);
    report.files.push({ file: rel, ...result });

    if (result.title) {
      const list = titleToFiles.get(result.title) || [];
      list.push(rel);
      titleToFiles.set(result.title, list);
    }
    if (result.description) {
      const list = descToFiles.get(result.description) || [];
      list.push(rel);
      descToFiles.set(result.description, list);
    }
  }

  for (const [title, files] of titleToFiles.entries()) {
    if (files.length > 1) report.duplicates.titles.push({ title, files });
  }
  for (const [desc, files] of descToFiles.entries()) {
    if (files.length > 1) report.duplicates.descriptions.push({ description: desc, files });
  }

  const outDir = path.join(root, 'public', 'automation');
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, 'seo-title-meta-report.json');
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2));
  console.log('SEO title/meta report written to', outPath);
}

main();