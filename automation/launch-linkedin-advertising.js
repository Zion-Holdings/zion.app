const LinkedInAdvertisingFactory = require('./linkedin-advertising-factory');
const LinkedInAdManagerAgent = require('./agents/linkedin-ad-manager-agent');
const LinkedInContentCreatorAgent = require('./agents/linkedin-content-creator-agent');
const LinkedInAnalyticsAgent = require('./agents/linkedin-analytics-agent');
const fs = require('fs-extra');
const path = require('path');

class LinkedInAdvertisingLauncher {
    constructor() {
        this.factory = new LinkedInAdvertisingFactory();
        this.agents = new Map();
        this.status = 'stopped';
    }

    async start() {
        console.log('🚀 Starting LinkedIn Advertising Automation System...');
        
        try {
            // Create necessary directories
            await this.createDirectories();
            
            // Initialize agents
            await this.initializeAgents();
            
            // Start factory
            await this.startFactory();
            
            // Start continuous operation
            this.startContinuousOperation();
            
            this.status = 'running';
            console.log('✅ LinkedIn Advertising System started successfully');
            
        } catch (error) {
            console.error('❌ Failed to start LinkedIn Advertising System:', error);
            throw error;
        }
    }

    async createDirectories() {
        const directories = [
            'data/linkedin-ads',
            'data/linkedin-content',
            'data/linkedin-analytics',
            'data/linkedin-assets',
            'data/linkedin-ab-tests',
            'data/linkedin-optimizations',
            'reports/linkedin-roi',
            'logs/linkedin-advertising'
        ];
        
        for (const dir of directories) {
            await fs.ensureDir(path.join(__dirname, dir));
        }
    }

    async initializeAgents() {
        console.log('🤖 Initializing LinkedIn advertising agents...');
        
        // Initialize Ad Manager Agent
        const adManagerAgent = new LinkedInAdManagerAgent();
        this.agents.set('ad-manager', adManagerAgent);
        
        // Initialize Content Creator Agent
        const contentCreatorAgent = new LinkedInContentCreatorAgent();
        this.agents.set('content-creator', contentCreatorAgent);
        
        // Initialize Analytics Agent
        const analyticsAgent = new LinkedInAnalyticsAgent();
        this.agents.set('analytics', analyticsAgent);
        
        console.log(`✅ Initialized ${this.agents.size} LinkedIn advertising agents`);
    }

    async startFactory() {
        console.log('🏭 Starting LinkedIn Advertising Factory...');
        await this.factory.execute();
    }

    startContinuousOperation() {
        console.log('🔄 Starting continuous LinkedIn advertising operation...');
        
        // Start factory continuous operation
        this.factory.startContinuousOperation();
        
        // Start agent continuous operations
        for (const [name, agent] of this.agents) {
            agent.startContinuousOperation();
        }
    }

    async stop() {
        console.log('🛑 Stopping LinkedIn Advertising System...');
        
        this.status = 'stopped';
        
        // Stop all agents
        for (const [name, agent] of this.agents) {
            agent.status = 'stopped';
        }
        
        console.log('✅ LinkedIn Advertising System stopped');
    }

    getStatus() {
        return {
            status: this.status,
            agents: Array.from(this.agents.keys()),
            factory: this.factory.status
        };
    }
}

// Auto-start if this file is run directly
if (require.main === module) {
    const launcher = new LinkedInAdvertisingLauncher();
    
    launcher.start().catch(error => {
        console.error('Failed to start LinkedIn Advertising System:', error);
        process.exit(1);
    });
    
    // Handle graceful shutdown
    process.on('SIGINT', async () => {
        console.log('\n🛑 Received SIGINT, shutting down gracefully...');
        await launcher.stop();
        process.exit(0);
    });
    
    process.on('SIGTERM', async () => {
        console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
        await launcher.stop();
        process.exit(0);
    });
}

module.exports = LinkedInAdvertisingLauncher; 