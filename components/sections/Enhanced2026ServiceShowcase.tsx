import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, Zap, Shield, Globe, Brain, Rocket } from 'lucide-react';
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
  category: string;
  realService: boolean;
  technology: string[];
  integrations: string[];
  useCases: string[];
  roi: string;
  competitors: string[];
  marketSize: string;
  growthRate: string;
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

interface Enhanced2026ServiceShowcaseProps {
  services: Service[];
  title?: string;
  subtitle?: string;
  showPricing?: boolean;
  showFeatures?: boolean;
  showStats?: boolean;
  maxServices?: number;
}

export default function Enhanced2026ServiceShowcase({
  services,
  title = "Revolutionary 2026 Services",
  subtitle = "Cutting-edge solutions that transform your business",
  showPricing = true,
  showFeatures = true,
  showStats = true,
  maxServices = 12
}: Enhanced2026ServiceShowcaseProps) {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const getCategoryIcon = (category: string) => {
    if (category.includes('AI')) return <Brain className="w-5 h-5" />;
    if (category.includes('Quantum')) return <Zap className="w-5 h-5" />;
    if (category.includes('Security')) return <Shield className="w-5 h-5" />;
    if (category.includes('Infrastructure')) return <Globe className="w-5 h-5" />;
    if (category.includes('SaaS')) return <Rocket className="w-5 h-5" />;
    return <TrendingUp className="w-5 h-5" />;
  };

  const getCategoryColor = (category: string) => {
    if (category.includes('AI')) return 'from-blue-500 to-purple-600';
    if (category.includes('Quantum')) return 'from-cyan-500 to-blue-600';
    if (category.includes('Security')) return 'from-red-500 to-pink-600';
    if (category.includes('Infrastructure')) return 'from-green-500 to-emerald-600';
    if (category.includes('SaaS')) return 'from-orange-500 to-red-600';
    return 'from-gray-500 to-gray-600';
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.3),transparent_50%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
            {title}
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayedServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group relative"
            >
              {/* Service Card */}
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 h-full transition-all duration-500 hover:scale-105 hover:border-slate-600/50 hover:shadow-2xl hover:shadow-purple-500/20">
                
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    POPULAR
                  </div>
                )}

                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`text-3xl ${service.textColor}`}>
                      {service.icon}
                    </div>
                    <div className="flex items-center space-x-1">
                      {getCategoryIcon(service.category)}
                      <span className="text-xs text-gray-400 bg-slate-800 px-2 py-1 rounded-full">
                        {service.category.split('&')[0].trim()}
                      </span>
                    </div>
                  </div>
                  {showPricing && (
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{service.price}</div>
                      <div className="text-sm text-gray-400">{service.period}</div>
                    </div>
                  )}
                </div>

                {/* Service Info */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                {showFeatures && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-xs text-gray-300 flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Stats */}
                {showStats && (
                  <div className="grid grid-cols-2 gap-4 mb-4 text-xs">
                    <div className="text-center p-2 bg-slate-800/50 rounded-lg">
                      <div className="text-cyan-400 font-bold">{service.customers.toLocaleString()}</div>
                      <div className="text-gray-400">Customers</div>
                    </div>
                    <div className="text-center p-2 bg-slate-800/50 rounded-lg">
                      <div className="text-green-400 font-bold">{service.rating}</div>
                      <div className="text-gray-400">Rating</div>
                    </div>
                  </div>
                )}

                {/* Technology Stack */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.technology.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-slate-800 text-gray-300 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Market Info */}
                <div className="mb-4 p-3 bg-slate-800/30 rounded-lg">
                  <div className="text-xs text-gray-400 mb-1">Market Size</div>
                  <div className="text-sm text-white font-semibold">{service.marketSize}</div>
                  <div className="text-xs text-green-400">↑ {service.growthRate}</div>
                </div>

                {/* ROI */}
                <div className="mb-4 p-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/30">
                  <div className="text-xs text-green-400 mb-1">Expected ROI</div>
                  <div className="text-sm text-white font-semibold">{service.roi}</div>
                </div>

                {/* CTA Button */}
                <Link
                  href={service.link}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center justify-center space-x-2 group"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* Contact Info */}
                <div className="mt-4 text-center">
                  <div className="text-xs text-gray-400 mb-1">Contact Us</div>
                  <div className="text-xs text-cyan-400">{service.contactInfo.email}</div>
                  <div className="text-xs text-gray-400">{service.contactInfo.mobile}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Services Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25"
          >
            <span>View All Services</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}