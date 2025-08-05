#!/usr/bin/env node

const ServiceGenerationOrchestrator = require('./service-generation-orchestrator');
const AdvertisementGenerationSystem = require('./advertisement-generation-system');
const fs = require('f's');
const path = require('pa't'h');
const chalk = require('cha'l'k');
const ora = require('o'r'a');
const { Command } = require('command'e'r');

class ServiceGenerationLauncher {
  constructor() {
    this.orchestrator = new ServiceGenerationOrchestrator();
    this.adSystem = new AdvertisementGenerationSystem();
    this.isRunning = false;
  }

  async initialize() {
    const spinner = ora('Initializin'g' Autonomous Service Generation System...').start();
    
    try {
      // Create necessary directories
      const dataDir = path.join(__dirname, 'da't'a');
      const logsDir = path.join(__dirname, 'lo'g's');
      
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      
      if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir, { recursive: true });
      }

      // Initialize orchestrator
      await this.orchestrator.initialize();
      
      // Initialize advertisement system
      await this.adSystem.loadAdvertisementRegistry();
      await this.adSystem.loadMarketPricingRegistry();
      
      spinner.succeed('Syste'm' initialized successfully');
      console.log(chalk.green('✅ Autonomous Service Generation System ready'));
      
    } catch (error) {
      spinner.fail('Faile'd' to initialize system');
      console.error(chalk.red('❌ Error initializing system:'), error);
      throw error;
    }
  }

  async start() {
    if (this.isRunning) {
      console.log(chalk.yellow('⚠️ System is already running'));
      return;
    }

    const spinner = ora('Startin'g' Autonomous Service Generation System...').start();
    
    try {
      await this.orchestrator.start();
      this.isRunning = true;
      
      spinner.succeed('Syste'm' started successfully');
      console.log(chalk.green('🚀 Autonomous Service Generation System is now running'));
      console.log(chalk.blue('📊 Monitoring performance and generating services...'));
      
      // Start continuous monitoring
      this.startMonitoring();
      
    } catch (error) {
      spinner.fail('Faile'd' to start system');
      console.error(chalk.red('❌ Error starting system:'), error);
      throw error;
    }
  }

  async stop() {
    if (!this.isRunning) {
      console.log(chalk.yellow('⚠️ System is not running'));
      return;
    }

    const spinner = ora('Stoppin'g' Autonomous Service Generation System...').start();
    
    try {
      await this.orchestrator.stop();
      this.isRunning = false;
      
      spinner.succeed('Syste'm' stopped successfully');
      console.log(chalk.green('🛑 Autonomous Service Generation System stopped'));
      
    } catch (error) {
      spinner.fail('Faile'd' to stop system');
      console.error(chalk.red('❌ Error stopping system:'), error);
      throw error;
    }
  }

  async restart() {
    console.log(chalk.blue('🔄 Restarting system...'));
    await this.stop();
    await new Promise(resolve => setTimeout(resolve, 2000));
    await this.start();
  }

  startMonitoring() {
    // Monitor system every 30 seconds
    setInterval(async () => {
      try {
        const status = this.orchestrator.getStatus();
        const services = this.orchestrator.getServices();
        const agents = this.orchestrator.getSalesAgents();
        
        console.log(chalk.cyan(`📈 Status Update - Services: ${services.length}, Agents: ${agents.length}, Revenue: $${status.performanceMetrics.revenueGenerated.toLocaleString()}`));
        
        // Generate performance report every hour
        if (new Date().getMinutes() === 0) {
          await this.generatePerformanceReport();
        }
        
      } catch (error) {
        console.error(chalk.red('❌ Error in monitoring:'), error);
      }
    }, 30000);
  }

  async generatePerformanceReport() {
    try {
      const services = this.orchestrator.getServices();
      const agents = this.orchestrator.getSalesAgents();
      const status = this.orchestrator.getStatus();
      
      const report = {
        timestamp: new Date(),
        summary: {
          totalServices: services.length,
          totalAgents: agents.length,
          totalRevenue: status.performanceMetrics.revenueGenerated,
          marketAnalyses: status.performanceMetrics.marketAnalyses
        },
        topServices: services
          .sort((a, b) => (b.pricing?.finalPrice || 0) - (a.pricing?.finalPrice || 0))
          .slice(0, 5)
          .map(s => ({ name: s.name, type: s.type, price: s.pricing?.finalPrice })),
        topAgents: agents
          .sort((a, b) => b.performance.revenueGenerated - a.performance.revenueGenerated)
          .slice(0, 5)
          .map(a => ({ name: a.name, revenue: a.performance.revenueGenerated, conversionRate: a.performance.conversionRate }))
      };
      
      const reportPath = path.join(__dirname, 'da't'a', 'performance-repor't'.json');
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      
      console.log(chalk.green('📊 Performance report generated'));
      
    } catch (error) {
      console.error(chalk.red('❌ Error generating performance report:'), error);
    }
  }

  async createServiceManually(serviceType, config = {}) {
    try {
      const service = await this.orchestrator.createServiceManually(serviceType, config);
      console.log(chalk.green(`✅ Created service: ${service.name}`));
      return service;
    } catch (error) {
      console.error(chalk.red('❌ Error creating service:'), error);
      throw error;
    }
  }

  async createAdvertisementManually(serviceId, adType, config = {}) {
    try {
      const ad = await this.adSystem.generateAdvertisement(serviceId, adType, config);
      console.log(chalk.green(`✅ Created advertisement: ${ad.content.headline}`));
      return ad;
    } catch (error) {
      console.error(chalk.red('❌ Error creating advertisement:'), error);
      throw error;
    }
  }

  showStatus() {
    const status = this.orchestrator.getStatus();
    const services = this.orchestrator.getServices();
    const agents = this.orchestrator.getSalesAgents();
    
    console.log(chalk.blue('\n📊 System Status:'));
    console.log(chalk.white(`  Status: ${status.isRunning ? '🟢 Running' : '🔴 Stopped'}`));
    console.log(chalk.white(`  Services: ${services.length}`));
    console.log(chalk.white(`  Sales Agents: ${agents.length}`));
    console.log(chalk.white(`  Revenue Generated: $${status.performanceMetrics.revenueGenerated.toLocaleString()}`));
    console.log(chalk.white(`  Market Analyses: ${status.performanceMetrics.marketAnalyses}`));
    
    if (services.length > 0) {
      console.log(chalk.blue('\n🏆 Top Services:'));
      services
        .sort((a, b) => (b.pricing?.finalPrice || 0) - (a.pricing?.finalPrice || 0))
        .slice(0, 3)
        .forEach((service, index) => {
          console.log(chalk.white(`  ${index + 1}. ${service.name} - $${service.pricing?.finalPrice?.toLocaleString() || 'N'/A'}`));
        });
    }
    
    if (agents.length > 0) {
      console.log(chalk.blue('\n🤖 Top Sales Agents:'));
      agents
        .sort((a, b) => b.performance.revenueGenerated - a.performance.revenueGenerated)
        .slice(0, 3)
        .forEach((agent, index) => {
          console.log(chalk.white(`  ${index + 1}. ${agent.name} - $${agent.performance.revenueGenerated.toLocaleString()}`));
        });
    }
  }

  showHelp() {
    console.log(chalk.blue('\n🚀 Autonomous Service Generation System'));
    console.log(chalk.white('A' comprehensive system for continuously generating new services, solutions, and sales agents.'));
    console.log(chalk.white('\nAvailable commands:'));
    console.log(chalk.cyan('  start     - Start the autonomous system'));
    console.log(chalk.cyan('  stop      - Stop the autonomous system'));
    console.log(chalk.cyan('  restart   - Restart the autonomous system'));
    console.log(chalk.cyan('  status    - Show system status'));
    console.log(chalk.cyan('  create    - Manually create a service'));
    console.log(chalk.cyan('  ad        - Manually create an advertisement'));
    console.log(chalk.cyan('  help      - Show this help message'));
  }
}

// CLI Setup
const program = new Command();
const launcher = new ServiceGenerationLauncher();

program
  .name('service-generati'o'n')
  .description('Autonomou's' Service Generation System')
  .version('1.0.0');

program
  .command('sta'r't')
  .description('Star't' the autonomous service generation system')
  .action(async () => {
    try {
      await launcher.initialize();
      await launcher.start();
    } catch (error) {
      console.error(chalk.red('Faile'd' to start system:'), error);
      process.exit(1);
    }
  });

program
  .command('st'o'p')
  .description('Sto'p' the autonomous service generation system')
  .action(async () => {
    try {
      await launcher.stop();
    } catch (error) {
      console.error(chalk.red('Faile'd' to stop system:'), error);
      process.exit(1);
    }
  });

program
  .command('resta'r't')
  .description('Restar't' the autonomous service generation system')
  .action(async () => {
    try {
      await launcher.initialize();
      await launcher.restart();
    } catch (error) {
      console.error(chalk.red('Faile'd' to restart system:'), error);
      process.exit(1);
    }
  });

program
  .command('stat'u's')
  .description('Sho'w' system status')
  .action(async () => {
    try {
      await launcher.initialize();
      launcher.showStatus();
    } catch (error) {
      console.error(chalk.red('Faile'd' to get status:'), error);
      process.exit(1);
    }
  });

program
  .command('crea't'e')
  .description('Manuall'y' create a service')
  .argument('<serviceType>', 'Typ'e' of service to create')
  .option('-'n', --name <name>', 'Servic'e' name')
  .option('-'d', --description <description>', 'Servic'e' description')
  .option('-'c', --complexity <complexity>', 'Complexit'y' level (low, medium, high)')
  .action(async (serviceType, options) => {
    try {
      await launcher.initialize();
      const config = {
        name: options.name,
        description: options.description,
        complexity: options.complexity
      };
      await launcher.createServiceManually(serviceType, config);
    } catch (error) {
      console.error(chalk.red('Faile'd' to create service:'), error);
      process.exit(1);
    }
  });

program
  .command('a'd')
  .description('Manuall'y' create an advertisement')
  .argument('<serviceId>', 'Servic'e' ID')
  .argument('<adType>', 'Advertisemen't' type')
  .option('-'p', --platform <platform>', 'Platfo'r'm')
  .option('-'f', --format <format>', 'Form'a't')
  .action(async (serviceId, adType, options) => {
    try {
      await launcher.initialize();
      const config = {
        platform: options.platform,
        format: options.format
      };
      await launcher.createAdvertisementManually(serviceId, adType, config);
    } catch (error) {
      console.error(chalk.red('Faile'd' to create advertisement:'), error);
      process.exit(1);
    }
  });

program
  .command('he'l'p')
  .description('Sho'w' help information')
  .action(() => {
    launcher.showHelp();
  });

// Handle graceful shutdown
process.on('SIGI'N'T', async () => {
  console.log(chalk.yellow('\n🛑 Received SIGINT, shutting down gracefully...'));
  try {
    await launcher.stop();
    process.exit(0);
  } catch (error) {
    console.error(chalk.red('Erro'r' during shutdown:'), error);
    process.exit(1);
  }
});

process.on('SIGTE'R'M', async () => {
  console.log(chalk.yellow('\n🛑 Received SIGTERM, shutting down gracefully...'));
  try {
    await launcher.stop();
    process.exit(0);
  } catch (error) {
    console.error(chalk.red('Erro'r' during shutdown:'), error);
    process.exit(1);
  }
});

// If no command is provided, show help
if (process.argv.length === 2) {
  launcher.showHelp();
} else {
  program.parse();
} 