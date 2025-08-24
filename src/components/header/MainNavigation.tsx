
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";

interface MainNavigationProps {
  className?: string;
}

export function MainNavigation({ className }: MainNavigationProps) {
  return (
    <nav className={cn("hidden md:flex items-center space-x-6", className)}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          cn(
            "text-sm font-medium transition-colors hover:text-primary",
            isActive ? "text-zion-cyan" : "text-muted-foreground"
          )
        }
      >
        Home
      </NavLink>
      <Link to="/talent" className="text-zion-slate-light hover:text-white transition-colors">
        Find Talent
      </Link>
      <div className="relative group">
        <button className="text-zion-slate-light hover:text-white transition-colors flex items-center gap-1">
          Services
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div className="absolute top-full left-0 mt-2 w-64 bg-zion-blue-dark border border-zion-blue-light rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
          <div className="p-4 space-y-2">
            <Link to="/services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors py-2 px-3 rounded hover:bg-zion-blue-light/20">
              All Services
            </Link>
            <Link to="/micro-saas-services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors py-2 px-3 rounded hover:bg-zion-blue-light/20">
              Micro SAAS Services
            </Link>
            <Link to="/ai-services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors py-2 px-3 rounded hover:bg-zion-blue-light/20">
              AI Services
            </Link>
            <Link to="/it-services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors py-2 px-3 rounded hover:bg-zion-blue-light/20">
              IT Services
            </Link>
            <Link to="/it-onsite-services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors py-2 px-3 rounded hover:bg-zion-blue-light/20">
              Onsite IT Services
            </Link>
          </div>
        </div>
      </div>
      <Link to="/equipment" className="text-zion-slate-light hover:text-white transition-colors">
        Equipment
      </Link>
      <Link to="/blog" className="text-zion-slate-light hover:text-white transition-colors">
        Blog
      </Link>
      <Link to="/categories" className="text-zion-slate-light hover:text-white transition-colors">
        Categories
      </Link>
      <Link to="/about" className="text-zion-slate-light hover:text-white transition-colors">
        About Us
      </Link>
      <NavLink
        to="/partners"
        className={({ isActive }) =>
          cn(
            "text-sm font-medium transition-colors hover:text-primary",
            isActive ? "text-zion-cyan" : "text-muted-foreground"
          )
        }
      >
        Partner Program
      </NavLink>
      <NavLink
        to="/signup"
        className={({ isActive }) =>
          cn(
            "text-sm font-medium transition-colors hover:text-primary",
            isActive ? "text-zion-cyan" : "text-muted-foreground",
            "bg-zion-purple px-4 py-2 rounded-md hover:bg-zion-purple-light"
          )
        }
      >
        Register
      </NavLink>
    </nav>
  );
}
