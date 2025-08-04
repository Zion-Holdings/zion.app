import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Plus, MessageSquare, Bell, Settings, ArrowUp, Home, Search, User } from 'lucide-react'

interface QuickNavigationProps {
  className?: string
}

const QuickNavigation: React.FC<QuickNavigationProps> = ({ className = '' }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickActions = [
    {
      icon: Home,
      label: 'Home',
      href: '/',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      icon: Search,
      label: 'Search',
      href: '/search',
      color: 'bg-purple-500 hover:bg-purple-600'
    },
    {
      icon: Plus,
      label: 'Create',
      href: '/create',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      icon: MessageSquare,
      label: 'Messages',
      href: '/messages',
      color: 'bg-pink-500 hover:bg-pink-600'
    },
    {
      icon: Bell,
      label: 'Notifications',
      href: '/notifications',
      color: 'bg-orange-500 hover:bg-orange-600'
    },
    {
      icon: User,
      label: 'Profile',
      href: '/profile',
      color: 'bg-indigo-500 hover:bg-indigo-600'
    }
  ]

  return (
    <div className={`fixed bottom-6 right-6 z-40 ${className}`}>
      {/* Quick Actions */}
      <div className="flex flex-col items-end space-y-3">
        {quickActions.map((action, index) => (
          <Link
            key={action.label}
            href={action.href}
            className={`group flex items-center space-x-3 p-3 rounded-full ${action.color} text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 touch-target`}
            style={{
              animationDelay: `${index * 100}ms`
            }}
          >
            <action.icon className="h-5 w-5" />
            <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {action.label}
            </span>
          </Link>
        ))}

        {/* Scroll to Top */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 touch-target"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  )
}

export default QuickNavigation 