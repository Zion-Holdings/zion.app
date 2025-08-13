#!/usr/bin/env node
/*
  UI Normalizer
  - Normalize page wrappers to rely on global layout (remove page-level min-h-screen bg wrappers)
  - Modernize Next Link usage: <Link><a/></Link> -> <Link ...>...</Link>
  - Ensure reports index links to static HTML for AI Trends and SEO
  - Ensure stub pages exist for /reports/seo and /reports/ai-trends that redirect to static HTML
  - Tidy _document.tsx by removing any <title> inside <Head>
*/

const fs = require('fs');
const path = require('path');

const repoRoot = process.cwd();

/** Read a UTF-8 file safely */
function readFile(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch {
    return null;
  }
}

/** Write a UTF-8 file only if content changed */
function writeIfChanged(filePath, next) {
  const prev = readFile(filePath);
  if (prev === null) return false;
  if (prev === next) return false;
  fs.writeFileSync(filePath, next);
  return true;
}

/** Recursively collect files by extension under a directory */
function collectFiles(dir, exts) {
  const results = [];
  function walk(d) {
    const entries = fs.readdirSync(d, { withFileTypes: true });
    for (const ent of entries) {
      const p = path.join(d, ent.name);
      if (ent.isDirectory()) {
        walk(p);
      } else if (exts.includes(path.extname(ent.name))) {
        results.push(p);
      }
    }
  }
  if (fs.existsSync(dir)) walk(dir);
  return results;
}

/** Normalize Link usage by collapsing <Link><a/></Link> */
function normalizeNextLinks(source) {
  let s = source;
  // Move className/target/rel from inner <a> to outer <Link>
  // Regex: <Link ...>(\s*)<a ...>(...)</a>(\s*)</Link>
  const linkARegex = /<Link(\s+[^>]*?)>(\s*)<a(\s+[^>]*?)>([\s\S]*?)<\/a>(\s*)<\/Link>/g;
  s = s.replace(linkARegex, (m, linkAttrs, ws1, aAttrs, inner, ws2) => {
    const attrsToCarry = {};
    const pick = (name) => {
      const re = new RegExp(`${name}=("[^"]*"|'[^']*')`);
      const m2 = aAttrs.match(re);
      if (m2) attrsToCarry[name] = m2[1];
    };
    pick('className');
    pick('target');
    pick('rel');
    // Merge className if both present
    if (attrsToCarry.className) {
      const reClassOnLink = /\sclassName=("[^"]*"|'[^']*')/;
      const mClassOnLink = linkAttrs.match(reClassOnLink);
      if (mClassOnLink) {
        const merged = mClassOnLink[1].slice(0, -1) + ' ' + attrsToCarry.className.slice(1);
        linkAttrs = linkAttrs.replace(reClassOnLink, ` className=${merged}`);
        delete attrsToCarry.className;
      }
    }
    const extra = Object.entries(attrsToCarry)
      .map(([k, v]) => ` ${k}=${v}`)
      .join('');
    return `<Link${linkAttrs}${extra}>${inner}</Link>`;
  });
  return s;
}

/** Remove page-level background wrappers to rely on global layout */
function normalizeWrappers(source) {
  let s = source;
  const patterns = [
    /<div className=\"min-h-screen bg-slate-950 text-white\">/g,
    /<div className=\'min-h-screen bg-slate-950 text-white\'>/g,
    /<div className=\"min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white\">/g,
    /<div className=\'min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white\'>/g,
  ];
  for (const p of patterns) s = s.replace(p, '<div>');
  return s;
}

/** Ensure reports index uses static HTML links for certain entries */
function normalizeReportsIndex(filePath, source) {
  if (!/pages\/reports\/index\.tsx$/.test(filePath)) return source;
  let s = source;
  s = s.replace("href: '/reports/seo'", "href: '/reports/seo/index.html'");
  s = s.replace("href: '/reports/ai-trends'", "href: '/reports/ai-trends/index.html'");
  return s;
}

/** Ensure stub redirect pages exist for SEO and AI Trends */
function ensureReportStubs() {
  const stubs = [
    {
      file: path.join(repoRoot, 'pages/reports/seo.tsx'),
      url: '/reports/seo/index.html',
      title: 'AI SEO Auditor — Reports',
    },
    {
      file: path.join(repoRoot, 'pages/reports/ai-trends.tsx'),
      url: '/reports/ai-trends/index.html',
      title: 'AI Trends Radar — Reports',
    },
  ];
  let changed = false;
  for (const stub of stubs) {
    if (!fs.existsSync(stub.file)) {
      const contents = `import Head from 'next/head';\n\nexport default function StubPage() {\n  return (\n    <div>\n      <Head>\n        <title>${stub.title}</title>\n        <meta httpEquiv=\"refresh\" content=\"0;url=${stub.url}\" />\n      </Head>\n      <main className=\"mx-auto max-w-3xl px-6 py-12\">\n        <h1 className=\"text-3xl font-bold\">${stub.title.replace(' — Reports','')}</h1>\n        <p className=\"text-white/70 mt-2\">Redirecting to the static report…</p>\n        <p className=\"mt-4\">If you are not redirected, open the static report: <a href=\"${stub.url}\" className=\"text-cyan-300 underline\">${stub.url}</a></p>\n      </main>\n    </div>\n  );\n}\n`;
      fs.mkdirSync(path.dirname(stub.file), { recursive: true });
      fs.writeFileSync(stub.file, contents);
      changed = true;
    }
  }
  return changed;
}

/** Tidy _document.tsx by removing <title> tags inside <Head> */
function tidyDocumentHead() {
  const docFile = path.join(repoRoot, 'pages/_document.tsx');
  const s = readFile(docFile);
  if (s === null) return false;
  const next = s.replace(/<Head>\s*<title>[\s\S]*?<\/title>/g, '<Head>');
  return writeIfChanged(docFile, next);
}

let totalChanged = 0;

// 1) Normalize all .tsx files under pages/** except API and _app/_document
const pageFiles = collectFiles(path.join(repoRoot, 'pages'), ['.tsx']).filter((f) => {
  const base = path.basename(f);
  if (base === '_app.tsx' || base === '_document.tsx') return false;
  if (f.includes('/api/')) return false;
  return true;
});

for (const f of pageFiles) {
  const s = readFile(f);
  if (s === null) continue;
  let next = s;
  next = normalizeNextLinks(next);
  next = normalizeWrappers(next);
  next = normalizeReportsIndex(f, next);
  if (writeIfChanged(f, next)) {
    totalChanged += 1;
    console.log(`normalized: ${path.relative(repoRoot, f)}`);
  }
}

if (tidyDocumentHead()) {
  totalChanged += 1;
  console.log('tidied: pages/_document.tsx');
}

if (ensureReportStubs()) {
  totalChanged += 1;
  console.log('ensured report stubs');
}

console.log(`UI Normalizer complete. Files changed: ${totalChanged}`);

