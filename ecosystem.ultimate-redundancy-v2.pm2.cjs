module.exports = {
  apps: [
    // Ultimate Redundancy V2 Master System
    {
      name: "ultimate-redundancy-v2-master",
      script: "automation/ultimate-redundancy-v2-system.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_TYPE: "ultimate-v2-master",
        MONITORING_INTERVAL: "60000",
        AUTO_HEALING: "true",
        HEALTH_SCORE_THRESHOLD: "80"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/ultimate-redundancy-v2-master-error.log",
      out_file: "automation/logs/ultimate-redundancy-v2-master-out.log",
      time: true
    },

    // Enhanced PM2 Redundancy Manager V2
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
        REDUNDANCY_TYPE: "enhanced-pm2-v2",
        LOAD_BALANCING: "true",
        PERFORMANCE_MONITORING: "true",
        HEALTH_CHECK_INTERVAL: "30000",
        MAX_RESTART_ATTEMPTS: "5"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/enhanced-pm2-redundancy-v2-error.log",
      out_file: "automation/logs/enhanced-pm2-redundancy-v2-out.log",
      time: true
    },

    // Enhanced GitHub Actions Redundancy Manager V2
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
        REDUNDANCY_TYPE: "enhanced-github-v2",
        WORKFLOW_VALIDATION: "true",
        BACKUP_TRIGGERS: "true",
        HEALTH_CHECK_INTERVAL: "60000",
        MAX_FAILURE_THRESHOLD: "3"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/enhanced-github-redundancy-v2-error.log",
      out_file: "automation/logs/enhanced-github-redundancy-v2-out.log",
      time: true
    },

    // Enhanced Netlify Functions Redundancy Manager V2
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
        REDUNDANCY_TYPE: "enhanced-netlify-v2",
        DEPLOYMENT_CHECK: "true",
        FUNCTION_VALIDATION: "true",
        HEALTH_CHECK_INTERVAL: "120000",
        MAX_FAILURE_THRESHOLD: "2"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/enhanced-netlify-redundancy-v2-error.log",
      out_file: "automation/logs/enhanced-netlify-redundancy-v2-out.log",
      time: true
    },

    // Comprehensive Redundancy Orchestrator V2
    {
      name: "comprehensive-redundancy-orchestrator-v2",
      script: "automation/comprehensive-redundancy-orchestrator.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_TYPE: "comprehensive-v2",
        HEALTH_CHECK_INTERVAL: "300000",
        ALERT_THRESHOLD: "3",
        AUTO_RECOVERY: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/comprehensive-redundancy-orchestrator-v2-error.log",
      out_file: "automation/logs/comprehensive-redundancy-orchestrator-v2-out.log",
      time: true
    },

    // Redundancy Health Monitor V2
    {
      name: "redundancy-health-monitor-v2",
      script: "automation/redundancy-health-monitor.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_TYPE: "health-monitor-v2",
        MONITORING_INTERVAL: "30000",
        ALERT_ENABLED: "true",
        HEALTH_SCORE_THRESHOLD: "80"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-health-monitor-v2-error.log",
      out_file: "automation/logs/redundancy-health-monitor-v2-out.log",
      time: true
    },

    // Redundancy Git Sync V2
    {
      name: "redundancy-git-sync-v2",
      script: "automation/redundancy-git-sync.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_TYPE: "git-sync-v2",
        SYNC_INTERVAL: "60000",
        AUTO_RESOLVE_CONFLICTS: "true",
        CONFLICT_RESOLUTION: "smart"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-git-sync-v2-error.log",
      out_file: "automation/logs/redundancy-git-sync-v2-out.log",
      time: true
    },

    // Redundancy Build Monitor V2
    {
      name: "redundancy-build-monitor-v2",
      script: "automation/redundancy-build-monitor.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_TYPE: "build-monitor-v2",
        BUILD_CHECK_INTERVAL: "120000",
        AUTO_RECOVERY: "true",
        SMART_BUILD: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-build-monitor-v2-error.log",
      out_file: "automation/logs/redundancy-build-monitor-v2-out.log",
      time: true
    },

    // Continuous Build Monitor V2
    {
      name: "continuous-build-monitor-v2",
      script: "automation/continuous-build-monitor.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_TYPE: "continuous-build-v2",
        MONITORING_INTERVAL: "180000",
        BUILD_TRIGGER: "true",
        AUTO_OPTIMIZATION: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/continuous-build-monitor-v2-error.log",
      out_file: "automation/logs/continuous-build-monitor-v2-out.log",
      time: true
    },

    // Build Failure Recovery V2
    {
      name: "build-failure-recovery-v2",
      script: "automation/build-failure-recovery.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_TYPE: "build-recovery-v2",
        RECOVERY_ATTEMPTS: "3",
        AUTO_FIX: "true",
        INTELLIGENT_RECOVERY: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/build-failure-recovery-v2-error.log",
      out_file: "automation/logs/build-failure-recovery-v2-out.log",
      time: true
    },

    // Master Build Orchestrator V2
    {
      name: "master-build-orchestrator-v2",
      script: "automation/master-build-orchestrator.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_TYPE: "master-build-v2",
        ORCHESTRATION_INTERVAL: "300000",
        SMART_BUILD: "true",
        LOAD_BALANCING: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/master-build-orchestrator-v2-error.log",
      out_file: "automation/logs/master-build-orchestrator-v2-out.log",
      time: true
    },

    // Enhanced Git Sync Orchestrator V2
    {
      name: "enhanced-git-sync-orchestrator-v2",
      script: "automation/enhanced-git-sync-orchestrator.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_TYPE: "enhanced-git-sync-v2",
        SYNC_STRATEGY: "smart",
        CONFLICT_RESOLUTION: "auto",
        INTELLIGENT_SYNC: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/enhanced-git-sync-orchestrator-v2-error.log",
      out_file: "automation/logs/enhanced-git-sync-orchestrator-v2-out.log",
      time: true
    },

    // Comprehensive Monitoring Dashboard V2
    {
      name: "comprehensive-monitoring-dashboard-v2",
      script: "automation/comprehensive-monitoring-dashboard.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_TYPE: "monitoring-dashboard-v2",
        DASHBOARD_PORT: "3001",
        METRICS_COLLECTION: "true",
        REAL_TIME_MONITORING: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/comprehensive-monitoring-dashboard-v2-error.log",
      out_file: "automation/logs/comprehensive-monitoring-dashboard-v2-out.log",
      time: true
    },

    // GitHub Actions Redundancy Manager V2
    {
      name: "github-actions-redundancy-manager-v2",
      script: "automation/github-actions-redundancy-manager.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_TYPE: "github-actions-manager-v2",
        WORKFLOW_MONITORING: "true",
        AUTO_TRIGGER: "true",
        BACKUP_MANAGEMENT: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/github-actions-redundancy-manager-v2-error.log",
      out_file: "automation/logs/github-actions-redundancy-manager-v2-out.log",
      time: true
    },

    // Netlify Functions Redundancy Manager V2
    {
      name: "netlify-functions-redundancy-manager-v2",
      script: "automation/netlify-functions-redundancy-manager.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_TYPE: "netlify-functions-manager-v2",
        FUNCTION_MONITORING: "true",
        AUTO_REGENERATE: "true",
        DEPLOYMENT_MANAGEMENT: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/netlify-functions-redundancy-manager-v2-error.log",
      out_file: "automation/logs/netlify-functions-redundancy-manager-v2-out.log",
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
      "post-deploy": "npm install && pm2 reload ecosystem.ultimate-redundancy-v2.pm2.cjs"
    }
  }
};