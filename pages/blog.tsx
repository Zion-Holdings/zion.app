import React from 'react';
import SEO from '../components/SEO';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import Link from 'next/link';

export default function BlogPage() {
  return (
    <UltraAdvancedFuturisticBackground>
      <SEO title="Blog & News | Zion Tech Group" description="Insights on micro SaaS, AI, security, and emerging tech." canonical="https://ziontechgroup.com/blog/" />
      <div className="container mx-auto px-4 py-24 text-white">
        <div className="max-w-3xl mx-auto space-y-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Blog & News</h1>
          <p className="text-gray-300">Fresh articles and updates are published in News.</p>
          <Link href="/news" className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600">Go to News</Link>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}