import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Check, Star, Zap, Shield, Brain, Atom, 
  Rocket, ArrowRight, Users, Building, Globe
} from 'lucide-react';
import Link from 'next/link';

const Pricing: React.FC = () => {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: 'one-time',
      description: 'Perfect for small businesses and startups',
      features: [
        'Basic AI consultation',
        'Security assessment',
        'Cloud migration planning',
        '24/7 email support',
        'Monthly progress reports'
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-600',
      icon: <Zap className="w-6 h-6" />
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: 'one-time',
      description: 'Ideal for growing businesses',
      features: [
        'Advanced AI implementation',
        'Full security audit',
        'Cloud infrastructure setup',
        'Priority support',
        'Weekly progress updates',
        'Custom integrations',
        'Training sessions'
      ],
      popular: true,
      color: 'from-purple-500 to-pink-600',
      icon: <Shield className="w-6 h-6" />
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'tailored',
      description: 'For large organizations with complex needs',
      features: [
        'Full AI transformation',
        'Comprehensive security',
        'Multi-cloud strategy',
        'Dedicated support team',
        'Daily progress updates',
        'Custom development',
        'Ongoing maintenance',
        'Strategic consulting'
      ],
      popular: false,
      color: 'from-emerald-500 to-teal-600',
      icon: <Building className="w-6 h-6" />
    }
  ];

  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      icon: <Brain className="w-8 h-8" />,
      startingPrice: '$5,000',
      description: 'Custom AI solutions and machine learning platforms'
    },
    {
      name: 'Quantum Computing',
      icon: <Atom className="w-8 h-8" />,
      startingPrice: '$15,000',
      description: 'Next-generation quantum computing solutions'
    },
    {
      name: 'Cybersecurity',
      icon: <Shield className="w-8 h-8" />,
      startingPrice: '$3,000',
      description: 'Advanced security and compliance solutions'
    },
    {
      name: 'Cloud Infrastructure',
      icon: <Globe className="w-8 h-8" />,
      startingPrice: '$2,500',
      description: 'Scalable cloud solutions and migration'
    },
    {
      name: 'Business Intelligence',
      icon: <Users className="w-8 h-8" />,
      startingPrice: '$4,000',
      description: 'Data analytics and business intelligence'
    },
    {
      name: 'Micro SAAS',
      icon: <Rocket className="w-8 h-8" />,
      startingPrice: '$8,000',
      description: 'Revolutionary micro SAAS platforms'
    }
  ];

  const addOnServices = [
    {
      name: '24/7 Support',
      price: '$299/month',
      description: 'Round-the-clock technical support and monitoring'
    },
    {
      name: 'Custom Development',
      price: '$150/hour',
      description: 'Tailored software development and customization'
    },
    {
      name: 'Training & Workshops',
      price: '$2,000/day',
      description: 'Comprehensive training for your team'
    },
    {
      name: 'Security Audits',
      price: '$5,000',
      description: 'Comprehensive security assessments and reports'
    }
  ];

  return (
    <Layout
      title="Pricing - Zion Tech Group"
      description="Transparent pricing for our comprehensive technology solutions. Choose the plan that fits your business needs."
      keywords="pricing, technology services, AI solutions, quantum computing, cybersecurity, cloud infrastructure, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Pricing
                </h1>
              </div>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Transparent pricing for transformative technology solutions
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Choose the perfect plan for your business needs. All our pricing is transparent 
                with no hidden fees. Get started with a free consultation to find the right solution.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Pricing Plans */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Flexible pricing options designed to scale with your business
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-3xl border ${
                    plan.popular 
                      ? 'border-purple-500/50 shadow-2xl shadow-purple-500/20' 
                      : 'border-gray-700/50'
                  } hover:border-purple-500/50 transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white text-sm font-semibold px-4 py-2 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      {plan.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="/contact"
                    className={`block w-full text-center py-3 px-6 rounded-2xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700 transform hover:scale-105'
                        : 'bg-gray-700/50 text-white hover:bg-gray-600/50 border border-gray-600/50 hover:border-purple-500/50'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Service Categories
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Explore our specialized service areas with transparent starting prices
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <div className="text-2xl font-bold text-purple-400 mb-3">
                    Starting at {service.startingPrice}
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 text-sm font-semibold"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-on Services */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Add-on Services
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Enhance your package with additional services tailored to your needs
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {addOnServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    <div className="text-2xl font-bold text-blue-400">{service.price}</div>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-semibold"
                  >
                    Add to Package
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing FAQ */}
        <section className="py-20 bg-black/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-400">
                Get answers to common questions about our pricing and services
              </p>
            </motion.div>
            
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30"
              >
                <h3 className="text-lg font-semibold text-white mb-3">
                  Do you offer custom pricing for enterprise clients?
                </h3>
                <p className="text-gray-300">
                  Yes, we provide custom pricing for enterprise clients with complex requirements. 
                  Contact us for a personalized quote based on your specific needs and scale.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30"
              >
                <h3 className="text-lg font-semibold text-white mb-3">
                  Are there any hidden fees?
                </h3>
                <p className="text-gray-300">
                  No hidden fees. Our pricing is completely transparent. All costs are clearly 
                  outlined in your proposal, and we'll discuss any additional services before implementation.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30"
              >
                <h3 className="text-lg font-semibold text-white mb-3">
                  Can I upgrade or downgrade my plan?
                </h3>
                <p className="text-gray-300">
                  Yes, you can upgrade or downgrade your plan at any time. We'll work with you 
                  to ensure a smooth transition and adjust pricing accordingly.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30"
              >
                <h3 className="text-lg font-semibold text-white mb-3">
                  Do you offer payment plans?
                </h3>
                <p className="text-gray-300">
                  We offer flexible payment options including monthly installments for larger projects. 
                  Contact us to discuss payment arrangements that work for your business.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Contact us for a free consultation and custom quote tailored to your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-500/30 text-purple-400 font-semibold rounded-2xl hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300"
                >
                  Call Now: +1 302 464 0950
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Pricing;