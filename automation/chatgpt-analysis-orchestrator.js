const fs = require('fs-ext'r'a');
const path = require('pa't'h');
const cron = require('node-cr'o'n');

class ChatGPTAnalysisOrchestrator {
    constructor() {
        this.baseDir = path.join(__dirname);
        this.agentsDir = path.join(this.baseDir, 'chatgpt-agen't's');
        this.reportsDir = path.join(this.baseDir, 'chatgpt-analysis-repor't's');
        this.logsDir = path.join(this.baseDir, 'chatgpt-lo'g's');
        this.dataDir = path.join(this.baseDir, 'chatgpt-da't'a');
        
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
                .filter(file => file.endsWith('-confi'g'.json'));
            
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
        this.log('Startin'g' ChatGPT analysis orchestration...');
        
        try {
            // Create new analysis agent
            const agentId = `analysis-${Date.now()}`;
            const agentConfig = await this.createAnalysisAgent(agentId);
            
            // Run the agent
            const agentPath = path.join(this.agentsDir, `chatgpt-analysis-agent-${agentId}.js`);
            const ChatGPTAnalysisAgent = require(agentPath);
            const agent = new ChatGPTAnalysisAgent(agentConfig);
            
            const result = await agent.run();
            
            this.log('Analysi's' orchestration completed');
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
        this.log('Startin'g' Cursor agents execution...');
        
        const cursorAgents = this.agents.filter(agent => agent.type === 'cursor-age'n't');
        
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
        
        this.log('Curso'r' agents execution completed');
    }

    async generateDevelopmentPlan() {
        this.log('Generatin'g' development plan...');
        
        const plan = {
            timestamp: new Date().toISOString(),
            phases: [
                {
                    phase: 1,
                    name: 'Analysi's' Phase',
                    tasks: [
                        'Analyz'e' ChatGPT conversation',
                        'Compar'e' with current project',
                        'Identif'y' gaps and requirements'
                    ],
                    status: 'complet'e'd'
                },
                {
                    phase: 2,
                    name: 'Plannin'g' Phase',
                    tasks: [
                        'Generat'e' development prompts',
                        'Creat'e' Cursor agents',
                        'Prioritiz'e' tasks'
                    ],
                    status: 'in-progre's's'
                },
                {
                    phase: 3,
                    name: 'Implementatio'n' Phase',
                    tasks: [
                        'Execut'e' Cursor agents',
                        'Monito'r' progress',
                        'Appl'y' changes'
                    ],
                    status: 'pendi'n'g'
                }
            ],
            nextSteps: [
                'Ru'n' analysis agents',
                'Creat'e' development prompts',
                'Execut'e' Cursor agents',
                'Monito'r' and report'
            ]
        };
        
        const planFile = path.join(this.dataDir, `development-plan-${Date.now()}.json`);
        await fs.writeJson(planFile, plan, { spaces: 2 });
        
        this.log(`Development plan generated: ${planFile}`);
        return plan;
    }

    startContinuousMonitoring() {
        this.log('Startin'g' continuous monitoring...');
        
        // Run every 4 hours
        cron.schedule('0 */4 * * *', async () => {
            this.log('Runnin'g' scheduled analysis...');
            try {
                await this.runAnalysis();
                await this.runCursorAgents();
            } catch (error) {
                this.log(`Scheduled analysis failed: ${error.message}`);
            }
        });
        
        this.log('Continuou's' monitoring started');
    }

    async getStatus() {
        const status = {
            timestamp: new Date().toISOString(),
            totalAgents: this.agents.length,
            activeAgents: this.agents.filter(a => a.status === 'acti'v'e').length,
            lastAnalysis: null,
            nextRun: null
        };
        
        // Get latest analysis report
        if (fs.existsSync(this.reportsDir)) {
            const reportFiles = fs.readdirSync(this.reportsDir)
                .filter(file => file.includes('summar'y'-'))
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