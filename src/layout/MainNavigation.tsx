
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { MessageSquare, Sparkles, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

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

  const baseLinks = [
    {
      key: 'home',
      href: '/',
      matches: (path: string) => path === '/' || path === '/home',
      icon: <Sparkles className="w-4 h-4" />
    },
    {
      key: 'marketplace',
      href: '/marketplace',
      matches: (path: string) => path.startsWith('/marketplace'),
      icon: <Zap className="w-4 h-4" />
    },
    {
      key: 'services',
      href: '/services',
      matches: (path: string) => path.startsWith('/services'),
      icon: <Zap className="w-4 h-4" />
    },
    {
      key: 'equipment',
      href: '/equipment',
      matches: (path: string) => path.startsWith('/equipment'),
      icon: <Zap className="w-4 h-4" />
    },
    {
      key: 'categories',
      href: '/categories',
      matches: (path: string) => path.startsWith('/categories'),
      icon: <Zap className="w-4 h-4" />
    },
    {
      key: 'talent',
      href: '/talent',
      matches: (path: string) => path.startsWith('/talent') && !path.includes('/talent-dashboard'),
      icon: <Zap className="w-4 h-4" />
    },
    {
      key: 'community',
      href: '/community',
      matches: (path: string) => path.startsWith('/community') || path.startsWith('/forum'),
      icon: <Zap className="w-4 h-4" />
    },
    {
      key: 'about',
      href: '/about',
      matches: (path: string) => path.startsWith('/about'),
      icon: <Zap className="w-4 h-4" />
    },
    {
      key: 'blog',
      href: '/blog',
      matches: (path: string) => path.startsWith('/blog'),
      icon: <Zap className="w-4 h-4" />
    },
    {
      key: 'contact',
      href: '/contact',
      matches: (path: string) => path.startsWith('/contact'),
      icon: <Zap className="w-4 h-4" />
    }
  ];

  let links = baseLinks.map(link => ({ ...link, name: t(`nav.${link.key}`) }));
  
  // Add authenticated-only links
  if (isAuthenticated) {
    links.push({
      key: 'dashboard',
      name: t('nav.dashboard'),
      href: '/dashboard',
      matches: (path: string) => path === '/dashboard' || path === '/client-dashboard' || path === '/talent-dashboard',
      icon: <Zap className="w-4 h-4" />
    });
  }
  
  // Add admin-only links
  if (isAdmin) {
    links.push({
      key: 'analytics',
      name: t('nav.analytics'),
      href: '/analytics',
      matches: (path: string) => path.startsWith('/analytics'),
      icon: <Zap className="w-4 h-4" />
    });
  }

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };
  
  return (
    <motion.nav 
      className={cn("navbar ml-6 hidden md:flex", className)}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <ul className="flex items-center gap-2">
        {links.map((link) => (
          <motion.li key={link.name} variants={itemVariants}>
            <Link
              to={link.href}
              className={cn(
                "inline-flex h-10 items-center justify-center rounded-xl px-5 text-sm font-medium transition-all duration-500 relative group overflow-hidden",
                link.matches(location.pathname)
                  ? "bg-gradient-to-r from-zion-purple/30 via-zion-purple/20 to-zion-cyan/30 text-zion-cyan shadow-2xl shadow-zion-purple/30 border border-zion-purple/40"
                  : "text-white hover:bg-gradient-to-r hover:from-zion-purple/20 hover:via-zion-purple/10 hover:to-zion-cyan/20 hover:text-zion-cyan hover:shadow-xl hover:shadow-zion-purple/20 hover:border hover:border-zion-purple/30"
              )}
            >
              {/* Icon with animation */}
              <motion.div 
                className="mr-2 opacity-70 group-hover:opacity-100"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                {link.icon}
              </motion.div>
              
              {link.name}
              
              {/* Active indicator */}
              {link.matches(location.pathname) && (
                <motion.div 
                  className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              )}
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-zion-cyan/0 via-zion-cyan/10 to-zion-cyan/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Ripple effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-zion-purple/0 via-zion-purple/5 to-zion-purple/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-0 group-hover:scale-100 transition-transform duration-500"></div>
            </Link>
          </motion.li>
        ))}
        
        {/* Enhanced Messages link with unread counter */}
        {isAuthenticated && (
          <motion.li variants={itemVariants}>
            <Link
              to="/messages"
              className={cn(
                "inline-flex h-10 items-center justify-center rounded-xl px-5 text-sm font-medium transition-all duration-500 relative group overflow-hidden",
                location.pathname === "/messages" || location.pathname === "/inbox"
                  ? "bg-gradient-to-r from-zion-purple/30 via-zion-purple/20 to-zion-cyan/30 text-zion-cyan shadow-2xl shadow-zion-purple/30 border border-zion-purple/40"
                  : "text-white hover:bg-gradient-to-r hover:from-zion-purple/20 hover:via-zion-purple/10 hover:to-zion-cyan/20 hover:text-zion-cyan hover:shadow-xl hover:shadow-zion-purple/20 hover:border hover:border-zion-purple/30"
              )}
            >
              <motion.div 
                className="mr-2"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <MessageSquare className="w-4 h-4" />
              </motion.div>
              
              {t('nav.messages')}
              
              {/* Enhanced unread counter */}
              {unreadCount > 0 && (
                <motion.span 
                  className="absolute -top-2 -right-2 bg-gradient-to-r from-zion-purple via-zion-cyan to-zion-purple text-white text-xs rounded-full h-6 w-6 flex items-center justify-center shadow-2xl shadow-zion-cyan/40 border-2 border-zion-blue-dark"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
                >
                  {unreadCount}
                </motion.span>
              )}
              
              {/* Active indicator */}
              {(location.pathname === "/messages" || location.pathname === "/inbox") && (
                <motion.div 
                  className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              )}
              
              {/* Hover effects */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-zion-cyan/0 via-zion-cyan/10 to-zion-cyan/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-zion-purple/0 via-zion-purple/5 to-zion-purple/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-0 group-hover:scale-100 transition-transform duration-500"></div>
            </Link>
          </motion.li>
        )}
      </ul>
    </motion.nav>
  );
}
