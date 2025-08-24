#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function log(message) {
  const logDir = path.join(__dirname, 'logs');
  ensureDir(logDir);
  const line = `[${new Date().toISOString()}] ${message}\n`;
  process.stdout.write(`${message}\n`);
  fs.appendFileSync(path.join(logDir, 'ui-beautify.log'), line);
}

function scanFilesForBeautifyHints(rootDir) {
  const results = [];
  const exts = new Set(['.tsx', '.ts', '.jsx', '.js', '.css']);

  function walk(current) {
    const entries = fs.readdirSync(current, { withFileTypes: true });
    for (const entry of entries) {
      // Skip node_modules and build outputs
      if (entry.name === 'node_modules' || entry.name === '.next' || entry.name === 'out' || entry.name === 'dist') {
        continue;
      }
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (exts.has(path.extname(entry.name))) {
        try {
          const content = fs.readFileSync(full, 'utf8');
          const hints = [];
          if (/class(Name)?=\"[^\"]*\bsm:|md:|lg:|xl:\b/.test(content) === false && /tailwind|@apply/.test(content)) {
            hints.push('Consider using responsive Tailwind utilities for better UI across breakpoints.');
          }
          if (/dark:/.test(content) === false && /tailwind|@apply/.test(content)) {
            hints.push('Add dark mode support using `dark:` variant.');
          }
          if (/motion\./.test(content) === false && /framer-motion/.test(content) === false) {
            hints.push('Introduce subtle motion using framer-motion for perceived performance and polish.');
          }
          if (/aria-/.test(content) === false && /role=/.test(content) === false) {
            hints.push('Improve accessibility by adding ARIA attributes where appropriate.');
          }
          if (hints.length > 0) {
            results.push({ file: full, hints });
          }
        } catch {/* ignore unreadable files */}
      }
    }
  }

  walk(rootDir);
  return results;
}

(function main() {
  log('🎨 UI Beautify orchestrator starting');
  const repoRoot = path.resolve(__dirname, '..');
  const reportDir = path.join(repoRoot, 'data', 'reports', 'ui-evolution');
  ensureDir(reportDir);

  const findings = scanFilesForBeautifyHints(repoRoot);
  const report = {
    generatedAt: new Date().toISOString(),
    totalFindings: findings.length,
    recommendations: findings,
  };

  const reportPath = path.join(reportDir, `beautify-report-${Date.now()}.json`);
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  log(`✅ Beautify report written to ${path.relative(repoRoot, reportPath)} with ${findings.length} findings`);
  process.exit(0);
})();