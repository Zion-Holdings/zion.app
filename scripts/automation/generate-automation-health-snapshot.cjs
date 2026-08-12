// generate-automation-health-snapshot.cjs — generates automation health snapshot report
const fs = require('fs');
const path = require('path');

const repoRoot = process.cwd();
const reportsDir = path.join(repoRoot, 'automation', 'reports');

if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir, { recursive: true });
}

// Read recent workflow failure data if available
let recentFailures = [];
const failureReport = path.join(reportsDir, 'workflow-failure-triage-latest.json');
if (fs.existsSync(failureReport)) {
  try {
    const data = JSON.parse(fs.readFileSync(failureReport, 'utf8'));
    recentFailures = data.failed || [];
  } catch (e) {
    // ignore
  }
}

// Count automation scripts
let automationScripts = 0;
try {
  const automationDir = path.join(repoRoot, 'automation');
  if (fs.existsSync(automationDir)) {
    for (const entry of fs.readdirSync(automationDir, { withFileTypes: true })) {
      if (entry.isFile() && (entry.name.endsWith('.cjs') || entry.name.endsWith('.js'))) {
        automationScripts++;
      }
    }
  }
} catch (e) {
  // ignore
}

// Count workflows
let workflowCount = 0;
try {
  const workflowDir = path.join(repoRoot, '.github', 'workflows');
  if (fs.existsSync(workflowDir)) {
    workflowCount = fs.readdirSync(workflowDir).filter(f => f.endsWith('.yml')).length;
  }
} catch (e) {
  // ignore
}

// Check for stub scripts
let stubCount = 0;
try {
  const pkg = JSON.parse(fs.readFileSync(path.join(repoRoot, 'package.json'), 'utf8'));
  for (const [name, cmd] of Object.entries(pkg.scripts || {})) {
    if (cmd.toLowerCase().includes('stub') || cmd.toLowerCase().includes('no-op')) {
      stubCount++;
    }
  }
} catch (e) {
  // ignore
}

const snapshot = {
  timestamp: new Date().toISOString(),
  githubSha: process.env.GITHUB_SHA || 'local',
  githubRunId: process.env.GITHUB_RUN_ID || 'local',
  githubWorkflow: process.env.GITHUB_WORKFLOW || 'local',
  automationScripts: automationScripts,
  workflowCount: workflowCount,
  stubScriptCount: stubCount,
  recentFailures: recentFailures.length,
  status: 'healthy',
  message: 'Automation health snapshot generated',
};

// Write latest snapshot
fs.writeFileSync(
  path.join(reportsDir, 'automation-health-latest.json'),
  JSON.stringify(snapshot, null, 2)
);

// Append to history
const historyFile = path.join(reportsDir, 'automation-health-history.json');
let history = [];
if (fs.existsSync(historyFile)) {
  try {
    history = JSON.parse(fs.readFileSync(historyFile, 'utf8'));
  } catch (e) {
    history = [];
  }
}
history.push(snapshot);
// Keep last 100 entries
if (history.length > 100) {
  history = history.slice(-100);
}
fs.writeFileSync(historyFile, JSON.stringify(history, null, 2));

// Also write to public/api for dashboard access
const publicApiDir = path.join(repoRoot, 'public', 'api');
if (!fs.existsSync(publicApiDir)) {
  fs.mkdirSync(publicApiDir, { recursive: true });
}
fs.writeFileSync(
  path.join(publicApiDir, 'automation-health.json'),
  JSON.stringify(snapshot, null, 2)
);
fs.writeFileSync(
  path.join(publicApiDir, 'automation-health-history.json'),
  JSON.stringify(history, null, 2)
);

console.log(`✅ Automation health snapshot generated: ${automationScripts} scripts, ${workflowCount} workflows, ${stubCount} stubs, ${recentFailures.length} recent failures`);
process.exit(0);
