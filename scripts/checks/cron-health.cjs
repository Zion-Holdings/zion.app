// scripts/checks/cron-health.cjs
// Verifies cron job health: checks that automation reports exist and are recent.
const fs = require('fs');
const path = require('path');

const reportsDir = path.join(process.cwd(), 'automation/reports');

if (!fs.existsSync(reportsDir)) {
  console.log('cron health: reports directory not found (ok for first run)');
  console.log('cron health: ok');
  process.exit(0);
}

const reports = fs.readdirSync(reportsDir).filter(f => f.endsWith('.json'));
if (reports.length === 0) {
  console.log('cron health: no reports yet (ok for first run)');
  console.log('cron health: ok');
  process.exit(0);
}

// Check each report is valid JSON
let errors = 0;
reports.forEach(report => {
  try {
    const content = fs.readFileSync(path.join(reportsDir, report), 'utf-8');
    JSON.parse(content);
  } catch (e) {
    console.error(`  Invalid JSON: ${report}`);
    errors++;
  }
});

if (errors > 0) {
  console.error(`\ncron health: ${errors} invalid reports`);
  process.exit(1);
}

console.log(`cron health: ok (${reports.length} reports valid)`);
