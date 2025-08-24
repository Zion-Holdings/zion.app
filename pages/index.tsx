import React, { useState, useMemo } from 'react';
import { zionTechServices, serviceCategories } from '../data/enhanced-zion-tech-services-2025';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = useMemo(() => {
    let services = zionTechServices;
    
    if (selectedCategory !== 'All') {
      services = services.filter(service => service.category === selectedCategory);
    }
    
    if (searchTerm) {
      services = services.filter(service => 
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.technology.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    return services;
  }, [selectedCategory, searchTerm]);

  const popularServices = useMemo(() => 
    zionTechServices.filter(service => service.rating >= 4.8).slice(0, 6),
    []
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Zion Tech Group
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            Cutting-edge technology solutions that are transforming industries and driving the future of innovation
          </p>
          <div className="mt-8 flex items-center justify-center gap-2 text-white/60">
            <span>🛡️ Enterprise-grade security</span>
            <span>•</span>
            <span>⚡ AI-powered optimization</span>
            <span>•</span>
            <span>🌐 Global deployment</span>
          </div>
        </div>

        {/* Contact Information Banner */}
        <div className="mb-12 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-2xl p-6 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-600/20 rounded-full">
                <span className="text-2xl">📞</span>
              </div>
              <div>
                <p className="text-white font-semibold">Contact Zion Tech Group</p>
                <p className="text-white/70 text-sm">Get in touch for consultations and implementations</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 text-sm">
              <div className="flex items-center gap-2 text-white/80">
                <span>📱</span>
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <span>✉️</span>
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <span>📍</span>
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search services, technologies, or features..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex-shrink-0">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
              >
                {serviceCategories.map(category => (
                  <option key={category} value={category} className="bg-slate-800 text-white">
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Popular Services Section */}
        {selectedCategory === 'All' && searchTerm === '' && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">🌟 Popular Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-6 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{service.icon}</span>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                      <p className="text-white/60 text-sm">{service.tagline}</p>
                    </div>
                  </div>
                  
                  <p className="text-white/80 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-blue-400">{service.price}</span>
                      <span className="text-white/60 text-sm">{service.period}</span>
                    </div>
                    <div className="text-sm text-white/60">
                      <p>ROI: {service.roi}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                    >
                      Learn More
                    </a>
                    <span className="text-white/60 text-sm">{service.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Services Grid */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6 text-center">
            {selectedCategory === 'All' ? '🚀 All Services' : `${selectedCategory} Services`}
          </h2>
          {filteredServices.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-white/60 text-lg">No services found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{service.icon}</span>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                      <p className="text-white/60 text-sm">{service.tagline}</p>
                    </div>
                  </div>
                  
                  <p className="text-white/80 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-blue-400">{service.price}</span>
                      <span className="text-white/60 text-sm">{service.period}</span>
                    </div>
                    <div className="text-sm text-white/60">
                      <p>Market: {service.marketPosition}</p>
                      <p>ROI: {service.roi}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="text-white/70 text-sm flex items-center gap-2">
                          <span className="text-green-400">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between text-sm text-white/60 mb-4">
                    <span>Rating: {service.rating}/5 ⭐</span>
                    <span>{service.reviews} reviews</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                    >
                      Learn More
                    </a>
                    <span className="text-white/60 text-sm">{service.category}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-2xl p-8 backdrop-blur-xl">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Join the future of technology with Zion Tech Group. Our cutting-edge solutions are designed to drive innovation, 
              optimize operations, and deliver measurable results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Visit Our Website
              </a>
              <a
                href="tel:+13024640950"
                className="bg-white/10 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}