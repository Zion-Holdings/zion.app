import React, { useState } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, ChevronRight, Crown, Infinity, Zap as ZapIcon2, Shield as ShieldIcon, Users as UsersIcon, Globe as GlobeIcon, Cpu as CpuIcon, Database as DatabaseIcon2, Cloud as CloudIcon, Smartphone as SmartphoneIcon, Palette as PaletteIcon, Search as SearchIcon, MessageSquare as MessageSquareIcon, FileText as FileTextIcon, Calendar as CalendarIcon, CreditCard as CreditCardIcon, BarChart3 as BarChart3Icon, Settings as SettingsIcon, Zap as ZapIcon3, Code as CodeIcon, BookOpen as BookOpenIcon, Activity as ActivityIcon, Database as DatabaseIcon3, Play as PlayIcon, Mail as MailIcon, Phone as PhoneIcon, MapPin as MapPinIcon, Filter as FilterIcon, Grid as GridIcon, List as ListIcon, ChevronDown as ChevronDownIcon, ChevronUp as ChevronUpIcon, Sparkles as SparklesIcon, FlaskConical as FlaskConicalIcon, Dna as DnaIcon, Car as CarIcon, Leaf as LeafIcon, Factory as FactoryIcon, Truck as TruckIcon, Microscope as MicroscopeIcon, GraduationCap as GraduationCapIcon, ShieldCheck as ShieldCheckIcon, Brain as BrainIcon, Atom as AtomIcon, Globe2 as Globe2Icon, Bot as BotIcon, ChevronRight as ChevronRightIcon } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';
import { enhancedRealMicroSaasServices, getServicesByCategory, getPopularServices } from '../data/enhanced-real-micro-saas-services';
import { nextGenerationAIServices } from '../data/next-generation-ai-services';
import { cuttingEdgeITServices } from '../data/cutting-edge-it-services';
import { innovativeMicroSaasV2Services } from '../data/innovative-micro-saas-v2';
import { innovative2026MicroSaasServicesV2 } from '../data/innovative-2026-micro-saas-v2';
import { emergingTech2026ServicesV2 } from '../data/emerging-tech-2026-services-v2';
import { enterpriseIT2026ServicesV2 } from '../data/enterprise-it-2026-services-v2';
import { revolutionary2026MicroSaasServices } from '../data/revolutionary-2026-micro-saas-services';
import { revolutionary2026ITServices } from '../data/revolutionary-2026-it-services';
import { revolutionary2026AIServices } from '../data/revolutionary-2026-ai-services';
import { innovative2030MicroSaasServices } from '../data/2030-innovative-micro-saas-services';
import { innovative2030ITServices } from '../data/2030-innovative-it-services';
import { innovative2030AIServices } from '../data/2030-innovative-ai-services';
import { emergingTech2030Services } from '../data/2030-emerging-tech-services';

export default function PricingPage() {
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
    ...revolutionary2026MicroSaasServices,
    ...revolutionary2026ITServices,
    ...revolutionary2026AIServices,
    ...innovative2030MicroSaasServices,
    ...innovative2030ITServices,
    ...innovative2030AIServices,
    ...emergingTech2030Services
  ];

  // Enhanced service categories with pricing
  const serviceCategories = [
    {
      name: 'Next-Generation AI',
      description: 'Revolutionary AI platforms',
      services: ['AI Multimodal Fusion', 'AI Autonomous Decision Engine', 'AI Emotional Intelligence'],
      avgPrice: '$3,199/month',
      savings: 'Save 60-80% vs. competitors'
    },
    {
      name: 'Cutting-Edge IT Infrastructure',
      description: 'Advanced infrastructure solutions',
      services: ['Zero Trust Architecture', 'Edge Computing Orchestration', '5G Private Networks'],
      avgPrice: '$4,999/month',
      savings: 'Save 50-70% vs. competitors'
    },
    {
      name: 'Innovative Micro SaaS',
      description: 'Creative and practical SaaS tools',
      services: ['AI Brand Personality', 'Virtual Event Holograms', 'AI Meeting Transcriber'],
      avgPrice: '$199/month',
      savings: 'Save 40-60% vs. competitors'
    },
    {
      name: 'Quantum & Space Technology',
      description: 'Quantum computing and space solutions',
      services: ['Quantum AI Hybrid', 'Space Technology Platform', 'Quantum Cybersecurity'],
      avgPrice: '$5,999/month',
      savings: 'Save 70-85% vs. competitors'
    },
    {
      name: 'Enterprise IT Services',
      description: 'Comprehensive enterprise solutions',
      services: ['Cloud Migration', 'DevOps Automation', 'Security Hardening'],
      avgPrice: '$2,999/month',
      savings: 'Save 45-65% vs. competitors'
    }
  ];

  // Enhanced pricing tiers with more realistic and comprehensive offerings
  const pricingTiers = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: billingCycle === 'monthly' ? 49 : 39,
      period: billingCycle === 'monthly' ? '/month' : '/month',
      savings: billingCycle === 'yearly' ? 'Save 20%' : '',
      features: [
        'Access to 50+ Core Services',
        'Basic AI Integration',
        'Standard Support (24/7)',
        '30-Day Free Trial',
        'Basic Analytics Dashboard',
        'Email Support',
        '99.5% Uptime Guarantee',
        'Standard Security Features'
      ],
      icon: <Sparkles className="w-8 h-8" />,
      variant: 'quantum' as const,
      popular: false,
      cta: 'Start Free Trial',
      ctaVariant: 'secondary' as const
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses and teams',
      price: billingCycle === 'monthly' ? 149 : 119,
      period: billingCycle === 'monthly' ? '/month' : '/month',
      savings: billingCycle === 'yearly' ? 'Save 20%' : '',
      features: [
        'Access to 200+ Premium Services',
        'Advanced AI & Quantum Computing',
        'Priority Support (24/7)',
        '60-Day Free Trial',
        'Advanced Analytics & Reporting',
        'Phone & Email Support',
        '99.9% Uptime Guarantee',
        'Enhanced Security & Compliance',
        'Custom Integrations',
        'Team Collaboration Tools',
        'API Access',
        'White-label Options'
      ],
      icon: <Crown className="w-8 h-8" />,
      variant: 'holographic' as const,
      popular: true,
      cta: 'Start Free Trial',
      ctaVariant: 'primary' as const
    },
    {
      name: 'Enterprise',
      description: 'For large organizations and enterprises',
      price: billingCycle === 'monthly' ? 499 : 399,
      period: billingCycle === 'monthly' ? '/month' : '/month',
      savings: billingCycle === 'yearly' ? 'Save 20%' : '',
      features: [
        'Access to ALL 500+ Services',
        'Full Quantum AI & Autonomous Systems',
        'Dedicated Support Team (24/7)',
        '90-Day Free Trial',
        'Enterprise Analytics & AI Insights',
        'Dedicated Account Manager',
        '99.99% Uptime SLA',
        'Enterprise Security & Compliance',
        'Custom Development Services',
        'Advanced Team Management',
        'Full API & SDK Access',
        'Custom Branding & White-label',
        'On-premise Deployment Options',
        'Advanced AI Training & Customization',
        'Priority Feature Development',
        'Global Infrastructure Access'
      ],
      icon: <Rocket className="w-8 h-8" />,
      variant: 'neural' as const,
      popular: false,
      cta: 'Contact Sales',
      ctaVariant: 'primary' as const
    }
  ];

  // Service category pricing examples
  const serviceCategoryPricing = [
    {
      category: 'Quantum AI & Computing',
      services: ['Quantum AI Platform', 'Neural Network Training', 'Quantum Optimization'],
      startingPrice: '$99/month',
      icon: <Brain className="w-6 h-6" />
    },
    {
      category: 'Autonomous Systems',
      services: ['AI Factory Management', 'Robotic Process Automation', 'Smart Manufacturing'],
      startingPrice: '$149/month',
      icon: <Factory className="w-6 h-6" />
    },
    {
      category: 'Healthcare & Biotech',
      services: ['Drug Discovery AI', 'Medical Imaging Analysis', 'Genomic Research Platform'],
      startingPrice: '$199/month',
      icon: <FlaskConical className="w-6 h-6" />
    },
    {
      category: 'Cybersecurity',
      services: ['Quantum Encryption', 'Threat Intelligence', 'Zero-Trust Security'],
      startingPrice: '$129/month',
      icon: <Shield className="w-6 h-6" />
    },
    {
      category: 'Financial Technology',
      services: ['AI Trading Platform', 'Risk Management', 'Portfolio Optimization'],
      startingPrice: '$179/month',
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      category: 'Space Technology',
      services: ['Satellite Management', 'Space Data Analytics', 'Mission Planning AI'],
      startingPrice: '$299/month',
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  // Value propositions
  const valuePropositions = [
    {
      title: 'Unprecedented ROI',
      description: 'Average 300% ROI within 6 months',
      icon: <TrendingUp className="w-8 h-8" />,
      metric: '300%',
      detail: 'Average ROI'
    },
    {
      title: 'Time to Value',
      description: 'Get up and running in under 24 hours',
      icon: <Clock className="w-8 h-8" />,
      metric: '<24h',
      detail: 'Setup Time'
    },
    {
      title: 'Global Reach',
      description: 'Available in 150+ countries worldwide',
      icon: <Globe className="w-8 h-8" />,
      metric: '150+',
      detail: 'Countries'
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-level security with 99.99% uptime',
      icon: <Shield className="w-8 h-8" />,
      metric: '99.99%',
      detail: 'Uptime SLA'
    }
  ];

  return (
    <UltraFuturisticBackground variant="quantum" intensity="high">
      <Head>
        <title>Pricing - Zion Tech Group | Transparent Pricing for Revolutionary AI & Quantum Services</title>
        <meta name="description" content="Transparent pricing for 500+ revolutionary micro SaaS services. Choose from Starter ($49/month), Professional ($149/month), or Enterprise ($499/month) plans with generous free trials." />
        <meta name="keywords" content="pricing, micro SaaS pricing, AI services pricing, quantum computing pricing, enterprise pricing" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Pricing - Zion Tech Group | Transparent Pricing for Revolutionary AI & Quantum Services" />
        <meta property="og:description" content="Transparent pricing for 500+ revolutionary micro SaaS services. Choose from Starter ($49/month), Professional ($149/month), or Enterprise ($499/month) plans." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/pricing" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pricing - Zion Tech Group | Transparent Pricing for Revolutionary AI & Quantum Services" />
        <meta name="twitter:description" content="Transparent pricing for 500+ revolutionary micro SaaS services. Choose from Starter ($49/month), Professional ($149/month), or Enterprise ($499/month) plans." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
      </Head>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Transparent Pricing
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Choose the perfect plan for your business. All plans include generous free trials and access to our revolutionary AI & quantum computing services.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative inline-flex h-12 w-24 items-center rounded-full bg-slate-700/50 p-1 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
            >
              <span
                className={`inline-block h-10 w-10 transform rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-12' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
              Yearly
              <span className="ml-2 text-sm text-green-400">Save 20%</span>
            </span>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <UltraFuturisticCard
                key={tier.name}
                variant={tier.variant}
                interactive={true}
                glowIntensity={tier.popular ? 'high' : 'medium'}
                className={`relative h-full ${tier.popular ? 'scale-105' : ''}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold flex items-center">
                      <Star className="w-4 h-4 mr-2" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center p-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 mb-6">
                    {tier.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-6">{tier.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-cyan-400">${tier.price}</span>
                      <span className="text-xl text-gray-400 ml-2">{tier.period}</span>
                    </div>
                    {tier.savings && (
                      <div className="text-green-400 text-sm mt-2">{tier.savings}</div>
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
                  
                  <Button
                    href={tier.name === 'Enterprise' ? '/contact' : '/services'}
                    variant={tier.ctaVariant}
                    size="lg"
                    className="w-full"
                  >
                    {tier.cta}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </UltraFuturisticCard>
            ))}
          </div>
        </div>

        {/* Value Propositions */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose Zion Tech Group?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valuePropositions.map((proposition, index) => (
              <UltraFuturisticCard
                key={index}
                variant={index % 2 === 0 ? 'quantum' : 'holographic'}
                interactive={true}
                className="text-center p-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 mb-4">
                  {proposition.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{proposition.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{proposition.description}</p>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{proposition.metric}</div>
                <div className="text-sm text-gray-400">{proposition.detail}</div>
              </UltraFuturisticCard>
            ))}
          </div>
        </div>

        {/* Service Category Pricing Examples */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Service Category Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategoryPricing.map((category, index) => (
              <UltraFuturisticCard
                key={index}
                variant={index % 3 === 0 ? 'quantum' : index % 3 === 1 ? 'holographic' : 'neural'}
                interactive={true}
                className="p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 mr-4">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{category.category}</h3>
                    <div className="text-cyan-400 font-semibold">{category.startingPrice}</div>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-4">
                  {category.services.map((service, idx) => (
                    <li key={idx} className="text-sm text-gray-300 flex items-center">
                      <Check className="w-4 h-4 text-green-400 mr-2" />
                      {service}
                    </li>
                  ))}
                </ul>
                
                <Button
                  href="/services"
                  variant="secondary"
                  size="sm"
                  className="w-full"
                >
                  Explore Services
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </UltraFuturisticCard>
            ))}
          </div>
        </div>

        {/* Popular Services Pricing */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Popular Services Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularServices.slice(0, 6).map((service, index) => (
              <UltraFuturisticCard
                key={service.id}
                variant={service.variant as any}
                interactive={true}
                className="p-6"
              >
                <div className="text-center mb-4">
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{service.name}</h3>
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                  <div className="text-sm text-gray-400">{service.category}</div>
                </div>
                
                <div className="mb-4">
                  <div className="text-xs text-gray-400 mb-2">Key Features:</div>
                  <ul className="text-xs text-gray-300 space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className="w-3 h-3 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button
                  href={service.link}
                  variant="primary"
                  size="sm"
                  className="w-full"
                >
                  Learn More
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </UltraFuturisticCard>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            <UltraFuturisticCard variant="quantum" className="p-6">
              <h3 className="text-lg font-bold text-white mb-3">What's included in the free trial?</h3>
              <p className="text-gray-300">All plans include a generous free trial period with full access to the selected services. No credit card required to start your trial.</p>
            </UltraFuturisticCard>
            
            <UltraFuturisticCard variant="holographic" className="p-6">
              <h3 className="text-lg font-bold text-white mb-3">Can I change my plan later?</h3>
              <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments.</p>
            </UltraFuturisticCard>
            
            <UltraFuturisticCard variant="neural" className="p-6">
              <h3 className="text-lg font-bold text-white mb-3">What support is included?</h3>
              <p className="text-gray-300">All plans include 24/7 support. Professional and Enterprise plans include priority support with dedicated account managers.</p>
            </UltraFuturisticCard>
            
            <UltraFuturisticCard variant="quantum" className="p-6">
              <h3 className="text-lg font-bold text-white mb-3">Is there a setup fee?</h3>
              <p className="text-gray-300">No setup fees for any plan. All services are designed for instant deployment with our AI-powered setup wizards.</p>
            </UltraFuturisticCard>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <UltraFuturisticCard variant="quantum" className="text-center p-6">
              <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Phone</h3>
              <p className="text-cyan-400 text-lg font-semibold">{contactInfo.mobile}</p>
              <p className="text-gray-400 text-sm mt-2">Available 24/7</p>
            </UltraFuturisticCard>

            <UltraFuturisticCard variant="holographic" className="text-center p-6">
              <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Email</h3>
              <p className="text-purple-400 text-lg font-semibold">{contactInfo.email}</p>
              <p className="text-gray-400 text-sm mt-2">Quick response guaranteed</p>
            </UltraFuturisticCard>

            <UltraFuturisticCard variant="neural" className="text-center p-6">
              <MapPin className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Address</h3>
              <p className="text-green-400 text-sm font-semibold leading-relaxed">{contactInfo.address}</p>
              <p className="text-gray-400 text-sm mt-2">Global operations</p>
            </UltraFuturisticCard>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <UltraFuturisticCard variant="quantum-holographic-advanced" className="p-12">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Start your free trial today and experience the power of revolutionary AI & quantum computing services. 
              No credit card required, instant setup, and full support included.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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
                Contact Sales
                <MessageSquare className="ml-2 w-5 h-5" />
              </Button>
            </div>
            
            <div className="text-sm text-gray-400">
              <p>✓ 30-90 Day Free Trials • ✓ No Credit Card Required • ✓ Instant Setup</p>
              <p className="mt-2">✓ 24/7 Support • ✓ 99.99% Uptime SLA • ✓ Global Infrastructure</p>
            </div>
          </UltraFuturisticCard>
        </div>
      </div>
    </UltraFuturisticBackground>
  );
}