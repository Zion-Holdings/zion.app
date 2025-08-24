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
  Wallet, CreditCard, PiggyBank, Building2, Activity,
  Waves, Zap, BrainCircuit, CpuIcon, MonitorHeart,
  Film, Headphones, Camera, Gamepad2, Tv, Radio,
  Factory, Cog, Gauge, Wrench, Settings2, CpuIcon2,
  Calendar, Clock, Target, Users2, FileText2, PieChart,
  Atom, Cpu, Brain, Zap, Target, BarChart3, Users,
  TrendingUp, Shield, Globe, Database, Network, Zap,
  Battery, Sun, Wind, Leaf, Gauge, Activity, TrendingUp,
  BarChart3, Target, Settings, Cog, Wrench, Monitor
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Quantum Energy Optimization | Zion Tech Group',
  description: 'Revolutionary quantum-powered energy optimization platform with AI-driven efficiency, smart grid management, and sustainable energy solutions.',
  keywords: 'quantum energy optimization, smart grid, energy efficiency, renewable energy, AI energy management, sustainable energy, quantum energy',
  openGraph: {
    title: 'Quantum Energy Optimization | Zion Tech Group',
    description: 'Revolutionary quantum-powered energy optimization platform with AI-driven efficiency, smart grid management, and sustainable energy solutions.',
    url: 'https://ziontechgroup.com/quantum-energy-optimization',
    siteName: 'Zion Tech Group',
    images: [
      {
        url: 'https://ziontechgroup.com/og-image-quantum-energy.jpg',
        width: 1200,
        height: 630,
        alt: 'Quantum Energy Optimization',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quantum Energy Optimization | Zion Tech Group',
    description: 'Revolutionary quantum-powered energy optimization platform with AI-driven efficiency, smart grid management, and sustainable energy solutions.',
    images: ['https://ziontechgroup.com/og-image-quantum-energy.jpg'],
  },
  alternates: {
    canonical: 'https://ziontechgroup.com/quantum-energy-optimization',
  },
};

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export default function QuantumEnergyOptimization() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-yellow-900/20 to-orange-900/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 text-sm font-medium mb-8">
              <Zap className="w-4 h-4 mr-2" />
              Quantum Energy
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Quantum Energy Optimization
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the future of energy management with our revolutionary quantum-powered 
              optimization platform featuring AI-driven efficiency and smart grid intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-yellow-600 rounded-xl font-semibold text-white hover:from-green-700 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="#features" 
                className="inline-flex items-center px-8 py-4 border border-green-500/30 rounded-xl font-semibold text-green-300 hover:bg-green-500/10 transition-all duration-300"
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
              Revolutionary Energy Intelligence
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our quantum energy optimization platform combines cutting-edge quantum computing with 
              AI-driven energy management for unprecedented efficiency and sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-green-900/20 to-yellow-900/20 border border-green-500/20">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                <Atom className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quantum Processing</h3>
              <p className="text-gray-400">
                Leverage quantum computing for complex energy optimization and grid management.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border border-yellow-500/20">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI-Powered Optimization</h3>
              <p className="text-gray-400">
                Intelligent algorithms that automatically optimize energy consumption and distribution.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-500/20">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4">
                <Gauge className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Grid Management</h3>
              <p className="text-gray-400">
                Advanced grid monitoring and intelligent energy distribution systems.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-red-900/20 to-pink-900/20 border border-red-500/20">
              <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Renewable Integration</h3>
              <p className="text-gray-400">
                Seamless integration of solar, wind, and other renewable energy sources.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-900/20 to-purple-900/20 border border-pink-500/20">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                <Activity className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-Time Monitoring</h3>
              <p className="text-gray-400">
                Continuous energy monitoring and predictive maintenance for optimal performance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Sustainability</h3>
              <p className="text-gray-400">
                Worldwide energy optimization and environmental impact reduction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Energy Capabilities Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Energy Optimization Capabilities
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our platform provides comprehensive energy solutions powered by quantum computing and AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-green-900/20 to-yellow-900/20 border border-green-500/20">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                <Gauge className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-green-400">Energy Efficiency</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Consumption optimization</li>
                <li>• Peak demand management</li>
                <li>• Load balancing</li>
                <li>• Energy conservation</li>
                <li>• Efficiency analytics</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border border-yellow-500/20">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-4">
                <Sun className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Renewable Energy</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Solar integration</li>
                <li>• Wind power management</li>
                <li>• Energy storage</li>
                <li>• Grid integration</li>
                <li>• Sustainability metrics</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-500/20">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
                <Network className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-red-400">Smart Grid</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Grid monitoring</li>
                <li>• Distribution optimization</li>
                <li>• Fault detection</li>
                <li>• Load forecasting</li>
                <li>• Grid stability</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-red-900/20 to-pink-900/20 border border-red-500/20">
              <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-4">
                <Battery className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-pink-400">Energy Storage</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Battery management</li>
                <li>• Storage optimization</li>
                <li>• Peak shaving</li>
                <li>• Backup power</li>
                <li>• Storage analytics</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-900/20 to-purple-900/20 border border-pink-500/20">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-purple-400">Analytics & Reporting</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Energy analytics</li>
                <li>• Performance metrics</li>
                <li>• Cost analysis</li>
                <li>• Sustainability reporting</li>
                <li>• Predictive insights</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-400">Automation & Control</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Automated optimization</li>
                <li>• Smart controls</li>
                <li>• Demand response</li>
                <li>• Energy scheduling</li>
                <li>• System integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Energy Applications Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Energy Applications & Industries
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our quantum energy optimization platform serves diverse industries and energy applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-green-900/20 to-yellow-900/20 border border-green-500/20">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                <Building className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Commercial Buildings</h3>
              <p className="text-gray-400">
                Office buildings, retail spaces, and commercial facilities energy optimization.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border border-yellow-500/20">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-4">
                <Factory className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Manufacturing & Industrial</h3>
              <p className="text-gray-400">
                Industrial facilities, manufacturing plants, and heavy industry energy management.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-500/20">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Residential & Smart Homes</h3>
              <p className="text-gray-400">
                Smart home energy management, residential optimization, and consumer energy.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-red-900/20 to-pink-900/20 border border-red-500/20">
              <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Utilities & Grid Operators</h3>
              <p className="text-gray-400">
                Power utilities, grid operators, and energy distribution companies.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-900/20 to-purple-900/20 border border-pink-500/20">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Renewable Energy</h3>
              <p className="text-gray-400">
                Solar farms, wind farms, and renewable energy project optimization.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cities & Municipalities</h3>
              <p className="text-gray-400">
                Smart city initiatives, municipal energy management, and urban sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              How Quantum Energy Optimization Works
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our platform seamlessly integrates quantum computing with energy management systems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-400">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Data Collection</h3>
              <p className="text-gray-400">
                Quantum systems collect and process vast amounts of energy consumption data.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-400">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Analysis</h3>
              <p className="text-gray-400">
                AI algorithms analyze energy patterns and optimize consumption strategies.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-400">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Optimization Execution</h3>
              <p className="text-gray-400">
                System automatically executes energy optimization and efficiency improvements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-400">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Continuous Improvement</h3>
              <p className="text-gray-400">
                Platform continuously learns and improves energy optimization strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Energy Optimization Use Cases
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our platform serves various energy scenarios with tailored optimization solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-green-900/20 to-yellow-900/20 border border-green-500/20">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Peak Demand Management</h3>
              <p className="text-gray-400">
                Reduce peak energy demand, lower costs, and improve grid stability.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border border-yellow-500/20">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-4">
                <Sun className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Renewable Integration</h3>
              <p className="text-gray-400">
                Optimize renewable energy usage and storage for maximum efficiency.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-500/20">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4">
                <Gauge className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Energy Efficiency</h3>
              <p className="text-gray-400">
                Improve building efficiency, reduce waste, and optimize consumption.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-red-900/20 to-pink-900/20 border border-red-500/20">
              <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-4">
                <Battery className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Storage Optimization</h3>
              <p className="text-gray-400">
                Optimize energy storage systems for maximum efficiency and cost savings.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-900/20 to-purple-900/20 border border-pink-500/20">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                <Network className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Grid Management</h3>
              <p className="text-gray-400">
                Intelligent grid management, fault detection, and load balancing.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainability Goals</h3>
              <p className="text-gray-400">
                Achieve carbon reduction targets and environmental sustainability goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-900/20 via-yellow-900/20 to-orange-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready for Quantum Energy?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Experience the future of energy optimization with our revolutionary quantum platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-yellow-600 rounded-xl font-semibold text-white hover:from-green-700 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Optimizing
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a 
              href={`tel:${contactInfo.mobile}`}
              className="inline-flex items-center px-8 py-4 border border-green-500/30 rounded-xl font-semibold text-green-300 hover:bg-green-500/10 transition-all duration-300"
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
                Ready to revolutionize your energy management? Our team is here to help.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-400" />
                  <a href={`tel:${contactInfo.mobile}`} className="text-gray-300 hover:text-white transition-colors">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-green-400" />
                  <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-white transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">{contactInfo.address}</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900/20 to-yellow-900/20 rounded-2xl p-8 border border-green-500/20">
              <h3 className="text-xl font-semibold mb-4">Energy Consultation</h3>
              <p className="text-gray-400 mb-6">
                Let's discuss your energy needs and how quantum optimization can transform your operations.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-yellow-600 rounded-xl font-semibold text-white hover:from-green-700 hover:to-yellow-700 transition-all duration-300"
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