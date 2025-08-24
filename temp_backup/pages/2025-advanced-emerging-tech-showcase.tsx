import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { advancedEmergingTechServices2025 } from '../data/2025-advanced-emerging-tech-services-expansion';
import { advancedITInfrastructureServices2025 } from '../data/2025-advanced-it-infrastructure-services-expansion';
import { advancedBusinessSolutions2025 } from '../data/2025-advanced-business-solutions-expansion';

const AdvancedEmergingTechShowcase: React.FC = () => {
  const allServices = [
    ...advancedEmergingTechServices2025,
    ...advancedITInfrastructureServices2025,
    ...advancedBusinessSolutions2025
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Head>
        <title>2025 Advanced Emerging Technology Services Showcase | Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive suite of advanced emerging technology services including quantum computing, AI, cybersecurity, space tech, and more. Leading-edge solutions for the future." />
        <meta name="keywords" content="quantum computing, AI services, cybersecurity, space technology, emerging tech, Zion Tech Group" />
        <meta property="og:title" content="2025 Advanced Emerging Technology Services Showcase | Zion Tech Group" />
        <meta property="og:description" content="Leading-edge emerging technology services for the future. Quantum computing, AI, cybersecurity, space tech, and more." />
        <meta property="og:url" content="https://ziontechgroup.com/2025-advanced-emerging-tech-showcase" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/2025-advanced-emerging-tech-showcase" />
      </Head>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                2025 Advanced Emerging
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Technology Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Discover our comprehensive suite of cutting-edge micro SAAS services, IT solutions, and AI innovations. 
              From quantum computing to space technology, we're building the future today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#services" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
                Explore Services
              </Link>
              <Link href="#contact" className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 text-6xl animate-bounce">🚀</div>
        <div className="absolute top-40 right-20 text-5xl animate-pulse">⚛️</div>
        <div className="absolute bottom-40 left-20 text-4xl animate-spin">🤖</div>
        <div className="absolute bottom-20 right-10 text-5xl animate-bounce">💎</div>
      </div>

      {/* Contact Information Banner */}
      <div id="contact" className="bg-gradient-to-r from-blue-600 to-purple-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="flex flex-col items-center">
                <div className="text-2xl mb-2">📱</div>
                <div className="font-semibold">Mobile</div>
                <div className="text-blue-100">+1 302 464 0950</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-2xl mb-2">✉️</div>
                <div className="font-semibold">Email</div>
                <div className="text-blue-100">kleber@ziontechgroup.com</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-2xl mb-2">📍</div>
                <div className="font-semibold">Address</div>
                <div className="text-blue-100">364 E Main St STE 1008</div>
                <div className="text-blue-100">Middletown DE 19709</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Service Categories</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our advanced services span across multiple cutting-edge technology domains, 
              providing comprehensive solutions for modern businesses and organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4">Emerging Technologies</h3>
              <p className="text-blue-100 mb-4">
                Quantum computing, space technology, AI consciousness, and futuristic innovations
              </p>
              <div className="text-3xl font-bold">10+ Services</div>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-teal-600 p-8 rounded-2xl text-white">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-2xl font-bold mb-4">IT Infrastructure</h3>
              <p className="text-green-100 mb-4">
                Network automation, cloud optimization, DevOps intelligence, and enterprise solutions
              </p>
              <div className="text-3xl font-bold">9+ Services</div>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-8 rounded-2xl text-white">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-2xl font-bold mb-4">Business Solutions</h3>
              <p className="text-purple-100 mb-4">
                Process automation, supply chain intelligence, customer experience, and industry solutions
              </p>
              <div className="text-3xl font-bold">9+ Services</div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div id="services" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Advanced Technology Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive portfolio of cutting-edge micro SAAS services, 
              each designed to deliver exceptional value and competitive advantage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
                <div className={`h-4 bg-gradient-to-r ${service.color}`}></div>
                <div className="p-8">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.tagline}</p>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-gray-900">{service.price}</div>
                    <div className="text-gray-500">{service.period}</div>
                  </div>

                  <p className="text-gray-700 mb-6">{service.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.slice(0, 5).map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Target Audience:</h4>
                    <p className="text-sm text-gray-600">{service.targetAudience}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">ROI:</h4>
                    <p className="text-sm text-gray-600">{service.roi}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Market Position:</h4>
                    <p className="text-sm text-gray-600">{service.marketPosition}</p>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{service.customers}</div>
                      <div className="text-sm text-gray-500">Customers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{service.rating}</div>
                      <div className="text-sm text-gray-500">Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{service.reviews}</div>
                      <div className="text-sm text-gray-500">Reviews</div>
                    </div>
                  </div>

                  <Link 
                    href={service.link}
                    className={`w-full bg-gradient-to-r ${service.color} text-white font-bold py-3 px-6 rounded-lg text-center block hover:opacity-90 transition-opacity duration-300`}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Zion Tech Group */}
      <div className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              We're not just another technology company. We're your strategic partner in digital transformation 
              and technological innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2">First-to-Market</h3>
              <p className="text-blue-200">Pioneering solutions in emerging technology domains</p>
            </div>
            <div className="text-center text-white">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-2">AI-Powered</h3>
              <p className="text-blue-200">Intelligent automation and optimization across all services</p>
            </div>
            <div className="text-center text-white">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-2">Enterprise-Grade</h3>
              <p className="text-blue-200">Security, compliance, and scalability for large organizations</p>
            </div>
            <div className="text-center text-white">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-2">Proven ROI</h3>
              <p className="text-blue-200">Measurable business impact and return on investment</p>
            </div>
          </div>
        </div>
      </div>

      {/* Market Statistics */}
      <div className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Market Leadership & Growth</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our services are positioned in high-growth markets with significant expansion potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="text-4xl font-bold text-blue-400 mb-2">$50B+</div>
              <div className="text-gray-300">Total Addressable Market</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl font-bold text-green-400 mb-2">400%+</div>
              <div className="text-gray-300">Average Annual Growth</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl font-bold text-purple-400 mb-2">28</div>
              <div className="text-gray-300">Advanced Services</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl font-bold text-yellow-400 mb-2">1000+</div>
              <div className="text-gray-300">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Lead the Future of Technology?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join hundreds of forward-thinking organizations that are already transforming their businesses 
            with our advanced technology services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#contact"
              className="bg-white text-green-600 font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Get Started Today
            </Link>
            <Link 
              href="https://ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-white hover:text-green-600 transition-all duration-300"
            >
              Visit Our Website
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Zion Tech Group</h3>
              <p className="text-gray-400">
                Leading provider of advanced emerging technology services, IT infrastructure solutions, 
                and innovative business applications.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="text-gray-400 space-y-2">
                <li>Emerging Technologies</li>
                <li>IT Infrastructure</li>
                <li>Business Solutions</li>
                <li>AI & Machine Learning</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="text-gray-400 space-y-2">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Partners</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <div className="text-gray-400 space-y-2">
                <div>+1 302 464 0950</div>
                <div>kleber@ziontechgroup.com</div>
                <div>364 E Main St STE 1008</div>
                <div>Middletown DE 19709</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Zion Tech Group. All rights reserved. | <Link href="https://ziontechgroup.com" className="hover:text-white">ziontechgroup.com</Link></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AdvancedEmergingTechShowcase;