import React from 'react';
import Head from 'next/head';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import EnhancedFuturisticBackground from '../components/ui/EnhancedFuturisticBackground';
import { Cloud, Bot, RefreshCw, Zap, Shield, BarChart3, ArrowRight, Check, ExternalLink, Star, Users, Globe, Lock, Rocket, Cpu, Database, TrendingUp, Clock, Target, Building, Award, DollarSign, ChartBar, Code, BookOpen, Activity, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, Settings, BookOpen as BookOpenIcon, Activity as ActivityIcon, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Sparkles, Atom, Brain, Eye, Shield as ShieldIcon, Zap as ZapIcon, Globe as GlobeIcon, Cpu as CpuIcon, Cloud as CloudIcon, Bot as BotIcon, Lock as LockIcon, BarChart3 as BarChart3Icon, TrendingUp as TrendingUpIcon, Users as UsersIcon, Award as AwardIcon, Star as StarIcon, Check as CheckIcon, ArrowRight as ArrowRightIcon, ExternalLink as ExternalLinkIcon, Phone as PhoneIcon, Mail as MailIcon, MapPin as MapPinIcon, Target as TargetIcon, TrendingUp as TrendingUpIcon2, Users as UsersIcon2, Award as AwardIcon2, Star as StarIcon2, Check as CheckIcon2, ArrowRight as ArrowRightIcon2, ExternalLink as ExternalLinkIcon2, Phone as PhoneIcon2, Mail as MailIcon2, MapPin as MapPinIcon2 } from 'lucide-react';

export default function HomePage() {
  const heroStats = [
    { value: '300+', label: 'Revolutionary Micro SaaS Services', color: 'text-cyan-400', icon: <Sparkles className="w-5 h-5" /> },
    { value: '99.9%', label: 'Uptime Guarantee', color: 'text-fuchsia-400', icon: <Shield className="w-5 h-5" /> },
    { value: '14', label: 'Day Free Trials', color: 'text-blue-400', icon: <Clock className="w-5 h-5" /> },
    { value: '24/7', label: 'AI Support', color: 'text-green-400', icon: <Bot className="w-5 h-5" /> },
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
      title: 'Revolutionary Micro SaaS Services',
      description: '300+ cutting-edge micro SaaS tools including quantum computing, synthetic biology, brain-computer interfaces, and consciousness AI.',
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      gradient: 'from-cyan-400 to-blue-500',
      features: ['Quantum Entanglement Networks', 'Synthetic Biology Platforms', 'Brain-Computer Interfaces', 'Consciousness AI']
    },
    {
      icon: <Bot className="w-8 h-8 text-white" />,
      title: 'Next-Generation AI Solutions',
      description: 'Advanced AI with emergent consciousness, quantum machine learning, and synthetic reality generation. Market-leading technology with 800%+ average ROI.',
      color: 'bg-gradient-to-br from-fuchsia-500 to-purple-600',
      gradient: 'from-fuchsia-400 to-purple-500',
      features: ['Consciousness AI', 'Quantum ML', 'Synthetic Reality', 'Neuromorphic Computing']
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-white" />,
      title: 'Enterprise Reliability',
      description: '99.9% uptime guarantee, automated scaling, and intelligent resource management. Trusted by Fortune 500 companies worldwide.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      gradient: 'from-green-400 to-emerald-500',
      features: ['Auto-scaling', 'Load Balancing', 'Disaster Recovery', 'Monitoring']
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'Lightning Fast Setup',
      description: 'Get started in minutes with our intuitive interfaces and automated onboarding. No technical expertise required.',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      gradient: 'from-orange-400 to-red-500',
      features: ['One-click Deploy', 'Templates', 'Wizards', 'Documentation']
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Quantum-Safe Security',
      description: 'SOC 2 compliance, quantum-resistant encryption, and automated security monitoring. Future-proof protection against quantum threats.',
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      gradient: 'from-indigo-400 to-purple-500',
      features: ['Quantum Cryptography', 'Zero Trust', 'Compliance', 'Auditing']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: 'Transparent Pricing',
      description: 'No hidden fees, simple monthly pricing that scales with your business needs. Competitive rates starting at $49/month.',
      color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      gradient: 'from-teal-400 to-cyan-500',
      features: ['Pay-as-you-grow', 'Volume Discounts', 'Enterprise Plans', 'ROI Calculator']
    },
  ];

  const technologyStack = [
    { name: 'Next.js', category: 'Framework', icon: '⚡', description: 'React-based full-stack framework' },
    { name: 'React', category: 'Library', icon: '⚛️', description: 'Component-based UI library' },
    { name: 'TypeScript', category: 'Language', icon: '📘', description: 'Type-safe JavaScript' },
    { name: 'Tailwind CSS', category: 'Styling', icon: '🎨', description: 'Utility-first CSS framework' },
    { name: 'Node.js', category: 'Runtime', icon: '🟢', description: 'JavaScript runtime environment' },
    { name: 'PostgreSQL', category: 'Database', icon: '🐘', description: 'Advanced open-source database' },
    { name: 'Redis', category: 'Cache', icon: '🔴', description: 'In-memory data structure store' },
    { name: 'Docker', category: 'Containerization', icon: '🐳', description: 'Container platform' },
    { name: 'Kubernetes', category: 'Orchestration', icon: '☸️', description: 'Container orchestration' },
    { name: 'AWS', category: 'Cloud', icon: '☁️', description: 'Cloud computing platform' },
    { name: 'Terraform', category: 'Infrastructure', icon: '🏗️', description: 'Infrastructure as code' },
    { name: 'Prometheus', category: 'Monitoring', icon: '📊', description: 'Systems monitoring toolkit' },
  ];

  const features = [
    {
      icon: '🤖',
      title: 'Consciousness AI & Quantum Computing',
      description: 'Revolutionary AI systems with genuine consciousness and quantum computing capabilities for unprecedented performance.',
      color: 'bg-gradient-to-br from-fuchsia-500 to-purple-600',
      textColor: 'text-fuchsia-400',
      gradient: 'from-fuchsia-400 to-purple-500',
      highlights: ['Consciousness AI', 'Quantum ML', 'Synthetic Reality', 'Neuromorphic Computing']
    },
    {
      icon: '🧬',
      title: 'Synthetic Biology & Life Sciences',
      description: 'Advanced platforms for designing and engineering living organisms for pharmaceutical, agricultural, and industrial applications.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      gradient: 'from-green-400 to-emerald-500',
      highlights: ['DNA Design', 'CRISPR Editing', 'Protein Engineering', 'Metabolic Pathways']
    },
    {
      icon: '🌌',
      title: 'Quantum Networks & Security',
      description: 'World\'s first commercial quantum entanglement network providing instant, unhackable communication across any distance.',
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600',
      textColor: 'text-purple-400',
      gradient: 'from-purple-400 to-indigo-500',
      highlights: ['Quantum Entanglement', 'Instant Communication', 'Unhackable Security', 'Global Coverage']
    },
    {
      icon: '🧠',
      title: 'Brain-Computer Interfaces',
      description: 'Direct neural interface systems enabling direct communication between the human brain and computers.',
      color: 'bg-gradient-to-br from-pink-500 to-rose-600',
      textColor: 'text-pink-400',
      gradient: 'from-pink-400 to-rose-500',
      highlights: ['Neural Control', 'Thought-to-Text', 'Brain Devices', 'Medical Applications']
    },
    {
      icon: '🔒',
      title: 'Quantum-Resistant Cybersecurity',
      description: 'Future-proof security solutions using quantum-resistant algorithms and advanced threat detection.',
      color: 'bg-gradient-to-br from-red-500 to-pink-600',
      textColor: 'text-red-400',
      gradient: 'from-red-400 to-pink-500',
      highlights: ['Post-Quantum Crypto', 'AI Security', 'Zero Trust', 'Threat Prevention']
    },
    {
      icon: '🌐',
      title: 'Edge AI & IoT Orchestration',
      description: 'Intelligent edge computing platform that orchestrates AI workloads across distributed devices.',
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
      textColor: 'text-blue-400',
      gradient: 'from-blue-400 to-cyan-500',
      highlights: ['Edge Computing', 'AI Orchestration', 'IoT Management', 'Performance Optimization']
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CTO, QuantumTech Solutions',
      company: 'Fortune 500 Tech Company',
      content: 'Zion Tech Group\'s quantum computing platform has revolutionized our research capabilities. We\'ve achieved breakthroughs in drug discovery that would have taken years with classical computing.',
      rating: 5,
      avatar: '👩‍🔬'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of AI Research',
      company: 'Global AI Institute',
      content: 'The consciousness AI platform is truly groundbreaking. We\'ve never seen AI systems with this level of understanding and reasoning capabilities. It\'s like working with a new form of intelligence.',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Lead Scientist',
      company: 'BioInnovation Labs',
      content: 'The synthetic biology platform has accelerated our research by 10x. The accuracy and precision of the genetic engineering tools are unmatched in the industry.',
      rating: 5,
      avatar: '👩‍🔬'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: ['Access to 20 core services', 'Basic AI assistance', 'Email support', '14-day free trial'],
      color: 'from-blue-500 to-cyan-600',
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses and teams',
      features: ['Access to 50+ services', 'Advanced AI features', 'Priority support', '30-day free trial'],
      color: 'from-purple-500 to-pink-600',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations with custom needs',
      features: ['Access to all 300+ services', 'Custom AI models', '24/7 dedicated support', 'Custom development'],
      color: 'from-amber-500 to-orange-600',
      popular: false
    }
  ];

  return (
    <EnhancedFuturisticBackground variant="fusion" intensity="high">
      <div className="min-h-screen">
        <Head>
          <title>Zion Tech Group - Revolutionary AI, Quantum Computing & Micro SaaS Solutions</title>
          <meta name="description" content="Discover 300+ cutting-edge micro SaaS services including consciousness AI, quantum computing, synthetic biology, and brain-computer interfaces. Transform your business with future-forward technology." />
          <meta name="keywords" content="AI, quantum computing, synthetic biology, brain-computer interface, micro SaaS, consciousness AI, quantum networks, cybersecurity" />
          <meta name="author" content="Zion Tech Group" />
          <meta property="og:title" content="Zion Tech Group - Revolutionary AI & Quantum Computing Solutions" />
          <meta property="og:description" content="300+ cutting-edge micro SaaS services for the future of business and technology." />
          <meta property="og:url" content="https://ziontechgroup.com" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com" />
        </Head>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black" />
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Revolutionary Technology Platform
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                  Future-Forward
                </span>
                <br />
                <span className="text-white">Micro SaaS Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Experience 300+ revolutionary micro SaaS services powered by consciousness AI, quantum computing, 
                synthetic biology, and brain-computer interfaces. Transform your business with technology from the future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  href="/services" 
                  variant="primary" 
                  size="lg"
                  className="group"
                >
                  Explore Services
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  href="/contact" 
                  variant="secondary" 
                  size="lg"
                >
                  Start Free Trial
                </Button>
              </div>
            </div>

            {/* Hero Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {heroStats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information Banner */}
        <section className="relative py-8 bg-gradient-to-r from-blue-900/50 via-purple-900/50 to-cyan-900/50 border-y border-blue-500/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-gray-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span>{contactInfo.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-green-400" />
                  <a href={contactInfo.website} className="hover:text-white transition-colors">
                    {contactInfo.website}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Platform Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of technology with our cutting-edge platform designed for unprecedented performance and innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {platformFeatures.map((feature, index) => (
                <Card key={index} className="group hover:scale-105 transition-transform duration-300">
                  <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Core Technology Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the revolutionary technologies that power our micro SaaS platform and transform your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group">
                  <div className={`p-8 rounded-3xl ${feature.color} relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                      <div className="text-4xl mb-4">{feature.icon}</div>
                      <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                      <p className="text-white/90 mb-6 leading-relaxed">{feature.description}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {feature.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center text-sm text-white/80">
                            <Check className="w-3 h-3 text-white mr-2 flex-shrink-0" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join hundreds of satisfied clients who have transformed their businesses with our revolutionary technology.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="group hover:scale-105 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-4xl mb-4">{testimonial.avatar}</div>
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                      <div className="text-sm text-blue-400">{testimonial.company}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transparent Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your business needs. All plans include our revolutionary technology and exceptional support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <Card key={index} className={`group hover:scale-105 transition-transform duration-300 ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    <ul className="space-y-3 mb-8 text-left">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      href="/contact" 
                      variant="primary" 
                      className="w-full"
                    >
                      Get Started
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Built with Cutting-Edge Technology
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform is built on the latest technologies ensuring scalability, security, and performance.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {technologyStack.map((tech, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 text-4xl group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <h3 className="font-semibold text-white mb-1">{tech.name}</h3>
                  <p className="text-xs text-gray-400 mb-1">{tech.category}</p>
                  <p className="text-xs text-gray-500">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already transforming their operations with our revolutionary micro SaaS platform. 
              Start your free trial today and see the difference future-forward technology can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                href="/contact" 
                variant="primary" 
                size="lg"
                className="group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                href="/services" 
                variant="secondary" 
                size="lg"
              >
                Explore All Services
              </Button>
            </div>
            <div className="mt-8 text-gray-400">
              <p>Questions? Contact us at {contactInfo.email} or call {contactInfo.mobile}</p>
            </div>
          </div>
        </section>
      </div>
    </EnhancedFuturisticBackground>
  );
}
