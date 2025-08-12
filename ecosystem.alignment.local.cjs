const path = require('path');
const rootDir = __dirname;

module.exports = {
  apps: [
    {
      name: 'align-chat',
      cwd: rootDir,
      script: 'automation/alignment-chat-fetcher.cjs',
      interpreter: 'node',
      time: true,
      autorestart: false,
      cron_restart: '*/30 * * * *'
    },
    {
      name: 'align-doc',
      cwd: rootDir,
      script: 'automation/alignment-google-doc-fetcher.cjs',
      interpreter: 'node',
      time: true,
      autorestart: false,
      cron_restart: '0 * * * *'
    },
    {
      name: 'align-crawl',
      cwd: rootDir,
      script: 'automation/alignment-site-crawler.cjs',
      interpreter: 'node',
      time: true,
      autorestart: false,
      cron_restart: '0 */12 * * *'
    },
    {
      name: 'align-orchestrator',
      cwd: rootDir,
      script: 'automation/alignment-orchestrator.cjs',
      interpreter: 'node',
      time: true,
      autorestart: false,
      cron_restart: '0 */3 * * *'
    }
    ,
    {
      name: 'align-developer',
      cwd: rootDir,
      script: 'automation/alignment-developer.cjs',
      interpreter: 'node',
      time: true,
      autorestart: false,
      cron_restart: '15 */3 * * *'
    }
  ]
};


