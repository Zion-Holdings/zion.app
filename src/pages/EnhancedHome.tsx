import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Star, 
  Users, 
  Zap, 
  Shield, 
  TrendingUp,
  Globe,
  Code,
  Database,
  Cloud,
  Brain,
  Lock,
  BarChart3,
  DollarSign,
  Rocket,
  Sparkles,
  Cpu,
  Network,
  Eye,
  Bot,
  CheckCircle,
  ArrowUpRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { ENHANCED_MICRO_SAAS_SERVICES, ENHANCED_SAAS_CATEGORIES } from '../data/enhancedMicroSaasServices';
import { INNOVATIVE_SERVICES, INNOVATIVE_SERVICE_CATEGORIES } from '../data/innovativeServices';

const EnhancedHome: React.FC = () => {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Combine all services for showcase
  const allServices = [...ENHANCED_MICRO_SAAS_SERVICES, ...INNOVATIVE_SERVICES];
  const featuredServices = allServices.filter(service => service.rating >= 4.7).slice(0, 6);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % featuredServices.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredServices.length]);

  const getCategoryIcon = (category: string) => {
    const categoryMap: { [key: string]: React.ReactNode } = {
      'AI & ML': <Brain className="w-6 h-6" />,
      'IT Infrastructure': <Cloud className="w-6 h-6" />,
      'Cybersecurity': <Shield className="w-6 h-6" />,
      'Business Automation': <Zap className="w-6 h-6" />,
      'Data Analytics': <BarChart3 className="w-6 h-6" />,
      'Financial Tech': <DollarSign className="w-6 h-6" />,
      'Quantum Computing': <Cpu className="w-6 h-6" />,
      'Blockchain & Web3': <Network className="w-6 h-6" />,
      'Internet of Things': <Globe className="w-6 h-6" />,
      'Edge Computing': <Zap className="w-6 h-6" />,
      'Augmented Reality': <Eye className="w-6 h-6" />,
      'Robotic Process Automation': <Bot className="w-6 h-6" />
    };
    return categoryMap[category] || <Rocket className="w-6 h-6" />;
  };

  const stats = [
    { label: 'Services Available', value: allServices.length, icon: <Rocket className="w-6 h-6" /> },
    { label: 'AI-Powered Solutions', value: ENHANCED_MICRO_SAAS_SERVICES.filter(s => s.category === 'AI & ML').length, icon: <Brain className="w-6 h-6" /> },
    { label: 'Innovation Score', value: '98%', icon: <Sparkles className="w-6 h-6" /> },
    { label: 'Customer Satisfaction', value: '4.8/5', icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-blue-500/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]"></div>
      </div>

      {/* Hero Section */}
      <motion.section 
        className="relative z-10 pt-20 pb-32 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-5xl mx-auto leading-relaxed">
              Transforming businesses through cutting-edge AI, innovative micro SAAS solutions, and next-generation technology platforms
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/enhanced-services"
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center gap-2"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 rounded-xl font-semibold text-lg transition-all duration-300 hover:border-cyan-400"
              >
                Get Started
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="text-center p-4 rounded-xl bg-gray-800/30 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex justify-center mb-2 text-cyan-400">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Services Showcase */}
      <motion.section 
        className="relative z-10 py-20 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Featured Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our most popular and highly-rated micro SAAS solutions that are transforming businesses worldwide
            </p>
          </motion.div>

          {/* Featured Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 transform hover:-translate-y-2"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-cyan-500/20 rounded-xl text-cyan-400">
                      {getCategoryIcon(service.category)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl text-white group-hover:text-cyan-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-400">{service.category}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium">{service.rating}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 line-clamp-3">
                  {service.description}
                </p>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="text-3xl font-bold text-white">
                    {service.price.currency}{service.price.monthly}
                    <span className="text-sm text-gray-400 font-normal">/month</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    {service.price.currency}{service.price.yearly}/year
                  </div>
                </div>

                {/* Features Preview */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-lg flex items-center gap-1"
                      >
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        {feature.split(' ').slice(0, 3).join(' ')}...
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Link
                    to={`/enhanced-services?service=${service.id}`}
                    className="flex-1 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors font-medium text-center"
                  >
                    Learn More
                  </Link>
                  <button
                    onClick={() => window.open(service.website, '_blank')}
                    className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors flex items-center gap-1"
                  >
                    Visit
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Services Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/enhanced-services"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 rounded-xl font-semibold text-lg transition-all duration-300 hover:border-cyan-400"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Service Categories */}
      <motion.section 
        className="relative z-10 py-20 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of technology solutions across multiple domains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...ENHANCED_SAAS_CATEGORIES, ...INNOVATIVE_SERVICE_CATEGORIES].map((category, index) => (
              <motion.div
                key={category.value}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 bg-gray-800/30 border border-gray-700/50 rounded-xl hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl">{category.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {category.label}
                    </h3>
                    <p className="text-sm text-gray-400">{category.serviceCount} services</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  {category.description}
                </p>
                <Link
                  to={`/enhanced-services?category=${category.value}`}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                >
                  Explore Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section 
        className="relative z-10 py-20 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven business solutions to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8" />,
                title: 'AI-Powered Solutions',
                description: 'Advanced artificial intelligence and machine learning capabilities across all our services'
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Enterprise Security',
                description: 'Bank-level security and compliance standards for all our platforms'
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Lightning Fast',
                description: 'Optimized performance and real-time processing capabilities'
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: '24/7 Support',
                description: 'Round-the-clock expert support and maintenance services'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-800/30 border border-gray-700/50 rounded-xl hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex justify-center mb-4 text-cyan-400">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        className="relative z-10 py-20 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch with our team of experts to discuss your needs and discover how our solutions can drive your success
            </p>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  icon: <Phone className="w-6 h-6" />,
                  label: 'Phone',
                  value: '+1 302 464 0950',
                  link: 'tel:+13024640950'
                },
                {
                  icon: <Mail className="w-6 h-6" />,
                  label: 'Email',
                  value: 'kleber@ziontechgroup.com',
                  link: 'mailto:kleber@ziontechgroup.com'
                },
                {
                  icon: <MapPin className="w-6 h-6" />,
                  label: 'Address',
                  value: '364 E Main St STE 1008, Middletown DE 19709',
                  link: '#'
                }
              ].map((contact, index) => (
                <motion.div
                  key={contact.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 bg-gray-800/30 border border-gray-700/50 rounded-lg hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex justify-center mb-3 text-cyan-400">
                    {contact.icon}
                  </div>
                  <div className="text-sm text-gray-400 mb-1">{contact.label}</div>
                  <a
                    href={contact.link}
                    className="text-white hover:text-cyan-400 transition-colors font-medium"
                  >
                    {contact.value}
                  </a>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                Contact Us
              </Link>
              <Link
                to="/enhanced-services"
                className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 rounded-xl font-semibold text-lg transition-all duration-300 hover:border-cyan-400"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default EnhancedHome;