import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: string;
  category: string;
  href: string;
  icon?: React.ReactNode;
}

interface SearchBarProps {
  theme?: 'dark' | 'light';
  onSearch?: (query: string) => void;
  placeholder?: string;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  theme = 'dark', 
  onSearch, 
  placeholder = "Search revolutionary services...",
  className = ""
}) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Mock search results - in a real app, this would come from an API
  const mockSearchResults: SearchResult[] = [
    {
      id: '1',
      title: 'AI Consciousness Evolution 2044',
      description: 'Next-generation AI consciousness with emotional intelligence',
      type: 'AI Service',
      category: 'Artificial Intelligence',
      href: '/ai-consciousness-evolution-2044',
      icon: <Sparkles className="w-4 h-4" />
    },
    {
      id: '2',
      title: 'Quantum Neural Networks 2044',
      description: 'Quantum-powered AI with consciousness integration',
      type: 'Quantum Service',
      category: 'Quantum Computing',
      href: '/quantum-neural-network-platform-2044',
      icon: <Sparkles className="w-4 h-4" />
    },
    {
      id: '3',
      title: 'Space Resource Intelligence 2044',
      description: 'AI-powered space exploration with consciousness',
      type: 'Space Service',
      category: 'Space Technology',
      href: '/space-resource-intelligence-2044',
      icon: <Sparkles className="w-4 h-4" />
    }
  ];

  const performSearch = useCallback(async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Filter mock results based on query
    const filteredResults = mockSearchResults.filter(result =>
      result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    setResults(filteredResults);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      performSearch(query);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query, performSearch]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (resultsRef.current && !resultsRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputFocus = () => {
    setIsOpen(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setIsOpen(true);
    setSelectedIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => 
        prev < results.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0 && results[selectedIndex]) {
        handleResultClick(results[selectedIndex]);
      } else if (query.trim()) {
        handleSearch();
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      setSelectedIndex(-1);
    }
  };

  const handleResultClick = (result: SearchResult) => {
    window.location.href = result.href;
    setIsOpen(false);
    setQuery('');
    setSelectedIndex(-1);
  };

  const handleSearch = () => {
    if (onSearch && query.trim()) {
      onSearch(query.trim());
    }
    setIsOpen(false);
  };

  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setSelectedIndex(-1);
    inputRef.current?.focus();
  };

  return (
    <div className={`relative ${className}`} ref={resultsRef}>
      {/* Search Input */}
      <div className={`relative group ${
        theme === 'dark' 
          ? 'bg-gray-800/80 border-gray-600/50' 
          : 'bg-white/80 border-gray-200/50'
      } border rounded-2xl backdrop-blur-sm transition-all duration-300 focus-within:border-cyan-400/50 focus-within:shadow-[0_0_30px_rgba(6,182,212,0.3)]`}>
        <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
        }`} />
        
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={`w-full pl-12 pr-12 py-4 bg-transparent outline-none text-lg ${
            theme === 'dark' ? 'text-white placeholder-gray-400' : 'text-gray-900 placeholder-gray-500'
          }`}
          aria-label="Search for services"
        />
        
        {query && (
          <button
            onClick={clearSearch}
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-1 rounded-full hover:bg-gray-600/20 transition-colors duration-200 ${
              theme === 'dark' ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'
            }`}
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      <AnimatePresence>
        {isOpen && (query.trim() || isLoading) && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`absolute top-full left-0 right-0 mt-2 ${
              theme === 'dark' 
                ? 'bg-gray-800/95 border-gray-600/50' 
                : 'bg-white/95 border-gray-200/50'
            } border rounded-2xl backdrop-blur-xl shadow-2xl max-h-96 overflow-y-auto z-50`}
          >
            {isLoading ? (
              <div className="p-6 text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400 mx-auto mb-2"></div>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  Searching...
                </p>
              </div>
            ) : results.length > 0 ? (
              <div className="p-2">
                {results.map((result, index) => (
                  <motion.div
                    key={result.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`p-4 rounded-xl cursor-pointer transition-all duration-200 ${
                      index === selectedIndex
                        ? theme === 'dark' 
                          ? 'bg-cyan-500/20 border border-cyan-400/30' 
                          : 'bg-cyan-100/50 border border-cyan-200/50'
                        : theme === 'dark'
                          ? 'hover:bg-gray-700/50' 
                          : 'hover:bg-gray-100/50'
                    }`}
                    onClick={() => handleResultClick(result)}
                    onMouseEnter={() => setSelectedIndex(index)}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        theme === 'dark' 
                          ? 'bg-cyan-500/20 text-cyan-400' 
                          : 'bg-cyan-100 text-cyan-600'
                      }`}>
                        {result.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className={`font-semibold mb-1 ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                          {result.title}
                        </h4>
                        <p className={`text-sm mb-2 ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {result.description}
                        </p>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            theme === 'dark' 
                              ? 'bg-purple-500/20 text-purple-300' 
                              : 'bg-purple-100 text-purple-700'
                          }`}>
                            {result.type}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            theme === 'dark' 
                              ? 'bg-blue-500/20 text-blue-300' 
                              : 'bg-blue-100 text-blue-700'
                          }`}>
                            {result.category}
                          </span>
                        </div>
                      </div>
                      <ArrowRight className={`w-5 h-5 ${
                        theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                      }`} />
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : query.trim() && !isLoading ? (
              <div className="p-6 text-center">
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  No results found for "{query}"
                </p>
                <p className={`text-xs mt-1 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
                  Try different keywords or browse our services
                </p>
              </div>
            ) : null}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;