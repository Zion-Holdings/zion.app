import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface NavigationItem {
  id: string;
  title: string;
  href: string;
  description: string;
  icon: string;
  category: 'primary' | 'secondary' | 'utility';
  relevanceScore: number;
  tags: string[];
  isNew?: boolean;
  isPopular?: boolean;
}

interface SmartNavigationProps {
  showSuggestions?: boolean;
  maxSuggestions?: number;
  className?: string;
}

export default function SmartNavigation({ 
  showSuggestions = true, 
  maxSuggestions = 4,
  className = '' 
}: SmartNavigationProps) {
  const router = useRouter();
  const [suggestions, setSuggestions] = useState<NavigationItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const generateSmartSuggestions = () => {
      const allItems: NavigationItem[] = [
        // Primary navigation
        {
          id: 'automation',
          title: 'Automation Hub',
          href: '/automation',
          description: 'Live autonomous systems & monitoring',
          icon: '🤖',
          category: 'primary',
          relevanceScore: 0.95,
          tags: ['automation', 'ai', 'monitoring', 'systems'],
          isPopular: true
        },
        {
          id: 'reports',
          title: 'Reports & Content',
          href: '/reports',
          description: 'Comprehensive collection of insights',
          icon: '📊',
          category: 'primary',
          relevanceScore: 0.90,
          tags: ['reports', 'insights', 'content', 'analysis'],
          isPopular: true
        },
        {
          id: 'explore',
          title: 'Explore Features',
          href: '/explore',
          description: 'Discover all capabilities and benefits',
          icon: '🔍',
          category: 'primary',
          relevanceScore: 0.85,
          tags: ['features', 'overview', 'discovery'],
          isPopular: true
        },
        {
          id: 'components',
          title: 'Component Library',
          href: '/component-library',
          description: 'Build beautiful, accessible interfaces',
          icon: '🧩',
          category: 'primary',
          relevanceScore: 0.80,
          tags: ['components', 'ui', 'development', 'design']
        },
        // Secondary navigation
        {
          id: 'site-health',
          title: 'Site Health',
          href: '/site-health',
          description: 'Performance & diagnostics dashboard',
          icon: '🏥',
          category: 'secondary',
          relevanceScore: 0.75,
          tags: ['health', 'performance', 'monitoring', 'diagnostics']
        },
        {
          id: 'newsroom',
          title: 'Newsroom',
          href: '/newsroom',
          description: 'Curated technology headlines',
          icon: '📰',
          category: 'secondary',
          relevanceScore: 0.70,
          tags: ['news', 'technology', 'updates', 'trends']
        },
        {
          id: 'search',
          title: 'Search',
          href: '/search',
          description: 'Find content across the entire site',
          icon: '🔎',
          category: 'secondary',
          relevanceScore: 0.65,
          tags: ['search', 'discovery', 'utility']
        },
        // Utility navigation
        {
          id: 'performance-dashboard',
          title: 'Performance Dashboard',
          href: '/performance-dashboard',
          description: 'Monitor internal linking performance',
          icon: '📈',
          category: 'utility',
          relevanceScore: 0.60,
          tags: ['performance', 'analytics', 'monitoring'],
          isNew: true
        },
        {
          id: 'playground',
          title: 'Playground',
          href: '/playground',
          description: 'Interactive development environment',
          icon: '🎮',
          category: 'utility',
          relevanceScore: 0.55,
          tags: ['development', 'testing', 'interactive']
        }
      ];

      // Calculate relevance based on current page and user behavior
      const scoredItems = allItems.map(item => {
        let score = item.relevanceScore;
        
        // Boost score for popular items
        if (item.isPopular) score += 0.1;
        if (item.isNew) score += 0.15;
        
        // Boost score based on current page context
        const currentPath = router.asPath;
        if (currentPath.includes('automation') && item.tags.includes('automation')) score += 0.2;
        if (currentPath.includes('reports') && item.tags.includes('reports')) score += 0.2;
        if (currentPath.includes('components') && item.tags.includes('components')) score += 0.2;
        
        return { ...item, relevanceScore: Math.min(score, 1.0) };
      });

      // Sort by relevance and take top suggestions
      const sortedItems = scoredItems
        .sort((a, b) => b.relevanceScore - a.relevanceScore)
        .slice(0, maxSuggestions);

      setSuggestions(sortedItems);
    };

    generateSmartSuggestions();
  }, [router.asPath, maxSuggestions]);

  const getCategoryColor = (category: NavigationItem['category']) => {
    switch (category) {
      case 'primary':
        return 'bg-cyan-500/20 text-cyan-400';
      case 'secondary':
        return 'bg-fuchsia-500/20 text-fuchsia-400';
      case 'utility':
        return 'bg-green-500/20 text-green-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Main Navigation Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-slate-800/50 border border-white/10 rounded-lg px-4 py-2 hover:border-cyan-400/50 transition-all"
      >
        <span className="text-lg">🧭</span>
        <span className="font-medium">Smart Navigation</span>
        <svg 
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Smart Suggestions Panel */}
      {isOpen && showSuggestions && (
        <div className="absolute top-full left-0 mt-2 w-96 bg-slate-900/95 border border-white/10 rounded-lg shadow-2xl backdrop-blur-xl z-50">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Smart Suggestions</h3>
              <span className="text-xs text-white/60">AI-powered recommendations</span>
            </div>
            
            <div className="space-y-3">
              {suggestions.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="group block p-3 rounded-lg hover:bg-slate-800/50 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-white group-hover:text-cyan-400 transition-colors truncate">
                          {item.title}
                        </h4>
                        
                        <div className="flex items-center gap-1">
                          {item.isNew && (
                            <span className="text-xs bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded">
                              NEW
                            </span>
                          )}
                          {item.isPopular && (
                            <span className="text-xs bg-orange-500/20 text-orange-400 px-1.5 py-0.5 rounded">
                              POPULAR
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <p className="text-sm text-white/70 mb-2 line-clamp-2">
                        {item.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className={`text-xs px-2 py-1 rounded ${getCategoryColor(item.category)}`}>
                          {item.category}
                        </span>
                        
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-white/50">
                            {Math.round(item.relevanceScore * 100)}% match
                          </span>
                          
                          <div className="text-cyan-400 group-hover:translate-x-1 transition-transform">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="mt-4 pt-3 border-t border-white/10">
              <div className="text-center">
                <Link 
                  href="/explore"
                  className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  View All Features →
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}