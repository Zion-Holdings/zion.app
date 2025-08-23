module.exports = {
  apps: [
    // ============================================================================
    // 🚀 COMPREHENSIVE REDUNDANCY AUTOMATION SYSTEM
    // ============================================================================
    
    // Primary Comprehensive Redundancy System
    {
      name: "comprehensive-redundancy-system",
      script: "automation/comprehensive-redundancy-system.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 5000,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_LOG_LEVEL: "INFO",
        REDUNDANCY_PM2_CHECK_INTERVAL: "30000",
        REDUNDANCY_GITHUB_CHECK_INTERVAL: "60000",
        REDUNDANCY_NETLIFY_CHECK_INTERVAL: "120000",
        REDUNDANCY_BUILD_CHECK_INTERVAL: "300000",
        REDUNDANCY_HEALTH_CHECK_INTERVAL: "600000"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/comprehensive-redundancy-error.log",
      out_file: "automation/logs/comprehensive-redundancy-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // ============================================================================
    // 🔄 PM2 AUTOMATION REDUNDANCY
    // ============================================================================
    
    // Primary PM2 Auto-Sync
    {
      name: "zion-auto-sync-primary",
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
        AUTO_SYNC_GC: process.env.AUTO_SYNC_GC || "0",
        REDUNDANCY_MODE: "primary"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/zion-auto-sync-primary-error.log",
      out_file: "automation/logs/zion-auto-sync-primary-out.log",
      time: true
    },

    // Backup PM2 Auto-Sync
    {
      name: "zion-auto-sync-backup",
      script: "automation/pm2-auto-sync.js",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 15,
      exp_backoff_restart_delay: 1000,
      env: {
        NODE_ENV: "production",
        AUTO_SYNC_REMOTE: process.env.AUTO_SYNC_REMOTE || "origin",
        AUTO_SYNC_BRANCH: process.env.AUTO_SYNC_BRANCH || "main",
        AUTO_SYNC_STRATEGY: process.env.AUTO_SYNC_STRATEGY || "hardreset",
        AUTO_SYNC_CLEAN: process.env.AUTO_SYNC_CLEAN || "1",
        AUTO_SYNC_GC: process.env.AUTO_SYNC_GC || "0",
        REDUNDANCY_MODE: "backup"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/zion-auto-sync-backup-error.log",
      out_file: "automation/logs/zion-auto-sync-backup-out.log",
      time: true
    },

    // PM2 Auto-Sync Cron (Primary)
    {
      name: "zion-auto-sync-cron-primary",
      script: "automation/pm2-auto-sync.js",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: false,
      instances: 1,
      cron_restart: "*/10 * * * *", // every 10 minutes
      env: {
        NODE_ENV: "production",
        AUTO_SYNC_REMOTE: process.env.AUTO_SYNC_REMOTE || "origin",
        AUTO_SYNC_BRANCH: process.env.AUTO_SYNC_BRANCH || "main",
        AUTO_SYNC_STRATEGY: process.env.AUTO_SYNC_STRATEGY || "hardreset",
        AUTO_SYNC_CLEAN: process.env.AUTO_SYNC_CLEAN || "1",
        AUTO_SYNC_GC: process.env.AUTO_SYNC_GC || "0",
        REDUNDANCY_MODE: "primary"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/zion-auto-sync-cron-primary-error.log",
      out_file: "automation/logs/zion-auto-sync-cron-primary-out.log",
      time: true
    },

    // PM2 Auto-Sync Cron (Backup)
    {
      name: "zion-auto-sync-cron-backup",
      script: "automation/pm2-auto-sync.js",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: false,
      instances: 1,
      cron_restart: "*/15 * * * *", // every 15 minutes (different schedule)
      env: {
        NODE_ENV: "production",
        AUTO_SYNC_REMOTE: process.env.AUTO_SYNC_REMOTE || "origin",
        AUTO_SYNC_BRANCH: process.env.AUTO_SYNC_BRANCH || "main",
        AUTO_SYNC_STRATEGY: process.env.AUTO_SYNC_STRATEGY || "hardreset",
        AUTO_SYNC_CLEAN: process.env.AUTO_SYNC_CLEAN || "1",
        AUTO_SYNC_GC: process.env.AUTO_SYNC_GC || "0",
        REDUNDANCY_MODE: "backup"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/zion-auto-sync-cron-backup-error.log",
      out_file: "automation/logs/zion-auto-sync-cron-backup-out.log",
      time: true
    },

    // ============================================================================
    // 🎯 REDUNDANCY SYSTEM MANAGERS
    // ============================================================================
    
    // Master Redundancy Orchestrator
    {
      name: "redundancy-master-orchestrator",
      script: "automation/redundancy/master-redundancy-orchestrator.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      exp_backoff_restart_delay: 2000,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "master"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-master-error.log",
      out_file: "automation/logs/redundancy-master-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Enhanced Master Redundancy Orchestrator
    {
      name: "redundancy-enhanced-master-orchestrator",
      script: "automation/redundancy/enhanced-master-redundancy-orchestrator.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      exp_backoff_restart_delay: 2000,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "enhanced-master"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-enhanced-master-error.log",
      out_file: "automation/logs/redundancy-enhanced-master-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // PM2 Redundancy Manager
    {
      name: "redundancy-pm2-manager",
      script: "automation/redundancy/pm2-redundancy-manager.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 8,
      exp_backoff_restart_delay: 1500,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "pm2"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-pm2-error.log",
      out_file: "automation/logs/redundancy-pm2-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Enhanced PM2 Redundancy Manager
    {
      name: "redundancy-enhanced-pm2-manager",
      script: "automation/redundancy/enhanced-pm2-redundancy-manager.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 8,
      exp_backoff_restart_delay: 1500,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "enhanced-pm2"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-enhanced-pm2-error.log",
      out_file: "automation/logs/redundancy-enhanced-pm2-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // GitHub Actions Redundancy Manager
    {
      name: "redundancy-github-manager",
      script: "automation/redundancy/github-actions-redundancy-manager.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 8,
      exp_backoff_restart_delay: 1500,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "github"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-github-error.log",
      out_file: "automation/logs/redundancy-github-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Enhanced GitHub Actions Redundancy Manager
    {
      name: "redundancy-enhanced-github-manager",
      script: "automation/redundancy/enhanced-github-actions-redundancy-manager.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 8,
      exp_backoff_restart_delay: 1500,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "enhanced-github"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-enhanced-github-error.log",
      out_file: "automation/logs/redundancy-enhanced-github-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Netlify Functions Redundancy Manager
    {
      name: "redundancy-netlify-manager",
      script: "automation/redundancy/netlify-functions-redundancy-manager.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 8,
      exp_backoff_restart_delay: 1500,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "netlify"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-netlify-error.log",
      out_file: "automation/logs/redundancy-netlify-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Enhanced Netlify Functions Redundancy Manager
    {
      name: "redundancy-enhanced-netlify-manager",
      script: "automation/redundancy/enhanced-netlify-functions-redundancy-manager.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 8,
      exp_backoff_restart_delay: 1500,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "enhanced-netlify"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-enhanced-netlify-error.log",
      out_file: "automation/logs/redundancy-enhanced-netlify-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // ============================================================================
    // 🔨 BUILD AUTOMATION REDUNDANCY
    // ============================================================================
    
    // Build Monitor (Primary)
    {
      name: "build-monitor-primary",
      script: "automation/continuous-build-monitor.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 1000,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "primary"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/build-monitor-primary-error.log",
      out_file: "automation/logs/build-monitor-primary-out.log",
      time: true
    },

    // Build Monitor (Backup)
    {
      name: "build-monitor-backup",
      script: "automation/continuous-build-monitor.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 1000,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "backup"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/build-monitor-backup-error.log",
      out_file: "automation/logs/build-monitor-backup-out.log",
      time: true
    },

    // Build Recovery System
    {
      name: "build-recovery-system",
      script: "automation/build-failure-recovery.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      exp_backoff_restart_delay: 5000,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "build-recovery"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/build-recovery-error.log",
      out_file: "automation/logs/build-recovery-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // ============================================================================
    // 🔄 GIT SYNCHRONIZATION REDUNDANCY
    // ============================================================================
    
    // Git Sync (Primary)
    {
      name: "git-sync-primary",
      script: "automation/git-sync.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 12,
      exp_backoff_restart_delay: 800,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "primary"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/git-sync-primary-error.log",
      out_file: "automation/logs/git-sync-primary-out.log",
      time: true
    },

    // Git Sync (Backup)
    {
      name: "git-sync-backup",
      script: "automation/git-sync.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 12,
      exp_backoff_restart_delay: 800,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "backup"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/git-sync-backup-error.log",
      out_file: "automation/logs/git-sync-backup-out.log",
      time: true
    },

    // Enhanced Git Sync Orchestrator
    {
      name: "git-sync-enhanced-orchestrator",
      script: "automation/enhanced-git-sync-orchestrator.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 8,
      exp_backoff_restart_delay: 1500,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "enhanced-git-sync"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/git-sync-enhanced-error.log",
      out_file: "automation/logs/git-sync-enhanced-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // ============================================================================
    // 🛠️ NETLIFY HEALING REDUNDANCY
    // ============================================================================
    
    // Netlify Healer (Primary)
    {
      name: "netlify-healer-primary",
      script: "automation/enhanced-netlify-healer.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 1200,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "primary"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/netlify-healer-primary-error.log",
      out_file: "automation/logs/netlify-healer-primary-out.log",
      time: true
    },

    // Netlify Healer (Backup)
    {
      name: "netlify-healer-backup",
      script: "automation/enhanced-netlify-healer.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 1200,
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "backup"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/netlify-healer-backup-error.log",
      out_file: "automation/logs/netlify-healer-backup-out.log",
      time: true
    },

    // ============================================================================
    // 📊 HEALTH MONITORING REDUNDANCY
    // ============================================================================
    
    // Health Monitor (Primary)
    {
      name: "health-monitor-primary",
      script: "automation/redundancy-health-monitor.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      exp_backoff_restart_delay: 10000,
      env: {
        NODE_ENV: "production",
        HEALTH_CHECK_INTERVAL: "300000", // 5 minutes
        ALERT_THRESHOLD: "3"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/health-monitor-primary-error.log",
      out_file: "automation/logs/health-monitor-primary-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    },

    // Health Monitor (Backup)
    {
      name: "health-monitor-backup",
      script: "automation/redundancy-health-monitor.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      exp_backoff_restart_delay: 10000,
      env: {
        NODE_ENV: "production",
        HEALTH_CHECK_INTERVAL: "300000", // 5 minutes
        ALERT_THRESHOLD: "3"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/health-monitor-backup-error.log",
      out_file: "automation/logs/health-monitor-backup-out.log",
      time: true,
      instances: 1,
      exec_mode: "fork"
    }
  ]
};