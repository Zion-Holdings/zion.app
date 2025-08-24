import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface BreadcrumbItem {
  label: string;
  href: string;
  isCurrent?: boolean;
}

export default function Breadcrumbs() {
  const router = useRouter();
  
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = router.asPath.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Home', href: '/' }
    ];

    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      
      // Convert segment to readable label
      let label = segment;
      if (segment === 'reports') label = 'Reports';
      else if (segment === 'automation') label = 'Automation';
      else if (segment === 'explore') label = 'Explore';
      else if (segment === 'components') label = 'Components';
      else if (segment === 'newsroom') label = 'Newsroom';
      else if (segment === 'main') label = 'Main';
      else if (segment === 'front') label = 'Front';
      else if (segment === 'services') label = 'Services';
      else if (segment === 'updates') label = 'Updates';
      else if (segment === 'insights') label = 'Insights';
      else if (segment === 'dossiers') label = 'Dossiers';
      else if (segment === 'tutorials') label = 'Tutorials';
      else if (segment === 'whitepapers') label = 'Whitepapers';
      else if (segment === 'blueprints') label = 'Blueprints';
      else if (segment === 'playbooks') label = 'Playbooks';
      else if (segment === 'patterns') label = 'Patterns';
      else if (segment === 'innovations') label = 'Innovations';
      else if (segment === 'guides') label = 'Guides';
      else if (segment === 'cases') label = 'Case Studies';
      else {
        // Capitalize first letter and replace hyphens with spaces
        label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
      }

      breadcrumbs.push({
        label,
        href: currentPath,
        isCurrent: index === pathSegments.length - 1
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  if (breadcrumbs.length <= 1) return null;

  return (
    <nav className="flex items-center space-x-2 text-sm text-white/60 mb-6" aria-label="Breadcrumb">
      {breadcrumbs.map((breadcrumb, index) => (
        <React.Fragment key={breadcrumb.href}>
          {index > 0 && (
            <svg className="w-4 h-4 text-white/40" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          )}
          {breadcrumb.isCurrent ? (
            <span className="text-white font-medium" aria-current="page">
              {breadcrumb.label}
            </span>
          ) : (
            <Link 
              href={breadcrumb.href}
              className="hover:text-white transition-colors"
            >
              {breadcrumb.label}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}