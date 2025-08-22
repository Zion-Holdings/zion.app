import React from 'react';
import SEO from '../components/SEO';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';

export default function ContactPage() {
  return (
    <UltraAdvancedFuturisticBackground>
      <SEO title="Contact | Zion Tech Group" description="Get in touch with Zion Tech Group for AI, micro SaaS, and IT solutions." canonical="https://ziontechgroup.com/contact/" />
      <div className="container mx-auto px-4 py-24 text-white">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Contact Us</h1>
          <p className="text-gray-300 text-lg">We typically respond within one business day.</p>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-black/40 border border-white/10">
              <div className="text-3xl mb-2">📱</div>
              <div className="font-semibold">Phone</div>
              <a className="text-cyan-400" href="tel:+13024640950">+1 302 464 0950</a>
            </div>
            <div className="p-6 rounded-2xl bg-black/40 border border-white/10">
              <div className="text-3xl mb-2">✉️</div>
              <div className="font-semibold">Email</div>
              <a className="text-purple-400" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a>
            </div>
            <div className="p-6 rounded-2xl bg-black/40 border border-white/10">
              <div className="text-3xl mb-2">📍</div>
              <div className="font-semibold">Address</div>
              <div className="text-sm text-gray-300">364 E Main St STE 1008<br/>Middletown DE 19709</div>
            </div>
          </div>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}