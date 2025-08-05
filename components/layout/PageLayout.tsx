import React from 'react'
import Sidebar from '../ui/Sidebar'
import { useRouter } from 'next/router'

interface PageLayoutProps {
  children: React.ReactNode
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const router = useRouter()

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="min-h-screen">
          {children}
        </div>
      </main>
    </div>
  )
}

export default PageLayout 