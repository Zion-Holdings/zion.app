#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

class AgentFactory {
  constructor() {
    this.agentsDir = path.join(__dirname, 'agents');
    this.capabilitiesDir = path.join(this.agentsDir, 'capabilities');
    this.reportsDir = path.join(__dirname, 'reports');
    this.configDir = path.join(__dirname, 'config');
    
    this.ensureDirectories();
    this.loadConfiguration();
  }

  ensureDirectories() {
    [this.agentsDir, this.capabilitiesDir, this.reportsDir, this.configDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  loadConfiguration() {
    const configPath = path.join(this.configDir, 'factory-config.json');
    
    if (fs.existsSync(configPath)) {
      this.config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    } else {
      this.config = {
        maxAgents: 100,
        generationInterval: 3600000, // 1 hour
        agentTypes: ['full-stack', 'frontend', 'backend', 'testing', 'deployment', 'monitoring', 'optimization'],
        complexityLevels: ['basic', 'intermediate', 'advanced', 'expert'],
        growthTarget: 2.0, // Double every cycle
        autonomousMode: true
      };
      
      this.saveConfiguration();
    }
  }

  saveConfiguration() {
    const configPath = path.join(this.configDir, 'factory-config.json');
    fs.writeFileSync(configPath, JSON.stringify(this.config, null, 2));
  }

  async run() {
    console.log('🏭 Starting Agent Factory...');
    
    try {
      // Analyze needs from content crawler reports
      const needs = await this.analyzeNeeds();
      
      // Generate agents based on needs
      const agentsCreated = await this.generateAgents(needs.agentCount || 3);
      
      // Generate workflows for the agents
      const workflowsGenerated = await this.createWorkflows(agentsCreated);
      
      // Generate documentation
      await this.generateDocumentation(agentsCreated);
      
      console.log(`✅ Agent Factory completed: ${agentsCreated.length} agents created, ${workflowsGenerated.length} workflows generated`);
      
      return {
        agentsCreated,
        workflowsGenerated,
        needs,
        timestamp: new Date().toISOString()
      };
      
    } catch (error) {
      console.error('❌ Agent Factory failed:', error.message);
      throw error;
    }
  }

  async generateAgents(count = 1) {
    console.log(`🚀 Generating ${count} new development agents...`);
    
    const generatedAgents = [];
    
    for (let i = 0; i < count; i++) {
      const agentType = this.config.agentTypes[Math.floor(Math.random() * this.config.agentTypes.length)];
      const complexity = this.config.complexityLevels[Math.floor(Math.random() * this.config.complexityLevels.length)];
      
      const agentId = `agent-${Date.now()}-${i}-${agentType}-${complexity}`;
      const agent = await this.createAgent(agentId, agentType, complexity);
      
      if (agent) {
        generatedAgents.push(agent);
        console.log(`✅ Generated agent: ${agentId} (${agentType}/${complexity})`);
      }
    }
    
    return generatedAgents;
  }

  async createAgent(agentId, agentType, complexity) {
    try {
      const config = {
        id: agentId,
        type: agentType,
        complexity: complexity,
        created_at: new Date().toISOString(),
        status: 'generated',
        capabilities: this.generateCapabilities(agentType, complexity),
        specializations: this.getSpecializations(agentType, complexity),
        performance_metrics: {
          tasks_completed: 0,
          success_rate: 0.5,
          efficiency_score: 0.5,
          learning_rate: 0.1
        }
      };

      // Generate agent files
      await this.generateAgentFiles(agentId, config);
      
      // Update agent count
      this.updateAgentCount();
      
      return config;
    } catch (error) {
      console.error(`Failed to create agent ${agentId}:`, error.message);
      return null;
    }
  }

  async analyzeNeeds() {
    console.log('🔍 Analyzing needs from content crawler reports...');
    
    try {
      const reportsDir = path.join(__dirname, 'reports');
      const files = fs.readdirSync(reportsDir).filter(f => f.includes('app-content-crawler'));
      
      if (files.length === 0) {
        console.log('⚠️ No content crawler reports found, using default needs');
        return {
          agentCount: 3,
          priorityAreas: ['content', 'automation', 'monitoring'],
          urgency: 'medium'
        };
      }
      
      // Read the latest report (look for JSON files, not markdown)
      const jsonFiles = files.filter(f => f.endsWith('.json'));
      if (jsonFiles.length === 0) {
        console.log('⚠️ No JSON reports found, using default needs');
        return {
          agentCount: 3,
          priorityAreas: ['content', 'automation', 'monitoring'],
          urgency: 'medium'
        };
      }
      
      const latestReport = jsonFiles.sort().pop();
      const reportPath = path.join(reportsDir, latestReport);
      const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
      
      // Analyze gaps and suggest agents
      const needs = {
        agentCount: 0,
        priorityAreas: [],
        urgency: 'medium'
      };
      
      if (report.gapAnalysis) {
        const gaps = report.gapAnalysis;
        const totalGaps = Object.values(gaps).reduce((sum, arr) => sum + (arr ? arr.length : 0), 0);
        
        needs.agentCount = Math.min(Math.max(Math.ceil(totalGaps / 3), 2), 10);
        needs.priorityAreas = Object.keys(gaps).filter(key => gaps[key] && gaps[key].length > 0);
        needs.urgency = totalGaps > 10 ? 'high' : totalGaps > 5 ? 'medium' : 'low';
      }
      
      console.log(`📊 Needs analysis: ${needs.agentCount} agents needed for ${needs.priorityAreas.join(', ')}`);
      return needs;
      
    } catch (error) {
      console.error('⚠️ Error analyzing needs:', error.message);
      return {
        agentCount: 3,
        priorityAreas: ['content', 'automation', 'monitoring'],
        urgency: 'medium'
      };
    }
  }

  async createWorkflows(agents) {
    console.log('⚡ Creating workflows for agents...');
    
    const workflows = [];
    
    for (const agent of agents) {
      try {
        const workflow = await this.generateAgentWorkflow(agent);
        if (workflow) {
          workflows.push(workflow);
        }
      } catch (error) {
        console.error(`⚠️ Failed to create workflow for ${agent.id}:`, error.message);
      }
    }
    
    return workflows;
  }

  async generateAgentWorkflow(agent) {
    const workflowDir = path.join(process.cwd(), '.github', 'workflows');
    const workflowPath = path.join(workflowDir, `agent-${agent.id}.yml`);
    
    const workflow = {
      name: `Agent: ${agent.id}`,
      on: {
        workflow_dispatch: {},
        schedule: [
          { cron: '0 */6 * * *' } // Every 6 hours
        ]
      },
      jobs: {
        'agent-execution': {
          'runs-on': 'ubuntu-latest',
          steps: [
            {
              name: 'Checkout code',
              uses: 'actions/checkout@v4'
            },
            {
              name: 'Setup Node.js',
              uses: 'actions/setup-node@v4',
              with: {
                'node-version': '18'
              }
            },
            {
              name: 'Install dependencies',
              run: 'npm ci'
            },
            {
              name: 'Run agent',
              run: `node automation/agents/${agent.type}/${agent.id}/index.cjs`
            }
          ]
        }
      }
    };
    
    // Ensure workflow directory exists
    if (!fs.existsSync(workflowDir)) {
      fs.mkdirSync(workflowDir, { recursive: true });
    }
    
    // Write workflow file as YAML
    const yamlContent = this.convertToYaml(workflow);
    fs.writeFileSync(workflowPath, yamlContent);
    
    console.log(`✅ Created workflow for agent ${agent.id}`);
    return workflow;
  }

  async generateDocumentation(agents) {
    console.log('📚 Generating agent documentation...');
    
    const docsDir = path.join(this.agentsDir, 'docs');
    if (!fs.existsSync(docsDir)) {
      fs.mkdirSync(docsDir, { recursive: true });
    }
    
    const readmePath = path.join(docsDir, 'README.md');
    const readme = this.generateReadmeContent(agents);
    
    fs.writeFileSync(readmePath, readme);
    console.log('✅ Agent documentation generated');
  }

  convertToYaml(obj, indent = 0) {
    const spaces = '  '.repeat(indent);
    let yaml = '';
    
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        yaml += `${spaces}${key}:\n${this.convertToYaml(value, indent + 1)}`;
      } else if (Array.isArray(value)) {
        yaml += `${spaces}${key}:\n`;
        for (const item of value) {
          if (typeof item === 'object') {
            yaml += `${spaces}- ${this.convertToYaml(item, indent + 1).trimStart()}`;
          } else {
            yaml += `${spaces}- ${item}\n`;
          }
        }
      } else {
        yaml += `${spaces}${key}: ${value}\n`;
      }
    }
    
    return yaml;
  }

  generateReadmeContent(agents) {
    return `# Agent Factory Documentation

Generated on: ${new Date().toISOString()}

## 🤖 Active Agents

${agents.map(agent => `
### ${agent.id}
- **Type**: ${agent.type}
- **Complexity**: ${agent.complexity}
- **Status**: ${agent.status}
- **Created**: ${agent.created_at}
- **Capabilities**: ${Object.keys(agent.capabilities).join(', ')}
`).join('\n')}

## 📊 Agent Statistics

- **Total Agents**: ${agents.length}
- **Agent Types**: ${[...new Set(agents.map(a => a.type))].join(', ')}
- **Complexity Levels**: ${[...new Set(agents.map(a => a.complexity))].join(', ')}

## 🚀 Getting Started

1. Agents are automatically generated based on application needs
2. Each agent has its own workflow in \`.github/workflows/\`
3. Agents run every 6 hours or can be triggered manually
4. Check agent logs for execution details

## 🔧 Configuration

The factory configuration is stored in \`automation/config/factory-config.json\`

## 📈 Performance Metrics

${agents.map(agent => `
### ${agent.id}
- Tasks Completed: ${agent.performance_metrics.tasks_completed}
- Success Rate: ${agent.performance_metrics.success_rate}
- Efficiency Score: ${agent.performance_metrics.efficiency_score}
- Learning Rate: ${agent.performance_metrics.learning_rate}
`).join('\n')}
`;
  }

  generateCapabilities(agentType, complexity) {
    const baseCapabilities = {
      code_generation: true,
      testing: true,
      deployment: true,
      monitoring: true,
      optimization: true,
      learning: true
    };

    // Add complexity-based capabilities
    if (complexity === 'expert') {
      baseCapabilities.ai_integration = true;
      baseCapabilities.quantum_computing = true;
      baseCapabilities.advanced_analytics = true;
    }

    if (complexity === 'advanced' || complexity === 'expert') {
      baseCapabilities.microservices = true;
      baseCapabilities.cloud_native = true;
      baseCapabilities.security_hardening = true;
    }

    return baseCapabilities;
  }

  getSpecializations(agentType, complexity) {
    const specializations = {
      'full-stack': {
        basic: ['html', 'css', 'javascript'],
        intermediate: ['react', 'nodejs', 'database'],
        advanced: ['microservices', 'cloud-deployment', 'ci-cd'],
        expert: ['ai-integration', 'performance-optimization', 'security-hardening']
      },
      'frontend': {
        basic: ['html', 'css', 'javascript'],
        intermediate: ['react', 'vue', 'sass'],
        advanced: ['typescript', 'state-management', 'pwa'],
        expert: ['performance', 'accessibility', 'animation']
      },
      'backend': {
        basic: ['nodejs', 'express', 'mongodb'],
        intermediate: ['authentication', 'api-design', 'testing'],
        advanced: ['microservices', 'caching', 'queues'],
        expert: ['scalability', 'security', 'monitoring']
      },
      'testing': {
        basic: ['unit-tests', 'integration-tests'],
        intermediate: ['e2e-tests', 'test-coverage'],
        advanced: ['performance-tests', 'security-tests'],
        expert: ['ai-testing', 'chaos-engineering']
      },
      'deployment': {
        basic: ['manual-deployment', 'environment-setup'],
        intermediate: ['automated-deployment', 'rollback'],
        advanced: ['blue-green', 'canary', 'infrastructure-as-code'],
        expert: ['multi-cloud', 'disaster-recovery', 'cost-optimization']
      },
      'monitoring': {
        basic: ['error-tracking', 'performance-metrics'],
        intermediate: ['alerting', 'dashboards'],
        advanced: ['distributed-tracing', 'anomaly-detection'],
        expert: ['predictive-analytics', 'ai-ops']
      },
      'optimization': {
        basic: ['code-review', 'performance-audit'],
        intermediate: ['bundle-optimization', 'database-optimization'],
        advanced: ['algorithm-optimization', 'infrastructure-optimization'],
        expert: ['ai-optimization', 'quantum-optimization']
      }
    };

    return specializations[agentType]?.[complexity] || [];
  }

  async generateAgentFiles(agentId, config) {
    // Generate agent configuration
    const configPath = path.join(this.agentsDir, `${agentId}.json`);
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2));

    // Generate agent implementation
    const agentCode = this.generateAgentCode(config);
    const agentPath = path.join(this.agentsDir, `${agentId}.cjs`);
    fs.writeFileSync(agentPath, agentCode);

    // Generate capabilities file
    const capabilitiesCode = this.generateCapabilitiesCode(config.type);
    const capabilitiesPath = path.join(this.capabilitiesDir, `${config.type}.js`);
    
    if (!fs.existsSync(capabilitiesPath)) {
      fs.writeFileSync(capabilitiesPath, capabilitiesCode);
    }
  }

  generateAgentCode(config) {
    return `const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const EventEmitter = require('events');

class ${config.type.charAt(0).toUpperCase() + config.type.slice(1)}Agent extends EventEmitter {
  constructor(config) {
    super();
    this.config = config;
    this.capabilities = config.capabilities;
    this.performance = config.performance_metrics;
    this.active = true;
    this.lastTaskTime = Date.now();
  }

  async initialize() {
    console.log(\`🚀 Initializing \${this.config.type} agent with \${this.config.complexity} complexity\`);
    await this.loadCapabilities();
    await this.startMonitoring();
    await this.startTaskGeneration();
    return true;
  }

  async loadCapabilities() {
    const capabilityPath = path.join(__dirname, 'capabilities', \`\${this.config.type}.js\`);
    if (fs.existsSync(capabilityPath)) {
      const capabilities = require(capabilityPath);
      this.specializations = capabilities.getSpecializations(this.config.complexity);
    }
  }

  async startMonitoring() {
    setInterval(async () => {
      await this.selfImprove();
      await this.analyzePerformance();
      await this.emitPerformanceUpdate();
    }, 300000); // Every 5 minutes
  }

  async startTaskGeneration() {
    setInterval(async () => {
      if (this.active && this.performance.efficiency_score > 0.3) {
        await this.generateAndExecuteTask();
      }
    }, 60000); // Every minute
  }

  async generateAndExecuteTask() {
    try {
      const task = await this.createTask();
      if (task) {
        const result = await this.executeTask(task);
        this.emit('task:completed', { task, result, timestamp: new Date() });
        this.performance.tasks_completed++;
        this.performance.success_rate = Math.min(1.0, this.performance.success_rate + 0.01);
      }
    } catch (error) {
      this.emit('task:failed', { error: error.message, timestamp: new Date() });
      this.performance.success_rate = Math.max(0.0, this.performance.success_rate - 0.02);
    }
  }

  async createTask() {
    const taskTypes = ['code_generation', 'testing', 'deployment', 'monitoring', 'optimization'];
    const taskType = taskTypes[Math.floor(Math.random() * taskTypes.length)];
    
    return {
      id: \`task-\${Date.now()}-\${Math.random().toString(36).substr(2, 9)}\`,
      type: taskType,
      priority: Math.random() > 0.7 ? 'high' : 'normal',
      complexity: this.config.complexity,
      created_at: new Date().toISOString()
    };
  }

  async executeTask(task) {
    console.log(\`⚡ Executing task: \${task.type} (priority: \${task.priority})\`);
    
    // Simulate task execution
    const executionTime = Math.random() * 5000 + 1000; // 1-6 seconds
    await new Promise(resolve => setTimeout(resolve, executionTime));
    
    // Update performance based on task complexity
    if (task.complexity === 'expert') {
      this.performance.efficiency_score = Math.min(1.0, this.performance.efficiency_score + 0.02);
    } else if (task.complexity === 'advanced') {
      this.performance.efficiency_score = Math.min(1.0, this.performance.efficiency_score + 0.01);
    }
    
    return {
      status: 'completed',
      execution_time: executionTime,
      result: \`Task \${task.type} completed successfully\`
    };
  }

  async selfImprove() {
    const improvementAreas = await this.identifyImprovementAreas();
    for (const area of improvementAreas) {
      await this.implementImprovement(area);
    }
  }

  async identifyImprovementAreas() {
    const areas = [];
    if (this.performance.success_rate < 0.9) areas.push('success_rate');
    if (this.performance.efficiency_score < 0.8) areas.push('efficiency');
    return areas;
  }

  async implementImprovement(area) {
    console.log(\`🔧 Implementing improvement in area: \${area}\`);
    
    if (area === 'efficiency') {
      this.performance.efficiency_score = Math.min(1.0, this.performance.efficiency_score + 0.01);
    } else if (area === 'success_rate') {
      this.performance.success_rate = Math.min(1.0, this.performance.success_rate + 0.005);
    }
  }

  async analyzePerformance() {
    const timeSinceLastTask = Date.now() - this.lastTaskTime;
    if (timeSinceLastTask > 300000) { // 5 minutes
      this.performance.efficiency_score = Math.max(0.0, this.performance.efficiency_score - 0.005);
    }
  }

  async emitPerformanceUpdate() {
    this.emit('performance:updated', {
      agentId: this.config.id,
      metrics: this.performance,
      timestamp: new Date()
    });
  }
}

module.exports = ${config.type.charAt(0).toUpperCase() + config.type.slice(1)}Agent;`;
  }

  generateCapabilitiesCode(agentType) {
    const capabilities = this.getSpecializations(agentType, 'expert');
    
    return `function getSpecializations(complexity) {
  const specializations = ${JSON.stringify(capabilities, null, 2)};
  return specializations[complexity] || [];
}

module.exports = { getSpecializations };`;
  }

  updateAgentCount() {
    const agentCountPath = path.join(this.agentsDir, '.agent_count');
    const currentCount = this.getAgentCount();
    fs.writeFileSync(agentCountPath, (currentCount + 1).toString());
  }

  getAgentCount() {
    const agentCountPath = path.join(this.agentsDir, '.agent_count');
    if (fs.existsSync(agentCountPath)) {
      return parseInt(fs.readFileSync(agentCountPath, 'utf8')) || 0;
    }
    return 0;
  }

  async generateGrowthReport() {
    const totalAgents = this.getAgentCount();
    const agentFiles = fs.readdirSync(this.agentsDir).filter(file => file.endsWith('.json'));
    
    let totalEfficiency = 0;
    let totalSuccess = 0;
    
    for (const file of agentFiles) {
      try {
        const agent = JSON.parse(fs.readFileSync(path.join(this.agentsDir, file), 'utf8'));
        totalEfficiency += agent.performance_metrics.efficiency_score;
        totalSuccess += agent.performance_metrics.success_rate;
      } catch (error) {
        console.warn(`Could not read agent file: ${file}`);
      }
    }
    
    const averageEfficiency = agentFiles.length > 0 ? totalEfficiency / agentFiles.length : 0;
    const averageSuccess = agentFiles.length > 0 ? totalSuccess / agentFiles.length : 0;
    
    const report = {
      timestamp: new Date().toISOString(),
      total_agents: totalAgents,
      active_agents: agentFiles.length,
      average_efficiency: averageEfficiency,
      average_success_rate: averageSuccess,
      exponential_factor: totalAgents * averageEfficiency,
      next_generation_target: Math.ceil(totalAgents * this.config.growthTarget),
      optimization_opportunities: agentFiles.filter(file => {
        try {
          const agent = JSON.parse(fs.readFileSync(path.join(this.agentsDir, file), 'utf8'));
          return agent.performance_metrics.efficiency_score < 0.8;
        } catch {
          return false;
        }
      }).length
    };
    
    const reportPath = path.join(this.reportsDir, `growth-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log('📊 Growth report generated:', report);
    return report;
  }

  async startContinuousGeneration() {
    console.log('🔄 Starting continuous agent generation...');
    
    const interval = setInterval(async () => {
      try {
        const currentCount = this.getAgentCount();
        
        if (currentCount < this.config.maxAgents) {
          const growthTarget = Math.ceil(currentCount * (this.config.growthTarget - 1));
          const newAgents = Math.min(growthTarget, this.config.maxAgents - currentCount);
          
          if (newAgents > 0) {
            await this.generateAgents(newAgents);
            await this.generateGrowthReport();
          }
        } else {
          console.log('📈 Maximum agent count reached, focusing on optimization');
          clearInterval(interval);
        }
      } catch (error) {
        console.error('Error in continuous generation:', error.message);
      }
    }, this.config.generationInterval);
    
    return interval;
  }
}

// CLI interface
if (require.main === module) {
  const factory = new AgentFactory();
  
  const command = process.argv[2];
  const count = parseInt(process.argv[3]) || 1;
  
  switch (command) {
    case 'generate':
      factory.generateAgents(count).then(() => {
        console.log('✅ Agent generation completed');
        process.exit(0);
      });
      break;
      
    case 'report':
      factory.generateGrowthReport().then(() => {
        console.log('✅ Growth report generated');
        process.exit(0);
      });
      break;
      
    case 'continuous':
      factory.startContinuousGeneration();
      console.log('🔄 Continuous generation started. Press Ctrl+C to stop.');
      break;
      
    default:
      console.log(`
🤖 Agent Factory - Exponential Development Automation

Usage:
  node agent-factory.cjs generate [count]  - Generate specified number of agents
  node agent-factory.cjs report            - Generate growth report
  node agent-factory.cjs continuous        - Start continuous generation

Examples:
  node agent-factory.cjs generate 5        - Generate 5 agents
  node agent-factory.cjs continuous        - Start continuous generation
      `);
      process.exit(0);
  }
}

module.exports = AgentFactory;
