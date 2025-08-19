module.exports = {
  apps: [
    {
      name: "ultimate-redundancy-system",
      script: "automation/ultimate-redundancy-system.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 5000,
      env: {
        NODE_ENV: "production",
        LOG_LEVEL: "INFO",
        REDUNDANCY_LOG_LEVEL: "INFO",
        REDUNDANCY_PM2_CHECK_INTERVAL: "30000",
        REDUNDANCY_GITHUB_CHECK_INTERVAL: "60000",
        REDUNDANCY_NETLIFY_CHECK_INTERVAL: "120000",
        REDUNDANCY_SHELL_CHECK_INTERVAL: "180000",
        REDUNDANCY_NODE_CHECK_INTERVAL: "240000"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/ultimate-redundancy-error.log",
      out_file: "automation/logs/ultimate-redundancy-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },
    {
      name: "ultimate-redundancy-monitor",
      script: "automation/ultimate-redundancy-system.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: false,
      instances: 1,
      cron_restart: "*/5 * * * *", // every 5 minutes
      env: {
        NODE_ENV: "production",
        LOG_LEVEL: "INFO",
        REDUNDANCY_LOG_LEVEL: "INFO",
        REDUNDANCY_PM2_CHECK_INTERVAL: "30000",
        REDUNDANCY_GITHUB_CHECK_INTERVAL: "60000",
        REDUNDANCY_NETLIFY_CHECK_INTERVAL: "120000",
        REDUNDANCY_SHELL_CHECK_INTERVAL: "180000",
        REDUNDANCY_NODE_CHECK_INTERVAL: "240000"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/ultimate-redundancy-monitor-error.log",
      out_file: "automation/logs/ultimate-redundancy-monitor-out.log",
      time: true
    },
    {
      name: "ultimate-redundancy-backup",
      script: "automation/ultimate-redundancy-system.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: false,
      instances: 1,
      cron_restart: "0 */6 * * *", // every 6 hours
      env: {
        NODE_ENV: "production",
        LOG_LEVEL: "INFO",
        REDUNDANCY_LOG_LEVEL: "INFO",
        REDUNDANCY_PM2_CHECK_INTERVAL: "30000",
        REDUNDANCY_GITHUB_CHECK_INTERVAL: "60000",
        REDUNDANCY_NETLIFY_CHECK_INTERVAL: "120000",
        REDUNDANCY_SHELL_CHECK_INTERVAL: "180000",
        REDUNDANCY_NODE_CHECK_INTERVAL: "240000"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/ultimate-redundancy-backup-error.log",
      out_file: "automation/logs/ultimate-redundancy-backup-out.log",
      time: true
    }
  ]
};