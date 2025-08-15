import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function EnhancedNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const mainNavItems = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/components', label: 'Components', icon: '🧩' },
    { href: '/reports', label: 'Reports', icon: '📊' },
    { href: '/content-hub', label: 'Content Hub', icon: '📚' },
    { href: '/discover', label: 'Discover', icon: '🔍' },
    { href: '/playground', label: 'Playground', icon: '🎮' },
    { href: '/live-dashboard', label: 'Live Dashboard', icon: '📈' },
    { href: '/automation', label: 'Automation', icon: '🤖' }
  ];

  const reportCategories = [
    { href: '/reports/insights', label: 'Insights', count: '15+', color: 'cyan' },
    { href: '/reports/dossiers', label: 'Dossiers', count: '8+', color: 'fuchsia' },
    { href: '/reports/tutorials', label: 'Tutorials', count: '25+', color: 'emerald' },
    { href: '/reports/whitepapers', label: 'Whitepapers', count: '12+', color: 'amber' },
    { href: '/reports/blueprints', label: 'Blueprints', count: '20+', color: 'blue' },
    { href: '/reports/playbooks', label: 'Playbooks', count: '18+', color: 'purple' }
  ];

  const quickActions = [
    { href: '/components', label: 'Explore Components', icon: '🧩', color: 'cyan' },
    { href: '/playground', label: 'Component Playground', icon: '🎮', color: 'fuchsia' },
    { href: '/live-dashboard', label: 'System Status', icon: '📊', color: 'emerald' },
    { href: '/discover', label: 'Content Search', icon: '🔍', color: 'amber' }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>Enhanced Navigation | Zion Tech Group</title>
        <meta name="description" content="Advanced navigation system showcasing all our features and content." />
      
        <meta property="og:title" content="Enhanced Navigation" />
        <meta property="og:description" content="Enhanced Navigation — automatically suggested description." />
        <meta name="twitter:card" content="summary_large_image" /></Head>

      {/* Main Navigation */}
      <nav className="bg-slate-900/50 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-cyan-400">
              Zion Tech Group
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {mainNavItems.map((item) => (
                <Link 
                  key={item.href}
                  href={item.href} 
                  className="flex items-center gap-2 text-white/80 hover:text-cyan-400 transition-colors"
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white/80 hover:text-cyan-400 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
          {/* Report Categories Sub-navigation */}
          <div className="mt-4 pb-2 border-t border-white/10 pt-4">
            <div className="flex flex-wrap gap-4 text-sm">
              {reportCategories.map((category) => (
                <Link 
                  key={category.href}
                  href={category.href} 
                  className={`flex items-center gap-2 text-white/60 hover:text-cyan-400 transition-colors ${
                    category.color === 'cyan' ? 'hover:text-cyan-400' :
                    category.color === 'fuchsia' ? 'hover:text-fuchsia-400' :
                    category.color === 'emerald' ? 'hover:text-emerald-400' :
                    category.color === 'amber' ? 'hover:text-amber-400' :
                    category.color === 'blue' ? 'hover:text-blue-400' :
                    'hover:text-purple-400'
                  }`}
                >
                  <span>{category.label}</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    category.color === 'cyan' ? 'bg-cyan-500/20 text-cyan-400' :
                    category.color === 'fuchsia' ? 'bg-fuchsia-500/20 text-fuchsia-400' :
                    category.color === 'emerald' ? 'bg-emerald-500/20 text-emerald-400' :
                    category.color === 'amber' ? 'bg-amber-500/20 text-amber-400' :
                    category.color === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-purple-500/20 text-purple-400'
                  }`}>
                    {category.count}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 border-t border-white/10">
            <div className="container mx-auto px-6 py-4">
              <div className="space-y-4">
                {mainNavItems.map((item) => (
                  <Link 
                    key={item.href}
                    href={item.href} 
                    className="flex items-center gap-3 text-white/80 hover:text-cyan-400 transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-emerald-400 bg-clip-text text-transparent">
            Enhanced Navigation
          </h1>
          <p className="text-2xl text-white/70 mb-12 max-w-4xl mx-auto">
            Discover our comprehensive navigation system showcasing all features, components, and content
          </p>
        </div>
      </section>

      {/* Quick Actions Grid */}
      <section className="py-16 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action) => (
              <Link 
                key={action.href}
                href={action.href}
                className={`group bg-slate-900/50 border border-white/10 rounded-lg p-8 text-center hover:border-${action.color}-400/50 transition-all hover:scale-105`}
              >
                <div className={`text-6xl mb-4 group-hover:scale-110 transition-transform`}>
                  {action.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-3 group-hover:text-${action.color}-400 transition-colors`}>
                  {action.label}
                </h3>
                <div className={`text-${action.color}-400 text-sm`}>Explore →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Feature Highlights</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">🧩 Component Library</h3>
                <p className="text-white/70">Explore our comprehensive collection of reusable UI components with live demos and documentation.</p>
              </div>
              <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-fuchsia-400">🎮 Interactive Playground</h3>
                <p className="text-white/70">Test and experiment with all our components in real-time with the interactive playground.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-emerald-400">📊 Live Dashboard</h3>
                <p className="text-white/70">Monitor our autonomous content generation system in real-time with performance metrics.</p>
              </div>
              <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-amber-400">🔍 Content Discovery</h3>
                <p className="text-white/70">AI-powered content search and discovery engine to find exactly what you need.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}