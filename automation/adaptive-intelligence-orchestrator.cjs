#!/usr/bin/env node

// Adaptive Intelligence Orchestrator
// Runs autonomously outside Cursor to keep the repo healthy: lint, type-check,
// build-verify, sitemap/SEO tasks, security checks, and auto git sync.

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class AdaptiveIntelligenceOrchestrator {
  constructor() {
    this.rootDir = path.resolve(__dirname, '..');
    this.automationDir = __dirname;
    this.logsDir = path.join(this.automationDir, 'logs');
    this.logFile = path.join(this.logsDir, 'adaptive-intelligence-orchestrator.log');
    this.metrics = {
      cycles: 0,
      lastCycleAt: null,
      lastResults: {},
      failures: 0
    };
    this.ensureDirectories();
    this.log('🚀 Adaptive Intelligence Orchestrator starting...');
  }

  ensureDirectories() {
    if (!fs.existsSync(this.logsDir)) {
      fs.mkdirSync(this.logsDir, { recursive: true });
    }
  }

  log(message) {
    const ts = new Date().toISOString();
    const line = `[${ts}] ${message}`;
    console.log(line);
    try { fs.appendFileSync(this.logFile, line + '\n'); } catch (_) {}
  }

  run(cmd, opts = {}) {
    try {
      const out = execSync(cmd, { cwd: this.rootDir, stdio: 'pipe', encoding: 'utf8', ...opts });
      this.log(`✅ ${cmd}`);
      return { ok: true, out };
    } catch (e) {
      const err = e.stdout?.toString?.() || e.message || String(e);
      this.log(`❌ ${cmd}\n${err}`);
      return { ok: false, err };
    }
  }

  fileExists(rel) {
    return fs.existsSync(path.join(this.rootDir, rel));
  }

  async sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

  async cycle() {
    this.metrics.cycles += 1;
    this.metrics.lastCycleAt = new Date().toISOString();

    const results = {};

    // 1) Lint
    results.lint = this.run('npm run lint');
    if (!results.lint.ok) {
      if (this.fileExists('automation/lint-error-fixer.cjs')) {
        results.lintFix = this.run('node automation/lint-error-fixer.cjs all');
      } else if (this.fileExists('automation/lint-error-fixer.js')) {
        results.lintFix = this.run('node automation/lint-error-fixer.js');
      }
    }

    // 2) Type-check
    results.typecheck = this.run('npm run type-check');
    if (!results.typecheck.ok) {
      const candidates = [
        'fix_typescript_syntax_errors.cjs',
        'fix_typescript_syntax_errors.js',
        'fix_all_typescript_errors.cjs',
        'fix_all_typescript_errors.js',
        'fix_remaining_errors.cjs',
        'fix_remaining_errors.js'
      ];
      for (const c of candidates) {
        if (this.fileExists(c)) {
          this.run(`node ${c}`);
        }
      }
    }

    // 3) Build check (fast failure tolerated)
    const buildStart = Date.now();
    results.build = this.run('npm run build');
    results.buildMs = Date.now() - buildStart;

    // 4) SEO/Sitemap
    if (this.fileExists('scripts/generate-sitemap.mjs')) {
      results.sitemap = this.run('npm run sitemap');
    }

    // 5) Security scan (if available)
    if (this.fileExists('automation/security-scanner.cjs')) {
      results.security = this.run('node automation/security-scanner.cjs');
    }

    // 6) Performance pass (if available)
    if (this.fileExists('automation/performance-optimizer.cjs')) {
      results.performance = this.run('node automation/performance-optimizer.cjs');
    } else if (this.fileExists('automation/performance-optimizer.js')) {
      results.performance = this.run('node automation/performance-optimizer.js');
    }

    // 7) Auto git sync (prefer existing git-sync orchestrator)
    if (this.fileExists('automation/git-sync.cjs')) {
      results.sync = this.run('node automation/git-sync.cjs');
    } else {
      // Fallback lightweight sync
      const status = this.run('git status --porcelain');
      if (status.ok && status.out.trim().length > 0) {
        this.run('git add -A');
        this.run('git commit -m "chore(ai): adaptive intelligence automated fixes"');
        this.run('git push origin HEAD:main');
      }
    }

    // Save report
    const reportPath = path.join(this.logsDir, 'adaptive-intelligence-report.json');
    const report = {
      timestamp: new Date().toISOString(),
      results: Object.fromEntries(Object.entries(results).map(([k, v]) => [k, {
        ok: !!v?.ok,
        out: v?.out ? String(v.out).slice(0, 2000) : undefined,
        err: v?.err ? String(v.err).slice(0, 2000) : undefined
      }]))
    };
    try { fs.writeFileSync(reportPath, JSON.stringify(report, null, 2)); } catch (_) {}

    if (!results.build.ok || !results.typecheck.ok) this.metrics.failures += 1;
    this.metrics.lastResults = {
      lintOk: !!results.lint?.ok,
      typeOk: !!results.typecheck?.ok,
      buildOk: !!results.build?.ok,
      buildMs: results.buildMs
    };

    this.log(`📊 Cycle complete | lint:${this.metrics.lastResults.lintOk} type:${this.metrics.lastResults.typeOk} build:${this.metrics.lastResults.buildOk} (${this.metrics.lastResults.buildMs}ms)`);
    return report;
  }

  startWatchers() {
    const watchDirs = ['pages', 'components', 'utils', 'hooks'];
    this.log('👀 Starting file watchers for adaptive cycles...');
    for (const dir of watchDirs) {
      const abs = path.join(this.rootDir, dir);
      if (!fs.existsSync(abs)) continue;
      fs.watch(abs, { recursive: true }, async (_event, file) => {
        if (!file) return;
        if (!/\.(tsx?|jsx?|mjs|cjs)$/i.test(file)) return;
        this.log(`📝 Change detected: ${path.join(dir, file)}`);
        // Quick reactive pass: lint + type-check only to stay responsive
        this.run('npm run lint');
        this.run('npm run type-check');
      });
    }
    this.log('✅ Watchers active');
  }

  async continuous() {
    this.log('🔄 Continuous mode engaged');
    // Initial pass
    await this.cycle();
    this.startWatchers();
    // Periodic deep cycles
    setInterval(() => this.cycle(), 10 * 60 * 1000); // every 10 minutes
    // Periodic lightweight git sync to ensure pushes (if defined)
    setInterval(() => {
      if (this.fileExists('automation/git-sync.cjs')) {
        try { this.run('node automation/git-sync.cjs'); } catch (_) {}
      }
    }, 60 * 1000);
  }

  status() {
    const status = {
      running: true,
      cycles: this.metrics.cycles,
      lastCycleAt: this.metrics.lastCycleAt,
      failures: this.metrics.failures,
      lastResults: this.metrics.lastResults
    };
    this.log(`📈 Status: ${JSON.stringify(status)}`);
    return status;
  }

  report() {
    const reportPath = path.join(this.logsDir, 'adaptive-intelligence-report.json');
    if (fs.existsSync(reportPath)) {
      try {
        const data = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
        console.log(JSON.stringify(data, null, 2));
        return data;
      } catch (e) {
        console.log('{}');
        return {};
      }
    }
    console.log('{}');
    return {};
  }
}

// CLI
const orchestrator = new AdaptiveIntelligenceOrchestrator();
const cmd = process.argv[2] || 'continuous';

switch (cmd) {
  case 'start':
  case 'continuous':
    orchestrator.continuous();
    break;
  case 'once':
    orchestrator.cycle();
    break;
  case 'status':
    orchestrator.status();
    process.exit(0);
    break;
  case 'report':
    orchestrator.report();
    process.exit(0);
    break;
  default:
    console.log('Usage: node automation/adaptive-intelligence-orchestrator.cjs [continuous|start|once|status|report]');
    process.exit(1);
}

// Graceful shutdown
process.on('SIGINT', () => {
  orchestrator.log('🛑 Adaptive Intelligence Orchestrator stopped');
  process.exit(0);
});
process.on('SIGTERM', () => {
  orchestrator.log('🛑 Adaptive Intelligence Orchestrator stopped');
  process.exit(0);
});



