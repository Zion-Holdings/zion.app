import React from 'react';
import Head from 'next/head';

export default function MyVotesPage() {
  return (
    <>
      <Head>
        <title>My Votes - Zion Tech Group</title>
        <meta name="description" content="View your governance voting history" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">My Votes</h1>
        <p className="text-lg mb-4">Track your voting history and participation in governance decisions.</p>
        <div className="mt-4">
          <a href="/governance" className="text-blue-600 hover:underline">
            ← Back to Governance
          </a>
        </div>
      </div>
    </>
  );
}
