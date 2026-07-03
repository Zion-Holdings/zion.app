// scripts/checks/smoke-routes-check.cjs
// Validates the smoke routes catalog exists and has actionable content.
const fs = require('fs');
const path = require('path');

const routesPath = path.join(process.cwd(), 'config/smoke-routes.txt');

if (!fs.existsSync(routesPath)) {
  console.error('smoke routes file missing: ' + routesPath);
  process.exit(1);
}

const content = fs.readFileSync(routesPath, 'utf8');
const routes = content.split(/\r?\n/).filter((line) => {
  const trimmed = line.trim();
  return trimmed.length > 0 && !trimmed.startsWith('#');
});

console.log(`smoke routes routes=${routes.length} file=${path.relative(process.cwd(), routesPath)}`);

if (routes.length === 0) {
  console.error('smoke routes catalog is empty after filtering comments');
  process.exit(1);
}

process.exit(0);
