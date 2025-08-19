module.exports = {
  apps: [
    // Ultimate Redundancy Master System
    {
      name: "ultimate-redundancy-master",
      script: "automation/ultimate-redundancy-master.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 10000,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_LOG_LEVEL: "INFO",
        PM2_CHECK_INTERVAL: "30000",
        GITHUB_CHECK_INTERVAL: "60000",
        NETLIFY_CHECK_INTERVAL: "120000",
        HEALTH_CHECK_INTERVAL: "300000",
        AUTO_RECOVERY: "true",
        LOAD_BALANCING: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/ultimate-redundancy-master-error.log",
      out_file: "automation/logs/ultimate-redundancy-master-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Enhanced PM2 Redundancy System
    {
      name: "enhanced-pm2-redundancy",
      script: "automation/enhanced-pm2-redundancy.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      exp_backoff_restart_delay: 5000,
      env: {
        NODE_ENV: "production",
        PM2_REDUNDANCY_LOG_LEVEL: "INFO",
        PM2_HEALTH_CHECK_INTERVAL: "30000",
        PM2_MAX_RESTART_ATTEMPTS: "5",
        PM2_AUTO_RECOVERY: "true",
        PM2_PROCESS_MONITORING: "true",
        PM2_LOG_ROTATION: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/enhanced-pm2-redundancy-error.log",
      out_file: "automation/logs/enhanced-pm2-redundancy-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Enhanced GitHub Actions Redundancy System
    {
      name: "enhanced-github-actions-redundancy",
      script: "automation/enhanced-github-actions-redundancy.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      exp_backoff_restart_delay: 10000,
      env: {
        NODE_ENV: "production",
        GITHUB_REDUNDANCY_LOG_LEVEL: "INFO",
        GITHUB_HEALTH_CHECK_INTERVAL: "60000",
        GITHUB_MAX_FAILURES: "3",
        GITHUB_AUTO_TRIGGER: "true",
        GITHUB_BACKUP_TRIGGERS: "true",
        GITHUB_WORKFLOW_VALIDATION: "true",
        GITHUB_API_HEALTH_CHECK: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/enhanced-github-actions-redundancy-error.log",
      out_file: "automation/logs/enhanced-github-actions-redundancy-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Enhanced Netlify Functions Redundancy System
    {
      name: "enhanced-netlify-functions-redundancy",
      script: "automation/enhanced-netlify-functions-redundancy.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      exp_backoff_restart_delay: 15000,
      env: {
        NODE_ENV: "production",
        NETLIFY_REDUNDANCY_LOG_LEVEL: "INFO",
        NETLIFY_HEALTH_CHECK_INTERVAL: "120000",
        NETLIFY_MAX_FAILURES: "3",
        NETLIFY_AUTO_DEPLOY: "true",
        NETLIFY_AUTO_REGENERATE: "true",
        NETLIFY_DEPLOYMENT_CHECK: "true",
        NETLIFY_LOG_ROTATION: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/enhanced-netlify-functions-redundancy-error.log",
      out_file: "automation/logs/enhanced-netlify-functions-redundancy-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

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
        REDUNDANCY_MASTER_CHECK_INTERVAL: "60000",
        REDUNDANCY_AUTO_RECOVERY: "true",
        REDUNDANCY_LOAD_BALANCING: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/master-orchestrator-error.log",
      out_file: "automation/logs/master-orchestrator-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Comprehensive Redundancy Orchestrator
    {
      name: "comprehensive-redundancy-orchestrator",
      script: "automation/comprehensive-redundancy-orchestrator.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 8,
      exp_backoff_restart_delay: 8000,
      env: {
        NODE_ENV: "production",
        COMPREHENSIVE_LOG_LEVEL: "INFO",
        COMPREHENSIVE_CHECK_INTERVAL: "45000",
        COMPREHENSIVE_AUTO_RECOVERY: "true",
        COMPREHENSIVE_LOAD_BALANCING: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/comprehensive-orchestrator-error.log",
      out_file: "automation/logs/comprehensive-orchestrator-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Redundancy Health Monitor
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
        ALERT_THRESHOLD: "3",
        HEALTH_LOG_LEVEL: "INFO"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-health-error.log",
      out_file: "automation/logs/redundancy-health-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Redundancy Git Sync
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
        GIT_SYNC_CLEAN: "1",
        GIT_SYNC_LOG_LEVEL: "INFO"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-git-sync-error.log",
      out_file: "automation/logs/redundancy-git-sync-out.log",
      time: true
    },

    // Redundancy Build Monitor
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
        MAX_BUILD_FAILURES: "3",
        BUILD_LOG_LEVEL: "INFO"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-build-error.log",
      out_file: "automation/logs/redundancy-build-out.log",
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
    },

    // Legacy Redundancy Systems (for backward compatibility)
    {
      name: "redundancy-automation-system",
      script: "automation/redundancy-automation-system.cjs",
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
      error_file: "automation/logs/redundancy-system-error.log",
      out_file: "automation/logs/redundancy-system-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Marketing Sync Automation
    {
      name: "marketing-sync-automation",
      script: "automation/marketing-sync.js",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: false,
      instances: 1,
      cron_restart: "0 */12 * * *", // every 12 hours
      env: {
        NODE_ENV: "production",
        LINKEDIN_ACCESS_TOKEN: process.env.LINKEDIN_ACCESS_TOKEN || "",
        LINKEDIN_URN: process.env.LINKEDIN_URN || "",
        IG_USER_ID: process.env.IG_USER_ID || "",
        IG_ACCESS_TOKEN: process.env.IG_ACCESS_TOKEN || ""
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/marketing-sync-error.log",
      out_file: "automation/logs/marketing-sync-out.log",
      time: true
    },

    // Continuous Build Monitor
    {
      name: "continuous-build-monitor",
      script: "automation/continuous-build-monitor.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      exp_backoff_restart_delay: 10000,
      env: {
        NODE_ENV: "production",
        BUILD_MONITOR_INTERVAL: "300000", // 5 minutes
        BUILD_LOG_LEVEL: "INFO"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/continuous-build-monitor-error.log",
      out_file: "automation/logs/continuous-build-monitor-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Build Failure Recovery
    {
      name: "build-failure-recovery",
      script: "automation/build-failure-recovery.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 3,
      exp_backoff_restart_delay: 15000,
      env: {
        NODE_ENV: "production",
        RECOVERY_CHECK_INTERVAL: "600000", // 10 minutes
        RECOVERY_LOG_LEVEL: "INFO"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/build-failure-recovery-error.log",
      out_file: "automation/logs/build-failure-recovery-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
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
      "post-deploy": "npm install && pm2 reload ecosystem.ultimate-redundancy.cjs --env production"
    }
  },

  // PM2 Ecosystem Configuration
  ecosystem: {
    name: "ultimate-redundancy",
    version: "2.0.0",
    description: "Ultimate Redundancy Automation System for PM2, GitHub Actions, and Netlify Functions",
    author: "Automation System",
    license: "MIT"
  }
};