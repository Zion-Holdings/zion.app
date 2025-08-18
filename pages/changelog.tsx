import React from 'react';
import Head from 'next/head';

export default function Changelog() {
  return (
    <>
      <Head>
        <title>Changelog - Zion App</title>
        <meta name="description" content="undefined" />
        <meta property="og:title" content="Changelog" />
        <meta property="og:description" content="undefined" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Changelog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              undefined
            </p>
          </div>
          
          <div className="mt-16">
            
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Version 1.0.0</h3>
            <p className="text-gray-600">Initial release with core features</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Version 0.9.0</h3>
            <p className="text-gray-600">Beta release for testing</p>
          </div>
        </div>
      
          </div>
        </div>
      </div>
    </>
  );
}