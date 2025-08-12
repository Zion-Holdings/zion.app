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
      cron_restart: '*/30 * * * *',
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
      cron_restart: '0 */6 * * *'
    },

    // Internal link fix (every 6 hours, offset a few minutes)
    {
      name: 'links-fix',
      cwd: rootDir,
      script: 'automation/site-link-fixer.cjs',
      interpreter: 'node',
      time: true,
      autorestart: false,
      cron_restart: '5 */6 * * *'
    },

    // Sitemap (daily)
    {
      name: 'sitemap-runner',
      cwd: rootDir,
      script: 'automation/sitemap-runner.cjs',
      interpreter: 'node',
      time: true,
      autorestart: false,
      cron_restart: '0 2 * * *'
    },

    // Git sync (every 15 minutes)
    {
      name: 'git-sync',
      cwd: rootDir,
      script: 'automation/git-sync.cjs',
      interpreter: 'node',
      time: true,
      autorestart: false,
      cron_restart: '*/15 * * * *'
    }
  ]
};