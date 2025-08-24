import React from 'react';
import Head from 'next/head';

export default function ProductsList() {
  return (
    <>
      <Head>
        <title>Products List - Zion App</title>
        <meta name="description" content="Browse our products and services" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Our Products & Services</h1>
        <p className="text-lg mb-4">Discover our comprehensive range of innovative solutions.</p>
        <div className="mt-4">
          <a href="/" className="text-blue-600 hover:underline">
            ← Back to Home
          </a>
        </div>
      </div>
    </>
  );
}
