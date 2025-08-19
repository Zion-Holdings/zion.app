import React from 'react';
import Head from 'next/head';

export default function Support() {
  return (
    <>
      <Head>
        <title>Support - Zion App</title>
        <meta name="description" content="undefined" />
        <meta property="og:title" content="Support" />
        <meta property="og:description" content="undefined" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Support
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              undefined
            </p>
          </div>
          
          <div className="mt-16">
            
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Documentation</h3>
            <p className="text-gray-600 mb-4">Comprehensive guides and tutorials</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              View Docs
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Support</h3>
            <p className="text-gray-600 mb-4">Get help from our support team</p>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Contact Us
            </button>
          </div>
        </div>
      
          </div>
        </div>
      </div>
    </>
  );
}