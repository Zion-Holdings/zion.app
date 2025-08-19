module.exports = {
  apps: [
    // Main Ultimate Redundancy Master
    {
      name: "ultimate-redundancy-master",
      script: "automation/ultimate-redundancy-master.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 5000,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "comprehensive",
        HEALTH_CHECK_INTERVAL: "30000",
        LOG_LEVEL: "INFO"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/ultimate-redundancy-master-error.log",
      out_file: "automation/logs/ultimate-redundancy-master-out.log",
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
      max_restarts: 8,
      exp_backoff_restart_delay: 3000,
      env: {
        NODE_ENV: "production",
        PM2_REDUNDANCY_MODE: "enhanced",
        HEALTH_CHECK_INTERVAL: "30000",
        MAX_RESTART_ATTEMPTS: "5"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/enhanced-pm2-redundancy-error.log",
      out_file: "automation/logs/enhanced-pm2-redundancy-out.log",
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
      max_restarts: 8,
      exp_backoff_restart_delay: 3000,
      env: {
        NODE_ENV: "production",
        GITHUB_REDUNDANCY_MODE: "enhanced",
        HEALTH_CHECK_INTERVAL: "60000",
        WORKFLOW_TRIGGER_INTERVAL: "300000"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/enhanced-github-actions-redundancy-error.log",
      out_file: "automation/logs/enhanced-github-actions-redundancy-out.log",
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
      max_restarts: 8,
      exp_backoff_restart_delay: 3000,
      env: {
        NODE_ENV: "production",
        NETLIFY_REDUNDANCY_MODE: "enhanced",
        HEALTH_CHECK_INTERVAL: "120000",
        FUNCTION_TIMEOUT: "30000",
        MAX_RETRIES: "3"
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
      max_restarts: 6,
      exp_backoff_restart_delay: 5000,
      env: {
        NODE_ENV: "production",
        ORCHESTRATOR_MODE: "master",
        COORDINATION_INTERVAL: "60000",
        FAILOVER_TIMEOUT: "30000"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/master-redundancy-orchestrator-error.log",
      out_file: "automation/logs/master-redundancy-orchestrator-out.log",
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
      max_restarts: 6,
      exp_backoff_restart_delay: 5000,
      env: {
        NODE_ENV: "production",
        COMPREHENSIVE_MODE: "enabled",
        ORCHESTRATION_INTERVAL: "45000",
        SYSTEM_HEALTH_INTERVAL: "90000"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/comprehensive-redundancy-orchestrator-error.log",
      out_file: "automation/logs/comprehensive-redundancy-orchestrator-out.log",
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
      exp_backoff_restart_delay: 2000,
      env: {
        NODE_ENV: "production",
        HEALTH_MONITOR_MODE: "continuous",
        MONITORING_INTERVAL: "30000",
        ALERT_THRESHOLD: "3"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-health-monitor-error.log",
      out_file: "automation/logs/redundancy-health-monitor-out.log",
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
      autorestart: true,
      max_restarts: 5,
      exp_backoff_restart_delay: 2000,
      env: {
        NODE_ENV: "production",
        GIT_SYNC_MODE: "redundant",
        SYNC_INTERVAL: "120000",
        CONFLICT_RESOLUTION: "auto"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-git-sync-error.log",
      out_file: "automation/logs/redundancy-git-sync-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Redundancy Build Monitor
    {
      name: "redundancy-build-monitor",
      script: "automation/redundancy-build-monitor.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      exp_backoff_restart_delay: 2000,
      env: {
        NODE_ENV: "production",
        BUILD_MONITOR_MODE: "redundant",
        MONITORING_INTERVAL: "60000",
        BUILD_TIMEOUT: "300000"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-build-monitor-error.log",
      out_file: "automation/logs/redundancy-build-monitor-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Master Build Orchestrator
    {
      name: "master-build-orchestrator",
      script: "automation/master-build-orchestrator.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 6,
      exp_backoff_restart_delay: 5000,
      env: {
        NODE_ENV: "production",
        BUILD_ORCHESTRATOR_MODE: "master",
        BUILD_COORDINATION_INTERVAL: "90000",
        BUILD_RETRY_ATTEMPTS: "3"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/master-build-orchestrator-error.log",
      out_file: "automation/logs/master-build-orchestrator-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
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
      exp_backoff_restart_delay: 2000,
      env: {
        NODE_ENV: "production",
        CONTINUOUS_MONITOR_MODE: "enabled",
        MONITORING_INTERVAL: "45000",
        BUILD_HEALTH_CHECK_INTERVAL: "180000"
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
      max_restarts: 4,
      exp_backoff_restart_delay: 10000,
      env: {
        NODE_ENV: "production",
        RECOVERY_MODE: "automatic",
        RECOVERY_INTERVAL: "120000",
        MAX_RECOVERY_ATTEMPTS: "5"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/build-failure-recovery-error.log",
      out_file: "automation/logs/build-failure-recovery-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Pre-build Health Check
    {
      name: "pre-build-health-check",
      script: "automation/pre-build-health-check.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 3,
      exp_backoff_restart_delay: 15000,
      env: {
        NODE_ENV: "production",
        HEALTH_CHECK_MODE: "pre-build",
        CHECK_INTERVAL: "180000",
        FAILURE_THRESHOLD: "2"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/pre-build-health-check-error.log",
      out_file: "automation/logs/pre-build-health-check-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // NextJS Page Validator
    {
      name: "nextjs-page-validator",
      script: "automation/nextjs-page-validator.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 3,
      exp_backoff_restart_delay: 15000,
      env: {
        NODE_ENV: "production",
        VALIDATION_MODE: "continuous",
        VALIDATION_INTERVAL: "240000",
        PAGE_SCAN_INTERVAL: "360000"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/nextjs-page-validator-error.log",
      out_file: "automation/logs/nextjs-page-validator-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Git Sync Cron
    {
      name: "git-sync-cron",
      script: "automation/git-sync-cron.sh",
      interpreter: "bash",
      cwd: __dirname,
      watch: false,
      autorestart: false,
      cron_restart: "*/15 * * * *", // every 15 minutes
      env: {
        NODE_ENV: "production",
        GIT_SYNC_CRON_MODE: "enabled",
        SYNC_STRATEGY: "hardreset",
        AUTO_SYNC_CLEAN: "1"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/git-sync-cron-error.log",
      out_file: "automation/logs/git-sync-cron-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Marketing Sync
    {
      name: "marketing-sync",
      script: "automation/marketing-sync.js",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 4,
      exp_backoff_restart_delay: 8000,
      env: {
        NODE_ENV: "production",
        MARKETING_SYNC_MODE: "automated",
        SYNC_INTERVAL: "43200000", // 12 hours
        LINKEDIN_ACCESS_TOKEN: process.env.LINKEDIN_ACCESS_TOKEN || "",
        LINKEDIN_URN: process.env.LINKEDIN_URN || "",
        IG_USER_ID: process.env.IG_USER_ID || "",
        IG_ACCESS_TOKEN: process.env.IG_ACCESS_TOKEN || ""
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/marketing-sync-error.log",
      out_file: "automation/logs/marketing-sync-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Footer Injector
    {
      name: "footer-injector",
      script: "automation/footer-injector.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 3,
      exp_backoff_restart_delay: 15000,
      env: {
        NODE_ENV: "production",
        FOOTER_INJECTION_MODE: "post-build",
        INJECTION_INTERVAL: "300000", // 5 minutes
        FOOTER_TEMPLATE_PATH: "automation/templates/footer-template.html"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/footer-injector-error.log",
      out_file: "automation/logs/footer-injector-out.log",
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
      "post-deploy": "npm install && pm2 reload ecosystem.ultimate-redundancy.cjs --env production"
    }
  }
};