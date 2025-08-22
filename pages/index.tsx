import React from 'react';
import UltraAdvancedHeroSection2025 from '../components/sections/UltraAdvancedHeroSection2025';
// Lazy-load the heavy services section for better initial performance
import dynamic from 'next/dynamic';
const UltraAdvancedServicesShowcase2025 = dynamic(() => import('../components/sections/UltraAdvancedServicesShowcase2025'), { ssr: false });
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
import SEO from '../components/SEO';
// Removed extra Layout import; Layout is already applied in _app.tsx
// import Layout from '../components/layout/Layout';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const whyChooseUs = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: 'AI-First Approach',
    description: 'Leading-edge AI consciousness and emotional intelligence that adapts to your business needs.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: <Atom className="w-8 h-8" />,
    title: 'Quantum Innovation',
    description: 'Breakthrough quantum computing solutions that solve previously impossible problems.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Enterprise Security',
    description: 'Zero-trust architecture and quantum-secured infrastructure for maximum protection.',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: 'Rapid Deployment',
    description: 'Micro SAAS solutions that deploy in minutes, not months, with instant ROI.',
    color: 'from-orange-500 to-red-500'
  }
];

const industrySolutions = [
  {
    name: 'Healthcare & Life Sciences',
    icon: <Heart className="w-8 h-8" />,
    description: 'AI-powered diagnostics, drug discovery, and patient care optimization',
    color: 'from-blue-500 to-cyan-500',
    services: ['Medical AI Diagnostics', 'Drug Discovery Platform', 'Patient Care Analytics']
  },
  {
    name: 'Financial Services',
    icon: <Finance className="w-8 h-8" />,
    description: 'Quantum-enhanced trading, risk assessment, and financial intelligence',
    color: 'from-green-500 to-emerald-500',
    services: ['Quantum Trading Platform', 'AI Risk Assessment', 'Financial Analytics']
  },
  {
    name: 'Manufacturing & Industry 4.0',
    icon: <Manufacturing className="w-8 h-8" />,
    description: 'Smart manufacturing, predictive maintenance, and supply chain optimization',
    color: 'from-orange-500 to-red-500',
    services: ['Predictive Maintenance AI', 'Supply Chain Optimization', 'Quality Control AI']
  },
  {
    name: 'Creative & Media',
    icon: <Palette className="w-8 h-8" />,
    description: 'AI-powered content creation, video editing, and creative automation',
    color: 'from-purple-500 to-pink-500',
    services: ['AI Content Generation', 'Video Editing AI', 'Creative Analytics']
  },
  {
    name: 'Education & Training',
    icon: <GraduationCap className="w-8 h-8" />,
    description: 'Personalized learning, skill assessment, and educational AI platforms',
    color: 'from-indigo-500 to-purple-500',
    services: ['AI Learning Platform', 'Skill Assessment AI', 'Personalized Education']
  },
  {
    name: 'Legal & Compliance',
    icon: <Legal className="w-8 h-8" />,
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
    description: 'Revolutionary AI platform that autonomously manages and optimizes your entire business operations.',
    features: ['24/7 Autonomous Operations', 'Real-time Decision Making', 'Predictive Analytics', 'Process Automation']
  },
  {
    id: 'quantum-secure-cloud',
    name: 'Quantum-Secure Cloud Infrastructure',
    price: '3,500',
    description: 'Next-generation cloud platform with quantum encryption and advanced security protocols.',
    features: ['Quantum Encryption', 'Zero-Trust Architecture', 'Advanced Threat Detection', 'Compliance Ready']
  },
  {
    id: 'space-tech-ai',
    name: 'AI-Powered Space Technology Platform',
    price: '5,000',
    description: 'Cutting-edge AI platform for space exploration, satellite management, and cosmic data analysis.',
    features: ['Satellite AI Management', 'Space Data Analytics', 'Mission Planning AI', 'Cosmic Research Tools']
  }
];

const Home: React.FC = () => {
  return (
    <>
      <SEO 
        title="Zion Tech Group | AI, Quantum & Micro SAAS Solutions"
        description="Revolutionary AI, quantum computing, and micro SAAS solutions that drive growth. Explore our platforms, industry solutions, and micro SaaS offerings."
        canonical="https://ziontechgroup.com/"
        ogImage="https://ziontechgroup.com/og-image.png"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Zion Tech Group",
            url: "https://ziontechgroup.com",
            sameAs: [
              "https://linkedin.com/company/ziontechgroup",
              "https://github.com/Zion-Holdings",
              "https://instagram.com/ziontechgroup",
              "https://youtube.com/@ziontechgroup"
            ],
            contactPoint: [{
              "@type": "ContactPoint",
              telephone: "+1 302 464 0950",
              email: "kleber@ziontechgroup.com",
              contactType: "customer service",
              areaServed: "US",
              availableLanguage: ["English"]
            }]
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Zion Tech Group",
            url: "https://ziontechgroup.com",
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://ziontechgroup.com/search?q={search_term_string}"
              },
              queryInput: "required name=search_term_string"
            }
          }
        ]}
      />

      {/* Hero Section */}
      <UltraAdvancedHeroSection2025 />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Why Choose Zion Tech Group?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're not just another tech company. We're the architects of tomorrow's digital landscape.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Industry Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored AI and quantum solutions for every industry, designed to solve your most complex challenges 
              and drive unprecedented growth and efficiency.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySolutions.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-gray-600/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">{industry.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{industry.name}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{industry.description}</p>
                
                <div className="space-y-3">
                  {industry.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{service}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-400">
              <a href={`tel:${contactInfo.mobile}`} className="flex items-center hover:text-cyan-400 transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                {contactInfo.mobile}
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center hover:text-cyan-400 transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                {contactInfo.email}
              </a>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                {contactInfo.address}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Featured Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our most popular and innovative solutions that are transforming businesses worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                    <p className="text-cyan-400 font-medium">${service.price}/month</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  href={`/ultimate-2025-micro-saas-showcase#${service.id}`}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Showcase Section */}
      <UltraAdvancedServicesShowcase2025 />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Transform Your{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Business?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join the future of technology with Zion Tech Group. Our revolutionary AI, quantum computing, 
              and micro SAAS solutions are ready to accelerate your success and drive unprecedented growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`tel:${contactInfo.mobile}`}
                className="group bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3 shadow-2xl shadow-cyan-500/25"
              >
                <Phone className="w-5 h-5" />
                <span>Call {contactInfo.mobile}</span>
              </a>
              
              <a
                href={`mailto:${contactInfo.email}`}
                className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3 shadow-2xl shadow-purple-500/25"
              >
                <Mail className="w-4 h-4" />
                <span>Email Us</span>
              </a>
            </div>

            <div className="mt-8 p-6 bg-black/30 backdrop-blur-sm border border-gray-800/50 rounded-2xl inline-block">
              <div className="flex items-center gap-4 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-pink-400" />
                  <span>{contactInfo.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <a 
                    href={contactInfo.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition-colors duration-200"
                  >
                    {contactInfo.website}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
