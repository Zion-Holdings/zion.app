import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Brain, Zap, Target, BarChart3, Users, TrendingUp, 
  MessageSquare, Mail, Phone, MapPin, ArrowRight,
  Star, CheckCircle, Rocket, Globe, Shield, Cpu,
  Settings, Workflow, Clock, Database, Cloud,
  Bot, Cpu as CpuIcon, Eye, Hand
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Autonomous Robotics Platform | Zion Tech Group',
  description: 'Revolutionary AI-powered autonomous robotics platform that manages and coordinates robotic systems.',
  keywords: 'AI robotics, autonomous robotics, robotic automation, AI robot management, robotics platform',
  openGraph: {
    title: 'AI Autonomous Robotics Platform | Zion Tech Group',
    description: 'Revolutionary AI-powered autonomous robotics platform that manages and coordinates robotic systems.',
    url: 'https://ziontechgroup.com/ai-autonomous-robotics-platform',
    siteName: 'Zion Tech Group',
    images: [
      {
        url: 'https://ziontechgroup.com/og-image-ai-autonomous-robotics-platform.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Autonomous Robotics Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Autonomous Robotics Platform | Zion Tech Group',
    description: 'Revolutionary AI-powered autonomous robotics platform that manages and coordinates robotic systems.',
    images: ['https://ziontechgroup.com/og-image-ai-autonomous-robotics-platform.jpg'],
  },
  alternates: {
    canonical: 'https://ziontechgroup.com/ai-autonomous-robotics-platform',
  },
};

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export default function AIAutonomousRoboticsPlatform() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-indigo-900/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-medium mb-8">
              <Bot className="w-4 h-4 mr-2" />
              AI-Powered Robotics Revolution
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              AI Autonomous Robotics Platform
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              The world's first truly autonomous robotics platform where AI manages, coordinates, and optimizes 
              robotic systems across all industries without human intervention.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl font-semibold text-white hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="#features" 
                className="inline-flex items-center px-8 py-4 border border-cyan-500/30 rounded-xl font-semibold text-cyan-300 hover:bg-cyan-500/10 transition-all duration-300"
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
              Revolutionary Autonomous Robotics
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI robotics platform handles every aspect of robotic operations from coordination to execution, 
              continuously learning and optimizing for maximum efficiency and safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/20">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Intelligence</h3>
              <p className="text-gray-400">
                Advanced AI that understands robotic capabilities, task requirements, and optimization opportunities.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/20">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                <Bot className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Autonomous Coordination</h3>
              <p className="text-gray-400">
                Coordinates multiple robotic systems automatically, ensuring optimal task distribution and execution.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/20">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Continuous Learning</h3>
              <p className="text-gray-400">
                Learns from every robotic operation and continuously optimizes performance and safety protocols.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Advanced Perception</h3>
              <p className="text-gray-400">
                Multi-modal sensing and perception for safe navigation and interaction in complex environments.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-900/20 to-red-900/20 border border-pink-500/20">
              <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-4">
                <Hand className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Precise Manipulation</h3>
              <p className="text-gray-400">
                Advanced manipulation capabilities for handling delicate tasks and complex operations.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/20">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Performance Analytics</h3>
              <p className="text-gray-400">
                Real-time monitoring and analytics for robotic performance, efficiency, and predictive maintenance.
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
              How Autonomous Robotics Works
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI robotics platform operates in a continuous cycle of learning, planning, and executing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-cyan-400">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Task Analysis</h3>
              <p className="text-gray-400">
                AI analyzes task requirements, environment conditions, and available robotic resources.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-400">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Strategic Planning</h3>
              <p className="text-gray-400">
                Generates optimal robotic task plans considering safety, efficiency, and resource constraints.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-400">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Autonomous Execution</h3>
              <p className="text-gray-400">
                Robots execute tasks autonomously with real-time monitoring and adaptive behavior.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-400">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Continuous Optimization</h3>
              <p className="text-gray-400">
                Learns from every operation and continuously improves robotic performance and safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Robotics Applications
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI robotics platform serves diverse industries with specialized robotic solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/20">
              <h3 className="text-xl font-semibold mb-3 text-cyan-400">Manufacturing</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Assembly automation</li>
                <li>• Quality inspection</li>
                <li>• Material handling</li>
                <li>• Process optimization</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/20">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">Healthcare</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Surgical assistance</li>
                <li>• Patient care</li>
                <li>• Medical logistics</li>
                <li>• Rehabilitation support</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/20">
              <h3 className="text-xl font-semibold mb-3 text-indigo-400">Logistics</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Warehouse automation</li>
                <li>• Order fulfillment</li>
                <li>• Inventory management</li>
                <li>• Last-mile delivery</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20">
              <h3 className="text-xl font-semibold mb-3 text-purple-400">Agriculture</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Crop monitoring</li>
                <li>• Precision farming</li>
                <li>• Harvest automation</li>
                <li>• Soil analysis</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-900/20 to-red-900/20 border border-pink-500/20">
              <h3 className="text-xl font-semibold mb-3 text-pink-400">Construction</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Site surveying</li>
                <li>• Material placement</li>
                <li>• Safety monitoring</li>
                <li>• Quality control</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/20">
              <h3 className="text-xl font-semibold mb-3 text-red-400">Research</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Laboratory automation</li>
                <li>• Data collection</li>
                <li>• Experiment execution</li>
                <li>• Sample analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 via-blue-900/20 to-indigo-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Experience Autonomous Robotics?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the future of robotics where AI manages your robotic workforce while you focus on strategic growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl font-semibold text-white hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a 
              href={`tel:${contactInfo.mobile}`}
              className="inline-flex items-center px-8 py-4 border border-cyan-500/30 rounded-xl font-semibold text-cyan-300 hover:bg-cyan-500/10 transition-all duration-300"
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
                Ready to revolutionize your operations with AI robotics? Our team is here to help you get started.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <a href={`tel:${contactInfo.mobile}`} className="text-gray-300 hover:text-white transition-colors">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-white transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">{contactInfo.address}</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-2xl p-8 border border-cyan-500/20">
              <h3 className="text-xl font-semibold mb-4">Request a Demo</h3>
              <p className="text-gray-400 mb-6">
                See our AI Autonomous Robotics Platform in action. Schedule a personalized demo today.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl font-semibold text-white hover:from-cyan-700 hover:to-blue-700 transition-all duration-300"
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