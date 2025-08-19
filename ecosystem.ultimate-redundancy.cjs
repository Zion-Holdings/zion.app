module.exports = {
  apps: [
    // Core Ultimate Redundancy System
    {
      name: "ultimate-redundancy-system",
      script: "automation/ultimate-redundancy-system.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 1000,
      env: {
        NODE_ENV: "production",
        LOG_LEVEL: "INFO"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/ultimate-redundancy-error.log",
      out_file: "automation/logs/ultimate-redundancy-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // PM2 Redundancy Monitor
    {
      name: "pm2-redundancy-monitor",
      script: "automation/enhanced-pm2-redundancy.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      exp_backoff_restart_delay: 2000,
      env: {
        NODE_ENV: "production",
        MONITOR_INTERVAL: "30000"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/pm2-redundancy-error.log",
      out_file: "automation/logs/pm2-redundancy-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // GitHub Actions Redundancy Monitor
    {
      name: "github-actions-redundancy",
      script: "automation/enhanced-github-actions-redundancy.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      exp_backoff_restart_delay: 2000,
      env: {
        NODE_ENV: "production",
        MONITOR_INTERVAL: "60000"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/github-redundancy-error.log",
      out_file: "automation/logs/github-redundancy-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Netlify Functions Redundancy Monitor
    {
      name: "netlify-functions-redundancy",
      script: "automation/enhanced-netlify-functions-redundancy.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      exp_backoff_restart_delay: 2000,
      env: {
        NODE_ENV: "production",
        MONITOR_INTERVAL: "120000"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/netlify-redundancy-error.log",
      out_file: "automation/logs/netlify-redundancy-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Build Monitor and Recovery
    {
      name: "build-monitor-redundancy",
      script: "automation/redundancy-build-monitor.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      exp_backoff_restart_delay: 2000,
      env: {
        NODE_ENV: "production",
        MONITOR_INTERVAL: "300000"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/build-monitor-error.log",
      out_file: "automation/logs/build-monitor-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Health Monitor
    {
      name: "redundancy-health-monitor",
      script: "automation/redundancy-health-monitor.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      exp_backoff_restart_delay: 2000,
      env: {
        NODE_ENV: "production",
        MONITOR_INTERVAL: "60000"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/health-monitor-error.log",
      out_file: "automation/logs/health-monitor-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Git Sync Redundancy
    {
      name: "redundancy-git-sync",
      script: "automation/redundancy-git-sync.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      exp_backoff_restart_delay: 2000,
      env: {
        NODE_ENV: "production",
        SYNC_INTERVAL: "300000"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/git-sync-error.log",
      out_file: "automation/logs/git-sync-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Original PM2 Auto Sync
    {
      name: "zion-auto-sync",
      script: "automation/pm2-auto-sync.js",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      env: {
        NODE_ENV: "production",
        AUTO_SYNC_REMOTE: process.env.AUTO_SYNC_REMOTE || "origin",
        AUTO_SYNC_BRANCH: process.env.AUTO_SYNC_BRANCH || "main",
        AUTO_SYNC_STRATEGY: process.env.AUTO_SYNC_STRATEGY || "hardreset",
        AUTO_SYNC_CLEAN: process.env.AUTO_SYNC_CLEAN || "1",
        AUTO_SYNC_GC: process.env.AUTO_SYNC_GC || "0"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/zion-auto-sync-error.log",
      out_file: "automation/logs/zion-auto-sync-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Marketing Sync
    {
      name: "marketing-sync",
      script: "automation/marketing-sync.js",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: false,
      instances: 1,
      cron_restart: "0 */12 * * *", // every 12 hours
      env: {
        NODE_ENV: "production",
        LINKEDIN_ACCESS_TOKEN: process.env.LINKEDIN_ACCESS_TOKEN,
        LINKEDIN_URN: process.env.LINKEDIN_URN,
        IG_USER_ID: process.env.IG_USER_ID,
        IG_ACCESS_TOKEN: process.env.IG_ACCESS_TOKEN
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/marketing-sync-error.log",
      out_file: "automation/logs/marketing-sync-out.log",
      time: true,
      exec_mode: "fork"
    },

    // Continuous Build Monitor
    {
      name: "continuous-build-monitor",
      script: "automation/continuous-build-monitor.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      exp_backoff_restart_delay: 2000,
      env: {
        NODE_ENV: "production",
        MONITOR_INTERVAL: "600000" // 10 minutes
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/continuous-build-error.log",
      out_file: "automation/logs/continuous-build-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Master Build Orchestrator
    {
      name: "master-build-orchestrator",
      script: "automation/master-build-orchestrator.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      exp_backoff_restart_delay: 2000,
      env: {
        NODE_ENV: "production",
        ORCHESTRATOR_INTERVAL: "900000" // 15 minutes
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/build-orchestrator-error.log",
      out_file: "automation/logs/build-orchestrator-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    }
  ],

  // PM2 configuration
  deploy: {
    production: {
      user: "node",
      host: "localhost",
      ref: "origin/main",
      repo: "git@github.com:Zion-Holdings/zion.app.git",
      path: "/var/www/zion.app",
      "post-deploy": "npm install && pm2 reload ecosystem.ultimate-redundancy.cjs --env production"
    }
  }
};