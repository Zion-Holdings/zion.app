import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
        <meta property="og:title" content="404 - Page Not Found" />
        <meta property="og:description" content="The page you're looking for doesn't exist." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4">
              404
            </h1>
            <h2 className="text-3xl font-semibold text-white mb-4">
              Page Not Found
            </h2>
            <p className="text-white/70 text-lg max-w-md mx-auto mb-8">
              The page you&apos;re looking for doesn&apos;t exist or has been moved. 
              Let&apos;s get you back on track.
            </p>
          </div>
          
          <div className="space-y-4">
            <Link 
              href="/" 
              className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 transform hover:scale-105"
            >
              Go Home
            </Link>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/about" 
                className="px-6 py-2 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-200"
              >
                About Us
              </Link>
              <Link 
                href="/services" 
                className="px-6 py-2 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-200"
              >
                Services
              </Link>
              <Link 
                href="/contact" 
                className="px-6 py-2 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-200"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}