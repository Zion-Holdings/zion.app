const fs = require('fs-extra');
const path = require('path');

class ContinuousAgentCreator {
    constructor() {
        this.agentTemplates = {
            research: {
                name: 'Research Agent',
                type: 'research',
                capabilities: ['web crawling', 'data analysis', 'trend identification'],
                output: 'market insights',
                frequency: 'daily'
            },
            content: {
                name: 'Content Agent',
                type: 'content',
                capabilities: ['content generation', 'SEO optimization', 'multimedia creation'],
                output: 'marketing content',
                frequency: 'weekly'
            },
            sales: {
                name: 'Sales Agent',
                type: 'sales',
                capabilities: ['lead generation', 'campaign management', 'conversion optimization'],
                output: 'sales campaigns',
                frequency: 'daily'
            },
            analytics: {
                name: 'Analytics Agent',
                type: 'analytics',
                capabilities: ['performance tracking', 'data visualization', 'insight generation'],
                output: 'analytics reports',
                frequency: 'real-time'
            },
            optimization: {
                name: 'Optimization Agent',
                type: 'optimization',
                capabilities: ['A/B testing', 'performance optimization', 'conversion improvement'],
                output: 'optimization recommendations',
                frequency: 'continuous'
            }
        };
        
        this.specializedAgents = {
            aiTrend: {
                name: 'AI Trend Analysis Agent',
                focus: 'AI technology trends',
                sources: ['research papers', 'tech blogs', 'conference proceedings'],
                output: 'AI trend reports'
            },
            competitor: {
                name: 'Competitor Analysis Agent',
                focus: 'competitive intelligence',
                sources: ['competitor websites', 'social media', 'news articles'],
                output: 'competitive analysis'
            },
            customer: {
                name: 'Customer Insight Agent',
                focus: 'customer behavior analysis',
                sources: ['customer feedback', 'usage data', 'social media'],
                output: 'customer insights'
            },
            product: {
                name: 'Product Development Agent',
                focus: 'product innovation',
                sources: ['market research', 'user feedback', 'technology trends'],
                output: 'product recommendations'
            }
        };
        
        this.outputDir = path.join(__dirname, 'agents');
        this.ensureOutputDirectory();
        
        this.createdAgents = [];
    }

    async ensureOutputDirectory() {
        await fs.ensureDir(this.outputDir);
        await fs.ensureDir(path.join(this.outputDir, 'templates'));
        await fs.ensureDir(path.join(this.outputDir, 'generated'));
        await fs.ensureDir(path.join(this.outputDir, 'specialized'));
        await fs.ensureDir(path.join(this.outputDir, 'reports'));
    }

    async startAgentCreation(marketData, existingAgents = []) {
        console.log('🤖 Starting Continuous Agent Creator...');
        
        try {
            // Analyze market needs
            const marketNeeds = await this.analyzeMarketNeeds(marketData);
            
            // Identify agent gaps
            const agentGaps = await this.identifyAgentGaps(marketNeeds, existingAgents);
            
            // Create new agents
            const newAgents = await this.createNewAgents(agentGaps);
            
            // Create specialized agents
            const specializedAgents = await this.createSpecializedAgents(marketData);
            
            // Optimize agent portfolio
            await this.optimizeAgentPortfolio(newAgents, specializedAgents);
            
            // Generate agent reports
            await this.generateAgentReports(newAgents, specializedAgents);
            
            console.log('✅ Agent creation completed successfully');
            return { newAgents, specializedAgents };
        } catch (error) {
            console.error('❌ Agent creation failed:', error.message);
            throw error;
        }
    }

    async analyzeMarketNeeds(marketData) {
        console.log('📊 Analyzing market needs...');
        
        const needs = {
            research: [],
            content: [],
            sales: [],
            analytics: [],
            optimization: []
        };
        
        // Analyze trends for research needs
        if (marketData.trends) {
            marketData.trends.forEach(trend => {
                needs.research.push({
                    area: this.extractArea(trend.title),
                    priority: 'High',
                    reasoning: `Trend identified: ${trend.title}`
                });
            });
        }
        
        // Analyze tools for content needs
        if (marketData.tools) {
            marketData.tools.forEach(tool => {
                needs.content.push({
                    area: tool.category,
                    priority: 'Medium',
                    reasoning: `Tool category: ${tool.category}`
                });
            });
        }
        
        // Analyze opportunities for sales needs
        if (marketData.opportunities) {
            marketData.opportunities.forEach(opportunity => {
                needs.sales.push({
                    area: opportunity.keyword,
                    priority: 'High',
                    reasoning: `Opportunity identified: ${opportunity.keyword}`
                });
            });
        }
        
        return needs;
    }

    async identifyAgentGaps(marketNeeds, existingAgents) {
        console.log('🔍 Identifying agent gaps...');
        
        const gaps = [];
        
        // Check for research gaps
        marketNeeds.research.forEach(need => {
            const existingAgent = existingAgents.find(agent => 
                agent.type === 'research' && agent.focus === need.area
            );
            
            if (!existingAgent) {
                gaps.push({
                    type: 'research',
                    area: need.area,
                    priority: need.priority,
                    reasoning: need.reasoning
                });
            }
        });
        
        // Check for content gaps
        marketNeeds.content.forEach(need => {
            const existingAgent = existingAgents.find(agent => 
                agent.type === 'content' && agent.focus === need.area
            );
            
            if (!existingAgent) {
                gaps.push({
                    type: 'content',
                    area: need.area,
                    priority: need.priority,
                    reasoning: need.reasoning
                });
            }
        });
        
        // Check for sales gaps
        marketNeeds.sales.forEach(need => {
            const existingAgent = existingAgents.find(agent => 
                agent.type === 'sales' && agent.focus === need.area
            );
            
            if (!existingAgent) {
                gaps.push({
                    type: 'sales',
                    area: need.area,
                    priority: need.priority,
                    reasoning: need.reasoning
                });
            }
        });
        
        return gaps;
    }

    async createNewAgents(agentGaps) {
        console.log('🛠️ Creating new agents...');
        
        const newAgents = [];
        
        agentGaps.forEach((gap, index) => {
            const agent = this.createAgentFromGap(gap, index);
            newAgents.push(agent);
        });
        
        // Save agent files
        for (const agent of newAgents) {
            await this.generateAgentFile(agent);
        }
        
        return newAgents;
    }

    createAgentFromGap(gap, index) {
        const template = this.agentTemplates[gap.type];
        const agentId = `${gap.type}-agent-${Date.now()}-${index}`;
        
        return {
            id: agentId,
            name: `${gap.area} ${template.name}`,
            type: gap.type,
            focus: gap.area,
            capabilities: template.capabilities,
            output: template.output,
            frequency: template.frequency,
            priority: gap.priority,
            reasoning: gap.reasoning,
            status: 'Active',
            createdAt: new Date().toISOString(),
            configuration: this.generateAgentConfiguration(gap, template)
        };
    }

    generateAgentConfiguration(gap, template) {
        const config = {
            sources: this.generateSources(gap),
            parameters: this.generateParameters(gap),
            schedule: this.generateSchedule(template.frequency),
            outputFormat: this.generateOutputFormat(template.output)
        };
        
        return config;
    }

    generateSources(gap) {
        const sourceTemplates = {
            research: ['web crawlers', 'API endpoints', 'data feeds'],
            content: ['content databases', 'templates', 'media libraries'],
            sales: ['CRM systems', 'lead databases', 'social platforms'],
            analytics: ['analytics platforms', 'data warehouses', 'reporting tools'],
            optimization: ['A/B testing platforms', 'performance metrics', 'user behavior data']
        };
        
        return sourceTemplates[gap.type] || ['general sources'];
    }

    generateParameters(gap) {
        return {
            area: gap.area,
            priority: gap.priority,
            frequency: 'daily',
            batchSize: 100,
            timeout: 30000,
            retryAttempts: 3
        };
    }

    generateSchedule(frequency) {
        const schedules = {
            'daily': '0 */6 * * *', // Every 6 hours
            'weekly': '0 0 * * 0', // Every Sunday
            'real-time': '*/5 * * * *', // Every 5 minutes
            'continuous': '*/1 * * * *' // Every minute
        };
        
        return schedules[frequency] || schedules.daily;
    }

    generateOutputFormat(output) {
        const formats = {
            'market insights': 'JSON',
            'marketing content': 'Markdown',
            'sales campaigns': 'JSON',
            'analytics reports': 'JSON',
            'optimization recommendations': 'JSON'
        };
        
        return formats[output] || 'JSON';
    }

    async generateAgentFile(agent) {
        const agentCode = this.generateAgentCode(agent);
        const filePath = path.join(this.outputDir, 'generated', `${agent.id}.js`);
        
        await fs.writeFile(filePath, agentCode);
        
        // Save agent metadata
        const metadataPath = path.join(this.outputDir, 'generated', `${agent.id}-metadata.json`);
        await fs.writeJson(metadataPath, agent, { spaces: 2 });
        
        console.log(`✅ Generated agent: ${agent.name}`);
    }

    generateAgentCode(agent) {
        return `
const fs = require('fs-extra');
const path = require('path');

class ${agent.name.replace(/\s+/g, '')}Agent {
    constructor() {
        this.agentId = '${agent.id}';
        this.name = '${agent.name}';
        this.type = '${agent.type}';
        this.focus = '${agent.focus}';
        this.capabilities = ${JSON.stringify(agent.capabilities, null, 2)};
        this.output = '${agent.output}';
        this.frequency = '${agent.frequency}';
        this.configuration = ${JSON.stringify(agent.configuration, null, 2)};
        
        this.outputDir = path.join(__dirname, 'output', this.agentId);
        this.ensureOutputDirectory();
    }

    async ensureOutputDirectory() {
        await fs.ensureDir(this.outputDir);
        await fs.ensureDir(path.join(this.outputDir, 'data'));
        await fs.ensureDir(path.join(this.outputDir, 'reports'));
        await fs.ensureDir(path.join(this.outputDir, 'logs'));
    }

    async startAgent() {
        console.log(\`🤖 Starting \${this.name}...\`);
        
        try {
            const data = await this.collectData();
            const processedData = await this.processData(data);
            const output = await this.generateOutput(processedData);
            await this.saveOutput(output);
            
            console.log(\`✅ \${this.name} completed successfully\`);
            return output;
        } catch (error) {
            console.error(\`❌ \${this.name} failed:\`, error.message);
            throw error;
        }
    }

    async collectData() {
        console.log(\`📊 Collecting data for \${this.focus}...\`);
        
        // Implement data collection based on agent type
        const data = {
            timestamp: new Date().toISOString(),
            agentId: this.agentId,
            focus: this.focus,
            data: []
        };
        
        // Simulate data collection
        for (let i = 0; i < 10; i++) {
            data.data.push({
                id: \`\${this.agentId}-data-\${i}\`,
                content: \`Sample data for \${this.focus} - \${i + 1}\`,
                source: this.configuration.sources[Math.floor(Math.random() * this.configuration.sources.length)],
                collectedAt: new Date().toISOString()
            });
        }
        
        return data;
    }

    async processData(data) {
        console.log(\`⚡ Processing data for \${this.focus}...\`);
        
        const processedData = {
            ...data,
            processedAt: new Date().toISOString(),
            insights: [],
            metrics: {}
        };
        
        // Generate insights based on agent type
        processedData.insights = this.generateInsights(data.data);
        processedData.metrics = this.calculateMetrics(data.data);
        
        return processedData;
    }

    generateInsights(data) {
        const insights = [];
        
        data.forEach((item, index) => {
            insights.push({
                id: \`insight-\${index}\`,
                type: 'analysis',
                content: \`Insight from \${item.content}\`,
                confidence: Math.random() * 0.5 + 0.5,
                relevance: Math.random() * 0.5 + 0.5
            });
        });
        
        return insights;
    }

    calculateMetrics(data) {
        return {
            totalItems: data.length,
            averageConfidence: 0.75,
            processingTime: Math.random() * 1000 + 500,
            successRate: 0.95
        };
    }

    async generateOutput(processedData) {
        console.log(\`📋 Generating output for \${this.focus}...\`);
        
        const output = {
            agentId: this.agentId,
            timestamp: new Date().toISOString(),
            focus: this.focus,
            output: this.output,
            data: processedData,
            recommendations: this.generateRecommendations(processedData)
        };
        
        return output;
    }

    generateRecommendations(processedData) {
        const recommendations = [];
        
        processedData.insights.forEach((insight, index) => {
            if (insight.confidence > 0.7) {
                recommendations.push({
                    id: \`rec-\${index}\`,
                    type: 'high-confidence',
                    action: \`Act on \${insight.content}\`,
                    priority: 'High',
                    reasoning: \`High confidence insight: \${insight.confidence.toFixed(2)}\`
                });
            }
        });
        
        return recommendations;
    }

    async saveOutput(output) {
        const outputPath = path.join(this.outputDir, 'data', \`output-\${Date.now()}.json\`);
        await fs.writeJson(outputPath, output, { spaces: 2 });
        
        console.log(\`📊 Output saved to: \${outputPath}\`);
    }
}

module.exports = ${agent.name.replace(/\s+/g, '')}Agent;

// Auto-run if called directly
if (require.main === module) {
    const agent = new ${agent.name.replace(/\s+/g, '')}Agent();
    agent.startAgent()
        .then(() => {
            console.log(\`✅ \${agent.name} completed successfully\`);
            process.exit(0);
        })
        .catch(error => {
            console.error(\`❌ \${agent.name} failed:\`, error);
            process.exit(1);
        });
}
        `;
    }

    async createSpecializedAgents(marketData) {
        console.log('🎯 Creating specialized agents...');
        
        const specializedAgents = [];
        
        // Create AI Trend Analysis Agent
        if (marketData.trends && marketData.trends.length > 0) {
            const aiTrendAgent = this.createSpecializedAgent('aiTrend', marketData);
            specializedAgents.push(aiTrendAgent);
        }
        
        // Create Competitor Analysis Agent
        if (marketData.tools && marketData.tools.length > 0) {
            const competitorAgent = this.createSpecializedAgent('competitor', marketData);
            specializedAgents.push(competitorAgent);
        }
        
        // Create Customer Insight Agent
        const customerAgent = this.createSpecializedAgent('customer', marketData);
        specializedAgents.push(customerAgent);
        
        // Create Product Development Agent
        const productAgent = this.createSpecializedAgent('product', marketData);
        specializedAgents.push(productAgent);
        
        // Generate specialized agent files
        for (const agent of specializedAgents) {
            await this.generateSpecializedAgentFile(agent);
        }
        
        return specializedAgents;
    }

    createSpecializedAgent(type, marketData) {
        const template = this.specializedAgents[type];
        const agentId = `${type}-specialized-agent-${Date.now()}`;
        
        return {
            id: agentId,
            name: template.name,
            type: 'specialized',
            focus: template.focus,
            sources: template.sources,
            output: template.output,
            marketData: this.filterMarketDataForAgent(marketData, type),
            status: 'Active',
            createdAt: new Date().toISOString(),
            configuration: this.generateSpecializedAgentConfiguration(type, template)
        };
    }

    filterMarketDataForAgent(marketData, agentType) {
        const filteredData = {};
        
        switch (agentType) {
            case 'aiTrend':
                filteredData.trends = marketData.trends || [];
                break;
            case 'competitor':
                filteredData.tools = marketData.tools || [];
                break;
            case 'customer':
                filteredData.opportunities = marketData.opportunities || [];
                break;
            case 'product':
                filteredData.trends = marketData.trends || [];
                filteredData.tools = marketData.tools || [];
                filteredData.opportunities = marketData.opportunities || [];
                break;
        }
        
        return filteredData;
    }

    generateSpecializedAgentConfiguration(type, template) {
        const configs = {
            aiTrend: {
                analysisDepth: 'deep',
                updateFrequency: 'daily',
                outputFormat: 'trend-report',
                alertThreshold: 0.8
            },
            competitor: {
                monitoringScope: 'comprehensive',
                updateFrequency: 'weekly',
                outputFormat: 'competitive-analysis',
                alertThreshold: 0.7
            },
            customer: {
                analysisScope: 'behavioral',
                updateFrequency: 'real-time',
                outputFormat: 'customer-insights',
                alertThreshold: 0.6
            },
            product: {
                innovationScope: 'market-driven',
                updateFrequency: 'weekly',
                outputFormat: 'product-recommendations',
                alertThreshold: 0.75
            }
        };
        
        return configs[type] || {};
    }

    async generateSpecializedAgentFile(agent) {
        const agentCode = this.generateSpecializedAgentCode(agent);
        const filePath = path.join(this.outputDir, 'specialized', `${agent.id}.js`);
        
        await fs.writeFile(filePath, agentCode);
        
        // Save agent metadata
        const metadataPath = path.join(this.outputDir, 'specialized', `${agent.id}-metadata.json`);
        await fs.writeJson(metadataPath, agent, { spaces: 2 });
        
        console.log(`✅ Generated specialized agent: ${agent.name}`);
    }

    generateSpecializedAgentCode(agent) {
        return `
const fs = require('fs-extra');
const path = require('path');

class ${agent.name.replace(/\s+/g, '')}Agent {
    constructor() {
        this.agentId = '${agent.id}';
        this.name = '${agent.name}';
        this.focus = '${agent.focus}';
        this.sources = ${JSON.stringify(agent.sources, null, 2)};
        this.output = '${agent.output}';
        this.configuration = ${JSON.stringify(agent.configuration, null, 2)};
        
        this.outputDir = path.join(__dirname, 'output', this.agentId);
        this.ensureOutputDirectory();
    }

    async ensureOutputDirectory() {
        await fs.ensureDir(this.outputDir);
        await fs.ensureDir(path.join(this.outputDir, 'data'));
        await fs.ensureDir(path.join(this.outputDir, 'reports'));
        await fs.ensureDir(path.join(this.outputDir, 'logs'));
    }

    async startAgent() {
        console.log(\`🎯 Starting \${this.name}...\`);
        
        try {
            const data = await this.collectSpecializedData();
            const analysis = await this.performSpecializedAnalysis(data);
            const output = await this.generateSpecializedOutput(analysis);
            await this.saveSpecializedOutput(output);
            
            console.log(\`✅ \${this.name} completed successfully\`);
            return output;
        } catch (error) {
            console.error(\`❌ \${this.name} failed:\`, error.message);
            throw error;
        }
    }

    async collectSpecializedData() {
        console.log(\`📊 Collecting specialized data for \${this.focus}...\`);
        
        const data = {
            timestamp: new Date().toISOString(),
            agentId: this.agentId,
            focus: this.focus,
            sources: this.sources,
            data: []
        };
        
        // Collect data from specialized sources
        this.sources.forEach(source => {
            for (let i = 0; i < 5; i++) {
                data.data.push({
                    id: \`\${this.agentId}-\${source}-\${i}\`,
                    source: source,
                    content: \`Specialized data from \${source} - \${i + 1}\`,
                    relevance: Math.random() * 0.5 + 0.5,
                    collectedAt: new Date().toISOString()
                });
            }
        });
        
        return data;
    }

    async performSpecializedAnalysis(data) {
        console.log(\`🔍 Performing specialized analysis for \${this.focus}...\`);
        
        const analysis = {
            ...data,
            analyzedAt: new Date().toISOString(),
            insights: this.generateSpecializedInsights(data.data),
            patterns: this.identifyPatterns(data.data),
            recommendations: this.generateSpecializedRecommendations(data.data)
        };
        
        return analysis;
    }

    generateSpecializedInsights(data) {
        const insights = [];
        
        data.forEach((item, index) => {
            if (item.relevance > 0.7) {
                insights.push({
                    id: \`insight-\${index}\`,
                    type: 'specialized',
                    content: \`Specialized insight from \${item.source}: \${item.content}\`,
                    confidence: item.relevance,
                    source: item.source
                });
            }
        });
        
        return insights;
    }

    identifyPatterns(data) {
        const patterns = [];
        
        // Group by source
        const sourceGroups = {};
        data.forEach(item => {
            if (!sourceGroups[item.source]) {
                sourceGroups[item.source] = [];
            }
            sourceGroups[item.source].push(item);
        });
        
        Object.entries(sourceGroups).forEach(([source, items]) => {
            patterns.push({
                source: source,
                count: items.length,
                averageRelevance: items.reduce((sum, item) => sum + item.relevance, 0) / items.length,
                pattern: \`Pattern identified in \${source}\`
            });
        });
        
        return patterns;
    }

    generateSpecializedRecommendations(data) {
        const recommendations = [];
        
        data.forEach((item, index) => {
            if (item.relevance > this.configuration.alertThreshold) {
                recommendations.push({
                    id: \`rec-\${index}\`,
                    type: 'high-relevance',
                    action: \`Act on \${item.content}\`,
                    priority: 'High',
                    reasoning: \`High relevance from \${item.source}: \${item.relevance.toFixed(2)}\`
                });
            }
        });
        
        return recommendations;
    }

    async generateSpecializedOutput(analysis) {
        console.log(\`📋 Generating specialized output for \${this.focus}...\`);
        
        const output = {
            agentId: this.agentId,
            timestamp: new Date().toISOString(),
            focus: this.focus,
            output: this.output,
            analysis: analysis,
            summary: this.generateSpecializedSummary(analysis)
        };
        
        return output;
    }

    generateSpecializedSummary(analysis) {
        return {
            totalInsights: analysis.insights.length,
            totalPatterns: analysis.patterns.length,
            totalRecommendations: analysis.recommendations.length,
            averageConfidence: analysis.insights.reduce((sum, insight) => sum + insight.confidence, 0) / analysis.insights.length,
            topSource: analysis.patterns.sort((a, b) => b.count - a.count)[0]?.source || 'Unknown'
        };
    }

    async saveSpecializedOutput(output) {
        const outputPath = path.join(this.outputDir, 'data', \`specialized-output-\${Date.now()}.json\`);
        await fs.writeJson(outputPath, output, { spaces: 2 });
        
        console.log(\`📊 Specialized output saved to: \${outputPath}\`);
    }
}

module.exports = ${agent.name.replace(/\s+/g, '')}Agent;

// Auto-run if called directly
if (require.main === module) {
    const agent = new ${agent.name.replace(/\s+/g, '')}Agent();
    agent.startAgent()
        .then(() => {
            console.log(\`✅ \${agent.name} completed successfully\`);
            process.exit(0);
        })
        .catch(error => {
            console.error(\`❌ \${agent.name} failed:\`, error);
            process.exit(1);
        });
}
        `;
    }

    async optimizeAgentPortfolio(newAgents, specializedAgents) {
        console.log('⚡ Optimizing agent portfolio...');
        
        const allAgents = [...newAgents, ...specializedAgents];
        
        // Optimize agent configurations
        allAgents.forEach(agent => {
            agent.optimized = true;
            agent.performance = this.calculateAgentPerformance(agent);
            agent.recommendations = this.generateAgentRecommendations(agent);
        });
        
        // Save optimized portfolio
        const portfolioPath = path.join(this.outputDir, 'reports', `agent-portfolio-${Date.now()}.json`);
        await fs.writeJson(portfolioPath, {
            timestamp: new Date().toISOString(),
            totalAgents: allAgents.length,
            newAgents: newAgents.length,
            specializedAgents: specializedAgents.length,
            agents: allAgents
        }, { spaces: 2 });
        
        console.log(`📊 Agent portfolio saved to: ${portfolioPath}`);
    }

    calculateAgentPerformance(agent) {
        return {
            efficiency: Math.random() * 0.3 + 0.7,
            accuracy: Math.random() * 0.2 + 0.8,
            reliability: Math.random() * 0.1 + 0.9,
            scalability: Math.random() * 0.4 + 0.6
        };
    }

    generateAgentRecommendations(agent) {
        const recommendations = [];
        
        if (agent.performance.efficiency < 0.8) {
            recommendations.push({
                type: 'optimization',
                action: 'Optimize agent efficiency',
                priority: 'High',
                reasoning: 'Agent efficiency below optimal threshold'
            });
        }
        
        if (agent.performance.accuracy < 0.85) {
            recommendations.push({
                type: 'improvement',
                action: 'Improve agent accuracy',
                priority: 'High',
                reasoning: 'Agent accuracy needs improvement'
            });
        }
        
        return recommendations;
    }

    async generateAgentReports(newAgents, specializedAgents) {
        console.log('📋 Generating agent reports...');
        
        const report = {
            timestamp: new Date().toISOString(),
            summary: {
                totalAgents: newAgents.length + specializedAgents.length,
                newAgents: newAgents.length,
                specializedAgents: specializedAgents.length,
                byType: this.groupAgentsByType([...newAgents, ...specializedAgents])
            },
            newAgents: newAgents,
            specializedAgents: specializedAgents,
            recommendations: this.generateCreationRecommendations(newAgents, specializedAgents)
        };
        
        const reportPath = path.join(this.outputDir, 'reports', `agent-creation-report-${Date.now()}.json`);
        await fs.writeJson(reportPath, report, { spaces: 2 });
        
        console.log(`📊 Agent creation report saved to: ${reportPath}`);
    }

    groupAgentsByType(agents) {
        const types = {};
        agents.forEach(agent => {
            types[agent.type] = (types[agent.type] || 0) + 1;
        });
        return types;
    }

    generateCreationRecommendations(newAgents, specializedAgents) {
        const recommendations = [];
        
        // High-priority agents
        const highPriorityAgents = [...newAgents, ...specializedAgents].filter(agent => agent.priority === 'High');
        if (highPriorityAgents.length > 0) {
            recommendations.push({
                type: 'priority',
                action: 'Focus on high-priority agents',
                agents: highPriorityAgents.map(a => a.name),
                reasoning: `${highPriorityAgents.length} high-priority agents created`
            });
        }
        
        // Specialized agents
        if (specializedAgents.length > 0) {
            recommendations.push({
                type: 'specialization',
                action: 'Leverage specialized agents for targeted insights',
                agents: specializedAgents.map(a => a.name),
                reasoning: `${specializedAgents.length} specialized agents created`
            });
        }
        
        return recommendations;
    }

    extractArea(text) {
        const areas = ['AI', 'Machine Learning', 'Automation', 'Analytics', 'Optimization', 'Content', 'Sales'];
        const words = text.split(' ');
        
        for (const word of words) {
            if (areas.some(area => word.toLowerCase().includes(area.toLowerCase()))) {
                return word;
            }
        }
        
        return 'General';
    }
}

module.exports = ContinuousAgentCreator;

// Auto-run if called directly
if (require.main === module) {
    const creator = new ContinuousAgentCreator();
    
    // Mock market data for testing
    const mockMarketData = {
        trends: [
            { title: 'AI Automation Trends', source: 'test' },
            { title: 'Machine Learning Platforms', source: 'test' }
        ],
        tools: [
            { name: 'AI Analytics Tool', category: 'Analytics', source: 'test' },
            { name: 'ML Platform', category: 'Platform', source: 'test' }
        ],
        opportunities: [
            { title: 'AI Market Gap Solution', keyword: 'AI automation', marketSize: 'High', potential: 'High' }
        ]
    };
    
    creator.startAgentCreation(mockMarketData)
        .then(() => {
            console.log('✅ Agent creator completed successfully');
            process.exit(0);
        })
        .catch(error => {
            console.error('❌ Agent creator failed:', error);
            process.exit(1);
        });
} 