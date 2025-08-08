#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Generates simple TODO tickets from alignment report for developers/agents
function main() {
  const outDir = path.join(__dirname, '..', 'data', 'reports', 'alignment');
  const reportPath = path.join(outDir, 'alignment-report.json');
  if (!fs.existsSync(reportPath)) {
    console.error('No alignment report found');
    process.exit(1);
  }
  const { actions } = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
  const ticketsDir = path.join(__dirname, '..', 'data', 'reports', 'alignment', 'tickets');
  fs.mkdirSync(ticketsDir, { recursive: true });
  actions.slice(0, 200).forEach((a, i) => {
    const id = String(i + 1).padStart(4, '0');
    fs.writeFileSync(path.join(ticketsDir, `${id}.md`), `# Task ${id}\n\n- ${a}\n`);
  });
  console.log('Generated alignment tickets');
}

main();


