#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, 'cursor-agents');
const LOG_DIR = path.join(__dirname, 'logs');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
ensureDir(OUTPUT_DIR);
ensureDir(LOG_DIR);

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}`;
  console.log(line);
  fs.appendFileSync(path.join(LOG_DIR, 'site-link-factory.log'), `${line}\n`);
}

function makeAgent(name, commandLines) {
  const id = Date.now();
  const file = path.join(OUTPUT_DIR, `task-${id}-${Math.floor(Math.random()*10)}.cjs`);
  const content = `#!/usr/bin/env node
const { spawnSync } = require('child_process');
console.log('Agent ${name} starting');
${commandLines.map(c => `spawnSync(${JSON.stringify(c.split(' ')[0])}, ${JSON.stringify(c.split(' ').slice(1))}, { stdio: 'inherit' });`).join('\n')}
console.log('Agent ${name} finished');
`;
  fs.writeFileSync(file, content);
  try { fs.chmodSync(file, 0o755); } catch {}
  log(`Generated agent: ${file}`);
  return file;
}

function main() {
  const agents = [];
  agents.push(makeAgent('links-crawl', ['node automation/site-link-crawler.cjs']));
  agents.push(makeAgent('links-fix', ['node automation/site-link-fixer.cjs']));
  fs.writeFileSync(path.join(LOG_DIR, 'site-link-factory-registry.json'), JSON.stringify({ timestamp: new Date().toISOString(), agents }, null, 2));
  log(`Created ${agents.length} agents`);
}

if (require.main === module) main();

module.exports = {};