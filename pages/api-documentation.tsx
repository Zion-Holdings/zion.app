import React from 'react';
import Head from 'next/head';

export default function ApiDocumentationPage() {
  return (
    <>
      <Head>
        <title>API Documentation | Zion Tech Group</title>
        <meta name="description" content="Developer APIs, SDKs, and integration guides for Zion Tech Group services." />
        <link rel="canonical" href="https://ziontechgroup.com/api-documentation" />
      </Head>
      <div className="container mx-auto px-4 py-16 text-gray-200">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">API Documentation</h1>
        <p className="text-gray-300 mb-6">Explore endpoints, SDKs, and quickstart guides for integrating our micro SaaS, IT, and AI services.</p>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Start with our <a href="/docs" className="text-cyan-400 underline">Developer Docs</a></li>
          <li>Need help? Call +1 302 464 0950 or email <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 underline">kleber@ziontechgroup.com</a></li>
        </ul>
      </div>
    </>
  );
}