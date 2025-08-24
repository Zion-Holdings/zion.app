import React from 'react';
import Head from 'next/head';

export default function GovernanceCreatePage() {
  return (
    <>
      <Head>
        <title>Create Proposal - Zion Tech Group</title>
        <meta name="description" content="Create a new governance proposal" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Create Proposal</h1>
        <p className="text-lg mb-4">Submit a new governance proposal for community consideration.</p>
        <div className="mt-4">
          <a href="/governance" className="text-blue-600 hover:underline">
            ← Back to Governance
          </a>
        </div>
      </div>
    </>
  );
}
