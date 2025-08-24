
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { MessageSquare, ChevronDown, Sparkles, Zap, Shield, Database, Cloud, Code, Users, HardDrive, Lightbulb } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";

interface MainNavigationProps {
  isAdmin?: boolean;
  unreadCount?: number;
  className?: string;
}

interface DropdownItem {
  key: string;
  name: string;
  href: string;
  description: string;
  icon: React.ReactNode;
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
      key: 'services',
      href: '/services',
      matches: (path: string) => path.startsWith('/services')
    },
    {
      key: 'ai-services',
      href: '/ai-services',
      matches: (path: string) => path.startsWith('/ai-services')
    },
    {
      key: 'it-services',
      href: '/it-services',
      matches: (path: string) => path.startsWith('/it-services')
    },
    {
      key: 'micro-saas',
      href: '/micro-saas',
      matches: (path: string) => path.startsWith('/micro-saas')
    },
    {
      key: 'marketplace',
      href: '/marketplace',
      matches: (path: string) => path.startsWith('/marketplace')
    },
    {
      key: 'services',
      href: '/services',
      matches: (path: string) => path.startsWith('/services') || path.startsWith('/category'),
      hasDropdown: true,
      dropdownItems: [
        {
          key: 'ai-services',
          name: 'AI & Machine Learning',
          href: '/category/ai-services',
          description: 'Custom AI development and ML solutions',
          icon: <Sparkles className="h-4 w-4" />
        },
        {
          key: 'cloud-services',
          name: 'Cloud & Infrastructure',
          href: '/category/cloud-services',
          description: 'Cloud migration and DevOps automation',
          icon: <Cloud className="h-4 w-4" />
        },
        {
          key: 'security-services',
          name: 'Cybersecurity',
          href: '/category/security-services',
          description: 'Security audits and compliance',
          icon: <Shield className="h-4 w-4" />
        },
        {
          key: 'data-services',
          name: 'Data & Analytics',
          href: '/category/data-services',
          description: 'Big data engineering and BI',
          icon: <Database className="h-4 w-4" />
        },
        {
          key: 'development-services',
          name: 'Development Services',
          href: '/category/development-services',
          description: 'Web, mobile, and API development',
          icon: <Code className="h-4 w-4" />
        },
        {
          key: 'it-services',
          name: 'IT Support & Management',
          href: '/category/it-services',
          description: 'IT consulting and managed services',
          icon: <Zap className="h-4 w-4" />
        }
      ]
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
      key: 'ai-assistant',
      href: '/zion-hire-ai',
      matches: (path: string) => path.startsWith('/zion-hire-ai') || path.startsWith('/hire-ai')
    },
    {
      key: 'community',
      href: '/community',
      matches: (path: string) => path.startsWith('/community') || path.startsWith('/forum')
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
  
  return (
    <nav className={cn("navbar ml-6 hidden lg:flex", className)} ref={dropdownRef}>
      <ul className="flex items-center gap-1">
        {links.map((link) => (
          <li key={link.name} className="relative">
            {link.hasDropdown ? (
              <div className="relative">
                <button
                  onClick={() => toggleDropdown(link.key)}
                  className={cn(
                    "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                    link.matches(location.pathname)
                      ? "bg-zion-purple/20 text-zion-cyan"
                      : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
                  )}
                >
                  {link.name}
                  <ChevronDown className={cn(
                    "ml-1 h-4 w-4 transition-transform",
                    activeDropdown === link.key ? "rotate-180" : ""
                  )} />
                </button>
                
                {/* Dropdown Menu */}
                {activeDropdown === link.key && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark/95 border border-zion-purple/30 rounded-xl shadow-2xl shadow-zion-purple/20 backdrop-blur-xl z-50">
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-2">
                        {link.dropdownItems?.map((item: DropdownItem) => (
                          <Link
                            key={item.key}
                            to={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-zion-purple/20 transition-colors group"
                          >
                            <div className="flex-shrink-0 w-8 h-8 bg-zion-purple/20 rounded-lg flex items-center justify-center group-hover:bg-zion-purple/30 transition-colors">
                              {item.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-white font-medium text-sm group-hover:text-zion-cyan transition-colors">
                                {item.name}
                              </h4>
                              <p className="text-zion-slate-light text-xs mt-1 leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                      
                      {/* View All Services Link */}
                      <div className="mt-4 pt-4 border-t border-zion-purple/20">
                        <Link
                          to="/services"
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-cyan hover:text-white rounded-lg transition-colors text-sm font-medium"
                        >
                          View All Services
                          <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
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
