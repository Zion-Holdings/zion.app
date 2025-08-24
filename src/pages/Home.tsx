
import React from 'react';
import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HeroSection } from "@/components/HeroSection";
import { SEO } from "@/components/SEO";
import { FloatingActionButton } from "@/components/ui/floating-action-button";
import { MessageCircle, Phone, Mail, HelpCircle } from "lucide-react";
import { QuickAccess } from "@/components/home/QuickAccess";
import { FeatureCTAs } from "@/components/home/FeatureCTAs";
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { ITServiceRequestHero } from "@/components/home/ITServiceRequestHero";
import { MicroSaasServicesSection } from "@/components/home/MicroSaasServicesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
import { NewsletterSection } from "@/components/NewsletterSection";

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

      <ITServiceRequestHero />

      <HeroSection />
      
      <QuickAccess />
      
      <FeatureCTAs />
      
      <MicroSaasServicesSection />
      
      <FeatureHighlights />
      
      <CategoriesSection />
      
      <BenefitsSection />

      <HowItWorksSection />
      <FeaturedListingsSection />
      <NewsletterSection />

      {/* Floating Action Button for Support */}
      <FloatingActionButton
        actions={[
          {
            icon: <MessageCircle className="w-5 h-5" />,
            label: "Chat Support",
            onClick: handleChatSupport,
            color: "bg-zion-blue hover:bg-zion-blue-dark"
          },
          {
            icon: <Phone className="w-5 h-5" />,
            label: "Call Support",
            onClick: handleCallSupport,
            color: "bg-zion-purple hover:bg-zion-purple-dark"
          },
          {
            icon: <Mail className="w-5 h-5" />,
            label: "Email Support",
            onClick: handleEmailSupport,
            color: "bg-zion-cyan hover:bg-zion-cyan-dark"
          },
          {
            icon: <HelpCircle className="w-5 h-5" />,
            label: "Help",
            onClick: handleHelp,
            color: "bg-zion-slate hover:bg-zion-slate-dark"
          }
        ]}
      />
    </div>
  );
}
