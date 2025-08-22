import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import UltraAdvancedHeroSection2025 from '../components/sections/UltraAdvancedHeroSection2025';
import UltraAdvancedServicesShowcase2025 from '../components/sections/UltraAdvancedServicesShowcase2025';
import { motion } from 'framer-motion';
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

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Zion Tech Group - Revolutionary Technology Solutions | AI, Quantum Computing, Micro SAAS</title>
        <meta name="description" content="Leading the future with cutting-edge AI consciousness, quantum computing, and innovative micro SAAS solutions. Transform your business with Zion Tech Group's revolutionary technology." />
        <meta name="keywords" content="AI, artificial intelligence, quantum computing, micro SAAS, technology solutions, business automation, Zion Tech Group" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Zion Tech Group - Revolutionary Technology Solutions" />
        <meta property="og:description" content="Leading the future with cutting-edge AI consciousness, quantum computing, and innovative micro SAAS solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Revolutionary Technology Solutions" />
        <meta name="twitter:description" content="Leading the future with cutting-edge AI consciousness, quantum computing, and innovative micro SAAS solutions." />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>

      <Layout>
        {/* Hero Section */}
        <UltraAdvancedHeroSection2025 />

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
          <div className="relative z-10 container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Why Choose{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Zion Tech Group?
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine revolutionary AI consciousness, quantum computing breakthroughs, and innovative micro SAAS solutions 
                to deliver unprecedented value and transformation for your business.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">{item.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Solutions Section */}
        <section className="py-20 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>
          <div className="relative z-10 container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Industry{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Solutions
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
      </Layout>
    </>
  );
};

export default Home;
