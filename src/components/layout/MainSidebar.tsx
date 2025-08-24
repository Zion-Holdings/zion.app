import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { 
  X, 
  Home, 
  Users, 
  Briefcase, 
  Settings, 
  HelpCircle, 
  MessageCircle, 
  Shield, 
  Zap, 
  Globe, 
  Database, 
  Lock, 
  BookOpen, 
  Phone, 
  Mail, 
  MapPin,
  ExternalLink,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

interface SidebarSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  items: SidebarItem[];
  isExpanded?: boolean;
}

interface SidebarItem {
  id: string;
  title: string;
  href: string;
  icon?: React.ReactNode;
  badge?: string;
  isExternal?: boolean;
  description?: string;
}

const sidebarSections: SidebarSection[] = [
  {
    id: 'main',
    title: 'Main Navigation',
    icon: <Home className="w-5 h-5" />,
    items: [
      {
        id: 'home',
        title: 'Home',
        href: '/',
        icon: <Home className="w-4 h-4" />,
        description: 'Welcome to Zion Tech Group'
      },
      {
        id: 'about',
        title: 'About Us',
        href: '/about',
        icon: <Users className="w-4 h-4" />,
        description: 'Learn about our company and mission'
      },
      {
        id: 'contact',
        title: 'Contact',
        href: '/contact',
        icon: <MessageCircle className="w-4 h-4" />,
        description: 'Get in touch with our team'
      }
    ]
  },
  {
    id: 'services',
    title: 'Services & Solutions',
    icon: <Zap className="w-5 h-5" />,
    items: [
      {
        id: 'ai-services',
        title: 'AI Services',
        href: '/ai-services',
        icon: <Zap className="w-4 h-4" />,
        description: 'Artificial Intelligence solutions',
        badge: 'New'
      },
      {
        id: 'cybersecurity',
        title: 'Cybersecurity',
        href: '/cybersecurity',
        icon: <Shield className="w-4 h-4" />,
        description: 'Security and protection services'
      },
      {
        id: 'it-support',
        title: 'IT Support',
        href: '/it-support',
        icon: <Settings className="w-4 h-4" />,
        description: 'Technical support and maintenance'
      },
      {
        id: 'enterprise',
        title: 'Enterprise Solutions',
        href: '/enterprise',
        icon: <Briefcase className="w-4 h-4" />,
        description: 'Large-scale business solutions'
      },
      {
        id: 'comprehensive',
        title: 'Comprehensive Services',
        href: '/comprehensive',
        icon: <Database className="w-4 h-4" />,
        description: 'Full-service technology solutions'
      }
    ]
  },
  {
    id: 'resources',
    title: 'Resources & Support',
    icon: <BookOpen className="w-5 h-5" />,
    items: [
      {
        id: 'help-center',
        title: 'Help Center',
        href: '/help',
        icon: <HelpCircle className="w-4 h-4" />,
        description: 'Find answers and support'
      },
      {
        id: 'cookies',
        title: 'Cookie Policy',
        href: '/cookies',
        icon: <Lock className="w-4 h-4" />,
        description: 'Learn about our cookie usage'
      },
      {
        id: 'privacy',
        title: 'Privacy Policy',
        href: '/privacy',
        icon: <Shield className="w-4 h-4" />,
        description: 'Data protection and privacy'
      }
    ]
  },
  {
    id: 'company',
    title: 'Company Information',
    icon: <Globe className="w-5 h-5" />,
    items: [
      {
        id: 'careers',
        title: 'Careers',
        href: '/careers',
        icon: <Briefcase className="w-4 h-4" />,
        description: 'Join our team',
        isExternal: true
      },
      {
        id: 'news',
        title: 'News & Updates',
        href: '/news',
        icon: <Globe className="w-4 h-4" />,
        description: 'Latest company news'
      },
      {
        id: 'partners',
        title: 'Partnerships',
        href: '/partners',
        icon: <Users className="w-4 h-4" />,
        description: 'Strategic partnerships'
      }
    ]
  }
];

interface MainSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MainSidebar({ isOpen, onClose }: MainSidebarProps) {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<string[]>(['main']);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  const handleItemClick = (item: SidebarItem) => {
    if (item.isExternal) {
      window.open(item.href, '_blank');
    }
    // For internal links, the router will handle navigation
    // Close sidebar on mobile after navigation
    if (window.innerWidth < 768) {
      onClose();
    }
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-80 bg-zion-blue-dark border-r border-zion-purple/20 
        transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:relative md:translate-x-0 md:z-auto
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-zion-purple/20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-zion-cyan rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-zion-blue-dark" />
            </div>
            <h2 className="text-xl font-bold text-white">Zion Tech</h2>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="md:hidden text-zion-slate-light hover:text-white"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Navigation Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {sidebarSections.map((section) => (
            <div key={section.id} className="space-y-2">
              <button
                onClick={() => toggleSection(section.id)}
                className="flex items-center justify-between w-full p-2 rounded-lg hover:bg-zion-purple/10 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="text-zion-cyan group-hover:text-zion-cyan-dark">
                    {section.icon}
                  </div>
                  <span className="font-semibold text-white group-hover:text-zion-cyan">
                    {section.title}
                  </span>
                </div>
                {expandedSections.includes(section.id) ? (
                  <ChevronDown className="w-4 h-4 text-zion-slate-light" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-zion-slate-light" />
                )}
              </button>

              {expandedSections.includes(section.id) && (
                <div className="ml-8 space-y-1">
                  {section.items.map((item) => (
                    <div key={item.id} className="relative">
                      <Link
                        to={item.href}
                        onClick={() => handleItemClick(item)}
                        className={`
                          flex items-center gap-3 p-2 rounded-lg transition-colors group
                          ${isActive(item.href) 
                            ? 'bg-zion-purple/20 text-zion-cyan border-l-2 border-zion-cyan' 
                            : 'hover:bg-zion-purple/10 text-zion-slate-light hover:text-white'
                          }
                        `}
                      >
                        {item.icon && (
                          <div className={`
                            ${isActive(item.href) ? 'text-zion-cyan' : 'text-zion-slate-light group-hover:text-zion-cyan'}
                          `}>
                            {item.icon}
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-medium truncate">{item.title}</span>
                            {item.badge && (
                              <Badge variant="secondary" className="text-xs">
                                {item.badge}
                              </Badge>
                            )}
                            {item.isExternal && (
                              <ExternalLink className="w-3 h-3 text-zion-slate-light" />
                            )}
                          </div>
                          {item.description && (
                            <p className="text-xs text-zion-slate-light truncate">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-zion-purple/20">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-zion-slate-light text-sm">
              <Phone className="w-4 h-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2 text-zion-slate-light text-sm">
              <Mail className="w-4 h-4" />
              <span>info@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2 text-zion-slate-light text-sm">
              <MapPin className="w-4 h-4" />
              <span>Innovation City, IC</span>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-zion-purple/20">
            <p className="text-xs text-zion-slate-light text-center">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}