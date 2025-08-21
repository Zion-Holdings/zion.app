import React from 'react';
import Head from 'next/head';
import { 
  Cloud, Bot, RefreshCw, Zap, Shield, BarChart3, ArrowRight, Check, ExternalLink, 
  Star, Users, Globe, Lock, Rocket, Cpu, Database, TrendingUp, Clock, Target, 
  Building, Award, DollarSign, ChartBar, Code, BookOpen, Activity, Smartphone, 
  Palette, Search, MessageSquare, FileText, Calendar, CreditCard, Settings, 
  Mail, Phone, MapPin, Sparkles, Atom, Brain, Eye, Trophy, FlaskConical, Dna, 
  Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Globe2,
  ChevronRight, Play, Star as StarIcon, Check as CheckIcon, ArrowRight as ArrowRightIcon,
  Brain as BrainIcon, Factory as FactoryIcon, Shield as ShieldIcon, FlaskConical as FlaskIcon,
  DollarSign as DollarIcon, Rocket as RocketIcon, Globe as GlobeIcon, Zap as ZapIcon,
  Link as LinkIcon, Building2 as Building2Icon
} from 'lucide-react';
import Button from '../components/ui/Button';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';
import { motion } from 'framer-motion';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';

export default function HomePage() {
  const heroStats = [
    { value: '500+', label: 'Real Micro SaaS Services', color: 'text-cyan-400' },
    { value: '99.99%', label: 'Uptime Guarantee', color: 'text-fuchsia-400' },
    { value: '30', label: 'Day Free Trials', color: 'text-blue-400' },
    { value: '24/7', label: 'AI Support', color: 'text-green-400' },
    { value: '$1B+', label: 'Market Value', color: 'text-yellow-400' },
    { value: '2500%+', label: 'Average ROI', color: 'text-purple-400' },
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Get featured services for homepage
  const featuredServices = enhancedRealMicroSaasServices
    .filter(service => service.popular)
    .slice(0, 6);

  const revolutionaryServices = [
    {
      name: 'Quantum AI Cognitive Platform',
      description: 'Revolutionary quantum AI platform combining quantum computing with advanced cognitive AI for unprecedented problem-solving capabilities. First-to-market solution with 99.99% accuracy.',
      icon: <BrainIcon className="w-8 h-8" />,
      price: '$1,299/month',
      category: 'Quantum Computing & AI',
      variant: 'quantum-entanglement',
      link: 'https://ziontechgroup.com/quantum-ai-cognitive',
      features: ['Quantum-enhanced neural networks', 'Cognitive reasoning engine', 'Multi-dimensional problem solving', 'Real-time quantum AI processing'],
      marketSize: '$2.1B market',
      growthRate: '350% annual growth'
    },
    {
      name: 'Autonomous AI Factory',
      description: 'Complete autonomous manufacturing system powered by AI that runs 24/7 with zero human intervention. Industry 4.0 leader with 200% productivity increase.',
      icon: <FactoryIcon className="w-8 h-8" />,
      price: '$2,499/month',
      category: 'Manufacturing & Industry 4.0',
      variant: 'holographic-advanced',
      link: 'https://ziontechgroup.com/autonomous-ai-factory',
      features: ['Fully autonomous operation', 'AI-powered quality control', 'Predictive maintenance', 'Real-time optimization'],
      marketSize: '$4.8B market',
      growthRate: '250% annual growth'
    },
    {
      name: 'Quantum Cybersecurity Fortress',
      description: 'Future-proof cybersecurity using quantum-resistant encryption and AI-powered threat detection. Protects against current and future quantum threats.',
      icon: <ShieldIcon className="w-8 h-8" />,
      price: '$1,599/month',
      category: 'Cybersecurity',
      variant: 'cyberpunk-holographic',
      link: 'https://ziontechgroup.com/quantum-cybersecurity',
      features: ['Quantum-resistant encryption', 'AI threat detection', 'Zero-trust architecture', '24/7 monitoring'],
      marketSize: '$3.2B market',
      growthRate: '280% annual growth'
    },
    {
      name: 'Biomedical AI Research Platform',
      description: 'Cutting-edge AI platform for biomedical research and drug discovery. Accelerates research timelines by 10x while maintaining scientific accuracy.',
      icon: <FlaskIcon className="w-8 h-8" />,
      price: '$899/month',
      category: 'Healthcare & Biotechnology',
      variant: 'neural-quantum',
      link: 'https://ziontechgroup.com/biomedical-ai-research',
      features: ['Drug discovery acceleration', 'Genomic analysis', 'Clinical trial optimization', 'Research automation'],
      marketSize: '$3.2B market',
      growthRate: '200% annual growth'
    },
    {
      name: 'Quantum Finance Optimizer',
      description: 'Revolutionary financial optimization platform using quantum computing for portfolio optimization and risk assessment. 50x faster calculations.',
      icon: <DollarIcon className="w-8 h-8" />,
      price: '$1,199/month',
      category: 'Financial Technology',
      variant: 'quantum-matrix',
      link: 'https://ziontechgroup.com/quantum-finance-optimizer',
      features: ['Portfolio optimization', 'Risk assessment', 'Real-time trading', 'Quantum algorithms'],
      marketSize: '$2.1B market',
      growthRate: '350% annual growth'
    },
    {
      name: 'AI Space Exploration Platform',
      description: 'AI-powered space exploration and satellite management platform. Enables autonomous space missions with real-time decision making.',
      icon: <RocketIcon className="w-8 h-8" />,
      price: '$1,799/month',
      category: 'Space Technology',
      variant: 'quantum-space',
      link: 'https://ziontechgroup.com/ai-space-exploration',
      features: ['Autonomous space missions', 'Satellite management', 'Real-time decision making', 'Predictive analytics'],
      marketSize: '$1.8B market',
      growthRate: '400% annual growth'
    }
  ];

  const serviceCategories = [
    { name: 'Quantum Computing & AI', icon: <BrainIcon className="w-6 h-6" />, count: 15, variant: 'quantum-entanglement' },
    { name: 'Manufacturing & Industry 4.0', icon: <FactoryIcon className="w-6 h-6" />, count: 12, variant: 'holographic-advanced' },
    { name: 'Cybersecurity', icon: <ShieldIcon className="w-6 h-6" />, count: 18, variant: 'cyberpunk-holographic' },
    { name: 'Healthcare & Biotechnology', icon: <FlaskIcon className="w-6 h-6" />, count: 14, variant: 'neural-quantum' },
    { name: 'Financial Technology', icon: <DollarIcon className="w-6 h-6" />, count: 16, variant: 'quantum-matrix' },
    { name: 'Space Technology', icon: <RocketIcon className="w-6 h-6" />, count: 8, variant: 'quantum-space' }
  ];

  return (
    <UltraFuturisticBackground variant="quantum" intensity="high">
      <Head>
        <title>Zion Tech Group - Revolutionary Micro SaaS Services & AI Solutions</title>
        <meta name="description" content="Discover 500+ revolutionary micro SaaS services powered by quantum AI, autonomous systems, and cutting-edge technology. Transform your business with Zion Tech Group's innovative solutions." />
        <meta name="keywords" content="micro SaaS, AI services, quantum computing, autonomous systems, cybersecurity, healthcare AI, fintech, space technology" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Zion Tech Group - Revolutionary Micro SaaS Services & AI Solutions" />
        <meta property="og:description" content="Discover 500+ revolutionary micro SaaS services powered by quantum AI, autonomous systems, and cutting-edge technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Revolutionary Micro SaaS Services & AI Solutions" />
        <meta name="twitter:description" content="Discover 500+ revolutionary micro SaaS services powered by quantum AI, autonomous systems, and cutting-edge technology." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
        
        {/* Contact Information Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Zion Tech Group",
            "url": "https://ziontechgroup.com",
            "telephone": "+1 302 464 0950",
            "email": "kleber@ziontechgroup.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "364 E Main St STE 1008",
              "addressLocality": "Middletown",
              "addressRegion": "DE",
              "postalCode": "19709",
              "addressCountry": "US"
            },
            "sameAs": [
              "https://ziontechgroup.com"
            ]
          })}
        </script>
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 text-center z-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionary Micro SaaS Services & AI Solutions for the Future
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Discover 500+ cutting-edge micro SaaS services powered by quantum AI, autonomous systems, and next-generation technology. Transform your business with unprecedented innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button 
                href="/services" 
                variant="primary" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                href="/contact" 
                variant="secondary" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                Get Started
                <Rocket className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>

          {/* Hero Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto"
          >
            {heroStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Revolutionary Services Section */}
      <section className="py-20 relative z-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Revolutionary Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of technology with our groundbreaking micro SaaS services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {revolutionaryServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <UltraFuturisticCard
                  variant={service.variant as any}
                  interactive={true}
                  glowIntensity="high"
                  className="h-full"
                >
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 mb-6">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                    <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                    
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                    </div>
                    
                    <div className="mb-4">
                      <span className="text-sm text-purple-400">{service.category}</span>
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
                    
                    <div className="mb-4 text-xs">
                      <div className="text-cyan-400 mb-1">{service.marketSize}</div>
                      <div className="text-purple-400">{service.growthRate}</div>
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
                  </div>
                </UltraFuturisticCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="py-20 relative z-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of innovative service categories
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <UltraFuturisticCard
                  variant={category.variant as any}
                  interactive={true}
                  className="h-full text-center p-8"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-6">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{category.name}</h3>
                  <div className="text-3xl font-bold text-cyan-400 mb-4">{category.count}+</div>
                  <p className="text-gray-300 text-sm">Services Available</p>
                  
                  <Button
                    href="/services"
                    variant="secondary"
                    size="sm"
                    className="mt-6 w-full"
                  >
                    View Services
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                </UltraFuturisticCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 relative z-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business? Contact us today to get started
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <UltraFuturisticCard variant="quantum" className="text-center p-8">
                <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Phone</h3>
                <p className="text-cyan-400 text-lg font-semibold">{contactInfo.mobile}</p>
                <p className="text-gray-400 text-sm mt-2">Available 24/7</p>
              </UltraFuturisticCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <UltraFuturisticCard variant="holographic" className="text-center p-8">
                <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Email</h3>
                <p className="text-purple-400 text-lg font-semibold">{contactInfo.email}</p>
                <p className="text-gray-400 text-sm mt-2">Quick response guaranteed</p>
              </UltraFuturisticCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <UltraFuturisticCard variant="neural" className="text-center p-8">
                <MapPin className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Address</h3>
                <p className="text-green-400 text-sm font-semibold leading-relaxed">{contactInfo.address}</p>
                <p className="text-gray-400 text-sm mt-2">Global operations</p>
              </UltraFuturisticCard>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              className="text-lg px-8 py-4"
            >
              Start Your Journey
              <Rocket className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <UltraFuturisticCard variant="quantum-holographic-advanced" className="p-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of businesses already leveraging our revolutionary micro SaaS services. 
                Experience unprecedented growth, efficiency, and innovation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  href="/services"
                  variant="primary"
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  Explore All Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  href="/contact"
                  variant="secondary"
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  Get Free Consultation
                  <MessageSquare className="ml-2 w-5 h-5" />
                </Button>
              </div>
              
              <div className="text-sm text-gray-400">
                <p>✓ 30-Day Free Trial • ✓ 24/7 AI Support • ✓ 99.99% Uptime Guarantee</p>
                <p className="mt-2">✓ Instant Setup • ✓ Global Infrastructure • ✓ Enterprise Security</p>
              </div>
            </UltraFuturisticCard>
          </motion.div>
        </div>
      </section>
    </UltraFuturisticBackground>
  );
}
