import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, Zap, ArrowRight, CheckCircle, Star, BarChart3, AlertTriangle } from 'lucide-react';

export default function AdvancedCybersecuritySuite() {
  const features = [
    {
      icon: Shield,
      title: "Advanced Threat Protection",
      description: "Multi-layered security with AI-powered threat detection and prevention"
    },
    {
      icon: Lock,
      title: "Zero Trust Security",
      description: "Comprehensive identity and access management with continuous verification"
    },
    {
      icon: Eye,
      title: "Real-time Monitoring",
      description: "24/7 security monitoring with instant threat detection and response"
    },
    {
      icon: Zap,
      title: "Automated Response",
      description: "Intelligent automation for immediate threat containment and remediation"
    }
  ];

  const capabilities = [
    "Advanced Threat Detection & Response",
    "Zero Trust Network Architecture",
    "Identity & Access Management",
    "Endpoint Security & Protection",
    "Cloud Security & Compliance",
    "Data Encryption & Privacy",
    "Security Analytics & Intelligence",
    "Incident Response & Recovery"
  ];

  const benefits = [
    "Reduce security incidents by 90%",
    "Improve threat detection by 95%",
    "Comply with industry regulations",
    "Protect against zero-day attacks",
    "Real-time security monitoring",
    "Automated threat response",
    "Comprehensive security coverage",
    "Cost-effective security solution"
  ];

  const securityLayers = [
    "Network Security",
    "Application Security",
    "Data Security",
    "Endpoint Security",
    "Cloud Security",
    "Identity Security",
    "Physical Security",
    "Operational Security"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.05),transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">
              Advanced Cybersecurity Suite
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Protect your organization with our comprehensive cybersecurity suite. 
            Advanced threat protection, zero trust security, and 24/7 monitoring.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Get Protected
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services/cybersecurity"
              className="inline-flex items-center px-8 py-4 border border-red-500 text-red-400 hover:bg-red-500 hover:text-white font-semibold rounded-lg transition-all duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the advanced security capabilities that protect your organization 
              from evolving cyber threats
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-red-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Complete Security Coverage
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our cybersecurity suite provides comprehensive protection across all 
                attack vectors and security domains.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <AlertTriangle className="w-12 h-12 text-red-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Security Benefits</h3>
                  <p className="text-gray-300">Protect your organization today</p>
                </div>
                
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Layers Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Multi-Layer Security Architecture
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our defense-in-depth approach ensures comprehensive protection across 
              all security layers and attack vectors.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {securityLayers.map((layer, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:border-red-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{layer}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Secure Your Organization?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join leading organizations that have already protected their digital assets 
            with our advanced cybersecurity suite.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Security Assessment
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 border border-red-500 text-red-400 hover:bg-red-500 hover:text-white font-semibold rounded-lg transition-all duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}