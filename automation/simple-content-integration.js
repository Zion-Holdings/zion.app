const path = require('path');
const fs = require('fs');
const { createValidComponentName, createDisplayTitle } = require('./utils/component-name-helper');

class SimpleContentIntegration {
  constructor() {
    this.projectRoot = path.join(__dirname, '..');
    this.generatedContentDir = path.join(__dirname, 'generated-content');
    this.pagesDir = path.join(this.projectRoot, 'pages');
  }

  async integrateAllContent() {
    console.log('🔗 Starting simple content integration...');
    
    try {
      await this.integrateMarketplaceContent();
      await this.integrateBlogContent();
      await this.integrateProductContent();
      
      console.log('✅ Simple content integration completed successfully!');
      
    } catch (error) {
      console.error('❌ Error during content integration:', error);
      throw error;
    }
  }

  async integrateMarketplaceContent() {
    console.log('📊 Integrating marketplace content...');
    
    const marketplaceFiles = fs.readdirSync(this.generatedContentDir)
      .filter(file => file.startsWith('marketplace-') && file.endsWith('.json'));
    
    for (const file of marketplaceFiles) {
      try {
        const contentPath = path.join(this.generatedContentDir, file);
        const content = JSON.parse(fs.readFileSync(contentPath, 'utf8'));
        
        const category = file.replace('marketplace-', '').replace('.json', '');
        await this.createMarketplacePage(category, content);
        
        console.log(`  ✅ Integrated marketplace content for: ${category}`);
        
      } catch (error) {
        console.error(`  ❌ Error integrating marketplace content for ${file}:`, error);
      }
    }
  }

  async integrateBlogContent() {
    console.log('📝 Integrating blog content...');
    
    const blogDir = path.join(this.generatedContentDir, 'blog');
    if (!fs.existsSync(blogDir)) return;
    
    const blogFiles = fs.readdirSync(blogDir)
      .filter(file => file.endsWith('.json'));
    
    for (const file of blogFiles) {
      try {
        const contentPath = path.join(blogDir, file);
        const content = JSON.parse(fs.readFileSync(contentPath, 'utf8'));
        
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
    
    const productsDir = path.join(this.generatedContentDir, 'products');
    if (!fs.existsSync(productsDir)) return;
    
    const productFiles = fs.readdirSync(productsDir)
      .filter(file => file.endsWith('-content.json'));
    
    for (const file of productFiles) {
      try {
        const contentPath = path.join(productsDir, file);
        const content = JSON.parse(fs.readFileSync(contentPath, 'utf8'));
        
        const product = file.replace('-content.json', '');
        await this.createProductPage(product, content);
        
        console.log(`  ✅ Integrated product content for: ${product}`);
        
      } catch (error) {
        console.error(`  ❌ Error integrating product content for ${file}:`, error);
      }
    }
  }

  async createMarketplacePage(category, content) {
    const categoryTitle = category.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    
    const pageContent = `import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

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
                ${content.content.hero.title}
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                ${content.content.hero.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Link href="/auth/signup" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                  ${content.content.hero.cta}
                </Link>
                <Link href="/marketplace" className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                  Explore Marketplace
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                ${content.content.hero.stats.map(stat => `
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">${stat.value}</div>
                    <div className="text-gray-400 text-sm">${stat.label}</div>
                  </div>
                `).join('')}
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
            ${content.content.features.map(feature => `
              <div className="group relative bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">${feature.title}</h3>
                  <p className="text-gray-300 mb-6">
                    ${feature.description}
                  </p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 py-24 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ${content.content.cta.title}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              ${content.content.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/auth/signup" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                ${content.content.cta.primaryCTA}
              </Link>
              <Link href="/marketplace" className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                ${content.content.cta.secondaryCTA}
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ${categoryTitle.replace(/\s+/g, '')}Page`;
    
    const pagePath = path.join(this.pagesDir, 'category', `${category}.tsx`);
    const pageDir = path.dirname(pagePath);
    
    if (!fs.existsSync(pageDir)) {
      fs.mkdirSync(pageDir, { recursive: true });
    }
    
    fs.writeFileSync(pagePath, pageContent);
    console.log(`  📄 Created marketplace page: ${pagePath}`);
  }

  async createBlogPage(topic, content) {
    const topicTitle = topic.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    
    const pageContent = `import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const ${topicTitle.replace(/\s+/g, '')}Page: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>${content.content.title} - Zion AI Blog</title>
        <meta name="description" content="${content.content.introduction}" />
        <meta name="keywords" content="${content.content.metadata.tags.join(', ')}" />
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
                ${content.content.title}
              </h1>
              <div className="flex items-center text-gray-400 mb-8">
                <span>By ${content.content.metadata.author}</span>
                <span className="mx-2">•</span>
                <span>${content.content.metadata.readTime}</span>
                <span className="mx-2">•</span>
                <span>${new Date(content.content.metadata.publishDate).toLocaleDateString()}</span>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed">
                ${content.content.introduction}
              </p>
            </header>

            <div className="space-y-12">
              ${content.content.sections.map(section => `
                <section>
                  <h2 className="text-3xl font-bold text-white mb-6">
                    ${section.title}
                  </h2>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    ${section.content}
                  </p>
                </section>
              `).join('')}
            </div>

            <footer className="mt-12 pt-8 border-t border-white/10">
              <p className="text-gray-300 leading-relaxed text-lg">
                ${content.content.conclusion}
              </p>
              <div className="mt-8">
                <Link href="/marketplace" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                  Explore AI Marketplace
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
    
    const pagePath = path.join(this.pagesDir, 'blog', `${topic}.tsx`);
    const pageDir = path.dirname(pagePath);
    
    if (!fs.existsSync(pageDir)) {
      fs.mkdirSync(pageDir, { recursive: true });
    }
    
    fs.writeFileSync(pagePath, pageContent);
    console.log(`  📄 Created blog page: ${pagePath}`);
  }

  async createProductPage(product, content) {
    // Use utility functions for consistent component naming
    const productTitle = createDisplayTitle(product);
    const componentName = createValidComponentName(product);
    
    const pageContent = `import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

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
              ${content.content.overview.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              ${content.content.overview.subtitle}
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            ${content.content.features.map(feature => `
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">${feature.name}</h3>
                <p className="text-gray-300">${feature.description}</p>
              </div>
            `).join('')}
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            ${content.content.benefits.map(benefit => `
              <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 p-8 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">${benefit.description}</h3>
                ${benefit.metric ? `<div className="text-3xl font-bold text-green-400">${benefit.metric}</div>` : ''}
              </div>
            `).join('')}
          </div>

          {/* Pricing */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-8">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              ${content.content.pricing.plans.map(plan => `
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 rounded-2xl border border-white/10 ${plan.recommended ? 'border-purple-500/50' : ''}">
                  <h3 className="text-2xl font-bold text-white mb-4">${plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-6">${plan.price}</div>
                  <ul className="space-y-3 mb-8">
                    ${plan.features.map(feature => `
                      <li className="text-gray-300 flex items-center">
                        <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        ${feature.name}
                      </li>
                    `).join('')}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                    Get Started
                  </button>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ${componentName}`;
    
    const pagePath = path.join(this.pagesDir, 'products', `${product}.tsx`);
    const pageDir = path.dirname(pagePath);
    
    if (!fs.existsSync(pageDir)) {
      fs.mkdirSync(pageDir, { recursive: true });
    }
    
    fs.writeFileSync(pagePath, pageContent);
    console.log(`  📄 Created product page: ${pagePath}`);
  }
}

module.exports = SimpleContentIntegration; 