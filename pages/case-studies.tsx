import React from 'react';
import SEO from '../components/SEO';

export default function CaseStudiesPage() {
  return (
    <div className="min-h-[60vh] px-6 py-24">
      <SEO title="Case Studies | Zion Tech Group" description="Customer success stories" />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">Case Studies</h1>
        <p className="text-gray-300">We are curating detailed case studies. Check back soon.</p>
      </div>
    </div>
  );
}