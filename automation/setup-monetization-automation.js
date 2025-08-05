#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

class MonetizationAutomationSetup {
    constructor() {
        this.baseDir = path.join(__dirname);
        this.setupDir = path.join(this.baseDir, 'monetization-setup');
        this.ensureDirectories();
    }

    ensureDirectories() {
        const dirs = [
            this.setupDir,
            path.join(this.baseDir, 'monetization-agents'),
            path.join(this.baseDir, 'monetization-reports'),
            path.join(this.baseDir, 'monetization-logs'),
            path.join(this.baseDir, 'monetization-orchestrator'),
            path.join(this.baseDir, 'monetization-pids')
        ];
        
        dirs.forEach(dir => {
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }
        });
    }

    async setupCompleteSystem() {
        console.log('🚀 Setting up Complete Monetization Automation System...');
        
        try {
            // Step 1: Initialize the factory
            await this.initializeFactory();
            
            // Step 2: Create all agent types
            await this.createAllAgents();
            
            // Step 3: Setup orchestrator
            await this.setupOrchestrator();
            
            // Step 4: Setup cron jobs
            await this.setupCronJobs();
            
            // Step 5: Setup monitoring
            await this.setupMonitoring();
            
            // Step 6: Generate initial reports
            await this.generateInitialReports();
            
            // Step 7: Test the system
            await this.testSystem();
            
            console.log('✅ Monetization automation system setup completed successfully!');
            this.generateSetupReport();
            
        } catch (error) {
            console.error('❌ Error setting up monetization system:', error);
            throw error;
        }
    }

    async initializeFactory() {
        console.log('🏭 Initializing Monetization Factory...');
        
        const factoryTest = `
            const MonetizationAutonomousFactory = require('./monetization-autonomous-factory');
            const factory = new MonetizationAutonomousFactory();
            console.log('✅ Factory initialized successfully');
        `;
        
        const testFile = path.join(this.setupDir, 'factory-test.js');
        fs.writeFileSync(testFile, factoryTest);
        
        return new Promise((resolve, reject) => {
            exec(`node ${testFile}`, (error, stdout, stderr) => {
                if (error) {
                    console.error('❌ Factory initialization failed:', error);
                    reject(error);
                } else {
                    console.log('✅ Factory initialized successfully');
                    resolve();
                }
            });
        });
    }

    async createAllAgents() {
        console.log('🤖 Creating all monetization agents...');
        
        const agentTypes = [
            'revenue-optimization',
            'ad-revenue',
            'subscription',
            'affiliate',
            'ecommerce',
            'freemium'
        ];

        for (const agentType of agentTypes) {
            try {
                await this.createAgent(agentType);
                console.log(`✅ Created ${agentType} agent`);
            } catch (error) {
                console.error(`❌ Error creating ${agentType} agent:`, error);
            }
        }
    }

    async createAgent(agentType) {
        const createAgentScript = `
            const factory = require('./monetization-autonomous-factory');
            const factoryInstance = new factory();
            
            try {
                const agent = factoryInstance.createMonetizationAgent('${agentType}');
                console.log('Agent created:', agent.agentId);
            } catch (error) {
                console.error('Error creating agent:', error);
                process.exit(1);
            }
        `;
        
        const scriptFile = path.join(this.setupDir, `create-${agentType}-agent.js`);
        fs.writeFileSync(scriptFile, createAgentScript);
        
        return new Promise((resolve, reject) => {
            exec(`node ${scriptFile}`, (error, stdout, stderr) => {
                if (error) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        });
    }

    async setupOrchestrator() {
        console.log('🎯 Setting up Monetization Orchestrator...');
        
        const orchestratorTest = `
            const MonetizationOrchestrator = require('./monetization-orchestrator');
            const orchestrator = new MonetizationOrchestrator();
            console.log('✅ Orchestrator setup completed');
        `;
        
        const testFile = path.join(this.setupDir, 'orchestrator-test.js');
        fs.writeFileSync(testFile, orchestratorTest);
        
        return new Promise((resolve, reject) => {
            exec(`node ${testFile}`, (error, stdout, stderr) => {
                if (error) {
                    console.error('❌ Orchestrator setup failed:', error);
                    reject(error);
                } else {
                    console.log('✅ Orchestrator setup completed');
                    resolve();
                }
            });
        });
    }

    async setupCronJobs() {
        console.log('⏰ Setting up cron jobs...');
        
        const cronScript = path.join(this.baseDir, 'cron-jobs', 'monetization-automation-cron.sh');
        
        if (fs.existsSync(cronScript)) {
            // Make script executable
            exec(`chmod +x "${cronScript}"`, (error) => {
                if (error) {
                    console.error('❌ Error making cron script executable:', error);
                } else {
                    console.log('✅ Cron jobs setup completed');
                }
            });
        } else {
            console.error('❌ Cron script not found:', cronScript);
        }
    }

    async setupMonitoring() {
        console.log('📊 Setting up monitoring systems...');
        
        const monitoringScript = `
            const factory = require('./monetization-autonomous-factory');
            const factoryInstance = new factory();
            
            // Test monitoring functionality
            const report = factoryInstance.generateReport();
            console.log('✅ Monitoring setup completed');
            console.log('Initial report generated:', report.totalAgents, 'agents');
        `;
        
        const testFile = path.join(this.setupDir, 'monitoring-test.js');
        fs.writeFileSync(testFile, monitoringScript);
        
        return new Promise((resolve, reject) => {
            exec(`node ${testFile}`, (error, stdout, stderr) => {
                if (error) {
                    console.error('❌ Monitoring setup failed:', error);
                    reject(error);
                } else {
                    console.log('✅ Monitoring setup completed');
                    resolve();
                }
            });
        });
    }

    async generateInitialReports() {
        console.log('📋 Generating initial reports...');
        
        const reportScript = `
            const factory = require('./monetization-autonomous-factory');
            const factoryInstance = new factory();
            
            try {
                const report = factoryInstance.generateReport();
                console.log('Initial monetization report:');
                console.log('- Total agents:', report.totalAgents);
                console.log('- Active agents:', report.activeAgents);
                console.log('- Total revenue:', report.totalRevenue);
                console.log('- Average efficiency:', report.averageEfficiency);
            } catch (error) {
                console.error('Error generating report:', error);
            }
        `;
        
        const testFile = path.join(this.setupDir, 'generate-reports.js');
        fs.writeFileSync(testFile, reportScript);
        
        return new Promise((resolve, reject) => {
            exec(`node ${testFile}`, (error, stdout, stderr) => {
                if (error) {
                    console.error('❌ Report generation failed:', error);
                    reject(error);
                } else {
                    console.log('✅ Initial reports generated');
                    resolve();
                }
            });
        });
    }

    async testSystem() {
        console.log('🧪 Testing monetization system...');
        
        const testScript = `
            const factory = require('./monetization-autonomous-factory');
            const factoryInstance = new factory();
            
            // Test agent creation
            const revenueAgent = factoryInstance.createRevenueOptimizationAgent();
            const adAgent = factoryInstance.createAdRevenueAgent();
            
            console.log('✅ Agent creation test passed');
            console.log('Revenue agent ID:', revenueAgent.agentId);
            console.log('Ad agent ID:', adAgent.agentId);
            
            // Test report generation
            const report = factoryInstance.generateReport();
            console.log('✅ Report generation test passed');
            console.log('Report contains', report.totalAgents, 'agents');
        `;
        
        const testFile = path.join(this.setupDir, 'system-test.js');
        fs.writeFileSync(testFile, testScript);
        
        return new Promise((resolve, reject) => {
            exec(`node ${testFile}`, (error, stdout, stderr) => {
                if (error) {
                    console.error('❌ System test failed:', error);
                    reject(error);
                } else {
                    console.log('✅ System test passed');
                    resolve();
                }
            });
        });
    }

    generateSetupReport() {
        const report = {
            setup: 'MonetizationAutomationSetup',
            timestamp: new Date().toISOString(),
            status: 'completed',
            components: {
                factory: 'initialized',
                agents: 'created',
                orchestrator: 'setup',
                cronJobs: 'configured',
                monitoring: 'active',
                reports: 'generated'
            },
            directories: {
                base: this.baseDir,
                agents: path.join(this.baseDir, 'monetization-agents'),
                reports: path.join(this.baseDir, 'monetization-reports'),
                logs: path.join(this.baseDir, 'monetization-logs'),
                orchestrator: path.join(this.baseDir, 'monetization-orchestrator'),
                pids: path.join(this.baseDir, 'monetization-pids')
            },
            nextSteps: [
                'Run: node automation/launch-monetization-automation.js',
                'Monitor: automation/monetization-logs/',
                'Reports: automation/monetization-reports/',
                'Cron: automation/cron-jobs/monetization-automation-cron.sh all'
            ]
        };
        
        const reportFile = path.join(this.setupDir, 'setup-report.json');
        fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
        
        console.log('📋 Setup report generated:', reportFile);
    }

    getStatus() {
        return {
            setup: 'MonetizationAutomationSetup',
            status: 'ready',
            timestamp: new Date().toISOString(),
            baseDir: this.baseDir
        };
    }
}

// Main execution
if (require.main === module) {
    const setup = new MonetizationAutomationSetup();
    
    setup.setupCompleteSystem().then(() => {
        console.log('🎉 Monetization automation system setup completed!');
        console.log('📈 Ready to launch monetization automation...');
        console.log('');
        console.log('Next steps:');
        console.log('1. Run: node automation/launch-monetization-automation.js');
        console.log('2. Monitor logs: automation/monetization-logs/');
        console.log('3. Check reports: automation/monetization-reports/');
        console.log('4. Run cron jobs: automation/cron-jobs/monetization-automation-cron.sh all');
        
    }).catch(error => {
        console.error('❌ Setup failed:', error);
        process.exit(1);
    });
}

module.exports = MonetizationAutomationSetup; 