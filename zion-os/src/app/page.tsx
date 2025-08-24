"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FeatureShowcase } from "@/components/FeatureShowcase";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate features
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 6);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Marketplace & Jobs",
      description: "Complete marketplace infrastructure with job posting, talent matching, and project management.",
      color: "blue",
      bgColor: "bg-blue-500/20",
      hoverBgColor: "group-hover:bg-blue-500/30"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "AI Governance",
      description: "Intelligent governance systems with DAO voting, proposal management, and automated decision-making.",
      color: "purple",
      bgColor: "bg-purple-500/20",
      hoverBgColor: "group-hover:bg-purple-500/30"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: "Token Systems",
      description: "Flexible token economics with rewards, staking, and multi-currency support for your economy.",
      color: "green",
      bgColor: "bg-green-500/20",
      hoverBgColor: "group-hover:bg-green-500/30"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Identity & KYC",
      description: "Secure identity verification with KYC/AML compliance and Web3 wallet integration.",
      color: "red",
      bgColor: "bg-red-500/20",
      hoverBgColor: "group-hover:bg-red-500/30"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "AI-Powered Tools",
      description: "ZionGPT integration, resume builders, and AI moderation systems for enhanced user experience.",
      color: "yellow",
      bgColor: "bg-yellow-500/20",
      hoverBgColor: "group-hover:bg-yellow-500/30"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
      title: "Modular Architecture",
      description: "Pick and choose the features you need. Deploy only what matters for your specific use case.",
      color: "indigo",
      bgColor: "bg-indigo-500/20",
      hoverBgColor: "group-hover:bg-indigo-500/30"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text animate-pulse">Zion OS</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Launch sovereign AI-powered digital economies with one click. 
              Unified deployment protocol for Zion ecosystems with marketplace, governance, identity, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/multiverse/launch" className="btn-primary text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300">
                🚀 Launch Your Economy
              </Link>
              <Link href="/docs" className="btn-secondary text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300">
                📚 View Documentation
              </Link>
            </div>
          </div>
        </div>
        
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-green-500/20 to-blue-600/20 rounded-full blur-2xl animate-pulse-slow animation-delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-full blur-2xl animate-pulse-slow animation-delay-2000"></div>
        </div>
      </section>

      {/* Enhanced Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to Build
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Zion OS provides a complete toolkit for launching and managing sovereign digital economies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`card group cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                  activeFeature === index ? 'ring-2 ring-blue-500/50 bg-white/10' : ''
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4 ${feature.hoverBgColor} transition-colors`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
                <div className={`mt-4 h-1 bg-gradient-to-r from-${feature.color}-500/50 to-${feature.color}-600/50 rounded-full transform origin-left transition-all duration-300 ${
                  activeFeature === index ? 'scale-x-100' : 'scale-x-0'
                }`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="card bg-transparent border-0">
              <div className="text-4xl font-bold gradient-text mb-2">100+</div>
              <div className="text-gray-400">Deployed Economies</div>
            </div>
            <div className="card bg-transparent border-0">
              <div className="text-4xl font-bold gradient-text mb-2">50K+</div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div className="card bg-transparent border-0">
              <div className="text-4xl font-bold gradient-text mb-2">99.9%</div>
              <div className="text-gray-400">Uptime</div>
            </div>
            <div className="card bg-transparent border-0">
              <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Showcase */}
      <FeatureShowcase />

      {/* Enhanced CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30 transform hover:scale-105 transition-all duration-300">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Launch Your Digital Economy?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of sovereign, AI-powered digital economies. 
              Deploy in minutes, scale infinitely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/multiverse/launch" className="btn-primary text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300">
                🚀 Start Deployment
              </Link>
              <Link href="/admin/instances" className="btn-secondary text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300">
                👀 View Examples
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}