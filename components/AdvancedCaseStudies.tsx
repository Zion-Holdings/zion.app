import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Users, 
  Zap,
  Globe,
  Shield,
  Brain,
  Cloud,
  Code,
  Smartphone,
  Database,
  Rocket,
  Clock
} from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  duration: string;
  teamSize: string;
  budget: string;
  image: string;
  color: string;
  category: 'ai' | 'cloud' | 'web' | 'mobile' | 'security' | 'data' | 'innovation';
  isExpanded: boolean;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'ai-powered-analytics',
    title: 'AI-Powered Business Intelligence Platform',
    client: 'Fortune 500 Retail Corporation',
    industry: 'Retail & E-commerce',
    description: 'Developed a comprehensive AI-driven analytics platform that transformed business decision-making through predictive insights and real-time data analysis.',
    challenge: 'The client struggled with fragmented data sources, manual reporting processes, and inability to predict customer behavior and market trends.',
    solution: 'Built an integrated AI platform combining machine learning algorithms, real-time data processing, and intuitive dashboards for business users.',
    results: [
      'Increased revenue by 35% through predictive analytics',
      'Reduced operational costs by 28%',
      'Improved customer retention by 42%',
      'Achieved 99.9% data accuracy'
    ],
    technologies: ['Python', 'TensorFlow', 'AWS', 'React', 'PostgreSQL', 'Redis'],
    duration: '8 months',
    teamSize: '12 engineers',
    budget: '$2.5M',
    image: 'AI',
    color: 'from-purple-500 to-pink-500',
    category: 'ai',
    isExpanded: false
  },
  {
    id: 'cloud-migration',
    title: 'Enterprise Cloud Migration & Modernization',
    client: 'Global Financial Services',
    industry: 'Financial Services',
    description: 'Successfully migrated legacy systems to cloud-native architecture, improving performance, scalability, and security while reducing costs.',
    challenge: 'Outdated on-premise infrastructure causing performance issues, high maintenance costs, and security vulnerabilities.',
    solution: 'Implemented multi-cloud strategy with microservices architecture, containerization, and automated CI/CD pipelines.',
    results: [
      'Reduced infrastructure costs by 45%',
      'Improved system performance by 300%',
      'Achieved 99.99% uptime SLA',
      'Enhanced security compliance'
    ],
    technologies: ['AWS', 'Azure', 'Kubernetes', 'Docker', 'Terraform', 'Jenkins'],
    duration: '14 months',
    teamSize: '18 engineers',
    budget: '$4.2M',
    image: 'CL',
    color: 'from-blue-500 to-cyan-500',
    category: 'cloud',
    isExpanded: false
  },
  {
    id: 'progressive-web-app',
    title: 'Progressive Web Application Platform',
    client: 'Healthcare Technology Startup',
    industry: 'Healthcare',
    description: 'Developed a cutting-edge PWA platform that provides seamless healthcare services across all devices with offline capabilities.',
    challenge: 'Need for cross-platform healthcare application with offline functionality, real-time updates, and HIPAA compliance.',
    solution: 'Built a PWA using modern web technologies with service workers, offline-first architecture, and real-time synchronization.',
    results: [
      'Increased user engagement by 65%',
      'Reduced app development costs by 40%',
      'Achieved 100% HIPAA compliance',
      'Improved patient satisfaction scores'
    ],
    technologies: ['React', 'Service Workers', 'IndexedDB', 'WebRTC', 'Node.js', 'MongoDB'],
    duration: '6 months',
    teamSize: '8 engineers',
    budget: '$1.8M',
    image: 'PW',
    color: 'from-green-500 to-emerald-500',
    category: 'web',
    isExpanded: false
  },
  {
    id: 'mobile-banking-app',
    title: 'Next-Generation Mobile Banking Application',
    client: 'Regional Credit Union',
    industry: 'Financial Services',
    description: 'Created a modern, secure mobile banking application with advanced features like biometric authentication and AI-powered fraud detection.',
    challenge: 'Outdated mobile banking app with poor user experience, security concerns, and limited functionality.',
    solution: 'Developed native iOS and Android apps with modern UI/UX, biometric security, and AI-powered features.',
    results: [
      'Increased mobile banking adoption by 78%',
      'Reduced fraud incidents by 85%',
      'Improved app store ratings to 4.8+',
      'Enhanced customer satisfaction'
    ],
    technologies: ['Swift', 'Kotlin', 'React Native', 'Firebase', 'TensorFlow Lite', 'Biometric APIs'],
    duration: '10 months',
    teamSize: '10 engineers',
    budget: '$2.1M',
    image: 'MB',
    color: 'from-indigo-500 to-purple-500',
    category: 'mobile',
    isExpanded: false
  },
  {
    id: 'cybersecurity-platform',
    title: 'Advanced Cybersecurity & Threat Intelligence',
    client: 'Government Defense Contractor',
    industry: 'Defense & Security',
    description: 'Built a comprehensive cybersecurity platform with real-time threat detection, automated response, and advanced analytics.',
    challenge: 'Increasing cyber threats, manual security processes, and need for real-time threat intelligence and response.',
    solution: 'Developed AI-powered security platform with machine learning threat detection, automated incident response, and comprehensive monitoring.',
    results: [
      'Prevented 99.7% of cyber attacks',
      'Reduced incident response time by 80%',
      'Achieved SOC 2 Type II compliance',
      'Enhanced threat intelligence capabilities'
    ],
    technologies: ['Python', 'Elasticsearch', 'Kafka', 'React', 'PostgreSQL', 'Machine Learning'],
    duration: '12 months',
    teamSize: '15 engineers',
    budget: '$3.8M',
    image: 'CS',
    color: 'from-red-500 to-orange-500',
    category: 'security',
    isExpanded: false
  },
  {
    id: 'data-warehouse',
    title: 'Enterprise Data Warehouse & Analytics',
    client: 'Manufacturing Corporation',
    industry: 'Manufacturing',
    description: 'Implemented a comprehensive data warehouse solution with real-time analytics, predictive modeling, and business intelligence dashboards.',
    challenge: 'Disparate data sources, lack of real-time insights, and inability to make data-driven decisions across the organization.',
    solution: 'Built a modern data warehouse with ETL pipelines, real-time processing, and advanced analytics capabilities.',
    results: [
      'Improved operational efficiency by 32%',
      'Reduced data processing time by 75%',
      'Generated $15M in cost savings',
      'Enhanced decision-making capabilities'
    ],
    technologies: ['Snowflake', 'Apache Kafka', 'Apache Spark', 'Tableau', 'Python', 'AWS'],
    duration: '9 months',
    teamSize: '11 engineers',
    budget: '$2.9M',
    image: 'DW',
    color: 'from-yellow-500 to-orange-500',
    category: 'data',
    isExpanded: false
  }
];

const categories = [
  { id: 'all', label: 'All Projects', icon: Rocket },
  { id: 'ai', label: 'AI & ML', icon: Brain },
  { id: 'cloud', label: 'Cloud', icon: Cloud },
  { id: 'web', label: 'Web', icon: Code },
  { id: 'mobile', label: 'Mobile', icon: Smartphone },
  { id: 'security', label: 'Security', icon: Shield },
  { id: 'data', label: 'Data', icon: Database },
  { id: 'innovation', label: 'Innovation', icon: Zap }
];

const AdvancedCaseStudies: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedCase, setExpandedCase] = useState<string | null>(null);

  const filteredCaseStudies = selectedCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(caseStudy => caseStudy.category === selectedCategory);

  const toggleCase = (caseId: string) => {
    setExpandedCase(expandedCase === caseId ? null : caseId);
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
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
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
            Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how we&apos;ve transformed businesses across industries with our innovative technology solutions. 
            Each case study represents a unique challenge and our proven approach to solving it.
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

        {/* Case Studies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredCaseStudies.map((caseStudy) => {
              const isExpanded = expandedCase === caseStudy.id;
              
              return (
                <motion.div
                  key={caseStudy.id}
                  variants={cardVariants}
                  layout
                  className="group relative"
                >
                  <motion.div
                    className="relative h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 overflow-hidden backdrop-blur-sm cursor-pointer"
                    whileHover={{ 
                      y: -5,
                      transition: { duration: 0.3 }
                    }}
                    onClick={() => toggleCase(caseStudy.id)}
                  >
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${caseStudy.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    {/* Header */}
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        {/* Project Icon */}
                        <motion.div
                          className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${caseStudy.color} rounded-2xl group-hover:scale-110 transition-transform duration-300`}
                          whileHover={{ rotate: 5 }}
                        >
                          <span className="text-white font-bold text-lg">{caseStudy.image}</span>
                        </motion.div>
                        
                        {/* Expand Button */}
                        <motion.button
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
                          {caseStudy.title}
                        </h3>
                        
                        <div className="space-y-3 mb-6">
                          <p className="text-blue-400 font-medium">{caseStudy.client}</p>
                          <p className="text-gray-400 text-sm">{caseStudy.industry}</p>
                          <p className="text-gray-300 leading-relaxed">{caseStudy.description}</p>
                        </div>

                        {/* Project Details */}
                        <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                          <div className="bg-gray-700/30 rounded-lg p-3">
                            <Clock className="w-5 h-5 text-blue-400 mx-auto mb-2" />
                            <p className="text-white text-sm font-medium">{caseStudy.duration}</p>
                          </div>
                          <div className="bg-gray-700/30 rounded-lg p-3">
                            <Users className="w-5 h-5 text-purple-400 mx-auto mb-2" />
                            <p className="text-white text-sm font-medium">{caseStudy.teamSize}</p>
                          </div>
                          <div className="bg-gray-700/30 rounded-lg p-3">
                            <TrendingUp className="w-5 h-5 text-green-400 mx-auto mb-2" />
                            <p className="text-white text-sm font-medium">{caseStudy.budget}</p>
                          </div>
                        </div>

                        {/* Technologies */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-white mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {caseStudy.technologies.map((tech, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Expanded Content */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden border-t border-gray-700/50"
                          >
                            <div className="p-8 space-y-6">
                              {/* Challenge & Solution */}
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                                    <Shield className="w-5 h-5 text-red-400 mr-2" />
                                    The Challenge
                                  </h4>
                                  <p className="text-gray-300 text-sm leading-relaxed">{caseStudy.challenge}</p>
                                </div>
                                <div>
                                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                                    <Rocket className="w-5 h-5 text-blue-400 mr-2" />
                                    Our Solution
                                  </h4>
                                  <p className="text-gray-300 text-sm leading-relaxed">{caseStudy.solution}</p>
                                </div>
                              </div>

                              {/* Results */}
                              <div>
                                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                                  <Star className="w-5 h-5 text-yellow-400 mr-2" />
                                  Results & Impact
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  {caseStudy.results.map((result, index) => (
                                    <motion.div
                                      key={index}
                                      className="flex items-start text-gray-300 text-sm"
                                      initial={{ opacity: 0, x: -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: index * 0.1 }}
                                    >
                                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                                      {result}
                                    </motion.div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Hover Effect Border */}
                    <motion.div
                      className="absolute inset-0 border-2 border-transparent rounded-2xl"
                      style={{
                        background: `linear-gradient(45deg, transparent, transparent) padding-box, linear-gradient(45deg, ${caseStudy.color.replace('from-', '').replace('to-', '').split(' ').map(c => `var(--tw-gradient-${c.split('-')[1]})`).join(', ')}) border-box`
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
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl border border-blue-500/30 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-gray-300 mb-6">
              Let&apos;s discuss how our technology solutions can transform your business and drive measurable results.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvancedCaseStudies;