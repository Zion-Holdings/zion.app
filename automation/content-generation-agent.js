const fs = require('fs');
const path = require('path');

class ContentGenerationAgent {
  constructor() {
    this.contentMemory = this.loadContentMemory();
    this.generationRules = this.loadGenerationRules();
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

  loadGenerationRules() {
    return {
      marketplace: {
        tone: 'professional, innovative, trustworthy',
        keywords: ['AI marketplace', 'IT services', 'AI talents', 'equipment', 'innovation', 'blockchain'],
        structure: ['hero', 'features', 'benefits', 'testimonials', 'cta']
      },
      blog: {
        tone: 'informative, engaging, authoritative',
        keywords: ['AI trends', 'marketplace insights', 'technology', 'innovation'],
        structure: ['introduction', 'main content', 'conclusion', 'cta']
      }
    };
  }

  generateMarketplaceContent(category, customData = {}) {
    const content = {
      hero: this.generateHeroSection(category, customData),
      features: this.generateFeaturesSection(category, customData),
      benefits: this.generateBenefitsSection(category, customData),
      testimonials: this.generateTestimonials(category, customData),
      cta: this.generateCTASection(category, customData)
    };

    return this.formatContent(content, 'marketplace');
  }

  generateHeroSection(category, customData) {
    const industry = customData.industry || 'Business';
    const services = customData.services || 'IT services, AI talents, cutting-edge equipment, and innovative solutions';
    
    return {
      title: `The Future of ${industry} Exchange`,
      subtitle: `Connect with the world's premier ${services} powered by advanced AI matching and secure blockchain technology.`,
      cta: "Start Trading Now",
      stats: this.generateStats(category, customData)
    };
  }

  generateFeaturesSection(category, customData) {
    return [
      {
        title: "AI-Powered Matching",
        description: "Advanced algorithms ensure perfect matches between buyers and sellers.",
        icon: "brain"
      },
      {
        title: "Secure Blockchain",
        description: "All transactions secured with enterprise-grade blockchain technology.",
        icon: "shield"
      },
      {
        title: "Lightning Fast",
        description: "Execute transactions in milliseconds with high-performance infrastructure.",
        icon: "bolt"
      },
      {
        title: "Global Network",
        description: "Connect with verified professionals and businesses worldwide.",
        icon: "globe"
      }
    ];
  }

  generateBenefitsSection(category, customData) {
    return [
      {
        title: "AI-Powered Matching",
        description: "Our advanced AI algorithms ensure perfect matches between buyers and sellers, optimizing for quality, price, and compatibility.",
        icon: "brain"
      },
      {
        title: "Secure Blockchain",
        description: "All transactions are secured with enterprise-grade blockchain technology, ensuring transparency and immutability.",
        icon: "shield"
      },
      {
        title: "Lightning Fast",
        description: "Execute transactions in milliseconds with our high-performance infrastructure and optimized matching engine.",
        icon: "bolt"
      },
      {
        title: "Global Network",
        description: "Connect with verified professionals and businesses worldwide, expanding your reach and opportunities.",
        icon: "globe"
      }
    ];
  }

  generateTestimonials(category, customData) {
    return [
      {
        name: "Sarah Chen",
        role: "CTO, TechFlow Inc.",
        content: "Zion revolutionized our AI talent acquisition. The matching algorithm found us the perfect machine learning specialist in just 48 hours. Incredible platform!",
        rating: 5
      },
      {
        name: "Michael Rodriguez",
        role: "AI Consultant",
        content: "As an independent AI consultant, Zion has been a game-changer. The platform connects me with high-quality clients and handles all the logistics seamlessly.",
        rating: 5
      },
      {
        name: "Emma Thompson",
        role: "VP Innovation, DataCorp",
        content: "The equipment marketplace on Zion is unmatched. We found cutting-edge AI infrastructure at competitive prices, and the verification process gave us complete confidence.",
        rating: 5
      }
    ];
  }

  generateCTASection(category, customData) {
    return {
      title: "Ready to Join the Future?",
      subtitle: "Become part of the world's most advanced AI-powered marketplace. Connect, trade, and grow with Zion.",
      primaryCTA: "Get Started Free",
      secondaryCTA: "Explore Marketplace"
    };
  }

  generateStats(category, customData) {
    return [
      { label: "Active Users", value: "10K+" },
      { label: "Total Volume", value: "$50M+" },
      { label: "AI Services", value: "500+" },
      { label: "Uptime", value: "99.9%" }
    ];
  }

  formatContent(content, type) {
    return {
      type: type,
      content: content,
      generatedAt: new Date().toISOString(),
      version: "1.0.0"
    };
  }

  saveGeneratedContent(content, filename) {
    try {
      const outputPath = path.join(__dirname, 'generated-content', filename);
      const outputDir = path.dirname(outputPath);
      
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }
      
      fs.writeFileSync(outputPath, JSON.stringify(content, null, 2));
      console.log(`Content saved to: ${outputPath}`);
      return outputPath;
    } catch (error) {
      console.error('Error saving content:', error);
      return null;
    }
  }
}

module.exports = ContentGenerationAgent; 