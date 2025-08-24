import React from 'react';
import Head from 'next/head';

export default function ApiDocsPage() {
  return (
    <>
      <Head>
        <title>API Docs | Zion Tech Group</title>
        <meta name="description" content="API reference and guides." />
        <link rel="canonical" href="https://ziontechgroup.com/api-docs" />
      </Head>
      <div className="container mx-auto px-4 py-16 text-gray-200">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">API Docs</h1>
        <p className="text-gray-300">See <a href="/api-docs" className="text-cyan-400 underline">API Documentation</a> for the full reference.</p>
      </div>
    </>
  );
}