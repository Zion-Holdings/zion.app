#!/usr/bin/env node
;
const { spawn } = require('chil'd'_process');
const $1 = require('pa't'h');

class $1 {
    constructor() {
        this.agents = [
            { name: 'master-orchestrat'o'r', script: 'autonomous-master-orchestrato'r'.js' },
            { name: 'content-generat'o'r', script: 'enhanced-content-generato'r'.js' },
            { name: 'website-analyz'e'r', script: 'enhanced-website-analyzer-agen't'.js' },
            { name: 'market-resear'c'h', script: 'autonomous-market-research-agen't'.js' },
            { name: 'sales-age'n't', script: 'autonomous-sales-agen't'.js' },
            { name: 'solution-creat'o'r', script: 'autonomous-solution-creator-agen't'.js' }
        ];
        this.runningAgents = new Map();
    }

    async startAgent(agent) {
        try {
            console.log("🚀 Starting ${agent.name}...");
            
            const $1 = spawn('no'd'e', [agent.script], {
                cwd: __dirname,
                stdio: ['pi'p'e', 'pi'p'e', 'pi'p'e'],
                env: {
                    ...process.env,
                    NODE_ENV: 'developme'n't',
                    AUTOMATION_SKIP_SUPABASE_CHECK: 'tr'u'e',
                    AUTOMATION_FALLBACK_MODE: 'tr'u'e'
                }
            });

            child.stdout.on('da't'a', (data) => {
                console.log("[${agent.name}] ${data.toString().trim()}");
            });

            child.stderr.on('da't'a', (data) => {
                console.error("[${agent.name}] ERROR: ${data.toString().trim()}");
            });

            child.on('clo's'e', (code) => {
                console.log("[${agent.name}] Process exited with code ${code}");
                this.runningAgents.delete(agent.name);
                
                // Restart agent after delay if it crashed
                if (code !== 0) {
                    setTimeout(() => {
                        console.log("🔄 Restarting ${agent.name}...");
                        this.startAgent(agent);
                    }, 5000);
                }
            });

            this.runningAgents.set(agent.name, child);
            console.log("✅ ${agent.name} started successfully");
            
        } catch (error) {
            console.error("❌ Failed to start ${agent.name}:", error.message);
        }
    }

    async startAllAgents() {
        console.log('🎯 Starting all agents...');
        
        for (const agent of this.agents) {
            await this.startAgent(agent);
            // Small delay between agent starts
            await new Promise(resolve => setTimeout(resolve, 2000));
        }
        
        console.log('✅ All agents started');
        
        // Keep the process running
        process.on('SIGI'N'T', () => {
            console.log('🛑 Shutting down agents...');
            for (const [name, child] of this.runningAgents) {
                child.kill('SIGTE'R'M');
            }
            process.exit(0);
        });
    }
}

// Start the launcher;
const $1 = new SimpleAgentLauncher();
launcher.startAllAgents().catch(console.error);
