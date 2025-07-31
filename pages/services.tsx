import React, { useState, useMemo, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Grid, List, Filter, CheckCircle } from 'lucide-react';
import ServiceCard from '../components/service-listing/ServiceCard';
import QuoteRequestModal from '../components/service-listing/QuoteRequestModal';
import ServiceFilters from '../components/service-listing/ServiceFilters';
import { services, serviceCategories } from '../utils/data/services';
import { Service, ServiceFilters as ServiceFiltersType, QuoteRequest } from '../utils/types/service';
import { submitQuoteRequest, QuoteRequestResponse } from '../utils/api/quoteRequests';

const ServicesPage: React.FC = () => {
  const [filters, setFilters] = useState<ServiceFiltersType>({
    category: 'All Categories',
    priceRange: [0, 100000],
    rating: 0,
    deliveryTime: 'Any time',
    searchTerm: ''
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<QuoteRequestResponse | null>(null);

  // Combine search term with filters
  useEffect(() => {
    setFilters(prev => ({
      ...prev,
      searchTerm
    }));
  }, [searchTerm]);

  const filteredServices = useMemo(() => {
    let filtered = services;

    // Filter by category
    if (filters.category !== 'All Categories') {
      filtered = filtered.filter(service => service.category === filters.category);
    }

    // Filter by price range
    filtered = filtered.filter(service => 
      service.price.from >= filters.priceRange[0] && 
      service.price.from <= filters.priceRange[1]
    );

    // Filter by rating
    if (filters.rating > 0) {
      filtered = filtered.filter(service => service.rating >= filters.rating);
    }

    // Filter by delivery time
    if (filters.deliveryTime !== 'Any time') {
      filtered = filtered.filter(service => service.deliveryTime === filters.deliveryTime);
    }

    // Filter by search term
    if (filters.searchTerm) {
      const searchLower = filters.searchTerm.toLowerCase();
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchLower) ||
        service.description.toLowerCase().includes(searchLower) ||
        service.providerName.toLowerCase().includes(searchLower) ||
        service.specialties.some(specialty => 
          specialty.toLowerCase().includes(searchLower)
        ) ||
        service.tags.some(tag => 
          tag.toLowerCase().includes(searchLower)
        )
      );
    }

    // Sort by AI score (highest first)
    filtered.sort((a, b) => b.aiScore - a.aiScore);

    return filtered;
  }, [filters]);

  const handleRequestQuote = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleQuoteSubmit = async (quoteRequest: QuoteRequest) => {
    setIsSubmitting(true);
    try {
      const result = await submitQuoteRequest(quoteRequest);
      setSubmissionResult(result);
      
      if (result.success) {
        // Show success message
        setTimeout(() => {
          setSubmissionResult(null);
        }, 5000);
      }
    } catch (error) {
      console.error('Error submitting quote request:', error);
      setSubmissionResult({
        success: false,
        message: 'Failed to submit quote request. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClearFilters = () => {
    setFilters({
      category: 'All Categories',
      priceRange: [0, 100000],
      rating: 0,
      deliveryTime: 'Any time',
      searchTerm: ''
    });
    setSearchTerm('');
  };

  return (
    <>
      <Head>
        <title>IT Services Marketplace - Zion AI</title>
        <meta name="description" content="Discover and compare top IT services from verified providers. Get quotes, compare prices, and find the perfect solution for your business needs." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold text-white mb-6"
              >
                IT Services Marketplace
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-blue-100 max-w-3xl mx-auto"
              >
                Discover and compare top IT services from verified providers. 
                Get instant quotes, compare prices, and find the perfect solution for your business.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Search and Controls */}
        <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="w-full lg:w-96">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services, providers, or specialties..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-blue-100 text-blue-600' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-blue-100 text-blue-600' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
                className="lg:hidden px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors"
              >
                <Filter className="w-4 h-4" />
                <span>Filters</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-80 flex-shrink-0">
              <ServiceFilters
                filters={filters}
                onFilterChange={setFilters}
                onClearFilters={handleClearFilters}
                isMobile={isMobileFiltersOpen}
                onToggleMobile={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
              />
            </div>

            {/* Services Grid */}
            <div className="flex-1">
              {/* Results Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {filteredServices.length} Services Found
                  </h2>
                  <p className="text-gray-600 mt-1">
                    Showing results for your search criteria
                  </p>
                </div>
              </div>

              {/* Services Grid/List */}
              <AnimatePresence>
                {filteredServices.length > 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={
                      viewMode === 'grid'
                        ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'
                        : 'space-y-4'
                    }
                  >
                    {filteredServices.map((service, index) => (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <ServiceCard
                          service={service}
                          onRequestQuote={handleRequestQuote}
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-12"
                  >
                    <div className="max-w-md mx-auto">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Search className="w-8 h-8 text-gray-400" />
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        No services found
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Try adjusting your search criteria or filters to find what you&apos;re looking for.
                      </p>
                      <button
                        onClick={handleClearFilters}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Clear All Filters
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Quote Request Modal */}
        <QuoteRequestModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          service={selectedService}
          onSubmit={handleQuoteSubmit}
        />

        {/* Submission Success Message */}
        <AnimatePresence>
          {submissionResult && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className={`fixed bottom-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm ${
                submissionResult.success 
                  ? 'bg-green-500 text-white' 
                  : 'bg-red-500 text-white'
              }`}
            >
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>{submissionResult.message}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default ServicesPage;
