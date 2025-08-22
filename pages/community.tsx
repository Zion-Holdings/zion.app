import React from 'react';
import Head from 'next/head';

export default function CommunityPage() {
  return (
    <>
      <Head>
        <title>Community | Zion Tech Group</title>
        <meta name="description" content="Join the community: discussions, events, and updates." />
        <link rel="canonical" href="https://ziontechgroup.com/community" />
      </Head>
      <div className="container mx-auto px-4 py-16 text-gray-200">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Community</h1>
        <p className="text-gray-300 mb-6">Participate in events and discussions. Follow us on <a href="https://linkedin.com/company/ziontechgroup" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">LinkedIn</a>.</p>
      </div>
    </>
  );
}