import React, { useState } from 'react';
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
  Building,
  Leaf,
  Search,
  MessageSquare,
  BarChart3,
  Globe,
  Code,
  Smartphone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export function Sidebar({ isOpen, onClose, className }: SidebarProps) {
  const location = useLocation();
  const [openSections, setOpenSections] = useState<string[]>(['main']);

  const toggleSection = (section: string) => {
    setOpenSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const navigationItems = [
    {
      section: 'main',
      title: 'Main',
      items: [
        { name: 'Home', href: '/', icon: Home },
        { name: 'About', href: '/about', icon: Building },
        { name: 'Contact', href: '/contact', icon: MessageSquare },
      ]
    },
    {
      section: 'marketplace',
      title: 'Marketplace',
      items: [
        { name: 'Products', href: '/marketplace', icon: ShoppingCart },
        { name: 'Services', href: '/services', icon: Settings },
        { name: 'Categories', href: '/categories', icon: FileText },
        { name: 'Equipment', href: '/equipment', icon: Settings },
        { name: 'Green IT', href: '/green-it', icon: Leaf },
        { name: 'IT Onsite Services', href: '/it-onsite-services', icon: Briefcase },
      ]
    },
    {
      section: 'talent',
      title: 'Talent & Community',
      items: [
        { name: 'Talent Directory', href: '/talent', icon: Users },
        { name: 'Community', href: '/community', icon: Globe },
        { name: 'Blog', href: '/blog', icon: FileText },
        { name: 'Careers', href: '/careers', icon: Briefcase },
        { name: 'Partners', href: '/partners', icon: Building },
      ]
    },
    {
      section: 'ai-tools',
      title: 'AI Tools',
      items: [
        { name: 'AI Matcher', href: '/match', icon: Search },
        { name: 'Zion Hire AI', href: '/zion-hire-ai', icon: Code },
        { name: 'Request Quote', href: '/request-quote', icon: MessageSquare },
      ]
    },
    {
      section: 'support',
      title: 'Support & Resources',
      items: [
        { name: 'Help Center', href: '/help', icon: HelpCircle },
        { name: 'Support', href: '/support', icon: MessageSquare },
        { name: 'Sitemap', href: '/sitemap', icon: FileText },
      ]
    },
    {
      section: 'mobile',
      title: 'Mobile',
      items: [
        { name: 'Mobile App', href: '/mobile-launch', icon: Smartphone },
        { name: 'Open App', href: '/open-app', icon: Smartphone },
      ]
    }
  ];

  return (
    <div className={cn(
      "fixed inset-y-0 left-0 z-50 w-64 bg-zion-blue-dark border-r border-zion-blue-light transform transition-transform duration-300 ease-in-out",
      isOpen ? "translate-x-0" : "-translate-x-full",
      className
    )}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-zion-blue-light">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
            ZION
          </span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="text-zion-slate-light hover:text-white"
        >
          ×
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
        {navigationItems.map((section) => (
          <div key={section.section} className="space-y-1">
            <Collapsible
              open={openSections.includes(section.section)}
              onOpenChange={() => toggleSection(section.section)}
            >
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-between text-left font-medium text-zion-slate-light hover:text-white hover:bg-zion-purple/10",
                    openSections.includes(section.section) && "text-white bg-zion-purple/10"
                  )}
                >
                  <span>{section.title}</span>
                  {openSections.includes(section.section) ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-1 pl-4">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.href;
                  
                  return (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={onClose}
                      className={cn(
                        "flex items-center space-x-3 px-3 py-2 rounded-md text-sm transition-colors",
                        isActive
                          ? "bg-zion-purple/20 text-zion-cyan"
                          : "text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10"
                      )}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </CollapsibleContent>
            </Collapsible>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-zion-blue-light">
        <div className="text-xs text-zion-slate-light text-center">
          <p>Zion Tech Group</p>
          <p>Connecting Tech & AI</p>
        </div>
      </div>
    </div>
  );
}