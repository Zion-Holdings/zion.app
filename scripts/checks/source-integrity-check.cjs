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
  'app/error.tsx',
  'app/loading.tsx',
  'app/components/Navigation.tsx',
  'app/components/Footer.tsx',
  'app/components/PageTemplate.tsx',
  'app/components/StandardPage.tsx',
  'app/tools/json-formatter/page.tsx',
  'app/industries/healthcare/page.tsx',
  'wrangler.toml',
  'workers/static.js',
  'scripts/workers-static-prepare.cjs',
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
const toolsPages = walkCount('app/tools', (_full, name) => name === 'page.tsx');
const industryPages = walkCount('app/industries', (_full, name) => name === 'page.tsx');
const solutionPages = walkCount('app/solutions', (_full, name) => name === 'page.tsx');
const caseStudyPages = walkCount('app/case-studies', (_full, name) => name === 'page.tsx');

// Floors sit well below the recovered tree (~20k app tsx) so legitimate
// cleanup can land, but a static-export orphan (~0-200 files) fails hard.
const MIN_APP_TSX = 12000;
const MIN_APP_COMPONENTS = 150;
const MIN_SCRIPTS = 30;
const MIN_TOOLS_PAGES = 80;
const MIN_INDUSTRY_PAGES = 15;
const MIN_SOLUTION_PAGES = 30;
const MIN_CASE_STUDY_PAGES = 50;

console.log(`  • app/**/*.tsx count: ${appTsx} (min ${MIN_APP_TSX})`);
console.log(`  • app/components/**/*.tsx count: ${componentTsx} (min ${MIN_APP_COMPONENTS})`);
console.log(`  • app/tools/**/page.tsx count: ${toolsPages} (min ${MIN_TOOLS_PAGES})`);
console.log(`  • app/industries/**/page.tsx count: ${industryPages} (min ${MIN_INDUSTRY_PAGES})`);
console.log(`  • app/solutions/**/page.tsx count: ${solutionPages} (min ${MIN_SOLUTION_PAGES})`);
console.log(`  • app/case-studies/**/page.tsx count: ${caseStudyPages} (min ${MIN_CASE_STUDY_PAGES})`);
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
if (toolsPages < MIN_TOOLS_PAGES) {
  errors.push(`app/tools collapsed: found ${toolsPages} pages, expected at least ${MIN_TOOLS_PAGES}`);
}
if (industryPages < MIN_INDUSTRY_PAGES) {
  errors.push(
    `app/industries collapsed: found ${industryPages} pages, expected at least ${MIN_INDUSTRY_PAGES}`
  );
}
if (solutionPages < MIN_SOLUTION_PAGES) {
  errors.push(
    `app/solutions collapsed: found ${solutionPages} pages, expected at least ${MIN_SOLUTION_PAGES}`
  );
}
if (caseStudyPages < MIN_CASE_STUDY_PAGES) {
  errors.push(
    `app/case-studies collapsed: found ${caseStudyPages} pages, expected at least ${MIN_CASE_STUDY_PAGES}`
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

function inspectPageTsx(relRoot) {
  const root = path.join(repo, relRoot);
  if (!fs.existsSync(root)) return;
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
        if (entry.name === 'node_modules' || entry.name === '.next' || entry.name === 'out') continue;
        stack.push(full);
        continue;
      }
      if (entry.name !== 'page.tsx') continue;
      const rel = path.relative(repo, full);
      let text = '';
      try {
        text = fs.readFileSync(full, 'utf8');
      } catch {
        errors.push(`${rel} cannot be read`);
        continue;
      }
      const trimmed = text.trim();
      if (!trimmed) {
        errors.push(`${rel} is empty — empty App Router stubs caused live 404s`);
        continue;
      }
      if (trimmed.startsWith('<!DOCTYPE') || trimmed.startsWith('<html')) {
        errors.push(`${rel} contains raw HTML instead of a Next.js page module`);
      }
      if (!/export default/.test(text)) {
        errors.push(`${rel} is missing an export default page component`);
      }
    }
  }
}

inspectPageTsx('app');

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
