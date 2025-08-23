module.exports = {
  apps: [
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
        LOG_LEVEL: "INFO",
        REDUNDANCY_LOG_LEVEL: "INFO",
        REDUNDANCY_PM2_CHECK_INTERVAL: "25000",
        REDUNDANCY_GITHUB_CHECK_INTERVAL: "60000",
        REDUNDANCY_NETLIFY_CHECK_INTERVAL: "120000",
        REDUNDANCY_AUTOMATION_CHECK_INTERVAL: "45000",
        REDUNDANCY_BACKUP_INTERVAL: "300000",
        REDUNDANCY_LOG_ROTATION_INTERVAL: "86400000"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/ultimate-redundancy-automation-error.log",
      out_file: "automation/logs/ultimate-redundancy-automation-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },
    {
      name: "ultimate-redundancy-automation-monitor",
      script: "automation/ultimate-redundancy-automation-system.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: false,
      instances: 1,
      cron_restart: "*/3 * * * *", // every 3 minutes
      env: {
        NODE_ENV: "production",
        LOG_LEVEL: "INFO",
        REDUNDANCY_LOG_LEVEL: "INFO",
        REDUNDANCY_PM2_CHECK_INTERVAL: "25000",
        REDUNDANCY_GITHUB_CHECK_INTERVAL: "60000",
        REDUNDANCY_NETLIFY_CHECK_INTERVAL: "120000",
        REDUNDANCY_AUTOMATION_CHECK_INTERVAL: "45000",
        REDUNDANCY_BACKUP_INTERVAL: "300000",
        REDUNDANCY_LOG_ROTATION_INTERVAL: "86400000"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/ultimate-redundancy-automation-monitor-error.log",
      out_file: "automation/logs/ultimate-redundancy-automation-monitor-out.log",
      time: true
    },
    {
      name: "ultimate-redundancy-automation-backup",
      script: "automation/ultimate-redundancy-automation-system.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: false,
      instances: 1,
      cron_restart: "0 */4 * * *", // every 4 hours
      env: {
        NODE_ENV: "production",
        LOG_LEVEL: "INFO",
        REDUNDANCY_LOG_LEVEL: "INFO",
        REDUNDANCY_PM2_CHECK_INTERVAL: "25000",
        REDUNDANCY_GITHUB_CHECK_INTERVAL: "60000",
        REDUNDANCY_NETLIFY_CHECK_INTERVAL: "120000",
        REDUNDANCY_AUTOMATION_CHECK_INTERVAL: "45000",
        REDUNDANCY_BACKUP_INTERVAL: "300000",
        REDUNDANCY_LOG_ROTATION_INTERVAL: "86400000"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/ultimate-redundancy-automation-backup-error.log",
      out_file: "automation/logs/ultimate-redundancy-automation-backup-out.log",
      time: true
    },
    {
      name: "ultimate-redundancy-automation-recovery",
      script: "automation/ultimate-redundancy-automation-system.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: false,
      instances: 1,
      cron_restart: "*/15 * * * *", // every 15 minutes
      env: {
        NODE_ENV: "production",
        LOG_LEVEL: "INFO",
        REDUNDANCY_LOG_LEVEL: "INFO",
        REDUNDANCY_PM2_CHECK_INTERVAL: "25000",
        REDUNDANCY_GITHUB_CHECK_INTERVAL: "60000",
        REDUNDANCY_NETLIFY_CHECK_INTERVAL: "120000",
        REDUNDANCY_AUTOMATION_CHECK_INTERVAL: "45000",
        REDUNDANCY_BACKUP_INTERVAL: "300000",
        REDUNDANCY_LOG_ROTATION_INTERVAL: "86400000",
        REDUNDANCY_RECOVERY_MODE: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/ultimate-redundancy-automation-recovery-error.log",
      out_file: "automation/logs/ultimate-redundancy-automation-recovery-out.log",
      time: true
    }
  ]
};