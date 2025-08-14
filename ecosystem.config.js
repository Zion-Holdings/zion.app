module.exports = {
  apps: [
    {
      name: 'ai-service-factory-web',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      env_development: {
        NODE_ENV: 'development',
        PORT: 3000
      }
    },
    {
      name: 'ai-service-factory-automation',
      script: 'automation/service-factory/ultimate-service-factory.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '2G',
      env: {
        NODE_ENV: 'production',
        SERVICE_FACTORY_ENABLED: 'true',
        AUTO_DEPLOYMENT_ENABLED: 'true'
      },
      cron_restart: '0 */6 * * *' // Restart every 6 hours for fresh operation
    },
    {
      name: 'ai-service-factory-monitor',
      script: 'automation/service-factory/performance-optimizer.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        MONITORING_ENABLED: 'true'
      },
      cron_restart: '0 */4 * * *' // Restart every 4 hours
    },
    {
      name: 'ai-service-factory-catalog',
      script: 'automation/service-factory/service-catalog-manager.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        CATALOG_AUTO_UPDATE: 'true'
      },
      cron_restart: '0 */2 * * *' // Restart every 2 hours
    }
  ],

  deploy: {
    production: {
      user: 'root',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'git@github.com:your-org/ai-service-factory.git',
      path: '/workspace',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};