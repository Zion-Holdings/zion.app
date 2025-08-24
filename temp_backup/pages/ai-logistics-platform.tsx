import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Brain, Zap, Target, BarChart3, Users, TrendingUp, 
  MessageSquare, Mail, Phone, MapPin, ArrowRight,
  Star, CheckCircle, Rocket, Globe, Shield, Cpu,
  FileText, Image, Video, Music, Palette, Type,
  User, Search, Eye, Heart, ShoppingCart, Truck,
  Package, Route, Globe, Shield, Cpu, Users2, Award,
  CheckCircle, Target, BarChart3, TrendingUp, Clock
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Logistics Platform | Zion Tech Group',
  description: 'Advanced AI-powered logistics platform that optimizes supply chain operations and delivery management.',
  keywords: 'AI logistics, supply chain optimization, delivery management, logistics AI, transportation AI, warehouse management',
  openGraph: {
    title: 'AI Logistics Platform | Zion Tech Group',
    description: 'Advanced AI-powered logistics platform that optimizes supply chain operations and delivery management.',
    url: 'https://ziontechgroup.com/ai-logistics-platform',
    siteName: 'Zion Tech Group',
    images: [
      {
        url: 'https://ziontechgroup.com/og-image-ai-logistics-platform.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Logistics Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Logistics Platform | Zion Tech Group',
    description: 'Advanced AI-powered logistics platform that optimizes supply chain operations and delivery management.',
    images: ['https://ziontechgroup.com/og-image-ai-logistics-platform.jpg'],
  },
  alternates: {
    canonical: 'https://ziontechgroup.com/ai-logistics-platform',
  },
};

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export default function AILogisticsPlatform() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-yellow-900/20 to-green-900/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 text-sm font-medium mb-8">
              <Truck className="w-4 h-4 mr-2" />
              AI-Powered Logistics Platform
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">
              AI Logistics Platform
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              The world's most advanced AI logistics platform that optimizes supply chain operations, 
              delivery management, and warehouse efficiency with intelligent automation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-xl font-semibold text-white hover:from-orange-700 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="#features" 
                className="inline-flex items-center px-8 py-4 border border-orange-500/30 rounded-xl font-semibold text-orange-300 hover:bg-orange-500/10 transition-all duration-300"
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
              Revolutionary AI Logistics Platform
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI platform handles every aspect of logistics from route optimization to warehouse management, 
              continuously learning and improving operational efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-900/20 to-yellow-900/20 border border-orange-500/20">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Intelligence</h3>
              <p className="text-gray-400">
                Advanced AI that optimizes routes, predicts demand, and automates logistics operations.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-yellow-900/20 to-green-900/20 border border-yellow-500/20">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-4">
                <Route className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Route Optimization</h3>
              <p className="text-gray-400">
                Intelligent route planning that minimizes costs, time, and environmental impact.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/20">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Warehouse Management</h3>
              <p className="text-gray-400">
                Automated inventory management and warehouse operations for maximum efficiency.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-500/20">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fleet Management</h3>
              <p className="text-gray-400">
                Comprehensive fleet tracking, maintenance scheduling, and driver optimization.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-900/20 to-cyan-900/20 border border-teal-500/20">
              <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Predictive Analytics</h3>
              <p className="text-gray-400">
                Forecasts demand, predicts delays, and optimizes supply chain operations.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/20">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-time Tracking</h3>
              <p className="text-gray-400">
                Live visibility into shipments, inventory, and operational performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics Capabilities Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Logistics Platform Capabilities
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI platform provides comprehensive logistics solutions across all aspects of supply chain management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-900/20 to-yellow-900/20 border border-orange-500/20">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-orange-400">Supply Chain Optimization</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Demand forecasting</li>
                <li>• Inventory optimization</li>
                <li>• Supplier management</li>
                <li>• Cost optimization</li>
                <li>• Risk assessment</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-yellow-900/20 to-green-900/20 border border-yellow-500/20">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-4">
                <Route className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Transportation Management</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Route optimization</li>
                <li>• Mode selection</li>
                <li>• Carrier management</li>
                <li>• Freight optimization</li>
                <li>• Last-mile delivery</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/20">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-green-400">Warehouse Operations</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Automated picking</li>
                <li>• Inventory management</li>
                <li>• Space optimization</li>
                <li>• Quality control</li>
                <li>• Returns processing</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-500/20">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-emerald-400">Fleet Management</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Vehicle tracking</li>
                <li>• Maintenance scheduling</li>
                <li>• Driver management</li>
                <li>• Fuel optimization</li>
                <li>• Safety monitoring</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-900/20 to-cyan-900/20 border border-teal-500/20">
              <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-teal-400">Global Logistics</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• International shipping</li>
                <li>• Customs management</li>
                <li>• Multi-modal transport</li>
                <li>• Compliance tracking</li>
                <li>• Cross-border optimization</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/20">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-cyan-400">Analytics & Reporting</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Performance metrics</li>
                <li>• Cost analysis</li>
                <li>• Predictive insights</li>
                <li>• Custom dashboards</li>
                <li>• Executive reporting</li>
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
              How AI Logistics Platform Works
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI platform operates in a continuous cycle of learning, optimizing, and improving logistics operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-400">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Data Collection</h3>
              <p className="text-gray-400">
                AI collects logistics data from multiple sources including GPS, sensors, and operational systems.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-400">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Analysis</h3>
              <p className="text-gray-400">
                Advanced algorithms analyze patterns, optimize routes, and predict operational needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-400">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Optimization Execution</h3>
              <p className="text-gray-400">
                Automatically executes optimized logistics plans and operational improvements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-400">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Continuous Learning</h3>
              <p className="text-gray-400">
                Learns from outcomes to continuously improve logistics efficiency and cost optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-900/20 via-yellow-900/20 to-green-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Optimize Your Logistics with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the future of logistics where AI provides intelligent optimization while you focus on business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-xl font-semibold text-white hover:from-orange-700 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a 
              href={`tel:${contactInfo.mobile}`}
              className="inline-flex items-center px-8 py-4 border border-orange-500/30 rounded-xl font-semibold text-orange-300 hover:bg-orange-500/10 transition-all duration-300"
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
                Ready to implement advanced AI logistics optimization? Our team is here to help you get started.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-orange-400" />
                  <a href={`tel:${contactInfo.mobile}`} className="text-gray-300 hover:text-white transition-colors">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-orange-400" />
                  <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-white transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-orange-400" />
                  <span className="text-gray-300">{contactInfo.address}</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-900/20 to-yellow-900/20 rounded-2xl p-8 border border-orange-500/20">
              <h3 className="text-xl font-semibold mb-4">Request a Demo</h3>
              <p className="text-gray-400 mb-6">
                See our AI Logistics Platform in action. Schedule a personalized demo today.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-xl font-semibold text-white hover:from-orange-700 hover:to-yellow-700 transition-all duration-300"
              >
                Schedule Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}