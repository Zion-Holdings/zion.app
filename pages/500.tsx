import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Custom500() {
  return (
    <>
      <Head>
        <title>500 - Server Error | Zion Tech Group</title>
        <meta name="description" content="Something went wrong on our end. We're working to fix it." />
        <meta property="og:title" content="500 - Server Error" />
        <meta property="og:description" content="Something went wrong on our end. We're working to fix it." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 mb-4">
              500
            </h1>
            <h2 className="text-3xl font-semibold text-white mb-4">
              Server Error
            </h2>
            <p className="text-white/70 text-lg max-w-md mx-auto mb-8">
              Something went wrong on our end. We&apos;re working to fix it. 
              Please try again in a few moments.
            </p>
          </div>
          
          <div className="space-y-4">
            <Link 
              href="/" 
              className="inline-block px-8 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-200 transform hover:scale-105"
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