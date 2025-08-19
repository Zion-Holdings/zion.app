import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Custom500() {
  return (
    <>
      <Head>
        <title>500 - Server Error | Zion</title>
        <meta name="description" content="Something went wrong on our end. Please try again." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-red-900 via-orange-900 to-red-800 flex items-center justify-center px-4">
        <div className="text-center text-white">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 mb-4">
              500
            </h1>
            <h2 className="text-3xl font-semibold mb-4">Server Error</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-md mx-auto">
              Something went wrong on our end. We're working to fix it.
            </p>
          </div>
          
          <div className="space-y-4">
            <button 
              onClick={() => window.location.reload()}
              className="inline-block bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 mr-4"
            >
              Try Again
            </button>
            
            <Link 
              href="/"
              className="inline-block bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Go Home
            </Link>
            
            <div className="text-sm text-gray-400 mt-6">
              <p>If the problem persists, please contact our support team.</p>
              <Link href="/contact" className="text-red-400 hover:text-red-300 transition-colors">Contact Support</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}