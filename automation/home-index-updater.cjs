#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const REPO_ROOT = process.cwd();
const INDEX_FILE = path.join(REPO_ROOT, 'pages', 'index.tsx');
const WORKFLOWS_DIR = path.join(REPO_ROOT, '.github', 'workflows');
const AUTOMATION_DIR = path.join(REPO_ROOT, 'automation');

const MARKER_START = '/* AUTO-GENERATED: HOME_UPDATER_START */';
const MARKER_END = '/* AUTO-GENERATED: HOME_UPDATER_END */';

function readFileSafe(filePath) {
  try { return fs.readFileSync(filePath, 'utf8'); } catch { return ''; }
}

function listFilesSafe(dirPath, filterFn) {
  try {
    const items = fs.readdirSync(dirPath);
    return filterFn ? items.filter(filterFn) : items;
  } catch {
    return [];
  }
}

function getRepoSlugFromPackageJson() {
  const pkgPath = path.join(REPO_ROOT, 'package.json');
  try {
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
    const url = pkg?.repository?.url || '';
    const m = url.match(/github\.com\/(.+?)\.git$/i);
    return m ? m[1] : '';
  } catch {
    return '';
  }
}

function getRecentCommitCount(hours = 24) {
  try {
    const raw = execSync(`git log --since="${hours} hours" --pretty=oneline | wc -l`, { encoding: 'utf8' }).trim();
    const n = parseInt(raw, 10);
    return Number.isFinite(n) ? n : 0;
  } catch {
    return 0;
  }
}

function pickTopWorkflows(limit = 4) {
  const files = listFilesSafe(WORKFLOWS_DIR, (f) => f.endsWith('.yml') || f.endsWith('.yaml'));
  const top = [];
  for (const f of files) {
    const fp = path.join(WORKFLOWS_DIR, f);
    const content = readFileSafe(fp);
    const match = content.match(/^name:\s*(.+)$/m);
    const name = match ? match[1].trim() : f.replace(/\.(yml|yaml)$/i, '');
    top.push({ file: f, name });
  }
  // Prefer workflows that sound relevant to homepage/content/marketing
  top.sort((a, b) => {
    const rank = (x) => (/home|promo|marketing|auto|cloud|orchestrator|optimiz|seo/i.test(x.name) ? 0 : 1);
    const ra = rank(a), rb = rank(b);
    if (ra !== rb) return ra - rb;
    return a.name.localeCompare(b.name);
  });
  return top.slice(0, limit);
}

function pickInterestingAutomations(limit = 4) {
  const files = listFilesSafe(AUTOMATION_DIR, (f) => /\.(cjs|js|mjs)$/i.test(f));
  const scored = files
    .filter((f) => !/home-index-updater\.cjs$/.test(f))
    .map((f) => {
      let score = 0;
      if (/orchestrator|autonomous|cloud|guardian|optimizer|healer|seo|marketing/i.test(f)) score += 5;
      if (/auto|link|image|sitemap|security/i.test(f)) score += 2;
      return { file: f, score };
    })
    .sort((a, b) => b.score - a.score || a.file.localeCompare(b.file));

  return scored.slice(0, limit).map((x) => x.file);
}

function buildSection({ repoSlug, stats, workflows, automations }) {
  const actionsBase = repoSlug ? `https://github.com/${repoSlug}/actions/workflows/` : '';

  // Build stat chips
  const statChips = [
    { k: 'Automations', v: String(stats.automations) },
    { k: 'Workflows', v: String(stats.workflows) },
    { k: 'Commits/24h', v: String(stats.commits24h) },
    { k: 'Cloud', v: 'Autonomous' },
  ]
    .map((s) => `
                <div className="glow-card rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left">
                  <div className="text-lg font-bold text-white">${s.v}</div>
                  <div className="text-xs text-white/70">${s.k}</div>
                </div>`)
    .join('\n');

  // Build links grid
  const internalLinks = [
    { href: '/automation', label: 'Automation Status — live agents & reports' },
    { href: '/newsroom', label: 'Newsroom — latest autonomous updates' },
    { href: '/site-health', label: 'Site Health — audits & insights' },
    { href: '/contact', label: 'Contact — discuss your use‑case' },
  ]
    .map((l) => `
            <Link href="${l.href}"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">${l.label}</span></a></Link>`)
    .join('\n\n');

  const workflowLinks = (workflows || [])
    .map((w) => {
      const href = actionsBase ? `${actionsBase}${encodeURIComponent(w.file)}` : '#';
      return `
            <a href="${href}" target="_blank" rel="noopener" className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">${w.name} — live runs</span></a>`;
    })
    .join('\n\n');

  const automationBadges = (automations || [])
    .map((f) => `
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">${f.replace(/\.(cjs|js|mjs)$/i, '')}</span>`)
    .join('\n');

  const section = `
<section className="mx-auto max-w-7xl px-6 pb-16">
  <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Explore more</h2>

  <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
${statChips}
  </div>

  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
${internalLinks}

${workflowLinks}
  </div>

  <div className="mt-6 flex flex-wrap gap-2">
${automationBadges}
  </div>
</section>`;

  return section.trim() + '\n';
}

function updateIndexSection(newSection) {
  const src = readFileSafe(INDEX_FILE);
  if (!src.includes(MARKER_START) || !src.includes(MARKER_END)) {
    console.error('Markers not found in pages/index.tsx; aborting.');
    process.exit(0);
  }
  const [before, rest] = src.split(MARKER_START);
  const [_, after] = rest.split(MARKER_END);
  const next = `${before}${MARKER_START}\n${newSection}${MARKER_END}${after}`;
  if (next === src) {
    console.log('Home index already up to date.');
    return false;
  }
  fs.writeFileSync(INDEX_FILE, next);
  console.log('Updated homepage section.');
  return true;
}

(function main() {
  const repoSlug = getRepoSlugFromPackageJson();
  const workflows = pickTopWorkflows(4);
  const automations = pickInterestingAutomations(8);
  const stats = {
    automations: listFilesSafe(AUTOMATION_DIR, (f) => /\.(cjs|js|mjs)$/i.test(f)).length,
    workflows: listFilesSafe(WORKFLOWS_DIR, (f) => /\.(yml|yaml)$/i.test(f)).length,
    commits24h: getRecentCommitCount(24),
  };
  const section = buildSection({ repoSlug, stats, workflows, automations });
  const changed = updateIndexSection(section);
  if (!changed) process.exit(0);
})();