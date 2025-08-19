module.exports = {
  apps: [
    // Master Redundancy Orchestrator
    {
      name: "master-redundancy-orchestrator",
      script: "automation/master-redundancy-orchestrator.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 10000,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_LOG_LEVEL: "INFO",
        REDUNDANCY_CHECK_INTERVAL: "60000",
        REDUNDANCY_EMERGENCY_THRESHOLD: "50",
        REDUNDANCY_RECOVERY_TIMEOUT: "300000"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/master-orchestrator-error.log",
      out_file: "automation/logs/master-orchestrator-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Enhanced PM2 Redundancy
    {
      name: "enhanced-pm2-redundancy",
      script: "automation/enhanced-pm2-redundancy.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      exp_backoff_restart_delay: 15000,
      env: {
        NODE_ENV: "production",
        PM2_HEALTH_CHECK_INTERVAL: "30000",
        PM2_MAX_RESTART_ATTEMPTS: "5",
        PM2_RESTART_DELAY: "5000",
        PM2_AUTO_DISCOVERY: "1",
        PM2_PROCESS_RECOVERY: "1"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/enhanced-pm2-error.log",
      out_file: "automation/logs/enhanced-pm2-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Enhanced GitHub Actions Redundancy
    {
      name: "enhanced-github-actions-redundancy",
      script: "automation/enhanced-github-actions-redundancy.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      exp_backoff_restart_delay: 20000,
      env: {
        NODE_ENV: "production",
        GITHUB_CHECK_INTERVAL: "60000",
        GITHUB_MAX_FAILURES: "3",
        GITHUB_RETRY_DELAY: "30000",
        GITHUB_LOCAL_EXECUTION: "1",
        GITHUB_AUTO_TRIGGER: "1"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/enhanced-github-error.log",
      out_file: "automation/logs/enhanced-github-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Enhanced Netlify Functions Redundancy
    {
      name: "enhanced-netlify-functions-redundancy",
      script: "automation/enhanced-netlify-functions-redundancy.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      exp_backoff_restart_delay: 25000,
      env: {
        NODE_ENV: "production",
        NETLIFY_CHECK_INTERVAL: "120000",
        NETLIFY_MAX_FAILURES: "3",
        NETLIFY_HEALTH_CHECK_TIMEOUT: "15000",
        NETLIFY_AUTO_DEPLOY: "1",
        NETLIFY_DEPLOY_TIMEOUT: "300000"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/enhanced-netlify-error.log",
      out_file: "automation/logs/enhanced-netlify-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Legacy Redundancy Systems (for backward compatibility)
    {
      name: "redundancy-automation-system",
      script: "automation/redundancy-automation-system.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      exp_backoff_restart_delay: 10000,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_LOG_LEVEL: "INFO",
        REDUNDANCY_PM2_CHECK_INTERVAL: "30000",
        REDUNDANCY_GITHUB_CHECK_INTERVAL: "60000",
        REDUNDANCY_NETLIFY_CHECK_INTERVAL: "120000"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-system-error.log",
      out_file: "automation/logs/redundancy-system-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    {
      name: "redundancy-health-monitor",
      script: "automation/redundancy-health-monitor.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      exp_backoff_restart_delay: 10000,
      env: {
        NODE_ENV: "production",
        HEALTH_CHECK_INTERVAL: "300000", // 5 minutes
        ALERT_THRESHOLD: "3"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-health-error.log",
      out_file: "automation/logs/redundancy-health-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    {
      name: "redundancy-git-sync",
      script: "automation/redundancy-git-sync.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: false,
      instances: 1,
      cron_restart: "*/15 * * * *", // every 15 minutes
      env: {
        NODE_ENV: "production",
        GIT_SYNC_REMOTE: "origin",
        GIT_SYNC_BRANCH: "main",
        GIT_SYNC_STRATEGY: "pull",
        GIT_SYNC_CLEAN: "1"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-git-sync-error.log",
      out_file: "automation/logs/redundancy-git-sync-out.log",
      time: true
    },

    {
      name: "redundancy-build-monitor",
      script: "automation/redundancy-build-monitor.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 3,
      exp_backoff_restart_delay: 15000,
      env: {
        NODE_ENV: "production",
        BUILD_CHECK_INTERVAL: "600000", // 10 minutes
        BUILD_TIMEOUT: "300000", // 5 minutes
        MAX_BUILD_FAILURES: "3"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-build-error.log",
      out_file: "automation/logs/redundancy-build-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Original PM2 Auto-Sync (for backward compatibility)
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
    }
  ]
};