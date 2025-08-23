import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Shield, Users, Globe, Rocket, Brain, Atom, Target } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: '$499',
      period: 'month',
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      features: [
        'Basic AI Solutions',
        'Standard Support',
        'Core Features',
        'Email Support',
        'Basic Analytics',
        '5 User Licenses'
      ],
      popular: false,
      cta: 'Get Started',
      href: '/contact'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses and teams',
      price: '$999',
      period: 'month',
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      features: [
        'Advanced AI Solutions',
        'Priority Support',
        'Premium Features',
        'Phone & Email Support',
        'Advanced Analytics',
        '25 User Licenses',
        'Custom Integrations',
        'Training & Onboarding'
      ],
      popular: true,
      cta: 'Start Free Trial',
      href: '/contact'
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with complex needs',
      price: '$1,999',
      period: 'month',
      icon: <Rocket className="w-8 h-8 text-purple-400" />,
      features: [
        'Full AI Suite',
        '24/7 Dedicated Support',
        'All Features',
        'Dedicated Account Manager',
        'Custom Analytics',
        'Unlimited Users',
        'Custom Development',
        'SLA Guarantees',
        'On-site Training',
        'White-label Options'
      ],
      popular: false,
      cta: 'Contact Sales',
      href: '/contact'
    }
  ];

  const serviceCategories = [
    {
      title: 'AI & Machine Learning',
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      startingPrice: '$999/month',
      description: 'Advanced AI solutions for modern businesses'
    },
    {
      title: 'Quantum Technology',
      icon: <Atom className="w-6 h-6 text-blue-400" />,
      startingPrice: '$1,999/month',
      description: 'Quantum computing and quantum security solutions'
    },
    {
      title: 'Space Technology',
      icon: <Rocket className="w-6 h-6 text-purple-400" />,
      startingPrice: '$2,499/month',
      description: 'Space exploration and resource mining platforms'
    },
    {
      title: 'Enterprise IT',
      icon: <Shield className="w-6 h-6 text-green-400" />,
      startingPrice: '$799/month',
      description: 'Enterprise infrastructure and security solutions'
    }
  ];

  const additionalServices = [
    {
      title: 'Custom Development',
      description: 'Tailored solutions for your specific needs',
      price: 'From $150/hour'
    },
    {
      title: 'Training & Consulting',
      description: 'Expert guidance and knowledge transfer',
      price: 'From $200/hour'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical assistance',
      price: 'From $500/month'
    },
    {
      title: 'Data Migration',
      description: 'Seamless transition to our platforms',
      price: 'From $1,000'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Pricing Plans
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Choose the perfect plan for your business needs. All plans include our core features with flexible scaling options.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  View All Services
                </button>
                <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                  Compare Plans
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Flexible pricing designed to grow with your business
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border rounded-2xl p-8 ${
                    plan.popular 
                      ? 'border-cyan-400/50 scale-105' 
                      : 'border-white/10'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className="mb-4 flex justify-center">
                      {plan.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                    <p className="text-gray-400 mb-6">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400">/{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Check className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }">
                    {plan.cta}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Service Categories
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Explore our comprehensive range of technology solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-white/10 rounded-xl p-6 text-center hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="mb-4 flex justify-center">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{category.title}</h3>
                  <p className="text-gray-400 mb-4">{category.description}</p>
                  <div className="text-cyan-400 font-semibold">{category.startingPrice}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Additional Services
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Custom solutions and professional services to meet your specific requirements
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <div className="text-cyan-400 font-semibold">{service.price}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Contact our team to discuss your needs and find the perfect solution
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Contact Sales
                </button>
                <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                  Schedule a Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Pricing;