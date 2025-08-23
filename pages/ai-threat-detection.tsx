import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Brain, Zap, Target, BarChart3, Users, TrendingUp, 
  MessageSquare, Mail, Phone, MapPin, ArrowRight,
  Star, CheckCircle, Rocket, Globe, Shield, Cpu,
  FileText, Image, Video, Music, Palette, Type,
  User, Search, Eye, Heart, ShoppingCart, Shield,
  Lock, Eye, Users2, Award, CheckCircle, AlertTriangle,
  Target, BarChart3, TrendingUp, Cpu, Globe, AlertCircle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Threat Detection | Zion Tech Group',
  description: 'Advanced AI-powered threat detection platform that identifies and neutralizes security threats in real-time.',
  keywords: 'AI threat detection, security threats, cyber threats, AI security, threat intelligence, real-time detection',
  openGraph: {
    title: 'AI Threat Detection | Zion Tech Group',
    description: 'Advanced AI-powered threat detection platform that identifies and neutralizes security threats in real-time.',
    url: 'https://ziontechgroup.com/ai-threat-detection',
    siteName: 'Zion Tech Group',
    images: [
      {
        url: 'https://ziontechgroup.com/og-image-ai-threat-detection.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Threat Detection',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Threat Detection | Zion Tech Group',
    description: 'Advanced AI-powered threat detection platform that identifies and neutralizes security threats in real-time.',
    images: ['https://ziontechgroup.com/og-image-ai-threat-detection.jpg'],
  },
  alternates: {
    canonical: 'https://ziontechgroup.com/ai-threat-detection',
  },
};

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export default function AIThreatDetection() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-orange-900/20 to-yellow-900/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 text-red-300 text-sm font-medium mb-8">
              <AlertCircle className="w-4 h-4 mr-2" />
              AI-Powered Threat Detection
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              AI Threat Detection
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              The world's most advanced AI threat detection platform that identifies, analyzes, and neutralizes 
              security threats in real-time with intelligent automation and predictive capabilities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl font-semibold text-white hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="#features" 
                className="inline-flex items-center px-8 py-4 border border-red-500/30 rounded-xl font-semibold text-red-300 hover:bg-red-500/10 transition-all duration-300"
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
              Revolutionary AI Threat Detection
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI platform handles every aspect of threat detection from real-time monitoring to automated response, 
              continuously learning and adapting to new security threats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/20">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Intelligence</h3>
              <p className="text-gray-400">
                Advanced AI that learns threat patterns, adapts to new attacks, and provides intelligent detection.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-900/20 to-yellow-900/20 border border-orange-500/20">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-time Detection</h3>
              <p className="text-gray-400">
                24/7 monitoring and instant detection of security threats across all systems and networks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-yellow-900/20 to-green-900/20 border border-yellow-500/20">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Automated Response</h3>
              <p className="text-gray-400">
                Instant automated responses to detected threats with intelligent incident management.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/20">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Predictive Analytics</h3>
              <p className="text-gray-400">
                Forecasts potential threats and vulnerabilities before they can be exploited.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-500/20">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Threat Intelligence</h3>
              <p className="text-gray-400">
                Comprehensive threat intelligence and analysis for proactive security measures.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-900/20 to-cyan-900/20 border border-teal-500/20">
              <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Incident Management</h3>
              <p className="text-gray-400">
                Comprehensive incident tracking, analysis, and response coordination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Threat Detection Capabilities Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Threat Detection Capabilities
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI platform provides comprehensive threat detection across all types of security threats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/20">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-red-400">Cyber Threats</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Malware detection</li>
                <li>• Ransomware protection</li>
                <li>• Phishing detection</li>
                <li>• Zero-day exploits</li>
                <li>• Advanced persistent threats</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-900/20 to-yellow-900/20 border border-orange-500/20">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-orange-400">Network Attacks</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• DDoS attacks</li>
                <li>• Intrusion attempts</li>
                <li>• Man-in-the-middle attacks</li>
                <li>• SQL injection</li>
                <li>• Cross-site scripting</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-yellow-900/20 to-green-900/20 border border-yellow-500/20">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Insider Threats</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Employee misconduct</li>
                <li>• Privilege abuse</li>
                <li>• Data exfiltration</li>
                <li>• Sabotage attempts</li>
                <li>• Collusion detection</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/20">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-green-400">Social Engineering</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Social media attacks</li>
                <li>• Impersonation attempts</li>
                <li>• Pretexting</li>
                <li>• Baiting schemes</li>
                <li>• Quid pro quo</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-500/20">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-emerald-400">Application Threats</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• API vulnerabilities</li>
                <li>• Code injection</li>
                <li>• Authentication bypass</li>
                <li>• Session hijacking</li>
                <li>• Input validation</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-900/20 to-cyan-900/20 border border-teal-500/20">
              <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-teal-400">Behavioral Analysis</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• User behavior analytics</li>
                <li>• Anomaly detection</li>
                <li>• Risk scoring</li>
                <li>• Pattern recognition</li>
                <li>• Predictive modeling</li>
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
              How AI Threat Detection Works
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI platform operates in a continuous cycle of learning, detecting, and responding to security threats.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-400">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Continuous Monitoring</h3>
              <p className="text-gray-400">
                AI continuously monitors all systems, networks, and applications for potential security threats.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-400">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Threat Analysis</h3>
              <p className="text-gray-400">
                Advanced algorithms analyze detected threats and determine their severity and potential impact.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-400">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Automated Response</h3>
              <p className="text-gray-400">
                Executes immediate automated responses and mitigation strategies for detected threats.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-400">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Continuous Learning</h3>
              <p className="text-gray-400">
                Learns from threat events to continuously improve detection accuracy and response capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-900/20 via-orange-900/20 to-yellow-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Detect Threats with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the future of threat detection where AI provides intelligent security while you focus on business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl font-semibold text-white hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a 
              href={`tel:${contactInfo.mobile}`}
              className="inline-flex items-center px-8 py-4 border border-red-500/30 rounded-xl font-semibold text-red-300 hover:bg-red-500/10 transition-all duration-300"
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
                Ready to implement advanced AI threat detection? Our team is here to help you get started.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-red-400" />
                  <a href={`tel:${contactInfo.mobile}`} className="text-gray-300 hover:text-white transition-colors">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-red-400" />
                  <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-white transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-red-400" />
                  <span className="text-gray-300">{contactInfo.address}</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 rounded-2xl p-8 border border-red-500/20">
              <h3 className="text-xl font-semibold mb-4">Request a Demo</h3>
              <p className="text-gray-400 mb-6">
                See our AI Threat Detection Platform in action. Schedule a personalized demo today.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl font-semibold text-white hover:from-red-700 hover:to-orange-700 transition-all duration-300"
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