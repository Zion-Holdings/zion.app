import React, { useEffect, useState, useCallback } from 'react';
import Layout from './layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Play, TrendingUp, Brain, Shield, Rocket, Globe, Cpu, Database, Atom, Target, Star, Sparkles as SparklesIcon,
  Brain as BrainIcon, Atom as AtomIcon, Shield as ShieldIcon, Rocket as RocketIcon, Zap, Eye, Heart, Infinity,
  Users, Briefcase, Cloud, Lock, BarChart3, Zap as ZapIcon, CheckCircle, Award, Clock, DollarSign, Building
} from 'lucide-react';

// Import our new services
import { realEnterpriseSaasServices } from '../data/2025-real-enterprise-saas-services';
import { innovativeAIServices } from '../data/2025-innovative-ai-services';
import { innovativeITServices } from '../data/2025-innovative-it-services';
import { innovativeMicroSaas } from '../data/2025-innovative-micro-saas';

const EnhancedHomepage2025: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState('enterprise');
  
  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate featured services
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % 6);
    }, 8000);
    
    // Track mouse movement for parallax effects
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Combine all services
  const allServices = [
    ...realEnterpriseSaasServices,
    ...innovativeAIServices,
    ...innovativeITServices,
    ...innovativeMicroSaas
  ];

  // Get featured services for rotation
  const featuredServices = allServices.slice(0, 6);

  // Filter services by category
  const getFilteredServices = () => {
    if (selectedCategory === 'all') return allServices;
    return allServices.filter(service => 
      service.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      service.type.toLowerCase().includes(selectedCategory.toLowerCase())
    );
  };

  const categories = [
    { id: 'all', name: 'All Services', icon: SparklesIcon, color: 'from-purple-500 to-pink-500' },
    { id: 'ai', name: 'AI & Machine Learning', icon: BrainIcon, color: 'from-cyan-500 to-blue-500' },
    { id: 'quantum', name: 'Quantum Technology', icon: AtomIcon, color: 'from-blue-500 to-indigo-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: ShieldIcon, color: 'from-red-500 to-orange-500' },
    { id: 'business', name: 'Business Solutions', icon: Target, color: 'from-emerald-500 to-teal-500' },
    { id: 'enterprise', name: 'Enterprise SAAS', icon: Building, color: 'from-yellow-500 to-orange-500' }
  ];

  const serviceTabs = [
    { id: 'enterprise', name: 'Enterprise SAAS', icon: Building, services: realEnterpriseSaasServices },
    { id: 'ai', name: 'AI Services', icon: Brain, services: innovativeAIServices },
    { id: 'it', name: 'IT Services', icon: Cpu, services: innovativeITServices },
    { id: 'micro', name: 'Micro SAAS', icon: Zap, services: innovativeMicroSaas }
  ];

  const features = [
    { icon: Brain, title: "AI-Powered Solutions", description: "Cutting-edge AI services for modern businesses", href: "/services?category=ai", color: "from-purple-500 to-pink-500" },
    { icon: Atom, title: "Quantum Technology", description: "Future-proof quantum computing solutions", href: "/services?category=quantum", color: "from-blue-500 to-cyan-500" },
    { icon: Shield, title: "Advanced Security", description: "Enterprise-grade cybersecurity solutions", href: "/services?category=cybersecurity", color: "from-red-500 to-orange-500" },
    { icon: Rocket, title: "Space Technology", description: "Innovative space tech applications", href: "/services?category=space-tech", color: "from-indigo-500 to-purple-500" },
    { icon: Cpu, title: "IT Infrastructure", description: "Scalable IT solutions for enterprises", href: "/services?category=it", color: "from-emerald-500 to-teal-500" },
    { icon: Database, title: "Cloud Solutions", description: "Next-generation cloud infrastructure", href: "/services?category=cloud", color: "from-yellow-500 to-orange-500" }
  ];

  const stats = [
    { number: "500+", label: "Enterprise Services", icon: Building },
    { number: "99.99%", label: "Uptime Guarantee", icon: TrendingUp },
    { number: "24/7", label: "AI Support Available", icon: Brain },
    { number: "200+", label: "Countries Served", icon: Globe }
  ];

  const handleGetStarted = useCallback(() => {
    window.location.href = '/pricing';
  }, []);

  const handleWatchDemo = useCallback(() => {
    window.location.href = '/services';
  }, []);

  const handleServiceClick = useCallback((service: any) => {
    window.location.href = service.slug;
  }, []);

  const handleTabChange = useCallback((tabId: string) => {
    setActiveTab(tabId);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.1),transparent_50%)]" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-20"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 10 + (i * 2),
                repeat: 999,
                delay: i * 0.5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Leading provider of innovative AI, IT, and micro SAAS solutions. 
              Transform your business with cutting-edge technology and expert support.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <button
              onClick={handleGetStarted}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
            >
              Get Started
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button
              onClick={handleWatchDemo}
              className="group px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              <Play className="inline-block mr-2 w-5 h-5" />
              View Services
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: 999 }}
            className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: 999 }}
              className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Technology Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From enterprise SAAS to cutting-edge AI services, we provide the tools and expertise 
              to transform your business and stay ahead of the competition.
            </p>
          </motion.div>

          {/* Service Tabs */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {serviceTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <tab.icon className="inline-block w-5 h-5 mr-2" />
                  {tab.name}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {serviceTabs.find(tab => tab.id === activeTab)?.services.slice(0, 6).map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                  >
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {service.name}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4">{service.tagline}</p>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">
                        {service.pricing.starter}
                      </div>
                      <div className="text-sm text-gray-500">Starting price</div>
                    </div>

                    <div className="mb-6">
                      <div className="text-sm text-gray-300 mb-2">Key Features:</div>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="text-xs text-gray-400 flex items-center">
                            <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={() => handleServiceClick(service)}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Learn More
                    </button>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* View All Services Button */}
          <div className="text-center">
            <button
              onClick={() => window.location.href = '/services'}
              className="group px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              View All Services
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver 
              solutions that drive real business value and competitive advantage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group text-center p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 mb-6">{feature.description}</p>
                <a
                  href={feature.href}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of companies already leveraging our innovative solutions 
              to stay ahead of the competition and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleGetStarted}
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                Start Your Journey
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button
                onClick={() => window.location.href = '/contact'}
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default EnhancedHomepage2025;