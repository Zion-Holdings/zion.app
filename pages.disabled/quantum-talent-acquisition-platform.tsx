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
  TrendingUp, Shield, Globe, Database, Network, User,
  Search, Eye, Heart, Award, Users2, Building,
  Calendar, Clock, Target, BarChart3, TrendingUp, Shield
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Quantum Talent Acquisition Platform | Zion Tech Group',
  description: 'Revolutionary quantum-powered talent acquisition platform with AI-driven recruitment, candidate matching, and intelligent hiring solutions.',
  keywords: 'quantum talent acquisition, AI recruitment, talent matching, quantum hiring platform, recruitment automation, AI talent acquisition, quantum recruitment',
  openGraph: {
    title: 'Quantum Talent Acquisition Platform | Zion Tech Group',
    description: 'Revolutionary quantum-powered talent acquisition platform with AI-driven recruitment, candidate matching, and intelligent hiring solutions.',
    url: 'https://ziontechgroup.com/quantum-talent-acquisition-platform',
    siteName: 'Zion Tech Group',
    images: [
      {
        url: 'https://ziontechgroup.com/og-image-quantum-talent.jpg',
        width: 1200,
        height: 630,
        alt: 'Quantum Talent Acquisition Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quantum Talent Acquisition Platform | Zion Tech Group',
    description: 'Revolutionary quantum-powered talent acquisition platform with AI-driven recruitment, candidate matching, and intelligent hiring solutions.',
    images: ['https://ziontechgroup.com/og-image-quantum-talent.jpg'],
  },
  alternates: {
    canonical: 'https://ziontechgroup.com/quantum-talent-acquisition-platform',
  },
};

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export default function QuantumTalentAcquisitionPlatform() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-emerald-900/20 to-teal-900/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 text-sm font-medium mb-8">
              <Users className="w-4 h-4 mr-2" />
              Quantum Talent Acquisition
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Quantum Talent Acquisition Platform
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the future of talent acquisition with our revolutionary quantum-powered 
              platform featuring AI-driven recruitment and intelligent candidate matching.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl font-semibold text-white hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
              >
                Find Talent
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
              Revolutionary Talent Intelligence
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our quantum talent acquisition platform combines cutting-edge quantum computing with 
              AI-driven recruitment for unprecedented hiring efficiency and candidate quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/20">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                <Atom className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quantum Matching</h3>
              <p className="text-gray-400">
                Advanced quantum algorithms for precise candidate-job matching and compatibility analysis.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-500/20">
              <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI-Powered Recruitment</h3>
              <p className="text-gray-400">
                Intelligent algorithms that automate and optimize every aspect of the hiring process.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-900/20 to-cyan-900/20 border border-teal-500/20">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Sourcing</h3>
              <p className="text-gray-400">
                Automated candidate sourcing from multiple channels with intelligent filtering.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/20">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Predictive Analytics</h3>
              <p className="text-gray-400">
                Advanced forecasting for hiring success, retention, and candidate performance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/20">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Candidate Insights</h3>
              <p className="text-gray-400">
                Deep analysis of candidate skills, experience, and cultural fit.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/20">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Reach</h3>
              <p className="text-gray-400">
                Worldwide talent pool access with multi-language and cultural intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Talent Acquisition Capabilities Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Talent Acquisition Capabilities
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our platform provides comprehensive talent acquisition solutions powered by quantum computing and AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/20">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-green-400">Candidate Sourcing</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Multi-channel sourcing</li>
                <li>• Passive candidate discovery</li>
                <li>• Social media integration</li>
                <li>• Referral management</li>
                <li>• Database mining</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-500/20">
              <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-teal-400">Job Matching</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Skills assessment</li>
                <li>• Experience matching</li>
                <li>• Cultural fit analysis</li>
                <li>• Location optimization</li>
                <li>• Salary alignment</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-900/20 to-cyan-900/20 border border-teal-500/20">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-cyan-400">Recruitment Process</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Application screening</li>
                <li>• Interview scheduling</li>
                <li>• Assessment automation</li>
                <li>• Reference checking</li>
                <li>• Offer management</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/20">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-400">Analytics & Reporting</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Hiring metrics</li>
                <li>• Time-to-fill analysis</li>
                <li>• Cost-per-hire tracking</li>
                <li>• Source effectiveness</li>
                <li>• Performance predictions</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/20">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-indigo-400">Workflow Automation</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Process automation</li>
                <li>• Task assignment</li>
                <li>• Approval workflows</li>
                <li>• Integration APIs</li>
                <li>• Custom workflows</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/20">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-purple-400">Compliance & Security</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Data protection</li>
                <li>• Privacy compliance</li>
                <li>• Audit trails</li>
                <li>• Access controls</li>
                <li>• Regulatory adherence</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Talent Acquisition Applications Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Talent Acquisition Applications & Industries
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our quantum talent acquisition platform serves diverse industries and hiring needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/20">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                <Building className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Enterprise Companies</h3>
              <p className="text-gray-400">
                Large-scale recruitment, corporate hiring, and talent pipeline management.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-500/20">
              <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Technology & Startups</h3>
              <p className="text-gray-400">
                Tech talent acquisition, startup hiring, and specialized skill matching.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-900/20 to-cyan-900/20 border border-teal-500/20">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Healthcare & Pharma</h3>
              <p className="text-gray-400">
                Medical professionals, clinical staff, and healthcare talent acquisition.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/20">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                <Factory className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Manufacturing & Engineering</h3>
              <p className="text-gray-400">
                Technical talent, skilled workers, and engineering professionals.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/20">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Financial Services</h3>
              <p className="text-gray-400">
                Banking professionals, financial analysts, and compliance specialists.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/20">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Consulting & Services</h3>
              <p className="text-gray-400">
                Professional services, consulting talent, and client-facing roles.
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
              How Quantum Talent Acquisition Works
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our platform seamlessly integrates quantum computing with advanced talent acquisition analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-400">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Job Analysis</h3>
              <p className="text-gray-400">
                AI analyzes job requirements and creates detailed candidate profiles.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-400">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quantum Matching</h3>
              <p className="text-gray-400">
                Quantum algorithms process candidate data for optimal job matching.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-teal-400">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Assessment</h3>
              <p className="text-gray-400">
                AI evaluates candidates and ranks them by suitability and fit.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-cyan-400">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Intelligent Hiring</h3>
              <p className="text-gray-400">
                System provides hiring recommendations and automates recruitment processes.
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
              Talent Acquisition Use Cases
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our platform serves various recruitment scenarios with tailored talent acquisition solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/20">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">High-Volume Hiring</h3>
              <p className="text-gray-400">
                Mass recruitment campaigns with automated screening and candidate management.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-500/20">
              <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Passive Candidate Sourcing</h3>
              <p className="text-gray-400">
                Intelligent discovery of qualified candidates not actively seeking jobs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-900/20 to-cyan-900/20 border border-teal-500/20">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Diversity Hiring</h3>
              <p className="text-gray-400">
                Bias-free recruitment with focus on diverse talent pools and inclusion.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/20">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Talent Pipeline Management</h3>
              <p className="text-gray-400">
                Building and maintaining relationships with potential future candidates.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/20">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Time-to-Fill Optimization</h3>
              <p className="text-gray-400">
                Reducing hiring time through streamlined processes and better candidate matching.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/20">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality of Hire</h3>
              <p className="text-gray-400">
                Improving candidate quality through better assessment and matching algorithms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-900/20 via-emerald-900/20 to-teal-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready for Quantum Talent Acquisition?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Experience the future of talent acquisition with our revolutionary quantum platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl font-semibold text-white hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
            >
              Find Talent
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
                Ready to revolutionize your talent acquisition? Our team is here to help.
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

            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-2xl p-8 border border-green-500/20">
              <h3 className="text-xl font-semibold mb-4">Talent Acquisition Consultation</h3>
              <p className="text-gray-400 mb-6">
                Let's discuss your hiring challenges and how quantum AI can transform your talent acquisition.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl font-semibold text-white hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
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