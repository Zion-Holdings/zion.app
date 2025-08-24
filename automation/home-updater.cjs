#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const PAGES_DIR = path.join(ROOT, 'pages');
const INDEX_FILE = path.join(PAGES_DIR, 'index.tsx');
const WF_DIR = path.join(ROOT, '.github', 'workflows');

function readFileSafe(fp) { try { return fs.readFileSync(fp, 'utf8'); } catch { return ''; } }
function writeFile(fp, content) { fs.writeFileSync(fp, content, 'utf8'); }
function fileExists(fp) { return fs.existsSync(fp); }

function discoverPages() {
  const entries = [];
  const add = (route, label, desc) => {
    if (route === '/' || route === '/_app') return;
    entries.push({ route, label, desc });
  };

  // Top-level .tsx files
  for (const name of fs.readdirSync(PAGES_DIR)) {
    const full = path.join(PAGES_DIR, name);
    const stat = fs.statSync(full);
    if (stat.isFile() && name.endsWith('.tsx') && !name.startsWith('_')) {
      if (name === 'index.tsx') continue;
      const base = name.replace(/\.tsx$/, '');
      const route = `/${base}`;
      const meta = describeRoute(route);
      add(route, meta.label, meta.desc);
    }
  }

  // Subdirectories with index.tsx
  for (const name of fs.readdirSync(PAGES_DIR)) {
    const dir = path.join(PAGES_DIR, name);
    if (!fs.existsSync(dir) || !fs.statSync(dir).isDirectory()) continue;
    const idx = path.join(dir, 'index.tsx');
    if (fileExists(idx)) {
      const route = `/${name}`;
      const meta = describeRoute(route);
      add(route, meta.label, meta.desc);
    }
  }

  // Dedupe by route and sort by label
  const seen = new Set();
  const out = [];
  for (const e of entries) { if (!seen.has(e.route)) { seen.add(e.route); out.push(e); } }
  out.sort((a, b) => a.label.localeCompare(b.label));
  return out;
}

function describeRoute(route) {
  const pretty = (s) => s.replace(/[-_]/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase());
  const defaults = {
    '/automation': { label: 'Automation Status', desc: 'Live agents & reports' },
    '/newsroom': { label: 'Newsroom', desc: 'Latest autonomous updates' },
    '/site-health': { label: 'Site Health', desc: 'Audits & insights' },
  };
  if (defaults[route]) return defaults[route];
  return { label: pretty(route.slice(1)), desc: 'Explore more' };
}

function generateExploreSection(links) {
  const items = links.map((l) => `
            <Link href="${l.route}"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">${escapeTsx(
    `${l.label} — ${l.desc}`
  )}</span></a></Link>`).join('\n\n');

  return `
<section className="mx-auto max-w-7xl px-6 pb-16">
  <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Explore more</h2>
  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
${items}
  </div>
</section>`;
}

function escapeTsx(s) { return String(s).replace(/`/g, '\\`'); }

function replaceBetweenMarkers(content, newInner) {
  const start = '{/* AUTO-GENERATED: HOME_UPDATER_START */}';
  const end = '{/* AUTO-GENERATED: HOME_UPDATER_END */}';
  const sIdx = content.indexOf(start);
  const eIdx = content.indexOf(end);
  if (sIdx === -1 || eIdx === -1 || eIdx < sIdx) return content; // no markers found
  const before = content.slice(0, sIdx + start.length);
  const after = content.slice(eIdx);
  return `${before}\n${newInner}\n${after}`;
}

function fixHeroActionLink(content) {
  // Find first actions link
  const re = /(https:\/\/github\.com\/[A-Za-z0-9_-]+\/[A-Za-z0-9_.-]+\/actions\/workflows\/)([A-Za-z0-9_.-]+\.yml)/;
  const m = content.match(re);
  if (!m) return content;
  const [, base, file] = m;
  const target = path.join(WF_DIR, file);
  if (fileExists(target)) return content; // ok

  // Choose a good existing workflow
  const preferred = [
    'autonomous-cloud.yml',
    'autonomous-cloud-automations.yml',
    'autonomous-cloud-runner.yml',
    'automation-guardian-10min.yml',
  ];
  let pick = null;
  for (const p of preferred) { if (fileExists(path.join(WF_DIR, p))) { pick = p; break; } }
  if (!pick) {
    const files = fs.readdirSync(WF_DIR).filter((n) => n.endsWith('.yml') || n.endsWith('.yaml'));
    pick = files[0];
  }
  if (!pick) return content;
  return content.replace(re, `${m[1]}${pick}`);
}

function main() {
  const original = readFileSafe(INDEX_FILE);
  if (!original) {
    console.log('Homepage not found at', INDEX_FILE);
    process.exit(0);
  }

  const links = discoverPages();
  // Ensure key destinations are present near the top
  const wanted = ['/automation', '/newsroom', '/site-health'];
  const byRoute = new Map(links.map((l) => [l.route, l]));
  const curated = [];
  for (const r of wanted) { if (byRoute.has(r)) curated.push(byRoute.get(r)); }
  for (const l of links) { if (!wanted.includes(l.route)) curated.push(l); }

  const section = generateExploreSection(curated);
  let updated = replaceBetweenMarkers(original, section);
  updated = fixHeroActionLink(updated);

  if (updated !== original) {
    writeFile(INDEX_FILE, updated);
    console.log('Homepage updated.');
  } else {
    console.log('No homepage changes needed.');
  }
}

main();