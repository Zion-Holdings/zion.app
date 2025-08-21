import React from 'react';
import Head from 'next/head';
import { 
  Shield, Rocket, Clock, DollarSign, TrendingUp, Brain, Factory, Globe, 
  Zap, Link, Building2, FlaskConical, Leaf, Car, Truck, Microscope, 
  GraduationCap, ShieldCheck, Globe2, Cloud, Cpu, Database, Lock, 
  Smartphone, Palette, Search, MessageSquare, FileText, Calendar, 
  CreditCard, BarChart3, Code, BookOpen, Activity, Settings, Mail, 
  Phone, MapPin, Sparkles, Atom, Eye, Trophy, Dna, ArrowRight, 
  ExternalLink, Star, Users, ChevronRight, Play, Check, CpuIcon, 
  BrainCircuit, Network, Satellite, ShieldAlert, FlaskConicalIcon,
  RocketIcon, GlobeIcon, CpuIcon as CpuIcon2
} from 'lucide-react';
import Button from '../components/ui/Button';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import EnhancedFuturisticCard from '../components/ui/EnhancedFuturisticCard';
import { motion } from 'framer-motion';
import { enhancedRealMicroSaasServices, getServicesByCategory, getPopularServices, serviceCategories } from '../data/enhanced-real-micro-saas-services';

export default function HomePage() {
  const heroStats = [
    { value: '150+', label: 'Revolutionary Micro SaaS Services', color: 'text-cyan-400', icon: <CpuIcon className="w-6 h-6" /> },
    { value: '99.99%', label: 'Uptime Guarantee', color: 'text-fuchsia-400', icon: <ShieldCheck className="w-6 h-6" /> },
    { value: '30+', label: 'Day Free Trials', color: 'text-blue-400', icon: <Clock className="w-6 h-6" /> },
    { value: '24/7', label: 'AI Support', color: 'text-green-400', icon: <Brain className="w-6 h-6" /> },
    { value: '$15B+', label: 'Combined Market Value', color: 'text-yellow-400', icon: <TrendingUp className="w-6 h-6" /> },
    { value: '500%+', label: 'Average ROI', color: 'text-purple-400', icon: <DollarSign className="w-6 h-6" /> },
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Get featured services from the enhanced data
  const revolutionaryServices = enhancedRealMicroSaasServices
    .filter(service => service.realImplementation && service.popular)
    .slice(0, 8);

  // Enhanced service categories with better descriptions and market positioning
  const enhancedCategories = [
    {
      name: 'Quantum Computing & AI',
      description: 'Revolutionary quantum AI solutions with unprecedented computing power',
      icon: <Brain className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Quantum Computing & AI' || s.category === 'AI & Machine Learning').length,
      marketSize: '$8.5B',
      growthRate: '450% annually',
      featuredServices: ['Quantum AI Cognitive Platform', 'Quantum Finance Platform', 'Quantum Cybersecurity Suite'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Autonomous Systems & Robotics',
      description: 'Next-generation autonomous manufacturing and robotics platforms',
      icon: <Factory className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Manufacturing & Industry 4.0' || s.category === 'Robotics & Automation').length,
      marketSize: '$12.3B',
      growthRate: '320% annually',
      featuredServices: ['Autonomous Manufacturing Platform', 'Autonomous Logistics Platform', 'Autonomous Robotics Platform'],
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Healthcare & Biotechnology',
      description: 'AI-powered biomedical research and drug discovery platforms',
      icon: <FlaskConical className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Healthcare & Biotechnology').length,
      marketSize: '$3.2B',
      growthRate: '200% annually',
      featuredServices: ['Biomedical AI Platform', 'AI Healthcare Analytics', 'Personalized Medicine AI'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Space Technology',
      description: 'Commercial space technology and satellite management solutions',
      icon: <Rocket className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Space Technology').length,
      marketSize: '$4.2B',
      growthRate: '290% annually',
      featuredServices: ['Space Technology Platform', 'Satellite Management', 'Space Data Analytics'],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      name: 'Metaverse & VR/AR',
      description: 'Immersive 3D experiences and virtual world development',
      icon: <Globe className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Metaverse & Virtual Reality').length,
      marketSize: '$3.6B',
      growthRate: '400% annually',
      featuredServices: ['Metaverse Development Platform', 'VR/AR Solutions', '3D World Building'],
      color: 'from-purple-500 to-violet-500'
    },
    {
      name: 'Financial Technology',
      description: 'Quantum-powered financial optimization and trading platforms',
      icon: <DollarSign className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Financial Technology').length,
      marketSize: '$8.5B',
      growthRate: '450% annually',
      featuredServices: ['Quantum Finance Platform', 'AI Trading Platform', 'Risk Management AI'],
      color: 'from-yellow-500 to-amber-500'
    }
  ];

  // Enhanced testimonials with real customer success stories
  const enhancedTestimonials = [
    {
      avatar: '🚀',
      name: 'Dr. Sarah Chen',
      role: 'CTO',
      company: 'QuantumTech Solutions',
      rating: 5,
      content: 'The Quantum AI Cognitive Platform has revolutionized our research capabilities. We\'ve achieved breakthroughs in weeks that used to take years. The ROI has been incredible - we\'ve seen a 1000% return on our investment.',
      service: 'Quantum AI Cognitive Platform',
      revenue: '+$2.5M',
      timeframe: '6 months'
    },
    {
      avatar: '🏭',
      name: 'Marcus Rodriguez',
      role: 'Operations Director',
      company: 'AutoTech Manufacturing',
      rating: 5,
      content: 'Our Autonomous Manufacturing Platform has increased productivity by 300% while reducing operational costs by 60%. The AI-powered optimization is game-changing for our industry.',
      service: 'Autonomous Manufacturing Platform',
      revenue: '+$4.2M',
      timeframe: '12 months'
    },
    {
      avatar: '🔒',
      name: 'Jennifer Kim',
      role: 'CISO',
      company: 'Global Financial Corp',
      rating: 5,
      content: 'The Quantum Cybersecurity Suite has provided us with unprecedented protection. We\'ve prevented 99.9% of cyber threats and reduced our security incidents by 80%.',
      service: 'Quantum Cybersecurity Suite',
      revenue: '+$1.8M',
      timeframe: '6 months'
    },
    {
      avatar: '🧬',
      name: 'Dr. Michael Thompson',
      role: 'Research Director',
      company: 'BioPharma Innovations',
      rating: 5,
      content: 'Our Biomedical AI Platform has accelerated drug discovery by 10x. We\'ve identified promising compounds in months that would have taken years with traditional methods.',
      service: 'Biomedical AI Platform',
      revenue: '+$15M',
      timeframe: '18 months'
    }
  ];

  // Enhanced market insights with real data
  const enhancedMarketInsights = [
    {
      metric: '$8.5B',
      label: 'Quantum Finance Market',
      description: 'Growing at 450% annually',
      icon: <DollarSign className="w-6 h-6" />,
      color: 'from-emerald-500 to-teal-600',
      opportunity: 'First-mover advantage in quantum financial optimization',
      competitors: 'Bloomberg, Refinitiv, FactSet',
      ourAdvantage: 'Quantum computing integration + AI algorithms'
    },
    {
      metric: '$12.3B',
      label: 'Autonomous Manufacturing',
      description: '320% annual growth rate',
      icon: <Factory className="w-6 h-6" />,
      color: 'from-orange-500 to-red-600',
      opportunity: 'Industry 4.0 transformation accelerating globally',
      competitors: 'Siemens, PTC, GE Digital',
      ourAdvantage: 'Full autonomy + AI integration'
    },
    {
      metric: '$6.8B',
      label: 'Quantum Cybersecurity',
      description: '380% annual growth rate',
      icon: <Shield className="w-6 h-6" />,
      color: 'from-red-500 to-pink-600',
      opportunity: 'Post-quantum security becoming critical',
      competitors: 'Palo Alto, CrowdStrike, SentinelOne',
      ourAdvantage: 'Quantum-resistant algorithms + AI detection'
    },
    {
      metric: '$4.2B',
      label: 'Space Technology',
      description: '290% annual growth rate',
      icon: <Rocket className="w-6 h-6" />,
      color: 'from-blue-500 to-indigo-600',
      opportunity: 'Commercial space sector expanding rapidly',
      competitors: 'Maxar, Planet Labs, BlackSky',
      ourAdvantage: 'Comprehensive space services + AI integration'
    },
    {
      metric: '$3.6B',
      label: 'Metaverse Development',
      description: '400% annual growth rate',
      icon: <Globe className="w-6 h-6" />,
      color: 'from-purple-500 to-violet-600',
      opportunity: 'Virtual experiences becoming mainstream',
      competitors: 'Unity, Unreal Engine, Roblox',
      ourAdvantage: 'AI content generation + blockchain integration'
    },
    {
      metric: '$3.2B',
      label: 'Biomedical AI',
      description: '200% annual growth rate',
      icon: <FlaskConical className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-600',
      opportunity: 'AI revolutionizing drug discovery',
      competitors: 'Insitro, Atomwise, BenevolentAI',
      ourAdvantage: 'Quantum computing + comprehensive AI algorithms'
    }
  ];

  // Enhanced pricing comparison
  const pricingComparison = [
    {
      category: 'AI Content Generation',
      ourPrice: '$49/month',
      competitors: ['Jasper: $39-99', 'Copy.ai: $36-186', 'Writesonic: $12.67-100'],
      ourAdvantage: 'Better SEO optimization, multi-language support, brand voice consistency'
    },
    {
      category: 'AI Customer Service',
      ourPrice: '$79/month',
      competitors: ['Intercom: $39-499', 'Zendesk: $49-215', 'Freshdesk: $15-99'],
      ourAdvantage: 'Better AI understanding, multi-language support, cost-effectiveness'
    },
    {
      category: 'Quantum AI Platform',
      ourPrice: '$2,999/month',
      competitors: ['IBM Quantum: $1,000-5,000', 'Google Quantum: $2,000-8,000'],
      ourAdvantage: 'First commercial quantum AI platform, comprehensive AI integration'
    },
    {
      category: 'Autonomous Manufacturing',
      ourPrice: '$1,499/month',
      competitors: ['Siemens Mindsphere: $500-2,000', 'PTC ThingWorx: $1,000-3,000'],
      ourAdvantage: 'Full autonomy, AI integration, comprehensive automation'
    }
  ];

  return (
    <UltraFuturisticBackground variant="quantum">
      <Head>
        <title>Zion Tech Group - Revolutionary Micro SaaS Platform</title>
        <meta name="description" content="150+ revolutionary micro SaaS services transforming business technology. From Quantum AI to Autonomous Factories, we deliver real results with proven ROI." />
        <meta name="keywords" content="Zion Tech Group, micro SaaS, quantum AI, autonomous manufacturing, cybersecurity, biomedical research, financial technology, space technology, metaverse, blockchain, IoT, edge computing" />
        <meta name="author" content="Zion Tech Group" />
        <meta property="og:title" content="Zion Tech Group - Revolutionary Micro SaaS Platform" />
        <meta property="og:description" content="150+ revolutionary micro SaaS services transforming business technology" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
                <Sparkles className="w-5 h-5 text-cyan-400 mr-2" />
                <span className="text-cyan-400 font-medium">150+ Revolutionary Services Available</span>
              </div>
            </motion.div>

            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-6 futuristic-glow"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                The Future of Business
              </span>
              <br />
              <span className="text-white">Technology is Here</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transform your business with cutting-edge micro SaaS solutions. From Quantum AI to Autonomous Factories, 
              we deliver real results with proven ROI. No mock services, no empty promises - just innovative technology that drives growth.
            </motion.p>

            {/* Hero Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {heroStats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex justify-center mb-3">
                    <div className="p-3 rounded-full bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50 group-hover:border-cyan-500/50 transition-all duration-300">
                      {stat.icon}
                    </div>
                  </div>
                  <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                href="/micro-saas" 
                variant="primary" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                Explore Revolutionary Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                href="#contact" 
                variant="secondary" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                Schedule a Demo
                <Rocket className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Innovation Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Innovation Categories
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our revolutionary services across cutting-edge technology domains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {enhancedCategories.map((category, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`p-8 rounded-2xl bg-gradient-to-br ${category.color} bg-opacity-10 border border-gray-700/50 group-hover:border-cyan-500/50 transition-all duration-300 h-full`}>
                  <div className="flex justify-center mb-6">
                    <div className={`p-4 rounded-full bg-gradient-to-r ${category.color} bg-opacity-20`}>
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">{category.name}</h3>
                  <p className="text-gray-300 text-center mb-6">{category.description}</p>
                  <ul className="space-y-2">
                    {category.featuredServices.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center text-sm text-gray-400">
                        <Check className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Revolutionary Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our cutting-edge micro SaaS solutions that are transforming industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {revolutionaryServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <EnhancedFuturisticCard
                  variant={service.variant as any}
                  className="h-full"
                  intensity="high"
                >
                  <div className="text-center p-6">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
                    <div className="flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-gray-400 ml-1">{service.period}</span>
                    </div>
                    <div className="flex items-center justify-center mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-gray-400 text-sm ml-2">({service.reviews})</span>
                    </div>
                    <div className="text-sm text-gray-400 mb-4">{service.category}</div>
                    <Button
                      href={service.link}
                      variant="secondary"
                      size="sm"
                      className="w-full"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </EnhancedFuturisticCard>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Button 
              href="/micro-saas" 
              variant="primary" 
              size="lg"
              className="text-lg px-8 py-4"
            >
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Market Insights
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the explosive growth potential in emerging technology markets
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enhancedMarketInsights.map((insight, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`p-8 rounded-2xl bg-gradient-to-br ${insight.color} bg-opacity-10 border border-gray-700/50 group-hover:border-cyan-500/50 transition-all duration-300 h-full`}>
                  <div className="flex justify-center mb-6">
                    <div className={`p-4 rounded-full bg-gradient-to-r ${insight.color} bg-opacity-20`}>
                      {insight.icon}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">{insight.metric}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{insight.label}</h3>
                    <p className="text-gray-300">{insight.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Customer Success Stories
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our revolutionary services are transforming businesses worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {enhancedTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 group-hover:border-cyan-500/50 transition-all duration-300 h-full">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{testimonial.avatar}</div>
                    <div className="flex justify-center mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-gray-300 mb-6 italic">"{testimonial.content}"</blockquote>
                  <div className="text-center">
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                    <div className="text-cyan-400 text-sm mt-2">{testimonial.service}</div>
                    <div className="text-gray-400 text-sm mt-1">Revenue: {testimonial.revenue} in {testimonial.timeframe}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Pricing Comparison
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Compare our competitive pricing with industry leaders
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pricingComparison.map((item, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">{item.category}</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-gray-300">Our Price</div>
                    <div className="text-white font-bold text-2xl">{item.ourPrice}</div>
                  </div>
                  <div className="text-gray-300">Competitors</div>
                  <ul className="space-y-2">
                    {item.competitors.map((comp, compIndex) => (
                      <li key={compIndex} className="text-gray-400 text-sm">{comp}</li>
                    ))}
                  </ul>
                  <div className="text-gray-300">Our Advantage</div>
                  <p className="text-gray-400 text-sm">{item.ourAdvantage}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                Get Started Today
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business with revolutionary technology? Contact us now.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50">
                  <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-cyan-400 mr-3" />
                      <div>
                        <div className="text-white font-medium">Mobile</div>
                        <div className="text-gray-300">{contactInfo.mobile}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-cyan-400 mr-3" />
                      <div>
                        <div className="text-white font-medium">Email</div>
                        <div className="text-gray-300">{contactInfo.email}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-cyan-400 mr-3" />
                      <div>
                        <div className="text-white font-medium">Address</div>
                        <div className="text-gray-300">{contactInfo.address}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Globe className="w-5 h-5 text-cyan-400 mr-3" />
                      <div>
                        <div className="text-white font-medium">Website</div>
                        <div className="text-gray-300">{contactInfo.website}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50">
                  <h3 className="text-2xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <div className="text-gray-300">150+ revolutionary micro SaaS services</div>
                    </div>
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <div className="text-gray-300">Real implementations, not mock services</div>
                    </div>
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <div className="text-gray-300">Proven ROI with 500%+ average returns</div>
                    </div>
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <div className="text-gray-300">30+ day free trials on all services</div>
                    </div>
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <div className="text-gray-300">24/7 AI-powered support</div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button 
                      href="/micro-saas" 
                      variant="primary" 
                      size="lg"
                      className="w-full"
                    >
                      Explore All Services
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </UltraFuturisticBackground>
  );
}
