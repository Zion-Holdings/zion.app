import React, { useState } from 'react'
import Link from 'next/link'

interface HeaderProps {
  title?: string
  showAuth?: boolean
  showLogo?: boolean
}

const Header: React.FC<HeaderProps> = ({ 
  title = "Zion", 
  showAuth = true, 
  showLogo = true 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {showLogo && (
              <div className="flex-shrink-0">
                <Link href="/" className="text-2xl font-bold text-white">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{title}</span>
                </Link>
              </div>
            )}
          </div>
          
          {/* Desktop Navigation - Main Links */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/marketplace" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Marketplace
            </Link>
            <Link href="/services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Services
            </Link>
            <Link href="/talents" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Talents
            </Link>
            <Link href="/equipment" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Equipment
            </Link>
            <Link href="/escrow-services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Escrow
            </Link>
            <Link href="/warranty-protection" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Protection
            </Link>
            <Link href="/invoice-billing" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Billing
            </Link>
            <Link href="/dispute-resolution" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Disputes
            </Link>
            <Link href="/skill-verification" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Skills
            </Link>
            <Link href="/marketplace-pricing" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Pricing
            </Link>
            <Link href="/referral-affiliate" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Referrals
            </Link>
            <Link href="/products" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Products
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Blog
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              About
            </Link>
          </div>

          {/* Desktop Navigation - Auth & Actions */}
          {showAuth && (
            <div className="hidden lg:flex items-center space-x-4">
              <Link href="/auth/login" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Login
              </Link>
              <Link href="/auth/signup" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                Join Zion Now
              </Link>
            </div>
          )}

          {/* Tablet Navigation - Reduced Links */}
          <div className="hidden md:flex lg:hidden items-center space-x-4">
            <Link href="/marketplace" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Marketplace
            </Link>
            <Link href="/services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Services
            </Link>
            <Link href="/escrow-services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Escrow
            </Link>
            <Link href="/warranty-protection" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Protection
            </Link>
            <Link href="/invoice-billing" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Billing
            </Link>
            <Link href="/dispute-resolution" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Disputes
            </Link>
            <Link href="/skill-verification" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Skills
            </Link>
            <Link href="/marketplace-pricing" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Pricing
            </Link>
            <Link href="/talents" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Talents
            </Link>
            {showAuth && (
              <>
                <Link href="/auth/login" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Login
                </Link>
                <Link href="/auth/signup" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                  Join
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {/* Main Navigation */}
              <div className="mb-4">
                <h3 className="text-xs font-semibold text-purple-400 uppercase tracking-wide px-3 py-2">Main</h3>
                <Link href="/marketplace" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Marketplace
                </Link>
                <Link href="/services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Services
                </Link>
                <Link href="/talents" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Talents
                </Link>
                <Link href="/equipment" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Equipment
                </Link>
                <Link href="/products" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Products
                </Link>
              </div>

              {/* Tools & Features */}
              <div className="mb-4">
                <h3 className="text-xs font-semibold text-purple-400 uppercase tracking-wide px-3 py-2">Tools</h3>
                <Link href="/escrow-services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Escrow Services
                </Link>
                <Link href="/warranty-protection" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Warranty Protection
                </Link>
                <Link href="/invoice-billing" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Invoice & Billing
                </Link>
                <Link href="/dispute-resolution" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Dispute Resolution
                </Link>
                <Link href="/skill-verification" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Skill Verification
                </Link>
                <Link href="/marketplace-pricing" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Marketplace Pricing
                </Link>
                <Link href="/real-time-chat" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Live Chat
                </Link>
                <Link href="/ai-virtual-assistant" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  AI Assistant
                </Link>
                <Link href="/advanced-search" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Search
                </Link>
                <Link href="/analytics-dashboard" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Analytics
                </Link>
              </div>

              {/* Resources */}
              <div className="mb-4">
                <h3 className="text-xs font-semibold text-purple-400 uppercase tracking-wide px-3 py-2">Resources</h3>
                <Link href="/blog" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Blog
                </Link>
                <Link href="/about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  About
                </Link>
                <Link href="/notifications" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Notifications
                </Link>
              </div>

              {/* Authentication */}
              {showAuth && (
                <div className="border-t border-white/10 pt-4">
                  <Link href="/auth/login" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Login
                  </Link>
                  <Link href="/auth/signup" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white block px-3 py-2 rounded-md text-base font-medium">
                    Join Zion Now
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Header 