import React from 'react';
import SEO from '../components/SEO';

export default function BlogPage() {
  return (
    <div className="min-h-[60vh] px-6 py-24">
      <SEO title="Blog | Zion Tech Group" description="Insights and updates" />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">Blog</h1>
        <p className="text-gray-300">Articles are coming soon. In the meantime, explore our resources and services.</p>
      </div>
    </div>
  );
}