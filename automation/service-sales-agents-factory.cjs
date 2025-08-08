#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
}

function readLatestReport() {
  const reportDir = path.join(__dirname, '..', 'data', 'reports', 'venture');
  if (!fs.existsSync(reportDir)) return null;
  const files = fs
    .readdirSync(reportDir)
    .filter((f) => f.startsWith('venture-plan-') && f.endsWith('.json'))
    .sort((a, b) => b.localeCompare(a));
  if (!files.length) return null;
  return JSON.parse(fs.readFileSync(path.join(reportDir, files[0]), 'utf8'));
}

function writeAgent(service) {
  const outDir = path.join(__dirname, 'venture-sales-agents');
  ensureDir(outDir);
  const fp = path.join(outDir, `${service.slug}.cjs`);
  if (fs.existsSync(fp)) return false;

  const script = `#!/usr/bin/env node
const fs = require('fs');

function line(s) { process.stdout.write(s + '\n'); }

line('Service: ${service.name}');
line('Audience: ${(service.targetAudience || []).join(', ')}');
line('Category: ${service.category}');
line('CTA: ${service.cta || 'Book a demo'}');

line('\n--- Outreach Templates ---');
line('\nLinkedIn:');
line('Hey {{firstName}}, quick one — we ship ${service.name} in ~${service.baselineEffortDays} days. Interested in a demo?');

line('\nEmail:');
line('Subject: ${service.name} in ${service.baselineEffortDays} days');
line('Body: Hi {{firstName}}, we built ${service.name}: ${service.description}. Book a quick walkthrough?');

line('\nTwitter/X:');
line('${service.name} drops time-to-value to days. DM for a demo.');
`;
  fs.writeFileSync(fp, script);
  try { fs.chmodSync(fp, 0o755); } catch {}
  return true;
}

function main() {
  const report = readLatestReport();
  if (!report) {
    console.error('No venture plan report found');
    process.exit(1);
  }
  let created = 0;
  for (const service of report.services) {
    if (writeAgent(service)) created++;
  }
  const registry = path.join(__dirname, 'logs', 'venture-sales-agents.json');
  ensureDir(path.dirname(registry));
  fs.writeFileSync(registry, JSON.stringify({ timestamp: new Date().toISOString(), created }, null, 2));
  console.log(`Created/ensured ${created} sales agents.`);
}

if (require.main === module) main();