import React from 'react';
import { COMPREHENSIVE_SERVICES, SERVICE_CATEGORIES } from '@/data/comprehensiveServices';
import { Zap, Shield, Rocket, Users, CheckCircle, Star } from 'lucide-react';

export function ServicesShowcase() {
  const popularServices = COMPREHENSIVE_SERVICES.slice(0, 6);

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Zion Tech Group Services?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We deliver enterprise-grade solutions with startup agility and competitive pricing
          </p>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Rocket className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Rapid Deployment</h3>
            <p className="text-gray-600">Get your solutions up and running in days, not months</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
            <p className="text-gray-600">Bank-level security and compliance built-in</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Scalable Architecture</h3>
            <p className="text-gray-600">Grow from startup to enterprise seamlessly</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
            <p className="text-gray-600">24/7 technical support and consultation</p>
          </div>
        </div>

        {/* Popular Service Categories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Popular Service Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularServices.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    {SERVICE_CATEGORIES.find(cat => cat.id === service.category)?.name || 'Service'}
                  </span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">{service.rating}</span>
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">
                    ${service.price}
                  </span>
                  <span className="text-sm text-gray-500">{service.currency}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What Sets Us Apart */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">What Sets Us Apart</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Competitive Pricing</h4>
                  <p className="text-gray-600">Up to 40% lower than enterprise competitors</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Global Reach</h4>
                  <p className="text-gray-600">Serving clients across 50+ countries</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Proven Track Record</h4>
                  <p className="text-gray-600">500+ successful deployments and counting</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Future-Proof Technology</h4>
                  <p className="text-gray-600">Built with the latest AI and cloud technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Transparent, Competitive Pricing</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h4 className="text-xl font-semibold mb-2">Startup</h4>
              <p className="text-3xl font-bold text-blue-600 mb-4">$299</p>
              <p className="text-gray-600 mb-4">Perfect for small teams and MVPs</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Basic Support</li>
                <li>• Standard Features</li>
                <li>• Community Access</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center border-2 border-blue-500">
              <h4 className="text-xl font-semibold mb-2">Business</h4>
              <p className="text-3xl font-bold text-blue-600 mb-4">$799</p>
              <p className="text-gray-600 mb-4">Ideal for growing businesses</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Priority Support</li>
                <li>• Advanced Features</li>
                <li>• Custom Integration</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h4 className="text-xl font-semibold mb-2">Enterprise</h4>
              <p className="text-3xl font-bold text-blue-600 mb-4">$2,499</p>
              <p className="text-gray-600 mb-4">For large organizations</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• 24/7 Support</li>
                <li>• All Features</li>
                <li>• Dedicated Manager</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-blue-600 rounded-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-lg mb-6">
            Contact us today to discuss your project requirements and get a custom quote
          </p>
          <div className="space-y-2 text-sm">
            <p><strong>Mobile:</strong> +1 302 464 0950</p>
            <p><strong>Email:</strong> kleber@ziontechgroup.com</p>
            <p><strong>Address:</strong> 364 E Main St STE 1008 Middletown DE 19709</p>
          </div>
          <div className="mt-6 space-x-4">
            <a 
              href="/comprehensive-services" 
              className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View All Services
            </a>
            <a 
              href="/services-comparison" 
              className="inline-block bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Compare Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}