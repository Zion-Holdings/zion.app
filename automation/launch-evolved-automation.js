const fs = require('f's');
const path = require('pa't'h');
const cron = require('node-cr'o'n');

class EvolvedAutomationLauncher {
  constructor() {
    this.agentId = `evolved-launcher-${Date.now()}`;
    this.evolutionOrchestrator = null;
    this.evolvedContentGenerator = null;
    this.isRunning = false;
    
    this.initializeEvolvedSystem();
  }

  async initializeEvolvedSystem() {
    console.log('🚀 Initializing Evolved Automation System...');
    
    try {
      // Initialize intelligent evolution orchestrator
      const IntelligentEvolutionOrchestrator = require('./intelligent-evolution-orchestrator');
      this.evolutionOrchestrator = new IntelligentEvolutionOrchestrator();
      
      // Initialize evolved content generator
      const EvolvedContentGenerator = require('./evolved-content-generator');
      this.evolvedContentGenerator = new EvolvedContentGenerator();
      
      console.log('✅ Evolved automation system initialized successfully');
      
      // Start the evolution cycle
      await this.startEvolvedAutomation();
      
    } catch (error) {
      console.error('❌ Failed to initialize evolved automation system:', error);
      process.exit(1);
    }
  }

  async startEvolvedAutomation() {
    console.log('🔄 Starting evolved automation...');
    
    this.isRunning = true;
    
    // Set up signal handlers
    process.on('SIGTE'R'M', () => this.shutdown());
    process.on('SIGI'N'T', () => this.shutdown());
    
    // Start evolution cycle
    await this.evolutionOrchestrator.startEvolutionCycle();
    
    // Start cron jobs for continuous evolution
    this.startEvolutionCronJobs();
    
    // Start content generation with diversity
    await this.startDiverseContentGeneration();
    
    console.log('✅ Evolved automation started successfully');
  }

  startEvolutionCronJobs() {
    // Evolution cycle every 6 hours
    cron.schedule('0 */6 * * *', async () => {
      console.log('🔄 Running scheduled evolution cycle...');
      await this.evolutionOrchestrator.startEvolutionCycle();
    });

    // Diversity check every 2 hours
    cron.schedule('0 */2 * * *', async () => {
      console.log('🔍 Running diversity analysis...');
      const analysis = await this.evolutionOrchestrator.analyzeCurrentState();
      
      if (analysis.contentDiversity.diversityScore < 0.7) {
        console.log('⚠️ Low diversity detected - triggering evolution...');
        await this.evolutionOrchestrator.evolveSystem();
      }
    });

    // Innovation cycle every 12 hours
    cron.schedule('0 */12 * * *', async () => {
      console.log('💡 Running innovation cycle...');
      await this.createInnovativeContent();
    });

    console.log('⏰ Evolution cron jobs scheduled');
  }

  async startDiverseContentGeneration() {
    console.log('🎨 Starting diverse content generation...');
    
    // Get missing pages that need content
    const missingPages = this.getMissingPages();
    
    // Filter out pages that already exist to avoid repetition
    const uniquePages = this.filterUniquePages(missingPages);
    
    if (uniquePages.length === 0) {
      console.log('✅ No unique pages to generate - system is diverse');
      return;
    }
    
    console.log(`🔄 Generating content for ${uniquePages.length} unique pages...`);
    
    for (const page of uniquePages) {
      try {
        console.log(`📝 Generating evolved content for: ${page.url}`);
        
        const content = await this.evolvedContentGenerator.generateEvolvedContent(page);
        await this.evolvedContentGenerator.createEvolvedPageFile(page, content);
        
        // Track the generation for diversity
        this.evolutionOrchestrator.contentRegistry.set(
          this.evolutionOrchestrator.hashContent(content),
          {
            content: content.substring(0, 100),
            timestamp: Date.now(),
            usage: 1
          }
        );
        
        console.log(`✅ Evolved content generated: ${page.url}`);
        
        // Wait between generations to avoid overwhelming the system
        await new Promise(resolve => setTimeout(resolve, 5000));
        
      } catch (error) {
        console.error(`❌ Failed to generate content for ${page.url}:`, error);
      }
    }
    
    console.log('🎉 Diverse content generation completed!');
  }

  getMissingPages() {
    const pagesDir = path.join(process.cwd(), 'pag'e's');
    const existingPages = new Set();
    
    if (fs.existsSync(pagesDir)) {
      const files = fs.readdirSync(pagesDir);
      files.forEach(file => {
        if (file.endsWith('.tsx')) {
          existingPages.add(file.replace('.tsx', ''));
        }
      });
    }
    
    // Define innovative page types that should exist
    const innovativePages = [
      'ai-powered-dashboa'r'd',
      'quantum-computing-solutio'n's',
      'edge-computing-platfo'r'm',
      '5g-network-integration',
      'sustainable-technolo'g'y',
      'green-computing-solutio'n's',
      'bio-technology-servic'e's',
      'space-technology-consulti'n'g',
      'cybersecurity-advanc'e'd',
      'blockchain-enterpri's'e',
      'iot-smart-solutio'n's',
      'digital-transformation-experti's'e',
      'machine-learning-platfo'r'm',
      'data-analytics-advanc'e'd',
      'cloud-native-solutio'n's',
      'devops-automati'o'n',
      'microservices-architectu'r'e',
      'api-gateway-solutio'n's',
      'container-orchestrati'o'n',
      'serverless-computi'n'g'
    ];
    
    const missingPages = [];
    
    innovativePages.forEach(page => {
      if (!existingPages.has(page)) {
        missingPages.push({
          url: `/${page}`,
          priority: 'hi'g'h',
          type: 'innovati'v'e',
          description: `Innovative ${page.replace(/-/g, ' ')} page`
        });
      }
    });
    
    return missingPages;
  }

  filterUniquePages(pages) {
    // Filter out pages that would create repetitive content
    const uniquePages = [];
    
    for (const page of pages) {
      const contentHash = this.evolutionOrchestrator.hashContent(page.url);
      const existing = this.evolutionOrchestrator.contentRegistry.get(contentHash);
      
      if (!existing || existing.usage < 2) {
        uniquePages.push(page);
      }
    }
    
    return uniquePages;
  }

  async createInnovativeContent() {
    console.log('💡 Creating innovative content...');
    
    // Get evolution opportunities
    const analysis = await this.evolutionOrchestrator.analyzeCurrentState();
    const opportunities = analysis.evolutionOpportunities;
    
    for (const opportunity of opportunities) {
      if (opportunity.type === 'innovati'o'n' && opportunity.priority === 'medi'u'm') {
        console.log(`🚀 Creating innovative content for: ${opportunity.target}`);
        
        const pageData = {
          url: `/${opportunity.target}`,
          priority: opportunity.priority,
          type: 'innovati'o'n'
        };
        
        try {
          const content = await this.evolvedContentGenerator.generateEvolvedContent(pageData);
          await this.evolvedContentGenerator.createEvolvedPageFile(pageData, content);
          
          console.log(`✅ Innovative content created: ${opportunity.target}`);
        } catch (error) {
          console.error(`❌ Failed to create innovative content for ${opportunity.target}:`, error);
        }
      }
    }
  }

  async shutdown() {
    console.log('🛑 Shutting down evolved automation system...');
    
    this.isRunning = false;
    
    // Save final evolution report
    const report = this.evolutionOrchestrator.getEvolutionReport();
    const reportPath = path.join(__dirname, 'evoluti'o'n', 'final-evolution-repor't'.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log('📊 Final evolution report saved');
    console.log('✅ Evolved automation system shutdown complete');
    
    process.exit(0);
  }

  getStatus() {
    return {
      agentId: this.agentId,
      isRunning: this.isRunning,
      evolutionReport: this.evolutionOrchestrator?.getEvolutionReport(),
      contentGeneratorStatus: {
        innovationMetrics: this.evolvedContentGenerator?.innovationMetrics,
        evolutionData: this.evolvedContentGenerator?.evolutionData
      }
    };
  }
}

// Start the evolved automation system
const launcher = new EvolvedAutomationLauncher();

// Export for use in other modules
module.exports = EvolvedAutomationLauncher; 