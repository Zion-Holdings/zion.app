// deploy-status-generate.cjs — generates deploy status JSON for tracking
const fs = require('fs');
const path = require('path');

const repoRoot = process.cwd();
const reportsDir = path.join(repoRoot, 'automation', 'reports');

if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir, { recursive: true });
}

const deployStatus = {
  timestamp: new Date().toISOString(),
  status: process.env.DEPLOY_STATUS || 'unknown',
  source: process.env.DEPLOY_STATUS_SOURCE || 'unknown',
  githubSha: process.env.GITHUB_SHA || 'local',
  githubRunId: process.env.GITHUB_RUN_ID || 'local',
  githubWorkflow: process.env.GITHUB_WORKFLOW || 'local',
  githubRef: process.env.GITHUB_REF || 'local',
  githubEventName: process.env.GITHUB_EVENT_NAME || 'local',
};

fs.writeFileSync(
  path.join(reportsDir, 'deploy-status-latest.json'),
  JSON.stringify(deployStatus, null, 2)
);

console.log(`✅ Deploy status generated: status=${deployStatus.status}, source=${deployStatus.source}`);
process.exit(0);
