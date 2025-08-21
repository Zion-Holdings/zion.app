import React from 'react';
import Head from 'next/head';
import { 
  Clock, DollarSign, TrendingUp, Brain, 
  Mail, Phone, MapPin, 
  ArrowRight, ExternalLink, Check, Cpu, 
  ShieldCheck, Globe, Target, Users, Award, Rocket
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
import { newInnovativeServices } from '../data/innovative-micro-saas-services';
import { enhancedEnterpriseITServices } from '../data/enhanced-enterprise-it-services';
import { advancedAISolutions } from '../data/advanced-ai-solutions';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';

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
      link: 'https://ziontechgroup.com/quantum-ai-brain-computer-interface',
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
      title: '🚗 AI-Powered Autonomous Vehicles Platform',
      description: 'Complete autonomous vehicle AI platform with advanced computer vision, sensor fusion, and safety systems. Achieve Level 4 autonomy.',
      price: 'Starting at $55,999/month',
      features: ['Advanced computer vision', 'Sensor fusion algorithms', 'Safety systems integration', 'Real-time decision making', 'Path planning optimization', 'Traffic prediction', 'Weather adaptation', 'Fleet management', 'Performance analytics', '24/7 AI monitoring'],
      link: 'https://ziontechgroup.com/ai-powered-autonomous-vehicles',
      color: 'from-blue-600 to-indigo-700',
      marketData: '$100B autonomous vehicle market, 30% annual growth',
      competitors: 'Waymo ($100M+ setup), Tesla ($50M+ setup), Cruise ($75M+ setup)',
      savings: 'Save 90%+ vs. building from scratch with complete AI platform',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🧬 AI-Powered Biotech Drug Discovery',
      description: 'AI-powered biotech drug discovery platform with molecular modeling, protein folding, and clinical trial optimization. Achieve 10x faster drug development.',
      price: 'Starting at $85,999/month',
      features: ['AI molecular modeling', 'Protein folding prediction', 'Drug target identification', 'Clinical trial optimization', 'Toxicity prediction', 'Drug repurposing', 'Biomarker discovery', 'Real-time analytics', 'Research collaboration tools', '24/7 AI research support'],
      link: 'https://ziontechgroup.com/ai-powered-biotech-drug-discovery',
      color: 'from-green-600 to-emerald-700',
      marketData: '$50B AI drug discovery market, 40% annual growth',
      competitors: 'Insilico Medicine ($500K+ setup), Atomwise ($300K+ setup), BenevolentAI ($1M+ setup)',
      savings: 'Save 80% vs. competitors with subscription model and advanced AI',
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
    ...comprehensiveITServices,
    ...newInnovativeServices,
    ...enhancedEnterpriseITServices,
    ...advancedAISolutions
  ];

  // Get featured services (most popular and innovative)
  const featuredServices = allServices
    .filter(service => service.popular)
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, 12);

  return (
    <UltraAdvancedFuturisticBackground variant="quantum-holographic-advanced">
      <Head>
        <title>Zion Tech Group - Revolutionary AI, Quantum Computing & IT Solutions</title>
        <meta name="description" content="Zion Tech Group offers cutting-edge AI services, quantum computing solutions, and comprehensive IT services. Transform your business with our innovative technology solutions." />
        <meta name="keywords" content="AI services, quantum computing, IT solutions, cybersecurity, cloud migration, autonomous vehicles, biotech AI, metaverse creation" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Zion Tech Group - Revolutionary AI & Quantum Computing Solutions" />
        <meta property="og:description" content="Transform your business with cutting-edge AI, quantum computing, and IT solutions. 500+ revolutionary services with 99.99% uptime guarantee." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Revolutionary AI & Quantum Computing Solutions" />
        <meta name="twitter:description" content="Transform your business with cutting-edge AI, quantum computing, and IT solutions." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
        <link rel="canonical" href="https://ziontechgroup.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Enhanced Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-12"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 leading-tight">
              Revolutionary
              <span className="block text-6xl sm:text-7xl lg:text-9xl bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                AI & Quantum
              </span>
              Technology Solutions
            </h1>
            
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge AI services, quantum computing solutions, and comprehensive IT services. 
              <span className="text-cyan-400 font-semibold"> 500+ revolutionary services</span> with 
              <span className="text-green-400 font-semibold"> 99.99% uptime guarantee</span>.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                href="/services"
                variant="primary"
                size="lg"
                className="group relative overflow-hidden"
              >
                <span className="relative z-10">Explore Our Services</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="group relative overflow-hidden"
              >
                <span className="relative z-10">Get Started Today</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </div>
          </motion.div>

          {/* Enhanced Hero Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto"
          >
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-black/30 transition-all duration-300 hover:scale-105 group"
              >
                <div className={`${stat.color} mb-2 flex justify-center`}>
                  {stat.icon}
                </div>
                <div className={`${stat.color} text-2xl lg:text-3xl font-bold mb-1 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm lg:text-base leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Service Highlights Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Revolutionary Services That Transform Industries
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From quantum AI brain-computer interfaces to autonomous vehicles, our cutting-edge solutions 
              deliver unprecedented ROI and competitive advantages.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceHighlights.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full bg-black/30 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105">
                  <div className="p-8">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mb-6">
                      <div className="text-3xl font-bold text-cyan-400 mb-2">
                        {service.price}
                      </div>
                      <div className="text-sm text-gray-400">
                        {service.marketData}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 5).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300">
                            <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6 p-4 bg-black/20 rounded-lg">
                      <div className="text-sm text-gray-400 mb-2">Competitive Advantage:</div>
                      <div className="text-white font-semibold">{service.savings}</div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        href={service.link}
                        variant="primary"
                        size="lg"
                        className="flex-1 group"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                      
                      <Button
                        href="/contact"
                        variant="secondary"
                        size="lg"
                        className="flex-1"
                      >
                        Get Started
                      </Button>
                    </div>
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
    </UltraAdvancedFuturisticBackground>
  );
}
