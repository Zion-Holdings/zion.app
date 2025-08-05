import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ChevronRight, Home, MapPin } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
  icon?: React.ComponentType<{ className?: string }>
}

const ModernBreadcrumbNavigation: React.FC = () => {
  const router = useRouter()
  const [breadcrumbs, setBreadcrumbs] = React.useState<BreadcrumbItem[]>([])

  React.useEffect(() => {
    const generateBreadcrumbs = () => {
      const pathSegments = router.asPath.split('/').filter(segment => segment !== '')
      const breadcrumbItems: BreadcrumbItem[] = [
        {
          label: 'Home',
          href: '/',
          icon: Home
        }
      ]

      let currentPath = ''
      pathSegments.forEach((segment, index) => {
        currentPath += `/${segment}`
        
        // Convert segment to readable label
        const label = segment
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')

        breadcrumbItems.push({
          label,
          href: index === pathSegments.length - 1 ? undefined : currentPath,
          icon: index === pathSegments.length - 1 ? MapPin : undefined
        })
      })

      setBreadcrumbs(breadcrumbItems)
    }

    generateBreadcrumbs()
  }, [router.asPath])

  if (breadcrumbs.length <= 1) return null

  return (
    <nav className="flex items-center space-x-2 text-sm" aria-label="Breadcrumb">
      {breadcrumbs.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <ChevronRight className="w-4 h-4 text-gray-400" />
          )}
          
          {item.href ? (
            <Link
              href={item.href}
              className="flex items-center space-x-1 text-gray-400 hover:text-neon-blue transition-colors group"
            >
              {item.icon && <item.icon className="w-3 h-3" />}
              <span className="group-hover:underline">{item.label}</span>
            </Link>
          ) : (
            <span className="flex items-center space-x-1 text-white">
              {item.icon && <item.icon className="w-3 h-3" />}
              <span className="font-medium">{item.label}</span>
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  )
}

export default ModernBreadcrumbNavigation 