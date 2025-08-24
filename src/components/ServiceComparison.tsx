import React, { useState } from 'react';
import { ComprehensiveService } from '../data/comprehensiveServices';

interface ServiceComparisonProps {
  services: ComprehensiveService[];
}

export function ServiceComparison({ services }: ServiceComparisonProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : prev.length < 3 
          ? [...prev, serviceId]
          : prev
    );
  };

  const selectedServicesData = services.filter(service => 
    selectedServices.includes(service.id)
  );

  if (selectedServices.length === 0) {
    return (
      <div className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-blue-light/30 rounded-lg p-6">
        <h3 className="text-xl font-bold text-white mb-4">Compare Services</h3>
        <p className="text-zion-slate-light mb-4">
          Select up to 3 services to compare their features, pricing, and benefits.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.slice(0, 6).map(service => (
            <div
              key={service.id}
              className="p-4 border border-zion-blue-light/30 rounded-lg cursor-pointer hover:border-zion-cyan/50 transition-colors"
              onClick={() => handleServiceToggle(service.id)}
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={selectedServices.includes(service.id)}
                  onChange={() => handleServiceToggle(service.id)}
                  className="w-4 h-4 text-zion-cyan bg-zion-blue-light/20 border-zion-cyan/30 rounded focus:ring-zion-cyan focus:ring-2"
                />
                <div>
                  <h4 className="font-medium text-white">{service.title}</h4>
                  <p className="text-sm text-zion-slate-light">{service.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-blue-light/30 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white">Service Comparison</h3>
        <button
          onClick={() => setSelectedServices([])}
          className="px-4 py-2 text-zion-slate-light hover:text-white transition-colors"
        >
          Clear All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead>
            <tr className="border-b border-zion-blue-light/30">
              <th className="text-left p-3 text-zion-cyan font-medium">Features</th>
              {selectedServicesData.map(service => (
                <th key={service.id} className="text-center p-3 text-white font-medium min-w-[200px]">
                  {service.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-zion-blue-light/20">
              <td className="p-3 text-zion-slate-light font-medium">Category</td>
              {selectedServicesData.map(service => (
                <td key={service.id} className="p-3 text-center text-white">
                  {service.category}
                </td>
              ))}
            </tr>
            <tr className="border-b border-zion-blue-light/20">
              <td className="p-3 text-zion-slate-light font-medium">Subcategory</td>
              {selectedServicesData.map(service => (
                <td key={service.id} className="p-3 text-center text-white">
                  {service.subcategory || 'N/A'}
                </td>
              ))}
            </tr>
            <tr className="border-b border-zion-blue-light/20">
              <td className="p-3 text-zion-slate-light font-medium">Pricing</td>
              {selectedServicesData.map(service => (
                <td key={service.id} className="p-3 text-center text-white">
                  <div className="text-lg font-bold text-zion-cyan">
                    {service.currency}{service.price.toLocaleString()}
                  </div>
                  <div className="text-sm text-zion-slate-light">
                    {service.pricingModel}
                  </div>
                  {service.marketPrice && (
                    <div className="text-xs text-zion-slate-light mt-1">
                      Market: {service.marketPrice}
                    </div>
                  )}
                </td>
              ))}
            </tr>
            <tr className="border-b border-zion-blue-light/20">
              <td className="p-3 text-zion-slate-light font-medium">Delivery</td>
              {selectedServicesData.map(service => (
                <td key={service.id} className="p-3 text-center text-white">
                  {service.estimatedDelivery}
                </td>
              ))}
            </tr>
            <tr className="border-b border-zion-blue-light/20">
              <td className="p-3 text-zion-slate-light font-medium">Support Level</td>
              {selectedServicesData.map(service => (
                <td key={service.id} className="p-3 text-center">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    service.supportLevel === 'premium' 
                      ? 'bg-zion-purple/20 text-zion-purple border border-zion-purple/30'
                      : service.supportLevel === 'standard'
                      ? 'bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30'
                      : 'bg-zion-slate-light/20 text-zion-slate-light border border-zion-slate-light/30'
                  }`}>
                    {service.supportLevel}
                  </span>
                </td>
              ))}
            </tr>
            <tr className="border-b border-zion-blue-light/20">
              <td className="p-3 text-zion-slate-light font-medium">Key Features</td>
              {selectedServicesData.map(service => (
                <td key={service.id} className="p-3 text-center">
                  <ul className="text-sm text-white space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center gap-2">
                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>
            <tr className="border-b border-zion-blue-light/20">
              <td className="p-3 text-zion-slate-light font-medium">Tags</td>
              {selectedServicesData.map(service => (
                <td key={service.id} className="p-3 text-center">
                  <div className="flex flex-wrap gap-1 justify-center">
                    {service.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-zion-blue-light/20 text-zion-slate-light text-xs rounded border border-zion-blue-light/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-3 text-zion-slate-light font-medium">Contact</td>
              {selectedServicesData.map(service => (
                <td key={service.id} className="p-3 text-center">
                  <div className="space-y-1 text-sm">
                    <div className="text-zion-cyan">{service.contactInfo.email}</div>
                    <div className="text-zion-slate-light">{service.contactInfo.phone}</div>
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-6 text-center">
        <p className="text-zion-slate-light text-sm mb-4">
          Need help choosing? Contact our experts for personalized recommendations.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=Service Comparison Help"
            className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:shadow-neon transition-all duration-300"
          >
            Get Expert Advice
          </a>
          <a
            href="tel:+13024640950"
            className="px-6 py-3 bg-zion-blue-light/20 text-zion-cyan border border-zion-cyan/30 rounded-lg font-medium hover:bg-zion-blue-light/30 transition-all duration-300"
          >
            Call for Help
          </a>
        </div>
      </div>
    </div>
  );
}