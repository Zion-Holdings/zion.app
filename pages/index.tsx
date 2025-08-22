import React, { Suspense } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, Star, Zap, Brain, Rocket, Shield, 
  Atom, Cpu, Cloud, Target, Users, Award,
  CheckCircle, TrendingUp, Globe, Sparkles,
  Phone, Mail, MapPin, ChevronDown,
  ArrowUpRight, Lightbulb, Code, Database, Server,
  Network, Palette, GraduationCap, DollarSign, Heart,
  DollarSign as Finance, Factory as Manufacturing, Scale as Legal
} from 'lucide-react';

// Lazy load heavy components for better performance
const UltraAdvancedHeroSection2025 = dynamic(() => import('../components/sections/UltraAdvancedHeroSection2025'), {
  ssr: true,
  loading: () => <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black animate-pulse" />
});

const UltraAdvancedServicesShowcase2025 = dynamic(() => import('../components/sections/UltraAdvancedServicesShowcase2025'), {
  ssr: false,
  loading: () => <div className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 animate-pulse" />
});

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const whyChooseUs = [
  {
    icon: <Brain className="w-8 h-8" aria-hidden="true" />,
    title: 'AI-First Approach',
    description: 'Leading-edge AI consciousness and emotional intelligence that adapts to your business needs.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: <Atom className="w-8 h-8" aria-hidden="true" />,
    title: 'Quantum Innovation',
    description: 'Breakthrough quantum computing solutions that solve previously impossible problems.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: <Shield className="w-8 h-8" aria-hidden="true" />,
    title: 'Enterprise Security',
    description: 'Zero-trust architecture and quantum-secured infrastructure for maximum protection.',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    icon: <Rocket className="w-8 h-8" aria-hidden="true" />,
    title: 'Rapid Deployment',
    description: 'Micro SAAS solutions that deploy in minutes, not months, with instant ROI.',
    color: 'from-orange-500 to-red-500'
  }
];

const industrySolutions = [
  {
    name: 'Healthcare & Life Sciences',
    icon: <Heart className="w-8 h-8" aria-hidden="true" />,
    description: 'AI-powered diagnostics, drug discovery, and patient care optimization',
    color: 'from-blue-500 to-cyan-500',
    services: ['Medical AI Diagnostics', 'Drug Discovery Platform', 'Patient Care Analytics']
  },
  {
    name: 'Financial Services',
    icon: <Finance className="w-8 h-8" aria-hidden="true" />,
    description: 'Quantum-enhanced trading, risk assessment, and financial intelligence',
    color: 'from-green-500 to-emerald-500',
    services: ['Quantum Trading Platform', 'AI Risk Assessment', 'Financial Analytics']
  },
  {
    name: 'Manufacturing & Industry 4.0',
    icon: <Manufacturing className="w-8 h-8" aria-hidden="true" />,
    description: 'Smart manufacturing, predictive maintenance, and supply chain optimization',
    color: 'from-orange-500 to-red-500',
    services: ['Predictive Maintenance AI', 'Supply Chain Optimization', 'Quality Control AI']
  },
  {
    name: 'Creative & Media',
    icon: <Palette className="w-8 h-8" aria-hidden="true" />,
    description: 'AI-powered content creation, video editing, and creative automation',
    color: 'from-purple-500 to-pink-500',
    services: ['AI Content Generation', 'Video Editing AI', 'Creative Analytics']
  },
  {
    name: 'Education & Training',
    icon: <GraduationCap className="w-8 h-8" aria-hidden="true" />,
    description: 'Personalized learning, skill assessment, and educational AI platforms',
    color: 'from-indigo-500 to-purple-500',
    services: ['AI Learning Platform', 'Skill Assessment AI', 'Personalized Education']
  },
  {
    name: 'Legal & Compliance',
    icon: <Legal className="w-8 h-8" aria-hidden="true" />,
    description: 'Document analysis, contract review, and regulatory compliance automation',
    color: 'from-teal-500 to-cyan-500',
    services: ['Legal Document AI', 'Contract Analysis', 'Compliance Automation']
  }
];

const featuredServices = [
  {
    id: 'ai-autonomous-business',
    name: 'AI-Powered Autonomous Business Operations',
    price: '2,500',
    period: '/month',
    description: 'Fully autonomous business operations powered by advanced AI consciousness',
    features: [
      '24/7 Autonomous Decision Making',
      'Predictive Analytics & Forecasting',
      'Intelligent Resource Optimization',
      'Real-time Performance Monitoring',
      'Adaptive Learning Algorithms',
      'Multi-platform Integration'
    ],
    category: 'ai-automation',
    priority: 'high',
    delivery: '24 hours',
    successRate: '99.9%'
  },
  {
    id: 'quantum-cybersecurity',
    name: 'Quantum-Secured Cybersecurity Platform',
    price: '5,000',
    period: '/month',
    description: 'Unbreakable security using quantum encryption and AI threat detection',
    features: [
      'Quantum Key Distribution',
      'AI-Powered Threat Detection',
      'Zero-Trust Architecture',
      'Real-time Security Monitoring',
      'Automated Incident Response',
      'Compliance Automation'
    ],
    category: 'cybersecurity',
    priority: 'critical',
    delivery: '48 hours',
    successRate: '100%'
  },
  {
    id: 'space-resource-mining',
    name: 'Space Resource Mining AI Platform',
    price: '15,000',
    period: '/month',
    description: 'Revolutionary AI platform for autonomous space resource identification and extraction',
    features: [
      'Autonomous Resource Detection',
      'AI-Powered Extraction Planning',
      'Real-time Satellite Integration',
      'Risk Assessment Algorithms',
      'Resource Optimization AI',
      'Regulatory Compliance'
    ],
    category: 'quantum-computing',
    priority: 'premium',
    delivery: '72 hours',
    successRate: '98.5%'
  }
];

const stats = [
  { value: '500+', label: 'Happy Clients', icon: <Users className="w-6 h-6" aria-hidden="true" />, color: 'text-cyan-400' },
  { value: '99.9%', label: 'Success Rate', icon: <Award className="w-6 h-6" aria-hidden="true" />, color: 'text-green-400' },
  { value: '300%', label: 'Average ROI', icon: <TrendingUp className="w-6 h-6" aria-hidden="true" />, color: 'text-purple-400' },
  { value: '24/7', label: 'Support', icon: <Shield className="w-6 h-6" aria-hidden="true" />, color: 'text-orange-400' }
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Zion Tech Group - Revolutionary Technology Solutions | AI, Quantum Computing, Micro SAAS</title>
        <meta name="description" content="Leading-edge AI consciousness, quantum computing, and autonomous business solutions. Transform your business with Zion Tech Group's cutting-edge technology services." />
        <meta name="keywords" content="AI, artificial intelligence, quantum computing, cybersecurity, micro SAAS, business automation, technology solutions, Zion Tech Group" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Zion Tech Group - Revolutionary Technology Solutions" />
        <meta property="og:description" content="Leading-edge AI consciousness, quantum computing, and autonomous business solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Revolutionary Technology Solutions" />
        <meta name="twitter:description" content="Leading-edge AI consciousness, quantum computing, and autonomous business solutions." />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com",
              "logo": "https://ziontechgroup.com/logo.png",
              "description": "Leading-edge AI consciousness, quantum computing, and autonomous business solutions",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "364 E Main St STE 1008",
                "addressLocality": "Middletown",
                "addressRegion": "DE",
                "postalCode": "19709",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-302-464-0950",
                "contactType": "customer service",
                "email": "kleber@ziontechgroup.com"
              },
              "sameAs": [
                "https://github.com/Zion-Holdings"
              ]
            })
          }}
        />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Performance hints */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
      </Head>

      <main className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <Suspense fallback={<div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black animate-pulse" />}>
          <UltraAdvancedHeroSection2025 />
        </Suspense>

        {/* Why Choose Us Section */}
        <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Why Choose{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                We combine cutting-edge technology with proven business strategies to deliver exceptional results
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Solutions Section */}
        <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Industry{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Tailored technology solutions for every industry, designed to drive innovation and growth
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industrySolutions.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 mb-4 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{industry.name}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{industry.description}</p>
                  <ul className="space-y-2">
                    {industry.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center gap-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Showcase */}
        <Suspense fallback={<div className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 animate-pulse" />}>
          <UltraAdvancedServicesShowcase2025 />
        </Suspense>

        {/* Stats Section */}
        <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Success Metrics
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Numbers that speak for themselves - delivering exceptional results for our clients
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center`}>
                    <div className={stat.color}>{stat.icon}</div>
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Ready to Transform Your{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Business?
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
                Let our experts help you choose the perfect technology solutions for your business needs. 
                Get personalized recommendations and implementation support.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/contact" passHref>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group"
                    aria-label="Get free consultation"
                  >
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
                
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 group"
                  aria-label={`Call ${contactInfo.mobile}`}
                >
                  <Phone className="w-5 h-5" />
                  Call {contactInfo.mobile}
                </a>
              </div>
              
              <div className="mt-8 text-sm text-gray-400">
                <p>Contact us: <a href={`mailto:${contactInfo.email}`} className="text-cyan-400 hover:text-cyan-300">{contactInfo.email}</a></p>
                <p className="mt-2">{contactInfo.address}</p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
