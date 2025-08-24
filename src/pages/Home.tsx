
import React from 'react';
import { SEO } from "@/components/SEO";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Zion - The Tech & AI Marketplace" 
        description="Discover top AI and tech talent, services, and equipment in one place."
        keywords="AI, technology, marketplace, services, talent"
        url="https://ziontechgroup.com/"
      />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Zion Tech Group - The Tech & AI Marketplace
        </h1>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          Discover top AI and tech talent, services, and equipment in one place.
        </p>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <div className="space-y-2">
            <p><strong>Mobile:</strong> +1 302 464 0950</p>
            <p><strong>Email:</strong> kleber@ziontechgroup.com</p>
            <p><strong>Address:</strong> 364 E Main St STE 1008 Middletown DE 19709</p>
          </div>
        </div>
      </div>
    </div>
  );
}
