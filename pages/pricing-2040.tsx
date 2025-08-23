import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { Check, Zap, Shield, Rocket, Brain, Atom, Target, Star, TrendingUp, Users, Award, ArrowRight } from 'lucide-react';
import Layout from '../components/layout/Layout';

// Import our new innovative 2040 services
import { innovative2039FuturisticServices } from '../data/innovative-2039-futuristic-services';
import { innovative2040AdvancedSolutions } from '../data/innovative-2040-advanced-solutions';
import { innovative2040ITSolutions } from '../data/innovative-2040-it-solutions';
import { innovative2040MicroSaasSolutions } from '../data/innovative-2040-micro-saas-solutions';

interface PricingTier {
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  icon: React.ReactNode;
  color: string;
  cta: string;
  ctaLink: string;
  badge?: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    price: 199,
    period: 'month',
    description: 'Perfect for small businesses and startups exploring future technology',
    features: [
      'Access to basic AI services',
      'Quantum computing demos',
      'Standard support',
      'Core integrations',
      'Basic analytics',
      'Email support',
      '30-day trial'
    ],
    icon: <Target className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-500',
    cta: 'Start Free Trial',
    ctaLink: '/contact'
  },
  {
    name: 'Professional',
    price: 999,
    period: 'month',
    description: 'Ideal for growing businesses ready for advanced AI and quantum solutions',
    features: [
      'Full AI consciousness suite',
      'Quantum computing access',
      'Priority support',
      'Advanced integrations',
      'Advanced analytics',
      'Phone & email support',
      'Custom branding',
      'API access',
      '60-day trial'
    ],
    popular: true,
    icon: <Zap className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
    cta: 'Start Free Trial',
    ctaLink: '/contact',
    badge: 'Most Popular'
  },
  {
    name: 'Enterprise',
    price: 2999,
    period: 'month',
    description: 'For large organizations requiring cutting-edge technology solutions',
    features: [
      'Complete AI consciousness platform',
      'Full quantum computing suite',
      '24/7 dedicated support',
      'Custom integrations',
      'Advanced analytics & reporting',
      'Dedicated account manager',
      'Custom development',
      'SLA guarantees',
      'On-premise options',
      'Compliance certifications',
      '90-day trial'
    ],
    icon: <Shield className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500',
    cta: 'Contact Sales',
    ctaLink: '/contact'
  },
  {
    name: 'Ultimate',
    price: 9999,
    period: 'month',
    description: 'For organizations requiring the absolute cutting-edge of technology',
    features: [
      'All AI consciousness services',
      'Complete quantum computing platform',
      'Space technology solutions',
      '24/7 dedicated support',
      'Custom AI development',
      'Quantum algorithm optimization',
      'Dedicated research team',
      'Exclusive technology access',
      'Custom SLA guarantees',
      'On-premise deployment',
      'Compliance certifications',
      '120-day trial'
    ],
    icon: <Rocket className="w-6 h-6" />,
    color: 'from-orange-500 to-red-500',
    cta: 'Contact Sales',
    ctaLink: '/contact',
    badge: 'Ultimate'
  }
];

const serviceCategories = [
  {
    name: 'AI & Consciousness Services',
    icon: <Brain className="w-8 h-8" />,
    color: 'from-cyan-500 to-blue-500',
    services: innovative2039FuturisticServices.filter(s => s.category.includes('AI') || s.category.includes('Consciousness')).slice(0, 6)
  },
  {
    name: 'Quantum Technology Solutions',
    icon: <Atom className="w-8 h-8" />,
    color: 'from-purple-500 to-pink-500',
    services: innovative2040AdvancedSolutions.filter(s => s.category.includes('Quantum')).slice(0, 6)
  },
  {
    name: 'Space Technology & AI',
    icon: <Rocket className="w-8 h-8" />,
    color: 'from-orange-500 to-red-500',
    services: innovative2039FuturisticServices.filter(s => s.category.includes('Space')).slice(0, 6)
  },
  {
    name: 'Enterprise IT Solutions',
    icon: <Target className="w-8 h-8" />,
    color: 'from-blue-500 to-purple-500',
    services: innovative2040ITSolutions.slice(0, 6)
  },
  {
    name: 'Micro SAAS Solutions',
    icon: <Zap className="w-8 h-8" />,
    color: 'from-green-500 to-emerald-500',
    services: innovative2040MicroSaasSolutions.slice(0, 6)
  }
];

const Pricing2040: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<'month' | 'year'>('month');

  const getPrice = (basePrice: number) => {
    if (selectedPeriod === 'year') {
      return Math.round(basePrice * 10); // 2 months free
    }
    return basePrice;
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <Layout>
      <SEO 
        title="2040 Technology Pricing - Zion Tech Group"
        description="Explore our revolutionary 2040 technology pricing plans including AI consciousness, quantum computing, space technology, and innovative micro SAAS solutions."
        keywords={["2040 technology pricing", "AI consciousness pricing", "quantum computing pricing", "space technology pricing", "Zion Tech Group pricing"]}
      />
      
      <main className="relative z-10 pt-8" role="main">
        {/* Hero Section */}
        <section className="text-center py-16 px-4 relative overflow-hidden">
          <motion.div 
            className="absolute inset-0 -z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            {/* Futuristic Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
            <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </motion.div>

          <motion.div 
            className="max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent leading-tight tracking-tight"
              variants={fadeInUp}
            >
              2040 Technology Pricing
            </motion.h1>
            
            <motion.p 
              className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
              variants={fadeInUp}
            >
              Experience the future of technology with our revolutionary 2040 services. From <span className="text-cyan-400 font-semibold">AI consciousness</span> to <span className="text-purple-400 font-semibold">quantum computing</span> and <span className="text-pink-400 font-semibold">space technology</span>.
            </motion.p>

            {/* Billing Toggle */}
            <motion.div 
              className="flex justify-center mb-8"
              variants={fadeInUp}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20">
                <button
                  onClick={() => setSelectedPeriod('month')}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    selectedPeriod === 'month'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setSelectedPeriod('year')}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    selectedPeriod === 'year'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Yearly <span className="text-cyan-400">(Save 20%)</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Pricing Tiers */}
        <section className="px-4 mb-16">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  className={`relative group ${
                    tier.popular 
                      ? 'scale-105 border-2 border-cyan-500/50' 
                      : 'border border-white/10'
                  } bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300`}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                >
                  {/* Popular Badge */}
                  {tier.badge && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                        tier.badge === 'Most Popular' 
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white' 
                          : 'bg-gradient-to-r from-orange-500 to-red-600 text-white'
                      }`}>
                        {tier.badge}
                      </span>
                    </div>
                  )}

                  {/* Tier Icon */}
                  <div className={`text-4xl mb-6 flex justify-center`}>
                    {tier.icon}
                  </div>

                  {/* Tier Name */}
                  <h3 className="text-2xl font-bold text-white text-center mb-4">
                    {tier.name}
                  </h3>

                  {/* Price */}
                  <div className="text-center mb-6">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-4xl font-bold text-cyan-400">
                        ${getPrice(tier.price)}
                      </span>
                      <span className="text-gray-400 text-lg">
                        /{selectedPeriod}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mt-2">
                      {tier.description}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    onClick={() => window.location.href = tier.ctaLink}
                    className={`w-full group/btn relative overflow-hidden bg-gradient-to-r ${tier.color} text-white font-bold py-4 px-6 rounded-xl hover:scale-105 transition-all duration-300 transform hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center gap-2`}
                  >
                    <span>{tier.cta}</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl -z-10"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="px-4 mb-16">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Explore Our Revolutionary 2040 Services
              </h2>
              <p className="text-xl text-gray-400">
                Discover cutting-edge technology solutions across all categories
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:scale-105"
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                >
                  {/* Category Icon */}
                  <div className={`text-4xl mb-4 flex justify-center`}>
                    {category.icon}
                  </div>

                  {/* Category Name */}
                  <h3 className="text-xl font-bold text-white text-center mb-4 group-hover:text-cyan-400 transition-colors">
                    {category.name}
                  </h3>

                  {/* Services Preview */}
                  <div className="space-y-3 mb-6">
                    {category.services.map((service, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm text-gray-400">
                        <Star className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span>{service.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* View All Button */}
                  <button
                    onClick={() => window.location.href = '/comprehensive-2040-services-showcase'}
                    className="w-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 font-semibold py-3 px-6 rounded-xl hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300 border border-cyan-500/30 hover:border-cyan-500/50"
                  >
                    View All Services
                  </button>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl -z-10"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="px-4 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Experience the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us to learn more about our revolutionary 2040 services and how they can transform your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.location.href = '/contact'}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
                >
                  Get Started Today
                </button>
                <button
                  onClick={() => window.location.href = '/comprehensive-2040-services-showcase'}
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold text-lg rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  View All Services
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Pricing2040;