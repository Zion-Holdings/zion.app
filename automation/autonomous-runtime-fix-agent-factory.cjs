const fs = require('fs');
const path = require('path');
const os = require('os');

const reportsDir = path.join(process.cwd(), 'automation', 'reports');
const queuePath = path.join(reportsDir, 'autonomous-runtime-fix-agent-queue.json');
const planJsonPath = path.join(reportsDir, 'autonomous-runtime-fix-agent-plan-latest.json');
const planMdPath = path.join(reportsDir, 'autonomous-runtime-fix-agent-plan-latest.md');

function ensureReports() {
  if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir, { recursive: true });
}

function readJson(file, fallback) {
  try {
    if (!fs.existsSync(file)) return fallback;
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch {
    return fallback;
  }
}

function findRecentGuardianFailures(maxAgeMs) {
  const historyPath = path.join(reportsDir, 'autonomous-runtime-guardian-history.json');
  const history = readJson(historyPath, []);
  const now = Date.now();
  return history.filter(entry => {
    const age = now - new Date(entry.ts).getTime();
    return age <= maxAgeMs && ['warning', 'critical'].includes(entry.status);
  });
}

function buildPlan() {
  ensureReports();
  const maxAgeMs = 1000 * 60 * 60;
  const recent = findRecentGuardianFailures(maxAgeMs);
  const queue = readJson(queuePath, []);
  const planItems = [];

  const signatures = new Set();
  for (const evt of recent.slice(-10)) {
    const id = `${evt.status}-${new Date(evt.ts).toISOString().slice(0, 16)}`;
    if (signatures.has(id)) continue;
    signatures.add(id);
    const item = {
      id,
      source: 'autonomous-runtime-guardian',
      status: evt.status,
      ts: evt.ts,
      action: evt.status === 'critical' ? 'emergency_revert_source_setting' : 'regenerate_stale_artifacts',
      autoApply: evt.status === 'warning',
      risk: evt.status === 'critical' ? 'high' : 'low',
      target: ['Pages source setting', 'site-health artifacts']
    };
    planItems.push(item);
    queue.push(item);
  }

  if (queue.length < 3) {
    const housekeeping = [
      { id: 'hk-sitemap-refresh', source: 'factory-default', status: 'warning', ts: new Date().toISOString(), action: 'regenerate_stale_artifacts', autoApply: true, risk: 'low', target: ['sitemap.xml'] },
      { id: 'hk-health-summary-refresh', source: 'factory-default', status: 'warning', ts: new Date().toISOString(), action: 'regenerate_stale_artifacts', autoApply: true, risk: 'low', target: ['automation/reports/site-health/latest.txt'] }
    ];
    queue.push(...housekeeping);
  }

  const plan = {
    generatedAt: new Date().toISOString(),
    maxActions: parseInt(process.env.AUTONOMOUS_RUNTIME_FIX_MAX_ACTIONS || '3', 10),
    items: planItems.slice(0, 5)
  };

  const md = [
    '# Autonomous runtime fix-agent plan',
    `- generatedAt: ${plan.generatedAt}`,
    `- maxActions: ${plan.maxActions}`,
    '',
    '| id | status | action | risk | autoApply | target |',
    '| --- | --- | --- | --- | --- | --- |'
  ]
    .concat(plan.items.map(i => `| ${i.id} | ${i.status} | ${i.action} | ${i.risk} | ${i.autoApply} | ${(i.target || []).join(', ')} |`))
    .join('\n') + '\n';

  fs.writeFileSync(planJsonPath, JSON.stringify(plan, null, 2) + '\n', 'utf8');
  fs.writeFileSync(planMdPath, md, 'utf8');
  fs.writeFileSync(queuePath, JSON.stringify(queue.slice(-50), null, 2) + '\n', 'utf8');

  const apply = (process.env.AUTONOMOUS_RUNTIME_FIX_APPLY || 'false') === 'true';
  console.log(JSON.stringify({ ok: true, apply, planItems: plan.items.length, queue: queue.length }, null, 2));
}

buildPlan();
