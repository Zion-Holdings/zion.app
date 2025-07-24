
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'automation-script' },
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}


class  {
  constructor() {
    this.isRunning = false;
  }

  async start() {
    this.isRunning = true;
    logger.info('Starting ...');
    
    try {
      #!/usr/bin/env node

const { _execSync } = require('child_process')
const fs = require('fs')
const path = require('path')
const fetchModule = require('node-fetch')
const API = 'https://api.cursor.sh/v1'
const apiKey = process.env.CURSOR_API_KEY
const projectId = process.env.CURSOR_PROJECT_ID;

if (!apiKey || !projectId) {
  logger.error('Missing CURSOR_API_KEY or CURSOR_PROJECT_ID');
  process.exit(1);
}

async function getIssues() {
  const res = await fetchModule(
    `${API}/projects/${projectId}/issues?status=open`,
    {
      headers: { Authorization: `Bearer ${apiKey}` },
    },
  );
  return res.ok ? res.json() : [];
}

async function requestPatch(issueId) {
  const res = await fetchModule(`${API}/issues/${issueId}/patch`, {
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
    logger.warn('No open Cursor issues to auto-fix.');
    return;
  }

  for (const issue of issues) {
    try {
      logger.warn('Requesting patch for issue', issue.id)
const { diff, message } = await requestPatch(issue.id);
      if (!diff) {
        logger.warn('No diff returned for', issue.id);
        continue;
      }
      applyPatch(diff);
      execSync('git config user.name "cursor-bot"');
      execSync('git config user.email "bot@example.com"');
      execSync(`git commit -am "${message || 'cursor auto fix'}"`);
    } catch (_err) {
      logger.error('Auto-fix failed for issue', issue.id, err);
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

run().catch((e) => {
  logger.error(e);
  process.exit(1);
});


// Graceful shutdown handling
process.on('SIGINT', () => {
  logger.info('\n🛑 Received SIGINT, shutting down gracefully...');
  // Add cleanup logic here
  process.exit(0);
});

process.on('SIGTERM', () => {
  logger.info('\n🛑 Received SIGTERM, shutting down gracefully...');
  // Add cleanup logic here
  process.exit(0);
});
    } catch (error) {
      logger.error('Error in :', error);
      throw error;
    }
  }

  stop() {
    this.isRunning = false;
    logger.info('Stopping ...');
  }
}

// Start the script
if (require.main === module) {
  const script = new ();
  script.start().catch(error => {
    logger.error('Failed to start :', error);
    process.exit(1);
  });
}

module.exports = ;
