import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Database, Shield, TrendingUp, Zap, Globe, Cpu, BarChart3, Settings } from 'lucide-react';

export default function AIPoweredITAssetManagement() {
  const features = [
    {
      icon: Database,
      title: 'Intelligent Asset Discovery',
      description: 'Automatically discover, catalog, and track all IT assets across your organization with AI-powered scanning.'
    },
    {
      icon: Shield,
      title: 'Security Compliance',
      description: 'Ensure all assets meet security standards with automated compliance checking and vulnerability assessment.'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Maintenance',
      description: 'Predict asset failures and maintenance needs before they occur using advanced AI analytics.'
    },
    {
      icon: Zap,
      title: 'Real-time Monitoring',
      description: 'Monitor asset performance, health, and utilization in real-time with intelligent alerting systems.'
    },
    {
      icon: Globe,
      title: 'Multi-Cloud Management',
      description: 'Manage assets across multiple cloud providers and on-premises infrastructure from a single platform.'
    },
    {
      icon: Cpu,
      title: 'AI-Powered Optimization',
      description: 'Optimize asset allocation and utilization using machine learning algorithms and predictive analytics.'
    }
  ];

  const capabilities = [
    'Asset Lifecycle Management',
    'License Management',
    'Cost Optimization',
    'Risk Assessment',
    'Performance Monitoring',
    'Automated Reporting',
    'Integration APIs',
    'Mobile Management'
  ];

  const benefits = [
    {
      title: 'Cost Savings',
      description: 'Reduce IT costs by up to 30% through better asset utilization and predictive maintenance.'
    },
    {
      title: 'Improved Security',
      description: 'Enhance security posture with automated compliance checking and vulnerability management.'
    },
    {
      title: 'Operational Efficiency',
      description: 'Streamline IT operations with automated asset discovery and management processes.'
    },
    {
      title: 'Better Decision Making',
      description: 'Make informed decisions with comprehensive asset analytics and reporting.'
    }
  ];

  return (
    <>
      <Head>
        <title>AI-Powered IT Asset Management - Zion Tech Group</title>
        <meta name="description" content="Intelligent IT asset management platform powered by AI for comprehensive asset discovery, monitoring, and optimization." />
        <meta name="keywords" content="IT asset management, AI asset management, asset discovery, IT compliance, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-powered-it-asset-management" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-6">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Database className="w-20 h-20 text-purple-400 animate-pulse" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              AI-Powered IT Asset Management
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionize your IT asset management with intelligent AI systems that automatically discover, 
              monitor, and optimize your technology infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link 
                href="/solutions"
                className="px-8 py-4 border border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">
              Intelligent Asset Management Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">
              Management Capabilities
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-purple-400/30 transition-all duration-300">
                  <div className="text-purple-400 mb-3">
                    <Settings className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{capability}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">
              Why Choose AI-Powered Asset Management?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl border border-purple-500/20">
                  <div className="flex items-center mb-4">
                    <BarChart3 className="w-8 h-8 text-purple-400 mr-3" />
                    <h3 className="text-2xl font-semibold text-white">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-300 text-lg">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Ready to Transform Your IT Asset Management?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Experience the future of intelligent asset management with AI-powered automation and insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Today
              </Link>
              <Link 
                href="/services"
                className="px-8 py-4 border border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300"
              >
                View Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}