import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
<<<<<<< HEAD
  Star, Clock, Users, TrendingUp, CheckCircle, ExternalLink, 
  ChevronRight, Shield, Zap, Globe
=======
  Brain, 
  Cloud, 
  Code, 
  Shield, 
  Globe, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Star,
  TrendingUp,
  Users,
  Clock,
  Award,
  Rocket
>>>>>>> 6d7be8fce1d5e66d749ea8dd439e0663bfd83322
} from 'lucide-react';

const EnhancedServicesShowcase: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const services = [
    {
      id: 1,
      icon: Brain,
      title: 'AI Development',
      description: 'Custom AI solutions and machine learning models tailored to your business needs.',
      category: 'ai',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-500/10 to-pink-500/10',
      borderColor: 'border-purple-500/30',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI Chatbots',
        'Recommendation Systems'
      ],
      benefits: [
        'Increased operational efficiency',
        'Data-driven decision making',
        'Automated processes',
        'Competitive advantage'
      ],
      stats: {
        projects: '150+',
        accuracy: '95%',
        timeToMarket: '30% faster'
      },
      href: '/services/ai-development'
    },
    {
      id: 2,
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Scalable cloud solutions and infrastructure design for modern applications.',
      category: 'cloud',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-500/10 to-cyan-500/10',
      borderColor: 'border-blue-500/30',
      features: [
        'AWS/Azure/GCP Migration',
        'Microservices Architecture',
        'Serverless Solutions',
        'DevOps Automation',
        'Container Orchestration',
        'Cloud Security'
      ],
      benefits: [
        'Scalable infrastructure',
        'Cost optimization',
        'High availability',
        'Reduced maintenance'
      ],
      stats: {
        projects: '200+',
        uptime: '99.99%',
        costReduction: '40%'
      },
      href: '/services/cloud-services'
    },
    {
      id: 3,
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies.',
      category: 'web',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-500/10 to-emerald-500/10',
      borderColor: 'border-green-500/30',
      features: [
        'React/Next.js Applications',
        'Full-Stack Development',
        'Progressive Web Apps',
        'API Development',
        'E-commerce Solutions',
        'Custom CMS'
      ],
      benefits: [
        'Modern user experience',
        'Mobile-first design',
        'Fast performance',
        'SEO optimization'
      ],
      stats: {
        projects: '300+',
        performance: '90+',
        mobileScore: '95+'
      },
      href: '/services/web-development'
    },
    {
      id: 4,
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      category: 'security',
      color: 'from-red-500 to-orange-500',
      bgColor: 'from-red-500/10 to-orange-500/10',
      borderColor: 'border-red-500/30',
      features: [
        'Security Audits',
        'Penetration Testing',
        'Compliance Management',
        'Incident Response',
        'Security Training',
        'Threat Intelligence'
      ],
      benefits: [
        'Protect sensitive data',
        'Meet compliance requirements',
        'Reduce security risks',
        'Build customer trust'
      ],
      stats: {
        projects: '100+',
        vulnerabilities: '0',
        compliance: '100%'
      },
      href: '/services/cybersecurity'
    },
    {
      id: 5,
      icon: Globe,
      title: 'IoT Platforms',
      description: 'Connected device solutions for smart environments and automation.',
      category: 'iot',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'from-indigo-500/10 to-purple-500/10',
      borderColor: 'border-indigo-500/30',
      features: [
        'Sensor Networks',
        'Edge Computing',
        'Real-time Analytics',
        'Device Management',
        'Data Collection',
        'Remote Monitoring'
      ],
      benefits: [
        'Automated operations',
        'Real-time insights',
        'Cost savings',
        'Improved efficiency'
      ],
      stats: {
        projects: '80+',
        devices: '10K+',
        efficiency: '60%'
      },
      href: '/services/iot-platforms'
    },
    {
      id: 6,
      icon: Zap,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services to modernize your business.',
      category: 'transformation',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'from-yellow-500/10 to-orange-500/10',
      borderColor: 'border-yellow-500/30',
      features: [
        'Process Automation',
        'Legacy Modernization',
        'Change Management',
        'Training & Support',
        'Digital Strategy',
        'Technology Roadmap'
      ],
      benefits: [
        'Streamlined operations',
        'Improved productivity',
        'Better customer experience',
        'Future-ready business'
      ],
      stats: {
        projects: '120+',
        efficiency: '50%',
        satisfaction: '98%'
      },
      href: '/services/digital-transformation'
    }
  ];

  const categories = [
<<<<<<< HEAD
    { id: 'all', name: 'All Services', icon: '🚀' },
    { id: 'AI & Machine Learning', name: 'AI & ML', icon: '🧠' },
    { id: 'Quantum Computing & AI', name: 'Quantum AI', icon: '⚛️' },
    { id: 'Cybersecurity', name: 'Security', icon: '🛡️' },
    { id: 'Space Technology', name: 'Space Tech', icon: '🚀' },
    { id: 'DevOps & Infrastructure', name: 'DevOps', icon: '⚙️' },
    { id: 'Edge Computing', name: 'Edge Computing', icon: '🌐' },
    { id: 'Healthcare AI', name: 'Healthcare', icon: '🏥' },
    { id: 'Blockchain & DeFi', name: 'Blockchain', icon: '🔗' },
    { id: 'Legal Technology', name: 'Legal Tech', icon: '⚖️' },
    { id: 'Autonomous Vehicles', name: 'Auto Tech', icon: '🚗' },
    { id: 'Climate Technology', name: 'Climate Tech', icon: '🌍' },
    { id: 'Education Technology', name: 'EdTech', icon: '🎓' },
    { id: 'Manufacturing Technology', name: 'Manufacturing', icon: '🏭' }
=======
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'ai', name: 'AI & ML', count: services.filter(s => s.category === 'ai').length },
    { id: 'cloud', name: 'Cloud', count: services.filter(s => s.category === 'cloud').length },
    { id: 'web', name: 'Web Dev', count: services.filter(s => s.category === 'web').length },
    { id: 'security', name: 'Security', count: services.filter(s => s.category === 'security').length },
    { id: 'iot', name: 'IoT', count: services.filter(s => s.category === 'iot').length },
    { id: 'transformation', name: 'Digital', count: services.filter(s => s.category === 'transformation').length },
>>>>>>> 6d7be8fce1d5e66d749ea8dd439e0663bfd83322
  ];

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

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
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

  const categoryVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-600 text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            Our Services
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Comprehensive Technology
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From AI development to cloud architecture, we deliver cutting-edge technology solutions 
            that drive innovation and business growth across all industries.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              variants={categoryVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white text-gray-700 hover:text-blue-600 hover:bg-blue-50 border border-gray-200 hover:border-blue-200'
              }`}
            >
              {category.name}
              <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
                {category.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Services Grid */}
<<<<<<< HEAD
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredServices.map((service, index) => (
=======
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredServices.map((service) => (
>>>>>>> 6d7be8fce1d5e66d749ea8dd439e0663bfd83322
              <motion.div
                key={service.id}
                variants={itemVariants}
                layout
                className="group relative"
                onHoverStart={() => setHoveredService(service.id)}
                onHoverEnd={() => setHoveredService(null)}
              >
                <div className={`h-full bg-gradient-to-br ${service.bgColor} rounded-2xl border ${service.borderColor} p-8 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 group-hover:scale-105`}>
                  {/* Service Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">{service.stats.projects}</div>
                      <div className="text-xs text-gray-500">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">{service.stats.accuracy || service.stats.uptime || service.stats.performance}</div>
                      <div className="text-xs text-gray-500">
                        {service.stats.accuracy ? 'Accuracy' : service.stats.uptime ? 'Uptime' : 'Score'}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">{service.stats.timeToMarket || service.stats.costReduction || service.stats.efficiency}</div>
                      <div className="text-xs text-gray-500">
                        {service.stats.timeToMarket ? 'Faster' : service.stats.costReduction ? 'Savings' : 'Efficiency'}
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>

                {/* Hover Effect Overlay */}
                {hoveredService === service.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl -z-10"
                  />
                )}
              </motion.div>
            ))}
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
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our technology solutions can drive growth, efficiency, and innovation for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300"
              >
                <Rocket className="w-5 h-5" />
                Start Your Project
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors duration-300"
              >
                <Users className="w-5 h-5" />
                View All Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedServicesShowcase;