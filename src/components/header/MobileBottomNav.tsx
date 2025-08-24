
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Home, 
  Search, 
  Briefcase, 
  Users, 
  User 
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

export function MobileBottomNav() {
  const location = useLocation();
  const { user } = useAuth();

  const navItems = [
    {
      path: "/",
      icon: Home,
      label: "Home",
      active: location.pathname === "/"
    },
    {
      path: "/marketplace",
      icon: Search,
      label: "Search",
      active: location.pathname.startsWith("/marketplace") || location.pathname.startsWith("/search")
    },
    {
      path: "/services",
      icon: Briefcase,
      label: "Services",
      active: location.pathname.startsWith("/services")
    },
    {
      path: "/talent",
      icon: Users,
      label: "Talent",
      active: location.pathname.startsWith("/talent")
    },
    {
      path: user ? "/dashboard" : "/login",
      icon: User,
      label: user ? "Profile" : "Login",
      active: location.pathname.startsWith("/dashboard") || location.pathname.startsWith("/login")
    }
  ];

  return (
    <motion.nav
      className="fixed bottom-0 left-0 right-0 z-50 bg-zion-blue-dark/95 backdrop-blur-md border-t border-zion-purple/20 md:hidden"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="flex items-center justify-around px-2 py-3">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.path}
              className="relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={item.path}
                className={`flex flex-col items-center justify-center w-16 h-16 rounded-xl transition-all duration-300 ${
                  item.active 
                    ? "text-zion-cyan bg-zion-blue/20" 
                    : "text-zion-slate-light hover:text-zion-cyan hover:bg-zion-blue/10"
                }`}
              >
                {/* Active indicator */}
                {item.active && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-xl border border-zion-cyan/30"
                    layoutId="activeTab"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                
                <div className="relative z-10">
                  <Icon className={`h-5 w-5 mb-1 ${item.active ? "text-zion-cyan" : ""}`} />
                  <span className={`text-xs font-medium ${item.active ? "text-zion-cyan" : ""}`}>
                    {item.label}
                  </span>
                </div>
                
                {/* Pulse effect for active items */}
                {item.active && (
                  <motion.div
                    className="absolute inset-0 rounded-xl border border-zion-cyan/50"
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                )}
              </Link>
            </motion.div>
          );
        })}
      </div>
      
      {/* Safe area for devices with home indicators */}
      <div className="h-1 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan opacity-30" />
    </motion.nav>
  );
}
