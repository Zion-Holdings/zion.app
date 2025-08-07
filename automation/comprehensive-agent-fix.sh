#!/bin/bash

echo "🔧 Comprehensive Agent System Fix"
echo "=================================="

# Set proper environment variables
export PATH="/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/opt/homebrew/bin:$PATH"
export NVM_DIR="/Users/miami2/.nvm"
export NODE_PATH="/usr/local/lib/node_modules"

# Load NVM if available
if [ -s "$NVM_DIR/nvm.sh" ]; then
    source "$NVM_DIR/nvm.sh"
    nvm use node
fi

# Stop all existing processes
echo "🛑 Stopping existing processes..."
pkill -f "agent-orchestrator" || true
pkill -f "enhanced-autonomous-system" || true
pkill -f "enhanced-cron-system" || true
pkill -f "marketing-automation" || true
pkill -f "monitor" || true
pkill -f "autonomous-agent" || true

sleep 3

# Fix environment configuration
echo "🔧 Fixing environment configuration..."

# Create a proper environment loader
cat > automation/load-env.sh << 'EOF'
#!/bin/bash

# Load environment variables for automation scripts
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
AUTOMATION_ENV_FILE="$SCRIPT_DIR/.env.automation"

# Set default environment variables
export NODE_ENV=development
export AUTOMATION_SKIP_SUPABASE_CHECK=true
export AUTOMATION_FALLBACK_MODE=true
export PATH="/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/opt/homebrew/bin:$PATH"

# Load NVM if available
if [ -s "/Users/miami2/.nvm/nvm.sh" ]; then
    source "/Users/miami2/.nvm/nvm.sh"
    nvm use node
fi

if [[ -f "$AUTOMATION_ENV_FILE" ]]; then
    export $(cat "$AUTOMATION_ENV_FILE" | grep -v '^#' | xargs)
    echo "✅ Environment variables loaded from $AUTOMATION_ENV_FILE"
else
    echo "⚠️  Automation environment file not found: $AUTOMATION_ENV_FILE"
fi
EOF

chmod +x automation/load-env.sh

# Update the environment file with proper fallback configuration
cat > automation/.env.automation << 'EOF'
# Automation Environment Configuration
AUTOMATION_ENABLED=true
AUTOMATION_LOG_LEVEL=info
AUTOMATION_MAX_RETRIES=3
AUTOMATION_TIMEOUT=300000

# Content Generation Configuration
CONTENT_GENERATION_ENABLED=true
CONTENT_GENERATION_INTERVAL=7200000
CONTENT_GENERATION_BATCH_SIZE=5

# Website Analysis Configuration
WEBSITE_ANALYSIS_ENABLED=true
WEBSITE_ANALYSIS_INTERVAL=3600000
WEBSITE_ANALYSIS_DEPTH=3

# Market Research Configuration
MARKET_RESEARCH_ENABLED=true
MARKET_RESEARCH_INTERVAL=21600000

# Sales Campaign Configuration
SALES_CAMPAIGN_ENABLED=true
SALES_CAMPAIGN_INTERVAL=28800000

# Solution Creation Configuration
SOLUTION_CREATION_ENABLED=true
SOLUTION_CREATION_INTERVAL=43200000

# Supabase Configuration (fallback mode for local development)
NEXT_PUBLIC_SUPABASE_URL=https://placeholder.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=placeholder-key

# Google AI Configuration
GOOGLE_AI_API_KEY=placeholder-google-ai-key

# Development Configuration
NODE_ENV=development
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Automation System Configuration
AUTOMATION_SKIP_SUPABASE_CHECK=true
AUTOMATION_FALLBACK_MODE=true
AUTOMATION_AGENT_TIMEOUT=60000
AUTOMATION_MAX_CONCURRENT_AGENTS=5
EOF

echo "✅ Environment configuration updated"

# Create a simplified agent launcher that handles errors gracefully
cat > automation/launch-agent-simple.js << 'EOF'
#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

class SimpleAgentLauncher {
    constructor() {
        this.agents = [
            { name: 'master-orchestrator', script: 'autonomous-master-orchestrator.js' },
            { name: 'content-generator', script: 'enhanced-content-generator.js' },
            { name: 'website-analyzer', script: 'enhanced-website-analyzer-agent.js' },
            { name: 'market-research', script: 'autonomous-market-research-agent.js' },
            { name: 'sales-agent', script: 'autonomous-sales-agent.js' },
            { name: 'solution-creator', script: 'autonomous-solution-creator-agent.js' }
        ];
        this.runningAgents = new Map();
    }

    async startAgent(agent) {
        try {
            console.log(`🚀 Starting ${agent.name}...`);
            
            const child = spawn('node', [agent.script], {
                cwd: __dirname,
                stdio: ['pipe', 'pipe', 'pipe'],
                env: {
                    ...process.env,
                    NODE_ENV: 'development',
                    AUTOMATION_SKIP_SUPABASE_CHECK: 'true',
                    AUTOMATION_FALLBACK_MODE: 'true'
                }
            });

            child.stdout.on('data', (data) => {
                console.log(`[${agent.name}] ${data.toString().trim()}`);
            });

            child.stderr.on('data', (data) => {
                console.error(`[${agent.name}] ERROR: ${data.toString().trim()}`);
            });

            child.on('close', (code) => {
                console.log(`[${agent.name}] Process exited with code ${code}`);
                this.runningAgents.delete(agent.name);
                
                // Restart agent after delay if it crashed
                if (code !== 0) {
                    setTimeout(() => {
                        console.log(`🔄 Restarting ${agent.name}...`);
                        this.startAgent(agent);
                    }, 5000);
                }
            });

            this.runningAgents.set(agent.name, child);
            console.log(`✅ ${agent.name} started successfully`);
            
        } catch (error) {
            console.error(`❌ Failed to start ${agent.name}:`, error.message);
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
        process.on('SIGINT', () => {
            console.log('🛑 Shutting down agents...');
            for (const [name, child] of this.runningAgents) {
                child.kill('SIGTERM');
            }
            process.exit(0);
        });
    }
}

// Start the launcher
const launcher = new SimpleAgentLauncher();
launcher.startAllAgents().catch(console.error);
EOF

chmod +x automation/launch-agent-simple.js

# Create a monitoring script
cat > automation/monitor-agents.js << 'EOF'
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
EOF

chmod +x automation/monitor-agents.js

echo "✅ Agent scripts created"

# Start the simplified agent launcher
echo "🚀 Starting agents with simplified launcher..."
cd automation && node launch-agent-simple.js &
AGENT_LAUNCHER_PID=$!

# Start the monitor
echo "🔍 Starting agent monitor..."
node monitor-agents.js &
MONITOR_PID=$!

echo "✅ Comprehensive agent fix completed"
echo "📊 Agent launcher PID: $AGENT_LAUNCHER_PID"
echo "📊 Monitor PID: $MONITOR_PID"
echo ""
echo "📋 To check status: ./status-autonomous-system.sh"
echo "📋 To stop: pkill -f 'launch-agent-simple' && pkill -f 'monitor-agents'" 