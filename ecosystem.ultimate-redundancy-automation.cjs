module.exports = {
  apps: [
    // Ultimate Redundancy Automation System - Main Process
    {
      name: "ultimate-redundancy-automation",
      script: "automation/ultimate-redundancy-automation-system.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 5000,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_LOG_LEVEL: "INFO",
        REDUNDANCY_CHECK_INTERVAL: "30000",
        REDUNDANCY_MAX_RETRIES: "3",
        REDUNDANCY_AUTO_RECOVERY: "true",
        HEALTH_CHECK_INTERVAL: "60000"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/ultimate-redundancy-automation-error.log",
      out_file: "automation/logs/ultimate-redundancy-automation-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Ultimate Redundancy Automation System - Health Monitor
    {
      name: "ultimate-redundancy-health-monitor",
      script: "automation/ultimate-redundancy-automation-system.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      exp_backoff_restart_delay: 10000,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_LOG_LEVEL: "INFO",
        REDUNDANCY_CHECK_INTERVAL: "120000",
        REDUNDANCY_MAX_RETRIES: "2",
        REDUNDANCY_AUTO_RECOVERY: "true",
        HEALTH_CHECK_INTERVAL: "30000"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/ultimate-redundancy-health-error.log",
      out_file: "automation/logs/ultimate-redundancy-health-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Ultimate Redundancy Automation System - Recovery Manager
    {
      name: "ultimate-redundancy-recovery-manager",
      script: "automation/ultimate-redundancy-automation-system.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 3,
      exp_backoff_restart_delay: 15000,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_LOG_LEVEL: "INFO",
        REDUNDANCY_CHECK_INTERVAL: "60000",
        REDUNDANCY_MAX_RETRIES: "5",
        REDUNDANCY_AUTO_RECOVERY: "true",
        HEALTH_CHECK_INTERVAL: "90000"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/ultimate-redundancy-recovery-error.log",
      out_file: "automation/logs/ultimate-redundancy-recovery-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Legacy PM2 Auto Sync (for backward compatibility)
    {
      name: "zion-auto-sync",
      script: "automation/pm2-auto-sync.js",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 5000,
      env: {
        NODE_ENV: "production",
        AUTO_SYNC_REMOTE: process.env.AUTO_SYNC_REMOTE || "origin",
        AUTO_SYNC_BRANCH: process.env.AUTO_SYNC_BRANCH || "main",
        AUTO_SYNC_STRATEGY: process.env.AUTO_SYNC_STRATEGY || "hardreset",
        AUTO_SYNC_CLEAN: process.env.AUTO_SYNC_CLEAN || "1",
        AUTO_SYNC_GC: process.env.AUTO_SYNC_GC || "0"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "logs/zion-auto-sync-error.log",
      out_file: "logs/zion-auto-sync-out.log",
      time: true
    },

    // Legacy PM2 Auto Sync Cron (for backward compatibility)
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
      error_file: "logs/zion-auto-sync-cron-error.log",
      out_file: "logs/zion-auto-sync-cron-out.log",
      time: true
    }
  ],

  // PM2 Configuration
  deploy: {
    production: {
      user: "node",
      host: "localhost",
      ref: "origin/main",
      repo: "git@github.com:username/repo.git",
      path: "/var/www/production",
      "post-deploy": "npm install && pm2 reload ecosystem.ultimate-redundancy-automation.cjs --env production"
    }
  }
};