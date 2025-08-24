
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Users, 
  Globe,
  ArrowRight,
  CheckCircle,
  Shield,
  Star,
  Award,
  TrendingUp
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Intelligence',
    description: 'Advanced machine learning algorithms that understand your needs and match you with the perfect solutions.',
    benefits: ['Smart Matching', 'Predictive Analytics', 'Continuous Learning'],
    color: 'from-zion-purple to-zion-purple-dark',
    bgColor: 'bg-zion-purple/10',
    borderColor: 'border-zion-purple/20',
    iconColor: 'text-zion-purple',
    link: '/zion-hire-ai'
  },
  {
    icon: Zap,
    title: 'Rapid Deployment',
    description: 'Get your projects up and running in record time with our streamlined processes and global network.',
    benefits: ['24/7 Support', 'Global Coverage', 'Instant Quotes'],
    color: 'from-zion-cyan to-zion-cyan-dark',
    bgColor: 'bg-zion-cyan/10',
    borderColor: 'border-zion-cyan/20',
    iconColor: 'text-zion-cyan',
    link: '/services'
  },
  {
    icon: Users,
    title: 'Precision Solutions',
    description: 'Tailored solutions designed specifically for your unique requirements and business objectives.',
    benefits: ['Custom Development', 'Scalable Architecture', 'Future-Proof Design'],
    color: 'from-zion-blue to-zion-blue-dark',
    bgColor: 'bg-zion-blue/10',
    borderColor: 'border-zion-blue/20',
    iconColor: 'text-zion-blue',
    link: '/request-quote'
  }
];

const stats = [
  { number: '10K+', label: 'Projects Completed', icon: CheckCircle, color: 'text-green-400' },
  { number: '150+', label: 'Countries Served', icon: Globe, color: 'text-zion-cyan' },
  { number: '99.9%', label: 'Uptime Guarantee', icon: Shield, color: 'text-zion-purple' },
  { number: '<15min', label: 'Response Time', icon: Zap, color: 'text-yellow-400' }
];

export function FeatureCTAs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-zion-slate to-zion-slate-dark relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div 
          className="absolute top-40 right-20 w-72 h-72 bg-zion-purple rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-40 left-20 w-72 h-72 bg-zion-cyan rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        ></motion.div>
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-zion-blue rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/10 border border-zion-cyan/20 text-zion-cyan text-sm font-medium mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Star className="w-4 h-4 mr-2" />
            </motion.div>
            Why Choose Zion Tech Group
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powerful Features That Drive Results
          </h2>
          
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Our comprehensive platform combines cutting-edge technology with proven methodologies 
            to deliver exceptional outcomes for your business.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`${feature.bgColor} ${feature.borderColor} border rounded-2xl p-8 hover:shadow-2xl hover:shadow-zion-cyan/20 transition-all duration-300 group cursor-pointer`}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Icon */}
              <motion.div 
                className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-zion-slate-light mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Benefits */}
              <div className="space-y-3 mb-8">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <motion.div 
                    key={benefitIndex}
                    className="flex items-center text-zion-slate-light"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: benefitIndex * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to={feature.link}
                  className={`inline-flex items-center text-${feature.iconColor.split('-')[1]} hover:text-${feature.iconColor.split('-')[1]}-dark font-semibold group-hover:underline transition-all duration-300`}
                >
                  Learn More
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-white mb-12">
            Trusted by Thousands of Businesses Worldwide
          </h3>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={statsVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className={`text-4xl font-bold ${stat.color} mb-2`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200, 
                    delay: index * 0.1 
                  }}
                >
                  {stat.number}
                </motion.div>
                <div className="flex items-center justify-center mb-2">
                  <stat.icon className={`w-6 h-6 ${stat.color} mr-2`} />
                  <span className="text-zion-slate-light text-sm font-medium">
                    {stat.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Final CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/request-quote"
              className="inline-flex items-center bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started Today
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
