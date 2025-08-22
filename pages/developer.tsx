import React from 'react';
import Head from 'next/head';

export default function DeveloperPage() {
  return (
    <>
      <Head>
        <title>Developer Portal | Zion Tech Group</title>
        <meta name="description" content="Developer resources, API keys, examples, and SDKs." />
        <link rel="canonical" href="https://ziontechgroup.com/developer" />
      </Head>
      <div className="container mx-auto px-4 py-16 text-gray-200">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Developer Portal</h1>
        <p className="text-gray-300 mb-6">Access docs, SDKs, and quickstarts for all services. Contact us for enterprise onboarding.</p>
        <div className="space-x-4">
          <a href="/api-documentation" className="text-cyan-400 underline">API Docs</a>
          <a href="/docs" className="text-cyan-400 underline">Guides</a>
          <a href="/support" className="text-cyan-400 underline">Support</a>
        </div>
      </div>
    </>
  );
}