import React from 'react';
import SEO from '../components/SEO';

export default function LeadershipPage() {
  return (
    <div className="min-h-[60vh] px-6 py-24">
      <SEO title="Leadership | Zion Tech Group" description="Leadership team at Zion Tech Group" />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">Leadership</h1>
        <p className="text-gray-300">Meet our leadership team. Detailed bios are coming soon.</p>
      </div>
    </div>
  );
}