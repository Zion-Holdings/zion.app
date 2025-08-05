const fs = require('fs');
const path = require('path');
const axios = require('axios');
const { GoogleGenerativeAI } = require('@google/generative-ai');

class EnhancedContentGeneratorAgent {
  constructor() {
    this.agentId = process.env.AGENT_ID || `content-generator-${Date.now()}`;
    
    // Initialize Google AI with fallback
    this.initializeGoogleAI();
    
    this.analytics = {
      pagesCreated: 0,
      contentGenerated: 0,
      errors: 0,
      startTime: Date.now()
    };
    
    this.logFile = path.join(__dirname, 'logs', `content-generator-${this.agentId}.log`);
    this.ensureLogDirectory();
    
    this.contentTemplates = this.loadContentTemplates();
  }

  initializeGoogleAI() {
    try {
      const apiKey = process.env.GOOGLE_AI_API_KEY || process.env.GOOGLE_API_KEY;
      
      if (apiKey && apiKey !== 'placeholder-google-ai-key') {
        this.genAI = new GoogleGenerativeAI(apiKey);
        this.model = this.genAI.getGenerativeModel({ model: 'gemini-pro' });
        this.aiEnabled = true;
        this.log('Google AI initialized successfully');
      } else {
        this.aiEnabled = false;
        this.log('Google AI disabled - using fallback content generation', 'WARN');
      }
    } catch (error) {
      this.aiEnabled = false;
      this.log(`Google AI initialization failed: ${error.message}`, 'ERROR');
    }
  }

  async generateContentWithAI(prompt) {
    if (!this.aiEnabled) {
      return this.generateFallbackContent(prompt);
    }
    
    try {
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      this.log(`AI content generation failed: ${error}`, 'ERROR');
      return this.generateFallbackContent(prompt);
    }
  }

  generateFallbackContent(prompt) {
    // Simple fallback content generation based on prompt keywords
    const keywords = prompt.toLowerCase().split(' ');
    
    if (keywords.includes('service') || keywords.includes('solution')) {
      return `Professional service offering with expert implementation and ongoing support. Our team provides comprehensive solutions tailored to your specific needs.`;
    } else if (keywords.includes('product') || keywords.includes('feature')) {
      return `Innovative product designed for modern business requirements. Features include advanced functionality, user-friendly interface, and scalable architecture.`;
    } else if (keywords.includes('blog') || keywords.includes('article')) {
      return `Insights and analysis on current trends and best practices. Our expert team shares valuable knowledge and industry expertise.`;
    } else {
      return `Comprehensive content providing detailed information and professional insights. Contact us to learn more about our services.`;
    }
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] [${this.agentId}] ${message}\n`;
    fs.appendFileSync(this.logFile, logEntry);
    console.log(`[${level}] [${this.agentId}] ${message}`);
  }

  loadContentTemplates() {
    return {
      about: {
        title: 'About Us',
        description: 'Learn about our company, mission, and values',
        sections: ['hero', 'mission', 'team', 'values', 'history', 'contact']
      },
      contact: {
        title: 'Contact Us',
        description: 'Get in touch with our team',
        sections: ['hero', 'contact-form', 'office-locations', 'support-info']
      },
      services: {
        title: 'Our Services',
        description: 'Explore our comprehensive service offerings',
        sections: ['hero', 'service-categories', 'featured-services', 'process', 'cta']
      },
      products: {
        title: 'Our Products',
        description: 'Discover our innovative product solutions',
        sections: ['hero', 'product-categories', 'featured-products', 'benefits', 'cta']
      },
      blog: {
        title: 'Blog',
        description: 'Latest insights and industry news',
        sections: ['hero', 'featured-posts', 'categories', 'newsletter']
      },
      privacy: {
        title: 'Privacy Policy',
        description: 'Our commitment to protecting your privacy',
        sections: ['hero', 'policy-content', 'contact-info']
      },
      terms: {
        title: 'Terms of Service',
        description: 'Terms and conditions for using our services',
        sections: ['hero', 'terms-content', 'contact-info']
      },
      '404': {
        title: 'Page Not Found',
        description: 'The page you are looking for does not exist',
        sections: ['hero', 'suggestions', 'navigation-help']
      }
    };
  }

  async initialize() {
    this.log('Initializing Enhanced Content Generator Agent...');
    
    // Create output directories
    this.createOutputDirectories();
    
    // Load missing pages analysis
    await this.loadMissingPagesAnalysis();
    
    // Start content generation
    await this.startContentGeneration();
  }

  createOutputDirectories() {
    const dirs = [
      path.join(__dirname, 'generated-content'),
      path.join(__dirname, 'generated-pages'),
      path.join(__dirname, 'content-templates'),
      path.join(__dirname, 'seo-content')
    ];
    
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  async loadMissingPagesAnalysis() {
    try {
      const missingFile = path.join(__dirname, 'missing-content', 'missing-pages.json');
      if (fs.existsSync(missingFile)) {
        this.missingPages = JSON.parse(fs.readFileSync(missingFile, 'utf8'));
        this.log(`Loaded ${this.missingPages.length} missing pages`);
      } else {
        this.missingPages = [];
        this.log('No missing pages analysis found, starting fresh');
      }
    } catch (error) {
      this.log(`Error loading missing pages: ${error.message}`, 'ERROR');
      this.missingPages = [];
    }
  }

  async startContentGeneration() {
    try {
      this.log('Starting content generation process...');
      
      // Generate content for missing pages
      await this.generateMissingPages();
      
      // Generate SEO content
      await this.generateSEOContent();
      
      // Generate blog content
      await this.generateBlogContent();
      
      // Generate product/service descriptions
      await this.generateProductContent();
      
      // Save generation results
      await this.saveGenerationResults();
      
      this.log('Content generation completed successfully');
      
    } catch (error) {
      this.log(`Content generation failed: ${error.message}`, 'ERROR');
      this.analytics.errors++;
    }
  }

  async generateMissingPages() {
    this.log('Generating content for missing pages...');
    
    for (const page of this.missingPages) {
      if (page.priority === 'high') {
        await this.generatePageContent(page);
      }
    }
  }

  async generatePageContent(page) {
    try {
      this.log(`Generating content for: ${page.url}`);
      
      const pageType = this.determinePageType(page.url);
      const template = this.contentTemplates[pageType];
      
      if (!template) {
        this.log(`No template found for page type: ${pageType}`, 'WARN');
        return;
      }
      
      // Generate page content using AI
      const content = await this.generateAIContent(page, template);
      
      // Create page file
      await this.createPageFile(page, content);
      
      this.analytics.pagesCreated++;
      this.log(`Generated page: ${page.url}`);
      
    } catch (error) {
      this.log(`Error generating page content for ${page.url}: ${error.message}`, 'ERROR');
      this.analytics.errors++;
    }
  }

  determinePageType(url) {
    const path = new URL(url).pathname;
    
    if (path.includes('about')) return 'about';
    if (path.includes('contact')) return 'contact';
    if (path.includes('services')) return 'services';
    if (path.includes('products')) return 'products';
    if (path.includes('blog')) return 'blog';
    if (path.includes('privacy')) return 'privacy';
    if (path.includes('terms')) return 'terms';
    if (path.includes('404')) return '404';
    
    return 'about'; // Default
  }

  async generateAIContent(page, template) {
    const prompt = this.buildContentPrompt(page, template);
    
    try {
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      this.log(`AI content generation failed: ${error.message}`, 'ERROR');
      return this.generateFallbackContent(page, template);
    }
  }

  buildContentPrompt(page, template) {
    return `
Create comprehensive, SEO-optimized content for a website page with the following specifications:

Page URL: ${page.url}
Page Title: ${template.title}
Page Description: ${template.description}

Required sections: ${template.sections.join(', ')}

Requirements:
1. Create engaging, professional content that matches the Zion Tech Group brand
2. Include proper HTML structure with semantic tags
3. Optimize for SEO with relevant keywords
4. Make content accessible and user-friendly
5. Include call-to-action elements where appropriate
6. Use modern web design best practices
7. Include meta tags for SEO
8. Make content mobile-responsive

Please generate the complete HTML page with all necessary content, styling considerations, and SEO elements.
    `;
  }

  generateFallbackContent(page, template) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${template.title} - Zion Tech Group</title>
    <meta name="description" content="${template.description}">
    <meta name="keywords" content="technology, services, solutions, ${template.title.toLowerCase()}">
</head>
<body>
    <header>
        <h1>${template.title}</h1>
    </header>
    <main>
        <section class="hero">
            <h2>Welcome to ${template.title}</h2>
            <p>${template.description}</p>
        </section>
        <section class="content">
            <p>Content for ${template.title} page is being generated. Please check back soon for complete information.</p>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
    </footer>
</body>
</html>
    `;
  }

  async createPageFile(page, content) {
    const pagePath = this.getPagePath(page.url);
    const dir = path.dirname(pagePath);
    
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    // Generate proper Next.js page content instead of HTML
    const nextJsContent = this.generateNextJsPageContent(page, content);
    
    fs.writeFileSync(pagePath, nextJsContent);
    
    // Save content metadata
    const metadata = {
      url: page.url,
      title: this.extractTitle(content),
      description: this.extractDescription(content),
      generatedAt: new Date().toISOString(),
      agentId: this.agentId
    };
    
    const metadataPath = pagePath.replace('.tsx', '.json');
    fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));
  }

  generateNextJsPageContent(page, content) {
    const pageTitle = this.extractTitle(content);
    const pageDescription = this.extractDescription(content);
    const pageName = this.sanitizeFilename(page.url.replace(/^\//, '').replace(/\/$/, '') || 'index');
    
    return `import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const ${pageName.charAt(0).toUpperCase() + pageName.slice(1)}Page: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>${pageTitle}</title>
        <meta name="description" content="${pageDescription}" />
        <meta name="keywords" content="${page.url}, Zion, AI marketplace" />
      </Head>

      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-white">
                  <Link href="/" className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    Zion
                  </Link>
                </h1>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/marketplace" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Marketplace
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </Link>
              <Link href="/auth/login" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Login
              </Link>
              <Link href="/auth/signup" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                Join Zion
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="text-center">
              <div className="mb-8">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    ${pageTitle}
                  </span>
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  ${pageDescription}
                </p>
              </div>
              
              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/marketplace" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                  Explore Marketplace
                </Link>
                <Link href="/auth/signup" className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black/20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Zion</h3>
              <p className="text-gray-400 text-sm">
                The future of AI-powered marketplace technology.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Marketplace</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/marketplace" className="text-gray-400 hover:text-white transition-colors">Browse Services</Link></li>
                <li><Link href="/talents" className="text-gray-400 hover:text-white transition-colors">AI Talents</Link></li>
                <li><Link href="/equipment" className="text-gray-400 hover:text-white transition-colors">Equipment</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/help" className="text-gray-400 hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Zion. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ${pageName.charAt(0).toUpperCase() + pageName.slice(1)}Page`
  }

  getPagePath(url) {
    const urlObj = new URL(url);
    const pathname = urlObj.pathname;
    const filename = pathname === '/' ? 'index' : pathname.replace(/^\//, '').replace(/\/$/, '');
    // Create pages in the main pages directory instead of automation directory
    return path.join(__dirname, '..', 'pages', `${filename}.tsx`);
  }

  extractTitle(content) {
    const titleMatch = content.match(/<title>(.*?)<\/title>/i);
    return titleMatch ? titleMatch[1] : 'Generated Page';
  }

  extractDescription(content) {
    const descMatch = content.match(/<meta name="description" content="(.*?)"/i);
    return descMatch ? descMatch[1] : 'Generated page content';
  }

  async generateSEOContent() {
    this.log('Generating SEO content...');
    
    const seoContent = {
      metaDescriptions: await this.generateMetaDescriptions(),
      pageTitles: await this.generatePageTitles(),
      structuredData: await this.generateStructuredData(),
      sitemap: await this.generateSitemap(),
      robotsTxt: await this.generateRobotsTxt()
    };
    
    // Save SEO content
    const seoFile = path.join(__dirname, 'seo-content', 'seo-content.json');
    fs.writeFileSync(seoFile, JSON.stringify(seoContent, null, 2));
    
    this.analytics.contentGenerated += Object.keys(seoContent).length;
  }

  async generateMetaDescriptions() {
    const pages = [
      { url: '/', title: 'Home' },
      { url: '/about', title: 'About Us' },
      { url: '/services', title: 'Services' },
      { url: '/products', title: 'Products' },
      { url: '/contact', title: 'Contact' },
      { url: '/blog', title: 'Blog' }
    ];
    
    const descriptions = {};
    
    for (const page of pages) {
      const prompt = `Generate a compelling meta description (150-160 characters) for a ${page.title} page of Zion Tech Group, a technology company offering IT services and solutions.`;
      
      try {
        const result = await this.model.generateContent(prompt);
        const response = await result.response;
        descriptions[page.url] = response.text().trim();
      } catch (error) {
        descriptions[page.url] = `Professional ${page.title.toLowerCase()} services and solutions from Zion Tech Group.`;
      }
    }
    
    return descriptions;
  }

  async generatePageTitles() {
    const pages = [
      { url: '/', title: 'Zion Tech Group - Technology Solutions & IT Services' },
      { url: '/about', title: 'About Us - Zion Tech Group' },
      { url: '/services', title: 'Our Services - Zion Tech Group' },
      { url: '/products', title: 'Our Products - Zion Tech Group' },
      { url: '/contact', title: 'Contact Us - Zion Tech Group' },
      { url: '/blog', title: 'Blog - Zion Tech Group' }
    ];
    
    const titles = {};
    
    for (const page of pages) {
      titles[page.url] = page.title;
    }
    
    return titles;
  }

  async generateStructuredData() {
    const structuredData = {
      organization: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.netlify.app",
        "logo": "https://ziontechgroup.netlify.app/logo.png",
        "description": "Professional technology solutions and IT services",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "US"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service"
        }
      },
      website: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.netlify.app"
      }
    };
    
    return structuredData;
  }

  async generateSitemap() {
    const pages = [
      { url: '/', priority: '1.0', changefreq: 'weekly' },
      { url: '/about', priority: '0.8', changefreq: 'monthly' },
      { url: '/services', priority: '0.9', changefreq: 'weekly' },
      { url: '/products', priority: '0.9', changefreq: 'weekly' },
      { url: '/contact', priority: '0.7', changefreq: 'monthly' },
      { url: '/blog', priority: '0.8', changefreq: 'daily' }
    ];
    
    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    
    for (const page of pages) {
      sitemap += `  <url>\n`;
      sitemap += `    <loc>https://ziontechgroup.netlify.app${page.url}</loc>\n`;
      sitemap += `    <priority>${page.priority}</priority>\n`;
      sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
      sitemap += `  </url>\n`;
    }
    
    sitemap += '</urlset>';
    
    return sitemap;
  }

  async generateRobotsTxt() {
    return `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.netlify.app/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
`;
  }

  async generateBlogContent() {
    this.log('Generating blog content...');
    
    const blogTopics = [
      'The Future of AI in Business: 2024 Trends',
      'Cybersecurity Best Practices for Small Businesses',
      'Cloud Computing: Benefits and Implementation Strategies',
      'Digital Transformation: A Complete Guide',
      'Web Development Trends for 2024',
      'Mobile App Development: Native vs Hybrid',
      'Data Analytics: Driving Business Decisions',
      'DevOps Best Practices for Enterprise Teams'
    ];
    
    const blogPosts = [];
    
    for (const topic of blogTopics) {
      try {
        const post = await this.generateBlogPost(topic);
        blogPosts.push(post);
        
        // Save individual blog post
        const postFile = path.join(__dirname, 'generated-content', 'blog', `${this.sanitizeFilename(topic)}.json`);
        fs.writeFileSync(postFile, JSON.stringify(post, null, 2));
        
      } catch (error) {
        this.log(`Error generating blog post for ${topic}: ${error.message}`, 'ERROR');
      }
    }
    
    // Save blog index
    const blogIndexFile = path.join(__dirname, 'generated-content', 'blog', 'blog-index.json');
    fs.writeFileSync(blogIndexFile, JSON.stringify(blogPosts, null, 2));
    
    this.analytics.contentGenerated += blogPosts.length;
  }

  async generateBlogPost(topic) {
    const prompt = `
Write a comprehensive blog post about "${topic}" for Zion Tech Group's technology blog.

Requirements:
- Professional, informative tone
- 800-1200 words
- Include relevant keywords for SEO
- Add proper headings and structure
- Include a compelling introduction and conclusion
- Make it engaging for business professionals
- Include practical insights and actionable advice

Format the response as JSON with the following structure:
{
  "title": "Post Title",
  "slug": "url-friendly-slug",
  "excerpt": "Brief description",
  "content": "Full HTML content",
  "metaDescription": "SEO meta description",
  "keywords": ["keyword1", "keyword2"],
  "publishDate": "2024-01-01",
  "author": "Zion Tech Group",
  "category": "Technology"
}
    `;
    
    try {
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      return JSON.parse(response.text());
    } catch (error) {
      return this.generateFallbackBlogPost(topic);
    }
  }

  generateFallbackBlogPost(topic) {
    return {
      title: topic,
      slug: this.sanitizeFilename(topic).toLowerCase(),
      excerpt: `Comprehensive guide on ${topic.toLowerCase()} for modern businesses.`,
      content: `<h1>${topic}</h1><p>Content about ${topic} is being generated. Please check back soon for the complete article.</p>`,
      metaDescription: `Learn about ${topic.toLowerCase()} and how it can benefit your business.`,
      keywords: [topic.toLowerCase(), 'technology', 'business'],
      publishDate: new Date().toISOString().split('T')[0],
      author: 'Zion Tech Group',
      category: 'Technology'
    };
  }

  async generateProductContent() {
    this.log('Generating product content...');
    
    const products = [
      {
        name: 'AI Platform',
        category: 'Artificial Intelligence',
        description: 'Advanced AI platform for business automation'
      },
      {
        name: 'Blockchain Network',
        category: 'Blockchain',
        description: 'Secure blockchain infrastructure for enterprises'
      },
      {
        name: 'AI Matching Engine',
        category: 'Machine Learning',
        description: 'Intelligent matching system for optimal solutions'
      }
    ];
    
    for (const product of products) {
      try {
        const content = await this.generateProductDescription(product);
        
        const productFile = path.join(__dirname, 'generated-content', 'products', `${this.sanitizeFilename(product.name)}.json`);
        fs.writeFileSync(productFile, JSON.stringify(content, null, 2));
        
      } catch (error) {
        this.log(`Error generating product content for ${product.name}: ${error.message}`, 'ERROR');
      }
    }
    
    this.analytics.contentGenerated += products.length;
  }

  async generateProductDescription(product) {
    const prompt = `
Create a detailed product description for "${product.name}" - a ${product.category} solution.

Product details:
- Name: ${product.name}
- Category: ${product.category}
- Description: ${product.description}

Requirements:
- Professional, technical tone
- Highlight key features and benefits
- Include use cases and applications
- Add pricing considerations
- Include technical specifications
- Make it compelling for enterprise customers

Format as JSON with: title, description, features, benefits, useCases, pricing, specifications
    `;
    
    try {
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      return JSON.parse(response.text());
    } catch (error) {
      return this.generateFallbackProductDescription(product);
    }
  }

  generateFallbackProductDescription(product) {
    return {
      title: product.name,
      description: product.description,
      features: ['Advanced technology', 'Scalable solution', 'Enterprise-grade security'],
      benefits: ['Improved efficiency', 'Cost reduction', 'Enhanced security'],
      useCases: ['Business automation', 'Data processing', 'System integration'],
      pricing: 'Contact us for pricing',
      specifications: {
        type: product.category,
        deployment: 'Cloud-based',
        support: '24/7 available'
      }
    };
  }

  sanitizeFilename(filename) {
    return filename.replace(/[^a-zA-Z0-9]/g, '_').substring(0, 50);
  }

  async saveGenerationResults() {
    this.log('Saving generation results...');
    
    const results = {
      agentId: this.agentId,
      timestamp: new Date().toISOString(),
      analytics: this.analytics,
      summary: {
        pagesCreated: this.analytics.pagesCreated,
        contentGenerated: this.analytics.contentGenerated,
        errors: this.analytics.errors
      }
    };
    
    const resultsFile = path.join(__dirname, 'generated-content', `generation-results-${this.agentId}.json`);
    fs.writeFileSync(resultsFile, JSON.stringify(results, null, 2));
    
    // Update master analytics
    await this.updateMasterAnalytics();
    
    this.log('Generation results saved');
  }

  async updateMasterAnalytics() {
    try {
      const analyticsFile = path.join(__dirname, 'master-analytics.json');
      let analytics = {};
      
      if (fs.existsSync(analyticsFile)) {
        analytics = JSON.parse(fs.readFileSync(analyticsFile, 'utf8'));
      }
      
      analytics.lastContentGeneration = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        pagesCreated: this.analytics.pagesCreated,
        contentGenerated: this.analytics.contentGenerated,
        errors: this.analytics.errors
      };
      
      fs.writeFileSync(analyticsFile, JSON.stringify(analytics, null, 2));
    } catch (error) {
      this.log(`Error updating master analytics: ${error.message}`, 'ERROR');
    }
  }
}

// Export the agent
module.exports = EnhancedContentGeneratorAgent;

// If run directly, start the agent
if (require.main === module) {
  const agent = new EnhancedContentGeneratorAgent();
  
  agent.initialize().catch(error => {
    console.error('Failed to initialize agent:', error);
    process.exit(1);
  });
} 