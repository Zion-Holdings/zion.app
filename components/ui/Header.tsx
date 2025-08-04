import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

interface HeaderProps {
  transparent?: boolean
}

const Header: React.FC<HeaderProps> = ({ transparent = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

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

  const bgClass = transparent && !isScrolled ? 'bg-transparent' : 'bg-black/20 backdrop-blur-md'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClass} border-b border-white/10 safe-area-top`}>
      <div className="container-responsive">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 touch-target">
              <h1 className="text-xl sm:text-2xl font-bold text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion</span>
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation - Main Links */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <Link href="/marketplace" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors touch-target">
              Marketplace
            </Link>
            <Link href="/services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors touch-target">
              Services
            </Link>
            <Link href="/talents" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors touch-target">
              Talents
            </Link>
            <Link href="/equipment" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors touch-target">
              Equipment
            </Link>
            <Link href="/products" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors touch-target">
              Products
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors touch-target">
              Blog
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors touch-target">
              About
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors touch-target">
              Contact
            </Link>
          </nav>

          {/* Desktop Navigation - Tools & Features */}
          <nav className="hidden xl:flex items-center space-x-4">
            <Link href="/inbox" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors touch-target">
              Inbox
            </Link>
            <Link href="/executive-dashboard" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors touch-target">
              Executive
            </Link>
            <Link href="/analytics-dashboard" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors touch-target">
              Analytics
            </Link>
            <Link href="/project-management" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors touch-target">
              Projects
            </Link>
            <Link href="/ai-service-matcher" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors touch-target">
              AI Matcher
            </Link>
            <Link href="/help-desk-support" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors touch-target">
              Support
            </Link>
          </nav>

          {/* Desktop Navigation - Security & Payments */}
          <nav className="hidden 2xl:flex items-center space-x-4">
            <Link href="/escrow-services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors touch-target">
              Escrow
            </Link>
            <Link href="/warranty-protection" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors touch-target">
              Protection
            </Link>
            <Link href="/payment-processing" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors touch-target">
              Payments
            </Link>
            <Link href="/invoice-billing" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors touch-target">
              Billing
            </Link>
            <Link href="/dispute-resolution" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors touch-target">
              Disputes
            </Link>
            <Link href="/compliance-governance" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors touch-target">
              Compliance
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link href="/auth/login" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors touch-target hidden sm:block">
              Login
            </Link>
            <Link href="/auth/signup" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 touch-target">
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
                <h3 className="text-xs font-semibold text-purple-400 uppercase tracking-wide px-3 py-2">Main</h3>
                <div className="grid-responsive-2 gap-2">
                  <Link href="/marketplace" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-base font-medium touch-target">
                    Marketplace
                  </Link>
                  <Link href="/services" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-base font-medium touch-target">
                    Services
                  </Link>
                  <Link href="/talents" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-base font-medium touch-target">
                    Talents
                  </Link>
                  <Link href="/equipment" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-base font-medium touch-target">
                    Equipment
                  </Link>
                  <Link href="/products" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-base font-medium touch-target">
                    Products
                  </Link>
                  <Link href="/blog" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-base font-medium touch-target">
                    Blog
                  </Link>
                </div>
              </div>

              {/* Tools & Features */}
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-purple-400 uppercase tracking-wide px-3 py-2">Tools & Features</h3>
                <div className="grid-responsive-2 gap-2">
                  <Link href="/inbox" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-base font-medium touch-target">
                    Inbox
                  </Link>
                  <Link href="/executive-dashboard" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-base font-medium touch-target">
                    Executive Dashboard
                  </Link>
                  <Link href="/analytics-dashboard" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-base font-medium touch-target">
                    Analytics
                  </Link>
                  <Link href="/project-management" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-base font-medium touch-target">
                    Project Management
                  </Link>
                  <Link href="/ai-service-matcher" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-base font-medium touch-target">
                    AI Service Matcher
                  </Link>
                  <Link href="/talent-directory" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-base font-medium touch-target">
                    Talent Directory
                  </Link>
                </div>
              </div>

              {/* AI-Powered Services */}
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-purple-400 uppercase tracking-wide px-3 py-2">AI Services</h3>
                <div className="grid-responsive-2 gap-2">
                  <Link href="/ai-powered-analytics" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-base font-medium touch-target">
                    AI Analytics
                  </Link>
                  <Link href="/ai-powered-automation" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-base font-medium touch-target">
                    AI Automation
                  </Link>
                  <Link href="/ai-powered-data-analytics" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-base font-medium touch-target">
                    Data Analytics
                  </Link>
                  <Link href="/ai-powered-security-cybersecurity" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-base font-medium touch-target">
                    Cybersecurity
                  </Link>
                </div>
              </div>

              {/* Business Tools */}
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-purple-400 uppercase tracking-wide px-3 py-2">Business Tools</h3>
                <div className="grid-responsive-2 gap-2">
                  <Link href="/webhook-management" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-base font-medium touch-target">
                    Webhook Management
                  </Link>
                  <Link href="/workflow-designer" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-base font-medium touch-target">
                    Workflow Designer
                  </Link>
                  <Link href="/data-warehouse-etl" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-base font-medium touch-target">
                    Data Warehouse ETL
                  </Link>
                  <Link href="/help-desk-support" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-base font-medium touch-target">
                    Help Desk Support
                  </Link>
                </div>
              </div>

              {/* Security & Payments */}
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-purple-400 uppercase tracking-wide px-3 py-2">Security & Payments</h3>
                <div className="grid-responsive-2 gap-2">
                  <Link href="/escrow-services" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-base font-medium touch-target">
                    Escrow Services
                  </Link>
                  <Link href="/warranty-protection" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-base font-medium touch-target">
                    Warranty Protection
                  </Link>
                  <Link href="/payment-processing" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-base font-medium touch-target">
                    Payment Processing
                  </Link>
                  <Link href="/invoice-billing" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-base font-medium touch-target">
                    Invoice & Billing
                  </Link>
                </div>
              </div>

              {/* Communication */}
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-purple-400 uppercase tracking-wide px-3 py-2">Communication</h3>
                <div className="grid-responsive-2 gap-2">
                  <Link href="/real-time-chat" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-base font-medium touch-target">
                    Real-time Chat
                  </Link>
                  <Link href="/notifications" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-base font-medium touch-target">
                    Notifications
                  </Link>
                  <Link href="/ai-powered-customer-support" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-base font-medium touch-target">
                    Customer Support
                  </Link>
                </div>
              </div>

              {/* Company */}
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-purple-400 uppercase tracking-wide px-3 py-2">Company</h3>
                <div className="grid-responsive-2 gap-2">
                  <Link href="/about" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-base font-medium touch-target">
                    About Us
                  </Link>
                  <Link href="/contact" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-base font-medium touch-target">
                    Contact
                  </Link>
                  <Link href="/sitemap" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-base font-medium touch-target">
                    Sitemap
                  </Link>
                  <Link href="/privacy-policy" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-base font-medium touch-target">
                    Privacy Policy
                  </Link>
                </div>
              </div>

              {/* Auth */}
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-purple-400 uppercase tracking-wide px-3 py-2">Account</h3>
                <div className="grid-responsive-2 gap-2">
                  <Link href="/auth/login" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-base font-medium touch-target">
                    Login
                  </Link>
                  <Link href="/auth/signup" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-base font-medium touch-target">
                    Sign Up
                  </Link>
                  <Link href="/auth/forgot-password" className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-base font-medium touch-target">
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