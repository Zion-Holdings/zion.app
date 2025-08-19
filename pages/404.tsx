import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Zion</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center px-4">
        <div className="text-center text-white">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
              404
            </h1>
            <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          
          <div className="space-y-4">
            <Link 
              href="/"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Go Home
            </Link>
            
            <div className="text-sm text-gray-400">
              <p>Or try one of these pages:</p>
              <div className="flex justify-center space-x-4 mt-2">
                <Link href="/about" className="hover:text-blue-400 transition-colors">About</Link>
                <Link href="/services" className="hover:text-blue-400 transition-colors">Services</Link>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}