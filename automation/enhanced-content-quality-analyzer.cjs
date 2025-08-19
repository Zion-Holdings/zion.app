#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class EnhancedContentQualityAnalyzer {
  constructor() {
    this.rootDir = process.cwd();
    this.pagesDir = path.join(this.rootDir, 'pages');
    this.reportsDir = path.join(this.rootDir, 'pages/reports');
    this.publicDir = path.join(this.rootDir, 'public');
    this.logFile = path.join(this.rootDir, 'automation/logs/enhanced-content-quality.log');
    
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    
    fs.appendFileSync(this.logFile, logEntry);
    console.log(`[${level}] ${message}`);
  }

  async analyzeContentQuality() {
    this.log('Starting enhanced content quality analysis...');
    
    try {
      const analysis = {
        timestamp: new Date().toISOString(),
        overallScore: 0,
        contentGaps: [],
        qualityIssues: [],
        seoIssues: [],
        recommendations: [],
        priorityActions: []
      };

      // Step 1: Analyze content structure and gaps
      const contentGaps = await this.analyzeContentGaps();
      analysis.contentGaps = contentGaps;

      // Step 2: Analyze content quality issues
      const qualityIssues = await this.analyzeContentQualityIssues();
      analysis.qualityIssues = qualityIssues;

      // Step 3: Analyze SEO issues
      const seoIssues = await this.analyzeSEOIssues();
      analysis.seoIssues = seoIssues;

      // Step 4: Generate recommendations
      const recommendations = await this.generateRecommendations(analysis);
      analysis.recommendations = recommendations;

      // Step 5: Calculate overall score
      analysis.overallScore = this.calculateOverallScore(analysis);

      // Step 6: Generate priority actions
      analysis.priorityActions = this.generatePriorityActions(analysis);

      // Save analysis report
      await this.saveAnalysisReport(analysis);

      this.log('Enhanced content quality analysis completed successfully');
      return analysis;
    } catch (error) {
      this.log(`Error in content quality analysis: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async analyzeContentGaps() {
    this.log('Analyzing content gaps...');
    
    const gaps = [];
    
    // Check for missing essential pages
    const essentialPages = [
      'index.tsx', 'about.tsx', 'contact.tsx', 'privacy.tsx', 'terms.tsx',
      'sitemap.tsx', 'robots.tsx', '404.tsx', '500.tsx'
    ];

    for (const page of essentialPages) {
      const pagePath = path.join(this.pagesDir, page);
      if (!fs.existsSync(pagePath)) {
        gaps.push({
          type: 'missing_essential_page',
          priority: 'high',
          description: `Missing essential page: ${page}`,
          impact: 'SEO and user experience',
          solution: `Create ${page} with proper content and metadata`
        });
      }
    }

    // Check for missing report categories
    const expectedReportCategories = [
      'insights', 'dossiers', 'tutorials', 'whitepapers', 'blueprints',
      'playbooks', 'patterns', 'guides', 'case-studies', 'updates'
    ];

    for (const category of expectedReportCategories) {
      const categoryPath = path.join(this.reportsDir, category);
      if (!fs.existsSync(categoryPath)) {
        gaps.push({
          type: 'missing_report_category',
          priority: 'medium',
          description: `Missing report category: ${category}`,
          impact: 'Content depth and SEO',
          solution: `Create ${category} directory with index page and sample content`
        });
      }
    }

    // Check for missing content types
    const contentTypes = ['blog', 'news', 'events', 'resources', 'downloads'];
    for (const type of contentTypes) {
      const typePath = path.join(this.pagesDir, type);
      if (!fs.existsSync(typePath)) {
        gaps.push({
          type: 'missing_content_type',
          priority: 'medium',
          description: `Missing content type: ${type}`,
          impact: 'Content variety and user engagement',
          solution: `Create ${type} section with relevant content`
        });
      }
    }

    return gaps;
  }

  async analyzeContentQualityIssues() {
    this.log('Analyzing content quality issues...');
    
    const issues = [];
    
    // Analyze report content quality
    if (fs.existsSync(this.reportsDir)) {
      const reportCategories = fs.readdirSync(this.reportsDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

      for (const category of reportCategories) {
        const categoryPath = path.join(this.reportsDir, category);
        const files = fs.readdirSync(categoryPath)
          .filter(file => file.endsWith('.tsx') || file.endsWith('.ts'));

        for (const file of files) {
          const filePath = path.join(categoryPath, file);
          const content = fs.readFileSync(filePath, 'utf8');
          
          // Check content length
          const textContent = this.extractTextContent(content);
          if (textContent.length < 500) {
            issues.push({
              type: 'insufficient_content',
              priority: 'medium',
              file: `${category}/${file}`,
              description: `Content too short (${textContent.length} chars)`,
              impact: 'SEO and user engagement',
              solution: 'Expand content with more detailed information'
            });
          }

          // Check for placeholder content
          if (textContent.includes('under development') || textContent.includes('coming soon')) {
            issues.push({
              type: 'placeholder_content',
              priority: 'high',
              file: `${category}/${file}`,
              description: 'Contains placeholder content',
              impact: 'User experience and SEO',
              solution: 'Replace with actual, valuable content'
            });
          }
        }
      }
    }

    return issues;
  }

  async analyzeSEOIssues() {
    this.log('Analyzing SEO issues...');
    
    const issues = [];
    
    // Check for missing metadata
    if (fs.existsSync(this.pagesDir)) {
      const pageFiles = fs.readdirSync(this.pagesDir)
        .filter(file => file.endsWith('.tsx') || file.endsWith('.ts'));

      for (const file of pageFiles) {
        const filePath = path.join(this.pagesDir, file);
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Check for missing title
        if (!content.includes('<title>') && !content.includes('title:')) {
          issues.push({
            type: 'missing_title',
            priority: 'high',
            file: file,
            description: 'Missing page title',
            impact: 'SEO and social sharing',
            solution: 'Add proper title meta tag'
          });
        }

        // Check for missing description
        if (!content.includes('description') && !content.includes('meta name="description"')) {
          issues.push({
            type: 'missing_description',
            priority: 'high',
            file: file,
            description: 'Missing page description',
            impact: 'SEO and social sharing',
            solution: 'Add meta description tag'
          });
        }

        // Check for missing Open Graph tags
        if (!content.includes('og:title') && !content.includes('og:description')) {
          issues.push({
            type: 'missing_open_graph',
            priority: 'medium',
            file: file,
            description: 'Missing Open Graph tags',
            impact: 'Social media sharing',
            solution: 'Add Open Graph meta tags'
          });
        }
      }
    }

    return issues;
  }

  extractTextContent(content) {
    // Remove JSX tags, imports, and other code elements
    return content
      .replace(/import.*?from.*?['"];?\n?/g, '')
      .replace(/export.*?function.*?{/g, '')
      .replace(/<[^>]*>/g, '')
      .replace(/[{}();]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  async generateRecommendations(analysis) {
    this.log('Generating recommendations...');
    
    const recommendations = [];

    // Content gap recommendations
    if (analysis.contentGaps.length > 0) {
      recommendations.push({
        category: 'content_gaps',
        priority: 'high',
        action: 'Create missing essential pages and report categories',
        impact: 'Improve site completeness and SEO',
        effort: 'medium',
        timeline: '1-2 weeks'
      });
    }

    // Content quality recommendations
    if (analysis.qualityIssues.length > 0) {
      recommendations.push({
        category: 'content_quality',
        priority: 'medium',
        action: 'Expand short content and replace placeholders',
        impact: 'Improve user engagement and SEO',
        effort: 'high',
        timeline: '2-4 weeks'
      });
    }

    // SEO recommendations
    if (analysis.seoIssues.length > 0) {
      recommendations.push({
        category: 'seo_optimization',
        priority: 'high',
        action: 'Add missing metadata and Open Graph tags',
        impact: 'Improve search visibility and social sharing',
        effort: 'low',
        timeline: '1 week'
      });
    }

    // Performance recommendations
    recommendations.push({
      category: 'performance',
      priority: 'medium',
      action: 'Implement content caching and optimization',
      impact: 'Improve page load speed and user experience',
      effort: 'medium',
      timeline: '2-3 weeks'
    });

    // Accessibility recommendations
    recommendations.push({
      category: 'accessibility',
      priority: 'medium',
      action: 'Add ARIA labels and improve keyboard navigation',
      impact: 'Improve accessibility compliance and user experience',
      effort: 'medium',
      timeline: '2-3 weeks'
    });

    return recommendations;
  }

  calculateOverallScore(analysis) {
    let score = 100;
    
    // Deduct points for content gaps
    score -= analysis.contentGaps.length * 5;
    
    // Deduct points for quality issues
    score -= analysis.qualityIssues.length * 3;
    
    // Deduct points for SEO issues
    score -= analysis.seoIssues.length * 4;
    
    // Ensure score doesn't go below 0
    return Math.max(0, score);
  }

  generatePriorityActions(analysis) {
    const actions = [];

    // High priority actions
    const highPriorityIssues = [
      ...analysis.contentGaps.filter(gap => gap.priority === 'high'),
      ...analysis.seoIssues.filter(issue => issue.priority === 'high')
    ];

    for (const issue of highPriorityIssues) {
      actions.push({
        priority: 'high',
        action: issue.solution,
        category: issue.type,
        estimatedEffort: '1-2 days',
        impact: issue.impact
      });
    }

    // Medium priority actions
    const mediumPriorityIssues = [
      ...analysis.contentGaps.filter(gap => gap.priority === 'medium'),
      ...analysis.qualityIssues.filter(issue => issue.priority === 'medium'),
      ...analysis.seoIssues.filter(issue => issue.priority === 'medium')
    ];

    for (const issue of mediumPriorityIssues) {
      actions.push({
        priority: 'medium',
        action: issue.solution,
        category: issue.type,
        estimatedEffort: '3-5 days',
        impact: issue.impact
      });
    }

    return actions;
  }

  async saveAnalysisReport(analysis) {
    this.log('Saving analysis report...');
    
    const reportPath = path.join(this.rootDir, 'automation/reports/content-quality-analysis.json');
    const reportDir = path.dirname(reportPath);
    
    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(reportDir, { recursive: true });
    }

    fs.writeFileSync(reportPath, JSON.stringify(analysis, null, 2));
    
    // Also save a timestamped version
    const timestampedPath = path.join(
      this.rootDir, 
      `automation/reports/content-quality-analysis-${Date.now()}.json`
    );
    fs.writeFileSync(timestampedPath, JSON.stringify(analysis, null, 2));
    
    this.log(`Analysis report saved to: ${reportPath}`);
  }

  async generateContentImprovementPlan() {
    this.log('Generating content improvement plan...');
    
    const analysis = await this.analyzeContentQuality();
    
    const improvementPlan = {
      timestamp: new Date().toISOString(),
      currentScore: analysis.overallScore,
      targetScore: 90,
      improvementAreas: [],
      actionPlan: [],
      timeline: '4-6 weeks',
      estimatedEffort: 'medium'
    };

    // Group issues by category
    const issuesByCategory = {
      content_gaps: analysis.contentGaps,
      quality_issues: analysis.qualityIssues,
      seo_issues: analysis.seoIssues
    };

    for (const [category, issues] of Object.entries(issuesByCategory)) {
      if (issues.length > 0) {
        improvementPlan.improvementAreas.push({
          category: category,
          issueCount: issues.length,
          priority: this.getCategoryPriority(issues),
          description: this.getCategoryDescription(category, issues)
        });
      }
    }

    // Generate action plan
    improvementPlan.actionPlan = analysis.priorityActions.map(action => ({
      ...action,
      dependencies: this.getActionDependencies(action),
      resources: this.getActionResources(action),
      successMetrics: this.getSuccessMetrics(action)
    }));

    // Save improvement plan
    const planPath = path.join(this.rootDir, 'automation/reports/content-improvement-plan.json');
    fs.writeFileSync(planPath, JSON.stringify(improvementPlan, null, 2));
    
    this.log(`Content improvement plan saved to: ${planPath}`);
    return improvementPlan;
  }

  getCategoryPriority(issues) {
    const priorities = issues.map(issue => issue.priority);
    if (priorities.includes('high')) return 'high';
    if (priorities.includes('medium')) return 'medium';
    return 'low';
  }

  getCategoryDescription(category, issues) {
    const descriptions = {
      content_gaps: 'Missing essential pages and content categories',
      quality_issues: 'Content quality and engagement issues',
      seo_issues: 'SEO optimization and metadata issues'
    };
    return descriptions[category] || 'General content issues';
  }

  getActionDependencies(action) {
    // Define dependencies based on action type
    const dependencies = {
      'Create missing essential page': ['content planning', 'design approval'],
      'Add missing metadata': ['content review', 'SEO guidelines'],
      'Expand short content': ['research', 'content writing'],
      'Replace placeholder content': ['content creation', 'review process']
    };
    
    return dependencies[action.action] || ['general preparation'];
  }

  getActionResources(action) {
    // Define required resources
    const resources = {
      'Create missing essential page': ['content writer', 'designer', 'developer'],
      'Add missing metadata': ['SEO specialist', 'content reviewer'],
      'Expand short content': ['content writer', 'subject matter expert'],
      'Replace placeholder content': ['content writer', 'reviewer']
    };
    
    return resources[action.action] || ['general team member'];
  }

  getSuccessMetrics(action) {
    // Define success metrics
    const metrics = {
      'Create missing essential page': ['page created', 'content quality score > 80', 'SEO score > 90'],
      'Add missing metadata': ['metadata added', 'SEO score improved', 'social sharing enabled'],
      'Expand short content': ['content length > 1000 chars', 'engagement metrics improved', 'bounce rate reduced'],
      'Replace placeholder content': ['placeholder removed', 'valuable content added', 'user engagement increased']
    };
    
    return metrics[action.action] || ['task completed', 'quality improved'];
  }
}

// CLI interface
if (require.main === module) {
  const analyzer = new EnhancedContentQualityAnalyzer();
  
  const command = process.argv[2] || 'analyze';
  
  switch (command) {
    case 'analyze':
      analyzer.analyzeContentQuality().then(result => {
        console.log('Content Quality Analysis Results:');
        console.log(JSON.stringify(result, null, 2));
      });
      break;
    case 'plan':
      analyzer.generateContentImprovementPlan().then(plan => {
        console.log('Content Improvement Plan:');
        console.log(JSON.stringify(plan, null, 2));
      });
      break;
    case 'gaps':
      analyzer.analyzeContentGaps().then(gaps => {
        console.log('Content Gaps:');
        console.log(JSON.stringify(gaps, null, 2));
      });
      break;
    case 'quality':
      analyzer.analyzeContentQualityIssues().then(issues => {
        console.log('Content Quality Issues:');
        console.log(JSON.stringify(issues, null, 2));
      });
      break;
    case 'seo':
      analyzer.analyzeSEOIssues().then(issues => {
        console.log('SEO Issues:');
        console.log(JSON.stringify(issues, null, 2));
      });
      break;
    default:
      console.log('Available commands: analyze, plan, gaps, quality, seo');
  }
}

module.exports = { EnhancedContentQualityAnalyzer };
