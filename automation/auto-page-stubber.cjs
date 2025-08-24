#!/usr/bin/env node
/*
  Auto Page Stubber
  - Scans pages/ for empty .tsx/.jsx files
  - Writes a minimal Next.js page with a default export so builds succeed
  - Skips API routes and special framework files except 404 which will be stubbed
*/

const fs = require('fs');
const path = require('path');

const PAGES_DIR = path.join(process.cwd(), 'pages');
const COMPONENT_LAYOUT = path.join(process.cwd(), 'components', 'layout', 'EnhancedLayout.tsx');

function listFiles(dir) {
  /** @type {string[]} */
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name.startsWith('.')) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (path.relative(PAGES_DIR, full).startsWith('api')) continue;
      results.push(...listFiles(full));
    } else if (entry.isFile()) {
      results.push(full);
    }
  }
  return results;
}

function isPageFile(file) {
  const rel = path.relative(PAGES_DIR, file).replace(/\\/g, '/');
  if (rel.startsWith('api/')) return false;
  const ext = path.extname(file).toLowerCase();
  return ext === '.tsx' || ext === '.jsx';
}

function shouldSkipSpecial(file) {
  const base = path.basename(file).toLowerCase();
  return base === '_app.tsx' || base === '_document.tsx' || base === '_app.jsx' || base === '_document.jsx';
}

function inferTitle(file) {
  const rel = path.relative(PAGES_DIR, file).replace(/\\/g, '/');
  const noExt = rel.replace(/\.(tsx|jsx)$/i, '');
  const route = '/' + noExt.replace(/\/index$/, '');
  const leaf = route.split('/').filter(Boolean).pop() || 'home';
  return leaf
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function computeLayoutImport(file) {
  const fromDir = path.dirname(file);
  const rel = path.relative(fromDir, path.join(process.cwd(), 'components', 'layout', 'EnhancedLayout'));
  return rel.startsWith('.') ? rel.replace(/\\/g, '/') : './' + rel.replace(/\\/g, '/');
}

function stubContent(file) {
  const title = inferTitle(file);
  const layoutImport = computeLayoutImport(file);
  const is404 = path.basename(file).toLowerCase().startsWith('404');
  const isDynamic = path.basename(file).includes('[');
  const componentName = is404 ? 'NotFoundPage' : isDynamic ? 'DynamicPage' : title.replace(/\s+/g, '') + 'Page';
  return `import React from 'react';
import EnhancedLayout from '${layoutImport}';

export default function ${componentName}() {
  return (
    <EnhancedLayout>
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">${is404 ? 'Page Not Found' : title}</h1>
        <p className="opacity-70 text-sm">${is404 ? 'The page you are looking for does not exist.' : 'This page was auto-stubbed and is ready for content.'}</p>
      </div>
    </EnhancedLayout>
  );
}
`;
}

function isEmptyOrWhitespace(content) {
  if (!content) return true;
  return content.toString('utf8').trim().length === 0;
}

function main() {
  if (!fs.existsSync(PAGES_DIR)) {
    console.log('No pages directory; skipping');
    process.exit(0);
  }
  const files = listFiles(PAGES_DIR).filter(isPageFile).filter(f => !shouldSkipSpecial(f));
  let changed = 0;
  for (const file of files) {
    const buf = fs.readFileSync(file);
    if (isEmptyOrWhitespace(buf)) {
      const content = stubContent(file);
      fs.writeFileSync(file, content, 'utf8');
      console.log('Stubbed page:', path.relative(process.cwd(), file));
      changed++;
    }
  }
  if (changed === 0) {
    console.log('No empty pages to stub.');
  } else {
    console.log(`Stubbed ${changed} page(s).`);
  }
}

if (require.main === module) {
  main();
}