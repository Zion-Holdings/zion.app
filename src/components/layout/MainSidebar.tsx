import React from 'react';
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
  Building,
  Briefcase,
  Globe,
  Zap,
  BookOpen
} from 'lucide-react';

interface MainSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MainSidebar({ isOpen, onClose }: MainSidebarProps) {
  const location = useLocation();

  const navigationItems = [
    {
      title: 'Main',
      items: [
        { name: 'Home', href: '/', icon: Home },
        { name: 'Marketplace', href: '/marketplace', icon: ShoppingCart },
        { name: 'Services', href: '/services', icon: Settings },
        { name: 'Talent', href: '/talent', icon: Users },
      ]
    },
    {
      title: 'Resources',
      items: [
        { name: 'Equipment', href: '/equipment', icon: Zap },
        { name: 'Green IT', href: '/green-it', icon: Globe },
        { name: 'AI Hiring', href: '/zion-hire-ai', icon: Building },
        { name: 'Blog', href: '/blog', icon: BookOpen },
      ]
    },
    {
      title: 'Company',
      items: [
        { name: 'About Us', href: '/about', icon: Building },
        { name: 'Careers', href: '/careers', icon: Briefcase },
        { name: 'Partners', href: '/partners', icon: Users },
        { name: 'Contact', href: '/contact', icon: MessageSquare },
      ]
    },
    {
      title: 'Support',
      items: [
        { name: 'Help Center', href: '/help', icon: HelpCircle },
        { name: 'API Docs', href: '/api-docs', icon: FileText },
        { name: 'Sitemap', href: '/sitemap', icon: FileText },
      ]
    }
  ];

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={cn(
        "fixed top-0 left-0 z-50 h-full w-64 bg-zion-blue-dark border-r border-zion-purple/20 transform transition-transform duration-300 ease-in-out lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-zion-purple/20">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
                ZION
              </span>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden p-2 text-zion-slate-light hover:text-white hover:bg-zion-purple/10 rounded-md"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-4">
            {navigationItems.map((section) => (
              <div key={section.title} className="mb-6">
                <h3 className="px-4 mb-2 text-xs font-semibold text-zion-slate-light uppercase tracking-wider">
                  {section.title}
                </h3>
                <ul className="space-y-1">
                  {section.items.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.href || 
                                   (item.href !== '/' && location.pathname.startsWith(item.href));
                    
                    return (
                      <li key={item.name}>
                        <Link
                          to={item.href}
                          onClick={onClose}
                          className={cn(
                            "flex items-center px-4 py-2 text-sm font-medium transition-colors",
                            isActive
                              ? "bg-zion-purple/20 text-zion-cyan border-r-2 border-zion-cyan"
                              : "text-zion-slate-light hover:bg-zion-purple/10 hover:text-zion-cyan"
                          )}
                        >
                          <Icon className="w-4 h-4 mr-3" />
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-zion-purple/20">
            <div className="text-xs text-zion-slate-light text-center">
              <p>&copy; {new Date().getFullYear()} Zion Tech Group</p>
              <div className="mt-2 space-x-2">
                <Link to="/privacy" className="hover:text-zion-cyan transition-colors">Privacy</Link>
                <span>•</span>
                <Link to="/terms" className="hover:text-zion-cyan transition-colors">Terms</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}