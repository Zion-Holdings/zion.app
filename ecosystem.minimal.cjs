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
    
    // Workflow Health Check
    {
      name: 'workflow-health-check',
      script: 'scripts/workflow-health-check.sh',
      cron_restart: '0 2 * * *', // Daily at 2 AM
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: 'production',
        TASK: 'workflow-health-check'
      }
    },
    
    // AI Trends Radar
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
    }
  ]
};
