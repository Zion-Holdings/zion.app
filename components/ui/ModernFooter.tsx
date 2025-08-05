import React, { useState, useEffect , useCallback } from 'react'
import Link from 'next/link'
import { 
  ChevronUp, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  Github,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  Globe,
  Heart,
  Shield,
  Zap,
  Users,
  BookOpen,
  MessageSquare,
  HelpCircle,
  Settings
} from 'lucide-react'

interface ModernFooterProps {
  variant?: 'default' | 'minimal' | 'none'
}

const ModernFooter: React.FC<ModernFooterProps> = ({ variant = 'default' }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (variant === 'none') return null

  const footerSections = [
    {
      title: 'Marketplace',
      icon: Globe,
      links: [
        { label: 'Browse All', href: '/marketplace' },
        { label: 'Services', href: '/services' },
        { label: 'Products', href: '/products' },
        { label: 'Equipment', href: '/equipment' },
        { label: 'Talents', href: '/talents' },
        { label: 'AI Service Matcher', href: '/ai-service-matcher' },
        { label: 'Service Categories', href: '/service-categories' },
        { label: 'Talent Directory', href: '/talent-directory' }
      ]
    },
    {
      title: 'AI Services',
      icon: Zap,
      links: [
        { label: 'AI Analytics', href: '/ai-powered-analytics' },
        { label: 'AI Automation', href: '/ai-powered-automation' },
        { label: 'Data Analytics', href: '/ai-powered-data-analytics' },
        { label: 'Cybersecurity', href: '/ai-powered-security-cybersecurity' },
        { label: 'Education & Training', href: '/ai-powered-education-training' },
        { label: 'Legal & Contracts', href: '/ai-powered-contract-legal' },
        { label: 'Customer Support', href: '/ai-powered-customer-support' },
        { label: 'Identity Verification', href: '/ai-powered-identity-verification' }
      ]
    },
    {
      title: 'Business Tools',
      icon: Settings,
      links: [
        { label: 'Executive Dashboard', href: '/executive-dashboard' },
        { label: 'Analytics Dashboard', href: '/analytics-dashboard' },
        { label: 'Project Management', href: '/project-management' },
        { label: 'AI Project Management', href: '/ai-project-management' },
        { label: 'Webhook Management', href: '/webhook-management' },
        { label: 'Workflow Designer', href: '/workflow-designer' },
        { label: 'Data Warehouse ETL', href: '/data-warehouse-etl' },
        { label: 'Help Desk Support', href: '/help-desk-support' }
      ]
    },
    {
      title: 'Support & Resources',
      icon: HelpCircle,
      links: [
        { label: 'Documentation', href: '/docs' },
        { label: 'API Reference', href: '/api' },
        { label: 'Community', href: '/community' },
        { label: 'Blog', href: '/blog' },
        { label: 'Contact Support', href: '/contact' },
        { label: 'About Us', href: '/about' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' }
      ]
    }
  ]

  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com', icon: Github },
    { label: 'Twitter', href: 'https://twitter.com', icon: Twitter },
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
    { label: 'Facebook', href: 'https://facebook.com', icon: Facebook },
    { label: 'Instagram', href: 'https://instagram.com', icon: Instagram },
    { label: 'YouTube', href: 'https://youtube.com', icon: Youtube }
  ]

  if (variant === 'minimal') {
    return (
      <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white border-t border-neon-blue/20">
        <div className="container-responsive py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-neon-blue to-neon-purple rounded-lg flex items-center justify-center neon-glow">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <div>
                <span className="text-white font-bold text-lg">Zion</span>
                <span className="text-neon-blue text-xs block">AI Marketplace</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-6 text-sm">
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms
              </Link>
            </div>

            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2024 Zion. Made with <Heart className="inline w-4 h-4 text-red-500" /> for the future.
            </div>
          </div>
        </div>
      </footer>
    )
  }

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white border-t border-neon-blue/20">
      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 neon-glow"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5 text-white" />
        </button>
      )}

      <div className="container-responsive section-padding">
        {/* Main Footer Content */}
        <div className="grid-responsive-4 gap-8 lg:gap-12 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-neon-blue to-neon-purple rounded-lg flex items-center justify-center neon-glow mr-4">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div>
                <h3 className="text-responsive-xl font-bold text-white">
                  Zion
                </h3>
                <p className="text-neon-blue text-sm font-mono">AI Marketplace</p>
              </div>
            </div>
            <p className="text-responsive-sm text-gray-300 mb-6 leading-relaxed">
              The First Free AI-Powered Marketplace connecting businesses with cutting-edge technology solutions, talent, and equipment.
            </p>
            <div className="flex space-x-4">
              {socialLinks.slice(0, 4).map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-gray-400 group-hover:text-neon-blue transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-responsive-lg font-semibold mb-4 text-white flex items-center space-x-2">
                <section.icon className="w-4 h-4 text-neon-blue" />
                <span>{section.title}</span>
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="text-gray-400 hover:text-white transition-colors touch-target flex items-center space-x-2 group"
                    >
                      <span>{link.label}</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neon-blue/20 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright and Legal */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
              <span>© 2024 Zion. All rights reserved.</span>
              <div className="flex space-x-4">
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>

            {/* Additional Info */}
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-neon-green" />
                <span>Secure & Reliable</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-neon-blue" />
                <span>AI-Powered</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-neon-purple" />
                <span>Community Driven</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default ModernFooter 