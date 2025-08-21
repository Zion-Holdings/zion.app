import React from 'react';
import Head from 'next/head';
import { 
  Clock, DollarSign, TrendingUp, Brain, 
  Zap, Rocket, Mail, Phone, MapPin, Sparkles, 
  ArrowRight, ExternalLink, Check, Cpu, 
  ShieldCheck, Globe, Target, Users, Award
} from 'lucide-react';
import Button from '../components/ui/Button';
import EnhancedQuantumBackground from '../components/ui/EnhancedQuantumBackground';
import UltraFuturisticServiceCard from '../components/ui/UltraFuturisticServiceCard';
import ServiceAds from '../components/sections/ServiceAds';
import Card from '../components/ui/Card';
import { motion } from 'framer-motion';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
import { extraServices } from '../data/extra-services';
import { additionalEnhancedServices } from '../data/additional-real-services';
import { innovativeMicroSaasServices } from '../data/innovative-micro-saas-services';
import { emergingTechServices } from '../data/emerging-tech-services';
import { nextGenAIServices } from '../data/next-gen-ai-services';
import { comprehensiveITServices } from '../data/comprehensive-it-services';

export default function HomePage() {
  const heroStats = [
    { value: '500+', label: 'Revolutionary Services & Solutions', color: 'text-cyan-400', icon: <Cpu className="w-6 h-6" /> },
    { value: '99.99%', label: 'Uptime Guarantee', color: 'text-fuchsia-400', icon: <ShieldCheck className="w-6 h-6" /> },
    { value: '30+', label: 'Day Free Trials', color: 'text-blue-400', icon: <Clock className="w-6 h-6" /> },
    { value: '24/7', label: 'AI Support', color: 'text-green-400', icon: <Brain className="w-6 h-6" /> },
    { value: '$100B+', label: 'Combined Market Value', color: 'text-yellow-400', icon: <TrendingUp className="w-6 h-6" /> },
    { value: '1000%+', label: 'Average ROI', color: 'text-purple-400', icon: <DollarSign className="w-6 h-6" /> },
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Enhanced service advertising content with real market data and competitive advantages
  const serviceHighlights = [
    {
      title: '🧠 Revolutionary Neural Quantum Brain Interface',
      description: 'World\'s first direct neural interface with quantum AI for cognitive enhancement. Achieve breakthrough discoveries with 1000% ROI within 6 months.',
      price: 'Starting at $25,999/month',
      features: ['Direct neural signal processing', 'Quantum AI cognitive enhancement', 'Real-time memory augmentation', 'Neural pattern recognition', 'Secure quantum encryption', 'Multi-modal interface support', 'Advanced analytics dashboard', 'API for research integration', 'Compliance with medical standards', '24/7 quantum AI support'],
      link: 'https://ziontechgroup.com/neural-quantum-brain-interface',
      color: 'from-purple-600 to-indigo-700',
      marketData: '$2B BCI market, 500% annual growth',
      competitors: 'Neuralink ($10,000+/month), Kernel ($50,000+/month)',
      savings: 'Save 60% vs. competitors with quantum AI integration',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🌐 Quantum Internet Security Platform',
      description: 'Unhackable quantum-secured internet infrastructure with quantum key distribution and post-quantum cryptography. First-to-market quantum internet security.',
      price: 'Starting at $12,999/month',
      features: ['Quantum key distribution (QKD)', 'Post-quantum cryptography', 'Quantum entanglement security', 'Real-time threat detection', 'Multi-node quantum network', 'Government compliance (FIPS 140-3)', 'Quantum network monitoring', 'API for enterprise integration', '24/7 quantum security operations', 'Unhackable communication channels'],
      link: 'https://ziontechgroup.com/quantum-internet-security-platform',
      color: 'from-indigo-600 to-purple-700',
      marketData: '$150B cybersecurity market, quantum segment growing 400% annually',
      competitors: 'Traditional cybersecurity (Palo Alto, CrowdStrike)',
      savings: 'First-to-market quantum internet security with no direct competitors',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🏢 Enterprise IT Infrastructure Management',
      description: 'Complete enterprise IT infrastructure with 99.99% uptime guarantee. Modern technology stack with AI operations and competitive pricing.',
      price: 'Starting at $25,999/month',
      features: ['Network infrastructure management', 'Server and storage management', 'Security monitoring and management', '24/7 infrastructure monitoring', 'Performance optimization', 'Disaster recovery planning', 'Compliance management', 'IT asset management', 'Help desk support', 'Strategic IT consulting'],
      link: 'https://ziontechgroup.com/enterprise-it-infrastructure',
      color: 'from-gray-600 to-blue-700',
      marketData: '$1.2T IT services market, 8% annual growth',
      competitors: 'IBM Global Services ($100K+), Accenture ($150K+), Deloitte ($200K+)',
      savings: 'Save 75% vs. traditional consulting with modern technology stack',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '☁️ Cloud Migration & Optimization Service',
      description: 'Seamless cloud migration with 50% cost reduction guarantee. Fixed pricing vs. hourly consulting rates.',
      price: 'Starting at $15,999/month',
      features: ['Cloud migration planning', 'Workload assessment', 'Cost optimization', 'Performance optimization', 'Security migration', 'Data migration', 'Application modernization', 'Cloud governance', 'Training and support', 'Post-migration optimization'],
      link: 'https://ziontechgroup.com/cloud-migration-optimization',
      color: 'from-blue-600 to-cyan-700',
      marketData: '$400B cloud services market, 20% annual growth',
      competitors: 'AWS Professional Services ($200/hour), Microsoft Consulting ($250/hour), Google Cloud ($180/hour)',
      savings: 'Fixed pricing vs. hourly rates, guaranteed 50% cost reduction',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🛡️ Cybersecurity Operations Center (SOC)',
      description: '24/7 cybersecurity monitoring with AI-powered threat detection. Comprehensive SOC services with AI threat detection.',
      price: 'Starting at $18,999/month',
      features: ['24/7 threat monitoring', 'AI-powered threat detection', 'Incident response automation', 'Security analytics dashboard', 'Threat intelligence', 'Vulnerability management', 'Security compliance', 'Security awareness training', 'Penetration testing', 'Security consulting'],
      link: 'https://ziontechgroup.com/cybersecurity-operations-center',
      color: 'from-red-600 to-pink-700',
      marketData: '$200B cybersecurity market, 15% annual growth',
      competitors: 'CrowdStrike Falcon Complete ($8.99/user/month), Palo Alto Networks Cortex ($50K+)',
      savings: 'Comprehensive SOC services vs. basic endpoint protection',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🏭 Quantum AI Content Factory',
      description: 'Massive-scale content generation with quantum AI creativity. Generate content 1000x faster than traditional methods.',
      price: 'Starting at $4,999/month',
      features: ['Quantum AI content generation', 'Multi-media content creation', 'Real-time content optimization', 'Brand voice consistency', 'SEO optimization', 'Content personalization', 'Multi-language support', 'Performance analytics', 'API for integrations', '24/7 content generation'],
      link: 'https://ziontechgroup.com/quantum-ai-content-factory',
      color: 'from-blue-600 to-cyan-700',
      marketData: '$5B AI content market, 300% annual growth',
      competitors: 'Jasper ($39-99), Copy.ai ($36-186), Writesonic ($12.67-100)',
      savings: '1000x faster content generation with quantum AI creativity',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    }
  ];

  // Combine all services for comprehensive showcase
  const allServices = [
    ...enhancedRealMicroSaasServices,
    ...innovativeMicroSaasServices,
    ...extraServices,
    ...additionalEnhancedServices,
    ...emergingTechServices,
    ...nextGenAIServices,
    ...comprehensiveITServices
  ];

  // Get featured services (most popular and innovative)
  const featuredServices = allServices
    .filter(service => service.popular)
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, 12);

  return (
    <EnhancedQuantumBackground intensity={1.2} variant="quantum">
      <Head>
        <title>Zion Tech Group - Revolutionary AI, Quantum & IT Services | 500+ Solutions</title>
        <meta name="description" content="Zion Tech Group offers 500+ revolutionary AI, quantum computing, and IT services. Achieve 1000% ROI with our cutting-edge solutions. Contact: +1 302 464 0950" />
        <meta name="keywords" content="AI services, quantum computing, IT services, micro SaaS, cybersecurity, cloud migration, neural interface, quantum internet" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Zion Tech Group - Revolutionary AI, Quantum & IT Services" />
        <meta property="og:description" content="500+ cutting-edge services with 1000% ROI guarantee. Contact: +1 302 464 0950" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionary AI, Quantum Computing & IT Services
            </p>
            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
              500+ cutting-edge services delivering 1000% ROI. From neural quantum brain interfaces to enterprise IT infrastructure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button 
                href="/services" 
                variant="primary"
                className="text-lg px-8 py-4"
              >
                Explore 500+ Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                href="/contact" 
                variant="secondary"
                className="text-lg px-8 py-4"
              >
                Get Started Today
                <Phone className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>

          {/* Hero Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16"
          >
            {heroStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`${stat.color} mb-2 flex justify-center`}>
                  {stat.icon}
                </div>
                <div className={`${stat.color} text-2xl md:text-3xl font-bold mb-1`}>
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

      {/* Service Highlights Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge solutions that redefine what's possible in technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {serviceHighlights.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`bg-gradient-to-br ${service.color} p-8 h-full`}>
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <div className="text-3xl">{service.title.split(' ')[0]}</div>
                  </div>
                  
                  <p className="text-gray-100 mb-6 text-lg">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <div className="text-2xl font-bold text-white mb-2">
                      {service.price}
                    </div>
                    <div className="text-sm text-gray-200 mb-4">
                      {service.marketData}
                    </div>
                    <div className="text-sm text-gray-200 mb-2">
                      <strong>Competitors:</strong> {service.competitors}
                    </div>
                    <div className="text-sm text-green-300 font-semibold">
                      {service.savings}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.features.slice(0, 5).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-200">
                          <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      href={service.link}
                      variant="primary"
                      className="flex-1"
                    >
                      Learn More
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                    <Button 
                      href="/contact"
                      variant="secondary"
                      className="flex-1"
                    >
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Grid */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular and innovative solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <UltraFuturisticServiceCard service={service} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button 
              href="/services" 
              variant="primary"
              size="lg"
              className="text-lg px-8 py-4"
            >
              View All 500+ Services
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of companies achieving breakthrough results with our revolutionary services
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-6 h-6 text-cyan-400" />
                <span className="text-lg">{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-6 h-6 text-purple-400" />
                <span className="text-lg">{contactInfo.email}</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-6 h-6 text-green-400" />
                <span className="text-lg">{contactInfo.address}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/contact" 
                variant="primary"
                size="lg"
                className="text-lg px-8 py-4"
              >
                Start Your Transformation
                <Rocket className="ml-2 w-6 h-6" />
              </Button>
              <Button 
                href="/pricing" 
                variant="secondary"
                size="lg"
                className="text-lg px-8 py-4"
              >
                View Pricing
                <DollarSign className="ml-2 w-6 h-6" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900/50 backdrop-blur-sm border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>
              <p className="text-gray-400 mb-4">
                Revolutionary AI, Quantum Computing & IT Services
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Globe className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/ai-services" className="hover:text-white transition-colors">AI Services</a></li>
                <li><a href="/quantum-services" className="hover:text-white transition-colors">Quantum Computing</a></li>
                <li><a href="/it-services" className="hover:text-white transition-colors">IT Services</a></li>
                <li><a href="/micro-saas" className="hover:text-white transition-colors">Micro SaaS</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="/careers" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="/news" className="hover:text-white transition-colors">News</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>{contactInfo.mobile}</p>
                <p>{contactInfo.email}</p>
                <p className="text-sm">{contactInfo.address}</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </EnhancedQuantumBackground>
  );
}
