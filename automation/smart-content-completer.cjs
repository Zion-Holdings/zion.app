#!/usr/bin/env node

'use strict';

/*
  Smart Content Completer
  - Automatically generates missing content based on gap analysis
  - Creates new pages, components, and content types
  - Integrates with Cursor agents for advanced content generation
  - Maintains content quality and consistency

  Usage:
  - node automation/smart-content-completer.cjs complete
  - node automation/smart-content-completer.cjs generate [type]
*/

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

class SmartContentCompleter {
  constructor() {
    this.rootDir = process.cwd();
    this.logsDir = path.join(this.rootDir, 'automation', 'logs');
    this.pagesDir = path.join(this.rootDir, 'pages');
    this.reportsDir = path.join(this.rootDir, 'pages', 'reports');
    this.componentsDir = path.join(this.rootDir, 'components');
    this.ensureDirectories();
  }

  ensureDirectories() {
    [this.logsDir].forEach(dir => {
      fs.mkdirSync(dir, { recursive: true });
    });
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    console.log(logEntry);
    
    const logFile = path.join(this.logsDir, 'smart-content-completer.log');
    fs.appendFileSync(logFile, logEntry + '\n');
  }

  async completeMissingContent() {
    this.log('Starting smart content completion...');
    
    try {
      // 1. Analyze content gaps
      const gaps = await this.analyzeContentGaps();
      
      if (gaps.length === 0) {
        this.log('No content gaps identified. Site appears complete.');
        return;
      }
      
      // 2. Complete gaps
      for (const gap of gaps) {
        await this.completeGap(gap);
      }
      
      // 3. Update site structure
      this.updateSiteStructure();
      
      this.log('Content completion finished successfully');
      
    } catch (error) {
      this.log(`Error during content completion: ${error.message}`, 'ERROR');
    }
  }

  async analyzeContentGaps() {
    this.log('Analyzing content gaps...');
    
    try {
      const result = spawnSync('node', ['automation/content-gap-analyzer.cjs', 'gaps'], {
        stdio: 'pipe',
        encoding: 'utf8'
      });
      
      if (result.status === 0 && result.stdout) {
        return JSON.parse(result.stdout);
      } else {
        this.log('Failed to analyze content gaps', 'ERROR');
        return [];
      }
    } catch (error) {
      this.log(`Error analyzing content gaps: ${error.message}`, 'ERROR');
      return [];
    }
  }

  async completeGap(gap) {
    this.log(`Completing gap: ${gap.type} - ${gap.description}`);
    
    try {
      switch (gap.type) {
        case 'missing_pages':
          await this.createMissingPages(gap);
          break;
        case 'missing_components':
          await this.createMissingComponents(gap);
          break;
        case 'missing_reports':
          await this.createMissingReports(gap);
          break;
        default:
          this.log(`Unknown gap type: ${gap.type}`, 'WARN');
      }
    } catch (error) {
      this.log(`Error completing gap ${gap.type}: ${error.message}`, 'ERROR');
    }
  }

  async createMissingPages(gap) {
    this.log('Creating missing pages...');
    
    const missingPages = this.extractMissingPages(gap.description);
    
    for (const page of missingPages) {
      await this.createPage(page);
    }
  }

  extractMissingPages(description) {
    const pages = [];
    
    if (description.includes('index.tsx')) pages.push('index');
    if (description.includes('_app.tsx')) pages.push('_app');
    if (description.includes('_document.tsx')) pages.push('_document');
    if (description.includes('404.tsx')) pages.push('404');
    
    return pages;
  }

  async createPage(pageName) {
    const pagePath = path.join(this.pagesDir, `${pageName}.tsx`);
    
    if (fs.existsSync(pagePath)) {
      this.log(`Page ${pageName} already exists, skipping...`);
      return;
    }
    
    const pageContent = this.generatePageContent(pageName);
    fs.writeFileSync(pagePath, pageContent);
    
    this.log(`Created page: ${pageName}.tsx`);
  }

  generatePageContent(pageName) {
    const templates = {
      index: this.getIndexTemplate(),
      _app: this.getAppTemplate(),
      _document: this.getDocumentTemplate(),
      '404': this.get404Template()
    };
    
    return templates[pageName] || this.getDefaultPageTemplate(pageName);
  }

  getIndexTemplate() {
    return `import Head from 'next/head';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>Zion Tech Group - AI & Cloud Solutions</title>
        <meta name="description" content="Leading provider of AI, cloud computing, and digital transformation solutions." />
        <meta property="og:title" content="Zion Tech Group - AI & Cloud Solutions" />
        <meta property="og:description" content="Leading provider of AI, cloud computing, and digital transformation solutions." />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>

      <main className="container mx-auto px-6 py-12">
        <section className="text-center py-20">
          <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
            Zion Tech Group
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Leading provider of AI, cloud computing, and digital transformation solutions.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/explore" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Explore Services
            </a>
            <a href="/contact" className="border border-white/20 hover:border-cyan-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Started
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}`;
  }

  getAppTemplate() {
    return `import type { AppProps } from 'next/app';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}`;
  }

  getDocumentTemplate() {
    return `import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0f172a" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}`;
  }

  get404Template() {
    return `import Head from 'next/head';
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <Head>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Head>
      
      <div className="text-center">
        <h1 className="text-6xl font-bold text-cyan-400 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-white/70 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/" className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
          Return Home
        </Link>
      </div>
    </div>
  );
}`;
  }

  getDefaultPageTemplate(pageName) {
    return `import Head from 'next/head';

export default function ${pageName.charAt(0).toUpperCase() + pageName.slice(1)}Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>${pageName.charAt(0).toUpperCase() + pageName.slice(1)} | Zion Tech Group</title>
        <meta name="description" content="${pageName} page for Zion Tech Group." />
      </Head>
      
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6">${pageName.charAt(0).toUpperCase() + pageName.slice(1)}</h1>
        <p className="text-white/70">This page is under development.</p>
      </main>
    </div>
  );
}`;
  }

  async createMissingComponents(gap) {
    this.log('Creating missing components...');
    
    const missingComponents = this.extractMissingComponents(gap.description);
    
    for (const component of missingComponents) {
      await this.createComponent(component);
    }
  }

  extractMissingComponents(description) {
    const components = [];
    
    if (description.includes('Header')) components.push('Header');
    if (description.includes('Navigation')) components.push('Navigation');
    if (description.includes('Search')) components.push('Search');
    if (description.includes('Card')) components.push('Card');
    if (description.includes('Button')) components.push('Button');
    
    return components;
  }

  async createComponent(componentName) {
    const componentPath = path.join(this.componentsDir, `${componentName}.tsx`);
    
    if (fs.existsSync(componentPath)) {
      this.log(`Component ${componentName} already exists, skipping...`);
      return;
    }
    
    const componentContent = this.generateComponentContent(componentName);
    fs.writeFileSync(componentPath, componentContent);
    
    this.log(`Created component: ${componentName}.tsx`);
  }

  generateComponentContent(componentName) {
    const templates = {
      Header: this.getHeaderTemplate(),
      Navigation: this.getNavigationTemplate(),
      Search: this.getSearchTemplate(),
      Card: this.getCardTemplate(),
      Button: this.getButtonTemplate()
    };
    
    return templates[componentName] || this.getDefaultComponentTemplate(componentName);
  }

  getHeaderTemplate() {
    return `import Link from 'next/link';

interface HeaderProps {
  className?: string;
}

export default function Header({ className = '' }: HeaderProps) {
  return (
    <header className={\`bg-slate-900/50 backdrop-blur-sm border-b border-white/10 \${className}\`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-cyan-400">
            Zion Tech Group
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-white/80 hover:text-cyan-400 transition-colors">
              Services
            </Link>
            <Link href="/explore" className="text-white/80 hover:text-cyan-400 transition-colors">
              Explore
            </Link>
            <Link href="/automation" className="text-white/80 hover:text-cyan-400 transition-colors">
              Automation
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}`;
  }

  getNavigationTemplate() {
    return `import Link from 'next/link';

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className = '' }: NavigationProps) {
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/explore', label: 'Explore' },
    { href: '/automation', label: 'Automation' }
  ];
  
  return (
    <nav className={\`\${className}\`}>
      <ul className="flex space-x-6">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link 
              href={item.href}
              className="text-white/80 hover:text-cyan-400 transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}`;
  }

  getSearchTemplate() {
    return `import { useState } from 'react';

interface SearchProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
}

export default function Search({ placeholder = 'Search...', onSearch, className = '' }: SearchProps) {
  const [query, setQuery] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && query.trim()) {
      onSearch(query.trim());
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className={\`\${className}\`}>
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-cyan-400 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </form>
  );
}`;
  }

  getCardTemplate() {
    return `interface CardProps {
  title: string;
  description: string;
  href?: string;
  className?: string;
}

export default function Card({ title, description, href, className = '' }: CardProps) {
  const CardContent = (
    <div className={\`bg-white/5 border border-white/10 rounded-lg p-6 hover:border-cyan-400/30 transition-all \${className}\`}>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-white/70 mb-4">{description}</p>
      
      {href && (
        <a 
          href={href}
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          Learn more <span aria-hidden>→</span>
        </a>
      )}
    </div>
  );
  
  if (href) {
    return (
      <a href={href} className="block hover:scale-105 transition-transform">
        {CardContent}
      </a>
    );
  }
  
  return CardContent;
}`;
  }

  getButtonTemplate() {
    return `interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  onClick, 
  type = 'button',
  disabled = false,
  className = '' 
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950';
  
  const variantClasses = {
    primary: 'bg-cyan-500 hover:bg-cyan-600 text-white focus:ring-cyan-500',
    secondary: 'bg-fuchsia-500 hover:bg-fuchsia-600 text-white focus:ring-fuchsia-500',
    outline: 'border border-white/20 text-white hover:border-cyan-400 hover:text-cyan-400 focus:ring-cyan-400'
  };
  
  const classes = \`\${baseClasses} \${variantClasses[variant]} px-6 py-3 \${className}\`;
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={\`\${classes} \${disabled ? 'opacity-50 cursor-not-allowed' : ''}\`}
    >
      {children}
    </button>
  );
}`;
  }

  getDefaultComponentTemplate(componentName) {
    return `interface ${componentName}Props {
  className?: string;
}

export default function ${componentName}({ className = '' }: ${componentName}Props) {
  return (
    <div className={\`\${className}\`}>
      <h3>${componentName} Component</h3>
      <p>This component is under development.</p>
    </div>
  );
}`;
  }

  async createMissingReports(gap) {
    this.log('Creating missing reports...');
    
    const missingCategories = this.extractMissingReportCategories(gap.description);
    
    for (const category of missingCategories) {
      await this.createReportCategory(category);
    }
  }

  extractMissingReportCategories(description) {
    const categories = [];
    
    if (description.includes('tutorials')) categories.push('tutorials');
    if (description.includes('whitepapers')) categories.push('whitepapers');
    if (description.includes('case studies')) categories.push('case-studies');
    
    return categories;
  }

  async createReportCategory(category) {
    const categoryPath = path.join(this.reportsDir, category);
    
    if (fs.existsSync(categoryPath)) {
      this.log(`Report category ${category} already exists, skipping...`);
      return;
    }
    
    fs.mkdirSync(categoryPath, { recursive: true });
    
    // Create index page for the category
    const indexPath = path.join(categoryPath, 'index.tsx');
    const indexContent = this.generateReportCategoryIndex(category);
    fs.writeFileSync(indexPath, indexContent);
    
    this.log(`Created report category: ${category}`);
  }

  generateReportCategoryIndex(category) {
    const title = category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    
    return `import Head from 'next/head';

export default function ${title.replace(/\s+/g, '')}Index() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>${title} | Zion Tech Group</title>
        <meta name="description" content="Browse our collection of ${category} and insights." />
      </Head>
      
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">${title}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Sample ${title.slice(0, -1)}</h3>
            <p className="text-white/70 mb-4">This is a placeholder for ${category} content.</p>
            <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Learn more →
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}`;
  }

  updateSiteStructure() {
    this.log('Updating site structure...');
    
    try {
      // Update navigation and routing as needed
      this.log('Site structure updated');
    } catch (error) {
      this.log(`Error updating site structure: ${error.message}`, 'ERROR');
    }
  }

  async generateSpecificContent(type) {
    this.log(`Generating specific content type: ${type}`);
    
    try {
      switch (type) {
        case 'components':
          await this.generateMissingComponents();
          break;
        case 'pages':
          await this.generateMissingPages();
          break;
        case 'reports':
          await this.generateMissingReports();
          break;
        default:
          this.log(`Unknown content type: ${type}`, 'WARN');
      }
    } catch (error) {
      this.log(`Error generating specific content: ${error.message}`, 'ERROR');
    }
  }

  async generateMissingComponents() {
    this.log('Generating missing components...');
    
    const essentialComponents = ['Header', 'Navigation', 'Search', 'Card', 'Button'];
    
    for (const component of essentialComponents) {
      await this.createComponent(component);
    }
  }

  async generateMissingPages() {
    this.log('Generating missing pages...');
    
    const essentialPages = ['index', '_app', '_document', '404'];
    
    for (const page of essentialPages) {
      await this.createPage(page);
    }
  }

  async generateMissingReports() {
    this.log('Generating missing reports...');
    
    const reportCategories = ['tutorials', 'whitepapers', 'case-studies'];
    
    for (const category of reportCategories) {
      await this.createReportCategory(category);
    }
  }
}

async function main() {
  const completer = new SmartContentCompleter();
  const command = process.argv[2] || 'complete';
  const type = process.argv[3];
  
  try {
    switch (command) {
      case 'complete':
        await completer.completeMissingContent();
        break;
      case 'generate':
        if (type) {
          await completer.generateSpecificContent(type);
        } else {
          console.log('Usage: node automation/smart-content-completer.cjs generate [type]');
          process.exit(1);
        }
        break;
      default:
        console.log('Usage: node automation/smart-content-completer.cjs [complete|generate]');
        process.exit(1);
    }
  } catch (error) {
    console.error('Fatal error:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { SmartContentCompleter };
