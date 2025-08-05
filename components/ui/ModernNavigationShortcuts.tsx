import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { 
  Search, 
  Home, 
  ShoppingCart, 
  Users, 
  Settings, 
  Bell, 
  User,
  HelpCircle,
  Command,
  Zap,
  Globe,
  BarChart3
} from 'lucide-react'

interface Shortcut {
  key: string
  description: string
  action: () => void
  icon: React.ComponentType<{ className?: string }>
}

const ModernNavigationShortcuts: React.FC = () => {
  const router = useRouter()
  const [showShortcuts, setShowShortcuts] = useState(false)
  const [activeShortcut, setActiveShortcut] = useState<string | null>(null)

  const shortcuts: Shortcut[] = [
    {
      key: 'g h',
      description: 'Go to Home',
      action: () => router.push('/'),
      icon: Home
    },
    {
      key: 'g s',
      description: 'Search',
      action: () => router.push('/search'),
      icon: Search
    },
    {
      key: 'g m',
      description: 'Marketplace',
      action: () => router.push('/marketplace'),
      icon: ShoppingCart
    },
    {
      key: 'g t',
      description: 'Talents',
      action: () => router.push('/talents'),
      icon: Users
    },
    {
      key: 'g a',
      description: 'AI Services',
      action: () => router.push('/ai-powered-analytics'),
      icon: Zap
    },
    {
      key: 'g d',
      description: 'Dashboard',
      action: () => router.push('/analytics-dashboard'),
      icon: BarChart3
    },
    {
      key: 'g p',
      description: 'Profile',
      action: () => router.push('/profile'),
      icon: User
    },
    {
      key: 'g n',
      description: 'Notifications',
      action: () => router.push('/notifications'),
      icon: Bell
    }
  ]

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Show shortcuts modal with Cmd/Ctrl + K
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault()
        setShowShortcuts(true)
        return
      }

      // Handle navigation shortcuts
      if (event.key === 'g' && !event.metaKey && !event.ctrlKey) {
        const nextKey = event.key
        setActiveShortcut(nextKey)
        
        // Wait for second key
        const handleSecondKey = (secondEvent: KeyboardEvent) => {
          const fullKey = `${nextKey} ${secondEvent.key}`
          const shortcut = shortcuts.find(s => s.key === fullKey)
          
          if (shortcut) {
            shortcut.action()
            setActiveShortcut(null)
          }
          
          document.removeEventListener('keydown', handleSecondKey)
        }
        
        document.addEventListener('keydown', handleSecondKey)
        setTimeout(() => {
          setActiveShortcut(null)
          document.removeEventListener('keydown', handleSecondKey)
        }, 1000)
      }

      // Close shortcuts modal with Escape
      if (event.key === 'Escape') {
        setShowShortcuts(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [router, shortcuts])

  const handleShortcutClick = (shortcut: Shortcut) => {
    shortcut.action()
    setShowShortcuts(false)
  }

  if (!showShortcuts) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
        onClick={() => setShowShortcuts(false)}
      />
      
      {/* Shortcuts Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-neon-blue/20 rounded-2xl shadow-2xl backdrop-blur-xl max-w-md w-full">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white flex items-center space-x-2">
                <Command className="w-5 h-5 text-neon-blue" />
                <span>Keyboard Shortcuts</span>
              </h2>
              <button
                onClick={() => setShowShortcuts(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="text-sm">ESC</span>
              </button>
            </div>

            <div className="space-y-3">
              {shortcuts.map((shortcut) => (
                <button
                  key={shortcut.key}
                  onClick={() => handleShortcutClick(shortcut)}
                  className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-white/10 transition-colors group"
                >
                  <div className="flex items-center space-x-3">
                    <shortcut.icon className="w-4 h-4 text-neon-blue" />
                    <span className="text-white">{shortcut.description}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    {shortcut.key.split(' ').map((key, index) => (
                      <React.Fragment key={index}>
                        {index > 0 && <span className="text-gray-400">+</span>}
                        <kbd className="px-2 py-1 text-xs bg-white/10 text-gray-300 rounded border border-gray-600">
                          {key}
                        </kbd>
                      </React.Fragment>
                    ))}
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-neon-blue/20">
              <p className="text-sm text-gray-400 text-center">
                Press <kbd className="px-1 py-0.5 text-xs bg-white/10 rounded">⌘</kbd> + <kbd className="px-1 py-0.5 text-xs bg-white/10 rounded">K</kbd> anytime to open shortcuts
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModernNavigationShortcuts 