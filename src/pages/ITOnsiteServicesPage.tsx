import React from 'react';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';

export default function ITOnsiteServicesPage() {
  return (
    <>
      <SEO
        title="IT On-Site Services - Zion Tech Group"
        description="Professional on-site IT services for businesses and organizations."
        canonical="https://ziontechgroup.com/it-onsite-services"
      />
      <Header />
      <main className="min-h-screen bg-zion-blue">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <GradientHeading>IT On-Site Services</GradientHeading>
            <p className="text-xl text-zion-slate-light mt-6 max-w-3xl mx-auto">
              Professional on-site IT services to keep your business running smoothly.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-zion-blue-light rounded-lg p-8 border border-zion-blue-lighter">
              <h2 className="text-2xl font-bold text-white mb-6">Coming Soon</h2>
              <p className="text-zion-slate-light mb-6">
                Our on-site IT services are currently under development.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}