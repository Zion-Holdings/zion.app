#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');

function run(cmd) {
  return execSync(cmd, { stdio: 'pipe', encoding: 'utf8' }).trim();
}

function getLatestTag() {
  try { return run('git describe --tags --abbrev=0'); } catch { return null; }
}

function getLogSince(ref) {
  const range = ref ? `${ref}..HEAD` : '';
  try {
    return run(`git log ${range} --pretty=format:'- %s (%h)'`);
  } catch {
    return '';
  }
}

(function main(){
  const latestTag = getLatestTag();
  const log = getLogSince(latestTag);
  if (!log) { console.log('No commits to include in changelog.'); return; }
  const ts = new Date().toISOString();
  const section = `\n\n## ${ts}\n${log}\n`;
  const path = 'CHANGELOG.md';
  let prev = '';
  try { prev = fs.readFileSync(path, 'utf8'); } catch {}
  fs.writeFileSync(path, prev + section, 'utf8');
  console.log('Changelog updated.');
})();