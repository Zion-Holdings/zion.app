
import React from 'react';
import { CategoriesSection } from "@/components/CategoriesSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Shield, Zap, Users, Globe, Database } from "lucide-react";
import { SEO } from "@/components/SEO";
import { BenefitsSection } from "@/components/BenefitsSection";
import { PerformanceOptimizations } from "@/components/PerformanceOptimizations";
import { AdvancedAnalytics } from "@/components/AdvancedAnalytics";

export default function Home() {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-zion-cyan" />,
      title: "Enterprise Security",
      description: "Advanced cybersecurity solutions with 24/7 monitoring and threat detection"
    },
    {
      icon: <Zap className="w-8 h-8 text-zion-purple" />,
      title: "AI-Powered Solutions",
      description: "Cutting-edge AI and machine learning services for business automation"
    },
    {
      icon: <Globe className="w-8 h-8 text-zion-blue" />,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions with DevOps and infrastructure management"
    },
    {
      icon: <Database className="w-8 h-8 text-zion-green" />,
      title: "Data Analytics",
      description: "Big data processing and business intelligence solutions"
    },
    {
      icon: <Users className="w-8 h-8 text-zion-orange" />,
      title: "Expert Talent",
      description: "Connect with top AI and tech professionals worldwide"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-zion-red" />,
      title: "Growth Solutions",
      description: "Strategic consulting and digital transformation services"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Expert Consultants" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-background" id="main-content">
      <SEO 
        title="Zion - The Tech & AI Marketplace" 
        description="Discover top AI and tech talent, services, and equipment in one place."
        keywords="AI, technology, marketplace, services, talent"
        canonical="https://ziontechgroup.com/"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-slate-dark text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 border-white/20 text-white">
              🚀 Leading Tech Solutions Provider
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-zion-cyan bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8 leading-relaxed">
              Discover top AI and tech talent, services, and equipment in one place.
              Your comprehensive marketplace for all things technology and AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white">
                Explore Services
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
                Get Free Quote
              </Button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">
                  {stat.number}
                </div>
                <div className="text-zion-slate-light text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver cutting-edge technology solutions with unmatched expertise and reliability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>
          
          <CategoriesSection />
        </div>
      </div>

      {/* Benefits Section from main branch */}
      <BenefitsSection />

      {/* New Performance Section */}
      <section className="py-16 bg-gradient-to-br from-zion-slate/5 to-zion-blue/5">
        <PerformanceOptimizations />
      </section>
      
      {/* New Analytics Section */}
      <section className="py-16">
        <AdvancedAnalytics />
      </section>

      {/* CTA Section */}
      <div className="py-20 bg-zion-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can accelerate your growth and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-zion-blue hover:bg-gray-100">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              View Case Studies
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
