import React from 'react';
import Head from 'next/head';

export default function ZGPLibraryPage() {
  return (
    <>
      <Head>
        <title>ZGP Library - Zion Tech Group</title>
        <meta name="description" content="Zion Governance Protocol Library" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">ZGP Library</h1>
        <p className="text-lg mb-4">Access our Zion Governance Protocol resources and documentation.</p>
        <div className="mt-4">
          <a href="/governance" className="text-blue-600 hover:underline">
            ← Back to Governance
          </a>
        </div>
      </div>
    </>
  );
}
