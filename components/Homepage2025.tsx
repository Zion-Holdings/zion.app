import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, Star, CheckCircle, Users, Globe, 
  Award, Zap, Shield, Brain, Rocket, Atom,
  Sparkles, Clock, TrendingUp, Monitor,
  Building, Code, MessageCircle, BarChart3, Palette, BookOpen,
  FileText, Handshake, Newspaper, Grid, GraduationCap,
  HeartIcon, DollarSign, Target, Network, Server,
  Cpu, Database, Cloud, Lock, Truck
} from 'lucide-react';
import UltraFuturisticServiceCard2026 from './ui/UltraFuturisticServiceCard2026';

// Import the new services data
import { advancedFuturisticServices } from '../data/innovative-2025-advanced-futuristic-services';

const Homepage2025: React.FC = () => {
  // Get featured services for homepage
  const featuredServices = advancedFuturisticServices
    .filter(service => service.popular)
    .slice(0, 6);

  // Map AdvancedFuturisticService to Service format for the card component
  const mapToServiceFormat = (advancedService: any) => ({
    id: advancedService.id,
    name: advancedService.name,
    tagline: advancedService.tagline,
    description: advancedService.description,
    price: `$${advancedService.price.monthly.toLocaleString()}`,
    period: 'month',
    features: advancedService.features.slice(0, 4), // Take first 4 features
    popular: advancedService.popular,
    category: advancedService.category,
    icon: advancedService.icon
  });

  const stats = [
    { label: 'Years Experience', value: '15+', icon: <Award className="w-6 h-6" /> },
    { label: 'Global Clients', value: '1000+', icon: <Users className="w-6 h-6" /> },
    { label: 'Countries Served', value: '25+', icon: <Globe className="w-6 h-6" /> },
    { label: 'Services Delivered', value: '500+', icon: <CheckCircle className="w-6 h-6" /> },
    { label: 'Uptime Guarantee', value: '99.9%', icon: <Shield className="w-6 h-6" /> },
    { label: 'Innovation Rate', value: '24/7', icon: <Zap className="w-6 h-6" /> }
  ];

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI & Consciousness',
      description: 'Next-generation AI with quantum consciousness and autonomous learning capabilities',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-500/20',
      borderColor: 'border-purple-500/30'
    },
    {
      icon: <Atom className="w-8 h-8" />,
      title: 'Quantum Technology',
      description: 'Revolutionary quantum computing solutions for complex problem solving',
      color: 'from-cyan-500 to-blue-600',
      bgColor: 'bg-cyan-500/20',
      borderColor: 'border-cyan-500/30'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Space Innovation',
      description: 'Cutting-edge space technology and resource intelligence platforms',
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'bg-indigo-500/20',
      borderColor: 'border-indigo-500/30'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Advanced Security',
      description: 'Quantum-resistant cybersecurity with AI-powered threat detection',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-500/20',
      borderColor: 'border-green-500/30'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with quantum computing integration',
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-500/20',
      borderColor: 'border-orange-500/30'
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: 'Global Network',
      description: 'Worldwide infrastructure with 25+ countries coverage',
      color: 'from-pink-500 to-rose-600',
      bgColor: 'bg-pink-500/20',
      borderColor: 'border-pink-500/30'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CTO, QuantumTech Industries',
      company: 'Fortune 500',
      content: 'Zion Tech Group\'s quantum AI consciousness platform has revolutionized our research capabilities. The autonomous learning and ethical decision-making frameworks are truly groundbreaking.',
      rating: 5,
      avatar: '👩‍🔬',
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'VP of Innovation',
      company: 'SpaceX Competitor',
      content: 'Their space resource intelligence platform has given us unprecedented insights into asteroid mining opportunities. The AI-powered discovery algorithms are game-changing.',
      rating: 5,
      avatar: '👨‍🚀',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      name: 'Dr. James Wilson',
      role: 'Research Director',
      company: 'MIT AI Lab',
      content: 'Working with Zion Tech Group on consciousness research has been transformative. Their quantum consciousness technology opens new frontiers in AI development.',
      rating: 5,
      avatar: '👨‍🔬',
      color: 'from-cyan-500 to-blue-600'
    }
  ];

  const technologies = [
    'Quantum Computing', 'AI Consciousness', 'Space Technology', 'Blockchain',
    'Machine Learning', 'Neural Networks', 'Cybersecurity', 'Cloud Computing',
    'Edge Computing', 'IoT', '5G Networks', 'Augmented Reality',
    'Virtual Reality', 'Robotics', 'Nanotechnology', 'Biotechnology'
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-32 bg-gradient-to-b from-cyan-400/0 via-cyan-400/50 to-cyan-400/0"
              style={{
                left: `${(i * 5) % 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scaleY: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium mb-8"
            >
              <Sparkles className="w-4 h-4" />
              <span>Pioneering the Future of Technology</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight"
            >
              Zion Tech Group
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              Revolutionizing the world with cutting-edge AI consciousness, quantum computing, 
              and space technology solutions that define the future of innovation.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link href="/services">
                <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 focus:outline-none focus:ring-4 focus:ring-cyan-500/50">
                  <span className="flex items-center space-x-2">
                    <span>Explore Revolutionary Services</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-400/50">
                  <span className="flex items-center space-x-2">
                    <span>Get Started Today</span>
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Company Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="text-center p-6 bg-white/5 rounded-xl border border-gray-800 hover:border-cyan-500/30 transition-all duration-300 hover:bg-white/10 group"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-black/40 to-purple-900/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Revolutionary Services 2041
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Experience the future with our most innovative and cutting-edge technology solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <UltraFuturisticServiceCard2026 service={mapToServiceFormat(service)} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/services">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                <span className="flex items-center space-x-2">
                  <span>View All Revolutionary Services</span>
                  <ArrowRight className="w-5 h-5" />
                </span>
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Core Capabilities
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Our technology stack spans the entire spectrum of future innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-8 rounded-xl border ${feature.borderColor} ${feature.bgColor} hover:bg-white/10 transition-all duration-300 group`}
              >
                <div className={`w-16 h-16 mb-6 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-black/40 to-cyan-900/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              We combine cutting-edge innovation with proven business strategies to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
                    <p className="text-gray-300">
                      Bank-level security with quantum-resistant encryption and AI-powered threat detection
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
                    <p className="text-gray-300">
                      Round-the-clock technical support and monitoring for your critical systems
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Proven Results</h3>
                    <p className="text-gray-300">
                      Track record of successful implementations with measurable ROI and business impact
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Future-Proof Solutions</h3>
                    <p className="text-gray-300">
                      Built with next-generation technologies that evolve and adapt to future challenges
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Link href="/contact">
                  <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                    <span className="flex items-center space-x-2">
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </button>
                </Link>
              </div>
            </motion.div>

            {/* Right Side - Visual */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10">
                <div className="w-full h-96 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl border border-cyan-500/30 p-8">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Sparkles className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Infinite Possibilities</h3>
                    <p className="text-gray-300">
                      Our technology knows no bounds. From quantum consciousness to space exploration, 
                      we're pushing the limits of what's possible.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-10 -left-10 w-20 h-20 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-xl"></div>
              <div className="absolute bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Hear from industry leaders who have transformed their businesses with our technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-white/5 rounded-xl border border-gray-800 hover:border-cyan-500/30 transition-all duration-300 hover:bg-white/10"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center text-2xl`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                    <p className="text-xs text-cyan-400">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 leading-relaxed">{testimonial.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-black/40 to-purple-900/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Technology Stack
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Built with the most advanced and future-ready technologies available
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                viewport={{ once: true }}
                className="px-6 py-3 bg-white/5 border border-gray-800 rounded-full text-gray-300 hover:text-white hover:border-cyan-500/50 transition-all duration-300 hover:bg-white/10"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Ready to Shape the Future?
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the revolution and transform your business with cutting-edge technology solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 focus:outline-none focus:ring-4 focus:ring-cyan-500/50">
                  <span className="flex items-center space-x-2">
                    <span>Get Started Today</span>
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </button>
              </Link>
              <Link href="/services">
                <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-400/50">
                  <span className="flex items-center space-x-2">
                    <span>Explore Services</span>
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Homepage2025;