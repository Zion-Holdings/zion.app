import React, { useState, useEffect } from 'react'
import { Command, ArrowLeft, ArrowRight, Search, Star, Clock, X } from 'lucide-react'
import { useNavigation } from '../../src/contexts/NavigationContext'

interface NavigationShortcutsProps {
  className?: string
}

const NavigationShortcuts: React.FC<NavigationShortcutsProps> = ({ className = '' }) => {
  const [isVisible, setIsVisible] = useState(false)
  const { state, navigateTo, goBack, goForward, addToFavorites, removeFromFavorites } = useNavigation()

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === '?' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        setIsVisible(!isVisible)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isVisible])

  const shortcuts = [
    {
      key: '⌘K',
      description: 'Open search',
      icon: Search
    },
    {
      key: '⌘B',
      description: 'Go back',
      icon: ArrowLeft,
      action: goBack
    },
    {
      key: '⌘F',
      description: 'Go forward',
      icon: ArrowRight,
      action: goForward
    },
    {
      key: '⌘1-9',
      description: 'Quick navigation to favorites',
      icon: Star
    },
    {
      key: 'ESC',
      description: 'Close modals',
      icon: X
    },
    {
      key: '?',
      description: 'Show this help',
      icon: Command
    }
  ]

  const recentPages = state.recentPages.slice(0, 5)
  const favorites = state.favorites.slice(0, 9)

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setIsVisible(false)}
      />
      
      {/* Shortcuts Panel */}
      <div className="relative w-full max-w-4xl bg-black/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-responsive-xl font-bold text-white">Navigation Shortcuts</h2>
          <button
            onClick={() => setIsVisible(false)}
            className="p-2 text-gray-400 hover:text-white touch-target"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Keyboard Shortcuts */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Keyboard Shortcuts</h3>
              <div className="space-y-3">
                {shortcuts.map((shortcut) => (
                  <div key={shortcut.key} className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                    <div className="flex items-center space-x-3">
                      <shortcut.icon className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-300">{shortcut.description}</span>
                    </div>
                    <kbd className="px-2 py-1 text-xs font-mono bg-white/10 text-white rounded">
                      {shortcut.key}
                    </kbd>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Pages */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Recent Pages</h3>
              <div className="space-y-2">
                {recentPages.length > 0 ? (
                  recentPages.map((page, index) => (
                    <button
                      key={page}
                      onClick={() => {
                        navigateTo(page)
                        setIsVisible(false)
                      }}
                      className="flex items-center justify-between w-full p-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors touch-target"
                    >
                      <div className="flex items-center space-x-3">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span className="text-sm">{page}</span>
                      </div>
                      <span className="text-xs text-gray-500">{index + 1}</span>
                    </button>
                  ))
                ) : (
                  <p className="text-gray-500 text-sm">No recent pages</p>
                )}
              </div>
            </div>

            {/* Favorites */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Favorites</h3>
              <div className="space-y-2">
                {favorites.length > 0 ? (
                  favorites.map((page, index) => (
                    <div key={page} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                      <button
                        onClick={() => {
                          navigateTo(page)
                          setIsVisible(false)
                        }}
                        className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors touch-target"
                      >
                        <Star className="h-4 w-4 text-yellow-400" />
                        <span className="text-sm">{page}</span>
                      </button>
                      <div className="flex items-center space-x-2">
                        <kbd className="px-2 py-1 text-xs font-mono bg-white/10 text-white rounded">
                          ⌘{index + 1}
                        </kbd>
                        <button
                          onClick={() => removeFromFavorites(page)}
                          className="p-1 text-gray-400 hover:text-red-400 transition-colors touch-target"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-sm">No favorites yet</p>
                )}
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="mt-8 p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
            <h4 className="text-sm font-semibold text-purple-400 mb-2">Pro Tips</h4>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Use ⌘K to quickly search for any page or feature</li>
              <li>• Add frequently visited pages to favorites for quick access</li>
              <li>• Use ⌘B and ⌘F to navigate through your browsing history</li>
              <li>• Press ? anytime to see this shortcuts panel</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavigationShortcuts 