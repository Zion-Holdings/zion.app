import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

export default function BlogIndex() {
  return (
    <UltraFuturisticBackground variant="quantum" intensity="medium">
      <Head>
        <title>Blog | Zion Tech Group</title>
        <meta name="description" content="Insights on AI, micro SaaS, cloud, and growth engineering from Zion Tech Group." />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
      </Head>
      <div className="container mx-auto px-4 py-16 text-white">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Blog</h1>
          <p className="mt-3 text-gray-300">Fresh perspectives on building real, revenue-generating micro SaaS and AI systems.</p>
        </div>
        <div className="text-center text-gray-400">Posts coming soon. Want topics covered? <a href="mailto:kleber@ziontechgroup.com" className="text-purple-300">Email us</a>.</div>
      </div>
    </UltraFuturisticBackground>
  );
}