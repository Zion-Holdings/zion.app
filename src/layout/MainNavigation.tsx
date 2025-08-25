
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
<<<<<<< HEAD
// useAuth hook removed - not available
=======
import { useAuth } from "@/hooks/useAuth";
>>>>>>> cursor/integrate-build-improve-and-re-verify-a776
import { MessageSquare, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";

interface MainNavigationProps {
  isAdmin?: boolean;
  unreadCount?: number;
  className?: string;
}

export function MainNavigation({ isAdmin = false, unreadCount = 0, className }: MainNavigationProps) {
<<<<<<< HEAD
  // Authentication removed - not available
  const isAuthenticated = false;
=======
  const { user } = useAuth();
  const isAuthenticated = !!user;
>>>>>>> cursor/integrate-build-improve-and-re-verify-a776
  const location = useLocation();
  const { t } = useTranslation();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const baseLinks = [
    {
      key: 'home',
      href: '/',
<<<<<<< HEAD
=======
      name: 'Home',
>>>>>>> cursor/integrate-build-improve-and-re-verify-a776
      matches: (path: string) => path === '/'
    },
    {
      key: 'services',
      href: '/services',
<<<<<<< HEAD
      matches: (path: string) => path.startsWith('/services'),
      hasDropdown: true,
      dropdownItems: [
        { href: '/services/ai-autonomous-systems', label: 'AI & Autonomous Systems' },
        { href: '/services/quantum-technology', label: 'Quantum Technology' },
        { href: '/services/it-infrastructure', label: 'IT Infrastructure' },
        { href: '/services/micro-saas-solutions', label: 'Micro SAAS Solutions' },
        { href: '/services/cybersecurity', label: 'Cybersecurity' },
        { href: '/services/industry-solutions', label: 'Industry Solutions' }
      ]
    },
    {
      key: 'solutions',
      href: '/solutions',
      matches: (path: string) => path.startsWith('/solutions'),
      hasDropdown: true,
      dropdownItems: [
        { href: '/solutions/enterprise', label: 'Enterprise Solutions' },
        { href: '/solutions/healthcare', label: 'Healthcare Solutions' },
        { href: '/solutions/financial', label: 'Financial Solutions' },
        { href: '/solutions/manufacturing', label: 'Manufacturing Solutions' },
        { href: '/solutions/retail', label: 'Retail Solutions' },
        { href: '/solutions/government', label: 'Government Solutions' }
      ]
=======
      name: 'Services',
      matches: (path: string) => path.startsWith('/services')
>>>>>>> cursor/integrate-build-improve-and-re-verify-a776
    },
    {
      key: 'marketplace',
      href: '/marketplace',
<<<<<<< HEAD
      matches: (path: string) => path.startsWith('/marketplace')
=======
      name: 'Marketplace',
      matches: (path: string) => path.startsWith('/marketplace'),
      dropdown: [
        { href: '/marketplace', label: 'All Products' },
        { href: '/categories', label: 'Categories' },
        { href: '/equipment', label: 'Equipment' },
        { href: '/green-it', label: 'Green IT' }
      ]
>>>>>>> cursor/integrate-build-improve-and-re-verify-a776
    },
    {
      key: 'talent',
      href: '/talent',
<<<<<<< HEAD
      matches: (path: string) => path.startsWith('/talent') && !path.includes('/talent-dashboard')
    },
    {
      key: 'equipment',
      href: '/equipment',
      matches: (path: string) => path.startsWith('/equipment')
=======
      name: 'Talent',
      matches: (path: string) => path.startsWith('/talent') && !path.includes('/talent-dashboard'),
      dropdown: [
        { href: '/talent', label: 'Find Talent' },
        { href: '/talent/apply', label: 'Apply as Talent' },
        { href: '/zion-hire-ai', label: 'AI Hiring' }
      ]
>>>>>>> cursor/integrate-build-improve-and-re-verify-a776
    },
    {
      key: 'community',
      href: '/community',
<<<<<<< HEAD
      matches: (path: string) => path.startsWith('/community') || path.startsWith('/forum')
=======
      name: 'Community',
      matches: (path: string) => path.startsWith('/community') || path.startsWith('/forum'),
      dropdown: [
        { href: '/community', label: 'Forums' },
        { href: '/blog', label: 'Blog' },
        { href: '/partners', label: 'Partners' }
      ]
>>>>>>> cursor/integrate-build-improve-and-re-verify-a776
    },
    {
      key: 'about',
      href: '/about',
<<<<<<< HEAD
      matches: (path: string) => path.startsWith('/about') || path.startsWith('/mission') || path.startsWith('/team')
    },
    {
      key: 'resources',
      href: '/resources',
      matches: (path: string) => path.startsWith('/blog') || path.startsWith('/docs') || path.startsWith('/webinars'),
      hasDropdown: true,
      dropdownItems: [
        { href: '/blog', label: 'Blog & Articles' },
        { href: '/docs', label: 'Documentation' },
        { href: '/case-studies', label: 'Case Studies' },
        { href: '/white-papers', label: 'White Papers' },
        { href: '/webinars', label: 'Webinars' },
        { href: '/training', label: 'Training' }
      ]
    }
  ];

  let links = baseLinks.map(link => ({ ...link, name: t(`nav.${link.key}`) }));
=======
      name: 'About',
      matches: (path: string) => path.startsWith('/about') || path === '/careers' || path === '/contact'
    }
  ];

  let links = baseLinks;
>>>>>>> cursor/integrate-build-improve-and-re-verify-a776
  
  // Add authenticated-only links
  if (isAuthenticated) {
    links.push({
      key: 'dashboard',
<<<<<<< HEAD
      name: t('nav.dashboard'),
=======
      name: 'Dashboard',
>>>>>>> cursor/integrate-build-improve-and-re-verify-a776
      href: '/dashboard',
      matches: (path: string) => path === '/dashboard' || path === '/client-dashboard' || path === '/talent-dashboard'
    });
  }
  
  // Add admin-only links
  if (isAdmin) {
    links.push({
      key: 'analytics',
<<<<<<< HEAD
      name: t('nav.analytics'),
=======
      name: 'Analytics',
>>>>>>> cursor/integrate-build-improve-and-re-verify-a776
      href: '/analytics',
      matches: (path: string) => path.startsWith('/analytics')
    });
  }
  
<<<<<<< HEAD
=======
  const handleDropdownToggle = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  const handleDropdownClose = () => {
    setActiveDropdown(null);
  };
  
>>>>>>> cursor/integrate-build-improve-and-re-verify-a776
  return (
    <nav className={cn("navbar ml-6 hidden md:flex", className)}>
      <ul className="flex items-center gap-1">
        {links.map((link) => (
<<<<<<< HEAD
          <li key={link.name} className="relative">
            {link.hasDropdown ? (
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown(link.key)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
=======
          <li key={link.key} className="relative" onMouseLeave={handleDropdownClose}>
            {link.dropdown ? (
              <div className="relative">
                <button
                  onClick={() => handleDropdownToggle(link.key)}
                  onMouseEnter={() => setActiveDropdown(link.key)}
>>>>>>> cursor/integrate-build-improve-and-re-verify-a776
                  className={cn(
                    "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                    link.matches(location.pathname)
                      ? "bg-zion-purple/20 text-zion-cyan"
                      : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
                  )}
                >
                  {link.name}
<<<<<<< HEAD
                  <ChevronDown className="ml-1 h-3 w-3" />
                </button>
                
                {activeDropdown === link.key && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-zion-blue-dark border border-zion-purple/20 rounded-lg shadow-lg z-50">
                    <div className="py-2">
                      {link.dropdownItems?.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 transition-colors"
=======
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {activeDropdown === link.key && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-zion-blue-dark border border-zion-purple/20 rounded-md shadow-lg z-50">
                    <div className="py-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className="block px-4 py-2 text-sm text-white hover:bg-zion-purple/10 hover:text-zion-cyan transition-colors"
                          onClick={handleDropdownClose}
>>>>>>> cursor/integrate-build-improve-and-re-verify-a776
                        >
                          {item.label}
                        </Link>
                      ))}
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
<<<<<<< HEAD
              {t('nav.messages')}
=======
              Messages
>>>>>>> cursor/integrate-build-improve-and-re-verify-a776
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </Link>
          </li>
        )}
<<<<<<< HEAD
=======

        {/* Request Quote CTA */}
        <li>
          <Link
            to="/request-quote"
            className="inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium bg-zion-purple hover:bg-zion-purple/80 text-white transition-colors"
          >
            Get Quote
          </Link>
        </li>
>>>>>>> cursor/integrate-build-improve-and-re-verify-a776
      </ul>
    </nav>
  );
}
