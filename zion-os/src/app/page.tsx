"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { FeatureCard } from "@/components/FeatureCard";
import { CTAButton } from "@/components/CTAButton";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Auto-rotate features for better engagement
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 6);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  const features = [
    {
      id: 0,
      title: "Marketplace & Jobs",
      description: "Complete marketplace infrastructure with job posting, talent matching, and project management.",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: "blue",
      href: "/marketplace"
    },
    {
      id: 1,
      title: "AI Governance",
      description: "Intelligent governance systems with DAO voting, proposal management, and automated decision-making.",
      icon: (
        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: "purple",
      href: "/governance"
    },
    {
      id: 2,
      title: "Token Systems",
      description: "Flexible token economics with rewards, staking, and multi-currency support for your economy.",
      icon: (
        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      color: "green",
      href: "/tokens"
    },
    {
      id: 3,
      title: "Identity & KYC",
      description: "Secure identity verification with KYC/AML compliance and Web3 wallet integration.",
      icon: (
        <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "red",
      href: "/identity"
    },
    {
      id: 4,
      title: "AI-Powered Tools",
      description: "ZionGPT integration, resume builders, and AI moderation systems for enhanced user experience.",
      icon: (
        <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "yellow",
      href: "/ai-tools"
    },
    {
      id: 5,
      title: "Modular Architecture",
      description: "Pick and choose the features you need. Deploy only what matters for your specific use case.",
      icon: (
        <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
      color: "indigo",
      href: "/architecture"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="hero-heading">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 id="hero-heading" className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Zion OS</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Launch sovereign AI-powered digital economies with one click. 
              Unified deployment protocol for Zion ecosystems with marketplace, governance, identity, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CTAButton href="/multiverse/launch" variant="primary" size="large">
                Launch Your Economy
              </CTAButton>
              <CTAButton href="/docs" variant="secondary" size="large">
                View Documentation
              </CTAButton>
            </div>
          </div>
          
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="features-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="features-heading" className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to Build
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Zion OS provides a complete toolkit for launching and managing sovereign digital economies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.id}
                {...feature}
                isActive={activeFeature === index}
                onClick={() => setActiveFeature(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="card bg-transparent border-blue-500/30">
              <div className="text-4xl font-bold text-blue-400 mb-2">100+</div>
              <div className="text-gray-300">Deployed Economies</div>
            </div>
            <div className="card bg-transparent border-purple-500/30">
              <div className="text-4xl font-bold text-purple-400 mb-2">50K+</div>
              <div className="text-gray-300">Active Users</div>
            </div>
            <div className="card bg-transparent border-green-500/30">
              <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30">
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Launch Your Digital Economy?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of sovereign, AI-powered digital economies. 
              Deploy in minutes, scale infinitely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/multiverse/launch" variant="primary" size="large">
                Start Deployment
              </CTAButton>
              <CTAButton href="/admin/instances" variant="secondary" size="large">
                View Examples
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}