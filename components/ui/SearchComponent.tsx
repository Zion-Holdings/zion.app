import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Filter, ArrowRight, Globe, Brain, Shield, Rocket, Atom } from 'lucide-react';
import Link from 'next/link';
import AccessibilityEnhancer from './AccessibilityEnhancer';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'service' | 'solution' | 'page' | 'resource';
  url: string;
  category: string;
  tags: string[];
}

const SearchComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [filteredResults, setFilteredResults] = useState<SearchResult[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Mock search data - in a real app, this would come from an API
  const searchData: SearchResult[] = [
    {
      id: '1',
      title: 'AI-Powered Autonomous Business Operations',
      description: 'Revolutionary AI platform that autonomously manages and optimizes your entire business operations.',
      type: 'service',
      url: '/services/ai-autonomous-business',
      category: 'AI & Machine Learning',
      tags: ['AI', 'automation', 'business', 'operations']
    },
    {
      id: '2',
      title: 'Quantum-Secure Cloud Infrastructure',
      description: 'Next-generation cloud platform with quantum encryption and advanced security protocols.',
      type: 'service',
      url: '/services/quantum-secure-cloud',
      category: 'Quantum Computing',
      tags: ['quantum', 'cloud', 'security', 'encryption']
    },
    {
      id: '3',
      title: 'AI-Powered Space Technology Platform',
      description: 'Cutting-edge AI platform for space exploration, satellite management, and cosmic data analysis.',
      type: 'service',
      url: '/services/space-tech-ai',
      category: 'Space Technology',
      tags: ['AI', 'space', 'satellite', 'exploration']
    },
    {
      id: '4',
      title: 'Zero-Trust Security Architecture',
      description: 'Advanced cybersecurity framework implementing zero-trust principles for maximum protection.',
      type: 'solution',
      url: '/solutions/zero-trust-security',
      category: 'Cybersecurity',
      tags: ['security', 'zero-trust', 'cybersecurity', 'protection']
    },
    {
      id: '5',
      title: 'Micro SaaS Solutions',
      description: 'Ready-to-deploy micro SaaS applications that solve specific business problems.',
      type: 'service',
      url: '/services/micro-saas',
      category: 'Micro SaaS',
      tags: ['SaaS', 'micro', 'business', 'solutions']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories', icon: <Globe className="w-4 h-4" /> },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: <Brain className="w-4 h-4" /> },
    { id: 'quantum', name: 'Quantum Computing', icon: <Atom className="w-4 h-4" /> },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: <Shield className="w-4 h-4" /> },
    { id: 'space-tech', name: 'Space Technology', icon: <Rocket className="w-4 h-4" /> },
    { id: 'micro-saas', name: 'Micro SaaS', icon: <Globe className="w-4 h-4" /> }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setQuery('');
        setSelectedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;

      switch (event.key) {
        case 'Escape':
          setIsOpen(false);
          setQuery('');
          setSelectedIndex(-1);
          break;
        case 'ArrowDown':
          event.preventDefault();
          setSelectedIndex(prev => 
            prev < filteredResults.length - 1 ? prev + 1 : prev
          );
          break;
        case 'ArrowUp':
          event.preventDefault();
          setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
          break;
        case 'Enter':
          event.preventDefault();
          if (selectedIndex >= 0 && filteredResults[selectedIndex]) {
            window.location.href = filteredResults[selectedIndex].url;
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredResults, selectedIndex]);

  useEffect(() => {
    if (query.trim() === '') {
      setFilteredResults([]);
      return;
    }

    setIsLoading(true);
    
    // Simulate API delay
    const timeout = setTimeout(() => {
      const searchTerm = query.toLowerCase();
      let filtered = searchData.filter(item => 
        item.title.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm))
      );

      // Apply category filter
      if (selectedCategory !== 'all') {
        filtered = filtered.filter(item => 
          item.category.toLowerCase().includes(selectedCategory.replace('-', ' '))
        );
      }

      setFilteredResults(filtered);
      setIsLoading(false);
      setSelectedIndex(-1);
    }, 300);

    return () => clearTimeout(timeout);
  }, [query, selectedCategory]);

  const handleSearch = () => {
    if (query.trim()) {
      setIsOpen(true);
      inputRef.current?.focus();
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'service':
        return <Brain className="w-4 h-4 text-blue-500" />;
      case 'solution':
        return <Shield className="w-4 h-4 text-green-500" />;
      case 'page':
        return <Globe className="w-4 h-4 text-purple-500" />;
      case 'resource':
        return <Rocket className="w-4 h-4 text-orange-500" />;
      default:
        return <Globe className="w-4 h-4 text-gray-500" />;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'service':
        return 'Service';
      case 'solution':
        return 'Solution';
      case 'page':
        return 'Page';
      case 'resource':
        return 'Resource';
      default:
        return 'Item';
    }
  };

  return (
    <div className="relative" ref={searchRef}>
      {/* Search Button */}
      <AccessibilityEnhancer>
        <button
          onClick={handleSearch}
          className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
          aria-label="Open search"
        >
          <Search className="w-4 h-4" />
          <span className="hidden sm:inline">Search</span>
        </button>
      </AccessibilityEnhancer>

      {/* Search Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Search Container */}
            <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-gray-200">
              {/* Search Header */}
              <div className="flex items-center space-x-4 p-6 border-b border-gray-200">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search for services, solutions, resources..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    autoFocus
                  />
                </div>
                <AccessibilityEnhancer>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                    aria-label="Close search"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </AccessibilityEnhancer>
              </div>

              {/* Category Filters */}
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center space-x-2 overflow-x-auto pb-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                        selectedCategory === category.id
                          ? 'bg-blue-100 text-blue-700 border border-blue-200'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {category.icon}
                      <span>{category.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Search Results */}
              <div className="max-h-96 overflow-y-auto">
                {isLoading ? (
                  <div className="p-8 text-center text-gray-500">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
                    Searching...
                  </div>
                ) : filteredResults.length > 0 ? (
                  <div className="p-2">
                    {filteredResults.map((result, index) => (
                      <Link
                        key={result.id}
                        href={result.url}
                        onClick={() => setIsOpen(false)}
                        className={`block p-4 rounded-xl transition-all duration-200 ${
                          index === selectedIndex
                            ? 'bg-blue-50 border border-blue-200'
                            : 'hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 mt-1">
                            {getTypeIcon(result.type)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2 mb-1">
                              <h3 className="text-sm font-semibold text-gray-900 truncate">
                                {result.title}
                              </h3>
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                {getTypeLabel(result.type)}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                              {result.description}
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-gray-500">{result.category}</span>
                              <ArrowRight className="w-4 h-4 text-gray-400" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : query.trim() ? (
                  <div className="p-8 text-center text-gray-500">
                    <Search className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                    <p className="text-lg font-medium mb-2">No results found</p>
                    <p className="text-sm">Try adjusting your search terms or browse our categories</p>
                  </div>
                ) : (
                  <div className="p-8 text-center text-gray-500">
                    <Search className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                    <p className="text-lg font-medium mb-2">Start typing to search</p>
                    <p className="text-sm">Search for services, solutions, and resources</p>
                  </div>
                )}
              </div>

              {/* Search Footer */}
              <div className="p-4 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <span>↑↓ Navigate</span>
                    <span>Enter Select</span>
                    <span>Esc Close</span>
                  </div>
                  <span>{filteredResults.length} results</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchComponent;