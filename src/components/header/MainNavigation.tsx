
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
        aria-label="Home"
        className={({ isActive }) =>
          cn(
            "text-sm font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded",
            isActive ? "text-zion-cyan" : "text-muted-foreground"
          )
        }
      >
        Home
      </NavLink>
      <Link
        to="/talent"
        aria-label="Find Talent"
        className="text-zion-slate-light hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
      >
        Find Talent
      </Link>
      <Link
        to="/services"
        aria-label="Services"
        className="text-zion-slate-light hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
      >
        Services
      </Link>
      <Link
        to="/equipment"
        aria-label="Equipment"
        className="text-zion-slate-light hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
      >
        Equipment
      </Link>
      <Link
        to="/blog"
        aria-label="Blog"
        className="text-zion-slate-light hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
      >
        Blog
      </Link>
      <Link
        to="/categories"
        aria-label="Categories"
        className="text-zion-slate-light hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
      >
        Categories
      </Link>
      <Link
        to="/about"
        aria-label="About Us"
        className="text-zion-slate-light hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
      >
        About Us
      </Link>
      <NavLink
        to="/partners"
        aria-label="Partner Program"
        className={({ isActive }) =>
          cn(
            "text-sm font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded",
            isActive ? "text-zion-cyan" : "text-muted-foreground"
          )
        }
      >
        Partner Program
      </NavLink>
      <NavLink
        to="/signup"
        aria-label="Register"
        className={({ isActive }) =>
          cn(
            "text-sm font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded",
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
