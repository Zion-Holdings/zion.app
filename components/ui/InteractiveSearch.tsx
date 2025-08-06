import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface SearchResult {
  title: string;
  description: string;
  link: string;
  category: string;
  icon: string;
}

const InteractiveSearch: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const searchRef = useRef<HTMLDivElement>(null);

  const searchData = React.useMemo<SearchResult[]>(() => [
    {
      title: 'AI Development Services',
      description: 'Custom AI solutions and machine learning models',
      link: '/services/ai-development',
      category: 'Services',
      icon: '🤖'
    },
    {
      title: 'Cloud Migration',
      description: 'Seamless cloud infrastructure setup and migration',
      link: '/services/cloud-migration',
      category: 'Services',
      icon: '☁️'
    },
    {
      title: 'Security Auditing',
      description: 'Comprehensive security assessments and testing',
      link: '/services/security-auditing',
      category: 'Services',
      icon: '🔒'
    },
    {
      title: 'Dr. Sarah Chen',
      description: 'Machine Learning Expert with 8+ years experience',
      link: '/talent/sarah-chen',
      category: 'Talent',
      icon: '👩‍💻'
    },
    {
      title: 'Alex Rodriguez',
      description: 'Deep Learning Specialist in neural networks',
      link: '/talent/alex-rodriguez',
      category: 'Talent',
      icon: '👨‍💻'
    },
    {
      title: 'High-Performance GPUs',
      description: 'Latest NVIDIA and AMD graphics cards for AI',
      link: '/products/gpus',
      category: 'Products',
      icon: '🖥️'
    },
    {
      title: 'AI Model Training',
      description: 'Specialized hardware for machine learning',
      link: '/products/ai-training',
      category: 'Products',
      icon: '⚡'
    }
  ], []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (typeof window !== 'undefined') {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, []);

  useEffect(() => {
    if (query.trim()) {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
      setSelectedIndex(0);
    } else {
      setResults([]);
    }
  }, [query, searchData]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;

      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          setSelectedIndex(prev => (prev + 1) % results.length);
          break;
        case 'ArrowUp':
          event.preventDefault();
          setSelectedIndex(prev => (prev - 1 + results.length) % results.length);
          break;
        case 'Enter':
          event.preventDefault();
          if (results[selectedIndex]) {
            if (typeof window !== 'undefined') {
              window.location.href = results[selectedIndex].link;
            }
          }
          break;
        case 'Escape':
          setIsOpen(false);
          break;
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, results, selectedIndex]);

  const handleResultClick = (result: SearchResult) => {
    if (typeof window !== 'undefined') {
      window.location.href = result.link;
    }
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-2xl mx-auto">
      {/* Search Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search for services, talent, or products..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
        />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setResults([]);
            }}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            <svg className="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Search Results */}
      {isOpen && results.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto">
          {results.map((result, index) => (
            <div
              key={index}
              onClick={() => handleResultClick(result)}
              className={`px-4 py-3 cursor-pointer transition-colors duration-150 ${
                index === selectedIndex
                  ? 'bg-blue-50 border-l-4 border-blue-500'
                  : 'hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{result.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {result.title}
                    </p>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {result.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 truncate">
                    {result.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* No Results */}
      {isOpen && query && results.length === 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200 p-4">
          <div className="text-center text-gray-500">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
            </svg>
            <p className="mt-2 text-sm">No results found for "{query}"</p>
            <p className="text-xs text-gray-400">Try different keywords or browse our categories</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveSearch;
