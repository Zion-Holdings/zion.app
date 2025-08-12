#!/usr/bin/env node
/*
 Alignment Developer
 - Reads plan-latest.json and executes mapped automations for a small batch of tasks
 - Keeps runs idempotent by recording last-executed timestamp
*/

const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

const repoRoot = path.resolve(__dirname, '..');
const publicDir = path.join(repoRoot, 'public', 'reports', 'alignment');
const stateFile = path.join(publicDir, 'developer-state.json');

function run(cmd){
  console.log(`[alignment-developer] $ ${cmd}`);
  execSync(cmd, { stdio: 'inherit', cwd: repoRoot, env: process.env });
}

function pickTasks(plan){
  const tasks = plan.tasks || [];
  // Prioritize page errors, then first few content gaps
  const pageErrors = tasks.filter(t => t.type === 'page-error').slice(0, 3);
  const contentGaps = tasks.filter(t => t.type === 'content-gap').slice(0, 5);
  return [...pageErrors, ...contentGaps];
}

async function main(){
  await fs.mkdirs(publicDir);
  const planPath = path.join(publicDir, 'plan-latest.json');
  if (!fs.existsSync(planPath)) {
    console.log('[alignment-developer] No plan found, skipping');
    return;
  }
  const plan = await fs.readJson(planPath);

  const tasks = pickTasks(plan);
  if (!tasks.length) {
    console.log('[alignment-developer] No tasks selected');
    return;
  }

  // Execute a conservative set of scripts so runs remain safe locally
  const scriptsToRun = new Set();
  for (const t of tasks) {
    for (const s of t.suggestedScripts || []) scriptsToRun.add(s);
  }

  // Whitelist allowed scripts mapping to package scripts
  const allowed = new Map([
    ['npm run links:scan', 'npm run links:scan'],
    ['npm run homepage:update', 'npm run homepage:update'],
    ['npm run front:directory', 'npm run front:directory'],
    ['npm run front:continuous', 'npm run front:continuous']
  ]);

  const toExecute = [...scriptsToRun].map(s => allowed.get(s)).filter(Boolean).slice(0, 4);

  for (const cmd of toExecute) {
    try {
      run(cmd);
    } catch (e) {
      console.error('[alignment-developer] Step failed:', cmd, e?.message || e);
    }
  }

  // Record state
  await fs.writeJson(stateFile, { ranAt: new Date().toISOString(), executed: toExecute }, { spaces: 2 });
  console.log('[alignment-developer] Done');
}

main().catch(err=>{ console.error('[alignment-developer] Error:', err); process.exitCode=1; });


