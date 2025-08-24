import React, { useState } from 'react';
import { 
  advancedInnovativeServices2025 
} from '../data/2025-advanced-innovative-services';
import { 
  emergingTechSpecializedServices2025 
} from '../data/2025-emerging-tech-specialized-services';
import { 
  financialBusinessServices2025 
} from '../data/2025-financial-business-services';

interface Service {
  id: string;
  name: string;
  description: string;
  features: string[];
  benefits: string[];
  pricing: {
    basic: string;
    professional: string;
    enterprise: string;
  };
  category: string;
  tags: string[];
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
}

const allServices: Service[] = [
  ...advancedInnovativeServices2025,
  ...emergingTechSpecializedServices2025,
  ...financialBusinessServices2025
];

const serviceCategories = [
  {
    id: 'advanced-ai-innovation',
    name: 'Advanced AI & Innovation',
    description: 'Cutting-edge artificial intelligence and innovative technology solutions',
    services: advancedInnovativeServices2025
  },
  {
    id: 'emerging-tech-specialized',
    name: 'Emerging Tech & Specialized',
    description: 'Next-generation technologies and specialized industry solutions',
    services: emergingTechSpecializedServices2025
  },
  {
    id: 'financial-business-solutions',
    name: 'Financial & Business Solutions',
    description: 'Comprehensive financial technology and business automation platforms',
    services: financialBusinessServices2025
  }
];

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      serviceCategories.find(cat => cat.id === selectedCategory)?.services.includes(service);
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Zion Tech Group Services
          </h1>
          <p className="text-xl opacity-90 max-w-4xl mx-auto mb-8">
            Comprehensive micro SAAS, IT, and AI solutions to accelerate your business growth and digital transformation
          </p>
          
          {/* Contact Info Banner */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl">📱</span>
                <a href="tel:+13024640950" className="hover:underline font-medium">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl">✉️</span>
                <a href="mailto:kleber@ziontechgroup.com" className="hover:underline font-medium">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl">📍</span>
                <span className="font-medium">364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          {/* Search */}
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          {/* Category Filter */}
          <div className="lg:w-64">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Categories</option>
              {serviceCategories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 hover:border-blue-500 transition-colors">
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-zinc-400 text-sm mb-3">{service.description}</p>
                <span className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  {service.category}
                </span>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h4 className="font-medium mb-2 text-blue-400">Key Features:</h4>
                <ul className="text-sm text-zinc-300 space-y-1">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="mb-4">
                <h4 className="font-medium mb-2 text-green-400">Benefits:</h4>
                <ul className="text-sm text-zinc-300 space-y-1">
                  {service.benefits.slice(0, 2).map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">→</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing */}
              <div className="mb-4">
                <h4 className="font-medium mb-2 text-purple-400">Pricing:</h4>
                <div className="text-sm space-y-1">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Basic:</span>
                    <span className="text-white">{service.pricing.basic}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Professional:</span>
                    <span className="text-white">{service.pricing.professional}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Enterprise:</span>
                    <span className="text-white">{service.pricing.enterprise}</span>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="border-t border-zinc-700 pt-4">
                <a
                  href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name}`}
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg transition-colors mb-2"
                >
                  Get Quote
                </a>
                <a
                  href={`tel:${service.contactInfo.phone}`}
                  className="block w-full bg-zinc-700 hover:bg-zinc-600 text-white text-center py-2 px-4 rounded-lg transition-colors"
                >
                  Call Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold mb-4">No services found</h3>
            <p className="text-zinc-400 mb-6">
              Try adjusting your search terms or category filter
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-zinc-800 to-zinc-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-xl text-zinc-300 mb-8 max-w-3xl mx-auto">
            Our team specializes in creating tailored solutions that perfectly fit your business needs. 
            Let's discuss how we can help you achieve your digital transformation goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=Custom Solution Inquiry"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors text-lg"
            >
              Get Custom Quote
            </a>
            <a
              href="tel:+13024640950"
              className="bg-zinc-700 hover:bg-zinc-600 text-white px-8 py-4 rounded-lg font-medium transition-colors text-lg"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
