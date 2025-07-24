import React from 'react';
import Head from 'next/head';

export export export default function Home()   {
  return (
    <>
      <Head>
        <title>Zion App - Home</title>
        <meta name="description" content="Zion App - Welcome" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Welcome to Zion App</h1>
        <p className="text-lg mb-4">
          The app is running successfully!
        </p>
        <div className="mt-4">
          <a href="/api/health" className="text-blue-600 hover:underline">
            Check Health Status
          </a>
        </div>
      </div>
    </>
  );
}