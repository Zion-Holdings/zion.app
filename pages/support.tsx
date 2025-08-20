import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import Link from 'next/link';

export default function SupportPage() {
  return (
    <>
      <Head>
        <title>Support — Zion Tech Group</title>
        <meta name="description" content="Get support for Zion Tech Group - Autonomous Innovation Hub" />
      </Head>
      
      <Layout>
        <div className="relative min-h-screen py-24 bg-gradient-to-b from-black to-gray-900">
          <div className="absolute inset-0 bg-dots opacity-5" />
          
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight">
                Support Center
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto text-balance">
                We&apos;re here to help you succeed with our autonomous innovation platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Contact Support */}
              <div className="glass rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-500 group">
                <div className="text-4xl mb-6 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  💬
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  Contact Support
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Get in touch with our expert support team for personalized assistance.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105"
                >
                  Contact Us
                </Link>
              </div>

              {/* Documentation */}
              <div className="glass rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-500 group">
                <div className="text-4xl mb-6 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                  📚
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                  Documentation
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Comprehensive guides and API documentation for our platform.
                </p>
                <Link 
                  href="/docs" 
                  className="inline-flex px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105"
                >
                  View Docs
                </Link>
              </div>

              {/* FAQ */}
              <div className="glass rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-500 group">
                <div className="text-4xl mb-6 text-green-400 group-hover:scale-110 transition-transform duration-300">
                  ❓
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                  FAQ
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Find answers to commonly asked questions about our platform.
                </p>
                <div className="text-green-400 text-sm font-medium group-hover:text-green-300 transition-colors duration-300">
                  Coming Soon →
                </div>
              </div>

              {/* Community */}
              <div className="glass rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-500 group">
                <div className="text-4xl mb-6 text-orange-400 group-hover:scale-110 transition-transform duration-300">
                  👥
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
                  Community
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Connect with other users and share knowledge in our community.
                </p>
                <div className="text-orange-400 text-sm font-medium group-hover:text-orange-300 transition-colors duration-300">
                  Coming Soon →
                </div>
              </div>

              {/* Status Page */}
              <div className="glass rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-500 group">
                <div className="text-4xl mb-6 text-red-400 group-hover:scale-110 transition-transform duration-300">
                  📊
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">
                  System Status
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Check the current status of our systems and services.
                </p>
                <div className="text-red-400 text-sm font-medium group-hover:text-red-300 transition-colors duration-300">
                  Coming Soon →
                </div>
              </div>

              {/* Training */}
              <div className="glass rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-500 group">
                <div className="text-4xl mb-6 text-pink-400 group-hover:scale-110 transition-transform duration-300">
                  🎓
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors duration-300">
                  Training
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Access training materials and workshops to master our platform.
                </p>
                <div className="text-pink-400 text-sm font-medium group-hover:text-pink-300 transition-colors duration-300">
                  Coming Soon →
                </div>
              </div>
            </div>

            {/* Priority Support */}
            <div className="glass rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Need Priority Support?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
                Enterprise customers and premium users get access to priority support channels, 
                dedicated support managers, and faster response times.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="inline-flex px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1"
                >
                  Upgrade to Premium
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex px-8 py-4 bg-transparent border-2 border-gray-600 text-gray-300 hover:bg-white hover:text-black hover:border-white font-semibold rounded-xl transition-all duration-300 hover:-translate-y-1"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}