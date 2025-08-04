#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class AgentMonitor {
    constructor() {
        this.logDir = path.join(__dirname, 'logs');
        this.agents = [
            'master-orchestrator',
            'content-generator', 
            'website-analyzer',
            'market-research',
            'sales-agent',
            'solution-creator'
        ];
    }

    checkAgentStatus() {
        console.log('📊 Agent Status Check');
        console.log('====================');
        
        for (const agent of this.agents) {
            const logFile = path.join(this.logDir, `${agent}.log`);
            
            if (fs.existsSync(logFile)) {
                const stats = fs.statSync(logFile);
                const lastModified = new Date(stats.mtime);
                const now = new Date();
                const timeDiff = now - lastModified;
                
                if (timeDiff < 300000) { // 5 minutes
                    console.log(`✅ ${agent}: Active (last activity: ${Math.round(timeDiff/1000)}s ago)`);
                } else {
                    console.log(`⚠️  ${agent}: Inactive (last activity: ${Math.round(timeDiff/1000)}s ago)`);
                }
            } else {
                console.log(`❌ ${agent}: No log file found`);
            }
        }
    }

    startMonitoring() {
        console.log('🔍 Starting agent monitoring...');
        
        // Check status every 30 seconds
        setInterval(() => {
            this.checkAgentStatus();
            console.log('---');
        }, 30000);
        
        // Initial check
        this.checkAgentStatus();
    }
}

const monitor = new AgentMonitor();
monitor.startMonitoring();
