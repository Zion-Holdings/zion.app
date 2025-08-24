import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useAuth } from '@/hooks/useAuth';
import { 
  Home, 
  ShoppingCart, 
  Users, 
  Settings, 
  HelpCircle, 
  FileText, 
  Briefcase,
  Building,
  Globe,
  MessageSquare,
  BarChart3,
  Smartphone,
  Zap,
  Shield,
  BookOpen,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  ChevronDown
} from 'lucide-react';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
  className?: string;
}

export function Sidebar({ isOpen = true, onClose, className }: SidebarProps) {
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<string[]>(['marketplace']);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path);

  const navigationSections = [
    {
      id: 'main',
      title: 'Main',
      items: [
        { name: 'Home', href: '/', icon: Home },
        { name: 'About', href: '/about', icon: Building },
        { name: 'Contact', href: '/contact', icon: Mail },
        { name: 'Blog', href: '/blog', icon: BookOpen },
      ]
    },
    {
      id: 'marketplace',
      title: 'Marketplace',
      items: [
        { name: 'Products', href: '/marketplace', icon: ShoppingCart },
        { name: 'Services', href: '/services', icon: Briefcase },
        { name: 'Talent', href: '/talent', icon: Users },
        { name: 'Equipment', href: '/equipment', icon: Settings },
        { name: 'Categories', href: '/categories', icon: FileText },
        { name: 'Green IT', href: '/green-it', icon: Globe },
        { name: 'AI Matcher', href: '/ai-matcher', icon: Zap },
      ]
    },
    {
      id: 'community',
      title: 'Community',
      items: [
        { name: 'Forum', href: '/community', icon: MessageSquare },
        { name: 'Partners', href: '/partners', icon: Building },
        { name: 'Careers', href: '/careers', icon: Briefcase },
      ]
    },
    {
      id: 'support',
      title: 'Support',
      items: [
        { name: 'Help Center', href: '/help', icon: HelpCircle },
        { name: 'Support', href: '/support', icon: MessageSquare },
        { name: 'Request Quote', href: '/request-quote', icon: Mail },
      ]
    },
    {
      id: 'enterprise',
      title: 'Enterprise',
      items: [
        { name: 'Enterprise Plans', href: '/enterprise', icon: Building },
        { name: 'Developer Portal', href: '/developers', icon: Code },
        { name: 'Mobile App', href: '/mobile-launch', icon: Smartphone },
      ]
    }
  ];

  const authenticatedSections = [
    {
      id: 'dashboard',
      title: 'Dashboard',
      items: [
        { name: 'Main Dashboard', href: '/dashboard', icon: BarChart3 },
        { name: 'Projects', href: '/projects', icon: Briefcase },
        { name: 'Messages', href: '/messages', icon: MessageSquare },
        { name: 'Account Settings', href: '/settings/account', icon: Settings },
      ]
    }
  ];

  return (
    <div className={cn(
      "bg-zion-blue-dark border-r border-zion-blue-light h-full overflow-y-auto transition-all duration-300",
      isOpen ? "w-64" : "w-16",
      className
    )}>
      <div className="p-4">
        {/* Logo */}
        <div className="mb-6">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
              {isOpen ? 'ZION' : 'Z'}
            </span>
          </Link>
        </div>

        {/* Navigation Sections */}
        <nav className="space-y-4">
          {navigationSections.map((section) => (
            <div key={section.id}>
              <button
                onClick={() => toggleSection(section.id)}
                className="flex items-center justify-between w-full text-left text-zion-slate-light hover:text-white transition-colors mb-2"
              >
                <span className="text-sm font-medium uppercase tracking-wide">
                  {isOpen ? section.title : ''}
                </span>
                {isOpen && (
                  expandedSections.includes(section.id) ? 
                    <ChevronDown className="h-4 w-4" /> : 
                    <ChevronRight className="h-4 w-4" />
                )}
              </button>
              
              {expandedSections.includes(section.id) && (
                <ul className="space-y-1">
                  {section.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.name}>
                        <Link
                          to={item.href}
                          className={cn(
                            "flex items-center space-x-3 px-3 py-2 rounded-md text-sm transition-colors",
                            isActive(item.href)
                              ? "bg-zion-purple/20 text-zion-cyan"
                              : "text-zion-slate-light hover:bg-zion-purple/10 hover:text-zion-cyan"
                          )}
                        >
                          <Icon className="h-4 w-4 flex-shrink-0" />
                          {isOpen && <span>{item.name}</span>}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          ))}

          {/* Authenticated Sections */}
          {isAuthenticated && authenticatedSections.map((section) => (
            <div key={section.id}>
              <button
                onClick={() => toggleSection(section.id)}
                className="flex items-center justify-between w-full text-left text-zion-slate-light hover:text-white transition-colors mb-2"
              >
                <span className="text-sm font-medium uppercase tracking-wide">
                  {isOpen ? section.title : ''}
                </span>
                {isOpen && (
                  expandedSections.includes(section.id) ? 
                    <ChevronDown className="h-4 w-4" /> : 
                    <ChevronRight className="h-4 w-4" />
                )}
              </button>
              
              {expandedSections.includes(section.id) && (
                <ul className="space-y-1">
                  {section.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.name}>
                        <Link
                          to={item.href}
                          className={cn(
                            "flex items-center space-x-3 px-3 py-2 rounded-md text-sm transition-colors",
                            isActive(item.href)
                              ? "bg-zion-purple/20 text-zion-cyan"
                              : "text-zion-slate-light hover:bg-zion-purple/10 hover:text-zion-cyan"
                          )}
                        >
                          <Icon className="h-4 w-4 flex-shrink-0" />
                          {isOpen && <span>{item.name}</span>}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          ))}
        </nav>

        {/* Contact Info - Only show when expanded */}
        {isOpen && (
          <div className="mt-8 pt-6 border-t border-zion-blue-light">
            <h4 className="text-white font-medium mb-3">Contact Info</h4>
            <div className="space-y-2 text-zion-slate-light text-xs">
              <div className="flex items-center space-x-2">
                <Mail className="h-3 w-3" />
                <span>contact@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-3 w-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-3 w-3" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Add missing Code icon component
const Code = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);