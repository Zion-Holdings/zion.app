import React from 'react';
import Head from 'next/head';
import { 
  Shield, Rocket, Clock, DollarSign, TrendingUp, Brain, Factory, Globe, 
  Zap, Link, Building2, FlaskConical, Leaf, Car, Truck, Microscope, 
  GraduationCap, ShieldCheck, Globe2, Cloud, Cpu, Database, Lock, 
  Smartphone, Palette, Search, MessageSquare, FileText, Calendar, 
  CreditCard, BarChart3, Code, BookOpen, Activity, Settings, Mail, 
  Phone, MapPin, Sparkles, Atom, Eye, Trophy, Dna, ArrowRight, 
  ExternalLink, Star, Users, ChevronRight, Play, Check
} from 'lucide-react';
import Button from '../components/ui/Button';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraAdvancedFuturisticCard from '../components/ui/UltraAdvancedFuturisticCard';
import { motion } from 'framer-motion';
import { ultimateMicroSaasServices, getServicesByInnovationLevel, getPopularServices, serviceCategories } from '../data/ultimate-micro-saas-services';

export default function HomePage() {
  const heroStats = [
    { value: '100+', label: 'Revolutionary Micro SaaS Services', color: 'text-cyan-400' },
    { value: '99.99%', label: 'Uptime Guarantee', color: 'text-fuchsia-400' },
    { value: '30+', label: 'Day Free Trials', color: 'text-blue-400' },
    { value: '24/7', label: 'AI Support', color: 'text-green-400' },
    { value: '$10B+', label: 'Combined Market Value', color: 'text-yellow-400' },
    { value: '500%+', label: 'Average ROI', color: 'text-purple-400' },
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Get featured services from the new data
  const revolutionaryServices = getServicesByInnovationLevel('Revolutionary').slice(0, 6);

  const marketInsights = [
    {
      metric: '$3.2B',
      label: 'AI Drug Discovery Market',
      description: 'Growing at 200% annually',
      icon: <FlaskConical className="w-6 h-6" />
    },
    {
      metric: '$2.1B',
      label: 'Quantum Finance Market',
      description: '350% annual growth rate',
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      metric: '$4.8B',
      label: 'Autonomous Manufacturing',
      description: '280% annual growth rate',
      icon: <Factory className="w-6 h-6" />
    },
    {
      metric: '$1.9B',
      label: 'Quantum Cybersecurity',
      description: '320% annual growth rate',
      icon: <Shield className="w-6 h-6" />
    },
    {
      metric: '$3.6B',
      label: 'Space Technology',
      description: '290% annual growth rate',
      icon: <Rocket className="w-6 h-6" />
    },
    {
      metric: '$2.8B',
      label: 'Metaverse Development',
      description: '400% annual growth rate',
      icon: <Globe className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      avatar: '🚀',
      name: 'Dr. Sarah Chen',
      role: 'CTO',
      company: 'QuantumTech Solutions',
      rating: 5,
      content: 'The Quantum AI Cognitive Platform has revolutionized our research capabilities. We\'ve achieved breakthroughs in weeks that used to take years.'
    },
    {
      avatar: '🏭',
      name: 'Marcus Rodriguez',
      role: 'Operations Director',
      company: 'AutoFactory Inc.',
      rating: 5,
      content: 'Our autonomous manufacturing efficiency increased by 400% within the first month. The ROI is absolutely incredible.'
    },
    {
      avatar: '🛡️',
      name: 'Alex Thompson',
      role: 'Security Lead',
      company: 'CyberFort Global',
      rating: 5,
      content: 'The quantum cybersecurity fortress has made our systems impenetrable. We\'ve had zero security breaches since implementation.'
    }
  ];

  return (
    <UltraFuturisticBackground variant="quantum">
      <Head>
        <title>Zion Tech Group - Revolutionary Micro SaaS Platform</title>
        <meta name="description" content="100+ revolutionary micro SaaS services transforming business technology. From Quantum AI to Autonomous Factories, we deliver real results with proven ROI." />
        <meta name="keywords" content="Zion Tech Group, micro SaaS, quantum AI, autonomous manufacturing, cybersecurity, biomedical research, financial technology, space technology, metaverse, blockchain, IoT, edge computing" />
        <meta name="author" content="Zion Tech Group" />
        <meta property="og:title" content="Zion Tech Group - Revolutionary Micro SaaS Platform" />
        <meta property="og:description" content="100+ revolutionary micro SaaS services transforming business technology" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-6xl mx-auto">
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-6 futuristic-glow"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                The Future of Business
              </span>
              <br />
              <span className="text-white">Technology is Here</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transform your business with cutting-edge micro SaaS solutions. From Quantum AI to Autonomous Factories, 
              we deliver real results with proven ROI. No mock services, no empty promises - just innovative technology that drives growth.
            </motion.p>

            {/* Hero Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {heroStats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center p-4 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                >
                  <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                href="/micro-saas" 
                variant="primary" 
                size="lg"
                className="text-lg px-8 py-4 group relative overflow-hidden"
              >
                <span className="relative z-10">Explore Revolutionary Services</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <ArrowRight className="ml-2 w-5 h-5 relative z-10" />
              </Button>
              <Button 
                href="#contact" 
                variant="secondary" 
                size="lg"
                className="text-lg px-8 py-4 group relative overflow-hidden"
              >
                <span className="relative z-10">Schedule a Demo</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Rocket className="ml-2 w-5 h-5 relative z-10" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Revolutionary Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our cutting-edge micro SaaS solutions across the most innovative technology domains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.slice(0, 9).map((category, index) => (
              <motion.div
                key={category.name}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 group-hover:shadow-2xl group-hover:shadow-cyan-500/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {category.name}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm text-gray-400">
                        <span className="text-cyan-400 font-semibold">{category.marketSize}</span> market
                      </div>
                      <div className="text-sm text-gray-400">
                        <span className="text-purple-400 font-semibold">{category.growthRate}</span> growth
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-400">
                        {category.serviceCount} services
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <ChevronRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Revolutionary Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Revolutionary Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future with our most innovative and disruptive micro SaaS solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {revolutionaryServices.slice(0, 4).map((service, index) => (
              <motion.div
                key={service.id}
                className="group relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <UltraAdvancedFuturisticCard
                  service={service}
                  className="h-full group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 futuristic-glow">
              Why Choose <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Zion Tech Group</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Unmatched innovation, reliability, and value in the micro SaaS industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Revolutionary Innovation',
                description: 'First-to-market solutions that create entirely new categories and possibilities',
                icon: <Sparkles className="w-8 h-8" />,
                color: 'from-cyan-500 to-blue-600'
              },
              {
                title: 'Proven ROI',
                description: 'Average 500%+ return on investment with measurable business impact',
                icon: <TrendingUp className="w-8 h-8" />,
                color: 'from-green-500 to-emerald-600'
              },
              {
                title: 'Enterprise Security',
                description: 'Bank-level security with quantum-resistant encryption and 99.99% uptime',
                icon: <Shield className="w-8 h-8" />,
                color: 'from-purple-500 to-pink-600'
              },
              {
                title: '24/7 AI Support',
                description: 'Round-the-clock intelligent support with instant response times',
                icon: <Brain className="w-8 h-8" />,
                color: 'from-blue-500 to-indigo-600'
              },
              {
                title: 'Global Infrastructure',
                description: 'Worldwide deployment with edge computing and quantum networks',
                icon: <Globe className="w-8 h-8" />,
                color: 'from-orange-500 to-red-600'
              },
              {
                title: 'Future-Proof Technology',
                description: 'Built on cutting-edge tech that evolves with your business needs',
                icon: <Rocket className="w-8 h-8" />,
                color: 'from-yellow-500 to-amber-600'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 futuristic-glow">
              Market Insights
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              We're not just following market trends - we're creating them
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketInsights.map((insight, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/50 backdrop-blur-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-cyan-400">
                    {insight.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">{insight.metric}</div>
                    <div className="text-sm text-gray-400">{insight.description}</div>
                  </div>
                </div>
                <div className="text-sm text-gray-300 mt-2">{insight.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 futuristic-glow">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Join thousands of companies already transforming their business with our revolutionary solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{testimonial.avatar}</div>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                  <div className="text-sm text-cyan-400">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-4">
                Join <span className="text-cyan-400 font-bold">2,500+ companies</span> already leveraging our revolutionary micro SaaS services 
                to achieve unprecedented growth and innovation.
              </p>
              <p className="text-lg text-gray-400">
                Our team of experts is ready to help you implement the perfect solution for your business needs.
              </p>
            </motion.div>
            
            {/* Enhanced Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-black/20 rounded-lg border border-cyan-500/30">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div className="text-white font-bold text-lg mb-2">Phone Support</div>
                <div className="text-cyan-400 font-semibold text-xl mb-2">{contactInfo.mobile}</div>
                <div className="text-gray-400 text-sm">Available 24/7</div>
                <div className="text-green-400 text-xs mt-2">✓ Instant Response</div>
              </div>
              
              <div className="text-center p-6 bg-black/20 rounded-lg border border-purple-500/30">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div className="text-white font-bold text-lg mb-2">Email Support</div>
                <div className="text-purple-400 font-semibold text-lg mb-2">{contactInfo.email}</div>
                <div className="text-gray-400 text-sm">Response within 2 hours</div>
                <div className="text-green-400 text-xs mt-2">✓ Expert Team</div>
              </div>
              
              <div className="text-center p-6 bg-black/20 rounded-lg border border-green-500/30">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div className="text-white font-bold text-lg mb-2">Global Headquarters</div>
                <div className="text-green-400 font-semibold text-sm mb-2">{contactInfo.address}</div>
                <div className="text-gray-400 text-sm">Strategic location</div>
                <div className="text-green-400 text-xs mt-2">✓ Worldwide Support</div>
              </div>
            </div>

            {/* Enhanced Benefits Section */}
            <div className="bg-gradient-to-r from-black/40 to-black/20 rounded-lg p-8 mb-12 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Why Choose Zion Tech Group?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">100+ Revolutionary Services</div>
                    <div className="text-gray-400 text-sm">Cutting-edge micro SaaS solutions</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">99.99% Uptime Guarantee</div>
                    <div className="text-gray-400 text-sm">Enterprise-grade reliability</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">30-Day Free Trials</div>
                    <div className="text-gray-400 text-sm">Risk-free testing</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">24/7 AI Support</div>
                    <div className="text-gray-400 text-sm">Round-the-clock assistance</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Starting from $49/month</div>
                    <div className="text-gray-400 text-sm">Affordable innovation</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">500%+ Average ROI</div>
                    <div className="text-gray-400 text-sm">Proven business impact</div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Button 
                href="/micro-saas" 
                variant="primary" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                Explore All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                href={`mailto:${contactInfo.email}`}
                variant="secondary" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                Contact Our Team
                <Mail className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </UltraFuturisticBackground>
  );
}
