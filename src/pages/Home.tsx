
import React from 'react';
import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { QuickAccess } from "@/components/home/QuickAccess";
import { FeatureCTAs } from "@/components/home/FeatureCTAs";
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { ITServiceRequestHero } from "@/components/home/ITServiceRequestHero";

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Futuristic Animated Background */}
      <div className="fixed inset-0 -z-10">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-slate to-background"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(139,113,242,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,113,242,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-zion-cyan rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-zion-purple/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-zion-cyan/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-zion-purple/30 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <SEO 
        title="Zion Tech Group - The World's Leading AI & Tech Marketplace" 
        description="Discover cutting-edge AI services, cybersecurity solutions, cloud optimization, and top tech talent. Transform your business with Zion's comprehensive tech ecosystem."
        keywords="AI marketplace, cybersecurity, cloud optimization, tech talent, AI services, IT solutions, micro SAAS, Zion Tech Group"
        canonical="https://ziontechgroup.com/"
      />

      {/* Hero Section with Enhanced Background */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-zion-blue-dark/50 via-transparent to-transparent"></div>
        <ITServiceRequestHero />
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zion-slate/20 to-transparent"></div>
        <HeroSection />
      </div>
      
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zion-purple/5 to-transparent"></div>
        <QuickAccess />
      </div>
      
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zion-cyan/5 to-transparent"></div>
        <FeatureCTAs />
      </div>
      
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zion-purple/5 to-transparent"></div>
        <FeatureHighlights />
      </div>
      
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zion-slate/20 to-transparent"></div>
        <CategoriesSection />
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zion-cyan/5 to-transparent"></div>
        <BenefitsSection />
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zion-purple/5 to-transparent"></div>
        <HowItWorksSection />
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zion-slate/20 to-transparent"></div>
        <FeaturedListingsSection />
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zion-cyan/5 to-transparent"></div>
        <NewsletterSection />
      </div>

      {/* Call to Action Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-zion-purple/10 via-zion-cyan/10 to-zion-purple/10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already leveraging Zion's comprehensive tech ecosystem. 
            From AI-powered solutions to enterprise-grade security, we have everything you need to succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:+13024640950"
              className="px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-cyan text-white font-semibold rounded-lg hover:from-zion-purple-light hover:to-zion-cyan-light transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Call Us: +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="px-8 py-4 border-2 border-zion-purple text-zion-cyan font-semibold rounded-lg hover:bg-zion-purple hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Email Us
            </a>
          </div>
          <div className="mt-8 text-zion-slate-light">
            <p className="text-lg">
              <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
