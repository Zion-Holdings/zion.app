import React from 'react';
import { Link } from 'react-router-dom';

export default function BlockchainServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Blockchain Solutions for the
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300">
                Digital Economy
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge blockchain technology. From smart contracts to DeFi platforms, 
              our blockchain services deliver security, transparency, and innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <button className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
                  Get Started Today
                </button>
              </Link>
              <Link to="/contact">
                <button className="border-2 border-purple-500 text-purple-500 hover:bg-purple-500/10 px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Blockchain Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive blockchain solutions designed to drive innovation and growth across your organization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Smart Contract Development */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📜</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Contract Development</h3>
              <p className="text-gray-600 mb-4">
                Custom smart contracts for DeFi, NFTs, and enterprise blockchain applications.
              </p>
              <div className="text-2xl font-bold text-purple-600 mb-4">$2,999</div>
              <ul className="text-sm text-gray-600 mb-4 space-y-1">
                <li>• Custom contract development</li>
                <li>• Security auditing</li>
                <li>• Testing & deployment</li>
                <li>• Ongoing support</li>
              </ul>
              <Link to="/contact">
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition-colors">
                  Get Started
                </button>
              </Link>
            </div>

            {/* DeFi Platform Development */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">DeFi Platform Development</h3>
              <p className="text-gray-600 mb-4">
                Complete DeFi platforms with lending, staking, and yield farming capabilities.
              </p>
              <div className="text-2xl font-bold text-indigo-600 mb-4">$15,999</div>
              <ul className="text-sm text-gray-600 mb-4 space-y-1">
                <li>• Full platform development</li>
                <li>• Multi-chain support</li>
                <li>• Security features</li>
                <li>• User dashboard</li>
              </ul>
              <Link to="/contact">
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition-colors">
                  Get Started
                </button>
              </Link>
            </div>

            {/* NFT Marketplace */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">NFT Marketplace</h3>
              <p className="text-gray-600 mb-4">
                Custom NFT marketplaces for digital art, collectibles, and virtual assets.
              </p>
              <div className="text-2xl font-bold text-pink-600 mb-4">$8,999</div>
              <ul className="text-sm text-gray-600 mb-4 space-y-1">
                <li>• Custom marketplace design</li>
                <li>• Multi-wallet support</li>
                <li>• Royalty system</li>
                <li>• Analytics dashboard</li>
              </ul>
              <Link to="/contact">
                <button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-lg transition-colors">
                  Get Started
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
            Contact us today to discuss how our blockchain solutions can transform your business operations and drive growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <button className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
                Contact Us
              </button>
            </Link>
            <a href="tel:+13024640950" className="border-2 border-purple-500 text-purple-500 hover:bg-purple-500/10 px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}