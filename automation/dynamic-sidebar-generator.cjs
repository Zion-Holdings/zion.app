#!/usr/bin/env node

/**
 * Dynamic Sidebar Generator
 * Automatically creates contextual sidebars for each page
 */

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const DATA_DIR = path.join(ROOT, 'data', 'navigation');
const COMPONENTS_DIR = path.join(ROOT, 'components');
const PAGES_DIR = path.join(ROOT, 'pages');

class DynamicSidebarGenerator {
  constructor() {
    this.sidebarData = {};
    this.ensureDirectories();
  }

  ensureDirectories() {
    const dirs = [
      path.join(DATA_DIR, 'sidebars'),
      path.join(COMPONENTS_DIR, 'sidebars')
    ];
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    });
  }

  async run() {
    console.log('📚 Dynamic Sidebar Generator: Starting generation...');
    
    try {
      await this.analyzePageContent();
      await this.generateSidebarData();
      await this.createSidebarComponents();
      await this.generateSidebarHooks();
      await this.updateExistingPages();
      
      console.log('✅ Dynamic Sidebar Generator: Completed successfully');
    } catch (error) {
      console.error('❌ Dynamic Sidebar Generator Error:', error);
    }
  }

  async analyzePageContent() {
    console.log('🔍 Analyzing page content for sidebar generation...');
    
    const pages = this.scanPages();
    
    for (const page of pages) {
      const sidebarConfig = this.analyzePageForSidebar(page);
      this.sidebarData[page.route] = sidebarConfig;
    }
    
    console.log(`📊 Analyzed ${Object.keys(this.sidebarData).length} pages for sidebars`);
  }

  scanPages() {
    const pages = [];
    
    function walk(dir, baseRoute = '') {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      
      for (const entry of entries) {
        if (entry.name.startsWith('_') || entry.name.startsWith('[')) continue;
        
        const fullPath = path.join(dir, entry.name);
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
    
    walk(PAGES_DIR);
    return pages;
  }

  analyzePageForSidebar(page) {
    const config = {
      route: page.route,
      category: this.determineCategory(page.route),
      hasSidebar: false,
      sidebarType: 'none',
      sections: []
    };
    
    // Determine if page should have a sidebar
    if (this.shouldHaveSidebar(page.route, page.content)) {
      config.hasSidebar = true;
      config.sidebarType = this.determineSidebarType(page.route, page.content);
      config.sections = this.extractSidebarSections(page.content);
    }
    
    return config;
  }

  shouldHaveSidebar(route, content) {
    // Pages that should have sidebars
    const sidebarRoutes = [
      '/services',
      '/reports',
      '/explore',
      '/automation',
      '/main'
    ];
    
    // Check if route matches sidebar patterns
    for (const pattern of sidebarRoutes) {
      if (route.startsWith(pattern)) return true;
    }
    
    // Check content complexity
    const headings = content.match(/<h[1-6][^>]*>([^<]+)<\/h[1-6]>/gi);
    if (headings && headings.length > 3) return true;
    
    return false;
  }

  determineSidebarType(route, content) {
    if (route.startsWith('/services')) return 'services';
    if (route.startsWith('/reports')) return 'reports';
    if (route.startsWith('/explore')) return 'explore';
    if (route.startsWith('/automation')) return 'automation';
    if (route.startsWith('/main')) return 'main';
    
    // Default to content-based sidebar
    return 'content';
  }

  determineCategory(route) {
    if (route.startsWith('/services')) return 'services';
    if (route.startsWith('/reports')) return 'reports';
    if (route.startsWith('/explore')) return 'explore';
    if (route.startsWith('/automation')) return 'automation';
    if (route.startsWith('/main')) return 'main';
    if (route === '/') return 'home';
    return 'general';
  }

  extractSidebarSections(content) {
    const sections = [];
    
    // Extract headings for quick navigation
    const headings = content.match(/<h[1-6][^>]*>([^<]+)<\/h[1-6]>/gi);
    if (headings) {
      sections.push({
        type: 'quick-nav',
        title: 'Quick Navigation',
        items: headings.slice(0, 8).map((heading, index) => ({
          id: `section-${index}`,
          title: heading.replace(/<[^>]+>/g, ''),
          level: heading.match(/<h([1-6])/i)[1]
        }))
      });
    }
    
    // Extract links for related content
    const links = content.match(/href\s*=\s*(?:"([^"]+)"|'([^']+)'|\{\s*`([^`]+)`\s*\}|\{\s*"([^"]+)"\s*\}|\{\s*'([^']+)'\s*\})/g);
    if (links) {
      const internalLinks = links
        .map(link => {
          const href = link.match(/href\s*=\s*(?:"([^"]+)"|'([^']+)'|\{\s*`([^`]+)`\s*\}|\{\s*"([^"]+)"\s*\}|\{\s*'([^']+)'\s*\})/);
          return href ? (href[1] || href[2] || href[3] || href[4] || href[5]) : null;
        })
        .filter(href => href && href.startsWith('/'))
        .slice(0, 5);
      
      if (internalLinks.length > 0) {
        sections.push({
          type: 'related-links',
          title: 'Related Links',
          items: internalLinks.map(link => ({
            href: link,
            title: this.getPageTitle(link) || link
          }))
        });
      }
    }
    
    return sections;
  }

  getPageTitle(route) {
    try {
      const pagePath = path.join(PAGES_DIR, route.replace(/^\//, ''), 'index.tsx');
      if (fs.existsSync(pagePath)) {
        const content = fs.readFileSync(pagePath, 'utf8');
        const titleMatch = content.match(/<title[^>]*>([^<]+)<\/title>/i);
        return titleMatch ? titleMatch[1] : null;
      }
    } catch (error) {
      // Ignore errors
    }
    return null;
  }

  async generateSidebarData() {
    console.log('📊 Generating sidebar data...');
    
    // Group pages by category for category-based sidebars
    const categoryGroups = {};
    
    for (const [route, config] of Object.entries(this.sidebarData)) {
      const category = config.category;
      if (!categoryGroups[category]) {
        categoryGroups[category] = [];
      }
      categoryGroups[category].push(config);
    }
    
    // Generate category-based sidebar data
    for (const [category, pages] of Object.entries(categoryGroups)) {
      const sidebarData = {
        category,
        pages: pages.map(page => ({
          route: page.route,
          title: this.getPageTitle(page.route) || page.route,
          hasSidebar: page.hasSidebar,
          sidebarType: page.sidebarType
        })),
        generatedAt: new Date().toISOString()
      };
      
      const sidebarPath = path.join(DATA_DIR, 'sidebars', `sidebar-${category}.json`);
      fs.writeFileSync(sidebarPath, JSON.stringify(sidebarData, null, 2));
    }
    
    // Save individual page sidebar data
    for (const [route, config] of Object.entries(this.sidebarData)) {
      if (config.hasSidebar) {
        const pageSidebarPath = path.join(DATA_DIR, 'sidebars', `page-${route.replace(/\//g, '-')}.json`);
        fs.writeFileSync(pageSidebarPath, JSON.stringify(config, null, 2));
      }
    }
    
    console.log(`✅ Generated sidebar data for ${Object.keys(categoryGroups).length} categories`);
  }

  async createSidebarComponents() {
    console.log('🔧 Creating sidebar components...');
    
    // Create category-specific sidebar components
    await this.createCategorySidebars();
    
    // Create content-based sidebar component
    await this.createContentSidebar();
    
    // Create sidebar wrapper component
    await this.createSidebarWrapper();
    
    console.log('✅ Created sidebar components');
  }

  async createCategorySidebars() {
    const categories = ['services', 'reports', 'explore', 'automation', 'main'];
    
    for (const category of categories) {
      const sidebarContent = `import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ${category.charAt(0).toUpperCase() + category.slice(1)}Sidebar() {
  const router = useRouter();
  
  return (
    <aside className="w-64 bg-black/20 border-r border-white/10 p-6 space-y-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-white mb-4">${category.charAt(0).toUpperCase() + category.slice(1)}</h2>
        <nav className="space-y-2">
          {/* Navigation items will be dynamically loaded */}
        </nav>
      </div>
      
      <div className="border-t border-white/10 pt-4">
        <h3 className="text-sm font-semibold text-white/90 mb-3">Quick Actions</h3>
        <div className="space-y-2">
          <Link 
            href="/search" 
            className="block px-3 py-2 rounded-md text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            🔍 Search ${category}
          </Link>
          <Link 
            href="/explore" 
            className="block px-3 py-2 rounded-md text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            🗺️ Explore All
          </Link>
        </div>
      </div>
    </aside>
  );
}`;

      const sidebarPath = path.join(COMPONENTS_DIR, 'sidebars', `${category.charAt(0).toUpperCase() + category.slice(1)}Sidebar.tsx`);
      fs.writeFileSync(sidebarPath, sidebarContent);
    }
  }

  async createContentSidebar() {
    const contentSidebar = `import React from 'react';
import Link from 'next/link';

export default function ContentSidebar({ sections = [] }) {
  if (!sections || sections.length === 0) return null;

  return (
    <aside className="w-64 bg-black/20 border-r border-white/10 p-6 space-y-6">
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="space-y-3">
          <h3 className="text-sm font-semibold text-white/90">{section.title}</h3>
          
          {section.type === 'quick-nav' && (
            <nav className="space-y-1">
              {section.items.map((item, itemIndex) => (
                <a
                  key={itemIndex}
                  href={\`#\${item.id}\`}
                  className={\`block px-3 py-1.5 rounded text-sm transition-colors \${item.level <= 2 ? 'text-white/90 font-medium' : 'text-white/70'} hover:text-white hover:bg-white/10\`}
                >
                  {item.title}
                </a>
              ))}
            </nav>
          )}
          
          {section.type === 'related-links' && (
            <nav className="space-y-2">
              {section.items.map((item, itemIndex) => (
                <Link
                  key={itemIndex}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          )}
        </div>
      ))}
    </aside>
  );
}`;

    const sidebarPath = path.join(COMPONENTS_DIR, 'sidebars', 'ContentSidebar.tsx');
    fs.writeFileSync(sidebarPath, contentSidebar);
  }

  async createSidebarWrapper() {
    const wrapperContent = `import React from 'react';
import ServicesSidebar from './ServicesSidebar';
import ReportsSidebar from './ReportsSidebar';
import ExploreSidebar from './ExploreSidebar';
import AutomationSidebar from './AutomationSidebar';
import MainSidebar from './MainSidebar';
import ContentSidebar from './ContentSidebar';

export default function SidebarWrapper({ route, content, children }) {
  const getSidebar = () => {
    if (route.startsWith('/services')) return <ServicesSidebar />;
    if (route.startsWith('/reports')) return <ReportsSidebar />;
    if (route.startsWith('/explore')) return <ExploreSidebar />;
    if (route.startsWith('/automation')) return <AutomationSidebar />;
    if (route.startsWith('/main')) return <MainSidebar />;
    
    // Default to content-based sidebar
    return <ContentSidebar content={content} />;
  };

  return (
    <div className="flex min-h-screen">
      {getSidebar()}
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}`;

    const wrapperPath = path.join(COMPONENTS_DIR, 'sidebars', 'SidebarWrapper.tsx');
    fs.writeFileSync(wrapperPath, wrapperContent);
  }

  async generateSidebarHooks() {
    console.log('🎣 Generating sidebar hooks...');
    
    const hookContent = `import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export function useSidebar() {
  const router = useRouter();
  const [sidebarData, setSidebarData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSidebarData = async () => {
      try {
        const response = await fetch(\`/api/sidebar?\${route}=\${router.pathname}\`);
        if (response.ok) {
          const data = await response.json();
          setSidebarData(data);
        }
      } catch (error) {
        console.error('Failed to load sidebar data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (router.pathname) {
      loadSidebarData();
    }
  }, [router.pathname]);

  return { sidebarData, loading };
}`;

    const hookPath = path.join(COMPONENTS_DIR, 'sidebars', 'useSidebar.js');
    fs.writeFileSync(hookPath, hookContent);
    
    console.log('✅ Generated sidebar hooks');
  }

  async updateExistingPages() {
    console.log('🔄 Updating existing pages with sidebar integration...');
    
    // This would typically involve updating page components to use sidebars
    // For now, we'll create a sample integration guide
    
    const integrationGuide = `# Sidebar Integration Guide

## How to Add Sidebars to Your Pages

### 1. Import Sidebar Components
\`\`\`tsx
import SidebarWrapper from '../components/sidebars/SidebarWrapper';
import { useSidebar } from '../components/sidebars/useSidebar';
\`\`\`

### 2. Wrap Your Page Content
\`\`\`tsx
export default function YourPage() {
  const { sidebarData, loading } = useSidebar();
  
  return (
    <SidebarWrapper route="/your-route" content={sidebarData}>
      <div className="p-6">
        {/* Your page content */}
        <h1>Your Page Title</h1>
        <p>Your page content goes here...</p>
      </div>
    </SidebarWrapper>
  );
}
\`\`\`

### 3. Automatic Sidebar Generation
Sidebars are automatically generated based on:
- Page category (services, reports, etc.)
- Content structure (headings, links)
- Related pages and navigation patterns

### 4. Customization
You can customize sidebars by editing the JSON files in \`data/navigation/sidebars/\`
`;

    const guidePath = path.join(COMPONENTS_DIR, 'sidebars', 'INTEGRATION_GUIDE.md');
    fs.writeFileSync(guidePath, integrationGuide);
    
    console.log('✅ Created sidebar integration guide');
  }
}

// Run the generator
if (require.main === module) {
  const generator = new DynamicSidebarGenerator();
  generator.run();
}

module.exports = DynamicSidebarGenerator;