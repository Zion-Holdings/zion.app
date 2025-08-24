import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Globe, 
  Code, 
  Database, 
  Smartphone,
  Search,
  BarChart3,
  Lock,
  Rocket
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  features: string[];
  category: 'ai' | 'cloud' | 'security' | 'web' | 'mobile' | 'data';
  color: string;
  href: string;
}

const services: Service[] = [
  {
    id: 'ai-development',
    title: 'AI Development',
    description: 'Custom AI solutions and machine learning models tailored to your business needs.',
    icon: Brain,
    features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
    category: 'ai',
    color: 'from-purple-500 to-pink-500',
    href: '/services/ai-development'
  },
  {
    id: 'cloud-architecture',
    title: 'Cloud Architecture',
    description: 'Scalable cloud infrastructure and migration services for modern applications.',
    icon: Cloud,
    features: ['AWS/Azure/GCP', 'Microservices', 'Container Orchestration', 'Serverless'],
    category: 'cloud',
    color: 'from-blue-500 to-cyan-500',
    href: '/services/cloud-architecture'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets.',
    icon: Shield,
    features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response'],
    category: 'security',
    color: 'from-red-500 to-orange-500',
    href: '/services/cybersecurity'
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Modern, responsive web applications built with cutting-edge technologies.',
    icon: Code,
    features: ['React/Next.js', 'Progressive Web Apps', 'E-commerce', 'CMS Development'],
    category: 'web',
    color: 'from-green-500 to-emerald-500',
    href: '/services/web-development'
  },
  {
    id: 'mobile-development',
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: Smartphone,
    features: ['React Native', 'Flutter', 'Native iOS/Android', 'App Store Optimization'],
    category: 'mobile',
    color: 'from-indigo-500 to-purple-500',
    href: '/services/mobile-development'
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights with advanced analytics.',
    icon: BarChart3,
    features: ['Business Intelligence', 'Data Warehousing', 'Real-time Analytics', 'ML Pipelines'],
    category: 'data',
    color: 'from-yellow-500 to-orange-500',
    href: '/services/data-analytics'
  }
];

const categories = [
  { id: 'all', label: 'All Services', icon: Rocket },
  { id: 'ai', label: 'AI & ML', icon: Brain },
  { id: 'cloud', label: 'Cloud', icon: Cloud },
  { id: 'security', label: 'Security', icon: Shield },
  { id: 'web', label: 'Web', icon: Code },
  { id: 'mobile', label: 'Mobile', icon: Smartphone },
  { id: 'data', label: 'Data', icon: BarChart3 }
];

const AdvancedServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your business and drive innovation
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-4 h-4" />
                {category.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredServices.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  variants={cardVariants}
                  layout
                  className="group relative"
                  onHoverStart={() => setHoveredService(service.id)}
                  onHoverEnd={() => setHoveredService(null)}
                >
                  <motion.div
                    className="relative h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-8 overflow-hidden backdrop-blur-sm"
                    whileHover={{ 
                      y: -10,
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    {/* Icon */}
                    <motion.div
                      className={`relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 5 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Content */}
                    <div className="relative">
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-2 mb-8">
                        {service.features.map((feature, index) => (
                          <motion.li
                            key={index}
                            className="flex items-center text-gray-400 text-sm"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <motion.a
                        href={service.href}
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group-hover:translate-x-1 transition-transform duration-300"
                        whileHover={{ x: 5 }}
                      >
                        Learn More
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.a>
                    </div>

                    {/* Hover Effect */}
                    <motion.div
                      className="absolute inset-0 border-2 border-transparent rounded-2xl"
                      style={{
                        background: `linear-gradient(45deg, transparent, transparent) padding-box, linear-gradient(45deg, ${service.color.replace('from-', '').replace('to-', '').split(' ').map(c => `var(--tw-gradient-${c.split('-')[1]})`).join(', ')}) border-box`
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredService === service.id ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
            <Rocket className="ml-2 h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvancedServicesShowcase;