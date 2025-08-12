#!/usr/bin/env node
// Generate skeleton tests for files lacking coverage.
// This script runs Jest to produce a coverage summary and
// creates placeholder test files under __tests__/auto.

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Run Jest with coverage summary
execSync('npx jest --coverage --coverageReporters=json-summary', {
  stdio: 'inherit',
});

const summaryPath = path.join('coverage', 'coverage-summary.json');
if (!fs.existsSync(summaryPath)) {
  console.error('Coverage summary not found.');
  process.exit(1);
}
const summary = JSON.parse(fs.readFileSync(summaryPath, 'utf8'));

const autoDir = path.join('__tests__', 'auto');
if (!fs.existsSync(autoDir)) fs.mkdirSync(autoDir, { recursive: true });

for (const [file, data] of Object.entries(summary)) {
  if (file === 'total') continue;
  if (data.lines.pct >= 80) continue;

  const relative = path.relative(process.cwd(), file);
  const testPath = path.join(autoDir, path.basename(relative) + '.test.ts');
  if (fs.existsSync(testPath)) continue;

  const content =
    `import { describe, it, expect } from 'vitest';\n\n` +
    `// Placeholder tests for ${relative}\n` +
    `describe('${relative}', () => {\n  it('needs tests', () => {\n    expect(true).toBe(true);\n  });\n});\n`;
  fs.writeFileSync(testPath, content);
  console.log('Created placeholder test:', testPath);
}
