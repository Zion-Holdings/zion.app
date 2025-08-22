import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import UltraAdvancedHeroSection2025 from '../components/sections/UltraAdvancedHeroSection2025';
import UltraAdvancedServicesShowcase2025 from '../components/sections/UltraAdvancedServicesShowcase2025';
import SEOEnhancer from '../components/ui/SEOEnhancer';
import LoadingSpinner from '../components/ui/LoadingSpinner';
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
    description: 'Fully autonomous business management with AI consciousness and emotional intelligence',
    icon: <Brain className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
    features: ['24/7 Autonomous Operation', 'Emotional Intelligence', 'Predictive Decision Making', 'Self-Optimization'],
    cta: 'Explore AI Business',
    href: '/ai-autonomous-business-operations'
  },
  {
    id: 'quantum-cybersecurity',
    name: 'Quantum-Secured Cybersecurity Platform',
    description: 'Unbreakable security using quantum encryption and AI threat detection',
    icon: <Shield className="w-6 h-6" />,
    color: 'from-blue-500 to-indigo-500',
    features: ['Quantum Encryption', 'AI Threat Detection', 'Zero Trust Architecture', 'Real-time Monitoring'],
    cta: 'Secure Your Business',
    href: '/quantum-cybersecurity-services'
  },
  {
    id: 'space-resource-mining',
    name: 'Space Resource Mining Platform',
    description: 'Revolutionary space technology for resource extraction and management',
    icon: <Rocket className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500',
    features: ['AI-Powered Mining', 'Resource Optimization', 'Space Infrastructure', 'Sustainable Extraction'],
    cta: 'Explore Space Tech',
    href: '/space-resource-mining-platform'
  }
];

const HomePage: React.FC = () => {
  return (
    <>
      <SEOEnhancer 
        title="Zion Tech Group - Revolutionary AI, Quantum Computing & Space Technology Solutions"
        description="Leading-edge AI consciousness, quantum computing solutions, and space resource mining technology. Transform your business with our innovative micro SAAS platforms and enterprise solutions."
        keywords={[
          'AI consciousness', 'quantum computing', 'space technology', 'micro SAAS',
          'enterprise solutions', 'AI automation', 'quantum cybersecurity', 'space resource mining',
          'business intelligence', 'cloud infrastructure', 'zero trust security'
        ]}
        services={featuredServices.map(service => ({
          name: service.name,
          description: service.description,
          url: service.href
        }))}
      />
      
      <Layout>
        {/* Hero Section */}
        <UltraAdvancedHeroSection2025 />
        
        {/* Services Showcase */}
        <UltraAdvancedServicesShowcase2025 />
        
        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Why Choose{' '}
                <span className="gradient-text-cyan-purple">Zion Tech Group</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge AI consciousness, quantum computing, and space technology 
                to deliver solutions that were once considered impossible.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${item.color} p-5 group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Solutions Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Industry{' '}
                <span className="gradient-text-purple-pink">Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tailored solutions for every industry, powered by revolutionary AI and quantum technology.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industrySolutions.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${industry.color} p-4 group-hover:scale-110 transition-transform duration-300`}>
                    {industry.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{industry.name}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{industry.description}</p>
                  <ul className="space-y-2">
                    {industry.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center gap-2 text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-sm">{service}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Featured{' '}
                <span className="gradient-text-cyan-pink">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most innovative and transformative solutions that are reshaping industries.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${service.color} p-4 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 group-hover:scale-105"
                  >
                    {service.cta}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Transform Your{' '}
                <span className="gradient-text-cyan-purple">Business?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the future of technology with our revolutionary AI consciousness, 
                quantum computing, and space technology solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  Get Started Today
                </Link>
                
                <Link
                  href="/comprehensive-services-showcase-2025"
                  className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 hover:scale-105"
                >
                  <Globe className="w-5 h-5" />
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default HomePage;
