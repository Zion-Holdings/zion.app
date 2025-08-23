module.exports = {
  apps: [
    // Main automation processes
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

    // Comprehensive redundancy system
    {
      name: "comprehensive-redundancy-system",
      script: "automation/comprehensive-redundancy-system.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 5000,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_LOG_LEVEL: "INFO",
        REDUNDANCY_PM2_CHECK_INTERVAL: "30000",
        REDUNDANCY_GITHUB_CHECK_INTERVAL: "60000",
        REDUNDANCY_NETLIFY_CHECK_INTERVAL: "120000"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/comprehensive-redundancy-error.log",
      out_file: "automation/logs/comprehensive-redundancy-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Redundancy health monitor
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

    // Redundancy git sync
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

    // Redundancy build monitor
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

    // Enhanced PM2 redundancy manager
    {
      name: "enhanced-pm2-redundancy",
      script: "automation/enhanced-pm2-redundancy.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      exp_backoff_restart_delay: 10000,
      env: {
        NODE_ENV: "production",
        PM2_CHECK_INTERVAL: "45000", // 45 seconds
        PM2_RESTART_DELAY: "5000",
        PM2_MAX_RESTARTS: "5"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/enhanced-pm2-redundancy-error.log",
      out_file: "automation/logs/enhanced-pm2-redundancy-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Enhanced GitHub Actions redundancy manager
    {
      name: "enhanced-github-redundancy",
      script: "automation/enhanced-github-actions-redundancy.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 3,
      exp_backoff_restart_delay: 15000,
      env: {
        NODE_ENV: "production",
        GITHUB_CHECK_INTERVAL: "90000", // 1.5 minutes
        GITHUB_MAX_FAILURES: "3",
        GITHUB_RECOVERY_TIMEOUT: "300000" // 5 minutes
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/enhanced-github-redundancy-error.log",
      out_file: "automation/logs/enhanced-github-redundancy-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Enhanced Netlify functions redundancy manager
    {
      name: "enhanced-netlify-redundancy",
      script: "automation/enhanced-netlify-functions-redundancy.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 3,
      exp_backoff_restart_delay: 20000,
      env: {
        NODE_ENV: "production",
        NETLIFY_CHECK_INTERVAL: "180000", // 3 minutes
        NETLIFY_MAX_FAILURES: "2",
        NETLIFY_RECOVERY_TIMEOUT: "600000" // 10 minutes
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/enhanced-netlify-redundancy-error.log",
      out_file: "automation/logs/enhanced-netlify-redundancy-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Master redundancy orchestrator
    {
      name: "master-redundancy-orchestrator",
      script: "automation/master-redundancy-orchestrator.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      exp_backoff_restart_delay: 10000,
      env: {
        NODE_ENV: "production",
        ORCHESTRATOR_CHECK_INTERVAL: "120000", // 2 minutes
        ORCHESTRATOR_COORDINATION_INTERVAL: "300000", // 5 minutes
        ORCHESTRATOR_MAX_FAILURES: "3"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/master-redundancy-orchestrator-error.log",
      out_file: "automation/logs/master-redundancy-orchestrator-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Continuous build monitor
    {
      name: "continuous-build-monitor",
      script: "automation/continuous-build-monitor.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 3,
      exp_backoff_restart_delay: 15000,
      env: {
        NODE_ENV: "production",
        BUILD_MONITOR_INTERVAL: "300000", // 5 minutes
        BUILD_TIMEOUT: "600000", // 10 minutes
        BUILD_MAX_FAILURES: "3"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/continuous-build-monitor-error.log",
      out_file: "automation/logs/continuous-build-monitor-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Build failure recovery
    {
      name: "build-failure-recovery",
      script: "automation/build-failure-recovery.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 3,
      exp_backoff_restart_delay: 20000,
      env: {
        NODE_ENV: "production",
        RECOVERY_CHECK_INTERVAL: "600000", // 10 minutes
        RECOVERY_TIMEOUT: "900000", // 15 minutes
        RECOVERY_MAX_ATTEMPTS: "3"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/build-failure-recovery-error.log",
      out_file: "automation/logs/build-failure-recovery-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    }
  ]
};