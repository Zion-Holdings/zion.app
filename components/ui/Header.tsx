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

  const bgClass = transparent && !isScrolled ? 'bg-transparent' : 'bg-black/20 backdrop-blur-md'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClass} border-b border-white/10`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion</span>
              </h1>
            </Link>
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
            <Link href="/products" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Products
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Blog
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* Desktop Navigation - Tools & Features */}
          <div className="hidden xl:flex items-center space-x-4">
            <Link href="/inbox" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Inbox
            </Link>
            <Link href="/executive-dashboard" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Executive
            </Link>
            <Link href="/analytics-dashboard" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Analytics
            </Link>
            <Link href="/project-management" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Projects
            </Link>
            <Link href="/ai-service-matcher" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              AI Matcher
            </Link>
            <Link href="/help-desk-support" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Support
            </Link>
          </div>

          {/* Desktop Navigation - Security & Payments */}
          <div className="hidden 2xl:flex items-center space-x-4">
            <Link href="/escrow-services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Escrow
            </Link>
            <Link href="/warranty-protection" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Protection
            </Link>
            <Link href="/payment-processing" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Payments
            </Link>
            <Link href="/invoice-billing" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Billing
            </Link>
            <Link href="/dispute-resolution" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Disputes
            </Link>
            <Link href="/compliance-governance" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Compliance
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link href="/auth/login" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Login
            </Link>
            <Link href="/auth/signup" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">
              Sign Up
            </Link>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
                <Link href="/blog" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Blog
                </Link>
              </div>

              {/* Tools & Features */}
              <div className="mb-4">
                <h3 className="text-xs font-semibold text-purple-400 uppercase tracking-wide px-3 py-2">Tools & Features</h3>
                <Link href="/inbox" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Inbox
                </Link>
                <Link href="/executive-dashboard" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Executive Dashboard
                </Link>
                <Link href="/analytics-dashboard" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Analytics
                </Link>
                <Link href="/project-management" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Project Management
                </Link>
                <Link href="/ai-service-matcher" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  AI Service Matcher
                </Link>
                <Link href="/talent-directory" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Talent Directory
                </Link>
                <Link href="/skill-verification" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Skill Verification
                </Link>
              </div>

              {/* AI-Powered Services */}
              <div className="mb-4">
                <h3 className="text-xs font-semibold text-purple-400 uppercase tracking-wide px-3 py-2">AI Services</h3>
                <Link href="/ai-powered-analytics" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  AI Analytics
                </Link>
                <Link href="/ai-powered-automation" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  AI Automation
                </Link>
                <Link href="/ai-powered-data-analytics" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Data Analytics
                </Link>
                <Link href="/ai-powered-security-cybersecurity" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Cybersecurity
                </Link>
                <Link href="/ai-powered-education-training" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Education & Training
                </Link>
                <Link href="/ai-powered-contract-legal" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Legal & Contracts
                </Link>
              </div>

              {/* Business Tools */}
              <div className="mb-4">
                <h3 className="text-xs font-semibold text-purple-400 uppercase tracking-wide px-3 py-2">Business Tools</h3>
                <Link href="/webhook-management" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Webhook Management
                </Link>
                <Link href="/workflow-designer" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Workflow Designer
                </Link>
                <Link href="/data-warehouse-etl" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Data Warehouse ETL
                </Link>
                <Link href="/help-desk-support" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Help Desk Support
                </Link>
                <Link href="/advanced-search" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Advanced Search
                </Link>
              </div>

              {/* Security & Payments */}
              <div className="mb-4">
                <h3 className="text-xs font-semibold text-purple-400 uppercase tracking-wide px-3 py-2">Security & Payments</h3>
                <Link href="/escrow-services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Escrow Services
                </Link>
                <Link href="/warranty-protection" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Warranty Protection
                </Link>
                <Link href="/payment-processing" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Payment Processing
                </Link>
                <Link href="/invoice-billing" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Invoice & Billing
                </Link>
                <Link href="/dispute-resolution" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Dispute Resolution
                </Link>
                <Link href="/compliance-governance" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Compliance & Governance
                </Link>
              </div>

              {/* Communication */}
              <div className="mb-4">
                <h3 className="text-xs font-semibold text-purple-400 uppercase tracking-wide px-3 py-2">Communication</h3>
                <Link href="/real-time-chat" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Real-time Chat
                </Link>
                <Link href="/notifications" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Notifications
                </Link>
                <Link href="/ai-powered-customer-support" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Customer Support
                </Link>
              </div>

              {/* Immersive & VR */}
              <div className="mb-4">
                <h3 className="text-xs font-semibold text-purple-400 uppercase tracking-wide px-3 py-2">Immersive & VR</h3>
                <Link href="/ai-immersive-marketplace" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Immersive Marketplace
                </Link>
                <Link href="/ai-powered-mixed-reality-spatial-computing" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Mixed Reality
                </Link>
                <Link href="/ai-powered-augmented-reality" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Augmented Reality
                </Link>
              </div>

              {/* Transportation & Logistics */}
              <div className="mb-4">
                <h3 className="text-xs font-semibold text-purple-400 uppercase tracking-wide px-3 py-2">Transportation</h3>
                <Link href="/ai-powered-autonomous-vehicle-transportation" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Autonomous Vehicles
                </Link>
                <Link href="/ai-powered-autonomous-drone-delivery-logistics" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Drone Delivery
                </Link>
                <Link href="/ai-powered-inventory-supply-chain" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Supply Chain
                </Link>
              </div>

              {/* Company */}
              <div className="mb-4">
                <h3 className="text-xs font-semibold text-purple-400 uppercase tracking-wide px-3 py-2">Company</h3>
                <Link href="/about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  About Us
                </Link>
                <Link href="/contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Contact
                </Link>
                <Link href="/sitemap" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Sitemap
                </Link>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Privacy Policy
                </Link>
                <Link href="/terms-of-service" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Terms of Service
                </Link>
              </div>

              {/* Auth */}
              <div className="mb-4">
                <h3 className="text-xs font-semibold text-purple-400 uppercase tracking-wide px-3 py-2">Account</h3>
                <Link href="/auth/login" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Login
                </Link>
                <Link href="/auth/signup" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Sign Up
                </Link>
                <Link href="/auth/forgot-password" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Forgot Password
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header 