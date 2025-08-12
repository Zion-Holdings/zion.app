const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

function now() {
  const d = new Date();
  return { hour: d.getUTCHours(), dow: d.getUTCDay(), minutes: d.getUTCMinutes() };
}

exports.config = {
  schedule: '*/5 * * * *',
};

exports.handler = async () => {
  const logs = [];
  const { hour, dow, minutes } = now();
  logs.push(`UTC time h=${hour} dow=${dow} m=${minutes}`);

  function step(name, rel, args = []) {
    logs.push(`\n=== ${name} ===`);
    const { status, stdout, stderr } = runNode(rel, args);
    if (stdout) logs.push(stdout);
    if (stderr) logs.push(stderr);
    logs.push(`exit=${status}`);
    return status;
  }

  // Always keep front/home fresh on each tick
  step('front:auto-advertiser', 'automation/front-index-auto-advertiser.cjs');
  step('homepage:updater', 'automation/homepage-updater.cjs');

  // Every 10 minutes, futurize the front
  if (minutes % 10 === 0) {
    step('front:futurizer', 'automation/front-futurizer.cjs');
  }

  // On top of the hour, refresh sitemap and link fixes
  if (minutes % 60 === 0) {
    try { step('site:link-crawl', 'automation/site-link-crawler.cjs'); } catch { logs.push('site:link-crawl failed'); }
    try { step('site:link-fix', 'automation/site-link-fixer.cjs'); } catch { logs.push('site:link-fix failed'); }
    try { step('sitemap', 'automation/sitemap-runner.cjs'); } catch { logs.push('sitemap failed'); }
  }

  // Twice daily (UTC morning/evening): docs + props + search index
  if (minutes % 30 === 0 && (hour === 8 || hour === 20)) {
    try { step('docs:index', 'automation/docs-pages-indexer.cjs'); } catch { logs.push('docs:index failed'); }
    try { step('components:props-docs', 'automation/component-props-docs.cjs'); } catch { logs.push('components:props-docs failed'); }
    try { step('docs:search-index', 'scripts/generate-search-index.js'); } catch { logs.push('docs:search-index failed'); }
  }

  // Weekly cadence: run code smell + topic clusters on Sunday
  if (dow === 0 && minutes % 30 === 0) {
    try { step('code-smell', 'automation/code-smell-audit.cjs'); } catch { logs.push('code-smell failed'); }
    try { step('topics:clusters', 'automation/topic-cluster-builder.cjs'); } catch { logs.push('topics:clusters failed'); }
  }

  step('git:sync', 'automation/advanced-git-sync.cjs');

  return { statusCode: 200, headers: { 'content-type': 'text/plain' }, body: logs.join('\n') };
};