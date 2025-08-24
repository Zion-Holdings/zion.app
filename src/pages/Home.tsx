
import React from 'react';
<<<<<<< HEAD
import { SEO } from "@/components/SEO";
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
import { PerformanceDashboard } from "@/components/PerformanceDashboard";
import { MessageCircle, Phone, Mail, HelpCircle } from "lucide-react";
>>>>>>> 1acd3dbe54c18705f7ef53de7847b1d123ac5c77

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
<<<<<<< HEAD
        title="Zion - The Tech & AI Marketplace" 
        description="Discover top AI and tech talent, services, and equipment in one place."
        keywords="AI, technology, marketplace, services, talent"
        url="https://ziontechgroup.com/"
      />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Zion Tech Group - The Tech & AI Marketplace
        </h1>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          Discover top AI and tech talent, services, and equipment in one place.
        </p>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <div className="space-y-2">
            <p><strong>Mobile:</strong> +1 302 464 0950</p>
            <p><strong>Email:</strong> kleber@ziontechgroup.com</p>
            <p><strong>Address:</strong> 364 E Main St STE 1008 Middletown DE 19709</p>
          </div>
        </div>
      </div>
=======
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
>>>>>>> 1acd3dbe54c18705f7ef53de7847b1d123ac5c77
    </div>
  );
}
