import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { sendAlert } from './notify-slack-discord.js';

function parseSlowEndpoints() {
  const file = path.join('logs', 'performance.json');
  if (!fs.existsSync(file)) return [];
  try {
    const data = JSON.parse(fs.readFileSync(file, 'utf8'));
    const endpoints = data.endpoints || [];
    return endpoints
      .sort((a, b) => b.ms - a.ms)
      .slice(0, 5);
  } catch {
    return [];
  }
}

function parsePatchedPackages() {
  const scriptFile = path.join('scripts', 'patch_vulnerabilities.sh');
  if (!fs.existsSync(scriptFile)) return [];
  const content = fs.readFileSync(scriptFile, 'utf8');
  const regex = /npm install ([^@\s]+)@/g;
  const packages = [];
  let match;
  while ((match = regex.exec(content))) {
    packages.push(match[1]);
  }
  return packages;
}

function parseTestStatus() {
  const file = 'test_results.json';
  if (!fs.existsSync(file)) return { passed: true, summary: 'No tests run' };
  try {
    const data = JSON.parse(fs.readFileSync(file, 'utf8'));
    const passed = data.numFailedTests === 0;
    const summary = `${data.numPassedTests}/${data.numTotalTests} tests passed`;
    return { passed, summary };
  } catch {
    return { passed: false, summary: 'Could not parse test results' };
  }
}

function getCommitLink() {
  if (!process.env.AUTO_FIX_COMMIT) return '';
  try {
    const hash = execSync('git rev-parse HEAD').toString().trim();
    const remote = execSync('git config --get remote.origin.url').toString().trim();
    if (remote.includes('github.com')) {
      const repoPath = remote.replace(/.*github.com[/:](.*?)(\.git)?$/, '$1');
      return `https://github.com/${repoPath}/commit/${hash}`;
    }
    return hash;
  } catch {
    return '';
  }
}

async function run() {
  const slowEndpoints = parseSlowEndpoints();
  const patchedPackages = parsePatchedPackages();
  const testStatus = parseTestStatus();
  const commitLink = getCommitLink();

  await sendAlert({ slowEndpoints, patchedPackages, testStatus, commitLink });
}

run().catch(err => {
  console.error('Hourly job alert failed:', err);
  process.exit(1);
});
