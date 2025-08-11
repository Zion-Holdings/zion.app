module.exports = {
  apps: [
    {
      name: 'automation-guardian-scheduler',
      script: 'automation/pm2/guardian-scheduler.cjs',
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      time: true,
      out_file: 'automation/logs/guardian-scheduler.out.log',
      error_file: 'automation/logs/guardian-scheduler.err.log',
      merge_logs: true
    },
    {
      name: 'front-continuous-scheduler',
      script: 'automation/pm2/front-scheduler.cjs',
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      time: true,
      out_file: 'automation/logs/front-scheduler.out.log',
      error_file: 'automation/logs/front-scheduler.err.log',
      merge_logs: true
    }
  ]
};