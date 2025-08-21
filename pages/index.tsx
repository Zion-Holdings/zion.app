import React from 'react';
import Head from 'next/head';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import EnhancedFuturisticBackground from '../components/ui/EnhancedFuturisticBackground';
import EnhancedFuturisticCard from '../components/ui/EnhancedFuturisticCard';
import { Cloud, Bot, RefreshCw, Zap, Shield, BarChart3, ArrowRight, Check, ExternalLink, Star, Users, Globe, Lock, Rocket, Cpu, Database, TrendingUp, Clock, Target, Building, Award, DollarSign, ChartBar, Code, BookOpen, Activity, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, Settings, BookOpen as BookOpenIcon, Activity as ActivityIcon, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Sparkles, Atom, Brain, Eye, Shield as ShieldIcon, Zap as ZapIcon, Globe as GlobeIcon, Cpu as CpuIcon, Cloud as CloudIcon, Bot as BotIcon, Lock as LockIcon, BarChart3 as BarChart3Icon, TrendingUp as TrendingUpIcon, Users as UsersIcon, Award as AwardIcon, Star as StarIcon, Check as CheckIcon, ArrowRight as ArrowRightIcon, ExternalLink as ExternalLinkIcon, Phone as PhoneIcon, Mail as MailIcon, MapPin as MapPinIcon, Rocket as RocketIcon, Satellite, Dna, Leaf, Factory, Car, Microscope, Lightbulb } from 'lucide-react';

export default function HomePage() {
  const heroStats = [
    { value: '150+', label: 'Real Micro SaaS Services', color: 'text-cyan-400' },
    { value: '99.9%', label: 'Uptime Guarantee', color: 'text-fuchsia-400' },
    { value: '14', label: 'Day Free Trials', color: 'text-blue-400' },
    { value: '24/7', label: 'AI Support', color: 'text-green-400' },
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
      title: 'Real Micro SaaS Services',
      description: '150+ fully functional micro SaaS tools with real implementations, not just mockups.',
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      icon: <Bot className="w-8 h-8 text-white" />,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI content generation, SEO automation, chatbots, and business intelligence.',
      color: 'bg-gradient-to-br from-fuchsia-500 to-purple-600',
      gradient: 'from-fuchsia-400 to-purple-500',
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-white" />,
      title: 'Enterprise Reliability',
      description: '99.9% uptime guarantee, automated scaling, and intelligent resource management.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'Lightning Fast Setup',
      description: 'Get started in minutes with our intuitive interfaces and automated onboarding.',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      gradient: 'from-orange-400 to-red-500',
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Bank-Level Security',
      description: 'SOC 2 compliance, advanced encryption, and automated security monitoring.',
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      gradient: 'from-indigo-400 to-purple-500',
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: 'Transparent Pricing',
      description: 'No hidden fees, simple monthly pricing that scales with your business needs.',
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
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      textColor: 'text-cyan-400',
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      icon: '🔒',
      title: 'Advanced Security',
      description: 'Enterprise-grade security with AI-powered threat detection and automated response systems.',
      color: 'bg-gradient-to-br from-red-500 to-orange-600',
      textColor: 'text-red-400',
      gradient: 'from-red-400 to-orange-500',
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'Real-time insights and predictive analytics to drive data-driven decision making.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      icon: '🌐',
      title: 'IoT Solutions',
      description: 'Connected device management and intelligent IoT platforms for smart cities and industries.',
      color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      textColor: 'text-teal-400',
      gradient: 'from-teal-400 to-cyan-500',
    },
    {
      icon: '⚛️',
      title: 'Quantum Computing',
      description: 'Next-generation quantum algorithms and computing solutions for complex problem solving.',
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      textColor: 'text-indigo-400',
      gradient: 'from-indigo-400 to-purple-500',
    },
  ];

  const emergingTechnologies = [
    {
      icon: <Satellite className="w-12 h-12 text-blue-400" />,
      title: 'Space Technology',
      description: 'Satellite data analytics, space mission planning, and aerospace solutions.',
      variant: 'space' as const,
      services: ['Satellite Data Analytics', 'Space Mission Planning', 'Aerospace Solutions']
    },
    {
      icon: <Dna className="w-12 h-12 text-green-400" />,
      title: 'Biotechnology',
      description: 'AI drug discovery, genomic analysis, and life sciences innovation.',
      variant: 'biotech' as const,
      services: ['AI Drug Discovery', 'Genomic Analysis', 'Bioinformatics Platform']
    },
    {
      icon: <Leaf className="w-12 h-12 text-yellow-400" />,
      title: 'Renewable Energy',
      description: 'Smart grid optimization, solar energy management, and sustainable solutions.',
      variant: 'energy' as const,
      services: ['Smart Grid Optimization', 'Solar Energy Platform', 'Energy Analytics']
    },
    {
      icon: <Factory className="w-12 h-12 text-purple-400" />,
      title: 'Advanced Manufacturing',
      description: '3D printing optimization, digital twins, and Industry 4.0 solutions.',
      variant: 'holographic' as const,
      services: ['3D Printing Optimization', 'Digital Twin Platform', 'Manufacturing AI']
    },
    {
      icon: <Car className="w-12 h-12 text-orange-400" />,
      title: 'Autonomous Vehicles',
      description: 'Self-driving technology, fleet management, and transportation innovation.',
      variant: 'cyberpunk' as const,
      services: ['Autonomous Vehicle Platform', 'Fleet Management', 'Safety Systems']
    },
    {
      icon: <Microscope className="w-12 h-12 text-cyan-400" />,
      title: 'Quantum Computing',
      description: 'Quantum algorithms, cryptography, and next-gen computing solutions.',
      variant: 'quantum' as const,
      services: ['Quantum AI Optimizer', 'Quantum Cryptography', 'Quantum ML Platform']
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CTO, TechCorp',
      company: 'TechCorp Industries',
      content: 'Zion Tech Group\'s AI solutions have transformed our operations. The quantum computing platform alone has accelerated our research by 10x.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Innovation',
      company: 'FutureSpace Inc',
      content: 'Their space technology platform is revolutionary. We\'ve reduced mission planning time from weeks to days.',
      rating: 5,
      avatar: '👨‍🚀'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Research Director',
      company: 'BioGen Labs',
      content: 'The AI drug discovery platform has accelerated our research pipeline significantly. Game-changing technology.',
      rating: 5,
      avatar: '👩‍🔬'
    }
  ];

  return (
    <EnhancedFuturisticBackground variant="quantum" intensity="high">
      <div className="min-h-screen">
        <Head>
          <title>Zion Tech Group - Leading AI, Quantum Computing & Emerging Technology Solutions</title>
          <meta name="description" content="Discover 150+ real micro SaaS services powered by AI, quantum computing, and emerging technologies. Transform your business with cutting-edge solutions from Zion Tech Group." />
          <meta name="keywords" content="AI services, quantum computing, micro SaaS, emerging technology, space technology, biotechnology, renewable energy, autonomous vehicles" />
          <meta name="author" content="Zion Tech Group" />
          <meta property="og:title" content="Zion Tech Group - Leading AI & Emerging Technology Solutions" />
          <meta property="og:description" content="150+ real micro SaaS services powered by AI, quantum computing, and emerging technologies." />
          <meta property="og:url" content="https://ziontechgroup.com" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com" />
        </Head>

        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-400 text-sm font-medium mb-8 backdrop-blur-sm">
                  <Sparkles className="w-5 h-5 mr-3" />
                  <span>150+ Real Micro SaaS Services Available</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Future of Technology
                  </span>
                  <br />
                  <span className="text-white">Starts Here</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                  Discover the most advanced AI, quantum computing, and emerging technology solutions. 
                  From space technology to biotechnology, we're building the future, one innovation at a time.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                  <Button 
                    href="/services" 
                    variant="primary" 
                    size="lg"
                    className="text-lg px-8 py-4"
                  >
                    Explore Services
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  
                  <Button 
                    href="/contact" 
                    variant="secondary" 
                    size="lg"
                    className="text-lg px-8 py-4"
                  >
                    Get Started
                    <Rocket className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>

              {/* Hero Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {heroStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm md:text-base">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-6 backdrop-blur-sm border border-slate-600/30">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center">
                    <Phone className="w-6 h-6 text-cyan-400 mb-2" />
                    <div className="text-white font-semibold">Mobile</div>
                    <div className="text-gray-300">{contactInfo.mobile}</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <Mail className="w-6 h-6 text-purple-400 mb-2" />
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-gray-300">{contactInfo.email}</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <MapPin className="w-6 h-6 text-green-400 mb-2" />
                    <div className="text-white font-semibold">Address</div>
                    <div className="text-gray-300 text-sm">{contactInfo.address}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose <span className="text-cyan-400">Zion Tech Group</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're not just another tech company. We're building the future with real, innovative solutions 
                that solve real-world problems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {platformFeatures.map((feature, index) => (
                <EnhancedFuturisticCard
                  key={index}
                  variant="neural"
                  intensity="medium"
                  className="h-full"
                >
                  <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </EnhancedFuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Emerging Technologies */}
        <section className="py-20 bg-gradient-to-b from-transparent to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="text-purple-400">Emerging Technologies</span> of Tomorrow
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                We're at the forefront of the most cutting-edge technologies that will shape the future. 
                From quantum computing to space technology, discover what's possible.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {emergingTechnologies.map((tech, index) => (
                <EnhancedFuturisticCard
                  key={index}
                  variant={tech.variant}
                  intensity="high"
                  className="h-full"
                >
                  <div className="text-center">
                    <div className="flex justify-center mb-6">
                      {tech.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{tech.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{tech.description}</p>
                    <div className="space-y-2">
                      {tech.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex items-center text-sm text-gray-400">
                          <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {service}
                        </div>
                      ))}
                    </div>
                  </div>
                </EnhancedFuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Built with <span className="text-green-400">Modern Technology</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform is built on the latest technologies, ensuring scalability, security, and performance.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {technologyStack.map((tech, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300 group-hover:scale-105">
                    <div className="text-4xl mb-3">{tech.icon}</div>
                    <div className="text-white font-semibold text-sm">{tech.name}</div>
                    <div className="text-gray-400 text-xs">{tech.category}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gradient-to-b from-transparent to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our <span className="text-yellow-400">Clients Say</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what industry leaders are saying about our solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <EnhancedFuturisticCard
                  key={index}
                  variant="holographic"
                  intensity="medium"
                  className="h-full"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4">{testimonial.avatar}</div>
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 italic leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}</div>
                      <div className="text-cyan-400 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </EnhancedFuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <EnhancedFuturisticCard
              variant="quantum"
              intensity="high"
              className="max-w-4xl mx-auto"
            >
              <div className="py-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Build the <span className="text-purple-400">Future</span>?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join thousands of innovators who are already transforming their businesses with our cutting-edge solutions.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    href="/services" 
                    variant="primary" 
                    size="lg"
                    className="text-lg px-8 py-4"
                  >
                    Explore All Services
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  
                  <Button 
                    href="/contact" 
                    variant="secondary" 
                    size="lg"
                    className="text-lg px-8 py-4"
                  >
                    Contact Us
                    <Mail className="w-5 h-5 ml-2" />
                  </Button>
                </div>

                <div className="mt-8 text-gray-400">
                  <p>Questions? Call us at {contactInfo.mobile} or email {contactInfo.email}</p>
                </div>
              </div>
            </EnhancedFuturisticCard>
          </div>
        </section>
      </div>
    </EnhancedFuturisticBackground>
  );
}
