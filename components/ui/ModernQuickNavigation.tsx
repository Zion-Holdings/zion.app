import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { 
  Search, 
  ShoppingCart, 
  Users, 
  Settings, 
  Bell, 
  User, 
  Home,
  Zap,
  Globe,
  HelpCircle,
  Plus,
  MessageSquare,
  BarChart3,
  Shield
} from 'lucide-react'

interface QuickAction {
  label: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  description?: string
  badge?: string
  color?: string
}

const ModernQuickNavigation: React.FC = () => {
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)
  const [activeAction, setActiveAction] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      // Show when scrolled down and not near the bottom
      if (scrollY > 200 && scrollY < documentHeight - windowHeight - 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const quickActions: QuickAction[] = [
    {
      label: 'Search',
      href: '/search',
      icon: Search,
      description: 'Find services and products',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      label: 'Marketplace',
      href: '/marketplace',
      icon: ShoppingCart,
      description: 'Browse all items',
      color: 'from-purple-500 to-pink-500'
    },
    {
      label: 'AI Services',
      href: '/ai-powered-analytics',
      icon: Zap,
      description: 'AI-powered solutions',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      label: 'Talents',
      href: '/talents',
      icon: Users,
      description: 'Find professionals',
      color: 'from-green-500 to-emerald-500'
    },
    {
      label: 'Dashboard',
      href: '/analytics-dashboard',
      icon: BarChart3,
      description: 'Business insights',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      label: 'Support',
      href: '/help-desk-support',
      icon: HelpCircle,
      description: 'Get help',
      color: 'from-red-500 to-pink-500'
    }
  ]

  const handleActionClick = (href: string) => {
    setActiveAction(href)
    router.push(href)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-neon-blue/20 rounded-full backdrop-blur-xl shadow-2xl">
        <div className="flex items-center space-x-2 p-2">
          {quickActions.map((action) => (
            <button
              key={action.href}
              onClick={() => handleActionClick(action.href)}
              className={`relative group p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                activeAction === action.href 
                  ? 'bg-gradient-to-r ' + action.color + ' shadow-lg' 
                  : 'hover:bg-white/10'
              }`}
              title={action.description}
            >
              <action.icon className={`w-5 h-5 ${
                activeAction === action.href ? 'text-white' : 'text-gray-300 group-hover:text-white'
              } transition-colors`} />
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-black/80 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                {action.label}
                {action.description && (
                  <div className="text-gray-300 text-xs mt-1">{action.description}</div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ModernQuickNavigation 