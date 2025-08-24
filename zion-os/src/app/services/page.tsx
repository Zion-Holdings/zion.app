"use client";

import { useState } from "react";
import { services, getServicesByCategory, getCategories, type Service } from "@/data/services";

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const categories = getCategories();
  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === "all" || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          ZionTech Services & Solutions
        </h1>
        <p className="text-xl opacity-80 max-w-3xl mx-auto">
          Discover our comprehensive ecosystem of innovative AI services, IT solutions, and micro SAAS platforms designed to transform your business operations.
        </p>
        <div className="flex items-center justify-center gap-4 text-sm opacity-70">
          <span>📧 kleber@ziontechgroup.com</span>
          <span>📱 +1 302 464 0950</span>
          <span>📍 364 E Main St STE 1008 Middletown DE 19709</span>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
        <input
          type="text"
          placeholder="Search services..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 bg-zinc-800 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 min-w-[300px]"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 bg-zinc-800 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500"
        >
          <option value="all">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="bg-zinc-800/50 border border-white/10 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300 cursor-pointer group"
            onClick={() => handleServiceSelect(service)}
          >
            <div className="space-y-4">
              {/* Service Header */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    service.status === 'active' ? 'bg-green-500/20 text-green-400' :
                    service.status === 'beta' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {service.status}
                  </span>
                  <span className="text-xs opacity-60">#{service.priority}</span>
                </div>
                <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
                  {service.name}
                </h3>
                <p className="text-sm opacity-70">{service.category}</p>
              </div>

              {/* Description */}
              <p className="text-sm opacity-80 line-clamp-3">
                {service.description}
              </p>

              {/* Pricing */}
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-wide opacity-60">Pricing</p>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="text-center">
                    <div className="font-medium">Starter</div>
                    <div className="opacity-70">{service.pricing.starter}</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium">Pro</div>
                    <div className="opacity-70">{service.pricing.professional}</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium">Enterprise</div>
                    <div className="opacity-70">{service.pricing.enterprise}</div>
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-wide opacity-60">Technology</p>
                <div className="flex flex-wrap gap-1">
                  {service.technologyStack.slice(0, 3).map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-zinc-700 rounded text-xs opacity-80">
                      {tech}
                    </span>
                  ))}
                  {service.technologyStack.length > 3 && (
                    <span className="px-2 py-1 bg-zinc-700 rounded text-xs opacity-60">
                      +{service.technologyStack.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-2">
                <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredServices.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg opacity-70">No services found matching your criteria.</p>
          <button
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("all");
            }}
            className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-zinc-900 border border-white/10 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 space-y-6">
              {/* Modal Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">{selectedService.name}</h2>
                  <p className="text-sm opacity-70">{selectedService.category}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-zinc-800 rounded-lg transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Service Details */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Description</h3>
                    <p className="opacity-80">{selectedService.description}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Features</h3>
                    <ul className="space-y-2">
                      {selectedService.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          <span className="opacity-80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Benefits</h3>
                    <ul className="space-y-2">
                      {selectedService.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-green-400 mt-1">✓</span>
                          <span className="opacity-80">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Pricing Plans</h3>
                    <div className="space-y-3">
                      <div className="p-4 bg-zinc-800 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">Starter</span>
                          <span className="text-lg font-bold text-blue-400">{selectedService.pricing.starter}</span>
                        </div>
                        <p className="text-sm opacity-70">Perfect for small teams and startups</p>
                      </div>
                      <div className="p-4 bg-zinc-800 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">Professional</span>
                          <span className="text-lg font-bold text-blue-400">{selectedService.pricing.professional}</span>
                        </div>
                        <p className="text-sm opacity-70">Ideal for growing businesses</p>
                      </div>
                      <div className="p-4 bg-zinc-800 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">Enterprise</span>
                          <span className="text-lg font-bold text-blue-400">{selectedService.pricing.enterprise}</span>
                        </div>
                        <p className="text-sm opacity-70">For large organizations with custom needs</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Use Cases</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.useCases.map((useCase, index) => (
                        <span key={index} className="px-3 py-1 bg-zinc-700 rounded-full text-sm opacity-80">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Technology Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.technologyStack.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-white/10">
                {selectedService.demoUrl && (
                  <a
                    href={selectedService.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-center font-medium transition-colors"
                  >
                    View Demo
                  </a>
                )}
                {selectedService.documentationUrl && (
                  <a
                    href={selectedService.documentationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 bg-zinc-700 hover:bg-zinc-600 rounded-lg text-center font-medium transition-colors"
                  >
                    Documentation
                  </a>
                )}
                <a
                  href={`mailto:${selectedService.contactInfo.email}?subject=Inquiry about ${selectedService.name}`}
                  className="flex-1 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-center font-medium transition-colors"
                >
                  Contact Sales
                </a>
              </div>

              {/* Contact Information */}
              <div className="pt-4 border-t border-white/10">
                <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="opacity-70">{selectedService.contactInfo.email}</p>
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="opacity-70">{selectedService.contactInfo.phone}</p>
                  </div>
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="opacity-70">{selectedService.contactInfo.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer CTA */}
      <div className="text-center py-12 border-t border-white/10">
        <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h2>
        <p className="text-lg opacity-80 mb-6 max-w-2xl mx-auto">
          Our team of experts is ready to help you implement the perfect solution for your needs. 
          Get in touch today to start your digital transformation journey.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
          >
            Get Started
          </a>
          <a
            href="tel:+13024640950"
            className="px-8 py-3 bg-zinc-700 hover:bg-zinc-600 rounded-lg font-medium transition-colors"
          >
            Call Us
          </a>
        </div>
      </div>
    </div>
  );
}