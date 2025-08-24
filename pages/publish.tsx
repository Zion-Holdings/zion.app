import React from 'react';
import Head from 'next/head';

export default function PublishPage() {
  return (
    <>
      <Head>
        <title>Publish - Zion Tech Group</title>
        <meta name="description" content="publish page" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Publish</h1>
        <p className="text-lg mb-4">This page is under construction.</p>
        <div className="mt-4">
          <a href="/" className="text-blue-600 hover:underline">
            ← Back to Home
          </a>
        </div>
      </div>
    </>
  );
}