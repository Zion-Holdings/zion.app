import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, Users, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

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
  marketPosition: string;
  targetAudience: string;
  trialDays: number;
  setupTime: string;
  category: string;
  realService: boolean;
  technology: string[];
  integrations: string[];
  useCases: string[];
  roi: string;
  competitors: string[];
  marketSize: string;
  growthRate: string;
  variant: string;
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
    website: string;
  };
  realImplementation: boolean;
  implementationDetails: string;
  launchDate: string;
  customers: number;
  rating: number;
  reviews: number;
}

interface EnhancedServiceShowcaseProps {
  services: Service[];
  title?: string;
  subtitle?: string;
  showStats?: boolean;
}

const EnhancedServiceShowcase: React.FC<EnhancedServiceShowcaseProps> = ({
  services,
  title = "Revolutionary 2029 Services",
  subtitle = "Cutting-edge technology solutions that transform businesses",
  showStats = true
}) => {
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const featuredServices = services.filter(service => service.popular).slice(0, 6);
  const regularServices = services.filter(service => !service.popular).slice(0, 12);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-cyan-900/5" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        {/* Featured Services */}
        {featuredServices.length > 0 && (
          <div className="mb-20">
            <motion.h3
              className="text-2xl font-bold text-white mb-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                ⭐ Featured Services
              </span>
            </motion.h3>
            
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="relative group cursor-pointer"
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Glow Effect */}
                  <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${service.color} opacity-0 blur-lg transition-all duration-300 group-hover:opacity-75`} />
                  
                  {/* Service Card */}
                  <div className="relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-r ${service.color.replace('from-', 'from-').replace('to-', 'to-')}/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>

                    {/* Popular Badge */}
                    {service.popular && (
                      <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        <Star className="w-3 h-3 inline mr-1" />
                        POPULAR
                      </div>
                    )}

                    {/* Service Header */}
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`text-4xl ${service.textColor}`}>
                            {service.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                              {service.name}
                            </h3>
                            <p className="text-gray-400 text-sm">{service.tagline}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-white">{service.price}</div>
                          <div className="text-gray-400 text-sm">{service.period}</div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="flex items-center space-x-2 text-sm">
                          <Users className="w-4 h-4 text-cyan-400" />
                          <span className="text-gray-300">{service.customers}+ users</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span className="text-gray-300">{service.rating}/5 ({service.reviews})</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <TrendingUp className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300">{service.growthRate}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <Shield className="w-4 h-4 text-blue-400" />
                          <span className="text-gray-300">{service.trialDays} day trial</span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-3 mt-6">
                        <Link
                          href={service.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group/btn"
                        >
                          <span>Get Started</span>
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Link>
                        <button className="px-4 py-3 border border-white/20 hover:border-cyan-400/50 text-white rounded-lg transition-all duration-300 hover:bg-white/5">
                          Learn More
                        </button>
                      </div>
                    </div>

                    {/* Floating Particles */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                      <div className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60" style={{ left: '20%', top: '30%' }} />
                      <div className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60" style={{ left: '35%', top: '40%' }} />
                      <div className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60" style={{ left: '50%', top: '50%' }} />
                      <div className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60" style={{ left: '65%', top: '60%' }} />
                      <div className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60" style={{ left: '80%', top: '70%' }} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}

        {/* Regular Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {regularServices.map((service, index) => (
            <motion.div
              key={service.id}
              className="relative group cursor-pointer"
              variants={itemVariants}
              whileHover={{ y: -3, scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              {/* Service Card */}
              <div className="relative bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl p-4 overflow-hidden hover:border-cyan-400/30 transition-all duration-300">
                {/* Background Pattern */}
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color.replace('from-', 'from-').replace('to-', 'to-')}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </div>

                {/* Service Content */}
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`text-2xl ${service.textColor}`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {service.name}
                      </h4>
                      <p className="text-gray-400 text-sm">{service.tagline}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold text-white">{service.price}</div>
                    <Link
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Service Statistics */}
        {showStats && (
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">Service Portfolio Overview</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">{services.length}+</div>
                  <div className="text-gray-400">Total Services</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {services.filter(s => s.category.includes('AI')).length}+
                  </div>
                  <div className="text-gray-400">AI Services</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {services.filter(s => s.category.includes('Quantum')).length}+
                  </div>
                  <div className="text-gray-400">Quantum Services</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {services.filter(s => s.category.includes('Space')).length}+
                  </div>
                  <div className="text-gray-400">Space Technology</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default EnhancedServiceShowcase;