
import React from "react";
import HelpCenter from "@/components/support/HelpCenter";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GradientHeading } from "@/components/GradientHeading";

export default function HelpCenterPage() {
  return (
    <div className="min-h-screen bg-zion-blue">
      <SEO 
        title="Help Center | Zion AI Marketplace"
        description="Find answers to common questions about using the Zion AI Marketplace platform. Browse help articles or contact our support team."
        keywords="help center, support, FAQ, tutorial, guide, Zion AI Marketplace"
        canonical="https://ziontechgroup.com/help"
      />
      <Header />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <GradientHeading>Help Center</GradientHeading>
            <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">
              Get help with using the Zion AI Marketplace platform. Find answers to common questions, 
              browse tutorials, or contact our support team.
            </p>
          </div>
          
          <HelpCenter />
        </div>
      </main>
      <Footer />
    </div>
  );
}
