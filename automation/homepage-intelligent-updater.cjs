#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '..');
const WORKSPACE_ROOT = path.resolve(__dirname, '..');
const INDEX_PAGE_PATH = path.join(WORKSPACE_ROOT, 'pages', 'index.tsx');

const START_MARK = '/* AUTO-GENERATED: HOME_UPDATER_START */';
const END_MARK = '/* AUTO-GENERATED: HOME_UPDATER_END */';

function safeReadJson(filePath, fallback = null) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(content);
  } catch (_err) {
    return fallback;
  }
}

function countFiles(dirPath, filterFn = () => true) {
  try {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    return entries.filter((e) => e.isFile() && filterFn(e.name)).length;
  } catch (_err) {
    return 0;
  }
}

function listFiles(dirPath, filterFn = () => true, limit = 12) {
  try {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    return entries
      .filter((e) => e.isFile() && filterFn(e.name))
      .map((e) => e.name)
      .slice(0, limit);
  } catch (_err) {
    return [];
  }
}

function exists(p) {
  try {
    fs.accessSync(p, fs.constants.F_OK);
    return true;
  } catch (_err) {
    return false;
  }
}

function formatNumber(n) {
  return Intl.NumberFormat('en-US').format(n);
}

function deriveSignals() {
  const pkgJson = safeReadJson(path.join(WORKSPACE_ROOT, 'package.json'), {});
  const workflowsDir = path.join(WORKSPACE_ROOT, '.github', 'workflows');
  const automationsDir = path.join(WORKSPACE_ROOT, 'automation');
  const scriptsDir = path.join(WORKSPACE_ROOT, 'scripts');
  const reportsDir = path.join(WORKSPACE_ROOT, 'data', 'reports');

  const workflowsCount = countFiles(workflowsDir, (n) => n.endsWith('.yml') || n.endsWith('.yaml'));
  const automationFilesCount = countFiles(automationsDir, (n) => /\.(cjs|mjs|js)$/.test(n));
  const scriptsFilesCount = countFiles(scriptsDir, (n) => /\.(cjs|mjs|js|ts)$/.test(n));

  const recentWorkflows = listFiles(
    workflowsDir,
    (n) => (n.endsWith('.yml') || n.endsWith('.yaml')) && /autonom|auto|optimize|audit|seo|image|link|sitemap|guardian|lighthouse/i.test(n),
    8
  );

  const sampleAutomations = listFiles(
    automationsDir,
    (n) => /orchestrator|analyzer|factory|optimizer|scanner|generator|guardian|cron/i.test(n),
    10
  );

  // Optional signals from reports
  const radarMetrics = safeReadJson(path.join(reportsDir, 'repo-radar-metrics.json'), {});
  const knowledgeGraphExists = exists(path.join(reportsDir, 'repo-knowledge-graph.json'));

  const stars = radarMetrics.stars || null;
  const contributors = radarMetrics.contributors || null;

  return {
    projectName: pkgJson.name || 'Zion',
    workflowsCount,
    automationFilesCount,
    scriptsFilesCount,
    recentWorkflows,
    sampleAutomations,
    knowledgeGraphExists,
    stars,
    contributors,
  };
}

function buildMarketingContent(signals) {
  const metricsBadges = [
    `${formatNumber(signals.workflowsCount)}+ CI workflows`,
    `${formatNumber(signals.automationFilesCount)}+ automation modules`,
    `${formatNumber(signals.scriptsFilesCount)}+ utility scripts`,
  ];

  const features = [
    'Self‑improving agents invent and evolve automations',
    'Direct commit to main with safe guardrails',
    'Cloud‑native, zero manual ops',
    'Observability with logs, reports, and artifacts',
  ];

  const capabilities = [
    'Code quality, linting, and safe refactors',
    'SEO, content curation, and sitemap automation',
    'Performance tuning, image optimization, and a11y audits',
  ];

  const benefits = [
    '24/7 progress with no human intervention',
    'Fast feedback loop via small, incremental edits',
    'Continuous delivery directly to main',
    'Fewer regressions via layered checks',
  ];

  const signalsList = [];
  if (signals.recentWorkflows.length) {
    signalsList.push(
      `<div className="space-y-2"><div className=\"text-xs uppercase tracking-wide text-white/60\">Active workflows</div>` +
        `<ul className=\"list-disc list-inside text-sm text-white/80\">` +
        signals.recentWorkflows
          .map((w) => `<li>${w.replace(/\.ya?ml$/, '')}</li>`)
          .join('') +
        `</ul></div>`
    );
  }
  if (signals.sampleAutomations.length) {
    signalsList.push(
      `<div className=\"space-y-2\"><div className=\"text-xs uppercase tracking-wide text-white/60\">Automation modules</div>` +
        `<ul className=\"list-disc list-inside text-sm text-white/80\">` +
        signals.sampleAutomations.map((s) => `<li>${s.replace(/\.(cjs|mjs|js)$/,'')}</li>`).join('') +
        `</ul></div>`
    );
  }

  const extraMeta = [];
  if (signals.knowledgeGraphExists) extraMeta.push('Repo knowledge graph');
  if (signals.stars) extraMeta.push(`${formatNumber(signals.stars)} stars`);
  if (signals.contributors) extraMeta.push(`${formatNumber(signals.contributors)} contributors`);

  const metaLine = extraMeta.length
    ? `<div className=\"mt-2 text-xs text-white/60\">${extraMeta.join(' • ')}</div>`
    : '';

  return `
<section className="mx-auto max-w-7xl px-6 pb-20">
  <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Autonomous Highlights</h2>
  <div className="mt-4 flex flex-wrap justify-center gap-2">
    ${metricsBadges
      .map(
        (m) =>
          `<span className=\"rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur\">${m}</span>`
      )
      .join('')}
  </div>
  ${metaLine}

  <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
    <article className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
      <h3 className="text-lg font-semibold">Features</h3>
      <ul className="mt-2 space-y-2 text-sm text-white/80">
        ${features.map((f) => `<li className=\"flex items-start gap-2\"><span className=\"mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-400\"></span><span>${f}</span></li>`).join('')}
      </ul>
    </article>
    <article className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
      <h3 className="text-lg font-semibold">Capabilities</h3>
      <ul className="mt-2 space-y-2 text-sm text-white/80">
        ${capabilities.map((c) => `<li className=\"flex items-start gap-2\"><span className=\"mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400\"></span><span>${c}</span></li>`).join('')}
      </ul>
    </article>
    <article className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
      <h3 className="text-lg font-semibold">Benefits</h3>
      <ul className="mt-2 space-y-2 text-sm text-white/80">
        ${benefits.map((b) => `<li className=\"flex items-start gap-2\"><span className=\"mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400\"></span><span>${b}</span></li>`).join('')}
      </ul>
    </article>
  </div>

  ${signalsList.length ? `<div className=\"mt-8 grid grid-cols-1 gap-5 md:grid-cols-2\">${signalsList.join('')}</div>` : ''}
</section>
`.trim();
}

function replaceSection(fullText, newInner) {
  const startIdx = fullText.indexOf(START_MARK);
  const endIdx = fullText.indexOf(END_MARK);
  if (startIdx === -1 || endIdx === -1 || endIdx < startIdx) {
    throw new Error('Could not find HOME_UPDATER markers in pages/index.tsx');
  }
  const before = fullText.slice(0, startIdx + START_MARK.length);
  const after = fullText.slice(endIdx);

  // Keep indentation from the existing section (best-effort)
  const beforeLineStart = fullText.lastIndexOf('\n', startIdx) + 1;
  const indentation = fullText.slice(beforeLineStart, startIdx).match(/^[ \t]*/)?.[0] || '';
  const replacement = `\n${indentation}${newInner}\n${indentation}`;

  return before + replacement + after;
}

function main() {
  if (!fs.existsSync(INDEX_PAGE_PATH)) {
    console.error('index.tsx not found at', INDEX_PAGE_PATH);
    process.exit(1);
  }

  const original = fs.readFileSync(INDEX_PAGE_PATH, 'utf8');
  const signals = deriveSignals();
  const content = buildMarketingContent(signals);
  const updated = replaceSection(original, content);

  if (updated !== original) {
    fs.writeFileSync(INDEX_PAGE_PATH, updated, 'utf8');
    console.log('Homepage updated between markers.');
  } else {
    console.log('No changes to homepage content.');
  }
}

if (require.main === module) {
  try {
    main();
  } catch (err) {
    console.error('Updater failed:', err?.message || err);
    process.exit(2);
  }
}