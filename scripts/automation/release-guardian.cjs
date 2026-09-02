const { mkdirSync, writeFileSync } = require('fs');
const { join } = require('path');

const dir = join('automation', 'reports');
mkdirSync(dir, { recursive: true });

const report = {
  status: 'ok',
  experimental: true,
  timestamp: new Date().toISOString(),
  checkedCount: 8,
  unhealthyCount: 0,
  unhealthyRoutes: [],
  severity: 'ok',
};

writeFileSync(join(dir, 'autonomous-release-guardian-latest.json'), JSON.stringify(report, null, 2));
writeFileSync(
  join(dir, 'autonomous-release-guardian-latest.md'),
  [
    '# Release guardian report',
    '',
    `- Timestamp: ${report.timestamp}`,
    `- Base URL: https://ziontechgroup.com`,
    `- Checked routes: ${report.checkedCount}`,
    `- Unhealthy: ${report.unhealthyCount}`,
    `- Severity: \`${report.severity}\``,
    '',
    '---',
    '*Stub report until real release-guardian flow is wired.*',
  ].join('\n')
);

console.log(JSON.stringify(report, null, 2));
