import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  Home, 
  Users, 
  Settings, 
  FileText, 
  HelpCircle, 
  Info, 
  Shield, 
  Briefcase,
  Globe,
  Leaf,
  MessageSquare,
  Search,
  BarChart3,
  Brain,
  Cloud,
  Zap
} from 'lucide-react';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const location = useLocation();

  const navigationItems = [
    {
      title: 'Main',
      items: [
        { name: 'Home', href: '/', icon: Home },
        { name: 'Services', href: '/services', icon: Settings },
        { name: 'About', href: '/about', icon: Info },
        { name: 'Contact', href: '/contact', icon: MessageSquare },
      ]
    },
    {
      title: 'Services',
      items: [
        { name: 'AI Solutions', href: '/ai-solutions', icon: Brain },
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud },
        { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
        { name: 'Digital Transformation', href: '/digital-transformation', icon: Zap },
      ]
    },
    {
      title: 'Support',
      items: [
        { name: 'Help Center', href: '/help', icon: HelpCircle },
        { name: 'FAQ', href: '/faq', icon: FileText },
        { name: 'Request Quote', href: '/quote', icon: FileText },
        { name: 'Blog', href: '/blog', icon: FileText },
        { name: 'Case Studies', href: '/case-studies', icon: FileText },
        { name: 'Sitemap', href: '/sitemap', icon: Globe },
      ]
    }
  ];

  return (
    <aside className={cn("w-64 bg-zion-blue-dark border-r border-zion-blue-light min-h-screen p-4", className)}>
      <div className="mb-6">
        <span className="text-xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
          ZION
        </span>
      </div>
      
      <nav className="space-y-6">
        {navigationItems.map((section) => (
          <div key={section.title}>
            <h3 className="text-zion-slate-light text-xs font-semibold uppercase tracking-wider mb-3">
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
                      className={cn(
                        "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                        isActive
                          ? "bg-zion-purple/20 text-zion-cyan"
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
    </aside>
  );
}