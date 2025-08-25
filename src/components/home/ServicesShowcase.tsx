import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import { COMPREHENSIVE_SERVICES } from '@/data/comprehensiveServices';

export function ServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // Get featured services from the comprehensive services data
  const featuredServices = COMPREHENSIVE_SERVICES.filter(service => service.featured).slice(0, 8);

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "AI & Machine Learning": "from-purple-500 to-indigo-600",
      "Cloud & DevOps": "from-blue-500 to-cyan-600",
      "Cybersecurity": "from-red-500 to-pink-600",
      "Data & Analytics": "from-green-500 to-emerald-600",
      "Micro SAAS": "from-emerald-500 to-teal-600",
      "Enterprise Solutions": "from-slate-600 to-gray-700"
    };
    return colors[category] || "from-gray-500 to-gray-600";
  };

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      "AI & Machine Learning": "🤖",
      "Cloud & DevOps": "☁️",
      "Cybersecurity": "🔒",
      "Data & Analytics": "📊",
      "Micro SAAS": "💻",
      "Enterprise Solutions": "🏢"
    };
    return icons[category] || "💼";
  };

  const getPriceDisplay = (service: any) => {
    if (service.priceType === 'monthly') {
      return `$${service.price}/month`;
    } else if (service.priceType === 'yearly') {
      return `$${service.price}/year`;
    } else if (service.priceType === 'per-user') {
      return `$${service.price}/user`;
    } else {
      return `$${service.price.toLocaleString()}`;
    }
  };

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

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-zion-blue mb-4">Featured Services</h2>
          <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
            Discover our most popular and highly-rated services that are helping businesses transform and grow.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredServices.map((service, index) => (
            <motion.div 
              key={service.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-zion-slate/10 hover:shadow-xl transition-all duration-300 cursor-pointer group"
              variants={itemVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={`h-2 bg-gradient-to-r ${getCategoryColor(service.category)}`}></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <motion.span 
                      className="text-lg"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    >
                      {getCategoryIcon(service.category)}
                    </motion.span>
                    <span className="text-xs font-medium text-zion-slate bg-zion-slate/10 px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <motion.span 
                      className="text-yellow-500 text-sm"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ★
                    </motion.span>
                    <span className="text-sm text-zion-slate ml-1">{service.rating}</span>
                    <span className="text-xs text-zion-slate-light ml-1">({service.reviewCount})</span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-zion-blue mb-2 group-hover:text-zion-purple transition-colors">
                  {service.title}
                </h3>
                <p className="text-zion-slate-light text-sm mb-4 line-clamp-2">{service.description}</p>

                {/* Key Features Preview */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {service.features.slice(0, 2).map((feature, index) => (
                      <motion.span 
                        key={index} 
                        className="text-xs bg-zion-slate/10 text-zion-slate px-2 py-1 rounded-full"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {feature}
                      </motion.span>
                    ))}
                    {service.features.length > 2 && (
                      <span className="text-xs text-zion-slate-light">
                        +{service.features.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-zion-purple">{getPriceDisplay(service)}</span>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={`/comprehensive-services?service=${service.id}`}
                      className="text-zion-cyan hover:text-zion-cyan-dark font-medium text-sm transition-colors"
                    >
                      View Details →
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/comprehensive-services"
              className="inline-block bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore All Services
            </Link>
          </motion.div>
        </motion.div>

        {/* Service Categories Overview */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-zion-blue text-center mb-8">Service Categories</h3>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "AI & Machine Learning",
                description: "Cutting-edge AI solutions for business automation and insights",
                icon: "🤖",
                color: "from-purple-500 to-indigo-600",
                link: "/ai-services",
                serviceCount: COMPREHENSIVE_SERVICES.filter(s => s.category === "AI & Machine Learning").length
              },
              {
                title: "Cloud & DevOps",
                description: "Scalable cloud infrastructure and automation solutions",
                icon: "☁️",
                color: "from-blue-500 to-cyan-600",
                link: "/comprehensive-services",
                serviceCount: COMPREHENSIVE_SERVICES.filter(s => s.category === "Cloud & DevOps").length
              },
              {
                title: "Cybersecurity",
                description: "Comprehensive security and compliance solutions",
                icon: "🔒",
                color: "from-red-500 to-pink-600",
                link: "/comprehensive-services",
                serviceCount: COMPREHENSIVE_SERVICES.filter(s => s.category === "Cybersecurity").length
              },
              {
                title: "Data & Analytics",
                description: "Data-driven insights and business intelligence",
                icon: "📊",
                color: "from-green-500 to-emerald-600",
                link: "/comprehensive-services",
                serviceCount: COMPREHENSIVE_SERVICES.filter(s => s.category === "Data & Analytics").length
              },
              {
                title: "Micro SAAS",
                description: "Scalable software solutions for growing businesses",
                icon: "💻",
                color: "from-emerald-500 to-teal-600",
                link: "/micro-saas",
                serviceCount: COMPREHENSIVE_SERVICES.filter(s => s.category === "Micro SAAS").length
              },
              {
                title: "Enterprise Solutions",
                description: "Large-scale transformation and enterprise systems",
                icon: "🏢",
                color: "from-slate-600 to-gray-700",
                link: "/enterprise-solutions",
                serviceCount: COMPREHENSIVE_SERVICES.filter(s => s.category === "Enterprise Solutions").length
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                variants={categoryVariants}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to={category.link}
                  className="group block"
                >
                  <div className={`rounded-lg overflow-hidden h-full border border-zion-slate/10 bg-white p-6 transition-all duration-300 hover:border-zion-purple/50 hover:shadow-lg`}>
                    <motion.div 
                      className={`rounded-full w-16 h-16 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="text-white text-2xl">
                        {category.icon}
                      </div>
                    </motion.div>
                    <h3 className="text-xl font-bold text-zion-blue mb-2 group-hover:text-zion-purple transition-colors">{category.title}</h3>
                    <p className="text-zion-slate-light mb-4">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-zion-slate-light">{category.serviceCount} services</span>
                      <motion.span 
                        className="text-zion-cyan group-hover:text-zion-cyan-dark transition-colors"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        Learn More →
                      </motion.span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}