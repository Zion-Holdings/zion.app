import React from 'react';
import Link from 'next/link'; // Changed from react-router-dom
import { useRouter } from 'next/router'; // Added for Next.js
import { cn } from '@/lib/utils';

export interface NavLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  activeClassName?: string; // Optional: for a more explicit active class
}

export function NavLink({ href, className, children, activeClassName }: NavLinkProps) {
  const router = useRouter();
  const isActive = router.pathname === href || router.asPath === href;

  // Combine base className, active state className, and passed className
  const combinedClassName = cn(
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zion-purple',
    className, // Original className passed in
    isActive && (activeClassName || 'border-b-2 border-green-500') // Use activeClassName if provided, else default
  );

  return (
    <Link href={href} legacyBehavior passHref>
      <a className={combinedClassName}>
        {children}
      </a>
    </Link>
  );
}

export default NavLink
