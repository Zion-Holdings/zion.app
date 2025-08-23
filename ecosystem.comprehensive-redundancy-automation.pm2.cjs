module.exports = {
  apps: [
    {
      name: "comprehensive-redundancy-automation",
      script: "automation/comprehensive-redundancy-automation-system.cjs",
      args: "start",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "comprehensive",
        REDUNDANCY_INTERVAL_PM2: "5",
        REDUNDANCY_INTERVAL_GITHUB: "15",
        REDUNDANCY_INTERVAL_NETLIFY: "10",
        REDUNDANCY_INTERVAL_HEALTH: "2",
        REDUNDANCY_INTERVAL_BACKUP: "60"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/comprehensive-redundancy-automation-error.log",
      out_file: "automation/logs/comprehensive-redundancy-automation-out.log",
      time: true,
      merge_logs: true,
      log_type: "json"
    },
    {
      name: "comprehensive-redundancy-monitor",
      script: "automation/comprehensive-redundancy-automation-system.cjs",
      args: "health",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: false,
      instances: 1,
      exec_mode: "fork",
      cron_restart: "*/5 * * * *", // every 5 minutes
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "monitor",
        REDUNDANCY_INTERVAL_HEALTH: "5"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/comprehensive-redundancy-monitor-error.log",
      out_file: "automation/logs/comprehensive-redundancy-monitor-out.log",
      time: true,
      merge_logs: true,
      log_type: "json"
    },
    {
      name: "comprehensive-redundancy-backup",
      script: "automation/comprehensive-redundancy-automation-system.cjs",
      args: "backup",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: false,
      instances: 1,
      exec_mode: "fork",
      cron_restart: "0 */6 * * *", // every 6 hours
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "backup",
        REDUNDANCY_INTERVAL_BACKUP: "360"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/comprehensive-redundancy-backup-error.log",
      out_file: "automation/logs/comprehensive-redundancy-backup-out.log",
      time: true,
      merge_logs: true,
      log_type: "json"
    }
  ]
};