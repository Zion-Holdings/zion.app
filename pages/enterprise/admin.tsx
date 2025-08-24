import React from 'react';
import Head from 'next/head';

export default function AdminPage() {
  return (
    <>
      <Head>
        <title>Admin - Zion Tech Group</title>
        <meta name="description" content="admin page" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Admin</h1>
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