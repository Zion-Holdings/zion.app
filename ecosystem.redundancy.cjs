module.exports = {
  apps: [
    // ===== EXISTING PM2 PROCESSES (PRESERVED) =====
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
      time: true
    },
    {
      name: "zion-auto-sync-cron",
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
        AUTO_SYNC_GC: process.env.AUTO_SYNC_GC || "0"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/zion-auto-sync-cron-error.log",
      out_file: "automation/logs/zion-auto-sync-cron-out.log",
      time: true
    },

    // ===== REDUNDANCY PROCESSES FOR GITHUB ACTIONS =====
    
    // Marketing Sync Redundancy (replaces .github/workflows/marketing-sync.yml)
    {
      name: "redundancy-marketing-sync",
      script: "automation/redundancy/marketing-sync-redundancy.js",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      cron_restart: "0 */12 * * *", // every 12 hours (same as GitHub Actions)
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "marketing-sync",
        LINKEDIN_ACCESS_TOKEN: process.env.LINKEDIN_ACCESS_TOKEN,
        LINKEDIN_URN: process.env.LINKEDIN_URN,
        IG_USER_ID: process.env.IG_USER_ID,
        IG_ACCESS_TOKEN: process.env.IG_ACCESS_TOKEN
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-marketing-sync-error.log",
      out_file: "automation/logs/redundancy-marketing-sync-out.log",
      time: true
    },

    // Sync Health Redundancy (replaces .github/workflows/sync-health.yml)
    {
      name: "redundancy-sync-health",
      script: "automation/redundancy/sync-health-redundancy.js",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      cron_restart: "*/15 * * * *", // every 15 minutes (same as GitHub Actions)
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "sync-health",
        AUTO_SYNC_STRATEGY: "hardreset",
        AUTO_SYNC_CLEAN: "0"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-sync-health-error.log",
      out_file: "automation/logs/redundancy-sync-health-out.log",
      time: true
    },

    // ===== REDUNDANCY PROCESSES FOR NETLIFY FUNCTIONS =====
    
    // Netlify Functions Orchestrator Redundancy
    {
      name: "redundancy-netlify-functions",
      script: "automation/redundancy/netlify-functions-redundancy.js",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      cron_restart: "*/30 * * * *", // every 30 minutes
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "netlify-functions",
        NETLIFY_SITE_ID: process.env.NETLIFY_SITE_ID,
        NETLIFY_ACCESS_TOKEN: process.env.NETLIFY_ACCESS_TOKEN
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-netlify-functions-error.log",
      out_file: "automation/logs/redundancy-netlify-functions-out.log",
      time: true
    },

    // ===== REDUNDANCY PROCESSES FOR EXISTING AUTOMATIONS =====
    
    // Build Automation Redundancy
    {
      name: "redundancy-build-automation",
      script: "automation/redundancy/build-automation-redundancy.js",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      cron_restart: "*/20 * * * *", // every 20 minutes
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "build-automation"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-build-automation-error.log",
      out_file: "automation/logs/redundancy-build-automation-out.log",
      time: true
    },

    // Content Generation Redundancy
    {
      name: "redundancy-content-generation",
      script: "automation/redundancy/content-generation-redundancy.js",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      cron_restart: "0 */6 * * *", // every 6 hours
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "content-generation"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-content-generation-error.log",
      out_file: "automation/logs/redundancy-content-generation-out.log",
      time: true
    },

    // Security and Health Monitoring Redundancy
    {
      name: "redundancy-security-health",
      script: "automation/redundancy/security-health-redundancy.js",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      cron_restart: "0 */4 * * *", // every 4 hours
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "security-health"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-security-health-error.log",
      out_file: "automation/logs/redundancy-security-health-out.log",
      time: true
    },

    // ===== REDUNDANCY MONITORING AND ORCHESTRATION =====
    
    // Redundancy Health Monitor
    {
      name: "redundancy-health-monitor",
      script: "automation/redundancy/redundancy-health-monitor.js",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      cron_restart: "*/5 * * * *", // every 5 minutes
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "health-monitor"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-health-monitor-error.log",
      out_file: "automation/logs/redundancy-health-monitor-out.log",
      time: true
    },

    // Redundancy Failover Controller
    {
      name: "redundancy-failover-controller",
      script: "automation/redundancy/redundancy-failover-controller.js",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      cron_restart: "*/2 * * * *", // every 2 minutes
      env: {
        NODE_ENV: "production",
        REDUNDANCY_MODE: "failover-controller"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-failover-controller-error.log",
      out_file: "automation/logs/redundancy-failover-controller-out.log",
      time: true
    }
  ]
};