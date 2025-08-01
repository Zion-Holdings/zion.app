const fs = require('fs-extra');
const path = require('path');
const cron = require('node-cron');

class ChatGPTAnalysisOrchestrator {
    constructor() {
        this.baseDir = path.join(__dirname);
        this.agentsDir = path.join(this.baseDir, 'chatgpt-agents');
        this.reportsDir = path.join(this.baseDir, 'chatgpt-analysis-reports');
        this.logsDir = path.join(this.baseDir, 'chatgpt-logs');
        this.dataDir = path.join(this.baseDir, 'chatgpt-data');
        
        this.setupLogging();
        this.loadAgents();
    }

    setupLogging() {
        this.logFile = path.join(this.logsDir, `orchestrator-${Date.now()}.log`);
    }

    log(message) {
        const timestamp = new Date().toISOString();
        const logMessage = `[${timestamp}] Orchestrator: ${message}\n`;
        fs.appendFileSync(this.logFile, logMessage);
        console.log(`[ChatGPT Orchestrator] ${message}`);
    }

    loadAgents() {
        this.agents = [];
        if (fs.existsSync(this.agentsDir)) {
            const agentFiles = fs.readdirSync(this.agentsDir)
                .filter(file => file.endsWith('-config.json'));
            
            agentFiles.forEach(file => {
                try {
                    const config = fs.readJsonSync(path.join(this.agentsDir, file));
                    this.agents.push(config);
                } catch (error) {
                    this.log(`Error loading agent config ${file}: ${error.message}`);
                }
            });
        }
    }

    async runAnalysis() {
        this.log('Starting ChatGPT analysis orchestration...');
        
        try {
            // Create new analysis agent
            const agentId = `analysis-${Date.now()}`;
            const agentConfig = await this.createAnalysisAgent(agentId);
            
            // Run the agent
            const agentPath = path.join(this.agentsDir, `chatgpt-analysis-agent-${agentId}.js`);
            const ChatGPTAnalysisAgent = require(agentPath);
            const agent = new ChatGPTAnalysisAgent(agentConfig);
            
            const result = await agent.run();
            
            this.log('Analysis orchestration completed');
            return result;
            
        } catch (error) {
            this.log(`Error in orchestration: ${error.message}`);
            throw error;
        }
    }

    async createAnalysisAgent(agentId) {
        const factory = new (require('./chatgpt-analysis-agent-factory.js'))();
        return await factory.createChatGPTAnalysisAgent(agentId);
    }

    async runCursorAgents() {
        this.log('Starting Cursor agents execution...');
        
        const cursorAgents = this.agents.filter(agent => agent.type === 'cursor-agent');
        
        for (const agentConfig of cursorAgents) {
            try {
                const agentPath = path.join(this.agentsDir, `cursor-agent-${agentConfig.id}.js`);
                if (fs.existsSync(agentPath)) {
                    const CursorAgent = require(agentPath);
                    const agent = new CursorAgent(agentConfig);
                    await agent.executeInstructions();
                }
            } catch (error) {
                this.log(`Error running cursor agent ${agentConfig.id}: ${error.message}`);
            }
        }
        
        this.log('Cursor agents execution completed');
    }

    async generateDevelopmentPlan() {
        this.log('Generating development plan...');
        
        const plan = {
            timestamp: new Date().toISOString(),
            phases: [
                {
                    phase: 1,
                    name: 'Analysis Phase',
                    tasks: [
                        'Analyze ChatGPT conversation',
                        'Compare with current project',
                        'Identify gaps and requirements'
                    ],
                    status: 'completed'
                },
                {
                    phase: 2,
                    name: 'Planning Phase',
                    tasks: [
                        'Generate development prompts',
                        'Create Cursor agents',
                        'Prioritize tasks'
                    ],
                    status: 'in-progress'
                },
                {
                    phase: 3,
                    name: 'Implementation Phase',
                    tasks: [
                        'Execute Cursor agents',
                        'Monitor progress',
                        'Apply changes'
                    ],
                    status: 'pending'
                }
            ],
            nextSteps: [
                'Run analysis agents',
                'Create development prompts',
                'Execute Cursor agents',
                'Monitor and report'
            ]
        };
        
        const planFile = path.join(this.dataDir, `development-plan-${Date.now()}.json`);
        await fs.writeJson(planFile, plan, { spaces: 2 });
        
        this.log(`Development plan generated: ${planFile}`);
        return plan;
    }

    startContinuousMonitoring() {
        this.log('Starting continuous monitoring...');
        
        // Run every 4 hours
        cron.schedule('0 */4 * * *', async () => {
            this.log('Running scheduled analysis...');
            try {
                await this.runAnalysis();
                await this.runCursorAgents();
            } catch (error) {
                this.log(`Scheduled analysis failed: ${error.message}`);
            }
        });
        
        this.log('Continuous monitoring started');
    }

    async getStatus() {
        const status = {
            timestamp: new Date().toISOString(),
            totalAgents: this.agents.length,
            activeAgents: this.agents.filter(a => a.status === 'active').length,
            lastAnalysis: null,
            nextRun: null
        };
        
        // Get latest analysis report
        if (fs.existsSync(this.reportsDir)) {
            const reportFiles = fs.readdirSync(this.reportsDir)
                .filter(file => file.includes('summary-'))
                .sort()
                .reverse();
            
            if (reportFiles.length > 0) {
                const latestReport = fs.readJsonSync(path.join(this.reportsDir, reportFiles[0]));
                status.lastAnalysis = latestReport.timestamp;
            }
        }
        
        return status;
    }
}

module.exports = ChatGPTAnalysisOrchestrator; 