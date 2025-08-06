import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

interface SearchResult {
  id: string
  title: string
  description: string
  type: 'service' | 'talent' | 'product'
  category: string
  price?: string
  rating?: number
  link: string
}

const InteractiveSearch = () => {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [results, setResults] = useState<SearchResult[]>([])
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [isLoading, setIsLoading] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  // Mock search results - in real app, this would come from API
  const mockResults: SearchResult[] = [
    {
      id: '1',
      title: 'AI Model Development',
      description: 'Custom AI solutions and machine learning models',
      type: 'service',
      category: 'AI Development',
      price: '$150-500/hr',
      rating: 4.9,
      link: '/services/ai-model-development'
    },
    {
      id: '2',
      title: 'Dr. Sarah Chen',
      description: 'Machine Learning Expert with 8+ years experience',
      type: 'talent',
      category: 'AI Specialist',
      price: '$200/hr',
      rating: 4.9,
      link: '/talent'
    },
    {
      id: '3',
      title: 'Cloud Migration Services',
      description: 'Seamless cloud infrastructure setup and migration',
      type: 'service',
      category: 'Cloud Computing',
      price: '$2000-15000',
      rating: 4.8,
      link: '/services/cloud-migration-services'
    },
    {
      id: '4',
      title: 'High-Performance GPU Cluster',
      description: 'Enterprise-grade computing hardware for AI workloads',
      type: 'product',
      category: 'Hardware',
      price: '$50,000+',
      rating: 4.7,
      link: '/products'
    }
  ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (query.length < 2) {
      setResults([])
      setIsOpen(false)
      return
    }

    setIsLoading(true)
    
    // Simulate API delay
    const timer = setTimeout(() => {
      const filteredResults = mockResults.filter(result =>
        result.title.toLowerCase().includes(query.toLowerCase()) ||
        result.description.toLowerCase().includes(query.toLowerCase()) ||
        result.category.toLowerCase().includes(query.toLowerCase())
      )
      
      setResults(filteredResults)
      setIsOpen(true)
      setIsLoading(false)
      setSelectedIndex(-1)
    }, 300)

    return () => clearTimeout(timer)
  }, [query])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex(prev => 
        prev < results.length - 1 ? prev + 1 : prev
      )
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex(prev => prev > 0 ? prev - 1 : -1)
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (selectedIndex >= 0 && results[selectedIndex]) {
        window.location.href = results[selectedIndex].link
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false)
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'service': return '🛠️'
      case 'talent': return '👤'
      case 'product': return '📦'
      default: return '🔍'
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'service': return 'text-neon-blue'
      case 'talent': return 'text-neon-purple'
      case 'product': return 'text-neon-green'
      default: return 'text-gray-400'
    }
  }

  return (
    <div className="relative" ref={searchRef}>
      {/* Search Input */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search services, talents, products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query.length >= 2 && setIsOpen(true)}
          className="w-full px-4 py-3 pl-12 bg-black/20 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
        />
        
        {/* Search Icon */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <span className="text-lg">🔍</span>
          )}
        </div>

        {/* Clear Button */}
        {query && (
          <button
            onClick={() => {
              setQuery('')
              setResults([])
              setIsOpen(false)
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
          >
            ✕
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-black/90 backdrop-blur-md border border-white/20 rounded-lg shadow-2xl z-50 max-h-96 overflow-y-auto">
          {results.map((result, index) => (
            <Link
              key={result.id}
              href={result.link}
              className={`block p-4 hover:bg-white/10 transition-colors duration-200 ${
                index === selectedIndex ? 'bg-white/10' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-start gap-3">
                <div className="text-2xl">{getTypeIcon(result.type)}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-white font-semibold truncate">
                      {result.title}
                    </h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${getTypeColor(result.type)} bg-white/10`}>
                      {result.type}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm mb-2 line-clamp-2">
                    {result.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{result.category}</span>
                    <div className="flex items-center gap-2">
                      {result.price && (
                        <span className="text-neon-green font-medium">
                          {result.price}
                        </span>
                      )}
                      {result.rating && (
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-400">★</span>
                          <span>{result.rating}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* No Results */}
      {isOpen && query.length >= 2 && results.length === 0 && !isLoading && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-black/90 backdrop-blur-md border border-white/20 rounded-lg shadow-2xl z-50 p-4">
          <div className="text-center text-gray-400">
            <div className="text-2xl mb-2">🔍</div>
            <p>No results found for "{query}"</p>
            <p className="text-sm mt-1">Try different keywords or browse our categories</p>
          </div>
        </div>
      )}

      {/* Search Suggestions */}
      {isOpen && query.length < 2 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-black/90 backdrop-blur-md border border-white/20 rounded-lg shadow-2xl z-50 p-4">
          <div className="text-center text-gray-400">
            <div className="text-2xl mb-2">💡</div>
            <p>Start typing to search</p>
            <div className="mt-3 flex flex-wrap gap-2 justify-center">
              {['AI Development', 'Cloud Services', 'Cybersecurity', 'Data Science'].map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => setQuery(suggestion)}
                  className="px-3 py-1 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default InteractiveSearch
