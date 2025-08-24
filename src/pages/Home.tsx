
import React from 'react';
import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";

import { HeroSection } from "@/components/HeroSection";
import { QuickAccess } from "@/components/home/QuickAccess";
import { FeatureCTAs } from "@/components/home/FeatureCTAs";
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { ITServiceRequestHero } from "@/components/home/ITServiceRequestHero";
import { FloatingActionButton } from "@/components/ui/floating-action-button";
import { MessageCircle, Phone, Mail, HelpCircle } from "lucide-react";

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
    <div className="min-h-screen bg-background">


      <ITServiceRequestHero />

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
    </div>
  );
}
