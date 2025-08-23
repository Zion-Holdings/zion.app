import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  X, 
  Clock, 
  TrendingUp, 
  Sparkles, 
  ArrowRight,
  Filter,
  History,
  Zap,
  Globe,
  Brain,
  Shield,
  Rocket,
  Cloud,
  Target,
  Building,
  Users,
  BookOpen,
  FileText,
  Video,
  Code,
  Star,
  Layers,
  Grid,
  BarChart3,
  Settings,
  HelpCircle,
  MessageCircle,
  Calendar,
  Award,
  Lightbulb,
  Play,
  DollarSign,
  GraduationCap,
  Lock,
  Key,
  Network,
  Satellite,
  Server,
  Store,
  Truck
} from 'lucide-react';
import { useRouter } from 'next/router';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  icon: React.ReactNode;
  relevance: number;
  tags: string[];
}

interface SearchSuggestion {
  id: string;
  text: string;
  category: string;
  icon: React.ReactNode;
  type: 'recent' | 'trending' | 'quick-action';
}

interface SearchCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  count: number;
}

const EnhancedSearch: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isSearching, setIsSearching] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  
  const searchInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Search categories with icons and colors
  const searchCategories: SearchCategory[] = [
    { id: 'all', name: 'All', icon: <Sparkles className="w-4 h-4" />, color: 'from-purple-500 to-pink-500', count: 0 },
    { id: 'ai', name: 'AI & ML', icon: <Brain className="w-4 h-4" />, color: 'from-cyan-500 to-blue-500', count: 0 },
    { id: 'security', name: 'Security', icon: <Shield className="w-4 h-4" />, color: 'from-red-500 to-orange-500', count: 0 },
    { id: 'cloud', name: 'Cloud', icon: <Cloud className="w-4 h-4" />, color: 'from-blue-500 to-indigo-500', count: 0 },
    { id: 'business', name: 'Business', icon: <Target className="w-4 h-4" />, color: 'from-emerald-500 to-teal-500', count: 0 },
    { id: 'infrastructure', name: 'Infrastructure', icon: <Server className="w-4 h-4" />, color: 'from-yellow-500 to-orange-500', count: 0 }
  ];

  // Quick action buttons
  const quickActions = [
    { name: 'AI Services', icon: <Brain className="w-4 h-4" />, action: '/services?category=ai' },
    { name: 'Security Solutions', icon: <Shield className="w-4 h-4" />, action: '/services?category=security' },
    { name: 'Cloud Platform', icon: <Cloud className="w-4 h-4" />, action: '/services?category=cloud' },
    { name: 'Contact Us', icon: <MessageCircle className="w-4 h-4" />, action: '/contact' }
  ];

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('recent-searches');
    if (saved) {
      try {
        setRecentSearches(JSON.parse(saved));
      } catch (error) {
        console.error('Failed to load recent searches:', error);
      }
    }
  }, []);

  // Save recent searches to localStorage
  const saveRecentSearch = useCallback((searchTerm: string) => {
    if (!searchTerm.trim()) return;
    
    const updated = [searchTerm, ...recentSearches.filter(s => s !== searchTerm)].slice(0, 10);
    setRecentSearches(updated);
    localStorage.setItem('recent-searches', JSON.stringify(updated));
  }, [recentSearches]);

  // Generate trending suggestions
  const generateTrendingSuggestions = useCallback(() => {
    return [
      { id: 'ai-automation', text: 'AI Automation', category: 'ai', icon: <Brain className="w-4 h-4" />, type: 'trending' as const },
      { id: 'quantum-security', text: 'Quantum Security', category: 'security', icon: <Shield className="w-4 h-4" />, type: 'trending' as const },
      { id: 'cloud-migration', text: 'Cloud Migration', category: 'cloud', icon: <Cloud className="w-4 h-4" />, type: 'trending' as const },
      { id: 'business-intelligence', text: 'Business Intelligence', category: 'business', icon: <Target className="w-4 h-4" />, type: 'trending' as const }
    ];
  }, []);

  // Generate recent search suggestions
  const generateRecentSuggestions = useCallback(() => {
    return recentSearches.map(search => ({
      id: `recent-${search}`,
      text: search,
      category: 'recent',
      icon: <Clock className="w-4 h-4" />,
      type: 'recent' as const
    }));
  }, [recentSearches]);

  // Update suggestions when query changes
  useEffect(() => {
    if (query.trim()) {
      const trending = generateTrendingSuggestions();
      const recent = generateRecentSuggestions();
      const filtered = [...trending, ...recent].filter(suggestion =>
        suggestion.text.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([...generateTrendingSuggestions(), ...generateRecentSuggestions()]);
      setShowSuggestions(true);
    }
  }, [query, generateTrendingSuggestions, generateRecentSuggestions]);

  // Handle search submission
  const handleSearch = useCallback(async (searchTerm?: string) => {
    const term = searchTerm || query.trim();
    if (!term) return;

    setIsSearching(true);
    saveRecentSearch(term);
    
    try {
      // Simulate search API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Mock search results
      const mockResults: SearchResult[] = [
        {
          id: '1',
          title: 'AI Autonomous Business Orchestrator',
          description: 'Fully autonomous AI system for business operations with quantum computing integration',
          url: '/ai-autonomous-business-orchestrator',
          category: 'ai',
          icon: <Brain className="w-5 h-5" />,
          relevance: 0.95,
          tags: ['AI', 'Automation', 'Business', 'Quantum']
        },
        {
          id: '2',
          title: 'Quantum AI Cybersecurity Sentinel',
          description: 'Quantum-powered AI security with consciousness-level threat detection',
          url: '/quantum-ai-cybersecurity-sentinel',
          category: 'security',
          icon: <Shield className="w-5 h-5" />,
          relevance: 0.92,
          tags: ['Quantum', 'AI', 'Security', 'Cybersecurity']
        },
        {
          id: '3',
          title: 'Cloud Infrastructure Optimization',
          description: 'Advanced cloud infrastructure management with AI-driven optimization',
          url: '/cloud-infrastructure-optimization',
          category: 'cloud',
          icon: <Cloud className="w-5 h-5" />,
          relevance: 0.88,
          tags: ['Cloud', 'Infrastructure', 'AI', 'Optimization']
        }
      ];

      setResults(mockResults);
      setIsOpen(true);
      setShowSuggestions(false);
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setIsSearching(false);
    }
  }, [query, saveRecentSearch]);

  // Handle suggestion click
  const handleSuggestionClick = useCallback((suggestion: SearchSuggestion) => {
    if (suggestion.type === 'quick-action') {
      router.push(suggestion.text);
    } else {
      setQuery(suggestion.text);
      handleSearch(suggestion.text);
    }
  }, [router, handleSearch]);

  // Handle quick action click
  const handleQuickAction = useCallback((action: string) => {
    router.push(action);
    setIsOpen(false);
  }, [router]);

  // Handle result click
  const handleResultClick = useCallback((result: SearchResult) => {
    router.push(result.url);
    setIsOpen(false);
    setQuery('');
  }, [router]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      setShowSuggestions(false);
    }
  }, [handleSearch]);

  // Focus search input when opened
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <>
      {/* Search Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="relative flex items-center space-x-2 px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/70 transition-all duration-300 group"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Search className="w-4 h-4" />
        <span className="hidden sm:inline text-sm">Search</span>
        <kbd className="hidden lg:inline-flex items-center px-2 py-1 text-xs font-medium text-gray-400 bg-gray-700 rounded border border-gray-600">
          ⌘K
        </kbd>
      </motion.button>

      {/* Search Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              className="relative max-w-4xl mx-auto mt-20 mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Search Input */}
              <div className="relative">
                <div className="relative flex items-center bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl overflow-hidden">
                  <div className="flex-shrink-0 pl-4">
                    <Search className="w-6 h-6 text-gray-400" />
                  </div>
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Search for services, solutions, or information..."
                    className="flex-1 px-4 py-4 bg-transparent text-white placeholder-gray-400 focus:outline-none text-lg"
                  />
                  {query && (
                    <button
                      onClick={() => setQuery('')}
                      className="flex-shrink-0 p-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                  <div className="flex-shrink-0 pr-4">
                    <button
                      onClick={() => handleSearch()}
                      disabled={isSearching || !query.trim()}
                      className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSearching ? 'Searching...' : 'Search'}
                    </button>
                  </div>
                </div>

                {/* Search Suggestions */}
                <AnimatePresence>
                  {showSuggestions && suggestions.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-gray-900 border border-gray-700 rounded-xl shadow-2xl overflow-hidden z-10"
                    >
                      {/* Quick Actions */}
                      <div className="p-4 border-b border-gray-700">
                        <h3 className="text-sm font-medium text-gray-400 mb-3">Quick Actions</h3>
                        <div className="grid grid-cols-2 gap-2">
                          {quickActions.map((action) => (
                            <button
                              key={action.name}
                              onClick={() => handleQuickAction(action.action)}
                              className="flex items-center space-x-2 p-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                            >
                              {action.icon}
                              <span>{action.name}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Suggestions */}
                      <div className="max-h-64 overflow-y-auto">
                        {suggestions.map((suggestion) => (
                          <button
                            key={suggestion.id}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-800 transition-colors"
                          >
                            <div className="text-gray-400">
                              {suggestion.icon}
                            </div>
                            <div className="flex-1">
                              <div className="text-white">{suggestion.text}</div>
                              <div className="text-sm text-gray-400 capitalize">
                                {suggestion.type} • {suggestion.category}
                              </div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-400" />
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Search Results */}
              <AnimatePresence>
                {results.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="mt-4 bg-gray-900 border border-gray-700 rounded-xl shadow-2xl overflow-hidden"
                  >
                    {/* Results Header */}
                    <div className="p-4 border-b border-gray-700">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-white">
                          Search Results ({results.length})
                        </h3>
                        <div className="flex items-center space-x-2">
                          <Filter className="w-4 h-4 text-gray-400" />
                          <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="bg-gray-800 border border-gray-600 text-white text-sm rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                          >
                            {searchCategories.map((category) => (
                              <option key={category.id} value={category.id}>
                                {category.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Results List */}
                    <div className="max-h-96 overflow-y-auto">
                      {results
                        .filter(result => selectedCategory === 'all' || result.category === selectedCategory)
                        .map((result) => (
                          <motion.button
                            key={result.id}
                            onClick={() => handleResultClick(result)}
                            className="w-full flex items-start space-x-4 p-4 text-left hover:bg-gray-800 transition-colors border-b border-gray-700 last:border-b-0"
                            whileHover={{ x: 4 }}
                          >
                            <div className="flex-shrink-0 text-cyan-400">
                              {result.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-white font-medium mb-1">{result.title}</h4>
                              <p className="text-gray-400 text-sm mb-2">{result.description}</p>
                              <div className="flex flex-wrap gap-1">
                                {result.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded-full"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="flex-shrink-0">
                              <div className="text-sm text-gray-500">
                                {Math.round(result.relevance * 100)}% match
                              </div>
                            </div>
                          </motion.button>
                        ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EnhancedSearch;