import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path: string;
  icon?: React.ReactNode;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  showHome?: boolean;
  className?: string;
  separator?: React.ReactNode;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items = [],
  showHome = true,
  className = '',
  separator = <ChevronRight className="w-4 h-4 text-gray-400" />
}) => {
  const location = useLocation();
  
  // Generate breadcrumbs from current location if no items provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [];
    
    let currentPath = '';
    
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      
      // Convert segment to readable label
      const label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      breadcrumbs.push({
        label,
        path: currentPath
      });
    });
    
    return breadcrumbs;
  };

  const breadcrumbItems = items.length > 0 ? items : generateBreadcrumbs();

  if (breadcrumbItems.length === 0) {
    return null;
  }

  return (
    <nav 
      className={`flex items-center space-x-2 text-sm ${className}`}
      aria-label="Breadcrumb"
    >
      {/* Home Link */}
      {showHome && (
        <>
          <Link
            to="/"
            className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors duration-200"
            aria-label="Go to home page"
          >
            <Home className="w-4 h-4 mr-1" />
            Home
          </Link>
          {breadcrumbItems.length > 0 && separator}
        </>
      )}

      {/* Breadcrumb Items */}
      {breadcrumbItems.map((item, index) => {
        const isLast = index === breadcrumbItems.length - 1;
        const isCurrentPage = item.path === location.pathname;

        return (
          <React.Fragment key={item.path}>
            {index > 0 && separator}
            
            {isLast || isCurrentPage ? (
              // Current/Last item (not clickable)
              <span
                className={`flex items-center ${
                  isCurrentPage 
                    ? 'text-cyan-400 font-medium' 
                    : 'text-gray-300'
                }`}
                aria-current={isCurrentPage ? 'page' : undefined}
              >
                {item.icon && <span className="mr-1">{item.icon}</span>}
                {item.label}
              </span>
            ) : (
              // Clickable breadcrumb item
              <Link
                to={item.path}
                className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              >
                {item.icon && <span className="mr-1">{item.icon}</span>}
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

// Specialized breadcrumb for services
export const ServiceBreadcrumb: React.FC<{
  serviceName: string;
  category?: string;
  className?: string;
}> = ({ serviceName, category, className = '' }) => {
  const items: BreadcrumbItem[] = [
    { label: 'Services', path: '/services' }
  ];

  if (category) {
    items.push({ label: category, path: `/services#${category.toLowerCase().replace(/\s+/g, '-')}` });
  }

  items.push({ label: serviceName, path: '' });

  return <Breadcrumb items={items} className={className} />;
};

// Specialized breadcrumb for solutions
export const SolutionBreadcrumb: React.FC<{
  solutionName: string;
  industry?: string;
  className?: string;
}> = ({ solutionName, industry, className = '' }) => {
  const items: BreadcrumbItem[] = [
    { label: 'Solutions', path: '/solutions' }
  ];

  if (industry) {
    items.push({ label: industry, path: `/solutions#${industry.toLowerCase().replace(/\s+/g, '-')}` });
  }

  items.push({ label: solutionName, path: '' });

  return <Breadcrumb items={items} className={className} />;
};

// Specialized breadcrumb for blog posts
export const BlogBreadcrumb: React.FC<{
  postTitle: string;
  category?: string;
  className?: string;
}> = ({ postTitle, category, className = '' }) => {
  const items: BreadcrumbItem[] = [
    { label: 'Blog', path: '/blog' }
  ];

  if (category) {
    items.push({ label: category, path: `/blog?category=${encodeURIComponent(category)}` });
  }

  items.push({ label: postTitle, path: '' });

  return <Breadcrumb items={items} className={className} />;
};

export default Breadcrumb;