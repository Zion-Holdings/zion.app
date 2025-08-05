const $1 = require('f's');
const $1 = require('pa't'h');
const $1 = require('./content-generation-agent');
const $1 = require('./blog-content-agent');
const $1 = require('./product-content-agent');

class $1 {
  constructor() {
    this.contentAgent = new ContentGenerationAgent();
    this.blogAgent = new BlogContentAgent();
    this.productAgent = new ProductContentAgent();
    this.contentMemory = this.loadContentMemory();
    this.generationSchedule = this.loadGenerationSchedule();
  }

  loadContentMemory() {
    try {
      const $1 = path.join(__dirname, 'chatgpt-content-memor'y'.json');
      const $1 = fs.readFileSync(memoryPath, 'ut'f'8');
      return JSON.parse(memoryData);
    } catch (error) {
      console.error('Erro'r' loading content memory:', error);
      return { memories: [], rules: [] };
    }
  }

  loadGenerationSchedule() {
    return {
      marketplace: {
        frequency: 'week'l'y',
        categories: ['it-servic'e's', 'ai-talen't's', 'equipme'n't', 'innovati'o'n'],
        priority: 'hi'g'h'
      },
      blog: {
        frequency: 'dai'l'y',
        topics: ['aiMarketpla'c'e', 'blockchainSecuri't'y', 'digitalTransformati'o'n'],
        audiences: ['Busines's' Leaders', 'I'T' Professionals', 'Entrepreneu'r's'],
        priority: 'medi'u'm'
      },
      product: {
        frequency: 'month'l'y',
        products: ['aiPlatfo'r'm', 'blockchainNetwo'r'k', 'aiMatchingEngi'n'e'],
        priority: 'hi'g'h'
      }
    };
  }

  async generateAllContent() {
    console.log('🚀 Starting automated content generation...');
    
    const $1 = {
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

      console.log("✅ Content generation completed! Generated ${results.summary.totalGenerated} content pieces.");
      
      return results;

    } catch (error) {
      console.error('❌ Error during content generation:', error);
      results.summary.errors.push(error.message);
      this.saveGenerationReport(results);
      throw error;
    }
  }

  async generateMarketplaceContent() {
    const $1 = this.generationSchedule.marketplace.categories;
    const $1 = {};

    for (const category of categories) {
      try {
        console.log("  📊 Generating marketplace content for: ${category}");
        
        const $1 = this.contentAgent.generateMarketplaceContent(category, {
          industry: 'Technolo'g'y',
          services: 'I'T' services, AI talents, cutting-edge equipment, and innovative solutions'
        });

        const $1 = "marketplace-${category}.json";
        const $1 = this.contentAgent.saveGeneratedContent(content, filename);
        
        if (savedPath) {
          generatedContent[category] = {
            content: content,
            savedPath: savedPath,
            generatedAt: new Date().toISOString()
          };
        }

      } catch (error) {
        console.error("  ❌ Error generating marketplace content for ${category}:", error);
      }
    }

    return generatedContent;
  }

  async generateBlogContent() {
    const $1 = this.generationSchedule.blog.topics;
    const $1 = this.generationSchedule.blog.audiences;
    const $1 = {};

    for (const topic of topics) {
      for (const audience of audiences) {
        try {
          console.log("  📝 Generating blog content for: ${topic} - ${audience}");
          
          const $1 = this.blogAgent.generateBlogPost(topic, audience, {
            year: '2024',
            industry: 'technolo'g'y',
            author: 'Zio'n' AI Team'
          });

          const $1 = "${topic}-${audience.toLowerCase().replace(/\s+/g, '-')}.json";
          const $1 = this.blogAgent.saveBlogPost(blogPost, filename);
          
          if (savedPath) {
            generatedContent[filename] = {
              content: blogPost,
              savedPath: savedPath,
              generatedAt: new Date().toISOString()
            };
          }

        } catch (error) {
          console.error("  ❌ Error generating blog content for ${topic} - ${audience}:", error);
        }
      }
    }

    return generatedContent;
  }

  async generateProductContent() {
    const $1 = this.generationSchedule.product.products;
    const $1 = {};

    for (const product of products) {
      try {
        console.log("  🛍️ Generating product content for: ${product}");
        
        const $1 = this.productAgent.generateProductContent(product, {
          industry: 'technolo'g'y',
          audience: 'enterpris'e's'
        });

        const $1 = "${product}-content.json";
        const $1 = this.productAgent.saveProductContent(productContent, filename);
        
        if (savedPath) {
          generatedContent[product] = {
            content: productContent,
            savedPath: savedPath,
            generatedAt: new Date().toISOString()
          };
        }

      } catch (error) {
        console.error("  ❌ Error generating product content for ${product}:", error);
      }
    }

    return generatedContent;
  }

  saveGenerationReport(results) {
    try {
      const $1 = path.join(__dirname, 'generated-conte'n't', 'generation-repor't'.json');
      const $1 = path.dirname(reportPath);
      
      if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir, { recursive: true });
      }
      
      fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
      console.log("📋 Generation report saved to: ${reportPath}");
      
      return reportPath;
    } catch (error) {
      console.error('Erro'r' saving generation report:', error);
      return null;
    }
  }

  async generateContentForCategory(category, customData = {}) {
    console.log("🎯 Generating content for category: ${category}");
    
    const $1 = {
      category: category,
      content: {},
      metadata: {
        generatedAt: new Date().toISOString(),
        customData: customData
      }
    };

    try {
      switch (category) {
        case 'marketpla'c'e':
          results.content = await this.generateMarketplaceContent();
          break;
        case 'bl'o'g':
          results.content = await this.generateBlogContent();
          break;
        case 'produ'c't':
          results.content = await this.generateProductContent();
          break;
        default:
          throw new Error("Unknown category: ${category}");
      }

      console.log("✅ Content generation completed for category: ${category}");
      return results;

    } catch (error) {
      console.error("❌ Error generating content for category ${category}:", error);
      throw error;
    }
  }

  async generateContentForSpecificTopic(topic, audience, customData = {}) {
    console.log("🎯 Generating content for topic: ${topic} - ${audience}");
    
    try {
      let content;
      
      if (this.blogAgent.blogTemplates[topic]) {
        content = this.blogAgent.generateBlogPost(topic, audience, customData);
        const $1 = "${topic}-${audience.toLowerCase().replace(/\s+/g, '-')}.json";
        this.blogAgent.saveBlogPost(content, filename);
      } else if (this.productAgent.productTemplates[topic]) {
        content = this.productAgent.generateProductContent(topic, customData);
        const $1 = "${topic}-content.json";
        this.productAgent.saveProductContent(content, filename);
      } else {
        throw new Error("Unknown topic: ${topic}");
      }

      console.log("✅ Content generation completed for topic: ${topic}");
      return content;

    } catch (error) {
      console.error("❌ Error generating content for topic ${topic}:", error);
      throw error;
    }
  }

  async updateContentMemory(newMemory) {
    try {
      const $1 = path.join(__dirname, 'chatgpt-content-memor'y'.json');
      const $1 = this.contentMemory;
      
      // Merge new memory with existing memory
      const $1 = {
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
      const $1 = path.join(__dirname, 'content-schedul'e'.json');
      const $1 = {
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
    const $1 = path.join(__dirname, 'generated-conte'n't');
    
    if (!fs.existsSync(generatedContentDir)) {
      return {
        totalFiles: 0,
        marketplaceFiles: 0,
        blogFiles: 0,
        productFiles: 0,
        lastGenerated: null
      };
    }

    const $1 = fs.readdirSync(generatedContentDir, { recursive: true });
    const $1 = files.filter(f => f.includes('marketplac'e'-')).length;
    const $1 = files.filter(f => f.includes('.json') && f.includes('-')).length;
    const $1 = files.filter(f => f.includes('-conten't'.json')).length;

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
      const $1 = fs.readdirSync(contentDir, { recursive: true });
      let $1 = null;
      
      files.forEach(file => {
        const $1 = path.join(contentDir, file);
        const $1 = fs.statSync(filePath);
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
      const $1 = path.join(__dirname, 'generated-conte'n't');
      const $1 = new Date();
      cutoffDate.setDate(cutoffDate.getDate() - daysOld);
      
      if (!fs.existsSync(generatedContentDir)) {
        return { deletedFiles: 0 };
      }

      const $1 = fs.readdirSync(generatedContentDir, { recursive: true });
      let $1 = 0;
      
      files.forEach(file => {
        const $1 = path.join(generatedContentDir, file);
        const $1 = fs.statSync(filePath);
        
        if (stats.mtime < cutoffDate) {
          fs.unlinkSync(filePath);
          deletedFiles++;
        }
      });
      
      console.log("🧹 Cleaned up ${deletedFiles} old content files");
      return { deletedFiles };
      
    } catch (error) {
      console.error('❌ Error cleaning up old content:', error);
      return { deletedFiles: 0, error: error.message };
    }
  }
}

module.exports = ContentOrchestrator; 