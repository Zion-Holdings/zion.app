const path = require('path');
const rootDir = __dirname; // repository root

// Enhanced PM2-managed automations with redundancy and continuous page generation
// Multiple processes run at different intervals to ensure maximum uptime

module.exports = {
  apps: [
    // ULTRA-FAST Content Creator (every 30 seconds) - PRIMARY
    {
      name: 'ultra-content-creator',
      cwd: rootDir,
      script: 'automation/ultra-content-creator.cjs',
      interpreter: 'node',
      time: true,
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      cron_restart: '*/30 * * * * *',
      env: {
        CANONICAL_URL: 'https://ziontechgroup.com',
        PROCESS_TYPE: 'ultra-fast',
        MAX_PAGES_PER_RUN: '5'
      }
    },

    // Rapid Content Generator (every 2 minutes) - SECONDARY
    {
      name: 'rapid-content-generator',
      cwd: rootDir,
      script: 'automation/rapid-content-generator.cjs',
      interpreter: 'node',
      time: true,
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      cron_restart: '0 */2 * * * *',
      env: {
        CANONICAL_URL: 'https://ziontechgroup.com',
        PROCESS_TYPE: 'rapid',
        MAX_PAGES_PER_RUN: '3'
      }
    },

    // Standard Content Creator (every 5 minutes) - TERTIARY
    {
      name: 'content-creator',
      cwd: rootDir,
      script: 'automation/content-creator.cjs',
      interpreter: 'node',
      time: true,
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      cron_restart: '0 */5 * * * *',
      env: {
        CANONICAL_URL: 'https://ziontechgroup.com',
        PROCESS_TYPE: 'standard',
        MAX_PAGES_PER_RUN: '2'
      }
    },

    // AI Content Factory (every 3 minutes) - QUATERNARY
    {
      name: 'ai-content-factory',
      cwd: rootDir,
      script: 'automation/ai-content-factory.cjs',
      interpreter: 'node',
      time: true,
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      cron_restart: '0 */3 * * * *',
      env: {
        CANONICAL_URL: 'https://ziontechgroup.com',
        PROCESS_TYPE: 'ai-factory',
        MAX_PAGES_PER_RUN: '4'
      }
    },

    // Cloud Content Factory (every 4 minutes) - QUINARY
    {
      name: 'cloud-content-factory',
      cwd: rootDir,
      script: 'automation/cloud-content-factory.cjs',
      interpreter: 'node',
      time: true,
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      cron_restart: '0 */4 * * * *',
      env: {
        CANONICAL_URL: 'https://ziontechgroup.com',
        PROCESS_TYPE: 'cloud-factory',
        MAX_PAGES_PER_RUN: '3'
      }
    },

    // Intelligent Content Generator (every 6 minutes) - SENARY
    {
      name: 'intelligent-content-generator',
      cwd: rootDir,
      script: 'automation/intelligent-content-generator.cjs',
      interpreter: 'node',
      time: true,
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      cron_restart: '0 */6 * * * *',
      env: {
        CANONICAL_URL: 'https://ziontechgroup.com',
        PROCESS_TYPE: 'intelligent',
        MAX_PAGES_PER_RUN: '2'
      }
    },

    // Autonomous Content Generator (every 7 minutes) - SEPTENARY
    {
      name: 'autonomous-content-generator',
      cwd: rootDir,
      script: 'automation/autonomous-content-generator.cjs',
      interpreter: 'node',
      time: true,
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      cron_restart: '0 */7 * * * *',
      env: {
        CANONICAL_URL: 'https://ziontechgroup.com',
        PROCESS_TYPE: 'autonomous',
        MAX_PAGES_PER_RUN: '3'
      }
    },

    // Cursor Autonomous Orchestrator (every 8 minutes) - OCTONARY
    {
      name: 'cursor-autonomous-orchestrator',
      cwd: rootDir,
      script: 'automation/cursor-autonomous-content-orchestrator.cjs',
      interpreter: 'node',
      time: true,
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      cron_restart: '0 */8 * * * *',
      env: {
        CANONICAL_URL: 'https://ziontechgroup.com',
        PROCESS_TYPE: 'cursor-orchestrator',
        MAX_PAGES_PER_RUN: '4'
      }
    },

    // Continuous Front Enhancement (every 5 minutes)
    {
      name: 'continuous-front',
      cwd: rootDir,
      script: 'automation/continuous-front-runner.cjs',
      interpreter: 'node',
      time: true,
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      cron_restart: '0 */5 * * * *',
      env: {
        CANONICAL_URL: 'https://ziontechgroup.com'
      }
    },

    // Guardian Pass (every 10 minutes)
    {
      name: 'automation-guardian-10m',
      cwd: rootDir,
      script: 'automation/automation-guardian-10min.cjs',
      interpreter: 'node',
      time: true,
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      cron_restart: '0 */10 * * * *'
    },

    // Internal Link Crawl (every 6 hours)
    {
      name: 'links-crawl',
      cwd: rootDir,
      script: 'automation/site-link-crawler.cjs',
      interpreter: 'node',
      time: true,
      autorestart: true,
      max_restarts: 5,
      min_uptime: '30s',
      cron_restart: '0 */6 * * *'
    },

    // Internal Link Fix (every 6 hours, offset)
    {
      name: 'links-fix',
      cwd: rootDir,
      script: 'automation/site-link-fixer.cjs',
      interpreter: 'node',
      time: true,
      autorestart: true,
      max_restarts: 5,
      min_uptime: '30s',
      cron_restart: '30 */6 * * *'
    },

    // Sitemap Runner (every 7 minutes)
    {
      name: 'sitemap-runner',
      cwd: rootDir,
      script: 'automation/sitemap-runner.cjs',
      interpreter: 'node',
      time: true,
      autorestart: true,
      max_restarts: 5,
      min_uptime: '30s',
      cron_restart: '0 */7 * * * *'
    },

    // Git Sync (every 2 minutes)
    {
      name: 'git-sync',
      cwd: rootDir,
      script: 'automation/git-sync.cjs',
      interpreter: 'node',
      time: true,
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      cron_restart: '0 */2 * * * *'
    },

    // Continuous Git Autosync Loop (runs perpetually)
    {
      name: 'git-autosync-loop',
      cwd: rootDir,
      script: 'automation/pm2-git-autosync.cjs',
      interpreter: 'node',
      time: true,
      autorestart: true,
      max_restarts: 20,
      min_uptime: '5s',
      env: {
        SYNC_INTERVAL_SECONDS: '30',
        TARGET_BRANCH: 'main'
      }
    },

    // Content Completer (every 2 minutes)
    {
      name: 'content-completer',
      cwd: rootDir,
      script: 'automation/content-completer.cjs',
      interpreter: 'node',
      time: true,
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      cron_restart: '0 */2 * * * *',
      env: {
        CANONICAL_URL: 'https://ziontechgroup.com'
      }
    },

    // Chat to Agents Orchestrator (every 5 minutes)
    {
      name: 'chat-to-agents',
      cwd: rootDir,
      script: 'automation/chat-to-agents-orchestrator.cjs',
      interpreter: 'node',
      time: true,
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      cron_restart: '0 */5 * * * *',
      env: {
        ALIGNMENT_CHAT_URL: 'https://chatgpt.com/share/688b6030-1aa0-800b-9b63-ec9a269ea62d',
        ALIGNMENT_DOC_URL: 'https://docs.google.com/document/d/1Q3-QbWjIIj83VYX_Hx258kmvEyF9qBR2nF09IOi4ppM/edit?usp=sharing',
        SITE_URL: 'https://ziontechgroup.netlify.app'
      }
    },

    // Ultra-Rapid Sync (every 1 minute)
    {
      name: 'ultra-rapid-sync',
      cwd: rootDir,
      script: 'automation/ultra-rapid-sync.cjs',
      interpreter: 'node',
      time: true,
      autorestart: true,
      max_restarts: 15,
      min_uptime: '5s',
      cron_restart: '0 */1 * * * *',
      env: {
        SYNC_INTERVAL_SECONDS: '30',
        TARGET_BRANCH: 'main'
      }
    }
  ]
};