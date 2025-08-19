module.exports = {
  apps: [
    // Core PM2 Auto-Sync Systems
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

    // Redundancy Orchestrators
    {
      name: "master-redundancy-orchestrator",
      script: "automation/master-redundancy-orchestrator.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      env: {
        NODE_ENV: "production"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/master-redundancy-orchestrator-error.log",
      out_file: "automation/logs/master-redundancy-orchestrator-out.log",
      time: true
    },
    {
      name: "comprehensive-redundancy-orchestrator",
      script: "automation/comprehensive-redundancy-orchestrator.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      env: {
        NODE_ENV: "production"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/comprehensive-redundancy-orchestrator-error.log",
      out_file: "automation/logs/comprehensive-redundancy-orchestrator-out.log",
      time: true
    },
    {
      name: "ultimate-redundancy-master",
      script: "automation/ultimate-redundancy-master.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      env: {
        NODE_ENV: "production"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/ultimate-redundancy-master-error.log",
      out_file: "automation/logs/ultimate-redundancy-master-out.log",
      time: true
    },

    // PM2 Redundancy Managers
    {
      name: "pm2-redundancy-manager",
      script: "automation/pm2-redundancy-manager.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      env: {
        NODE_ENV: "production"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/pm2-redundancy-manager-error.log",
      out_file: "automation/logs/pm2-redundancy-manager-out.log",
      time: true
    },
    {
      name: "pm2-redundancy-monitor",
      script: "automation/pm2-redundancy-monitor.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      env: {
        NODE_ENV: "production"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/pm2-redundancy-monitor-error.log",
      out_file: "automation/logs/pm2-redundancy-monitor-out.log",
      time: true
    },

    // GitHub Actions Redundancy Managers
    {
      name: "github-actions-redundancy-manager",
      script: "automation/github-actions-redundancy-manager.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      env: {
        NODE_ENV: "production"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/github-actions-redundancy-manager-error.log",
      out_file: "automation/logs/github-actions-redundancy-manager-out.log",
      time: true
    },
    {
      name: "enhanced-github-actions-redundancy",
      script: "automation/enhanced-github-actions-redundancy.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      env: {
        NODE_ENV: "production"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/enhanced-github-actions-redundancy-error.log",
      out_file: "automation/logs/enhanced-github-actions-redundancy-out.log",
      time: true
    },

    // Netlify Functions Redundancy Managers
    {
      name: "netlify-functions-redundancy-manager",
      script: "automation/netlify-functions-redundancy-manager.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      env: {
        NODE_ENV: "production"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/netlify-functions-redundancy-manager-error.log",
      out_file: "automation/logs/netlify-functions-redundancy-manager-out.log",
      time: true
    },
    {
      name: "enhanced-netlify-functions-redundancy",
      script: "automation/enhanced-netlify-functions-redundancy.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      env: {
        NODE_ENV: "production"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/enhanced-netlify-functions-redundancy-error.log",
      out_file: "automation/logs/enhanced-netlify-functions-redundancy-out.log",
      time: true
    },
    {
      name: "enhanced-netlify-healer",
      script: "automation/enhanced-netlify-healer.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      env: {
        NODE_ENV: "production"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/enhanced-netlify-healer-error.log",
      out_file: "automation/logs/enhanced-netlify-healer-out.log",
      time: true
    },

    // Build and Monitoring Systems
    {
      name: "master-build-orchestrator",
      script: "automation/master-build-orchestrator.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      env: {
        NODE_ENV: "production"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/master-build-orchestrator-error.log",
      out_file: "automation/logs/master-build-orchestrator-out.log",
      time: true
    },
    {
      name: "continuous-build-monitor",
      script: "automation/continuous-build-monitor.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      env: {
        NODE_ENV: "production"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/continuous-build-monitor-error.log",
      out_file: "automation/logs/continuous-build-monitor-out.log",
      time: true
    },
    {
      name: "build-failure-recovery",
      script: "automation/build-failure-recovery.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      env: {
        NODE_ENV: "production"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/build-failure-recovery-error.log",
      out_file: "automation/logs/build-failure-recovery-out.log",
      time: true
    },
    {
      name: "redundancy-build-monitor",
      script: "automation/redundancy-build-monitor.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      env: {
        NODE_ENV: "production"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-build-monitor-error.log",
      out_file: "automation/logs/redundancy-build-monitor-out.log",
      time: true
    },

    // Health and Validation Systems
    {
      name: "pre-build-health-check",
      script: "automation/pre-build-health-check.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      env: {
        NODE_ENV: "production"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/pre-build-health-check-error.log",
      out_file: "automation/logs/pre-build-health-check-out.log",
      time: true
    },
    {
      name: "nextjs-page-validator",
      script: "automation/nextjs-page-validator.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      env: {
        NODE_ENV: "production"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/nextjs-page-validator-error.log",
      out_file: "automation/logs/nextjs-page-validator-out.log",
      time: true
    },
    {
      name: "redundancy-health-monitor",
      script: "automation/redundancy-health-monitor.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      env: {
        NODE_ENV: "production"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-health-monitor-error.log",
      out_file: "automation/logs/redundancy-health-monitor-out.log",
      time: true
    },
    {
      name: "comprehensive-monitoring-dashboard",
      script: "automation/comprehensive-monitoring-dashboard.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      env: {
        NODE_ENV: "production"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/comprehensive-monitoring-dashboard-error.log",
      out_file: "automation/logs/comprehensive-monitoring-dashboard-out.log",
      time: true
    },

    // Git Sync and Automation Systems
    {
      name: "git-sync",
      script: "automation/git-sync.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      env: {
        NODE_ENV: "production"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/git-sync-error.log",
      out_file: "automation/logs/git-sync-out.log",
      time: true
    },
    {
      name: "enhanced-git-sync-orchestrator",
      script: "automation/enhanced-git-sync-orchestrator.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      env: {
        NODE_ENV: "production"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/enhanced-git-sync-orchestrator-error.log",
      out_file: "automation/logs/enhanced-git-sync-orchestrator-out.log",
      time: true
    },
    {
      name: "redundancy-git-sync",
      script: "automation/redundancy-git-sync.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      env: {
        NODE_ENV: "production"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/redundancy-git-sync-error.log",
      out_file: "automation/logs/redundancy-git-sync-out.log",
      time: true
    },

    // Marketing and Content Automation
    {
      name: "marketing-sync",
      script: "automation/marketing-sync.js",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      env: {
        NODE_ENV: "production"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/marketing-sync-error.log",
      out_file: "automation/logs/marketing-sync-out.log",
      time: true
    },
    {
      name: "homepage-updater",
      script: "automation/homepage-updater.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      env: {
        NODE_ENV: "production"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/homepage-updater-error.log",
      out_file: "automation/logs/homepage-updater-out.log",
      time: true
    },
    {
      name: "front-index-advertiser",
      script: "automation/front-index-advertiser.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      env: {
        NODE_ENV: "production"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/front-index-advertiser-error.log",
      out_file: "automation/logs/front-index-advertiser-out.log",
      time: true
    },

    // Autonomous and AI Systems
    {
      name: "intelligent-orchestrator",
      script: "automation/intelligent-orchestrator.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      env: {
        NODE_ENV: "production"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/intelligent-orchestrator-error.log",
      out_file: "automation/logs/intelligent-orchestrator-out.log",
      time: true
    },
    {
      name: "automation-factory",
      script: "automation/automation-factory.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      env: {
        NODE_ENV: "production"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/automation-factory-error.log",
      out_file: "automation/logs/automation-factory-out.log",
      time: true
    },
    {
      name: "innovation-orchestrator",
      script: "automation/innovation-orchestrator.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      env: {
        NODE_ENV: "production"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/innovation-orchestrator-error.log",
      out_file: "automation/logs/innovation-orchestrator-out.log",
      time: true
    },
    {
      name: "ai-trends-researcher",
      script: "automation/ai-trends-researcher.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      env: {
        NODE_ENV: "production"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/ai-trends-researcher-error.log",
      out_file: "automation/logs/ai-trends-researcher-out.log",
      time: true
    },
    {
      name: "autonomous-meta-orchestrator",
      script: "automation/autonomous-meta-orchestrator.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      env: {
        NODE_ENV: "production"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/autonomous-meta-orchestrator-error.log",
      out_file: "automation/logs/autonomous-meta-orchestrator-out.log",
      time: true
    },

    // Content Quality Systems
    {
      name: "content-quality-fixer",
      script: "automation/content-quality-fixer.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      env: {
        NODE_ENV: "production"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/content-quality-fixer-error.log",
      out_file: "automation/logs/content-quality-fixer-out.log",
      time: true
    },
    {
      name: "content-quality-analyzer",
      script: "automation/content-quality-analyzer.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      env: {
        NODE_ENV: "production"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/content-quality-analyzer-error.log",
      out_file: "automation/logs/content-quality-analyzer-out.log",
      time: true
    },

    // Footer and UI Systems
    {
      name: "footer-injector",
      script: "automation/footer-injector.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      env: {
        NODE_ENV: "production"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/footer-injector-error.log",
      out_file: "automation/logs/footer-injector-out.log",
      time: true
    }
  ],

  // PM2 Configuration
  deploy: {
    production: {
      user: "node",
      host: "localhost",
      ref: "origin/main",
      repo: "https://github.com/Zion-Holdings/zion.app.git",
      path: "/var/www/zion.app",
      "post-deploy": "npm install && pm2 reload ecosystem.master-redundancy.pm2.cjs --env production"
    }
  }
};