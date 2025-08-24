import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>ZionTech Group - Innovative Technology Solutions</title>
        <meta name="description" content="Leading provider of AI, quantum computing, and innovative technology solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        {/* Navigation */}
        <nav className="bg-black/20 backdrop-blur-xl border-b border-white/10 p-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold">ZionTech Group</div>
            <div className="flex space-x-6">
              <Link href="/comprehensive-services-showcase-2026" className="hover:text-cyan-400 transition-colors">
                2026 Services
              </Link>
              <Link href="/comprehensive-services-showcase-2025" className="hover:text-cyan-400 transition-colors">
                2025 Services
              </Link>
              <a href="https://ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                Website
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Pioneering the future of technology with innovative solutions that drive business transformation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/comprehensive-services-showcase-2026">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Explore 2026 Services
                </button>
              </Link>
              <Link href="/comprehensive-services-showcase-2025">
                <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                  2025 Services Showcase
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Get in touch with our team to discuss how our innovative services can help you achieve your goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Email Us
              </a>
              <a
                href="tel:+13024640950"
                className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                Call Us
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-white/10">
          <div className="max-w-6xl mx-auto text-center">
            <div className="text-gray-400 mb-4">
              <p>© 2025-2026 ZionTech Group. All rights reserved.</p>
              <p className="mt-2">
                Address: 364 E Main St STE 1008 Middletown DE 19709 | 
                Phone: +1 302 464 0950 | 
                Email: kleber@ziontechgroup.com
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
