import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Zap, Brain, Shield, Rocket } from 'lucide-react';

interface Service {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  icon: string;
  color: string;
  textColor: string;
  link: string;
  category: string;
  realService: boolean;
  technology: string[];
  integrations: string[];
  useCases: string[];
  roi: string;
  competitors: string[];
  marketSize: string;
  growthRate: string;
  customers: number;
  rating: number;
  reviews: number;
}

interface EnhancedServiceShowcaseProps {
  services: Service[];
  title?: string;
  subtitle?: string;
  showPricing?: boolean;
  showFeatures?: boolean;
  showStats?: boolean;
  maxServices?: number;
}

export default function EnhancedServiceShowcase({
  services,
  title = "Revolutionary 2026 Services",
  subtitle = "Cutting-edge AI, IT, and Micro SaaS solutions for the future",
  showPricing = true,
  showFeatures = true,
  showStats = true,
  maxServices = 12
}: EnhancedServiceShowcaseProps) {
  const displayedServices = services.slice(0, maxServices);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const getCategoryIcon = (category: string) => {
    if (category.includes('AI')) return Brain;
    if (category.includes('IT') || category.includes('Infrastructure')) return Shield;
    if (category.includes('Micro SaaS') || category.includes('SaaS')) return Zap;
    if (category.includes('Quantum')) return Rocket;
    return TrendingUp;
  };

  const getCategoryColor = (category: string) => {
    if (category.includes('AI')) return 'from-blue-500 to-indigo-600';
    if (category.includes('IT') || category.includes('Infrastructure')) return 'from-green-500 to-emerald-600';
    if (category.includes('Micro SaaS') || category.includes('SaaS')) return 'from-purple-500 to-pink-600';
    if (category.includes('Quantum')) return 'from-cyan-500 to-blue-600';
    return 'from-gray-500 to-gray-600';
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-transparent to-gray-900/50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
            {title}
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          
          {/* Service Statistics */}
          {showStats && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl font-bold text-cyan-400">{services.length}+</div>
                <div className="text-sm text-gray-300">Total Services</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl font-bold text-purple-400">
                  {services.filter(s => s.category.includes('AI')).length}+
                </div>
                <div className="text-sm text-gray-300">AI Services</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl font-bold text-green-400">
                  {services.filter(s => s.category.includes('IT')).length}+
                </div>
                <div className="text-sm text-gray-300">IT Solutions</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl font-bold text-pink-400">
                  {services.filter(s => s.category.includes('SaaS')).length}+
                </div>
                <div className="text-sm text-gray-300">Micro SaaS</div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayedServices.map((service, index) => {
            const CategoryIcon = getCategoryIcon(service.category);
            const categoryColor = getCategoryColor(service.category);
            
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative"
              >
                <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${categoryColor} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center space-x-1">
                      <Star className="w-3 h-3 fill-current" />
                      <span>Popular</span>
                    </div>
                  )}

                  {/* Header */}
                  <div className="relative z-10 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${categoryColor} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <span className="text-3xl">{service.icon}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">{service.price}</div>
                        <div className="text-sm text-gray-400">{service.period}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {service.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <div className="relative z-10 mb-6">
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  {showFeatures && (
                    <div className="relative z-10 mb-6">
                      <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Stats */}
                  {showStats && (
                    <div className="relative z-10 mb-6">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-lg font-bold text-cyan-400">{service.customers}+</div>
                          <div className="text-xs text-gray-400">Customers</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-purple-400">{service.rating}</div>
                          <div className="text-xs text-gray-400">Rating</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-green-400">{service.reviews}</div>
                          <div className="text-xs text-gray-400">Reviews</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Market Info */}
                  <div className="relative z-10 mb-6">
                    <div className="bg-gray-800/50 rounded-xl p-4">
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-gray-400">Market Size:</span>
                        <span className="text-green-400 font-semibold">{service.marketSize}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Growth Rate:</span>
                        <span className="text-cyan-400 font-semibold">{service.growthRate}</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="relative z-10">
                    <Link
                      href={service.link}
                      className="w-full bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-white font-bold py-4 px-6 rounded-2xl hover:from-cyan-600 hover:via-purple-700 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 group-hover:shadow-lg group-hover:shadow-cyan-500/30"
                    >
                      <span>Get Started</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All Services CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="/services"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-white font-bold py-5 px-8 rounded-2xl hover:from-cyan-600 hover:via-purple-700 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50"
          >
            <span>View All {services.length}+ Services</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}