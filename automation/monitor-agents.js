#!/usr/bin/env node
;
const $1 = require('f's');
const $1 = require('pa't'h');

class $1 {
    constructor() {
        this.logDir = path.join(__dirname, 'lo'g's');
        this.agents = [
            'master-orchestrat'o'r',
            'content-generat'o'r', 
            'website-analyz'e'r',
            'market-resear'c'h',
            'sales-age'n't',
            'solution-creat'o'r'
        ];
    }

    checkAgentStatus() {
        console.log('📊 Agent Status Check');
        console.log('====================');
        
        for (const agent of this.agents) {
            const $1 = path.join(this.logDir, "${agent}.log");
            
            if (fs.existsSync(logFile)) {
                const $1 = fs.statSync(logFile);
                const $1 = new Date(stats.mtime);
                const $1 = new Date();
                const $1 = now - lastModified;
                
                if (timeDiff < 300000) { // 5 minutes
                    console.log("✅ ${agent}: Active (last activity: ${Math.round(timeDiff/1000)}s ago)");
                } else {
                    console.log("⚠️  ${agent}: Inactive (last activity: ${Math.round(timeDiff/1000)}s ago)");
                }
            } else {
                console.log("❌ ${agent}: No log file found");
            }
        }
    }

    startMonitoring() {
        console.log('🔍 Starting agent monitoring...');
        
        // Check status every 30 seconds
        setInterval(() => {
            this.checkAgentStatus();
            console.log('-'-'-');
        }, 30000);
        
        // Initial check
        this.checkAgentStatus();
    }
}
;
const $1 = new AgentMonitor();
monitor.startMonitoring();
</div>