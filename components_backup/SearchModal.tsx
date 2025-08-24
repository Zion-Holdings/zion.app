import { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';

interface SearchResult {
  id: string;
  title: string;
  type: 'service' | 'product' | 'case-study' | 'blog' | 'testimonial' | 'career';
  description: string;
  url: string;
  category?: string;
  tags?: string[];
  relevance: number;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Mock search data - in a real app, this would come from an API or search service
  const searchData: SearchResult[] = useMemo(() => [
    // Services
    {
      id: 'ai-fraud-detection',
      title: 'AI-Powered Fraud Detection System',
      type: 'service',
      description: 'Advanced machine learning system that detects fraudulent transactions with 89% accuracy',
      url: '/services',
      category: 'AI & Machine Learning',
      tags: ['AI', 'fraud detection', 'machine learning', 'security'],
      relevance: 95
    },
    {
      id: 'cloud-migration',
      title: 'Cloud Migration & Optimization',
      type: 'service',
      description: 'Seamless cloud migration services with 99.9% uptime guarantee',
      url: '/services',
      category: 'Cloud & Infrastructure',
      tags: ['cloud', 'migration', 'AWS', 'Azure', 'optimization'],
      relevance: 90
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity & Compliance',
      type: 'service',
      description: 'Comprehensive security solutions including SOC2 and ISO27001 compliance',
      url: '/services',
      category: 'Security',
      tags: ['cybersecurity', 'compliance', 'SOC2', 'ISO27001', 'security'],
      relevance: 88
    },
    // Products
    {
      id: 'quantum-ai-analytics',
      title: 'Quantum AI Analytics Platform',
      type: 'product',
      description: 'Next-generation analytics platform leveraging quantum computing principles',
      url: '/products',
      category: 'AI Solutions',
      tags: ['AI', 'analytics', 'quantum', 'machine learning'],
      relevance: 92
    },
    {
      id: 'autonomous-devops',
      title: 'Autonomous DevOps Platform',
      type: 'product',
      description: 'Self-healing infrastructure with automated deployment and monitoring',
      url: '/products',
      category: 'DevOps',
      tags: ['DevOps', 'automation', 'CI/CD', 'monitoring'],
      relevance: 87
    },
    // Case Studies
    {
      id: 'securebank-case',
      title: 'SecureBank Corp - AI Fraud Detection',
      type: 'case-study',
      description: 'Implemented AI fraud detection system achieving 89% fraud reduction',
      url: '/case-studies',
      category: 'Financial Services',
      tags: ['AI', 'fraud detection', 'banking', 'machine learning'],
      relevance: 85
    },
    {
      id: 'medicore-case',
      title: 'MediCore Health - AI Diagnostics',
      type: 'case-study',
      description: 'AI medical diagnostics platform with 94% accuracy improvement',
      url: '/case-studies',
      category: 'Healthcare',
      tags: ['AI', 'healthcare', 'diagnostics', 'machine learning'],
      relevance: 83
    },
    // Blog Posts
    {
      id: 'ai-trends-2024',
      title: 'AI Trends That Will Dominate 2024',
      type: 'blog',
      description: 'Explore the cutting-edge AI technologies and trends shaping the future',
      url: '/blog',
      category: 'AI & Technology',
      tags: ['AI', 'trends', 'technology', '2024', 'machine learning'],
      relevance: 80
    },
    {
      id: 'cloud-security',
      title: 'Essential Cloud Security Best Practices',
      type: 'blog',
      description: 'Learn the critical security measures for protecting your cloud infrastructure',
      url: '/blog',
      category: 'Security',
      tags: ['cloud', 'security', 'best practices', 'infrastructure'],
      relevance: 78
    },
    // Testimonials
    {
      id: 'sarah-mitchell',
      title: 'Sarah Mitchell - SecureBank Corp',
      type: 'testimonial',
      description: 'Chief Risk Officer shares success story of AI fraud detection implementation',
      url: '/testimonials',
      category: 'Financial Services',
      tags: ['testimonial', 'AI', 'fraud detection', 'banking'],
      relevance: 75
    },
    // Careers
    {
      id: 'senior-ai-engineer',
      title: 'Senior AI Engineer Position',
      type: 'career',
      description: 'Join our AI team to develop cutting-edge machine learning models',
      url: '/careers',
      category: 'AI & Machine Learning',
      tags: ['career', 'AI', 'machine learning', 'engineering'],
      relevance: 70
    }
  ], []);

  useEffect(() => {
    if (isOpen) {
      searchInputRef.current?.focus();
      setSearchTerm('');
      setResults([]);
      setSelectedIndex(-1);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (searchTerm.trim().length < 2) {
      setResults([]);
      return;
    }

    setIsSearching(true);
    
    // Simulate search delay
    const timeoutId = setTimeout(() => {
      const searchResults = searchData
        .filter(item => {
          const searchLower = searchTerm.toLowerCase();
          return (
            item.title.toLowerCase().includes(searchLower) ||
            item.description.toLowerCase().includes(searchLower) ||
            item.category?.toLowerCase().includes(searchLower) ||
            item.tags?.some(tag => tag.toLowerCase().includes(searchLower))
          );
        })
        .sort((a, b) => b.relevance - a.relevance)
        .slice(0, 10);

      setResults(searchResults);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchTerm, searchData]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(prev - 1, -1));
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      e.preventDefault();
      const selectedResult = results[selectedIndex];
      if (selectedResult) {
        window.location.href = selectedResult.url;
        onClose();
      }
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'service': return '🚀';
      case 'product': return '💎';
      case 'case-study': return '📊';
      case 'blog': return '📝';
      case 'testimonial': return '⭐';
      case 'career': return '💼';
      default: return '📄';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'service': return 'Service';
      case 'product': return 'Product';
      case 'case-study': return 'Case Study';
      case 'blog': return 'Blog Post';
      case 'testimonial': return 'Testimonial';
      case 'career': return 'Career';
      default: return 'Page';
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
      <div 
        ref={modalRef}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 max-h-[80vh] overflow-hidden"
      >
        {/* Search Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="relative">
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search services, products, case studies, blog posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full pl-12 pr-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              🔍
            </div>
            {isSearching && (
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
              </div>
            )}
          </div>
        </div>

        {/* Search Results */}
        <div className="max-h-[60vh] overflow-y-auto">
          {searchTerm.length > 0 && (
            <>
              {results.length > 0 ? (
                <div className="p-4">
                  <div className="text-sm text-gray-500 mb-4">
                    Found {results.length} result{results.length !== 1 ? 's' : ''}
                  </div>
                  <div className="space-y-2">
                    {results.map((result, index) => (
                      <Link
                        key={result.id}
                        href={result.url}
                        onClick={onClose}
                        className={`block p-4 rounded-lg border transition-all duration-200 ${
                          index === selectedIndex
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-start space-x-3">
                          <div className="text-2xl">{getTypeIcon(result.type)}</div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2 mb-1">
                              <h3 className="font-semibold text-gray-900 truncate">
                                {result.title}
                              </h3>
                              <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">
                                {getTypeLabel(result.type)}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                              {result.description}
                            </p>
                            {result.category && (
                              <div className="text-xs text-gray-500">
                                Category: {result.category}
                              </div>
                            )}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : !isSearching && (
                <div className="p-8 text-center text-gray-500">
                  <div className="text-4xl mb-4">🔍</div>
                  <p className="text-lg">No results found for &quot;{searchTerm}&quot;</p>
                  <p className="text-sm mt-2">Try different keywords or browse our categories</p>
                </div>
              )}
            </>
          )}

          {/* Quick Links */}
          {searchTerm.length === 0 && (
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
              <div className="grid grid-cols-2 gap-3">
                <Link
                  href="/services"
                  onClick={onClose}
                  className="p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors duration-200"
                >
                  <div className="text-2xl mb-2">🚀</div>
                  <div className="font-medium text-gray-900">Services</div>
                  <div className="text-sm text-gray-600">Explore our solutions</div>
                </Link>
                <Link
                  href="/products"
                  onClick={onClose}
                  className="p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors duration-200"
                >
                  <div className="text-2xl mb-2">💎</div>
                  <div className="font-medium text-gray-900">Products</div>
                  <div className="text-sm text-gray-600">View our products</div>
                </Link>
                <Link
                  href="/case-studies"
                  onClick={onClose}
                  className="p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors duration-200"
                >
                  <div className="text-2xl mb-2">📊</div>
                  <div className="font-medium text-gray-900">Case Studies</div>
                  <div className="text-sm text-gray-600">Success stories</div>
                </Link>
                <Link
                  href="/blog"
                  onClick={onClose}
                  className="p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors duration-200"
                >
                  <div className="text-2xl mb-2">📝</div>
                  <div className="font-medium text-gray-900">Blog</div>
                  <div className="text-sm text-gray-600">Latest insights</div>
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-4">
              <span>Press <kbd className="px-2 py-1 bg-white border border-gray-300 rounded text-xs">⌘</kbd> + <kbd className="px-2 py-1 bg-white border border-gray-300 rounded text-xs">K</kbd> to search</span>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;