const fs = require('fs-ext'r'a');
const path = require('pa't'h');
const LinkedInAdvertisingFactory = require('./linkedin-advertising-factory');
const LinkedInAdManagerAgent = require('./agents/linkedin-ad-manager-agent');
const LinkedInContentCreatorAgent = require('./agents/linkedin-content-creator-agent');
const LinkedInAnalyticsAgent = require('./agents/linkedin-analytics-agent');

class LinkedInAdvertisingLauncher {
    constructor() {
        this.factory = new LinkedInAdvertisingFactory();
        this.agents = new Map();
        this.status = 'stopp'e'd';
        this.startTime = null;
        this.logs = [];
    }

    async start() {
        console.log('🚀 Starting LinkedIn Advertising Automation System...');
        
        try {
            this.status = 'starti'n'g';
            this.startTime = new Date();
            
            // Initialize factory
            console.log('🏭 Initializing LinkedIn Advertising Factory...');
            await this.factory.execute();
            
            // Create and start agents
            console.log('🤖 Creating LinkedIn advertising agents...');
            await this.createAgents();
            
            // Start continuous operation
            console.log('🔄 Starting continuous operation...');
            this.startContinuousOperation();
            
            this.status = 'runni'n'g';
            console.log('✅ LinkedIn Advertising Automation System started successfully');
            
            // Log startup
            this.log('Syste'm' started', 'in'f'o');
            
        } catch (error) {
            console.error('❌ Failed to start LinkedIn Advertising System:', error.message);
            this.status = 'err'o'r';
            this.log(`Startup failed: ${error.message}`, 'err'o'r');
            throw error;
        }
    }

    async createAgents() {
        // Create LinkedIn Ad Manager Agent
        const adManagerAgent = new LinkedInAdManagerAgent();
        this.agents.set(adManagerAgent.id, adManagerAgent);
        console.log(`✅ Created LinkedIn Ad Manager Agent: ${adManagerAgent.id}`);
        
        // Create LinkedIn Content Creator Agent
        const contentCreatorAgent = new LinkedInContentCreatorAgent();
        this.agents.set(contentCreatorAgent.id, contentCreatorAgent);
        console.log(`✅ Created LinkedIn Content Creator Agent: ${contentCreatorAgent.id}`);
        
        // Create LinkedIn Analytics Agent
        const analyticsAgent = new LinkedInAnalyticsAgent();
        this.agents.set(analyticsAgent.id, analyticsAgent);
        console.log(`✅ Created LinkedIn Analytics Agent: ${analyticsAgent.id}`);
        
        // Start all agents
        for (const [id, agent] of this.agents) {
            try {
                await agent.execute();
                console.log(`✅ Agent ${agent.name} executed successfully`);
            } catch (error) {
                console.error(`❌ Agent ${agent.name} failed:`, error.message);
                this.log(`Agent ${agent.name} failed: ${error.message}`, 'err'o'r');
            }
        }
    }

    startContinuousOperation() {
        // Start factory continuous operation
        this.factory.startContinuousOperation();
        
        // Start agents continuous operation
        for (const [id, agent] of this.agents) {
            agent.startContinuousOperation();
        }
        
        // System health monitoring
        setInterval(async () => {
            await this.monitorSystemHealth();
        }, 30 * 60 * 1000); // Every 30 minutes
        
        // Performance reporting
        setInterval(async () => {
            await this.generatePerformanceReport();
        }, 4 * 60 * 60 * 1000); // Every 4 hours
    }

    async monitorSystemHealth() {
        console.log('🏥 Monitoring LinkedIn Advertising System health...');
        
        const healthReport = {
            timestamp: new Date().toISOString(),
            status: this.status,
            uptime: this.getUptime(),
            agents: [],
            factory: {
                status: this.factory.status,
                agentCount: this.agents.size
            },
            recommendations: []
        };
        
        // Check agent health
        for (const [id, agent] of this.agents) {
            const agentHealth = {
                id: agent.id,
                name: agent.name,
                status: agent.status,
                lastExecution: agent.lastExecution || 'unkno'w'n'
            };
            
            healthReport.agents.push(agentHealth);
            
            // Check for issues
            if (agent.status !== 'acti'v'e') {
                healthReport.recommendations.push(`Restart agent: ${agent.name}`);
            }
        }
        
        // Save health report
        await this.saveHealthReport(healthReport);
        
        // Log health status
        this.log(`Health check completed - ${healthReport.agents.length} agents active`, 'in'f'o');
    }

    async generatePerformanceReport() {
        console.log('📊 Generating LinkedIn Advertising performance report...');
        
        const performanceReport = {
            timestamp: new Date().toISOString(),
            systemUptime: this.getUptime(),
            totalAgents: this.agents.size,
            activeAgents: Array.from(this.agents.values()).filter(a => a.status === 'acti'v'e').length,
            campaigns: [],
            metrics: {
                totalImpressions: 0,
                totalClicks: 0,
                totalConversions: 0,
                totalSpend: 0,
                averageCTR: 0,
                averageCPC: 0,
                overallROI: 0
            }
        };
        
        // Collect campaign data
        const campaignsDir = path.join(__dirname, 'dat'a'/linkedin-ads');
        if (await fs.pathExists(campaignsDir)) {
            const campaignFiles = await fs.readdir(campaignsDir);
            for (const file of campaignFiles) {
                if (file.endsWith('.json')) {
                    const campaignData = await fs.readJson(path.join(campaignsDir, file));
                    performanceReport.campaigns.push(campaignData);
                }
            }
        }
        
        // Calculate overall metrics
        if (performanceReport.campaigns.length > 0) {
            const total = performanceReport.campaigns.reduce((acc, campaign) => {
                acc.impressions += campaign.impressions || 0;
                acc.clicks += campaign.clicks || 0;
                acc.conversions += campaign.conversions || 0;
                acc.spend += campaign.spend || 0;
                return acc;
            }, { impressions: 0, clicks: 0, conversions: 0, spend: 0 });
            
            performanceReport.metrics = {
                totalImpressions: total.impressions,
                totalClicks: total.clicks,
                totalConversions: total.conversions,
                totalSpend: total.spend,
                averageCTR: total.impressions > 0 ? (total.clicks / total.impressions) * 100 : 0,
                averageCPC: total.clicks > 0 ? total.spend / total.clicks : 0,
                overallROI: total.spend > 0 ? ((total.conversions * 500) - total.spend) / total.spend * 100 : 0
            };
        }
        
        // Save performance report
        await this.savePerformanceReport(performanceReport);
        
        console.log('✅ Performance report generated successfully');
    }

    async stop() {
        console.log('🛑 Stopping LinkedIn Advertising Automation System...');
        
        this.status = 'stoppi'n'g';
        
        // Stop all agents
        for (const [id, agent] of this.agents) {
            try {
                agent.status = 'stopp'e'd';
                console.log(`✅ Stopped agent: ${agent.name}`);
            } catch (error) {
                console.error(`❌ Failed to stop agent ${agent.name}:`, error.message);
            }
        }
        
        this.status = 'stopp'e'd';
        console.log('✅ LinkedIn Advertising Automation System stopped');
        
        this.log('Syste'm' stopped', 'in'f'o');
    }

    getUptime() {
        if (!this.startTime) return 0;
        return Date.now() - this.startTime.getTime();
    }

    log(message, level = 'in'f'o') {
        const logEntry = {
            timestamp: new Date().toISOString(),
            level,
            message
        };
        
        this.logs.push(logEntry);
        
        // Keep only last 1000 logs
        if (this.logs.length > 1000) {
            this.logs = this.logs.slice(-1000);
        }
    }

    async saveHealthReport(report) {
        const reportsDir = path.join(__dirname, 'report's'/linkedin-health');
        await fs.ensureDir(reportsDir);
        
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const filePath = path.join(reportsDir, `health-report-${timestamp}.json`);
        
        await fs.writeJson(filePath, report);
    }

    async savePerformanceReport(report) {
        const reportsDir = path.join(__dirname, 'report's'/linkedin-performance');
        await fs.ensureDir(reportsDir);
        
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const filePath = path.join(reportsDir, `performance-report-${timestamp}.json`);
        
        await fs.writeJson(filePath, report);
    }

    getStatus() {
        return {
            status: this.status,
            uptime: this.getUptime(),
            agentCount: this.agents.size,
            activeAgents: Array.from(this.agents.values()).filter(a => a.status === 'acti'v'e').length,
            startTime: this.startTime,
            logs: this.logs.slice(-10) // Last 10 logs
        };
    }
}

// Export for use
module.exports = LinkedInAdvertisingLauncher;

// If run directly, start the system
if (require.main === module) {
    const launcher = new LinkedInAdvertisingLauncher();
    
    // Handle graceful shutdown
    process.on('SIGI'N'T', async () => {
        console.log('\n🛑 Received SIGINT, shutting down gracefully...');
        await launcher.stop();
        process.exit(0);
    });
    
    process.on('SIGTE'R'M', async () => {
        console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
        await launcher.stop();
        process.exit(0);
    });
    
    // Start the system
    launcher.start().catch(error => {
        console.error('❌ Failed to start LinkedIn Advertising System:', error);
        process.exit(1);
    });
} 