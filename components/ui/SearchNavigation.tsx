import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Search, X, ArrowRight, Command, Star } from 'lucide-react'
import { useNavigation } from '../../src/contexts/NavigationContext'

interface SearchResult {
  title: string
  description: string
  href: string
  category: string
}

interface SearchNavigationProps {
  className?: string
  placeholder?: string
}

const SearchNavigation: React.FC<SearchNavigationProps> = ({ 
  className = '',
  placeholder = 'Search services, products, talents...'
}) => {
  const { state, openSearch, closeSearch, addToFavorites, removeFromFavorites, navigateTo } = useNavigation()
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [isClient, setIsClient] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Mock search results - in a real app, this would be an API call
  const mockSearchResults: SearchResult[] = React.useMemo(() => [
    { title: 'AI Service Matcher', description: 'Find perfect services with AI', href: '/ai-service-matcher', category: 'Tools' },
    { title: 'Web Development', description: 'Professional web development services', href: '/services/web-development', category: 'Services' },
    { title: 'Data Analytics Expert', description: 'AI and data analytics professional', href: '/talents/data-analytics-expert', category: 'Talents' },
    { title: 'Cloud Infrastructure', description: 'Scalable cloud solutions', href: '/services/cloud-infrastructure', category: 'Services' },
    { title: 'Project Management', description: 'Manage your projects efficiently', href: '/project-management', category: 'Tools' },
    { title: 'Cybersecurity Services', description: 'Protect your digital assets', href: '/services/cybersecurity', category: 'Services' }
  ], [])

  useEffect(() => {
    if (!isClient) return

    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        closeSearch()
        setQuery('')
        setSelectedIndex(-1)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeSearch()
        setQuery('')
        setSelectedIndex(-1)
      } else if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        openSearch()
        inputRef.current?.focus()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [openSearch, closeSearch, isClient])

  useEffect(() => {
    if (query.trim()) {
      const filtered = mockSearchResults.filter(result =>
        result.title.toLowerCase().includes(query.toLowerCase()) ||
        result.description.toLowerCase().includes(query.toLowerCase()) ||
        result.category.toLowerCase().includes(query.toLowerCase())
      )
      setResults(filtered)
    } else {
      setResults([])
    }
    setSelectedIndex(-1)
  }, [query, mockSearchResults])

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setSelectedIndex(prev => prev < results.length - 1 ? prev + 1 : prev)
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setSelectedIndex(prev => prev > 0 ? prev - 1 : -1)
    } else if (event.key === 'Enter') {
      event.preventDefault()
      if (selectedIndex >= 0 && results[selectedIndex]) {
        window.location.href = results[selectedIndex].href
      }
    }
  }

  // Don't render anything during SSR
  if (!isClient) return null

  const handleResultClick = (href: string) => {
    navigateTo(href)
    closeSearch()
    setQuery('')
  }

  return (
    <div className={`relative ${className}`} ref={searchRef}>
      {/* Search Button */}
      <button
        onClick={() => openSearch()}
        className="flex items-center space-x-2 px-3 py-2 text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-200 touch-target"
        aria-label="Open search"
      >
        <Search className="h-4 w-4" />
        <span className="hidden sm:block text-responsive-sm">Search</span>
        <div className="hidden sm:flex items-center space-x-1 text-xs text-gray-400">
          <Command className="h-3 w-3" />
          <span>K</span>
        </div>
      </button>

      {/* Search Modal */}
      {state.isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
                      {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => closeSearch()}
            />
          
          {/* Search Panel */}
          <div className="relative w-full max-w-2xl bg-black/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl">
            {/* Search Input */}
            <div className="flex items-center p-4 border-b border-white/10">
              <Search className="h-5 w-5 text-gray-400 mr-3" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none text-responsive-base"
                autoFocus
              />
              <button
                onClick={() => closeSearch()}
                className="ml-3 p-1 text-gray-400 hover:text-white touch-target"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Search Results */}
            {results.length > 0 && (
              <div className="max-h-96 overflow-y-auto">
                {results.map((result, index) => (
                                     <div
                     key={result.href}
                     className={`w-full text-left p-4 hover:bg-white/10 transition-colors ${
                       index === selectedIndex ? 'bg-white/10' : ''
                     } ${index < results.length - 1 ? 'border-b border-white/5' : ''}`}
                   >
                     <div className="flex items-center justify-between">
                       <div className="flex-1">
                         <button
                           onClick={() => handleResultClick(result.href)}
                           className="w-full text-left"
                         >
                           <div className="flex items-center space-x-2">
                             <span className="text-white font-medium">{result.title}</span>
                             <span className="text-xs text-purple-400 bg-purple-400/10 px-2 py-1 rounded">
                               {result.category}
                             </span>
                           </div>
                           <p className="text-sm text-gray-400 mt-1">{result.description}</p>
                         </button>
                       </div>
                       <div className="flex items-center space-x-2">
                         <button
                           onClick={(e) => {
                             e.stopPropagation()
                             if (state.favorites.includes(result.href)) {
                               removeFromFavorites(result.href)
                             } else {
                               addToFavorites(result.href)
                             }
                           }}
                           className="p-1 text-gray-400 hover:text-yellow-400 transition-colors touch-target"
                           title={state.favorites.includes(result.href) ? 'Remove from favorites' : 'Add to favorites'}
                         >
                           <Star className={`h-4 w-4 ${state.favorites.includes(result.href) ? 'text-yellow-400 fill-current' : ''}`} />
                         </button>
                         <ArrowRight className="h-4 w-4 text-gray-400" />
                       </div>
                     </div>
                   </div>
                ))}
              </div>
            )}

            {/* No Results */}
            {query.trim() && results.length === 0 && (
              <div className="p-8 text-center">
                <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-400">No results found for "{query}"</p>
                <p className="text-sm text-gray-500 mt-2">Try different keywords or browse our categories</p>
              </div>
            )}

            {/* Quick Links */}
            {!query.trim() && (
              <div className="p-4 border-t border-white/10">
                <h3 className="text-sm font-medium text-gray-400 mb-3">Quick Links</h3>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: 'Marketplace', href: '/marketplace' },
                    { label: 'Services', href: '/services' },
                    { label: 'Talents', href: '/talents' },
                    { label: 'Tools', href: '/tools' }
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => closeSearch()}
                      className="text-sm text-gray-300 hover:text-white p-2 rounded hover:bg-white/10 transition-colors touch-target"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchNavigation 