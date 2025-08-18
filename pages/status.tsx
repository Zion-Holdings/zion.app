import React from 'react';
import Head from 'next/head';

export default function Status() {
  return (
    <>
      <Head>
        <title>Status - Zion App</title>
        <meta name="description" content="undefined" />
        <meta property="og:title" content="Status" />
        <meta property="og:description" content="undefined" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Status
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              undefined
            </p>
          </div>
          
          <div className="mt-16">
            
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">System Status</h3>
            <div className="text-green-600 font-medium">🟢 Operational</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance</h3>
            <div className="text-blue-600 font-medium">⚡ Excellent</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Uptime</h3>
            <div className="text-green-600 font-medium">99.9%</div>
          </div>
        </div>
      
          </div>
        </div>
      </div>
    </>
  );
}