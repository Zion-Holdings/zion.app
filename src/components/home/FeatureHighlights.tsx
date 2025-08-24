import React from 'react';
import { FeatureCard } from '@/components/FeatureCard';
import { Zap, Shield, Users, Globe } from 'lucide-react';

export function FeatureHighlights() {
  return (
    <section className="py-16 bg-zion-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-zion-slate-light max-w-2xl mx-auto">
            We provide the tools, connections, and support you need to succeed in the tech industry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <FeatureCard
            icon={Zap}
            title="Lightning Fast"
            description="Connect with talent and services in seconds, not days."
          />
          <FeatureCard
            icon={Shield}
            title="Verified & Secure"
            description="All profiles and services are verified for your safety."
          />
          <FeatureCard
            icon={Users}
            title="Global Network"
            description="Access talent and services from around the world."
          />
          <FeatureCard
            icon={Globe}
            title="24/7 Support"
            description="Get help whenever you need it, day or night."
          />
        </div>
      </div>
    </section>
  );
}