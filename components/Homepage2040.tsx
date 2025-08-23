import React from 'react';
import Layout from './layout/Layout';
import UltraFuturisticServiceCard2040 from './ui/UltraFuturisticServiceCard2040';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Star, 
  Brain, Atom, Shield, Zap, TrendingUp, Globe,
  Rocket, Award,
  CheckCircle, Play, BookOpen, Phone, Mail, MapPin
} from 'lucide-react';

// Import our new revolutionary services
// import { revolutionary2040FuturisticServices } from '../data/revolutionary-2040-futuristic-services';
import { revolutionary2041AdvancedServices } from '../data/revolutionary-2041-advanced-services';

const Homepage2040: React.FC = () => {
  // Animation variants
  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Combine all revolutionary services
  const allRevolutionaryServices = [...revolutionary2041AdvancedServices];

  // Helper function for color classes
  const getColorClasses = (index: number) => {
    const colors = [
      'from-cyan-500 to-blue-600',
      'from-purple-500 to-pink-600',
      'from-green-500 to-emerald-600',
      'from-orange-500 to-red-600',
      'from-indigo-500 to-purple-600',
      'from-teal-500 to-cyan-600'
    ];
    return colors[index % colors.length];
  };

  // Get featured services from the new data
  const featuredServices = [
    ...innovative2025AdvancedServicesExpansion.slice(0, 3),
    ...innovative2025EnterpriseSolutions.slice(0, 3)
  ];

  const stats = [
    { number: '100+', label: 'AI Services', description: 'Cutting-edge solutions', icon: <Brain className="w-6 h-6" />, color: 'from-cyan-500 to-blue-600' },
    { number: '50+', label: 'Quantum Solutions', description: 'Next-gen computing', icon: <Atom className="w-6 h-6" />, color: 'from-purple-500 to-pink-600' },
    { number: '24/7', label: 'Autonomous Operations', description: 'Always available', icon: <Zap className="w-6 h-6" />, color: 'from-green-500 to-emerald-600' },
    { number: '∞', label: 'Future Possibilities', description: 'Unlimited potential', icon: <Rocket className="w-6 h-6" />, color: 'from-orange-500 to-red-600' }
  ];

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI-First Approach',
      description: 'Leading-edge artificial intelligence solutions that adapt and evolve with your business needs',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: <Atom className="w-8 h-8" />,
      title: 'Quantum Innovation',
      description: 'Next-generation quantum computing solutions that solve previously impossible problems',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Space Technology',
      description: 'Pioneering space tech applications that push the boundaries of what\'s possible',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Enterprise Security',
      description: 'Military-grade security solutions that protect your most valuable assets',
      color: 'from-green-500 to-emerald-600'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CTO, QuantumTech Industries',
      company: 'Fortune 500',
      content: 'Zion Tech Group\'s quantum AI platform has revolutionized our research capabilities. We\'ve achieved breakthroughs that would have taken years with traditional computing.',
      avatar: '👩‍🔬',
      rating: 5
    },
    {
      name: 'Marcus Rodriguez',
      role: 'VP of Engineering',
      company: 'SpaceX Competitor',
      content: 'Their autonomous DevOps platform has reduced our deployment time by 90% and eliminated 99% of production issues. Game-changing technology.',
      avatar: '👨‍🚀',
      rating: 5
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Head of AI Research',
      company: 'Healthcare AI Corp',
      content: 'The holographic collaboration platform has transformed how our global team works together. It\'s like being in the same room, even across continents.',
      avatar: '👩‍⚕️',
      rating: 5
    }
  ];

  const contactInfo = {
    phone: '+1 (302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709'
  };

  return (
    <Layout>
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg animate-pulse"></div>
            <div className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45 animate-pulse delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-blue-400/10 rounded-full animate-pulse delay-1500"></div>
          </div>
          
          <div className="text-center max-w-5xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Company Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium backdrop-blur-sm"
              >
                <Star className="w-4 h-4" />
                <span>Innovation Leader 2025</span>
              </motion.div>
              
              <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
                Zion Tech Group
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Pioneering the future of technology with innovative solutions that drive business transformation and unlock new possibilities
              </p>
              
              {/* Enhanced CTA Section */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <Link href="/contact">
                  <button className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 text-lg">
                    <span className="flex items-center gap-3">
                      Get Started
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </Link>
                <Link href="/services">
                  <button className="px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 text-lg">
                    Explore Services
                  </button>
                </Link>
                <Link href="/comprehensive-2025-services-showcase">
                  <button className="px-10 py-5 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105 text-lg">
                    2025 Services Showcase
                  </button>
                </Link>
              </div>
              
              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-center justify-center space-x-8 text-sm text-gray-400"
              >
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span>Enterprise Security</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-blue-400" />
                  <span>Global Reach</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                  <span>Proven Results</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-yellow-400" />
                  <span>Industry Leader</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-24 px-4 bg-black/30 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="text-center p-8 group hover:bg-white/5 rounded-2xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    {stat.icon}
                  </div>
                  <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:from-cyan-300 group-hover:to-purple-500 transition-all">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-lg font-medium mb-2">{stat.label}</div>
                  <div className="text-sm text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    {stat.description}
                  </div>
                </motion.div>

              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Featured Services
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Discover our most innovative and cutting-edge technology solutions designed to transform your business and unlock new possibilities
              </p>
            </motion.div>
            
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {innovative2040FuturisticServices.slice(0, 6).map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={fadeInUp}
                  className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/25"
                >
                  {/* Service Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${getColorClasses(index)} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Rocket className="w-8 h-8 text-white" />
                  </div>

                  {/* Service Content */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.tagline}
                  </p>

                  {/* Service Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Service Price */}
                  <div className="mb-6">
                    <span className="text-2xl font-bold text-cyan-400">
                      {service.price}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <Link 
                    href={service.link}
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 group-hover:shadow-lg group-hover:shadow-cyan-400/25"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Featured Services
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Discover our most innovative and cutting-edge technology solutions designed to transform your business and unlock new possibilities
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <UltraFuturisticServiceCard2040
                    service={service}
                    variant={service.category.toLowerCase().includes('quantum') ? 'quantum' : 
                           service.category.toLowerCase().includes('ai') ? 'ai' : 'automation'}
                  />
                </motion.div>
              ))}
            </div>
            
            <div className="text-center">
              <Link href="/services">
                <button className="px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto shadow-lg shadow-purple-500/25 text-lg">
                  View All Services
                  <ArrowRight className="w-6 h-6" />
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 px-4 bg-black/20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                We combine cutting-edge technology with proven expertise to deliver exceptional results that drive your business forward
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {features.map((feature, index) => (
                <motion.div 
                  key={feature.title}
                  className="group p-8 hover:bg-white/5 rounded-2xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Hear from industry leaders who have transformed their businesses with our innovative solutions
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{testimonial.avatar}</div>
                    <div>
                      <h4 className="text-xl font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-cyan-400">{testimonial.role}</p>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">{testimonial.content}</p>
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Join the future of technology with Zion Tech Group. Let's build something extraordinary together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/contact">
                  <button className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 text-lg">
                    Get Started Today
                  </button>
                </Link>
                <Link href="/demo">
                  <button className="px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 text-lg">
                    Request Demo
                  </button>
                </Link>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span>{contactInfo.phone}</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-center">{contactInfo.address}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Homepage2040;