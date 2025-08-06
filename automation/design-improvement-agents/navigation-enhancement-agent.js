const fs = require('fs-extra');
const path = require('path');

class NavigationEnhancementAgent {
  constructor() {
    this.config = {
      projectRoot: process.cwd(),
      componentsDir: path.join(process.cwd(), 'components'),
      pagesDir: path.join(process.cwd(), 'pages'),
      backupDir: path.join(process.cwd(), 'automation/design-improvement-backups')
    };
  }

  async enhanceNavigation() {
    try {
      console.log('Starting navigation enhancement...');
      
      // Create backup
      await this.createBackup();
      
      // Create enhanced navigation components
      await this.createNavigationComponents();
      
      // Update layout with enhanced navigation
      await this.updateLayoutNavigation();
      
      // Create breadcrumb component
      await this.createBreadcrumbComponent();
      
      // Create search component
      await this.createSearchComponent();
      
      // Create mobile navigation
      await this.createMobileNavigation();
      
      console.log('Navigation enhancement completed successfully');
      return { success: true, changes: ['Enhanced navigation menu', 'Added mobile navigation', 'Created search functionality', 'Added breadcrumbs'] };
    } catch (error) {
      console.error('Navigation enhancement failed:', error);
      return { success: false, error: error.message };
    }
  }

  async createBackup() {
    const backupPath = path.join(this.config.backupDir, `navigation-backup-${Date.now()}`);
    await fs.ensureDir(backupPath);
    
    // Backup components
    if (fs.existsSync(this.config.componentsDir)) {
      await fs.copy(this.config.componentsDir, path.join(backupPath, 'components'));
    }
  }

  async createNavigationComponents() {
    const componentsDir = this.config.componentsDir;
    
    // Create Navigation component
    const navigationComponent = `import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  href: string;
  label: string;
  icon: string;
  description?: string;
  children?: NavItem[];
}

interface NavigationProps {
  className?: string;
  variant?: 'header' | 'sidebar' | 'mobile';
}

const Navigation: React.FC<NavigationProps> = ({ className = '', variant = 'header' }) => {
  const router = useRouter();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems: NavItem[] = [
    {
      href: '/',
      label: 'Home',
      icon: '🏠',
      description: 'Welcome to Zion'
    },
    {
      href: '/services',
      label: 'Services',
      icon: '⚡',
      description: 'Our technology solutions',
      children: [
        { href: '/services/ai-development', label: 'AI Development', icon: '🤖' },
        { href: '/services/cloud-migration', label: 'Cloud Migration', icon: '☁️' },
        { href: '/services/security-auditing', label: 'Security Auditing', icon: '🔒' },
        { href: '/services/performance-optimization', label: 'Performance Optimization', icon: '⚡' }
      ]
    },
    {
      href: '/products',
      label: 'Products',
      icon: '🚀',
      description: 'Innovative products',
      children: [
        { href: '/products/iot-platforms', label: 'IoT Platforms', icon: '📡' },
        { href: '/products/blockchain-solutions', label: 'Blockchain Solutions', icon: '🔗' },
        { href: '/products/ai-tools', label: 'AI Tools', icon: '🧠' }
      ]
    },
    {
      href: '/about',
      label: 'About',
      icon: 'ℹ️',
      description: 'Learn about Zion'
    },
    {
      href: '/contact',
      label: 'Contact',
      icon: '📧',
      description: 'Get in touch'
    }
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return router.pathname === '/';
    }
    return router.pathname.startsWith(href);
  };

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const renderNavItem = (item: NavItem, index: number) => {
    const isItemActive = isActive(item.href);
    const hasChildren = item.children && item.children.length > 0;

    if (variant === 'mobile') {
      return (
        <motion.div
          key={item.href}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Link
            href={item.href}
            className={\`flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-slate-800/50 \${isItemActive ? 'text-white bg-slate-800/50' : ''}\`}
          >
            <span className="text-xl">{item.icon}</span>
            <div className="flex-1">
              <div className="font-medium">{item.label}</div>
              {item.description && (
                <div className="text-sm text-gray-500">{item.description}</div>
              )}
            </div>
          </Link>
          {hasChildren && (
            <div className="ml-8 mt-2 space-y-1">
              {item.children!.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <span>{child.icon}</span>
                  <span>{child.label}</span>
                </Link>
              ))}
            </div>
          )}
        </motion.div>
      );
    }

    return (
      <motion.div
        key={item.href}
        className="relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        onMouseEnter={() => hasChildren && setActiveDropdown(item.label)}
        onMouseLeave={() => hasChildren && setActiveDropdown(null)}
      >
        <Link
          href={item.href}
          className={\`flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 group relative \${isItemActive ? 'text-white' : ''}\`}
          onClick={() => hasChildren && handleDropdownToggle(item.label)}
        >
          <span className="text-lg">{item.icon}</span>
          <span className="relative">
            {item.label}
            <span className={\`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 \${isItemActive ? 'w-full' : 'w-0 group-hover:w-full'}\`}></span>
          </span>
          {hasChildren && (
            <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </Link>

        {/* Dropdown Menu */}
        {hasChildren && (
          <AnimatePresence>
            {activeDropdown === item.label && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-md border border-slate-700 rounded-lg shadow-xl z-50"
              >
                <div className="p-2 space-y-1">
                  {item.children!.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors duration-200"
                    >
                      <span className="text-lg">{child.icon}</span>
                      <span>{child.label}</span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </motion.div>
    );
  };

  return (
    <nav className={\`\${className}\`}>
      <div className="flex items-center space-x-8">
        {navItems.map((item, index) => renderNavItem(item, index))}
      </div>
    </nav>
  );
};

export default Navigation;
`;

    await fs.writeFile(path.join(componentsDir, 'Navigation.tsx'), navigationComponent);

    // Create SearchBar component
    const searchBarComponent = `import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchResult {
  title: string;
  description: string;
  href: string;
  type: 'page' | 'service' | 'product';
}

interface SearchBarProps {
  className?: string;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  className = '', 
  placeholder = 'Search Zion...' 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Mock search results - in a real app, this would call an API
  const mockSearch = async (searchQuery: string) => {
    setIsLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const mockResults: SearchResult[] = [
      {
        title: 'AI Development Services',
        description: 'Custom AI solutions and machine learning models',
        href: '/services/ai-development',
        type: 'service'
      },
      {
        title: 'Cloud Migration',
        description: 'Seamless cloud infrastructure setup and migration',
        href: '/services/cloud-migration',
        type: 'service'
      },
      {
        title: 'IoT Platforms',
        description: 'Advanced IoT solutions and platforms',
        href: '/products/iot-platforms',
        type: 'product'
      },
      {
        title: 'About Zion',
        description: 'Learn about our mission and values',
        href: '/about',
        type: 'page'
      }
    ].filter(result => 
      result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    setResults(mockResults);
    setIsLoading(false);
  };

  useEffect(() => {
    if (query.length > 2) {
      mockSearch(query);
    } else {
      setResults([]);
    }
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchClick = () => {
    setIsOpen(true);
  };

  const handleResultClick = (href: string) => {
    window.location.href = href;
    setIsOpen(false);
    setQuery('');
  };

  return (
    <div ref={searchRef} className={\`relative \${className}\`}>
      {/* Search Button */}
      <button
        onClick={handleSearchClick}
        className="p-2 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-gray-300 hover:text-white transition-colors duration-200"
        aria-label="Search"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>

      {/* Search Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-20 left-1/2 transform -translate-x-1/2 w-full max-w-2xl mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-slate-800/95 backdrop-blur-md border border-slate-700 rounded-lg shadow-2xl">
                {/* Search Input */}
                <div className="p-4 border-b border-slate-700">
                  <div className="relative">
                    <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                      type="text"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder={placeholder}
                      className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      autoFocus
                    />
                  </div>
                </div>

                {/* Search Results */}
                <div className="max-h-96 overflow-y-auto">
                  {isLoading ? (
                    <div className="p-4 text-center text-gray-400">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
                      <p className="mt-2">Searching...</p>
                    </div>
                  ) : results.length > 0 ? (
                    <div className="p-2">
                      {results.map((result, index) => (
                        <motion.div
                          key={result.href}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <button
                            onClick={() => handleResultClick(result.href)}
                            className="w-full text-left p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200"
                          >
                            <div className="flex items-center space-x-3">
                              <div className={\`w-8 h-8 rounded-lg flex items-center justify-center text-sm \${result.type === 'service' ? 'bg-blue-500/20 text-blue-400' : result.type === 'product' ? 'bg-purple-500/20 text-purple-400' : 'bg-gray-500/20 text-gray-400'}\`}>
                                {result.type === 'service' ? '⚡' : result.type === 'product' ? '🚀' : '📄'}
                              </div>
                              <div className="flex-1">
                                <div className="font-medium text-white">{result.title}</div>
                                <div className="text-sm text-gray-400">{result.description}</div>
                              </div>
                            </div>
                          </button>
                        </motion.div>
                      ))}
                    </div>
                  ) : query.length > 2 ? (
                    <div className="p-4 text-center text-gray-400">
                      <p>No results found for "{query}"</p>
                    </div>
                  ) : null}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;
`;

    await fs.writeFile(path.join(componentsDir, 'SearchBar.tsx'), searchBarComponent);

    console.log('Navigation components created');
  }

  async updateLayoutNavigation() {
    const layoutPath = path.join(this.config.componentsDir, 'Layout.tsx');
    
    if (!fs.existsSync(layoutPath)) {
      console.log('Layout component not found, skipping navigation update');
      return;
    }

    const layoutContent = fs.readFileSync(layoutPath, 'utf8');
    
    // Add imports for new navigation components
    let updatedContent = layoutContent;
    if (!updatedContent.includes('import Navigation')) {
      updatedContent = updatedContent.replace(
        "import { motion, AnimatePresence } from 'framer-motion';",
        "import { motion, AnimatePresence } from 'framer-motion';\nimport Navigation from './Navigation';\nimport SearchBar from './SearchBar';"
      );
    }

    // Replace the navigation section with enhanced navigation
    const navigationPattern = /<nav className="hidden lg:flex space-x-8">[\s\S]*?<\/nav>/;
    const enhancedNavigation = `<Navigation variant="header" className="hidden lg:flex space-x-8" />`;
    
    if (navigationPattern.test(updatedContent)) {
      updatedContent = updatedContent.replace(navigationPattern, enhancedNavigation);
    }

    // Add search bar to header
    const headerButtonPattern = /<button[\s\S]*?className="lg:hidden[\s\S]*?<\/button>/;
    const searchBarButton = `<SearchBar className="mr-2" />\n            <button`;
    
    if (headerButtonPattern.test(updatedContent)) {
      updatedContent = updatedContent.replace(headerButtonPattern, searchBarButton);
    }

    fs.writeFileSync(layoutPath, updatedContent);
    console.log('Layout navigation updated');
  }

  async createBreadcrumbComponent() {
    const componentsDir = this.config.componentsDir;
    
    const breadcrumbComponent = `import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

interface BreadcrumbItem {
  label: string;
  href: string;
  isCurrent?: boolean;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => {
  const router = useRouter();

  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    if (items) return items;

    const pathSegments = router.asPath.split('/').filter(segment => segment);
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Home', href: '/' }
    ];

    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += \`/\${segment}\`;
      const label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      breadcrumbs.push({
        label,
        href: currentPath,
        isCurrent: index === pathSegments.length - 1
      });
    });

    return breadcrumbs;
  };

  const breadcrumbItems = generateBreadcrumbs();

  return (
    <motion.nav
      className={\`flex items-center space-x-2 text-sm \${className}\`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      aria-label="Breadcrumb"
    >
      {breadcrumbItems.map((item, index) => (
        <React.Fragment key={item.href}>
          {index > 0 && (
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          )}
          {item.isCurrent ? (
            <span className="text-gray-400 font-medium">{item.label}</span>
          ) : (
            <Link
              href={item.href}
              className="text-gray-500 hover:text-white transition-colors duration-200"
            >
              {item.label}
            </Link>
          )}
        </React.Fragment>
      ))}
    </motion.nav>
  );
};

export default Breadcrumb;
`;

    await fs.writeFile(path.join(componentsDir, 'Breadcrumb.tsx'), breadcrumbComponent);
    console.log('Breadcrumb component created');
  }

  async createSearchComponent() {
    const componentsDir = this.config.componentsDir;
    
    const searchComponent = `import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  className?: string;
}

const Search: React.FC<SearchProps> = ({ 
  onSearch, 
  placeholder = 'Search...', 
  className = '' 
}) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <motion.div
      className={\`relative \${className}\`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <form onSubmit={handleSearch}>
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            className="w-full px-4 py-3 pl-12 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
          <svg 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          
          <AnimatePresence>
            {isFocused && query && (
              <motion.button
                type="submit"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition-colors duration-200"
              >
                Search
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </form>
    </motion.div>
  );
};

export default Search;
`;

    await fs.writeFile(path.join(componentsDir, 'Search.tsx'), searchComponent);
    console.log('Search component created');
  }

  async createMobileNavigation() {
    const componentsDir = this.config.componentsDir;
    
    const mobileNavigationComponent = `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './Navigation';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          
          {/* Mobile Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-slate-900/95 backdrop-blur-md border-l border-slate-700 z-50"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-slate-700">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">Z</span>
                  </div>
                  <span className="text-lg font-bold text-white">Zion</span>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg bg-slate-800/50 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation */}
              <div className="flex-1 overflow-y-auto p-4">
                <Navigation variant="mobile" />
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-slate-700">
                <div className="text-center text-gray-400 text-sm">
                  <p>&copy; {new Date().getFullYear()} Zion</p>
                  <p className="mt-1">Advanced Technology Solutions</p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileNavigation;
`;

    await fs.writeFile(path.join(componentsDir, 'MobileNavigation.tsx'), mobileNavigationComponent);
    console.log('Mobile navigation component created');
  }
}

module.exports = NavigationEnhancementAgent;
