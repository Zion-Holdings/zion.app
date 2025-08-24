'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const searchResults = [
    { title: 'AI Solutions', href: '/ai-solutions', category: 'Services' },
    { title: 'Quantum Computing', href: '/quantum-computing', category: 'Services' },
    { title: 'About Us', href: '/about', category: 'Company' },
    { title: 'Contact', href: '/contact', category: 'Support' },
    { title: 'Blog', href: '/blog', category: 'Resources' },
    { title: 'Case Studies', href: '/case-studies', category: 'Company' },
    { title: 'Team', href: '/team', category: 'Company' },
    { title: 'Careers', href: '/careers', category: 'Company' },
    { title: 'Services Overview', href: '/services', category: 'Services' },
    { title: 'Research & Development', href: '/research-development', category: 'Services' },
  ];

  const filteredResults = searchResults.filter(result =>
    result.title.toLowerCase().includes(query.toLowerCase()) ||
    result.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setIsOpen(true);
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          placeholder="Search Zion Tech Group..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          className="w-full px-4 py-2 pl-10 pr-4 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <button
          type="submit"
          className="absolute inset-y-0 right-0 px-3 flex items-center bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors duration-200"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </form>

      {/* Search Results Dropdown */}
      {isOpen && query && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-y-auto">
          {filteredResults.length > 0 ? (
            <div className="py-2">
              {filteredResults.map((result, index) => (
                <Link
                  key={index}
                  href={result.href}
                  className="block px-4 py-3 hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => {
                    setIsOpen(false);
                    setQuery('');
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900">{result.title}</div>
                      <div className="text-sm text-gray-500">{result.category}</div>
                    </div>
                    <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="px-4 py-3 text-gray-500 text-center">
              No results found for "{query}"
            </div>
          )}
        </div>
      )}

      {/* Click outside to close */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}