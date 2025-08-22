import React from 'react';
import SEO from '../components/SEO';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';

export default function CookiesPage() {
  return (
    <UltraAdvancedFuturisticBackground>
      <SEO title="Cookie Policy | Zion Tech Group" description="Information about cookies used by Zion Tech Group." canonical="https://ziontechgroup.com/cookies/" />
      <div className="container mx-auto px-4 py-24 text-white">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">Cookie Policy</h1>
          <p className="text-gray-300">We use minimal, privacy‑respecting analytics. Some third‑party embeds may set cookies. You can block non‑essential cookies via your browser.</p>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Purpose: performance and security</li>
            <li>Retention: session or short‑term</li>
            <li>Opt‑out: browser settings and extensions</li>
          </ul>
          <p className="text-gray-400 text-sm">Questions? <a className="text-cyan-400" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></p>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}