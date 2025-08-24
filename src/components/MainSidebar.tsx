import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  Home, 
  ShoppingCart, 
  Users, 
  Settings, 
  MessageSquare, 
  FileText, 
  HelpCircle, 
  Code, 
  BarChart3, 
  Briefcase,
  Leaf,
  Building,
  Mail,
  Calendar,
  Globe,
  Zap
} from 'lucide-react';

interface SidebarItem {
  key: string;
  href: string;
  icon: React.ReactNode;
  label: string;
  description?: string;
}

interface SidebarSection {
  title: string;
  items: SidebarItem[];
}

export function MainSidebar() {
  const location = useLocation();

  const sidebarSections: SidebarSection[] = [
    {
      title: 'Main',
      items: [
        { key: 'home', href: '/', icon: <Home className="w-4 h-4" />, label: 'Home' },
        { key: 'marketplace', href: '/marketplace', icon: <ShoppingCart className="w-4 h-4" />, label: 'Marketplace' },
        { key: 'services', href: '/services', icon: <Settings className="w-4 h-4" />, label: 'Services' },
        { key: 'talent', href: '/talent', icon: <Users className="w-4 h-4" />, label: 'Talent' },
        { key: 'equipment', href: '/equipment', icon: <BarChart3 className="w-4 h-4" />, label: 'Equipment' },
      ]
    },
    {
      title: 'Company',
      items: [
        { key: 'about', href: '/about', icon: <Building className="w-4 h-4" />, label: 'About Us' },
        { key: 'careers', href: '/careers', icon: <Briefcase className="w-4 h-4" />, label: 'Careers' },
        { key: 'partners', href: '/partners', icon: <Users className="w-4 h-4" />, label: 'Partners' },
        { key: 'contact', href: '/contact', icon: <Mail className="w-4 h-4" />, label: 'Contact' },
      ]
    },
    {
      title: 'Resources',
      items: [
        { key: 'blog', href: '/blog', icon: <FileText className="w-4 h-4" />, label: 'Blog' },
        { key: 'community', href: '/community', icon: <Globe className="w-4 h-4" />, label: 'Community' },
        { key: 'green-it', href: '/green-it', icon: <Leaf className="w-4 h-4" />, label: 'Green IT' },
        { key: 'zion-hire-ai', href: '/zion-hire-ai', icon: <Zap className="w-4 h-4" />, label: 'AI Hiring' },
      ]
    },
    {
      title: 'Support',
      items: [
        { key: 'help', href: '/help', icon: <HelpCircle className="w-4 h-4" />, label: 'Help Center' },
        { key: 'developers', href: '/developers', icon: <Code className="w-4 h-4" />, label: 'Developer Portal' },
        { key: 'api-docs', href: '/api-docs', icon: <Code className="w-4 h-4" />, label: 'API Docs' },
        { key: 'sitemap', href: '/sitemap', icon: <Calendar className="w-4 h-4" />, label: 'Sitemap' },
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
    <aside className="w-64 bg-zion-blue-dark border-r border-zion-blue-light min-h-screen p-4">
      <div className="mb-8">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
            ZION
          </span>
        </Link>
        <p className="text-zion-slate-light text-sm mt-2">
          Tech & AI Marketplace
        </p>
      </div>

      <nav className="space-y-6">
        {sidebarSections.map((section) => (
          <div key={section.title}>
            <h3 className="text-zion-slate-light text-xs font-semibold uppercase tracking-wider mb-3">
              {section.title}
            </h3>
            <ul className="space-y-1">
              {section.items.map((item) => (
                <li key={item.key}>
                  <Link
                    to={item.href}
                    className={cn(
                      "flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      isActive(item.href)
                        ? "bg-zion-purple/20 text-zion-cyan"
                        : "text-zion-slate-light hover:bg-zion-purple/10 hover:text-zion-cyan"
                    )}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <div className="mt-8 pt-6 border-t border-zion-blue-light">
        <div className="text-zion-slate-light text-xs">
          <p className="mb-2">Need help?</p>
          <Link 
            to="/contact" 
            className="text-zion-cyan hover:text-zion-purple transition-colors"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </aside>
  );
}