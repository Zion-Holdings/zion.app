import React from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { TrendingUp, Users, Globe, Award, Mail, Phone } from "lucide-react";

export default function Investors() {
  return (
    <>
      <SEO
        title="Investors | Zion Tech Group"
        description="Investment opportunities and investor relations for Zion Tech Group. Learn about our growth, financial performance, and investment potential."
        keywords="investors, investment, Zion Tech Group, funding, financial performance, growth"
        canonical="https://ziontechgroup.com/investors"
      />
      <Header />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Investor Relations</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Join us in building the future of AI and technology marketplace
            </p>
          </div>

          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8 mb-16 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">Contact Investor Relations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center text-zion-slate-light">
                  <Mail className="h-5 w-5 mr-3 text-zion-cyan" />
                  <span>investors@ziontechgroup.com</span>
                </div>
                <div className="flex items-center text-zion-slate-light">
                  <Phone className="h-5 w-5 mr-3 text-zion-cyan" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
              <div>
                <p className="text-zion-slate-light mb-4">
                  For investment inquiries and financial information, please contact our investor relations team.
                </p>
                <a
                  href="mailto:investors@ziontechgroup.com"
                  className="inline-flex items-center px-6 py-3 bg-zion-purple text-white font-medium rounded-lg hover:bg-zion-purple-light transition-colors"
                >
                  Contact IR Team
                </a>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-zion-slate-light text-lg">
              More investor information coming soon...
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}