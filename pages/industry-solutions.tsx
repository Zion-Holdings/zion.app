import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function IndustrySolutions() {
  return (
    <>
      <Head>
        <title>Industry Solutions | Zion Tech Group</title>
        <meta name="description" content="Industry-specific AI, quantum, and micro SaaS solutions for healthcare, finance, manufacturing, retail, education, government, energy, biotech and more." />
        <link rel="canonical" href="https://ziontechgroup.com/industry-solutions" />
      </Head>
      <div className="min-h-screen bg-black text-white">
        <section className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold mb-6">Industry Solutions</h1>
          <p className="text-gray-300 mb-10 max-w-3xl">Explore our specialized solutions tailored for each industry. These routes provide deep dives and offerings per vertical.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link className="p-5 rounded-xl bg-gray-900/60 border border-gray-800 hover:border-cyan-600 transition" href="/healthcare-solutions">Healthcare Solutions</Link>
            <Link className="p-5 rounded-xl bg-gray-900/60 border border-gray-800 hover:border-cyan-600 transition" href="/financial-solutions">Financial Services</Link>
            <Link className="p-5 rounded-xl bg-gray-900/60 border border-gray-800 hover:border-cyan-600 transition" href="/manufacturing-ai-solutions">Manufacturing AI</Link>
            <Link className="p-5 rounded-xl bg-gray-900/60 border border-gray-800 hover:border-cyan-600 transition" href="/retail-technology-solutions">Retail Technology</Link>
            <Link className="p-5 rounded-xl bg-gray-900/60 border border-gray-800 hover:border-cyan-600 transition" href="/education-technology-solutions">Education Technology</Link>
            <Link className="p-5 rounded-xl bg-gray-900/60 border border-gray-800 hover:border-cyan-600 transition" href="/government-technology-solutions">Government Solutions</Link>
            <Link className="p-5 rounded-xl bg-gray-900/60 border border-gray-800 hover:border-cyan-600 transition" href="/energy-utilities-solutions">Energy & Utilities</Link>
            <Link className="p-5 rounded-xl bg-gray-900/60 border border-gray-800 hover:border-cyan-600 transition" href="/biotech-ai">Biotech & Healthcare AI</Link>
            <Link className="p-5 rounded-xl bg-gray-900/60 border border-gray-800 hover:border-cyan-600 transition" href="/space-technology">Space Technology</Link>
          </div>
        </section>
      </div>
    </>
  );
}