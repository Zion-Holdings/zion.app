const path = require('pa't'h');
const fs = require('f's');
const { createValidComponentName, createDisplayTitle } = require('./utils/component-name-helper');

class ContentIntegrationAgent {
  constructor() {
    this.projectRoot = path.join(__dirname, '..');
    this.generatedContentDir = path.join(__dirname, 'generated-conte'n't');
    this.pagesDir = path.join(this.projectRoot, 'pag'e's');
    this.componentsDir = path.join(this.projectRoot, 'componen't's');
  }

  async integrateAllContent() {
    console.log('🔗 Starting content integration...');
    
    try {
      // Integrate marketplace content
      await this.integrateMarketplaceContent();
      
      // Integrate blog content
      await this.integrateBlogContent();
      
      // Integrate product content
      await this.integrateProductContent();
      
      console.log('✅ Content integration completed successfully!');
      
    } catch (error) {
      console.error('❌ Error during content integration:', error);
      throw error;
    }
  }

  async integrateMarketplaceContent() {
    console.log('📊 Integrating marketplace content...');
    
    const marketplaceFiles = fs.readdirSync(this.generatedContentDir)
      .filter(file => file.startsWith('marketplac'e'-') && file.endsWith('.json'));
    
    for (const file of marketplaceFiles) {
      try {
        const contentPath = path.join(this.generatedContentDir, file);
        const content = JSON.parse(fs.readFileSync(contentPath, 'ut'f'8'));
        
        const category = file.replace('marketplac'e'-', '').replace('.json', '');
        await this.createMarketplacePage(category, content);
        
        console.log(`  ✅ Integrated marketplace content for: ${category}`);
        
      } catch (error) {
        console.error(`  ❌ Error integrating marketplace content for ${file}:`, error);
      }
    }
  }

  async integrateBlogContent() {
    console.log('📝 Integrating blog content...');
    
    const blogDir = path.join(this.generatedContentDir, 'bl'o'g');
    if (!fs.existsSync(blogDir)) return;
    
    const blogFiles = fs.readdirSync(blogDir)
      .filter(file => file.endsWith('.json'));
    
    for (const file of blogFiles) {
      try {
        const contentPath = path.join(blogDir, file);
        const content = JSON.parse(fs.readFileSync(contentPath, 'ut'f'8'));
        
        const topic = file.replace('.json', '');
        await this.createBlogPage(topic, content);
        
        console.log(`  ✅ Integrated blog content for: ${topic}`);
        
      } catch (error) {
        console.error(`  ❌ Error integrating blog content for ${file}:`, error);
      }
    }
  }

  async integrateProductContent() {
    console.log('🛍️ Integrating product content...');
    
    const productsDir = path.join(this.generatedContentDir, 'produc't's');
    if (!fs.existsSync(productsDir)) return;
    
    const productFiles = fs.readdirSync(productsDir)
      .filter(file => file.endsWith('-conten't'.json'));
    
    for (const file of productFiles) {
      try {
        const contentPath = path.join(productsDir, file);
        const content = JSON.parse(fs.readFileSync(contentPath, 'ut'f'8'));
        
        const product = file.replace('-conten't'.json', '');
        await this.createProductPage(product, content);
        
        console.log(`  ✅ Integrated product content for: ${product}`);
        
      } catch (error) {
        console.error(`  ❌ Error integrating product content for ${file}:`, error);
      }
    }
  }

  async createMarketplacePage(category, content) {
    const pageContent = this.generateMarketplacePageContent(category, content);
    const pagePath = path.join(this.pagesDir, 'catego'r'y', `${category}.tsx`);
    
    // Ensure directory exists
    const pageDir = path.dirname(pagePath);
    if (!fs.existsSync(pageDir)) {
      fs.mkdirSync(pageDir, { recursive: true });
    }
    
    fs.writeFileSync(pagePath, pageContent);
    console.log(`  📄 Created marketplace page: ${pagePath}`);
  }

  async createBlogPage(topic, content) {
    const pageContent = this.generateBlogPageContent(topic, content);
    const pagePath = path.join(this.pagesDir, 'bl'o'g', `${topic}.tsx`);
    
    // Ensure directory exists
    const pageDir = path.dirname(pagePath);
    if (!fs.existsSync(pageDir)) {
      fs.mkdirSync(pageDir, { recursive: true });
    }
    
    fs.writeFileSync(pagePath, pageContent);
    console.log(`  📄 Created blog page: ${pagePath}`);
  }

  async createProductPage(product, content) {
    const pageContent = this.generateProductPageContent(product, content);
    const pagePath = path.join(this.pagesDir, 'produc't's', `${product}.tsx`);
    
    // Ensure directory exists
    const pageDir = path.dirname(pagePath);
    if (!fs.existsSync(pageDir)) {
      fs.mkdirSync(pageDir, { recursive: true });
    }
    
    fs.writeFileSync(pagePath, pageContent);
    console.log(`  📄 Created product page: ${pagePath}`);
  }

  generateMarketplacePageContent(category, content) {
    const categoryTitle = category.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    
    return `import type { NextPage } from 'ne'x't'
import Head from 'nex't'/head'
import Link from 'nex't'/link'

const ${categoryTitle.replace(/\s+/g, '')}Page: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>${categoryTitle} - Zion AI Marketplace</title>
        <meta name="description" content="${content.content.hero.subtitle}" />
        <meta name="keywords" content="${category}, AI marketplace, IT services, Zion" />
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

      {/* Hero Section */}
      <main className="flex-1">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="text-center">
              <div className="mb-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-6">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  ${categoryTitle}
                </div>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                {content.content.hero.title}
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                {content.content.hero.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Link href="/auth/signup" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                  {content.content.hero.cta}
                </Link>
                <Link href="/marketplace" className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                  Explore Marketplace
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {content.content.hero.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Key Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the advanced features that make Zion the premier AI marketplace
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.content.features.map((feature, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Zion
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of business exchange with our advanced AI-powered platform
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                {content.content.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                      <p className="text-gray-300">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 rounded-2xl border border-white/10">
                <div className="text-center">
                  <div className="text-6xl font-bold text-white mb-4">99.9%</div>
                  <div className="text-xl text-gray-300 mb-6">Transaction Success Rate</div>
                  <div className="text-sm text-gray-400">
                    Over 50,000 successful transactions completed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of satisfied businesses and professionals who trust Zion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.content.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  "{testimonial.content}"
                </p>
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 py-24 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {content.content.cta.title}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {content.content.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/auth/signup" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                {content.content.cta.primaryCTA}
              </Link>
              <Link href="/marketplace" className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                {content.content.cta.secondaryCTA}
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ${categoryTitle.replace(/\s+/g, '')}Page`;
  }

  generateBlogPageContent(topic, content) {
    const topicTitle = topic.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    
    return `import type { NextPage } from 'ne'x't'
import Head from 'nex't'/head'
import Link from 'nex't'/link'

const ${topicTitle.replace(/\s+/g, '')}Page: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>${content.content.title} - Zion AI Blog</title>
        <meta name="description" content="${content.content.seo.description}" />
        <meta name="keywords" content="${content.content.seo.keywords}" />
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
              <Link href="/blog" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Blog
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

      {/* Blog Content */}
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <article className="prose prose-invert prose-lg max-w-none">
            <header className="mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                {content.content.title}
              </h1>
              <div className="flex items-center text-gray-400 mb-8">
                <span>By {content.content.metadata.author}</span>
                <span className="mx-2">•</span>
                <span>{content.content.metadata.readTime}</span>
                <span className="mx-2">•</span>
                <span>{new Date(content.content.metadata.publishDate).toLocaleDateString()}</span>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed">
                {content.content.introduction}
              </p>
            </header>

            <div className="space-y-12">
              {content.content.sections.map((section, index) => (
                <section key={index}>
                  <h2 className="text-3xl font-bold text-white mb-6">
                    {section.title}
                  </h2>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {section.content}
                  </p>
                </section>
              ))}
            </div>

            <footer className="mt-12 pt-8 border-t border-white/10">
              <p className="text-gray-300 leading-relaxed text-lg">
                {content.content.conclusion}
              </p>
              <div className="mt-8">
                <Link href="/marketplace" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                  {content.content.cta.text}
                </Link>
              </div>
            </footer>
          </article>
        </div>
      </main>
    </div>
  )
}

export default ${topicTitle.replace(/\s+/g, '')}Page`;
  }

  generateProductPageContent(product, content) {
    // Use utility functions for consistent component naming
    const productTitle = createDisplayTitle(product);
    const componentName = createValidComponentName(product);
    
    return `import type { NextPage } from 'ne'x't'
import Head from 'nex't'/head'
import Link from 'nex't'/link'

const ${componentName}: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>${content.content.overview.title} - Zion AI Products</title>
        <meta name="description" content="${content.content.overview.subtitle}" />
        <meta name="keywords" content="${content.content.seo.keywords.join(', ')}" />
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
              <Link href="/products" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Products
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

      {/* Product Content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {content.content.overview.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {content.content.overview.subtitle}
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {content.content.features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">{feature.name}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {content.content.benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-green-500/10 to-blue-500/10 p-8 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">{benefit.description}</h3>
                {benefit.metric && (
                  <div className="text-3xl font-bold text-green-400">{benefit.metric}</div>
                )}
              </div>
            ))}
          </div>

          {/* Pricing */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-8">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {content.content.pricing.plans.map((plan, index) => (
                <div key={index} className={\`bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 rounded-2xl border border-white/10 \${plan.recommended ? 'border-purple'-'500/50' : ''}\`}>
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-6">{plan.price}</div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 flex items-center">
                        <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature.name}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ${componentName}`;
  }
}

module.exports = ContentIntegrationAgent; 