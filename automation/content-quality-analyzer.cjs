#!/usr/bin/env node

/**
 * Content Quality Analyzer
 * Analyzes content quality and provides recommendations
 */

const fs = require('fs');
const path = require('path');

class ContentQualityAnalyzer {
  constructor() {
    this.analysis = {
      totalFiles: 0,
      issues: [],
      recommendations: [],
      scores: {}
    };
  }

  async analyzeContent() {
    console.log('🔍 Starting content quality analysis...');
    
    try {
      // Analyze different content types
      await this.analyzeMarkdownFiles();
      await this.analyzeHTMLFiles();
      await this.analyzeTextFiles();
      
      // Generate overall score
      this.calculateOverallScore();
      
      // Generate recommendations
      this.generateRecommendations();
      
      console.log('✅ Content quality analysis completed.');
      this.printReport();
      
      return this.analysis;
    } catch (error) {
      console.error('❌ Error during content quality analysis:', error.message);
      return { error: error.message };
    }
  }

  async analyzeMarkdownFiles() {
    const markdownFiles = this.findFiles('.md');
    
    for (const file of markdownFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const fileAnalysis = this.analyzeMarkdownContent(content, file);
        
        this.analysis.scores[file] = fileAnalysis.score;
        this.analysis.issues.push(...fileAnalysis.issues);
        
        this.analysis.totalFiles++;
      } catch (error) {
        this.analysis.issues.push(`Error analyzing ${file}: ${error.message}`);
      }
    }
  }

  async analyzeHTMLFiles() {
    const htmlFiles = this.findFiles('.html');
    
    for (const file of htmlFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const fileAnalysis = this.analyzeHTMLContent(content, file);
        
        this.analysis.scores[file] = fileAnalysis.score;
        this.analysis.issues.push(...fileAnalysis.issues);
        
        this.analysis.totalFiles++;
      } catch (error) {
        this.analysis.issues.push(`Error analyzing ${file}: ${error.message}`);
      }
    }
  }

  async analyzeTextFiles() {
    const textFiles = this.findFiles('.txt');
    
    for (const file of textFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const fileAnalysis = this.analyzeTextContent(content, file);
        
        this.analysis.scores[file] = fileAnalysis.score;
        this.analysis.issues.push(...fileAnalysis.issues);
        
        this.analysis.totalFiles++;
      } catch (error) {
        this.analysis.issues.push(`Error analyzing ${file}: ${error.message}`);
      }
    }
  }

  analyzeMarkdownContent(content, filename) {
    const issues = [];
    let score = 100;
    
    // Check for common markdown issues
    if (content.includes('  ')) {
      issues.push(`${filename}: Multiple consecutive spaces detected`);
      score -= 5;
    }
    
    if (content.match(/\n{3,}/)) {
      issues.push(`${filename}: Excessive line breaks detected`);
      score -= 3;
    }
    
    if (!content.includes('# ')) {
      issues.push(`${filename}: No main heading found`);
      score -= 10;
    }
    
    if (content.length < 100) {
      issues.push(`${filename}: Content seems too short`);
      score -= 15;
    }
    
    return { score: Math.max(0, score), issues };
  }

  analyzeHTMLContent(content, filename) {
    const issues = [];
    let score = 100;
    
    // Check for common HTML issues
    if (content.includes('<br>') && !content.includes('<br />')) {
      issues.push(`${filename}: Self-closing tags not properly formatted`);
      score -= 5;
    }
    
    if (content.includes('  ')) {
      issues.push(`${filename}: Multiple consecutive spaces detected`);
      score -= 3;
    }
    
    if (!content.includes('<title>')) {
      issues.push(`${filename}: No title tag found`);
      score -= 10;
    }
    
    return { score: Math.max(0, score), issues };
  }

  analyzeTextContent(content, filename) {
    const issues = [];
    let score = 100;
    
    // Check for common text issues
    if (content.includes('  ')) {
      issues.push(`${filename}: Multiple consecutive spaces detected`);
      score -= 5;
    }
    
    if (content.match(/\n{3,}/)) {
      issues.push(`${filename}: Excessive line breaks detected`);
      score -= 3;
    }
    
    if (content.length < 50) {
      issues.push(`${filename}: Content seems too short`);
      score -= 10;
    }
    
    return { score: Math.max(0, score), issues };
  }

  calculateOverallScore() {
    const scores = Object.values(this.analysis.scores);
    if (scores.length > 0) {
      this.analysis.overallScore = scores.reduce((a, b) => a + b, 0) / scores.length;
    } else {
      this.analysis.overallScore = 0;
    }
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.analysis.overallScore < 80) {
      recommendations.push('Consider running content quality fixes to improve scores');
    }
    
    if (this.analysis.issues.length > 10) {
      recommendations.push('High number of issues detected - prioritize content cleanup');
    }
    
    if (this.analysis.totalFiles < 5) {
      recommendations.push('Consider adding more content to improve site coverage');
    }
    
    this.analysis.recommendations = recommendations;
  }

  printReport() {
    console.log('\n📊 Content Quality Analysis Report');
    console.log('=====================================');
    console.log(`Total files analyzed: ${this.analysis.totalFiles}`);
    console.log(`Overall quality score: ${this.analysis.overallScore.toFixed(1)}/100`);
    console.log(`Total issues found: ${this.analysis.issues.length}`);
    
    if (this.analysis.recommendations.length > 0) {
      console.log('\n💡 Recommendations:');
      this.analysis.recommendations.forEach(rec => console.log(`  - ${rec}`));
    }
    
    if (this.analysis.issues.length > 0) {
      console.log('\n⚠️  Issues found:');
      this.analysis.issues.slice(0, 10).forEach(issue => console.log(`  - ${issue}`));
      if (this.analysis.issues.length > 10) {
        console.log(`  ... and ${this.analysis.issues.length - 10} more issues`);
      }
    }
  }

  findFiles(extension) {
    const files = [];
    const searchDir = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            searchDir(fullPath);
          } else if (stat.isFile() && item.endsWith(extension)) {
            files.push(fullPath);
          }
        }
      } catch (error) {
        // Skip directories we can't access
      }
    };
    
    searchDir('.');
    return files;
  }
}

// Run if called directly
if (require.main === module) {
  const analyzer = new ContentQualityAnalyzer();
  analyzer.analyzeContent().then(result => {
    if (result.error) {
      process.exit(1);
    } else {
      process.exit(0);
    }
  });
}

module.exports = ContentQualityAnalyzer;