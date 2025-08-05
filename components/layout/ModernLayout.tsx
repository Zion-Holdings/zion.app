import React from 'react'
import ModernNavigation from '../ui/ModernNavigation'
import ModernFooter from '../ui/ModernFooter'
import ModernBreadcrumbNavigation from '../ui/ModernBreadcrumbNavigation'
import ModernQuickNavigation from '../ui/ModernQuickNavigation'
import ModernNavigationShortcuts from '../ui/ModernNavigationShortcuts'
import ModernNavigationProgress from '../ui/ModernNavigationProgress'
import { useHeaderTransparency } from '../../src/hooks/useHeaderTransparency'

interface ModernLayoutProps {
  children: React.ReactNode
  transparent?: boolean
  containerClass?: string
  mainClass?: string
  showBreadcrumbs?: boolean
  showQuickNavigation?: boolean
  showNavigationProgress?: boolean
  showNavigationShortcuts?: boolean
  footerVariant?: 'default' | 'minimal' | 'none'
}

const ModernLayout: React.FC<ModernLayoutProps> = ({
  children,
  transparent = false,
  containerClass = 'container-responsive',
  mainClass = '',
  showBreadcrumbs = true,
  showQuickNavigation = true,
  showNavigationProgress = true,
  showNavigationShortcuts = true,
  footerVariant = 'default'
}) => {
  // Set header transparency based on prop
  useHeaderTransparency(transparent)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      </div>

      {/* Navigation Progress */}
      {showNavigationProgress && <ModernNavigationProgress />}

      {/* Modern Navigation */}
      <ModernNavigation />

      {/* Main Content */}
      <main className={`relative pt-16 lg:pt-20 ${mainClass}`}>
        <div className={containerClass}>
          {/* Breadcrumb Navigation */}
          {showBreadcrumbs && (
            <div className="mb-6 pt-4">
              <ModernBreadcrumbNavigation />
            </div>
          )}

          {/* Page Content */}
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </main>

      {/* Quick Navigation */}
      {showQuickNavigation && <ModernQuickNavigation />}

      {/* Navigation Shortcuts */}
      {showNavigationShortcuts && <ModernNavigationShortcuts />}

      {/* Footer */}
      {footerVariant !== 'none' && (
        <ModernFooter variant={footerVariant} />
      )}
    </div>
  )
}

export default ModernLayout 