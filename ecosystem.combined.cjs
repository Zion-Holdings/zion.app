const path = require('path');
const rootDir = __dirname; // repository root

// Combined PM2 ecosystem: Existing automation + GitHub Actions redundancy
// This preserves the original structure while adding 226 redundancy processes

module.exports = {
  apps: [
    // ===== EXISTING AUTOMATION STRUCTURE (PRESERVED) =====
    
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
    },

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
    },

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
    },

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
    },

    // Cron orchestrator (local)
    {
      name: 'cron-orchestrator',
      cwd: rootDir,
      script: 'automation/cron-orchestrator.cjs',
      interpreter: 'node',
      time: true,
      autorestart: true
    },

    // Fast ads loop (local)
    {
      name: 'fast-ads-loop',
      cwd: rootDir,
      script: 'automation/fast-advertising-orchestrator.cjs',
      interpreter: 'node',
      time: true,
      autorestart: true,
      env: {
        FAST_ADS_INTERVAL_MS: process.env.FAST_ADS_INTERVAL_MS || '60000'
      }
    },

    // ===== GITHUB ACTIONS REDUNDANCY SYSTEM (ADDITIONAL) =====
    
    // Repository Maintenance
    {
      name: 'maintenance-cleanup',
      script: 'scripts/maintenance-cleanup.js',
      cron_restart: '0 2 * * 0', // Sunday at 2 AM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'cleanup-artifacts'
      }
    },
    {
      name: 'maintenance-optimize',
      script: 'scripts/maintenance-optimize.js',
      cron_restart: '0 2 * * 0', // Sunday at 2 AM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'optimize-workflows'
      }
    },
    {
      name: 'maintenance-dependencies',
      script: 'scripts/maintenance-dependencies.js',
      cron_restart: '0 2 * * 0', // Sunday at 2 AM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'dependency-maintenance'
      }
    },
    
    // Workflow Health Check
    {
      name: 'workflow-health-check',
      script: 'scripts/workflow-health-check.sh',
      cron_restart: '0 2 * * *', // Daily at 2 AM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'workflow-health-check'
      }
    },
    
    // AI Trends Radar
    {
      name: 'ai-trends-radar',
      script: 'scripts/ai-trends-radar.js',
      cron_restart: '0 5 * * *', // Daily at 5 AM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'ai-trends-radar'
      }
    },

    // Key GitHub Actions Redundancy Processes (Sample - Full list in ecosystem.complete.cjs)
    {
      name: 'ai-content-factory',
      script: 'scripts/ai-content-factory.js',
      cron_restart: '0 */3 * * *', // Every 3 hours
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'ai-content-factory'
      }
    },
    {
      name: 'linkedin-marketing',
      script: 'scripts/linkedin-marketing.js',
      cron_restart: '0 12 * * *', // Daily at 12 PM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'linkedin-marketing'
      }
    },
    {
      name: 'instagram-marketing',
      script: 'scripts/instagram-marketing.js',
      cron_restart: '0 13 * * *', // Daily at 1 PM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'instagram-marketing'
      }
    },
    {
      name: 'playwright-smoke',
      script: 'scripts/playwright-smoke.js',
      cron_restart: '0 */4 * * *', // Every 4 hours
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'playwright-smoke'
      }
    },
    {
      name: 'lighthouse-live',
      script: 'scripts/lighthouse-live.js',
      cron_restart: '0 */6 * * *', // Every 6 hours
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'lighthouse-live'
      }
    },
    {
      name: 'seo-validator',
      script: 'scripts/seo-validator.js',
      cron_restart: '0 7 * * *', // Daily at 7 AM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'seo-validator'
      }
    },
    {
      name: 'sitemap-daily',
      script: 'scripts/sitemap-daily.js',
      cron_restart: '0 6 * * *', // Daily at 6 AM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'sitemap-daily'
      }
    },
    {
      name: 'netlify-auto-healer',
      script: 'scripts/netlify-auto-healer.js',
      cron_restart: '0 */2 * * *', // Every 2 hours
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'netlify-auto-healer'
      }
    },
    {
      name: 'security-auto-heal',
      script: 'scripts/security-auto-heal.js',
      cron_restart: '0 */4 * * *', // Every 4 hours
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'security-auto-heal'
      }
    }
  ]
};
