module.exports = {
  apps: [
    {
      name: "comprehensive-redundancy-v3",
      script: "automation/comprehensive-redundancy-v3.cjs",
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
        REDUNDANCY_MODE: "comprehensive-v3",
        LOG_LEVEL: "INFO"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/comprehensive-redundancy-v3-error.log",
      out_file: "automation/logs/comprehensive-redundancy-v3-out.log",
      time: true,
      merge_logs: true,
      log_type: "json"
    },
    {
      name: "comprehensive-redundancy-v3-monitor",
      script: "automation/start-comprehensive-redundancy-v3.sh",
      interpreter: "bash",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      exp_backoff_restart_delay: 1000,
      instances: 1,
      exec_mode: "fork",
      args: "monitor",
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MONITOR: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/comprehensive-redundancy-v3-monitor-error.log",
      out_file: "automation/logs/comprehensive-redundancy-v3-monitor-out.log",
      time: true
    }
  ]
};