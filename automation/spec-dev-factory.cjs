#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ACTIONS = path.join(__dirname, '..', 'data', 'reports', 'spec-dev', 'spec-dev-actions.json');
const OUT_DIR = path.join(__dirname, 'spec-dev-agents');
const PAGES_DIR = path.join(__dirname, '..', 'pages');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }

function toTitleCase(s) {
  return (s || '')
    .replace(/[-_/]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase()
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

function extractRoutesFromPrompt(prompt) {
  if (!prompt) return [];
  const routes = new Set();
  // Find URL-like paths e.g., /services/ai, /blog/new-post
  const regex = /\/[a-z0-9][a-z0-9\-\/]*(?:\/[a-z0-9][a-z0-9\-\/]*)*/gi;
  const matches = prompt.match(regex) || [];
  for (const m of matches) {
    // Ignore obvious non-routes
    if (m.startsWith('/http')) continue;
    if (m.startsWith('/api')) continue;
    if (m.length > 200) continue;
    routes.add(m.replace(/[#?].*$/, ''));
  }
  return Array.from(routes);
}

function pageFilePathForRoute(route) {
  const clean = route.replace(/\/$/, '');
  if (clean === '' || clean === '/') return path.join(PAGES_DIR, 'index.tsx');
  const parts = clean.replace(/^\//, '').split('/');
  const last = parts[parts.length - 1];
  // Use file-based route: pages/a/b.tsx
  const rel = parts.join('/') + '.tsx';
  return path.join(PAGES_DIR, rel);
}

function ensurePageDirectory(fp) {
  ensureDir(path.dirname(fp));
}

function buildPageSource(route, prompt) {
  const titleGuess = toTitleCase(route.split('/').filter(Boolean).pop() || 'Page');
  const description = prompt.length > 220 ? prompt.slice(0, 220) + '…' : prompt;
  return `import Head from 'next/head';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <Head>
        <title>${titleGuess} | Zion</title>
        <meta name="description" content={${JSON.stringify(description)}} />
      </Head>
      <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-slate-100">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-6">${titleGuess}</h1>
          <p className="text-slate-300 mb-8">This page was auto-generated from product/spec instructions.</p>

          <section className="space-y-4 bg-white/5 border border-white/10 rounded-xl p-6">
            <h2 className="text-2xl font-semibold">Planned Content</h2>
            <p className="text-slate-300">${prompt.replace(/`/g, '\\`')}</p>
          </section>

          <div className="mt-10">
            <Link href="/">
              <a className="inline-flex items-center px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition-colors">
                Back to Home
              </a>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
`;
}

function updateExistingPage(fp, prompt) {
  try {
    const src = fs.readFileSync(fp, 'utf8');
    const START = '{/* AUTO-GENERATED: SPEC_DEV_START */}';
    const END = '{/* AUTO-GENERATED: SPEC_DEV_END */}';
    const block = `\n        ${START}\n        <section className="mt-8 space-y-4 bg-white/5 border border-white/10 rounded-xl p-6">\n          <h2 className=\"text-2xl font-semibold\">Spec Instructions</h2>\n          <p className=\"text-slate-300\">${prompt.replace(/`/g, '\\`')}</p>\n        </section>\n        ${END}`;

    let next = src;
    if (!src.includes(START) || !src.includes(END)) {
      // Try to inject before closing </main>
      const idx = src.lastIndexOf('</main>');
      if (idx !== -1) {
        next = src.slice(0, idx) + block + src.slice(idx);
      }
    } else {
      const startIdx = src.indexOf(START);
      const endIdx = src.indexOf(END) + END.length;
      next = src.slice(0, startIdx) + block + src.slice(endIdx);
    }

    if (next !== src) {
      fs.writeFileSync(fp, next, 'utf8');
      return true;
    }
  } catch {}
  return false;
}

function applyDevTask(prompt, createdArtifacts) {
  const routes = extractRoutesFromPrompt(prompt);
  if (routes.length === 0) return;

  for (const route of routes) {
    const fp = pageFilePathForRoute(route);
    ensurePageDirectory(fp);

    if (!fs.existsSync(fp)) {
      const src = buildPageSource(route, prompt);
      fs.writeFileSync(fp, src, 'utf8');
      createdArtifacts.push(fp);
    } else {
      if (updateExistingPage(fp, prompt)) {
        createdArtifacts.push(fp);
      }
    }
  }
}

function agentForHomepage(pages) {
  return `#!/usr/bin/env node\nconsole.log('Ensure homepage advertises pages:', ${JSON.stringify(pages.slice(0, 20))});`;
}

function main() {
  if (!fs.existsSync(ACTIONS)) { console.error('No spec-dev actions found'); process.exit(1); }
  ensureDir(OUT_DIR);
  ensureDir(PAGES_DIR);

  const data = JSON.parse(fs.readFileSync(ACTIONS, 'utf8'));
  const created = [];

  for (const a of (data.actions || [])) {
    if (a.type === 'dev_task') {
      applyDevTask(a.prompt, created);
    }
  }

  const hp = path.join(__dirname, 'ensure-homepage-ads.cjs');
  if (!fs.existsSync(hp)) {
    fs.writeFileSync(hp, agentForHomepage(data.actions.find(x => x.type === 'homepage_advertise')?.pages || []));
    try { fs.chmodSync(hp, 0o755); } catch {}
    created.push(hp);
  }

  const registry = path.join(__dirname, 'logs', 'spec-dev-agents.json');
  ensureDir(path.dirname(registry));
  fs.writeFileSync(registry, JSON.stringify({ timestamp: new Date().toISOString(), created }, null, 2));
  console.log(`Spec-dev factory applied ${created.length} change(s)`);
}

main();


