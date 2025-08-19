import React from 'react';
import Head from 'next/head';

export default function Roadmap() {
  return (
    <>
      <Head>
        <title>Roadmap - Zion App</title>
        <meta name="description" content="undefined" />
        <meta property="og:title" content="Roadmap" />
        <meta property="og:description" content="undefined" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Roadmap
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              undefined
            </p>
          </div>
          
          <div className="mt-16">
            
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Q4 2024</h3>
            <ul className="text-gray-600 space-y-1">
              <li>• Advanced analytics dashboard</li>
              <li>• Mobile app development</li>
              <li>• API version 2.0</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Q1 2025</h3>
            <ul className="text-gray-600 space-y-1">
              <li>• AI-powered features</li>
              <li>• Multi-language support</li>
              <li>• Enterprise features</li>
            </ul>
          </div>
        </div>
      
          </div>
        </div>
      </div>
    </>
  );
}