import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  Home, 
  ShoppingCart, 
  Users, 
  Settings, 
  FileText, 
  MessageSquare, 
  HelpCircle,
  ChevronRight,
  Building2,
  Globe,
  Zap,
  Code,
  Database,
  Server,
  MapPin,
  Calendar,
  Handshake
} from 'lucide-react';
import React from 'react';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function Sidebar({ isOpen = false }: SidebarProps) {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<string[]>(['marketplace']);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const navigationItems = {
    main: [
      { href: '/', label: 'Home', icon: Home },
      { href: '/about', label: 'About', icon: Building2 },
      { href: '/blog', label: 'Blog', icon: FileText },
      { href: '/contact', label: 'Contact', icon: MessageSquare },
    ],
    marketplace: [
      { href: '/marketplace', label: 'All Products', icon: ShoppingCart },
      { href: '/services', label: 'Services', icon: Settings },
      { href: '/talent', label: 'Talent', icon: Users },
      { href: '/equipment', label: 'Equipment', icon: Server },
      { href: '/categories', label: 'Categories', icon: Database },
    ],
    solutions: [
      { href: '/ai-solutions', label: 'AI Solutions', icon: Zap },
      { href: '/it-services', label: 'IT Services', icon: Code },
      { href: '/green-it', label: 'Green IT', icon: Globe },
      { href: '/enterprise', label: 'Enterprise', icon: Building2 },
    ],
    resources: [
      { href: '/developers', label: 'Developer Portal', icon: Code },
      { href: '/api-docs', label: 'API Docs', icon: FileText },
      { href: '/help-center', label: 'Help Center', icon: HelpCircle },
      { href: '/sitemap', label: 'Sitemap', icon: MapPin },
    ],
    community: [
      { href: '/community', label: 'Community', icon: Users },
      { href: '/forum', label: 'Forum', icon: MessageSquare },
      { href: '/events', label: 'Events', icon: Calendar },
      { href: '/partners', label: 'Partners', icon: Handshake },
    ]
  };

  const renderNavSection = (sectionKey: string, items: any[], title: string, icon: any) => {
    const isExpanded = expandedSections.includes(sectionKey);
    
    return (
      <div key={sectionKey} className="mb-4">
        <button
          onClick={() => toggleSection(sectionKey)}
          className="flex items-center justify-between w-full p-3 text-left text-zion-slate-light hover:text-zion-cyan transition-colors rounded-lg hover:bg-zion-purple/10"
        >
          <div className="flex items-center">
            {icon && React.createElement(icon, { className: "w-5 h-5 mr-3" })}
            <span className="font-medium">{title}</span>
          </div>
          <ChevronRight 
            className={cn(
              "w-4 h-4 transition-transform",
              isExpanded ? "rotate-90" : ""
            )} 
          />
        </button>
        
        {isExpanded && (
          <div className="ml-8 mt-2 space-y-1">
            {items.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "flex items-center px-3 py-2 text-sm rounded-lg transition-colors",
                    isActive
                      ? "bg-zion-purple/20 text-zion-cyan"
                      : "text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10"
                  )}
                >
                  <Icon className="w-4 h-4 mr-3" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside className={cn(
      "fixed left-0 top-16 h-full w-64 bg-zion-blue-dark border-r border-zion-blue-light z-40 transform transition-transform duration-300 ease-in-out",
      isOpen ? "translate-x-0" : "-translate-x-full",
      "lg:translate-x-0 lg:static lg:z-auto"
    )}>
      <div className="p-4">
        {/* Logo */}
        <div className="mb-8 p-4">
          <span className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
            ZION
          </span>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {/* Main Navigation */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-zion-slate-light uppercase tracking-wider mb-3 px-3">
              Main
            </h3>
            {navigationItems.main.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "flex items-center px-3 py-2 text-sm rounded-lg transition-colors",
                    isActive
                      ? "bg-zion-purple/20 text-zion-cyan"
                      : "text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10"
                  )}
                >
                  <Icon className="w-4 h-4 mr-3" />
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Marketplace Section */}
          {renderNavSection('marketplace', navigationItems.marketplace, 'Marketplace', ShoppingCart)}
          
          {/* Solutions Section */}
          {renderNavSection('solutions', navigationItems.solutions, 'Solutions', Zap)}
          
          {/* Resources Section */}
          {renderNavSection('resources', navigationItems.resources, 'Resources', FileText)}
          
          {/* Community Section */}
          {renderNavSection('community', navigationItems.community, 'Community', Users)}
        </nav>

        {/* Quick Actions */}
        <div className="mt-8 p-4 bg-zion-blue-light/10 rounded-lg border border-zion-purple/20">
          <h3 className="text-sm font-semibold text-white mb-3">Quick Actions</h3>
          <div className="space-y-2">
            <Link
              to="/request-quote"
              className="flex items-center px-3 py-2 text-sm bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark rounded-lg transition-colors font-medium"
            >
              <Handshake className="w-4 h-4 mr-2" />
              Request Quote
            </Link>
            <Link
              to="/contact"
              className="flex items-center px-3 py-2 text-sm bg-transparent hover:bg-zion-purple/20 text-zion-cyan border border-zion-cyan rounded-lg transition-colors"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Get Support
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}