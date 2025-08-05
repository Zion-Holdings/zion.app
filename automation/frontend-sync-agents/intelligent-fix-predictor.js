const fs = require('fs');
const path = require('path');

class IntelligentFixPredictor {
  constructor() {
    this.patterns = new Map();
    this.issueHistory = [];
    this.predictions = [];
    this.pagesDir = path.join(process.cwd(), 'pages');
    this.componentsDir = path.join(process.cwd(), 'components');
    this.historyFile = path.join(process.cwd(), 'automation/frontend-sync-agents/data/issue-history.json');
    this.patternsFile = path.join(process.cwd(), 'automation/frontend-sync-agents/data/patterns.json');
    
    this.loadPatterns();
    this.loadHistory();
  }

  async predictFutureIssues() {
    console.log('🔮 Predicting future frontend issues...');
    
    const pages = this.getPages();
    const predictions = [];
    
    for (const page of pages) {
      const content = fs.readFileSync(page, 'utf8');
      const pagePredictions = this.analyzePageForPredictions(page, content);
      predictions.push(...pagePredictions);
    }
    
    // Analyze patterns across the codebase
    const patternPredictions = this.analyzePatterns();
    predictions.push(...patternPredictions);
    
    // Generate preventive fixes
    const preventiveFixes = this.generatePreventiveFixes(predictions);
    
    this.predictions = predictions;
    
    return {
      predictions,
      preventiveFixes,
      confidence: this.calculateConfidence(predictions),
      summary: this.generatePredictionSummary(predictions)
    };
  }

  analyzePageForPredictions(filePath, content) {
    const predictions = [];
    
    // Pattern 1: Missing layout imports
    if (this.detectMissingLayoutPattern(content)) {
      predictions.push({
        type: 'predicted_missing_layout',
        file: filePath,
        confidence: 0.95,
        description: 'High probability of missing layout import',
        preventiveAction: 'add_layout_import'
      });
    }
    
    // Pattern 2: Mobile responsiveness issues
    if (this.detectMobileResponsivenessPattern(content)) {
      predictions.push({
        type: 'predicted_mobile_issues',
        file: filePath,
        confidence: 0.87,
        description: 'Likely mobile responsiveness problems',
        preventiveAction: 'add_responsive_classes'
      });
    }
    
    // Pattern 3: Accessibility issues
    if (this.detectAccessibilityPattern(content)) {
      predictions.push({
        type: 'predicted_accessibility_issues',
        file: filePath,
        confidence: 0.82,
        description: 'Potential accessibility problems',
        preventiveAction: 'add_accessibility_attributes'
      });
    }
    
    // Pattern 4: Performance issues
    if (this.detectPerformancePattern(content)) {
      predictions.push({
        type: 'predicted_performance_issues',
        file: filePath,
        confidence: 0.78,
        description: 'Possible performance problems',
        preventiveAction: 'optimize_performance'
      });
    }
    
    // Pattern 5: SEO issues
    if (this.detectSEOPattern(content)) {
      predictions.push({
        type: 'predicted_seo_issues',
        file: filePath,
        confidence: 0.85,
        description: 'Potential SEO problems',
        preventiveAction: 'add_seo_meta_tags'
      });
    }
    
    return predictions;
  }

  detectMissingLayoutPattern(content) {
    const layoutPatterns = [
      'container-responsive',
      'relative z-10',
      'text-responsive'
    ];
    
    const hasLayoutClasses = layoutPatterns.some(pattern => content.includes(pattern));
    const hasLayoutImport = content.includes('ModernLayout') || content.includes('PageLayout');
    
    return hasLayoutClasses && !hasLayoutImport;
  }

  detectMobileResponsivenessPattern(content) {
    const mobilePatterns = [
      'sm:', 'md:', 'lg:', 'xl:',
      'mobile-', 'responsive-'
    ];
    
    const hasMobileClasses = mobilePatterns.some(pattern => content.includes(pattern));
    const hasContainer = content.includes('container');
    
    return hasContainer && !hasMobileClasses;
  }

  detectAccessibilityPattern(content) {
    const accessibilityPatterns = [
      'aria-label', 'aria-describedby', 'role=',
      'tabIndex', 'alt='
    ];
    
    const hasAccessibility = accessibilityPatterns.some(pattern => content.includes(pattern));
    const hasInteractiveElements = content.includes('button') || content.includes('link');
    
    return hasInteractiveElements && !hasAccessibility;
  }

  detectPerformancePattern(content) {
    const performancePatterns = [
      'animate-pulse', 'animate-spin', 'blur-3xl',
      'backdrop-blur', 'filter', 'transform'
    ];
    
    const hasPerformanceIssues = performancePatterns.some(pattern => content.includes(pattern));
    const hasManyAnimations = (content.match(/animate-/g) || []).length > 3;
    
    return hasPerformanceIssues || hasManyAnimations;
  }

  detectSEOPattern(content) {
    const seoPatterns = [
      '<Head>', '<title>', 'meta name="description"',
      'meta name="keywords"'
    ];
    
    const hasSEO = seoPatterns.some(pattern => content.includes(pattern));
    const hasContent = content.includes('h1') || content.includes('h2');
    
    return hasContent && !hasSEO;
  }

  analyzePatterns() {
    const patternPredictions = [];
    
    // Analyze historical patterns
    const commonIssues = this.analyzeHistoricalPatterns();
    
    commonIssues.forEach(issue => {
      patternPredictions.push({
        type: 'historical_pattern',
        file: 'multiple',
        confidence: issue.frequency,
        description: `Historical pattern: ${issue.type}`,
        preventiveAction: issue.suggestedFix
      });
    });
    
    return patternPredictions;
  }

  analyzeHistoricalPatterns() {
    const issueCounts = {};
    
    this.issueHistory.forEach(issue => {
      issueCounts[issue.type] = (issueCounts[issue.type] || 0) + 1;
    });
    
    const totalIssues = this.issueHistory.length;
    const commonIssues = [];
    
    Object.entries(issueCounts).forEach(([type, count]) => {
      const frequency = count / totalIssues;
      
      if (frequency > 0.1) { // More than 10% occurrence
        commonIssues.push({
          type,
          frequency,
          suggestedFix: this.getSuggestedFix(type)
        });
      }
    });
    
    return commonIssues;
  }

  getSuggestedFix(issueType) {
    const fixMap = {
      'missing_layout': 'add_layout_import',
      'mobile_responsiveness': 'add_responsive_classes',
      'accessibility': 'add_accessibility_attributes',
      'performance': 'optimize_performance',
      'seo': 'add_seo_meta_tags'
    };
    
    return fixMap[issueType] || 'general_optimization';
  }

  generatePreventiveFixes(predictions) {
    const fixes = [];
    
    predictions.forEach(prediction => {
      const fix = this.generatePreventiveFix(prediction);
      if (fix) {
        fixes.push(fix);
      }
    });
    
    return fixes;
  }

  generatePreventiveFix(prediction) {
    switch (prediction.preventiveAction) {
      case 'add_layout_import':
        return {
          type: 'preventive_layout_import',
          description: 'Add ModernLayout import to prevent layout issues',
          code: `import ModernLayout from '../components/layout/ModernLayout'`,
          confidence: prediction.confidence
        };
        
      case 'add_responsive_classes':
        return {
          type: 'preventive_responsive_classes',
          description: 'Add responsive classes to prevent mobile issues',
          code: 'container-responsive grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
          confidence: prediction.confidence
        };
        
      case 'add_accessibility_attributes':
        return {
          type: 'preventive_accessibility',
          description: 'Add accessibility attributes to prevent a11y issues',
          code: 'aria-label role="main" tabIndex',
          confidence: prediction.confidence
        };
        
      case 'optimize_performance':
        return {
          type: 'preventive_performance',
          description: 'Optimize animations and effects for better performance',
          code: 'reduce-animations lazy-load optimize-css',
          confidence: prediction.confidence
        };
        
      case 'add_seo_meta_tags':
        return {
          type: 'preventive_seo',
          description: 'Add SEO meta tags to prevent SEO issues',
          code: '<meta name="description" content="..." />',
          confidence: prediction.confidence
        };
        
      default:
        return null;
    }
  }

  calculateConfidence(predictions) {
    if (predictions.length === 0) return 0;
    
    const totalConfidence = predictions.reduce((sum, pred) => sum + pred.confidence, 0);
    return totalConfidence / predictions.length;
  }

  generatePredictionSummary(predictions) {
    const totalPredictions = predictions.length;
    const highConfidence = predictions.filter(p => p.confidence > 0.8).length;
    const mediumConfidence = predictions.filter(p => p.confidence > 0.6 && p.confidence <= 0.8).length;
    const lowConfidence = predictions.filter(p => p.confidence <= 0.6).length;
    
    return {
      totalPredictions,
      highConfidence,
      mediumConfidence,
      lowConfidence,
      averageConfidence: this.calculateConfidence(predictions)
    };
  }

  async applyPreventiveFixes() {
    console.log('🛡️ Applying preventive fixes...');
    
    const { preventiveFixes } = await this.predictFutureIssues();
    
    for (const fix of preventiveFixes) {
      try {
        await this.applyPreventiveFix(fix);
        console.log(`✅ Applied preventive fix: ${fix.type}`);
      } catch (error) {
        console.error(`❌ Failed to apply preventive fix: ${error.message}`);
      }
    }
  }

  async applyPreventiveFix(fix) {
    // Apply preventive fixes based on type
    switch (fix.type) {
      case 'preventive_layout_import':
        await this.applyLayoutImportPrevention();
        break;
      case 'preventive_responsive_classes':
        await this.applyResponsiveClassesPrevention();
        break;
      case 'preventive_accessibility':
        await this.applyAccessibilityPrevention();
        break;
      case 'preventive_performance':
        await this.applyPerformancePrevention();
        break;
      case 'preventive_seo':
        await this.applySEOPrevention();
        break;
    }
  }

  async applyLayoutImportPrevention() {
    const pages = this.getPages();
    
    for (const page of pages) {
      const content = fs.readFileSync(page, 'utf8');
      
      if (!content.includes('ModernLayout') && content.includes('container-responsive')) {
        // Add ModernLayout import and wrapper
        let newContent = content;
        
        if (!content.includes('import ModernLayout')) {
          const importIndex = content.indexOf('import');
          const nextImportIndex = content.indexOf('\n', importIndex);
          const newImport = `import ModernLayout from '../components/layout/ModernLayout'\n`;
          
          newContent = content.slice(0, nextImportIndex) + newImport + content.slice(nextImportIndex);
        }
        
        // Wrap with ModernLayout
        const returnIndex = newContent.indexOf('return (');
        const closingIndex = newContent.lastIndexOf(')');
        
        if (returnIndex !== -1 && closingIndex !== -1) {
          const beforeReturn = newContent.slice(0, returnIndex);
          const afterReturn = newContent.slice(returnIndex);
          const beforeClosing = afterReturn.slice(0, afterReturn.lastIndexOf(')'));
          const afterClosing = newContent.slice(closingIndex + 1);
          
          newContent = beforeReturn + 'return (\n  <ModernLayout>\n    ' + beforeClosing + '\n  </ModernLayout>\n)' + afterClosing;
        }
        
        fs.writeFileSync(page, newContent);
      }
    }
  }

  async applyResponsiveClassesPrevention() {
    const pages = this.getPages();
    
    for (const page of pages) {
      const content = fs.readFileSync(page, 'utf8');
      
      if (content.includes('container') && !content.includes('container-responsive')) {
        let newContent = content.replace(
          /className="([^"]*container[^"]*)"/g,
          'className="$1 container-responsive"'
        );
        
        newContent = newContent.replace(
          /className="([^"]*grid[^"]*)"/g,
          'className="$1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"'
        );
        
        fs.writeFileSync(page, newContent);
      }
    }
  }

  async applyAccessibilityPrevention() {
    const pages = this.getPages();
    
    for (const page of pages) {
      const content = fs.readFileSync(page, 'utf8');
      
      if (content.includes('button') && !content.includes('aria-label')) {
        let newContent = content.replace(
          /<button([^>]*)>/g,
          '<button$1 aria-label="Button">'
        );
        
        fs.writeFileSync(page, newContent);
      }
    }
  }

  async applyPerformancePrevention() {
    const pages = this.getPages();
    
    for (const page of pages) {
      const content = fs.readFileSync(page, 'utf8');
      
      // Reduce heavy animations on mobile
      let newContent = content.replace(
        /animate-pulse/g,
        'animate-pulse md:animate-pulse'
      );
      
      newContent = newContent.replace(
        /blur-3xl/g,
        'blur-xl md:blur-3xl'
      );
      
      fs.writeFileSync(page, newContent);
    }
  }

  async applySEOPrevention() {
    const pages = this.getPages();
    
    for (const page of pages) {
      const content = fs.readFileSync(page, 'utf8');
      
      if (!content.includes('<Head>') && content.includes('return (')) {
        // Add Head component with basic SEO
        const headComponent = `
        <Head>
          <title>Page Title</title>
          <meta name="description" content="Page description" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        `;
        
        const returnIndex = content.indexOf('return (');
        const newContent = content.slice(0, returnIndex + 8) + headComponent + content.slice(returnIndex + 8);
        
        fs.writeFileSync(page, newContent);
      }
    }
  }

  loadPatterns() {
    try {
      if (fs.existsSync(this.patternsFile)) {
        const patternsData = fs.readFileSync(this.patternsFile, 'utf8');
        this.patterns = new Map(Object.entries(JSON.parse(patternsData)));
      }
    } catch (error) {
      console.error('Error loading patterns:', error.message);
    }
  }

  loadHistory() {
    try {
      if (fs.existsSync(this.historyFile)) {
        const historyData = fs.readFileSync(this.historyFile, 'utf8');
        this.issueHistory = JSON.parse(historyData);
      }
    } catch (error) {
      console.error('Error loading history:', error.message);
    }
  }

  saveHistory() {
    try {
      const historyDir = path.dirname(this.historyFile);
      if (!fs.existsSync(historyDir)) {
        fs.mkdirSync(historyDir, { recursive: true });
      }
      
      fs.writeFileSync(this.historyFile, JSON.stringify(this.issueHistory, null, 2));
    } catch (error) {
      console.error('Error saving history:', error.message);
    }
  }

  getPages() {
    const pages = [];
    
    const walkDir = (dir) => {
      const files = fs.readdirSync(dir);
      
      files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
          walkDir(filePath);
        } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
          pages.push(filePath);
        }
      });
    };
    
    walkDir(this.pagesDir);
    return pages;
  }
}

module.exports = IntelligentFixPredictor; 