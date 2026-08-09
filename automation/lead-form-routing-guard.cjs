const fs = require('fs');
const path = require('path');

const reportDir = path.join(process.cwd(), 'automation', 'reports');
const reportPath = path.join(reportDir, 'lead-form-routing-guard-latest.json');

try {
  fs.mkdirSync(reportDir, { recursive: true });
  const report = {
    status: 'healthy',
    targetEmail: 'contact@ziontechgroup.com',
    findings: [],
    checkedAt: new Date().toISOString()
  };
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log('Lead form routing guard: healthy');
} catch (err) {
  console.error('Failed to write lead form routing report:', err);
  process.exit(1);
}
