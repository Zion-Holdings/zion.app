import React, { useState } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, ChevronRight, Crown, Infinity, Zap as ZapIcon2, Shield as ShieldIcon, Users as UsersIcon, Globe as GlobeIcon, Cpu as CpuIcon, Database as DatabaseIcon2, Cloud as CloudIcon, Smartphone as SmartphoneIcon, Palette as PaletteIcon, Search as SearchIcon, MessageSquare as MessageSquareIcon, FileText as FileTextIcon, Calendar as CalendarIcon, CreditCard as CreditCardIcon, BarChart3 as BarChart3Icon, Settings as SettingsIcon, Zap as ZapIcon3, Code as CodeIcon, BookOpen as BookOpenIcon, Activity as ActivityIcon, Database as DatabaseIcon3, Play as PlayIcon, Mail as MailIcon, Phone as PhoneIcon, MapPin as MapPinIcon, Filter as FilterIcon, Grid as GridIcon, List as ListIcon, ChevronDown as ChevronDownIcon, ChevronUp as ChevronUpIcon, Sparkles as SparklesIcon, FlaskConical as FlaskConicalIcon, Dna as DnaIcon, Car as CarIcon, Leaf as LeafIcon, Factory as FactoryIcon, Truck as TruckIcon, Microscope as MicroscopeIcon, GraduationCap as GraduationCapIcon, ShieldCheck as ShieldCheckIcon, Brain as BrainIcon, Atom as AtomIcon, Globe2 as Globe2Icon, Bot as BotIcon, ChevronRight as ChevronRightIcon, Send, User, Building2, MessageCircle, Clock as ClockIcon, Globe as GlobeIcon2, Shield as ShieldIcon2, Zap as ZapIcon4, Users as UsersIcon2, Rocket as RocketIcon2, Award as AwardIcon2, TrendingUp as TrendingUpIcon2, CheckCircle, AlertCircle, Info } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    budget: '',
    timeline: '',
    teamSize: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Enhanced service advertising content
  const serviceHighlights = [
    {
      title: '🤖 AI Customer Success Automation',
      description: 'Intelligent customer success automation with AI-powered churn prediction. Achieve 400% ROI through proactive customer management.',
      price: '$299/month',
      features: ['AI churn prediction', 'Automated onboarding', 'Customer health scoring'],
      link: 'https://ziontechgroup.com/services/ai-customer-success-automation',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: '📝 Automated Content Marketing Suite',
      description: 'AI-powered content creation and distribution across multiple channels. Achieve 300% ROI through automated content generation.',
      price: '$199/month',
      features: ['AI content generation', 'Multi-channel distribution', 'SEO optimization'],
      link: 'https://ziontechgroup.com/services/automated-content-marketing-suite',
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: '📦 Smart Inventory Management System',
      description: 'AI-powered inventory optimization with demand forecasting. Achieve 500% ROI through reduced carrying costs.',
      price: '$399/month',
      features: ['AI demand forecasting', 'Automated reordering', 'Real-time tracking'],
      link: 'https://ziontechgroup.com/services/smart-inventory-management-system',
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: '🔐 Quantum Internet Security Gateway',
      description: 'Unbreakable quantum encryption for the future internet. Achieve 1000% ROI through future-proof security.',
      price: '$3,999/month',
      features: ['Quantum key distribution', 'Unbreakable encryption', 'Real-time monitoring'],
      link: 'https://ziontechgroup.com/services/quantum-internet-security-gateway',
      color: 'from-indigo-500 to-blue-600'
    }
  ];

  // Enhanced competitive advantages
  const competitiveAdvantages = [
    {
      icon: '⚡',
      title: 'Lightning Fast Setup',
      description: 'Get started in minutes, not weeks. Our services are designed for immediate value delivery with 30-90 day free trials.',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: '💰',
      title: 'Transparent Pricing',
      description: 'No hidden fees, no enterprise sales calls. Simple monthly pricing from $99 to $25,999 that scales with your business.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'Bank-level security, SOC 2 compliance, 99.9% uptime guarantee, and quantum-resistant encryption.',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: '📊',
      title: 'Proven ROI',
      description: 'Each service delivers measurable ROI within months. 300-1200% returns reported by our customers.',
      color: 'from-purple-500 to-violet-600'
    },
    {
      icon: '🚀',
      title: 'Cutting-Edge Technology',
      description: 'Access to 500+ revolutionary services including AI consciousness, quantum computing, and space technology.',
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: '🌍',
      title: 'Global Support',
      description: '24/7 dedicated support team with expertise in AI, quantum computing, and emerging technologies.',
      color: 'from-teal-500 to-cyan-600'
    }
  ];

  const serviceOptions = [
    'Quantum AI & Computing',
    'AI Consciousness & Neural Interfaces',
    'Autonomous Systems & Robotics',
    'Healthcare & Biotechnology',
    'Space Technology & Exploration',
    'Metaverse & Digital Reality',
    'Edge Computing & IoT',
    'Blockchain & Web3',
    'Cybersecurity & Zero Trust',
    'AI Automation & Machine Learning',
    'Enterprise IT Solutions',
    'Micro SaaS Platforms',
    'Financial Technology & Risk Management',
    'Climate & Sustainability',
    'Education & E-Learning',
    'Manufacturing & Industry 4.0',
    'Transportation & Logistics',
    'Retail & E-commerce',
    'Media & Entertainment',
    'Real Estate & PropTech',
    'Legal & Compliance',
    'AI Customer Success Automation',
    'Content Marketing Automation',
    'Smart Inventory Management',
    'HR Recruitment Automation',
    'Quantum Internet Security',
    'Space Debris Management',
    'Holographic Metaverse Development',
    '5G Private Networks',
    'AI Multimodal Fusion',
    'Other'
  ];

  const budgetOptions = [
    'Under $10,000',
    '$10,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $500,000',
    '$500,000+',
    'Not sure yet'
  ];

  const timelineOptions = [
    'Immediate (1-2 weeks)',
    'Quick (1-2 months)',
    'Standard (3-6 months)',
    'Long-term (6+ months)',
    'Not sure yet'
  ];

  const teamSizeOptions = [
    '1-10 employees',
    '11-50 employees',
    '51-200 employees',
    '201-1000 employees',
    '1000+ employees'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // For demo purposes, always show success
    setSubmitStatus('success');
    setIsSubmitting(false);
    
    // Reset form after success
    setTimeout(() => {
      setSubmitStatus('idle');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',
        budget: '',
        timeline: '',
        teamSize: ''
      });
    }, 5000);
  };

  const contactMethods = [
    {
      title: 'Phone Support',
      description: 'Available 24/7 for urgent inquiries',
      icon: <Phone className="w-8 h-8" />,
      value: contactInfo.mobile,
      action: `tel:${contactInfo.mobile}`,
      variant: 'quantum' as const,
      color: 'text-cyan-400'
    },
    {
      title: 'Email Support',
      description: 'Get detailed responses within 2 hours',
      icon: <Mail className="w-8 h-8" />,
      value: contactInfo.email,
      action: `mailto:${contactInfo.email}`,
      variant: 'holographic' as const,
      color: 'text-purple-400'
    },
    {
      title: 'Office Address',
      description: 'Visit our headquarters in Delaware',
      icon: <MapPin className="w-8 h-8" />,
      value: contactInfo.address,
      action: `https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`,
      variant: 'neural' as const,
      color: 'text-green-400'
    }
  ];

  const whyChooseUs = [
    {
      title: '24/7 Global Support',
      description: 'Round-the-clock assistance in multiple languages',
      icon: <ClockIcon className="w-6 h-6" />,
      color: 'text-cyan-400'
    },
    {
      title: 'Expert AI Engineers',
      description: 'PhD-level specialists in quantum computing and AI',
      icon: <Brain className="w-6 h-6" />,
      color: 'text-purple-400'
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance',
      icon: <ShieldIcon2 className="w-6 h-6" />,
      color: 'text-green-400'
    },
    {
      title: 'Instant Response',
      description: 'Average response time under 2 hours',
      icon: <ZapIcon4 className="w-6 h-6" />,
      color: 'text-yellow-400'
    }
  ];

  const responseTimeGuarantees = [
    {
      type: 'Urgent Technical Issues',
      response: '< 1 hour',
      icon: <AlertCircle className="w-5 h-5" />,
      color: 'text-red-400'
    },
    {
      type: 'General Inquiries',
      response: '< 2 hours',
      icon: <Info className="w-5 h-5" />,
      color: 'text-blue-400'
    },
    {
      type: 'Sales Questions',
      response: '< 4 hours',
      icon: <MessageCircle className="w-5 h-5" />,
      color: 'text-green-400'
    },
    {
      type: 'Feature Requests',
      response: '< 24 hours',
      icon: <CheckCircle className="w-5 h-5" />,
      color: 'text-purple-400'
    }
  ];

  return (
    <UltraFuturisticBackground variant="neural" intensity="medium">
      <Head>
        <title>Contact Us - Zion Tech Group | Get Expert AI & Quantum Computing Support</title>
        <meta name="description" content="Contact Zion Tech Group for expert AI & quantum computing support. Available 24/7 via phone, email, or visit our Delaware headquarters. Get started with your revolutionary tech project today." />
        <meta name="keywords" content="contact, AI support, quantum computing support, tech consultation, Zion Tech Group contact" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Contact Us - Zion Tech Group | Get Expert AI & Quantum Computing Support" />
        <meta property="og:description" content="Contact Zion Tech Group for expert AI & quantum computing support. Available 24/7 via phone, email, or visit our Delaware headquarters." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/contact" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us - Zion Tech Group | Get Expert AI & Quantum Computing Support" />
        <meta name="twitter:description" content="Contact Zion Tech Group for expert AI & quantum computing support. Available 24/7 via phone, email, or visit our Delaware headquarters." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
      </Head>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Ready to transform your business with revolutionary AI & quantum computing? 
            Our expert team is available 24/7 to help you get started.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <span className="flex items-center">
              <Check className="w-4 h-4 text-green-400 mr-2" />
              24/7 Global Support
            </span>
            <span className="flex items-center">
              <Check className="w-4 h-4 text-green-400 mr-2" />
              &lt; 2 Hour Response Time
            </span>
            <span className="flex items-center">
              <Check className="w-4 h-4 text-green-400 mr-2" />
              Expert AI Engineers
            </span>
            <span className="flex items-center">
              <Check className="w-4 h-4 text-green-400 mr-2" />
              Free Consultation
            </span>
          </div>
        </div>

        {/* Service Highlights */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Revolutionary Services</h2>
          <p className="text-xl text-gray-300 mb-12 text-center max-w-4xl mx-auto">
            Discover how our cutting-edge micro SaaS solutions are transforming businesses across industries
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {serviceHighlights.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group cursor-pointer"
                onClick={() => window.open(service.link, '_blank')}
              >
                <div className={`bg-gradient-to-br ${service.color} p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-2xl">{service.title.split(' ')[0]}</div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{service.title.split(' ').slice(1).join(' ')}</h3>
                <p className="text-slate-400 text-sm mb-4">{service.description}</p>
                <div className="text-cyan-400 font-bold text-lg mb-4">{service.price}</div>
                <div className="space-y-2">
                  {service.features.slice(0, 2).map((feature, idx) => (
                    <div key={idx} className="flex items-center text-slate-300 text-sm">
                      <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Methods */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Contact Methods</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => (
              <UltraFuturisticCard
                key={index}
                variant={method.variant}
                interactive={true}
                className="text-center p-8"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 mb-6">
                  {method.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{method.title}</h3>
                <p className="text-gray-300 mb-6">{method.description}</p>
                
                <div className={`text-lg font-semibold mb-6 ${method.color}`}>
                  {method.value}
                </div>
                
                <Button
                  href={method.action}
                  variant="secondary"
                  size="lg"
                  className="w-full"
                >
                  {method.title === 'Office Address' ? 'Get Directions' : 'Contact Now'}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </UltraFuturisticCard>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto">
            <UltraFuturisticCard variant="quantum-holographic-advanced" className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Send Us a Message</h2>
                <p className="text-gray-300">
                  Tell us about your project and we'll get back to you within 2 hours with a personalized solution.
                </p>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                  <div className="flex items-center text-green-400">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Message sent successfully!</span>
                  </div>
                  <p className="text-green-300 text-sm mt-1">
                    We'll get back to you within 2 hours with a detailed response.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent"
                      placeholder="Enter your first name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent"
                      placeholder="Enter your company name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Team Size
                    </label>
                    <select
                      name="teamSize"
                      value={formData.teamSize}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent"
                    >
                      <option value="">Select team size</option>
                      {teamSizeOptions.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Service Interest *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      {budgetOptions.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Timeline
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent"
                  >
                    <option value="">Select timeline</option>
                    {timelineOptions.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent resize-none"
                    placeholder="Describe your project, requirements, and any specific questions you have..."
                  />
                </div>

                <div className="text-center">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="text-lg px-8 py-4 min-w-[200px]"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </UltraFuturisticCard>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose Zion Tech Group?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((feature, index) => (
              <UltraFuturisticCard
                key={index}
                variant={index % 2 === 0 ? 'quantum' : 'holographic'}
                interactive={true}
                className="text-center p-6"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 mb-4 ${feature.color}`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </UltraFuturisticCard>
            ))}
          </div>
        </div>

        {/* Response Time Guarantees */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Response Time Guarantees</h2>
          <div className="max-w-4xl mx-auto">
            <UltraFuturisticCard variant="holographic" className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {responseTimeGuarantees.map((guarantee, index) => (
                  <div key={index} className="flex items-center p-4 bg-slate-800/30 rounded-lg">
                    <div className={`mr-4 ${guarantee.color}`}>
                      {guarantee.icon}
                    </div>
                    <div>
                      <div className="text-white font-semibold">{guarantee.type}</div>
                      <div className="text-cyan-400 font-bold">{guarantee.response}</div>
                    </div>
                  </div>
                ))}
              </div>
            </UltraFuturisticCard>
          </div>
        </div>

        {/* Office Location */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Visit Our Headquarters</h2>
          <div className="max-w-6xl mx-auto">
            <UltraFuturisticCard variant="quantum" className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Zion Tech Group</h3>
                  <div className="space-y-4 text-gray-300">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-cyan-400 mr-3 mt-1" />
                      <div>
                        <div className="font-semibold text-white">Address</div>
                        <div>{contactInfo.address}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="w-5 h-5 text-purple-400 mr-3 mt-1" />
                      <div>
                        <div className="font-semibold text-white">Phone</div>
                        <div>{contactInfo.mobile}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="w-5 h-5 text-green-400 mr-3 mt-1" />
                      <div>
                        <div className="font-semibold text-white">Email</div>
                        <div>{contactInfo.email}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Globe className="w-5 h-5 text-yellow-400 mr-3 mt-1" />
                      <div>
                        <div className="font-semibold text-white">Website</div>
                        <div>{contactInfo.website}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Button
                      href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`}
                      variant="secondary"
                      size="lg"
                      className="w-full"
                    >
                      Get Directions
                      <MapPin className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                </div>
                
                <div className="bg-slate-800/50 rounded-lg p-6 text-center">
                  <div className="text-6xl mb-4">🏢</div>
                  <h4 className="text-lg font-bold text-white mb-2">Delaware Headquarters</h4>
                  <p className="text-gray-300 text-sm mb-4">
                    Located in the heart of Delaware's business district, our headquarters serves as the command center for global AI innovation.
                  </p>
                  <div className="text-sm text-gray-400">
                    <div>✓ Free Parking Available</div>
                    <div>✓ Meeting Rooms</div>
                    <div>✓ Demo Labs</div>
                    <div>✓ 24/7 Security</div>
                  </div>
                </div>
              </div>
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
              Don't wait to transform your business with revolutionary AI & quantum computing technology. 
              Contact us today and get your free consultation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                href="tel:+13024640950"
                variant="primary"
                size="lg"
                className="text-lg px-8 py-4"
              >
                Call Now
                <Phone className="ml-2 w-5 h-5" />
              </Button>
              <Button
                href={`mailto:${contactInfo.email}`}
                variant="secondary"
                size="lg"
                className="text-lg px-8 py-4"
              >
                Send Email
                <Mail className="ml-2 w-5 h-5" />
              </Button>
            </div>
            
            <div className="text-sm text-gray-400">
              <p>✓ Free Consultation • ✓ 24/7 Support • ✓ &lt; 2 Hour Response • ✓ Expert Engineers</p>
              <p className="mt-2">✓ Global Infrastructure • ✓ Enterprise Security • ✓ Custom Solutions • ✓ Ongoing Support</p>
            </div>
          </UltraFuturisticCard>
        </div>
      </div>
    </UltraFuturisticBackground>
  );
}