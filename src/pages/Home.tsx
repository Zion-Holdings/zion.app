
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
import { FloatingActionButton } from "@/components/ui/floating-action-button";
import { PerformanceDashboard } from "@/components/PerformanceDashboard";
import { MessageCircle, Phone, Mail, HelpCircle } from "lucide-react";

export default function Home() {
  const handleQuickAction = (action: string) => {
    console.log(`Quick action: ${action}`);
    // Implement quick action logic
  };

  const handleFloatingAction = (action: string) => {
    switch (action) {
      case 'chat':
        window.open('https://tawk.to/chat/your-chat-widget', '_blank');
        break;
      case 'call':
        window.location.href = 'tel:+13024640950';
        break;
      case 'email':
        window.location.href = 'mailto:info@ziontechgroup.com';
        break;
      case 'help':
        window.open('/contact', '_blank');
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Home"
        description="Discover the future of tech marketplace with Zion Tech Group. Connect with AI experts, innovative services, and accelerate your digital transformation."
        keywords="AI marketplace, tech services, digital transformation, IT consulting, cloud solutions"
        type="website"
      />
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
      
      {/* Performance Dashboard - Development Only */}
      {process.env.NODE_ENV === 'development' && <PerformanceDashboard />}
      
      <FloatingActionButton
        actions={[
          { 
            icon: <MessageCircle className="w-5 h-5" />, 
            label: 'Chat', 
            onClick: () => handleFloatingAction('chat'), 
            color: 'bg-zion-cyan' 
          },
          { 
            icon: <Phone className="w-5 h-5" />, 
            label: 'Call', 
            onClick: () => handleFloatingAction('call'), 
            color: 'bg-green-500' 
          },
          { 
            icon: <Mail className="w-5 h-5" />, 
            label: 'Email', 
            onClick: () => handleFloatingAction('email'), 
            color: 'bg-blue-500' 
          },
          { 
            icon: <HelpCircle className="w-5 h-5" />, 
            label: 'Help', 
            onClick: () => handleFloatingAction('help'), 
            color: 'bg-purple-500' 
          }
        ]}
        className="fixed bottom-6 right-6 z-50"
      />
    </div>
  );
}
