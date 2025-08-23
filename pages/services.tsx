import React from 'react';
import SEO from '../components/SEO';

export default function Services() {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <SEO 
        title="Services | Zion Tech Group - Enterprise IT, AI, Micro SAAS Solutions" 
        description="Discover our comprehensive portfolio of enterprise IT solutions, AI services, and innovative micro SAAS platforms. Transform your business with cutting-edge technology." 
        canonical="https://ziontechgroup.com/services/" 
      />
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center">Services Page Temporarily Disabled</h1>
        <p className="text-center text-gray-400 mt-4">This page is being updated to fix build issues.</p>
        <p className="text-center text-gray-400 mt-2">Please visit individual service pages or contact us directly.</p>
        <div className="mt-8 text-center">
          <a 
            href="/contact" 
            className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}