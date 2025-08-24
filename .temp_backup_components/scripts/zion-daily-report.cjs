#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function readJson(file, fallback) { try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { return fallback; } }
function ensureDir(dir) { if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true }); }

const root = process.cwd();
const dataDir = path.join(root, 'data', 'zion-brain');
const analyticsPath = path.join(dataDir, 'analytics.json');
const chainsPath = path.join(dataDir, 'chains.json');
const reportDir = path.join(root, 'docs', 'zion-brain');
const mdPath = path.join(reportDir, 'status.md');
const jsonPath = path.join(root, 'automation_logs', 'daily-summary.json');

ensureDir(reportDir);
const analytics = readJson(analyticsPath, { byModule: {}, byType: {}, totals: { entries: 0, lastWindow: 0 } });
const chainsFile = readJson(chainsPath, { chains: {} });

const now = new Date().toISOString();
const md = [];
md.push(`# Zion Brain — Daily Status\n`);
md.push(`Updated: ${now}\n`);
md.push(`## Totals\n`);
md.push(`- Entries: ${analytics.totals.entries}`);
md.push(`- Last Window: ${analytics.totals.lastWindow}\n`);
md.push(`## By Module\n`);
for (const [k, v] of Object.entries(analytics.byModule || {})) md.push(`- ${k}: ${v}`);
md.push(`\n## By Type\n`);
for (const [k, v] of Object.entries(analytics.byType || {})) md.push(`- ${k}: ${v}`);
md.push(`\n## Chain Weights\n`);
for (const [k, v] of Object.entries(chainsFile.chains || {})) md.push(`- ${k}: weight=${v.weight} model=${v.model}`);

fs.writeFileSync(mdPath, md.join('\n'));
fs.writeFileSync(jsonPath, JSON.stringify({ updatedAt: now, totals: analytics.totals, chains: chainsFile.chains }, null, 2));
console.log('Daily report generated:', mdPath);