import React from 'react';
import SEO from '../components/SEO';

export default function IndustrySolutionsPage() {
  return (
    <div className="min-h-[60vh] px-6 py-24">
      <SEO title="Industry Solutions | Zion Tech Group" description="Industry-specific solutions" />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">Industry Solutions</h1>
        <p className="text-gray-300">Explore solutions tailored for healthcare, finance, manufacturing, retail, and more.</p>
      </div>
    </div>
  );
}