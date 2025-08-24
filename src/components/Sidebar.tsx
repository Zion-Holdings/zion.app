import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Briefcase, 
  Users, 
  Settings, 
  FileText, 
  HelpCircle, 
  MessageSquare, 
  BarChart3,
  ShoppingCart,
  Wrench,
  Globe,
  Building,
  Code,
  Shield,
  Zap,
  ChevronRight,
  ChevronDown
} from 'lucide-react';

interface SidebarItem {
  name: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
  children?: SidebarItem[];
}

export function Sidebar() {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const location = useLocation();

  const sidebarItems: SidebarItem[] = [
    {
      name: 'Dashboard',
      path: '/',
      icon: Home
    },
    {
      name: 'Services',
      path: '/services',
      icon: Briefcase,
      children: [
        { name: 'IT Solutions', path: '/services/it-solutions', icon: Settings },
        { name: 'AI Services', path: '/services/ai-services', icon: Zap },
        { name: 'Cybersecurity', path: '/services/cybersecurity', icon: Shield },
        { name: 'Green IT', path: '/green-it', icon: Globe },
        { name: 'On-Site Support', path: '/it-onsite-services', icon: Wrench },
      ]
    },
    {
      name: 'Talent',
      path: '/talent',
      icon: Users,
      children: [
        { name: 'Browse Talents', path: '/talents', icon: Users },
        { name: 'Talent Directory', path: '/talent-directory', icon: Users },
        { name: 'AI Matcher', path: '/ai-matcher', icon: Zap },
        { name: 'Hire Now', path: '/hire-now', icon: Briefcase },
        { name: 'Post a Job', path: '/post-job', icon: FileText },
      ]
    },
    {
      name: 'Marketplace',
      path: '/marketplace',
      icon: ShoppingCart,
      children: [
        { name: 'Equipment', path: '/equipment', icon: Wrench },
        { name: 'Categories', path: '/categories', icon: Settings },
        { name: 'Featured', path: '/featured', icon: Star },
        { name: 'Deals', path: '/deals', icon: Zap },
      ]
    },
    {
      name: 'Company',
      path: '/company',
      icon: Building,
      children: [
        { name: 'About Us', path: '/about', icon: Building },
        { name: 'Careers', path: '/careers', icon: Briefcase },
        { name: 'Partners', path: '/partners', icon: Users },
        { name: 'Press', path: '/press', icon: FileText },
      ]
    },
    {
      name: 'Resources',
      path: '/resources',
      icon: FileText,
      children: [
        { name: 'Blog', path: '/blog', icon: FileText },
        { name: 'Documentation', path: '/docs', icon: Code },
        { name: 'API Reference', path: '/api', icon: Code },
        { name: 'Tutorials', path: '/tutorials', icon: Code },
        { name: 'Case Studies', path: '/case-studies', icon: FileText },
      ]
    },
    {
      name: 'Support',
      path: '/support',
      icon: HelpCircle,
      children: [
        { name: 'Help Center', path: '/help-center', icon: HelpCircle },
        { name: 'FAQ', path: '/faq', icon: HelpCircle },
        { name: 'Contact', path: '/contact', icon: MessageSquare },
        { name: 'Live Chat', path: '/chat', icon: MessageSquare },
        { name: 'Status', path: '/status', icon: BarChart3 },
      ]
    },
    {
      name: 'Analytics',
      path: '/analytics',
      icon: BarChart3
    }
  ];

  const toggleItem = (itemName: string) => {
    setExpandedItems(prev => 
      prev.includes(itemName) 
        ? prev.filter(name => name !== itemName)
        : [...prev, itemName]
    );
  };

  const isActive = (path: string) => location.pathname === path;

  const renderSidebarItem = (item: SidebarItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.includes(item.name);
    const isItemActive = isActive(item.path);

    return (
      <div key={item.name}>
        <div className={`flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
          isItemActive 
            ? 'bg-zion-blue text-white' 
            : 'text-gray-700 hover:bg-gray-100'
        }`}>
          <Link
            to={item.path}
            className={`flex items-center space-x-3 flex-1 ${
              level > 0 ? 'ml-4' : ''
            }`}
          >
            <item.icon className={`h-5 w-5 ${
              isItemActive ? 'text-white' : 'text-gray-500'
            }`} />
            <span className="font-medium">{item.name}</span>
          </Link>
          
          {hasChildren && (
            <button
              onClick={() => toggleItem(item.name)}
              className={`p-1 rounded transition-colors ${
                isItemActive 
                  ? 'text-white hover:bg-white/20' 
                  : 'text-gray-500 hover:bg-gray-200'
              }`}
            >
              {isExpanded ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </button>
          )}
        </div>

        {/* Render children */}
        {hasChildren && isExpanded && (
          <div className="ml-4 mt-2 space-y-1">
            {item.children!.map(child => renderSidebarItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen overflow-y-auto">
      <div className="p-4">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900">Navigation</h2>
        </div>
        
        <nav className="space-y-2">
          {sidebarItems.map(item => renderSidebarItem(item))}
        </nav>

        {/* Quick Actions */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-600 mb-3">Quick Actions</h3>
          <div className="space-y-2">
            <Link
              to="/request-quote"
              className="flex items-center space-x-3 px-4 py-3 bg-zion-blue text-white rounded-lg hover:bg-zion-blue/90 transition-colors"
            >
              <MessageSquare className="h-5 w-5" />
              <span className="font-medium">Request Quote</span>
            </Link>
            
            <Link
              to="/contact"
              className="flex items-center space-x-3 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <HelpCircle className="h-5 w-5" />
              <span className="font-medium">Get Help</span>
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}

// Star icon component for the Featured item
function Star({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}