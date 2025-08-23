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
        AUTO_SYNC_CLEAN: process.env.AUTO_SYNC_CLEAN || "1",
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
      cron_restart: "0 */12 * * *", // every 12 hours (matches GitHub Actions)
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "true",
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
      cron_restart: "*/15 * * * *", // every 15 minutes (matches GitHub Actions)
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "true",
        AUTO_SYNC_STRATEGY: "hardreset",
        AUTO_SYNC_CLEAN: "0"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-sync-health-error.log",
      out_file: "automation/logs/redundancy-sync-health-out.log",
      time: true
    },

    // REDUNDANCY: Build Automation
    {
      name: "redundancy-build-monitor",
      script: "automation/redundancy/build-monitor-redundancy.js",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      cron_restart: "*/5 * * * *", // every 5 minutes
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-build-monitor-error.log",
      out_file: "automation/logs/redundancy-build-monitor-out.log",
      time: true
    },

    // REDUNDANCY: Netlify Functions Orchestrator
    {
      name: "redundancy-netlify-orchestrator",
      script: "automation/redundancy/netlify-functions-redundancy.js",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      cron_restart: "*/30 * * * *", // every 30 minutes
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-netlify-orchestrator-error.log",
      out_file: "automation/logs/redundancy-netlify-orchestrator-out.log",
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
      cron_restart: "0 */6 * * *", // every 6 hours
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "true"
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
      cron_restart: "0 2 * * *", // daily at 2 AM
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "true"
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
      cron_restart: "0 */4 * * *", // every 4 hours
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "true"
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
      cron_restart: "0 6 * * *", // daily at 6 AM
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-dependency-monitor-error.log",
      out_file: "automation/logs/redundancy-dependency-monitor-out.log",
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
      cron_restart: "*/10 * * * *", // every 10 minutes
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-health-orchestrator-error.log",
      out_file: "automation/logs/redundancy-health-orchestrator-out.log",
      time: true
    }
  ]
};