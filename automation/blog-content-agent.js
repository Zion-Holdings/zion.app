const fs = require('fs');
const path = require('path');

class BlogContentAgent {
  constructor() {
    this.contentMemory = this.loadContentMemory();
    this.blogTemplates = this.loadBlogTemplates();
    this.seoKeywords = this.loadSEOKeywords();
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

  loadBlogTemplates() {
    return {
      aiMarketplace: {
        title: "The Future of AI Marketplaces: Trends and Insights for 2024",
        introduction: "As AI technology continues to evolve, marketplaces are becoming increasingly sophisticated in connecting businesses with AI services and talent. This comprehensive guide explores the latest trends and what businesses need to know.",
        sections: [
          {
            title: "The Rise of AI-Powered Matching",
            content: "AI-powered matching algorithms are revolutionizing how businesses find and connect with AI services. These sophisticated systems analyze requirements, capabilities, and past performance to create optimal matches."
          },
          {
            title: "Blockchain Security in AI Marketplaces",
            content: "Security is paramount in AI marketplaces, where sensitive data and valuable intellectual property are exchanged. Blockchain technology provides the transparency and immutability needed for secure transactions."
          },
          {
            title: "Global Talent Networks",
            content: "AI marketplaces are breaking down geographical barriers, connecting businesses with top AI talent from around the world. This global reach is expanding opportunities for both service providers and clients."
          }
        ],
        conclusion: "The future of AI marketplaces is bright, with continued innovation in matching algorithms, security protocols, and global connectivity. Businesses that embrace these platforms will have a significant competitive advantage."
      },
      blockchainSecurity: {
        title: "Blockchain Security: The Foundation of Trust in AI Marketplaces",
        introduction: "In the rapidly evolving world of AI marketplaces, trust is everything. Blockchain technology provides the security foundation that enables secure, transparent transactions between businesses and AI service providers.",
        sections: [
          {
            title: "Understanding Blockchain Security",
            content: "Blockchain technology creates an immutable ledger of all transactions, ensuring that once a transaction is recorded, it cannot be altered. This provides the transparency and security needed for AI marketplace operations."
          },
          {
            title: "Smart Contracts in AI Marketplaces",
            content: "Smart contracts automate the execution of agreements between parties, ensuring that payments are released only when services are delivered as specified. This reduces disputes and builds trust."
          },
          {
            title: "Privacy and Data Protection",
            content: "While blockchain provides transparency, it also offers privacy features that protect sensitive business information and AI intellectual property during transactions."
          }
        ],
        conclusion: "Blockchain security is not just a feature of AI marketplaces—it's the foundation that makes them possible. As these platforms continue to grow, blockchain technology will become even more essential."
      },
      digitalTransformation: {
        title: "Digital Transformation Through AI Marketplaces: A Complete Guide",
        introduction: "Digital transformation is no longer optional for businesses that want to remain competitive. AI marketplaces are playing a crucial role in this transformation by providing access to cutting-edge AI services and talent.",
        sections: [
          {
            title: "The Role of AI in Digital Transformation",
            content: "AI technologies are at the heart of digital transformation, enabling businesses to automate processes, gain insights from data, and create new customer experiences. AI marketplaces make these technologies accessible."
          },
          {
            title: "Choosing the Right AI Services",
            content: "With so many AI services available, businesses need guidance on selecting the right solutions for their specific needs. AI marketplaces provide curated options and expert matching to simplify this process."
          },
          {
            title: "Implementation Strategies",
            content: "Successful digital transformation requires careful planning and execution. AI marketplaces offer not just services, but also expertise in implementation and integration."
          }
        ],
        conclusion: "AI marketplaces are accelerating digital transformation by making advanced AI services accessible to businesses of all sizes. The key to success is choosing the right platform and services for your specific needs."
      }
    };
  }

  loadSEOKeywords() {
    return {
      aiMarketplace: [
        'AI marketplace', 'artificial intelligence', 'AI services', 'AI talent', 'machine learning',
        'AI matching', 'blockchain security', 'digital transformation', 'AI consulting',
        'AI development', 'AI integration', 'AI solutions', 'AI platform'
      ],
      blockchainSecurity: [
        'blockchain security', 'smart contracts', 'cryptocurrency', 'distributed ledger',
        'blockchain marketplace', 'secure transactions', 'digital security', 'trust protocols',
        'immutable ledger', 'decentralized', 'cryptography', 'blockchain technology'
      ],
      digitalTransformation: [
        'digital transformation', 'AI adoption', 'business automation', 'digital innovation',
        'AI implementation', 'technology strategy', 'digital strategy', 'AI consulting',
        'business transformation', 'AI integration', 'digital modernization', 'AI solutions'
      ]
    };
  }

  generateBlogPost(topic, audience, customData = {}) {
    const template = this.blogTemplates[topic] || this.blogTemplates.aiMarketplace;
    const keywords = this.seoKeywords[topic] || this.seoKeywords.aiMarketplace;
    
    const blogPost = {
      title: this.customizeTitle(template.title, audience, customData),
      introduction: this.customizeIntroduction(template.introduction, audience, customData),
      sections: this.customizeSections(template.sections, audience, customData),
      conclusion: this.customizeConclusion(template.conclusion, audience, customData),
      seo: this.generateSEO(topic, keywords, customData),
      metadata: this.generateMetadata(topic, audience, customData)
    };

    return this.formatBlogPost(blogPost, topic);
  }

  customizeTitle(templateTitle, audience, customData) {
    const year = customData.year || '2024';
    const industry = customData.industry || 'business';
    
    return templateTitle
      .replace('2024', year)
      .replace('businesses', audience)
      .replace('Business', audience);
  }

  customizeIntroduction(templateIntro, audience, customData) {
    const industry = customData.industry || 'technology';
    
    return templateIntro
      .replace('businesses', audience)
      .replace('technology', industry);
  }

  customizeSections(templateSections, audience, customData) {
    return templateSections.map(section => ({
      title: this.customizeSectionTitle(section.title, audience, customData),
      content: this.customizeSectionContent(section.content, audience, customData),
      keywords: this.extractKeywords(section.content)
    }));
  }

  customizeSectionTitle(title, audience, customData) {
    return title.replace('businesses', audience);
  }

  customizeSectionContent(content, audience, customData) {
    const industry = customData.industry || 'technology';
    
    return content
      .replace(/businesses/g, audience)
      .replace(/technology/g, industry)
      .replace(/Technology/g, industry.charAt(0).toUpperCase() + industry.slice(1));
  }

  customizeConclusion(templateConclusion, audience, customData) {
    const industry = customData.industry || 'technology';
    
    return templateConclusion
      .replace('businesses', audience)
      .replace('technology', industry);
  }

  generateSEO(topic, keywords, customData) {
    const title = this.blogTemplates[topic]?.title || 'AI Marketplace Insights';
    const description = this.generateMetaDescription(topic, customData);
    
    return {
      title: title,
      description: description,
      keywords: keywords.join(', '),
      canonical: `/blog/${topic.toLowerCase().replace(/\s+/g, '-')}`,
      ogTitle: title,
      ogDescription: description,
      ogType: 'article',
      twitterCard: 'summary_large_image'
    };
  }

  generateMetaDescription(topic, customData) {
    const descriptions = {
      aiMarketplace: "Discover the latest trends in AI marketplaces and how they're revolutionizing business connections. Learn about AI-powered matching, blockchain security, and global talent networks.",
      blockchainSecurity: "Explore how blockchain technology provides the security foundation for AI marketplaces. Learn about smart contracts, privacy protection, and trust protocols.",
      digitalTransformation: "Understand how AI marketplaces are accelerating digital transformation. Get insights on AI adoption, implementation strategies, and choosing the right services."
    };
    
    return descriptions[topic] || descriptions.aiMarketplace;
  }

  generateMetadata(topic, audience, customData) {
    return {
      author: customData.author || 'Zion AI Team',
      publishDate: new Date().toISOString(),
      readTime: this.calculateReadTime(topic),
      category: 'AI Marketplace',
      tags: this.generateTags(topic, audience),
      audience: audience,
      topic: topic
    };
  }

  calculateReadTime(topic) {
    const template = this.blogTemplates[topic];
    if (!template) return '5 min read';
    
    const totalWords = template.introduction.split(' ').length + 
                      template.sections.reduce((acc, section) => acc + section.content.split(' ').length, 0) +
                      template.conclusion.split(' ').length;
    
    const wordsPerMinute = 200;
    const minutes = Math.ceil(totalWords / wordsPerMinute);
    
    return `${minutes} min read`;
  }

  generateTags(topic, audience) {
    const baseTags = ['AI Marketplace', 'Technology', 'Innovation'];
    const topicTags = {
      aiMarketplace: ['AI Services', 'Machine Learning', 'Blockchain'],
      blockchainSecurity: ['Blockchain', 'Security', 'Smart Contracts'],
      digitalTransformation: ['Digital Transformation', 'AI Adoption', 'Business Strategy']
    };
    
    return [...baseTags, ...(topicTags[topic] || topicTags.aiMarketplace), audience];
  }

  extractKeywords(content) {
    const keywords = [
      'AI', 'artificial intelligence', 'marketplace', 'blockchain', 'security',
      'digital transformation', 'innovation', 'technology', 'business'
    ];
    
    return keywords.filter(keyword => 
      content.toLowerCase().includes(keyword.toLowerCase())
    );
  }

  formatBlogPost(blogPost, topic) {
    return {
      type: 'blog',
      topic: topic,
      content: blogPost,
      generatedAt: new Date().toISOString(),
      version: "1.0.0",
      wordCount: this.calculateWordCount(blogPost)
    };
  }

  calculateWordCount(blogPost) {
    let totalWords = 0;
    
    if (blogPost.content.introduction) {
      totalWords += blogPost.content.introduction.split(' ').length;
    }
    
    if (blogPost.content.sections) {
      blogPost.content.sections.forEach(section => {
        totalWords += section.content.split(' ').length;
      });
    }
    
    if (blogPost.content.conclusion) {
      totalWords += blogPost.content.conclusion.split(' ').length;
    }
    
    return totalWords;
  }

  saveBlogPost(blogPost, filename) {
    try {
      const outputPath = path.join(__dirname, 'generated-content', 'blog', filename);
      const outputDir = path.dirname(outputPath);
      
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }
      
      fs.writeFileSync(outputPath, JSON.stringify(blogPost, null, 2));
      console.log(`Blog post saved to: ${outputPath}`);
      return outputPath;
    } catch (error) {
      console.error('Error saving blog post:', error);
      return null;
    }
  }

  generateAllBlogPosts() {
    const topics = ['aiMarketplace', 'blockchainSecurity', 'digitalTransformation'];
    const audiences = ['Business Leaders', 'IT Professionals', 'Entrepreneurs'];
    const generatedPosts = {};

    topics.forEach(topic => {
      audiences.forEach(audience => {
        const filename = `${topic}-${audience.toLowerCase().replace(/\s+/g, '-')}.json`;
        const blogPost = this.generateBlogPost(topic, audience, {
          year: '2024',
          industry: 'technology',
          author: 'Zion AI Team'
        });
        
        generatedPosts[filename] = blogPost;
        this.saveBlogPost(blogPost, filename);
      });
    });

    return generatedPosts;
  }
}

module.exports = BlogContentAgent; 