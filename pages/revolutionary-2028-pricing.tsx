import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, 
  DollarSign, Shield, Mail, MapPin, Rocket, Brain, Sparkles,
  Globe, Atom, Heart, Leaf, Car, GraduationCap, Scale,
  Building, Factory, Camera, Video, Music, Gamepad2,
  Crown, Target, Users, Clock, Award, Globe2
} from 'lucide-react';
import UltraFuturisticNavigation2028 from '../components/layout/UltraFuturisticNavigation2028';
import UltraFuturisticFooter2028 from '../components/layout/UltraFuturisticFooter2028';
import { futuristic2028Services } from '../data/2028-futuristic-innovations';
import { emergingTech2028Services } from '../data/2028-emerging-tech-services';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const pricingTiers = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses and startups',
    price: '$299',
    period: '/month',
    features: [
      'Access to 5 core services',
      'Basic AI integration',
      'Standard support',
      'API access',
      'Mobile app access',
      'Basic analytics'
    ],
    popular: false,
    color: 'from-blue-600 to-cyan-600',
    icon: Target
  },
  {
    name: 'Professional',
    description: 'Ideal for growing businesses and enterprises',
    price: '$999',
    period: '/month',
    features: [
      'Access to 15 premium services',
      'Advanced AI capabilities',
      'Priority support',
      'Full API access',
      'Custom integrations',
      'Advanced analytics',
      'White-label options',
      'Training & onboarding'
    ],
    popular: true,
    color: 'from-purple-600 to-indigo-600',
    icon: Crown
  },
  {
    name: 'Enterprise',
    description: 'For large organizations and Fortune 500 companies',
    price: '$2,999',
    period: '/month',
    features: [
      'Access to all 50+ services',
      'Quantum computing access',
      '24/7 dedicated support',
      'Custom development',
      'Enterprise integrations',
      'Advanced security',
      'Compliance management',
      'Dedicated account manager'
    ],
    popular: false,
    color: 'from-emerald-600 to-teal-600',
    icon: Award
  },
  {
    name: 'Custom',
    description: 'Tailored solutions for unique requirements',
    price: 'Custom',
    period: '',
    features: [
      'Fully customized services',
      'Dedicated development team',
      'On-premise deployment',
      'Custom AI models',
      'Exclusive technology access',
      'Strategic partnership',
      'Co-innovation programs',
      'Revenue sharing options'
    ],
    popular: false,
    color: 'from-orange-600 to-red-600',
    icon: Rocket
  }
];

const serviceCategories = [
  {
    title: '🚀 2028 Futuristic Innovations',
    services: futuristic2028Services.slice(0, 6),
    color: 'from-violet-600 to-purple-600'
  },
  {
    title: '🏙️ Smart City & Infrastructure',
    services: emergingTech2028Services.filter(s => s.category.includes('Smart City') || s.category.includes('Infrastructure')).slice(0, 6),
    color: 'from-blue-600 to-cyan-600'
  },
  {
    title: '⚛️ Quantum & Advanced Tech',
    services: futuristic2028Services.filter(s => s.category.includes('Quantum')).slice(0, 6),
    color: 'from-indigo-600 to-blue-600'
  },
  {
    title: '🤖 AI & Machine Learning',
    services: emergingTech2028Services.filter(s => s.category.includes('AI')).slice(0, 6),
    color: 'from-emerald-600 to-teal-600'
  }
];

export default function Revolutionary2028Pricing() {
  return (
    <>
      <Head>
        <title>2028 Revolutionary Pricing - Zion Tech Group</title>
        <meta name="description" content="Explore our revolutionary 2028 pricing plans for cutting-edge AI, quantum computing, and futuristic technology services. Transform your business with affordable innovation." />
        <meta name="keywords" content="2028 pricing, AI services pricing, quantum computing pricing, futuristic technology pricing, Zion Tech Group pricing" />
        <meta property="og:title" content="2028 Revolutionary Pricing - Zion Tech Group" />
        <meta property="og:description" content="Explore our revolutionary 2028 pricing plans for cutting-edge AI, quantum computing, and futuristic technology services." />
        <meta property="og:url" content="https://ziontechgroup.com/revolutionary-2028-pricing" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/revolutionary-2028-pricing" />
      </Head>

      <UltraFuturisticNavigation2028 />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-900/20 to-blue-900/20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }} className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-purple-900/30 border border-purple-500/30 rounded-full px-6 py-3 text-purple-300 text-sm">
              <Sparkles className="w-4 h-4" />
              <span>2028 Revolutionary Pricing</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Revolutionary
              </span>
              <br />
              <span className="text-white">Pricing 2028</span>
            </h1>

            <p className="text-xl md:text-2xl text-purple-200 max-w-4xl mx-auto leading-relaxed">
              Access the future of technology with our transparent, value-driven pricing. 
              From startups to Fortune 500 companies, we have the perfect plan for your innovation journey.
            </p>

            {/* Pricing Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-purple-300">Innovative Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">500%</div>
                <div className="text-purple-300">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-purple-300">Expert Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">99.9%</div>
                <div className="text-purple-300">Uptime Guarantee</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Innovation Path</span>
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Flexible pricing plans designed to scale with your business growth and innovation needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }} className="relative group">
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className={`p-8 rounded-2xl bg-gradient-to-br ${tier.color} bg-opacity-10 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 h-full relative`}>
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${tier.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <tier.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-purple-300 text-sm mb-4">{tier.description}</p>
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-white">{tier.price}</span>
                      <span className="text-purple-300">{tier.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3 text-purple-200">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="text-center">
                    <Link
                      href="/contact"
                      className={`inline-block w-full px-6 py-3 bg-gradient-to-r ${tier.color} text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105`}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Pricing Breakdown */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Service <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Pricing</span>
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Detailed pricing for our individual services. Mix and match to create your perfect innovation stack.
            </p>
          </motion.div>

          {serviceCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }} className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">{category.title}</h3>
                <div className={`w-24 h-1 bg-gradient-to-r ${category.color} mx-auto rounded-full`}></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                    viewport={{ once: true }} className="group">
                    <div className="p-6 rounded-xl bg-black/40 backdrop-blur-xl border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 h-full">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="text-2xl">{service.icon}</div>
                          <div>
                            <h4 className="font-semibold text-white text-lg">{service.name}</h4>
                            <p className="text-purple-300 text-sm">{service.tagline}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-purple-400">{service.price}</div>
                          <div className="text-sm text-purple-300">{service.period}</div>
                        </div>
                      </div>

                      <p className="text-purple-200 text-sm mb-4 leading-relaxed">{service.description}</p>

                      <div className="space-y-2 mb-4">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-xs text-purple-300">
                            <CheckCircle className="w-3 h-3 text-green-400" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-xs text-purple-300 mb-4">
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 text-yellow-400" />
                          <span>{service.rating}</span>
                          <span>({service.reviews})</span>
                        </div>
                        <span>{service.customers} customers</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-xs text-purple-300">
                          <div>Market: {service.marketSize}</div>
                          <div>Growth: {service.growthRate}</div>
                        </div>
                        <Link
                          href={service.link} className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg text-sm hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Zion Tech Group?</span>
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              We're not just another technology company. We're your innovation partner for the future.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }} className="text-center p-8 rounded-2xl bg-purple-900/20 border border-purple-500/30">
              <Rocket className="w-16 h-16 text-purple-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">First-to-Market</h3>
              <p className="text-purple-200 mb-6">
                Access cutting-edge technologies before they become mainstream. Stay ahead of the competition.
              </p>
              <div className="text-3xl font-bold text-purple-400">15+</div>
              <div className="text-purple-300">Patent-Pending Technologies</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }} className="text-center p-8 rounded-2xl bg-blue-900/20 border border-blue-500/30">
              <Zap className="w-16 h-16 text-blue-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Proven ROI</h3>
              <p className="text-blue-200 mb-6">
                Our clients consistently achieve exceptional returns on investment through our innovative solutions.
              </p>
              <div className="text-3xl font-bold text-blue-400">500%</div>
              <div className="text-blue-300">Average Client ROI</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }} className="text-center p-8 rounded-2xl bg-green-900/20 border border-green-500/30">
              <Shield className="w-16 h-16 text-green-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-green-200 mb-6">
                Military-grade security with quantum-resistant encryption and 24/7 threat monitoring.
              </p>
              <div className="text-3xl font-bold text-green-400">99.99%</div>
              <div className="text-green-300">Security Uptime</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }} className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to Start Your <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Innovation Journey?</span>
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Choose the perfect plan for your business and unlock the future of technology today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/contact" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25">
                Get Started Today
              </Link>
              <Link
                href="/2028-services-showcase" className="px-8 py-4 border-2 border-purple-500/30 text-purple-300 rounded-xl font-semibold text-lg hover:bg-purple-500/10 hover:border-purple-500/50 transition-all duration-300">
                View All Services
              </Link>
            </div>

            <div className="flex items-center justify-center space-x-8 text-purple-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <UltraFuturisticFooter2028 />
    </>
  );
}