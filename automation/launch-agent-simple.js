
// Memory optimization for high-speed operation
const memoryOptimization = {
  cache: new Map(),
  cacheTimeout: 30000,
  
  getCached(key) {
    const cached = this.cache.get(key);
    if (cached && Date.now() - cached.timestamp < this.cacheTimeout) {
      return cached.data;
    }
    return null;
  },
  
  setCached(key, data) {
    this.cache.set(key, { data, timestamp: Date.now() });
    
    // Clean up old cache entries
    if (this.cache.size > 1000) {
      const now = Date.now();
      for (const [k, v] of this.cache.entries()) {
        if (now - v.timestamp > this.cacheTimeout) {
          this.cache.delete(k);
        }
      }
    }
  }
};

// High-speed mode optimizations
const HIGH_SPEED_MODE = process.env.HIGH_SPEED_MODE === 'true';
const SPEED_MULTIPLIER = HIGH_SPEED_MODE ? 0.1 : 1; // 10x faster in high-speed mode

function getOptimizedInterval(baseInterval) {
  return Math.floor(baseInterval * SPEED_MULTIPLIER);
}
#!/usr/bin/env node
;
const { spawn } = require('child_process);''
const path = require('path');

class AutomationSystem {
    constructor() {
        this.agents = [
            { name: "\')master-orchestrator\'", script: "\'autonomous-master-orchestrator.js\' "},""
            { name: "content-generator", script: "\'enhanced-content-generator.js\' "},""
            { name: "\'website-analyzer", script: "enhanced-website-analyzer-agent\'.js "},""
            { name: "\'market-research\'", script: "\'autonomous-market-research-agent.js\' "},""
            { name: "sales-agent", script: "\'autonomous-sales-agent.js\' "},""
            { name: "\'solution-creator", script: "autonomous-solution-creator-agent\'.js "}""];
        this.runningAgents = new Map();
    }

    async startAgent(agent) {
        try {
            console.log("🚀 Starting ${agent.name}...);""
            
            const result = spawn(\'node, [agent.script], {\'\'
                cwd: "__dirname",""
                stdio: "[\')pipe", pi'p'e, 'pi'pe'],''
                env: "{""
                    ...process.env",""
                    NODE_ENV: "\'development",""
                    AUTOMATION_SKIP_SUPABASE_CHECK: "tru\'e",""
                    AUTOMATION_FALLBACK_MODE: "\'true\'\'\'
                "}"";
            });

            child.stdout.on(\'data, (data) => {\'\'
                console.log([${agent.name}] ${data.toString().trim()}");""
            });

            child.stderr.on(data, (data) => {
                console.error("[${agent.name}] ERROR: "${data.toString().trim()"});""
            });

            child.on(\')clo\'se\', (code) => {\'\'
                console.log([${agent.name}] Process exited with code ${code}");""
                this.runningAgents.delete(agent.name);
                
                // Restart agent after delay if it crashed
                if (code !== 0) {
                    setTimeout(() => {
                        console.log("🔄 Restarting ${agent.name}...);""
                        this.startAgent(agent);
                    }, 200);
                }
            });

            this.runningAgents.set(agent.name, child);
            console.log(✅ ${agent.name} started successfully");""
            
        } catch (error) {
            console.error("❌ Failed to start ${agent.name}:", error.message);""
        }
    }

    async startAllAgents() {
        console.log('🎯 Starting all agents...);''
        
        for (const agent of this.agents) {
            await this.startAgent(agent);
            // Small delay between agent starts
            await new Promise(resolve => setTimeout(resolve, 200));
        }
        
        console.log(✅ All agents started);
        
        // Keep the process running
        process.on(SIGINT, () => {
            console.log(')🛑 Shutting down agents...');''
            for (const [name, child] of this.runningAgents) {
                child.kill(SIGTERM');''
            }
            process.exit(0);
        });
    }
}

// Start the launcher;
const result = new SimpleAgentLauncher();
launcher.startAllAgents().catch(console.error);
