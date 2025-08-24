import React from 'react';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';

export default function CommunityPage() {
  return (
    <>
      <SEO
        title="Community - Zion Tech Group"
        description="Join our tech community and connect with fellow professionals."
        canonical="https://ziontechgroup.com/community"
      />
      <Header />
      <main className="min-h-screen bg-zion-blue">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <GradientHeading>Community</GradientHeading>
            <p className="text-xl text-zion-slate-light mt-6 max-w-3xl mx-auto">
              Connect with fellow tech professionals, share knowledge, and grow your network.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-zion-blue-light rounded-lg p-8 border border-zion-blue-lighter">
              <h2 className="text-2xl font-bold text-white mb-6">Coming Soon</h2>
              <p className="text-zion-slate-light mb-6">
                Our community platform is currently under development.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}