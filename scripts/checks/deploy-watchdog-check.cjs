// scripts/checks/deploy-watchdog-check.cjs
// Reads the deploy watchdog report, if present, and summarizes health + timing.
const fs = require('fs');
const path = require('path');

const reportPath = path.join(process.cwd(), 'automation/reports/deploy-watchdog-latest.json');
const buildStatePath = path.join(process.cwd(), 'automation/reports/build-state.json');

if (fs.existsSync(buildStatePath)) {
  try {
    const bs = JSON.parse(fs.readFileSync(buildStatePath, 'utf8'));
    const cls = bs.exitCode === 0 ? 'likely_postbuild_or_pages_packaging' : 'likely_next_build_failure';
    console.log(`build state exitCode=${bs.exitCode ?? 'unknown'} durationMs=${bs.durationMs ?? 'unknown'} classification=${cls}`);
    if (bs.artifacts) console.log(`build artifacts=${JSON.stringify(bs.artifacts)}`);
  } catch (e) {
    console.log('build state unreadable:', String(e.message || e).split('\n')[0]);
  }
}

if (!fs.existsSync(reportPath)) {
  console.log('no deploy watchdog report yet');
  process.exit(0);
}

const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));

const results = Array.isArray(report.results) ? report.results : [];
const withTiming = results.filter(r => r && typeof r.durationMs === 'number');

const healthyCount = results.filter(r => r && r.status === 'healthy').length;
const ratio = `${healthyCount}/${results.length || '?'} healthy`;

const summary = {
  generatedAt: report.generatedAt ?? report.timestamp,
  healthyRatio: ratio,
  unhealthyCount: report.unhealthyCount ?? results.filter(r => r && r.status !== 'healthy').length,
  source: report.source ?? 'deploy-watchdog',
  timedRoutes: withTiming.length,
};

if (withTiming.length) {
  const durations = withTiming.map(r => r.durationMs);
  const min = Math.min(...durations);
  const max = Math.max(...durations);
  const avg = durations.reduce((a, b) => a + b, 0) / durations.length;
  const slowest = withTiming
    .slice()
    .sort((a, b) => b.durationMs - a.durationMs)
    .slice(0, 5)
    .map(r => ({ route: r.route ?? r.url, durationMs: Math.round(r.durationMs) }));

  summary.timingMs = {
    min: Math.round(min),
    avg: Math.round(avg),
    max: Math.round(max),
    slowest,
  };
}

console.log(`deploy watchdog report=${JSON.stringify(summary)}`);
