module.exports = {
  apps: [
    {
      name: 'ai-service-factory-web-turbo',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      cwd: '/workspace',
      instances: 'max',
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '2G',
      node_args: '--max-old-space-size=4096 --max-semi-space-size=512',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        TURBO_MODE: 'true',
        COMPRESSION: 'true',
        CACHE: 'true'
      }
    },
    {
      name: 'ai-service-factory-automation-turbo',
      script: 'automation/service-factory/ultimate-service-factory.cjs',
      cwd: '/workspace',
      instances: 'max',
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '3G',
      node_args: '--max-old-space-size=4096 --max-semi-space-size=512',
      env: {
        NODE_ENV: 'production',
        SERVICE_FACTORY_ENABLED: 'true',
        AUTO_DEPLOYMENT_ENABLED: 'true',
        TURBO_MODE: 'true',
        MAX_CONCURRENT: '50',
        BATCH_SIZE: '100'
      }
    },
    {
      name: 'ai-service-factory-monitor-turbo',
      script: 'automation/service-factory/performance-optimizer.cjs',
      cwd: '/workspace',
      instances: 2,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '2G',
      node_args: '--max-old-space-size=4096 --max-semi-space-size=512',
      env: {
        NODE_ENV: 'production',
        MONITORING_ENABLED: 'true',
        TURBO_MODE: 'true',
        FAST_METRICS: 'true'
      }
    },
    {
      name: 'ai-service-factory-advanced-monitor-turbo',
      script: 'automation/service-factory/advanced-monitor.cjs',
      cwd: '/workspace',
      instances: 2,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '2G',
      node_args: '--max-old-space-size=4096 --max-semi-space-size=512',
      env: {
        NODE_ENV: 'production',
        ADVANCED_MONITORING_ENABLED: 'true',
        TURBO_MODE: 'true',
        FAST_COLLECTION: 'true'
      }
    }
  ],

  deploy: {
    production: {
      user: 'root',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'git@github.com:your-org/ai-service-factory.git',
      path: '/workspace',
      'post-deploy': 'npm install && pm2 reload ecosystem-turbo.config.js --env production'
    }
  }
};
