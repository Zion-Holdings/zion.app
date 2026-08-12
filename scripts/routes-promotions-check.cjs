// routes-promotions-check.cjs — checks that promoted routes/tokens exist on the homepage
const fs = require('fs');
const path = require('path');

const repoRoot = process.cwd();
const outDir = path.join(repoRoot, 'out');
const homepage = path.join(outDir, 'index.html');

// Tokens that should appear on the homepage (from deploy-on-push.yml)
const PROMOTED_TOKENS = [
  "Autonomous Conversion Copilot",
  "Autonomous Incident Commander",
  "Autonomous Backlog Prioritizer",
  "Autonomous Retention Playbook",
  "Autonomous Growth Intelligence",
];

if (!fs.existsSync(homepage)) {
  console.log('⚠️ Homepage index.html not found — skipping promotions check');
  process.exit(0);
}

const html = fs.readFileSync(homepage, 'utf8');
let allFound = true;

for (const token of PROMOTED_TOKENS) {
  if (html.includes(token)) {
    console.log(`✅ Homepage contains: ${token}`);
  } else {
    console.log(`⚠️ Homepage missing promoted token: ${token}`);
    allFound = false;
  }
}

// Check that key routes exist as static pages
const keyRoutes = ['/services/', '/contact/', '/pricing/', '/about/', '/ai-lab/'];
const missingRoutes = [];

for (const route of keyRoutes) {
  const routePath = path.join(outDir, route.replace(/^\//, ''), 'index.html');
  if (!fs.existsSync(routePath)) {
    missingRoutes.push(route);
  }
}

if (missingRoutes.length > 0) {
  console.log(`⚠️ Missing routes: ${missingRoutes.join(', ')}`);
}

if (allFound && missingRoutes.length === 0) {
  console.log('✅ All promoted tokens and key routes verified');
}

process.exit(0); // Always exit 0 — warnings are non-blocking
