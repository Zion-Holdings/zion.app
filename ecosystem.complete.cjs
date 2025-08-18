module.exports = {
  apps: [
    {
      name: 'accessibility-audit',
      script: 'scripts/accessibility-audit.js',
      cron_restart: '0 2 * * 0',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'accessibility-audit'
      }
    },
    {
      name: 'actionlint',
      script: 'scripts/actionlint.js',
      cron_restart: '0 2 * * 1',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'actionlint'
      }
    },
    {
      name: 'actions-keepalive',
      script: 'scripts/actions-keepalive.js',
      cron_restart: '0 2 * * 2',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'actions-keepalive'
      }
    },
    {
      name: 'agent-agent-1755379731005-0-full-stack-expert',
      script: 'scripts/agent-agent-1755379731005-0-full-stack-expert.js',
      cron_restart: '0 2 * * 3',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'agent-agent-1755379731005-0-full-stack-expert'
      }
    },
    {
      name: 'agent-agent-1755379731007-1-deployment-expert',
      script: 'scripts/agent-agent-1755379731007-1-deployment-expert.js',
      cron_restart: '0 2 * * 4',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'agent-agent-1755379731007-1-deployment-expert'
      }
    },
    {
      name: 'agent-agent-1755379731008-2-monitoring-expert',
      script: 'scripts/agent-agent-1755379731008-2-monitoring-expert.js',
      cron_restart: '0 2 * * 5',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'agent-agent-1755379731008-2-monitoring-expert'
      }
    },
    {
      name: 'agent-agent-1755379759029-0-optimization-intermediate',
      script: 'scripts/agent-agent-1755379759029-0-optimization-intermediate.js',
      cron_restart: '0 2 * * 6',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'agent-agent-1755379759029-0-optimization-intermediate'
      }
    },
    {
      name: 'agent-agent-1755379759032-1-full-stack-intermediate',
      script: 'scripts/agent-agent-1755379759032-1-full-stack-intermediate.js',
      cron_restart: '0 */6 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'agent-agent-1755379759032-1-full-stack-intermediate'
      }
    },
    {
      name: 'agent-agent-1755379759033-2-deployment-expert',
      script: 'scripts/agent-agent-1755379759033-2-deployment-expert.js',
      cron_restart: '0 */4 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'agent-agent-1755379759033-2-deployment-expert'
      }
    },
    {
      name: 'agent-agent-1755379759033-3-frontend-expert',
      script: 'scripts/agent-agent-1755379759033-3-frontend-expert.js',
      cron_restart: '0 */2 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'agent-agent-1755379759033-3-frontend-expert'
      }
    },
    {
      name: 'agent-agent-1755379759035-4-full-stack-intermediate',
      script: 'scripts/agent-agent-1755379759035-4-full-stack-intermediate.js',
      cron_restart: '0 * * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'agent-agent-1755379759035-4-full-stack-intermediate'
      }
    },
    {
      name: 'agent-agent-1755379759035-5-frontend-basic',
      script: 'scripts/agent-agent-1755379759035-5-frontend-basic.js',
      cron_restart: '0 6 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'agent-agent-1755379759035-5-frontend-basic'
      }
    },
    {
      name: 'agent-agent-1755379759036-6-monitoring-advanced',
      script: 'scripts/agent-agent-1755379759036-6-monitoring-advanced.js',
      cron_restart: '0 8 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'agent-agent-1755379759036-6-monitoring-advanced'
      }
    },
    {
      name: 'agent-agent-1755379759037-7-full-stack-intermediate',
      script: 'scripts/agent-agent-1755379759037-7-full-stack-intermediate.js',
      cron_restart: '0 10 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'agent-agent-1755379759037-7-full-stack-intermediate'
      }
    },
    {
      name: 'agent-agent-1755379777746-0-full-stack-advanced',
      script: 'scripts/agent-agent-1755379777746-0-full-stack-advanced.js',
      cron_restart: '0 12 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'agent-agent-1755379777746-0-full-stack-advanced'
      }
    },
    {
      name: 'agent-agent-1755379777749-1-full-stack-basic',
      script: 'scripts/agent-agent-1755379777749-1-full-stack-basic.js',
      cron_restart: '0 14 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'agent-agent-1755379777749-1-full-stack-basic'
      }
    },
    {
      name: 'agent-agent-1755379777750-2-monitoring-intermediate',
      script: 'scripts/agent-agent-1755379777750-2-monitoring-intermediate.js',
      cron_restart: '0 16 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'agent-agent-1755379777750-2-monitoring-intermediate'
      }
    },
    {
      name: 'agent-agent-1755379777751-3-monitoring-advanced',
      script: 'scripts/agent-agent-1755379777751-3-monitoring-advanced.js',
      cron_restart: '0 18 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'agent-agent-1755379777751-3-monitoring-advanced'
      }
    },
    {
      name: 'agent-agent-1755379777752-5-testing-expert',
      script: 'scripts/agent-agent-1755379777752-5-testing-expert.js',
      cron_restart: '0 20 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'agent-agent-1755379777752-5-testing-expert'
      }
    },
    {
      name: 'agent-agent-1755379777754-6-backend-expert',
      script: 'scripts/agent-agent-1755379777754-6-backend-expert.js',
      cron_restart: '0 22 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'agent-agent-1755379777754-6-backend-expert'
      }
    },
    {
      name: 'agent-agent-1755379777755-7-backend-intermediate',
      script: 'scripts/agent-agent-1755379777755-7-backend-intermediate.js',
      cron_restart: '0 0 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'agent-agent-1755379777755-7-backend-intermediate'
      }
    },
    {
      name: 'agent-agent-1755381089841-0-backend-expert',
      script: 'scripts/agent-agent-1755381089841-0-backend-expert.js',
      cron_restart: '0 4 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'agent-agent-1755381089841-0-backend-expert'
      }
    },
    {
      name: 'agent-agent-1755381089844-1-deployment-advanced',
      script: 'scripts/agent-agent-1755381089844-1-deployment-advanced.js',
      cron_restart: '*/15 * * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'agent-agent-1755381089844-1-deployment-advanced'
      }
    },
    {
      name: 'agent-agent-1755381089845-2-full-stack-advanced',
      script: 'scripts/agent-agent-1755381089845-2-full-stack-advanced.js',
      cron_restart: '*/10 * * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'agent-agent-1755381089845-2-full-stack-advanced'
      }
    },
    {
      name: 'agent-agent-1755381089846-3-optimization-expert',
      script: 'scripts/agent-agent-1755381089846-3-optimization-expert.js',
      cron_restart: '*/5 * * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'agent-agent-1755381089846-3-optimization-expert'
      }
    },
    {
      name: 'agent-agent-1755381089846-4-testing-advanced',
      script: 'scripts/agent-agent-1755381089846-4-testing-advanced.js',
      cron_restart: '0 2 * * 0',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'agent-agent-1755381089846-4-testing-advanced'
      }
    },
    {
      name: 'agent-agent-1755381089847-5-frontend-expert',
      script: 'scripts/agent-agent-1755381089847-5-frontend-expert.js',
      cron_restart: '0 2 * * 1',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'agent-agent-1755381089847-5-frontend-expert'
      }
    },
    {
      name: 'agent-agent-1755381089848-6-testing-intermediate',
      script: 'scripts/agent-agent-1755381089848-6-testing-intermediate.js',
      cron_restart: '0 2 * * 2',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'agent-agent-1755381089848-6-testing-intermediate'
      }
    },
    {
      name: 'agent-agent-1755381089849-7-monitoring-intermediate',
      script: 'scripts/agent-agent-1755381089849-7-monitoring-intermediate.js',
      cron_restart: '0 2 * * 3',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'agent-agent-1755381089849-7-monitoring-intermediate'
      }
    },
    {
      name: 'agent-factory-automation',
      script: 'scripts/agent-factory-automation.js',
      cron_restart: '0 2 * * 4',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'agent-factory-automation'
      }
    },
    {
      name: 'agent-factory-proliferation',
      script: 'scripts/agent-factory-proliferation.js',
      cron_restart: '0 2 * * 5',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'agent-factory-proliferation'
      }
    },
    {
      name: 'agent-of-agents-trigger',
      script: 'scripts/agent-of-agents-trigger.js',
      cron_restart: '0 2 * * 6',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'agent-of-agents-trigger'
      }
    },
    {
      name: 'ai-changelog',
      script: 'scripts/ai-changelog.js',
      cron_restart: '0 */6 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'ai-changelog'
      }
    },
    {
      name: 'ai-content-autonomy',
      script: 'scripts/ai-content-autonomy.js',
      cron_restart: '0 */4 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'ai-content-autonomy'
      }
    },
    {
      name: 'ai-content-factory',
      script: 'scripts/ai-content-factory.js',
      cron_restart: '0 */2 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'ai-content-factory'
      }
    },
    {
      name: 'ai-it-ads-sync',
      script: 'scripts/ai-it-ads-sync.js',
      cron_restart: '0 * * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'ai-it-ads-sync'
      }
    },
    {
      name: 'ai-it-innovations',
      script: 'scripts/ai-it-innovations.js',
      cron_restart: '0 6 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'ai-it-innovations'
      }
    },
    {
      name: 'ai-it-multi-factory',
      script: 'scripts/ai-it-multi-factory.js',
      cron_restart: '0 8 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'ai-it-multi-factory'
      }
    },
    {
      name: 'ai-it-ultrafast-sync',
      script: 'scripts/ai-it-ultrafast-sync.js',
      cron_restart: '0 10 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'ai-it-ultrafast-sync'
      }
    },
    {
      name: 'ai-research-scout',
      script: 'scripts/ai-research-scout.js',
      cron_restart: '0 12 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'ai-research-scout'
      }
    },
    {
      name: 'ai-trends-radar',
      script: 'scripts/ai-trends-radar.js',
      cron_restart: '0 14 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'ai-trends-radar'
      }
    },
    {
      name: 'app-automation',
      script: 'scripts/app-automation.js',
      cron_restart: '0 16 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'app-automation'
      }
    },
    {
      name: 'app-monitoring',
      script: 'scripts/app-monitoring.js',
      cron_restart: '0 18 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'app-monitoring'
      }
    },
    {
      name: 'auto-fix-workflows',
      script: 'scripts/auto-fix-workflows.js',
      cron_restart: '0 20 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'auto-fix-workflows'
      }
    },
    {
      name: 'auto-fix',
      script: 'scripts/auto-fix.js',
      cron_restart: '0 22 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'auto-fix'
      }
    },
    {
      name: 'auto-heal-workflows',
      script: 'scripts/auto-heal-workflows.js',
      cron_restart: '0 0 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'auto-heal-workflows'
      }
    },
    {
      name: 'auto-media-release',
      script: 'scripts/auto-media-release.js',
      cron_restart: '0 4 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'auto-media-release'
      }
    },
    {
      name: 'auto-pr-automerge',
      script: 'scripts/auto-pr-automerge.js',
      cron_restart: '*/15 * * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'auto-pr-automerge'
      }
    },
    {
      name: 'auto-pr-cursor-branches',
      script: 'scripts/auto-pr-cursor-branches.js',
      cron_restart: '*/10 * * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'auto-pr-cursor-branches'
      }
    },
    {
      name: 'auto-semver-release',
      script: 'scripts/auto-semver-release.js',
      cron_restart: '*/5 * * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'auto-semver-release'
      }
    },
    {
      name: 'auto-update-prs',
      script: 'scripts/auto-update-prs.js',
      cron_restart: '0 2 * * 0',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'auto-update-prs'
      }
    },
    {
      name: 'automation-advertiser',
      script: 'scripts/automation-advertiser.js',
      cron_restart: '0 2 * * 1',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'automation-advertiser'
      }
    },
    {
      name: 'automation-cleanup',
      script: 'scripts/automation-cleanup.js',
      cron_restart: '0 2 * * 2',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'automation-cleanup'
      }
    },
    {
      name: 'automation-dashboard',
      script: 'scripts/automation-dashboard.js',
      cron_restart: '0 2 * * 3',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'automation-dashboard'
      }
    },
    {
      name: 'automation-guardian-10min',
      script: 'scripts/automation-guardian-10min.js',
      cron_restart: '0 2 * * 4',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'automation-guardian-10min'
      }
    },
    {
      name: 'automation-orchestrator',
      script: 'scripts/automation-orchestrator.js',
      cron_restart: '0 2 * * 5',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'automation-orchestrator'
      }
    },
    {
      name: 'automations',
      script: 'scripts/automations.js',
      cron_restart: '0 2 * * 6',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'automations'
      }
    },
    {
      name: 'automerge-main',
      script: 'scripts/automerge-main.js',
      cron_restart: '0 */6 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'automerge-main'
      }
    },
    {
      name: 'autonomous-agent-orchestrator',
      script: 'scripts/autonomous-agent-orchestrator.js',
      cron_restart: '0 */4 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'autonomous-agent-orchestrator'
      }
    },
    {
      name: 'autonomous-auto-discovery',
      script: 'scripts/autonomous-auto-discovery.js',
      cron_restart: '0 */2 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'autonomous-auto-discovery'
      }
    },
    {
      name: 'autonomous-auto-merge-to-main',
      script: 'scripts/autonomous-auto-merge-to-main.js',
      cron_restart: '0 * * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'autonomous-auto-merge-to-main'
      }
    },
    {
      name: 'autonomous-cloud-automations',
      script: 'scripts/autonomous-cloud-automations.js',
      cron_restart: '0 6 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'autonomous-cloud-automations'
      }
    },
    {
      name: 'autonomous-cloud-fast',
      script: 'scripts/autonomous-cloud-fast.js',
      cron_restart: '0 8 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'autonomous-cloud-fast'
      }
    },
    {
      name: 'autonomous-cloud-runner',
      script: 'scripts/autonomous-cloud-runner.js',
      cron_restart: '0 10 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'autonomous-cloud-runner'
      }
    },
    {
      name: 'autonomous-cloud',
      script: 'scripts/autonomous-cloud.js',
      cron_restart: '0 12 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'autonomous-cloud'
      }
    },
    {
      name: 'autonomous-content-curation',
      script: 'scripts/autonomous-content-curation.js',
      cron_restart: '0 14 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'autonomous-content-curation'
      }
    },
    {
      name: 'autonomous-content-scanner',
      script: 'scripts/autonomous-content-scanner.js',
      cron_restart: '0 16 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'autonomous-content-scanner'
      }
    },
    {
      name: 'autonomous-deep-maintenance',
      script: 'scripts/autonomous-deep-maintenance.js',
      cron_restart: '0 18 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'autonomous-deep-maintenance'
      }
    },
    {
      name: 'autonomous-deps-upgrade',
      script: 'scripts/autonomous-deps-upgrade.js',
      cron_restart: '0 20 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'autonomous-deps-upgrade'
      }
    },
    {
      name: 'autonomous-external-links',
      script: 'scripts/autonomous-external-links.js',
      cron_restart: '0 22 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'autonomous-external-links'
      }
    },
    {
      name: 'autonomous-image-optimizer',
      script: 'scripts/autonomous-image-optimizer.js',
      cron_restart: '0 0 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'autonomous-image-optimizer'
      }
    },
    {
      name: 'autonomous-intelligence',
      script: 'scripts/autonomous-intelligence.js',
      cron_restart: '0 4 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'autonomous-intelligence'
      }
    },
    {
      name: 'autonomous-keepalive',
      script: 'scripts/autonomous-keepalive.js',
      cron_restart: '*/15 * * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'autonomous-keepalive'
      }
    },
    {
      name: 'autonomous-lighthouse',
      script: 'scripts/autonomous-lighthouse.js',
      cron_restart: '*/10 * * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'autonomous-lighthouse'
      }
    },
    {
      name: 'autonomous-marketing-seo',
      script: 'scripts/autonomous-marketing-seo.js',
      cron_restart: '*/5 * * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'autonomous-marketing-seo'
      }
    },
    {
      name: 'autonomous-meta',
      script: 'scripts/autonomous-meta.js',
      cron_restart: '0 2 * * 0',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'autonomous-meta'
      }
    },
    {
      name: 'autonomous-minute-orchestrator',
      script: 'scripts/autonomous-minute-orchestrator.js',
      cron_restart: '0 2 * * 1',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'autonomous-minute-orchestrator'
      }
    },
    {
      name: 'autonomous-quick-fixes',
      script: 'scripts/autonomous-quick-fixes.js',
      cron_restart: '0 2 * * 2',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'autonomous-quick-fixes'
      }
    },
    {
      name: 'autonomous-release',
      script: 'scripts/autonomous-release.js',
      cron_restart: '0 2 * * 3',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'autonomous-release'
      }
    },
    {
      name: 'autonomous-self-tune',
      script: 'scripts/autonomous-self-tune.js',
      cron_restart: '0 2 * * 4',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'autonomous-self-tune'
      }
    },
    {
      name: 'autonomous-ultrafast',
      script: 'scripts/autonomous-ultrafast.js',
      cron_restart: '0 2 * * 5',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'autonomous-ultrafast'
      }
    },
    {
      name: 'autonomous-workflow-cleanup',
      script: 'scripts/autonomous-workflow-cleanup.js',
      cron_restart: '0 2 * * 6',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'autonomous-workflow-cleanup'
      }
    },
    {
      name: 'autonomous-workflow-watchdog',
      script: 'scripts/autonomous-workflow-watchdog.js',
      cron_restart: '0 */6 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'autonomous-workflow-watchdog'
      }
    },
    {
      name: 'branch-cleanup',
      script: 'scripts/branch-cleanup.js',
      cron_restart: '0 */4 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'branch-cleanup'
      }
    },
    {
      name: 'branch-pruner',
      script: 'scripts/branch-pruner.js',
      cron_restart: '0 */2 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'branch-pruner'
      }
    },
    {
      name: 'broken-images',
      script: 'scripts/broken-images.js',
      cron_restart: '0 * * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'broken-images'
      }
    },
    {
      name: 'ci-auto-heal',
      script: 'scripts/ci-auto-heal.js',
      cron_restart: '0 6 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'ci-auto-heal'
      }
    },
    {
      name: 'ci-lint-types-build',
      script: 'scripts/ci-lint-types-build.js',
      cron_restart: '0 8 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'ci-lint-types-build'
      }
    },
    {
      name: 'ci-merge-main',
      script: 'scripts/ci-merge-main.js',
      cron_restart: '0 10 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'ci-merge-main'
      }
    },
    {
      name: 'ci-quality',
      script: 'scripts/ci-quality.js',
      cron_restart: '0 12 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'ci-quality'
      }
    },
    {
      name: 'ci-self-heal',
      script: 'scripts/ci-self-heal.js',
      cron_restart: '0 14 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'ci-self-heal'
      }
    },
    {
      name: 'cleanup-merged-branches',
      script: 'scripts/cleanup-merged-branches.js',
      cron_restart: '0 16 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'cleanup-merged-branches'
      }
    },
    {
      name: 'cleanup',
      script: 'scripts/cleanup.js',
      cron_restart: '0 18 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'cleanup'
      }
    },
    {
      name: 'cloud-agents-fast',
      script: 'scripts/cloud-agents-fast.js',
      cron_restart: '0 20 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'cloud-agents-fast'
      }
    },
    {
      name: 'cloud-agents',
      script: 'scripts/cloud-agents.js',
      cron_restart: '0 22 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'cloud-agents'
      }
    },
    {
      name: 'cloud-autonomous-orchestrator',
      script: 'scripts/cloud-autonomous-orchestrator.js',
      cron_restart: '0 0 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'cloud-autonomous-orchestrator'
      }
    },
    {
      name: 'cloud-deep-research',
      script: 'scripts/cloud-deep-research.js',
      cron_restart: '0 4 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'cloud-deep-research'
      }
    },
    {
      name: 'cloud-maintenance',
      script: 'scripts/cloud-maintenance.js',
      cron_restart: '*/15 * * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'cloud-maintenance'
      }
    },
    {
      name: 'cloud-marketing',
      script: 'scripts/cloud-marketing.js',
      cron_restart: '*/10 * * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'cloud-marketing'
      }
    },
    {
      name: 'cloud-orchestrator-plus',
      script: 'scripts/cloud-orchestrator-plus.js',
      cron_restart: '*/5 * * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'cloud-orchestrator-plus'
      }
    },
    {
      name: 'codeql-analysis',
      script: 'scripts/codeql-analysis.js',
      cron_restart: '0 2 * * 0',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'codeql-analysis'
      }
    },
    {
      name: 'codeql',
      script: 'scripts/codeql.js',
      cron_restart: '0 2 * * 1',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'codeql'
      }
    },
    {
      name: 'commit-message-lint',
      script: 'scripts/commit-message-lint.js',
      cron_restart: '0 2 * * 2',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'commit-message-lint'
      }
    },
    {
      name: 'commitlint',
      script: 'scripts/commitlint.js',
      cron_restart: '0 2 * * 3',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'commitlint'
      }
    },
    {
      name: 'components-size-report',
      script: 'scripts/components-size-report.js',
      cron_restart: '0 2 * * 4',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'components-size-report'
      }
    },
    {
      name: 'comprehensive-test',
      script: 'scripts/comprehensive-test.js',
      cron_restart: '0 2 * * 5',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'comprehensive-test'
      }
    },
    {
      name: 'content-generation',
      script: 'scripts/content-generation.js',
      cron_restart: '0 2 * * 6',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'content-generation'
      }
    },
    {
      name: 'continuous-deployment',
      script: 'scripts/continuous-deployment.js',
      cron_restart: '0 */6 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'continuous-deployment'
      }
    },
    {
      name: 'continuous-improvement',
      script: 'scripts/continuous-improvement.js',
      cron_restart: '0 */4 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'continuous-improvement'
      }
    },
    {
      name: 'crawl-normalize',
      script: 'scripts/crawl-normalize.js',
      cron_restart: '0 */2 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'crawl-normalize'
      }
    },
    {
      name: 'cursor-chat',
      script: 'scripts/cursor-chat.js',
      cron_restart: '0 * * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'cursor-chat'
      }
    },
    {
      name: 'cursor-rules-autoupdate',
      script: 'scripts/cursor-rules-autoupdate.js',
      cron_restart: '0 6 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'cursor-rules-autoupdate'
      }
    },
    {
      name: 'dead-code-report',
      script: 'scripts/dead-code-report.js',
      cron_restart: '0 8 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'dead-code-report'
      }
    },
    {
      name: 'dependabot-auto-approve',
      script: 'scripts/dependabot-auto-approve.js',
      cron_restart: '0 10 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'dependabot-auto-approve'
      }
    },
    {
      name: 'dependencies',
      script: 'scripts/dependencies.js',
      cron_restart: '0 12 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'dependencies'
      }
    },
    {
      name: 'dependency-auto-upgrade',
      script: 'scripts/dependency-auto-upgrade.js',
      cron_restart: '0 14 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'dependency-auto-upgrade'
      }
    },
    {
      name: 'dependency-maintenance',
      script: 'scripts/dependency-maintenance.js',
      cron_restart: '0 16 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'dependency-maintenance'
      }
    },
    {
      name: 'dependency-management',
      script: 'scripts/dependency-management.js',
      cron_restart: '0 18 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'dependency-management'
      }
    },
    {
      name: 'diverse-agent-matrix',
      script: 'scripts/diverse-agent-matrix.js',
      cron_restart: '0 20 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'diverse-agent-matrix'
      }
    },
    {
      name: 'docs-autogen',
      script: 'scripts/docs-autogen.js',
      cron_restart: '0 22 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'docs-autogen'
      }
    },
    {
      name: 'docs-intelligence',
      script: 'scripts/docs-intelligence.js',
      cron_restart: '0 0 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'docs-intelligence'
      }
    },
    {
      name: 'emergency-fix',
      script: 'scripts/emergency-fix.js',
      cron_restart: '0 4 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'emergency-fix'
      }
    },
    {
      name: 'ephemeral-branch-autorebase',
      script: 'scripts/ephemeral-branch-autorebase.js',
      cron_restart: '*/15 * * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'ephemeral-branch-autorebase'
      }
    },
    {
      name: 'exponential-agent-factory-proliferation',
      script: 'scripts/exponential-agent-factory-proliferation.js',
      cron_restart: '*/10 * * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'exponential-agent-factory-proliferation'
      }
    },
    {
      name: 'exponential-ai-delegation',
      script: 'scripts/exponential-ai-delegation.js',
      cron_restart: '*/5 * * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'exponential-ai-delegation'
      }
    },
    {
      name: 'external-links',
      script: 'scripts/external-links.js',
      cron_restart: '0 2 * * 0',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'external-links'
      }
    },
    {
      name: 'fast-auto-push-to-main',
      script: 'scripts/fast-auto-push-to-main.js',
      cron_restart: '0 2 * * 1',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'fast-auto-push-to-main'
      }
    },
    {
      name: 'fast-lint-sync',
      script: 'scripts/fast-lint-sync.js',
      cron_restart: '0 2 * * 2',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'fast-lint-sync'
      }
    },
    {
      name: 'front-scheduler',
      script: 'scripts/front-scheduler.js',
      cron_restart: '0 2 * * 3',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'front-scheduler'
      }
    },
    {
      name: 'frontend-sync-continuous',
      script: 'scripts/frontend-sync-continuous.js',
      cron_restart: '0 2 * * 4',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'frontend-sync-continuous'
      }
    },
    {
      name: 'git-health',
      script: 'scripts/git-health.js',
      cron_restart: '0 2 * * 5',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'git-health'
      }
    },
    {
      name: 'git-ultrafast-sync',
      script: 'scripts/git-ultrafast-sync.js',
      cron_restart: '0 2 * * 6',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'git-ultrafast-sync'
      }
    },
    {
      name: 'gitleaks',
      script: 'scripts/gitleaks.js',
      cron_restart: '0 */6 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'gitleaks'
      }
    },
    {
      name: 'guardian-scheduler',
      script: 'scripts/guardian-scheduler.js',
      cron_restart: '0 */4 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'guardian-scheduler'
      }
    },
    {
      name: 'homepage-auto-advertiser',
      script: 'scripts/homepage-auto-advertiser.js',
      cron_restart: '0 */2 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'homepage-auto-advertiser'
      }
    },
    {
      name: 'homepage-auto-update',
      script: 'scripts/homepage-auto-update.js',
      cron_restart: '0 * * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'homepage-auto-update'
      }
    },
    {
      name: 'infinite-improvement-loop',
      script: 'scripts/infinite-improvement-loop.js',
      cron_restart: '0 6 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'infinite-improvement-loop'
      }
    },
    {
      name: 'instagram-marketing',
      script: 'scripts/instagram-marketing.js',
      cron_restart: '0 8 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'instagram-marketing'
      }
    },
    {
      name: 'instagram-six-hourly',
      script: 'scripts/instagram-six-hourly.js',
      cron_restart: '0 10 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'instagram-six-hourly'
      }
    },
    {
      name: 'intelligent-content-generation',
      script: 'scripts/intelligent-content-generation.js',
      cron_restart: '0 12 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'intelligent-content-generation'
      }
    },
    {
      name: 'knowledge-graph-radar',
      script: 'scripts/knowledge-graph-radar.js',
      cron_restart: '0 14 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'knowledge-graph-radar'
      }
    },
    {
      name: 'labeler',
      script: 'scripts/labeler.js',
      cron_restart: '0 16 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'labeler'
      }
    },
    {
      name: 'lighthouse-budgets',
      script: 'scripts/lighthouse-budgets.js',
      cron_restart: '0 18 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'lighthouse-budgets'
      }
    },
    {
      name: 'lighthouse-live',
      script: 'scripts/lighthouse-live.js',
      cron_restart: '0 20 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'lighthouse-live'
      }
    },
    {
      name: 'link-auto-fix',
      script: 'scripts/link-auto-fix.js',
      cron_restart: '0 22 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'link-auto-fix'
      }
    },
    {
      name: 'link-scan-hourly',
      script: 'scripts/link-scan-hourly.js',
      cron_restart: '0 0 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'link-scan-hourly'
      }
    },
    {
      name: 'linkedin-marketing',
      script: 'scripts/linkedin-marketing.js',
      cron_restart: '0 4 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'linkedin-marketing'
      }
    },
    {
      name: 'linkedin-pro',
      script: 'scripts/linkedin-pro.js',
      cron_restart: '*/15 * * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'linkedin-pro'
      }
    },
    {
      name: 'maintenance',
      script: 'scripts/maintenance.js',
      cron_restart: '*/10 * * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'maintenance'
      }
    },
    {
      name: 'marketing-daily',
      script: 'scripts/marketing-daily.js',
      cron_restart: '*/5 * * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'marketing-daily'
      }
    },
    {
      name: 'marketing-sync',
      script: 'scripts/marketing-sync.js',
      cron_restart: '0 2 * * 0',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'marketing-sync'
      }
    },
    {
      name: 'media-optimizer',
      script: 'scripts/media-optimizer.js',
      cron_restart: '0 2 * * 1',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'media-optimizer'
      }
    },
    {
      name: 'merge-conflict-guard',
      script: 'scripts/merge-conflict-guard.js',
      cron_restart: '0 2 * * 2',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'merge-conflict-guard'
      }
    },
    {
      name: 'monetization-continuous',
      script: 'scripts/monetization-continuous.js',
      cron_restart: '0 2 * * 3',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'monetization-continuous'
      }
    },
    {
      name: 'monetization-daily',
      script: 'scripts/monetization-daily.js',
      cron_restart: '0 2 * * 4',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'monetization-daily'
      }
    },
    {
      name: 'monetization',
      script: 'scripts/monetization.js',
      cron_restart: '0 2 * * 5',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'monetization'
      }
    },
    {
      name: 'netlify-auto-healer',
      script: 'scripts/netlify-auto-healer.js',
      cron_restart: '0 2 * * 6',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'netlify-auto-healer'
      }
    },
    {
      name: 'netlify-automation',
      script: 'scripts/netlify-automation.js',
      cron_restart: '0 */6 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'netlify-automation'
      }
    },
    {
      name: 'netlify-config',
      script: 'scripts/netlify-config.js',
      cron_restart: '0 */4 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'netlify-config'
      }
    },
    {
      name: 'netlify-functions-trigger',
      script: 'scripts/netlify-functions-trigger.js',
      cron_restart: '0 */2 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'netlify-functions-trigger'
      }
    },
    {
      name: 'netlify-monitor',
      script: 'scripts/netlify-monitor.js',
      cron_restart: '0 * * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'netlify-monitor'
      }
    },
    {
      name: 'og-image-refresh',
      script: 'scripts/og-image-refresh.js',
      cron_restart: '0 6 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'og-image-refresh'
      }
    },
    {
      name: 'og-image-update',
      script: 'scripts/og-image-update.js',
      cron_restart: '0 8 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'og-image-update'
      }
    },
    {
      name: 'optimize-images',
      script: 'scripts/optimize-images.js',
      cron_restart: '0 10 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'optimize-images'
      }
    },
    {
      name: 'pa11y',
      script: 'scripts/pa11y.js',
      cron_restart: '0 12 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'pa11y'
      }
    },
    {
      name: 'performance-audit',
      script: 'scripts/performance-audit.js',
      cron_restart: '0 14 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'performance-audit'
      }
    },
    {
      name: 'performance-monitoring',
      script: 'scripts/performance-monitoring.js',
      cron_restart: '0 16 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'performance-monitoring'
      }
    },
    {
      name: 'performance-weekly',
      script: 'scripts/performance-weekly.js',
      cron_restart: '0 18 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'performance-weekly'
      }
    },
    {
      name: 'pin-actions-weekly',
      script: 'scripts/pin-actions-weekly.js',
      cron_restart: '0 20 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'pin-actions-weekly'
      }
    },
    {
      name: 'playwright-smoke',
      script: 'scripts/playwright-smoke.js',
      cron_restart: '0 22 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'playwright-smoke'
      }
    },
    {
      name: 'pr-auto-curator',
      script: 'scripts/pr-auto-curator.js',
      cron_restart: '0 0 * * *',
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
      cron_restart: '0 4 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'pr-quality-gate'
      }
    },
    {
      name: 'pr-size-labeler',
      script: 'scripts/pr-size-labeler.js',
      cron_restart: '*/15 * * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'pr-size-labeler'
      }
    },
    {
      name: 'pr-smoke',
      script: 'scripts/pr-smoke.js',
      cron_restart: '*/10 * * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'pr-smoke'
      }
    },
    {
      name: 'pr-update-with-main',
      script: 'scripts/pr-update-with-main.js',
      cron_restart: '*/5 * * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'pr-update-with-main'
      }
    },
    {
      name: 'rapid-git-sync',
      script: 'scripts/rapid-git-sync.js',
      cron_restart: '0 2 * * 0',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'rapid-git-sync'
      }
    },
    {
      name: 'rapid-sync',
      script: 'scripts/rapid-sync.js',
      cron_restart: '0 2 * * 1',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'rapid-sync'
      }
    },
    {
      name: 'readme-auto-advertiser',
      script: 'scripts/readme-auto-advertiser.js',
      cron_restart: '0 2 * * 2',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'readme-auto-advertiser'
      }
    },
    {
      name: 'readme-autogen',
      script: 'scripts/readme-autogen.js',
      cron_restart: '0 2 * * 3',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'readme-autogen'
      }
    },
    {
      name: 'release-deploy',
      script: 'scripts/release-deploy.js',
      cron_restart: '0 2 * * 4',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'release-deploy'
      }
    },
    {
      name: 'release-drafter',
      script: 'scripts/release-drafter.js',
      cron_restart: '0 2 * * 5',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'release-drafter'
      }
    },
    {
      name: 'release',
      script: 'scripts/release.js',
      cron_restart: '0 2 * * 6',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'release'
      }
    },
    {
      name: 'repo-knowledge-graph',
      script: 'scripts/repo-knowledge-graph.js',
      cron_restart: '0 */6 * * *',
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
      cron_restart: '0 */4 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'repo-radar'
      }
    },
    {
      name: 'responsive-content',
      script: 'scripts/responsive-content.js',
      cron_restart: '0 */2 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'responsive-content'
      }
    },
    {
      name: 'revenue-ideas-daily',
      script: 'scripts/revenue-ideas-daily.js',
      cron_restart: '0 * * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'revenue-ideas-daily'
      }
    },
    {
      name: 'search-index-autogen',
      script: 'scripts/search-index-autogen.js',
      cron_restart: '0 6 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'search-index-autogen'
      }
    },
    {
      name: 'security-audit',
      script: 'scripts/security-audit.js',
      cron_restart: '0 8 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'security-audit'
      }
    },
    {
      name: 'security-auto-heal',
      script: 'scripts/security-auto-heal.js',
      cron_restart: '0 10 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'security-auto-heal'
      }
    },
    {
      name: 'security-gates',
      script: 'scripts/security-gates.js',
      cron_restart: '0 12 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'security-gates'
      }
    },
    {
      name: 'security-scan',
      script: 'scripts/security-scan.js',
      cron_restart: '0 14 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'security-scan'
      }
    },
    {
      name: 'security-weekly',
      script: 'scripts/security-weekly.js',
      cron_restart: '0 16 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'security-weekly'
      }
    },
    {
      name: 'security',
      script: 'scripts/security.js',
      cron_restart: '0 18 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'security'
      }
    },
    {
      name: 'self-healing-build',
      script: 'scripts/self-healing-build.js',
      cron_restart: '0 20 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'self-healing-build'
      }
    },
    {
      name: 'self-replicating-factory-manager',
      script: 'scripts/self-replicating-factory-manager.js',
      cron_restart: '0 22 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'self-replicating-factory-manager'
      }
    },
    {
      name: 'seo-audit',
      script: 'scripts/seo-audit.js',
      cron_restart: '0 0 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'seo-audit'
      }
    },
    {
      name: 'seo-validator',
      script: 'scripts/seo-validator.js',
      cron_restart: '0 4 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'seo-validator'
      }
    },
    {
      name: 'site-health-guardian',
      script: 'scripts/site-health-guardian.js',
      cron_restart: '*/15 * * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'site-health-guardian'
      }
    },
    {
      name: 'site-link',
      script: 'scripts/site-link.js',
      cron_restart: '*/10 * * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'site-link'
      }
    },
    {
      name: 'sitemap-and-search',
      script: 'scripts/sitemap-and-search.js',
      cron_restart: '*/5 * * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'sitemap-and-search'
      }
    },
    {
      name: 'sitemap-auto-commit',
      script: 'scripts/sitemap-auto-commit.js',
      cron_restart: '0 2 * * 0',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'sitemap-auto-commit'
      }
    },
    {
      name: 'sitemap-daily',
      script: 'scripts/sitemap-daily.js',
      cron_restart: '0 2 * * 1',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'sitemap-daily'
      }
    },
    {
      name: 'stale',
      script: 'scripts/stale.js',
      cron_restart: '0 2 * * 2',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'stale'
      }
    },
    {
      name: 'sync-health',
      script: 'scripts/sync-health.js',
      cron_restart: '0 2 * * 3',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'sync-health'
      }
    },
    {
      name: 'test-auth',
      script: 'scripts/test-auth.js',
      cron_restart: '0 2 * * 4',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'test-auth'
      }
    },
    {
      name: 'test-suite',
      script: 'scripts/test-suite.js',
      cron_restart: '0 2 * * 5',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'test-suite'
      }
    },
    {
      name: 'test',
      script: 'scripts/test.js',
      cron_restart: '0 2 * * 6',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'test'
      }
    },
    {
      name: 'todo-issue-sync',
      script: 'scripts/todo-issue-sync.js',
      cron_restart: '0 */6 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'todo-issue-sync'
      }
    },
    {
      name: 'topics-and-clusters',
      script: 'scripts/topics-and-clusters.js',
      cron_restart: '0 */4 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'topics-and-clusters'
      }
    },
    {
      name: 'ui-evolution-schedule',
      script: 'scripts/ui-evolution-schedule.js',
      cron_restart: '0 */2 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'ui-evolution-schedule'
      }
    },
    {
      name: 'ui-evolution-weekly-beautify',
      script: 'scripts/ui-evolution-weekly-beautify.js',
      cron_restart: '0 * * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'ui-evolution-weekly-beautify'
      }
    },
    {
      name: 'ultra-rapid-sync',
      script: 'scripts/ultra-rapid-sync.js',
      cron_restart: '0 6 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'ultra-rapid-sync'
      }
    },
    {
      name: 'unused-deps-cleaner',
      script: 'scripts/unused-deps-cleaner.js',
      cron_restart: '0 8 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'unused-deps-cleaner'
      }
    },
    {
      name: 'unused-exports-report',
      script: 'scripts/unused-exports-report.js',
      cron_restart: '0 10 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'unused-exports-report'
      }
    },
    {
      name: 'variation',
      script: 'scripts/variation.js',
      cron_restart: '0 12 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'variation'
      }
    },
    {
      name: 'venture',
      script: 'scripts/venture.js',
      cron_restart: '0 14 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'venture'
      }
    },
    {
      name: 'workflow-auto-healer',
      script: 'scripts/workflow-auto-healer.js',
      cron_restart: '0 16 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'workflow-auto-healer'
      }
    },
    {
      name: 'workflow-health-monitor',
      script: 'scripts/workflow-health-monitor.js',
      cron_restart: '0 18 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'workflow-health-monitor'
      }
    },
    {
      name: 'workflow-manager',
      script: 'scripts/workflow-manager.js',
      cron_restart: '0 20 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'workflow-manager'
      }
    },
    {
      name: 'workflow-radar',
      script: 'scripts/workflow-radar.js',
      cron_restart: '0 22 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'workflow-radar'
      }
    },
    {
      name: 'workflow-supervisor',
      script: 'scripts/workflow-supervisor.js',
      cron_restart: '0 0 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'workflow-supervisor'
      }
    },
    {
      name: 'workflow-validator',
      script: 'scripts/workflow-validator.js',
      cron_restart: '0 4 * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'workflow-validator'
      }
    },
    {
      name: 'workflow-watchdog',
      script: 'scripts/workflow-watchdog.js',
      cron_restart: '*/15 * * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'workflow-watchdog'
      }
    },
    {
      name: 'yaml-auto-fixer-simple',
      script: 'scripts/yaml-auto-fixer-simple.js',
      cron_restart: '*/10 * * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'yaml-auto-fixer-simple'
      }
    },
    {
      name: 'yaml-auto-fixer',
      script: 'scripts/yaml-auto-fixer.js',
      cron_restart: '*/5 * * * *',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'yaml-auto-fixer'
      }
    },
    {
      name: 'yaml-validator',
      script: 'scripts/yaml-validator.js',
      cron_restart: '0 2 * * 0',
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'yaml-validator'
      }
    }
  ]
};
