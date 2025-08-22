import React, { useState, useEffect, useRef, useCallback, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { 
  ArrowRight, Star, Zap, Brain, Rocket, Shield, 
  Atom, Cpu, Cloud, Target, Users, Award,
  CheckCircle, TrendingUp, Globe, Sparkles,
  ArrowUpRight, Lightbulb, Code, Database, Server,
  Network, Palette, GraduationCap, DollarSign, Heart,
  DollarSign as Finance, Factory as Manufacturing, Scale as Legal,
  Eye, Clock, Shield as Security, Zap as Performance
} from 'lucide-react';

// Lazy load service cards for better performance
const LazyServiceCard = dynamic(() => import('../ui/ServiceCard'), {
  ssr: false,
  loading: () => <div className="animate-pulse bg-gray-800 rounded-lg h-80" />
});

const serviceCategories = [
  {
    id: 'ai-automation',
    name: 'AI & Automation',
    icon: <Brain className="w-8 h-8" aria-hidden="true" />,
    color: 'from-purple-500 to-pink-500',
    description: 'Intelligent automation solutions that transform business operations'
  },
  {
    id: 'quantum-computing',
    name: 'Quantum Computing',
    icon: <Atom className="w-8 h-8" aria-hidden="true" />,
    color: 'from-green-500 to-emerald-500',
    description: 'Next-generation quantum solutions for complex problem-solving'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    icon: <Shield className="w-8 h-8" aria-hidden="true" />,
    color: 'from-blue-500 to-indigo-500',
    description: 'Advanced security frameworks and threat protection'
  },
  {
    id: 'cloud-platforms',
    name: 'Cloud Platforms',
    icon: <Cloud className="w-8 h-8" aria-hidden="true" />,
    color: 'from-cyan-500 to-blue-500',
    description: 'Scalable cloud infrastructure and platform solutions'
  },
  {
    id: 'micro-saas',
    name: 'Micro SAAS',
    icon: <Rocket className="w-8 h-8" aria-hidden="true" />,
    color: 'from-orange-500 to-red-500',
    description: 'Rapid deployment micro-services for instant ROI'
  },
  {
    id: 'data-analytics',
    name: 'Data & Analytics',
    icon: <Database className="w-8 h-8" aria-hidden="true" />,
    color: 'from-teal-500 to-cyan-500',
    description: 'Advanced analytics and business intelligence solutions'
  }
];

const featuredServices = [
  {
    id: 'ai-autonomous-business',
    name: 'AI-Powered Autonomous Business Operations',
    price: '2,500',
    period: '/month',
    description: 'Fully autonomous business operations powered by advanced AI consciousness',
    features: [
      '24/7 Autonomous Decision Making',
      'Predictive Analytics & Forecasting',
      'Intelligent Resource Optimization',
      'Real-time Performance Monitoring',
      'Adaptive Learning Algorithms',
      'Multi-platform Integration'
    ],
    category: 'ai-automation',
    priority: 'high',
    delivery: '24 hours',
    successRate: '99.9%'
  },
  {
    id: 'quantum-cybersecurity',
    name: 'Quantum-Secured Cybersecurity Platform',
    price: '5,000',
    period: '/month',
    description: 'Unbreakable security using quantum encryption and AI threat detection',
    features: [
      'Quantum Key Distribution',
      'AI-Powered Threat Detection',
      'Zero-Trust Architecture',
      'Real-time Security Monitoring',
      'Automated Incident Response',
      'Compliance Automation'
    ],
    category: 'cybersecurity',
    priority: 'critical',
    delivery: '48 hours',
    successRate: '100%'
  },
  {
    id: 'space-resource-mining',
    name: 'Space Resource Mining AI Platform',
    price: '15,000',
    period: '/month',
    description: 'Revolutionary AI platform for autonomous space resource identification and extraction',
    features: [
      'Autonomous Resource Detection',
      'AI-Powered Extraction Planning',
      'Real-time Satellite Integration',
      'Risk Assessment Algorithms',
      'Resource Optimization AI',
      'Regulatory Compliance'
    ],
    category: 'quantum-computing',
    priority: 'premium',
    delivery: '72 hours',
    successRate: '98.5%'
  },
  {
    id: 'healthcare-ai-diagnostics',
    name: 'Healthcare AI Diagnostic Platform',
    price: '8,500',
    period: '/month',
    description: 'Advanced AI-powered medical diagnostics with 99.9% accuracy',
    features: [
      'Multi-Modal AI Analysis',
      'Real-time Patient Monitoring',
      'Predictive Health Analytics',
      'Drug Interaction Detection',
      'Automated Report Generation',
      'HIPAA Compliance'
    ],
    category: 'ai-automation',
    priority: 'high',
    delivery: '36 hours',
    successRate: '99.9%'
  }
];

const UltraAdvancedServicesShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isVisible, setIsVisible] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer for performance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Filter services based on category
  const filteredServices = selectedCategory === 'all' 
    ? featuredServices 
    : featuredServices.filter(service => service.category === selectedCategory);

  // Memoized animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const handleCategoryChange = useCallback((categoryId: string) => {
    setSelectedCategory(categoryId);
  }, []);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'text-red-400';
      case 'high': return 'text-orange-400';
      case 'premium': return 'text-purple-400';
      default: return 'text-green-400';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'critical': return <Shield className="w-4 h-4" />;
      case 'high': return <Zap className="w-4 h-4" />;
      case 'premium': return <Star className="w-4 h-4" />;
      default: return <CheckCircle className="w-4 h-4" />;
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          {/* Section Header */}
          <motion.h2
            variants={itemVariants}
            id="services-heading"
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Revolutionary
            </span>
            <br />
            <span className="text-white">Technology Services</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Experience the future of technology with our cutting-edge AI, quantum computing, and autonomous business solutions
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <button
            onClick={() => handleCategoryChange('all')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
            }`}
            aria-label="Show all services"
          >
            All Services
          </button>
          
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
              }`}
              aria-label={`Filter by ${category.name}`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto"
        >
          <AnimatePresence mode="wait">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20">
                  {/* Priority Badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <span className={`${getPriorityColor(service.priority)} flex items-center gap-1 text-sm font-medium`}>
                      {getPriorityIcon(service.priority)}
                      {service.priority.charAt(0).toUpperCase() + service.priority.slice(1)}
                    </span>
                  </div>

                  {/* Service Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-white">${service.price}</span>
                      <span className="text-gray-400">{service.period}</span>
                    </div>
                  </div>

                  {/* Service Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400">{service.delivery}</div>
                      <div className="text-sm text-gray-400">Delivery</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">{service.successRate}</div>
                      <div className="text-sm text-gray-400">Success Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">24/7</div>
                      <div className="text-sm text-gray-400">Support</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="flex gap-3">
                    <Link href={`/services/${service.id}`} passHref>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                        aria-label={`Learn more about ${service.name}`}
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </Link>
                    
                    <Link href="/contact" passHref>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300"
                        aria-label="Get started with this service"
                      >
                        Get Started
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Services CTA */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <Link href="/services" passHref>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 flex items-center gap-3 mx-auto group"
              aria-label="View all our services"
            >
              View All Services
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default UltraAdvancedServicesShowcase2025;