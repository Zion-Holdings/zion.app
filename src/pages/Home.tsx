
import React from 'react';
import { ServicesShowcase } from "@/components/ServicesShowcase";
import { MicroSaasShowcase } from "@/components/MicroSaasShowcase";
import { HeroSection } from "@/components/HeroSection";
import { TrustedBySection } from "@/components/TrustedBySection";
import { FooterNewsletter } from "@/components/FooterNewsletter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Trusted By Section */}
      <TrustedBySection />
      
      {/* Micro SAAS Services Showcase */}
      <MicroSaasShowcase />
      
      {/* Main Services Showcase */}
      <ServicesShowcase />
      
      {/* Newsletter Signup */}
      <FooterNewsletter />
      
      {/* Contact Information */}
      <section className="py-16 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Transform Your Business?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-white mb-2">Mobile</h3>
              <p className="text-zion-slate-light">+1 302 464 0950</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl mb-4">✉️</div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl mb-4">📍</div>
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
              <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
