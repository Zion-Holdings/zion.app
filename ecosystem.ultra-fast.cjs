const path = require('path');
const rootDir = __dirname;

// Ultra-Fast PM2 Ecosystem with Multiple Redundant Agent Creation Processes
// This creates a robust, redundant automation system that continuously generates new agents

module.exports = {
  apps: [
    // ===== ULTRA-FAST AGENT CREATION PROCESSES (MULTIPLE REDUNDANCY) =====
    
    // Primary agent creator - every 2 minutes
    {
      name: 'ultra-fast-agent-creator-primary',
      cwd: rootDir,
      script: 'automation/ultra-fast-agent-creator.cjs',
      interpreter: 'node',
      time: true,
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      cron_restart: '*/2 * * * *',
      env: {
        NODE_ENV: 'production',
        AGENT_CREATION_INTERVAL: '120000',
        MAX_AGENTS_PER_CYCLE: '15',
        GROWTH_MULTIPLIER: '3.0'
      }
    },

    // Secondary agent creator - every 3 minutes (offset)
    {
      name: 'ultra-fast-agent-creator-secondary',
      cwd: rootDir,
      script: 'automation/ultra-fast-agent-creator.cjs',
      interpreter: 'node',
      time: true,
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      cron_restart: '*/3 * * * *',
      env: {
        NODE_ENV: 'production',
        AGENT_CREATION_INTERVAL: '180000',
        MAX_AGENTS_PER_CYCLE: '12',
        GROWTH_MULTIPLIER: '2.8'
      }
    },

    // Tertiary agent creator - every 4 minutes (offset)
    {
      name: 'ultra-fast-agent-creator-tertiary',
      cwd: rootDir,
      script: 'automation/ultra-fast-agent-creator.cjs',
      interpreter: 'node',
      time: true,
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      cron_restart: '*/4 * * * *',
      env: {
        NODE_ENV: 'production',
        AGENT_CREATION_INTERVAL: '240000',
        MAX_AGENTS_PER_CYCLE: '10',
        GROWTH_MULTIPLIER: '2.5'
      }
    },

    // Factory creator - every 5 minutes
    {
      name: 'ultra-fast-factory-creator',
      cwd: rootDir,
      script: 'automation/ultra-fast-agent-creator.cjs',
      interpreter: 'node',
      time: true,
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      cron_restart: '*/5 * * * *',
      env: {
        NODE_ENV: 'production',
        FACTORY_CREATION_INTERVAL: '300000',
        MAX_FACTORIES_PER_CYCLE: '8',
        GROWTH_MULTIPLIER: '3.2'
      }
    },

    // Exponential growth optimizer - every 10 minutes
    {
      name: 'exponential-growth-optimizer',
      cwd: rootDir,
      script: 'automation/exponential-autonomous-orchestrator.cjs',
      interpreter: 'node',
      time: true,
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      cron_restart: '*/10 * * * *',
      env: {
        NODE_ENV: 'production',
        OPTIMIZATION_INTERVAL: '600000',
        GROWTH_TARGET: '1000'
      }
    },

    // Agent orchestrator - every 15 minutes
    {
      name: 'agent-orchestrator',
      cwd: rootDir,
      script: 'automation/agent-orchestrator.cjs',
      interpreter: 'node',
      time: true,
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      cron_restart: '*/15 * * * *',
      env: {
        NODE_ENV: 'production',
        ORCHESTRATION_INTERVAL: '900000',
        MAX_AGENTS: '10000'
      }
    },

    // ===== REDUNDANT MONITORING PROCESSES =====
    
    // Primary monitoring - every 1 minute
    {
      name: 'agent-monitor-primary',
      cwd: rootDir,
      script: 'automation/agent-monitor.cjs',
      interpreter: 'node',
      time: true,
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      cron_restart: '* * * * *',
      env: {
        NODE_ENV: 'production',
        MONITORING_INTERVAL: '60000',
        ALERT_THRESHOLD: '0.8'
      }
    },

    // Secondary monitoring - every 2 minutes (offset)
    {
      name: 'agent-monitor-secondary',
      cwd: rootDir,
      script: 'automation/agent-monitor.cjs',
      interpreter: 'node',
      time: true,
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      cron_restart: '*/2 * * * *',
      env: {
        NODE_ENV: 'production',
        MONITORING_INTERVAL: '120000',
        ALERT_THRESHOLD: '0.85'
      }
    },

    // ===== PERFORMANCE OPTIMIZATION PROCESSES =====
    
    // Performance analyzer - every 5 minutes
    {
      name: 'performance-analyzer',
      cwd: rootDir,
      script: 'automation/performance-analyzer.cjs',
      interpreter: 'node',
      time: true,
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      cron_restart: '*/5 * * * *',
      env: {
        NODE_ENV: 'production',
        ANALYSIS_INTERVAL: '300000',
        OPTIMIZATION_THRESHOLD: '0.7'
      }
    },

    // Resource optimizer - every 10 minutes
    {
      name: 'resource-optimizer',
      cwd: rootDir,
      script: 'automation/resource-optimizer.cjs',
      interpreter: 'node',
      time: true,
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      cron_restart: '*/10 * * * *',
      env: {
        NODE_ENV: 'production',
        OPTIMIZATION_INTERVAL: '600000',
        RESOURCE_THRESHOLD: '0.8'
      }
    },

    // ===== COLLABORATION AND LEARNING PROCESSES =====
    
    // Collaborative learning - every 20 minutes
    {
      name: 'collaborative-learner',
      cwd: rootDir,
      script: 'automation/collaborative-learner.cjs',
      interpreter: 'node',
      time: true,
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      cron_restart: '*/20 * * * *',
      env: {
        NODE_ENV: 'production',
        LEARNING_INTERVAL: '1200000',
        COLLABORATION_THRESHOLD: '0.6'
      }
    },

    // Knowledge synthesizer - every 30 minutes
    {
      name: 'knowledge-synthesizer',
      cwd: rootDir,
      script: 'automation/knowledge-synthesizer.cjs',
      interpreter: 'node',
      time: true,
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      cron_restart: '*/30 * * * *',
      env: {
        NODE_ENV: 'production',
        SYNTHESIS_INTERVAL: '1800000',
        KNOWLEDGE_THRESHOLD: '0.5'
      }
    },

    // ===== SELF-IMPROVEMENT PROCESSES =====
    
    // Self-improvement engine - every 15 minutes
    {
      name: 'self-improvement-engine',
      cwd: rootDir,
      script: 'automation/self-improvement-engine.cjs',
      interpreter: 'node',
      time: true,
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      cron_restart: '*/15 * * * *',
      env: {
        NODE_ENV: 'production',
        IMPROVEMENT_INTERVAL: '900000',
        IMPROVEMENT_THRESHOLD: '0.75'
      }
    },

    // Adaptive behavior optimizer - every 25 minutes
    {
      name: 'adaptive-behavior-optimizer',
      cwd: rootDir,
      script: 'automation/adaptive-behavior-optimizer.cjs',
      interpreter: 'node',
      time: true,
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      cron_restart: '*/25 * * * *',
      env: {
        NODE_ENV: 'production',
        ADAPTATION_INTERVAL: '1500000',
        ADAPTATION_THRESHOLD: '0.65'
      }
    },

    // ===== EMERGENT INTELLIGENCE PROCESSES =====
    
    // Emergent intelligence coordinator - every 45 minutes
    {
      name: 'emergent-intelligence-coordinator',
      cwd: rootDir,
      script: 'automation/emergent-intelligence-coordinator.cjs',
      interpreter: 'node',
      time: true,
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      cron_restart: '*/45 * * * *',
      env: {
        NODE_ENV: 'production',
        COORDINATION_INTERVAL: '2700000',
        EMERGENCE_THRESHOLD: '0.4'
      }
    },

    // Meta-learning processor - every 60 minutes
    {
      name: 'meta-learning-processor',
      cwd: rootDir,
      script: 'automation/meta-learning-processor.cjs',
      interpreter: 'node',
      time: true,
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      cron_restart: '0 * * * *',
      env: {
        NODE_ENV: 'production',
        PROCESSING_INTERVAL: '3600000',
        META_LEARNING_THRESHOLD: '0.3'
      }
    },

    // ===== EXISTING AUTOMATION PROCESSES (PRESERVED) =====
    
    // Continuous front enhancement cycle (every 5 minutes)
    {
      name: 'continuous-front',
      cwd: rootDir,
      script: 'automation/continuous-front-runner.cjs',
      interpreter: 'node',
      time: true,
      autorestart: false,
      cron_restart: '*/5 * * * *',
      env: {
        CANONICAL_URL: 'https://ziontechgroup.com'
      }
    },

    // Autonomous content creator + homepage advertiser (every 30 minutes)
    {
      name: 'content-creator',
      cwd: rootDir,
      script: 'automation/content-creator.cjs',
      interpreter: 'node',
      time: true,
      autorestart: false,
      cron_restart: '* * * * *',
      env: {
        CANONICAL_URL: 'https://ziontechgroup.com'
      }
    },

    // Guardian pass to heal/fix and keep agents fresh (every 10 minutes)
    {
      name: 'automation-guardian-10m',
      cwd: rootDir,
      script: 'automation/automation-guardian-10min.cjs',
      interpreter: 'node',
      time: true,
      autorestart: false,
      cron_restart: '*/10 * * * *'
    },

    // Git sync (every 15 minutes)
    {
      name: 'git-sync',
      cwd: rootDir,
      script: 'automation/git-sync.cjs',
      interpreter: 'node',
      time: true,
      autorestart: false,
      cron_restart: '*/5 * * * *'
    },

    // Continuous Git autosync loop (runs perpetually; PM2 will keep it alive)
    {
      name: 'git-autosync-loop',
      cwd: rootDir,
      script: 'automation/pm2-git-autosync.cjs',
      interpreter: 'node',
      time: true,
      autorestart: true,
      max_restarts: 100,
      min_uptime: '5s'
    }
  ]
};
