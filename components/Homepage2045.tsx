import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, Star, Users, Award, Brain, Atom, Rocket, 
  Shield, Cloud, Database, Code, Server, Zap, Palette,
  Cpu, BarChart3, Settings, Target, CheckCircle, Play,
  ChevronRight, ChevronLeft, Phone, Mail, MapPin, Sparkles,
  Globe, Heart, Book, DollarSign, Factory, ShoppingCart,
  Car, Building, GraduationCap
} from 'lucide-react';

const Homepage2045: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 5);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const heroSlides = [
    {
      title: "AI Consciousness Evolution 2045",
      subtitle: "Revolutionary AI consciousness platform with emotional intelligence and self-awareness",
      description: "Experience the future of AI with our groundbreaking consciousness evolution platform that develops emotional intelligence, self-awareness, and advanced cognitive capabilities.",
      icon: <Brain className="w-20 h-20" />,
      color: "from-purple-600 via-pink-600 to-red-600",
      textColor: "text-purple-400",
      link: "/ai-consciousness-evolution-2045",
      price: "$2,999/month",
      features: ["Emotional Intelligence", "Self-Awareness", "Cognitive Evolution", "Ethical Decision Making"],
      badge: "BREAKTHROUGH"
    },
    {
      title: "Quantum Neural Ecosystem 2045",
      subtitle: "Hybrid quantum-AI computing for unprecedented computational power",
      description: "Unlock the power of quantum computing combined with advanced AI in our revolutionary neural ecosystem that delivers exponential performance improvements.",
      icon: <Atom className="w-20 h-20" />,
      color: "from-cyan-600 via-blue-600 to-indigo-600",
      textColor: "text-cyan-400",
      link: "/quantum-neural-ecosystem-2045",
      price: "$4,999/month",
      features: ["Quantum Processing", "Neural Networks", "Hybrid Computing", "Exponential Performance"],
      badge: "QUANTUM"
    },
    {
      title: "Space Resource Intelligence 2045",
      subtitle: "Advanced space technology solutions for resource exploration and management",
      description: "Pioneer the future of space exploration with our cutting-edge space resource intelligence platform that revolutionizes how we discover and utilize extraterrestrial resources.",
      icon: <Rocket className="w-20 h-20" />,
      color: "from-pink-600 via-red-600 to-orange-600",
      textColor: "text-pink-400",
      link: "/space-resource-intelligence-2045",
      price: "$3,999/month",
      features: ["Space Mining", "Resource Mapping", "Colonization Planning", "Interplanetary Logistics"],
      badge: "FUTURE"
    },
    {
      title: "Metaverse Development Studio Pro 2045",
      subtitle: "Complete metaverse creation and management platform",
      description: "Build immersive virtual worlds with our comprehensive metaverse development studio that includes AI-powered content generation, blockchain integration, and advanced user experience design.",
      icon: <Globe className="w-20 h-20" />,
      color: "from-green-600 via-emerald-600 to-teal-600",
      textColor: "text-green-400",
      link: "/metaverse-development-studio-pro-2045",
      price: "$1,999/month",
      features: ["3D World Building", "AI Content Generation", "Blockchain Integration", "User Experience Design"],
      badge: "IMMERSIVE"
    },
    {
      title: "Quantum Cybersecurity Platform 2045",
      subtitle: "Next-generation quantum-resistant security solutions",
      description: "Protect your digital assets with our quantum-resistant cybersecurity platform that uses advanced encryption algorithms and AI-powered threat detection.",
      icon: <Shield className="w-20 h-20" />,
      color: "from-red-600 via-pink-600 to-purple-600",
      textColor: "text-red-400",
      link: "/quantum-cybersecurity-platform-2045",
      price: "$2,499/month",
      features: ["Quantum Resistance", "AI Threat Detection", "Advanced Encryption", "Real-time Monitoring"],
      badge: "SECURE"
    }
  ];

  const featuredServices = [
    {
      name: "AI Autonomous Business Process Automation 2045",
      description: "Fully autonomous business process automation with AI decision-making and continuous learning capabilities",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-600 to-pink-700",
      link: "/ai-autonomous-business-process-automation-2045",
      price: "$1,999/month",
      category: "AI & ML",
      badge: "NEW"
    },
    {
      name: "Quantum Bio-Computing Platform 2045",
      description: "Revolutionary quantum computing platform that integrates biological systems for unprecedented processing power",
      icon: <Atom className="w-8 h-8" />,
      color: "from-cyan-600 to-blue-700",
      link: "/quantum-bio-computing-platform-2045",
      price: "$3,999/month",
      category: "Quantum",
      badge: "BREAKTHROUGH"
    },
    {
      name: "Space Mining Automation Platform 2045",
      description: "Advanced space mining automation with AI-powered resource discovery and extraction optimization",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-pink-600 to-red-700",
      link: "/space-mining-automation-platform-2045",
      price: "$2,999/month",
      category: "Space Tech",
      badge: "FUTURE"
    },
    {
      name: "Metaverse Digital Reality Platform 2045",
      description: "Complete metaverse platform with AI-generated content, blockchain integration, and immersive experiences",
      icon: <Globe className="w-8 h-8" />,
      color: "from-green-600 to-emerald-700",
      link: "/metaverse-digital-reality-platform-2045",
      price: "$1,499/month",
      category: "Metaverse",
      badge: "IMMERSIVE"
    }
  ];

  const stats = [
    { number: "150+", label: "Innovative Services", icon: <Zap className="w-6 h-6" /> },
    { number: "1000+", label: "Happy Customers", icon: <Users className="w-6 h-6" /> },
    { number: "99.99%", label: "Uptime Guarantee", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "24/7", label: "Expert Support", icon: <Award className="w-6 h-6" /> }
  ];

  const industries = [
    { name: "Healthcare & Biotech", icon: <Heart className="w-8 h-8" />, color: "from-red-500 to-pink-500", href: "/healthcare-ai-solutions" },
    { name: "Financial Services", icon: <DollarSign className="w-8 h-8" />, color: "from-green-500 to-emerald-500", href: "/financial-solutions" },
    { name: "Manufacturing", icon: <Factory className="w-8 h-8" />, color: "from-blue-500 to-indigo-500", href: "/manufacturing-ai-solutions" },
    { name: "Retail & E-commerce", icon: <ShoppingCart className="w-8 h-8" />, color: "from-purple-500 to-pink-500", href: "/retail-technology-solutions" },
    { name: "Education", icon: <GraduationCap className="w-8 h-8" />, color: "from-indigo-500 to-purple-500", href: "/education-technology-solutions" },
    { name: "Government", icon: <Building className="w-8 h-8" />, color: "from-gray-500 to-blue-500", href: "/government-technology-solutions" }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.05),transparent_50%)]"></div>
      
      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-32 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-1/3 w-28 h-28 bg-pink-500/10 rounded-full blur-xl animate-pulse delay-2000"></div>
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-green-500/10 rounded-full blur-xl animate-pulse delay-3000"></div>
      <div className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-4000"></div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Content */}
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Sparkles className="w-4 h-4" />
              Revolutionary 2045 Technology
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Welcome to the
              <br />
              <span className="text-6xl md:text-8xl">Future of Technology</span>
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover revolutionary AI consciousness, quantum computing, and space technology solutions that will transform your business and propel humanity into the future.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                href="/revolutionary-2045-futuristic-services-showcase"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-semibold group shadow-lg hover:shadow-cyan-500/25"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-cyan-500 text-cyan-400 rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-200 font-semibold group"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>
          </div>

          {/* Enhanced Hero Carousel */}
          <motion.div
            className="relative max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative overflow-hidden rounded-3xl bg-black/40 backdrop-blur-xl border border-cyan-500/30 shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="p-8 md:p-12"
                >
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-4">
                      <div className={`inline-flex p-6 rounded-3xl bg-gradient-to-r ${heroSlides[currentSlide].color} shadow-lg`}>
                        {heroSlides[currentSlide].icon}
                      </div>
                      <div className="ml-4">
                        <span className={`px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r ${heroSlides[currentSlide].color} text-white`}>
                          {heroSlides[currentSlide].badge}
                        </span>
                      </div>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      {heroSlides[currentSlide].title}
                    </h2>
                    <p className={`text-lg font-semibold ${heroSlides[currentSlide].textColor} mb-4`}>
                      {heroSlides[currentSlide].subtitle}
                    </p>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                      {heroSlides[currentSlide].description}
                    </p>
                    
                    {/* Features Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6 max-w-2xl mx-auto">
                      {heroSlides[currentSlide].features.map((feature, index) => (
                        <div key={index} className="text-xs text-gray-400 bg-gray-800/50 rounded-lg px-2 py-1">
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="text-2xl font-bold text-cyan-400 mb-6">
                      {heroSlides[currentSlide].price}
                    </div>

                    <Link
                      href={heroSlides[currentSlide].link}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Enhanced Carousel Navigation */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentSlide ? 'bg-cyan-400 w-8' : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>

              {/* Enhanced Arrow Navigation */}
              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + 5) % 5)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 rounded-full text-white hover:bg-black/70 transition-all duration-200 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % 5)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 rounded-full text-white hover:bg-black/70 transition-all duration-200 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="text-center p-6 bg-black/40 backdrop-blur-xl rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="inline-flex p-3 rounded-xl bg-cyan-500/20 text-cyan-400 mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Revolutionary Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the cutting-edge technology that's reshaping industries and defining the future of business
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.name}
                variants={fadeInUp}
                className="group p-6 bg-black/40 backdrop-blur-xl rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <span className="px-2 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                    {service.badge}
                  </span>
                </div>
                
                <div className="text-xs text-cyan-400 mb-2">{service.category}</div>
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{service.name}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{service.description}</p>
                
                <div className="text-lg font-bold text-cyan-400 mb-4">
                  {service.price}
                </div>

                <Link
                  href={service.link}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 group-hover:gap-3"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/revolutionary-2045-futuristic-services-showcase"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-semibold group shadow-lg hover:shadow-cyan-500/25"
            >
              View All Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transforming Industries
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our revolutionary technology solutions are reshaping industries across the globe
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                variants={fadeInUp}
                className="group text-center"
              >
                <Link
                  href={industry.href}
                  className="block p-6 bg-black/30 backdrop-blur-xl rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${industry.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {industry.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {industry.name}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl border border-cyan-500/30 p-8 text-center shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business with 2045 Technology?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch with our team to discuss how our revolutionary services can drive your success into the future
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center gap-3 text-cyan-400">
                <Phone className="w-6 h-6" />
                <span className="font-semibold">{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-purple-400">
                <Mail className="w-6 h-6" />
                <span className="font-semibold">{contactInfo.email}</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-pink-400">
                <MapPin className="w-6 h-6" />
                <span className="font-semibold text-sm">{contactInfo.address}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-semibold group shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 px-8 py-4 border border-cyan-500 text-cyan-400 rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-200 font-semibold group"
              >
                Request Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Homepage2045;