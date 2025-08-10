import React from 'react';
import Link from 'next/link';

export default function FuturisticHero() {
  return (
    <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 text-center text-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          <span className="gradient-text drop-shadow-neon">Zion AI Marketplace</span>
          <span className="block mt-3 text-xl md:text-2xl font-medium text-gray-300">Autonomous, intelligent automations for teams that move fast</span>
        </h1>
        <p className="mt-6 text-gray-300/90 md:text-lg">
          Hire world-class AI talent, rent compute, and run cloud automations. All in one futuristic platform.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link href="/services"><a className="btn-primary">Explore Services</a></Link>
          <Link href="/seo"><a className="btn-secondary">Localized Pages</a></Link>
          <Link href="/project/demo/room"><a className="btn-ghost">Start a Call</a></Link>
        </div>
      </div>
      <div className="mt-12 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-left px-6">
        <div className="stat-card">
          <div className="stat-value">24/7</div>
          <div className="stat-label">Cloud automations</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">150ms</div>
          <div className="stat-label">Realtime media</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">+SEO</div>
          <div className="stat-label">Long-tail landing pages</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">Autoheal</div>
          <div className="stat-label">Self-fixing builds</div>
        </div>
      </div>
    </section>
  );
}