import React from 'react';
import Head from 'next/head';

export default function WebinarsPage() {
  const webinars = [
    {
      title: 'RAG Evaluation Lab Deep Dive',
      date: '2025-09-25',
      duration: '60 min',
      description: 'Learn how to measure quality, latency, and cost for RAG pipelines with production-ready tooling.',
      registerHref: '/rag-evaluation-lab',
      registerText: 'Learn More'
    },
    {
      title: 'Zero-Trust Security for Enterprise AI',
      date: '2025-10-12',
      duration: '45 min',
      description: 'Best practices to secure AI systems using SOC 2 automation, secrets rotation, and SLOs.',
      registerHref: '/zero-trust-security-platform',
      registerText: 'View Solution'
    }
  ];

  return (
    <>
      <Head>
        <title>Webinars | Zion Tech Group</title>
        <meta name="description" content="On-demand and upcoming webinars from Zion Tech Group on AI, automation, and enterprise IT." />
      </Head>

      <section className="relative pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            Webinars
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Watch on-demand sessions or register for upcoming live webinars.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {webinars.map((w) => (
            <div key={w.title} className="p-8 rounded-2xl border border-gray-800 bg-gray-900/40">
              <h2 className="text-2xl font-semibold text-white mb-2">{w.title}</h2>
              <div className="text-sm text-gray-400 mb-2">{new Date(w.date).toLocaleDateString()} • {w.duration}</div>
              <p className="text-gray-300 mb-6">{w.description}</p>
              <a href={w.registerHref} className="inline-block px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700">
                {w.registerText}
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}