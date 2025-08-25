import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useNavigation } from '../hooks/useNavigation';
import { NavigationItem } from '../types/navigation';

interface DropdownMenuProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ trigger, children, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <div className="cursor-pointer">
        {trigger}
      </div>
      {isOpen && (
        <div className={`absolute top-full left-0 mt-2 w-64 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-xl z-50 ${className}`}>
          <div className="py-2">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

const DropdownItem: React.FC<{ item: NavigationItem }> = ({ item }) => (
  <Link 
    href={item.href}
    className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
  >
    <div className="flex items-center justify-between">
      <span>{item.label}</span>
      {item.status && (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          item.status === 'active' ? 'bg-green-500/20 text-green-300' :
          item.status === 'beta' ? 'bg-yellow-500/20 text-yellow-300' :
          'bg-blue-500/20 text-blue-300'
        }`}>
          {item.status}
        </span>
      )}
    </div>
  </Link>
);

export default function SmartHeader() {
  const { navigation, isLoading } = useNavigation();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Auto-generate navigation items from services
  const navItems = useMemo(() => {
    if (!navigation) return [];
    
    return [
      {
        id: 'home',
        label: '🏠 Home',
        href: '/',
        priority: 1
      },
      {
        id: 'explore',
        label: '🔍 Explore',
        href: '/explore',
        priority: 2
      },
      {
        id: 'services',
        label: '🚀 Services',
        href: '/services',
        priority: 3
      },
      {
        id: 'automation',
        label: '⚡ Automations',
        href: '/automation',
        priority: 4
      },
      {
        id: 'reports',
        label: '📊 Reports',
        href: '/reports',
        priority: 5
      },
      {
        id: 'newsroom',
        label: '📰 Updates',
        href: '/newsroom',
        priority: 6
      },
      {
        id: 'search',
        label: '🔎 Search',
        href: '/search',
        priority: 7
      }
    ];
  }, [navigation]);

  // Auto-categorize and group items for dropdown menus
  const categorizedNav = useMemo(() => {
    if (!navigation) return [];

    // Create service categories dropdown
    const servicesCategory = {
      id: 'services-dropdown',
      name: 'Services',
      items: navigation.services.sort((a, b) => (a.priority || 0) - (b.priority || 0))
    };

    // Create category-based dropdowns
    const categoryDropdowns = navigation.categories.map(category => ({
      id: `category-${category.id}`,
      name: category.name,
      items: navigation.services
        .filter(service => service.category === category.name)
        .sort((a, b) => (a.priority || 0) - (b.priority || 0))
    }));

    return [servicesCategory, ...categoryDropdowns];
  }, [navigation]);

  // Generate main navigation with dropdowns
  const mainNavigation = useMemo(() => {
    if (!navigation) return navItems;

    return [
      {
        id: 'home',
        label: '🏠 Home',
        href: '/',
        priority: 1
      },
      {
        id: 'explore',
        label: '🔍 Explore',
        href: '/explore',
        priority: 2
      },
      // Services dropdown
      {
        id: 'services-dropdown',
        label: '🚀 Services',
        href: '#',
        priority: 3,
        isDropdown: true
      },
      // Categories dropdown
      {
        id: 'categories-dropdown',
        label: '📂 Categories',
        href: '#',
        priority: 4,
        isDropdown: true
      },
      {
        id: 'automation',
        label: '⚡ Automations',
        href: '/automation',
        priority: 5
      },
      {
        id: 'reports',
        label: '📊 Reports',
        href: '/reports',
        priority: 6
      },
      {
        id: 'newsroom',
        label: '📰 Updates',
        href: '/newsroom',
        priority: 7
      },
      {
        id: 'search',
        label: '🔎 Search',
        href: '/search',
        priority: 8
      }
    ];
  }, [navigation, navItems]);

  if (isLoading) {
    return (
      <header className="sticky top-0 z-50">
        <div className="backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/50 border-b border-white/10">
          <nav className="mx-auto max-w-7xl px-6">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-20 h-6 bg-white/20 rounded animate-pulse"></div>
              </div>
              <div className="hidden md:flex items-center gap-6">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className="w-16 h-4 bg-white/20 rounded animate-pulse"></div>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }

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
              {mainNavigation.map((item) => {
                if (item.isDropdown) {
                  if (item.id === 'services-dropdown') {
                    return (
                      <DropdownMenu key={item.id} trigger={
                        <span className="text-white/80 hover:text-white transition-colors cursor-pointer">
                          {item.label}
                        </span>
                      }>
                        <div className="px-3 py-2 border-b border-white/20 mb-2">
                          <h3 className="text-white font-semibold text-sm">All Services</h3>
                          <p className="text-white/60 text-xs">Explore our AI-powered solutions</p>
                        </div>
                        {navigation?.services.slice(0, 8).map(service => (
                          <DropdownItem key={service.id} item={service} />
                        ))}
                        <div className="px-4 py-2 border-t border-white/20 mt-2">
                          <Link href="/services" className="text-blue-400 hover:text-blue-300 text-sm">
                            View All Services →
                          </Link>
                        </div>
                      </DropdownMenu>
                    );
                  }
                  
                  if (item.id === 'categories-dropdown') {
                    return (
                      <DropdownMenu key={item.id} trigger={
                        <span className="text-white/80 hover:text-white transition-colors cursor-pointer">
                          {item.label}
                        </span>
                      }>
                        <div className="px-3 py-2 border-b border-white/20 mb-2">
                          <h3 className="text-white font-semibold text-sm">Service Categories</h3>
                          <p className="text-white/60 text-xs">Browse by technology area</p>
                        </div>
                        {navigation?.categories.map(category => (
                          <Link 
                            key={category.id}
                            href={`/category/${category.slug}`}
                            className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                          >
                            <div className="flex items-center justify-between">
                              <span className="flex items-center gap-2">
                                <span>{category.icon}</span>
                                {category.name}
                              </span>
                              <span className="text-white/40 text-xs">{category.serviceCount}</span>
                            </div>
                          </Link>
                        ))}
                        <div className="px-4 py-2 border-t border-white/20 mt-2">
                          <Link href="/explore" className="text-blue-400 hover:text-blue-300 text-sm">
                            Explore All Categories →
                          </Link>
                        </div>
                      </DropdownMenu>
                    );
                  }
                }

                return (
                  <Link key={item.id} href={item.href} className="text-white/80 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                );
              })}
              
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
        
        {/* Mobile Navigation */}
        {mobileOpen && (
          <div id="mobile-nav" className="md:hidden border-t border-white/10">
            <div className="mx-auto max-w-7xl px-6 py-3 grid gap-3">
              {mainNavigation.map((item) => (
                <Link 
                  key={item.id} 
                  href={item.href} 
                  className="rounded-md px-3 py-2 text-white/90 hover:bg-white/10"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Services Section */}
              {navigation && (
                <>
                  <div className="px-3 py-2 border-t border-white/20 mt-4">
                    <h3 className="text-white/60 text-sm font-medium mb-2">Services</h3>
                    {navigation.services.slice(0, 5).map(service => (
                      <Link 
                        key={service.id}
                        href={service.href}
                        className="block px-3 py-2 text-white/70 hover:text-white hover:bg-white/10 rounded transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm">{service.label}</span>
                          {service.status && (
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              service.status === 'active' ? 'bg-green-500/20 text-green-300' :
                              service.status === 'beta' ? 'bg-yellow-500/20 text-yellow-300' :
                              'bg-blue-500/20 text-blue-300'
                            }`}>
                              {service.status}
                            </span>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                  
                  <div className="px-3 py-2 border-t border-white/20">
                    <h3 className="text-white/60 text-sm font-medium mb-2">Categories</h3>
                    {navigation.categories.map(category => (
                      <Link 
                        key={category.id}
                        href={`/category/${category.slug}`}
                        className="block px-3 py-2 text-white/70 hover:text-white hover:bg-white/10 rounded transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm flex items-center gap-2">
                            <span>{category.icon}</span>
                            {category.name}
                          </span>
                          <span className="text-white/40 text-xs">{category.serviceCount}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </>
              )}
              
              <Link 
                href="/main/front#features" 
                className="rounded-md bg-white/90 px-3 py-2 text-center font-semibold text-slate-900 hover:bg-white"
                onClick={() => setMobileOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}