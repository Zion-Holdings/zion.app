import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
  isCurrent?: boolean
}

interface BreadcrumbNavigationProps {
  items?: BreadcrumbItem[]
  className?: string
}

const BreadcrumbNavigation: React.FC<BreadcrumbNavigationProps> = ({ 
  items, 
  className = '' 
}) => {
  const router = useRouter()
  
  // Auto-generate breadcrumbs from router path if no items provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = router.asPath.split('/').filter(Boolean)
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Home', href: '/' }
    ]
    
    let currentPath = ''
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`
      const label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
      
      breadcrumbs.push({
        label,
        href: index === pathSegments.length - 1 ? undefined : currentPath,
        isCurrent: index === pathSegments.length - 1
      })
    })
    
    return breadcrumbs
  }
  
  const breadcrumbItems = items || generateBreadcrumbs()
  
  if (breadcrumbItems.length <= 1) return null
  
  return (
    <nav 
      className={`flex items-center space-x-2 text-responsive-sm ${className}`}
      aria-label="Breadcrumb"
    >
      {breadcrumbItems.map((item, index) => (
        <React.Fragment key={index}>
          {index === 0 ? (
            <Link
              href={item.href || '/'}
              className="flex items-center text-gray-400 hover:text-white transition-colors touch-target"
              aria-label="Go to home page"
            >
              <Home className="h-4 w-4" />
            </Link>
          ) : (
            <div className="flex items-center space-x-2">
              <ChevronRight className="h-4 w-4 text-gray-500" />
              {item.isCurrent ? (
                <span className="text-white font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href || '#'}
                  className="text-gray-400 hover:text-white transition-colors touch-target"
                >
                  {item.label}
                </Link>
              )}
            </div>
          )}
        </React.Fragment>
      ))}
    </nav>
  )
}

export default BreadcrumbNavigation 