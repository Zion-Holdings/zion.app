import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICE_CATEGORIES, ALL_SERVICES } from '@/data/servicesData';

export function Home() {
  const featuredServices = ALL_SERVICES.slice(0, 6);
  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '50+', label: 'Expert Services' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Transform Your Business with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Zion Tech Group
              </span>
            </h1>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Leading provider of innovative IT services, AI solutions, and micro SAAS platforms. 
              We help businesses scale, automate, and succeed in the digital age.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link 
                to="/services"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
              >
                🚀 Explore Services
              </Link>
              <a 
                href="tel:+13024640950"
                className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors"
              >
                📞 Call +1 302 464 0950
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">{stat.number}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info Banner */}
      <div className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-blue-600">📍</span>
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-600">📱</span>
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-600">✉️</span>
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-600">🌐</span>
              <a href="https://ziontechgroup.com" className="text-blue-600 hover:underline">
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Service Categories */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Comprehensive Service Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From cutting-edge AI solutions to robust IT infrastructure, we provide everything your business needs to thrive in the digital economy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICE_CATEGORIES.map((category) => (
              <div key={category.id} className="group">
                <Link to={`/services?category=${category.id}`}>
                  <div className={`${category.color} p-8 rounded-xl text-white text-center group-hover:scale-105 transition-transform duration-300`}>
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="text-2xl font-bold mb-3">{category.name}</h3>
                    <p className="text-white/90 leading-relaxed">{category.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Services */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most popular and innovative services that are transforming businesses across industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                  <img 
                    src={service.images[0]} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                      {service.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-500">⭐</span>
                      <span className="font-medium">{service.provider.rating}</span>
                      <span className="text-gray-500">({service.provider.reviewCount})</span>
                    </div>
                    <span className="text-blue-600 font-semibold">
                      Starting at ${service.pricing.basic.price}/{service.pricing.basic.period}
                    </span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Link 
                      to={`/services?service=${service.id}`}
                      className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center"
                    >
                      Learn More
                    </Link>
                    <a
                      href={`tel:+13024640950`}
                      className="bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/services"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine innovation, expertise, and reliability to deliver solutions that drive real business results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation First</h3>
              <p className="text-gray-600">Cutting-edge AI and technology solutions that keep you ahead of the competition</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Enterprise Security</h3>
              <p className="text-gray-600">SOC 2, HIPAA, GDPR compliant solutions with enterprise-grade security</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Deployment</h3>
              <p className="text-gray-600">Quick setup and implementation with minimal disruption to your business</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
              <p className="text-gray-600">Trusted by businesses nationwide with a track record of successful implementations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Industries We Serve */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our solutions are designed to meet the unique challenges and requirements of various industries.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: '🏥', name: 'Healthcare', description: 'HIPAA compliant solutions' },
              { icon: '🏦', name: 'Finance', description: 'Secure financial systems' },
              { icon: '🏭', name: 'Manufacturing', description: 'Industry 4.0 automation' },
              { icon: '🛒', name: 'Retail', description: 'E-commerce optimization' },
              { icon: '🎓', name: 'Education', description: 'Digital learning platforms' },
              { icon: '🏢', name: 'Real Estate', description: 'Property management tools' },
              { icon: '🚚', name: 'Logistics', description: 'Supply chain optimization' },
              { icon: '⚖️', name: 'Legal', description: 'Practice management systems' }
            ].map((industry, index) => (
              <div key={index} className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl">{industry.icon}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{industry.name}</h3>
                <p className="text-sm text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Join hundreds of businesses that have already transformed their operations with Zion Tech Group. 
            Get started today with a free consultation and discover how our innovative solutions can drive growth, 
            efficiency, and success for your organization.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a 
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
            >
              📞 Call +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors"
            >
              ✉️ Get Free Consultation
            </a>
            <Link 
              to="/services"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              🚀 Explore Services
            </Link>
          </div>
          
          <div className="bg-white/10 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Special Offer for New Clients</h3>
            <p className="text-blue-100 mb-4">
              Get 20% off your first month of any service when you sign up this month!
            </p>
            <a 
              href="mailto:kleber@ziontechgroup.com?subject=New Client Special Offer"
              className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              Claim Your Discount
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Zion Tech Group</h3>
              <p className="text-gray-400 mb-4">
                Transforming businesses through innovative technology solutions.
              </p>
              <div className="flex space-x-4">
                <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300">
                  🌐 Website
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">
                  ✉️ Email
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>📍 364 E Main St STE 1008</p>
                <p>Middletown DE 19709</p>
                <p>📱 +1 302 464 0950</p>
                <p>✉️ kleber@ziontechgroup.com</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/services" className="block text-gray-400 hover:text-white">
                  All Services
                </Link>
                <Link to="/contact" className="block text-gray-400 hover:text-white">
                  Contact Us
                </Link>
                <a href="https://ziontechgroup.com" className="block text-gray-400 hover:text-white">
                  About Us
                </a>
                <a href="https://ziontechgroup.com" className="block text-gray-400 hover:text-white">
                  Blog
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <div className="space-y-2">
                <Link to="/services?category=ai-services" className="block text-gray-400 hover:text-white">
                  AI & Machine Learning
                </Link>
                <Link to="/services?category=it-services" className="block text-gray-400 hover:text-white">
                  IT Infrastructure
                </Link>
                <Link to="/services?category=micro-saas" className="block text-gray-400 hover:text-white">
                  Micro SAAS Solutions
                </Link>
                <Link to="/services?category=cybersecurity" className="block text-gray-400 hover:text-white">
                  Cybersecurity
                </Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Zion Tech Group. All rights reserved. | 
              <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300 ml-1">
                ziontechgroup.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
