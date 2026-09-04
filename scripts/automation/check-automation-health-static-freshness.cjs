const { readFileSync, existsSync } = require('fs');
const { join } = require('path');

const healthPath = join('public', 'api', 'automation-health.json');

let staticHealthFresh = 'false';
let staticHealthAgeHours = null;
let staticHealthTimestamp = null;
let staticHealthValid = false;

try {
  if (!existsSync(healthPath)) {
    throw new Error('Missing ' + healthPath);
  }
  const raw = readFileSync(healthPath, 'utf8').trim();
  if (!raw) throw new Error('Empty ' + healthPath);
  const data = JSON.parse(raw);
  staticHealthTimestamp = data.timestamp || data.generatedAt;
  if (!staticHealthTimestamp) throw new Error('Missing timestamp in ' + healthPath);
  staticHealthValid = true;

  const maxHoursEnv = process.env.AUTOMATION_HEALTH_STATIC_MAX_HOURS;
  const maxHours = maxHoursEnv ? Number(maxHoursEnv) : 24;
  const ts = new Date(staticHealthTimestamp);
  const now = new Date();
  staticHealthAgeHours = (now - ts) / 36e5;
  staticHealthFresh = Number.isFinite(staticHealthAgeHours) && staticHealthAgeHours >= 0 && staticHealthAgeHours <= maxHours ? 'true' : 'false';
} catch (err) {
  staticHealthFresh = 'false';
  staticHealthValid = false;
  console.error('Automation health static freshness check failed:', err.message);
}

const coreStatus = staticHealthFresh === 'true' ? 'nominal' : 'stale';

const report = {
  check: 'automation_health_static_freshness',
  coreStatus,
  staticHealthFresh,
  staticHealthValid,
  staticHealthAgeHours,
  staticHealthTimestamp,
  staticHealthPath: healthPath,
  maxHoursAllowed: Number.isFinite(Number(process.env.AUTOMATION_HEALTH_STATIC_MAX_HOURS)) ? Number(process.env.AUTOMATION_HEALTH_STATIC_MAX_HOURS) : 24,
};

console.log(JSON.stringify(report, null, 2));

if (staticHealthFresh !== 'true') {
  process.exitCode = 1;
}
