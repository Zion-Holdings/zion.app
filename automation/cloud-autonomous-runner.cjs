#!/usr/bin/env node

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'logs');
const logFile = path.join(logsDir, 'cloud-autonomous-runner.log');

function ensureDir(dir) { if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true }); }
function log(msg) {
  const line = `[${new Date().toISOString()}] ${msg}\n`;
  process.stdout.write(`${msg}\n`);
  fs.appendFileSync(logFile, line);
}

function runCmd(name, cmd, args = [], options = {}, timeoutMs = 10 * 60 * 1000) {
  return new Promise((resolve) => {
    log(`▶️ ${name}: ${cmd} ${args.join(' ')}`);
    const child = spawn(cmd, args, { cwd: path.join(__dirname, '..'), env: { ...process.env, CI: 'true', HEADLESS: '1' }, ...options });
    const timer = setTimeout(() => {
      log(`⏱️ ${name}: timeout after ${timeoutMs}ms, killing process`);
      try { child.kill('SIGTERM'); } catch (_) {}
      resolve({ name, code: 124 });
    }, timeoutMs);

    child.stdout.on('data', d => log(`[${name}] ${d.toString().trim()}`));
    child.stderr.on('data', d => log(`[${name}][err] ${d.toString().trim()}`));

    child.on('close', code => {
      clearTimeout(timer);
      log(`✅ ${name}: exited with code ${code}`);
      resolve({ name, code });
    });

    child.on('error', err => {
      clearTimeout(timer);
      log(`❌ ${name}: error ${err.message}`);
      resolve({ name, code: 1, error: err });
    });
  });
}

async function main() {
  ensureDir(logsDir);
  log('🚀 Cloud Autonomous Runner start');

  const steps = [
    () => runCmd('type-check', 'npx', ['tsc', '--noEmit'], {}, 2 * 60 * 1000),
    () => runCmd('lint-quick', 'npx', ['eslint', '.', '--ext', '.js,.jsx,.ts,.tsx', '--max-warnings', '0'], {}, 3 * 60 * 1000),

    // New autonomous improvements
    () => runCmd('robots-sitemap-verify', 'node', ['automation/robots-and-sitemap-verifier.cjs'], {}, 60 * 1000),
    () => runCmd('fast-sitemap', 'node', ['automation/fast-sitemap-runner.cjs'], {}, 2 * 60 * 1000),
    () => runCmd('structured-data-injector', 'node', ['automation/seo-structured-data-injector.cjs'], {}, 3 * 60 * 1000),

    // Existing analyzers/factories
    () => runCmd('seo-optimizer', 'node', ['automation/seo-optimizer.cjs'], {}, 2 * 60 * 1000),
    () => runCmd('security-scanner', 'node', ['automation/security-scanner.cjs'], {}, 2 * 60 * 1000),
    () => runCmd('frontend-sync:analyze', 'node', ['automation/frontend-sync-analyzer.cjs'], {}, 2 * 60 * 1000),
    () => runCmd('frontend-sync:factory', 'node', ['automation/frontend-sync-factory.cjs'], {}, 3 * 60 * 1000),
    () => runCmd('responsive:analyzer', 'node', ['automation/responsive-content-analyzer.cjs'], {}, 2 * 60 * 1000),
    () => runCmd('responsive:factory', 'node', ['automation/responsive-content-factory.cjs'], {}, 3 * 60 * 1000),
    () => runCmd('variation:analyzer', 'node', ['automation/variation-analyzer.cjs'], {}, 2 * 60 * 1000),
    () => runCmd('variation:factory', 'node', ['automation/variation-factory.cjs'], {}, 3 * 60 * 1000),
    () => runCmd('links:crawl', 'node', ['automation/site-link-crawler.cjs'], {}, 2 * 60 * 1000),
    () => runCmd('links:fix', 'node', ['automation/site-link-fixer.cjs'], {}, 2 * 60 * 1000),
    () => runCmd('content-autogen:run-once', 'node', ['automation/content-autogen-orchestrator.cjs', 'run-once'], {}, 2 * 60 * 1000),

    // Build check
    () => runCmd('build', 'npm', ['run', 'build'], {}, 8 * 60 * 1000),
  ];

  const results = [];
  for (const step of steps) {
    try {
      const res = await step();
      results.push(res);
    } catch (e) {
      log(`❌ Step exception: ${e.message}`);
      results.push({ name: 'unknown', code: 1, error: e });
    }
  }

  const summary = {
    timestamp: new Date().toISOString(),
    results,
  };
  fs.writeFileSync(path.join(logsDir, 'cloud-autonomous-summary.json'), JSON.stringify(summary, null, 2));
  log('🏁 Cloud Autonomous Runner complete');
}

if (require.main === module) {
  main().catch(err => { log(`Fatal error: ${err.message}`); process.exit(1); });
}