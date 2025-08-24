
import React, { useState, useEffect } from 'react';
import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HeroSection } from "@/components/HeroSection";
import { SEO } from "@/components/SEO";
import { FloatingActionButton } from "@/components/ui/floating-action-button";
import { MessageCircle, Phone, Mail, HelpCircle, ArrowRight } from "lucide-react";
import { QuickAccess } from "@/components/home/QuickAccess";
import { FeatureCTAs } from "@/components/home/FeatureCTAs";

import { MicroSaasServicesSection } from "@/components/home/MicroSaasServicesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
import { NewsletterSection } from "@/components/NewsletterSection";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(currentProgress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-zion-blue-dark z-50">
        <div 
          className="h-full bg-gradient-to-r from-zion-cyan to-zion-purple transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border-b border-zion-cyan/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-zion-cyan" />
                <span className="text-zion-slate-light">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-zion-cyan" />
                <span className="text-zion-slate-light">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-zion-slate-light">364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-zion-slate-light">Visit us at:</span>
              <a 
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zion-cyan hover:text-zion-purple transition-colors duration-300 font-medium"
              >
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <SEO 
        title="Zion - The Tech & AI Marketplace" 
        description="Discover top AI and tech talent, services, and equipment in one place."
        keywords="AI, technology, marketplace, services, talent"
        canonical="https://ziontechgroup.com/"
      />

      <HeroSection />
      
      <QuickAccess />
      
      <FeatureCTAs />
      
      <MicroSaasServicesSection />
      

      
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

      {/* Enhanced Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="flex flex-col space-y-4">
          {/* Back to Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 hover:scale-110"
          >
            <ArrowRight className="w-5 h-5 transform rotate-[-90deg]" />
          </button>
          
          {/* Contact Quick Access */}
          <a
            href="mailto:kleber@ziontechgroup.com?subject=Inquiry from Zion Tech Group Website"
            className="w-12 h-12 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-2xl hover:shadow-zion-purple/25 transition-all duration-300 hover:scale-110"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
