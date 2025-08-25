import React from 'react';
import { MICRO_SAAS_SERVICES, PRICING_TIERS, CONTACT_INFO } from '../data/microSaasServices';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transparent Pricing Plans
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. All plans include our core features 
            with flexible scaling options.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(PRICING_TIERS).map(([key, tier]) => (
              <div key={key} className={`bg-white rounded-lg shadow-lg p-8 ${key === 'professional' ? 'border-2 border-blue-500 scale-105' : ''}`}>
                {key === 'professional' && (
                  <div className="text-center mb-4">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-center mb-4">{tier.name}</h3>
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-blue-600">{tier.multiplier}x</span>
                  <span className="text-gray-600 ml-2">base pricing</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    All core features included
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    {key === 'enterprise' ? 'Unlimited' : 'Standard'} support
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    {key === 'enterprise' ? 'Custom' : 'Standard'} integrations
                  </li>
                </ul>
                <a
                  href={`tel:${CONTACT_INFO.mobile}`}
                  className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Service Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MICRO_SAAS_SERVICES.slice(0, 9).map((service) => (
              <div key={service.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description.substring(0, 100)}...</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                  <a
                    href="https://ziontechgroup.com"
                    className="text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Need a Custom Quote?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us for custom pricing plans tailored to your specific business requirements.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p>{CONTACT_INFO.mobile}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p>{CONTACT_INFO.email}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p>{CONTACT_INFO.address}</p>
            </div>
          </div>
          <a
            href={`tel:${CONTACT_INFO.mobile}`}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Custom Quote
          </a>
        </div>
      </section>
    </div>
  );
}