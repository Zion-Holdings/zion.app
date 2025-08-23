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
  Waves, Zap, BrainCircuit, CpuIcon, MonitorHeart
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Brain-Computer Interface | Zion Tech Group',
  description: 'Advanced brain-computer interface technology for neural control and cognitive enhancement.',
  keywords: 'brain-computer interface, BCI, neural interface, cognitive enhancement, brain technology',
  openGraph: {
    title: 'Brain-Computer Interface | Zion Tech Group',
    description: 'Advanced brain-computer interface technology for neural control and cognitive enhancement.',
    url: 'https://ziontechgroup.com/brain-computer-interface',
    siteName: 'Zion Tech Group',
    images: [
      {
        url: 'https://ziontechgroup.com/og-image-brain-interface.jpg',
        width: 1200,
        height: 630,
        alt: 'Brain-Computer Interface',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brain-Computer Interface | Zion Tech Group',
    description: 'Advanced brain-computer interface technology for neural control and cognitive enhancement.',
    images: ['https://ziontechgroup.com/og-image-brain-interface.jpg'],
  },
  alternates: {
    canonical: 'https://ziontechgroup.com/brain-computer-interface',
  },
};

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export default function BrainComputerInterface() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-rose-900/20 to-red-900/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-500/20 border border-pink-500/30 text-pink-300 text-sm font-medium mb-8">
              <Brain className="w-4 h-4 mr-2" />
              Neural Interface Technology
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-rose-400 to-red-400 bg-clip-text text-transparent">
              Brain-Computer Interface
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionize human-computer interaction with advanced brain-computer interface technology 
              that enables direct neural control and cognitive enhancement.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-600 to-rose-600 rounded-xl font-semibold text-white hover:from-pink-700 hover:to-rose-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="#features" 
                className="inline-flex items-center px-8 py-4 border border-pink-500/30 rounded-xl font-semibold text-pink-300 hover:bg-pink-500/10 transition-all duration-300"
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
              Revolutionary Neural Technology
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our brain-computer interface platform provides advanced neural control and cognitive 
              enhancement capabilities for the future of human-computer interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-900/20 to-rose-900/20 border border-pink-500/20">
              <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Neural Signal Processing</h3>
              <p className="text-gray-400">
                Advanced algorithms for processing and interpreting brain signals in real-time.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-rose-900/20 to-red-900/20 border border-rose-500/20">
              <div className="w-12 h-12 bg-rose-500/20 rounded-xl flex items-center justify-center mb-4">
                <Waves className="w-6 h-6 text-rose-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Brain Wave Analysis</h3>
              <p className="text-gray-400">
                Comprehensive analysis of brain wave patterns for cognitive state assessment.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/20">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Neural Stimulation</h3>
              <p className="text-gray-400">
                Precise neural stimulation for therapeutic and enhancement applications.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-900/20 to-yellow-900/20 border border-orange-500/20">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4">
                <CpuIcon className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cognitive Enhancement</h3>
              <p className="text-gray-400">
                AI-powered cognitive enhancement for improved memory, focus, and learning.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-yellow-900/20 to-green-900/20 border border-yellow-500/20">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-4">
                <MonitorHeart className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Health Monitoring</h3>
              <p className="text-gray-400">
                Continuous monitoring of brain health and cognitive function metrics.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/20">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                <BrainCircuit className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Neural Control</h3>
              <p className="text-gray-400">
                Direct neural control of devices and applications through thought commands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BCI Capabilities Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Brain-Computer Interface Capabilities
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our platform provides comprehensive BCI solutions for various applications and use cases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-900/20 to-rose-900/20 border border-pink-500/20">
              <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-pink-400">Signal Acquisition</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• EEG signal processing</li>
                <li>• Neural spike detection</li>
                <li>• Brain wave analysis</li>
                <li>• Signal filtering</li>
                <li>• Noise reduction</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-rose-900/20 to-red-900/20 border border-rose-500/20">
              <div className="w-12 h-12 bg-rose-500/20 rounded-xl flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6 text-rose-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-rose-400">AI Processing</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Machine learning algorithms</li>
                <li>• Pattern recognition</li>
                <li>• Neural network models</li>
                <li>• Real-time analysis</li>
                <li>• Adaptive learning</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/20">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-red-400">Neural Control</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Device control</li>
                <li>• Application interface</li>
                <li>• Command execution</li>
                <li>• Feedback systems</li>
                <li>• Calibration tools</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-900/20 to-yellow-900/20 border border-orange-500/20">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4">
                <MonitorHeart className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-orange-400">Health Monitoring</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Cognitive assessment</li>
                <li>• Brain health metrics</li>
                <li>• Performance tracking</li>
                <li>• Alert systems</li>
                <li>• Data analytics</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-yellow-900/20 to-green-900/20 border border-yellow-500/20">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Analytics & Insights</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Performance metrics</li>
                <li>• Cognitive trends</li>
                <li>• User behavior analysis</li>
                <li>• Predictive modeling</li>
                <li>• Research tools</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/20">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-green-400">Integration & APIs</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Third-party applications</li>
                <li>• Research platforms</li>
                <li>• Healthcare systems</li>
                <li>• Gaming interfaces</li>
                <li>• IoT devices</li>
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
              How Brain-Computer Interface Works
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our platform provides a seamless connection between the human brain and computer systems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-pink-400">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Signal Detection</h3>
              <p className="text-gray-400">
                Advanced sensors detect and capture brain signals and neural activity.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-rose-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-rose-400">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Processing</h3>
              <p className="text-gray-400">
                Machine learning algorithms process and interpret neural signals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-400">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Command Generation</h3>
              <p className="text-gray-400">
                System generates computer commands based on interpreted brain signals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-400">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Execution & Feedback</h3>
              <p className="text-gray-400">
                Commands are executed with real-time feedback to the user.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Brain-Computer Interface Applications
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our platform serves various sectors with tailored BCI solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-900/20 to-rose-900/20 border border-pink-500/20">
              <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Healthcare</h3>
              <p className="text-gray-400">
                Assistive technology for individuals with disabilities and neurological conditions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-rose-900/20 to-red-900/20 border border-rose-500/20">
              <div className="w-12 h-12 bg-rose-500/20 rounded-xl flex items-center justify-center mb-4">
                <Building className="w-6 h-6 text-rose-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Research</h3>
              <p className="text-gray-400">
                Advanced research tools for neuroscience and cognitive science studies.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/20">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Gaming & Entertainment</h3>
              <p className="text-gray-400">
                Immersive gaming experiences with direct neural control and interaction.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-900/20 to-yellow-900/20 border border-orange-500/20">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Education</h3>
              <p className="text-gray-400">
                Enhanced learning experiences with cognitive enhancement and focus tools.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-yellow-900/20 to-green-900/20 border border-yellow-500/20">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Military & Defense</h3>
              <p className="text-gray-400">
                Advanced control systems for military applications and defense technology.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/20">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4">
                <RefreshCw className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Rehabilitation</h3>
              <p className="text-gray-400">
                Therapeutic applications for physical and cognitive rehabilitation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-900/20 via-rose-900/20 to-red-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Explore the Future of Neural Technology?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the revolution in brain-computer interface technology where mind meets machine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-600 to-rose-600 rounded-xl font-semibold text-white hover:from-pink-700 hover:to-rose-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a 
              href={`tel:${contactInfo.mobile}`}
              className="inline-flex items-center px-8 py-4 border border-pink-500/30 rounded-xl font-semibold text-pink-300 hover:bg-pink-500/10 transition-all duration-300"
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
                Ready to explore brain-computer interface technology? Our team is here to help you get started.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-pink-400" />
                  <a href={`tel:${contactInfo.mobile}`} className="text-gray-300 hover:text-white transition-colors">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-pink-400" />
                  <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-white transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-pink-400" />
                  <span className="text-gray-300">{contactInfo.address}</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-900/20 to-rose-900/20 rounded-2xl p-8 border border-pink-500/20">
              <h3 className="text-xl font-semibold mb-4">Request a Consultation</h3>
              <p className="text-gray-400 mb-6">
                Let's discuss your brain-computer interface needs. Schedule a consultation with our team today.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-600 to-rose-600 rounded-xl font-semibold text-white hover:from-pink-700 hover:to-rose-700 transition-all duration-300"
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