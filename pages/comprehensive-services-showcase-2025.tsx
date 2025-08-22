import React from 'react';
import SEO from '../components/SEO';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

export default function ComprehensiveShowcase2025() {
  return (
    <UltraFuturisticBackground variant="quantum" intensity="high">
      <SEO title="Comprehensive Services Showcase 2025 | Zion Tech Group" description="Explore our complete portfolio of services and showcases." canonical="https://ziontechgroup.com/comprehensive-services-showcase-2025/" />
      <div className="container mx-auto px-4 py-16 text-white">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">Comprehensive Services Showcase 2025</h1>
        <p className="text-gray-300 mb-8">Browse the full portfolio, pricing, and categories.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'All Services', href: '/services' },
            { name: 'Pricing', href: '/pricing' },
            { name: 'Market Pricing', href: '/market-pricing' },
            { name: '2026 Services', href: '/revolutionary-2026-services' },
            { name: 'Ultimate 2026', href: '/ultimate-2026-services-showcase' },
            { name: 'Ultimate 2035 Futuristic', href: '/ultimate-2035-futuristic-services-showcase' }
          ].map((x) => (
            <a key={x.name} href={x.href} className="p-6 bg-black/40 border border-gray-700/60 rounded-xl hover:border-cyan-500/50">
              <div className="text-lg font-semibold">{x.name}</div>
              <div className="text-sm text-gray-400">{x.href}</div>
            </a>
          ))}
        </div>
      </div>
    </UltraFuturisticBackground>
  );
}