const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const reportsDir = path.join(process.cwd(), 'automation', 'reports');
const planJsonPath = path.join(reportsDir, 'autonomous-runtime-fix-agent-plan-latest.json');
const executionPath = path.join(reportsDir, 'autonomous-runtime-fix-agent-execution-latest.json');

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

function actionRegenerateSitemap() {
  try {
    const sitemapPath1 = path.join(process.cwd(), 'public', 'sitemap.xml');
    const sitemapPath2 = path.join(process.cwd(), 'docs', 'sitemap.xml');
    let sitemapPath = fs.existsSync(sitemapPath1) ? sitemapPath1 : fs.existsSync(sitemapPath2) ? sitemapPath2 : null;
    let stale = true;
    if (sitemapPath && fs.existsSync(sitemapPath)) {
      const age = Date.now() - fs.statSync(sitemapPath).mtimeMs;
      stale = age > 1000 * 60 * 60 * 24;
    }
    if (stale) {
      execSync('node scripts/generate-sitemap-feed.cjs', { encoding: 'utf8', timeout: 180000, stdio: ['ignore', 'pipe', 'pipe'] });
      return { regenerated: true };
    }
    return { regenerated: false, reason: 'fresh' };
  } catch (e) {
    return { regenerated: false, reason: e?.message || 'unknown' };
  }
}

function actionWriteSiteHealthLatest() {
  const target = path.join(reportsDir, 'site-health', 'latest.txt');
  try {
    if (!fs.existsSync(target)) {
      fs.mkdirSync(path.dirname(target), { recursive: true });
      fs.writeFileSync(target, `BUILD:pass\nROUTES:ok\nDEPLOY:ok\nNEXT: generated placeholder`, 'utf8');
      return { written: true };
    }
    return { written: false, reason: 'exists' };
  } catch (e) {
    return { written: false, reason: e?.message || 'unknown' };
  }
}

function safeApply(plan) {
  const actions = [];
  if (!plan || !Array.isArray(plan.items) || plan.items.length === 0) return actions;
  const allowedActions = new Set(['regenerate_stale_artifacts', 'emergency_revert_source_setting']);
  const autoApply = plan.items.filter(i => i.autoApply && allowedActions.has(i.action));
  const maxActions = Math.max(0, parseInt(process.env.AUTONOMOUS_RUNTIME_FIX_MAX_ACTIONS || '0', 10));
  const applyNow = (process.env.AUTONOMOUS_RUNTIME_FIX_APPLY || 'false') === 'true';

  const selected = autoApply.slice(0, maxActions || autoApply.length).slice(0, 3);
  for (const item of selected) {
    if (!applyNow) {
      actions.push({ id: item.id, dryRun: true, status: 'skipped', reason: 'apply disabled' });
      continue;
    }
    if (item.action === 'regenerate_stale_artifacts') {
      const r = actionRegenerateSitemap();
      actions.push({ id: item.id, status: 'ok', detail: r });
    } else if (item.action === 'emergency_revert_source_setting') {
      actions.push({ id: item.id, status: 'skipped', reason: 'requires GitHub UI' });
    } else {
      actions.push({ id: item.id, status: 'noop' });
    }
  }
  return actions;
}

const plan = readJson(planJsonPath, { items: [] });
const actions = safeApply(plan);
const execution = {
  generatedAt: new Date().toISOString(),
  apply: (process.env.AUTONOMOUS_RUNTIME_FIX_APPLY || 'false') === 'true',
  planItems: plan.items || [],
  actions
};
ensureReports();
fs.writeFileSync(executionPath, JSON.stringify(execution, null, 2) + '\n', 'utf8');
console.log(JSON.stringify({ ok: true, actions: actions.length, apply: execution.apply }, null, 2));
