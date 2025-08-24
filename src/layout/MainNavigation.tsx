
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

interface MainNavigationProps {
  className?: string;
}

export function MainNavigation({ className }: MainNavigationProps) {
  const location = useLocation();
  const { t } = useTranslation();

  const baseLinks = [
    {
      key: 'home',
      href: '/',
      matches: (path: string) => path === '/' || path === '/home'
    },
    {
      key: 'about',
      href: '/about',
      matches: (path: string) => path === '/about'
    },
    {
      key: 'services',
      href: '/services',
      matches: (path: string) => path.startsWith('/services')
    },
    {
      key: 'it-onsite-services',
      href: '/it-onsite-services',
      matches: (path: string) => path.startsWith('/it-onsite-services')
    },
    {
      key: 'marketplace',
      href: '/marketplace',
      matches: (path: string) => path.startsWith('/marketplace')
    },
    {
      key: 'micro-saas',
      href: '/micro-saas-services',
      matches: (path: string) => path.startsWith('/micro-saas-services')
    },
    {
      key: 'comprehensive-services',
      href: '/comprehensive-services',
      matches: (path: string) => path.startsWith('/comprehensive-services')
    },
    {
      key: 'ai-services',
      href: '/ai-services',
      matches: (path: string) => path.startsWith('/ai-services')
    },
    {
      key: 'enterprise-solutions',
      href: '/enterprise-solutions',
      matches: (path: string) => path.startsWith('/enterprise-solutions')
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

  let links = baseLinks.map(link => ({ ...link, name: t(`nav.${link.key}`) }));
  
  return (
    <nav className={cn("navbar ml-6 hidden md:flex", className)}>
      <ul className="flex items-center gap-1">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              to={link.href}
              className={cn(
                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-all duration-300 relative group",
                link.matches(location.pathname)
                  ? "bg-zion-purple/20 text-zion-cyan shadow-lg shadow-zion-cyan/20"
                  : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan hover:shadow-lg hover:shadow-zion-cyan/10"
              )}
            >
              {link.name}
              {link.matches(location.pathname) && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full"></div>
              )}
              <div className="absolute inset-0 rounded-md bg-gradient-to-r from-zion-cyan/0 via-zion-cyan/5 to-zion-cyan/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </li>
        ))}
        

      </ul>
    </nav>
  );
}
