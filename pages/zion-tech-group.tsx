import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Brain, Zap, Target, BarChart3, Users, TrendingUp, 
  MessageSquare, Mail, Phone, MapPin, ArrowRight,
  Star, CheckCircle, Rocket, Globe, Shield, Cpu,
  FileText, Image, Video, Music, Palette, Type,
  User, Search, Eye, Heart, ShoppingCart, Code,
  Database, Users2, Award, Lock, Server, Network, 
  Monitor, Settings, RefreshCw, Play, Pause, 
  AlertTriangle, CheckCircle2, Building, Wifi, 
  HardDrive, Cloud, Smartphone, Blocks, Wallet, 
  CreditCard, PiggyBank, Building2, Activity,
  Waves, BrainCircuit, CpuIcon, MonitorHeart,
  Film, Headphones, Camera, Gamepad2, Tv, Radio,
  Factory, Cog, Gauge, Wrench, Settings2, CpuIcon2,
  Calendar, Clock, FileText2, PieChart, Atom,
  Truck, ChevronRight, Home
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Zion Tech Group | Revolutionary Quantum AI Technology Solutions',
  description: 'Leading provider of quantum-powered AI solutions, autonomous systems, and cutting-edge technology platforms for the future.',
  keywords: 'Zion Tech Group, quantum AI, autonomous systems, AI technology, quantum computing, artificial intelligence, technology solutions',
  openGraph: {
    title: 'Zion Tech Group | Revolutionary Quantum AI Technology Solutions',
    description: 'Leading provider of quantum-powered AI solutions, autonomous systems, and cutting-edge technology platforms for the future.',
    url: 'https://ziontechgroup.com',
    siteName: 'Zion Tech Group',
    images: [
      {
        url: 'https://ziontechgroup.com/og-image-zion-tech-group.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group | Revolutionary Quantum AI Technology Solutions',
    description: 'Leading provider of quantum-powered AI solutions, autonomous systems, and cutting-edge technology platforms for the future.',
    images: ['https://ziontechgroup.com/og-image-zion-tech-group.jpg'],
  },
  alternates: {
    canonical: 'https://ziontechgroup.com',
  },
};

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export default function ZionTechGroup() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Breadcrumb Navigation */}
      <section className="py-6 bg-gray-900/50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-400">
            <Link href="/" className="flex items-center hover:text-white transition-colors">
              <Home className="w-4 h-4 mr-1" />
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">About Zion Tech Group</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/20 to-purple-900/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-8">
              <Rocket className="w-4 h-4 mr-2" />
              Revolutionary Technology
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Pioneering the future with revolutionary quantum-powered AI solutions, autonomous systems, 
              and cutting-edge technology platforms that transform industries and redefine possibilities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/" className="inline-flex items-center px-8 py-4 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold rounded-lg transition-colors">
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                Leading the Quantum Revolution
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Zion Tech Group stands at the forefront of technological innovation, specializing in quantum AI systems, 
                autonomous platforms, and next-generation technology solutions that push the boundaries of what's possible.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Our team of world-class engineers, scientists, and visionaries work together to create solutions that 
                not only solve today's challenges but anticipate and address tomorrow's opportunities.
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">10+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Global Reach</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/30">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Brain className="h-8 w-8 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Quantum AI</h3>
                    <p className="text-sm text-gray-300">Advanced AI powered by quantum principles</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-600/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Rocket className="h-8 w-8 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Autonomous Systems</h3>
                    <p className="text-sm text-gray-300">Self-managing intelligent platforms</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-indigo-600/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-8 w-8 text-indigo-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Cybersecurity</h3>
                    <p className="text-sm text-gray-300">Next-gen security solutions</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-600/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Cloud className="h-8 w-8 text-green-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Cloud Infrastructure</h3>
                    <p className="text-sm text-gray-300">Scalable cloud solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform your business and accelerate growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all">
              <div className="w-16 h-16 bg-blue-600/20 rounded-lg flex items-center justify-center mb-6">
                <Brain className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Quantum AI Development</h3>
              <p className="text-gray-300 mb-6">
                Custom quantum AI solutions that leverage the power of quantum computing to solve complex problems 
                and deliver unprecedented performance.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Machine Learning Optimization
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Neural Network Enhancement
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Predictive Analytics
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800 hover:border-purple-500/50 transition-all">
              <div className="w-16 h-16 bg-purple-600/20 rounded-lg flex items-center justify-center mb-6">
                <Rocket className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Autonomous Systems</h3>
              <p className="text-gray-300 mb-6">
                Self-managing platforms that operate independently, continuously learning and optimizing 
                performance without human intervention.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Self-Optimizing Infrastructure
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Intelligent Resource Management
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Predictive Maintenance
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800 hover:border-indigo-500/50 transition-all">
              <div className="w-16 h-16 bg-indigo-600/20 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Cybersecurity Solutions</h3>
              <p className="text-gray-300 mb-6">
                Advanced security frameworks with quantum-resistant encryption and AI-powered threat detection 
                to protect your digital assets.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Quantum Encryption
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  AI Threat Detection
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Zero-Trust Architecture
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Let's discuss how Zion Tech Group can help you leverage cutting-edge technology to achieve your goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-10 w-10 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Call Us</h3>
              <p className="text-gray-300 mb-2">{contactInfo.mobile}</p>
              <p className="text-sm text-gray-400">Available 24/7</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-10 w-10 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Email Us</h3>
              <p className="text-gray-300 mb-2">{contactInfo.email}</p>
              <p className="text-sm text-gray-400">Response within 2 hours</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-indigo-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-10 w-10 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Visit Us</h3>
              <p className="text-gray-300 mb-2">{contactInfo.address}</p>
              <p className="text-sm text-gray-400">By appointment</p>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>
              <p className="text-gray-300">
                Leading the future of technology with revolutionary quantum AI and autonomous systems.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Quantum AI Systems</li>
                <li>Autonomous Platforms</li>
                <li>Cloud Infrastructure</li>
                <li>Cybersecurity</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li>About Us</li>
                <li>Careers</li>
                <li>News</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-blue-400">
                  <Mail className="h-5 w-5" />
                </a>
                <a href={`tel:${contactInfo.mobile}`} className="text-gray-300 hover:text-blue-400">
                  <Phone className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-blue-400">
                  <MapPin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}