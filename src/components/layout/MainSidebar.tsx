import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  Home, 
  Briefcase, 
  Users, 
  Settings, 
  BarChart3, 
  FileText, 
  MessageSquare, 
  HelpCircle,
  Code,
  Smartphone,
  Globe,
  Building,
  Mail,
  Phone,
  MapPin
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
        { name: 'About', href: '/about', icon: Building },
        { name: 'Contact', href: '/contact', icon: Mail },
        { name: 'Blog', href: '/blog', icon: FileText },
      ]
    },
    {
      title: 'Marketplace',
      items: [
        { name: 'Products', href: '/marketplace', icon: Briefcase },
        { name: 'Services', href: '/services', icon: Settings },
        { name: 'Equipment', href: '/equipment', icon: BarChart3 },
        { name: 'Categories', href: '/categories', icon: Globe },
        { name: 'Green IT', href: '/green-it', icon: Globe },
      ]
    },
    {
      title: 'Talent & Community',
      items: [
        { name: 'Find Talent', href: '/talent', icon: Users },
        { name: 'Community', href: '/community', icon: Users },
        { name: 'AI Hiring', href: '/zion-hire-ai', icon: Smartphone },
        { name: 'Partners', href: '/partners', icon: Building },
      ]
    },
    {
      title: 'Resources',
      items: [
        { name: 'Help Center', href: '/help', icon: HelpCircle },
        { name: 'Developer Portal', href: '/developers', icon: Code },
        { name: 'API Docs', href: '/api-docs', icon: Code },
        { name: 'Mobile App', href: '/mobile', icon: Smartphone },
      ]
    }
  ];

  const contactInfo = [
    { icon: Mail, text: 'info@ziontechgroup.com', href: 'mailto:info@ziontechgroup.com' },
    { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: MapPin, text: 'San Francisco, CA', href: '#location' },
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
        "fixed left-0 top-0 z-50 h-full w-64 bg-zion-blue-dark border-r border-zion-blue-light transform transition-transform duration-300 ease-in-out lg:translate-x-0",
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
          <nav className="flex-1 overflow-y-auto p-4 space-y-6">
            {navigationItems.map((section) => (
              <div key={section.title}>
                <h3 className="text-zion-slate-light text-xs font-semibold uppercase tracking-wider mb-3">
                  {section.title}
                </h3>
                <ul className="space-y-1">
                  {section.items.map((item) => {
                    const IconComponent = item.icon;
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
                          <IconComponent className="w-4 h-4 mr-3" />
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="p-4 border-t border-zion-blue-light">
            <h3 className="text-zion-slate-light text-xs font-semibold uppercase tracking-wider mb-3">
              Contact Info
            </h3>
            <div className="space-y-2">
              {contactInfo.map((contact) => {
                const IconComponent = contact.icon;
                return (
                  <a
                    key={contact.text}
                    href={contact.href}
                    className="flex items-center text-xs text-zion-slate-light hover:text-zion-cyan transition-colors"
                  >
                    <IconComponent className="w-3 h-3 mr-2" />
                    {contact.text}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}