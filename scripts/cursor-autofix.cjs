#!/usr/bin/env node
/**
 * Cursor Auto Fix Script (prototype).
 *
 * 1. Fetches unresolved Cursor issues for the repository.
 * 2. Requests an automated patch (simplified, depends on Cursor API).
 * 3. Applies the patch and commits + pushes it using GITHUB_TOKEN.
 *
 * Environment variables required in CI:
 *   CURSOR_API_KEY   – access token
 *   CURSOR_PROJECT_ID – project identifier
 *   GITHUB_TOKEN     – permission to push
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const API = 'https://api.cursor.sh/v1';
const apiKey = process.env.CURSOR_API_KEY;
const projectId = process.env.CURSOR_PROJECT_ID;

if (!apiKey || !projectId) {
  console.error('Missing CURSOR_API_KEY or CURSOR_PROJECT_ID');
  process.exit(1);
}

async function getIssues() {
  const res = await fetch(`${API}/projects/${projectId}/issues?status=open`, {
    headers: { Authorization: `Bearer ${apiKey}` },
  });
  return res.ok ? res.json() : [];
}

async function requestPatch(issueId) {
  const res = await fetch(`${API}/issues/${issueId}/patch`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
  });
  if (!res.ok) throw new Error(`Patch request failed: ${res.status}`);
  return res.json(); // { diff: '...', message: 'commit msg' }
}

function applyPatch(diffText) {
  fs.writeFileSync('cursor_patch.diff', diffText);
  execSync('git apply cursor_patch.diff');
  fs.unlinkSync('cursor_patch.diff');
}

async function run() {
  const issues = await getIssues();
  if (!Array.isArray(issues) || issues.length === 0) {
    console.log('No open Cursor issues to auto-fix.');
    return;
  }

  for (const issue of issues) {
    try {
      console.log('Requesting patch for issue', issue.id);
      const { diff, message } = await requestPatch(issue.id);
      if (!diff) {
        console.log('No diff returned for', issue.id);
        continue;
      }
      applyPatch(diff);
      execSync('git config user.name "cursor-bot"');
      execSync('git config user.email "bot@example.com"');
      execSync(`git commit -am "${message || 'cursor auto fix'}"`);
    } catch (err) {
      console.error('Auto-fix failed for issue', issue.id, err);
    }
  }

  // Push if commits created
  try {
    execSync('git diff --quiet HEAD~1 HEAD');
  } catch {
    // diff not empty; push
    execSync('git push origin HEAD');
  }
}

run().catch(e => { console.error(e); process.exit(1); }); 