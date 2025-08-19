module.exports = {
  apps: [
    // Core PM2 Automation Processes
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
      time: true,
      instances: 1,
      exec_mode: "fork"
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

    // Redundancy System Processes
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

    // Comprehensive Redundancy Processes
    {
      name: "comprehensive-redundancy-system",
      script: "automation/comprehensive-redundancy-system.cjs",
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
        COMPREHENSIVE_ALERT_THRESHOLD: "3"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/comprehensive-redundancy-error.log",
      out_file: "automation/logs/comprehensive-redundancy-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },
    {
      name: "comprehensive-redundancy-orchestrator",
      script: "automation/comprehensive-redundancy-orchestrator.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 6,
      exp_backoff_restart_delay: 12000,
      env: {
        NODE_ENV: "production",
        ORCHESTRATOR_LOG_LEVEL: "INFO",
        ORCHESTRATOR_CHECK_INTERVAL: "60000",
        ORCHESTRATOR_MAX_FAILURES: "2"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/comprehensive-orchestrator-error.log",
      out_file: "automation/logs/comprehensive-orchestrator-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Specialized Redundancy Managers
    {
      name: "comprehensive-pm2-redundancy",
      script: "automation/comprehensive-pm2-redundancy.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      exp_backoff_restart_delay: 10000,
      env: {
        NODE_ENV: "production",
        PM2_REDUNDANCY_LOG_LEVEL: "INFO",
        PM2_REDUNDANCY_CHECK_INTERVAL: "30000",
        PM2_REDUNDANCY_MAX_RESTARTS: "5"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/comprehensive-pm2-redundancy-error.log",
      out_file: "automation/logs/comprehensive-pm2-redundancy-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },
    {
      name: "comprehensive-github-actions-redundancy",
      script: "automation/comprehensive-github-actions-redundancy.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 4,
      exp_backoff_restart_delay: 15000,
      env: {
        NODE_ENV: "production",
        GITHUB_REDUNDANCY_LOG_LEVEL: "INFO",
        GITHUB_REDUNDANCY_CHECK_INTERVAL: "60000",
        GITHUB_REDUNDANCY_MAX_FAILURES: "3"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/comprehensive-github-redundancy-error.log",
      out_file: "automation/logs/comprehensive-github-redundancy-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },
    {
      name: "comprehensive-netlify-functions-redundancy",
      script: "automation/comprehensive-netlify-functions-redundancy.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 4,
      exp_backoff_restart_delay: 15000,
      env: {
        NODE_ENV: "production",
        NETLIFY_REDUNDANCY_LOG_LEVEL: "INFO",
        NETLIFY_REDUNDANCY_CHECK_INTERVAL: "120000",
        NETLIFY_REDUNDANCY_MAX_FAILURES: "2"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/comprehensive-netlify-redundancy-error.log",
      out_file: "automation/logs/comprehensive-netlify-redundancy-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Ultimate Redundancy System
    {
      name: "ultimate-redundancy-automation-system",
      script: "automation/ultimate-redundancy-automation-system.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 5000,
      env: {
        NODE_ENV: "production",
        ULTIMATE_REDUNDANCY_LOG_LEVEL: "INFO",
        ULTIMATE_REDUNDANCY_CHECK_INTERVAL: "30000",
        ULTIMATE_REDUNDANCY_ALERT_THRESHOLD: "3",
        ULTIMATE_REDUNDANCY_AUTO_RECOVERY: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/ultimate-redundancy-error.log",
      out_file: "automation/logs/ultimate-redundancy-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Marketing and Content Automation
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

    // Build and Health Monitoring
    {
      name: "build-health-monitor",
      script: "automation/pre-build-health-check.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: false,
      instances: 1,
      cron_restart: "*/30 * * * *", // every 30 minutes
      env: {
        NODE_ENV: "production",
        BUILD_HEALTH_CHECK_INTERVAL: "1800000",
        BUILD_HEALTH_TIMEOUT: "300000"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/build-health-error.log",
      out_file: "automation/logs/build-health-out.log",
      time: true
    },
    {
      name: "continuous-build-monitor",
      script: "automation/continuous-build-monitor.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 3,
      exp_backoff_restart_delay: 20000,
      env: {
        NODE_ENV: "production",
        CONTINUOUS_BUILD_CHECK_INTERVAL: "300000", // 5 minutes
        CONTINUOUS_BUILD_TIMEOUT: "600000", // 10 minutes
        CONTINUOUS_BUILD_MAX_FAILURES: "3"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/continuous-build-monitor-error.log",
      out_file: "automation/logs/continuous-build-monitor-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Git and Sync Automation
    {
      name: "git-sync-automation",
      script: "automation/git-sync.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: false,
      instances: 1,
      cron_restart: "*/5 * * * *", // every 5 minutes
      env: {
        NODE_ENV: "production",
        GIT_SYNC_REMOTE: "origin",
        GIT_SYNC_BRANCH: "main",
        GIT_SYNC_STRATEGY: "pull",
        GIT_SYNC_CLEAN: "1"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/git-sync-automation-error.log",
      out_file: "automation/logs/git-sync-automation-out.log",
      time: true
    },

    // Content and UI Automation
    {
      name: "footer-injector-automation",
      script: "automation/footer-injector.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: false,
      instances: 1,
      cron_restart: "0 */6 * * *", // every 6 hours
      env: {
        NODE_ENV: "production",
        FOOTER_INJECTOR_INTERVAL: "21600000"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/footer-injector-error.log",
      out_file: "automation/logs/footer-injector-out.log",
      time: true
    },

    // Monitoring and Dashboard
    {
      name: "comprehensive-monitoring-dashboard",
      script: "automation/comprehensive-monitoring-dashboard.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      exp_backoff_restart_delay: 10000,
      env: {
        NODE_ENV: "production",
        DASHBOARD_LOG_LEVEL: "INFO",
        DASHBOARD_UPDATE_INTERVAL: "60000",
        DASHBOARD_PORT: "3001"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/monitoring-dashboard-error.log",
      out_file: "automation/logs/monitoring-dashboard-out.log",
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
      path: "/var/www/production",
      "post-deploy": "npm install && pm2 reload ecosystem.ultimate-redundancy.cjs --env production"
    }
  }
};