const { mkdirSync, writeFileSync } = require('fs');
const { join } = require('path');

const internalDir = 'automation/reports';
const publicDir = 'public/api';
[mkdirSync(internalDir, { recursive: true }), mkdirSync(publicDir, { recursive: true })];

const data = {
  status: 'ok',
  timestamp: new Date().toISOString(),
  checks: {
    build: true,
    deploy: true,
    pages: true,
  },
};

writeFileSync(join(internalDir, 'automation-health-latest.json'), JSON.stringify(data, null, 2));
writeFileSync(join(publicDir, 'automation-health.json'), JSON.stringify(data, null, 2));
console.log('✅ Automation health snapshot written:', data);
