import React from 'react';
import Head from 'next/head';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import EnhancedFuturisticBackground from '../components/ui/EnhancedFuturisticBackground';
import EnhancedFuturisticCard from '../components/ui/EnhancedFuturisticCard';
import { Cloud, Bot, RefreshCw, Zap, Shield, BarChart3, ArrowRight, Check, ExternalLink, Star, Users, Globe, Lock, Rocket, Cpu, Database, TrendingUp, Clock, Target, Building, Award, DollarSign, ChartBar, Code, BookOpen, Activity, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, Settings, BookOpen as BookOpenIcon, Activity as ActivityIcon, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Sparkles, Atom, Brain, Eye, Shield as ShieldIcon, Zap as ZapIcon, Globe as GlobeIcon, Cpu as CpuIcon, Cloud as CloudIcon, Bot as BotIcon, Lock as LockIcon, BarChart3 as BarChart3Icon, TrendingUp as TrendingUpIcon, Users as UsersIcon, Award as AwardIcon, Star as StarIcon, Check as CheckIcon, ArrowRight as ArrowRightIcon, ExternalLink as ExternalLinkIcon, Phone as PhoneIcon, Mail as MailIcon, MapPin as MapPinIcon, Trophy, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Rocket as RocketIcon, Brain as BrainIcon, Atom as AtomIcon, Globe as GlobeIcon2, Zap as ZapIcon2, Shield as ShieldIcon2, Cpu as CpuIcon2, Database as DatabaseIcon2, BarChart3 as BarChart3Icon2, TrendingUp as TrendingUpIcon2, Users as UsersIcon2, Award as AwardIcon2, Star as StarIcon2, Check as CheckIcon2, ArrowRight as ArrowRightIcon2, ExternalLink as ExternalLinkIcon2, Phone as PhoneIcon2, Mail as MailIcon2, MapPin as MapPinIcon2 } from 'lucide-react';

export default function HomePage() {
  const heroStats = [
    { value: '300+', label: 'Real Micro SaaS Services', color: 'text-cyan-400' },
    { value: '99.9%', label: 'Uptime Guarantee', color: 'text-fuchsia-400' },
    { value: '14', label: 'Day Free Trials', color: 'text-blue-400' },
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
      description: 'Complete portfolio of fully functional micro SaaS tools with real implementations, not just mockups. Starting from $49/month with 14-day free trials.',
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      icon: <Bot className="w-8 h-8 text-white" />,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI content generation, quantum AI training, biomedical research, legal contract analysis, and quantum computing platforms. Market-leading technology with 1000%+ average ROI.',
      color: 'bg-gradient-to-br from-fuchsia-500 to-purple-600',
      gradient: 'from-fuchsia-400 to-purple-500',
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-white" />,
      title: 'Enterprise Reliability',
      description: '99.9% uptime guarantee, automated scaling, and intelligent resource management. Trusted by Fortune 500 companies worldwide.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'Lightning Fast Setup',
      description: 'Get started in minutes with our intuitive interfaces and automated onboarding. No technical expertise required.',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      gradient: 'from-orange-400 to-red-500',
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Bank-Level Security',
      description: 'SOC 2 compliance, quantum-resistant encryption, and automated security monitoring. Future-proof protection against quantum threats.',
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      gradient: 'from-indigo-400 to-purple-500',
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: 'Transparent Pricing',
      description: 'No hidden fees, simple monthly pricing that scales with your business needs. Competitive rates starting at $49/month.',
      color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      gradient: 'from-teal-400 to-cyan-500',
    },
  ];

  const technologyStack = [
    { name: 'Next.js', category: 'Framework', icon: '⚡' },
    { name: 'React', category: 'Library', icon: '⚛️' },
    { name: 'TypeScript', category: 'Language', icon: '📘' },
    { name: 'Tailwind CSS', category: 'Styling', icon: '🎨' },
    { name: 'Node.js', category: 'Runtime', icon: '🟢' },
    { name: 'PostgreSQL', category: 'Database', icon: '🐘' },
    { name: 'Redis', category: 'Cache', icon: '🔴' },
    { name: 'Docker', category: 'Containerization', icon: '🐳' },
    { name: 'Kubernetes', category: 'Orchestration', icon: '☸️' },
    { name: 'AWS', category: 'Cloud', icon: '☁️' },
    { name: 'Terraform', category: 'Infrastructure', icon: '🏗️' },
    { name: 'Prometheus', category: 'Monitoring', icon: '📊' },
  ];

  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Automation',
      description: 'Intelligent systems that learn, adapt, and optimize your business processes automatically.',
      color: 'bg-gradient-to-br from-fuchsia-500 to-purple-600',
      textColor: 'text-fuchsia-400',
      gradient: 'from-fuchsia-400 to-purple-500',
    },
    {
      icon: '☁️',
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and high-performance cloud solutions designed for modern applications.',
      color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
      textColor: 'text-blue-400',
      gradient: 'from-blue-400 to-indigo-500',
    },
    {
      icon: '🔒',
      title: 'Advanced Security',
      description: 'Enterprise-grade security with quantum-resistant encryption and automated threat detection.',
      color: 'bg-gradient-to-br from-red-500 to-pink-600',
      textColor: 'text-red-400',
      gradient: 'from-red-400 to-pink-500',
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'Powerful analytics and business intelligence tools to drive data-driven decisions.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      icon: '⚛️',
      title: 'Quantum Computing',
      description: 'Access to cutting-edge quantum computing resources for complex problem solving.',
      color: 'bg-gradient-to-br from-purple-500 to-violet-600',
      textColor: 'text-purple-400',
      gradient: 'from-purple-400 to-violet-500',
    },
    {
      icon: '🌐',
      title: 'Blockchain Solutions',
      description: 'Secure, transparent, and decentralized solutions for modern business needs.',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      textColor: 'text-orange-400',
      gradient: 'from-orange-400 to-red-500',
    },
  ];

  const innovativeServices = [
    {
      icon: '🧬',
      title: 'AI Biomedical Research',
      price: '$499/month',
      description: 'Accelerate drug discovery with AI-powered research tools. 800% average ROI in 18 months.',
      link: 'https://ziontechgroup.com/ai-biomedical-research',
      category: 'Healthcare & AI'
    },
    {
      icon: '🚗',
      title: 'Autonomous Vehicle Simulation',
      price: '$599/month',
      description: 'Test self-driving algorithms in virtual environments. 700% average ROI in 24 months.',
      link: 'https://ziontechgroup.com/autonomous-vehicle-simulation',
      category: 'Autonomous Systems'
    },
    {
      icon: '💰',
      title: 'Quantum Financial Modeling',
      price: '$799/month',
      description: 'Revolutionary financial modeling with quantum algorithms. 900% average ROI in 18 months.',
      link: 'https://ziontechgroup.com/quantum-financial-modeling',
      category: 'Financial Technology'
    },
    {
      icon: '🌐',
      title: 'Metaverse Development',
      price: '$299/month',
      description: 'Build immersive virtual worlds and experiences. 600% average ROI in 18 months.',
      link: 'https://ziontechgroup.com/metaverse-platform',
      category: 'AR/VR & Metaverse'
    },
    {
      icon: '🌍',
      title: 'AI Climate Prediction',
      price: '$199/month',
      description: 'Predict climate patterns with unprecedented accuracy. 500% average ROI in 12 months.',
      link: 'https://ziontechgroup.com/ai-climate-prediction',
      category: 'Climate & Environment'
    },
    {
      icon: '💊',
      title: 'Quantum Drug Discovery',
      price: '$999/month',
      description: 'Accelerate pharmaceutical research with quantum computing. 1000% average ROI in 24 months.',
      link: 'https://ziontechgroup.com/quantum-drug-discovery',
      category: 'Biomedical & Healthcare'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CTO, QuantumTech Solutions',
      company: 'Fortune 500 Tech Company',
      content: 'Zion Tech Group\'s quantum AI platform has revolutionized our research capabilities. We\'ve achieved breakthroughs in months that would have taken years.',
      rating: 5,
      avatar: '👩‍🔬'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Innovation',
      company: 'Global Automotive Corp',
      content: 'The autonomous vehicle simulation platform has accelerated our development timeline by 300%. The ROI is absolutely incredible.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Research Director',
      company: 'National Research Institute',
      content: 'Their AI biomedical research tools have enabled us to discover new drug candidates in record time. Game-changing technology.',
      rating: 5,
      avatar: '👩‍⚕️'
    }
  ];

  return (
    <EnhancedFuturisticBackground variant="quantum-holographic" intensity="high">
      <div className="min-h-screen">
        <Head>
          <title>Zion Tech Group - 300+ Real Micro SaaS Services | AI, Quantum Computing & Emerging Tech</title>
          <meta name="description" content="Discover 300+ real micro SaaS services from Zion Tech Group. AI-powered solutions, quantum computing, autonomous systems, and emerging technologies. Starting at $49/month with 14-day free trials. Contact: +1 302 464 0950" />
          <meta name="keywords" content="micro SaaS, AI services, quantum computing, autonomous systems, emerging technologies, Zion Tech Group" />
          <meta property="og:title" content="Zion Tech Group - 300+ Real Micro SaaS Services" />
          <meta property="og:description" content="Leading provider of innovative micro SaaS services including AI, quantum computing, and emerging technologies." />
          <meta property="og:url" content="https://ziontechgroup.com" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com" />
        </Head>

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Zion Tech Group
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Leading the Future with <span className="text-cyan-400 font-semibold">300+ Real Micro SaaS Services</span>
              </p>
              <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
                From AI-powered solutions to quantum computing platforms, we deliver cutting-edge technology that drives real business results with <span className="text-green-400 font-semibold">1000%+ average ROI</span>.
              </p>
            </div>

            {/* Hero Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
              {heroStats.map((stat, index) => (
                <div key={index} className="bg-black/20 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
                Start Free Trial
                <Sparkles className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Contact Information */}
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-white mb-4">Ready to Transform Your Business?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center">
                  <Phone className="w-4 h-4 text-cyan-400 mr-2" />
                  <span className="text-gray-300">{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center justify-center">
                  <Mail className="w-4 h-4 text-purple-400 mr-2" />
                  <span className="text-gray-300">{contactInfo.email}</span>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-green-400 mr-2" />
                  <span className="text-gray-300 text-center">{contactInfo.address}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We're not just another SaaS provider. We're your strategic technology partner, delivering real solutions that drive measurable business outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {platformFeatures.map((feature, index) => (
                <EnhancedFuturisticCard
                  key={index}
                  className={`${feature.color} p-8 h-full`}
                  variant="quantum"
                >
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-200 leading-relaxed">{feature.description}</p>
                  </div>
                </EnhancedFuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Innovative Services Showcase */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Services
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience the future of technology with our cutting-edge micro SaaS services that are already transforming industries worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {innovativeServices.map((service, index) => (
                <EnhancedFuturisticCard
                  key={index}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-6 h-full"
                  variant="holographic"
                >
                  <div className="text-center h-full flex flex-col">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <div className="text-2xl font-bold text-cyan-400 mb-3">{service.price}</div>
                    <p className="text-gray-300 text-sm mb-4 flex-grow">{service.description}</p>
                    <div className="text-xs text-purple-400 mb-4">{service.category}</div>
                    <Button
                      href={service.link}
                      variant="primary"
                      size="sm"
                      className="w-full"
                    >
                      Learn More
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </EnhancedFuturisticCard>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                href="/services"
                variant="primary"
                size="lg"
                className="text-lg px-8 py-4"
              >
                View All 300+ Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Built on Cutting-Edge Technology
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our platform leverages the latest technologies to ensure scalability, security, and performance.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {technologyStack.map((tech, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-3">{tech.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-1">{tech.name}</h3>
                  <p className="text-sm text-gray-400">{tech.category}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                See what our clients say about the transformative impact of our services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <EnhancedFuturisticCard
                  key={index}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-6"
                  variant="neural"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4">{testimonial.avatar}</div>
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-gray-400">{testimonial.role}</p>
                      <p className="text-sm text-purple-400">{testimonial.company}</p>
                    </div>
                  </div>
                </EnhancedFuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <EnhancedFuturisticCard
              className="bg-gradient-to-br from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/50 p-12"
              variant="quantum-holographic"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Lead the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already transforming their operations with Zion Tech Group's innovative micro SaaS services.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-black/20 rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Start Your Free Trial</h3>
                  <p className="text-gray-300 text-sm">14 days free • No credit card required • Instant access</p>
                </div>
                <div className="bg-black/20 rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Speak with Experts</h3>
                  <p className="text-gray-300 text-sm">Get personalized guidance • Custom solutions • Priority support</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  href="/services"
                  variant="primary"
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  Start Free Trial
                  <Sparkles className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  href="/contact"
                  variant="secondary"
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  Contact Sales
                  <MessageSquare className="ml-2 w-5 h-5" />
                </Button>
              </div>

              {/* Contact Information */}
              <div className="bg-black/30 rounded-xl p-6 border border-gray-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center justify-center">
                    <Phone className="w-4 h-4 text-cyan-400 mr-2" />
                    <a href={`tel:${contactInfo.mobile}`} className="text-cyan-400 hover:text-cyan-300">
                      {contactInfo.mobile}
                    </a>
                  </div>
                  <div className="flex items-center justify-center">
                    <Mail className="w-4 h-4 text-purple-400 mr-2" />
                    <a href={`mailto:${contactInfo.email}`} className="text-purple-400 hover:text-purple-300">
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-green-400">{contactInfo.address}</span>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <a 
                    href={contactInfo.website} 
                    className="text-blue-400 hover:text-blue-300 font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit {contactInfo.website}
                    <ExternalLink className="inline w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </EnhancedFuturisticCard>
          </div>
        </section>
      </div>
    </EnhancedFuturisticBackground>
  );
}
