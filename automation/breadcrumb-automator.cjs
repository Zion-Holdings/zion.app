#!/usr/bin/env node

/**
 * Breadcrumb Automator
 * Automatically generates breadcrumb navigation for all pages
 */

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const DATA_DIR = path.join(ROOT, 'data', 'navigation');
const COMPONENTS_DIR = path.join(ROOT, 'components');
const PAGES_DIR = path.join(ROOT, 'pages');

class BreadcrumbAutomator {
  constructor() {
    this.breadcrumbData = {};
    this.ensureDirectories();
  }

  ensureDirectories() {
    const dirs = [
      path.join(DATA_DIR, 'breadcrumbs'),
      path.join(COMPONENTS_DIR, 'breadcrumbs')
    ];
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    });
  }

  async run() {
    console.log('🍞 Breadcrumb Automator: Starting generation...');
    
    try {
      await this.scanPages();
      await this.generateBreadcrumbPaths();
      await this.createBreadcrumbComponents();
      await this.generateBreadcrumbData();
      await this.createBreadcrumbHooks();
      await this.updateExistingPages();
      
      console.log('✅ Breadcrumb Automator: Completed successfully');
    } catch (error) {
      console.error('❌ Breadcrumb Automator Error:', error);
    }
  }

  async scanPages() {
    console.log('📁 Scanning pages for breadcrumb generation...');
    
    const pages = this.scanDirectory(PAGES_DIR);
    for (const page of pages) {
      this.breadcrumbData[page.route] = {
        route: page.route,
        path: page.path,
        metadata: this.extractMetadata(page.content),
        breadcrumbs: []
      };
    }
    
    console.log(`📊 Found ${Object.keys(this.breadcrumbData).length} pages for breadcrumbs`);
  }

  scanDirectory(dir) {
    const pages = [];
    
    function walk(currentDir, baseRoute = '') {
      const entries = fs.readdirSync(currentDir, { withFileTypes: true });
      
      for (const entry of entries) {
        if (entry.name.startsWith('_') || entry.name.startsWith('[')) continue;
        
        const fullPath = path.join(currentDir, entry.name);
        if (entry.isDirectory()) {
          const nextRoute = baseRoute ? `${baseRoute}/${entry.name}` : entry.name;
          walk(fullPath, nextRoute);
        } else if (/\.(tsx|jsx|ts|js)$/.test(entry.name)) {
          const route = baseRoute ? `/${baseRoute}` : '/';
          const content = fs.readFileSync(fullPath, 'utf8');
          
          pages.push({
            path: fullPath,
            route,
            content,
            filename: entry.name
          });
        }
      }
    }
    
    walk(dir);
    return pages;
  }

  extractMetadata(content) {
    const metadata = {};
    
    // Extract title
    const titleMatch = content.match(/<title[^>]*>([^<]+)<\/title>/i);
    if (titleMatch) metadata.title = titleMatch[1];
    
    // Extract meta description
    const descMatch = content.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i);
    if (descMatch) metadata.description = descMatch[1];
    
    // Extract headings
    const headings = content.match(/<h[1-6][^>]*>([^<]+)<\/h[1-6]>/gi);
    if (headings) {
      metadata.headings = headings.map(h => h.replace(/<[^>]+>/g, ''));
    }
    
    return metadata;
  }

  async generateBreadcrumbPaths() {
    console.log('🛤️ Generating breadcrumb paths...');
    
    for (const [route, pageData] of Object.entries(this.breadcrumbData)) {
      pageData.breadcrumbs = this.createBreadcrumbPath(route);
    }
    
    console.log('✅ Generated breadcrumb paths for all pages');
  }

  createBreadcrumbPath(route) {
    const breadcrumbs = [];
    
    // Always start with home
    breadcrumbs.push({
      route: '/',
      title: 'Home',
      icon: '🏠',
      active: false
    });
    
    // Split route into segments
    const segments = route.split('/').filter(Boolean);
    
    let currentPath = '';
    for (let i = 0; i < segments.length; i++) {
      const segment = segments[i];
      currentPath += `/${segment}`;
      
      // Get page data for this segment
      const pageData = this.breadcrumbData[currentPath];
      const isLast = i === segments.length - 1;
      
      breadcrumbs.push({
        route: currentPath,
        title: this.generateBreadcrumbTitle(segment, pageData, isLast),
        icon: this.getBreadcrumbIcon(segment),
        active: isLast
      });
    }
    
    return breadcrumbs;
  }

  generateBreadcrumbTitle(segment, pageData, isLast) {
    if (pageData && pageData.metadata.title) {
      return pageData.metadata.title;
    }
    
    // Generate readable title from segment
    const title = segment
      .replace(/[-_]/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase());
    
    return title;
  }

  getBreadcrumbIcon(segment) {
    const iconMap = {
      services: '🔧',
      reports: '📊',
      explore: '🗺️',
      automation: '🤖',
      main: '🏠',
      newsroom: '📰',
      search: '🔍',
      contact: '📞',
      site: '🌐',
      health: '💚'
    };
    
    return iconMap[segment] || '📄';
  }

  async createBreadcrumbComponents() {
    console.log('🔧 Creating breadcrumb components...');
    
    // Create main breadcrumb component
    await this.createMainBreadcrumbComponent();
    
    // Create category-specific breadcrumb components
    await this.createCategoryBreadcrumbs();
    
    // Create breadcrumb wrapper
    await this.createBreadcrumbWrapper();
    
    console.log('✅ Created breadcrumb components');
  }

  async createMainBreadcrumbComponent() {
    const breadcrumbContent = `import React from 'react';
import Link from 'next/link';

export default function DynamicBreadcrumbs({ breadcrumbs = [], className = '' }) {
  if (!breadcrumbs || breadcrumbs.length <= 1) return null;

  return (
    <nav className={\`flex items-center space-x-2 text-sm text-white/70 mb-6 \${className}\`}>
      {breadcrumbs.map((crumb, index) => (
        <React.Fragment key={crumb.route}>
          {index === 0 ? (
            <Link 
              href={crumb.route} 
              className="flex items-center hover:text-white transition-colors"
              aria-label="Go to home page"
            >
              <span className="mr-1">{crumb.icon}</span>
              {crumb.title}
            </Link>
          ) : (
            <>
              <svg 
                className="w-4 h-4 text-white/40" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
              {crumb.active ? (
                <span className="text-white font-medium flex items-center">
                  <span className="mr-1">{crumb.icon}</span>
                  {crumb.title}
                </span>
              ) : (
                <Link 
                  href={crumb.route} 
                  className="hover:text-white transition-colors flex items-center"
                >
                  <span className="mr-1">{crumb.icon}</span>
                  {crumb.title}
                </Link>
              )}
            </>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}`;

    const breadcrumbPath = path.join(COMPONENTS_DIR, 'breadcrumbs', 'DynamicBreadcrumbs.tsx');
    fs.writeFileSync(breadcrumbPath, breadcrumbContent);
    
    console.log('✅ Created main breadcrumb component');
  }

  async createCategoryBreadcrumbs() {
    const categories = ['services', 'reports', 'explore', 'automation', 'main'];
    
    for (const category of categories) {
      const categoryBreadcrumb = `import React from 'react';
import DynamicBreadcrumbs from './DynamicBreadcrumbs';

export default function ${category.charAt(0).toUpperCase() + category.slice(1)}Breadcrumbs({ route }) {
  const breadcrumbs = [
    { route: '/', title: 'Home', icon: '🏠', active: false },
    { route: '/${category}', title: '${category.charAt(0).toUpperCase() + category.slice(1)}', icon: '${this.getBreadcrumbIcon(category)}', active: false }
  ];
  
  // Add dynamic segments based on route
  if (route !== '/${category}') {
    const segments = route.split('/').filter(Boolean);
    let currentPath = '/${category}';
    
    for (let i = 1; i < segments.length; i++) {
      const segment = segments[i];
      currentPath += \`/\${segment}\`;
      
      breadcrumbs.push({
        route: currentPath,
        title: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/[-_]/g, ' '),
        icon: '📄',
        active: i === segments.length - 1
      });
    }
  }
  
  return <DynamicBreadcrumbs breadcrumbs={breadcrumbs} />;
}`;

      const breadcrumbPath = path.join(COMPONENTS_DIR, 'breadcrumbs', `${category.charAt(0).toUpperCase() + category.slice(1)}Breadcrumbs.tsx`);
      fs.writeFileSync(breadcrumbPath, categoryBreadcrumb);
    }
    
    console.log('✅ Created category breadcrumb components');
  }

  async createBreadcrumbWrapper() {
    const wrapperContent = `import React from 'react';
import ServicesBreadcrumbs from './ServicesBreadcrumbs';
import ReportsBreadcrumbs from './ReportsBreadcrumbs';
import ExploreBreadcrumbs from './ExploreBreadcrumbs';
import AutomationBreadcrumbs from './AutomationBreadcrumbs';
import MainBreadcrumbs from './MainBreadcrumbs';
import DynamicBreadcrumbs from './DynamicBreadcrumbs';

export default function BreadcrumbWrapper({ route, breadcrumbs }) {
  const getBreadcrumbs = () => {
    if (breadcrumbs && breadcrumbs.length > 0) {
      return <DynamicBreadcrumbs breadcrumbs={breadcrumbs} />;
    }
    
    if (route.startsWith('/services')) return <ServicesBreadcrumbs route={route} />;
    if (route.startsWith('/reports')) return <ReportsBreadcrumbs route={route} />;
    if (route.startsWith('/explore')) return <ExploreBreadcrumbs route={route} />;
    if (route.startsWith('/automation')) return <AutomationBreadcrumbs route={route} />;
    if (route.startsWith('/main')) return <MainBreadcrumbs route={route} />;
    
    // Default breadcrumbs
    return <DynamicBreadcrumbs breadcrumbs={[
      { route: '/', title: 'Home', icon: '🏠', active: false },
      { route, title: 'Current Page', icon: '📄', active: true }
    ]} />;
  };

  return (
    <div className="breadcrumb-container">
      {getBreadcrumbs()}
    </div>
  );
}`;

    const wrapperPath = path.join(COMPONENTS_DIR, 'breadcrumbs', 'BreadcrumbWrapper.tsx');
    fs.writeFileSync(wrapperPath, wrapperContent);
    
    console.log('✅ Created breadcrumb wrapper component');
  }

  async generateBreadcrumbData() {
    console.log('📊 Generating breadcrumb data...');
    
    // Save breadcrumb data for each page
    for (const [route, pageData] of Object.entries(this.breadcrumbData)) {
      const breadcrumbPath = path.join(DATA_DIR, 'breadcrumbs', `breadcrumb-${route.replace(/\//g, '-')}.json`);
      fs.writeFileSync(breadcrumbPath, JSON.stringify(pageData, null, 2));
    }
    
    // Create breadcrumb index
    const breadcrumbIndex = {
      totalPages: Object.keys(this.breadcrumbData).length,
      pages: Object.keys(this.breadcrumbData),
      generatedAt: new Date().toISOString()
    };
    
    const indexPath = path.join(DATA_DIR, 'breadcrumbs', 'breadcrumb-index.json');
    fs.writeFileSync(indexPath, JSON.stringify(breadcrumbIndex, null, 2));
    
    console.log('✅ Generated breadcrumb data files');
  }

  async createBreadcrumbHooks() {
    console.log('🎣 Creating breadcrumb hooks...');
    
    const hookContent = `import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export function useBreadcrumbs() {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBreadcrumbs = async () => {
      try {
        const response = await fetch(\`/api/breadcrumbs?\${route}=\${router.pathname}\`);
        if (response.ok) {
          const data = await response.json();
          setBreadcrumbs(data.breadcrumbs || []);
        }
      } catch (error) {
        console.error('Failed to load breadcrumbs:', error);
        // Fallback to basic breadcrumbs
        setBreadcrumbs([
          { route: '/', title: 'Home', icon: '🏠', active: false },
          { route: router.pathname, title: 'Current Page', icon: '📄', active: true }
        ]);
      } finally {
        setLoading(false);
      }
    };

    if (router.pathname) {
      loadBreadcrumbs();
    }
  }, [router.pathname]);

  return { breadcrumbs, loading };
}`;

    const hookPath = path.join(COMPONENTS_DIR, 'breadcrumbs', 'useBreadcrumbs.js');
    fs.writeFileSync(hookPath, hookContent);
    
    console.log('✅ Created breadcrumb hooks');
  }

  async updateExistingPages() {
    console.log('🔄 Creating breadcrumb integration guide...');
    
    const integrationGuide = `# Breadcrumb Integration Guide

## How to Add Breadcrumbs to Your Pages

### 1. Import Breadcrumb Components
\`\`\`tsx
import BreadcrumbWrapper from '../components/breadcrumbs/BreadcrumbWrapper';
import { useBreadcrumbs } from '../components/breadcrumbs/useBreadcrumbs';
\`\`\`

### 2. Add Breadcrumbs to Your Page
\`\`\`tsx
export default function YourPage() {
  const { breadcrumbs, loading } = useBreadcrumbs();
  
  return (
    <div>
      <BreadcrumbWrapper route="/your-route" breadcrumbs={breadcrumbs} />
      
      <div className="p-6">
        {/* Your page content */}
        <h1>Your Page Title</h1>
        <p>Your page content goes here...</p>
      </div>
    </div>
  );
}
\`\`\`

### 3. Automatic Breadcrumb Generation
Breadcrumbs are automatically generated based on:
- Page route structure
- Page metadata (titles, descriptions)
- Category hierarchy

### 4. Customization
You can customize breadcrumbs by editing the JSON files in \`data/navigation/breadcrumbs/\`

### 5. Breadcrumb Structure
Each breadcrumb item contains:
- route: The page route
- title: Display title
- icon: Emoji icon
- active: Whether this is the current page
`;

    const guidePath = path.join(COMPONENTS_DIR, 'breadcrumbs', 'INTEGRATION_GUIDE.md');
    fs.writeFileSync(guidePath, integrationGuide);
    
    console.log('✅ Created breadcrumb integration guide');
  }
}

// Run the automator
if (require.main === module) {
  const automator = new BreadcrumbAutomator();
  automator.run();
}

module.exports = BreadcrumbAutomator;