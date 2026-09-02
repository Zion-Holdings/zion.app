#!/usr/bin/env node
/**
 * Source integrity guard.
 *
 * Prevents the Sept 2026 regression: main was replaced with a static-export
 * orphan tree, deleting package.json, next.config, app/layout.tsx, app/page.tsx,
 * and ~18k App Router pages.
 *
 * Exit 0 = source tree is present. Exit 1 = source was deleted or gutted.
 */
const fs = require('fs');
const path = require('path');

const repo = process.cwd();
const errors = [];
const warnings = [];

function exists(rel) {
  return fs.existsSync(path.join(repo, rel));
}

function walkCount(rel, predicate) {
  const root = path.join(repo, rel);
  if (!fs.existsSync(root)) return 0;
  let count = 0;
  const stack = [root];
  while (stack.length) {
    const dir = stack.pop();
    let entries;
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
      continue;
    }
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name === 'node_modules' || entry.name === '.next' || entry.name === 'out') {
          continue;
        }
        stack.push(full);
      } else if (predicate(full, entry.name)) {
        count += 1;
      }
    }
  }
  return count;
}

const requiredFiles = [
  'package.json',
  'next.config.js',
  'tsconfig.json',
  'app/layout.tsx',
  'app/page.tsx',
  'app/globals.css',
  'app/components/Navigation.tsx',
  'app/components/Footer.tsx',
  'app/components/PageTemplate.tsx',
  'app/components/StandardPage.tsx',
];

for (const rel of requiredFiles) {
  if (exists(rel)) {
    console.log(`  ✓ ${rel}`);
  } else {
    errors.push(`missing required source file: ${rel}`);
    console.error(`  ✗ ${rel}`);
  }
}

if (exists('package.json')) {
  try {
    const pkg = JSON.parse(fs.readFileSync(path.join(repo, 'package.json'), 'utf8'));
    if (!pkg.dependencies || !pkg.dependencies.next) {
      errors.push('package.json is missing the next dependency — this is not a Next.js source tree');
    } else {
      console.log('  ✓ package.json lists next');
    }
    if (!pkg.scripts || !pkg.scripts.build) {
      errors.push('package.json is missing a build script');
    }
  } catch (err) {
    errors.push(`package.json is not valid JSON: ${err.message}`);
  }
}

if (exists('next.config.js')) {
  const nextConfig = fs.readFileSync(path.join(repo, 'next.config.js'), 'utf8');
  if (!nextConfig.includes("output: 'export'") && !nextConfig.includes('output: "export"')) {
    warnings.push('next.config.js does not set output: "export" (GitHub Pages static export)');
  }
}

const appTsx = walkCount('app', (_full, name) => name.endsWith('.tsx'));
const componentTsx = walkCount('app/components', (_full, name) => name.endsWith('.tsx'));
const rootComponentTsx = walkCount('components', (_full, name) => name.endsWith('.tsx'));
const scriptFiles = walkCount('scripts', () => true);

const MIN_APP_TSX = 5000;
const MIN_APP_COMPONENTS = 10;
const MIN_SCRIPTS = 20;

console.log(`  • app/**/*.tsx count: ${appTsx} (min ${MIN_APP_TSX})`);
console.log(`  • app/components/**/*.tsx count: ${componentTsx} (min ${MIN_APP_COMPONENTS})`);
console.log(`  • components/**/*.tsx count: ${rootComponentTsx}`);
console.log(`  • scripts file count: ${scriptFiles} (min ${MIN_SCRIPTS})`);

if (appTsx < MIN_APP_TSX) {
  errors.push(
    `app source collapsed: found ${appTsx} .tsx files, expected at least ${MIN_APP_TSX}. ` +
      'A static-export-only tree is not a valid main branch.'
  );
}
if (componentTsx < MIN_APP_COMPONENTS) {
  errors.push(
    `app/components collapsed: found ${componentTsx} .tsx files, expected at least ${MIN_APP_COMPONENTS}`
  );
}
if (scriptFiles < MIN_SCRIPTS) {
  errors.push(`scripts/ collapsed: found ${scriptFiles} files, expected at least ${MIN_SCRIPTS}`);
}

if (exists('app/page.tsx')) {
  const homepage = fs.readFileSync(path.join(repo, 'app/page.tsx'), 'utf8');
  if (homepage.includes('<<<<<<<') || homepage.includes('>>>>>>>')) {
    errors.push('app/page.tsx contains unresolved merge conflict markers');
  }
}

for (const warning of warnings) {
  console.warn(`  ! ${warning}`);
}

if (errors.length) {
  console.error('\nSource integrity FAILED:');
  for (const error of errors) {
    console.error(`  - ${error}`);
  }
  console.error(
    '\nDo not replace the Next.js source tree with a static export. ' +
      'Keep package.json, next.config.js, and app/ on main. Deploy built HTML from out/ or gh-pages.'
  );
  process.exit(1);
}

console.log('\nSource integrity PASSED');
process.exit(0);
