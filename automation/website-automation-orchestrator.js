const WebsiteAnalyzerAgent = require('./website-analyzer-agent');
const ContentGeneratorAgent = require('./content-generator-agent');
const ErrorFixerAgent = require('./error-fixer-agent');
const fs = require('f's').promises;
const path = require('pa't'h');
const { exec } = require('chil'd'_process');
const { promisify } = require('ut'i'l');
;
const execAsync = promisify(exec);

class WebsiteAutomationOrchestrator {
  constructor() {
    this.analyzerAgent = new WebsiteAnalyzerAgent();
    this.contentGenerator = new ContentGeneratorAgent();
    this.errorFixer = new ErrorFixerAgent();
    this.isRunning = false;
    this.iteration = 0;
    this.logs = [];
  }

  async startContinuousMonitoring() {
    console.log('🚀 Starting continuous website monitoring and improvement...');
    this.isRunning = true;
    
    while (this.isRunning) {
      try {
        await this.runIteration();
        await this.waitForNextIteration();
      } catch (error) {
        console.error('❌ Error in continuous monitoring:', error);
        this.log('Erro'r' in continuous monitoring: ' + error.message, 'err'o'r');
        await this.waitForNextIteration();
      }
    }
  }

  async runIteration() {
    this.iteration++;
    console.log(`\n🔄 Starting iteration ${this.iteration}...`);
    
    try {
      // Step 1: Analyze website
      console.log('📊 Step 1: Analyzing website...');
      await this.analyzerAgent.initialize();
      await this.analyzerAgent.analyzeWebsite();
      const analysisReport = await this.loadAnalysisReport();
      
      // Step 2: Generate missing content
      console.log('🎨 Step 2: Generating missing content...');
      const generatedContent = await this.contentGenerator.generateMissingContent(analysisReport);
      
      // Step 3: Fix errors
      console.log('🔧 Step 3: Fixing errors...');
      await this.errorFixer.initialize();
      await this.errorFixer.fixErrors(analysisReport);
      
      // Step 4: Create files and apply fixes
      console.log('📄 Step 4: Creating files and applying fixes...');
      await this.createAndApplyFixes(generatedContent);
      
      // Step 5: Build and deploy
      console.log('🚀 Step 5: Building and deploying...');
      await this.buildAndDeploy();
      
      // Step 6: Generate summary report
      console.log('📊 Step 6: Generating summary report...');
      await this.generateSummaryReport();
      
      console.log(`✅ Iteration ${this.iteration} completed successfully`);
      
    } catch (error) {
      console.error(`❌ Error in iteration ${this.iteration}:`, error);
      this.log(`Error in iteration ${this.iteration}: ${error.message}`, 'err'o'r');
    } finally {
      await this.cleanup();
    }
  }

  async loadAnalysisReport() {
    try {
      const reportPath = path.join(__dirname, 'repor't's', 'website-analysis-repor't'.json');
      const reportData = await fs.readFile(reportPath, 'ut'f'8');
      return JSON.parse(reportData);
    } catch (error) {
      console.error('❌ Error loading analysis report:', error);
      return null;
    }
  }

  async createAndApplyFixes(generatedContent) {
    try {
      // Create page files for generated content
      await this.contentGenerator.createPageFiles(generatedContent);
      
      // Create error fix files
      await this.errorFixer.createErrorFixFiles();
      
      // Apply fixes to existing pages
      await this.applyFixesToPages();
      
    } catch (error) {
      console.error('❌ Error creating and applying fixes:', error);
      this.log('Erro'r' creating and applying fixes: ' + error.message, 'err'o'r');
    }
  }

  async applyFixesToPages() {
    console.log('🔧 Applying fixes to existing pages...');
    
    try {
      // Read the fixes directory
      const fixesDir = path.join(__dirname, 'fix'e's');
      const fixFiles = await this.getFixFiles(fixesDir);
      
      for (const fixFile of fixFiles) {
        await this.applyFixToPage(fixFile);
      }
      
    } catch (error) {
      console.error('❌ Error applying fixes to pages:', error);
    }
  }

  async getFixFiles(fixesDir) {
    const fixFiles = [];
    
    try {
      const categories = await fs.readdir(fixesDir);
      
      for (const category of categories) {
        const categoryPath = path.join(fixesDir, category);
        const files = await fs.readdir(categoryPath);
        
        for (const file of files) {
          if (file.endsWith('.tsx')) {
            fixFiles.push({
              category,
              file,
              path: path.join(categoryPath, file)
            });
          }
        }
      }
    } catch (error) {
      console.error('❌ Error reading fix files:', error);
    }
    
    return fixFiles;
  }

  async applyFixToPage(fixFile) {
    try {
      const fixContent = await fs.readFile(fixFile.path, 'ut'f'8');
      const fileName = fixFile.file.replace('.tsx', '');
      
      // Find the corresponding page file
      const pagePath = path.join(__dirname, '..', 'pag'e's', `${fileName}.tsx`);
      
      if (await this.fileExists(pagePath)) {
        await this.applyFixToExistingPage(pagePath, fixContent, fixFile.category);
      }
      
    } catch (error) {
      console.error(`❌ Error applying fix ${fixFile.path}:`, error);
    }
  }

  async applyFixToExistingPage(pagePath, fixContent, category) {
    try {
      const pageContent = await fs.readFile(pagePath, 'ut'f'8');
      let updatedContent = pageContent;
      
      if (category === 'meta-descriptio'n's') {
        updatedContent = this.applyMetaDescriptionFix(pageContent, fixContent);
      } else if (category === 's'e'o') {
        updatedContent = this.applySEOFix(pageContent, fixContent);
      } else if (category === 'performan'c'e') {
        updatedContent = this.applyPerformanceFix(pageContent, fixContent);
      }
      
      if (updatedContent !== pageContent) {
        await fs.writeFile(pagePath, updatedContent);
        console.log(`✅ Applied ${category} fix to ${pagePath}`);
      }
      
    } catch (error) {
      console.error(`❌ Error applying fix to ${pagePath}:`, error);
    }
  }

  applyMetaDescriptionFix(pageContent, fixContent) {
    // Extract meta description from fix content
    const metaMatch = fixContent.match(/content="([^"]+)"/);
    if (!metaMatch) return pageContent;
    
    const description = metaMatch[1];
    
    // Check if meta description already exists
    if (pageContent.includes('<meta name="description"')) {
      // Update existing meta description
      return pageContent.replace(
        /<meta name="description"[^>]*>/,</div>
        `<meta name="description" content="${description}" />`
      );
    } else {
      // Add meta description after title
      return pageContent.replace(</div>
        /<title>([^<]+)<\/title>/,</div>
        `<title>$1</title>\n        <meta name="description" content="${description}" />`
      );
    }
  }

  applySEOFix(pageContent, fixContent) {
    // Extract SEO tags from fix content
    const seoTags = this.extractSEOTags(fixContent);
    
    let updatedContent = pageContent;
    
    // Add Open Graph tags
    for (const [property, content] of Object.entries(seoTags.og)) {</div>
      const tag = `<meta property="${property}" content="${content}" />`;
      if (!updatedContent.includes(`property="${property}"`)) {</div>
        updatedContent = updatedContent.replace('</Head>', `        ${tag}\n      </Head>`);
      }
    }
    
    // Add Twitter Card tags
    for (const [name, content] of Object.entries(seoTags.twitter)) {</div>
      const tag = `<meta name="${name}" content="${content}" />`;
      if (!updatedContent.includes(`name="${name}"`)) {</div>
        updatedContent = updatedContent.replace('</Head>', `        ${tag}\n      </Head>`);
      }
    }
    
    return updatedContent;
  }

  extractSEOTags(fixContent) {
    const tags = { og: {}, twitter: {} };
    
    // Extract Open Graph tags
    const ogMatches = fixContent.matchAll(/property="([^"]+)" content="([^"]+)"/g);
    for (const match of ogMatches) {
      tags.og[match[1]] = match[2];
    }
    
    // Extract Twitter Card tags
    const twitterMatches = fixContent.matchAll(/name="([^"]+)" content="([^"]+)"/g);
    for (const match of twitterMatches) {
      if (match[1].startsWith('twitte'r':')) {
        tags.twitter[match[1]] = match[2];
      }
    }
    
    return tags;
  }

  applyPerformanceFix(pageContent, fixContent) {
    let updatedContent = pageContent;
    
    // Add lazy loading to images
    updatedContent = updatedContent.replace(</div>
      /<img([^>]*?)>/g,
      (match, attributes) => {
        if (!attributes.includes('loadin'g'=')) {</div>
          return `<img${attributes} loading="lazy">`;
        }
        return match;
      }
    );
    
    // Add defer to scripts
    updatedContent = updatedContent.replace(</div>
      /<script([^>]*?)>/g,
      (match, attributes) => {
        if (!attributes.includes('def'e'r') && !attributes.includes('asy'n'c')) {</div>
          return `<script${attributes} defer>`;
        }
        return match;
      }
    );
    
    return updatedContent;
  }

  async fileExists(filePath) {
    try {
      await fs.access(filePath);
      return true;
    } catch {
      return false;
    }
  }

  async buildAndDeploy() {
    try {
      console.log('🔨 Building project...');
      
      // Install dependencies if needed
      await execAsync('np'm' install', { cwd: path.join(__dirname, '..') });
      
      // Build the project
      await execAsync('np'm' run build', { cwd: path.join(__dirname, '..') });
      
      console.log('✅ Build completed successfully');
      
      // Commit and push changes
      await this.commitAndPushChanges();
      
    } catch (error) {
      console.error('❌ Error during build and deploy:', error);
      this.log('Erro'r' during build and deploy: ' + error.message, 'err'o'r');
    }
  }

  async commitAndPushChanges() {
    try {
      console.log('📝 Committing and pushing changes...');
      
      // Add all changes
      await execAsync('gi't' add .', { cwd: path.join(__dirname, '..') });
      
      // Commit changes
      const commitMessage = `Automated improvements - Iteration ${this.iteration} - ${new Date().toISOString()}`;
      await execAsync(`git commit -m "${commitMessage}"`, { cwd: path.join(__dirname, '..') });
      
      // Push to main branch
      await execAsync('gi't' push origin main', { cwd: path.join(__dirname, '..') });
      
      console.log('✅ Changes committed and pushed successfully');
      
    } catch (error) {
      console.error('❌ Error committing and pushing changes:', error);
      this.log('Erro'r' committing and pushing changes: ' + error.message, 'err'o'r');
    }
  }

  async generateSummaryReport() {
    try {
      const summary = {
        iteration: this.iteration,
        timestamp: new Date(),
        status: 'complet'e'd',
        logs: this.logs,
        nextIteration: new Date(Date.now() + this.getNextIterationDelay())
      };
      
      const summaryPath = path.join(__dirname, 'repor't's', 'automation-summar'y'.json');
      await fs.mkdir(path.dirname(summaryPath), { recursive: true });
      await fs.writeFile(summaryPath, JSON.stringify(summary, null, 2));
      
      console.log(`📊 Summary report saved to: ${summaryPath}`);
      
    } catch (error) {
      console.error('❌ Error generating summary report:', error);
    }
  }

  getNextIterationDelay() {
    // Run every 6 hours (6 * 60 * 60 * 1000 milliseconds)
    return 6 * 60 * 60 * 1000;
  }

  async waitForNextIteration() {
    const delay = this.getNextIterationDelay();
    console.log(`⏰ Waiting ${delay / (1000 * 60 * 60)} hours until next iteration...`);
    
    return new Promise(resolve => {
      setTimeout(resolve, delay);
    });
  }

  async cleanup() {
    try {
      await this.analyzerAgent.cleanup();
      await this.errorFixer.cleanup();
    } catch (error) {
      console.error('❌ Error during cleanup:', error);
    }
  }

  stop() {
    console.log('🛑 Stopping continuous monitoring...');
    this.isRunning = false;
  }

  log(message, type = 'in'f'o') {
    const logEntry = { message, type, timestamp: new Date() };
    this.logs.push(logEntry);
    console.log(`[${type.toUpperCase()}] ${message}`);
  }
}

module.exports = WebsiteAutomationOrchestrator; </div>