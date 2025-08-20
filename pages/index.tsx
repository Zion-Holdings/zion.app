import React from 'react';
import Head from 'next/head';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Cloud, Bot, RefreshCw, Zap, Shield, BarChart3, ArrowRight, Check, ExternalLink, Star, Users, Globe, Lock, Rocket, Cpu, Database, TrendingUp, Clock, Target, Building, Award, DollarSign, ChartBar, Code, BookOpen, Activity, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, Settings, BookOpen as BookOpenIcon, Activity as ActivityIcon, Database as DatabaseIcon, Play, Mail, Phone, MapPin } from 'lucide-react';

export default function HomePage() {
  const heroStats = [
    { value: '42+', label: 'Real Micro SaaS Services', color: 'text-cyan-400' },
    { value: '99.9%', label: 'Uptime Guarantee', color: 'text-fuchsia-400' },
    { value: '14', label: 'Day Free Trials', color: 'text-blue-400' },
    { value: '24/7', label: 'AI Support', color: 'text-green-400' },
  ];

  const platformFeatures = [
    {
      icon: <Cloud className="w-8 h-8 text-white" />,
      title: 'Real Micro SaaS Services',
      description: '42+ fully functional micro SaaS tools with real implementations, not just mockups.',
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      icon: <Bot className="w-8 h-8 text-white" />,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI content generation, SEO automation, chatbots, business intelligence, and financial advisory.',
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
      title: 'Security & Compliance',
      description: 'Comprehensive security solutions that protect your data and ensure regulatory compliance.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      icon: '📊',
      title: 'Analytics & Insights',
      description: 'Data-driven decision making with real-time analytics and predictive insights.',
      color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
      textColor: 'text-blue-400',
      gradient: 'from-blue-400 to-indigo-500',
    },
    {
      icon: '🚀',
      title: 'Performance Optimization',
      description: 'Lightning-fast applications with automated performance monitoring and optimization.',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      textColor: 'text-orange-400',
      gradient: 'from-orange-400 to-red-500',
    },
    {
      icon: '🌐',
      title: 'Global Scale',
      description: 'Worldwide deployment with edge computing and intelligent content delivery.',
      color: 'bg-gradient-to-br from-purple-500 to-pink-600',
      textColor: 'text-purple-400',
      gradient: 'from-purple-400 to-pink-500',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO at TechFlow',
      company: 'TechFlow Inc.',
      content: 'Zion Tech Group transformed our development process. Their micro SaaS solutions saved us months of development time.',
      avatar: '👩‍💼',
      rating: 5,
    },
    {
      name: 'Marcus Rodriguez',
      role: 'VP of Engineering',
      company: 'DataSync Solutions',
      content: 'The AI-powered automation tools are game-changing. We\'ve increased our productivity by 300%.',
      avatar: '👨‍💻',
      rating: 5,
    },
    {
      name: 'Emily Watson',
      role: 'Product Manager',
      company: 'CloudScale',
      content: 'Finally, enterprise-grade solutions without enterprise complexity. Zion Tech Group delivers on every promise.',
      avatar: '👩‍🎯',
      rating: 5,
    },
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small teams and startups',
      features: [
        'Access to 10 core services',
        'Basic AI features',
        'Email support',
        '14-day free trial',
        'Standard security',
      ],
      popular: false,
      cta: 'Start Free Trial',
      href: '/pricing',
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Access to all 55+ services',
        'Advanced AI capabilities',
        'Priority support',
        'Custom integrations',
        'Advanced analytics',
        'Team collaboration',
      ],
      popular: true,
      cta: 'Start Free Trial',
      href: '/pricing',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: [
        'Everything in Professional',
        'Custom development',
        'Dedicated support',
        'SLA guarantees',
        'On-premise options',
        'Custom training',
      ],
      popular: false,
      cta: 'Contact Sales',
      href: '/contact',
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Head>
        <title>Zion Tech Group - Real Micro SaaS Solutions | Enterprise-Grade Tools</title>
        <meta name="description" content="Transform your business with 55+ real micro SaaS services. AI-powered automation, cloud optimization, and enterprise-grade solutions from Zion Tech Group. Start your 14-day free trial today." />
        <meta name="keywords" content="micro SaaS, AI automation, cloud optimization, business tools, enterprise software, Zion Tech Group" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Zion Tech Group - Real Micro SaaS Solutions" />
        <meta property="og:description" content="Transform your business with 55+ real micro SaaS services. AI-powered automation, cloud optimization, and enterprise-grade solutions." />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Real Micro SaaS Solutions" />
        <meta name="twitter:description" content="Transform your business with 55+ real micro SaaS services. AI-powered automation, cloud optimization, and enterprise-grade solutions." />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 futuristic-bg"></div>
        <div className="absolute inset-0 grid-bg opacity-30"></div>
        <div className="absolute inset-0 particles-bg"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-xl border border-blue-500/20 rounded-full px-6 py-3 mb-8">
              <Star className="w-5 h-5 text-blue-400" />
              <span className="text-blue-300 font-medium">
                🚀 42+ Real Micro SaaS Services Available Now
              </span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            <span className="futuristic-text">Transform Your Business</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              with AI-Powered
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-green-400 to-blue-400">
              Micro SaaS Solutions
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Access 42+ enterprise-grade micro SaaS tools powered by cutting-edge AI. 
            From content creation to financial advisory, we provide real solutions that 
            scale with your business needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              href="/micro-saas"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cyberpunk-neon"
            >
              <Rocket className="w-6 h-6 mr-2" />
              Explore Services
            </Button>
            <Button 
              href="/pricing"
              className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <DollarSign className="w-6 h-6 mr-2" />
              View Pricing
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {heroStats.map((stat, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
              >
                <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 floating-orbs opacity-60"></div>
        <div className="absolute bottom-20 right-10 floating-orbs opacity-60"></div>
      </section>

      {/* Features Section */}
      <Features />

      {/* Services Showcase Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        <div className="absolute inset-0 neural-bg opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="futuristic-text">AI-Powered</span> Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive suite of intelligent micro SaaS solutions designed to 
              automate, optimize, and transform your business operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Content Generator */}
            <div className="group bg-gradient-to-br from-pink-500/10 to-rose-600/10 border border-pink-500/20 rounded-2xl p-8 backdrop-blur-xl hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-white mb-3">AI Content Generator Pro</h3>
              <p className="text-gray-300 mb-4">
                Create high-quality, SEO-optimized content at scale with advanced AI writing assistance.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-pink-400">$49</span>
                <span className="text-gray-400">/month</span>
              </div>
              <Button 
                href="https://ziontechgroup.com/ai-content-generator"
                className="w-full mt-4 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700"
              >
                Learn More
              </Button>
            </div>

            {/* Cloud Cost Optimizer */}
            <div className="group bg-gradient-to-br from-blue-500/10 to-indigo-600/10 border border-blue-500/20 rounded-2xl p-8 backdrop-blur-xl hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-bold text-white mb-3">Cloud Cost Optimizer</h3>
              <p className="text-gray-300 mb-4">
                Reduce cloud spending by 30% with intelligent cost management and optimization.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-400">$99</span>
                <span className="text-gray-400">/month</span>
              </div>
              <Button 
                href="https://ziontechgroup.com/cloud-cost-optimizer"
                className="w-full mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              >
                Learn More
              </Button>
            </div>

            {/* AI Market Research */}
            <div className="group bg-gradient-to-br from-emerald-500/10 to-teal-600/10 border border-emerald-500/20 rounded-2xl p-8 backdrop-blur-xl hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-white mb-3">AI Market Research Pro</h3>
              <p className="text-gray-300 mb-4">
                Get real-time market intelligence and competitive analysis with AI-powered insights.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-emerald-400">$79</span>
                <span className="text-gray-400">/month</span>
              </div>
              <Button 
                href="https://ziontechgroup.com/ai-market-research"
                className="w-full mt-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
              >
                Learn More
              </Button>
            </div>

            {/* AI Customer Support */}
            <div className="group bg-gradient-to-br from-purple-500/10 to-violet-600/10 border border-purple-500/20 rounded-2xl p-8 backdrop-blur-xl hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">🎧</div>
              <h3 className="text-xl font-bold text-white mb-3">AI Customer Support Suite</h3>
              <p className="text-gray-300 mb-4">
                Intelligent ticket routing and automated responses with sentiment analysis.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-purple-400">$69</span>
                <span className="text-gray-400">/month</span>
              </div>
              <Button 
                href="https://ziontechgroup.com/ai-customer-support"
                className="w-full mt-4 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700"
              >
                Learn More
              </Button>
            </div>

            {/* AI Financial Advisor */}
            <div className="group bg-gradient-to-br from-amber-500/10 to-orange-600/10 border border-amber-500/20 rounded-2xl p-8 backdrop-blur-xl hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-3">AI Financial Advisor Pro</h3>
              <p className="text-gray-300 mb-4">
                Get intelligent investment recommendations and portfolio analysis powered by AI.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-amber-400">$89</span>
                <span className="text-gray-400">/month</span>
              </div>
              <Button 
                href="https://ziontechgroup.com/ai-financial-advisor"
                className="w-full mt-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700"
              >
                Learn More
              </Button>
            </div>

            {/* AI HR Assistant */}
            <div className="group bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-2xl p-8 backdrop-blur-xl hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-white mb-3">AI HR Assistant Pro</h3>
              <p className="text-gray-300 mb-4">
                Streamline recruitment and employee management with intelligent automation.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-cyan-400">$59</span>
                <span className="text-gray-400">/month</span>
              </div>
              <Button 
                href="https://ziontechgroup.com/ai-hr-assistant"
                className="w-full mt-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700"
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              href="/micro-saas"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              View All 42+ Services
            </Button>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="grid-bg opacity-20" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                Built with Modern Technology
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform is built on cutting-edge technologies that ensure reliability, scalability, and performance.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologyStack.map((tech, index) => (
              <Card
                key={index}
                variant="glass"
                size="sm"
                hover
                className="text-center group"
              >
                <div className="text-4xl mb-3">{tech.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-1">{tech.name}</h3>
                <p className="text-sm text-gray-400">{tech.category}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="particles-bg opacity-30" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                Trusted by Industry Leaders
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our customers say about transforming their businesses with Zion Tech Group.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                variant="futuristic"
                size="lg"
                hover
                glow
                className="relative"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                    <p className="text-xs text-blue-400">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="matrix-bg opacity-20" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                Simple, Transparent Pricing
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our 14-day free trial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                variant={plan.popular ? 'neon' : 'glass'}
                size="lg"
                hover
                glow={plan.popular}
                className={`relative ${plan.popular ? 'scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-bold px-4 py-1 rounded-full">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button
                  variant={plan.popular ? 'futuristic' : 'outline'}
                  size="lg"
                  href={plan.href}
                  fullWidth
                  glow={plan.popular}
                >
                  {plan.cta}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        <div className="absolute inset-0 holographic opacity-30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="futuristic-text">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of businesses already using our AI-powered micro SaaS solutions. 
              Get started today with a 14-day free trial.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-8 backdrop-blur-xl">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Mail className="w-6 h-6 mr-3 text-blue-400" />
                  Get in Touch
                </h3>
                <div className="space-y-4 text-gray-300">
                  <p className="flex items-center">
                    <Mail className="w-5 h-5 mr-3 text-blue-400" />
                    <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-400 transition-colors">
                      kleber@ziontechgroup.com
                    </a>
                  </p>
                  <p className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-blue-400" />
                    <a href="tel:+13024640950" className="hover:text-blue-400 transition-colors">
                      +1 302 464 0950
                    </a>
                  </p>
                  <p className="flex items-center">
                    <MapPin className="w-5 h-5 mr-3 text-blue-400" />
                    <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-600/10 to-emerald-600/10 border border-green-500/20 rounded-2xl p-8 backdrop-blur-xl">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Star className="w-6 h-6 mr-3 text-green-400" />
                  Why Choose Zion Tech Group?
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 mr-3 text-green-400" />
                    42+ real micro SaaS services
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 mr-3 text-green-400" />
                    99.9% uptime guarantee
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 mr-3 text-green-400" />
                    24/7 AI-powered support
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 mr-3 text-green-400" />
                    SOC 2 compliance
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 mr-3 text-green-400" />
                    14-day free trial
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-purple-500/20 rounded-2xl p-8 backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Rocket className="w-6 h-6 mr-3 text-purple-400" />
                Start Your Journey Today
              </h3>
              <div className="space-y-6">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-2">14-Day Free Trial</h4>
                  <p className="text-gray-300 text-sm">
                    Try any service risk-free for 14 days. No credit card required, 
                    full access to all features.
                  </p>
                </div>
                
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-2">Instant Setup</h4>
                  <p className="text-gray-300 text-sm">
                    Get started in minutes with our intuitive interfaces and 
                    automated onboarding process.
                  </p>
                </div>
                
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-2">Expert Support</h4>
                  <p className="text-gray-300 text-sm">
                    Our AI-powered support system and expert team are here to 
                    help you succeed 24/7.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 space-y-4">
                <Button 
                  href="https://ziontechgroup.com/contact"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  Get Started Now
                </Button>
                
                <Button 
                  href="https://ziontechgroup.com"
                  className="w-full bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Globe className="w-5 h-5 mr-2" />
                  Visit Our Website
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3">
              <Globe className="w-5 h-5 text-blue-400" />
              <span className="text-gray-300">
                Visit us at{' '}
                <a 
                  href="https://ziontechgroup.com" 
                  className="text-blue-400 hover:text-blue-300 transition-colors font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ziontechgroup.com
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Footer */}
      <section className="py-12 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="cyberpunk-scan" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
              <div className="space-y-2 text-gray-300">
                <p>+1 302 464 0950</p>
                <p>kleber@ziontechgroup.com</p>
                <p>364 E Main St STE 1008</p>
                <p>Middletown DE 19709</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="/micro-saas" className="block text-gray-300 hover:text-blue-400 transition-colors">Services</a>
                <a href="/pricing" className="block text-gray-300 hover:text-blue-400 transition-colors">Pricing</a>
                <a href="/about" className="block text-gray-300 hover:text-blue-400 transition-colors">About</a>
                <a href="/contact" className="block text-gray-300 hover:text-blue-400 transition-colors">Contact</a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Connect With Us</h3>
              <div className="space-y-2">
                <a href="https://ziontechgroup.com" className="block text-gray-300 hover:text-blue-400 transition-colors">
                  ziontechgroup.com
                </a>
                <p className="text-gray-400 text-sm">Follow us for updates and insights</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-700/50 text-center text-gray-400">
            <p>&copy; 2025 Zion Tech Group. All rights reserved. | Real micro SaaS solutions for modern businesses.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
