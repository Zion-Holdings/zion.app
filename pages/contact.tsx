import React from 'react';
import SEO from '../components/SEO';

export default function ContactPage() {
  return (
    <div className="min-h-[60vh] px-6 py-24">
      <SEO title="Contact | Zion Tech Group" description="Contact Zion Tech Group" />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">Contact</h1>
        <p className="text-gray-300 mb-6">We would love to hear from you. Reach out to discuss how we can help.</p>
        <div className="space-y-3 text-gray-200">
          <a href="tel:+13024640950" className="block hover:text-cyan-400">+1 302 464 0950</a>
          <a href="mailto:kleber@ziontechgroup.com" className="block hover:text-purple-400">kleber@ziontechgroup.com</a>
        </div>
      </div>
    </div>
  );
}