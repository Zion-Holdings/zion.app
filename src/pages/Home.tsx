
import React from 'react';
import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HeroSection } from "@/components/HeroSection";
import { SEO } from "@/components/SEO";
import { FloatingActionButton } from "@/components/ui/floating-action-button";
import { MessageCircle, Phone, Mail, HelpCircle, Zap, Shield, Users, Globe } from "lucide-react";
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
        title="Zion Tech Group - Advanced Technology Solutions & AI Services" 
        description="Leading provider of comprehensive technology solutions, AI services, and enterprise solutions. Transform your business with cutting-edge technology."
        keywords="AI services, technology solutions, enterprise solutions, IT services, digital transformation"
        canonical="https://ziontechgroup.com/"
      />

      <HeroSection />
      
      {/* Enhanced Services Overview */}
      <section className="py-16 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Technology Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              From AI-powered insights to enterprise infrastructure, we deliver cutting-edge solutions that drive business transformation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-zion-blue-dark/50 rounded-lg border border-zion-purple/20 backdrop-blur-sm">
              <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">AI & Machine Learning</h3>
              <p className="text-zion-slate-light">
                Advanced AI solutions that automate processes, provide insights, and enhance decision-making capabilities.
              </p>
            </div>
            
            <div className="text-center p-6 bg-zion-blue-dark/50 rounded-lg border border-zion-purple/20 backdrop-blur-sm">
              <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise Solutions</h3>
              <p className="text-zion-slate-light">
                Scalable infrastructure and enterprise-grade applications designed for modern business needs.
              </p>
            </div>
            
            <div className="text-center p-6 bg-zion-blue-dark/50 rounded-lg border border-zion-purple/20 backdrop-blur-sm">
              <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">IT Services</h3>
              <p className="text-zion-slate-light">
                Comprehensive IT support, consulting, and managed services to keep your business running smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>
      
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
