module.exports = {
  apps: [
    // Comprehensive Redundancy System v3 - Main Orchestrator
    {
      name: "comprehensive-redundancy-v3-orchestrator",
      script: "automation/comprehensive-redundancy-v3.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      instances: 1,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_TYPE: "comprehensive-v3",
        HEALTH_CHECK_INTERVAL: "30000",
        PM2_REDUNDANCY_ENABLED: "true",
        GITHUB_ACTIONS_REDUNDANCY_ENABLED: "true",
        NETLIFY_FUNCTIONS_REDUNDANCY_ENABLED: "true",
        AUTO_RECOVERY: "true",
        MONITORING_ENABLED: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/comprehensive-redundancy-v3-orchestrator-error.log",
      out_file: "automation/logs/comprehensive-redundancy-v3-orchestrator-out.log",
      time: true
    },

    // PM2 Redundancy Monitor
    {
      name: "comprehensive-v3-pm2-monitor",
      script: "automation/pm2-redundancy-manager.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      instances: 1,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_TYPE: "pm2-monitor-v3",
        CHECK_INTERVAL: "60000",
        MAX_RESTART_ATTEMPTS: "5",
        AUTO_RECOVERY: "true",
        HEALTH_THRESHOLD: "80"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/comprehensive-v3-pm2-monitor-error.log",
      out_file: "automation/logs/comprehensive-v3-pm2-monitor-out.log",
      time: true
    },

    // GitHub Actions Redundancy Monitor
    {
      name: "comprehensive-v3-github-monitor",
      script: "automation/github-actions-redundancy-manager.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      instances: 1,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_TYPE: "github-actions-monitor-v3",
        CHECK_INTERVAL: "300000",
        MAX_FAILURE_THRESHOLD: "3",
        AUTO_TRIGGER: "true",
        BACKUP_WORKFLOWS: "true",
        WORKFLOW_VALIDATION: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/comprehensive-v3-github-monitor-error.log",
      out_file: "automation/logs/comprehensive-v3-github-monitor-out.log",
      time: true
    },

    // Netlify Functions Redundancy Monitor
    {
      name: "comprehensive-v3-netlify-monitor",
      script: "automation/netlify-functions-redundancy-manager.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      instances: 1,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_TYPE: "netlify-functions-monitor-v3",
        CHECK_INTERVAL: "600000",
        MAX_FAILURE_THRESHOLD: "2",
        AUTO_REGENERATE: "true",
        FUNCTION_VALIDATION: "true",
        DEPLOYMENT_CHECK: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/comprehensive-v3-netlify-monitor-error.log",
      out_file: "automation/logs/comprehensive-v3-netlify-monitor-out.log",
      time: true
    },

    // Enhanced Git Sync Orchestrator
    {
      name: "comprehensive-v3-git-sync",
      script: "automation/enhanced-git-sync-orchestrator.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      instances: 1,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_TYPE: "git-sync-v3",
        SYNC_INTERVAL: "60000",
        AUTO_RESOLVE_CONFLICTS: "true",
        SYNC_STRATEGY: "smart",
        CONFLICT_RESOLUTION: "auto"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/comprehensive-v3-git-sync-error.log",
      out_file: "automation/logs/comprehensive-v3-git-sync-out.log",
      time: true
    },

    // Build Monitor and Recovery
    {
      name: "comprehensive-v3-build-monitor",
      script: "automation/redundancy-build-monitor.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      instances: 1,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_TYPE: "build-monitor-v3",
        BUILD_CHECK_INTERVAL: "120000",
        AUTO_RECOVERY: "true",
        RECOVERY_ATTEMPTS: "3",
        SMART_BUILD: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/comprehensive-v3-build-monitor-error.log",
      out_file: "automation/logs/comprehensive-v3-build-monitor-out.log",
      time: true
    },

    // Continuous Build Monitor
    {
      name: "comprehensive-v3-continuous-build",
      script: "automation/continuous-build-monitor.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      instances: 1,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_TYPE: "continuous-build-v3",
        MONITORING_INTERVAL: "180000",
        BUILD_TRIGGER: "true",
        PERFORMANCE_MONITORING: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/comprehensive-v3-continuous-build-error.log",
      out_file: "automation/logs/comprehensive-v3-continuous-build-out.log",
      time: true
    },

    // Build Failure Recovery
    {
      name: "comprehensive-v3-build-recovery",
      script: "automation/build-failure-recovery.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      instances: 1,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_TYPE: "build-recovery-v3",
        RECOVERY_ATTEMPTS: "3",
        AUTO_FIX: "true",
        INTELLIGENT_RECOVERY: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/comprehensive-v3-build-recovery-error.log",
      out_file: "automation/logs/comprehensive-v3-build-recovery-out.log",
      time: true
    },

    // Master Build Orchestrator
    {
      name: "comprehensive-v3-master-build",
      script: "automation/master-build-orchestrator.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      instances: 1,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_TYPE: "master-build-v3",
        ORCHESTRATION_INTERVAL: "300000",
        SMART_BUILD: "true",
        LOAD_BALANCING: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/comprehensive-v3-master-build-error.log",
      out_file: "automation/logs/comprehensive-v3-master-build-out.log",
      time: true
    },

    // Comprehensive Monitoring Dashboard
    {
      name: "comprehensive-v3-monitoring-dashboard",
      script: "automation/comprehensive-monitoring-dashboard.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      instances: 1,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_TYPE: "monitoring-dashboard-v3",
        DASHBOARD_PORT: "3003",
        METRICS_COLLECTION: "true",
        ALERTING: "true",
        PERFORMANCE_MONITORING: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/comprehensive-v3-monitoring-dashboard-error.log",
      out_file: "automation/logs/comprehensive-v3-monitoring-dashboard-out.log",
      time: true
    },

    // Redundancy Health Monitor
    {
      name: "comprehensive-v3-health-monitor",
      script: "automation/redundancy-health-monitor.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      instances: 1,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_TYPE: "health-monitor-v3",
        MONITORING_INTERVAL: "30000",
        ALERT_ENABLED: "true",
        HEALTH_SCORE_THRESHOLD: "80"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/comprehensive-v3-health-monitor-error.log",
      out_file: "automation/logs/comprehensive-v3-health-monitor-out.log",
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
      path: "/var/www/production",
      "post-deploy": "npm install && pm2 reload ecosystem.comprehensive-redundancy-v3.pm2.cjs"
    }
  }
};