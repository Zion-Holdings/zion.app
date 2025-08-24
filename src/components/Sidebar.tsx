import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  Home, 
  Users, 
  MessageSquare, 
  Settings, 
  HelpCircle, 
  BookOpen, 
  Briefcase,
  Building,
  Globe,
  Zap,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}

export function Sidebar({ isOpen, onToggle, className }: SidebarProps) {
  const location = useLocation();
  const { user } = useAuth();
  const isAuthenticated = !!user;

  const navigationItems = [
    {
      title: 'Main',
      items: [
        { label: 'Home', href: '/', icon: Home },
        { label: 'Marketplace', href: '/marketplace', icon: Briefcase },
        { label: 'Talent', href: '/talent', icon: Users },
        { label: 'Community', href: '/community', icon: Globe },
        { label: 'Blog', href: '/blog', icon: BookOpen },
        { label: 'About', href: '/about', icon: Building },
      ]
    },
    {
      title: 'Services',
      items: [
        { label: 'AI Matcher', href: '/ai-matcher', icon: Zap },
        { label: 'Services', href: '/services', icon: Briefcase },
        { label: 'Equipment', href: '/equipment', icon: Briefcase },
        { label: 'Green IT', href: '/green-it', icon: Globe },
        { label: 'Request Quote', href: '/request-quote', icon: MessageSquare },
      ]
    },
    ...(isAuthenticated ? [{
      title: 'Account',
      items: [
        { label: 'Dashboard', href: '/dashboard', icon: Settings },
        { label: 'Messages', href: '/messages', icon: MessageSquare },
        { label: 'Post Job', href: '/post-job', icon: Briefcase },
        { label: 'Publish Product', href: '/publish', icon: Briefcase },
      ]
    }] : []),
    {
      title: 'Support',
      items: [
        { label: 'Help Center', href: '/help', icon: HelpCircle },
        { label: 'Contact', href: '/contact', icon: MessageSquare },
        { label: 'Sitemap', href: '/sitemap', icon: Globe },
      ]
    }
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <div className={cn(
        "fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-zion-blue-dark border-r border-zion-purple/20 transform transition-transform duration-300 ease-in-out z-50 lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full",
        className
      )}>
        {/* Mobile Close Button */}
        <div className="lg:hidden flex justify-end p-4">
          <button
            onClick={onToggle}
            className="p-2 rounded-md text-zion-slate-light hover:text-white hover:bg-zion-purple/10"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation Content */}
        <div className="p-4 space-y-6">
          {navigationItems.map((section) => (
            <div key={section.title}>
              <h3 className="text-zion-purple text-sm font-semibold uppercase tracking-wider mb-3 px-3">
                {section.title}
              </h3>
              <ul className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.href}>
                      <Link
                        to={item.href}
                        className={cn(
                          "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors group",
                          isActive(item.href)
                            ? "bg-zion-purple/20 text-zion-cyan"
                            : "text-zion-slate-light hover:text-white hover:bg-zion-purple/10"
                        )}
                        onClick={() => {
                          // Close sidebar on mobile after navigation
                          if (window.innerWidth < 1024) {
                            onToggle();
                          }
                        }}
                      >
                        <Icon className={cn(
                          "mr-3 h-4 w-4",
                          isActive(item.href) ? "text-zion-cyan" : "text-zion-slate-light group-hover:text-white"
                        )} />
                        {item.label}
                        {isActive(item.href) && (
                          <ChevronRight className="ml-auto h-3 w-3 text-zion-cyan" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-zion-purple/20">
          <div className="text-center">
            <div className="text-zion-slate-light text-xs mb-2">
              Zion Tech Group
            </div>
            <div className="text-zion-purple text-xs">
              Empowering Innovation
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Mobile Toggle Button Component
export function SidebarToggle({ onToggle }: { onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className="lg:hidden p-2 rounded-md text-zion-slate-light hover:text-white hover:bg-zion-purple/10"
    >
      <Menu className="h-5 w-5" />
    </button>
  );
}