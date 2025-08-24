import React, { useState } from 'react';
import Link from 'next/link';
import { useNavigationContext } from '../hooks/useNavigation';
import { NavigationItem } from '../types/navigation';

interface SidebarItemProps {
  item: NavigationItem;
  level?: number;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ item, level = 0 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <Link
          href={item.href}
          className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
            level === 0 
              ? 'text-white/80 hover:text-white hover:bg-white/10' 
              : 'text-white/60 hover:text-white hover:bg-white/5 ml-4'
          }`}
        >
          {item.icon && <span>{item.icon}</span>}
          <span className="truncate">{item.label}</span>
        </Link>
        
        {hasChildren && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 hover:bg-white/10 rounded transition-colors"
            aria-label={isExpanded ? 'Collapse' : 'Expand'}
          >
            <svg
              className={`w-4 h-4 text-white/60 transition-transform ${
                isExpanded ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}
      </div>
      
      {hasChildren && isExpanded && (
        <div className="ml-4 space-y-1">
          {item.children!.map(child => (
            <SidebarItem key={child.id} item={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

interface SmartSidebarProps {
  pageType: 'home' | 'service' | 'category' | 'dashboard' | 'search' | 'explore';
  currentService?: string;
  currentCategory?: string;
  className?: string;
}

export default function SmartSidebar({ 
  pageType, 
  currentService, 
  currentCategory, 
  className = '' 
}: SmartSidebarProps) {
  const { navigation, isLoading } = useNavigationContext({ 
    pageType, 
    currentService, 
    currentCategory 
  });

  if (isLoading) {
    return (
      <aside className={`bg-white/5 backdrop-blur-md border-r border-white/10 p-4 ${className}`}>
        <div className="space-y-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="w-32 h-4 bg-white/20 rounded animate-pulse"></div>
              <div className="w-24 h-3 bg-white/20 rounded animate-pulse"></div>
            </div>
          ))}
        </div>
      </aside>
    );
  }

  if (!navigation) {
    return (
      <aside className={`bg-white/5 backdrop-blur-md border-r border-white/10 p-4 ${className}`}>
        <div className="text-center text-white/60">
          <p>Navigation not available</p>
        </div>
      </aside>
    );
  }

  // Generate context-specific sidebar content
  const generateSidebarContent = () => {
    switch (pageType) {
      case 'service':
        return generateServiceSidebar();
      case 'category':
        return generateCategorySidebar();
      case 'dashboard':
        return generateDashboardSidebar();
      case 'search':
        return generateSearchSidebar();
      case 'explore':
        return generateExploreSidebar();
      default:
        return generateDefaultSidebar();
    }
  };

  const generateServiceSidebar = () => {
    if (!currentService) return generateDefaultSidebar();
    
    const service = navigation.services.find(s => s.id === currentService);
    if (!service) return generateDefaultSidebar();

    return [
      {
        id: 'service-overview',
        label: 'Overview',
        href: service.href,
        icon: '📋',
        priority: 1
      },
      {
        id: 'service-demo',
        label: 'Live Demo',
        href: service.href,
        icon: '🚀',
        priority: 2
      },
      {
        id: 'service-docs',
        label: 'Documentation',
        href: service.href.replace('/demo/', '/docs/'),
        icon: '📚',
        priority: 3
      },
      {
        id: 'service-code',
        label: 'Source Code',
        href: `https://github.com/ai-factory/${service.id}`,
        icon: '💻',
        priority: 4,
        isExternal: true
      },
      {
        id: 'related-services',
        label: 'Related Services',
        href: '#',
        icon: '🔗',
        priority: 5,
        children: navigation.services
          .filter(s => s.category === service.category && s.id !== service.id)
          .slice(0, 3)
          .map(s => ({
            id: `related-${s.id}`,
            label: s.label,
            href: s.href,
            status: s.status
          }))
      }
    ];
  };

  const generateCategorySidebar = () => {
    if (!currentCategory) return generateDefaultSidebar();
    
    const category = navigation.categories.find(c => c.id === currentCategory);
    if (!category) return generateDefaultSidebar();

    const categoryServices = navigation.services.filter(s => s.category === category.name);
    
    return [
      {
        id: 'category-overview',
        label: `${category.name} Overview`,
        href: `/category/${category.slug}`,
        icon: category.icon,
        priority: 1
      },
      {
        id: 'category-services',
        label: 'Services in Category',
        href: '#',
        icon: '🚀',
        priority: 2,
        children: categoryServices.map(service => ({
          id: `service-${service.id}`,
          label: service.label,
          href: service.href,
          status: service.status
        }))
      },
      {
        id: 'category-stats',
        label: 'Category Statistics',
        href: '#',
        icon: '📊',
        priority: 3,
        children: [
          {
            id: 'total-services',
            label: `Total Services: ${categoryServices.length}`,
            href: '#'
          },
          {
            id: 'active-services',
            label: `Active: ${categoryServices.filter(s => s.status === 'active').length}`,
            href: '#'
          },
          {
            id: 'beta-services',
            label: `Beta: ${categoryServices.filter(s => s.status === 'beta').length}`,
            href: '#'
          }
        ]
      }
    ];
  };

  const generateDashboardSidebar = () => {
    return [
      {
        id: 'dashboard-overview',
        label: 'Dashboard Overview',
        href: '/dashboard',
        icon: '📊',
        priority: 1
      },
      {
        id: 'my-services',
        label: 'My Services',
        href: '/dashboard/services',
        icon: '🚀',
        priority: 2
      },
      {
        id: 'analytics',
        label: 'Analytics',
        href: '/dashboard/analytics',
        icon: '📈',
        priority: 3
      },
      {
        id: 'settings',
        label: 'Settings',
        href: '/dashboard/settings',
        icon: '⚙️',
        priority: 4
      },
      {
        id: 'quick-actions',
        label: 'Quick Actions',
        href: '#',
        icon: '⚡',
        priority: 5,
        children: [
          {
            id: 'add-service',
            label: 'Add New Service',
            href: '/dashboard/services/new'
          },
          {
            id: 'view-reports',
            label: 'View Reports',
            href: '/reports'
          },
          {
            id: 'system-status',
            label: 'System Status',
            href: '/system-status'
          }
        ]
      }
    ];
  };

  const generateSearchSidebar = () => {
    return [
      {
        id: 'search-filters',
        label: 'Search Filters',
        href: '#',
        icon: '🔍',
        priority: 1,
        children: [
          {
            id: 'filter-category',
            label: 'By Category',
            href: '#'
          },
          {
            id: 'filter-status',
            label: 'By Status',
            href: '#'
          },
          {
            id: 'filter-technology',
            label: 'By Technology',
            href: '#'
          }
        ]
      },
      {
        id: 'recent-searches',
        label: 'Recent Searches',
        href: '#',
        icon: '🕒',
        priority: 2
      },
      {
        id: 'popular-searches',
        label: 'Popular Searches',
        href: '#',
        icon: '🔥',
        priority: 3
      }
    ];
  };

  const generateExploreSidebar = () => {
    return [
      {
        id: 'explore-categories',
        label: 'Browse Categories',
        href: '#',
        icon: '📂',
        priority: 1,
        children: navigation.categories.map(category => ({
          id: `explore-${category.id}`,
          label: category.name,
          href: `/category/${category.slug}`,
          icon: category.icon
        }))
      },
      {
        id: 'explore-services',
        label: 'All Services',
        href: '/services',
        icon: '🚀',
        priority: 2
      },
      {
        id: 'explore-featured',
        label: 'Featured Services',
        href: '#',
        icon: '⭐',
        priority: 3,
        children: navigation.services
          .filter(s => s.status === 'active')
          .sort((a, b) => (a.priority || 0) - (b.priority || 0))
          .slice(0, 5)
          .map(service => ({
            id: `featured-${service.id}`,
            label: service.label,
            href: service.href,
            status: service.status
          }))
      }
    ];
  };

  const generateDefaultSidebar = () => {
    return [
      {
        id: 'quick-start',
        label: 'Quick Start',
        href: '/#services',
        icon: '🚀',
        priority: 1
      },
      {
        id: 'popular-services',
        label: 'Popular Services',
        href: '/services',
        icon: '🔥',
        priority: 2
      },
      {
        id: 'browse-categories',
        label: 'Browse Categories',
        href: '/explore',
        icon: '📂',
        priority: 3
      },
      {
        id: 'latest-updates',
        label: 'Latest Updates',
        href: '/newsroom',
        icon: '📰',
        priority: 4
      }
    ];
  };

  const sidebarItems = generateSidebarContent();

  return (
    <aside className={`bg-white/5 backdrop-blur-md border-r border-white/10 ${className}`}>
      <div className="p-4">
        {/* Sidebar Header */}
        <div className="mb-6 pb-4 border-b border-white/20">
          <h3 className="text-white font-semibold text-lg">Navigation</h3>
          <p className="text-white/60 text-sm">
            {pageType === 'service' && 'Service Details'}
            {pageType === 'category' && 'Category Overview'}
            {pageType === 'dashboard' && 'Dashboard Tools'}
            {pageType === 'search' && 'Search & Filters'}
            {pageType === 'explore' && 'Explore Services'}
            {pageType === 'home' && 'Quick Access'}
          </p>
        </div>

        {/* Sidebar Navigation */}
        <nav className="space-y-2">
          {sidebarItems
            .sort((a, b) => (a.priority || 0) - (b.priority || 0))
            .map(item => (
              <SidebarItem key={item.id} item={item} />
            ))
          }
        </nav>

        {/* Sidebar Footer */}
        <div className="mt-8 pt-4 border-t border-white/20">
          <div className="text-center text-white/40 text-xs">
            <p>Navigation powered by</p>
            <p className="font-semibold text-white/60">Zion AI</p>
          </div>
        </div>
      </div>
    </aside>
  );
}