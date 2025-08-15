#!/usr/bin/env node

/**
 * Navigation Orchestrator - Autonomous Navigation System
 * 
 * Continuously improves site navigation by:
 * - Auto-generating navigation components for new pages
 * - Updating headers/footers based on content analysis
 * - Creating intelligent sidebars with contextual navigation
 * - Maintaining breadcrumb navigation automatically
 * - Generating navigation maps and sitemaps
 */

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const PAGES_DIR = path.join(ROOT, 'pages');
const COMPONENTS_DIR = path.join(ROOT, 'components');
const AUTOMATION_DIR = path.join(ROOT, 'automation');
const DATA_DIR = path.join(ROOT, 'data');

class NavigationOrchestrator {
  constructor() {
    this.navData = {
      pages: new Map(),
      categories: new Map(),
      navigation: new Map(),
      breadcrumbs: new Map(),
      sidebars: new Map()
    };
    this.ensureDirectories();
  }

  ensureDirectories() {
    const dirs = [
      path.join(DATA_DIR, 'navigation'),
      path.join(COMPONENTS_DIR, 'navigation'),
      path.join(COMPONENTS_DIR, 'sidebars'),
      path.join(COMPONENTS_DIR, 'breadcrumbs')
    ];
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    });
  }

  async run() {
    console.log('🧭 Navigation Orchestrator: Starting autonomous navigation improvement...');
    
    try {
      await this.scanPages();
      await this.analyzeContent();
      await this.generateNavigationComponents();
      await this.updateGlobalNavigation();
      await this.createSidebars();
      await this.generateBreadcrumbs();
      await this.updateSitemap();
      
      console.log('✅ Navigation Orchestrator: Completed successfully');
    } catch (error) {
      console.error('❌ Navigation Orchestrator Error:', error);
    }
  }

  async scanPages() {
    console.log('📁 Scanning pages for navigation data...');
    
    const pages = this.walkDirectory(PAGES_DIR);
    for (const page of pages) {
      const relativePath = path.relative(PAGES_DIR, page);
      const route = this.pathToRoute(relativePath);
      const content = fs.readFileSync(page, 'utf8');
      
      this.navData.pages.set(route, {
        path: page,
        route,
        content,
        metadata: this.extractMetadata(content),
        links: this.extractLinks(content),
        category: this.determineCategory(route, content)
      });
    }
    
    console.log(`📊 Found ${this.navData.pages.size} pages`);
  }

  walkDirectory(dir) {
    const files = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (!entry.name.startsWith('_') && !entry.name.startsWith('[')) {
          files.push(...this.walkDirectory(fullPath));
        }
      } else if (/\.(tsx|jsx|ts|js)$/.test(entry.name)) {
        files.push(fullPath);
      }
    }
    
    return files;
  }

  pathToRoute(filePath) {
    return '/' + filePath
      .replace(/\.(tsx|jsx|ts|js)$/, '')
      .replace(/index$/, '')
      .replace(/\\/g, '/')
      .replace(/\/$/, '');
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

  extractLinks(content) {
    const links = [];
    const linkRegex = /href\s*=\s*(?:"([^"]+)"|'([^']+)'|\{\s*`([^`]+)`\s*\}|\{\s*"([^"]+)"\s*\}|\{\s*'([^']+)'\s*\})/g;
    let match;
    
    while ((match = linkRegex.exec(content))) {
      const href = match[1] || match[2] || match[3] || match[4] || match[5];
      if (href && href.startsWith('/')) {
        links.push(href);
      }
    }
    
    return links;
  }

  determineCategory(route, content) {
    if (route.startsWith('/services')) return 'services';
    if (route.startsWith('/reports')) return 'reports';
    if (route.startsWith('/explore')) return 'explore';
    if (route.startsWith('/automation')) return 'automation';
    if (route.startsWith('/main')) return 'main';
    if (route === '/') return 'home';
    return 'general';
  }

  async analyzeContent() {
    console.log('🔍 Analyzing content for navigation patterns...');
    
    // Group pages by category
    for (const [route, pageData] of this.navData.pages) {
      const category = pageData.category;
      if (!this.navData.categories.has(category)) {
        this.navData.categories.set(category, []);
      }
      this.navData.categories.get(category).push(route);
    }
    
    // Analyze navigation patterns
    for (const [route, pageData] of this.navData.pages) {
      this.navData.navigation.set(route, {
        related: this.findRelatedPages(route, pageData),
        breadcrumbs: this.generateBreadcrumbPath(route),
        sidebar: this.determineSidebarContent(route, pageData)
      });
    }
  }

  findRelatedPages(route, pageData) {
    const related = [];
    const category = pageData.category;
    
    // Find pages in same category
    const categoryPages = this.navData.categories.get(category) || [];
    for (const catRoute of categoryPages) {
      if (catRoute !== route) {
        const catPage = this.navData.pages.get(catRoute);
        if (catPage) {
          related.push({
            route: catRoute,
            title: catPage.metadata.title || catRoute,
            description: catPage.metadata.description || ''
          });
        }
      }
    }
    
    return related.slice(0, 5); // Limit to 5 related pages
  }

  generateBreadcrumbPath(route) {
    const segments = route.split('/').filter(Boolean);
    const breadcrumbs = [{ route: '/', title: 'Home' }];
    
    let currentPath = '';
    for (const segment of segments) {
      currentPath += `/${segment}`;
      const page = this.navData.pages.get(currentPath);
      breadcrumbs.push({
        route: currentPath,
        title: page?.metadata.title || segment.charAt(0).toUpperCase() + segment.slice(1)
      });
    }
    
    return breadcrumbs;
  }

  determineSidebarContent(route, pageData) {
    const sidebar = {
      navigation: [],
      related: [],
      quickLinks: []
    };
    
    // Add category navigation
    const category = pageData.category;
    if (category !== 'home') {
      const categoryPages = this.navData.categories.get(category) || [];
      sidebar.navigation = categoryPages.map(catRoute => {
        const catPage = this.navData.pages.get(catRoute);
        return {
          route: catRoute,
          title: catPage?.metadata.title || catRoute,
          active: catRoute === route
        };
      });
    }
    
    // Add related pages
    sidebar.related = this.findRelatedPages(route, pageData);
    
    // Add quick links based on content
    if (pageData.metadata.headings) {
      sidebar.quickLinks = pageData.metadata.headings.slice(0, 6).map(heading => ({
        id: heading.toLowerCase().replace(/\s+/g, '-'),
        title: heading
      }));
    }
    
    return sidebar;
  }

  async generateNavigationComponents() {
    console.log('🔧 Generating navigation components...');
    
    // Generate dynamic header
    await this.generateDynamicHeader();
    
    // Generate dynamic footer
    await this.generateDynamicFooter();
    
    // Generate sidebar components
    await this.generateSidebarComponents();
    
    // Generate breadcrumb components
    await this.generateBreadcrumbComponents();
  }

  async generateDynamicHeader() {
    const headerContent = `import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function DynamicHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    { href: '/landing', label: 'Landing' },
    { href: '/explore', label: 'Explore' },
    { href: '/services', label: 'Services' },
    { href: '/automation', label: 'Automations' },
    { href: '/reports', label: 'Reports' },
    { href: '/newsroom', label: 'Updates' },
    { href: '/search', label: 'Search' },
  ];

  const isActive = (href) => router.pathname === href;

  return (
    <header className="sticky top-0 z-50">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 rounded bg-white px-3 py-2 text-slate-900">
        Skip to content
      </a>
      <div className="backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/50 border-b border-white/10">
        <nav className="mx-auto max-w-7xl px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href="/" className="inline-flex items-center gap-2">
                <span className="text-xl font-extrabold tracking-wide bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-neon">
                  Zion
                </span>
              </Link>
              <span className="hidden text-xs text-white/60 sm:inline">
                Autonomous Cloud Automations
              </span>
            </div>

            <div className="hidden items-center gap-6 md:flex">
              {navItems.map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href} 
                  className={\`transition-colors \${isActive(item.href) ? 'text-white' : 'text-white/80 hover:text-white'}\`}
                >
                  {item.label}
                </Link>
              ))}
              <Link 
                href="/main/front#features" 
                className="rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-3 py-1.5 text-sm font-semibold shadow-[0_0_20px_rgba(34,211,238,0.35)] hover:shadow-[0_0_28px_rgba(34,211,238,0.6)] transition-shadow"
              >
                Get Started
              </Link>
            </div>

            <button
              aria-label="Toggle navigation menu"
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/10 text-white/90 hover:bg-white/15"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              onClick={() => setMobileOpen((v) => !v)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {mobileOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </nav>
        {mobileOpen && (
          <div id="mobile-nav" className="md:hidden border-t border-white/10">
            <div className="mx-auto max-w-7xl px-6 py-3 grid gap-3">
              {navItems.map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href} 
                  className={\`rounded-md px-3 py-2 transition-colors \${isActive(item.href) ? 'bg-white/20 text-white' : 'text-white/90 hover:bg-white/10'}\`}
                >
                  {item.label}
                </Link>
              ))}
              <Link 
                href="/main/front#features" 
                className="rounded-md bg-white/90 px-3 py-2 text-center font-semibold text-slate-900 hover:bg-white"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}`;

    fs.writeFileSync(path.join(COMPONENTS_DIR, 'navigation', 'DynamicHeader.tsx'), headerContent);
    console.log('✅ Generated DynamicHeader component');
  }

  async generateDynamicFooter() {
    const footerContent = `import React from 'react';
import Link from 'next/link';

export default function DynamicFooter() {
  const currentYear = new Date().getFullYear();
  
  const footerSections = [
    {
      title: 'Zion',
      description: 'Autonomous Cloud Automations',
      subtitle: 'Continuous, safe improvements delivered to main.'
    },
    {
      title: 'Navigation',
      links: [
        { href: '/explore', label: 'Explore' },
        { href: '/automation', label: 'Automations' },
        { href: '/reports', label: 'Reports' },
        { href: '/newsroom', label: 'Updates' },
        { href: '/site-health', label: 'Site Health' },
        { href: '/search', label: 'Search' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { href: '/sitemap.xml', label: 'Sitemap' },
        { href: '/automation-health', label: 'Automation Health' },
        { href: '/contact', label: 'Contact' },
        { href: 'https://github.com/Zion-Holdings/zion.app', label: 'GitHub', external: true }
      ]
    }
  ];

  return (
    <footer className="border-t border-white/10 bg-black/30">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-6 md:grid-cols-3">
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-2">
              <div className="text-lg font-semibold text-white">{section.title}</div>
              {section.description && (
                <p className="text-white/70">{section.description}</p>
              )}
              {section.subtitle && (
                <p className="text-white/50">{section.subtitle}</p>
              )}
              {section.links && (
                <nav className="grid grid-cols-1 gap-2">
                  {section.links.map((link, linkIndex) => (
                    <Link 
                      key={linkIndex}
                      href={link.href} 
                      className="hover:text-white transition-colors"
                      {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 text-xs text-white/50 flex items-center justify-between">
          <span>© {currentYear} Zion. All rights reserved.</span>
          <span className="hidden sm:inline">Built with Next.js & Netlify • Tailwind UI</span>
        </div>
      </div>
    </footer>
  );
}`;

    fs.writeFileSync(path.join(COMPONENTS_DIR, 'navigation', 'DynamicFooter.tsx'), footerContent);
    console.log('✅ Generated DynamicFooter component');
  }

  async generateSidebarComponents() {
    const sidebarContent = `import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function DynamicSidebar({ navigation, related, quickLinks }) {
  const router = useRouter();

  return (
    <aside className="w-64 bg-black/20 border-r border-white/10 p-6 space-y-6">
      {/* Navigation Section */}
      {navigation && navigation.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-white/90 mb-3">Navigation</h3>
          <nav className="space-y-2">
            {navigation.map((item, index) => (
              <Link
                key={index}
                href={item.route}
                className={\`block px-3 py-2 rounded-md text-sm transition-colors \${item.active ? 'bg-white/20 text-white' : 'text-white/70 hover:text-white hover:bg-white/10'}\`}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Related Pages Section */}
      {related && related.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-white/90 mb-3">Related Pages</h3>
          <div className="space-y-2">
            {related.map((item, index) => (
              <Link
                key={index}
                href={item.route}
                className="block px-3 py-2 rounded-md text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              >
                <div className="font-medium">{item.title}</div>
                {item.description && (
                  <div className="text-xs text-white/50 mt-1">{item.description}</div>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Quick Links Section */}
      {quickLinks && quickLinks.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-white/90 mb-3">Quick Links</h3>
          <nav className="space-y-1">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={\`#\${link.id}\`}
                className="block px-3 py-1.5 rounded text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              >
                {link.title}
              </a>
            ))}
          </nav>
        </div>
      )}
    </aside>
  );
}`;

    fs.writeFileSync(path.join(COMPONENTS_DIR, 'sidebars', 'DynamicSidebar.tsx'), sidebarContent);
    console.log('✅ Generated DynamicSidebar component');
  }

  async generateBreadcrumbComponents() {
    const breadcrumbContent = `import React from 'react';
import Link from 'next/link';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline';

export default function DynamicBreadcrumbs({ breadcrumbs }) {
  if (!breadcrumbs || breadcrumbs.length <= 1) return null;

  return (
    <nav className="flex items-center space-x-2 text-sm text-white/70 mb-6">
      {breadcrumbs.map((crumb, index) => (
        <React.Fragment key={crumb.route}>
          {index === 0 ? (
            <Link href={crumb.route} className="flex items-center hover:text-white transition-colors">
              <HomeIcon className="w-4 h-4 mr-1" />
              {crumb.title}
            </Link>
          ) : (
            <>
              <ChevronRightIcon className="w-4 h-4 text-white/40" />
              {index === breadcrumbs.length - 1 ? (
                <span className="text-white font-medium">{crumb.title}</span>
              ) : (
                <Link href={crumb.route} className="hover:text-white transition-colors">
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

    fs.writeFileSync(path.join(COMPONENTS_DIR, 'breadcrumbs', 'DynamicBreadcrumbs.tsx'), breadcrumbContent);
    console.log('✅ Generated DynamicBreadcrumbs component');
  }

  async updateGlobalNavigation() {
    console.log('🔄 Updating global navigation...');
    
    // Update Header.tsx to use dynamic navigation
    const headerPath = path.join(COMPONENTS_DIR, 'Header.tsx');
    if (fs.existsSync(headerPath)) {
      const headerContent = fs.readFileSync(headerPath, 'utf8');
      const updatedHeader = headerContent.replace(
        /import React, \{ useState \} from 'react';/,
        `import React, { useState } from 'react';
import { useRouter } from 'next/router';`
      ).replace(
        /const navItems = \[([\s\S]*?)\];/,
        `const navItems = [
    { href: '/landing', label: 'Landing' },
    { href: '/explore', label: 'Explore' },
    { href: '/services', label: 'Services' },
    { href: '/automation', label: 'Automations' },
    { href: '/reports', label: 'Reports' },
    { href: '/newsroom', label: 'Updates' },
    { href: '/search', label: 'Search' },
  ];

  const router = useRouter();
  const isActive = (href) => router.pathname === href;`
      ).replace(
        /className="text-white\/80 hover:text-white transition-colors"/g,
        'className={\`transition-colors \${isActive(item.href) ? "text-white" : "text-white/80 hover:text-white"}\`}'
      );
      
      fs.writeFileSync(headerPath, updatedHeader);
      console.log('✅ Updated Header.tsx with dynamic navigation');
    }
  }

  async createSidebars() {
    console.log('📚 Creating contextual sidebars...');
    
    // Generate sidebar data for each category
    for (const [category, routes] of this.navData.categories) {
      const sidebarData = {
        category,
        routes: routes.map(route => {
          const page = this.navData.pages.get(route);
          return {
            route,
            title: page?.metadata.title || route,
            description: page?.metadata.description || '',
            active: false
          };
        }),
        generatedAt: new Date().toISOString()
      };
      
      const sidebarPath = path.join(DATA_DIR, 'navigation', \`sidebar-\${category}.json\`);
      fs.writeFileSync(sidebarPath, JSON.stringify(sidebarData, null, 2));
    }
    
    console.log(\`✅ Generated \${this.navData.categories.size} sidebar configurations\`);
  }

  async generateBreadcrumbs() {
    console.log('🍞 Generating breadcrumb navigation...');
    
    const breadcrumbData = {};
    
    for (const [route, pageData] of this.navData.pages) {
      breadcrumbData[route] = this.navData.navigation.get(route)?.breadcrumbs || [];
    }
    
    const breadcrumbPath = path.join(DATA_DIR, 'navigation', 'breadcrumbs.json');
    fs.writeFileSync(breadcrumbPath, JSON.stringify(breadcrumbData, null, 2));
    
    console.log('✅ Generated breadcrumb navigation data');
  }

  async updateSitemap() {
    console.log('🗺️ Updating sitemap with navigation data...');
    
    const sitemapData = {
      pages: Array.from(this.navData.pages.keys()),
      categories: Array.from(this.navData.categories.keys()),
      navigation: Object.fromEntries(this.navData.navigation),
      generatedAt: new Date().toISOString()
    };
    
    const sitemapPath = path.join(DATA_DIR, 'navigation', 'navigation-sitemap.json');
    fs.writeFileSync(sitemapPath, JSON.stringify(sitemapData, null, 2));
    
    console.log('✅ Updated navigation sitemap');
  }
}

// Run the orchestrator
if (require.main === module) {
  const orchestrator = new NavigationOrchestrator();
  orchestrator.run();
}

module.exports = NavigationOrchestrator;