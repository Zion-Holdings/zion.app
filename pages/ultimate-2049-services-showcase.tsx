import React, { useState } from 'react';
import { revolutionary2049UltimateServices } from '../data/revolutionary-2049-ultimate-services';
import { revolutionary2048FuturisticServices } from '../data/revolutionary-2048-futuristic-services';
import { revolutionary2047AdvancedAIServices } from '../data/revolutionary-2047-advanced-ai-services';

const Ultimate2049ServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const allServices = [
    ...revolutionary2049UltimateServices,
    ...revolutionary2048FuturisticServices,
    ...revolutionary2047AdvancedAIServices
  ];

  const categories = ['all', ...new Set(allServices.map(service => service.category))];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ultimate 2049 Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-4xl mx-auto">
              Experience the pinnacle of technological advancement with our revolutionary 2049 services. 
              From universal consciousness networks to reality fabrication engines, we're pioneering the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-blue-600 text-lg font-medium rounded-lg text-blue-200 hover:bg-blue-600 hover:text-white transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Contact Us</h3>
              <p className="text-blue-100">kleber@ziontechgroup.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-blue-100">+1 302 464 0950</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-blue-100">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900"
            />
          </div>
          <div className="flex-shrink-0">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {service.type}
                  </span>
                  <span className="text-sm text-gray-500">{service.category}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4 italic">"{service.tagline}"</p>
                <p className="text-gray-700 mb-6">{service.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 6).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.slice(0, 4).map((benefit, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Pricing:</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="bg-gray-50 p-2 rounded">
                      <span className="font-medium">Starter:</span> {service.pricing.starter}
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <span className="font-medium">Pro:</span> {service.pricing.professional}
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <span className="font-medium">Enterprise:</span> {service.pricing.enterprise}
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <span className="font-medium">Custom:</span> {service.pricing.custom}
                    </div>
                  </div>
                </div>

                {/* Market Size */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Market Size:</h4>
                  <p className="text-lg font-bold text-blue-600">{service.marketSize}</p>
                </div>

                {/* Use Cases */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Perfect For:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.useCases.slice(0, 4).map((useCase, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800"
                      >
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Competitive Advantage */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Competitive Advantage:</h4>
                  <p className="text-sm text-gray-700 bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-400">
                    {service.competitiveAdvantage}
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-3">
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}`}
                    className="w-full bg-blue-600 text-white text-center py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Get Quote
                  </a>
                  <a
                    href={`tel:+13024640950`}
                    className="w-full bg-green-600 text-white text-center py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors"
                  >
                    Call Now
                  </a>
                  <a
                    href="https://ziontechgroup.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-purple-600 text-white text-center py-3 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Results Count */}
        <div className="text-center mt-12">
          <p className="text-gray-400">
            Showing {filteredServices.length} out of {allServices.length} revolutionary services
          </p>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Pioneer the Future?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the revolution with our cutting-edge 2049 services. Transform your business, 
            research, or organization with technology that's decades ahead of its time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-blue-600 bg-white hover:bg-gray-100 transition-colors"
            >
              Start Your Journey
            </a>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-4 border border-white text-lg font-medium rounded-lg text-white hover:bg-white hover:text-blue-600 transition-colors"
            >
              Speak to an Expert
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ultimate2049ServicesShowcase;