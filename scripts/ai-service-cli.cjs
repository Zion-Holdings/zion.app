#!/usr/bin/env node

/**
 * AI Service CLI - Command Line Interface for AI Service Management
 * 
 * Usage:
 *   node scripts/ai-service-cli.cjs generate     - Generate new services
 *   node scripts/ai-service-cli.cjs status       - Check system status
 *   node scripts/ai-service-cli.cjs test         - Test service generation
 *   node scripts/ai-service-cli.cjs list         - List all services
 *   node scripts/ai-service-cli.cjs help         - Show help
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Import the AI Service Generator
const AIServiceGenerator = require('../automation/ai-service-generator.cjs');

class AIServiceCLI {
  constructor() {
    this.commands = {
      generate: this.generate.bind(this),
      status: this.status.bind(this),
      test: this.test.bind(this),
      list: this.list.bind(this),
      help: this.help.bind(this)
    };
  }

  async run() {
    const command = process.argv[2] || 'help';
    
    if (this.commands[command]) {
      try {
        await this.commands[command]();
      } catch (error) {
        console.error(`❌ Error executing command '${command}':`, error.message);
        process.exit(1);
      }
    } else {
      console.error(`❌ Unknown command: ${command}`);
      this.help();
      process.exit(1);
    }
  }

  async generate() {
    console.log('🚀 AI Service Generator CLI');
    console.log('============================\n');
    
    try {
      const generator = new AIServiceGenerator();
      await generator.generate();
      
      console.log('\n🎉 Service generation completed successfully!');
      console.log(`📊 Created ${generator.servicesCreated.length} new services`);
      
      // Show summary
      if (generator.servicesCreated.length > 0) {
        console.log('\n📋 Generated Services:');
        generator.servicesCreated.forEach((service, index) => {
          console.log(`  ${index + 1}. ${service.name} (${service.type})`);
          console.log(`     Status: ${service.status}`);
          console.log(`     Technology: ${service.technology}`);
          console.log(`     Path: ${service.path}`);
          console.log('');
        });
      }
      
    } catch (error) {
      console.error('❌ Service generation failed:', error.message);
      throw error;
    }
  }

  async status() {
    console.log('📊 AI Service System Status');
    console.log('============================\n');
    
    try {
      // Check if services directory exists
      const servicesDir = 'public/services';
      const servicesExist = fs.existsSync(servicesDir);
      
      console.log(`📁 Services Directory: ${servicesExist ? '✅ Exists' : '❌ Missing'}`);
      
      if (servicesExist) {
        const services = fs.readdirSync(servicesDir, { withFileTypes: true })
          .filter(dirent => dirent.isDirectory())
          .map(dirent => dirent.name);
        
        console.log(`📊 Total Services: ${services.length}`);
        
        if (services.length > 0) {
          console.log('\n📋 Service Categories:');
          const categories = new Set();
          services.forEach(serviceId => {
            try {
              const servicePath = path.join(servicesDir, serviceId, 'README.md');
              if (fs.existsSync(servicePath)) {
                const readme = fs.readFileSync(servicePath, 'utf8');
                const categoryMatch = readme.match(/## 🚀 Features/);
                if (categoryMatch) {
                  // Extract category from service ID
                  const category = serviceId.split('-')[0].replace(/([A-Z])/g, ' $1').trim();
                  categories.add(category);
                }
              }
            } catch (error) {
              // Skip if can't read service
            }
          });
          
          Array.from(categories).sort().forEach(category => {
            console.log(`  • ${category}`);
          });
        }
      }
      
      // Check PM2 processes
      console.log('\n🔄 PM2 Processes:');
      try {
        const pm2Status = execSync('pm2 list', { encoding: 'utf8' });
        const aiServiceProcesses = pm2Status.split('\n').filter(line => 
          line.includes('ai-service') || line.includes('ai-service-generator') || line.includes('ai-service-scheduler')
        );
        
        if (aiServiceProcesses.length > 0) {
          aiServiceProcesses.forEach(line => {
            console.log(`  ${line.trim()}`);
          });
        } else {
          console.log('  No AI service PM2 processes found');
        }
      } catch (error) {
        console.log('  PM2 not available or no processes running');
      }
      
      // Check recent reports
      console.log('\n📈 Recent Reports:');
      const reportsDir = 'public/reports/service-generation';
      if (fs.existsSync(reportsDir)) {
        const reports = fs.readdirSync(reportsDir)
          .filter(file => file.endsWith('.json'))
          .sort()
          .reverse()
          .slice(0, 3);
        
        if (reports.length > 0) {
          reports.forEach(report => {
            try {
              const reportData = JSON.parse(fs.readFileSync(path.join(reportsDir, report), 'utf8'));
              console.log(`  📊 ${report}: ${reportData.servicesCreated} services created`);
            } catch (error) {
              console.log(`  📊 ${report}: Error reading report`);
            }
          });
        } else {
          console.log('  No reports found');
        }
      } else {
        console.log('  Reports directory not found');
      }
      
    } catch (error) {
      console.error('❌ Error checking status:', error.message);
    }
  }

  async test() {
    console.log('🧪 AI Service Generator Test');
    console.log('=============================\n');
    
    try {
      // Test 1: Check if generator can be instantiated
      console.log('1️⃣ Testing generator instantiation...');
      const generator = new AIServiceGenerator();
      console.log('   ✅ Generator instantiated successfully');
      
      // Test 2: Check directory creation
      console.log('\n2️⃣ Testing directory creation...');
      const testDir = 'automation/test-service-generation';
      if (!fs.existsSync(testDir)) {
        fs.mkdirSync(testDir, { recursive: true });
        console.log('   ✅ Test directory created');
      } else {
        console.log('   ✅ Test directory already exists');
      }
      
      // Test 3: Test service data generation
      console.log('\n3️⃣ Testing service data generation...');
      const testService = generator.generateServiceData('Test Service Type', {
        description: 'Test service description',
        features: ['Feature 1', 'Feature 2'],
        pricing: { model: 'test', startingPrice: '$0', details: 'Test pricing' },
        metrics: { uptime: '100%', responseTime: '0ms', users: '0' }
      });
      
      console.log('   ✅ Service data generated:', {
        id: testService.id,
        name: testService.name,
        type: testService.type
      });
      
      // Test 4: Test file generation
      console.log('\n4️⃣ Testing file generation...');
      const testServiceDir = path.join(testDir, testService.id);
      fs.mkdirSync(testServiceDir, { recursive: true });
      
      generator.generateServiceFiles(testService, testServiceDir);
      console.log('   ✅ Service files generated');
      
      // Test 5: Cleanup
      console.log('\n5️⃣ Cleaning up test files...');
      execSync(`rm -rf ${testDir}`, { stdio: 'inherit' });
      console.log('   ✅ Test files cleaned up');
      
      console.log('\n🎉 All tests passed! AI Service Generator is working correctly.');
      
    } catch (error) {
      console.error('❌ Test failed:', error.message);
      throw error;
    }
  }

  async list() {
    console.log('📋 AI Services List');
    console.log('===================\n');
    
    try {
      const servicesDir = 'public/services';
      if (!fs.existsSync(servicesDir)) {
        console.log('❌ Services directory not found');
        return;
      }
      
      const services = fs.readdirSync(servicesDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);
      
      if (services.length === 0) {
        console.log('📭 No services found');
        return;
      }
      
      console.log(`Found ${services.length} services:\n`);
      
      services.forEach((serviceId, index) => {
        try {
          const readmePath = path.join(servicesDir, serviceId, 'README.md');
          if (fs.existsSync(readmePath)) {
            const readme = fs.readFileSync(readmePath, 'utf8');
            const titleMatch = readme.match(/^# (.+)$/m);
            const title = titleMatch ? titleMatch[1] : serviceId;
            
            console.log(`${index + 1}. ${title}`);
            console.log(`   ID: ${serviceId}`);
            console.log(`   Path: ${servicesDir}/${serviceId}`);
            
            // Check if service has all required files
            const requiredFiles = ['README.md', 'package.json', 'Dockerfile', 'API.md'];
            const missingFiles = requiredFiles.filter(file => 
              !fs.existsSync(path.join(servicesDir, serviceId, file))
            );
            
            if (missingFiles.length === 0) {
              console.log(`   Status: ✅ Complete`);
            } else {
              console.log(`   Status: ⚠️ Missing: ${missingFiles.join(', ')}`);
            }
            
            console.log('');
          } else {
            console.log(`${index + 1}. ${serviceId} (No README found)`);
            console.log('');
          }
        } catch (error) {
          console.log(`${index + 1}. ${serviceId} (Error reading service)`);
          console.log('');
        }
      });
      
    } catch (error) {
      console.error('❌ Error listing services:', error.message);
    }
  }

  help() {
    console.log('🤖 AI Service CLI - Help');
    console.log('=========================\n');
    console.log('Commands:');
    console.log('  generate  - Generate new AI services');
    console.log('  status    - Check system status and health');
    console.log('  test      - Run tests to verify system functionality');
    console.log('  list      - List all existing services');
    console.log('  help      - Show this help message\n');
    console.log('Examples:');
    console.log('  node scripts/ai-service-cli.cjs generate');
    console.log('  node scripts/ai-service-cli.cjs status');
    console.log('  node scripts/ai-service-cli.cjs test');
    console.log('  node scripts/ai-service-cli.cjs list\n');
    console.log('For more information, check the automation/ai-service-generator.cjs file.');
  }
}

// Run CLI
async function main() {
  const cli = new AIServiceCLI();
  await cli.run();
}

if (require.main === module) {
  main().catch(error => {
    console.error('❌ CLI failed:', error.message);
    process.exit(1);
  });
}

module.exports = AIServiceCLI;