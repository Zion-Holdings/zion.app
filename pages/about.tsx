import React from 'react';
import SEO from '../components/SEO';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';

export default function AboutPage() {
  return (
    <UltraAdvancedFuturisticBackground>
      <SEO title="About | Zion Tech Group" description="Learn about Zion Tech Group's mission and leadership in AI, micro SaaS, and emerging tech." canonical="https://ziontechgroup.com/about/" />
      <div className="container mx-auto px-4 py-24 text-white">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">About Zion Tech Group</h1>
          <p className="text-gray-300 text-lg">We build productized micro SaaS, AI platforms, and enterprise IT solutions that are implementation‑ready, transparently priced, and designed for measurable ROI.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-black/40 border border-white/10">
              <h2 className="text-2xl font-semibold mb-2">Mission</h2>
              <p className="text-gray-300">Accelerate innovation for SMBs and enterprises through reliable automation, data‑driven platforms, and secure infrastructure—delivered as simple, focused services.</p>
            </div>
            <div className="p-6 rounded-2xl bg-black/40 border border-white/10">
              <h2 className="text-2xl font-semibold mb-2">What We Do</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Micro SaaS accelerators and productized platforms</li>
                <li>AI copilots, guardrails, evaluation, and automation</li>
                <li>Cloud, FinOps, SRE, observability, and security</li>
              </ul>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-black/40 border border-white/10">
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <div className="grid sm:grid-cols-3 gap-4 text-sm">
              <a className="text-cyan-400" href="tel:+13024640950">+1 302 464 0950</a>
              <a className="text-purple-400" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a>
              <a className="text-emerald-400" href="https://maps.google.com/?q=364%20E%20Main%20St%20STE%201008%20Middletown%20DE%2019709" target="_blank" rel="noopener noreferrer">364 E Main St STE 1008 Middletown DE 19709</a>
            </div>
          </div>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}