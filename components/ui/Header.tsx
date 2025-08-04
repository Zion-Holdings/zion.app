import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, ChevronUp, Bell, User } from 'lucide-react'
import { useRouter } from 'next/router'
import SearchNavigation from './SearchNavigation'
import EnhancedMobileNavigation from './EnhancedMobileNavigation'
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
  const router = useRouter()

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

  const bgClass = isTransparent && !isScrolled 
    ? 'bg-transparent' 
    : 'glass-dark backdrop-blur-lg border-b border-neon-blue/20'

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
    <>
      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"></div>
        <div className="absolute inset-0 bg-holographic bg-[length:400%_400%] animate-holographic-shift opacity-20"></div>
      </div>

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bgClass} safe-area-top`}>
        <div className="container-responsive">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-neon-blue to-neon-purple rounded-lg flex items-center justify-center neon-glow">
                    <span className="text-white font-bold text-xl">Z</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-blue to-neon-purple rounded-lg blur-sm opacity-50 animate-pulse-neon"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-xl lg:text-2xl neon-text">Zion</span>
                  <span className="text-neon-blue text-xs lg:text-sm font-mono">AI Marketplace</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation - Dropdown Menus */}
            <nav className="hidden lg:flex items-center space-x-2 xl:space-x-4">
              {dropdownMenus.map((menu) => (
                <div key={menu.label} className="relative dropdown-container">
                  <button
                    onClick={() => toggleDropdown(menu.label)}
                    className="flex items-center text-gray-300 hover:text-neon-blue px-3 py-2 rounded-md text-responsive-sm font-medium transition-all duration-300 touch-target group"
                    ref={(el) => {
                      dropdownRefs.current[menu.label] = el
                    }}
                  >
                    {menu.label}
                    {activeDropdown === menu.label ? (
                      <ChevronUp className="ml-1 h-4 w-4 transition-transform duration-300" />
                    ) : (
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300" />
                    )}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple transition-all duration-300 group-hover:w-full"></span>
                  </button>
                  
                  {activeDropdown === menu.label && (
                    <div className="absolute top-full left-0 mt-1 w-64 glass-dark backdrop-blur-lg border border-neon-blue/20 rounded-lg shadow-xl z-50">
                      <div className="py-2">
                        {menu.items.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-neon-blue/10 transition-all duration-300"
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
              <Link href="/blog" className="relative text-gray-300 hover:text-neon-blue px-3 py-2 rounded-md text-responsive-sm font-medium transition-all duration-300 touch-target group">
                Blog
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/about" className="relative text-gray-300 hover:text-neon-blue px-3 py-2 rounded-md text-responsive-sm font-medium transition-all duration-300 touch-target group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/contact" className="relative text-gray-300 hover:text-neon-blue px-3 py-2 rounded-md text-responsive-sm font-medium transition-all duration-300 touch-target group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </nav>

            {/* Search and Auth Buttons */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Search */}
              <SearchNavigation className="hidden md:block" />
              
              {/* Notifications */}
              <Link href="/notifications" className="relative p-2 text-gray-300 hover:text-neon-blue hover:bg-neon-blue/10 rounded-md transition-all duration-300 touch-target">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full neon-glow"></span>
              </Link>
              
              {/* User Menu */}
              <Link href="/profile" className="hidden sm:flex items-center space-x-2 p-2 text-gray-300 hover:text-neon-blue hover:bg-neon-blue/10 rounded-md transition-all duration-300 touch-target">
                <User className="h-5 w-5" />
                <span className="text-responsive-sm font-medium">Profile</span>
              </Link>
              
              {/* Auth Buttons */}
              <Link href="/auth/login" className="text-gray-300 hover:text-neon-blue px-3 py-2 rounded-md text-responsive-sm font-medium transition-all duration-300 touch-target hidden sm:block">
                Login
              </Link>
              <Link href="/auth/signup" className="text-white bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg px-3 sm:px-4 py-2 text-responsive-sm font-medium transition-all duration-300 touch-target neon-glow hover:shadow-neon-blue">
                Get Started
              </Link>
              
              {/* Mobile Navigation */}
              <EnhancedMobileNavigation />
            </div>
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-16 lg:h-20"></div>
    </>
  )
}

export default Header 