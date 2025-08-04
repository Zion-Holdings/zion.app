import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Search, Home, ShoppingCart, Users, Settings, Bell, User, LogOut } from 'lucide-react'
import SearchNavigation from './SearchNavigation'

interface EnhancedMobileNavigationProps {
  className?: string
}

const EnhancedMobileNavigation: React.FC<EnhancedMobileNavigationProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setActiveSection(null)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const navigationSections = [
    {
      id: 'marketplace',
      title: 'Marketplace',
      icon: ShoppingCart,
      items: [
        { label: 'Browse All', href: '/marketplace', description: 'Explore all marketplace items' },
        { label: 'Services', href: '/services', description: 'IT and professional services' },
        { label: 'Products', href: '/products', description: 'High-tech products and solutions' },
        { label: 'Equipment', href: '/equipment', description: 'Computing and hardware' },
        { label: 'Talents', href: '/talents', description: 'AI and tech professionals' }
      ]
    },
    {
      id: 'tools',
      title: 'Tools & Features',
      icon: Settings,
      items: [
        { label: 'AI Service Matcher', href: '/ai-service-matcher', description: 'Find perfect services with AI' },
        { label: 'Project Management', href: '/project-management', description: 'Manage your projects' },
        { label: 'Analytics Dashboard', href: '/analytics-dashboard', description: 'Business intelligence tools' },
        { label: 'Executive Dashboard', href: '/executive-dashboard', description: 'Executive overview and insights' },
        { label: 'Inbox', href: '/inbox', description: 'Manage communications' }
      ]
    },
    {
      id: 'ai-services',
      title: 'AI Services',
      icon: Users,
      items: [
        { label: 'AI Analytics', href: '/ai-powered-analytics', description: 'Advanced analytics with AI' },
        { label: 'AI Automation', href: '/ai-powered-automation', description: 'Automate workflows with AI' },
        { label: 'Data Analytics', href: '/ai-powered-data-analytics', description: 'Data-driven insights' },
        { label: 'Cybersecurity', href: '/ai-powered-security-cybersecurity', description: 'AI-powered security' }
      ]
    },
    {
      id: 'business',
      title: 'Business Tools',
      icon: Settings,
      items: [
        { label: 'Webhook Management', href: '/webhook-management', description: 'Manage webhooks' },
        { label: 'Workflow Designer', href: '/workflow-designer', description: 'Design workflows' },
        { label: 'Data Warehouse ETL', href: '/data-warehouse-etl', description: 'Data processing tools' },
        { label: 'Help Desk Support', href: '/help-desk-support', description: 'Customer support portal' }
      ]
    }
  ]

  const quickActions = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Search', href: '/search', icon: Search },
    { label: 'Notifications', href: '/notifications', icon: Bell },
    { label: 'Profile', href: '/profile', icon: User }
  ]

  const toggleSection = (sectionId: string) => {
    setActiveSection(activeSection === sectionId ? null : sectionId)
  }

  const handleNavigation = (href: string) => {
    setIsOpen(false)
    setActiveSection(null)
  }

  return (
    <div className={`lg:hidden ${className}`} ref={menuRef}>
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
                <Link href="/" className="text-responsive-xl font-bold text-white" onClick={() => handleNavigation('/')}>
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

              {/* Search Bar */}
              <div className="p-4 border-b border-white/10">
                <SearchNavigation placeholder="Search..." />
              </div>

              {/* Quick Actions */}
              <div className="p-4 border-b border-white/10">
                <h3 className="text-responsive-xs font-semibold text-purple-400 uppercase tracking-wide mb-3">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-2">
                  {quickActions.map((action) => (
                    <Link
                      key={action.href}
                      href={action.href}
                      onClick={() => handleNavigation(action.href)}
                      className="flex items-center space-x-2 p-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors touch-target"
                    >
                      <action.icon className="h-4 w-4" />
                      <span className="text-responsive-sm font-medium">{action.label}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Navigation Sections */}
              <div className="flex-1 overflow-y-auto">
                <div className="p-4 space-y-4">
                  {navigationSections.map((section) => (
                    <div key={section.id} className="space-y-2">
                      <button
                        onClick={() => toggleSection(section.id)}
                        className="flex items-center justify-between w-full p-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors touch-target"
                      >
                        <div className="flex items-center space-x-3">
                          <section.icon className="h-5 w-5" />
                          <span className="text-responsive-base font-medium">{section.title}</span>
                        </div>
                        <ChevronDown 
                          className={`h-4 w-4 transition-transform duration-200 ${
                            activeSection === section.id ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      {activeSection === section.id && (
                        <div className="ml-8 space-y-1">
                          {section.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => handleNavigation(item.href)}
                              className="block p-3 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors touch-target"
                            >
                              <div className="font-medium text-responsive-sm">{item.label}</div>
                              {item.description && (
                                <div className="text-xs text-gray-500 mt-1">{item.description}</div>
                              )}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-responsive-sm text-gray-400">Account</span>
                  <Link href="/auth/login" className="text-responsive-sm text-purple-400 hover:text-purple-300 touch-target">
                    Login
                  </Link>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-responsive-sm text-gray-400">Need Help?</span>
                  <Link href="/help-desk-support" className="text-responsive-sm text-purple-400 hover:text-purple-300 touch-target">
                    Support
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default EnhancedMobileNavigation 