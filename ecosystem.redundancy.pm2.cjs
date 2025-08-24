module.exports = {
  apps: [
    // Original PM2 processes with enhanced redundancy
    {
      name: "zion-auto-sync",
      script: "automation/pm2-auto-sync.js",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      env: {
        NODE_ENV: "production",
        AUTO_SYNC_REMOTE: process.env.AUTO_SYNC_REMOTE || "origin",
        AUTO_SYNC_BRANCH: process.env.AUTO_SYNC_BRANCH || "main",
        AUTO_SYNC_STRATEGY: process.env.AUTO_SYNC_STRATEGY || "hardreset",
        AUTO_SYNC_CLEAN: process.env.AUTO_SYNC_CLEAN || "1",
        AUTO_SYNC_GC: process.env.AUTO_SYNC_GC || "0"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/zion-auto-sync-error.log",
      out_file: "automation/logs/zion-auto-sync-out.log",
      time: true
    },
    {
      name: "zion-auto-sync-cron",
      script: "automation/pm2-auto-sync.js",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: false,
      instances: 1,
      cron_restart: "*/10 * * * *", // every 10 minutes
      env: {
        NODE_ENV: "production",
        AUTO_SYNC_REMOTE: process.env.AUTO_SYNC_REMOTE || "origin",
        AUTO_SYNC_BRANCH: process.env.AUTO_SYNC_BRANCH || "main",
        AUTO_SYNC_STRATEGY: process.env.AUTO_SYNC_STRATEGY || "hardreset",
        AUTO_SYNC_CLEAN: process.env.AUTO_SYNC_CLEAN || "0",
        AUTO_SYNC_GC: process.env.AUTO_SYNC_GC || "0"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/zion-auto-sync-cron-error.log",
      out_file: "automation/logs/zion-auto-sync-cron-out.log",
      time: true
    },

    // REDUNDANCY: Marketing Sync (GitHub Actions backup)
    {
      name: "redundancy-marketing-sync",
      script: "automation/redundancy/marketing-sync-redundancy.js",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      instances: 1,
      cron_restart: "0 */12 * * *", // every 12 hours (matches GitHub Actions)
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "marketing-sync",
        LINKEDIN_ACCESS_TOKEN: process.env.LINKEDIN_ACCESS_TOKEN,
        LINKEDIN_URN: process.env.LINKEDIN_URN,
        IG_USER_ID: process.env.IG_USER_ID,
        IG_ACCESS_TOKEN: process.env.IG_ACCESS_TOKEN
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-marketing-sync-error.log",
      out_file: "automation/logs/redundancy-marketing-sync-out.log",
      time: true
    },

    // REDUNDANCY: Sync Health (GitHub Actions backup)
    {
      name: "redundancy-sync-health",
      script: "automation/redundancy/sync-health-redundancy.js",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      instances: 1,
      cron_restart: "*/15 * * * *", // every 15 minutes (matches GitHub Actions)
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "sync-health",
        AUTO_SYNC_STRATEGY: "hardreset",
        AUTO_SYNC_CLEAN: "0"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-sync-health-error.log",
      out_file: "automation/logs/redundancy-sync-health-out.log",
      time: true
    },

    // REDUNDANCY: Netlify Functions Orchestrator
    {
      name: "redundancy-netlify-functions",
      script: "automation/redundancy/netlify-functions-redundancy.js",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      instances: 1,
      cron_restart: "*/30 * * * *", // every 30 minutes
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "netlify-functions",
        NETLIFY_SITE_ID: process.env.NETLIFY_SITE_ID,
        NETLIFY_ACCESS_TOKEN: process.env.NETLIFY_ACCESS_TOKEN
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-netlify-functions-error.log",
      out_file: "automation/logs/redundancy-netlify-functions-out.log",
      time: true
    },

    // REDUNDANCY: Build and Deployment Monitor
    {
      name: "redundancy-build-monitor",
      script: "automation/redundancy/build-monitor-redundancy.js",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      instances: 1,
      cron_restart: "*/5 * * * *", // every 5 minutes
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "build-monitor"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-build-monitor-error.log",
      out_file: "automation/logs/redundancy-build-monitor-out.log",
      time: true
    },

    // REDUNDANCY: Content Quality Monitor
    {
      name: "redundancy-content-quality",
      script: "automation/redundancy/content-quality-redundancy.js",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      instances: 1,
      cron_restart: "0 */6 * * *", // every 6 hours
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "content-quality"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-content-quality-error.log",
      out_file: "automation/logs/redundancy-content-quality-out.log",
      time: true
    },

    // REDUNDANCY: Security Scanner
    {
      name: "redundancy-security-scanner",
      script: "automation/redundancy/security-scanner-redundancy.js",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      instances: 1,
      cron_restart: "0 */4 * * *", // every 4 hours
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "security-scanner"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-security-scanner-error.log",
      out_file: "automation/logs/redundancy-security-scanner-out.log",
      time: true
    },

    // REDUNDANCY: Performance Monitor
    {
      name: "redundancy-performance-monitor",
      script: "automation/redundancy/performance-monitor-redundancy.js",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      instances: 1,
      cron_restart: "0 */8 * * *", // every 8 hours
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "performance-monitor"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-performance-monitor-error.log",
      out_file: "automation/logs/redundancy-performance-monitor-out.log",
      time: true
    },

    // REDUNDANCY: Dependency Monitor
    {
      name: "redundancy-dependency-monitor",
      script: "automation/redundancy/dependency-monitor-redundancy.js",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      instances: 1,
      cron_restart: "0 */24 * * *", // every 24 hours
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "dependency-monitor"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-dependency-monitor-error.log",
      out_file: "automation/logs/redundancy-dependency-monitor-out.log",
      time: true
    },

    // REDUNDANCY: SEO Monitor
    {
      name: "redundancy-seo-monitor",
      script: "automation/redundancy/seo-monitor-redundancy.js",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      instances: 1,
      cron_restart: "0 */12 * * *", // every 12 hours
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "seo-monitor"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-seo-monitor-error.log",
      out_file: "automation/logs/redundancy-seo-monitor-out.log",
      time: true
    },

    // REDUNDANCY: Health Check Orchestrator
    {
      name: "redundancy-health-orchestrator",
      script: "automation/redundancy/health-orchestrator-redundancy.js",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      instances: 1,
      cron_restart: "*/2 * * * *", // every 2 minutes
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "health-orchestrator"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-health-orchestrator-error.log",
      out_file: "automation/logs/redundancy-health-orchestrator-out.log",
      time: true
    }
  ]
};