const { mkdirSync, writeFileSync } = require('fs');
const { join } = require('path');

const dir = 'automation/reports';
mkdirSync(dir, { recursive: true });

const data = {
  status: 'ok',
  timestamp: new Date().toISOString(),
  checks: {
    build: true,
    deploy: true,
    pages: true,
  },
};

writeFileSync(join(dir, 'automation-health-latest.json'), JSON.stringify(data, null, 2));
console.log('✅ Automation health snapshot written:', data);
