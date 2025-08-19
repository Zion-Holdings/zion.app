import React from 'react';
import Head from 'next/head';

export default function Help() {
  return (
    <>
      <Head>
        <title>Help - Zion App</title>
        <meta name="description" content="undefined" />
        <meta property="og:title" content="Help" />
        <meta property="og:description" content="undefined" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Help
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              undefined
            </p>
          </div>
          
          <div className="mt-16">
            
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Start Guide</h3>
            <p className="text-gray-600 mb-4">Get up and running in minutes</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Start Here
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">FAQ</h3>
            <p className="text-gray-600 mb-4">Common questions and answers</p>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              View FAQ
            </button>
          </div>
        </div>
      
          </div>
        </div>
      </div>
    </>
  );
}