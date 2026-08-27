#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');
const { execFile } = require('child_process');
const { promisify } = require('util');
const execFileP = promisify(execFile);

const REPORT_PATH = path.join(process.cwd(), 'automation', 'reports', 'site-improvement-agent-latest.json');
const DEFAULT_BASE = 'https://ziontechgroup.com';

function parseCli(argv) {
  const out = { base: DEFAULT_BASE, check: 'catalog' };
  for (let i = 2; i < argv.length; i += 2) {
    if (argv[i] === '--base' && i + 1 < argv.length) {
      out.base = argv[i + 1];
    }
    if (argv[i] === '--check' && i + 1 < argv.length) {
      out.check = argv[i + 1];
    }
  }
  return out;
}

const cli = parseCli(process.argv);

async function exists(file) {
  try {
    await fs.access(file);
    return true;
  } catch {
    return false;
  }
}

async function runSiteCheck() {
  const candidates = [
    ['./automation/site_integrity_run.py', 'python'],
    ['./automation/verify_200.py', 'python'],
  ];

  for (const [script, runner] of candidates) {
    if (await exists(script)) {
      try {
        const args = [script, cli.base];
        const { stdout } = await execFileP(runner, args, {
          maxBuffer: 50 * 1024 * 1024,
          timeout: 5 * 60 * 1000,
        });
        return { ok: true, script, runner, base: cli.base, output: (stdout || '').slice(0, 20000) };
      } catch (err) {
        return { ok: false, script, runner, base: cli.base, output: (err.stdout || err.message || '').slice(0, 20000) };
      }
    }
  }

  return { ok: false, script: null, runner: null, base: cli.base, output: 'No usable site check script found.' };
}

async function runCatalogCheck() {
  const requiredPaths = [
    '/',
    '/services/',
    '/services/-aiops/',
    '/about/',
    '/contact/',
    '/blog/ai-first-anti-fraud-and-payment-intelligence-in-2026/',
  ];

  const requiredStrings = [
    'ziontechgroup.com',
    'calendly.com/kleber-ziontechgroup',
    'free',
    'AI',
    'services',
  ];

  const results = [];
  let broken = 0;

  for (const p of requiredPaths) {
    const url = cli.base.replace(/\/$/, '') + p;
    let ok = false;
    let body = '';
    let missingStrings = [];

    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 20000);
      const res = await fetch(url, { signal: controller.signal, redirect: 'manual' });
      clearTimeout(timer);
      ok = res.ok;
      if (ok) {
        body = await res.text();
        missingStrings = requiredStrings.filter((s) => !body.includes(s));
      }
    } catch (err) {
      ok = false;
      body = String(err);
    }

    if (!ok || missingStrings.length) {
      broken++;
    }

    results.push({ path: p, ok, missingStrings });
  }

  return { base: cli.base, checked: requiredPaths.length, broken, results };
}

async function main() {
  const check = await runSiteCheck();
  const catalog = check.ok ? null : await runCatalogCheck();
  const result = {
    timestamp: new Date().toISOString(),
    event: 'scheduled',
    action: 'ai-site-improvement-agent',
    base: cli.base,
    mode: cli.check,
    siteCheck: {
      continuation: check.ok,
      script: check.script,
      runner: check.runner,
      output: check.output,
    },
    catalogCheck: catalog,
  };

  await fs.mkdir(path.dirname(REPORT_PATH), { recursive: true });
  await fs.writeFile(REPORT_PATH, JSON.stringify(result, null, 2), 'utf8');
  console.log(`Saved report: ${REPORT_PATH}`);

  const brokenCatalog = catalog ? catalog.broken : 0;
  if (brokenCatalog) {
    console.log(`CATALOG_BROKEN=${brokenCatalog}`);
    result.catalogBroken = brokenCatalog;
    result.siteCheckFailed = !check.ok;
    result.failureReason = !check.ok ? `site_check_failed: ${String(check.output || '').slice(0, 4000)}` : null;
    process.exitCode = 1;
  } else if (!check.ok) {
    console.log('SITE_CHECK_FAILED=1');
    result.catalogBroken = 0;
    result.siteCheckFailed = true;
    result.failureReason = String(check.output || 'site_integrity_run_failed').slice(0, 4000);
    process.exitCode = 1;
  } else {
    result.catalogBroken = 0;
    result.siteCheckFailed = false;
    process.exitCode = 0;
  }

  await fs.writeFile(REPORT_PATH, JSON.stringify(result, null, 2), 'utf8');
  console.log(`Saved report: ${REPORT_PATH}`);
  console.log(JSON.stringify(result, null, 2));
}

main().catch((err) => {
  console.error('FATAL', err);
  process.exit(1);
});
