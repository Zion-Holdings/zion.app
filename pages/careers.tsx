import React from 'react';
import SEO from '../components/SEO';

export default function CareersPage() {
  return (
    <div className="min-h-[60vh] px-6 py-24">
      <SEO title="Careers | Zion Tech Group" description="Careers at Zion Tech Group" />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">Careers</h1>
        <p className="text-gray-300">We are growing. Open roles and application details will be published here.</p>
      </div>
    </div>
  );
}