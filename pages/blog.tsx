import React from 'react';
import SEO from '../components/SEO';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

export default function BlogPage() {
  return (
    <UltraFuturisticBackground intensity="high" variant="quantum">
      <SEO title="Blog | Zion Tech Group" description="Insights and updates on AI, cloud, and automation." canonical="https://ziontechgroup.com/blog/" />
      <div className="container mx-auto px-4 py-16 text-white">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Blog</h1>
        <p className="mt-4 text-gray-300 max-w-3xl">Curated insights, implementation guides, and trend reports. New articles are published regularly. For press or guest posts, contact kleber@ziontechgroup.com.</p>
      </div>
    </UltraFuturisticBackground>
  );
}