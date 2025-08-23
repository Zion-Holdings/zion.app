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
  Factory, Cog, Gauge, Wrench, Settings2, CpuIcon2
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Industrial Automation AI | Zion Tech Group',
  description: 'AI-powered industrial automation solutions for smart manufacturing and Industry 4.0.',
  keywords: 'industrial automation, AI manufacturing, Industry 4.0, smart factory, automation technology',
  openGraph: {
    title: 'Industrial Automation AI | Zion Tech Group',
    description: 'AI-powered industrial automation solutions for smart manufacturing and Industry 4.0.',
    url: 'https://ziontechgroup.com/industrial-automation-ai',
    siteName: 'Zion Tech Group',
    images: [
      {
        url: 'https://ziontechgroup.com/og-image-industrial-automation.jpg',
        width: 1200,
        height: 630,
        alt: 'Industrial Automation AI',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industrial Automation AI | Zion Tech Group',
    description: 'AI-powered industrial automation solutions for smart manufacturing and Industry 4.0.',
    images: ['https://ziontechgroup.com/og-image-industrial-automation.jpg'],
  },
  alternates: {
    canonical: 'https://ziontechgroup.com/industrial-automation-ai',
  },
};

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export default function IndustrialAutomationAI() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-gray-900/20 to-zinc-900/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-500/20 border border-slate-500/30 text-slate-300 text-sm font-medium mb-8">
              <Factory className="w-4 h-4 mr-2" />
              AI-Powered Industrial Automation
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-400 via-gray-400 to-zinc-400 bg-clip-text text-transparent">
              Industrial Automation AI
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionize your manufacturing operations with AI-powered industrial automation 
              that delivers smart factories, predictive maintenance, and Industry 4.0 excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-slate-600 to-gray-600 rounded-xl font-semibold text-white hover:from-slate-700 hover:to-gray-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="#features" 
                className="inline-flex items-center px-8 py-4 border border-slate-500/30 rounded-xl font-semibold text-slate-300 hover:bg-slate-500/10 transition-all duration-300"
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
              Revolutionary Industrial Technology
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our industrial automation platform provides comprehensive AI solutions for smart 
              manufacturing, predictive maintenance, and operational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/20 to-gray-900/20 border border-slate-500/20">
              <div className="w-12 h-12 bg-slate-500/20 rounded-xl flex items-center justify-center mb-4">
                <Cog className="w-6 h-6 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Manufacturing</h3>
              <p className="text-gray-400">
                AI-powered production lines with real-time optimization and quality control.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/20 to-zinc-900/20 border border-gray-500/20">
              <div className="w-12 h-12 bg-gray-500/20 rounded-xl flex items-center justify-center mb-4">
                <Monitor className="w-6 h-6 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Predictive Maintenance</h3>
              <p className="text-gray-400">
                Machine learning algorithms that predict equipment failures before they occur.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900/20 to-neutral-900/20 border border-zinc-500/20">
              <div className="w-12 h-12 bg-zinc-500/20 rounded-xl flex items-center justify-center mb-4">
                <Gauge className="w-6 h-6 text-zinc-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Performance Optimization</h3>
              <p className="text-gray-400">
                Continuous optimization of production processes and resource utilization.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-neutral-900/20 to-stone-900/20 border border-neutral-500/20">
              <div className="w-12 h-12 bg-neutral-500/20 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-neutral-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
              <p className="text-gray-400">
                Automated quality control with computer vision and AI inspection systems.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-stone-900/20 to-red-900/20 border border-stone-500/20">
              <div className="w-12 h-12 bg-stone-500/20 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-stone-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Supply Chain Intelligence</h3>
              <p className="text-gray-400">
                AI-driven supply chain optimization and inventory management.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/20">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cognitive Automation</h3>
              <p className="text-gray-400">
                Advanced robotics and cognitive systems for complex manufacturing tasks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Automation Capabilities Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Industrial Automation Capabilities
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our platform provides comprehensive automation solutions across all aspects of industrial operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/20 to-gray-900/20 border border-slate-500/20">
              <div className="w-12 h-12 bg-slate-500/20 rounded-xl flex items-center justify-center mb-4">
                <Factory className="w-6 h-6 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-400">Production Automation</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Automated assembly lines</li>
                <li>• Robotic manufacturing</li>
                <li>• Process optimization</li>
                <li>• Quality control</li>
                <li>• Production scheduling</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/20 to-zinc-900/20 border border-gray-500/20">
              <div className="w-12 h-12 bg-gray-500/20 rounded-xl flex items-center justify-center mb-4">
                <Monitor className="w-6 h-6 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-400">IoT & Monitoring</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Sensor networks</li>
                <li>• Real-time monitoring</li>
                <li>• Data collection</li>
                <li>• Remote monitoring</li>
                <li>• Edge computing</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900/20 to-neutral-900/20 border border-zinc-500/20">
              <div className="w-12 h-12 bg-zinc-500/20 rounded-xl flex items-center justify-center mb-4">
                <CpuIcon2 className="w-6 h-6 text-zinc-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-zinc-400">AI & Machine Learning</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Predictive analytics</li>
                <li>• Pattern recognition</li>
                <li>• Anomaly detection</li>
                <li>• Process optimization</li>
                <li>• Decision support</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-neutral-900/20 to-stone-900/20 border border-neutral-500/20">
              <div className="w-12 h-12 bg-stone-500/20 rounded-xl flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-neutral-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-400">Maintenance & Reliability</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Predictive maintenance</li>
                <li>• Condition monitoring</li>
                <li>• Asset management</li>
                <li>• Reliability engineering</li>
                <li>• Maintenance scheduling</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-stone-900/20 to-red-900/20 border border-stone-500/20">
              <div className="w-12 h-12 bg-stone-500/20 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-stone-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-stone-400">Analytics & Insights</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Performance metrics</li>
                <li>• Operational analytics</li>
                <li>• Efficiency analysis</li>
                <li>• Cost optimization</li>
                <li>• Benchmarking</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/20">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-orange-400">Safety & Compliance</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Safety monitoring</li>
                <li>• Compliance tracking</li>
                <li>• Risk assessment</li>
                <li>• Emergency response</li>
                <li>• Safety protocols</li>
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
              How Industrial Automation AI Works
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our platform provides intelligent automation for modern manufacturing operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-slate-400">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Data Collection</h3>
              <p className="text-gray-400">
                IoT sensors and systems collect real-time data from manufacturing operations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gray-400">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Analysis</h3>
              <p className="text-gray-400">
                Machine learning algorithms analyze data and identify optimization opportunities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zinc-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-zinc-400">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Automated Actions</h3>
              <p className="text-gray-400">
                Systems automatically execute optimized actions and process improvements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-neutral-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-neutral-400">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Continuous Learning</h3>
              <p className="text-gray-400">
                Platform continuously learns and improves automation strategies.
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
              Industrial Automation Use Cases
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our platform serves various industrial sectors with tailored automation solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/20 to-gray-900/20 border border-slate-500/20">
              <div className="w-12 h-12 bg-slate-500/20 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Automotive Manufacturing</h3>
              <p className="text-gray-400">
                Automated assembly lines and quality control for vehicle production.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/20 to-zinc-900/20 border border-gray-500/20">
              <div className="w-12 h-12 bg-gray-500/20 rounded-xl flex items-center justify-center mb-4">
                <Building className="w-6 h-6 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Electronics Production</h3>
              <p className="text-gray-400">
                Precision manufacturing and testing for electronic components and devices.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900/20 to-neutral-900/20 border border-zinc-500/20">
              <div className="w-12 h-12 bg-zinc-500/20 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-zinc-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Pharmaceutical Manufacturing</h3>
              <p className="text-gray-400">
                Automated production and quality assurance for pharmaceutical products.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-neutral-900/20 to-stone-900/20 border border-neutral-500/20">
              <div className="w-12 h-12 bg-neutral-500/20 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-neutral-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Food & Beverage</h3>
              <p className="text-gray-400">
                Automated processing and packaging for food and beverage production.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-stone-900/20 to-red-900/20 border border-stone-500/20">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Chemical Manufacturing</h3>
              <p className="text-gray-400">
                Automated chemical processing with safety monitoring and control systems.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/20">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4">
                <RefreshCw className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Textile Manufacturing</h3>
              <p className="text-gray-400">
                Automated textile production with quality control and process optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900/20 via-gray-900/20 to-zinc-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Automate Your Industry?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the future of manufacturing where AI-powered automation meets industrial excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-slate-600 to-gray-600 rounded-xl font-semibold text-white hover:from-slate-700 hover:to-gray-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a 
              href={`tel:${contactInfo.mobile}`}
              className="inline-flex items-center px-8 py-4 border border-slate-500/30 rounded-xl font-semibold text-slate-300 hover:bg-slate-500/10 transition-all duration-300"
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
                Ready to revolutionize your industrial operations? Our team is here to help you get started.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-slate-400" />
                  <a href={`tel:${contactInfo.mobile}`} className="text-gray-300 hover:text-white transition-colors">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-slate-400" />
                  <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-white transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-slate-400" />
                  <span className="text-gray-300">{contactInfo.address}</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900/20 to-gray-900/20 rounded-2xl p-8 border border-slate-500/20">
              <h3 className="text-xl font-semibold mb-4">Request a Consultation</h3>
              <p className="text-gray-400 mb-6">
                Let's discuss your industrial automation needs. Schedule a consultation with our team today.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-slate-600 to-gray-600 rounded-xl font-semibold text-white hover:from-slate-700 hover:to-gray-700 transition-all duration-300"
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