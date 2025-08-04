import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useResponsive } from '../../hooks/useResponsive'

interface MobileNavigationProps {
  className?: string
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { isMobile } = useResponsive()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const navigationItems = [
    {
      title: 'Marketplace',
      href: '/marketplace',
      description: 'Browse services and products'
    },
    {
      title: 'Services',
      href: '/services',
      description: 'Explore our offerings'
    },
    {
      title: 'Talents',
      href: '/talents',
      description: 'Find AI experts'
    },
    {
      title: 'Equipment',
      href: '/equipment',
      description: 'High-performance hardware'
    },
    {
      title: 'Products',
      href: '/products',
      description: 'Innovation solutions'
    },
    {
      title: 'Blog',
      href: '/blog',
      description: 'Latest insights'
    }
  ]

  const quickActions = [
    {
      title: 'Login',
      href: '/auth/login',
      variant: 'secondary' as const
    },
    {
      title: 'Sign Up',
      href: '/auth/signup',
      variant: 'primary' as const
    }
  ]

  return (
    <div className={`lg:hidden ${className}`}>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white touch-target"
        aria-label="Toggle mobile menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-black/95 backdrop-blur-md border-l border-white/10 shadow-2xl">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <Link href="/" className="text-responsive-xl font-bold text-white" onClick={() => setIsOpen(false)}>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion</span>
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 touch-target"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Navigation Items */}
              <div className="flex-1 overflow-y-auto py-6">
                <nav className="space-y-1 px-6">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center px-3 py-3 rounded-lg text-responsive-base font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 touch-target"
                    >
                      <div className="flex-1">
                        <div className="text-white font-medium">{item.title}</div>
                        <div className="text-responsive-sm text-gray-400">{item.description}</div>
                      </div>
                      <ChevronDown className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Quick Actions */}
              <div className="p-6 border-t border-white/10 space-y-3">
                {quickActions.map((action) => (
                  <Link
                    key={action.href}
                    href={action.href}
                    onClick={() => setIsOpen(false)}
                    className={`block w-full px-4 py-3 rounded-lg text-responsive-base font-medium text-center transition-all duration-200 touch-target ${
                      action.variant === 'primary'
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-purple-500/25'
                        : 'border border-white/20 text-white hover:bg-white/10'
                    }`}
                  >
                    {action.title}
                  </Link>
                ))}
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-white/10">
                <div className="text-center">
                  <p className="text-responsive-xs text-gray-400">
                    &copy; 2024 Zion. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MobileNavigation 