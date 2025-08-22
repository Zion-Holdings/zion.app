import React from 'react';
import Head from 'next/head';

export default function Careers() {
  return (
    <>
      <Head>
        <title>Careers | Zion Tech Group</title>
        <meta name="description" content="Build the future with Zion Tech Group. Explore open roles in AI, quantum, platform engineering, and more." />
        <link rel="canonical" href="https://ziontechgroup.com/careers" />
      </Head>
      <div className="min-h-screen bg-black text-white">
        <section className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold mb-6">Careers</h1>
          <p className="text-gray-300 mb-8">We are always looking for exceptional talent. Check back soon for open positions and hiring updates.</p>
          <a className="text-cyan-400 hover:text-cyan-300 underline" href="mailto:careers@ziontechgroup.com">careers@ziontechgroup.com</a>
        </section>
      </div>
    </>
  );
}