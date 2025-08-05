import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { 
  Menu, 
  X, 
  ChevronDown, 
  Search, 
  Home, 
  ShoppingCart, 
  Users, 
  Settings, 
  Bell, 
  User, 
  LogOut,
  Grid,
  BarChart3,
  Zap,
  Shield,
  BookOpen,
  MessageSquare,
  HelpCircle,
  Globe
} from 'lucide-react'
import { useHeader } from '../../src/contexts/HeaderContext'

interface NavigationItem {
  label: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
  description?: string
  badge?: string
}

interface NavigationSection {
  id: string
  title: string
  icon: React.ComponentType<{ className?: string }>
  items: NavigationItem[]
}

const ModernNavigation: React.FC = () => {
  const { isTransparent } = useHeader()
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const dropdownRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({})
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  const navigationSections: NavigationSection[] = [
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
      id: 'ai-services',
      title: 'AI Services',
      icon: Zap,
      items: [
        { label: 'AI Analytics', href: '/ai-powered-analytics', description: 'Advanced analytics with AI' },
        { label: 'AI Automation', href: '/ai-powered-automation', description: 'Automate workflows with AI' },
        { label: 'Data Analytics', href: '/ai-powered-data-analytics', description: 'Data-driven insights' },
        { label: 'Cybersecurity', href: '/ai-powered-security-cybersecurity', description: 'AI-powered security' },
        { label: 'Education & Training', href: '/ai-powered-education-training', description: 'AI learning solutions' },
        { label: 'Legal & Contracts', href: '/ai-powered-contract-legal', description: 'AI legal assistance' }
      ]
    },
    {
      id: 'tools',
      title: 'Business Tools',
      icon: Settings,
      items: [
        { label: 'Project Management', href: '/project-management', description: 'Manage your projects' },
        { label: 'Analytics Dashboard', href: '/analytics-dashboard', description: 'Business intelligence tools' },
        { label: 'Executive Dashboard', href: '/executive-dashboard', description: 'Executive overview and insights' },
        { label: 'Webhook Management', href: '/webhook-management', description: 'Manage webhooks' },
        { label: 'Workflow Designer', href: '/workflow-designer', description: 'Design workflows' },
        { label: 'Data Warehouse ETL', href: '/data-warehouse-etl', description: 'Data processing tools' }
      ]
    },
    {
      id: 'support',
      title: 'Support & Resources',
      icon: HelpCircle,
      items: [
        { label: 'Help Desk Support', href: '/help-desk-support', description: 'Customer support portal' },
        { label: 'Documentation', href: '/docs', description: 'API and user documentation' },
        { label: 'Community', href: '/community', description: 'User community and forums' },
        { label: 'Contact Support', href: '/contact', description: 'Get in touch with our team' }
      ]
    }
  ]

  const quickActions = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Search', href: '/search', icon: Search },
    { label: 'Notifications', href: '/notifications', icon: Bell, badge: '3' },
    { label: 'Profile', href: '/profile', icon: User }
  ]

  const bgClass = isTransparent && !isScrolled 
    ? 'bg-transparent' 
    : 'glass-dark backdrop-blur-lg border-b border-neon-blue/20'

  const handleNavigation = (href: string) => {
    router.push(href)
    setIsMenuOpen(false)
  }

  const toggleDropdown = (dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName)
  }

  return (
    <>
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

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

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2 xl:space-x-4">
              {/* Search Bar */}
              <div className="relative">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search services, products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-64 pl-10 pr-4 py-2 bg-white/10 border border-neon-blue/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-blue/50 focus:border-neon-blue/50 transition-all"
                  />
                </div>
              </div>

              {/* Navigation Dropdowns */}
              {navigationSections.map((section) => (
                <div key={section.id} className="relative dropdown-container">
                  <button
                    ref={(el) => {
                      dropdownRefs.current[section.id] = el
                    }}
                    onClick={() => toggleDropdown(section.id)}
                    className="flex items-center space-x-1 px-4 py-2 text-white hover:text-neon-blue transition-colors rounded-lg hover:bg-white/10"
                    aria-expanded={activeDropdown === section.id}
                    aria-haspopup="true"
                  >
                    <section.icon className="w-4 h-4" />
                    <span>{section.title}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === section.id ? 'rotate-180' : ''}`} />
                  </button>

                  {activeDropdown === section.id && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-gradient-to-br from-slate-900 to-slate-800 border border-neon-blue/20 rounded-lg shadow-xl backdrop-blur-xl z-50">
                      <div className="p-4">
                        <h3 className="text-white font-semibold mb-3 flex items-center space-x-2">
                          <section.icon className="w-4 h-4 text-neon-blue" />
                          <span>{section.title}</span>
                        </h3>
                        <div className="space-y-2">
                          {section.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors group"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {item.icon && <item.icon className="w-4 h-4 text-neon-blue" />}
                              <div className="flex-1">
                                <div className="text-white font-medium group-hover:text-neon-blue transition-colors">
                                  {item.label}
                                </div>
                                {item.description && (
                                  <div className="text-gray-400 text-sm">{item.description}</div>
                                )}
                              </div>
                              {item.badge && (
                                <span className="px-2 py-1 text-xs bg-neon-blue text-white rounded-full">
                                  {item.badge}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Quick Actions */}
              <div className="flex items-center space-x-2">
                <Link href="/notifications" className="relative p-2 text-white hover:text-neon-blue transition-colors">
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                </Link>
                <Link href="/profile" className="p-2 text-white hover:text-neon-blue transition-colors">
                  <User className="w-5 h-5" />
                </Link>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-neon-blue transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-slate-900 to-slate-800 border-r border-neon-blue/20 z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:hidden`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Header */}
          <div className="p-6 border-b border-neon-blue/20">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-3" onClick={() => setIsMenuOpen(false)}>
                <div className="w-10 h-10 bg-gradient-to-br from-neon-blue to-neon-purple rounded-lg flex items-center justify-center neon-glow">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <div>
                  <h1 className="text-white font-bold text-lg">Zion</h1>
                  <p className="text-neon-blue text-xs">AI Marketplace</p>
                </div>
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-white hover:text-neon-blue transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="p-4 border-b border-neon-blue/20">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search services, products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-neon-blue/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-blue/50 focus:border-neon-blue/50 transition-all"
              />
            </div>
          </div>

          {/* Mobile Navigation Sections */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-4 space-y-4">
              {navigationSections.map((section) => (
                <div key={section.id} className="space-y-2">
                  <h3 className="text-white font-semibold flex items-center space-x-2">
                    <section.icon className="w-4 h-4 text-neon-blue" />
                    <span>{section.title}</span>
                  </h3>
                  <div className="space-y-1 ml-6">
                    {section.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block p-3 rounded-lg hover:bg-white/10 transition-colors group"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            {item.icon && <item.icon className="w-4 h-4 text-neon-blue" />}
                            <div>
                              <div className="text-white font-medium group-hover:text-neon-blue transition-colors">
                                {item.label}
                              </div>
                              {item.description && (
                                <div className="text-gray-400 text-sm">{item.description}</div>
                              )}
                            </div>
                          </div>
                          {item.badge && (
                            <span className="px-2 py-1 text-xs bg-neon-blue text-white rounded-full">
                              {item.badge}
                            </span>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Quick Actions */}
          <div className="p-4 border-t border-neon-blue/20">
            <div className="grid grid-cols-4 gap-2">
              {quickActions.map((action) => (
                <Link
                  key={action.href}
                  href={action.href}
                  className="flex flex-col items-center p-3 rounded-lg hover:bg-white/10 transition-colors group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="relative">
                    <action.icon className="w-5 h-5 text-white group-hover:text-neon-blue transition-colors" />
                    {action.badge && (
                      <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                    )}
                  </div>
                  <span className="text-xs text-white mt-1">{action.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModernNavigation 