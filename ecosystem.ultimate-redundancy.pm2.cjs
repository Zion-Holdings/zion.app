module.exports = {
  apps: [
    // Core PM2 Redundancy Manager
    {
      name: "ultimate-pm2-redundancy-manager",
      script: "automation/pm2-redundancy-manager.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_TYPE: "pm2",
        HEALTH_CHECK_INTERVAL: "30000",
        MAX_RESTART_ATTEMPTS: "5",
        AUTO_RECOVERY: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/ultimate-pm2-redundancy-error.log",
      out_file: "automation/logs/ultimate-pm2-redundancy-out.log",
      time: true
    },

    // GitHub Actions Redundancy Manager
    {
      name: "ultimate-github-redundancy-manager",
      script: "automation/github-actions-redundancy-manager.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_TYPE: "github-actions",
        HEALTH_CHECK_INTERVAL: "60000",
        MAX_FAILURE_THRESHOLD: "3",
        AUTO_TRIGGER: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/ultimate-github-redundancy-error.log",
      out_file: "automation/logs/ultimate-github-redundancy-out.log",
      time: true
    },

    // Netlify Functions Redundancy Manager
    {
      name: "ultimate-netlify-redundancy-manager",
      script: "automation/netlify-functions-redundancy-manager.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_TYPE: "netlify-functions",
        HEALTH_CHECK_INTERVAL: "120000",
        MAX_FAILURE_THRESHOLD: "2",
        AUTO_REGENERATE: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/ultimate-netlify-redundancy-error.log",
      out_file: "automation/logs/ultimate-netlify-redundancy-out.log",
      time: true
    },

    // Ultimate Redundancy Master Orchestrator
    {
      name: "ultimate-redundancy-master",
      script: "automation/ultimate-redundancy-master.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_TYPE: "master-orchestrator",
        MONITORING_INTERVAL: "60000",
        AUTO_HEALING: "true",
        HEALTH_SCORE_THRESHOLD: "80"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/ultimate-master-error.log",
      out_file: "automation/logs/ultimate-master-out.log",
      time: true
    },

    // Comprehensive Redundancy Orchestrator
    {
      name: "comprehensive-redundancy-orchestrator",
      script: "automation/comprehensive-redundancy-orchestrator.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_TYPE: "comprehensive",
        HEALTH_CHECK_INTERVAL: "300000",
        ALERT_THRESHOLD: "3"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/comprehensive-redundancy-error.log",
      out_file: "automation/logs/comprehensive-redundancy-out.log",
      time: true
    },

    // Enhanced PM2 Redundancy Manager
    {
      name: "enhanced-pm2-redundancy-manager",
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
        LOAD_BALANCING: "true",
        PERFORMANCE_MONITORING: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/enhanced-pm2-redundancy-error.log",
      out_file: "automation/logs/enhanced-pm2-redundancy-out.log",
      time: true
    },

    // Enhanced GitHub Actions Redundancy Manager
    {
      name: "enhanced-github-redundancy-manager",
      script: "automation/enhanced-github-actions-redundancy.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_TYPE: "enhanced-github",
        WORKFLOW_VALIDATION: "true",
        BACKUP_TRIGGERS: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/enhanced-github-redundancy-error.log",
      out_file: "automation/logs/enhanced-github-redundancy-out.log",
      time: true
    },

    // Enhanced Netlify Functions Redundancy Manager
    {
      name: "enhanced-netlify-redundancy-manager",
      script: "automation/enhanced-netlify-functions-redundancy.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_TYPE: "enhanced-netlify",
        DEPLOYMENT_CHECK: "true",
        FUNCTION_VALIDATION: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/enhanced-netlify-redundancy-error.log",
      out_file: "automation/logs/enhanced-netlify-redundancy-out.log",
      time: true
    },

    // Redundancy Health Monitor
    {
      name: "redundancy-health-monitor",
      script: "automation/redundancy-health-monitor.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_TYPE: "health-monitor",
        MONITORING_INTERVAL: "30000",
        ALERT_ENABLED: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-health-monitor-error.log",
      out_file: "automation/logs/redundancy-health-monitor-out.log",
      time: true
    },

    // Redundancy Git Sync
    {
      name: "redundancy-git-sync",
      script: "automation/redundancy-git-sync.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_TYPE: "git-sync",
        SYNC_INTERVAL: "60000",
        AUTO_RESOLVE_CONFLICTS: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-git-sync-error.log",
      out_file: "automation/logs/redundancy-git-sync-out.log",
      time: true
    },

    // Redundancy Build Monitor
    {
      name: "redundancy-build-monitor",
      script: "automation/redundancy-build-monitor.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_TYPE: "build-monitor",
        BUILD_CHECK_INTERVAL: "120000",
        AUTO_RECOVERY: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-build-monitor-error.log",
      out_file: "automation/logs/redundancy-build-monitor-out.log",
      time: true
    },

    // Continuous Build Monitor
    {
      name: "continuous-build-monitor",
      script: "automation/continuous-build-monitor.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_TYPE: "continuous-build",
        MONITORING_INTERVAL: "180000",
        BUILD_TRIGGER: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/continuous-build-monitor-error.log",
      out_file: "automation/logs/continuous-build-monitor-out.log",
      time: true
    },

    // Build Failure Recovery
    {
      name: "build-failure-recovery",
      script: "automation/build-failure-recovery.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_TYPE: "build-recovery",
        RECOVERY_ATTEMPTS: "3",
        AUTO_FIX: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/build-failure-recovery-error.log",
      out_file: "automation/logs/build-failure-recovery-out.log",
      time: true
    },

    // Master Build Orchestrator
    {
      name: "master-build-orchestrator",
      script: "automation/master-build-orchestrator.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_TYPE: "master-build",
        ORCHESTRATION_INTERVAL: "300000",
        SMART_BUILD: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/master-build-orchestrator-error.log",
      out_file: "automation/logs/master-build-orchestrator-out.log",
      time: true
    },

    // Enhanced Git Sync Orchestrator
    {
      name: "enhanced-git-sync-orchestrator",
      script: "automation/enhanced-git-sync-orchestrator.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_TYPE: "enhanced-git-sync",
        SYNC_STRATEGY: "smart",
        CONFLICT_RESOLUTION: "auto"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/enhanced-git-sync-orchestrator-error.log",
      out_file: "automation/logs/enhanced-git-sync-orchestrator-out.log",
      time: true
    },

    // Comprehensive Monitoring Dashboard
    {
      name: "comprehensive-monitoring-dashboard",
      script: "automation/comprehensive-monitoring-dashboard.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_TYPE: "monitoring-dashboard",
        DASHBOARD_PORT: "3001",
        METRICS_COLLECTION: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/comprehensive-monitoring-dashboard-error.log",
      out_file: "automation/logs/comprehensive-monitoring-dashboard-out.log",
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
      "post-deploy": "npm install && pm2 reload ecosystem.ultimate-redundancy.pm2.cjs"
    }
  }
};