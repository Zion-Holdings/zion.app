import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreadcrumbProps {
  className?: string;
}

export function Breadcrumb({ className }: BreadcrumbProps) {
  const location = useLocation();
  
  const generateBreadcrumbs = () => {
    const pathnames = location.pathname.split('/').filter((x) => x);
    const breadcrumbs = pathnames.map((name, index) => {
      const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
      const isLast = index === pathnames.length - 1;
      
      // Convert kebab-case to Title Case
      const displayName = name
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      return {
        name: displayName,
        path: routeTo,
        isLast
      };
    });
    
    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();
  
  if (breadcrumbs.length === 0) {
    return null;
  }

  return (
    <nav className={cn("flex items-center space-x-2 text-sm text-zion-slate-light", className)}>
      <Link 
        to="/" 
        className="flex items-center hover:text-zion-cyan transition-colors"
      >
        <Home className="w-4 h-4" />
        <span className="sr-only">Home</span>
      </Link>
      
      {breadcrumbs.map((breadcrumb, index) => (
        <div key={breadcrumb.path} className="flex items-center space-x-2">
          <ChevronRight className="w-4 h-4 text-zion-slate-light" />
          {breadcrumb.isLast ? (
            <span className="text-zion-cyan font-medium">{breadcrumb.name}</span>
          ) : (
            <Link
              to={breadcrumb.path}
              className="hover:text-zion-cyan transition-colors"
            >
              {breadcrumb.name}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}