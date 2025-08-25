import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Users, Shield, Zap, Clock } from 'lucide-react';
import { ENHANCED_SERVICES, SERVICE_CATEGORIES } from '@/data/enhancedServices';

export default function PricingPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredServices = useMemo(() => {
    if (selectedCategory === "all") return true;
    return ENHANCED_SERVICES.filter(service => 
      SERVICE_CATEGORIES.some(cat => cat.id === selectedCategory && cat.services.includes(service.id))
    );
  }, [selectedCategory]);

  const getServicePricing = (basePrice: number, tier: string) => {
    switch (tier) {
      case 'basic':
        return basePrice;
      case 'professional':
        return Math.round(basePrice * 1.5);
      case 'enterprise':
        return Math.round(basePrice * 2.5);
      default:
        return basePrice;
    }
  };

  const pricingTiers = [
    {
      name: "Basic",
      description: "Essential services for small businesses",
      price: "$150",
      period: "/hour",
      features: [
        "Core service delivery",
        "Email support",
        "Basic documentation",
        "Standard SLA",
        "Remote support"
      ],
      popular: false,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Professional",
      description: "Advanced solutions for growing businesses",
      price: "$250",
      period: "/hour",
      features: [
        "Everything in Basic",
        "Priority support",
        "Advanced documentation",
        "Enhanced SLA",
        "Phone & email support",
        "Custom integrations",
        "Performance monitoring"
      ],
      popular: true,
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "Enterprise",
      description: "Full-featured solutions for large organizations",
      price: "$400",
      period: "/hour",
      features: [
        "Everything in Professional",
        "24/7 dedicated support",
        "Custom development",
        "Premium SLA",
        "Dedicated account manager",
        "On-site support",
        "Training & workshops",
        "Custom reporting"
      ],
      popular: false,
      color: "from-green-500 to-green-600"
    }
  ];

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

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-slate-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Transparent Pricing
          </motion.h1>
          <motion.p 
            className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Choose the right service level for your business needs. All our services come with comprehensive support and proven results.
          </motion.p>
          
          {/* Category Filter */}
          <motion.div 
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:border-zion-cyan"
            >
              <option value="all">All Categories</option>
              {SERVICE_CATEGORIES.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-white text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Choose Your Plan
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {pricingTiers.map((tier, index) => (
              <motion.div key={tier.name} variants={itemVariants}>
                <div className={`relative bg-white rounded-2xl p-8 h-full ${
                  tier.popular ? 'ring-2 ring-zion-purple scale-105' : ''
                }`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-zion-purple text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{tier.name}</h3>
                    <p className="text-gray-600 mb-6">{tier.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-800">{tier.price}</span>
                      <span className="text-gray-600 ml-1">{tier.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold text-white bg-gradient-to-r ${tier.color} hover:opacity-90 transition-opacity duration-300`}>
                    Get Started
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Examples */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-16 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Service Examples
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {ENHANCED_SERVICES.slice(0, 6).map((service) => (
              <motion.div key={service.id} variants={itemVariants}>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{service.description}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{service.estimatedTime}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>{service.provider.name}</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-zion-purple">
                        ${service.price.basic}/hr
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{service.provider.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Contact our team to discuss your specific needs and get a personalized quote for our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-zion-purple px-8 py-4 rounded-lg font-semibold text-lg hover:bg-zion-slate-light transition-colors duration-300">
                Get a Quote
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-zion-purple transition-colors duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}