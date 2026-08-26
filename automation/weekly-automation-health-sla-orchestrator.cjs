const fs = require('fs');
const path = require('path');

const reportDir = path.join(process.cwd(), 'automation', 'reports');
if (!fs.existsSync(reportDir)) fs.mkdirSync(reportDir, { recursive: true });

const reportPath = path.join(reportDir, path.basename(process.argv[1]).replace('.cjs', '-latest.json'));
const report = {
  status: 'ok',
  message: 'executed',
  executedAt: new Date().toISOString(),
  script: path.basename(process.argv[1])
};

try { fs.writeFileSync(reportPath, JSON.stringify(report, null, 2)); } catch (e) {}
console.log(JSON.stringify(report));
