
import React from 'react';
<<<<<<< HEAD
import { SEO } from '../components/SEO';
=======
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
import { FloatingActionButton } from "@/components/ui/floating-action-button";
import { MessageCircle, Phone, Mail, HelpCircle } from "lucide-react";
>>>>>>> cursor/analyze-improve-and-deploy-ziontechgroup-app-ab48

export default function Home() {
  const handleChatSupport = () => {
    // Implement chat support functionality
    console.log("Chat support clicked");
  };

  const handleCallSupport = () => {
    // Implement call support functionality
    console.log("Call support clicked");
  };

  const handleEmailSupport = () => {
    // Implement email support functionality
    console.log("Email support clicked");
  };

  const handleHelp = () => {
    // Implement help functionality
    console.log("Help clicked");
  };

  return (
    <div className="min-h-screen bg-background" id="main-content">
      <SEO 
        title="Zion - The Tech & AI Marketplace" 
        description="Discover top AI and tech talent, services, and equipment in one place."
        keywords="AI, technology, marketplace, services, talent"
        canonical="https://ziontechgroup.com/"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-zion-blue mb-6">
            Zion Tech Group
          </h1>
          <p className="text-xl text-zion-slate mb-8">
            The Tech & AI Marketplace
          </p>
          <p className="text-lg text-zion-slate-light mb-12 max-w-3xl mx-auto">
            Discover top AI and tech talent, services, and equipment in one place. 
            Connect with experts, find innovative solutions, and accelerate your digital transformation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-zion-blue hover:bg-zion-blue-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Find Talent
            </button>
            <button className="bg-zion-purple hover:bg-zion-purple-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Browse Services
            </button>
            <button className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Started
            </button>
          </div>
        </div>

<<<<<<< HEAD
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-zion-blue rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-semibold text-zion-slate mb-2">AI-Powered Matching</h3>
            <p className="text-zion-slate-light">Find the perfect tech talent or service using our advanced AI algorithms.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">💼</span>
            </div>
            <h3 className="text-xl font-semibold text-zion-slate mb-2">Verified Professionals</h3>
            <p className="text-zion-slate-light">All talent and services are thoroughly vetted and quality-assured.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-zion-cyan rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold text-zion-slate mb-2">Fast & Secure</h3>
            <p className="text-zion-slate-light">Quick connections with secure payment and project management tools.</p>
          </div>
        </div>
      </div>
=======
      <HeroSection />
      
      <QuickAccess />
      
      <FeatureCTAs />
      
      <FeatureHighlights />
      
      <CategoriesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <FeaturedListingsSection />
      <NewsletterSection />

      {/* Enhanced Floating Action Button */}
      <FloatingActionButton
        variant="expanded"
        size="lg"
        position="bottom-right"
        mainAction={{
          icon: <HelpCircle className="w-8 h-8" />,
          onClick: handleHelp,
          label: "Get Help"
        }}
        actions={[
          {
            icon: <MessageCircle className="w-5 h-5" />,
            label: "Live Chat",
            onClick: handleChatSupport,
            color: "bg-zion-cyan hover:bg-zion-cyan-light"
          },
          {
            icon: <Phone className="w-5 h-5" />,
            label: "Call Support",
            onClick: handleCallSupport,
            color: "bg-zion-purple hover:bg-zion-purple-light"
          },
          {
            icon: <Mail className="w-5 h-5" />,
            label: "Email Support",
            onClick: handleEmailSupport,
            color: "bg-zion-blue hover:bg-zion-blue-light"
          }
        ]}
      />
>>>>>>> cursor/analyze-improve-and-deploy-ziontechgroup-app-ab48
    </div>
  );
}
