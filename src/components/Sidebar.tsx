import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  Home, 
  ShoppingCart, 
  Users, 
  Settings, 
  HelpCircle, 
  FileText, 
  Briefcase, 
  Shield, 
  BookOpen,
  MessageSquare,
  BarChart3,
  Zap,
  Globe,
  Building,
  Leaf
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export function Sidebar({ isOpen, onClose, className }: SidebarProps) {
  const location = useLocation();

  const navigationItems = [
    {
      title: 'Main',
      items: [
        { name: 'Home', href: '/', icon: Home },
        { name: 'Marketplace', href: '/marketplace', icon: ShoppingCart },
        { name: 'Services', href: '/services', icon: Settings },
        { name: 'Talent', href: '/talent', icon: Users },
        { name: 'Equipment', href: '/equipment', icon: Zap },
        { name: 'Community', href: '/community', icon: Globe },
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
      title: 'Resources',
      items: [
        { name: 'Blog', href: '/blog', icon: BookOpen },
        { name: 'Help Center', href: '/help-center', icon: HelpCircle },
        { name: 'Green IT', href: '/green-it', icon: Leaf },
        { name: 'Sitemap', href: '/sitemap', icon: FileText },
      ]
    },
    {
      title: 'Legal',
      items: [
        { name: 'Privacy Policy', href: '/privacy', icon: Shield },
        { name: 'Terms of Service', href: '/terms', icon: FileText },
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
        "fixed left-0 top-0 z-50 h-full w-64 transform bg-zion-blue-dark border-r border-zion-purple/20 transition-transform duration-300 ease-in-out lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full",
        className
      )}>
        <div className="flex h-16 items-center justify-between px-6 border-b border-zion-purple/20">
          <div className="flex items-center">
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

        <div className="flex-1 overflow-y-auto py-6">
          <nav className="px-4 space-y-8">
            {navigationItems.map((section) => (
              <div key={section.title}>
                <h3 className="text-xs font-semibold text-zion-slate-light uppercase tracking-wider mb-3">
                  {section.title}
                </h3>
                <ul className="space-y-1">
                  {section.items.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.href;
                    
                    return (
                      <li key={item.name}>
                        <Link
                          to={item.href}
                          onClick={onClose}
                          className={cn(
                            "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                            isActive
                              ? "bg-zion-purple/20 text-zion-cyan"
                              : "text-zion-slate-light hover:text-white hover:bg-zion-purple/10"
                          )}
                        >
                          <Icon className="mr-3 h-4 w-4" />
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Footer */}
        <div className="border-t border-zion-purple/20 p-4">
          <div className="text-xs text-zion-slate-light text-center">
            <p>&copy; {new Date().getFullYear()} Zion Tech Group</p>
            <p className="mt-1">All rights reserved</p>
          </div>
        </div>
      </div>
    </>
  );
}