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
  Rocket,
  Cpu,
  Network,
  Palette,
  Target
} from 'lucide-react';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  category: 'ai' | 'cloud' | 'security' | 'web' | 'mobile' | 'data' | 'innovation';
  color: string;
  benefits: string[];
  useCases: string[];
  isExpanded: boolean;
}

const features: Feature[] = [
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description: 'Cutting-edge artificial intelligence and machine learning solutions that transform your business operations.',
    icon: Brain,
    category: 'ai',
    color: 'from-purple-500 to-pink-500',
    benefits: [
      'Predictive analytics for business insights',
      'Automated decision-making processes',
      'Natural language processing capabilities',
      'Computer vision and image recognition',
      'Intelligent automation workflows'
    ],
    useCases: [
      'Customer behavior analysis',
      'Fraud detection systems',
      'Content recommendation engines',
      'Predictive maintenance',
      'Intelligent chatbots'
    ],
    isExpanded: false
  },
  {
    id: 'cloud-native',
    title: 'Cloud-Native Architecture',
    description: 'Scalable, resilient cloud infrastructure designed for modern applications and microservices.',
    icon: Cloud,
    category: 'cloud',
    color: 'from-blue-500 to-cyan-500',
    benefits: [
      'Auto-scaling infrastructure',
      'High availability and fault tolerance',
      'Cost optimization and resource management',
      'Global deployment capabilities',
      'DevOps automation and CI/CD'
    ],
    useCases: [
      'Microservices applications',
      'Serverless computing',
      'Container orchestration',
      'Multi-cloud strategies',
      'Edge computing solutions'
    ],
    isExpanded: false
  },
  {
    id: 'cybersecurity',
    title: 'Advanced Cybersecurity',
    description: 'Comprehensive security solutions protecting your digital assets from evolving threats.',
    icon: Shield,
    category: 'security',
    color: 'from-red-500 to-orange-500',
    benefits: [
      'Zero-trust security architecture',
      'Real-time threat detection',
      'Compliance and regulatory adherence',
      'Incident response automation',
      'Security awareness training'
    ],
    useCases: [
      'Identity and access management',
      'Network security monitoring',
      'Data encryption and protection',
      'Vulnerability assessment',
      'Security operations center'
    ],
    isExpanded: false
  },
  {
    id: 'web-platforms',
    title: 'Modern Web Platforms',
    description: 'Next-generation web applications built with cutting-edge technologies and best practices.',
    icon: Code,
    category: 'web',
    color: 'from-green-500 to-emerald-500',
    benefits: [
      'Progressive web app capabilities',
      'SEO-optimized architecture',
      'Performance-focused development',
      'Accessibility compliance',
      'Cross-browser compatibility'
    ],
    useCases: [
      'E-commerce platforms',
      'Content management systems',
      'Progressive web applications',
      'Real-time collaboration tools',
      'Interactive dashboards'
    ],
    isExpanded: false
  },
  {
    id: 'mobile-solutions',
    title: 'Mobile-First Solutions',
    description: 'Native and cross-platform mobile applications delivering exceptional user experiences.',
    icon: Smartphone,
    category: 'mobile',
    color: 'from-indigo-500 to-purple-500',
    benefits: [
      'Cross-platform development',
      'Native performance optimization',
      'Offline functionality support',
      'Push notification systems',
      'App store optimization'
    ],
    useCases: [
      'Consumer mobile apps',
      'Enterprise mobile solutions',
      'IoT companion applications',
      'Mobile commerce platforms',
      'Health and fitness apps'
    ],
    isExpanded: false
  },
  {
    id: 'data-intelligence',
    title: 'Data Intelligence',
    description: 'Transform raw data into actionable insights with advanced analytics and visualization.',
    icon: BarChart3,
    category: 'data',
    color: 'from-yellow-500 to-orange-500',
    benefits: [
      'Real-time data processing',
      'Advanced analytics and reporting',
      'Data visualization dashboards',
      'Predictive modeling capabilities',
      'Data governance and compliance'
    ],
    useCases: [
      'Business intelligence platforms',
      'Data warehousing solutions',
      'Real-time analytics engines',
      'Customer data platforms',
      'Operational intelligence systems'
    ],
    isExpanded: false
  },
  {
    id: 'iot-platforms',
    title: 'IoT & Edge Computing',
    description: 'Connected device solutions and edge computing platforms for smart environments.',
    icon: Network,
    category: 'innovation',
    color: 'from-teal-500 to-blue-500',
    benefits: [
      'Real-time device monitoring',
      'Edge computing optimization',
      'Scalable IoT infrastructure',
      'Data processing at the edge',
      'Smart automation systems'
    ],
    useCases: [
      'Smart city solutions',
      'Industrial IoT platforms',
      'Connected healthcare devices',
      'Smart home automation',
      'Environmental monitoring'
    ],
    isExpanded: false
  },
  {
    id: 'blockchain',
    title: 'Blockchain & Web3',
    description: 'Decentralized solutions and blockchain technology for next-generation applications.',
    icon: Lock,
    category: 'innovation',
    color: 'from-emerald-500 to-green-500',
    benefits: [
      'Decentralized architecture',
      'Enhanced security and transparency',
      'Smart contract automation',
      'Tokenization capabilities',
      'Cross-border transactions'
    ],
    useCases: [
      'DeFi applications',
      'NFT marketplaces',
      'Supply chain tracking',
      'Digital identity systems',
      'Decentralized governance'
    ],
    isExpanded: false
  }
];

const categories = [
  { id: 'all', label: 'All Features', icon: Rocket },
  { id: 'ai', label: 'AI & ML', icon: Brain },
  { id: 'cloud', label: 'Cloud', icon: Cloud },
  { id: 'security', label: 'Security', icon: Shield },
  { id: 'web', label: 'Web', icon: Code },
  { id: 'mobile', label: 'Mobile', icon: Smartphone },
  { id: 'data', label: 'Data', icon: BarChart3 },
  { id: 'innovation', label: 'Innovation', icon: Target }
];

const AdvancedFeaturesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);

  const filteredFeatures = selectedCategory === 'all' 
    ? features 
    : features.filter(feature => feature.category === selectedCategory);

  const toggleFeature = (featureId: string) => {
    setExpandedFeature(expandedFeature === featureId ? null : featureId);
  };

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
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
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
            Cutting-Edge Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive suite of advanced technology features designed to drive innovation and transform your business.
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

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredFeatures.map((feature) => {
              const Icon = feature.icon;
              const isExpanded = expandedFeature === feature.id;
              
              return (
                <motion.div
                  key={feature.id}
                  variants={cardVariants}
                  layout
                  className="group relative"
                >
                  <motion.div
                    className="relative h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 overflow-hidden backdrop-blur-sm"
                    whileHover={{ 
                      y: -5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    {/* Header */}
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <motion.div
                          className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl group-hover:scale-110 transition-transform duration-300`}
                          whileHover={{ rotate: 5 }}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </motion.div>
                        
                        <motion.button
                          onClick={() => toggleFeature(feature.id)}
                          className="w-8 h-8 bg-gray-700/50 hover:bg-gray-600/50 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <motion.div
                            animate={{ rotate: isExpanded ? 45 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                          </motion.div>
                        </motion.button>
                      </div>

                      {/* Content */}
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                          {feature.title}
                        </h3>
                        
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {feature.description}
                        </p>

                        {/* Expanded Content */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="space-y-6 pt-6 border-t border-gray-700/50">
                                {/* Benefits */}
                                <div>
                                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                                    <Target className="w-5 h-5 text-blue-400 mr-2" />
                                    Key Benefits
                                  </h4>
                                  <ul className="space-y-2">
                                    {feature.benefits.map((benefit, index) => (
                                      <motion.li
                                        key={index}
                                        className="flex items-center text-gray-300 text-sm"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                      >
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                                        {benefit}
                                      </motion.li>
                                    ))}
                                  </ul>
                                </div>

                                {/* Use Cases */}
                                <div>
                                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                                    <Rocket className="w-5 h-5 text-purple-400 mr-2" />
                                    Use Cases
                                  </h4>
                                  <ul className="space-y-2">
                                    {feature.useCases.map((useCase, index) => (
                                      <motion.li
                                        key={index}
                                        className="flex items-center text-gray-300 text-sm"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 + 0.2 }}
                                      >
                                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                                        {useCase}
                                      </motion.li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Hover Effect Border */}
                    <motion.div
                      className="absolute inset-0 border-2 border-transparent rounded-2xl"
                      style={{
                        background: `linear-gradient(45deg, transparent, transparent) padding-box, linear-gradient(45deg, ${feature.color.replace('from-', '').replace('to-', '').split(' ').map(c => `var(--tw-gradient-${c.split('-')[1]})`).join(', ')}) border-box`
                      }}
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
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
            Explore All Features
            <Rocket className="ml-2 h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvancedFeaturesShowcase;