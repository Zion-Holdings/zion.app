module.exports = {
  apps: [
    {
      name: "comprehensive-redundancy-automation",
      script: "automation/comprehensive-redundancy-automation.cjs",
      args: "start",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 5000,
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        REDUNDANCY_LOG_LEVEL: "INFO",
        REDUNDANCY_PM2_CHECK_INTERVAL: "15000",
        REDUNDANCY_GITHUB_CHECK_INTERVAL: "30000",
        REDUNDANCY_NETLIFY_CHECK_INTERVAL: "60000",
        REDUNDANCY_BUILD_CHECK_INTERVAL: "300000",
        REDUNDANCY_GIT_CHECK_INTERVAL: "45000",
        REDUNDANCY_ORCHESTRATION_INTERVAL: "30000",
        REDUNDANCY_HEALTH_CHECK_INTERVAL: "120000",
        REDUNDANCY_EMERGENCY_THRESHOLD: "2",
        REDUNDANCY_AUTO_RECOVERY: "true",
        REDUNDANCY_NOTIFICATION_LEVEL: "WARN"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/comprehensive-redundancy-error.log",
      out_file: "automation/logs/comprehensive-redundancy-out.log",
      time: true,
      merge_logs: true,
      log_type: "json"
    },
    {
      name: "comprehensive-redundancy-health-monitor",
      script: "automation/comprehensive-redundancy-automation.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: false,
      instances: 1,
      exec_mode: "fork",
      cron_restart: "*/5 * * * *", // every 5 minutes
      env: {
        NODE_ENV: "production",
        REDUNDANCY_LOG_LEVEL: "INFO"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/comprehensive-redundancy-health-error.log",
      out_file: "automation/logs/comprehensive-redundancy-health-out.log",
      time: true,
      merge_logs: true,
      log_type: "json"
    },
    {
      name: "comprehensive-redundancy-build-monitor",
      script: "automation/comprehensive-redundancy-automation.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: false,
      instances: 1,
      exec_mode: "fork",
      cron_restart: "*/10 * * * *", // every 10 minutes
      env: {
        NODE_ENV: "production",
        REDUNDANCY_LOG_LEVEL: "INFO"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/comprehensive-redundancy-build-error.log",
      out_file: "automation/logs/comprehensive-redundancy-build-out.log",
      time: true,
      merge_logs: true,
      log_type: "json"
    }
  ]
};