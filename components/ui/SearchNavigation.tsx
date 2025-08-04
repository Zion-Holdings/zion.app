import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Search, X, ArrowRight, Command } from 'lucide-react'

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
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Mock search results - in a real app, this would be an API call
  const mockSearchResults: SearchResult[] = [
    { title: 'AI Service Matcher', description: 'Find perfect services with AI', href: '/ai-service-matcher', category: 'Tools' },
    { title: 'Web Development', description: 'Professional web development services', href: '/services/web-development', category: 'Services' },
    { title: 'Data Analytics Expert', description: 'AI and data analytics professional', href: '/talents/data-analytics-expert', category: 'Talents' },
    { title: 'Cloud Infrastructure', description: 'Scalable cloud solutions', href: '/services/cloud-infrastructure', category: 'Services' },
    { title: 'Project Management', description: 'Manage your projects efficiently', href: '/project-management', category: 'Tools' },
    { title: 'Cybersecurity Services', description: 'Protect your digital assets', href: '/services/cybersecurity', category: 'Services' }
  ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setQuery('')
        setSelectedIndex(-1)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        setQuery('')
        setSelectedIndex(-1)
      } else if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        setIsOpen(true)
        inputRef.current?.focus()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

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
  }, [query])

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

  const handleResultClick = (href: string) => {
    window.location.href = href
    setIsOpen(false)
    setQuery('')
  }

  return (
    <div className={`relative ${className}`} ref={searchRef}>
      {/* Search Button */}
      <button
        onClick={() => setIsOpen(true)}
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
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
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
                onClick={() => setIsOpen(false)}
                className="ml-3 p-1 text-gray-400 hover:text-white touch-target"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Search Results */}
            {results.length > 0 && (
              <div className="max-h-96 overflow-y-auto">
                {results.map((result, index) => (
                  <button
                    key={result.href}
                    onClick={() => handleResultClick(result.href)}
                    className={`w-full text-left p-4 hover:bg-white/10 transition-colors ${
                      index === selectedIndex ? 'bg-white/10' : ''
                    } ${index < results.length - 1 ? 'border-b border-white/5' : ''}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-white font-medium">{result.title}</span>
                          <span className="text-xs text-purple-400 bg-purple-400/10 px-2 py-1 rounded">
                            {result.category}
                          </span>
                        </div>
                        <p className="text-sm text-gray-400 mt-1">{result.description}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-gray-400" />
                    </div>
                  </button>
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
                      onClick={() => setIsOpen(false)}
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