import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, ChevronRight, Crown, Infinity, Zap as ZapIcon2, Shield as ShieldIcon, Users as UsersIcon, Globe as GlobeIcon, Cpu as CpuIcon, Database as DatabaseIcon2, Cloud as CloudIcon, Smartphone as SmartphoneIcon, Palette as PaletteIcon, Search as SearchIcon, MessageSquare as MessageSquareIcon, FileText as MessageSquareIcon2, Calendar as CalendarIcon, CreditCard as CreditCardIcon, BarChart3 as BarChart3Icon, Settings as SettingsIcon, Zap as ZapIcon3, Code as CodeIcon, BookOpen as CodeIcon2, Activity as ActivityIcon, Database as DatabaseIcon3, Play as PlayIcon, Mail as MailIcon, Phone as PhoneIcon, MapPin as MapPinIcon, Filter as FilterIcon, Grid as GridIcon, List as ListIcon, ChevronDown as ChevronDownIcon, ChevronUp as ChevronUpIcon, Sparkles as SparklesIcon, FlaskConical as FlaskConicalIcon, Dna as DnaIcon, Car as CarIcon, Leaf as LeafIcon, Factory as FactoryIcon, Truck as TruckIcon, Microscope as MicroscopeIcon, GraduationCap as GraduationCapIcon, ShieldCheck as ShieldCheckIcon, Brain as BrainIcon, Atom as AtomIcon, Globe2 as Globe2Icon, Bot as BotIcon, ChevronRight as ChevronRightIcon } from 'lucide-react';


import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';
import { enhancedRealMicroSaasServices, getServicesByCategory, getPopularServices } from '../data/enhanced-real-micro-saas-services';
import { nextGenerationAIServices } from '../data/next-generation-ai-services';
import { cuttingEdgeITServices } from '../data/cutting-edge-it-services';
import { innovativeMicroSaasV2Services } from '../data/innovative-micro-saas-v2';
import { innovative2026MicroSaasServicesV2 } from '../data/innovative-2026-micro-saas-v2';
import { emergingTech2026ServicesV2 } from '../data/emerging-tech-2026-services-v2';
import { enterpriseIT2026ServicesV2 } from '../data/enterprise-it-2026-services-v2';
import { innovative2026AIServicesV3 } from '../data/innovative-2026-ai-services-v3';
import { emergingTech2026ServicesV3 } from '../data/emerging-tech-2026-services-v3';
import { enterpriseIT2026ServicesV3 } from '../data/enterprise-it-2026-services-v3';

export default function PricingEnhanced2026Page() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const popularServices = getPopularServices();
  
  // Combine all services for comprehensive pricing
  const allServices = [
    ...enhancedRealMicroSaasServices,
    ...nextGenerationAIServices,
    ...cuttingEdgeITServices,
    ...innovativeMicroSaasV2Services,
    ...innovative2026MicroSaasServicesV2,
    ...emergingTech2026ServicesV2,
    ...enterpriseIT2026ServicesV2,
    ...innovative2026AIServicesV3,
    ...emergingTech2026ServicesV3,
    ...enterpriseIT2026ServicesV3
  ];

  // Enhanced service categories with pricing for 2026
  const serviceCategories = [
    {
      name: 'Next-Generation AI 2026',
      description: 'Revolutionary AI platforms with quantum integration',
      services: ['AI Quantum Financial Trading', 'AI Healthcare Diagnostics', 'AI Autonomous Manufacturing', 'AI Cybersecurity Threat Intelligence'],
      avgPrice: '$2,499/month',
      savings: 'Save 60-80% vs. competitors',
      icon: Brain,
      color: 'from-purple-500 to-indigo-600'
    },
    {
      name: 'Quantum & Emerging Tech 2026',
      description: 'Cutting-edge quantum and emerging technologies',
      services: ['Quantum Internet Security', 'Neuromorphic Computing', 'DNA Computing', 'Photonic Computing', 'Holographic Display'],
      avgPrice: '$4,199/month',
      savings: 'Save 70-85% vs. competitors',
      icon: Atom,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'Enterprise IT Solutions 2026',
      description: 'Advanced enterprise infrastructure and security',
      services: ['Zero Trust Network Architecture', 'Edge Computing Orchestration', '5G Private Networks', 'Blockchain Infrastructure', 'AI DevOps Automation'],
      avgPrice: '$5,199/month',
      savings: 'Save 50-75% vs. competitors',
      icon: Shield,
      color: 'from-red-500 to-pink-600'
    },
    {
      name: 'Innovative Micro SaaS 2026',
      description: 'Creative and practical SaaS tools',
      services: ['AI Content Creation Studio', 'AI Business Intelligence Suite', 'AI Customer Success Platform', 'AI Meeting Transcriber'],
      avgPrice: '$299/month',
      savings: 'Save 40-60% vs. competitors',
      icon: Rocket,
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Healthcare & Biotech 2026',
      description: 'AI-powered healthcare and biotechnology solutions',
      services: ['AI Healthcare Diagnostics', 'DNA Computing Platform', 'Neuromorphic Healthcare AI', 'Quantum Medical Imaging'],
      avgPrice: '$3,999/month',
      savings: 'Save 65-80% vs. competitors',
      icon: FlaskConical,
      color: 'from-blue-500 to-teal-600'
    },
    {
      name: 'Financial Technology 2026',
      description: 'Advanced financial and trading solutions',
      services: ['AI Quantum Financial Trading', 'Blockchain Infrastructure', 'Quantum Internet Security', 'Photonic Computing'],
      avgPrice: '$4,499/month',
      savings: 'Save 55-75% vs. competitors',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-600'
    }
  ];

  // Enhanced pricing tiers with more realistic and comprehensive offerings
  const pricingTiers = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: billingCycle === 'monthly' ? 99 : 79,
      period: billingCycle === 'monthly' ? '/month' : '/month',
      savings: billingCycle === 'yearly' ? 'Save 20%' : '',
      features: [
        'Access to 100+ Core Services',
        'Basic AI Integration',
        'Standard Support (24/7)',
        '30-Day Free Trial',
        'Basic Analytics Dashboard',
        'Email Support',
        '99.5% Uptime Guarantee',
        'Standard Security Features',
        'Mobile App Access',
        'API Access (1000 calls/month)'
      ],
      icon: <Sparkles className="w-8 h-8" />,
      variant: 'quantum' as const,
      popular: false,
      cta: 'Start Free Trial',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses and teams',
      price: billingCycle === 'monthly' ? 299 : 239,
      period: billingCycle === 'monthly' ? '/month' : '/month',
      savings: billingCycle === 'yearly' ? 'Save 20%' : '',
      features: [
        'Access to 500+ Services',
        'Advanced AI & Quantum Features',
        'Priority Support (24/7)',
        '60-Day Free Trial',
        'Advanced Analytics & Reporting',
        'Phone & Email Support',
        '99.9% Uptime Guarantee',
        'Enhanced Security Features',
        'Custom Integrations',
        'API Access (10,000 calls/month)',
        'Team Collaboration Tools',
        'Advanced Workflow Automation'
      ],
      icon: <Star className="w-8 h-8" />,
      variant: 'holographic' as const,
      popular: true,
      cta: 'Start Free Trial',
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Enterprise',
      description: 'For large organizations and enterprises',
      price: billingCycle === 'monthly' ? 999 : 799,
      period: billingCycle === 'monthly' ? '/month' : '/month',
      savings: billingCycle === 'yearly' ? 'Save 20%' : '',
      features: [
        'Access to ALL Services (1000+)',
        'Full AI & Quantum Suite',
        'Dedicated Support Team',
        '90-Day Free Trial',
        'Enterprise Analytics & BI',
        '24/7 Dedicated Support',
        '99.99% Uptime Guarantee',
        'Enterprise Security & Compliance',
        'Custom Development',
        'Unlimited API Access',
        'Advanced Team Management',
        'White-label Solutions',
        'Custom SLA Agreements',
        'On-site Implementation'
      ],
      icon: <Crown className="w-8 h-8" />,
      variant: 'quantum-advanced' as const,
      popular: false,
      cta: 'Contact Sales',
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  // Featured services showcase
  const featuredServices = [
    {
      name: 'AI Quantum Financial Trading',
      price: '$2,999/month',
      description: 'Revolutionary AI-powered quantum trading with 99.9% accuracy',
      features: ['Quantum-inspired AI algorithms', 'Real-time market analysis', 'Automated trading strategies'],
      link: 'https://ziontechgroup.com/services/ai-quantum-financial-trading',
      icon: '📈',
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Zero Trust Network Architecture 2026',
      price: '$6,999/month',
      description: 'Next-generation network security with continuous verification',
      features: ['Continuous verification', 'Micro-segmentation', 'Real-time threat detection'],
      link: 'https://ziontechgroup.com/services/zero-trust-network-architecture-2026',
      icon: '🛡️',
      color: 'from-red-500 to-pink-600'
    },
    {
      name: 'AI Healthcare Diagnostics Platform',
      price: '$1,499/month',
      description: 'AI-powered medical diagnostics with 95% accuracy rate',
      features: ['Medical image analysis', 'Diagnosis prediction', 'Treatment recommendations'],
      link: 'https://ziontechgroup.com/services/ai-healthcare-diagnostics',
      icon: '🏥',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'Quantum Internet Security Platform',
      price: '$4,999/month',
      description: 'Unbreakable quantum encryption for the future internet',
      features: ['Quantum key distribution', 'Post-quantum cryptography', 'Real-time threat detection'],
      link: 'https://ziontechgroup.com/services/quantum-internet-security-platform',
      icon: '🔐',
      color: 'from-blue-500 to-cyan-600'
    }
  ];

  return (
    <UltraFuturisticBackground  intensity="high">
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
        <Head>
          <title>Enhanced 2026 Pricing - Zion Tech Group</title>
          <meta name="description" content="Discover our comprehensive 2026 pricing for innovative AI, quantum computing, and enterprise IT services. Achieve remarkable ROI with our cutting-edge solutions." />
          <meta name="keywords" content="2026 pricing, AI services pricing, quantum computing pricing, enterprise IT pricing, micro SaaS pricing, ROI guarantee" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          
          {/* Open Graph */}
          <meta property="og:title" content="Enhanced 2026 Pricing - Zion Tech Group" />
          <meta property="og:description" content="Discover our comprehensive 2026 pricing for innovative AI, quantum computing, and enterprise IT services." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://ziontechgroup.com/pricing-enhanced-2026" />
          <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
          
          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Enhanced 2026 Pricing - Zion Tech Group" />
          <meta name="twitter:description" content="Discover our comprehensive 2026 pricing for innovative AI, quantum computing, and enterprise IT services." />
          <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
        </Head>
        {/* Enhanced Header Section */}
        <div className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }} className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
              Enhanced 2026 Pricing
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with our comprehensive collection of innovative AI, quantum computing, and enterprise IT services. 
              Achieve remarkable ROI with transparent, competitive pricing.
            </p>

            {/* Billing Cycle Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
                  billingCycle === 'yearly' ? 'bg-cyan-600' : 'bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly <span className="text-cyan-400 text-sm">(Save 20%)</span>
              </span>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-xl p-6 border border-gray-600/30 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Need Custom Pricing?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="w-4 h-4 text-purple-400" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span className="text-center">{contactInfo.address}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Pricing Tiers */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }} className="relative">
                  <UltraFuturisticCard
                    className={`h-full ${tier.popular ? 'ring-2 ring-cyan-500 ring-opacity-50' : ''}`}
                  >
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </div>
                      </div>
                    )}
                    
                    <div className="p-8 text-center">
                      <div className="flex justify-center mb-4">
                        <div className={`p-3 rounded-full bg-gradient-to-r ${tier.color}`}>
                          {tier.icon}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                      <p className="text-gray-400 mb-6">{tier.description}</p>
                      
                      <div className="mb-6">
                        <span className="text-4xl font-bold text-cyan-400">${tier.price}</span>
                        <span className="text-gray-400">{tier.period}</span>
                        {tier.savings && (
                          <div className="text-sm text-green-400 mt-1">{tier.savings}</div>
                        )}
                      </div>
                      
                      <ul className="text-left space-y-3 mb-8">
                        {tier.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                                             <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200"
                         onClick={() => {
                           if (tier.name === 'Enterprise') {
                             window.open(`mailto:${contactInfo.email}?subject=Enterprise Pricing Inquiry`, '_blank');
                           } else {
                             window.open(`mailto:${contactInfo.email}?subject=Start Free Trial - ${tier.name}`, '_blank');
                           }
                         }}
                       >
                         {tier.cta}
                       </button>
                    </div>
                  </UltraFuturisticCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Service Categories */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Service Categories & Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive service categories with transparent pricing and competitive advantages
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <UltraFuturisticCard className="h-full">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className={`p-3 rounded-full bg-gradient-to-r ${category.color} mr-4`}>
                          <category.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white">{category.name}</h3>
                      </div>
                      
                      <p className="text-gray-400 mb-4">{category.description}</p>
                      
                      <div className="mb-4">
                        <span className="text-2xl font-bold text-cyan-400">{category.avgPrice}</span>
                        <div className="text-sm text-green-400">{category.savings}</div>
                      </div>
                      
                      <ul className="space-y-2 mb-4">
                        {category.services.map((service, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {service}
                          </li>
                        ))}
                      </ul>
                      
                      <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-lg transition-all duration-200 flex items-center justify-center"
                        onClick={() => window.open(`/2026-services-showcase-enhanced`, '_blank')}
                      >
                        View Services
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </UltraFuturisticCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Services Showcase */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Featured Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our most popular and innovative services that are transforming businesses worldwide
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <UltraFuturisticCard className="h-full">
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-4xl">{service.icon}</div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                          <div className="text-sm text-gray-400">Starting price</div>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                      <p className="text-gray-400 mb-4">{service.description}</p>
                      
                      <ul className="space-y-2 mb-4">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex space-x-2">
                        <button className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-medium rounded-lg transition-all duration-200 flex items-center justify-center"
                          onClick={() => window.open(service.link, '_blank')}
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </button>
                        <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-lg transition-all duration-200 flex items-center justify-center"
                          onClick={() => window.open(`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`, '_blank')}
                        >
                          Contact
                        </button>
                      </div>
                    </div>
                  </UltraFuturisticCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Footer CTA */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }} className="bg-gradient-to-r from-cyan-900/50 via-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our innovative services to gain competitive advantages and achieve remarkable ROI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-medium rounded-lg transition-all duration-200 flex items-center justify-center"
                  onClick={() => window.open(`mailto:${contactInfo.email}?subject=Business Transformation Consultation`, '_blank')}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-lg transition-all duration-200 flex items-center justify-center"
                  onClick={() => window.open(`tel:${contactInfo.mobile}`, '_blank')}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </button>
              </div>
              <div className="mt-8 text-sm text-gray-400">
                <p>Contact: {contactInfo.mobile} | {contactInfo.email}</p>
                <p>{contactInfo.address}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </UltraFuturisticBackground>
  );
}