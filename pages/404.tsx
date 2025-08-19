import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Zion Tech Group's autonomous innovation hub." />
        <meta property="og:title" content="404 - Page Not Found" />
        <meta property="og:description" content="The page you're looking for doesn't exist." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            {/* 404 Number */}
            <div className="text-9xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              404
            </div>
            
            {/* Error Message */}
            <h1 className="text-4xl font-bold mb-6 text-white">
              Page Not Found
            </h1>
            <p className="text-xl text-white/80 mb-8">
              The autonomous agents couldn't locate the page you're looking for. 
              It might have been moved, deleted, or never existed.
            </p>
            
            {/* Navigation Options */}
            <div className="space-y-4 mb-12">
              <div className="text-lg text-white/60 mb-4">
                Here are some pages that definitely exist:
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/" className="group">
                  <div className="p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:bg-white/15">
                    <div className="text-2xl mb-2">🏠</div>
                    <div className="font-semibold text-cyan-400">Home</div>
                    <div className="text-sm text-white/70">Return to the main hub</div>
                  </div>
                </Link>
                
                <Link href="/about" className="group">
                  <div className="p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 hover:border-fuchsia-400/50 transition-all duration-300 hover:bg-white/15">
                    <div className="text-2xl mb-2">🤖</div>
                    <div className="font-semibold text-fuchsia-400">About Us</div>
                    <div className="text-sm text-white/70">Learn about our mission</div>
                  </div>
                </Link>
                
                <Link href="/services" className="group">
                  <div className="p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 hover:border-green-400/50 transition-all duration-300 hover:bg-white/15">
                    <div className="text-2xl mb-2">⚡</div>
                    <div className="font-semibold text-green-400">Services</div>
                    <div className="text-sm text-white/70">Explore our solutions</div>
                  </div>
                </Link>
                
                <Link href="/contact" className="group">
                  <div className="p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:bg-white/15">
                    <div className="text-2xl mb-2">📞</div>
                    <div className="font-semibold text-blue-400">Contact</div>
                    <div className="text-sm text-white/70">Get in touch with us</div>
                  </div>
                </Link>
              </div>
            </div>
            
            {/* Search Suggestion */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold mb-3 text-purple-400">
                Can't find what you're looking for?
              </h3>
              <p className="text-white/70 mb-4">
                Our autonomous systems are constantly updating content. Try checking back later or contact us for assistance.
              </p>
              <Link href="/contact" className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-200 transform hover:scale-105">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}