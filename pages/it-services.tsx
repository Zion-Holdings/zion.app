import React, { useState, useMemo } from 'react';
import Head from 'next/head';

interface ServiceProvider {
  id: string;
  title: string;
  description: string;
  category: string;
  aiScore: number;
  rating: number;
  reviewCount: number;
  location: string;
  experience: string;
  specialties: string[];
  imageUrl: string;
}

const serviceProviders: ServiceProvider[] = [
  {
    id: '1',
    title: 'TechFlow Solutions',
    description: 'Comprehensive IT consulting and managed services for businesses of all sizes. Specializing in cloud migration, cybersecurity, and digital transformation.',
    category: 'Managed IT Services',
    aiScore: 95,
    rating: 4.8,
    reviewCount: 127,
    location: 'New York, NY',
    experience: '8+ years',
    specialties: ['Cloud Migration', 'Cybersecurity', 'Digital Transformation'],
    imageUrl: '/api/placeholder/400/200'
  },
  {
    id: '2',
    title: 'CyberShield Pro',
    description: 'Advanced cybersecurity solutions with 24/7 monitoring, threat detection, and incident response. Protecting your business from evolving cyber threats.',
    category: 'Cybersecurity',
    aiScore: 92,
    rating: 4.9,
    reviewCount: 89,
    location: 'San Francisco, CA',
    experience: '12+ years',
    specialties: ['Threat Detection', 'Incident Response', 'Security Audits'],
    imageUrl: '/api/placeholder/400/200'
  },
  {
    id: '3',
    title: 'CloudFirst Technologies',
    description: 'Expert cloud infrastructure and DevOps services. We help businesses optimize their cloud strategy and implement CI/CD pipelines.',
    category: 'Cloud Services',
    aiScore: 88,
    rating: 4.7,
    reviewCount: 156,
    location: 'Austin, TX',
    experience: '6+ years',
    specialties: ['AWS', 'Azure', 'DevOps'],
    imageUrl: '/api/placeholder/400/200'
  },
  {
    id: '4',
    title: 'DataSync Analytics',
    description: 'Big data solutions and business intelligence services. Transform your data into actionable insights with our advanced analytics platform.',
    category: 'Data Analytics',
    aiScore: 90,
    rating: 4.6,
    reviewCount: 73,
    location: 'Boston, MA',
    experience: '10+ years',
    specialties: ['Big Data', 'Business Intelligence', 'Machine Learning'],
    imageUrl: '/api/placeholder/400/200'
  },
  {
    id: '5',
    title: 'NetPro Solutions',
    description: 'Network infrastructure design, implementation, and maintenance. We ensure your network is fast, secure, and scalable.',
    category: 'Network Services',
    aiScore: 87,
    rating: 4.5,
    reviewCount: 94,
    location: 'Chicago, IL',
    experience: '15+ years',
    specialties: ['Network Design', 'Infrastructure', 'Maintenance'],
    imageUrl: '/api/placeholder/400/200'
  },
  {
    id: '6',
    title: 'AppWorks Development',
    description: 'Custom software development and mobile app creation. We build scalable applications that drive business growth.',
    category: 'Software Development',
    aiScore: 93,
    rating: 4.8,
    reviewCount: 112,
    location: 'Seattle, WA',
    experience: '9+ years',
    specialties: ['Custom Software', 'Mobile Apps', 'Web Development'],
    imageUrl: '/api/placeholder/400/200'
  },
  {
    id: '7',
    title: 'IT Support Plus',
    description: 'Comprehensive IT support and help desk services. We provide 24/7 technical support to keep your business running smoothly.',
    category: 'IT Support',
    aiScore: 85,
    rating: 4.4,
    reviewCount: 203,
    location: 'Miami, FL',
    experience: '7+ years',
    specialties: ['Help Desk', 'Technical Support', 'Remote Support'],
    imageUrl: '/api/placeholder/400/200'
  },
  {
    id: '8',
    title: 'Digital Innovation Hub',
    description: 'Digital transformation consulting and emerging technology implementation. We help businesses adapt to the digital age.',
    category: 'Digital Transformation',
    aiScore: 91,
    rating: 4.7,
    reviewCount: 67,
    location: 'Denver, CO',
    experience: '11+ years',
    specialties: ['Digital Strategy', 'Emerging Tech', 'Innovation'],
    imageUrl: '/api/placeholder/400/200'
  }
];

const categories = [
  'All Categories',
  'Managed IT Services',
  'Cybersecurity',
  'Cloud Services',
  'Data Analytics',
  'Network Services',
  'Software Development',
  'IT Support',
  'Digital Transformation'
];

const ITServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'aiScore' | 'rating' | 'reviewCount'>('aiScore');

  const filteredProviders = useMemo(() => {
    let filtered = serviceProviders;

    // Filter by category
    if (selectedCategory !== 'All Categories') {
      filtered = filtered.filter(provider => provider.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(provider =>
        provider.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        provider.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        provider.specialties.some(specialty => 
          specialty.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    // Sort by selected criteria
    filtered.sort((a, b) => {
      if (sortBy === 'aiScore') return b.aiScore - a.aiScore;
      if (sortBy === 'rating') return b.rating - a.rating;
      return b.reviewCount - a.reviewCount;
    });

    return filtered;
  }, [selectedCategory, searchTerm, sortBy]);

  const handleRequestQuote = (providerId: string) => {
    // In a real app, this would open a quote request form or modal
    alert(`Quote request sent for ${serviceProviders.find(p => p.id === providerId)?.title}`);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <defs>
            <linearGradient id="halfStar">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="#e5e7eb" />
            </linearGradient>
          </defs>
          <path fill="url(#halfStar)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    return stars;
  };

  return (
    <>
      <Head>
        <title>IT Service Providers - Find the Best IT Solutions</title>
        <meta name="description" content="Discover top-rated IT service providers. Compare AI-matched scores, ratings, and get quotes from the best IT consultants and managed service providers." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                IT Service Providers
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find the perfect IT service provider for your business. Compare AI-matched scores, 
                ratings, and get personalized quotes from top-rated professionals.
              </p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="w-full lg:w-96">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search providers, services, or specialties..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="w-full lg:w-64">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div className="w-full lg:w-48">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'aiScore' | 'rating' | 'reviewCount')}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="aiScore">Sort by AI Score</option>
                  <option value="rating">Sort by Rating</option>
                  <option value="reviewCount">Sort by Reviews</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Results count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredProviders.length} of {serviceProviders.length} providers
            </p>
          </div>

          {/* Provider Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProviders.map((provider) => (
              <div
                key={provider.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200"
              >
                {/* Card Header */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600">
                  <div className="absolute top-4 right-4">
                    <div className="bg-white bg-opacity-90 rounded-full px-3 py-1">
                      <span className="text-sm font-semibold text-gray-800">
                        AI Score: {provider.aiScore}
                      </span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white bg-opacity-90 rounded-lg px-3 py-2">
                      <span className="text-sm font-medium text-gray-800">
                        {provider.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">
                      {provider.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {provider.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <div className="flex items-center mr-2">
                      {renderStars(provider.rating)}
                    </div>
                    <span className="text-sm text-gray-600">
                      {provider.rating} ({provider.reviewCount} reviews)
                    </span>
                  </div>

                  {/* Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.172L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {provider.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6z" />
                      </svg>
                      {provider.experience} experience
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {provider.specialties.slice(0, 3).map((specialty, index) => (
                        <span
                          key={index}
                          className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                      {provider.specialties.length > 3 && (
                        <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                          +{provider.specialties.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Request Quote Button */}
                  <button
                    onClick={() => handleRequestQuote(provider.id)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Request Quote
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredProviders.length === 0 && (
            <div className="text-center py-12">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">No providers found</h3>
              <p className="mt-1 text-sm text-gray-500">
                Try adjusting your search criteria or filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ITServicesPage; 