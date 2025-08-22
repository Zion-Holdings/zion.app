import React from 'react';
import Head from 'next/head';

export default function Leadership() {
  return (
    <>
      <Head>
        <title>Leadership | Zion Tech Group</title>
        <meta name="description" content="Meet the leadership team driving AI, quantum, and micro SaaS innovation at Zion Tech Group." />
        <link rel="canonical" href="https://ziontechgroup.com/leadership" />
      </Head>
      <div className="min-h-screen bg-black text-white">
        <section className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold mb-6">Leadership</h1>
          <p className="text-gray-300">Our leadership embodies decades of experience across AI, cloud, cybersecurity, and enterprise innovation. This page will be expanded with bios, headshots, and governance details.</p>
        </section>
      </div>
    </>
  );
}