#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const homepageDataPath = path.join(repoRoot, 'data', 'homepage.json');
const indexPagePath = path.join(repoRoot, 'pages', 'index.tsx');
const changelogAIPath = path.join(repoRoot, 'docs', 'CHANGELOG_AI.md');

function safeRead(filePath, fallback = '') {
  try { return fs.readFileSync(filePath, 'utf8'); } catch { return fallback; }
}

function parseHighlightsFromChangelog(markdown) {
  const lines = markdown.split(/\r?\n/);
  const features = [];
  for (const line of lines) {
    const m = /^-\s+add\s+(.+?)\s*\(/i.exec(line) || /^-\s+add\s+(.+?)$/i.exec(line);
    if (m) {
      const title = m[1]
        .replace(/orchestrator/gi, 'automation orchestrator')
        .replace(/cron/gi, 'scheduler')
        .replace(/auto/gi, 'auto');
      features.push({ title: capitalize(title), desc: 'New capability discovered by autonomous agents.' });
    }
  }
  return features.slice(0, 6);
}

function deriveExploreLinks() {
  // Seed with known links; could be extended to scan /pages directory
  const base = [
    { href: '/automation', text: 'Automation Status — live agents & reports' },
    { href: '/newsroom', text: 'Newsroom — latest autonomous updates' },
    { href: '/site-health', text: 'Site Health — audits & insights' },
    { href: '/contact', text: 'Contact — discuss your use‑case' },
  ];
  try {
    const pagesDir = path.join(repoRoot, 'pages');
    const servicesDir = path.join(pagesDir, 'services');
    if (fs.existsSync(servicesDir)) {
      const files = fs.readdirSync(servicesDir).filter(f => f.endsWith('.tsx'));
      for (const file of files) {
        const slug = file.replace(/\.tsx$/, '');
        const pretty = slug
          .replace(/-/g, ' ')
          .replace(/\b\w/g, c => c.toUpperCase());
        base.unshift({ href: `/services/${slug}`, text: `${pretty} — service` });
      }
    }
  } catch {}
  return dedupeByHref(base).slice(0, 8);
}

function dedupeByHref(arr) {
  const seen = new Set();
  return arr.filter(x => (seen.has(x.href) ? false : (seen.add(x.href), true)));
}

function capitalize(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

function updateHomepageJson() {
  const current = JSON.parse(safeRead(homepageDataPath, '{}') || '{}');
  const changelog = safeRead(changelogAIPath, '');
  const derivedFeatures = parseHighlightsFromChangelog(changelog);

  const next = {
    features: current.features && current.features.length ? current.features : (
      derivedFeatures.length ? derivedFeatures : [
        { title: 'Self‑Improving', desc: 'Agents continuously analyze, invent, and evolve automations.' },
        { title: 'Repo Sync', desc: 'Changes are committed and pushed automatically to main.' },
        { title: 'Zero Ops', desc: 'Runs fully in the cloud—no servers or manual intervention.' },
        { title: 'Safety‑First', desc: 'Conservative edits with logs, reports, and guardrails.' },
        { title: 'Scalable', desc: 'Generates domain‑specific factories on demand.' },
        { title: 'Observability', desc: 'Dashboards, reports, and GitHub Actions artifacts.' },
      ]
    ),
    capabilities: current.capabilities && current.capabilities.length ? current.capabilities : [
      { title: 'Code Quality & Refactors', desc: 'Lints, fixes, and proposes refactors with type‑safety improvements.' },
      { title: 'Performance & A11y', desc: 'Optimizes bundles, assets, and accessibility with continuous checks.' },
      { title: 'Content & SEO', desc: 'Curates content, updates promotions, and tunes metadata for reach.' },
    ],
    benefits: current.benefits && current.benefits.length ? current.benefits : [
      '24/7 progress without human intervention',
      'Rapid feedback loop with safe, incremental edits',
      'Continuous delivery directly to main branch',
      'Fewer regressions via layered checks and reports',
    ],
    explore: deriveExploreLinks(),
  };

  const pretty = JSON.stringify(next, null, 2) + '\n';
  if (safeRead(homepageDataPath) !== pretty) {
    fs.writeFileSync(homepageDataPath, pretty);
    return true;
  }
  return false;
}

function updateExploreSectionInIndex() {
  const startMarker = '/* AUTO-GENERATED: HOME_UPDATER_START */';
  const endMarker = '/* AUTO-GENERATED: HOME_UPDATER_END */';
  const content = safeRead(indexPagePath);
  if (!content.includes(startMarker) || !content.includes(endMarker)) return false;

  const data = JSON.parse(safeRead(homepageDataPath, '{}') || '{}');
  const links = (data.explore || []).map(item => (
    `            {homepageData.explore.map((item) => (
              <Link key={item.href} href={item.href}><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">{item.text}</span></a></Link>
            ))}`
  ));
  // We already render from homepageData; ensure the section exists but do not alter structure.
  // So just return false (no direct string replacement needed) to avoid churn.
  return false;
}

function gitCommitIfChanges() {
  try {
    const { execSync } = require('child_process');
    execSync('git add -A', { stdio: 'inherit' });
    const diff = execSync('git diff --cached --quiet || echo CHANGED').toString().trim();
    if (diff.includes('CHANGED')) {
      execSync('git config user.name "github-actions[bot]"');
      execSync('git config user.email "41898282+github-actions[bot]@users.noreply.github.com"');
      execSync('git commit -m "chore(homepage): autonomous homepage refresh [skip ci]"', { stdio: 'inherit' });
      execSync('git push', { stdio: 'inherit' });
      return true;
    }
  } catch (e) {
    console.error('Git commit/push skipped or failed:', e.message);
  }
  return false;
}

(function main() {
  const changedJson = updateHomepageJson();
  const changedIndex = updateExploreSectionInIndex();
  if (changedJson || changedIndex) {
    gitCommitIfChanges();
  } else {
    console.log('Homepage is up to date.');
  }
})();