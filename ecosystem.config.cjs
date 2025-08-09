// PM2 ecosystem configuration for Zion.app automations
// Run: pm2 start ecosystem.config.cjs && pm2 save

module.exports = {
  apps: [
    // Core orchestrator
    {
      name: 'adaptive-orchestrator',
      script: 'automation/adaptive-intelligence-orchestrator.cjs',
      cwd: __dirname,
      args: 'continuous',
      interpreter: 'node',
      watch: false,
      max_memory_restart: '512M',
      out_file: 'automation/logs/adaptive-intelligence-orchestrator.out',
      error_file: 'automation/logs/adaptive-intelligence-orchestrator.err',
      env: { NODE_ENV: 'production' }
    },

    // Frontend sync
    {
      name: 'frontend-sync-autonomous',
      script: 'automation/frontend-sync-autonomous-orchestrator.cjs',
      cwd: __dirname,
      interpreter: 'node',
      watch: false,
      out_file: 'automation/logs/frontend-sync-autonomous.out',
      error_file: 'automation/logs/frontend-sync-autonomous.err',
      env: { NODE_ENV: 'production' }
    },
    {
      name: 'frontend-sync',
      script: 'automation/frontend-sync-orchestrator.cjs',
      cwd: __dirname,
      interpreter: 'node',
      watch: false,
      out_file: 'automation/logs/frontend-sync.out',
      error_file: 'automation/logs/frontend-sync.err',
      env: { NODE_ENV: 'production' }
    },

    // Marketing automations
    {
      name: 'linkedin-marketing',
      script: 'automation/linkedin-marketing-orchestrator.cjs',
      cwd: __dirname,
      interpreter: 'node',
      watch: false,
      out_file: 'automation/logs/linkedin-marketing.out',
      error_file: 'automation/logs/linkedin-marketing.err',
      env: { NODE_ENV: 'production' }
    },
    {
      name: 'linkedin-pro',
      script: 'automation/linkedin-pro-orchestrator.cjs',
      cwd: __dirname,
      interpreter: 'node',
      watch: false,
      out_file: 'automation/logs/linkedin-pro.out',
      error_file: 'automation/logs/linkedin-pro.err',
      env: { NODE_ENV: 'production' }
    },
    {
      name: 'instagram-marketing',
      script: 'automation/instagram-marketing-orchestrator.cjs',
      cwd: __dirname,
      interpreter: 'node',
      watch: false,
      out_file: 'automation/logs/instagram-marketing.out',
      error_file: 'automation/logs/instagram-marketing.err',
      env: { NODE_ENV: 'production' }
    },

    // Site/content evolution
    {
      name: 'homepage-promo',
      script: 'automation/homepage-promo-orchestrator.cjs',
      cwd: __dirname,
      interpreter: 'node',
      watch: false,
      out_file: 'automation/logs/homepage-promo.out',
      error_file: 'automation/logs/homepage-promo.err',
      env: { NODE_ENV: 'production' }
    },
    {
      name: 'ui-evolution',
      script: 'automation/ui-evolution-orchestrator.cjs',
      cwd: __dirname,
      interpreter: 'node',
      watch: false,
      out_file: 'automation/logs/ui-evolution.out',
      error_file: 'automation/logs/ui-evolution.err',
      env: { NODE_ENV: 'production' }
    },
    {
      name: 'variation',
      script: 'automation/variation-orchestrator.cjs',
      cwd: __dirname,
      interpreter: 'node',
      watch: false,
      out_file: 'automation/logs/variation.out',
      error_file: 'automation/logs/variation.err',
      env: { NODE_ENV: 'production' }
    },
    {
      name: 'responsive-content',
      script: 'automation/responsive-content-orchestrator.cjs',
      cwd: __dirname,
      interpreter: 'node',
      watch: false,
      out_file: 'automation/logs/responsive-content.out',
      error_file: 'automation/logs/responsive-content.err',
      env: { NODE_ENV: 'production' }
    },
    {
      name: 'site-maintenance',
      script: 'automation/site-maintenance-orchestrator.cjs',
      cwd: __dirname,
      interpreter: 'node',
      watch: false,
      out_file: 'automation/logs/site-maintenance.out',
      error_file: 'automation/logs/site-maintenance.err',
      env: { NODE_ENV: 'production' }
    },
    {
      name: 'site-link',
      script: 'automation/site-link-orchestrator.cjs',
      cwd: __dirname,
      interpreter: 'node',
      watch: false,
      out_file: 'automation/logs/site-link.out',
      error_file: 'automation/logs/site-link.err',
      env: { NODE_ENV: 'production' }
    },

    // Growth and content
    {
      name: 'growth',
      script: 'automation/growth-orchestrator.cjs',
      cwd: __dirname,
      interpreter: 'node',
      watch: false,
      out_file: 'automation/logs/growth.out',
      error_file: 'automation/logs/growth.err',
      env: { NODE_ENV: 'production' }
    },
    {
      name: 'content-autogen',
      script: 'automation/content-autogen-orchestrator.cjs',
      cwd: __dirname,
      interpreter: 'node',
      watch: false,
      out_file: 'automation/logs/content-autogen.out',
      error_file: 'automation/logs/content-autogen.err',
      env: { NODE_ENV: 'production' }
    },

    // Monetization and revenue
    {
      name: 'monetization',
      script: 'automation/monetization-orchestrator.cjs',
      cwd: __dirname,
      interpreter: 'node',
      watch: false,
      out_file: 'automation/logs/monetization.out',
      error_file: 'automation/logs/monetization.err',
      env: { NODE_ENV: 'production' }
    },
    {
      name: 'revenue-ideas',
      script: 'automation/revenue-ideas-orchestrator.cjs',
      cwd: __dirname,
      interpreter: 'node',
      watch: false,
      out_file: 'automation/logs/revenue-ideas.out',
      error_file: 'automation/logs/revenue-ideas.err',
      env: { NODE_ENV: 'production' }
    },

    // Services and venture
    {
      name: 'saas-services',
      script: 'automation/saas-services-orchestrator.cjs',
      cwd: __dirname,
      interpreter: 'node',
      watch: false,
      out_file: 'automation/logs/saas-services.out',
      error_file: 'automation/logs/saas-services.err',
      env: { NODE_ENV: 'production' }
    },
    {
      name: 'venture',
      script: 'automation/venture-orchestrator.cjs',
      cwd: __dirname,
      interpreter: 'node',
      watch: false,
      out_file: 'automation/logs/venture.out',
      error_file: 'automation/logs/venture.err',
      env: { NODE_ENV: 'production' }
    },

    // Spec/dev and innovation
    {
      name: 'spec-dev',
      script: 'automation/spec-dev-orchestrator.cjs',
      cwd: __dirname,
      interpreter: 'node',
      watch: false,
      out_file: 'automation/logs/spec-dev.out',
      error_file: 'automation/logs/spec-dev.err',
      env: { NODE_ENV: 'production' }
    },
    {
      name: 'innovation',
      script: 'automation/innovation-orchestrator.cjs',
      cwd: __dirname,
      interpreter: 'node',
      watch: false,
      out_file: 'automation/logs/innovation.out',
      error_file: 'automation/logs/innovation.err',
      env: { NODE_ENV: 'production' }
    },

    // Self healing and security
    {
      name: 'self-healing',
      script: 'automation/self-healing-orchestrator.cjs',
      cwd: __dirname,
      interpreter: 'node',
      watch: false,
      out_file: 'automation/logs/self-healing.out',
      error_file: 'automation/logs/self-healing.err',
      env: { NODE_ENV: 'production' }
    }
  ]
};

module.exports = {
  apps: [
    {
      name: 'automation',
      script: 'npm',
      args: 'run automation:all:plus',
      env: { NODE_ENV: 'production' },
      autorestart: true,
      restart_delay: 5000,
    },
    {
      name: 'autonomous',
      script: 'npm',
      args: 'run autonomous:start',
      env: { NODE_ENV: 'production' },
      autorestart: true,
      restart_delay: 5000,
    },
    {
      name: 'linting',
      script: 'npm',
      args: 'run linting:all',
      env: { NODE_ENV: 'production' },
      autorestart: true,
      restart_delay: 5000,
    },
    {
      name: 'syntax',
      script: 'npm',
      args: 'run syntax:all',
      env: { NODE_ENV: 'production' },
      autorestart: true,
      restart_delay: 5000,
    },
    {
      name: 'google-docs',
      script: 'npm',
      args: 'run google-docs:start',
      env: { NODE_ENV: 'production' },
      autorestart: true,
      restart_delay: 5000,
    },
    {
      name: 'cursor-memory',
      script: 'npm',
      args: 'run cursor:memory',
      env: { NODE_ENV: 'production' },
      autorestart: true,
      restart_delay: 5000,
    },
    {
      name: 'git-cron',
      script: 'npm',
      args: 'run git:cron:start',
      env: { NODE_ENV: 'production' },
      autorestart: true,
      restart_delay: 5000,
    },
    {
      name: 'sync-health-cron',
      script: 'npm',
      args: 'run sync-health:cron:start',
      env: { NODE_ENV: 'production' },
      autorestart: true,
      restart_delay: 5000,
    },
    {
      name: 'frontend-sync',
      script: 'npm',
      args: 'run frontend-sync:start',
      env: { NODE_ENV: 'production' },
      autorestart: true,
      restart_delay: 5000,
    },
    {
      name: 'sync-manager',
      script: 'bash',
      args: ['-lc', 'automation/sync-manager.sh'],
      env: { NODE_ENV: 'production' },
      autorestart: true,
      restart_delay: 5000,
    },
    {
      name: 'venture',
      script: 'npm',
      args: 'run venture:start',
      env: { NODE_ENV: 'production' },
      autorestart: true,
      restart_delay: 5000,
    },
    {
      name: 'feature-marketing',
      script: 'npm',
      args: 'run feature-marketing:start',
      env: { NODE_ENV: 'production' },
      autorestart: true,
      restart_delay: 5000,
    },
    {
      name: 'instagram-marketing',
      script: 'npm',
      args: 'run instagram:marketing:start',
      env: { NODE_ENV: 'production' },
      autorestart: true,
      restart_delay: 5000,
    },
    {
      name: 'linkedin-marketing',
      script: 'npm',
      args: 'run linkedin:marketing:start',
      env: { NODE_ENV: 'production' },
      autorestart: true,
      restart_delay: 5000,
    },
    {
      name: 'cursor-chat',
      script: 'npm',
      args: 'run cursor:chat:start',
      env: { NODE_ENV: 'production' },
      autorestart: true,
      restart_delay: 5000,
    },
    {
      name: 'links',
      script: 'npm',
      args: 'run links:start',
      env: { NODE_ENV: 'production' },
      autorestart: true,
      restart_delay: 5000,
    },
    {
      name: 'promo',
      script: 'npm',
      args: 'run promo:start',
      env: { NODE_ENV: 'production' },
      autorestart: true,
      restart_delay: 5000,
    },
    {
      name: 'spec-dev',
      script: 'npm',
      args: 'run spec-dev:start',
      env: { NODE_ENV: 'production' },
      autorestart: true,
      restart_delay: 5000,
    },
    {
      name: 'meta-orchestrator',
      script: 'npm',
      args: 'run meta:orchestrator',
      env: { NODE_ENV: 'production' },
      autorestart: true,
      restart_delay: 5000,
    },
    {
      name: 'alignment',
      script: 'npm',
      args: 'run alignment:start',
      env: { NODE_ENV: 'production' },
      autorestart: true,
      restart_delay: 5000,
    }
  ]
};


