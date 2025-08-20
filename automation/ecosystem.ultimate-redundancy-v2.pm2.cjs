module.exports = {
  apps: [
    // Ultimate Redundancy Master V2
    {
      name: "ultimate-redundancy-master-v2",
      script: "automation/ultimate-redundancy-master-v2.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_TYPE: "ultimate-master-v2",
        MONITORING_INTERVAL: "60000",
        AUTO_HEALING: "true",
        HEALTH_SCORE_THRESHOLD: "80"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/ultimate-master-v2-error.log",
      out_file: "automation/logs/ultimate-master-v2-out.log",
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
        REDUNDANCY_TYPE: "enhanced-pm2",
        HEALTH_CHECK_INTERVAL: "30000",
        MAX_RESTART_ATTEMPTS: "5",
        AUTO_RECOVERY: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/enhanced-pm2-v2-error.log",
      out_file: "automation/logs/enhanced-pm2-v2-out.log",
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
        REDUNDANCY_TYPE: "enhanced-github-actions",
        HEALTH_CHECK_INTERVAL: "60000",
        MAX_FAILURE_THRESHOLD: "3",
        AUTO_TRIGGER: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/enhanced-github-v2-error.log",
      out_file: "automation/logs/enhanced-github-v2-out.log",
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
        REDUNDANCY_TYPE: "enhanced-netlify-functions",
        HEALTH_CHECK_INTERVAL: "120000",
        MAX_FAILURE_THRESHOLD: "2",
        AUTO_REGENERATE: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/enhanced-netlify-v2-error.log",
      out_file: "automation/logs/enhanced-netlify-v2-out.log",
      time: true
    },

    // Comprehensive Redundancy Orchestrator V2
    {
      name: "comprehensive-redundancy-orchestrator-v2",
      script: "automation/comprehensive-redundancy-orchestrator-v2.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_TYPE: "comprehensive-orchestrator-v2",
        MONITORING_INTERVAL: "45000",
        AUTO_HEALING: "true",
        HEALTH_SCORE_THRESHOLD: "85"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/comprehensive-orchestrator-v2-error.log",
      out_file: "automation/logs/comprehensive-orchestrator-v2-out.log",
      time: true
    }
  ]
};