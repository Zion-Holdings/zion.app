import React from 'react';
import Head from 'next/head';

export default function GPTLibraryPage() {
  return (
    <>
      <Head>
        <title>GPT Library - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive GPT library and AI models" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">GPT Library</h1>
        <p className="text-lg mb-4">Access our curated collection of GPT models and AI solutions.</p>
        <div className="mt-4">
          <a href="/" className="text-blue-600 hover:underline">
            ← Back to Home
          </a>
        </div>
      </div>
    </>
  );
}
