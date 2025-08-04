import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, ChevronUp, Bell, User } from 'lucide-react'
import SearchNavigation from './SearchNavigation'
import { useHeader } from '../../src/contexts/HeaderContext'

interface DropdownItem {
  label: string
  href: string
  description?: string
}

interface DropdownMenu {
  label: string
  items: DropdownItem[]
}

const Header: React.FC = () => {
  const { isTransparent } = useHeader()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({})

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (isMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (activeDropdown && !target.closest('.dropdown-container')) {
        setActiveDropdown(null)
      }
    }

    if (activeDropdown) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [activeDropdown])

  const bgClass = isTransparent && !isScrolled ? 'bg-transparent' : 'bg-black/20 backdrop-blur-md'

  // Define dropdown menus
  const dropdownMenus: DropdownMenu[] = [
    {
      label: 'Marketplace',
      items: [
        { label: 'Browse All', href: '/marketplace', description: 'Explore all marketplace items' },
        { label: 'Services', href: '/services', description: 'IT and professional services' },
        { label: 'Products', href: '/products', description: 'High-tech products and solutions' },
        { label: 'Equipment', href: '/equipment', description: 'Computing and hardware' },
        { label: 'Talents', href: '/talents', description: 'AI and tech professionals' }
      ]
    },
    {
      label: 'Tools',
      items: [
        { label: 'AI Service Matcher', href: '/ai-service-matcher', description: 'Find perfect services with AI' },
        { label: 'Project Management', href: '/project-management', description: 'Manage your projects' },
        { label: 'Analytics Dashboard', href: '/analytics-dashboard', description: 'Business intelligence tools' },
        { label: 'Executive Dashboard', href: '/executive-dashboard', description: 'Executive overview and insights' },
        { label: 'Inbox', href: '/inbox', description: 'Manage communications' }
      ]
    },
    {
      label: 'Business',
      items: [
        { label: 'Payment Processing', href: '/payment-processing', description: 'Secure payment solutions' },
        { label: 'Escrow Services', href: '/escrow-services', description: 'Protected transactions' },
        { label: 'Warranty Protection', href: '/warranty-protection', description: 'Product protection plans' },
        { label: 'Invoice & Billing', href: '/invoice-billing', description: 'Financial management' },
        { label: 'Dispute Resolution', href: '/dispute-resolution', description: 'Conflict resolution services' }
      ]
    },
    {
      label: 'Support',
      items: [
        { label: 'Help Desk', href: '/help-desk-support', description: 'Customer support portal' },
        { label: 'Real-time Chat', href: '/real-time-chat', description: 'Live communication' },
        { label: 'Notifications', href: '/notifications', description: 'Stay updated' },
        { label: 'AI Customer Support', href: '/ai-powered-customer-support', description: 'AI-powered assistance' }
      ]
    }
  ]

  const toggleDropdown = (dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClass} border-b border-white/10 safe-area-top`}>
      <div className="container-responsive">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 touch-target">
              <h1 className="text-responsive-xl font-bold text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion</span>
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation - Dropdown Menus */}
          <nav className="hidden lg:flex items-center space-x-2 xl:space-x-4">
            {dropdownMenus.map((menu) => (
              <div key={menu.label} className="relative dropdown-container">
                <button
                  onClick={() => toggleDropdown(menu.label)}
                  className="flex items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-responsive-sm font-medium transition-colors touch-target"
                  ref={(el) => {
                    dropdownRefs.current[menu.label] = el
                  }}
                >
                  {menu.label}
                  {activeDropdown === menu.label ? (
                    <ChevronUp className="ml-1 h-4 w-4" />
                  ) : (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </button>
                
                {activeDropdown === menu.label && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-black/95 backdrop-blur-md border border-white/10 rounded-lg shadow-xl z-50">
                    <div className="py-2">
                      {menu.items.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className="font-medium text-responsive-sm">{item.label}</div>
                          {item.description && (
                            <div className="text-xs text-gray-400 mt-1">{item.description}</div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Direct Links */}
            <Link href="/blog" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-responsive-sm font-medium transition-colors touch-target">
              Blog
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-responsive-sm font-medium transition-colors touch-target">
              About
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-responsive-sm font-medium transition-colors touch-target">
              Contact
            </Link>
          </nav>

          {/* Search and Auth Buttons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Search */}
            <SearchNavigation className="hidden md:block" />
            
            {/* Notifications */}
            <Link href="/notifications" className="relative p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors touch-target">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
            </Link>
            
            {/* User Menu */}
            <Link href="/profile" className="hidden sm:flex items-center space-x-2 p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors touch-target">
              <User className="h-5 w-5" />
              <span className="text-responsive-sm font-medium">Profile</span>
            </Link>
            
            {/* Auth Buttons */}
            <Link href="/auth/login" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-responsive-sm font-medium transition-colors touch-target hidden sm:block">
              Login
            </Link>
            <Link href="/auth/signup" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-3 sm:px-4 py-2 rounded-lg text-responsive-sm font-medium transition-all duration-300 touch-target">
              Sign Up
            </Link>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white touch-target"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-white/10 mobile-menu-container">
            <div className="content-padding py-4 max-h-[calc(100vh-4rem)] overflow-y-auto safe-area-bottom">
              {/* Main Navigation */}
              <div className="mb-6">
                <h3 className="text-responsive-xs font-semibold text-purple-400 uppercase tracking-wide px-3 py-2">Main</h3>
                <div className="grid-responsive-2 gap-2">
                  <Link href="/marketplace" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-responsive-base font-medium touch-target">
                    Marketplace
                  </Link>
                  <Link href="/services" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-responsive-base font-medium touch-target">
                    Services
                  </Link>
                  <Link href="/talents" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-responsive-base font-medium touch-target">
                    Talents
                  </Link>
                  <Link href="/equipment" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-responsive-base font-medium touch-target">
                    Equipment
                  </Link>
                  <Link href="/products" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-responsive-base font-medium touch-target">
                    Products
                  </Link>
                  <Link href="/blog" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-responsive-base font-medium touch-target">
                    Blog
                  </Link>
                </div>
              </div>

              {/* Tools & Features */}
              <div className="mb-6">
                <h3 className="text-responsive-xs font-semibold text-purple-400 uppercase tracking-wide px-3 py-2">Tools & Features</h3>
                <div className="grid-responsive-2 gap-2">
                  <Link href="/inbox" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-responsive-base font-medium touch-target">
                    Inbox
                  </Link>
                  <Link href="/executive-dashboard" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-responsive-base font-medium touch-target">
                    Executive Dashboard
                  </Link>
                  <Link href="/analytics-dashboard" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-responsive-base font-medium touch-target">
                    Analytics
                  </Link>
                  <Link href="/project-management" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-responsive-base font-medium touch-target">
                    Project Management
                  </Link>
                  <Link href="/ai-service-matcher" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-responsive-base font-medium touch-target">
                    AI Service Matcher
                  </Link>
                  <Link href="/talent-directory" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-responsive-base font-medium touch-target">
                    Talent Directory
                  </Link>
                </div>
              </div>

              {/* AI-Powered Services */}
              <div className="mb-6">
                <h3 className="text-responsive-xs font-semibold text-purple-400 uppercase tracking-wide px-3 py-2">AI Services</h3>
                <div className="grid-responsive-2 gap-2">
                  <Link href="/ai-powered-analytics" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-responsive-base font-medium touch-target">
                    AI Analytics
                  </Link>
                  <Link href="/ai-powered-automation" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-responsive-base font-medium touch-target">
                    AI Automation
                  </Link>
                  <Link href="/ai-powered-data-analytics" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-responsive-base font-medium touch-target">
                    Data Analytics
                  </Link>
                  <Link href="/ai-powered-security-cybersecurity" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-responsive-base font-medium touch-target">
                    Cybersecurity
                  </Link>
                </div>
              </div>

              {/* Business Tools */}
              <div className="mb-6">
                <h3 className="text-responsive-xs font-semibold text-purple-400 uppercase tracking-wide px-3 py-2">Business Tools</h3>
                <div className="grid-responsive-2 gap-2">
                  <Link href="/webhook-management" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-responsive-base font-medium touch-target">
                    Webhook Management
                  </Link>
                  <Link href="/workflow-designer" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-responsive-base font-medium touch-target">
                    Workflow Designer
                  </Link>
                  <Link href="/data-warehouse-etl" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-responsive-base font-medium touch-target">
                    Data Warehouse ETL
                  </Link>
                  <Link href="/help-desk-support" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-responsive-base font-medium touch-target">
                    Help Desk Support
                  </Link>
                </div>
              </div>

              {/* Security & Payments */}
              <div className="mb-6">
                <h3 className="text-responsive-xs font-semibold text-purple-400 uppercase tracking-wide px-3 py-2">Security & Payments</h3>
                <div className="grid-responsive-2 gap-2">
                  <Link href="/escrow-services" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-responsive-base font-medium touch-target">
                    Escrow Services
                  </Link>
                  <Link href="/warranty-protection" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-responsive-base font-medium touch-target">
                    Warranty Protection
                  </Link>
                  <Link href="/payment-processing" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-responsive-base font-medium touch-target">
                    Payment Processing
                  </Link>
                  <Link href="/invoice-billing" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-responsive-base font-medium touch-target">
                    Invoice & Billing
                  </Link>
                </div>
              </div>

              {/* Communication */}
              <div className="mb-6">
                <h3 className="text-responsive-xs font-semibold text-purple-400 uppercase tracking-wide px-3 py-2">Communication</h3>
                <div className="grid-responsive-2 gap-2">
                  <Link href="/real-time-chat" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-responsive-base font-medium touch-target">
                    Real-time Chat
                  </Link>
                  <Link href="/notifications" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-responsive-base font-medium touch-target">
                    Notifications
                  </Link>
                  <Link href="/ai-powered-customer-support" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-responsive-base font-medium touch-target">
                    Customer Support
                  </Link>
                </div>
              </div>

              {/* Company */}
              <div className="mb-6">
                <h3 className="text-responsive-xs font-semibold text-purple-400 uppercase tracking-wide px-3 py-2">Company</h3>
                <div className="grid-responsive-2 gap-2">
                  <Link href="/about" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-responsive-base font-medium touch-target">
                    About Us
                  </Link>
                  <Link href="/contact" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-responsive-base font-medium touch-target">
                    Contact
                  </Link>
                  <Link href="/sitemap" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-responsive-base font-medium touch-target">
                    Sitemap
                  </Link>
                  <Link href="/privacy-policy" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-responsive-base font-medium touch-target">
                    Privacy Policy
                  </Link>
                </div>
              </div>

              {/* Auth */}
              <div className="mb-6">
                <h3 className="text-responsive-xs font-semibold text-purple-400 uppercase tracking-wide px-3 py-2">Account</h3>
                <div className="grid-responsive-2 gap-2">
                  <Link href="/auth/login" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-responsive-base font-medium touch-target">
                    Login
                  </Link>
                  <Link href="/auth/signup" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-responsive-base font-medium touch-target">
                    Sign Up
                  </Link>
                  <Link href="/auth/forgot-password" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-responsive-base font-medium touch-target">
                    Forgot Password
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header 