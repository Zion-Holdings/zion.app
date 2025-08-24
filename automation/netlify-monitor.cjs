#!/usr/bin/env node

const axios = require('axios');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function log(message) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${message}`);
}

function getEnv(name, fallback = undefined) {
  const value = process.env[name] ?? fallback;
  return value && `${value}`.trim().length > 0 ? `${value}`.trim() : undefined;
}

async function fetchLatestDeploy({ authToken, siteId }) {
  const url = `https://api.netlify.com/api/v1/sites/${siteId}/deploys?per_page=1`;
  const res = await axios.get(url, {
    headers: { Authorization: `Bearer ${authToken}` },
    timeout: 10000,
  });
  if (!Array.isArray(res.data) || res.data.length === 0) {
    throw new Error('No deploys found for the site');
  }
  const deploy = res.data[0];
  return {
    id: deploy.id,
    state: deploy.state, // "ready", "building", "error", "failed", etc.
    created_at: deploy.created_at,
    updated_at: deploy.updated_at,
    deploy_time: deploy.deploy_time,
    context: deploy.context,
    commit_ref: deploy.commit_ref,
    title: deploy.title,
    admin_url: deploy.admin_url,
    deploy_url: deploy.deploy_url,
    screenshot_url: deploy.screenshot_url,
  };
}

function runCmd(cmd, options = {}) {
  log(`$ ${cmd}`);
  return execSync(cmd, { stdio: 'inherit', ...options });
}

function ensureGitIdentity() {
  try {
    execSync('git config user.name', { stdio: 'ignore' });
  } catch {
    runCmd('git config user.name "automation-bot"');
  }
  try {
    execSync('git config user.email', { stdio: 'ignore' });
  } catch {
    runCmd('git config user.email "automation@local"');
  }
}

function attemptLocalFixSequence() {
  try { runCmd('npm run fix:all'); } catch { /* continue */ }
  try { runCmd('npm run build'); } catch { /* continue; may still fail until re-run */ }
}

function commitIfChanges(message) {
  try {
    const status = execSync('git status --porcelain').toString().trim();
    if (status.length === 0) {
      log('No changes to commit.');
      return false;
    }
    ensureGitIdentity();
    runCmd('git add -A');
    runCmd(`git commit -m ${JSON.stringify(message)}`);
    return true;
  } catch (e) {
    log(`Commit failed or not needed: ${e.message}`);
    return false;
  }
}

async function triggerNetlifyBuild({ authToken, siteId }) {
  const url = `https://api.netlify.com/api/v1/sites/${siteId}/builds`;
  await axios.post(url, {}, { headers: { Authorization: `Bearer ${authToken}` }, timeout: 10000 });
  log('Triggered Netlify rebuild');
}

async function main() {
  const command = process.argv[2] || 'check';
  const authToken = getEnv('NETLIFY_AUTH_TOKEN');
  const siteId = getEnv('NETLIFY_SITE_ID');

  if (!authToken || !siteId) {
    const msg = 'Missing NETLIFY_AUTH_TOKEN or NETLIFY_SITE_ID. Set env vars to enable Netlify monitoring.';
    if (command === 'check') {
      console.error(msg);
      process.exit(2);
    } else {
      console.error(msg);
    }
  }

  if (command === 'check') {
    try {
      const latest = await fetchLatestDeploy({ authToken, siteId });
      log(`Latest deploy state: ${latest.state} (id: ${latest.id}, context: ${latest.context})`);
      const badStates = new Set(['error', 'failed', 'canceled']);
      if (badStates.has(latest.state)) {
        console.error(`Netlify deploy failing: state=${latest.state}`);
        process.exit(1);
      }
      process.exit(0);
    } catch (e) {
      console.error(`Netlify check error: ${e.message}`);
      process.exit(1);
    }
  }

  if (command === 'fix-if-failing') {
    try {
      const latest = await fetchLatestDeploy({ authToken, siteId });
      log(`Latest deploy state: ${latest.state}`);
      const badStates = new Set(['error', 'failed', 'canceled']);
      if (!badStates.has(latest.state)) {
        log('Netlify is healthy. No fix needed.');
        process.exit(0);
      }
      log('Attempting automated local fix sequence...');
      attemptLocalFixSequence();
      const committed = commitIfChanges('fix(netlify): automated attempt to remediate Netlify build issues');

      if (authToken && siteId) {
        try { await triggerNetlifyBuild({ authToken, siteId }); } catch (e) { log(`Rebuild trigger failed: ${e.message}`); }
      }

      // Optionally push if running in CI or if remote exists
      try {
        const remote = execSync('git remote -v').toString();
        if (remote.includes('origin')) {
          runCmd('git push origin HEAD:main');
        }
      } catch (e) {
        log(`Push skipped or failed: ${e.message}`);
      }

      process.exit(committed ? 0 : 0);
    } catch (e) {
      console.error(`Netlify fix error: ${e.message}`);
      process.exit(1);
    }
  }

  console.error(`Unknown command: ${command}`);
  process.exit(2);
}

main();