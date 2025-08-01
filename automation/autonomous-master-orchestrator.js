const fs = require('fs-extra');
const path = require('path');
const { exec } = require('child_process');
const util = require('util');
const cron = require('node-cron');
const { createValidComponentName, createDisplayTitle } = require('./utils/component-name-helper');

const execAsync = util.promisify(exec);

class AutonomousMasterOrchestrator {
    constructor() {
        this.agents = {
            marketResearch: require('./autonomous-market-research-agent.js'),
            solutionCreator: require('./autonomous-solution-creator-agent.js'),
            salesAgent: require('./autonomous-sales-agent.js'),
            agentCreator: require('./continuous-agent-creator.js'),
            contentGenerator: require('./continuous-content-generator.js')
        };
        
        this.workflow = {
            research: 'market-research',
            creation: 'solution-creation',
            sales: 'sales-campaign',
            agentCreation: 'agent-creation',
            contentGeneration: 'content-generation',
            deployment: 'deployment',
            monitoring: 'monitoring'
        };
        
        this.outputDir = path.join(__dirname, 'master-orchestrator');
        this.ensureOutputDirectory();
        
        this.systemStatus = {
            isRunning: false,
            currentPhase: null,
            lastRun: null,
            totalRuns: 0,
            successRate: 0,
            errors: [],
            agents: []
        };
        
        this.schedules = {
            marketResearch: '0 */6 * * *', // Every 6 hours
            solutionCreation: '0 */12 * * *', // Every 12 hours
            salesCampaign: '0 */8 * * *', // Every 8 hours
            agentCreation: '0 0 * * 0', // Weekly
            contentGeneration: '0 */2 * * *', // Every 2 hours
            deployment: '0 */4 * * *', // Every 4 hours
            monitoring: '*/30 * * * *' // Every 30 minutes
        };
    }

    async ensureOutputDirectory() {
        await fs.ensureDir(this.outputDir);
        await fs.ensureDir(path.join(this.outputDir, 'logs'));
        await fs.ensureDir(path.join(this.outputDir, 'reports'));
        await fs.ensureDir(path.join(this.outputDir, 'status'));
        await fs.ensureDir(path.join(this.outputDir, 'backups'));
        await fs.ensureDir(path.join(this.outputDir, 'agents'));
    }

    async startMasterOrchestration() {
        console.log('🚀 Starting Autonomous Master Orchestrator...');
        
        try {
            this.systemStatus.isRunning = true;
            this.systemStatus.lastRun = new Date().toISOString();
            this.systemStatus.totalRuns++;
            
            await this.logSystemEvent('Master orchestrator started');
            
            // Phase 1: Market Research
            const researchData = await this.executeMarketResearch();
            
            // Phase 2: Agent Creation
            const newAgents = await this.executeAgentCreation(researchData);
            
            // Phase 3: Solution Creation
            const solutions = await this.executeSolutionCreation(researchData);
            
            // Phase 4: Sales Campaign
            const campaigns = await this.executeSalesCampaign(solutions);
            
            // Phase 5: Content Generation
            const contentResults = await this.executeContentGeneration();
            
            // Phase 6: Deployment
            await this.executeDeployment(solutions, campaigns, contentResults);
            
            // Phase 7: Monitoring
            await this.executeMonitoring();
            
            // Generate comprehensive report
            await this.generateMasterReport(researchData, newAgents, solutions, campaigns, contentResults);
            
            this.systemStatus.isRunning = false;
            console.log('✅ Master orchestration completed successfully');
            
        } catch (error) {
            console.error('❌ Master orchestration failed:', error.message);
            this.systemStatus.errors.push({
                timestamp: new Date().toISOString(),
                error: error.message,
                phase: this.systemStatus.currentPhase
            });
            this.systemStatus.isRunning = false;
            throw error;
        }
    }

    async executeMarketResearch() {
        console.log('📊 Executing Market Research Phase...');
        this.systemStatus.currentPhase = this.workflow.research;
        
        try {
            const researchAgent = new this.agents.marketResearch();
            const researchData = await researchAgent.startResearch();
            
            await this.savePhaseData('market-research', researchData);
            await this.logSystemEvent('Market research completed', { dataPoints: Object.keys(researchData).length });
            
            return researchData;
        } catch (error) {
            await this.logSystemEvent('Market research failed', { error: error.message });
            throw error;
        }
    }

    async executeAgentCreation(researchData) {
        console.log('🤖 Executing Agent Creation Phase...');
        this.systemStatus.currentPhase = this.workflow.agentCreation;
        
        try {
            const agentCreator = new this.agents.agentCreator();
            const { newAgents, specializedAgents } = await agentCreator.startAgentCreation(researchData);
            
            const allAgents = [...newAgents, ...specializedAgents];
            await this.savePhaseData('agent-creation', allAgents);
            await this.logSystemEvent('Agent creation completed', { agentsCreated: allAgents.length });
            
            // Update system status with new agents
            this.systemStatus.agents = allAgents;
            
            return allAgents;
        } catch (error) {
            await this.logSystemEvent('Agent creation failed', { error: error.message });
            throw error;
        }
    }

    async executeSolutionCreation(researchData) {
        console.log('💡 Executing Solution Creation Phase...');
        this.systemStatus.currentPhase = this.workflow.creation;
        
        try {
            const solutionAgent = new this.agents.solutionCreator();
            const solutions = await solutionAgent.startSolutionCreation(researchData);
            
            await this.savePhaseData('solution-creation', solutions);
            await this.logSystemEvent('Solution creation completed', { solutionsCreated: solutions.length });
            
            return solutions;
        } catch (error) {
            await this.logSystemEvent('Solution creation failed', { error: error.message });
            throw error;
        }
    }

    async executeSalesCampaign(solutions) {
        console.log('📢 Executing Sales Campaign Phase...');
        this.systemStatus.currentPhase = this.workflow.sales;
        
        try {
            const salesAgent = new this.agents.salesAgent();
            const campaigns = await salesAgent.startSalesCampaign(solutions);
            
            await this.savePhaseData('sales-campaign', campaigns);
            await this.logSystemEvent('Sales campaign completed', { campaignsCreated: campaigns.length });
            
            return campaigns;
        } catch (error) {
            await this.logSystemEvent('Sales campaign failed', { error: error.message });
            throw error;
        }
    }

    async executeContentGeneration() {
        console.log('🎨 Executing Content Generation Phase...');
        this.systemStatus.currentPhase = this.workflow.contentGeneration;
        
        try {
            const contentGenerator = new this.agents.contentGenerator();
            const contentResults = await contentGenerator.startContentGeneration();
            
            await this.savePhaseData('content-generation', contentResults);
            await this.logSystemEvent('Content generation completed', { contentGenerated: contentResults.length });
            
            return contentResults;
        } catch (error) {
            await this.logSystemEvent('Content generation failed', { error: error.message });
            throw error;
        }
    }

    async executeDeployment(solutions, campaigns, contentResults) {
        console.log('🚀 Executing Deployment Phase...');
        this.systemStatus.currentPhase = this.workflow.deployment;
        
        try {
            // Deploy solutions to marketplace
            await this.deploySolutionsToMarketplace(solutions);
            
            // Deploy marketing content
            await this.deployMarketingContent(campaigns);
            
            // Deploy new agents
            await this.deployNewAgents();
            
            // Update website with new solutions
            await this.updateWebsiteWithSolutions(solutions);
            
            // Commit and push changes
            await this.commitAndPushChanges('Autonomous system update - new solutions and agents');
            
            await this.logSystemEvent('Deployment completed', { 
                solutionsDeployed: solutions.length,
                campaignsDeployed: campaigns.length 
            });
            
        } catch (error) {
            await this.logSystemEvent('Deployment failed', { error: error.message });
            throw error;
        }
    }

    async executeMonitoring() {
        console.log('📈 Executing Monitoring Phase...');
        this.systemStatus.currentPhase = this.workflow.monitoring;
        
        try {
            // Monitor system performance
            await this.monitorSystemPerformance();
            
            // Monitor solution performance
            await this.monitorSolutionPerformance();
            
            // Monitor sales performance
            await this.monitorSalesPerformance();
            
            // Monitor agent performance
            await this.monitorAgentPerformance();
            
            // Generate performance report
            await this.generatePerformanceReport();
            
            await this.logSystemEvent('Monitoring completed');
            
        } catch (error) {
            await this.logSystemEvent('Monitoring failed', { error: error.message });
            throw error;
        }
    }

    async deploySolutionsToMarketplace(solutions) {
        console.log('🏪 Deploying solutions to marketplace...');
        
        for (const solution of solutions) {
            try {
                // Create marketplace listing
                await this.createMarketplaceListing(solution);
                
                // Generate product page
                await this.generateProductPage(solution);
                
                // Update marketplace database
                await this.updateMarketplaceDatabase(solution);
                
                console.log(`✅ Deployed solution: ${solution.name}`);
            } catch (error) {
                console.error(`❌ Failed to deploy solution: ${solution.name}`, error.message);
            }
        }
    }

    async deployMarketingContent(campaigns) {
        console.log('📢 Deploying marketing content...');
        
        for (const campaign of campaigns) {
            try {
                // Deploy website content
                await this.deployWebsiteContent(campaign);
                
                // Deploy social media content
                await this.deploySocialMediaContent(campaign);
                
                // Deploy email campaigns
                await this.deployEmailCampaigns(campaign);
                
                console.log(`✅ Deployed campaign: ${campaign.solutionName}`);
            } catch (error) {
                console.error(`❌ Failed to deploy campaign: ${campaign.solutionName}`, error.message);
            }
        }
    }

    async deployNewAgents() {
        console.log('🤖 Deploying new agents...');
        
        const agents = await this.loadPhaseData('agent-creation');
        
        for (const agent of agents) {
            try {
                // Deploy agent to production
                await this.deployAgentToProduction(agent);
                
                // Schedule agent execution
                await this.scheduleAgentExecution(agent);
                
                console.log(`✅ Deployed agent: ${agent.name}`);
            } catch (error) {
                console.error(`❌ Failed to deploy agent: ${agent.name}`, error.message);
            }
        }
    }

    async deployAgentToProduction(agent) {
        const agentPath = path.join(__dirname, 'agents', 'production', `${agent.id}.js`);
        await fs.ensureDir(path.dirname(agentPath));
        
        // Copy agent file to production
        const sourcePath = path.join(__dirname, 'agents', 'generated', `${agent.id}.js`);
        if (await fs.pathExists(sourcePath)) {
            await fs.copy(sourcePath, agentPath);
        }
        
        // Save agent configuration
        const configPath = path.join(__dirname, 'agents', 'production', `${agent.id}-config.json`);
        await fs.writeJson(configPath, agent, { spaces: 2 });
    }

    async scheduleAgentExecution(agent) {
        const schedule = this.determineAgentSchedule(agent);
        
        cron.schedule(schedule, async () => {
            try {
                console.log(`🤖 Executing scheduled agent: ${agent.name}`);
                await this.executeAgent(agent);
            } catch (error) {
                console.error(`❌ Scheduled agent execution failed: ${agent.name}`, error.message);
            }
        });
        
        console.log(`📅 Scheduled agent: ${agent.name} with schedule: ${schedule}`);
    }

    determineAgentSchedule(agent) {
        const schedules = {
            'research': '0 */6 * * *', // Every 6 hours
            'content': '0 */12 * * *', // Every 12 hours
            'sales': '0 */8 * * *', // Every 8 hours
            'analytics': '*/30 * * * *', // Every 30 minutes
            'optimization': '*/15 * * * *', // Every 15 minutes
            'specialized': '0 */4 * * *' // Every 4 hours
        };
        
        return schedules[agent.type] || schedules.research;
    }

    async executeAgent(agent) {
        try {
            const AgentClass = require(path.join(__dirname, 'agents', 'production', `${agent.id}.js`));
            const agentInstance = new AgentClass();
            await agentInstance.startAgent();
        } catch (error) {
            console.error(`❌ Agent execution failed: ${agent.name}`, error.message);
        }
    }

    async updateWebsiteWithSolutions(solutions) {
        console.log('🌐 Updating website with new solutions...');
        
        try {
            // Update marketplace page
            await this.updateMarketplacePage(solutions);
            
            // Update product catalog
            await this.updateProductCatalog(solutions);
            
            // Update pricing pages
            await this.updatePricingPages(solutions);
            
            console.log('✅ Website updated successfully');
        } catch (error) {
            console.error('❌ Failed to update website:', error.message);
        }
    }

    async monitorSystemPerformance() {
        console.log('📊 Monitoring system performance...');
        
        const performance = {
            timestamp: new Date().toISOString(),
            cpu: await this.getCPUUsage(),
            memory: await this.getMemoryUsage(),
            disk: await this.getDiskUsage(),
            network: await this.getNetworkUsage(),
            activeAgents: this.systemStatus.agents.length
        };
        
        await this.saveMonitoringData('system-performance', performance);
    }

    async monitorSolutionPerformance() {
        console.log('📈 Monitoring solution performance...');
        
        const solutions = await this.loadPhaseData('solution-creation');
        const performance = {
            timestamp: new Date().toISOString(),
            totalSolutions: solutions.length,
            averageROI: this.calculateAverageROI(solutions),
            marketDistribution: this.calculateMarketDistribution(solutions),
            categoryDistribution: this.calculateCategoryDistribution(solutions)
        };
        
        await this.saveMonitoringData('solution-performance', performance);
    }

    async monitorSalesPerformance() {
        console.log('💰 Monitoring sales performance...');
        
        const campaigns = await this.loadPhaseData('sales-campaign');
        const performance = {
            timestamp: new Date().toISOString(),
            totalCampaigns: campaigns.length,
            totalBudget: campaigns.reduce((sum, c) => sum + c.budget.total, 0),
            averageExpectedROI: this.calculateAverageExpectedROI(campaigns),
            channelDistribution: this.calculateChannelDistribution(campaigns)
        };
        
        await this.saveMonitoringData('sales-performance', performance);
    }

    async monitorAgentPerformance() {
        console.log('🤖 Monitoring agent performance...');
        
        const agents = await this.loadPhaseData('agent-creation');
        const performance = {
            timestamp: new Date().toISOString(),
            totalAgents: agents.length,
            activeAgents: agents.filter(a => a.status === 'Active').length,
            byType: this.groupAgentsByType(agents),
            averagePerformance: this.calculateAverageAgentPerformance(agents)
        };
        
        await this.saveMonitoringData('agent-performance', performance);
    }

    async generatePerformanceReport() {
        console.log('📋 Generating performance report...');
        
        const systemPerformance = await this.loadMonitoringData('system-performance');
        const solutionPerformance = await this.loadMonitoringData('solution-performance');
        const salesPerformance = await this.loadMonitoringData('sales-performance');
        const agentPerformance = await this.loadMonitoringData('agent-performance');
        
        const report = {
            timestamp: new Date().toISOString(),
            system: systemPerformance,
            solutions: solutionPerformance,
            sales: salesPerformance,
            agents: agentPerformance,
            summary: this.generatePerformanceSummary(systemPerformance, solutionPerformance, salesPerformance, agentPerformance)
        };
        
        const reportPath = path.join(this.outputDir, 'reports', `performance-report-${Date.now()}.json`);
        await fs.writeJson(reportPath, report, { spaces: 2 });
        
        console.log(`📊 Performance report saved to: ${reportPath}`);
    }

    async generateMasterReport(researchData, newAgents, solutions, campaigns, contentResults) {
        console.log('📋 Generating master report...');
        
        const report = {
            timestamp: new Date().toISOString(),
            systemStatus: this.systemStatus,
            phases: {
                marketResearch: researchData,
                agentCreation: newAgents,
                solutionCreation: solutions,
                salesCampaign: campaigns,
                contentGeneration: contentResults
            },
            performance: await this.loadMonitoringData('performance-report'),
            recommendations: this.generateMasterRecommendations(researchData, newAgents, solutions, campaigns, contentResults)
        };
        
        const reportPath = path.join(this.outputDir, 'reports', `master-report-${Date.now()}.json`);
        await fs.writeJson(reportPath, report, { spaces: 2 });
        
        console.log(`📊 Master report saved to: ${reportPath}`);
    }

    // Helper methods for deployment
    async createMarketplaceListing(solution) {
        const listing = {
            id: solution.id,
            name: solution.name,
            description: solution.description,
            category: solution.category,
            pricing: solution.pricing,
            features: solution.features,
            targetMarket: solution.targetMarket,
            roi: solution.roi,
            createdAt: solution.createdAt
        };
        
        const listingPath = path.join(__dirname, 'marketplace', 'listings', `${solution.id}.json`);
        await fs.ensureDir(path.dirname(listingPath));
        await fs.writeJson(listingPath, listing, { spaces: 2 });
    }

    async generateProductPage(solution) {
        // Use utility function for consistent component naming
        const componentName = createValidComponentName(solution.name);
        
        const pageContent = `
import React from 'react';
import { NextPage } from 'next';

const ${componentName}: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            ${createDisplayTitle(solution.name)}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            ${solution.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          ${solution.features.map(feature => `
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              ${feature}
            </h3>
            <p className="text-gray-600">
              Advanced ${feature.toLowerCase()} capabilities for your business.
            </p>
          </div>
          `).join('')}
        </div>
        
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            ${Object.entries(solution.pricing).map(([tier, price]) => `
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                ${tier.charAt(0).toUpperCase() + tier.slice(1)}
              </h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">
                ${price}
              </p>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                Get Started
              </button>
            </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ${componentName};
        `;
        
        const pagePath = path.join(__dirname, '..', 'pages', 'products', `${solution.id}.tsx`);
        await fs.ensureDir(path.dirname(pagePath));
        await fs.writeFile(pagePath, pageContent);
    }

    async updateMarketplaceDatabase(solution) {
        const databasePath = path.join(__dirname, 'marketplace', 'database.json');
        let database = [];
        
        try {
            database = await fs.readJson(databasePath);
        } catch (error) {
            // Database doesn't exist, create new one
        }
        
        database.push({
            id: solution.id,
            name: solution.name,
            category: solution.category,
            targetMarket: solution.targetMarket,
            createdAt: solution.createdAt
        });
        
        await fs.writeJson(databasePath, database, { spaces: 2 });
    }

    async deployWebsiteContent(campaign) {
        const contentPath = path.join(__dirname, 'sales', 'content', campaign.id, 'website-content.json');
        const content = await fs.readJson(contentPath);
        
        // Update website with campaign content
        const websiteUpdatePath = path.join(__dirname, '..', 'src', 'content', 'campaigns', `${campaign.id}.json`);
        await fs.ensureDir(path.dirname(websiteUpdatePath));
        await fs.writeJson(websiteUpdatePath, content, { spaces: 2 });
    }

    async deploySocialMediaContent(campaign) {
        const contentPath = path.join(__dirname, 'sales', 'content', campaign.id, 'social-media-content.json');
        const content = await fs.readJson(contentPath);
        
        // Save social media content for deployment
        const socialMediaPath = path.join(__dirname, 'social-media', 'campaigns', `${campaign.id}.json`);
        await fs.ensureDir(path.dirname(socialMediaPath));
        await fs.writeJson(socialMediaPath, content, { spaces: 2 });
    }

    async deployEmailCampaigns(campaign) {
        const contentPath = path.join(__dirname, 'sales', 'content', campaign.id, 'email-content.json');
        const content = await fs.readJson(contentPath);
        
        // Save email campaign for deployment
        const emailPath = path.join(__dirname, 'email-campaigns', 'campaigns', `${campaign.id}.json`);
        await fs.ensureDir(path.dirname(emailPath));
        await fs.writeJson(emailPath, content, { spaces: 2 });
    }

    async updateMarketplacePage(solutions) {
        const marketplacePagePath = path.join(__dirname, '..', 'pages', 'marketplace.tsx');
        let pageContent = await fs.readFile(marketplacePagePath, 'utf8');
        
        // Add new solutions to the marketplace page
        const solutionsSection = solutions.map(solution => `
          <div key="${solution.id}" className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              ${createDisplayTitle(solution.name)}
            </h3>
            <p className="text-gray-600 mb-4">
              ${solution.description}
            </p>
            <div className="flex justify-between items-center">
              <span className="text-blue-600 font-semibold">
                ${solution.pricing.basic}
              </span>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                Learn More
              </button>
            </div>
          </div>
        `).join('');
        
        // Insert solutions section into the page
        const insertPoint = pageContent.indexOf('{/* SOLUTIONS_SECTION */}');
        if (insertPoint !== -1) {
            pageContent = pageContent.slice(0, insertPoint) + solutionsSection + pageContent.slice(insertPoint);
        }
        
        await fs.writeFile(marketplacePagePath, pageContent);
    }

    async updateProductCatalog(solutions) {
        const catalogPath = path.join(__dirname, '..', 'src', 'data', 'products.json');
        let catalog = [];
        
        try {
            catalog = await fs.readJson(catalogPath);
        } catch (error) {
            // Catalog doesn't exist, create new one
        }
        
        solutions.forEach(solution => {
            catalog.push({
                id: solution.id,
                name: solution.name,
                description: solution.description,
                category: solution.category,
                pricing: solution.pricing,
                features: solution.features,
                targetMarket: solution.targetMarket,
                roi: solution.roi
            });
        });
        
        await fs.writeJson(catalogPath, catalog, { spaces: 2 });
    }

    async updatePricingPages(solutions) {
        const pricingPagePath = path.join(__dirname, '..', 'pages', 'pricing.tsx');
        let pageContent = await fs.readFile(pricingPagePath, 'utf8');
        
        // Add new solution pricing to the pricing page
        const pricingSection = solutions.map(solution => `
          <div key="${solution.id}" className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ${createDisplayTitle(solution.name)}
            </h3>
            <div className="space-y-4">
              ${Object.entries(solution.pricing).map(([tier, price]) => `
              <div className="flex justify-between items-center">
                <span className="text-gray-600">${tier.charAt(0).toUpperCase() + tier.slice(1)}</span>
                <span className="text-xl font-semibold text-blue-600">${price}</span>
              </div>
              `).join('')}
            </div>
          </div>
        `).join('');
        
        // Insert pricing section into the page
        const insertPoint = pageContent.indexOf('{/* PRICING_SECTION */}');
        if (insertPoint !== -1) {
            pageContent = pageContent.slice(0, insertPoint) + pricingSection + pageContent.slice(insertPoint);
        }
        
        await fs.writeFile(pricingPagePath, pageContent);
    }

    async commitAndPushChanges(message) {
        try {
            await execAsync('git add .');
            await execAsync(`git commit -m "${message}"`);
            await execAsync('git push origin main');
            console.log('✅ Changes committed and pushed successfully');
        } catch (error) {
            console.error('❌ Failed to commit and push changes:', error.message);
        }
    }

    // Monitoring helper methods
    async getCPUUsage() {
        try {
            const { stdout } = await execAsync('top -l 1 | grep "CPU usage"');
            return stdout.trim();
        } catch (error) {
            return 'Unknown';
        }
    }

    async getMemoryUsage() {
        try {
            const { stdout } = await execAsync('vm_stat');
            return stdout.trim();
        } catch (error) {
            return 'Unknown';
        }
    }

    async getDiskUsage() {
        try {
            const { stdout } = await execAsync('df -h');
            return stdout.trim();
        } catch (error) {
            return 'Unknown';
        }
    }

    async getNetworkUsage() {
        try {
            const { stdout } = await execAsync('netstat -i');
            return stdout.trim();
        } catch (error) {
            return 'Unknown';
        }
    }

    calculateAverageROI(solutions) {
        const rois = solutions.map(s => parseFloat(s.roi.roi.replace('%', '')));
        const average = rois.reduce((a, b) => a + b, 0) / rois.length;
        return average.toFixed(1) + '%';
    }

    calculateMarketDistribution(solutions) {
        const distribution = {};
        solutions.forEach(solution => {
            distribution[solution.targetMarket] = (distribution[solution.targetMarket] || 0) + 1;
        });
        return distribution;
    }

    calculateCategoryDistribution(solutions) {
        const distribution = {};
        solutions.forEach(solution => {
            distribution[solution.category] = (distribution[solution.category] || 0) + 1;
        });
        return distribution;
    }

    calculateAverageExpectedROI(campaigns) {
        const rois = campaigns.map(c => c.expectedROI.percentage);
        const average = rois.reduce((a, b) => a + b, 0) / rois.length;
        return average.toFixed(0) + '%';
    }

    calculateChannelDistribution(campaigns) {
        const distribution = {};
        campaigns.forEach(campaign => {
            campaign.channels.forEach(channel => {
                distribution[channel.name] = (distribution[channel.name] || 0) + 1;
            });
        });
        return distribution;
    }

    groupAgentsByType(agents) {
        const types = {};
        agents.forEach(agent => {
            types[agent.type] = (types[agent.type] || 0) + 1;
        });
        return types;
    }

    calculateAverageAgentPerformance(agents) {
        const performances = agents.map(a => a.performance || { efficiency: 0.8, accuracy: 0.85 });
        const averageEfficiency = performances.reduce((sum, p) => sum + p.efficiency, 0) / performances.length;
        const averageAccuracy = performances.reduce((sum, p) => sum + p.accuracy, 0) / performances.length;
        
        return {
            efficiency: averageEfficiency.toFixed(2),
            accuracy: averageAccuracy.toFixed(2)
        };
    }

    generatePerformanceSummary(system, solutions, sales, agents) {
        return {
            systemHealth: system ? 'Good' : 'Unknown',
            solutionsCreated: solutions ? solutions.totalSolutions : 0,
            averageROI: solutions ? solutions.averageROI : '0%',
            totalBudget: sales ? sales.totalBudget : 0,
            expectedROI: sales ? sales.averageExpectedROI : '0%',
            activeAgents: agents ? agents.activeAgents : 0,
            totalAgents: agents ? agents.totalAgents : 0
        };
    }

    generateMasterRecommendations(researchData, newAgents, solutions, campaigns, contentResults) {
        const recommendations = [];
        
        // High-priority recommendations
        if (solutions && solutions.length > 0) {
            const highROISolutions = solutions.filter(s => parseFloat(s.roi.roi.replace('%', '')) > 300);
            if (highROISolutions.length > 0) {
                recommendations.push({
                    type: 'high-roi',
                    action: 'Focus on high-ROI solutions',
                    priority: 'High',
                    reasoning: `${highROISolutions.length} solutions with >300% ROI`
                });
            }
        }
        
        // Agent recommendations
        if (newAgents && newAgents.length > 0) {
            const specializedAgents = newAgents.filter(a => a.type === 'specialized');
            if (specializedAgents.length > 0) {
                recommendations.push({
                    type: 'specialized-agents',
                    action: 'Leverage specialized agents',
                    priority: 'Medium',
                    reasoning: `${specializedAgents.length} specialized agents created`
                });
            }
        }
        
        // Market research recommendations
        if (researchData && researchData.trends && researchData.trends.length > 0) {
            recommendations.push({
                type: 'market-research',
                action: 'Monitor emerging trends',
                priority: 'High',
                reasoning: `${researchData.trends.length} new trends identified`
            });
        }
        
        return recommendations;
    }

    // Data management methods
    async savePhaseData(phase, data) {
        const dataPath = path.join(this.outputDir, 'phases', `${phase}.json`);
        await fs.ensureDir(path.dirname(dataPath));
        await fs.writeJson(dataPath, data, { spaces: 2 });
    }

    async loadPhaseData(phase) {
        const dataPath = path.join(this.outputDir, 'phases', `${phase}.json`);
        try {
            return await fs.readJson(dataPath);
        } catch (error) {
            return null;
        }
    }

    async saveMonitoringData(type, data) {
        const dataPath = path.join(this.outputDir, 'monitoring', `${type}.json`);
        await fs.ensureDir(path.dirname(dataPath));
        await fs.writeJson(dataPath, data, { spaces: 2 });
    }

    async loadMonitoringData(type) {
        const dataPath = path.join(this.outputDir, 'monitoring', `${type}.json`);
        try {
            return await fs.readJson(dataPath);
        } catch (error) {
            return null;
        }
    }

    async logSystemEvent(event, data = {}) {
        const logEntry = {
            timestamp: new Date().toISOString(),
            event,
            data,
            phase: this.systemStatus.currentPhase
        };
        
        const logPath = path.join(this.outputDir, 'logs', `system-events-${new Date().toISOString().split('T')[0]}.json`);
        await fs.ensureDir(path.dirname(logPath));
        
        let logs = [];
        try {
            logs = await fs.readJson(logPath);
        } catch (error) {
            // Log file doesn't exist, start new one
        }
        
        logs.push(logEntry);
        await fs.writeJson(logPath, logs, { spaces: 2 });
    }

    // Start continuous orchestration
    startContinuousOrchestration() {
        console.log('🔄 Starting continuous orchestration...');
        
        // Schedule market research
        cron.schedule(this.schedules.marketResearch, async () => {
            try {
                console.log('📊 Running scheduled market research...');
                await this.executeMarketResearch();
            } catch (error) {
                console.error('❌ Scheduled market research failed:', error.message);
            }
        });
        
        // Schedule solution creation
        cron.schedule(this.schedules.solutionCreation, async () => {
            try {
                console.log('💡 Running scheduled solution creation...');
                const researchData = await this.loadPhaseData('market-research');
                if (researchData) {
                    await this.executeSolutionCreation(researchData);
                }
            } catch (error) {
                console.error('❌ Scheduled solution creation failed:', error.message);
            }
        });
        
        // Schedule sales campaigns
        cron.schedule(this.schedules.salesCampaign, async () => {
            try {
                console.log('📢 Running scheduled sales campaigns...');
                const solutions = await this.loadPhaseData('solution-creation');
                if (solutions) {
                    await this.executeSalesCampaign(solutions);
                }
            } catch (error) {
                console.error('❌ Scheduled sales campaigns failed:', error.message);
            }
        });
        
        // Schedule agent creation
        cron.schedule(this.schedules.agentCreation, async () => {
            try {
                console.log('🤖 Running scheduled agent creation...');
                const researchData = await this.loadPhaseData('market-research');
                if (researchData) {
                    await this.executeAgentCreation(researchData);
                }
            } catch (error) {
                console.error('❌ Scheduled agent creation failed:', error.message);
            }
        });
        
        // Schedule monitoring
        cron.schedule(this.schedules.monitoring, async () => {
            try {
                console.log('📈 Running scheduled monitoring...');
                await this.executeMonitoring();
            } catch (error) {
                console.error('❌ Scheduled monitoring failed:', error.message);
            }
        });
        
        console.log('✅ Continuous orchestration started successfully');
    }
}

module.exports = AutonomousMasterOrchestrator;

// Auto-run if called directly
if (require.main === module) {
    const orchestrator = new AutonomousMasterOrchestrator();
    orchestrator.startMasterOrchestration()
        .then(() => {
            console.log('✅ Master orchestrator completed successfully');
            process.exit(0);
        })
        .catch(error => {
            console.error('❌ Master orchestrator failed:', error);
            process.exit(1);
        });
} 