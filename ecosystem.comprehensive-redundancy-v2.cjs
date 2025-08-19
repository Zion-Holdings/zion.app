module.exports = {
  apps: [
    // Comprehensive Redundancy V2 Master System
    {
      name: "comprehensive-redundancy-v2-master",
      script: "automation/comprehensive-redundancy-v2-system.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_TYPE: "comprehensive-v2",
        MONITORING_INTERVAL: "30000",
        HEALTH_CHECK_INTERVAL: "60000",
        RECOVERY_ATTEMPTS: "3",
        AUTO_RECOVERY: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/comprehensive-redundancy-v2-error.log",
      out_file: "automation/logs/comprehensive-redundancy-v2-out.log",
      time: true
    },

    // Enhanced PM2 Redundancy Manager
    {
      name: "enhanced-pm2-redundancy-v2",
      script: "automation/enhanced-pm2-redundancy.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_TYPE: "pm2-enhanced-v2",
        HEALTH_CHECK_INTERVAL: "30000",
        MAX_RESTART_ATTEMPTS: "5",
        AUTO_RECOVERY: "true",
        MONITORING_MODE: "comprehensive"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/enhanced-pm2-redundancy-v2-error.log",
      out_file: "automation/logs/enhanced-pm2-redundancy-v2-out.log",
      time: true
    },

    // Enhanced GitHub Actions Redundancy Manager
    {
      name: "enhanced-github-redundancy-v2",
      script: "automation/enhanced-github-actions-redundancy.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_TYPE: "github-actions-enhanced-v2",
        HEALTH_CHECK_INTERVAL: "60000",
        MAX_FAILURE_THRESHOLD: "3",
        AUTO_TRIGGER: "true",
        MONITORING_MODE: "comprehensive"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/enhanced-github-redundancy-v2-error.log",
      out_file: "automation/logs/enhanced-github-redundancy-v2-out.log",
      time: true
    },

    // Enhanced Netlify Functions Redundancy Manager
    {
      name: "enhanced-netlify-redundancy-v2",
      script: "automation/enhanced-netlify-functions-redundancy.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_TYPE: "netlify-functions-enhanced-v2",
        HEALTH_CHECK_INTERVAL: "120000",
        MAX_FAILURE_THRESHOLD: "2",
        AUTO_REGENERATE: "true",
        MONITORING_MODE: "comprehensive"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/enhanced-netlify-redundancy-v2-error.log",
      out_file: "automation/logs/enhanced-netlify-redundancy-v2-out.log",
      time: true
    },

    // Build Automation Redundancy Manager
    {
      name: "build-automation-redundancy-v2",
      script: "automation/build-failure-recovery.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_TYPE: "build-automation-v2",
        HEALTH_CHECK_INTERVAL: "90000",
        MAX_FAILURE_THRESHOLD: "3",
        AUTO_RECOVERY: "true",
        MONITORING_MODE: "comprehensive"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/build-automation-redundancy-v2-error.log",
      out_file: "automation/logs/build-automation-redundancy-v2-out.log",
      time: true
    },

    // Content Automation Redundancy Manager
    {
      name: "content-automation-redundancy-v2",
      script: "automation/ai-content-factory.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_TYPE: "content-automation-v2",
        HEALTH_CHECK_INTERVAL: "180000",
        MAX_FAILURE_THRESHOLD: "2",
        AUTO_RECOVERY: "true",
        MONITORING_MODE: "comprehensive"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/content-automation-redundancy-v2-error.log",
      out_file: "automation/logs/content-automation-redundancy-v2-out.log",
      time: true
    },

    // Marketing Automation Redundancy Manager
    {
      name: "marketing-automation-redundancy-v2",
      script: "automation/marketing-sync.js",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_TYPE: "marketing-automation-v2",
        HEALTH_CHECK_INTERVAL: "300000",
        MAX_FAILURE_THRESHOLD: "2",
        AUTO_RECOVERY: "true",
        MONITORING_MODE: "comprehensive"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/marketing-automation-redundancy-v2-error.log",
      out_file: "automation/logs/marketing-automation-redundancy-v2-out.log",
      time: true
    },

    // Continuous Build Monitor
    {
      name: "continuous-build-monitor-v2",
      script: "automation/continuous-build-monitor.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_TYPE: "build-monitor-v2",
        MONITORING_INTERVAL: "60000",
        AUTO_RECOVERY: "true",
        MONITORING_MODE: "comprehensive"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/continuous-build-monitor-v2-error.log",
      out_file: "automation/logs/continuous-build-monitor-v2-out.log",
      time: true
    },

    // Master Build Orchestrator
    {
      name: "master-build-orchestrator-v2",
      script: "automation/master-build-orchestrator.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_TYPE: "build-orchestrator-v2",
        MONITORING_INTERVAL: "120000",
        AUTO_RECOVERY: "true",
        MONITORING_MODE: "comprehensive"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/master-build-orchestrator-v2-error.log",
      out_file: "automation/logs/master-build-orchestrator-v2-out.log",
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
      path: "/var/www/zion.app",
      "post-deploy": "npm install && pm2 reload ecosystem.comprehensive-redundancy-v2.cjs --env production"
    }
  }
};