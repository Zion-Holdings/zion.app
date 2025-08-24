import React from 'react';
import { SEO } from "@/components/SEO";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";

export default function FAQ() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Frequently Asked Questions - Zion Tech Group" 
        description="Find answers to common questions about Zion Tech Group's AI and tech marketplace services."
        keywords="FAQ, help, support, Zion Tech Group, AI marketplace, tech services"
        canonical="https://ziontechgroup.com/faq"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Find answers to the most common questions about Zion Tech Group's marketplace, services, and platform.
          </p>
        </div>

        <FaqSection />
      </div>

      <Footer />
    </div>
  );
}