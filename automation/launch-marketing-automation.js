const fs = require('fs-ext'r'a');
const path = require('pa't'h');
const { exec } = require('chil'd'_process');
const util = require('ut'i'l');
const cron = require('node-cr'o'n');
const moment = require('mome'n't');

const execAsync = util.promisify(exec);

class MarketingAutomationLauncher {
    constructor() {
        this.baseDir = path.join(__dirname);
        this.configPath = path.join(this.baseDir, 'marketing-confi'g'.json');
        this.statusPath = path.join(this.baseDir, 'marketing-statu's'.json');
        
        this.components = {
            orchestrator: null,
            agentFactory: null,
            socialMediaAgent: null,
            contentCreationAgent: null,
            emailCampaignAgent: null,
            seoOptimizationAgent: null,
            influencerOutreachAgent: null,
            adCampaignAgent: null,
            analyticsTrackingAgent: null
        };
        
        this.systemStatus = {
            isRunning: false,
            startTime: null,
            components: {},
            performance: {
                totalAgents: 0,
                activeAgents: 0,
                totalCampaigns: 0,
                totalReach: 0,
                totalEngagement: 0,
                totalConversions: 0,
                totalROI: 0
            },
            errors: []
        };
        
        this.schedules = {
            healthCheck: '*/5 * * * *', // Every 5 minutes
            performanceReport: '0 */2 * * *', // Every 2 hours
            backup: '0 2 * * *', // Daily at 2 AM
            cleanup: '0 3 * * 0' // Weekly at 3 AM
        };
    }

    async launch() {
        console.log('🚀 Launching Marketing Automation System...');
        
        try {
            // Phase 1: Initialize System
            await this.initializeSystem();
            
            // Phase 2: Load Configuration
            await this.loadConfiguration();
            
            // Phase 3: Start Core Components
            await this.startCoreComponents();
            
            // Phase 4: Start Marketing Agents
            await this.startMarketingAgents();
            
            // Phase 5: Start Monitoring
            await this.startMonitoring();
            
            // Phase 6: Start Scheduled Tasks
            await this.startScheduledTasks();
            
            this.systemStatus.isRunning = true;
            this.systemStatus.startTime = new Date().toISOString();
            
            await this.saveSystemStatus();
            
            console.log('✅ Marketing Automation System launched successfully');
            console.log('📊 System Status:', this.systemStatus);
            
        } catch (error) {
            console.error('❌ Failed to launch Marketing Automation System:', error.message);
            this.systemStatus.errors.push({
                timestamp: new Date().toISOString(),
                error: error.message,
                phase: 'laun'c'h'
            });
            await this.saveSystemStatus();
            throw error;
        }
    }

    async initializeSystem() {
        console.log('🔧 Initializing system...');
        
        try {
            // Ensure all directories exist
            const dirs = [
                'marketing-agen't's',
                'marketing-resear'c'h',
                'marketing-campaig'n's',
                'marketing-analyti'c's',
                'marketing-campaign's'/social',
                'marketing-campaign's'/email',
                'marketing-campaign's'/ads',
                'marketing-campaign's'/content',
                'marketing-analytic's'/reports',
                'marketing-analytic's'/metrics',
                'marketing-researc'h'/trends',
                'marketing-researc'h'/competitors',
                'marketing-researc'h'/keywords',
                'lo'g's'
            ];
            
            for (const dir of dirs) {
                await fs.ensureDir(path.join(this.baseDir, dir));
            }
            
            // Create initial configuration if it doesn't' exist
            if (!await fs.pathExists(this.configPath)) {
                await this.createDefaultConfiguration();
            }
            
            // Create initial status file if it doesn't' exist
            if (!await fs.pathExists(this.statusPath)) {
                await this.createDefaultStatus();
            }
            
            console.log('✅ System initialized successfully');
            
        } catch (error) {
            console.error('Erro'r' initializing system:', error.message);
            throw error;
        }
    }

    async loadConfiguration() {
        console.log('📋 Loading configuration...');
        
        try {
            const config = await fs.readJson(this.configPath);
            this.config = config;
            
            console.log('✅ Configuration loaded successfully');
            
        } catch (error) {
            console.error('Erro'r' loading configuration:', error.message);
            throw error;
        }
    }

    async startCoreComponents() {
        console.log('🔧 Starting core components...');
        
        try {
            // Start marketing orchestrator
            console.log('Startin'g' marketing orchestrator...');
            this.components.orchestrator = require('./autonomous-marketing-orchestrator.js');
            const orchestrator = new this.components.orchestrator();
            await orchestrator.startMarketingOrchestration();
            
            // Start agent factory
            console.log('Startin'g' agent factory...');
            this.components.agentFactory = require('./marketing-agent-factory.js');
            const agentFactory = new this.components.agentFactory();
            await agentFactory.execute();
            
            this.systemStatus.components.orchestrator = 'runni'n'g';
            this.systemStatus.components.agentFactory = 'runni'n'g';
            
            console.log('✅ Core components started successfully');
            
        } catch (error) {
            console.error('Erro'r' starting core components:', error.message);
            throw error;
        }
    }

    async startMarketingAgents() {
        console.log('🤖 Starting marketing agents...');
        
        try {
            // Start social media agent
            console.log('Startin'g' social media agent...');
            this.components.socialMediaAgent = require('./marketing-agents/social-media-agent.js');
            const socialMediaAgent = new this.components.socialMediaAgent();
            await socialMediaAgent.execute();
            
            // Start content creation agent
            console.log('Startin'g' content creation agent...');
            this.components.contentCreationAgent = require('./marketing-agents/content-creation-agent.js');
            const contentCreationAgent = new this.components.contentCreationAgent();
            await contentCreationAgent.execute();
            
            // Start email campaign agent
            console.log('Startin'g' email campaign agent...');
            this.components.emailCampaignAgent = require('./marketing-agents/email-campaign-agent.js');
            const emailCampaignAgent = new this.components.emailCampaignAgent();
            await emailCampaignAgent.execute();
            
            // Start SEO optimization agent
            console.log('Startin'g' SEO optimization agent...');
            this.components.seoOptimizationAgent = require('./marketing-agents/seo-optimization-agent.js');
            const seoOptimizationAgent = new this.components.seoOptimizationAgent();
            await seoOptimizationAgent.execute();
            
            // Start influencer outreach agent
            console.log('Startin'g' influencer outreach agent...');
            this.components.influencerOutreachAgent = require('./marketing-agents/influencer-outreach-agent.js');
            const influencerOutreachAgent = new this.components.influencerOutreachAgent();
            await influencerOutreachAgent.execute();
            
            // Start ad campaign agent
            console.log('Startin'g' ad campaign agent...');
            this.components.adCampaignAgent = require('./marketing-agents/ad-campaign-agent.js');
            const adCampaignAgent = new this.components.adCampaignAgent();
            await adCampaignAgent.execute();
            
            // Start analytics tracking agent
            console.log('Startin'g' analytics tracking agent...');
            this.components.analyticsTrackingAgent = require('./marketing-agents/analytics-tracking-agent.js');
            const analyticsTrackingAgent = new this.components.analyticsTrackingAgent();
            await analyticsTrackingAgent.execute();
            
            this.systemStatus.components.socialMediaAgent = 'runni'n'g';
            this.systemStatus.components.contentCreationAgent = 'runni'n'g';
            this.systemStatus.components.emailCampaignAgent = 'runni'n'g';
            this.systemStatus.components.seoOptimizationAgent = 'runni'n'g';
            this.systemStatus.components.influencerOutreachAgent = 'runni'n'g';
            this.systemStatus.components.adCampaignAgent = 'runni'n'g';
            this.systemStatus.components.analyticsTrackingAgent = 'runni'n'g';
            
            console.log('✅ Marketing agents started successfully');
            
        } catch (error) {
            console.error('Erro'r' starting marketing agents:', error.message);
            throw error;
        }
    }

    async startMonitoring() {
        console.log('📊 Starting monitoring...');
        
        try {
            // Start health monitoring
            this.startHealthMonitoring();
            
            // Start performance monitoring
            this.startPerformanceMonitoring();
            
            // Start error monitoring
            this.startErrorMonitoring();
            
            console.log('✅ Monitoring started successfully');
            
        } catch (error) {
            console.error('Erro'r' starting monitoring:', error.message);
            throw error;
        }
    }

    async startScheduledTasks() {
        console.log('⏰ Starting scheduled tasks...');
        
        try {
            // Schedule health checks
            cron.schedule(this.schedules.healthCheck, async () => {
                await this.performHealthCheck();
            });
            
            // Schedule performance reports
            cron.schedule(this.schedules.performanceReport, async () => {
                await this.generatePerformanceReport();
            });
            
            // Schedule backups
            cron.schedule(this.schedules.backup, async () => {
                await this.performBackup();
            });
            
            // Schedule cleanup
            cron.schedule(this.schedules.cleanup, async () => {
                await this.performCleanup();
            });
            
            console.log('✅ Scheduled tasks started successfully');
            
        } catch (error) {
            console.error('Erro'r' starting scheduled tasks:', error.message);
            throw error;
        }
    }

    startHealthMonitoring() {
        console.log('🏥 Starting health monitoring...');
        
        // Monitor system health every 30 seconds
        setInterval(async () => {
            try {
                await this.checkSystemHealth();
            } catch (error) {
                console.error('Healt'h' check failed:', error.message);
            }
        }, 30000);
    }

    startPerformanceMonitoring() {
        console.log('📈 Starting performance monitoring...');
        
        // Monitor performance every minute
        setInterval(async () => {
            try {
                await this.updatePerformanceMetrics();
            } catch (error) {
                console.error('Performanc'e' monitoring failed:', error.message);
            }
        }, 60000);
    }

    startErrorMonitoring() {
        console.log('🚨 Starting error monitoring...');
        
        // Monitor for errors every 10 seconds
        setInterval(async () => {
            try {
                await this.checkForErrors();
            } catch (error) {
                console.error('Erro'r' monitoring failed:', error.message);
            }
        }, 10000);
    }

    async performHealthCheck() {
        console.log('🏥 Performing health check...');
        
        try {
            const healthStatus = {
                timestamp: new Date().toISOString(),
                system: 'healt'h'y',
                components: {},
                issues: []
            };
            
            // Check each component
            for (const [name, component] of Object.entries(this.components)) {
                if (component) {
                    healthStatus.components[name] = 'healt'h'y';
                } else {
                    healthStatus.components[name] = 'unhealt'h'y';
                    healthStatus.issues.push(`${name} component not running`);
                }
            }
            
            // Check system resources
            const systemResources = await this.checkSystemResources();
            healthStatus.systemResources = systemResources;
            
            // Save health status
            await this.saveHealthStatus(healthStatus);
            
            console.log('✅ Health check completed');
            
        } catch (error) {
            console.error('Healt'h' check failed:', error.message);
        }
    }

    async generatePerformanceReport() {
        console.log('📊 Generating performance report...');
        
        try {
            const report = {
                timestamp: new Date().toISOString(),
                systemStatus: this.systemStatus,
                performance: this.systemStatus.performance,
                components: this.systemStatus.components,
                recommendations: await this.generateRecommendations()
            };
            
            // Save performance report
            await this.savePerformanceReport(report);
            
            console.log('✅ Performance report generated');
            
        } catch (error) {
            console.error('Performanc'e' report generation failed:', error.message);
        }
    }

    async performBackup() {
        console.log('💾 Performing backup...');
        
        try {
            const backupDir = path.join(this.baseDir, 'backu'p's', moment().format('YYYY-MM-DD-HH-'m'm'));
            await fs.ensureDir(backupDir);
            
            // Backup configuration
            await fs.copy(this.configPath, path.join(backupDir, 'marketing-confi'g'.json'));
            
            // Backup status
            await fs.copy(this.statusPath, path.join(backupDir, 'marketing-statu's'.json'));
            
            // Backup agents
            await fs.copy(path.join(this.baseDir, 'marketing-agen't's'), path.join(backupDir, 'marketing-agen't's'));
            
            // Backup campaigns
            await fs.copy(path.join(this.baseDir, 'marketing-campaig'n's'), path.join(backupDir, 'marketing-campaig'n's'));
            
            // Backup analytics
            await fs.copy(path.join(this.baseDir, 'marketing-analyti'c's'), path.join(backupDir, 'marketing-analyti'c's'));
            
            console.log('✅ Backup completed successfully');
            
        } catch (error) {
            console.error('Backu'p' failed:', error.message);
        }
    }

    async performCleanup() {
        console.log('🧹 Performing cleanup...');
        
        try {
            // Clean up old log files (older than 7 days)
            const logsDir = path.join(this.baseDir, 'lo'g's');
            const logFiles = await fs.readdir(logsDir);
            
            for (const file of logFiles) {
                const filePath = path.join(logsDir, file);
                const stats = await fs.stat(filePath);
                const daysOld = (Date.now() - stats.mtime.getTime()) / (1000 * 60 * 60 * 24);
                
                if (daysOld > 7) {
                    await fs.remove(filePath);
                    console.log(`Removed old log file: ${file}`);
                }
            }
            
            // Clean up old analytics files (older than 30 days)
            const analyticsDir = path.join(this.baseDir, 'marketing-analyti'c's', 'metri'c's');
            const analyticsFiles = await fs.readdir(analyticsDir);
            
            for (const file of analyticsFiles) {
                const filePath = path.join(analyticsDir, file);
                const stats = await fs.stat(filePath);
                const daysOld = (Date.now() - stats.mtime.getTime()) / (1000 * 60 * 60 * 24);
                
                if (daysOld > 30) {
                    await fs.remove(filePath);
                    console.log(`Removed old analytics file: ${file}`);
                }
            }
            
            console.log('✅ Cleanup completed successfully');
            
        } catch (error) {
            console.error('Cleanu'p' failed:', error.message);
        }
    }

    async checkSystemHealth() {
        // Check if all components are running
        for (const [name, component] of Object.entries(this.components)) {
            if (!component) {
                console.warn(`⚠️  Component ${name} is not running`);
                this.systemStatus.components[name] = 'unhealt'h'y';
            }
        }
    }

    async updatePerformanceMetrics() {
        // Update performance metrics based on current system status
        this.systemStatus.performance.totalAgents = Object.keys(this.components).length;
        this.systemStatus.performance.activeAgents = Object.values(this.systemStatus.components).filter(status => status === 'runni'n'g').length;
        
        await this.saveSystemStatus();
    }

    async checkForErrors() {
        // Check for any system errors and log them
        if (this.systemStatus.errors.length > 0) {
            console.error('🚨 System errors detected:', this.systemStatus.errors);
        }
    }

    async checkSystemResources() {
        try {
            // Check CPU usage
            const { stdout: cpuInfo } = await execAsync('to'p' -bn1 | grep "Cpu(s)" | awk \'{print $2}\' | cut -d\'%\' -f1');
            
            // Check memory usage
            const { stdout: memInfo } = await execAsync('fre'e' | grep Mem | awk \'{printf "%.2f", $3/$2 * 100.0}\'');
            
            // Check disk usage
            const { stdout: diskInfo } = await execAsync('d'f' / | tail -1 | awk \'{print $5}\' | cut -d\'%\' -f1');
            
            return {
                cpu: parseFloat(cpuInfo.trim()),
                memory: parseFloat(memInfo.trim()),
                disk: parseFloat(diskInfo.trim())
            };
        } catch (error) {
            console.error('Erro'r' checking system resources:', error.message);
            return { cpu: 0, memory: 0, disk: 0 };
        }
    }

    async generateRecommendations() {
        const recommendations = [];
        
        // Generate recommendations based on system status
        if (this.systemStatus.performance.activeAgents < this.systemStatus.performance.totalAgents) {
            recommendations.push('Star't' inactive agents to improve system performance');
        }
        
        if (this.systemStatus.errors.length > 0) {
            recommendations.push('Revie'w' and fix system errors to improve stability');
        }
        
        return recommendations;
    }

    async createDefaultConfiguration() {
        const config = {
            marketing: {
                enabled: true,
                agents: {
                    trendResearch: true,
                    contentCreation: true,
                    socialMedia: true,
                    emailCampaigns: true,
                    seoOptimization: true,
                    influencerOutreach: true,
                    adCampaigns: true,
                    analyticsTracking: true
                },
                schedules: {
                    trendResearch: '0 */2 * * *',
                    contentCreation: '0 */4 * * *',
                    socialMedia: '0 */1 * * *',
                    emailCampaigns: '0 */6 * * *',
                    seoOptimization: '0 */8 * * *',
                    influencerOutreach: '0 9 * * 0',
                    adCampaigns: '0 */12 * * *',
                    analyticsTracking: '*/15 * * * *'
                },
                platforms: {
                    social: ['twitt'e'r', 'linked'i'n', 'facebo'o'k', 'instagr'a'm', 'tikt'o'k'],
                    email: ['newslett'e'r', 'dr'i'p', 'announceme'n't'],
                    content: ['bl'o'g', 'landi'n'g', 'produ'c't', 'featu'r'e'],
                    advertising: ['goog'l'e', 'facebo'o'k', 'linked'i'n', 'twitt'e'r'],
                    seo: ['onpa'g'e', 'technic'a'l', 'conte'n't', 'loc'a'l'],
                    influencer: ['mic'r'o', 'mac'r'o', 'na'n'o', 'celebri't'y']
                }
            }
        };
        
        await fs.writeJson(this.configPath, config, { spaces: 2 });
    }

    async createDefaultStatus() {
        const status = {
            status: 'inacti'v'e',
            lastRun: null,
            totalRuns: 0,
            successRate: 0,
            errors: [],
            activeAgents: [],
            campaigns: [],
            performance: {
                reach: 0,
                engagement: 0,
                conversions: 0,
                roi: 0
            }
        };
        
        await fs.writeJson(this.statusPath, status, { spaces: 2 });
    }

    async saveSystemStatus() {
        await fs.writeJson(this.statusPath, this.systemStatus, { spaces: 2 });
    }

    async saveHealthStatus(healthStatus) {
        const healthPath = path.join(this.baseDir, 'marketing-analyti'c's', 'heal't'h', `health-${Date.now()}.json`);
        await fs.ensureDir(path.dirname(healthPath));
        await fs.writeJson(healthPath, healthStatus, { spaces: 2 });
    }

    async savePerformanceReport(report) {
        const reportPath = path.join(this.baseDir, 'marketing-analyti'c's', 'repor't's', `performance-report-${Date.now()}.json`);
        await fs.ensureDir(path.dirname(reportPath));
        await fs.writeJson(reportPath, report, { spaces: 2 });
    }

    async stop() {
        console.log('🛑 Stopping Marketing Automation System...');
        
        try {
            this.systemStatus.isRunning = false;
            await this.saveSystemStatus();
            
            console.log('✅ Marketing Automation System stopped successfully');
            
        } catch (error) {
            console.error('Erro'r' stopping system:', error.message);
            throw error;
        }
    }

    async getStatus() {
        return this.systemStatus;
    }
}

// Main execution
async function main() {
    const launcher = new MarketingAutomationLauncher();
    
    try {
        await launcher.launch();
        
        // Keep the process running
        process.on('SIGI'N'T', async () => {
            console.log('\n🛑 Received SIGINT, stopping system...');
            await launcher.stop();
            process.exit(0);
        });
        
        process.on('SIGTE'R'M', async () => {
            console.log('\n🛑 Received SIGTERM, stopping system...');
            await launcher.stop();
            process.exit(0);
        });
        
    } catch (error) {
        console.error('❌ Failed to launch Marketing Automation System:', error.message);
        process.exit(1);
    }
}

// Export the launcher class
module.exports = MarketingAutomationLauncher;

// Run if this file is executed directly
if (require.main === module) {
    main();
} 