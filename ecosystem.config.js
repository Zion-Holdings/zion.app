module.exports = {
  apps: [
    {
      name: 'zion-git-sync-loop',
      cwd: __dirname,
      script: 'bash',
      args: ['-lc', 'while true; do NODE_ENV=production node automation/advanced-git-sync.cjs >> .git/auto-sync.log 2>&1; sleep 120; done'],
      env: { NODE_ENV: 'production' },
      max_memory_restart: '256M',
      autorestart: true,
      restart_delay: 5000
    },
    {
      name: 'zion-git-pull-loop',
      cwd: __dirname,
      script: 'bash',
      args: ['-lc', 'while true; do NODE_ENV=production node automation/git-pull-rebase.cjs >> .git/auto-pull.log 2>&1; sleep 300; done'],
      env: { NODE_ENV: 'production' },
      max_memory_restart: '256M',
      autorestart: true,
      restart_delay: 5000
    },
    {
      name: 'zion-sync-health-loop',
      cwd: __dirname,
      script: 'bash',
      args: ['-lc', 'while true; do NODE_ENV=production node automation/sync-health-check.cjs --fix >> automation/logs/sync-health.log 2>&1; sleep 60; done'],
      env: { NODE_ENV: 'production' },
      max_memory_restart: '256M',
      autorestart: true,
      restart_delay: 5000
    }
  ]
};


