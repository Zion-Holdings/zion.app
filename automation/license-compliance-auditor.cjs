#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function writeFile(filepath, content) {
  const dir = path.dirname(filepath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filepath, content, 'utf8');
}

function generateDependencyReport() {
  const pkgPath = path.resolve(process.cwd(), 'package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  const deps = Object.entries(pkg.dependencies || {});
  const devDeps = Object.entries(pkg.devDependencies || {});

  const lines = [];
  lines.push(`# License & Dependency Report`);
  lines.push(`Generated: ${new Date().toISOString()}`);
  lines.push('');
  lines.push(`## Dependencies (${deps.length})`);
  for (const [name, version] of deps) {
    lines.push(`- ${name}: ${version}`);
  }
  lines.push('');
  lines.push(`## Dev Dependencies (${devDeps.length})`);
  for (const [name, version] of devDeps) {
    lines.push(`- ${name}: ${version}`);
  }
  lines.push('');
  lines.push('Note: License detection is stubbed. Enhance by integrating a license scanner if needed.');

  const mdPath = path.resolve(process.cwd(), 'docs/license-compliance.md');
  writeFile(mdPath, lines.join('\n'));
}

try {
  generateDependencyReport();
  console.log('License & dependency report generated.');
  process.exit(0);
} catch (err) {
  console.error('Failed to generate license report:', err);
  process.exit(1);
}