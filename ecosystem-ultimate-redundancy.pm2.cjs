module.exports = {
  apps: [
    // Ultimate Redundancy Core Processes
    {
      name: "ultimate-redundancy-monitor",
      script: "automation/ultimate-redundancy-system.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 20,
      exp_backoff_restart_delay: 1000,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "ultimate",
        REDUNDANCY_LEVEL: "3"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/ultimate-redundancy-monitor-error.log",
      out_file: "automation/logs/ultimate-redundancy-monitor-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },
    {
      name: "ultimate-redundancy-orchestrator",
      script: "automation/ultimate-redundancy-system.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 15,
      exp_backoff_restart_delay: 1500,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "ultimate-orchestrator",
        REDUNDANCY_LEVEL: "3"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/ultimate-redundancy-orchestrator-error.log",
      out_file: "automation/logs/ultimate-redundancy-orchestrator-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Ultimate Build and Development Processes
    {
      name: "ultimate-build-guardian",
      script: "automation/build-guardian.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 12,
      exp_backoff_restart_delay: 2000,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "ultimate-build",
        BUILD_MONITORING: "true",
        AUTO_RECOVERY: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/ultimate-build-guardian-error.log",
      out_file: "automation/logs/ultimate-build-guardian-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },
    {
      name: "ultimate-git-sync",
      script: "automation/git-sync.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 15,
      exp_backoff_restart_delay: 1000,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "ultimate-git",
        AUTO_SYNC_REMOTE: process.env.AUTO_SYNC_REMOTE || "origin",
        AUTO_SYNC_BRANCH: process.env.AUTO_SYNC_BRANCH || "main",
        AUTO_SYNC_STRATEGY: process.env.AUTO_SYNC_STRATEGY || "hardreset",
        AUTO_SYNC_CLEAN: process.env.AUTO_SYNC_CLEAN || "1",
        AUTO_SYNC_GC: process.env.AUTO_SYNC_GC || "0"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/ultimate-git-sync-error.log",
      out_file: "automation/logs/ultimate-git-sync-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },
    {
      name: "ultimate-netlify-healer",
      script: "automation/enhanced-netlify-healer.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 12,
      exp_backoff_restart_delay: 1800,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "ultimate-netlify",
        AUTO_HEALING: "true",
        HEALTH_MONITORING: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/ultimate-netlify-healer-error.log",
      out_file: "automation/logs/ultimate-netlify-healer-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Enhanced Redundancy Managers
    {
      name: "ultimate-pm2-manager",
      script: "automation/pm2-redundancy-monitor.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 2500,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "ultimate-pm2",
        PM2_MONITORING: "true",
        AUTO_RECOVERY: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/ultimate-pm2-manager-error.log",
      out_file: "automation/logs/ultimate-pm2-manager-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },
    {
      name: "ultimate-github-manager",
      script: "automation/github-actions-redundancy.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 2500,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "ultimate-github",
        GITHUB_MONITORING: "true",
        WORKFLOW_MANAGEMENT: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/ultimate-github-manager-error.log",
      out_file: "automation/logs/ultimate-github-manager-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },
    {
      name: "ultimate-netlify-manager",
      script: "automation/netlify-functions-redundancy.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 2500,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "ultimate-netlify",
        NETLIFY_MONITORING: "true",
        FUNCTION_MANAGEMENT: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/ultimate-netlify-manager-error.log",
      out_file: "automation/logs/ultimate-netlify-manager-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Ultimate Automation Orchestrators
    {
      name: "ultimate-automation-orchestrator",
      script: "automation/intelligent-orchestrator.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 12,
      exp_backoff_restart_delay: 2000,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "ultimate-automation",
        INTELLIGENT_ORCHESTRATION: "true",
        CONTINUOUS_OPERATION: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/ultimate-automation-orchestrator-error.log",
      out_file: "automation/logs/ultimate-automation-orchestrator-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },
    {
      name: "ultimate-build-orchestrator",
      script: "automation/master-build-orchestrator.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 12,
      exp_backoff_restart_delay: 2000,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "ultimate-build-orchestrator",
        BUILD_ORCHESTRATION: "true",
        SMART_BUILD: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/ultimate-build-orchestrator-error.log",
      out_file: "automation/logs/ultimate-build-orchestrator-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Ultimate Health and Monitoring
    {
      name: "ultimate-health-monitor",
      script: "automation/redundancy-health-monitor.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 15,
      exp_backoff_restart_delay: 1200,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "ultimate-health",
        HEALTH_MONITORING: "true",
        ALERT_SYSTEM: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/ultimate-health-monitor-error.log",
      out_file: "automation/logs/ultimate-health-monitor-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },
    {
      name: "ultimate-performance-monitor",
      script: "automation/continuous-build-monitor.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 12,
      exp_backoff_restart_delay: 1800,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "ultimate-performance",
        PERFORMANCE_MONITORING: "true",
        METRICS_COLLECTION: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/ultimate-performance-monitor-error.log",
      out_file: "automation/logs/ultimate-performance-monitor-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Ultimate Recovery and Maintenance
    {
      name: "ultimate-recovery-manager",
      script: "automation/build-failure-recovery.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 3000,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "ultimate-recovery",
        AUTO_RECOVERY: "true",
        RECOVERY_STRATEGIES: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/ultimate-recovery-manager-error.log",
      out_file: "automation/logs/ultimate-recovery-manager-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },
    {
      name: "ultimate-maintenance-orchestrator",
      script: "automation/site-maintenance-orchestrator.js",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 3000,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "ultimate-maintenance",
        MAINTENANCE_ORCHESTRATION: "true",
        PREVENTIVE_MAINTENANCE: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/ultimate-maintenance-orchestrator-error.log",
      out_file: "automation/logs/ultimate-maintenance-orchestrator-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    }
  ]
};