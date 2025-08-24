module.exports = {
  apps: [
    // Ultimate Redundancy Master Controller
    {
      name: "ultimate-redundancy-master-v2",
      script: "automation/ultimate-redundancy-automation-system.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 15,
      exp_backoff_restart_delay: 2000,
      env: {
        NODE_ENV: "production",
        ULTIMATE_REDUNDANCY_LOG_LEVEL: "INFO",
        ULTIMATE_REDUNDANCY_MASTER_CHECK_INTERVAL: "15000",
        ULTIMATE_REDUNDANCY_AUTO_RECOVERY: "true",
        ULTIMATE_REDUNDANCY_LOAD_BALANCING: "true",
        ULTIMATE_REDUNDANCY_BACKUP_ENABLED: "true",
        ULTIMATE_REDUNDANCY_MONITORING_ENABLED: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/ultimate-redundancy-master-v2-error.log",
      out_file: "automation/logs/ultimate-redundancy-master-v2-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Enhanced PM2 Redundancy System V2
    {
      name: "enhanced-pm2-redundancy-v2",
      script: "automation/enhanced-pm2-redundancy.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 8,
      exp_backoff_restart_delay: 3000,
      env: {
        NODE_ENV: "production",
        PM2_REDUNDANCY_LOG_LEVEL: "INFO",
        PM2_HEALTH_CHECK_INTERVAL: "15000",
        PM2_MAX_RESTART_ATTEMPTS: "8",
        PM2_AUTO_RECOVERY: "true",
        PM2_PROCESS_MONITORING: "true",
        PM2_LOG_ROTATION: "true",
        PM2_ENHANCED_MONITORING: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/enhanced-pm2-redundancy-v2-error.log",
      out_file: "automation/logs/enhanced-pm2-redundancy-v2-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Enhanced GitHub Actions Redundancy System V2
    {
      name: "enhanced-github-actions-redundancy-v2",
      script: "automation/enhanced-github-actions-redundancy.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 8,
      exp_backoff_restart_delay: 5000,
      env: {
        NODE_ENV: "production",
        GITHUB_REDUNDANCY_LOG_LEVEL: "INFO",
        GITHUB_HEALTH_CHECK_INTERVAL: "30000",
        GITHUB_MAX_FAILURES: "5",
        GITHUB_AUTO_TRIGGER: "true",
        GITHUB_BACKUP_TRIGGERS: "true",
        GITHUB_WORKFLOW_VALIDATION: "true",
        GITHUB_API_HEALTH_CHECK: "true",
        GITHUB_ENHANCED_MONITORING: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/enhanced-github-actions-redundancy-v2-error.log",
      out_file: "automation/logs/enhanced-github-actions-redundancy-v2-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Enhanced Netlify Functions Redundancy System V2
    {
      name: "enhanced-netlify-functions-redundancy-v2",
      script: "automation/enhanced-netlify-functions-redundancy.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 8,
      exp_backoff_restart_delay: 8000,
      env: {
        NODE_ENV: "production",
        NETLIFY_REDUNDANCY_LOG_LEVEL: "INFO",
        NETLIFY_HEALTH_CHECK_INTERVAL: "60000",
        NETLIFY_MAX_FAILURES: "3",
        NETLIFY_AUTO_DEPLOY: "true",
        NETLIFY_AUTO_REGENERATE: "true",
        NETLIFY_DEPLOYMENT_CHECK: "true",
        NETLIFY_LOG_ROTATION: "true",
        NETLIFY_ENHANCED_MONITORING: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/enhanced-netlify-functions-redundancy-v2-error.log",
      out_file: "automation/logs/enhanced-netlify-functions-redundancy-v2-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Master Redundancy Orchestrator V2
    {
      name: "master-redundancy-orchestrator-v2",
      script: "automation/master-redundancy-orchestrator.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 5000,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_LOG_LEVEL: "INFO",
        REDUNDANCY_MASTER_CHECK_INTERVAL: "30000",
        REDUNDANCY_AUTO_RECOVERY: "true",
        REDUNDANCY_LOAD_BALANCING: "true",
        REDUNDANCY_ENHANCED_MONITORING: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/master-orchestrator-v2-error.log",
      out_file: "automation/logs/master-orchestrator-v2-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Comprehensive Redundancy System V2
    {
      name: "comprehensive-redundancy-system-v2",
      script: "automation/comprehensive-redundancy-system.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 8,
      exp_backoff_restart_delay: 6000,
      env: {
        NODE_ENV: "production",
        COMPREHENSIVE_REDUNDANCY_LOG_LEVEL: "INFO",
        COMPREHENSIVE_REDUNDANCY_CHECK_INTERVAL: "20000",
        COMPREHENSIVE_REDUNDANCY_AUTO_RECOVERY: "true",
        COMPREHENSIVE_REDUNDANCY_ENHANCED_MONITORING: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/comprehensive-redundancy-system-v2-error.log",
      out_file: "automation/logs/comprehensive-redundancy-system-v2-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Redundancy Health Monitor V2
    {
      name: "redundancy-health-monitor-v2",
      script: "automation/redundancy-health-monitor.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      exp_backoff_restart_delay: 10000,
      env: {
        NODE_ENV: "production",
        HEALTH_CHECK_INTERVAL: "150000", // 2.5 minutes
        ALERT_THRESHOLD: "5",
        ENHANCED_MONITORING: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-health-v2-error.log",
      out_file: "automation/logs/redundancy-health-v2-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Redundancy Git Sync V2
    {
      name: "redundancy-git-sync-v2",
      script: "automation/redundancy-git-sync.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: false,
      instances: 1,
      cron_restart: "*/10 * * * *", // every 10 minutes
      env: {
        NODE_ENV: "production",
        GIT_SYNC_REMOTE: "origin",
        GIT_SYNC_BRANCH: "main",
        GIT_SYNC_STRATEGY: "pull",
        GIT_SYNC_CLEAN: "1",
        GIT_SYNC_ENHANCED_MONITORING: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-git-sync-v2-error.log",
      out_file: "automation/logs/redundancy-git-sync-v2-out.log",
      time: true
    },

    // Redundancy Build Monitor V2
    {
      name: "redundancy-build-monitor-v2",
      script: "automation/redundancy-build-monitor.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      exp_backoff_restart_delay: 12000,
      env: {
        NODE_ENV: "production",
        BUILD_CHECK_INTERVAL: "300000", // 5 minutes
        BUILD_TIMEOUT: "300000", // 5 minutes
        MAX_BUILD_FAILURES: "5",
        ENHANCED_BUILD_MONITORING: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-build-v2-error.log",
      out_file: "automation/logs/redundancy-build-v2-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Legacy PM2 Auto Sync (for backward compatibility)
    {
      name: "zion-auto-sync-legacy",
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
      error_file: "logs/zion-auto-sync-legacy-error.log",
      out_file: "logs/zion-auto-sync-legacy-out.log",
      time: true
    },

    // Legacy PM2 Auto Sync Cron (for backward compatibility)
    {
      name: "zion-auto-sync-cron-legacy",
      script: "automation/pm2-auto-sync.js",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: false,
      instances: 1,
      cron_restart: "*/15 * * * *", // every 15 minutes
      env: {
        NODE_ENV: "production",
        AUTO_SYNC_REMOTE: process.env.AUTO_SYNC_REMOTE || "origin",
        AUTO_SYNC_BRANCH: process.env.AUTO_SYNC_BRANCH || "main",
        AUTO_SYNC_STRATEGY: process.env.AUTO_SYNC_STRATEGY || "hardreset",
        AUTO_SYNC_CLEAN: process.env.AUTO_SYNC_CLEAN || "1",
        AUTO_SYNC_GC: process.env.AUTO_SYNC_GC || "0"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "logs/zion-auto-sync-cron-legacy-error.log",
      out_file: "logs/zion-auto-sync-cron-legacy-out.log",
      time: true
    }
  ],

  // PM2 Configuration
  deploy: {
    production: {
      user: "node",
      host: "localhost",
      ref: "origin/main",
      repo: "git@github.com:Zion-Holdings/zion.app.git",
      path: "/var/www/production",
      "post-deploy": "npm install && pm2 reload ecosystem.ultimate-redundancy-v2.cjs --env production"
    }
  }
};