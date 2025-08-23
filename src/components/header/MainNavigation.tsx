import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { cn } from "@/lib/utils";

interface MainNavigationProps {
  className?: string;
}

export function MainNavigation({ className }: MainNavigationProps) {
  const router = useRouter();

  const navLinks = [
    { href: "/", label: "Home", exact: true },
    { href: "/talent", label: "Find Talent" },
    { href: "/services", label: "Services" },
    { href: "/equipment", label: "Equipment" },
    { href: "/blog", label: "Blog" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/categories", label: "Categories" },
    { href: "/timeos", label: "TimeOS" },
    { href: "/about", label: "About Us" },
    { href: "/partners", label: "Partner Program", exact: true },
    { href: "/signup", label: "Register", exact: true, isButton: true },
  ];

  return (
    <nav className={cn("hidden md:flex items-center space-x-6", className)}>
      {navLinks.map(({ href, label, exact, isButton }) => {
        const isActive = exact ? router.pathname === href : router.pathname.startsWith(href);
        return (
          <Link 
            key={href} 
            href={href}
            aria-label={label}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded",
              isActive ? "text-zion-cyan" : "text-muted-foreground",
              isButton && "bg-zion-purple px-4 py-2 rounded-md hover:bg-zion-purple-light text-white"
            )}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
