import React from 'react';
import Head from 'next/head';

export default function ForbiddenPage() {
  return (
    <>
      <Head>
        <title>403 - Zion App</title>
        <meta name="description" content="403 page" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">403 - Access Forbidden</h1>
        <p className="text-lg mb-4">You don't have permission to access this resource.</p>
        <div className="mt-4">
          <a href="/" className="text-blue-600 hover:underline">
            ← Back to Home
          </a>
        </div>
      </div>
    </>
  );
}
