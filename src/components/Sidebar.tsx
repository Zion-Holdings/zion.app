import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  Home, 
  Users, 
  Briefcase, 
  Server, 
  ShoppingCart, 
  MessageSquare, 
  Settings, 
  HelpCircle,
  FileText,
  Globe,
  Leaf,
  Building
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();

  const navigationItems = [
    {
      title: 'Main',
      items: [
        { name: 'Home', href: '/', icon: Home },
        { name: 'About', href: '/about', icon: Building },
        { name: 'Services', href: '/services', icon: Briefcase },
        { name: 'Contact', href: '/contact', icon: MessageSquare },
      ]
    },
    {
      title: 'Marketplace',
      items: [
        { name: 'Products', href: '/marketplace', icon: ShoppingCart },
        { name: 'Talent', href: '/talent', icon: Users },
        { name: 'Equipment', href: '/equipment', icon: Server },
        { name: 'Categories', href: '/categories', icon: Globe },
        { name: 'Green IT', href: '/green-it', icon: Leaf },
      ]
    },
    {
      title: 'Resources',
      items: [
        { name: 'Blog', href: '/blog', icon: FileText },
        { name: 'FAQ', href: '/faq', icon: HelpCircle },
        { name: 'Partners', href: '/partners', icon: Users },
        { name: 'Careers', href: '/careers', icon: Briefcase },
      ]
    },
    {
      title: 'Legal',
      items: [
        { name: 'Privacy Policy', href: '/privacy', icon: FileText },
        { name: 'Terms of Service', href: '/terms', icon: FileText },
        { name: 'Sitemap', href: '/sitemap', icon: Globe },
      ]
    }
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={cn(
        "fixed top-0 left-0 z-50 h-full w-64 bg-zion-blue-dark border-r border-zion-blue-light transform transition-transform duration-300 ease-in-out lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-zion-blue-light">
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
          <nav className="flex-1 overflow-y-auto p-4">
            {navigationItems.map((section) => (
              <div key={section.title} className="mb-6">
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
                            "flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                            isActive
                              ? "bg-zion-purple/20 text-zion-cyan"
                              : "text-zion-slate-light hover:text-white hover:bg-zion-purple/10"
                          )}
                        >
                          <Icon className="w-4 h-4" />
                          <span>{item.name}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-zion-blue-light">
            <div className="text-center">
              <p className="text-xs text-zion-slate-light">
                &copy; {new Date().getFullYear()} Zion Tech Group
              </p>
              <p className="text-xs text-zion-slate-light mt-1">
                All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}