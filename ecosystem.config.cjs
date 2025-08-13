const path = require('path');
const rootDir = __dirname; // repository root

// Local PM2-managed automations (safe for local run; no secrets required).
// Cloud equivalents continue to run via Netlify Scheduled Functions and GitHub Actions.

module.exports = {
  apps: [
    // Continuous front enhancement cycle (every 5 minutes)
    {
      name: 'continuous-front',
      cwd: rootDir,
      script: 'automation/continuous-front-runner.cjs',
      interpreter: 'node',
      time: true,
      autorestart: false,
      cron_restart: '*/5 * * * *',
      env: {
        CANONICAL_URL: 'https://ziontechgroup.com'
      }
    },

    // Autonomous content creator + homepage advertiser (every 30 minutes)
    {
      name: 'content-creator',
      cwd: rootDir,
      script: 'automation/content-creator.cjs',
      interpreter: 'node',
      time: true,
      autorestart: false,
      cron_restart: '* * * * *',
      env: {
        CANONICAL_URL: 'https://ziontechgroup.com'
      }
    },

    // Guardian pass to heal/fix and keep agents fresh (every 10 minutes)
    {
      name: 'automation-guardian-10m',
      cwd: rootDir,
      script: 'automation/automation-guardian-10min.cjs',
      interpreter: 'node',
      time: true,
      autorestart: false,
      cron_restart: '*/10 * * * *'
    },

    // Internal link crawl (every 6 hours)
    {
      name: 'links-crawl',
      cwd: rootDir,
      script: 'automation/site-link-crawler.cjs',
      interpreter: 'node',
      time: true,
      autorestart: false,
      cron_restart: '*/10 * * * *'
    },

    // Internal link fix (every 6 hours, offset a few minutes)
    {
      name: 'links-fix',
      cwd: rootDir,
      script: 'automation/site-link-fixer.cjs',
      interpreter: 'node',
      time: true,
      autorestart: false,
      cron_restart: '*/5 * * * *'
    },

    // Sitemap (daily)
    {
      name: 'sitemap-runner',
      cwd: rootDir,
      script: 'automation/sitemap-runner.cjs',
      interpreter: 'node',
      time: true,
      autorestart: false,
      cron_restart: '*/7 * * * *'
    },

    // Git sync (every 15 minutes)
    {
      name: 'git-sync',
      cwd: rootDir,
      script: 'automation/git-sync.cjs',
      interpreter: 'node',
      time: true,
      autorestart: false,
      cron_restart: '*/5 * * * *'
    }
    ,

    // Continuous Git autosync loop (runs perpetually; PM2 will keep it alive)
    {
      name: 'git-autosync-loop',
      cwd: rootDir,
      script: 'automation/pm2-git-autosync.cjs',
      interpreter: 'node',
      time: true,
      autorestart: true,
      env: {
        SYNC_INTERVAL_SECONDS: '60',
        TARGET_BRANCH: 'main'
      }
    }
    ,

    // Content Completer — improves pages continuously (every 1 minute)
    {
      name: 'content-completer',
      cwd: rootDir,
      script: 'automation/content-completer.cjs',
      interpreter: 'node',
      time: true,
      autorestart: false,
      cron_restart: '* * * * *',
      env: {
        CANONICAL_URL: 'https://ziontechgroup.com'
      }
    }
    ,

    // Chat → Agents Orchestrator — research-driven agent generation (every 1 minute)
    {
      name: 'chat-to-agents',
      cwd: rootDir,
      script: 'automation/chat-to-agents-orchestrator.cjs',
      interpreter: 'node',
      time: true,
      autorestart: false,
      cron_restart: '* * * * *',
      env: {
        ALIGNMENT_CHAT_URL: 'https://chatgpt.com/share/688b6030-1aa0-800b-9b63-ec9a269ea62d',
        ALIGNMENT_DOC_URL: 'https://docs.google.com/document/d/1Q3-QbWjIIj83VYX_Hx258kmvEyF9qBR2nF09IOi4ppM/edit?usp=sharing',
        SITE_URL: 'https://ziontechgroup.netlify.app'
      }
    }
  ]
};