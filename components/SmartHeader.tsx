import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useNavigation } from '../hooks/useNavigation';
import { NavigationItem } from '../types/navigation';

interface DropdownMenuProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ trigger, children, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <div className="cursor-pointer">
        {trigger}
      </div>
      {isOpen && (
        <div className={`absolute top-full left-0 mt-2 w-64 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-xl z-50 ${className}`}>
          <div className="py-2">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

const DropdownItem: React.FC<{ item: NavigationItem }> = ({ item }) => (
  <Link 
    href={item.href}
    className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
  >
    <div className="flex items-center justify-between">
      <span>{item.label}</span>
      {item.status && (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          item.status === 'active' ? 'bg-green-500/20 text-green-300' :
          item.status === 'beta' : 'bg-yellow-500/20 text-yellow-300' :
          'bg-blue-500/20 text-blue-300'
        }`}>
          {item.status}
        </span>
      )}
    </div>
  </Link>
);

export default function SmartHeader() {
  const { navigation, isLoading } = useNavigation();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Enhanced navigation items with proper working links
  const navItems = useMemo(() => {
    return [
      {
        id: 'home',
        label: '🏠 Home',
        href: '/',
        priority: 1
      },
      {
        id: 'services',
        label: '🚀 Services',
        href: '/services',
        priority: 2,
        children: [
          { id: 'ai-automation', label: 'AI-Powered Automation', href: '/services/ai-automation' },
          { id: 'enterprise-security', label: 'Enterprise Security', href: '/services/enterprise-security' },
          { id: 'cloud-infrastructure', label: 'Cloud Infrastructure', href: '/services/cloud-infrastructure' },
          { id: 'data-analytics', label: 'Data Analytics', href: '/services/data-analytics' },
          { id: 'digital-transformation', label: 'Digital Transformation', href: '/services/digital-transformation' },
          { id: 'machine-learning', label: 'Machine Learning', href: '/services/machine-learning' }
        ]
      },
      {
        id: 'solutions',
        label: '💡 Solutions',
        href: '/solutions',
        priority: 3,
        children: [
          { id: 'quantum-neural', label: 'Quantum Neural Networks', href: '/quantum-neural-network-platform' },
          { id: 'autonomous-ops', label: 'Autonomous Operations', href: '/autonomous-business-operations-platform' },
          { id: 'it-asset-management', label: 'IT Asset Management', href: '/ai-powered-it-asset-management' },
          { id: 'ai-research', label: 'AI Research Assistant', href: '/ai-autonomous-research-assistant' }
        ]
      },
      {
        id: 'products',
        label: '🛠️ Products',
        href: '/products',
        priority: 4,
        children: [
          { id: 'smart-crm', label: 'Smart CRM Suite', href: '/smart-crm-intelligence-suite' },
          { id: 'soc2-compliance', label: 'SOC2 Compliance', href: '/soc2-compliance-automation' },
          { id: 'startup-tools', label: 'Startup Tools', href: '/startup-tools' },
          { id: 'url-shortener', label: 'URL Shortener', href: '/url-shortener' }
        ]
      },
      {
        id: 'about',
        label: 'ℹ️ About',
        href: '/about',
        priority: 5
      },
      {
        id: 'contact',
        label: '📞 Contact',
        href: '/contact',
        priority: 6
      },
      {
        id: 'team',
        label: '👥 Team',
        href: '/team',
        priority: 7
      }
    ];
  }, []);

  const renderNavItem = (item: any) => {
    if (item.children) {
      return (
        <DropdownMenu
          key={item.id}
          trigger={
            <div className="flex items-center space-x-2 px-4 py-2 text-white/80 hover:text-white transition-colors">
              <span>{item.label}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          }
        >
          {item.children.map((child: any) => (
            <DropdownItem key={child.id} item={child} />
          ))}
        </DropdownMenu>
      );
    }

    return (
      <Link
        key={item.id}
        href={item.href}
        className="px-4 py-2 text-white/80 hover:text-white transition-colors"
      >
        {item.label}
      </Link>
    );
  };

  if (isLoading) {
    return (
      <header className="bg-black/50 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="w-32 h-8 bg-white/20 rounded animate-pulse"></div>
            <div className="hidden md:flex space-x-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-20 h-6 bg-white/20 rounded animate-pulse"></div>
              ))}
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="bg-black/50 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg"></div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map(renderNavItem)}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-2">
              {navItems.map(item => (
                <div key={item.id}>
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors rounded"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.children.map((child: any) => (
                        <Link
                          key={child.id}
                          href={child.href}
                          className="block px-4 py-2 text-white/60 hover:text-white/80 hover:bg-white/5 transition-colors rounded text-sm"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}