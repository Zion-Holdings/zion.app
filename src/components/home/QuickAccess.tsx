
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, 
  Users, 
  Briefcase, 
  Settings, 
  Code, 
  Globe, 
  Zap, 
  Shield,
  ArrowRight,
  Star
} from 'lucide-react';

const quickAccessItems = [
  {
    title: 'AI Talent Matching',
    description: 'Find the perfect match using advanced AI algorithms',
    icon: Search,
    link: '/match',
    color: 'from-zion-purple to-zion-purple-dark',
    bgColor: 'bg-zion-purple/10',
    borderColor: 'border-zion-purple/20',
    iconColor: 'text-zion-purple'
  },
  {
    title: 'Talent Directory',
    description: 'Browse verified professionals across all industries',
    icon: Users,
    link: '/talent',
    color: 'from-zion-cyan to-zion-cyan-dark',
    bgColor: 'bg-zion-cyan/10',
    borderColor: 'border-zion-cyan/20',
    iconColor: 'text-zion-cyan'
  },
  {
    title: 'Services Marketplace',
    description: 'Discover professional services and solutions',
    icon: Briefcase,
    link: '/services',
    color: 'from-zion-blue to-zion-blue-dark',
    bgColor: 'bg-zion-blue/10',
    borderColor: 'border-zion-blue/20',
    iconColor: 'text-zion-blue'
  },
  {
    title: 'IT Onsite Support',
    description: '24/7 global technical support and deployment',
    icon: Settings,
    link: '/it-onsite-services',
    color: 'from-zion-purple-light to-zion-purple',
    bgColor: 'bg-zion-purple-light/10',
    borderColor: 'border-zion-purple-light/20',
    iconColor: 'text-zion-purple-light'
  },
  {
    title: 'Developer Tools',
    description: 'Advanced APIs and development resources',
    icon: Code,
    link: '/developers',
    color: 'from-zion-cyan-light to-zion-cyan',
    bgColor: 'bg-zion-cyan-light/10',
    borderColor: 'border-zion-cyan-light/20',
    iconColor: 'text-zion-cyan-light'
  },
  {
    title: 'Global Network',
    description: 'Connect with professionals worldwide',
    icon: Globe,
    link: '/community',
    color: 'from-zion-blue-light to-zion-blue',
    bgColor: 'bg-zion-blue-light/10',
    borderColor: 'border-zion-blue-light/20',
    iconColor: 'text-zion-blue-light'
  }
];

const features = [
  { icon: Zap, text: 'Lightning Fast', color: 'text-yellow-400' },
  { icon: Shield, text: 'Secure & Reliable', color: 'text-green-400' },
  { icon: Star, text: 'Premium Quality', color: 'text-zion-purple' }
];

export function QuickAccess() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-zion-slate-dark via-zion-slate to-zion-blue-dark relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-zion-purple rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-zion-cyan rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Quick Access to Everything
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive suite of services and tools designed to accelerate your success
          </p>
        </motion.div>

        {/* Quick Access Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {quickAccessItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <Link to={item.link}>
                <div className={`h-full p-6 rounded-2xl ${item.bgColor} ${item.borderColor} border-2 hover:border-opacity-40 transition-all duration-300 backdrop-blur-sm`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-white/10 ${item.iconColor} bg-opacity-20`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-zion-slate-light group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-200">
                    {item.title}
                  </h3>
                  
                  <p className="text-zion-slate-light leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className={`mt-4 w-12 h-1 bg-gradient-to-r ${item.color} rounded-full group-hover:w-16 transition-all duration-300`}></div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Section */}
        <motion.div 
          className="bg-gradient-to-r from-zion-blue/20 to-zion-purple/20 rounded-3xl p-8 md:p-12 border border-zion-blue-light/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h3>
            <p className="text-zion-slate-light text-lg">
              Experience the difference with our cutting-edge platform
            </p>
          </div>

          <motion.div 
            className="flex flex-col md:flex-row justify-center items-center gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={featureVariants}
                className="flex flex-col items-center text-center"
              >
                <div className={`p-4 rounded-full bg-white/10 mb-4 ${feature.color} bg-opacity-20`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{feature.text}</h4>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              to="/marketplace"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Explore All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
