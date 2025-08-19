module.exports = {
  apps: [
    // Primary PM2 processes (existing)
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
      error_file: "logs/zion-auto-sync-error.log",
      out_file: "logs/zion-auto-sync-out.log",
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
      error_file: "logs/zion-auto-sync-cron-error.log",
      out_file: "logs/zion-auto-sync-cron-out.log",
      time: true
    },

    // Enhanced Redundancy PM2 processes
    {
      name: "zion-auto-sync-backup",
      script: "automation/pm2-auto-sync.js",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 15,
      exp_backoff_restart_delay: 1000,
      env: {
        NODE_ENV: "production",
        AUTO_SYNC_REMOTE: process.env.AUTO_SYNC_REMOTE || "origin",
        AUTO_SYNC_BRANCH: process.env.AUTO_SYNC_BRANCH || "main",
        AUTO_SYNC_STRATEGY: process.env.AUTO_SYNC_STRATEGY || "hardreset",
        AUTO_SYNC_CLEAN: process.env.AUTO_SYNC_CLEAN || "1",
        AUTO_SYNC_GC: process.env.AUTO_SYNC_GC || "0",
        REDUNDANCY_MODE: "backup"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "logs/zion-auto-sync-backup-error.log",
      out_file: "logs/zion-auto-sync-backup-out.log",
      time: true
    },
    {
      name: "zion-auto-sync-cron-backup",
      script: "automation/pm2-auto-sync.js",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: false,
      instances: 1,
      cron_restart: "*/15 * * * *", // every 15 minutes (different schedule)
      env: {
        NODE_ENV: "production",
        AUTO_SYNC_REMOTE: process.env.AUTO_SYNC_REMOTE || "origin",
        AUTO_SYNC_BRANCH: process.env.AUTO_SYNC_BRANCH || "main",
        AUTO_SYNC_STRATEGY: process.env.AUTO_SYNC_STRATEGY || "hardreset",
        AUTO_SYNC_CLEAN: process.env.AUTO_SYNC_CLEAN || "1",
        AUTO_SYNC_GC: process.env.AUTO_SYNC_GC || "0",
        REDUNDANCY_MODE: "backup"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "logs/zion-auto-sync-cron-backup-error.log",
      out_file: "logs/zion-auto-sync-cron-backup-out.log",
      time: true
    },

    // Redundancy System Managers
    {
      name: "redundancy-master-orchestrator",
      script: "automation/redundancy/master-redundancy-orchestrator.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      exp_backoff_restart_delay: 2000,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "master"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "logs/redundancy-master-error.log",
      out_file: "logs/redundancy-master-out.log",
      time: true
    },
    {
      name: "redundancy-pm2-manager",
      script: "automation/redundancy/pm2-redundancy-manager.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 8,
      exp_backoff_restart_delay: 1500,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "pm2"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "logs/redundancy-pm2-error.log",
      out_file: "logs/redundancy-pm2-out.log",
      time: true
    },
    {
      name: "redundancy-github-manager",
      script: "automation/redundancy/github-actions-redundancy-manager.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 8,
      exp_backoff_restart_delay: 1500,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "github"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "logs/redundancy-github-error.log",
      out_file: "logs/redundancy-github-out.log",
      time: true
    },
    {
      name: "redundancy-netlify-manager",
      script: "automation/redundancy/netlify-functions-redundancy-manager.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 8,
      exp_backoff_restart_delay: 1500,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "netlify"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "logs/redundancy-netlify-error.log",
      out_file: "logs/redundancy-netlify-out.log",
      time: true
    },

    // Additional Automation Redundancy
    {
      name: "build-monitor-backup",
      script: "automation/continuous-build-monitor.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 1000,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "backup"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "logs/build-monitor-backup-error.log",
      out_file: "logs/build-monitor-backup-out.log",
      time: true
    },
    {
      name: "git-sync-backup",
      script: "automation/git-sync.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 12,
      exp_backoff_restart_delay: 800,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "backup"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "logs/git-sync-backup-error.log",
      out_file: "logs/git-sync-backup-out.log",
      time: true
    },
    {
      name: "netlify-healer-backup",
      script: "automation/enhanced-netlify-healer.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 1200,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "backup"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "logs/netlify-healer-backup-error.log",
      out_file: "logs/netlify-healer-backup-out.log",
      time: true
    }
  ]
};