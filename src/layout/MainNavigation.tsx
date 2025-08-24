
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { MessageSquare, ChevronDown, Brain, Shield, Cloud, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";

interface MainNavigationProps {
  isAdmin?: boolean;
  unreadCount?: number;
  className?: string;
}

export function MainNavigation({ isAdmin = false, unreadCount = 0, className }: MainNavigationProps) {
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const location = useLocation();
  const { t } = useTranslation();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const baseLinks = [
    {
      key: 'home',
      href: '/',
      matches: (path: string) => path === '/'
    },
    {
      key: 'marketplace',
      href: '/marketplace',
      matches: (path: string) => path.startsWith('/marketplace')
    },
    {
      key: 'categories',
      href: '/categories',
      matches: (path: string) => path.startsWith('/categories')
    },
    {
      key: 'talent',
      href: '/talent',
      matches: (path: string) => path.startsWith('/talent') && !path.includes('/talent-dashboard')
    },
    {
      key: 'equipment',
      href: '/equipment',
      matches: (path: string) => path.startsWith('/equipment')
    },
    {
      key: 'community',
      href: '/community',
      matches: (path: string) => path.startsWith('/community') || path.startsWith('/forum')
    }
  ];

  const serviceDropdowns = [
    {
      key: 'ai-services',
      label: 'AI Services',
      icon: <Brain className="h-4 w-4" />,
      items: [
        { name: 'AI Content Generator', href: '/ai-content-generator' },
        { name: 'AI Talent Matching', href: '/match' },
        { name: 'AI Model Training', href: '/ai-training' },
        { name: 'AI Chatbot Builder', href: '/chatbot-builder' },
        { name: 'AI-Powered Testing', href: '/ai-testing' },
        { name: 'AI Legal Assistant', href: '/legal-ai' },
        { name: 'AI Translation', href: '/ai-translation' },
        { name: 'AI Financial Advisor', href: '/financial-ai' },
        { name: 'AI Design Assistant', href: '/design-ai' }
      ]
    },
    {
      key: 'security',
      label: 'Security',
      icon: <Shield className="h-4 w-4" />,
      items: [
        { name: 'Cybersecurity Suite', href: '/cybersecurity-suite' },
        { name: 'Data Privacy Compliance', href: '/privacy-compliance' },
        { name: 'Security Audits', href: '/security-audits' },
        { name: 'Penetration Testing', href: '/penetration-testing' },
        { name: 'Compliance Reporting', href: '/compliance' }
      ]
    },
    {
      key: 'cloud-devops',
      label: 'Cloud & DevOps',
      icon: <Cloud className="h-4 w-4" />,
      items: [
        { name: 'Cloud Cost Optimizer', href: '/cloud-optimizer' },
        { name: 'DevOps Automation', href: '/devops-platform' },
        { name: 'API Gateway', href: '/api-gateway' },
        { name: 'Infrastructure as Code', href: '/infrastructure' },
        { name: 'Container Management', href: '/containers' }
      ]
    },
    {
      key: 'business-solutions',
      label: 'Business',
      icon: <Zap className="h-4 w-4" />,
      items: [
        { name: 'Data Analytics Platform', href: '/analytics-platform' },
        { name: 'Customer Success Platform', href: '/customer-success' },
        { name: 'AI-Powered HR Suite', href: '/hr-suite' },
        { name: 'Project Management', href: '/dashboard/projects' },
        { name: 'Enterprise Solutions', href: '/enterprise' }
      ]
    }
  ];

  let links = baseLinks.map(link => ({ ...link, name: t(`nav.${link.key}`) }));
  
  // Add authenticated-only links
  if (isAuthenticated) {
    links.push({
      key: 'dashboard',
      name: t('nav.dashboard'),
      href: '/dashboard',
      matches: (path: string) => path === '/dashboard' || path === '/client-dashboard' || path === '/talent-dashboard'
    });
  }
  
  // Add admin-only links
  if (isAdmin) {
    links.push({
      key: 'analytics',
      name: t('nav.analytics'),
      href: '/analytics',
      matches: (path: string) => path.startsWith('/analytics')
    });
  }

  const toggleDropdown = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  const isDropdownActive = (key: string) => activeDropdown === key;
  
  return (
    <nav className={cn("navbar ml-6 hidden lg:flex", className)} ref={dropdownRef}>
      <ul className="flex items-center gap-1">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              to={link.href}
              className={cn(
                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                link.matches(location.pathname)
                  ? "bg-zion-purple/20 text-zion-cyan"
                  : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
              )}
            >
              {link.name}
            </Link>
          </li>
        ))}

        {/* Service Dropdowns */}
        {serviceDropdowns.map((dropdown) => (
          <li key={dropdown.key} className="relative">
            <button
              onClick={() => toggleDropdown(dropdown.key)}
              className={cn(
                "inline-flex h-9 items-center gap-2 rounded-md px-4 text-sm font-medium transition-colors",
                isDropdownActive(dropdown.key)
                  ? "bg-zion-purple/20 text-zion-cyan"
                  : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
              )}
            >
              {dropdown.icon}
              {dropdown.label}
              <ChevronDown className={cn(
                "h-3 w-3 transition-transform duration-200",
                isDropdownActive(dropdown.key) ? "rotate-180" : ""
              )} />
            </button>

            {/* Dropdown Menu */}
            {isDropdownActive(dropdown.key) && (
              <div className="absolute top-full left-0 mt-1 w-64 bg-zion-slate border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 backdrop-blur-xl z-50">
                <div className="p-2">
                  {dropdown.items.map((item, index) => (
                    <Link
                      key={index}
                      to={item.href}
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-center gap-3 px-3 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded-md transition-colors"
                    >
                      {dropdown.icon}
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>
        ))}
        
        {/* Messages link with unread counter */}
        {isAuthenticated && (
          <li>
            <Link
              to="/messages"
              className={cn(
                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors relative",
                location.pathname === "/messages" || location.pathname === "/inbox"
                  ? "bg-zion-purple/20 text-zion-cyan"
                  : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
              )}
            >
              <MessageSquare className="w-4 h-4 mr-1" />
              {t('nav.messages')}
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
