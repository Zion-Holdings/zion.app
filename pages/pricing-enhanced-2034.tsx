import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, ChevronRight, Crown, Infinity, Zap as ZapIcon2, Shield as ShieldIcon, Users as UsersIcon, Globe as GlobeIcon, Cpu as CpuIcon, Database as DatabaseIcon2, Cloud as CloudIcon, Smartphone as SmartphoneIcon, Palette as PaletteIcon, Search as SearchIcon, MessageSquare as MessageSquareIcon, FileText as MessageSquareIcon2, Calendar as CalendarIcon, CreditCard as CreditCardIcon, BarChart3 as BarChart3Icon, Settings as SettingsIcon, Zap as ZapIcon3, Code as CodeIcon, BookOpen as CodeIcon2, Activity as ActivityIcon, Database as DatabaseIcon3, Play as PlayIcon, Mail as MailIcon, Phone as PhoneIcon, MapPin as MapPinIcon, Filter as FilterIcon, Grid as GridIcon, List as ListIcon, ChevronDown as ChevronDownIcon, ChevronUp as ChevronUpIcon, Sparkles as SparklesIcon, FlaskConical as FlaskConicalIcon, Dna as DnaIcon, Car as CarIcon, Leaf as LeafIcon, Factory as FactoryIcon, Truck as TruckIcon, Microscope as MicroscopeIcon, GraduationCap as GraduationCapIcon, ShieldCheck as ShieldCheckIcon, Brain as BrainIcon, Atom as AtomIcon, Globe2 as Globe2Icon, Bot as BotIcon, ChevronRight as ChevronRightIcon 
} from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
import { innovativeMicroSaasServicesV2 } from '../data/2025-innovative-micro-saas-v2';
import { emergingTechBreakthroughServices } from '../data/2025-emerging-tech-breakthroughs';
import { nextGenerationAIServices } from '../data/next-generation-ai-services';
import { cuttingEdgeITServices } from '../data/cutting-edge-it-services';
import { innovative2026MicroSaasServicesV2 } from '../data/innovative-2026-micro-saas-v2';
import { emergingTech2026ServicesV2 } from '../data/emerging-tech-2026-services-v2';
import { enterpriseIT2026ServicesV2 } from '../data/enterprise-it-2026-services-v2';
import { innovative2026AIServicesV3 } from '../data/innovative-2026-ai-services-v3';
import { emergingTech2026ServicesV3 } from '../data/emerging-tech-2026-services-v3';
import { enterpriseIT2026ServicesV3 } from '../data/enterprise-it-2026-services-v3';

export default function PricingEnhanced2034Page() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Combine all services for comprehensive pricing
  const allServices = [
    ...enhancedRealMicroSaasServices,
    ...innovativeMicroSaasServicesV2,
    ...emergingTechBreakthroughServices,
    ...nextGenerationAIServices,
    ...cuttingEdgeITServices,
    ...innovative2026MicroSaasServicesV2,
    ...emergingTech2026ServicesV2,
    ...enterpriseIT2026ServicesV2,
    ...innovative2026AIServicesV3,
    ...emergingTech2026ServicesV3,
    ...enterpriseIT2026ServicesV3
  ];

  // Enhanced service categories with pricing for 2034
  const serviceCategories = [
    {
      name: '🚀 2034 Innovative Micro SAAS',
      description: 'Cutting-edge micro solutions for modern businesses',
      services: ['AI Business Intelligence Suite Pro', 'AI Customer Success Automation', 'AI Meeting Transcriber Pro', 'Blockchain Supply Chain Transparency'],
      avgPrice: '$349/month',
      savings: 'Save 40-70% vs. competitors',
      icon: Rocket,
      color: 'from-green-500 to-emerald-600',
      popular: true
    },
    {
      name: '🧠 2034 AI Consciousness & Creativity',
      description: 'Next-generation AI consciousness and creativity platforms',
      services: ['AI Consciousness Evolution Platform', 'AI Emotional Intelligence Platform', 'AI Creativity Orchestrator', 'AI Autonomous Business Manager'],
      avgPrice: '$12,999/month',
      savings: 'Save 60-80% vs. competitors',
      icon: Brain,
      color: 'from-violet-500 to-indigo-600'
    },
    {
      name: '⚛️ 2034 Quantum & Emerging Tech',
      description: 'Revolutionary quantum and emerging technologies',
      services: ['Quantum Internet Security Gateway', 'Biotech DNA Computing Platform', 'Quantum Financial Trading Platform', 'Quantum Creativity Studio'],
      avgPrice: '$22,999/month',
      savings: 'Save 70-85% vs. competitors',
      icon: Atom,
      color: 'from-indigo-500 to-blue-600'
    },
    {
      name: '🔬 2034 Research & Development',
      description: 'Cutting-edge research platforms and breakthrough technologies',
      services: ['Neuromorphic Computing Platform', 'DNA Computing Platform', 'Photonic Computing Infrastructure', 'Holographic Display Technology'],
      avgPrice: '$3,999/month',
      savings: 'Save 50-75% vs. competitors',
      icon: Microscope,
      color: 'from-orange-500 to-red-600'
    },
    {
      name: '🏙️ 2034 Enterprise IT Solutions',
      description: 'Advanced enterprise infrastructure and security',
      services: ['Autonomous DevOps Platform', 'Zero Trust Network Architecture', 'Edge Computing Orchestration', 'AI-Powered IT Operations Center'],
      avgPrice: '$699/month',
      savings: 'Save 50-75% vs. competitors',
      icon: Cpu,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: '🌌 2034 Space & Metaverse Tech',
      description: 'Space exploration and digital reality solutions',
      services: ['Space Mining Automation Platform', 'Metaverse Development Platform', 'AI Predictive Health Analytics', 'Swarm Robotics Orchestration'],
      avgPrice: '$15,999/month',
      savings: 'Save 65-80% vs. competitors',
      icon: Globe,
      color: 'from-teal-500 to-emerald-600'
    }
  ];

  const popularServices = allServices.filter(service => service.popular).slice(0, 6);

  return (
    <>
      <Head>
        <title>2034 Enhanced Pricing - Zion Tech Group | Revolutionary Technology Solutions</title>
        <meta name="description" content="Discover our comprehensive 2034 pricing for AI consciousness, quantum computing, emerging technologies, and 500+ revolutionary services. Competitive pricing with massive savings." />
        <meta name="keywords" content="2034 pricing, AI consciousness, quantum computing, emerging technologies, micro SAAS, enterprise IT, space technology, metaverse, competitive pricing" />
        <meta property="og:title" content="2034 Enhanced Pricing - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive 2034 pricing for revolutionary technology solutions. Save 40-85% vs competitors." />
        <meta property="og:url" content="https://ziontechgroup.com/pricing-enhanced-2034" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="2034 Enhanced Pricing - Zion Tech Group" />
        <meta name="twitter:description" content="Comprehensive 2034 pricing for revolutionary technology solutions. Save 40-85% vs competitors." />
        <link rel="canonical" href="https://ziontechgroup.com/pricing-enhanced-2034" />
      </Head>

      <UltraFuturisticBackground>
        <div className="min-h-screen bg-black text-white">
          {/* Hero Section */}
          <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  2034 Enhanced Pricing
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
                  Experience the future of technology with our comprehensive pricing for AI consciousness, 
                  quantum computing, emerging technologies, and 500+ revolutionary services.
                </p>
                
                {/* Billing Toggle */}
                <div className="flex items-center justify-center space-x-4">
                  <span className={`text-sm ${billingCycle === 'monthly' ? 'text-cyan-400' : 'text-gray-400'}`}>
                    Monthly
                  </span>
                  <button
                    onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                    className="relative w-16 h-8 bg-gray-700 rounded-full p-1 transition-colors duration-300"
                  >
                    <motion.div
                      className="w-6 h-6 bg-cyan-400 rounded-full shadow-lg"
                      animate={{ x: billingCycle === 'monthly' ? 0 : 32 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  </button>
                  <span className={`text-sm ${billingCycle === 'yearly' ? 'text-cyan-400' : 'text-gray-400'}`}>
                    Yearly <span className="text-green-400">(Save 20%)</span>
                  </span>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Service Categories */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.h2 
                className="text-4xl font-bold text-white text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                🎯 Service Categories & Pricing
              </motion.h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {serviceCategories.map((category, index) => (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative p-6 rounded-2xl bg-gradient-to-br ${category.color} bg-opacity-10 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 ${category.popular ? 'ring-2 ring-cyan-500/50' : ''}`}
                  >
                    {category.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                          MOST POPULAR
                        </span>
                      </div>
                    )}
                    
                    <div className="flex items-center space-x-3 mb-4">
                      <category.icon className="w-8 h-8 text-cyan-400" />
                      <h3 className="text-xl font-bold text-white">{category.name}</h3>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4">{category.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      {category.services.map((service, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span className="text-sm text-gray-400">{service}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">{category.avgPrice}</div>
                      <div className="text-sm text-green-400 mb-2">{category.savings}</div>
                      <Button
                        href="/contact"
                        className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
                      >
                        Get Started
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Popular Services Grid */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900/50 to-black/50">
            <div className="max-w-7xl mx-auto">
              <motion.h2 
                className="text-4xl font-bold text-white text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                ⭐ Popular Services
              </motion.h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {popularServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative"
                  >
                    <div className={`relative p-6 rounded-2xl bg-gradient-to-br ${service.color} bg-opacity-10 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 h-full`}>
                      {/* Service Icon */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-4xl">{service.icon}</div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-300">{service.rating}</span>
                        </div>
                      </div>

                      {/* Service Content */}
                      <h4 className="text-xl font-bold text-white mb-2">{service.name}</h4>
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">{service.description}</p>

                      {/* Features */}
                      <div className="space-y-2 mb-6">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                            <span className="text-xs text-gray-400">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Price and CTA */}
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                          <span className="text-gray-400">{service.period}</span>
                        </div>
                        <Link
                          href={service.link}
                          className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2 group-hover:scale-105"
                        >
                          <span>Learn More</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Ready to <span className="text-cyan-400">Transform</span> Your Business?
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Join thousands of forward-thinking companies already leveraging our revolutionary technology solutions. 
                  Get started today and secure your competitive advantage for the next decade.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    href={`tel:${contactInfo.mobile}`}
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call Now: {contactInfo.mobile}</span>
                  </Button>
                  
                  <Button
                    href={`mailto:${contactInfo.email}`}
                    variant="outline"
                    className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-semibold py-3 px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Email Us</span>
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
                    <div className="text-gray-300">Innovative Services</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
                    <div className="text-gray-300">Expert Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-pink-400 mb-2">100%</div>
                    <div className="text-gray-300">Real Solutions</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </UltraFuturisticBackground>
    </>
  );
}