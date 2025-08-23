import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Users, Brain, Rocket, Shield, Zap, Target, Atom, 
  Lock, Cloud, Settings, Eye, Award, Clock, Heart, 
  Lightbulb, Search, Grid, List, TrendingUp, 
  User, ShoppingCart, Bell, HelpCircle, FileText, 
  Video, Headphones, Code, Database, Network, Server, 
  Monitor, Smartphone, Camera, Gamepad2, Palette, 
  Music, Film, BookOpenCheck, Building, MessageCircle, 
  Sparkles, ArrowRight, CheckCircle, Star, Globe, Handshake
} from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partnershipTypes = [
    {
      id: 'technology-partners',
      name: 'Technology Partners',
      description: 'Strategic technology partnerships for innovation',
      features: ['Joint Development', 'Technology Integration', 'Market Expansion', 'Innovation Labs'],
      price: 'Custom',
      period: 'Partnership',
      popular: true,
      icon: <Code className="w-8 h-8" />
    },
    {
      id: 'channel-partners',
      name: 'Channel Partners',
      description: 'Distribution and sales channel partnerships',
      features: ['Sales Enablement', 'Marketing Support', 'Training Programs', 'Revenue Sharing'],
      price: 'Custom',
      period: 'Partnership',
      popular: false,
      icon: <Network className="w-8 h-8" />
    },
    {
      id: 'consulting-partners',
      name: 'Consulting Partners',
      description: 'Professional services and consulting partnerships',
      features: ['Implementation Services', 'Custom Solutions', 'Industry Expertise', 'Client Success'],
      price: 'Custom',
      period: 'Partnership',
      popular: false,
      icon: <Users className="w-8 h-8" />
    },
    {
      id: 'research-partners',
      name: 'Research Partners',
      description: 'Academic and research institution partnerships',
      features: ['Joint Research', 'Innovation Projects', 'Talent Development', 'Publication Rights'],
      price: 'Custom',
      period: 'Partnership',
      popular: false,
      icon: <Brain className="w-8 h-8" />
    },
    {
      id: 'startup-partners',
      name: 'Startup Partners',
      description: 'Emerging technology startup partnerships',
      features: ['Incubation Support', 'Technology Access', 'Market Access', 'Investment Opportunities'],
      price: 'Custom',
      period: 'Partnership',
      popular: false,
      icon: <Rocket className="w-8 h-8" />
    },
    {
      id: 'enterprise-partners',
      name: 'Enterprise Partners',
      description: 'Large enterprise strategic partnerships',
      features: ['Enterprise Solutions', 'Global Reach', 'Industry Leadership', 'Strategic Initiatives'],
      price: 'Custom',
      period: 'Partnership',
      popular: false,
      icon: <Building className="w-8 h-8" />
    }
  ];

  const partnershipBenefits = [
    {
      title: 'Market Access',
      description: 'Access to new markets and customer segments',
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: 'Technology Innovation',
      description: 'Collaborative innovation and development',
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: 'Revenue Growth',
      description: 'Increased revenue through partnership',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: 'Resource Sharing',
      description: 'Shared resources and expertise',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'Brand Enhancement',
      description: 'Enhanced brand recognition and credibility',
      icon: <Star className="w-6 h-6" />
    },
    {
      title: 'Global Reach',
      description: 'Expanded global presence and reach',
      icon: <Network className="w-6 h-6" />
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Partnership Opportunities - Zion Tech Group"
        description="Join our partner ecosystem and unlock new opportunities for growth, innovation, and market expansion."
        keywords="partnerships, technology partners, channel partners, consulting partners, research partners, startup partners"
      />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-[60vh] flex items-center justify-center px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
                Partnership Opportunities
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join our partner ecosystem and unlock new opportunities for growth, innovation, and market expansion
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
                >
                  Become a Partner
                </a>
                <a 
                  href="/contact" 
                  className="px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Partnership Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the advantages of partnering with Zion Tech Group
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partnershipBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-green-500/20 rounded-lg mr-3">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Partnership Types
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the partnership model that best fits your business objectives
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partnershipTypes.map((partnership, index) => (
                <motion.div
                  key={partnership.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border transition-all duration-300 hover:scale-105 ${
                    partnership.popular 
                      ? 'border-green-500 shadow-lg shadow-green-500/25' 
                      : 'border-gray-700 hover:border-green-500'
                  }`}
                >
                  {partnership.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="inline-flex p-3 bg-green-500/20 rounded-full mb-4">
                      {partnership.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{partnership.name}</h3>
                    <p className="text-gray-300 mb-4">{partnership.description}</p>
                    <div className="text-3xl font-bold text-green-400 mb-2">
                      {partnership.price}
                      {partnership.period && <span className="text-lg text-gray-400">/{partnership.period}</span>}
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {partnership.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href="/contact" 
                    className="w-full block text-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
                  >
                    Partner With Us
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Ready to Partner?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join our ecosystem and unlock new opportunities for growth and innovation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Partnership
                </a>
                <a 
                  href="/contact" 
                  className="px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Discussion
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default PartnersPage;