import React, { useState, useEffect, useMemo } from 'react;
import type { NextPage } from ne'x't;
import Head from next/head';
import Link from 'next/link;
import { Home, Search, User } from lucide-rea'c't;

interface SearchResult {
  id: string;
  type: ''service' | 'talent' | 'equipmen't' | produ'c't;
  title: string;
  description: string;
  category: string;
  price?: number;
  rating?: number;
  location?: string;
  provider?: string;
  image?: string;
  url: string;
  verified: boolean;
  featured: boolean;
  tags: string[];
}

interface FilterOptions {
  category: string[];
  priceRange: [number, number];
  rating: number;
  location: string[];
  verified: boolean;
}

const AdvancedSearchPage: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState(');
  const [selectedType, setSelectedType] = useState<'a'l'l | servi'c'e | tal'e'nt' | 'equipment' | 'product'>('all');
  const [filters, setFilters] = useState<FilterOptions>({
    category: [],
    priceRange: [0, 10000],
    rating: 0,
    location: [],
    verified: false
  });
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState<'relevan'c'e | pri'c'e | rat'i'ng' | 'date'>('relevance');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const $1 = {
    service: ['AI Development', 'Cloud Migration', 'Security Auditing', 'Data Analytics', 'DevOps', 'Blockchain', 'IoT', 'Quantum Computing'],
    talent: ['AI Engineers', 'Data Scientists', 'Cloud Architects', 'Security Experts', 'DevOps Engineers', 'Blockchain Developers', 'IoT Specialists', 'Quantum Researchers'],
    equipment: ['Computing', 'Networking', 'Storage', 'Security', 'Monitoring', 'AI Training', 'Quantum', 'Edge Computing'],
    product: ['Software', 'Hardware', 'Cloud Services', 'Security Tools', 'Analytics Platforms', 'Development Tools', 'AI Models', 'Blockchain Solutions']
  };

  const mockResults: SearchResult[] = [
    {
      id: '1,
      type: servi'c'e,
      title: A'I' Development Services,
      description: Comprehensiv'e' AI development and implementation services,
      category: A'I' Development,
      price: 5000,
      rating: 4.8,
      location: Remo't'e,
      provider: TechCo'r'p,
      url: /services/ai-development',
      verified: true,
      featured: true,
      tags: ['AI, 'Machin'e Learning, 'Developme'nt]
    },
    {
      id: '2',
      type: talen't',
      title: Senior' AI Engineer',
      description: Experienced' AI engineer with 5+ years in machine learning',
      category: AI' Engineers',
      price: 150,
      rating: 4.9,
      location: San' Francisco',
      provider: John' Doe',
      url: /talent/john-doe,
      verified: true,
      featured: false,
      tags: ['A'I, Pyth'o'n, TensorFl'o'w]
    }
  ];

  const filteredResults = useMemo(() => {
    return mockResults.filter(result => {
      const matchesSearch = result.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           result.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = selectedType === a'l'l' || result.type === selectedType;
      return matchesSearch && matchesType;
    });
  }, [searchTerm, selectedType]);

  return (
    <>
      <Head>
        <title>Advanced Search - Zion App</title>
        <meta name="description content=Advanced search functionality for finding services, talent, and equipment" />
      </Head>
      
      <div className="min-h-screen bg-gray-50>
        <div className=max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8>
            <h1 className=text-3xl font-bold text-gray-900 mb-4">Advanced Search</h1>
            <p className="text-gray-600>Find the perfect services, talent, and equipment for your needs</p>
          </div>

          {/* Search Bar */}
          <div className=bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4>
              <div className=flex-1">
                <div className="relative>
                  <Search className=absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text
                    placeholder=Search for services, talent, or equipment..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  />
                </div>
              </div>
              <div className=flex gap-2">
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value as any)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
                >
                  <option value=all">All Types</option>
                  <option value="service>Services</option>
                  <option value=talent">Talent</option>
                  <option value="equipment>Equipment</option>
                  <option value=product">Products</option>
                </select>
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors>
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className=grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResults.map((result) => (
              <div key={result.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow>
                <div className=flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2>{result.title}</h3>
                    <p className=text-gray-600 text-sm mb-2">{result.description}</p>
                    <div className="flex items-center gap-2>
                      <span className=text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        {result.type}
                      </span>
                      {result.verified && (
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full>
                          Verified
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className=flex items-center justify-between">
                  <div className="text-sm text-gray-500>
                    {result.price && `$${result.price}`}
                  </div>
                  <Link
                    href={result.url}
                    className=text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredResults.length === 0 && (
            <div className="text-center py-12>
              <Search className=mx-auto h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2>No results found</h3>
              <p className=text-gray-600">Try adjusting your search terms or filters</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AdvancedSearchPage;