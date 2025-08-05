const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');
const EnhancedLayoutValidator = require('./enhanced-layout-validator');
const IntelligentFixPredictor = require('./intelligent-fix-predictor');

class RealTimeMonitor {
  constructor() {
    this.validator = new EnhancedLayoutValidator();
    this.predictor = new IntelligentFixPredictor();
    this.watcher = null;
    this.isRunning = false;
    this.debounceTimers = new Map();
    this.fileCache = new Map();
    this.logsDir = path.join(process.cwd(), 'automation/frontend-sync-agents/logs');
    
    // Ensure logs directory exists
    if (!fs.existsSync(this.logsDir)) {
      fs.mkdirSync(this.logsDir, { recursive: true });
    }
  }

  async startMonitoring() {
    console.log('👁️ Starting real-time frontend monitoring...');
    
    this.isRunning = true;
    
    // Set up file watcher
    this.watcher = chokidar.watch([
      'pages/**/*.tsx',
      'pages/**/*.jsx',
      'components/**/*.tsx',
      'components/**/*.jsx',
      'styles/**/*.css'
    ], {
      ignored: /node_modules/,
      persistent: true,
      ignoreInitial: false
    });
    
    // Handle file changes
    this.watcher.on('change', (filePath) => {
      this.handleFileChange(filePath);
    });
    
    this.watcher.on('add', (filePath) => {
      this.handleFileAdded(filePath);
    });
    
    this.watcher.on('unlink', (filePath) => {
      this.handleFileRemoved(filePath);
    });
    
    // Handle errors
    this.watcher.on('error', (error) => {
      console.error('❌ File watcher error:', error);
      this.logError(error);
    });
    
    console.log('✅ Real-time monitoring active');
    console.log('📁 Watching for changes in pages/, components/, and styles/');
    
    return this.watcher;
  }

  async handleFileChange(filePath) {
    console.log(`📝 File changed: ${filePath}`);
    
    // Debounce rapid changes
    if (this.debounceTimers.has(filePath)) {
      clearTimeout(this.debounceTimers.get(filePath));
    }
    
    const timer = setTimeout(async () => {
      try {
        await this.processFileChange(filePath);
      } catch (error) {
        console.error(`❌ Error processing file change: ${error.message}`);
        this.logError(error);
      }
    }, 1000); // 1 second debounce
    
    this.debounceTimers.set(filePath, timer);
  }

  async handleFileAdded(filePath) {
    console.log(`➕ File added: ${filePath}`);
    
    try {
      await this.processNewFile(filePath);
    } catch (error) {
      console.error(`❌ Error processing new file: ${error.message}`);
      this.logError(error);
    }
  }

  async handleFileRemoved(filePath) {
    console.log(`🗑️ File removed: ${filePath}`);
    
    // Clean up cache
    this.fileCache.delete(filePath);
    this.debounceTimers.delete(filePath);
  }

  async processFileChange(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const previousContent = this.fileCache.get(filePath);
    
    // Cache current content
    this.fileCache.set(filePath, content);
    
    // Skip if content hasn't actually changed
    if (previousContent === content) {
      return;
    }
    
    console.log(`🔍 Analyzing changes in ${filePath}`);
    
    // Run predictive analysis
    const predictions = await this.predictor.predictFutureIssues();
    
    // Check for immediate issues
    const astAnalysis = await this.validator.analyzeWithAST();
    
    // Combine predictions and current issues
    const allIssues = [
      ...predictions.predictions,
      ...astAnalysis.issues
    ];
    
    // Apply fixes if issues detected
    if (allIssues.length > 0) {
      console.log(`⚠️ Found ${allIssues.length} potential issues, applying fixes...`);
      
      await this.applyRealTimeFixes(filePath, allIssues);
      
      // Verify fixes
      const verification = await this.validator.analyzeWithAST();
      console.log(`✅ Fixes applied. Remaining issues: ${verification.issues.length}`);
    } else {
      console.log(`✅ No issues detected in ${filePath}`);
    }
    
    // Log the change
    this.logFileChange(filePath, allIssues.length);
  }

  async processNewFile(filePath) {
    console.log(`🆕 Processing new file: ${filePath}`);
    
    // Run full analysis on new file
    const astAnalysis = await this.validator.analyzeWithAST();
    const predictions = await this.predictor.predictFutureIssues();
    
    const fileIssues = astAnalysis.issues.filter(issue => issue.file === filePath);
    const filePredictions = predictions.predictions.filter(pred => pred.file === filePath);
    
    const allIssues = [...fileIssues, ...filePredictions];
    
    if (allIssues.length > 0) {
      console.log(`⚠️ Found ${allIssues.length} issues in new file, applying fixes...`);
      
      await this.applyRealTimeFixes(filePath, allIssues);
      
      // Verify fixes
      const verification = await this.validator.analyzeWithAST();
      const remainingIssues = verification.issues.filter(issue => issue.file === filePath);
      console.log(`✅ Fixes applied. Remaining issues: ${remainingIssues.length}`);
    } else {
      console.log(`✅ New file ${filePath} is clean`);
    }
    
    // Log the new file
    this.logNewFile(filePath, allIssues.length);
  }

  async applyRealTimeFixes(filePath, issues) {
    console.log(`🔧 Applying real-time fixes to ${filePath}`);
    
    const content = fs.readFileSync(filePath, 'utf8');
    let newContent = content;
    
    // Apply fixes based on issue types
    for (const issue of issues) {
      try {
        newContent = await this.applyFixToContent(newContent, issue);
      } catch (error) {
        console.error(`❌ Failed to apply fix for ${issue.type}: ${error.message}`);
      }
    }
    
    // Write back to file if changes were made
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent);
      console.log(`✅ Applied fixes to ${filePath}`);
      
      // Update cache
      this.fileCache.set(filePath, newContent);
    }
  }

  async applyFixToContent(content, issue) {
    switch (issue.type) {
      case 'missing_layout_import':
      case 'predicted_missing_layout':
        return this.applyLayoutImportFix(content);
        
      case 'missing_responsive_classes':
      case 'predicted_mobile_issues':
        return this.applyResponsiveClassesFix(content);
        
      case 'missing_accessibility':
      case 'predicted_accessibility_issues':
        return this.applyAccessibilityFix(content);
        
      case 'predicted_performance_issues':
        return this.applyPerformanceFix(content);
        
      case 'predicted_seo_issues':
        return this.applySEOFix(content);
        
      default:
        return content;
    }
  }

  applyLayoutImportFix(content) {
    // Add ModernLayout import if not present
    if (!content.includes('import ModernLayout')) {
      const importIndex = content.indexOf('import');
      const nextImportIndex = content.indexOf('\n', importIndex);
      const newImport = `import ModernLayout from '../components/layout/ModernLayout'\n`;
      
      content = content.slice(0, nextImportIndex) + newImport + content.slice(nextImportIndex);
    }
    
    // Wrap with ModernLayout if not already wrapped
    if (!content.includes('<ModernLayout>')) {
      const returnIndex = content.indexOf('return (');
      const closingIndex = content.lastIndexOf(')');
      
      if (returnIndex !== -1 && closingIndex !== -1) {
        const beforeReturn = content.slice(0, returnIndex);
        const afterReturn = content.slice(returnIndex);
        const beforeClosing = afterReturn.slice(0, afterReturn.lastIndexOf(')'));
        const afterClosing = content.slice(closingIndex + 1);
        
        content = beforeReturn + 'return (\n  <ModernLayout>\n    ' + beforeClosing + '\n  </ModernLayout>\n)' + afterClosing;
      }
    }
    
    return content;
  }

  applyResponsiveClassesFix(content) {
    // Add responsive classes to containers
    content = content.replace(
      /className="([^"]*container[^"]*)"/g,
      'className="$1 container-responsive"'
    );
    
    // Add responsive grid classes
    content = content.replace(
      /className="([^"]*grid[^"]*)"/g,
      'className="$1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"'
    );
    
    // Add responsive text classes
    content = content.replace(
      /className="([^"]*text-[^"]*)"/g,
      'className="$1 text-responsive-lg"'
    );
    
    return content;
  }

  applyAccessibilityFix(content) {
    // Add aria-labels to buttons
    content = content.replace(
      /<button([^>]*)>/g,
      '<button$1 aria-label="Button">'
    );
    
    // Add roles to main containers
    content = content.replace(
      /<div([^>]*className="[^"]*container[^"]*"[^>]*)>/g,
      '<div$1 role="main">'
    );
    
    return content;
  }

  applyPerformanceFix(content) {
    // Reduce animations on mobile
    content = content.replace(
      /animate-pulse/g,
      'animate-pulse md:animate-pulse'
    );
    
    content = content.replace(
      /blur-3xl/g,
      'blur-xl md:blur-3xl'
    );
    
    return content;
  }

  applySEOFix(content) {
    // Add Head component if missing
    if (!content.includes('<Head>') && content.includes('return (')) {
      const headComponent = `
        <Head>
          <title>Page Title</title>
          <meta name="description" content="Page description" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
      `;
      
      const returnIndex = content.indexOf('return (');
      content = content.slice(0, returnIndex + 8) + headComponent + content.slice(returnIndex + 8);
    }
    
    return content;
  }

  logFileChange(filePath, issueCount) {
    const logEntry = {
      timestamp: new Date().toISOString(),
      type: 'file_change',
      file: filePath,
      issuesFound: issueCount,
      action: issueCount > 0 ? 'fixes_applied' : 'no_action_needed'
    };
    
    const logFile = path.join(this.logsDir, `realtime-monitor-${Date.now()}.json`);
    fs.writeFileSync(logFile, JSON.stringify(logEntry, null, 2));
  }

  logNewFile(filePath, issueCount) {
    const logEntry = {
      timestamp: new Date().toISOString(),
      type: 'new_file',
      file: filePath,
      issuesFound: issueCount,
      action: issueCount > 0 ? 'fixes_applied' : 'file_clean'
    };
    
    const logFile = path.join(this.logsDir, `realtime-monitor-${Date.now()}.json`);
    fs.writeFileSync(logFile, JSON.stringify(logEntry, null, 2));
  }

  logError(error) {
    const errorEntry = {
      timestamp: new Date().toISOString(),
      type: 'error',
      error: error.message,
      stack: error.stack
    };
    
    const errorFile = path.join(this.logsDir, `realtime-monitor-error-${Date.now()}.json`);
    fs.writeFileSync(errorFile, JSON.stringify(errorEntry, null, 2));
  }

  async stopMonitoring() {
    console.log('🛑 Stopping real-time monitoring...');
    
    this.isRunning = false;
    
    if (this.watcher) {
      await this.watcher.close();
      this.watcher = null;
    }
    
    // Clear all timers
    this.debounceTimers.forEach(timer => clearTimeout(timer));
    this.debounceTimers.clear();
    
    console.log('✅ Real-time monitoring stopped');
  }

  async getMonitoringStatus() {
    return {
      isRunning: this.isRunning,
      watchedFiles: this.watcher ? this.watcher.getWatched() : {},
      cachedFiles: this.fileCache.size,
      activeTimers: this.debounceTimers.size
    };
  }

  async runHealthCheck() {
    console.log('🏥 Running real-time monitor health check...');
    
    const status = await this.getMonitoringStatus();
    
    if (!status.isRunning) {
      console.log('⚠️ Real-time monitor is not running');
      return false;
    }
    
    if (Object.keys(status.watchedFiles).length === 0) {
      console.log('⚠️ No files are being watched');
      return false;
    }
    
    console.log('✅ Real-time monitor is healthy');
    return true;
  }
}

module.exports = RealTimeMonitor; 