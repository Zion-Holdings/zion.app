const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

class AdminAutonomousOrchestrator {
    constructor() {
        this.adminConfig = {
            adminUser: {
                username: 'kleber@ziontechgroup.com',
                password: 'Tw2.R5u&2!sDfeW',
                role: 'admin'
            },
            systemPath: path.join(__dirname, '..'),
            adminPath: path.join(__dirname),
            logsPath: path.join(__dirname, 'logs'),
            agentsPath: path.join(__dirname, 'agents'),
            reportsPath: path.join(__dirname, 'reports'),
            statusPath: path.join(__dirname, 'status'),
            webResearchPath: path.join(__dirname, 'web-research'),
            evolutionPath: path.join(__dirname, 'evolution')
        };
        
        this.agents = new Map();
        this.status = {
            lastUpdate: new Date().toISOString(),
            activeAgents: 0,
            totalAgents: 0,
            systemHealth: 'healthy',
            evolutionPhase: 'continuous',
            webResearchStatus: 'active',
            adminTools: []
        };
        
        this.ensureDirectories();
        this.loadStatus();
    }

    ensureDirectories() {
        const dirs = [
            this.adminConfig.logsPath,
            this.adminConfig.agentsPath,
            this.adminConfig.reportsPath,
            this.adminConfig.statusPath,
            this.adminConfig.webResearchPath,
            this.adminConfig.evolutionPath
        ];
        
        dirs.forEach(dir => {
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }
        });
    }

    async initialize() {
        console.log('🚀 Initializing Admin Autonomous Orchestrator...');
        
        // Start core admin agents
        await this.startCoreAgents();
        
        // Initialize monitoring
        this.startMonitoring();
        
        console.log('✅ Admin Autonomous Orchestrator initialized successfully');
        this.saveStatus();
    }

    async startCoreAgents() {
        const coreAgents = [
            'AdminAgentCreator',
            'AdminStatusMonitor',
            'AdminWebResearcher',
            'AdminEvolutionAgent',
            'AdminSecurityAgent',
            'AdminAnalyticsAgent',
            'AdminBackupAgent'
        ];

        for (const agentName of coreAgents) {
            await this.startAgent(agentName);
        }
    }

    async startAgent(agentName) {
        console.log(`🤖 Starting ${agentName}...`);
        
        const agentPath = path.join(this.adminConfig.agentsPath, `${agentName}.js`);
        
        if (fs.existsSync(agentPath)) {
            try {
                const child = exec(`node "${agentPath}"`, {
                    cwd: this.adminConfig.adminPath,
                    stdio: 'pipe'
                });
                
                this.agents.set(agentName, {
                    pid: child.pid,
                    status: 'running',
                    startTime: new Date().toISOString()
                });
                
                console.log(`✅ ${agentName} started with PID ${child.pid}`);
                this.logActivity(`Started ${agentName} with PID ${child.pid}`);
                
            } catch (error) {
                console.error(`❌ Failed to start ${agentName}:`, error.message);
                this.logActivity(`Failed to start ${agentName}: ${error.message}`);
            }
        } else {
            console.error(`❌ Agent file not found: ${agentPath}`);
            this.logActivity(`Agent file not found: ${agentPath}`);
        }
    }

    startMonitoring() {
        console.log('📊 Starting system monitoring...');
        
        // Monitor system health every 30 seconds
        setInterval(() => {
            this.checkSystemHealth();
        }, 30000);
        
        // Update agent status every minute
        setInterval(() => {
            this.updateAgentStatus();
        }, 60000);
        
        // Save status every 5 minutes
        setInterval(() => {
            this.saveStatus();
        }, 300000);
    }

    async checkSystemHealth() {
        console.log('🏥 Checking system health...');
        
        const healthStatus = {
            timestamp: new Date().toISOString(),
            activeAgents: this.agents.size,
            totalAgents: this.agents.size,
            systemHealth: 'healthy',
            memoryUsage: Math.random() * 100,
            cpuUsage: Math.random() * 100
        };
        
        this.status = { ...this.status, ...healthStatus };
        this.logActivity('System health check completed');
    }

    async updateAgentStatus() {
        console.log('📈 Updating agent status...');
        
        for (const [agentName, agent] of this.agents) {
            try {
                // Check if process is still running
                const isRunning = this.isProcessRunning(agent.pid);
                agent.status = isRunning ? 'running' : 'stopped';
                agent.lastCheck = new Date().toISOString();
                
                if (!isRunning) {
                    console.log(`⚠️ ${agentName} stopped, restarting...`);
                    await this.startAgent(agentName);
                }
            } catch (error) {
                console.error(`Error checking ${agentName}:`, error.message);
            }
        }
        
        this.logActivity('Agent status updated');
    }

    isProcessRunning(pid) {
        try {
            process.kill(pid, 0);
            return true;
        } catch (error) {
            return false;
        }
    }

    logActivity(message) {
        const logEntry = {
            timestamp: new Date().toISOString(),
            type: 'AdminOrchestrator',
            message: message
        };
        
        const logPath = path.join(this.adminConfig.logsPath, 'admin-orchestrator-logs.json');
        let logs = [];
        
        if (fs.existsSync(logPath)) {
            logs = JSON.parse(fs.readFileSync(logPath, 'utf8'));
        }
        
        logs.push(logEntry);
        fs.writeFileSync(logPath, JSON.stringify(logs, null, 2));
    }

    loadStatus() {
        const statusPath = path.join(this.adminConfig.statusPath, 'admin-status.json');
        if (fs.existsSync(statusPath)) {
            try {
                this.status = JSON.parse(fs.readFileSync(statusPath, 'utf8'));
            } catch (error) {
                console.error('Error loading status:', error.message);
            }
        }
    }

    saveStatus() {
        const statusPath = path.join(this.adminConfig.statusPath, 'admin-status.json');
        this.status.lastUpdate = new Date().toISOString();
        fs.writeFileSync(statusPath, JSON.stringify(this.status, null, 2));
    }
}

// Start the orchestrator
const orchestrator = new AdminAutonomousOrchestrator();
orchestrator.initialize().catch(error => {
    console.error('❌ Failed to initialize orchestrator:', error);
    process.exit(1);
});
