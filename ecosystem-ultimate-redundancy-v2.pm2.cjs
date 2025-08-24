module.exports = {
  apps: [
    // Ultimate Redundancy System V2 Master Controller
    {
      name: "ultimate-redundancy-v2-master",
      script: "automation/ultimate-redundancy-system-v2.cjs",
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
        REDUNDANCY_PROCESS_MONITORING: "true",
        REDUNDANCY_LOG_ROTATION: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/ultimate-redundancy-v2-master-error.log",
      out_file: "automation/logs/ultimate-redundancy-v2-master-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Enhanced PM2 Redundancy Manager V2
    {
      name: "enhanced-pm2-redundancy-v2",
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
        PM2_LOG_ROTATION: "true",
        PM2_LOAD_BALANCING: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/enhanced-pm2-redundancy-v2-error.log",
      out_file: "automation/logs/enhanced-pm2-redundancy-v2-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Enhanced GitHub Actions Redundancy Manager V2
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
        GITHUB_AUTO_RECOVERY: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/enhanced-github-actions-redundancy-v2-error.log",
      out_file: "automation/logs/enhanced-github-actions-redundancy-v2-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Enhanced Netlify Functions Redundancy Manager V2
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
        NETLIFY_LOG_ROTATION: "true",
        NETLIFY_PERFORMANCE_MONITORING: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/enhanced-netlify-functions-redundancy-v2-error.log",
      out_file: "automation/logs/enhanced-netlify-functions-redundancy-v2-out.log",
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
      max_restarts: 3,
      exp_backoff_restart_delay: 15000,
      env: {
        NODE_ENV: "production",
        BUILD_CHECK_INTERVAL: "600000", // 10 minutes
        BUILD_TIMEOUT: "300000", // 5 minutes
        MAX_BUILD_FAILURES: "3",
        BUILD_AUTO_RECOVERY: "true",
        BUILD_PRE_CHECKS: "true",
        BUILD_POST_VALIDATION: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/continuous-build-monitor-v2-error.log",
      out_file: "automation/logs/continuous-build-monitor-v2-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Master Build Orchestrator V2
    {
      name: "master-build-orchestrator-v2",
      script: "automation/master-build-orchestrator.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      exp_backoff_restart_delay: 10000,
      env: {
        NODE_ENV: "production",
        BUILD_ORCHESTRATOR_LOG_LEVEL: "INFO",
        BUILD_ORCHESTRATOR_CHECK_INTERVAL: "300000", // 5 minutes
        BUILD_ORCHESTRATOR_MAX_FAILURES: "3",
        BUILD_ORCHESTRATOR_AUTO_RECOVERY: "true",
        BUILD_ORCHESTRATOR_SMART_BUILD: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/master-build-orchestrator-v2-error.log",
      out_file: "automation/logs/master-build-orchestrator-v2-out.log",
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
      max_restarts: 3,
      exp_backoff_restart_delay: 20000,
      env: {
        NODE_ENV: "production",
        BUILD_RECOVERY_LOG_LEVEL: "INFO",
        BUILD_RECOVERY_CHECK_INTERVAL: "300000", // 5 minutes
        BUILD_RECOVERY_MAX_ATTEMPTS: "3",
        BUILD_RECOVERY_AUTO_TRIGGER: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/build-failure-recovery-v2-error.log",
      out_file: "automation/logs/build-failure-recovery-v2-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Pre-Build Health Check V2
    {
      name: "pre-build-health-check-v2",
      script: "automation/pre-build-health-check.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 3,
      exp_backoff_restart_delay: 10000,
      env: {
        NODE_ENV: "production",
        PRE_BUILD_LOG_LEVEL: "INFO",
        PRE_BUILD_CHECK_INTERVAL: "300000", // 5 minutes
        PRE_BUILD_AUTO_FIX: "true",
        PRE_BUILD_VALIDATION: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/pre-build-health-check-v2-error.log",
      out_file: "automation/logs/pre-build-health-check-v2-out.log",
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
      max_restarts: 3,
      exp_backoff_restart_delay: 10000,
      env: {
        NODE_ENV: "production",
        PAGE_VALIDATOR_LOG_LEVEL: "INFO",
        PAGE_VALIDATOR_CHECK_INTERVAL: "600000", // 10 minutes
        PAGE_VALIDATOR_AUTO_FIX: "true",
        PAGE_VALIDATOR_VALIDATION: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/nextjs-page-validator-v2-error.log",
      out_file: "automation/logs/nextjs-page-validator-v2-out.log",
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
        HEALTH_CHECK_INTERVAL: "300000", // 5 minutes
        ALERT_THRESHOLD: "3",
        HEALTH_AUTO_RECOVERY: "true",
        HEALTH_REPORTING: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-health-monitor-v2-error.log",
      out_file: "automation/logs/redundancy-health-monitor-v2-out.log",
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
      cron_restart: "*/15 * * * *", // every 15 minutes
      env: {
        NODE_ENV: "production",
        GIT_SYNC_REMOTE: "origin",
        GIT_SYNC_BRANCH: "main",
        GIT_SYNC_STRATEGY: "pull",
        GIT_SYNC_CLEAN: "1",
        GIT_SYNC_AUTO_RECOVERY: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-git-sync-v2-error.log",
      out_file: "automation/logs/redundancy-git-sync-v2-out.log",
      time: true
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
      repo: "git@github.com:username/repo.git",
      path: "/var/www/production",
      "post-deploy": "npm install && pm2 reload ecosystem-ultimate-redundancy-v2.pm2.cjs --env production"
    }
  }
};