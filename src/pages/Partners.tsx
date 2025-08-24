import React from 'react';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";

export default function Partners() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO
        title="Partners"
        description="Strategic partnerships and collaborations with Zion Tech Group"
        keywords="partners, collaborations, strategic partnerships, Zion Tech Group"
        canonical="https://ziontechgroup.com/partners"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <GradientHeading>Our Partners</GradientHeading>
          <p className="text-xl text-zion-slate-light mt-4">
            Building the future of tech through strategic partnerships
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Partner cards would go here */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-semibold text-zion-cyan mb-4">Strategic Partners</h3>
            <p className="text-zion-slate-light">
              We collaborate with leading technology companies to deliver innovative solutions.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-semibold text-zion-cyan mb-4">Technology Partners</h3>
            <p className="text-zion-slate-light">
              Working with cutting-edge tech providers to enhance our platform capabilities.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-semibold text-zion-cyan mb-4">Academic Partners</h3>
            <p className="text-zion-slate-light">
              Collaborating with universities and research institutions to advance AI technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}