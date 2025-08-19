module.exports = {
  apps: [
    // Ultimate Redundancy System V2 - Main Controller
    {
      name: "ultimate-redundancy-v2-main",
      script: "automation/ultimate-redundancy-system-v2.cjs",
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
        REDUNDANCY_MAX_RETRIES: "5",
        REDUNDANCY_AUTO_RECOVERY: "true",
        REDUNDANCY_LOAD_BALANCING: "true",
        REDUNDANCY_HEALTH_CHECK_INTERVAL: "60000"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/ultimate-redundancy-v2-main-error.log",
      out_file: "automation/logs/ultimate-redundancy-v2-main-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Enhanced PM2 Redundancy V2
    {
      name: "enhanced-pm2-redundancy-v2",
      script: "automation/enhanced-pm2-redundancy.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      exp_backoff_restart_delay: 3000,
      env: {
        NODE_ENV: "production",
        PM2_REDUNDANCY_LOG_LEVEL: "INFO",
        PM2_HEALTH_CHECK_INTERVAL: "30000",
        PM2_MAX_RESTART_ATTEMPTS: "5",
        PM2_AUTO_RECOVERY: "true",
        PM2_PROCESS_MONITORING: "true",
        PM2_LOG_ROTATION: "true",
        PM2_REDUNDANCY_VERSION: "2.0"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/enhanced-pm2-redundancy-v2-error.log",
      out_file: "automation/logs/enhanced-pm2-redundancy-v2-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Enhanced GitHub Actions Redundancy V2
    {
      name: "enhanced-github-actions-redundancy-v2",
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
        GITHUB_API_HEALTH_CHECK: "true",
        GITHUB_REDUNDANCY_VERSION: "2.0"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/enhanced-github-actions-redundancy-v2-error.log",
      out_file: "automation/logs/enhanced-github-actions-redundancy-v2-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Enhanced Netlify Functions Redundancy V2
    {
      name: "enhanced-netlify-functions-redundancy-v2",
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
        NETLIFY_FUNCTION_VALIDATION: "true",
        NETLIFY_REDUNDANCY_VERSION: "2.0"
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
      exp_backoff_restart_delay: 10000,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_LOG_LEVEL: "INFO",
        REDUNDANCY_MASTER_CHECK_INTERVAL: "60000",
        REDUNDANCY_AUTO_RECOVERY: "true",
        REDUNDANCY_LOAD_BALANCING: "true",
        REDUNDANCY_VERSION: "2.0"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/master-redundancy-orchestrator-v2-error.log",
      out_file: "automation/logs/master-redundancy-orchestrator-v2-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Comprehensive Monitoring Dashboard V2
    {
      name: "comprehensive-monitoring-dashboard-v2",
      script: "automation/comprehensive-monitoring-dashboard.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      exp_backoff_restart_delay: 8000,
      env: {
        NODE_ENV: "production",
        MONITORING_LOG_LEVEL: "INFO",
        MONITORING_UPDATE_INTERVAL: "30000",
        MONITORING_ALERT_THRESHOLD: "80",
        MONITORING_AUTO_SCALING: "true",
        MONITORING_VERSION: "2.0"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/comprehensive-monitoring-dashboard-v2-error.log",
      out_file: "automation/logs/comprehensive-monitoring-dashboard-v2-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Continuous Build Monitor V2
    {
      name: "continuous-build-monitor-v2",
      script: "automation/continuous-build-monitor.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      exp_backoff_restart_delay: 12000,
      env: {
        NODE_ENV: "production",
        BUILD_MONITOR_LOG_LEVEL: "INFO",
        BUILD_MONITOR_CHECK_INTERVAL: "60000",
        BUILD_MONITOR_AUTO_FIX: "true",
        BUILD_MONITOR_NOTIFICATIONS: "true",
        BUILD_MONITOR_VERSION: "2.0"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/continuous-build-monitor-v2-error.log",
      out_file: "automation/logs/continuous-build-monitor-v2-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Enhanced Git Sync Orchestrator V2
    {
      name: "enhanced-git-sync-orchestrator-v2",
      script: "automation/enhanced-git-sync-orchestrator.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      exp_backoff_restart_delay: 7000,
      env: {
        NODE_ENV: "production",
        GIT_SYNC_LOG_LEVEL: "INFO",
        GIT_SYNC_INTERVAL: "300000",
        GIT_SYNC_AUTO_RESOLVE: "true",
        GIT_SYNC_BACKUP_BRANCHES: "true",
        GIT_SYNC_VERSION: "2.0"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/enhanced-git-sync-orchestrator-v2-error.log",
      out_file: "automation/logs/enhanced-git-sync-orchestrator-v2-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Build Failure Recovery V2
    {
      name: "build-failure-recovery-v2",
      script: "automation/build-failure-recovery.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      exp_backoff_restart_delay: 10000,
      env: {
        NODE_ENV: "production",
        BUILD_RECOVERY_LOG_LEVEL: "INFO",
        BUILD_RECOVERY_CHECK_INTERVAL: "120000",
        BUILD_RECOVERY_AUTO_FIX: "true",
        BUILD_RECOVERY_MAX_ATTEMPTS: "3",
        BUILD_RECOVERY_VERSION: "2.0"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/build-failure-recovery-v2-error.log",
      out_file: "automation/logs/build-failure-recovery-v2-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // NextJS Page Validator V2
    {
      name: "nextjs-page-validator-v2",
      script: "automation/nextjs-page-validator.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      exp_backoff_restart_delay: 6000,
      env: {
        NODE_ENV: "production",
        PAGE_VALIDATOR_LOG_LEVEL: "INFO",
        PAGE_VALIDATOR_CHECK_INTERVAL: "180000",
        PAGE_VALIDATOR_AUTO_FIX: "true",
        PAGE_VALIDATOR_VERSION: "2.0"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/nextjs-page-validator-v2-error.log",
      out_file: "automation/logs/nextjs-page-validator-v2-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Pre-build Health Check V2
    {
      name: "pre-build-health-check-v2",
      script: "automation/pre-build-health-check.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      exp_backoff_restart_delay: 5000,
      env: {
        NODE_ENV: "production",
        HEALTH_CHECK_LOG_LEVEL: "INFO",
        HEALTH_CHECK_INTERVAL: "240000",
        HEALTH_CHECK_AUTO_FIX: "true",
        HEALTH_CHECK_VERSION: "2.0"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/pre-build-health-check-v2-error.log",
      out_file: "automation/logs/pre-build-health-check-v2-out.log",
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
      repo: "https://github.com/Zion-Holdings/zion.app.git",
      path: "/var/www/zion.app",
      "post-deploy": "npm install && pm2 reload ecosystem.ultimate-redundancy-v2.cjs --env production"
    }
  }
};