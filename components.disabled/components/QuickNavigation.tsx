import React from 'react';
import Link from 'next/link';

interface QuickNavItem {
  title: string;
  href: string;
  description: string;
  icon: string;
  category: 'primary' | 'secondary' | 'utility';
}

export default function QuickNavigation() {
  const quickNavItems: QuickNavItem[] = [
    // Primary navigation
    {
      title: 'Automation Hub',
      href: '/automation',
      description: 'Live autonomous systems',
      icon: '🤖',
      category: 'primary'
    },
    {
      title: 'Reports & Content',
      href: '/reports',
      description: 'Browse our content library',
      icon: '📊',
      category: 'primary'
    },
    {
      title: 'Component Library',
      href: '/components',
      description: 'UI components & playground',
      icon: '🧩',
      category: 'primary'
    },
    {
      title: 'Explore Features',
      href: '/explore',
      description: 'Discover all capabilities',
      icon: '🔍',
      category: 'primary'
    },
    
    // Secondary navigation
    {
      title: 'Newsroom',
      href: '/newsroom',
      description: 'Latest updates & news',
      icon: '📰',
      category: 'secondary'
    },
    {
      title: 'Site Health',
      href: '/site-health',
      description: 'Performance & diagnostics',
      icon: '🏥',
      category: 'secondary'
    },
    {
      title: 'Search',
      href: '/search',
      description: 'Find content across site',
      icon: '🔎',
      category: 'secondary'
    },
    {
      title: 'Playground',
      href: '/playground',
      description: 'Test & experiment',
      icon: '🎮',
      category: 'secondary'
    },
    
    // Utility navigation
    {
      title: 'Sitemap',
      href: '/sitemap.xml',
      description: 'Complete site index',
      icon: '🗺️',
      category: 'utility'
    },
    {
      title: 'Navigation',
      href: '/navigation',
      description: 'Enhanced navigation',
      icon: '🧭',
      category: 'utility'
    },
    {
      title: 'Contact',
      href: '/contact',
      description: 'Get in touch',
      icon: '📞',
      category: 'utility'
    },
    {
      title: 'Landing',
      href: '/landing',
      description: 'Landing page',
      icon: '🚀',
      category: 'utility'
    }
  ];

  const getCategoryItems = (category: QuickNavItem['category']) => {
    return quickNavItems.filter(item => item.category === category);
  };

  return (
    <div className="bg-slate-900/50 border border-white/10 rounded-xl p-6 mb-8">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-white mb-2">Quick Navigation</h2>
        <p className="text-white/70">Quick access to key pages and features</p>
      </div>

      {/* Primary Navigation */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <span className="text-cyan-400">⭐</span>
          Essential Pages
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {getCategoryItems('primary').map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group bg-slate-800/50 border border-white/10 rounded-lg p-4 hover:border-cyan-400/50 hover:bg-slate-800/70 transition-all"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{item.icon}</span>
                <h4 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h4>
              </div>
              <p className="text-white/70 text-sm">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Secondary Navigation */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <span className="text-fuchsia-400">🔗</span>
          Key Features
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {getCategoryItems('secondary').map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group bg-slate-800/30 border border-white/10 rounded-lg p-4 hover:border-fuchsia-400/50 hover:bg-slate-800/50 transition-all"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xl">{item.icon}</span>
                <h4 className="font-medium text-white group-hover:text-fuchsia-400 transition-colors">
                  {item.title}
                </h4>
              </div>
              <p className="text-white/70 text-sm">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Utility Navigation */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <span className="text-emerald-400">🛠️</span>
          Utilities
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {getCategoryItems('utility').map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group bg-slate-800/20 border border-white/10 rounded-lg p-4 hover:border-emerald-400/50 hover:bg-slate-800/40 transition-all"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-lg">{item.icon}</span>
                <h4 className="font-medium text-white group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h4>
              </div>
              <p className="text-white/70 text-sm">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}