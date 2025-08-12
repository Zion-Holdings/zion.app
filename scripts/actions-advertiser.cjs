#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const repoSlug = 'Zion-Holdings/zion.app';
const workflowsDir = path.join(process.cwd(), '.github', 'workflows');
const indexPagePath = path.join(process.cwd(), 'pages', 'index.tsx');
const manifestPath = path.join(process.cwd(), 'public', 'actions-manifest.json');

function readWorkflowInfo(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const nameMatch = content.match(/^\s*name:\s*(.+)$/m);
  const name = nameMatch ? nameMatch[1].trim() : path.basename(filePath);

  const cronMatchesSingle = [...content.matchAll(/cron:\s*'([^']+)'/g)].map(m => m[1]);
  const cronMatchesDouble = [...content.matchAll(/cron:\s*"([^"]+)"/g)].map(m => m[1]);
  const crons = [...cronMatchesSingle, ...cronMatchesDouble];

  return {
    name,
    file: path.basename(filePath),
    relPath: path.relative(process.cwd(), filePath),
    url: `https://github.com/${repoSlug}/actions/workflows/${path.basename(filePath)}`,
    badge: `https://github.com/${repoSlug}/actions/workflows/${path.basename(filePath)}/badge.svg`,
    crons
  };
}

function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  fs.mkdirSync(dir, { recursive: true });
}

function renderScheduleHint(crons) {
  if (!crons || crons.length === 0) return 'on demand / repo events';
  const c = crons[0];
  if (/\*\/?1\s+\*\s+\*\s+\*\s+\*/.test(c)) return 'every minute';
  if (/\*\/[2-5]\s+\*\s+\*\s+\*\s+\*/.test(c)) return `every ${c.split(' ')[0].replace('*/','')} min`;
  if (/0\s+\*\s+\*\s+\*\s+\*/.test(c)) return 'hourly';
  if (/0\s+0\s+\*\s+\*\s+\*/.test(c)) return 'daily';
  if (/0\s+0\s+\*\s+\*\s+[0-6]/.test(c)) return 'weekly';
  return c;
}

function buildSection(actions) {
  const items = actions.map(a => {
    const schedule = renderScheduleHint(a.crons);
    const safeKey = a.name.replace(/"/g, '');
    return `
              <a key="${safeKey}" href="${a.url}" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">${a.name}</div>
                <div className="mt-1 text-sm text-white/75">${schedule}</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">View runs <span aria-hidden>↗</span></div>
              </a>`;
  }).join('\n');

  return `
{/* AUTO-GENERATED: ACTIONS_ADS_START */}
<section className="mx-auto max-w-7xl px-6 pb-16">
  <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">GitHub Actions — Live Automations</h2>
  <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Autonomous workflows running 24/7 in the cloud. No servers. No manual steps.</p>
  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
${items}
  </div>
</section>
{/* AUTO-GENERATED: ACTIONS_ADS_END */}`;
}

function updateIndexPage(section) {
  let content = fs.readFileSync(indexPagePath, 'utf8');
  const startMarker = '{/* AUTO-GENERATED: ACTIONS_ADS_START */}';
  const endMarker = '{/* AUTO-GENERATED: ACTIONS_ADS_END */}';

  if (content.includes(startMarker) && content.includes(endMarker)) {
    const start = content.indexOf(startMarker);
    const end = content.indexOf(endMarker) + endMarker.length;
    content = content.slice(0, start) + section + content.slice(end);
  } else {
    const homeUpdaterStart = '{/* AUTO-GENERATED: HOME_UPDATER_START */}';
    if (content.includes(homeUpdaterStart)) {
      content = content.replace(homeUpdaterStart, section + '\n        ' + homeUpdaterStart);
    } else {
      // Fallback: append near the end before </main>
      content = content.replace(/\n\s*<\/main>/, `\n${section}\n</main>`);
    }
  }
  fs.writeFileSync(indexPagePath, content, 'utf8');
}

function main() {
  if (!fs.existsSync(workflowsDir)) {
    console.error('No workflows dir found at', workflowsDir);
    process.exit(0);
  }
  const files = fs.readdirSync(workflowsDir).filter(f => f.endsWith('.yml') || f.endsWith('.yaml'));
  const actions = files.map(f => readWorkflowInfo(path.join(workflowsDir, f)))
    .sort((a, b) => a.name.localeCompare(b.name));

  ensureDir(manifestPath);
  fs.writeFileSync(manifestPath, JSON.stringify({ repo: repoSlug, generatedAt: new Date().toISOString(), actions }, null, 2));

  const section = buildSection(actions);
  updateIndexPage(section);
  console.log(`Updated homepage with ${actions.length} workflows and wrote manifest to public/actions-manifest.json`);
}

main();