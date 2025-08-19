module.exports = {
  apps: [
    {
      name: "ultimate-redundancy-master",
      script: "automation/ultimate-redundancy-master.cjs",
      args: "monitor",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 5000,
      env: {
        NODE_ENV: "production",
        ULTIMATE_REDUNDANCY_MODE: "monitor",
        HEALTH_CHECK_INTERVAL: "300000", // 5 minutes
        LOG_LEVEL: "INFO"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/ultimate-redundancy-master-error.log",
      out_file: "automation/logs/ultimate-redundancy-master-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },
    {
      name: "pm2-redundancy-monitor",
      script: "automation/pm2-redundancy-monitor.cjs",
      args: "start",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      exp_backoff_restart_delay: 3000,
      env: {
        NODE_ENV: "production",
        MONITOR_INTERVAL: "60000", // 1 minute
        MAX_RESTART_ATTEMPTS: "5"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/pm2-redundancy-monitor-error.log",
      out_file: "automation/logs/pm2-redundancy-monitor-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },
    {
      name: "github-actions-redundancy-manager",
      script: "automation/github-actions-redundancy-manager.cjs",
      args: "start",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      exp_backoff_restart_delay: 3000,
      env: {
        NODE_ENV: "production",
        CHECK_INTERVAL: "120000", // 2 minutes
        WORKFLOW_DIR: ".github/workflows"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/github-actions-redundancy-error.log",
      out_file: "automation/logs/github-actions-redundancy-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },
    {
      name: "netlify-functions-redundancy-manager",
      script: "automation/netlify-functions-redundancy-manager.cjs",
      args: "start",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      exp_backoff_restart_delay: 3000,
      env: {
        NODE_ENV: "production",
        CHECK_INTERVAL: "300000", // 5 minutes
        FUNCTIONS_DIR: "netlify/functions"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/netlify-functions-redundancy-error.log",
      out_file: "automation/logs/netlify-functions-redundancy-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },
    {
      name: "redundancy-health-monitor",
      script: "automation/redundancy-health-monitor.cjs",
      args: "start",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      exp_backoff_restart_delay: 3000,
      env: {
        NODE_ENV: "production",
        HEALTH_CHECK_INTERVAL: "60000", // 1 minute
        ALERT_THRESHOLD: "3"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-health-monitor-error.log",
      out_file: "automation/logs/redundancy-health-monitor-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },
    {
      name: "redundancy-build-monitor",
      script: "automation/redundancy-build-monitor.cjs",
      args: "start",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      exp_backoff_restart_delay: 3000,
      env: {
        NODE_ENV: "production",
        BUILD_CHECK_INTERVAL: "300000", // 5 minutes
        MAX_BUILD_FAILURES: "3"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-build-monitor-error.log",
      out_file: "automation/logs/redundancy-build-monitor-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },
    {
      name: "continuous-build-monitor",
      script: "automation/continuous-build-monitor.cjs",
      args: "start",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      exp_backoff_restart_delay: 3000,
      env: {
        NODE_ENV: "production",
        MONITOR_INTERVAL: "600000", // 10 minutes
        BUILD_TIMEOUT: "1800000" // 30 minutes
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/continuous-build-monitor-error.log",
      out_file: "automation/logs/continuous-build-monitor-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },
    {
      name: "comprehensive-redundancy-orchestrator",
      script: "automation/comprehensive-redundancy-orchestrator.cjs",
      args: "start",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      exp_backoff_restart_delay: 3000,
      env: {
        NODE_ENV: "production",
        ORCHESTRATION_INTERVAL: "300000", // 5 minutes
        COORDINATION_MODE: "active"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/comprehensive-redundancy-orchestrator-error.log",
      out_file: "automation/logs/comprehensive-redundancy-orchestrator-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    }
  ]
};