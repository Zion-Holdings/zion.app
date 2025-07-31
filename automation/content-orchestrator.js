const fs = require('fs');
const path = require('path');
const ContentGenerationAgent = require('./content-generation-agent');
const BlogContentAgent = require('./blog-content-agent');
const ProductContentAgent = require('./product-content-agent');

class ContentOrchestrator {
  constructor() {
    this.contentAgent = new ContentGenerationAgent();
    this.blogAgent = new BlogContentAgent();
    this.productAgent = new ProductContentAgent();
    this.contentMemory = this.loadContentMemory();
    this.generationSchedule = this.loadGenerationSchedule();
  }

  loadContentMemory() {
    try {
      const memoryPath = path.join(__dirname, 'chatgpt-content-memory.json');
      const memoryData = fs.readFileSync(memoryPath, 'utf8');
      return JSON.parse(memoryData);
    } catch (error) {
      console.error('Error loading content memory:', error);
      return { memories: [], rules: [] };
    }
  }

  loadGenerationSchedule() {
    return {
      marketplace: {
        frequency: 'weekly',
        categories: ['it-services', 'ai-talents', 'equipment', 'innovation'],
        priority: 'high'
      },
      blog: {
        frequency: 'daily',
        topics: ['aiMarketplace', 'blockchainSecurity', 'digitalTransformation'],
        audiences: ['Business Leaders', 'IT Professionals', 'Entrepreneurs'],
        priority: 'medium'
      },
      product: {
        frequency: 'monthly',
        products: ['aiPlatform', 'blockchainNetwork', 'aiMatchingEngine'],
        priority: 'high'
      }
    };
  }

  async generateAllContent() {
    console.log('🚀 Starting automated content generation...');
    
    const results = {
      marketplace: {},
      blog: {},
      product: {},
      summary: {
        totalGenerated: 0,
        marketplaceCount: 0,
        blogCount: 0,
        productCount: 0,
        errors: [],
        timestamp: new Date().toISOString()
      }
    };

    try {
      // Generate marketplace content
      console.log('📊 Generating marketplace content...');
      results.marketplace = await this.generateMarketplaceContent();
      results.summary.marketplaceCount = Object.keys(results.marketplace).length;

      // Generate blog content
      console.log('📝 Generating blog content...');
      results.blog = await this.generateBlogContent();
      results.summary.blogCount = Object.keys(results.blog).length;

      // Generate product content
      console.log('🛍️ Generating product content...');
      results.product = await this.generateProductContent();
      results.summary.productCount = Object.keys(results.product).length;

      // Calculate totals
      results.summary.totalGenerated = 
        results.summary.marketplaceCount + 
        results.summary.blogCount + 
        results.summary.productCount;

      // Save generation report
      this.saveGenerationReport(results);

      console.log(`✅ Content generation completed! Generated ${results.summary.totalGenerated} content pieces.`);
      
      return results;

    } catch (error) {
      console.error('❌ Error during content generation:', error);
      results.summary.errors.push(error.message);
      this.saveGenerationReport(results);
      throw error;
    }
  }

  async generateMarketplaceContent() {
    const categories = this.generationSchedule.marketplace.categories;
    const generatedContent = {};

    for (const category of categories) {
      try {
        console.log(`  📊 Generating marketplace content for: ${category}`);
        
        const content = this.contentAgent.generateMarketplaceContent(category, {
          industry: 'Technology',
          services: 'IT services, AI talents, cutting-edge equipment, and innovative solutions'
        });

        const filename = `marketplace-${category}.json`;
        const savedPath = this.contentAgent.saveGeneratedContent(content, filename);
        
        if (savedPath) {
          generatedContent[category] = {
            content: content,
            savedPath: savedPath,
            generatedAt: new Date().toISOString()
          };
        }

      } catch (error) {
        console.error(`  ❌ Error generating marketplace content for ${category}:`, error);
      }
    }

    return generatedContent;
  }

  async generateBlogContent() {
    const topics = this.generationSchedule.blog.topics;
    const audiences = this.generationSchedule.blog.audiences;
    const generatedContent = {};

    for (const topic of topics) {
      for (const audience of audiences) {
        try {
          console.log(`  📝 Generating blog content for: ${topic} - ${audience}`);
          
          const blogPost = this.blogAgent.generateBlogPost(topic, audience, {
            year: '2024',
            industry: 'technology',
            author: 'Zion AI Team'
          });

          const filename = `${topic}-${audience.toLowerCase().replace(/\s+/g, '-')}.json`;
          const savedPath = this.blogAgent.saveBlogPost(blogPost, filename);
          
          if (savedPath) {
            generatedContent[filename] = {
              content: blogPost,
              savedPath: savedPath,
              generatedAt: new Date().toISOString()
            };
          }

        } catch (error) {
          console.error(`  ❌ Error generating blog content for ${topic} - ${audience}:`, error);
        }
      }
    }

    return generatedContent;
  }

  async generateProductContent() {
    const products = this.generationSchedule.product.products;
    const generatedContent = {};

    for (const product of products) {
      try {
        console.log(`  🛍️ Generating product content for: ${product}`);
        
        const productContent = this.productAgent.generateProductContent(product, {
          industry: 'technology',
          audience: 'enterprises'
        });

        const filename = `${product}-content.json`;
        const savedPath = this.productAgent.saveProductContent(productContent, filename);
        
        if (savedPath) {
          generatedContent[product] = {
            content: productContent,
            savedPath: savedPath,
            generatedAt: new Date().toISOString()
          };
        }

      } catch (error) {
        console.error(`  ❌ Error generating product content for ${product}:`, error);
      }
    }

    return generatedContent;
  }

  saveGenerationReport(results) {
    try {
      const reportPath = path.join(__dirname, 'generated-content', 'generation-report.json');
      const reportDir = path.dirname(reportPath);
      
      if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir, { recursive: true });
      }
      
      fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
      console.log(`📋 Generation report saved to: ${reportPath}`);
      
      return reportPath;
    } catch (error) {
      console.error('Error saving generation report:', error);
      return null;
    }
  }

  async generateContentForCategory(category, customData = {}) {
    console.log(`🎯 Generating content for category: ${category}`);
    
    const results = {
      category: category,
      content: {},
      metadata: {
        generatedAt: new Date().toISOString(),
        customData: customData
      }
    };

    try {
      switch (category) {
        case 'marketplace':
          results.content = await this.generateMarketplaceContent();
          break;
        case 'blog':
          results.content = await this.generateBlogContent();
          break;
        case 'product':
          results.content = await this.generateProductContent();
          break;
        default:
          throw new Error(`Unknown category: ${category}`);
      }

      console.log(`✅ Content generation completed for category: ${category}`);
      return results;

    } catch (error) {
      console.error(`❌ Error generating content for category ${category}:`, error);
      throw error;
    }
  }

  async generateContentForSpecificTopic(topic, audience, customData = {}) {
    console.log(`🎯 Generating content for topic: ${topic} - ${audience}`);
    
    try {
      let content;
      
      if (this.blogAgent.blogTemplates[topic]) {
        content = this.blogAgent.generateBlogPost(topic, audience, customData);
        const filename = `${topic}-${audience.toLowerCase().replace(/\s+/g, '-')}.json`;
        this.blogAgent.saveBlogPost(content, filename);
      } else if (this.productAgent.productTemplates[topic]) {
        content = this.productAgent.generateProductContent(topic, customData);
        const filename = `${topic}-content.json`;
        this.productAgent.saveProductContent(content, filename);
      } else {
        throw new Error(`Unknown topic: ${topic}`);
      }

      console.log(`✅ Content generation completed for topic: ${topic}`);
      return content;

    } catch (error) {
      console.error(`❌ Error generating content for topic ${topic}:`, error);
      throw error;
    }
  }

  async updateContentMemory(newMemory) {
    try {
      const memoryPath = path.join(__dirname, 'chatgpt-content-memory.json');
      const currentMemory = this.contentMemory;
      
      // Merge new memory with existing memory
      const updatedMemory = {
        ...currentMemory,
        memories: [...currentMemory.memories, ...newMemory.memories],
        rules: [...currentMemory.rules, ...newMemory.rules],
        lastUpdated: new Date().toISOString()
      };
      
      fs.writeFileSync(memoryPath, JSON.stringify(updatedMemory, null, 2));
      this.contentMemory = updatedMemory;
      
      console.log('✅ Content memory updated successfully');
      return true;
      
    } catch (error) {
      console.error('❌ Error updating content memory:', error);
      return false;
    }
  }

  async scheduleContentGeneration(schedule) {
    try {
      const schedulePath = path.join(__dirname, 'content-schedule.json');
      const updatedSchedule = {
        ...this.generationSchedule,
        ...schedule,
        lastUpdated: new Date().toISOString()
      };
      
      fs.writeFileSync(schedulePath, JSON.stringify(updatedSchedule, null, 2));
      this.generationSchedule = updatedSchedule;
      
      console.log('✅ Content generation schedule updated');
      return true;
      
    } catch (error) {
      console.error('❌ Error updating content generation schedule:', error);
      return false;
    }
  }

  getContentStatistics() {
    const generatedContentDir = path.join(__dirname, 'generated-content');
    
    if (!fs.existsSync(generatedContentDir)) {
      return {
        totalFiles: 0,
        marketplaceFiles: 0,
        blogFiles: 0,
        productFiles: 0,
        lastGenerated: null
      };
    }

    const files = fs.readdirSync(generatedContentDir, { recursive: true });
    const marketplaceFiles = files.filter(f => f.includes('marketplace-')).length;
    const blogFiles = files.filter(f => f.includes('.json') && f.includes('-')).length;
    const productFiles = files.filter(f => f.includes('-content.json')).length;

    return {
      totalFiles: files.length,
      marketplaceFiles: marketplaceFiles,
      blogFiles: blogFiles,
      productFiles: productFiles,
      lastGenerated: this.getLastGeneratedDate(generatedContentDir)
    };
  }

  getLastGeneratedDate(contentDir) {
    try {
      const files = fs.readdirSync(contentDir, { recursive: true });
      let latestDate = null;
      
      files.forEach(file => {
        const filePath = path.join(contentDir, file);
        const stats = fs.statSync(filePath);
        if (!latestDate || stats.mtime > latestDate) {
          latestDate = stats.mtime;
        }
      });
      
      return latestDate ? latestDate.toISOString() : null;
    } catch (error) {
      return null;
    }
  }

  async cleanupOldContent(daysOld = 30) {
    try {
      const generatedContentDir = path.join(__dirname, 'generated-content');
      const cutoffDate = new Date();
      cutoffDate.setDate(cutoffDate.getDate() - daysOld);
      
      if (!fs.existsSync(generatedContentDir)) {
        return { deletedFiles: 0 };
      }

      const files = fs.readdirSync(generatedContentDir, { recursive: true });
      let deletedFiles = 0;
      
      files.forEach(file => {
        const filePath = path.join(generatedContentDir, file);
        const stats = fs.statSync(filePath);
        
        if (stats.mtime < cutoffDate) {
          fs.unlinkSync(filePath);
          deletedFiles++;
        }
      });
      
      console.log(`🧹 Cleaned up ${deletedFiles} old content files`);
      return { deletedFiles };
      
    } catch (error) {
      console.error('❌ Error cleaning up old content:', error);
      return { deletedFiles: 0, error: error.message };
    }
  }
}

module.exports = ContentOrchestrator; 