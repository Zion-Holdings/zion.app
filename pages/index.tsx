import React from 'react';
import Head from 'next/head';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import EnhancedFuturisticBackground from '../components/ui/EnhancedFuturisticBackground';
import EnhancedFuturisticCard from '../components/ui/EnhancedFuturisticCard';
import AdvancedFuturisticBackground from '../components/ui/AdvancedFuturisticBackground';
import AdvancedFuturisticCard from '../components/ui/AdvancedFuturisticCard';
import { Cloud, Bot, RefreshCw, Zap, Shield, BarChart3, ArrowRight, Check, ExternalLink, Star, Users, Globe, Lock, Rocket, Cpu, Database, TrendingUp, Clock, Target, Building, Award, DollarSign, ChartBar, Code, BookOpen, Activity, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, Settings, BookOpen as BookOpenIcon, Activity as ActivityIcon, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Sparkles, Atom, Brain, Eye, Shield as ShieldIcon, Zap as ZapIcon, Globe as GlobeIcon, Cpu as CpuIcon, Cloud as CloudIcon, Bot as BotIcon, Lock as LockIcon, BarChart3 as BarChart3Icon, TrendingUp as TrendingUpIcon, Users as UsersIcon, Award as AwardIcon, Star as StarIcon, Check as CheckIcon, ArrowRight as ArrowRightIcon, ExternalLink as ExternalLinkIcon, Phone as PhoneIcon, Mail as MailIcon, MapPin as MapPinIcon, Trophy, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HomePage() {
  const heroStats = [
    { value: '300+', label: 'Real Micro SaaS Services', color: 'text-cyan-400' },
    { value: '99.9%', label: 'Uptime Guarantee', color: 'text-fuchsia-400' },
    { value: '21', label: 'Day Free Trials', color: 'text-blue-400' },
    { value: '24/7', label: 'AI Support', color: 'text-green-400' },
    { value: '$200M+', label: 'Market Value', color: 'text-yellow-400' },
    { value: '1000%+', label: 'Average ROI', color: 'text-purple-400' },
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const platformFeatures = [
    {
      icon: <Cloud className="w-8 h-8 text-white" />,
      title: '300+ Real Micro SaaS Services',
      description: 'Complete portfolio of fully functional micro SaaS tools with real implementations, not just mockups. Starting from $49/month with 21-day free trials.',
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      gradient: 'from-cyan-400 to-blue-500',
      price: 'Starting at $49/month',
      marketSize: '$45B+ global market',
      competitors: 'Salesforce, HubSpot, Adobe'
    },
    {
      icon: <Bot className="w-8 h-8 text-white" />,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI content generation, quantum AI training, biomedical research, legal contract analysis, and quantum computing platforms. Market-leading technology with 1000%+ average ROI.',
      color: 'bg-gradient-to-br from-fuchsia-500 to-purple-600',
      gradient: 'from-fuchsia-400 to-purple-500',
      price: 'Starting at $199/month',
      marketSize: '$200B+ global market',
      competitors: 'OpenAI, Google AI, Microsoft AI'
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-white" />,
      title: 'Enterprise Reliability',
      description: '99.9% uptime guarantee, automated scaling, and intelligent resource management. Trusted by Fortune 500 companies worldwide.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      gradient: 'from-green-400 to-emerald-500',
      price: 'Starting at $299/month',
      marketSize: '$100B+ global market',
      competitors: 'AWS, Azure, Google Cloud'
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'Lightning Fast Setup',
      description: 'Get started in minutes with our intuitive interfaces and automated onboarding. No technical expertise required.',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      gradient: 'from-orange-400 to-red-500',
      price: 'Starting at $99/month',
      marketSize: '$25B+ global market',
      competitors: 'Shopify, Wix, Squarespace'
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Bank-Level Security',
      description: 'SOC 2 compliance, quantum-resistant encryption, and automated security monitoring. Future-proof protection against quantum threats.',
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      gradient: 'from-indigo-400 to-purple-500',
      price: 'Starting at $399/month',
      marketSize: '$150B+ global market',
      competitors: 'CrowdStrike, Palo Alto, Fortinet'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: 'Transparent Pricing',
      description: 'No hidden fees, simple monthly pricing that scales with your business needs. Competitive rates starting at $49/month.',
      color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      gradient: 'from-teal-400 to-cyan-500',
      price: 'Starting at $49/month',
      marketSize: '$50B+ global market',
      competitors: 'Stripe, PayPal, Square'
    },
  ];

  const technologyStack = [
    { name: 'Next.js 14', category: 'Framework', icon: '⚡', description: 'Latest React framework with App Router' },
    { name: 'React 18', category: 'Library', icon: '⚛️', description: 'Concurrent features and Suspense' },
    { name: 'TypeScript 5', category: 'Language', icon: '📘', description: 'Type-safe development' },
    { name: 'Tailwind CSS 3', category: 'Styling', icon: '🎨', description: 'Utility-first CSS framework' },
    { name: 'Node.js 20', category: 'Runtime', icon: '🟢', description: 'Latest LTS version' },
    { name: 'PostgreSQL 16', category: 'Database', icon: '🐘', description: 'Advanced open-source database' },
    { name: 'Redis 7', category: 'Cache', icon: '🔴', description: 'In-memory data structure store' },
    { name: 'Docker', category: 'Containerization', icon: '🐳', description: 'Application containerization' },
    { name: 'Kubernetes', category: 'Orchestration', icon: '☸️', description: 'Container orchestration' },
    { name: 'AWS', category: 'Cloud', icon: '☁️', description: 'Leading cloud platform' },
    { name: 'Terraform', category: 'Infrastructure', icon: '🏗️', description: 'Infrastructure as code' },
    { name: 'Prometheus', category: 'Monitoring', icon: '📊', description: 'Metrics and alerting' },
  ];

  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Automation',
      description: 'Intelligent systems that learn, adapt, and optimize your business processes automatically.',
      color: 'bg-gradient-to-br from-fuchsia-500 to-purple-600',
      textColor: 'text-fuchsia-400',
      gradient: 'from-fuchsia-400 to-purple-500',
      price: '$199/month',
      marketPosition: 'Leading AI automation platform'
    },
    {
      icon: '☁️',
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and high-performance cloud solutions designed for modern applications.',
      color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
      textColor: 'text-blue-400',
      gradient: 'from-blue-400 to-indigo-500',
      price: '$299/month',
      marketPosition: 'Enterprise cloud solutions'
    },
    {
      icon: '🔒',
      title: 'Cybersecurity',
      description: 'Advanced threat detection, prevention, and response systems for comprehensive protection.',
      color: 'bg-gradient-to-br from-red-500 to-pink-600',
      textColor: 'text-red-400',
      gradient: 'from-red-400 to-pink-500',
      price: '$399/month',
      marketPosition: 'Military-grade security'
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'Real-time insights and predictive analytics to drive data-driven decision making.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      gradient: 'from-green-400 to-emerald-500',
      price: '$149/month',
      marketPosition: 'Advanced analytics platform'
    },
    {
      icon: '⚛️',
      title: 'Quantum Computing',
      description: 'Next-generation quantum computing solutions for complex problem solving.',
      color: 'bg-gradient-to-br from-purple-500 to-violet-600',
      textColor: 'text-purple-400',
      gradient: 'from-purple-400 to-violet-500',
      price: '$799/month',
      marketPosition: 'First quantum SaaS platform'
    },
    {
      icon: '🧬',
      title: 'Biomedical AI',
      description: 'Revolutionary AI-powered biomedical research and drug discovery platform.',
      color: 'bg-gradient-to-br from-emerald-500 to-teal-600',
      textColor: 'text-emerald-400',
      gradient: 'from-emerald-400 to-teal-500',
      price: '$599/month',
      marketPosition: 'Leading biomedical AI platform'
    },
  ];

  const marketInsights = [
    {
      title: 'Micro SaaS Market Growth',
      value: '300%',
      description: 'Annual growth rate in the micro SaaS sector',
      color: 'text-green-400'
    },
    {
      title: 'AI Services Market',
      value: '$200B+',
      description: 'Global AI services market size',
      color: 'text-blue-400'
    },
    {
      title: 'Quantum Computing',
      value: '1000x',
      description: 'Performance improvement over classical computing',
      color: 'text-purple-400'
    },
    {
      title: 'ROI for Early Adopters',
      value: '1000%+',
      description: 'Average return on investment',
      color: 'text-yellow-400'
    }
  ];

  return (
    <AdvancedFuturisticBackground variant="quantum-holographic" intensity="high">
      <div className="min-h-screen bg-gray-900 text-white">
        <Head>
          <title>Zion Tech Group - Revolutionary Technology Solutions | 300+ Real Micro SaaS Services</title>
          <meta name="description" content="Discover 300+ real micro SaaS services, AI solutions, quantum computing, and revolutionary technology platforms. Starting at $49/month with 21-day free trials. Contact: +1 302 464 0950" />
          <meta name="keywords" content="micro SaaS, AI services, quantum computing, technology solutions, Zion Tech Group, kleber@ziontechgroup.com" />
          <meta name="author" content="Zion Tech Group" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://ziontechgroup.com" />
          
          {/* Open Graph */}
          <meta property="og:title" content="Zion Tech Group - Revolutionary Technology Solutions" />
          <meta property="og:description" content="300+ Real Micro SaaS Services, AI Solutions, Quantum Computing - Starting at $49/month" />
          <meta property="og:url" content="https://ziontechgroup.com" />
          <meta property="og:type" content="website" />
          
          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Zion Tech Group - Revolutionary Technology Solutions" />
          <meta name="twitter:description" content="300+ Real Micro SaaS Services, AI Solutions, Quantum Computing" />
        </Head>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="container mx-auto px-4 text-center z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mb-8"
            >
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionary Technology Solutions with{' '}
                <span className="text-cyan-400 font-bold">300+ Real Micro SaaS Services</span>
              </p>
              <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
                From AI-powered automation to quantum computing, discover the future of business technology. 
                Starting at <span className="text-green-400 font-bold">$49/month</span> with{' '}
                <span className="text-yellow-400 font-bold">21-day free trials</span>.
              </p>
            </motion.div>

            {/* Hero Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12"
            >
              {heroStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                href="/services"
                variant="primary"
                size="lg"
                className="text-lg px-8 py-4"
              >
                Explore 300+ Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="text-lg px-8 py-4"
              >
                Contact Sales
                <Phone className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="mt-12 p-6 bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-700/50"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <Phone className="w-6 h-6 text-cyan-400 mb-2" />
                  <div className="text-sm text-gray-400">Mobile</div>
                  <div className="text-white font-semibold">{contactInfo.mobile}</div>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-6 h-6 text-purple-400 mb-2" />
                  <div className="text-sm text-gray-400">Email</div>
                  <div className="text-white font-semibold">{contactInfo.email}</div>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-6 h-6 text-green-400 mb-2" />
                  <div className="text-sm text-gray-400">Address</div>
                  <div className="text-white font-semibold text-sm">{contactInfo.address}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Revolutionary Platform Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover why Fortune 500 companies trust Zion Tech Group for their technology needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {platformFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <AdvancedFuturisticCard
                    variant="quantum-holographic"
                    intensity="high"
                    className="h-full"
                  >
                    <div className="text-center">
                      <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                        {feature.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                      <p className="text-gray-300 mb-6">{feature.description}</p>
                      
                      {/* Market Information */}
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">Starting Price:</span>
                          <span className="text-green-400 font-semibold">{feature.price}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">Market Size:</span>
                          <span className="text-blue-400 font-semibold">{feature.marketSize}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">Competitors:</span>
                          <span className="text-purple-400 font-semibold">{feature.competitors}</span>
                        </div>
                      </div>
                    </div>
                  </AdvancedFuturisticCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 px-4 bg-gray-800/30">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Cutting-Edge Technology Stack
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Built with the latest technologies for maximum performance, security, and scalability
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {technologyStack.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <AdvancedFuturisticCard
                    variant="neural-cyberpunk"
                    intensity="medium"
                    className="text-center p-6"
                  >
                    <div className="text-4xl mb-4">{tech.icon}</div>
                    <h3 className="text-lg font-bold text-white mb-2">{tech.name}</h3>
                    <div className="text-sm text-gray-400 mb-2">{tech.category}</div>
                    <p className="text-xs text-gray-500">{tech.description}</p>
                  </AdvancedFuturisticCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Market Insights */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Market Insights & Growth
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Understanding the market dynamics and growth opportunities in the technology sector
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {marketInsights.map((insight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <AdvancedFuturisticCard
                    variant="quantum-holographic"
                    intensity="medium"
                    className="text-center p-8"
                  >
                    <div className={`text-5xl font-bold mb-4 ${insight.color}`}>
                      {insight.value}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{insight.title}</h3>
                    <p className="text-gray-300">{insight.description}</p>
                  </AdvancedFuturisticCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <AdvancedFuturisticCard
                variant="quantum-holographic"
                intensity="extreme"
                className="p-12"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Join thousands of companies already using Zion Tech Group's revolutionary technology solutions. 
                  Start your 21-day free trial today and experience the future of business technology.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <Button
                    href="/services"
                    variant="primary"
                    size="lg"
                    className="text-lg px-8 py-4"
                  >
                    Start Free Trial
                    <Play className="ml-2 w-5 h-5" />
                  </Button>
                  <Button
                    href="/contact"
                    variant="secondary"
                    size="lg"
                    className="text-lg px-8 py-4"
                  >
                    Schedule Demo
                    <Calendar className="ml-2 w-5 h-5" />
                  </Button>
                </div>

                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-4">Contact Information</div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                    <div>
                      <div className="text-gray-400">Mobile</div>
                      <div className="text-white font-semibold">{contactInfo.mobile}</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Email</div>
                      <div className="text-white font-semibold">{contactInfo.email}</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Website</div>
                      <div className="text-white font-semibold">{contactInfo.website}</div>
                    </div>
                  </div>
                </div>
              </AdvancedFuturisticCard>
            </motion.div>
          </div>
        </section>
      </div>
    </AdvancedFuturisticBackground>
  );
}
