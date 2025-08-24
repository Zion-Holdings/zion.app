import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Star, TrendingUp, Zap, DollarSign, Shield, Rocket, Brain, Globe, Cpu, Atom } from 'lucide-react';
import { innovative2026Services } from '../../data/innovative-2026-services';
import { emergingTech2026Services } from '../../data/emerging-tech-2026-services';

interface EnhancedServiceShowcase2026Props {
  title?: string;
  subtitle?: string;
  showPricing?: boolean;
  maxServices?: number;
}

const EnhancedServiceShowcase2026: React.FC<EnhancedServiceShowcase2026Props> = ({
  title = "Revolutionary 2026 Services",
  subtitle = "Experience the future with our cutting-edge AI, quantum, and emerging technology solutions",
  showPricing = true,
  maxServices = 12
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  // Combine all services
  const allServices = [...innovative2026Services, ...emergingTech2026Services];
  
  // Filter services by category
  const filteredServices = selectedCategory === 'all' 
    ? allServices.slice(0, maxServices)
    : allServices.filter(service => service.category.includes(selectedCategory)).slice(0, maxServices);

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category.split('&')[0].trim())))];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const getCategoryIcon = (category: string) => {
    if (category.includes('AI')) return <Brain className="w-5 h-5" />;
    if (category.includes('Quantum')) return <Atom className="w-5 h-5" />;
    if (category.includes('Neural')) return <Brain className="w-5 h-5" />;
    if (category.includes('Holographic')) return <Globe className="w-5 h-5" />;
    if (category.includes('Space')) return <Rocket className="w-5 h-5" />;
    if (category.includes('Robotics')) return <Cpu className="w-5 h-5" />;
    return <Zap className="w-5 h-5" />;
  };

  const getCategoryColor = (category: string) => {
    if (category.includes('AI')) return 'from-blue-600 to-indigo-700';
    if (category.includes('Quantum')) return 'from-purple-600 to-pink-700';
    if (category.includes('Neural')) return 'from-pink-600 to-rose-700';
    if (category.includes('Holographic')) return 'from-cyan-600 to-blue-700';
    if (category.includes('Space')) return 'from-slate-600 to-gray-700';
    if (category.includes('Robotics')) return 'from-blue-600 to-indigo-700';
    return 'from-green-600 to-emerald-700';
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {subtitle}
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-600/30'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {getCategoryIcon(category)}
              {category === 'all' ? 'All Services' : category}
            </motion.button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover="hover"
              variants={hoverVariants}
              onHoverStart={() => setHoveredService(service.id)}
              onHoverEnd={() => setHoveredService(null)}
              className="group relative"
            >
              {/* Service Card */}
              <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 h-full">
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(service.category)} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
                
                {/* Popular Badge */}
                {service.popular && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1"
                  >
                    <Star className="w-4 h-4 fill-current" />
                    Popular
                  </motion.div>
                )}

                {/* Service Icon */}
                <motion.div
                  className="text-6xl mb-6 flex justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {service.icon}
                </motion.div>

                {/* Service Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {service.tagline}
                  </p>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="text-white font-semibold text-sm uppercase tracking-wider">
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-gray-400 text-sm flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing & CTA */}
                  {showPricing && (
                    <div className="pt-4 border-t border-gray-700/50">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-3xl font-bold text-white">
                          {service.price}
                          <span className="text-lg text-gray-400 font-normal">{service.period}</span>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-400">Trial</div>
                          <div className="text-white font-semibold">{service.trialDays} days</div>
                        </div>
                      </div>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                      >
                        Get Started
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </motion.button>
                    </div>
                  )}

                  {/* Service Stats */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-700/50">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{service.customers.toLocaleString()}+</div>
                      <div className="text-xs text-gray-400">Customers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{service.rating}</div>
                      <div className="text-xs text-gray-400">Rating</div>
                    </div>
                  </div>
                </div>

                {/* Hover Effects */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 shadow-lg shadow-cyan-500/25"
          >
            <Rocket className="w-6 h-6" />
            Explore All 2026 Services
            <ArrowRight className="w-6 h-6" />
          </motion.div>
          
          <p className="text-gray-400 mt-4 text-lg">
            Join thousands of innovators transforming their businesses with cutting-edge technology
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedServiceShowcase2026;