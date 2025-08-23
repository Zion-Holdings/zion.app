import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, Globe, Brain, Shield, Cpu, Cloud, BarChart3, Lock } from 'lucide-react';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

const SearchComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState<SearchResult[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Sample search data - in a real app, this would come from an API
  const searchData: SearchResult[] = [
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      description: 'Advanced AI solutions for enterprise automation',
      category: 'ai',
      url: '/ai-services',
      icon: Brain
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      description: 'Next-generation computational power',
      category: 'quantum',
      url: '/quantum-computing',
      icon: Cpu
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Military-grade protection for digital assets',
      category: 'security',
      url: '/cybersecurity',
      icon: Shield
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions for growth',
      category: 'cloud',
      url: '/cloud-platform',
      icon: Cloud
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      description: 'Transform data into actionable insights',
      category: 'analytics',
      url: '/data-analytics',
      icon: BarChart3
    },
    {
      id: 'blockchain',
      title: 'Blockchain Solutions',
      description: 'Secure, transparent digital infrastructure',
      category: 'blockchain',
      url: '/blockchain-solutions',
      icon: Lock
    },
    {
      id: 'quantum-ai',
      title: 'Quantum AI Fusion',
      description: 'Combining quantum computing with AI',
      category: 'quantum',
      url: '/quantum-ai-fusion',
      icon: Brain
    },
    {
      id: 'ai-automation',
      title: 'AI Process Automation',
      description: 'Automate complex business processes',
      category: 'ai',
      url: '/ai-automation-services',
      icon: Brain
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe },
    { id: 'ai', name: 'AI & ML', icon: Brain },
    { id: 'quantum', name: 'Quantum', icon: Cpu },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'cloud', name: 'Cloud', icon: Cloud },
    { id: 'analytics', name: 'Analytics', icon: BarChart3 },
    { id: 'blockchain', name: 'Blockchain', icon: Lock }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as HTMLElement)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.length > 0) {
      setIsLoading(true);
      // Simulate API call delay
      const timer = setTimeout(() => {
        const filtered = searchData.filter(item => {
          const matchesQuery = item.title.toLowerCase().includes(query.toLowerCase()) ||
                             item.description.toLowerCase().includes(query.toLowerCase());
          const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
          return matchesQuery && matchesCategory;
        });
        setFilteredResults(filtered);
        setIsLoading(false);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setFilteredResults([]);
    }
  }, [query, selectedCategory]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      // Handle search submission
      // console.log('Searching for:', query);
    }
  };

  const handleResultClick = (result: SearchResult) => {
    // Navigate to the result
    window.location.href = result.url;
  };

  return (
    <div className="relative" ref={searchRef}>
      {/* Search Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center space-x-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600 rounded-lg transition-colors"
        aria-label="Open search"
      >
        <Search className="w-4 h-4 text-gray-400" />
        <span className="text-gray-300 hidden sm:block">Search services...</span>
        <kbd className="hidden lg:inline-block px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded">⌘K</kbd>
      </button>

      {/* Search Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-start justify-center pt-20 px-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: -20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: -20 }}
              className="w-full max-w-2xl bg-gray-900 rounded-2xl border border-gray-700 shadow-2xl"
            >
              {/* Search Header */}
              <div className="p-6 border-b border-gray-700">
                <div className="flex items-center space-x-4">
                  <Search className="w-6 h-6 text-cyan-400" />
                  <form onSubmit={handleSearch} className="flex-1">
                    <input
                      type="text"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search for services, solutions, or technologies..."
                      className="w-full bg-transparent text-white text-lg placeholder-gray-400 outline-none"
                      autoFocus
                    />
                  </form>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                    aria-label="Close search"
                  >
                    <X className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
              </div>

              {/* Category Filters */}
              <div className="p-4 border-b border-gray-700">
                <div className="flex items-center space-x-2 overflow-x-auto pb-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                        selectedCategory === category.id
                          ? 'bg-cyan-500 text-white'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      <category.icon className="w-4 h-4" />
                      <span>{category.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Search Results */}
              <div className="max-h-96 overflow-y-auto">
                {isLoading ? (
                  <div className="p-8 text-center">
                    <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-400">Searching...</p>
                  </div>
                ) : filteredResults.length > 0 ? (
                  <div className="p-4 space-y-2">
                    {filteredResults.map((result) => (
                      <motion.div
                        key={result.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-800/50 cursor-pointer transition-colors group"
                        onClick={() => handleResultClick(result)}
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                          <result.icon className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                            {result.title}
                          </h3>
                          <p className="text-gray-400 text-sm">{result.description}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                      </motion.div>
                    ))}
                  </div>
                ) : query.length > 0 ? (
                  <div className="p-8 text-center">
                    <Search className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                    <p className="text-gray-400">No results found for "{query}"</p>
                    <p className="text-gray-500 text-sm mt-2">Try adjusting your search terms or filters</p>
                  </div>
                ) : (
                  <div className="p-8 text-center">
                    <Search className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                    <p className="text-gray-400">Start typing to search our services</p>
                    <p className="text-gray-500 text-sm mt-2">Use filters to narrow down results</p>
                  </div>
                )}
              </div>

              {/* Search Footer */}
              <div className="p-4 border-t border-gray-700 bg-gray-800/50 rounded-b-2xl">
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center space-x-4">
                    <span>Press Enter to search</span>
                    <span>•</span>
                    <span>Use filters to refine results</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <kbd className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">⌘K</kbd>
                    <span>to open search</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchComponent;