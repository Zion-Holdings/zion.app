import React from 'react';
import SEO from '../components/SEO';

export default function AboutPage() {
  return (
    <div className="min-h-[60vh] px-6 py-24">
      <SEO title="About | Zion Tech Group" description="About Zion Tech Group" />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">About Us</h1>
        <p className="text-gray-300 mb-6">Zion Tech Group delivers revolutionary technology solutions across AI, quantum computing, and micro SaaS. We help organizations accelerate innovation and achieve measurable outcomes.</p>
      </div>
    </div>
  );
}