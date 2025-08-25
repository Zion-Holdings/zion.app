import React from 'react';
import Head from 'next/head';
import { 
  Clock, DollarSign, TrendingUp, Brain, 
  Zap, Rocket, Mail, Phone, MapPin, Sparkles, 
  ArrowRight, ExternalLink, Check, Cpu, 
  ShieldCheck, Globe, Target, Users, Award
} from 'lucide-react';
import Button from '../components/ui/Button';
import UltraAdvancedQuantumBackground from '../components/ui/UltraAdvancedQuantumBackground';
import UltraFuturisticServiceCard from '../components/ui/UltraFuturisticServiceCard';
import ServiceAds from '../components/sections/ServiceAds';
import Card from '../components/ui/Card';
import { motion } from 'framer-motion';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
import { extraServices } from '../data/extra-services';
import { additionalEnhancedServices } from '../data/additional-real-services';
import { innovativeMicroSaasServices } from '../data/innovative-micro-saas-services';
import { innovativeAIServices } from '../data/innovative-ai-services';
import { advancedITServices } from '../data/advanced-it-services';

export default function HomePage() {
  const heroStats = [
    { value: '500+', label: 'Revolutionary Micro SaaS Services', color: 'text-cyan-400', icon: <Cpu className="w-6 h-6" /> },
    { value: '99.99%', label: 'Uptime Guarantee', color: 'text-fuchsia-400', icon: <ShieldCheck className="w-6 h-6" /> },
    { value: '30+', label: 'Day Free Trials', color: 'text-blue-400', icon: <Clock className="w-6 h-6" /> },
    { value: '24/7', label: 'AI Support', color: 'text-green-400', icon: <Brain className="w-6 h-6" /> },
    { value: '$100B+', label: 'Combined Market Value', color: 'text-yellow-400', icon: <TrendingUp className="w-6 h-6" /> },
    { value: '1500%+', label: 'Average ROI', color: 'text-purple-400', icon: <DollarSign className="w-6 h-6" /> },
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
      title: '🧠 Revolutionary Quantum AI Brain-Computer Interface',
      description: 'World\'s first quantum-enhanced AI with human-like reasoning capabilities. Achieve breakthrough discoveries with 1000% ROI within 6 months.',
      price: 'Starting at $2,999/month',
      features: ['Quantum neural signal processing', 'Real-time brain activity monitoring', 'AI-powered cognitive enhancement', 'Neural pattern recognition', 'Secure quantum encryption', 'Multi-modal interface support', 'Advanced analytics dashboard', 'API for research integration', 'Compliance with medical standards', '24/7 quantum AI support'],
      link: 'https://ziontechgroup.com/quantum-ai-brain-computer-interface',
      color: 'from-purple-600 to-indigo-700',
      marketData: '$1.5B BCI market, 300% annual growth',
      competitors: 'Neuralink ($10,000+/month), Kernel ($50,000+/month)',
      savings: 'Save 90% vs. competitors',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🚀 Space Technology Platform',
      description: 'Complete space mission management and satellite operations platform. Enable commercial space companies to operate like NASA.',
      price: 'Starting at $5,999/month',
      features: ['Satellite mission planning', 'Orbital mechanics calculations', 'Real-time satellite tracking', 'Space weather monitoring', 'Launch vehicle integration', 'Ground station management', 'Space debris tracking', 'Mission analytics dashboard', 'Regulatory compliance tools', 'Multi-satellite operations'],
      link: 'https://ziontechgroup.com/space-technology',
      color: 'from-cyan-600 to-blue-700',
      marketData: '$469B space economy, 400% annual growth',
      competitors: 'SpaceX Starlink ($99/month), OneWeb ($50/month)',
      savings: 'Complete mission management platform',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🧬 Biotech AI Platform',
      description: 'AI-powered drug discovery and genetic engineering platform. Accelerate drug development by 10x while reducing costs by 90%.',
      price: 'Starting at $3,999/month',
      features: ['AI drug discovery algorithms', 'Genetic sequence analysis', 'Protein folding prediction', 'Drug interaction modeling', 'Clinical trial optimization', 'Regulatory compliance tools', 'Research collaboration platform', 'Advanced analytics dashboard', 'API for research integration', 'Multi-omics data analysis'],
      link: 'https://ziontechgroup.com/biotech-ai-platform',
      color: 'from-green-600 to-emerald-700',
      marketData: '$1.2T biotech market, 250% annual growth',
      competitors: 'Insitro ($100,000+/month), Atomwise ($50,000+/month)',
      savings: 'Save 95% vs. competitors',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    }
  ];

  return (
    <>
      <Head>
        <title>Zion Tech Group - Revolutionary Micro SaaS & AI Solutions</title>
        <meta name="description" content="Discover 500+ revolutionary micro SaaS services with AI-powered solutions. Get 90% savings vs competitors. Contact: +1 302 464 0950" />
        <meta name="keywords" content="micro SaaS, AI solutions, quantum computing, cybersecurity, blockchain, edge computing, Zion Tech Group" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Zion Tech Group - Revolutionary Micro SaaS & AI Solutions" />
        <meta property="og:description" content="Discover 500+ revolutionary micro SaaS services with AI-powered solutions. Get 90% savings vs competitors." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Revolutionary Micro SaaS & AI Solutions" />
        <meta name="twitter:description" content="Discover 500+ revolutionary micro SaaS services with AI-powered solutions." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" />
        
        {/* Contact Information Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Zion Tech Group",
            "description": "Revolutionary Micro SaaS & AI Solutions",
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
              "https://linkedin.com/company/ziontechgroup",
              "https://twitter.com/ziontechgroup",
              "https://github.com/ziontechgroup"
            ]
          })}
        </script>
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 relative overflow-hidden">
        {/* Ultra Advanced Quantum Background */}
        <UltraAdvancedQuantumBackground />
        
        {/* Floating Quantum Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          {/* Hero Section */}
          <section className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Revolutionary
                  </span>
                  <br />
                  <span className="text-white">Micro SaaS Solutions</span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Discover 500+ cutting-edge micro SaaS services with AI-powered solutions. 
                  Get 90% savings vs competitors while achieving breakthrough results.
                </p>
              </motion.div>

              {/* Hero Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12"
              >
                {heroStats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-black/20 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-4 text-center"
                  >
                    <div className={`${stat.color} mb-2 flex justify-center`}>
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Button
                  href="/advanced-services"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-4 text-lg font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/30"
                >
                  <span className="flex items-center space-x-2">
                    <Rocket className="w-5 h-5" />
                    <span>Explore Services</span>
                  </span>
                </Button>
                <Button
                  href="/contact"
                  variant="outline"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 text-lg font-semibold rounded-lg transform hover:scale-105 transition-all duration-300"
                >
                  <span className="flex items-center space-x-2">
                    <Phone className="w-5 h-5" />
                    <span>Get Quote</span>
                  </span>
                </Button>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-12 p-6 bg-black/20 backdrop-blur-sm border border-cyan-500/30 rounded-xl max-w-2xl mx-auto"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="flex items-center justify-center space-x-2 text-cyan-400">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">{contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-blue-400">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-purple-400">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{contactInfo.address}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Service Highlights */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Revolutionary Services with 
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Breakthrough Results</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our cutting-edge micro SaaS solutions deliver unprecedented ROI and competitive advantages
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {serviceHighlights.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <UltraFuturisticServiceCard
                      title={service.title}
                      description={service.description}
                      price={service.price}
                      features={service.features}
                      link={service.link}
                      color={service.color}
                      marketData={service.marketData}
                      competitors={service.competitors}
                      savings={service.savings}
                      contactInfo={service.contactInfo}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Service Ads Section */}
          <ServiceAds />

          {/* Additional Sections */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Complete <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Service Ecosystem</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  From AI-powered solutions to cutting-edge infrastructure, we have everything you need
                </p>
              </motion.div>

              {/* Service Categories */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">AI & Machine Learning</h3>
                    <p className="text-gray-300 mb-4">Revolutionary AI solutions that transform businesses</p>
                    <Button href="/ai-services" variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black">
                      Explore AI Services
                    </Button>
                  </div>
                </Card>

                <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ShieldCheck className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Cybersecurity</h3>
                    <p className="text-gray-300 mb-4">Quantum-safe security solutions for the future</p>
                    <Button href="/cybersecurity" variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black">
                      Explore Security
                    </Button>
                  </div>
                </Card>

                <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Edge Computing</h3>
                    <p className="text-gray-300 mb-4">Next-generation distributed computing solutions</p>
                    <Button href="/edge-computing" variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black">
                      Explore Edge
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Transform</span> Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Join thousands of companies already achieving breakthrough results with our revolutionary micro SaaS solutions
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-4 text-lg font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/30"
                  >
                    <span className="flex items-center space-x-2">
                      <Phone className="w-5 h-5" />
                      <span>Contact Us Today</span>
                    </span>
                  </Button>
                  <Button
                    href="/advanced-services"
                    variant="outline"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 text-lg font-semibold rounded-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <span className="flex items-center space-x-2">
                      <Rocket className="w-5 h-5" />
                      <span>View All Services</span>
                    </span>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
