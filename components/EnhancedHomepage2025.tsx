import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Check, 
  Star, 
  Users, 
  TrendingUp, 
  Shield,
  Brain,
  Atom,
  Rocket,
  Target,
  Zap,
  Network,
  Globe,
  Award,
  Play,
  ChevronRight,
  ChevronLeft,
  Search,
  Grid,
  List,
  Filter,
  Sparkles,
  Cpu,
  Cloud,
  Lock,
  BarChart3,
  Lightbulb,
  Code,
  Database,
  Server,
  Building
} from 'lucide-react';
import Link from 'next/link';

const EnhancedHomepage2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const heroSlides = [
    {
      title: "Revolutionary AI & Quantum Technology",
      subtitle: "Pioneering the future with consciousness AI and quantum computing",
      description: "Transform your business with cutting-edge AI automation, quantum optimization, and intelligent infrastructure solutions.",
      image: "/hero-ai-quantum.jpg",
      color: "from-purple-600 via-pink-600 to-red-600"
    },
    {
      title: "Intelligent Business Automation",
      subtitle: "Streamline operations with AI-powered workflows",
      description: "Automate invoice processing, customer service, HR operations, and sales processes with intelligent AI solutions.",
      image: "/hero-automation.jpg",
      color: "from-blue-600 via-cyan-600 to-teal-600"
    },
    {
      title: "Advanced IT Infrastructure",
      subtitle: "Next-generation infrastructure with zero-trust security",
      description: "Deploy quantum-resistant security, edge computing orchestration, and AI-powered monitoring across your infrastructure.",
      image: "/hero-infrastructure.jpg",
      color: "from-green-600 via-emerald-600 to-teal-600"
    }
  ];

  const featuredServices = [
    {
      name: "AI Workflow Orchestrator Pro",
      description: "Intelligent workflow automation with AI-powered decision making",
      price: "$299/month",
      features: ["AI-powered optimization", "Predictive analytics", "Enterprise compliance"],
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-600",
      link: "/services/ai-workflow-orchestrator"
    },
    {
      name: "Quantum Optimization Engine",
      description: "Solve complex optimization problems with quantum computing power",
      price: "$999/month",
      features: ["Quantum algorithms", "Hybrid computing", "Real-time optimization"],
      icon: <Atom className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-600",
      link: "/services/quantum-optimization-engine"
    },
    {
      name: "Zero Trust Network Automation",
      description: "Automated zero-trust security with intelligent network segmentation",
      price: "$499/month",
      features: ["Automated security", "Intelligent segmentation", "Compliance automation"],
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-600",
      link: "/services/zero-trust-network-automation"
    },
    {
      name: "AI Invoice Processing Automation",
      description: "Intelligent invoice processing with 99.9% accuracy",
      price: "$149/month",
      features: ["AI extraction", "Automated workflows", "99.9% accuracy"],
      icon: <Zap className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      link: "/services/ai-invoice-processing-automation"
    }
  ];

  const stats = [
    { number: "500+", label: "Enterprise Clients", icon: <Building className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime Guarantee", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Global Support", icon: <Globe className="w-6 h-6" /> },
    { number: "50+", label: "AI Services", icon: <Brain className="w-6 h-6" /> }
  ];

  const technologies = [
    { name: "AI & Machine Learning", icon: <Brain className="w-8 h-8" />, color: "from-purple-500 to-pink-600" },
    { name: "Quantum Computing", icon: <Atom className="w-8 h-8" />, color: "from-indigo-500 to-purple-600" },
    { name: "Edge Computing", icon: <Network className="w-8 h-8" />, color: "from-blue-500 to-cyan-600" },
    { name: "Zero Trust Security", icon: <Shield className="w-8 h-8" />, color: "from-red-500 to-pink-600" },
    { name: "Business Automation", icon: <Zap className="w-8 h-8" />, color: "from-yellow-500 to-orange-600" },
    { name: "Cloud Orchestration", icon: <Cloud className="w-8 h-8" />, color: "from-green-500 to-emerald-600" }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.05),transparent_50%)]"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-20"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionary AI & Quantum Technology Solutions for 2025
            </p>
          </motion.div>

          {/* Hero Slides */}
          <div className="relative mb-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {heroSlides[currentSlide].title}
                </h2>
                <p className="text-lg md:text-xl text-gray-400 mb-4">
                  {heroSlides[currentSlide].subtitle}
                </p>
                <p className="text-base md:text-lg text-gray-500 max-w-3xl mx-auto">
                  {heroSlides[currentSlide].description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Slide Navigation */}
            <div className="flex justify-center space-x-2 mt-6">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-cyan-400 scale-125' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/services">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                Explore Services
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Featured Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover our most innovative and powerful solutions that are transforming businesses worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={service.link}>
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 h-full hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm">
                      {service.description}
                    </p>
                    <div className="text-2xl font-bold text-cyan-400 mb-4">
                      {service.price}
                    </div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Cutting-Edge Technologies
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We leverage the latest advancements in AI, quantum computing, and emerging technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group text-center"
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${tech.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {tech.icon}
                </div>
                <h3 className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
                  {tech.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join hundreds of enterprises already leveraging our revolutionary technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                  View All Services
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  Schedule Demo
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EnhancedHomepage2025;