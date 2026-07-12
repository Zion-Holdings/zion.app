#!/usr/bin/env node
/**
 * Performance Budget Enforcer — CI gate for Core Web Vitals
 *
 * Runs Lighthouse on a given URL (preview or production),
 * extracts key metrics (LCP, FID, CLS, FCP, TTFB, overall score),
 * compares to baseline, and fails if thresholds exceeded.
 *
 * Usage: node automation/performance-budget-enforcer.cjs --url <URL> [--baseline-file <path>] [--strict]
 *
 * Exit codes:
 *   0 = PASS (within budget)
 *   1 = FAIL (exceeds hard limit or regression > threshold)
 *
 * Requires: lighthouse, puppeteer (optional but recommended for speed)
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// --- Args ---
const args = process.argv.slice(2);
const get = (name) => {
  const idx = args.indexOf(`--${name}`);
  if (idx >= 0 && idx + 1 < args.length) return args[idx + 1];
  const eq = args.find((a) => a.startsWith(`--${name}=`));
  if (eq) return eq.split('=').slice(1).join('=');
  return undefined;
};
const url = get('url');
const baselineFile = get('baseline-file');
const outputDir = get('output-dir') || '.hermes/memory/performance-budget';
const strict = get('strict') === 'true';

if (!url) {
  console.error('Missing required --url');
  process.exit(1);
}

// --- Default thresholds (configurable via env or flags) ---
const DEFAULT_OUTPUT_DIR = outputDir;

function isLighthouseAvailable() {
  try {
    const rc = execSync('npx --yes lighthouse --version', { stdio: 'pipe', encoding: 'utf8' });
    return Boolean(rc && rc.trim());
  } catch (e) {
    return false;
  }
}

const HARD_LIMITS = {
  LCP: 4.0,      // seconds — critical
  FID: 0.3,      // seconds — critical
  CLS: 0.25,     // critical
  FCP: 3.0,
  TTFB: 2.0,
};

const REGRESSION_THRESHOLD = 0.10; // 10% relative degradation → fail
const MIN_BASELINE_DAYS = 7;

// --- Helpers ---
function log(msg) { console.log(`[${new Date().toISOString()}] ${msg}`); }
function fail(reason) { console.error(`❌ Performance budget check failed: ${reason}`); process.exit(1); }

function runLighthouse(url, outputDir) {
  // Uses local lighthouse CLI (devDep)
  // Generates JSON report with metrics
  outputDir = outputDir || DEFAULT_OUTPUT_DIR;
  fs.mkdirSync(outputDir, { recursive: true });
  const outPath = path.join(outputDir, 'lighthouse-report.json');
  const cmd = `npx --yes lighthouse ${url} --output=json --output-path=${outPath} --chrome-flags="--headless --no-sandbox --disable-gpu" --puppeteer --quiet`;
  try {
    execSync(cmd, { stdio: 'pipe', timeout: 600000 });
  } catch (e) {
    throw new Error('Lighthouse execution failed (timeout or unreachable URL)');
  }
}

function parseReport(reportPath) {
  const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
  const audits = report.audits;
  // Extract metrics; note: values are in seconds
  const getMetric = (id) => {
    const audit = audits[id];
    return audit ? audit.numericValue / 1000 : null; // Lighthouse stores ms; convert to s
  };

  return {
    lcp: getMetric('largest-contentful-paint'),
    fid: getMetric('first-input-delay'), // FID may be null if no input during run
    cls: getMetric('cumulative-layout-shift'),
    fcp: getMetric('first-contentful-paint'),
    ttfb: getMetric('time-to-first-byte'),
    performance: report.categories.performance.score * 100, // 0-100
  };
}

function computeOverallScore(metrics) {
  // Lighthouse's overall performance score is already weighted; use that directly.
  return metrics.performance;
}

function loadBaseline(dir) {
  const baselinePath = path.join(dir, 'baseline.json');
  if (!fs.existsSync(baselinePath)) return null;
  const raw = JSON.parse(fs.readFileSync(baselinePath, 'utf8'));
  // Expect { date, metrics: { lcp, fid, cls, fcp, ttfb, overall } }
  return raw;
}

function saveBaseline(dir, metrics) {
  fs.mkdirSync(dir, { recursive: true });
  const entry = {
    date: new Date().toISOString().split('T')[0],
    metrics,
    updatedAt: Date.now(),
  };
  fs.writeFileSync(path.join(dir, 'baseline.json'), JSON.stringify(entry, null, 2));
  // Append to history (keep 90d)
  const histPath = path.join(dir, 'history.json');
  let history = [];
  if (fs.existsSync(histPath)) history = JSON.parse(fs.readFileSync(histPath, 'utf8'));
  history.push(entry);
  const cutoff = Date.now() - 90 * 24 * 60 * 60 * 1000;
  while (history.length && history[0].updatedAt < cutoff) history.shift();
  fs.writeFileSync(histPath, JSON.stringify(history, null, 2));
}

function compare(metrics, baseline) {
  if (!baseline) return { ok: true, reason: 'No baseline available; using hard limits only' };
  const drops = {};
  for (const key of ['lcp', 'fid', 'cls', 'fcp', 'ttfb', 'overall']) {
    const cur = metrics[key];
    const base = baseline.metrics[key];
    if (!cur || !base) continue;
    const relativeDrop = (base - cur) / base; // positive means got worse (higher time = worse)
    if (relativeDrop > REGRESSION_THRESHOLD) {
      drops[key] = { base, cur, dropPct: relativeDrop * 100 };
    }
  }
  return { ok: Object.keys(drops).length === 0, drops };
}

function checkHardLimits(metrics) {
  const violations = [];
  if (metrics.lcp && metrics.lcp > HARD_LIMITS.LCP) violations.push(`LCP ${metrics.lcp.toFixed(2)}s > ${HARD_LIMITS.LCP}s`);
  if (metrics.fid && metrics.fid > HARD_LIMITS.FID) violations.push(`FID ${metrics.fid.toFixed(2)}s > ${HARD_LIMITS.FID}s`);
  if (metrics.cls && metrics.cls > HARD_LIMITS.CLS) violations.push(`CLS ${metrics.cls.toFixed(2)} > ${HARD_LIMITS.CLS}`);
  if (metrics.fcp && metrics.fcp > HARD_LIMITS.FCP) violations.push(`FCP ${metrics.fcp.toFixed(2)}s > ${HARD_LIMITS.FCP}s`);
  if (metrics.ttfb && metrics.ttfb > HARD_LIMITS.TTFB) violations.push(`TTFB ${metrics.ttfb.toFixed(2)}s > ${HARD_LIMITS.TTFB}s`);
  return violations;
}

// --- Main ---
async function main() {
  log(`🔍 Performance Budget Check — ${url}`);

  // 1. Run Lighthouse
  const reportDir = path.join(outputDir, `run-${Date.now()}`);
  fs.mkdirSync(reportDir, { recursive: true });
  log('   Running Lighthouse...');
  try {
    runLighthouse(url, reportDir);
  } catch (e) {
    fail(`Could not run Lighthouse: ${e.message}`);
  }

  // 2. Parse report
  const reportPath = path.join(reportDir, 'lighthouse-report.json');
  if (!fs.existsSync(reportPath)) fail('Lighthouse report not generated');
  const metrics = parseReport(reportPath);
  log(`   Metrics: LCP=${metrics.lcp?.toFixed(2)||'N/A'}s, FID=${metrics.fid?.toFixed(2)||'N/A'}s, CLS=${metrics.cls?.toFixed(2)||'N/A'}, FCP=${metrics.fcp?.toFixed(2)||'N/A'}s, TTFB=${metrics.ttfb?.toFixed(2)||'N/A'}s, Score=${metrics.performance.toFixed(0)}`);

  // 3. Load baseline
  const baseline = baselineFile && fs.existsSync(baselineFile) ? loadBaseline(baselineFile) : null;

  // 4. Hard limit check
  const hardViolations = checkHardLimits(metrics);
  if (hardViolations.length > 0) {
    console.error('❌ Hard limit violations:\n  - ' + hardViolations.join('\n  - '));
    process.exit(1);
  } else {
    console.log('✅ Hard limits passed');
  }

  // 5. Regression check
  const regression = compare(metrics, baseline);
  if (!regression.ok) {
    console.error('❌ Regression detected vs baseline:');
    for (const [key, info] of Object.entries(regression.drops)) {
      console.error(`   - ${key.toUpperCase()}: ${info.base.toFixed(2)} → ${info.cur.toFixed(2)} (${info.dropPct.toFixed(1)}% worse)`);
    }
    process.exit(1);
  } else if (baseline) {
    console.log('✅ No significant regression vs baseline');
  }

  // 6. Save new baseline if strict mode not enabled (or we can save anyway to update trends)
  // For CI runs on main, we want to update baseline to latest good state.
  // Decide: on PR, don't update; on push to main, update.
  // For now, always save if env IS_MAIN_BRANCH is true
  if (process.env.IS_MAIN_BRANCH === 'true') {
    saveBaseline(outputDir, metrics);
    log('   Baseline updated');
  }

  log('✅ Performance budget check PASSED');
  process.exit(0);
}

main().catch(err => {
  console.error('❌ Unexpected error:', err);
  process.exit(1);
});
