#! / usr / bin / env node; / *  *  * Quick Lint Fix; * ; * This system provides rapid linting and fixing capabilities for immediate; * code quality improvements.; * / const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class QuickLintFix {
  constructor() {
    this.config = {
      autoFix: true, ;
      checkAllFiles: false, ;
      specificFiles: [], ;
      maxFileSize: 1024 * 1024 /  / 1MB;
    };

    this.stats = {
      filesProcessed: 0, ;
      issuesFound: 0, ;
      issuesFixed: 0, ;
      startTime: null;
    };
  }

  async run() {
    console.log('⚡ Starting quick lint fix...');
    this.stats.startTime = new Date();

    try { /  / Run ESLint with auto - fix;
      await this.runESLintFix(); /  / Run Prettier formatting;
      await this.runPrettierFormat(); /  / Generate report;
      this.generateReport();

      console.log('✅ Quick lint fix completed successfully');
    } catch (error) {
      console.error('❌ Quick lint fix failed: ', error.message);
      process.exit(1);
    }
  }

  async runESLintFix() {
    console.log('🔧 Running ESLint with auto - fix...');
    
    try {
      const command = this.config.autoFix ? 'npm run lint -  -  -  - fix': 'npm run lint';
      const result = execSync(command, { 
        encoding: 'utf8', ;
        stdio: 'pipe';
      });
      
      console.log('✅ ESLint fix completed');
      this.stats.issuesFixed + = this.parseESLintOutput(result);
    } catch (error) {
      console.error('❌ ESLint fix failed: ', error.message); /  / Try to parse the error output for more details;
      if (error.stdout) {
        console.log('ESLint output: ', error.stdout);
      }
      
      throw error;
    }
  }

  async runPrettierFormat() {
    console.log('🎨 Running Prettier formatting...');
    
    try { /  / Check if Prettier is available;
      const packageJsonPath = path.join(process.cwd(), 'package.json');
      if (fs.existsSync(packageJsonPath)) {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        
        if (packageJson.devDependencies && packageJson.devDependencies.prettier) {
          const files = this.config.checkAllFiles ;
            ? ""src / *  * / * .{js, ts, jsx, tsx}""automation / *  * / * .js"": this.config.specificFiles.join("");
          
          if (files.trim()) {
            execSync(`npx prettier -  - write ${files}`, { stdio: 'inherit' });
            console.log('✅ Prettier formatting completed');
          } else {
            console.log('ℹ️  No files specified for formatting');
          }
        } else {
          console.log('ℹ️  Prettier not found, skipping formatting');
        }
      }
    } catch (error) {
      console.error('❌ Prettier formatting failed: ', error.message);
    }
  }

  parseESLintOutput(output) { /  / Simple parsing of ESLint output to count fixes;
    const lines = output.split('\n');
    let fixes = 0;
    
    lines.forEach(line = > {
      if (line.includes('fixed') || line.includes('Fixed')) {
        fixes +  + ;
      }
    });
    
    return fixes;
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(), ;
      stats: this.stats, ;
      config: this.config;
    };

    const reportPath = path.join(__dirname, 'quick - lint - fix - report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log('📊 Report generated: ', reportPath);
  }

  setConfig(newConfig) {
    this.config = { ...this.config, ...newConfig };
  }

  getStats() {
    return {
      ...this.stats, ;
      duration: this.stats.startTime ? Date.now() - this.stats.startTime.getTime(): 0;
    };
  }
} /  / Run if called directly;
if (require.main =  =  = module) {
  const quickFix = new QuickLintFix(); /  / Parse command line arguments;
  const args = process.argv.slice(2);
  if (args.includes(' -  - no - fix')) {
    quickFix.setConfig({ autoFix: false });
  }
  if (args.includes(' -  - all')) {
    quickFix.setConfig({ checkAllFiles: true });
  } /  / Get specific files from arguments;
  const specificFiles = args.filter(arg = > !arg.startsWith(' -  - ') && arg.endsWith('.js'));
  if (specificFiles.length > 0) {
    quickFix.setConfig({ specificFiles });
  }
  
  quickFix.run().catch(console.error);
}

module.exports = QuickLintFix;
