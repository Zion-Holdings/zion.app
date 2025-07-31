import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Head>
        <title>Welcome - Bolt.new Zion App</title>
        <meta name="description" content="Welcome to our optimized application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Bolt.new Zion App
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your optimized and continuously improved application
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Performance</h3>
              <p className="text-gray-600">Continuously optimized for speed and efficiency</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Security</h3>
              <p className="text-gray-600">Regular security updates and monitoring</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Quality</h3>
              <p className="text-gray-600">Automated code quality improvements</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}