import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';

interface SearchResult {
  id: string;
  title: string;
  content: string;
  type: 'article' | 'component' | 'tutorial' | 'report' | 'automation';
  category: string;
  tags: string[];
  relevance: number;
  lastUpdated: string;
  author: string;
  readTime: number;
  views: number;
  excerpt: string;
}

interface SearchFilters {
  type: string[];
  category: string[];
  tags: string[];
  dateRange: string;
  author: string[];
  minRelevance: number;
}

const AISearchEngine: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [filters, setFilters] = useState<SearchFilters>({
    type: [],
    category: [],
    tags: [],
    dateRange: 'all',
    author: [],
    minRelevance: 0
  });
  const [isSearching, setIsSearching] = useState(false);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<Set<string>>(new Set());
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState<'relevance' | 'date' | 'views' | 'readTime'>('relevance');
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Mock data for demonstration
  const mockResults: SearchResult[] = [
    {
      id: '1',
      title: 'Advanced Workflow Orchestration in Zion App',
      content: 'Comprehensive guide to implementing intelligent workflow management with dependency resolution and parallel execution.',
      type: 'tutorial',
      category: 'Automation',
      tags: ['workflow', 'orchestration', 'automation', 'dependencies'],
      relevance: 0.95,
      lastUpdated: '2024-01-15',
      author: 'Zion Tech Team',
      readTime: 12,
      views: 1247,
      excerpt: 'Learn how to build sophisticated automation workflows with intelligent dependency management and resource optimization.'
    },
    {
      id: '2',
      title: 'Performance Dashboard Implementation',
      content: 'Real-time monitoring system for system performance, automation health, and user engagement metrics.',
      type: 'component',
      category: 'Monitoring',
      tags: ['dashboard', 'performance', 'monitoring', 'metrics'],
      relevance: 0.88,
      lastUpdated: '2024-01-14',
      author: 'Zion Tech Team',
      readTime: 8,
      views: 892,
      excerpt: 'Comprehensive performance monitoring dashboard with real-time metrics and intelligent alerting.'
    },
    {
      id: '3',
      title: 'AI Content Generation Strategies',
      content: 'Advanced techniques for generating high-quality, SEO-optimized content using artificial intelligence.',
      type: 'article',
      category: 'Content',
      tags: ['ai', 'content', 'seo', 'generation'],
      relevance: 0.92,
      lastUpdated: '2024-01-13',
      author: 'Content Team',
      readTime: 15,
      views: 1567,
      excerpt: 'Discover how AI-powered content generation can revolutionize your content strategy and improve SEO performance.'
    },
    {
      id: '4',
      title: 'Analytics Dashboard Deep Dive',
      content: 'Comprehensive analytics system providing insights into user behavior, performance metrics, and business intelligence.',
      type: 'report',
      category: 'Analytics',
      tags: ['analytics', 'dashboard', 'insights', 'metrics'],
      relevance: 0.85,
      lastUpdated: '2024-01-12',
      author: 'Analytics Team',
      readTime: 20,
      views: 2341,
      excerpt: 'Deep dive into our advanced analytics dashboard with comprehensive metrics and intelligent insights.'
    },
    {
      id: '5',
      title: 'Automation Health Monitoring System',
      content: 'Real-time monitoring and alerting system for automation workflows with predictive maintenance capabilities.',
      type: 'automation',
      category: 'Monitoring',
      tags: ['automation', 'health', 'monitoring', 'alerts'],
      relevance: 0.90,
      lastUpdated: '2024-01-11',
      author: 'Automation Team',
      readTime: 10,
      views: 1103,
      excerpt: 'Advanced automation health monitoring with real-time alerts and predictive maintenance insights.'
    }
  ];

  const availableTypes = ['article', 'component', 'tutorial', 'report', 'automation'];
  const availableCategories = ['Automation', 'Monitoring', 'Content', 'Analytics', 'Development', 'Design'];
  const availableTags = ['workflow', 'orchestration', 'automation', 'dependencies', 'dashboard', 'performance', 'monitoring', 'metrics', 'ai', 'content', 'seo', 'generation', 'analytics', 'insights', 'health', 'alerts'];

  useEffect(() => {
    // Load search history from localStorage
    const savedHistory = localStorage.getItem('searchHistory');
    if (savedHistory) {
      setSearchHistory(JSON.parse(savedHistory));
    }

    // Generate suggestions based on available content
    setSuggestions([
      'workflow orchestration',
      'performance monitoring',
      'ai content generation',
      'analytics dashboard',
      'automation health',
      'dependency management',
      'real-time metrics',
      'intelligent automation'
    ]);
  }, []);

  useEffect(() => {
    // Save search history to localStorage
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  }, [searchHistory]);

  const handleSearch = async (searchQuery: string = query) => {
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    
    // Add to search history
    if (!searchHistory.includes(searchQuery)) {
      setSearchHistory(prev => [searchQuery, ...prev.slice(0, 9)]);
    }

    // Simulate AI-powered search
    await new Promise(resolve => setTimeout(resolve, 800));

    // Filter and rank results
    const filteredResults = mockResults.filter(result => {
      // Text relevance
      const textMatch = result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       result.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       result.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      // Type filter
      const typeMatch = filters.type.length === 0 || filters.type.includes(result.type);

      // Category filter
      const categoryMatch = filters.category.length === 0 || filters.category.includes(result.category);

      // Tag filter
      const tagMatch = filters.tags.length === 0 || 
                      filters.tags.some(filterTag => result.tags.includes(filterTag));

      // Date filter
      const dateMatch = filters.dateRange === 'all' || 
                       (filters.dateRange === 'week' && isWithinDays(result.lastUpdated, 7)) ||
                       (filters.dateRange === 'month' && isWithinDays(result.lastUpdated, 30));

      // Author filter
      const authorMatch = filters.author.length === 0 || filters.author.includes(result.author);

      // Relevance filter
      const relevanceMatch = result.relevance >= filters.minRelevance;

      return textMatch && typeMatch && categoryMatch && tagMatch && dateMatch && authorMatch && relevanceMatch;
    });

    // Sort results
    const sortedResults = sortResults(filteredResults, sortBy);

    setResults(sortedResults);
    setIsSearching(false);
  };

  const isWithinDays = (dateString: string, days: number) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= days;
  };

  const sortResults = (results: SearchResult[], sortBy: string) => {
    return [...results].sort((a, b) => {
      switch (sortBy) {
        case 'relevance':
          return b.relevance - a.relevance;
        case 'date':
          return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
        case 'views':
          return b.views - a.views;
        case 'readTime':
          return a.readTime - b.readTime;
        default:
          return 0;
      }
    });
  };

  const handleFilterChange = (filterType: keyof SearchFilters, value: any) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const toggleFilter = (filterValue: string) => {
    const newSelected = new Set(selectedFilters);
    if (newSelected.has(filterValue)) {
      newSelected.delete(filterValue);
    } else {
      newSelected.add(filterValue);
    }
    setSelectedFilters(newSelected);
  };

  const clearFilters = () => {
    setFilters({
      type: [],
      category: [],
      tags: [],
      dateRange: 'all',
      author: [],
      minRelevance: 0
    });
    setSelectedFilters(new Set());
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const getRelevanceColor = (relevance: number) => {
    if (relevance >= 0.9) return 'text-green-600';
    if (relevance >= 0.7) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getTypeIcon = (type: string) => {
    const icons = {
      article: '📄',
      component: '🧩',
      tutorial: '📚',
      report: '📊',
      automation: '🤖'
    };
    return icons[type as keyof typeof icons] || '📄';
  };

  return (
    <>
      <Head>
        <title>AI Search Engine - Zion App</title>
        <meta name="description" content="Advanced AI-powered search with semantic understanding and intelligent filtering" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              🔍 AI-Powered Search Engine
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover content with intelligent semantic search, advanced filtering, and personalized results
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                ref={searchInputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Search for content, components, tutorials, or anything else..."
                className="block w-full pl-10 pr-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                onClick={() => handleSearch()}
                disabled={isSearching}
                className="absolute inset-y-0 right-0 px-6 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
              >
                {isSearching ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  'Search'
                )}
              </button>
            </div>

            {/* Search Suggestions */}
            {suggestions.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setQuery(suggestion);
                      handleSearch(suggestion);
                    }}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Filters and Results */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-80">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">Filters</h3>
                  <button
                    onClick={clearFilters}
                    className="text-sm text-blue-600 hover:text-blue-800"
                  >
                    Clear All
                  </button>
                </div>

                {/* Content Type */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Content Type</h4>
                  <div className="space-y-2">
                    {availableTypes.map(type => (
                      <label key={type} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filters.type.includes(type)}
                          onChange={(e) => {
                            const newTypes = e.target.checked
                              ? [...filters.type, type]
                              : filters.type.filter(t => t !== type);
                            handleFilterChange('type', newTypes);
                          }}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700 capitalize">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Categories */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Categories</h4>
                  <div className="space-y-2">
                    {availableCategories.map(category => (
                      <label key={category} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filters.category.includes(category)}
                          onChange={(e) => {
                            const newCategories = e.target.checked
                              ? [...filters.category, category]
                              : filters.category.filter(c => c !== category);
                            handleFilterChange('category', newCategories);
                          }}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Date Range */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Date Range</h4>
                  <select
                    value={filters.dateRange}
                    onChange={(e) => handleFilterChange('dateRange', e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                  >
                    <option value="all">All Time</option>
                    <option value="week">Last Week</option>
                    <option value="month">Last Month</option>
                  </select>
                </div>

                {/* Relevance Threshold */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">
                    Minimum Relevance: {filters.minRelevance}
                  </h4>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={filters.minRelevance}
                    onChange={(e) => handleFilterChange('minRelevance', parseFloat(e.target.value))}
                    className="w-full"
                  />
                </div>

                {/* Popular Tags */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Popular Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {availableTags.slice(0, 12).map(tag => (
                      <button
                        key={tag}
                        onClick={() => toggleFilter(tag)}
                        className={`px-2 py-1 text-xs rounded-full transition-colors ${
                          selectedFilters.has(tag)
                            ? 'bg-blue-100 text-blue-800 border border-blue-300'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="flex-1">
              {/* Results Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {results.length} Results
                  </h3>
                  {query && (
                    <span className="text-gray-500">for "{query}"</span>
                  )}
                </div>

                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-700">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => {
                      setSortBy(e.target.value as any);
                      setResults(prev => sortResults(prev, e.target.value as any));
                    }}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                  >
                    <option value="relevance">Relevance</option>
                    <option value="date">Date</option>
                    <option value="views">Views</option>
                    <option value="readTime">Read Time</option>
                  </select>
                </div>
              </div>

              {/* Search Results */}
              <div className="space-y-6">
                {results.map((result) => (
                  <div key={result.id} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="text-2xl">{getTypeIcon(result.type)}</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-500 capitalize">{result.type}</span>
                            <span className="text-gray-300">•</span>
                            <span className="text-sm text-gray-500">{result.category}</span>
                            <span className="text-gray-300">•</span>
                            <span className={`text-sm font-medium ${getRelevanceColor(result.relevance)}`}>
                              {Math.round(result.relevance * 100)}% relevant
                            </span>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                          {result.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-3">{result.excerpt}</p>
                        
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                          <span>By {result.author}</span>
                          <span>•</span>
                          <span>{result.lastUpdated}</span>
                          <span>•</span>
                          <span>{result.readTime} min read</span>
                          <span>•</span>
                          <span>{result.views.toLocaleString()} views</span>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {result.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="ml-4 flex flex-col items-end">
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                          View
                        </button>
                        <button className="mt-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* No Results */}
              {results.length === 0 && query && !isSearching && (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">No results found</h3>
                  <p className="text-gray-600 mb-4">
                    Try adjusting your search terms or filters to find what you're looking for.
                  </p>
                  <button
                    onClick={clearFilters}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              )}

              {/* Search History */}
              {searchHistory.length > 0 && !query && (
                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Searches</h3>
                  <div className="flex flex-wrap gap-2">
                    {searchHistory.map((term, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setQuery(term);
                          handleSearch(term);
                        }}
                        className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AISearchEngine;