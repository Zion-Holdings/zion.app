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
  TrendingUp, Shield, Globe, Database, Network, Wallet,
  CreditCard, PiggyBank, Building2, Activity, BarChart3,
  TrendingUp, Shield, Lock, Eye, Server, Cloud
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Quantum Risk Financial Manager | Zion Tech Group',
  description: 'Revolutionary quantum-powered financial risk management platform with AI-driven analysis, real-time monitoring, and predictive risk assessment.',
  keywords: 'quantum risk financial manager, AI risk management, financial risk assessment, quantum finance, risk analytics, financial security, quantum risk modeling',
  openGraph: {
    title: 'Quantum Risk Financial Manager | Zion Tech Group',
    description: 'Revolutionary quantum-powered financial risk management platform with AI-driven analysis, real-time monitoring, and predictive risk assessment.',
    url: 'https://ziontechgroup.com/quantum-risk-financial-manager',
    siteName: 'Zion Tech Group',
    images: [
      {
        url: 'https://ziontechgroup.com/og-image-quantum-risk-financial.jpg',
        width: 1200,
        height: 630,
        alt: 'Quantum Risk Financial Manager',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quantum Risk Financial Manager | Zion Tech Group',
    description: 'Revolutionary quantum-powered financial risk management platform with AI-driven analysis, real-time monitoring, and predictive risk assessment.',
    images: ['https://ziontechgroup.com/og-image-quantum-risk-financial.jpg'],
  },
  alternates: {
    canonical: 'https://ziontechgroup.com/quantum-risk-financial-manager',
  },
};

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export default function QuantumRiskFinancialManager() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-teal-900/20 to-cyan-900/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-sm font-medium mb-8">
              <Wallet className="w-4 h-4 mr-2" />
              Quantum Risk Management
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Quantum Risk Financial Manager
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the future of financial risk management with our revolutionary quantum-powered 
              platform featuring AI-driven analysis and predictive risk assessment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl font-semibold text-white hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105"
              >
                Manage Risk
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="#features" 
                className="inline-flex items-center px-8 py-4 border border-emerald-500/30 rounded-xl font-semibold text-emerald-300 hover:bg-emerald-500/10 transition-all duration-300"
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
              Revolutionary Financial Risk Intelligence
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our quantum risk financial manager combines cutting-edge quantum computing with 
              AI-driven analysis for unprecedented risk assessment and financial security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-500/20">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4">
                <Atom className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quantum Analysis</h3>
              <p className="text-gray-400">
                Advanced quantum algorithms for complex financial risk calculations and modeling.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-900/20 to-cyan-900/20 border border-teal-500/20">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Risk Assessment</h3>
              <p className="text-gray-400">
                Intelligent algorithms that identify and analyze financial risks in real-time.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/20">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Predictive Modeling</h3>
              <p className="text-gray-400">
                Advanced predictive models for forecasting financial risks and market trends.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/20">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-Time Monitoring</h3>
              <p className="text-gray-400">
                Continuous monitoring of financial markets and risk indicators.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/20">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Risk Mitigation</h3>
              <p className="text-gray-400">
                Advanced strategies for risk mitigation and portfolio protection.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20">
              <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Coverage</h3>
              <p className="text-gray-400">
                Worldwide financial markets and comprehensive risk assessment coverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Management Capabilities Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Risk Management Capabilities
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our platform provides comprehensive financial risk management solutions powered by quantum computing and AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-500/20">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-emerald-400">Market Risk Analysis</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Volatility modeling</li>
                <li>• Value at Risk (VaR)</li>
                <li>• Stress testing</li>
                <li>• Scenario analysis</li>
                <li>• Market correlation</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-900/20 to-cyan-900/20 border border-teal-500/20">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
                <CreditCard className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-cyan-400">Credit Risk Management</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Default probability</li>
                <li>• Credit scoring</li>
                <li>• Portfolio analysis</li>
                <li>• Exposure limits</li>
                <li>• Recovery rates</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/20">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                <PiggyBank className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-400">Operational Risk</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Process failures</li>
                <li>• System risks</li>
                <li>• Human error</li>
                <li>• External events</li>
                <li>• Compliance risks</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/20">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-indigo-400">Liquidity Risk</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Cash flow analysis</li>
                <li>• Funding risk</li>
                <li>• Asset liquidity</li>
                <li>• Market depth</li>
                <li>• Contingency planning</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/20">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-purple-400">Compliance & Regulatory</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Regulatory reporting</li>
                <li>• Compliance monitoring</li>
                <li>• Audit support</li>
                <li>• Policy enforcement</li>
                <li>• Risk governance</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20">
              <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-pink-400">Risk Operations</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Risk automation</li>
                <li>• Workflow management</li>
                <li>• Alert systems</li>
                <li>• Integration APIs</li>
                <li>• Custom workflows</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Applications Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Financial Applications & Industries
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our quantum risk financial manager serves diverse financial institutions and risk management needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-500/20">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4">
                <Building className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Commercial Banks</h3>
              <p className="text-gray-400">
                Retail banking, commercial lending, and comprehensive risk management solutions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-900/20 to-cyan-900/20 border border-teal-500/20">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
                <Wallet className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Investment Banks</h3>
              <p className="text-gray-400">
                Trading operations, investment management, and market risk assessment.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/20">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Asset Management</h3>
              <p className="text-gray-400">
                Portfolio management, risk assessment, and investment strategy optimization.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/20">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-4">
                <Cloud className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fintech & Digital Banks</h3>
              <p className="text-gray-400">
                Digital banking platforms, mobile financial services, and innovative risk solutions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/20">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Insurance Companies</h3>
              <p className="text-gray-400">
                Underwriting risk, claims management, and actuarial risk assessment.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20">
              <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-4">
                <Factory className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Corporate Finance</h3>
              <p className="text-gray-400">
                Corporate risk management, treasury operations, and financial planning.
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
              How Quantum Risk Management Works
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our platform seamlessly integrates quantum computing with advanced financial risk analysis.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-400">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Data Collection</h3>
              <p className="text-gray-400">
                AI systems collect and analyze financial market data and risk indicators.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-teal-400">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quantum Analysis</h3>
              <p className="text-gray-400">
                Quantum algorithms process complex financial data and risk calculations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-cyan-400">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Risk Assessment</h3>
              <p className="text-gray-400">
                AI evaluates risks and generates comprehensive risk assessment reports.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-400">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Risk Mitigation</h3>
              <p className="text-gray-400">
                System provides actionable insights and risk mitigation strategies.
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
              Risk Management Use Cases
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our platform serves various financial risk scenarios with tailored management solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-500/20">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Portfolio Risk Management</h3>
              <p className="text-gray-400">
                Comprehensive portfolio risk assessment and optimization strategies.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-900/20 to-cyan-900/20 border border-teal-500/20">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Credit Risk Assessment</h3>
              <p className="text-gray-400">
                Advanced credit risk modeling and default probability analysis.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/20">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                <Cloud className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Market Risk Analysis</h3>
              <p className="text-gray-400">
                Real-time market risk monitoring and volatility analysis.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/20">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-4">
                <Wifi className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Operational Risk Monitoring</h3>
              <p className="text-gray-400">
                Continuous monitoring of operational risks and process failures.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/20">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                <Activity className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Regulatory Compliance</h3>
              <p className="text-gray-400">
                Automated compliance monitoring and regulatory reporting.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20">
              <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fraud Detection</h3>
              <p className="text-gray-400">
                Advanced fraud detection and financial crime prevention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-900/20 via-teal-900/20 to-cyan-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready for Quantum Risk Management?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Experience the future of financial risk management with our revolutionary quantum platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl font-semibold text-white hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105"
            >
              Manage Risk
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a 
              href={`tel:${contactInfo.mobile}`}
              className="inline-flex items-center px-8 py-4 border border-emerald-500/30 rounded-xl font-semibold text-emerald-300 hover:bg-emerald-500/10 transition-all duration-300"
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
                Ready to revolutionize your financial risk management? Our team is here to help.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-emerald-400" />
                  <a href={`tel:${contactInfo.mobile}`} className="text-gray-300 hover:text-white transition-colors">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-emerald-400" />
                  <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-white transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-emerald-400" />
                  <span className="text-gray-300">{contactInfo.address}</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 rounded-2xl p-8 border border-emerald-500/20">
              <h3 className="text-xl font-semibold mb-4">Risk Management Consultation</h3>
              <p className="text-gray-400 mb-6">
                Let's discuss your financial risk management needs and how quantum technology can protect your assets.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl font-semibold text-white hover:from-emerald-700 hover:to-teal-700 transition-all duration-300"
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