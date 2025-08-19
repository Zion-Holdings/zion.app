module.exports = {
  apps: [
    // Repository Maintenance
    {
      name: 'maintenance-cleanup',
      script: 'scripts/maintenance-cleanup.js',
      cron_restart: '0 2 * * 0', // Sunday at 2 AM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'cleanup-artifacts'
      }
    },
    {
      name: 'maintenance-optimize',
      script: 'scripts/maintenance-optimize.js',
      cron_restart: '0 2 * * 0', // Sunday at 2 AM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'optimize-workflows'
      }
    },
    {
      name: 'maintenance-dependencies',
      script: 'scripts/maintenance-dependencies.js',
      cron_restart: '0 2 * * 0', // Sunday at 2 AM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'dependency-maintenance'
      }
    },
    
    // Workflow Manager
    {
      name: 'workflow-health-check',
      script: 'scripts/workflow-health-check.js',
      cron_restart: '0 2 * * *', // Daily at 2 AM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'workflow-health-check'
      }
    },
    {
      name: 'workflow-optimization',
      script: 'scripts/workflow-optimization.js',
      cron_restart: '0 2 * * *', // Daily at 2 AM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'workflow-optimization'
      }
    },
    {
      name: 'workflow-scheduling',
      script: 'scripts/workflow-scheduling.js',
      cron_restart: '0 2 * * *', // Daily at 2 AM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'workflow-scheduling'
      }
    },
    
    // Auto-fix workflows
    {
      name: 'auto-fix-workflows',
      script: 'scripts/auto-fix-workflows.js',
      cron_restart: '0 */6 * * *', // Every 6 hours
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'auto-fix-workflows'
      }
    },
    {
      name: 'workflow-auto-healer',
      script: 'scripts/workflow-auto-healer.js',
      cron_restart: '0 */4 * * *', // Every 4 hours
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'workflow-auto-healer'
      }
    },
    
    // UI and Content Evolution
    {
      name: 'ui-evolution-weekly',
      script: 'scripts/ui-evolution-weekly.js',
      cron_restart: '0 10 * * 1', // Monday at 10 AM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'ui-evolution-weekly'
      }
    },
    {
      name: 'infinite-improvement-loop',
      script: 'scripts/infinite-improvement-loop.js',
      cron_restart: '0 */8 * * *', // Every 8 hours
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'infinite-improvement-loop'
      }
    },
    
    // Monetization and Revenue
    {
      name: 'monetization-continuous',
      script: 'scripts/monetization-continuous.js',
      cron_restart: '0 */2 * * *', // Every 2 hours
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'monetization-continuous'
      }
    },
    {
      name: 'revenue-ideas-daily',
      script: 'scripts/revenue-ideas-daily.js',
      cron_restart: '0 9 * * *', // Daily at 9 AM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'revenue-ideas-daily'
      }
    },
    {
      name: 'monetization-daily',
      script: 'scripts/monetization-daily.js',
      cron_restart: '0 8 * * *', // Daily at 8 AM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'monetization-daily'
      }
    },
    
    // Marketing and Content
    {
      name: 'marketing-daily',
      script: 'scripts/marketing-daily.js',
      cron_restart: '0 7 * * *', // Daily at 7 AM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'marketing-daily'
      }
    },
    {
      name: 'ai-content-factory',
      script: 'scripts/ai-content-factory.js',
      cron_restart: '0 */3 * * *', // Every 3 hours
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'ai-content-factory'
      }
    },
    {
      name: 'ai-changelog',
      script: 'scripts/ai-changelog.js',
      cron_restart: '0 6 * * *', // Daily at 6 AM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'ai-changelog'
      }
    },
    {
      name: 'ai-trends-radar',
      script: 'scripts/ai-trends-radar.js',
      cron_restart: '0 5 * * *', // Daily at 5 AM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'ai-trends-radar'
      }
    },
    {
      name: 'ai-research-scout',
      script: 'scripts/ai-research-scout.js',
      cron_restart: '0 4 * * *', // Daily at 4 AM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'ai-research-scout'
      }
    },
    {
      name: 'ai-content-autonomy',
      script: 'scripts/ai-content-autonomy.js',
      cron_restart: '0 */4 * * *', // Every 4 hours
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'ai-content-autonomy'
      }
    },
    {
      name: 'ai-it-multi-factory',
      script: 'scripts/ai-it-multi-factory.js',
      cron_restart: '0 */6 * * *', // Every 6 hours
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'ai-it-multi-factory'
      }
    },
    {
      name: 'ai-it-ads-sync',
      script: 'scripts/ai-it-ads-sync.js',
      cron_restart: '0 */2 * * *', // Every 2 hours
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'ai-it-ads-sync'
      }
    },
    
    // LinkedIn and Instagram Marketing
    {
      name: 'linkedin-pro',
      script: 'scripts/linkedin-pro.js',
      cron_restart: '0 11 * * *', // Daily at 11 AM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'linkedin-pro'
      }
    },
    {
      name: 'linkedin-marketing',
      script: 'scripts/linkedin-marketing.js',
      cron_restart: '0 12 * * *', // Daily at 12 PM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'linkedin-marketing'
      }
    },
    {
      name: 'instagram-marketing',
      script: 'scripts/instagram-marketing.js',
      cron_restart: '0 13 * * *', // Daily at 1 PM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'instagram-marketing'
      }
    },
    
    // Testing and Quality
    {
      name: 'playwright-smoke',
      script: 'scripts/playwright-smoke.js',
      cron_restart: '0 */4 * * *', // Every 4 hours
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'playwright-smoke'
      }
    },
    {
      name: 'test-auth',
      script: 'scripts/test-auth.js',
      cron_restart: '0 */6 * * *', // Every 6 hours
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'test-auth'
      }
    },
    {
      name: 'pr-smoke',
      script: 'scripts/pr-smoke.js',
      cron_restart: '0 */2 * * *', // Every 2 hours
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'pr-smoke'
      }
    },
    
    // CI/CD and Build
    {
      name: 'ci-lint-types-build',
      script: 'scripts/ci-lint-types-build.js',
      cron_restart: '0 */1 * * *', // Every hour
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'ci-lint-types-build'
      }
    },
    {
      name: 'continuous-deployment',
      script: 'scripts/continuous-deployment.js',
      cron_restart: '0 */2 * * *', // Every 2 hours
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'continuous-deployment'
      }
    },
    {
      name: 'self-healing-build',
      script: 'scripts/self-healing-build.js',
      cron_restart: '0 */3 * * *', // Every 3 hours
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'self-healing-build'
      }
    },
    
    // Security and Monitoring
    {
      name: 'security-auto-heal',
      script: 'scripts/security-auto-heal.js',
      cron_restart: '0 */4 * * *', // Every 4 hours
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'security-auto-heal'
      }
    },
    {
      name: 'app-monitoring',
      script: 'scripts/app-monitoring.js',
      cron_restart: '0 */5 * * *', // Every 5 minutes
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'app-monitoring'
      }
    },
    {
      name: 'site-health-guardian',
      script: 'scripts/site-health-guardian.js',
      cron_restart: '0 */10 * * *', // Every 10 minutes
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'site-health-guardian'
      }
    },
    
    // Netlify and Deployment
    {
      name: 'netlify-auto-healer',
      script: 'scripts/netlify-auto-healer.js',
      cron_restart: '0 */2 * * *', // Every 2 hours
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'netlify-auto-healer'
      }
    },
    {
      name: 'netlify-monitor',
      script: 'scripts/netlify-monitor.js',
      cron_restart: '0 */15 * * *', // Every 15 minutes
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'netlify-monitor'
      }
    },
    {
      name: 'netlify-automation',
      script: 'scripts/netlify-automation.js',
      cron_restart: '0 */3 * * *', // Every 3 hours
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'netlify-automation'
      }
    },
    {
      name: 'netlify-functions-trigger',
      script: 'scripts/netlify-functions-trigger.js',
      cron_restart: '0 */1 * * *', // Every hour
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'netlify-functions-trigger'
      }
    },
    
    // Performance and Optimization
    {
      name: 'performance-weekly',
      script: 'scripts/performance-weekly.js',
      cron_restart: '0 15 * * 1', // Monday at 3 PM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'performance-weekly'
      }
    },
    {
      name: 'performance-audit',
      script: 'scripts/performance-audit.js',
      cron_restart: '0 16 * * 2', // Tuesday at 4 PM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'performance-audit'
      }
    },
    {
      name: 'lighthouse-live',
      script: 'scripts/lighthouse-live.js',
      cron_restart: '0 */6 * * *', // Every 6 hours
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'lighthouse-live'
      }
    },
    {
      name: 'lighthouse-budgets',
      script: 'scripts/lighthouse-budgets.js',
      cron_restart: '0 14 * * 3', // Wednesday at 2 PM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'lighthouse-budgets'
      }
    },
    
    // Frontend and Sync
    {
      name: 'frontend-sync-continuous',
      script: 'scripts/frontend-sync-continuous.js',
      cron_restart: '0 */2 * * *', // Every 2 hours
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'frontend-sync-continuous'
      }
    },
    {
      name: 'rapid-sync',
      script: 'scripts/rapid-sync.js',
      cron_restart: '0 */1 * * *', // Every hour
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'rapid-sync'
      }
    },
    {
      name: 'ultra-rapid-sync',
      script: 'scripts/ultra-rapid-sync.js',
      cron_restart: '*/15 * * * *', // Every 15 minutes
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'ultra-rapid-sync'
      }
    },
    {
      name: 'git-ultrafast-sync',
      script: 'scripts/git-ultrafast-sync.js',
      cron_restart: '*/10 * * * *', // Every 10 minutes
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'git-ultrafast-sync'
      }
    },
    
    // Content and SEO
    {
      name: 'homepage-auto-update',
      script: 'scripts/homepage-auto-update.js',
      cron_restart: '0 9 * * *', // Daily at 9 AM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'homepage-auto-update'
      }
    },
    {
      name: 'homepage-auto-advertiser',
      script: 'scripts/homepage-auto-advertiser.js',
      cron_restart: '0 10 * * *', // Daily at 10 AM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'homepage-auto-advertiser'
      }
    },
    {
      name: 'sitemap-daily',
      script: 'scripts/sitemap-daily.js',
      cron_restart: '0 6 * * *', // Daily at 6 AM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'sitemap-daily'
      }
    },
    {
      name: 'seo-validator',
      script: 'scripts/seo-validator.js',
      cron_restart: '0 7 * * *', // Daily at 7 AM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'seo-validator'
      }
    },
    {
      name: 'og-image-update',
      script: 'scripts/og-image-update.js',
      cron_restart: '0 8 * * *', // Daily at 8 AM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'og-image-update'
      }
    },
    {
      name: 'og-image-refresh',
      script: 'scripts/og-image-refresh.js',
      cron_restart: '0 20 * * *', // Daily at 8 PM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'og-image-refresh'
      }
    },
    
    // Links and Accessibility
    {
      name: 'link-scan-hourly',
      script: 'scripts/link-scan-hourly.js',
      cron_restart: '0 * * * *', // Every hour
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'link-scan-hourly'
      }
    },
    {
      name: 'link-auto-fix',
      script: 'scripts/link-auto-fix.js',
      cron_restart: '0 */2 * * *', // Every 2 hours
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'link-auto-fix'
      }
    },
    {
      name: 'accessibility-audit',
      script: 'scripts/accessibility-audit.js',
      cron_restart: '0 12 * * 4', // Thursday at 12 PM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'accessibility-audit'
      }
    },
    {
      name: 'pa11y',
      script: 'scripts/pa11y.js',
      cron_restart: '0 13 * * 4', // Thursday at 1 PM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'pa11y'
      }
    },
    
    // Pull Request Management
    {
      name: 'pr-size-labeler',
      script: 'scripts/pr-size-labeler.js',
      cron_restart: '0 */1 * * *', // Every hour
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'pr-size-labeler'
      }
    },
    {
      name: 'pr-auto-curator',
      script: 'scripts/pr-auto-curator.js',
      cron_restart: '0 */2 * * *', // Every 2 hours
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'pr-auto-curator'
      }
    },
    {
      name: 'pr-quality-gate',
      script: 'scripts/pr-quality-gate.js',
      cron_restart: '0 */1 * * *', // Every hour
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'pr-quality-gate'
      }
    },
    {
      name: 'pr-update-with-main',
      script: 'scripts/pr-update-with-main.js',
      cron_restart: '0 */3 * * *', // Every 3 hours
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'pr-update-with-main'
      }
    },
    
    // Repository Management
    {
      name: 'readme-autogen',
      script: 'scripts/readme-autogen.js',
      cron_restart: '0 14 * * 5', // Friday at 2 PM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'readme-autogen'
      }
    },
    {
      name: 'readme-auto-advertiser',
      script: 'scripts/readme-auto-advertiser.js',
      cron_restart: '0 15 * * 5', // Friday at 3 PM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'readme-auto-advertiser'
      }
    },
    {
      name: 'repo-knowledge-graph',
      script: 'scripts/repo-knowledge-graph.js',
      cron_restart: '0 16 * * 5', // Friday at 4 PM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'repo-knowledge-graph'
      }
    },
    {
      name: 'repo-radar',
      script: 'scripts/repo-radar.js',
      cron_restart: '0 17 * * 5', // Friday at 5 PM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'repo-radar'
      }
    },
    
    // Advanced Features
    {
      name: 'diverse-agent-matrix',
      script: 'scripts/diverse-agent-matrix.js',
      cron_restart: '0 */8 * * *', // Every 8 hours
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'diverse-agent-matrix'
      }
    },
    {
      name: 'self-replicating-factory-manager',
      script: 'scripts/self-replicating-factory-manager.js',
      cron_restart: '0 18 * * 6', // Saturday at 6 PM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'self-replicating-factory-manager'
      }
    },
    {
      name: 'cloud-autonomous-orchestrator',
      script: 'scripts/cloud-autonomous-orchestrator.js',
      cron_restart: '0 19 * * 6', // Saturday at 7 PM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'cloud-autonomous-orchestrator'
      }
    },
    {
      name: 'intelligent-content-generation',
      script: 'scripts/intelligent-content-generation.js',
      cron_restart: '0 20 * * 6', // Saturday at 8 PM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'intelligent-content-generation'
      }
    },
    
    // Utility and Maintenance
    {
      name: 'yaml-auto-fixer',
      script: 'scripts/yaml-auto-fixer.js',
      cron_restart: '0 */4 * * *', // Every 4 hours
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'yaml-auto-fixer'
      }
    },
    {
      name: 'yaml-auto-fixer-simple',
      script: 'scripts/yaml-auto-fixer-simple.js',
      cron_restart: '0 */4 * * *', // Every 4 hours
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'yaml-auto-fixer-simple'
      }
    },
    {
      name: 'yaml-validator',
      script: 'scripts/yaml-validator.js',
      cron_restart: '0 */2 * * *', // Every 2 hours
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'yaml-validator'
      }
    },
    {
      name: 'actionlint',
      script: 'scripts/actionlint.js',
      cron_restart: '0 */3 * * *', // Every 3 hours
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'actionlint'
      }
    },
    
    // Monitoring and Health
    {
      name: 'workflow-watchdog',
      script: 'scripts/workflow-watchdog.js',
      cron_restart: '0 */5 * * *', // Every 5 minutes
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'workflow-watchdog'
      }
    },
    {
      name: 'workflow-health-monitor',
      script: 'scripts/workflow-health-monitor.js',
      cron_restart: '0 */10 * * *', // Every 10 minutes
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'workflow-health-monitor'
      }
    },
    {
      name: 'workflow-supervisor',
      script: 'scripts/workflow-supervisor.js',
      cron_restart: '0 */15 * * *', // Every 15 minutes
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'workflow-supervisor'
      }
    },
    
    // Sync and Health
    {
      name: 'sync-health',
      script: 'scripts/sync-health.js',
      cron_restart: '0 */2 * * *', // Every 2 hours
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'sync-health'
      }
    },
    {
      name: 'marketing-sync',
      script: 'scripts/marketing-sync.js',
      cron_restart: '0 11 * * *', // Daily at 11 AM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'marketing-sync'
      }
    },
    
    // Merge Conflict Management
    {
      name: 'merge-conflict-guard',
      script: 'scripts/merge-conflict-guard.js',
      cron_restart: '0 */1 * * *', // Every hour
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'merge-conflict-guard'
      }
    },
    
    // Auto PR Management
    {
      name: 'auto-pr-cursor-branches',
      script: 'scripts/auto-pr-cursor-branches.js',
      cron_restart: '0 */2 * * *', // Every 2 hours
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'auto-pr-cursor-branches'
      }
    },
    
    // Content and Media
    {
      name: 'auto-media-release',
      script: 'scripts/auto-media-release.js',
      cron_restart: '0 21 * * 6', // Saturday at 9 PM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'auto-media-release'
      }
    },
    {
      name: 'media-optimizer',
      script: 'scripts/media-optimizer.js',
      cron_restart: '0 22 * * 6', // Saturday at 10 PM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'media-optimizer'
      }
    },
    {
      name: 'optimize-images',
      script: 'scripts/optimize-images.js',
      cron_restart: '0 23 * * 6', // Saturday at 11 PM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'optimize-images'
      }
    },
    
    // Advanced Analytics
    {
      name: 'knowledge-graph-radar',
      script: 'scripts/knowledge-graph-radar.js',
      cron_restart: '0 0 * * 0', // Sunday at midnight
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'knowledge-graph-radar'
      }
    },
    {
      name: 'topics-and-clusters',
      script: 'scripts/topics-and-clusters.js',
      cron_restart: '0 1 * * 0', // Sunday at 1 AM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'topics-and-clusters'
      }
    },
    {
      name: 'unused-exports-report',
      script: 'scripts/unused-exports-report.js',
      cron_restart: '0 3 * * 0', // Sunday at 3 AM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'unused-exports-report'
      }
    },
    {
      name: 'unused-deps-cleaner',
      script: 'scripts/unused-deps-cleaner.js',
      cron_restart: '0 4 * * 0', // Sunday at 4 AM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'unused-deps-cleaner'
      }
    },
    
    // Responsive and Content
    {
      name: 'responsive-content',
      script: 'scripts/responsive-content.js',
      cron_restart: '0 5 * * 0', // Sunday at 5 AM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'responsive-content'
      }
    },
    
    // Stale Management
    {
      name: 'stale',
      script: 'scripts/stale.js',
      cron_restart: '0 6 * * 1', // Monday at 6 AM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'stale'
      }
    },
    
    // Release Management
    {
      name: 'auto-semver-release',
      script: 'scripts/auto-semver-release.js',
      cron_restart: '0 7 * * 1', // Monday at 7 AM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'auto-semver-release'
      }
    },
    {
      name: 'release-drafter',
      script: 'scripts/release-drafter.js',
      cron_restart: '0 8 * * 1', // Monday at 8 AM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'release-drafter'
      }
    },
    
    // Todo and Issue Management
    {
      name: 'todo-issue-sync',
      script: 'scripts/todo-issue-sync.js',
      cron_restart: '0 9 * * 1', // Monday at 9 AM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'todo-issue-sync'
      }
    },
    
    // Variation and Testing
    {
      name: 'variation',
      script: 'scripts/variation.js',
      cron_restart: '0 10 * * 1', // Monday at 10 AM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'variation'
      }
    },
    
    // Site and Link Management
    {
      name: 'site-link',
      script: 'scripts/site-link.js',
      cron_restart: '0 11 * * 1', // Monday at 11 AM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'site-link'
      }
    },
    
    // Actions Keepalive
    {
      name: 'actions-keepalive',
      script: 'scripts/actions-keepalive.js',
      cron_restart: '0 */30 * * * *', // Every 30 minutes
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'actions-keepalive'
      }
    },
    
    // Pin Actions Weekly
    {
      name: 'pin-actions-weekly',
      script: 'scripts/pin-actions-weekly.js',
      cron_restart: '0 12 * * 1', // Monday at 12 PM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'pin-actions-weekly'
      }
    },
    
    // Venture
    {
      name: 'venture',
      script: 'scripts/venture.js',
      cron_restart: '0 13 * * 1', // Monday at 1 PM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'venture'
      }
    },
    
    // App Automation
    {
      name: 'app-automation',
      script: 'scripts/app-automation.js',
      cron_restart: '0 */2 * * *', // Every 2 hours
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'app-automation'
      }
    }
  ]
};
