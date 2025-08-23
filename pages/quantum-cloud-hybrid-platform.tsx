import React from 'react';
import Head from 'next/head';
import { Phone, Mail, MapPin, Check, ArrowRight, Shield, Star, Cloud, Atom, Zap, Lock, Globe, BarChart3, Users, TrendingUp, Cpu, Database } from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import Button from '../components/ui/Button';

export default function QuantumCloudHybridPlatformPage() {
  const service = {
    name: 'Quantum Cloud Hybrid Platform',
    tagline: 'Seamlessly integrate quantum computing with traditional cloud infrastructure',
    price: '$5,999',
    period: '/month',
    description: 'Advanced hybrid cloud platform that combines quantum computing capabilities with traditional cloud infrastructure, enabling organizations to leverage quantum algorithms for complex computational problems while maintaining classical computing workflows.',
    features: [
      'Quantum-classical hybrid computing',
      'Seamless workload distribution',
      'Quantum algorithm optimization',
      'Multi-cloud quantum access',
      'Real-time quantum resource management',
      'Advanced security and encryption',
      'API for quantum applications',
      'Performance monitoring and analytics',
      'Enterprise-grade support and SLAs'
    ],
    rating: 4.9,
    trialDays: 45,
    setupTime: '6-8 weeks',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  };

  return (
    <UltraAdvancedFuturisticBackground>
      <Head>
        <title>{service.name} - Zion Tech Group</title>
        <meta name="description" content={service.description} />
        <link rel="canonical" href="https://ziontechgroup.com/quantum-cloud-hybrid-platform" />
        <meta property="og:title" content={`${service.name} - Zion Tech Group`} />
        <meta property="og:description" content={service.description} />
        <meta property="og:url" content="https://ziontechgroup.com/quantum-cloud-hybrid-platform" />
        <meta property="og:type" content="website" />
      </Head>
      
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-600 bg-clip-text text-transparent flex items-center justify-center gap-3">
              <Atom className="w-12 h-12" />
              {service.name}
            </h1>
            <p className="mt-6 text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              {service.tagline}
            </p>
            <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto">
              {service.description}
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Features Section */}
            <div className="lg:col-span-2 space-y-8">
              {/* Core Capabilities */}
              <div className="bg-black/30 rounded-2xl border border-blue-500/30 p-8">
                <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
                  <Cpu className="w-8 h-8 text-blue-400" />
                  Core Capabilities
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feat, i) => (
                    <div key={i} className="flex items-start space-x-3 text-slate-200">
                      <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Use Cases */}
              <div className="bg-black/30 rounded-2xl border border-blue-500/30 p-8">
                <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
                  <Users className="w-8 h-8 text-blue-400" />
                  Use Cases & Applications
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-blue-400">Financial Services</h3>
                    <p className="text-slate-300 text-sm">Portfolio optimization, risk assessment, and algorithmic trading using quantum algorithms for superior performance.</p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-blue-400">Pharmaceutical Research</h3>
                    <p className="text-slate-300 text-sm">Drug discovery and molecular modeling with quantum computing for faster, more accurate results.</p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-blue-400">Logistics & Supply Chain</h3>
                    <p className="text-slate-300 text-sm">Complex optimization problems, route planning, and resource allocation using quantum algorithms.</p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-blue-400">Cryptography & Security</h3>
                    <p className="text-slate-300 text-sm">Quantum-resistant encryption and advanced cryptographic protocols for enhanced security.</p>
                  </div>
                </div>
              </div>

              {/* Technology Stack */}
              <div className="bg-black/30 rounded-2xl border border-blue-500/30 p-8">
                <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
                  <Zap className="w-8 h-8 text-blue-400" />
                  Technology & Integrations
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-blue-400 mb-3">Quantum Technologies</h3>
                    <div className="space-y-2">
                      {['Qiskit & Cirq', 'AWS Braket & Azure Quantum', 'Google Quantum AI', 'IBM Quantum', 'Custom Quantum Algorithms'].map((tech, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span className="text-slate-300 text-sm">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-400 mb-3">Cloud Integrations</h3>
                    <div className="space-y-2">
                      {['AWS, Azure, Google Cloud', 'IBM Cloud, Oracle Cloud', 'VMware, Kubernetes', 'Hybrid Cloud Management', 'Multi-cloud Orchestration'].map((integration, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span className="text-slate-300 text-sm">{integration}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing & Contact Sidebar */}
            <div className="space-y-6">
              {/* Pricing Card */}
              <div className="bg-black/30 rounded-2xl border border-blue-500/30 p-6">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-white mb-2">
                    {service.price}
                    <span className="text-slate-400 text-lg">{service.period}</span>
                  </div>
                  <div className="flex items-center justify-center text-yellow-400 mb-3">
                    <Star className="w-5 h-5 mr-2" />
                    <span className="font-semibold">{service.rating.toFixed(1)}</span>
                    <span className="text-slate-400 text-sm ml-2">(28 reviews)</span>
                  </div>
                  <div className="text-slate-400 text-sm space-y-1">
                    <div>{service.trialDays}-day free trial</div>
                    <div>Setup: {service.setupTime}</div>
                  </div>
                </div>
                
                <Button href="/contact" variant="quantum" size="lg" className="w-full mb-4">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                
                <div className="text-center text-sm text-slate-400">
                  No credit card required • Cancel anytime
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-black/30 rounded-2xl border border-blue-500/30 p-6">
                <h3 className="text-xl font-semibold mb-4 text-center">Contact Us</h3>
                <div className="space-y-4 text-sm text-slate-300">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>{service.contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>{service.contactInfo.email}</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-1" />
                    <span className="text-xs leading-relaxed">{service.contactInfo.address}</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-blue-500/30">
                  <Button href={service.contactInfo.website} variant="outline" size="sm" className="w-full">
                    Visit Website
                  </Button>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="bg-black/30 rounded-2xl border border-blue-500/30 p-6">
                <h3 className="text-xl font-semibold mb-4 text-center">Key Benefits</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-slate-300">Accelerate computations by 1000x</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-slate-300">Reduce costs by 70%</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-slate-300">99.9% uptime guarantee</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-slate-300">Seamless hybrid computing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Market Position & ROI */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-black/30 rounded-2xl border border-blue-500/30 p-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <BarChart3 className="w-6 h-6 text-blue-400" />
                Market Position
              </h2>
              <p className="text-slate-300 mb-4">
                First enterprise quantum-cloud hybrid platform with 99.9% uptime. 
                Leading the market in quantum-classical hybrid computing with 
                comprehensive multi-cloud integration capabilities.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Market Size:</span>
                  <span className="text-white">$65B+ by 2030</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Growth Rate:</span>
                  <span className="text-white">250% YoY</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Target Audience:</span>
                  <span className="text-white">Financial, Pharmaceutical, Research</span>
                </div>
              </div>
            </div>

            <div className="bg-black/30 rounded-2xl border border-blue-500/30 p-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-blue-400" />
                ROI & Business Impact
              </h2>
              <div className="space-y-4">
                <div className="bg-blue-500/10 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-400 mb-2">Computational Power</h3>
                  <p className="text-slate-300 text-sm">Accelerate complex computations by 1000x using quantum algorithms for previously unsolvable problems.</p>
                </div>
                <div className="bg-blue-500/10 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-400 mb-2">Cost Efficiency</h3>
                  <p className="text-slate-300 text-sm">Reduce computational costs by 70% through intelligent workload distribution and quantum optimization.</p>
                </div>
                <div className="bg-blue-500/10 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-400 mb-2">Competitive Advantage</h3>
                  <p className="text-slate-300 text-sm">Gain first-mover advantage in quantum computing adoption and stay ahead of competitors.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl border border-blue-500/30 p-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Harness Quantum Computing Power?</h2>
            <p className="text-lg text-slate-300 mb-6 max-w-2xl mx-auto">
              Join 34+ organizations already using our Quantum Cloud Hybrid Platform to 
              solve complex computational problems and accelerate innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="quantum" size="lg">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button href={`tel:${service.contactInfo.mobile}`} variant="outline" size="lg">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}