#!/usr/bin/env node

/**
 * AI Content Generator v2.0
 * Advanced content generation with multiple content types, SEO optimization, and intelligent topic clustering
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

class AIContentGeneratorV2 {
  constructor() {
    this.contentTypes = {
      blog: {
        minWords: 800,
        maxWords: 2500,
        structure: ['intro', 'main_points', 'conclusion'],
        seoElements: ['title', 'meta_description', 'keywords', 'headings']
      },
      article: {
        minWords: 1200,
        maxWords: 4000,
        structure: ['abstract', 'introduction', 'body', 'conclusion', 'references'],
        seoElements: ['title', 'meta_description', 'keywords', 'headings', 'schema_markup']
      },
      landing: {
        minWords: 500,
        maxWords: 1500,
        structure: ['hero', 'benefits', 'features', 'cta'],
        seoElements: ['title', 'meta_description', 'keywords', 'headings', 'structured_data']
      },
      tutorial: {
        minWords: 1000,
        maxWords: 3000,
        structure: ['overview', 'prerequisites', 'steps', 'examples', 'summary'],
        seoElements: ['title', 'meta_description', 'keywords', 'headings', 'breadcrumbs']
      }
    };
    
    this.topicClusters = new Map();
    this.contentHistory = [];
    this.performanceMetrics = {
      totalGenerated: 0,
      successRate: 0,
      avgQualityScore: 0,
      popularTopics: []
    };
  }

  /**
   * Generate content based on topic and content type
   */
  async generateContent(topic, contentType = 'blog', options = {}) {
    try {
      console.log(`🎯 Generating ${contentType} content for topic: ${topic}`);
      
      const startTime = Date.now();
      const contentId = this.generateContentId(topic, contentType);
      
      // Analyze topic and generate outline
      const outline = await this.generateOutline(topic, contentType, options);
      
      // Generate content sections
      const content = await this.generateContentSections(outline, contentType, options);
      
      // Optimize for SEO
      const seoOptimized = await this.optimizeForSEO(content, topic, contentType);
      
      // Quality check and scoring
      const qualityScore = await this.assessContentQuality(seoOptimized);
      
      // Store in history
      const contentRecord = {
        id: contentId,
        topic,
        contentType,
        content: seoOptimized,
        outline,
        qualityScore,
        generationTime: Date.now() - startTime,
        timestamp: new Date().toISOString(),
        options
      };
      
      this.contentHistory.push(contentRecord);
      this.updatePerformanceMetrics();
      this.updateTopicClusters(topic, contentType);
      
      console.log(`✅ Content generated successfully! Quality Score: ${qualityScore}/100`);
      
      return contentRecord;
      
    } catch (error) {
      console.error(`❌ Error generating content:`, error);
      throw error;
    }
  }

  /**
   * Generate intelligent content outline
   */
  async generateOutline(topic, contentType, options) {
    const typeConfig = this.contentTypes[contentType];
    const structure = typeConfig.structure;
    
    const outline = {
      topic,
      contentType,
      structure: [],
      estimatedWords: Math.floor(Math.random() * (typeConfig.maxWords - typeConfig.minWords)) + typeConfig.minWords,
      targetKeywords: this.extractKeywords(topic),
      targetAudience: options.targetAudience || 'general',
      contentGoals: options.contentGoals || ['inform', 'engage']
    };
    
    // Generate structure based on content type
    for (const section of structure) {
      const sectionOutline = {
        title: this.generateSectionTitle(section, topic),
        purpose: this.getSectionPurpose(section),
        keyPoints: this.generateKeyPoints(section, topic),
        estimatedWords: Math.floor(outline.estimatedWords / structure.length)
      };
      
      outline.structure.push(sectionOutline);
    }
    
    return outline;
  }

  /**
   * Generate content sections based on outline
   */
  async generateContentSections(outline, contentType, options) {
    const content = {
      title: this.generateTitle(outline.topic, contentType),
      metaDescription: this.generateMetaDescription(outline.topic, outline.estimatedWords),
      content: '',
      sections: [],
      wordCount: 0
    };
    
    for (const section of outline.structure) {
      const sectionContent = await this.generateSectionContent(section, outline.topic, options);
      
      content.sections.push({
        title: section.title,
        content: sectionContent,
        wordCount: this.countWords(sectionContent)
      });
      
      content.content += `\n\n## ${section.title}\n\n${sectionContent}`;
      content.wordCount += this.countWords(sectionContent);
    }
    
    return content;
  }

  /**
   * Generate section title
   */
  generateSectionTitle(section, topic) {
    const titleTemplates = {
      intro: `Introduction to ${topic}`,
      main_points: `Key Concepts of ${topic}`,
      conclusion: `Summary and Next Steps`,
      hero: `Transform Your Business with ${topic}`,
      benefits: `Benefits of ${topic}`,
      features: `Features and Capabilities`,
      cta: `Get Started with ${topic}`,
      overview: `Overview of ${topic}`,
      prerequisites: `Prerequisites for ${topic}`,
      steps: `Step-by-Step Implementation`,
      examples: `Real-World Examples`,
      summary: `Key Takeaways`
    };
    
    return titleTemplates[section] || `${section.charAt(0).toUpperCase() + section.slice(1)}`;
  }

  /**
   * Get section purpose
   */
  getSectionPurpose(section) {
    return section;
  }

  /**
   * Generate section content
   */
  async generateSectionContent(section, topic, options) {
    const { title, purpose, keyPoints, estimatedWords } = section;
    
    let content = '';
    
    // Generate introduction for section
    content += this.generateSectionIntroduction(title, purpose, topic);
    
    // Generate content for each key point
    for (const point of keyPoints) {
      content += `\n\n### ${point.title}\n\n`;
      content += this.generatePointContent(point, topic, estimatedWords / keyPoints.length);
    }
    
    // Generate section conclusion
    content += `\n\n${this.generateSectionConclusion(title, purpose)}`;
    
    return content;
  }

  /**
   * Generate section introduction
   */
  generateSectionIntroduction(title, purpose, topic) {
    const intros = {
      intro: `In this comprehensive guide, we'll explore ${topic} and provide you with actionable insights to help you succeed.`,
      main_points: `Let's dive into the key aspects of ${topic} that you need to understand.`,
      conclusion: `As we wrap up our exploration of ${topic}, let's review the most important takeaways.`,
      hero: `Discover how ${topic} can transform your approach and deliver exceptional results.`,
      benefits: `Understanding the benefits of ${topic} is crucial for making informed decisions.`,
      features: `Let's examine the key features that make ${topic} stand out from the competition.`,
      cta: `Ready to take action? Here's how you can get started with ${topic} today.`
    };
    
    return intros[purpose] || `Let's explore ${title} and its significance in the context of ${topic}.`;
  }

  /**
   * Generate key points for a section
   */
  generateKeyPoints(section, topic) {
    const pointCount = Math.floor(Math.random() * 3) + 2; // 2-4 points
    const points = [];
    
    const pointTemplates = {
      intro: ['Overview', 'Importance', 'Current State'],
      main_points: ['Key Concept 1', 'Key Concept 2', 'Key Concept 3', 'Practical Application'],
      conclusion: ['Summary', 'Key Takeaways', 'Next Steps'],
      benefits: ['Primary Benefit', 'Secondary Benefit', 'Long-term Advantage'],
      features: ['Core Feature', 'Advanced Feature', 'Unique Capability']
    };
    
    const templates = pointTemplates[section.purpose] || ['Point 1', 'Point 2', 'Point 3'];
    
    for (let i = 0; i < Math.min(pointCount, templates.length); i++) {
      points.push({
        title: templates[i],
        description: `This point covers essential aspects of ${topic} related to ${templates[i].toLowerCase()}.`
      });
    }
    
    return points;
  }

  /**
   * Generate point content
   */
  generatePointContent(point, topic, targetWords) {
    const sentences = Math.ceil(targetWords / 15); // Assume ~15 words per sentence
    let content = '';
    
    for (let i = 0; i < sentences; i++) {
      content += this.generateSentence(point.title, topic);
      if (i < sentences - 1) content += ' ';
    }
    
    return content;
  }

  /**
   * Generate a sentence based on point and topic
   */
  generateSentence(point, topic) {
    const sentenceTemplates = [
      `${point} is a fundamental aspect of ${topic} that requires careful consideration.`,
      `When working with ${topic}, understanding ${point.toLowerCase()} becomes essential for success.`,
      `The relationship between ${point.toLowerCase()} and ${topic} offers valuable insights for practitioners.`,
      `Exploring ${point.toLowerCase()} within the context of ${topic} reveals important patterns and opportunities.`,
      `Mastering ${point.toLowerCase()} is key to unlocking the full potential of ${topic}.`
    ];
    
    return sentenceTemplates[Math.floor(Math.random() * sentenceTemplates.length)];
  }

  /**
   * Generate section conclusion
   */
  generateSectionConclusion(title, purpose) {
    const conclusions = {
      intro: `This overview sets the foundation for our deeper exploration of ${title}.`,
      main_points: `These key points provide a solid understanding of ${title} and its implications.`,
      conclusion: `We've covered the essential aspects of ${title} and its significance.`,
      benefits: `The benefits of ${title} are clear and compelling for forward-thinking organizations.`,
      features: `These features demonstrate why ${title} is a powerful solution for modern challenges.`
    };
    
    return conclusions[purpose] || `This concludes our examination of ${title}.`;
  }

  /**
   * Generate SEO-optimized title
   */
  generateTitle(topic, contentType) {
    const templates = {
      blog: `Complete Guide to ${topic}: Everything You Need to Know`,
      article: `${topic}: A Comprehensive Analysis and Implementation Guide`,
      landing: `Transform Your Business with ${topic} - Get Started Today`,
      tutorial: `How to Master ${topic}: Step-by-Step Tutorial for Beginners`
    };
    
    return templates[contentType] || `Understanding ${topic}: A Complete Overview`;
  }

  /**
   * Generate meta description
   */
  generateMetaDescription(topic, wordCount) {
    const description = `Discover everything about ${topic} in this comprehensive ${wordCount}-word guide. Learn key concepts, best practices, and practical implementation strategies.`;
    return description.substring(0, 160); // Keep under 160 characters
  }

  /**
   * Optimize content for SEO
   */
  async optimizeForSEO(content, topic, contentType) {
    const typeConfig = this.contentTypes[contentType];
    const seoElements = typeConfig.seoElements;
    
    const optimized = { ...content };
    
    // Add SEO elements
    if (seoElements.includes('keywords')) {
      optimized.keywords = this.extractKeywords(topic).join(', ');
    }
    
    if (seoElements.includes('headings')) {
      optimized.headings = this.extractHeadings(content.content);
    }
    
    if (seoElements.includes('schema_markup')) {
      optimized.schemaMarkup = this.generateSchemaMarkup(content, contentType);
    }
    
    // Optimize content structure
    optimized.content = this.optimizeContentStructure(optimized.content);
    
    return optimized;
  }

  /**
   * Extract keywords from topic
   */
  extractKeywords(topic) {
    const words = topic.toLowerCase().split(' ');
    const stopWords = ['the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by'];
    
    return words.filter(word => 
      word.length > 2 && !stopWords.includes(word)
    );
  }

  /**
   * Extract headings from content
   */
  extractHeadings(content) {
    const headingRegex = /^#{1,6}\s+(.+)$/gm;
    const headings = [];
    let match;
    
    while ((match = headingRegex.exec(content)) !== null) {
      headings.push({
        level: match[0].match(/^#+/)[0].length,
        text: match[1].trim()
      });
    }
    
    return headings;
  }

  /**
   * Generate schema markup
   */
  generateSchemaMarkup(content, contentType) {
    const baseSchema = {
      "@context": "https://schema.org",
      "@type": contentType === 'blog' ? 'BlogPosting' : 'Article',
      "headline": content.title,
      "description": content.metaDescription,
      "datePublished": new Date().toISOString(),
      "dateModified": new Date().toISOString(),
      "author": {
        "@type": "Organization",
        "name": "Zion App"
      }
    };
    
    return JSON.stringify(baseSchema, null, 2);
  }

  /**
   * Optimize content structure
   */
  optimizeContentStructure(content) {
    // Ensure proper heading hierarchy
    let optimized = content;
    
    // Add internal links suggestions
    optimized += '\n\n## Related Topics\n\n';
    optimized += '- [Topic 1](#topic-1)\n';
    optimized += '- [Topic 2](#topic-2)\n';
    optimized += '- [Topic 3](#topic-3)\n';
    
    return optimized;
  }

  /**
   * Assess content quality
   */
  async assessContentQuality(content) {
    let score = 0;
    
    // Content length score (20 points)
    const targetWords = this.contentTypes[content.contentType]?.minWords || 800;
    const actualWords = this.countWords(content.content);
    if (actualWords >= targetWords) score += 20;
    else score += Math.floor((actualWords / targetWords) * 20);
    
    // Structure score (20 points)
    if (content.sections && content.sections.length >= 3) score += 20;
    else score += Math.floor((content.sections?.length || 0) / 3 * 20);
    
    // SEO elements score (20 points)
    if (content.title && content.metaDescription) score += 10;
    if (content.keywords) score += 5;
    if (content.headings && content.headings.length > 0) score += 5;
    
    // Readability score (20 points)
    const avgSentenceLength = this.calculateAverageSentenceLength(content.content);
    if (avgSentenceLength >= 10 && avgSentenceLength <= 25) score += 20;
    else score += Math.max(0, 20 - Math.abs(avgSentenceLength - 17.5) * 2);
    
    // Uniqueness score (20 points)
    score += 20; // Placeholder for actual uniqueness check
    
    return Math.min(100, Math.max(0, score));
  }

  /**
   * Count words in text
   */
  countWords(text) {
    return text.trim().split(/\s+/).length;
  }

  /**
   * Calculate average sentence length
   */
  calculateAverageSentenceLength(text) {
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    if (sentences.length === 0) return 0;
    
    const totalWords = sentences.reduce((sum, sentence) => sum + this.countWords(sentence), 0);
    return totalWords / sentences.length;
  }

  /**
   * Generate unique content ID
   */
  generateContentId(topic, contentType) {
    const hash = crypto.createHash('md5').update(`${topic}-${contentType}-${Date.now()}`).digest('hex');
    return `${contentType}-${hash.substring(0, 8)}`;
  }

  /**
   * Update performance metrics
   */
  updatePerformanceMetrics() {
    this.performanceMetrics.totalGenerated = this.contentHistory.length;
    
    const successful = this.contentHistory.filter(c => c.qualityScore >= 70).length;
    this.performanceMetrics.successRate = (successful / this.totalGenerated) * 100;
    
    const totalScore = this.contentHistory.reduce((sum, c) => sum + c.qualityScore, 0);
    this.performanceMetrics.avgQualityScore = totalScore / this.totalGenerated;
    
    // Update popular topics
    const topicCounts = {};
    this.contentHistory.forEach(c => {
      topicCounts[c.topic] = (topicCounts[c.topic] || 0) + 1;
    });
    
    this.performanceMetrics.popularTopics = Object.entries(topicCounts)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5)
      .map(([topic]) => topic);
  }

  /**
   * Update topic clusters
   */
  updateTopicClusters(topic, contentType) {
    if (!this.topicClusters.has(topic)) {
      this.topicClusters.set(topic, {
        count: 0,
        contentTypes: new Set(),
        relatedTopics: new Set(),
        lastUpdated: new Date()
      });
    }
    
    const cluster = this.topicClusters.get(topic);
    cluster.count++;
    cluster.contentTypes.add(contentType);
    cluster.lastUpdated = new Date();
  }

  /**
   * Get performance report
   */
  getPerformanceReport() {
    return {
      ...this.performanceMetrics,
      topicClusters: Array.from(this.topicClusters.entries()).map(([topic, data]) => ({
        topic,
        count: data.count,
        contentTypes: Array.from(data.contentTypes),
        lastUpdated: data.lastUpdated
      })),
      recentContent: this.contentHistory.slice(-5).map(c => ({
        id: c.id,
        topic: c.topic,
        contentType: c.contentType,
        qualityScore: c.qualityScore,
        timestamp: c.timestamp
      }))
    };
  }

  /**
   * Export content to file
   */
  exportContent(contentRecord, format = 'markdown') {
    const { id, topic, contentType, content, timestamp } = contentRecord;
    
    const filename = `${id}-${topic.replace(/\s+/g, '-').toLowerCase()}.${format}`;
    const filepath = path.join(process.cwd(), 'generated-content', filename);
    
    // Ensure directory exists
    const dir = path.dirname(filepath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    let exportContent = '';
    
    if (format === 'markdown') {
      exportContent = `# ${content.title}\n\n`;
      exportContent += `**Meta Description:** ${content.metaDescription}\n\n`;
      exportContent += `**Keywords:** ${content.keywords || 'N/A'}\n\n`;
      exportContent += `**Generated:** ${timestamp}\n\n`;
      exportContent += `---\n\n`;
      exportContent += content.content;
    } else if (format === 'json') {
      exportContent = JSON.stringify(contentRecord, null, 2);
    }
    
    fs.writeFileSync(filepath, exportContent);
    console.log(`📁 Content exported to: ${filepath}`);
    
    return filepath;
  }
}

// CLI interface
if (require.main === module) {
  const generator = new AIContentGeneratorV2();
  
  const command = process.argv[2];
  const topic = process.argv[3];
  const contentType = process.argv[4] || 'blog';
  
  if (!command) {
    console.log(`
Usage: node ai-content-generator-v2.cjs <command> [topic] [contentType]

Commands:
  generate    Generate new content (requires topic)
  report      Show performance report
  export      Export recent content
  help        Show this help message

Examples:
  node ai-content-generator-v2.cjs generate "AI Automation" blog
  node ai-content-generator-v2.cjs generate "Machine Learning" tutorial
  node ai-content-generator-v2.cjs report
  node ai-content-generator-v2.cjs export
    `);
    process.exit(1);
  }

  if (command === 'generate' && !topic) {
    console.log('❌ Topic is required for generate command');
    process.exit(1);
  }
  
  (async () => {
    try {
      switch (command) {
        case 'generate':
          const content = await generator.generateContent(topic, contentType);
          console.log('\n📝 Generated Content:');
          console.log(JSON.stringify(content, null, 2));
          break;
          
        case 'report':
          const report = generator.getPerformanceReport();
          console.log('\n📊 Performance Report:');
          console.log(JSON.stringify(report, null, 2));
          break;
          
        case 'export':
          if (generator.contentHistory.length === 0) {
            console.log('No content to export. Generate some content first.');
            break;
          }
          const latest = generator.contentHistory[generator.contentHistory.length - 1];
          generator.exportContent(latest, 'markdown');
          break;
          
        default:
          console.log(`Unknown command: ${command}`);
          process.exit(1);
      }
    } catch (error) {
      console.error('Error:', error.message);
      process.exit(1);
    }
  })();
}

module.exports = AIContentGeneratorV2;