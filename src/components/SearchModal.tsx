import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Filter, Clock, MapPin, Star, Users, Briefcase, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';

interface SearchResult {
  id: string;
  type: 'service' | 'talent' | 'equipment' | 'page';
  title: string;
  description: string;
  url: string;
  category: string;
  tags: string[];
  rating?: number;
  location?: string;
  price?: string;
}

export function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeFilter, setActiveFilter] = useState<'all' | 'service' | 'talent' | 'equipment' | 'page'>('all');
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const mockSearchResults: SearchResult[] = [
    {
      id: '1',
      type: 'service',
      title: 'AI-Powered IT Solutions',
      description: 'Comprehensive AI-driven IT infrastructure and consulting services',
      url: '/services/ai-it-solutions',
      category: 'IT Services',
      tags: ['AI', 'IT', 'Infrastructure', 'Consulting'],
      rating: 4.8,
      price: 'Starting at $5,000'
    },
    {
      id: '2',
      type: 'talent',
      title: 'Senior AI Engineer',
      description: 'Experienced AI engineer with 8+ years in machine learning and deep learning',
      url: '/talent/ai-engineer-001',
      category: 'Engineering',
      tags: ['AI', 'Machine Learning', 'Python', 'TensorFlow'],
      rating: 4.9,
      location: 'San Francisco, CA'
    },
    {
      id: '3',
      type: 'equipment',
      title: 'High-Performance GPU Server',
      description: 'Enterprise-grade GPU server for AI/ML workloads',
      url: '/equipment/gpu-server-001',
      category: 'Hardware',
      tags: ['GPU', 'Server', 'AI', 'ML'],
      price: '$15,000'
    },
    {
      id: '4',
      type: 'page',
      title: 'Cybersecurity Services',
      description: 'Comprehensive cybersecurity solutions for enterprise protection',
      url: '/services/cybersecurity',
      category: 'Security',
      tags: ['Security', 'Cybersecurity', 'Enterprise', 'Protection']
    }
  ];

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim()) {
      performSearch();
    } else {
      setResults([]);
    }
  }, [query, activeFilter]);

  const performSearch = async () => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Filter results based on query and active filter
    const filteredResults = mockSearchResults.filter(result => {
      const matchesQuery = result.title.toLowerCase().includes(query.toLowerCase()) ||
                          result.description.toLowerCase().includes(query.toLowerCase()) ||
                          result.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()));
      
      const matchesFilter = activeFilter === 'all' || result.type === activeFilter;
      
      return matchesQuery && matchesFilter;
    });
    
    setResults(filteredResults);
    setIsLoading(false);
  };

  const handleSearch = (searchQuery: string) => {
    if (searchQuery.trim()) {
      setQuery(searchQuery);
      addToRecentSearches(searchQuery);
    }
  };

  const addToRecentSearches = (searchQuery: string) => {
    setRecentSearches(prev => {
      const filtered = prev.filter(s => s !== searchQuery);
      return [searchQuery, ...filtered].slice(0, 5);
    });
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'service':
        return <Briefcase className="h-4 w-4" />;
      case 'talent':
        return <Users className="h-4 w-4" />;
      case 'equipment':
        return <ShoppingCart className="h-4 w-4" />;
      case 'page':
        return <Search className="h-4 w-4" />;
      default:
        return <Search className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'service':
        return 'bg-blue-100 text-blue-700';
      case 'talent':
        return 'bg-green-100 text-green-700';
      case 'equipment':
        return 'bg-purple-100 text-purple-700';
      case 'page':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="flex items-start justify-center pt-20 px-4">
        <div className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[80vh] overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search for services, talent, equipment, or pages..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="pl-10 pr-4 py-3 text-lg border-0 focus:ring-2 focus:ring-zion-blue"
                />
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="ml-4 p-2 hover:bg-gray-100"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Filters */}
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-700">Filter by:</span>
              {[
                { key: 'all', label: 'All' },
                { key: 'service', label: 'Services' },
                { key: 'talent', label: 'Talent' },
                { key: 'equipment', label: 'Equipment' },
                { key: 'page', label: 'Pages' }
              ].map(filter => (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key as any)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === filter.key
                      ? 'bg-zion-blue text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="overflow-y-auto max-h-[60vh]">
            {query.trim() ? (
              <div className="p-6">
                {isLoading ? (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-zion-blue mx-auto"></div>
                    <p className="mt-2 text-gray-600">Searching...</p>
                  </div>
                ) : results.length > 0 ? (
                  <div className="space-y-4">
                    {results.map(result => (
                      <Card key={result.id} className="hover:shadow-md transition-shadow cursor-pointer">
                        <CardContent className="p-4">
                          <div className="flex items-start space-x-4">
                            <div className={`p-2 rounded-lg ${getTypeColor(result.type)}`}>
                              {getTypeIcon(result.type)}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-2">
                                <h3 className="font-semibold text-gray-900">{result.title}</h3>
                                <Badge variant="secondary" className="text-xs">
                                  {result.category}
                                </Badge>
                              </div>
                              <p className="text-gray-600 text-sm mb-3">{result.description}</p>
                              <div className="flex items-center space-x-4 text-sm text-gray-500">
                                {result.rating && (
                                  <div className="flex items-center space-x-1">
                                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                    <span>{result.rating}</span>
                                  </div>
                                )}
                                {result.location && (
                                  <div className="flex items-center space-x-1">
                                    <MapPin className="h-4 w-4" />
                                    <span>{result.location}</span>
                                  </div>
                                )}
                                {result.price && (
                                  <div className="flex items-center space-x-1">
                                    <span className="font-medium text-green-600">{result.price}</span>
                                  </div>
                                )}
                              </div>
                              <div className="flex flex-wrap gap-2 mt-3">
                                {result.tags.slice(0, 3).map(tag => (
                                  <span
                                    key={tag}
                                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
                    <p className="text-gray-600">Try adjusting your search terms or filters</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="p-6">
                {/* Recent Searches */}
                {recentSearches.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-gray-700 mb-3">Recent Searches</h3>
                    <div className="flex flex-wrap gap-2">
                      {recentSearches.map((search, index) => (
                        <button
                          key={index}
                          onClick={() => handleSearch(search)}
                          className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors flex items-center space-x-2"
                        >
                          <Clock className="h-4 w-4" />
                          <span>{search}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Popular Searches */}
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Popular Searches</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      'AI Services',
                      'Cybersecurity',
                      'Tech Talent',
                      'Cloud Solutions',
                      'Data Analytics',
                      'IT Consulting'
                    ].map((search, index) => (
                      <button
                        key={index}
                        onClick={() => handleSearch(search)}
                        className="p-3 bg-gray-50 text-gray-700 rounded-lg text-sm hover:bg-gray-100 transition-colors text-left"
                      >
                        {search}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>Press Esc to close</span>
              <span>Use ↑↓ to navigate, Enter to select</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}