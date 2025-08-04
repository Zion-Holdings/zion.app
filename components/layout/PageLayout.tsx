import React from 'react'
import Header from '../ui/Header'
import Footer from '../ui/Footer'

interface PageLayoutProps {
  children: React.ReactNode
  transparent?: boolean
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, transparent = false }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header transparent={transparent} />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default PageLayout 