import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import Link from 'next/link';

export default function DocsPage() {
  return (
    <>
      <Head>
        <title>Documentation — Zion Tech Group</title>
        <meta name="description" content="Documentation for Zion Tech Group - Autonomous Innovation Hub" />
      </Head>
      
      <Layout>
        <div className="relative min-h-screen py-24 bg-gradient-to-b from-black to-gray-900">
          <div className="absolute inset-0 bg-dots opacity-5" />
          
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight">
                Documentation
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto text-balance">
                Comprehensive guides and API documentation for our autonomous innovation platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Getting Started */}
              <div className="glass rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-500 group">
                <div className="text-4xl mb-6 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  🚀
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  Getting Started
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Quick start guide to get you up and running with our autonomous platform.
                </p>
                <div className="text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors duration-300">
                  Coming Soon →
                </div>
              </div>

              {/* API Reference */}
              <div className="glass rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-500 group">
                <div className="text-4xl mb-6 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                  📚
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                  API Reference
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Complete API documentation with examples and integration guides.
                </p>
                <div className="text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors duration-300">
                  Coming Soon →
                </div>
              </div>

              {/* Tutorials */}
              <div className="glass rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-500 group">
                <div className="text-4xl mb-6 text-green-400 group-hover:scale-110 transition-transform duration-300">
                  🎓
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                  Tutorials
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Step-by-step tutorials for common use cases and integrations.
                </p>
                <div className="text-green-400 text-sm font-medium group-hover:text-green-300 transition-colors duration-300">
                  Coming Soon →
                </div>
              </div>

              {/* Best Practices */}
              <div className="glass rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-500 group">
                <div className="text-4xl mb-6 text-orange-400 group-hover:scale-110 transition-transform duration-300">
                  ⭐
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
                  Best Practices
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Learn the recommended approaches for optimal performance and security.
                </p>
                <div className="text-orange-400 text-sm font-medium group-hover:text-orange-300 transition-colors duration-300">
                  Coming Soon →
                </div>
              </div>

              {/* Troubleshooting */}
              <div className="glass rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-500 group">
                <div className="text-4xl mb-6 text-red-400 group-hover:scale-110 transition-transform duration-300">
                  🔧
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">
                  Troubleshooting
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Common issues and solutions to help you resolve problems quickly.
                </p>
                <div className="text-red-400 text-sm font-medium group-hover:text-red-300 transition-colors duration-300">
                  Coming Soon →
                </div>
              </div>

              {/* Community */}
              <div className="glass rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-500 group">
                <div className="text-4xl mb-6 text-pink-400 group-hover:scale-110 transition-transform duration-300">
                  👥
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors duration-300">
                  Community
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Connect with other developers and share knowledge in our community.
                </p>
                <div className="text-pink-400 text-sm font-medium group-hover:text-pink-300 transition-colors duration-300">
                  Coming Soon →
                </div>
              </div>
            </div>

            <div className="text-center mt-16">
              <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Documentation Coming Soon
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  We&apos;re working hard to create comprehensive documentation for our platform. 
                  In the meantime, feel free to contact us for support and guidance.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}