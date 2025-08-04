import React from 'react'
import Footer from '../ui/Footer'
import Header from '../ui/Header'
import BreadcrumbNavigation from '../ui/BreadcrumbNavigation'
import NavigationProgress from '../ui/NavigationProgress'
import QuickNavigation from '../ui/QuickNavigation'

interface PageLayoutProps {
  children: React.ReactNode
  transparent?: boolean
  containerClass?: string
  mainClass?: string
}

const PageLayout: React.FC<PageLayoutProps> = ({ 
  children, 
  transparent = false,
  containerClass = 'container-responsive',
  mainClass = ''
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <main className={`pt-16 ${mainClass}`}>
        <div className={containerClass}>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default PageLayout 