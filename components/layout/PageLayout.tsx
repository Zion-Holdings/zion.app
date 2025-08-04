import React from 'react'
import Header from '../ui/Header'
import Footer from '../ui/Footer'
import BreadcrumbNavigation from '../ui/BreadcrumbNavigation'
import QuickNavigation from '../ui/QuickNavigation'
import NavigationShortcuts from '../ui/NavigationShortcuts'
import NavigationProgress from '../ui/NavigationProgress'
import { useHeaderTransparency } from '../../src/hooks/useHeaderTransparency'

interface PageLayoutProps {
  children: React.ReactNode
  transparent?: boolean
  containerClass?: string
  mainClass?: string
  showBreadcrumbs?: boolean
  showQuickNavigation?: boolean
}

const PageLayout: React.FC<PageLayoutProps> = ({ 
  children, 
  transparent = false,
  containerClass = 'container-responsive',
  mainClass = '',
  showBreadcrumbs = true,
  showQuickNavigation = true
}) => {
  // Set header transparency based on prop
  useHeaderTransparency(transparent)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <NavigationProgress />
      <Header />
      
      <main className={`pt-16 ${mainClass}`}>
        <div className={containerClass}>
          {showBreadcrumbs && (
            <div className="mb-6 pt-4">
              <BreadcrumbNavigation />
            </div>
          )}
          {children}
        </div>
      </main>
      
      {showQuickNavigation && <QuickNavigation />}
      <NavigationShortcuts />
      <Footer />
    </div>
  )
}

export default PageLayout 