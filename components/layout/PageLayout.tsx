import React from 'react'
import Header from '../ui/Header'
import Footer from '../ui/Footer'

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
      <Header transparent={transparent} />
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