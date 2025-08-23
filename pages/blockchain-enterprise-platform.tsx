import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Brain, Zap, Target, BarChart3, Users, TrendingUp, 
  MessageSquare, Mail, Phone, MapPin, ArrowRight,
  Star, CheckCircle, Rocket, Globe, Shield, Cpu,
  FileText, Image, Video, Music, Palette, Type,
  User, Search, Eye, Heart, ShoppingCart, Code,
  Database, Globe, Shield, Cpu, Users2, Award,
  CheckCircle, Target, BarChart3, TrendingUp, Lock,
  Server, Network, Monitor, Settings, RefreshCw,
  Play, Pause, AlertTriangle, CheckCircle2, Building,
  Wifi, HardDrive, Cloud, Smartphone, Link, Blocks,
  Wallet, CreditCard, PiggyBank, Building2
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blockchain Enterprise Platform | Zion Tech Group',
  description: 'Enterprise-grade blockchain platform for secure, scalable, and efficient business applications.',
  keywords: 'blockchain enterprise, enterprise blockchain, distributed ledger, smart contracts, blockchain platform',
  openGraph: {
    title: 'Blockchain Enterprise Platform | Zion Tech Group',
    description: 'Enterprise-grade blockchain platform for secure, scalable, and efficient business applications.',
    url: 'https://ziontechgroup.com/blockchain-enterprise-platform',
    siteName: 'Zion Tech Group',
    images: [
      {
        url: 'https://ziontechgroup.com/og-image-blockchain-platform.jpg',
        width: 1200,
        height: 630,
        alt: 'Blockchain Enterprise Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blockchain Enterprise Platform | Zion Tech Group',
    description: 'Enterprise-grade blockchain platform for secure, scalable, and efficient business applications.',
    images: ['https://ziontechgroup.com/og-image-blockchain-platform.jpg'],
  },
  alternates: {
    canonical: 'https://ziontechgroup.com/blockchain-enterprise-platform',
  },
};

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export default function BlockchainEnterprisePlatform() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-indigo-900/20 to-blue-900/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-8">
              <Blocks className="w-4 h-4 mr-2" />
              Enterprise Blockchain Solutions
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
              Blockchain Enterprise Platform
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with enterprise-grade blockchain technology that provides 
              secure, transparent, and efficient solutions for modern digital enterprises.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl font-semibold text-white hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="#features" 
                className="inline-flex items-center px-8 py-4 border border-purple-500/30 rounded-xl font-semibold text-purple-300 hover:bg-purple-500/10 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Revolutionary Blockchain Technology
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our enterprise blockchain platform provides secure, scalable, and efficient solutions 
              for modern business applications and digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border border-purple-500/20">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Enterprise Security</h3>
              <p className="text-gray-400">
                Military-grade security with advanced cryptography and permissioned access controls.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-900/20 to-blue-900/20 border border-indigo-500/20">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Scalability</h3>
              <p className="text-gray-400">
                High-performance blockchain that scales to handle enterprise-level transaction volumes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/20">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Contracts</h3>
              <p className="text-gray-400">
                Automated business logic execution with programmable smart contracts.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-900/20 to-teal-900/20 border border-cyan-500/20">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
                <Network className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Consensus Mechanisms</h3>
              <p className="text-gray-400">
                Efficient consensus protocols for fast and secure transaction validation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-900/20 to-emerald-900/20 border border-teal-500/20">
              <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Data Integrity</h3>
              <p className="text-gray-400">
                Immutable data storage with tamper-proof audit trails and transparency.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-900/20 to-green-900/20 border border-emerald-500/20">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Interoperability</h3>
              <p className="text-gray-400">
                Seamless integration with existing enterprise systems and blockchain networks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blockchain Capabilities Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Blockchain Platform Capabilities
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our platform provides comprehensive blockchain solutions for enterprise applications and use cases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border border-purple-500/20">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                <Blocks className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-purple-400">Core Infrastructure</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Distributed ledger technology</li>
                <li>• Consensus mechanisms</li>
                <li>• Cryptographic security</li>
                <li>• Network management</li>
                <li>• Node infrastructure</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-900/20 to-blue-900/20 border border-indigo-500/20">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-indigo-400">Smart Contracts</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Automated execution</li>
                <li>• Business logic</li>
                <li>• Multi-signature support</li>
                <li>• Upgradeable contracts</li>
                <li>• Security auditing</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/20">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-cyan-400">Security & Privacy</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Permissioned access</li>
                <li>• Identity management</li>
                <li>• Data encryption</li>
                <li>• Audit trails</li>
                <li>• Compliance tools</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-900/20 to-teal-900/20 border border-cyan-500/20">
              <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mb-4">
                <Network className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-teal-400">Network Management</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Node deployment</li>
                <li>• Network monitoring</li>
                <li>• Performance optimization</li>
                <li>• Load balancing</li>
                <li>• Fault tolerance</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-900/20 to-emerald-900/20 border border-teal-500/20">
              <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-teal-400">Analytics & Insights</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Transaction analytics</li>
                <li>• Network metrics</li>
                <li>• Performance monitoring</li>
                <li>• Business intelligence</li>
                <li>• Reporting tools</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-900/20 to-green-900/20 border border-emerald-500/20">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-green-400">Integration & APIs</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• RESTful APIs</li>
                <li>• SDK libraries</li>
                <li>• Web3 integration</li>
                <li>• Legacy system support</li>
                <li>• Third-party tools</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              How Blockchain Enterprise Platform Works
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our platform provides a secure and scalable foundation for enterprise blockchain applications.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-400">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Network Setup</h3>
              <p className="text-gray-400">
                Deploy and configure enterprise blockchain network with custom consensus rules.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-400">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Contract Development</h3>
              <p className="text-gray-400">
                Create and deploy smart contracts for automated business logic execution.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-400">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Integration</h3>
              <p className="text-gray-400">
                Integrate blockchain with existing enterprise systems and applications.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-cyan-400">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Operations</h3>
              <p className="text-gray-400">
                Monitor, manage, and optimize blockchain operations for maximum efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Blockchain Enterprise Use Cases
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our platform serves various industries with tailored blockchain solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border border-purple-500/20">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                <Wallet className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Financial Services</h3>
              <p className="text-gray-400">
                Cross-border payments, trade finance, and digital asset management.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-900/20 to-blue-900/20 border border-indigo-500/20">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Supply Chain</h3>
              <p className="text-gray-400">
                End-to-end traceability, provenance tracking, and inventory management.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/20">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Healthcare</h3>
              <p className="text-gray-400">
                Patient data management, drug traceability, and clinical trial records.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-900/20 to-teal-900/20 border border-cyan-500/20">
              <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real Estate</h3>
              <p className="text-gray-400">
                Property tokenization, title management, and smart contract automation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-900/20 to-emerald-900/20 border border-teal-500/20">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Government</h3>
              <p className="text-gray-400">
                Digital identity, voting systems, and public record management.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-900/20 to-green-900/20 border border-emerald-500/20">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                <RefreshCw className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Energy & Utilities</h3>
              <p className="text-gray-400">
                Renewable energy trading, grid management, and carbon credit tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-indigo-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Business with Blockchain?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the future of enterprise technology where blockchain meets business innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl font-semibold text-white hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a 
              href={`tel:${contactInfo.mobile}`}
              className="inline-flex items-center px-8 py-4 border border-purple-500/30 rounded-xl font-semibold text-purple-300 hover:bg-purple-500/10 transition-all duration-300"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-400 mb-8">
                Ready to revolutionize your business with blockchain? Our team is here to help you get started.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <a href={`tel:${contactInfo.mobile}`} className="text-gray-300 hover:text-white transition-colors">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-white transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">{contactInfo.address}</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-xl font-semibold mb-4">Request a Consultation</h3>
              <p className="text-gray-400 mb-6">
                Let's discuss your blockchain needs. Schedule a consultation with our team today.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl font-semibold text-white hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}