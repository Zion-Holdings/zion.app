import React from 'react';
import { Link } from 'react-router-dom';

export default function ServicesOverviewPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Complete Technology
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">
                Services Overview
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Discover our comprehensive range of technology services designed to transform your business. 
              From AI and blockchain to IoT and cybersecurity, we have the solutions you need.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
                  Get Started Today
                </button>
              </Link>
              <Link to="/contact">
                <button className="border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500/10 px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
                  Schedule Demo
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Technology Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to drive innovation and growth across your organization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Services */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Services</h3>
              <p className="text-gray-600 mb-4">
                Transform your business with cutting-edge artificial intelligence solutions.
              </p>
              <div className="text-2xl font-bold text-blue-600 mb-4">From $299/month</div>
              <ul className="text-sm text-gray-600 mb-4 space-y-1">
                <li>• AI Content Generation</li>
                <li>• Customer Support Bots</li>
                <li>• Predictive Analytics</li>
                <li>• Computer Vision</li>
              </ul>
              <Link to="/ai-services">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors">
                  Learn More
                </button>
              </Link>
            </div>

            {/* Blockchain Services */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔗</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Blockchain Solutions</h3>
              <p className="text-gray-600 mb-4">
                Build secure, transparent, and innovative blockchain applications.
              </p>
              <div className="text-2xl font-bold text-purple-600 mb-4">From $2,999</div>
              <ul className="text-sm text-gray-600 mb-4 space-y-1">
                <li>• Smart Contract Development</li>
                <li>• DeFi Platforms</li>
                <li>• NFT Marketplaces</li>
                <li>• Enterprise Blockchain</li>
              </ul>
              <Link to="/blockchain-services">
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition-colors">
                  Learn More
                </button>
              </Link>
            </div>

            {/* IoT Services */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">IoT Solutions</h3>
              <p className="text-gray-600 mb-4">
                Connect, monitor, and optimize with Internet of Things technology.
              </p>
              <div className="text-2xl font-bold text-green-600 mb-4">From $399/month</div>
              <ul className="text-sm text-gray-600 mb-4 space-y-1">
                <li>• Device Management</li>
                <li>• Data Analytics</li>
                <li>• Security Solutions</li>
                <li>• Edge Computing</li>
              </ul>
              <Link to="/iot-services">
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition-colors">
                  Learn More
                </button>
              </Link>
            </div>

            {/* Cybersecurity Services */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Cybersecurity</h3>
              <p className="text-gray-600 mb-4">
                Protect your organization with comprehensive security solutions.
              </p>
              <div className="text-2xl font-bold text-red-600 mb-4">From $1,299/month</div>
              <ul className="text-sm text-gray-600 mb-4 space-y-1">
                <li>• Threat Detection</li>
                <li>• Zero-Trust Security</li>
                <li>• Penetration Testing</li>
                <li>• Incident Response</li>
              </ul>
              <Link to="/cybersecurity-services">
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition-colors">
                  Learn More
                </button>
              </Link>
            </div>

            {/* Traditional IT Services */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Traditional IT</h3>
              <p className="text-gray-600 mb-4">
                Reliable IT infrastructure and support services for your business.
              </p>
              <div className="text-2xl font-bold text-gray-600 mb-4">From $199/month</div>
              <ul className="text-sm text-gray-600 mb-4 space-y-1">
                <li>• Infrastructure Management</li>
                <li>• Cloud Solutions</li>
                <li>• Network Security</li>
                <li>• Technical Support</li>
              </ul>
              <Link to="/services">
                <button className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 rounded-lg transition-colors">
                  Learn More
                </button>
              </Link>
            </div>

            {/* Custom Solutions */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Custom Solutions</h3>
              <p className="text-gray-600 mb-4">
                Tailored technology solutions for your specific business needs.
              </p>
              <div className="text-2xl font-bold text-yellow-600 mb-4">Custom Pricing</div>
              <ul className="text-sm text-gray-600 mb-4 space-y-1">
                <li>• Custom Development</li>
                <li>• System Integration</li>
                <li>• Consulting Services</li>
                <li>• Project Management</li>
              </ul>
              <Link to="/contact">
                <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 rounded-lg transition-colors">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our technology solutions can transform your business operations and drive growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
                Contact Us
              </button>
            </Link>
            <a href="tel:+13024640950" className="border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500/10 px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}