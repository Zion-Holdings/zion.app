import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  CheckCircle, Star, Zap, Shield, Globe, Cpu, Brain, 
  Atom, Rocket, Target, Microscope, DollarSign, Phone, 
  Mail, MapPin, ArrowRight, TrendingUp, Users, Briefcase
} from 'lucide-react';
import UltraFuturisticNavigation2029 from '../components/layout/UltraFuturisticNavigation2029';
import UltraFuturisticFooter2029 from '../components/layout/UltraFuturisticFooter2029';
import FuturisticAnimatedBackground2029 from '../components/ui/FuturisticAnimatedBackground2029';
import { aiAutonomousEcosystemServices2029 } from '../data/2029-ai-autonomous-ecosystem';
import { emergingTechBreakthroughServices2029 } from '../data/2029-emerging-tech-breakthroughs';
import { practicalBusinessSolutionServices2029 } from '../data/2029-practical-business-solutions';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export default function ComprehensivePricing2029() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [billingCycle, setBillingCycle] = useState('monthly');

  const allServices = [
    ...aiAutonomousEcosystemServices2029,
    ...emergingTechBreakthroughServices2029,
    ...practicalBusinessSolutionServices2029
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Briefcase, count: allServices.length },
    { id: 'ai-autonomous', name: 'AI Autonomous', icon: Brain, count: aiAutonomousEcosystemServices2029.length },
    { id: 'emerging-tech', name: 'Emerging Tech', icon: Atom, count: emergingTechBreakthroughServices2029.length },
    { id: 'business-solutions', name: 'Business Solutions', icon: Target, count: practicalBusinessSolutionServices2029.length }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => {
        if (selectedCategory === 'ai-autonomous') {
          return service.category.some(cat => cat.includes('AI') && cat.includes('Autonomous'));
        } else if (selectedCategory === 'emerging-tech') {
          return service.category.some(cat => cat.includes('Quantum') || cat.includes('Biotech') || cat.includes('Space'));
        } else if (selectedCategory === 'business-solutions') {
          return service.category.some(cat => cat.includes('Business') || cat.includes('Marketing') || cat.includes('Education'));
        }
        return true;
      });

  const getPrice = (price: string) => {
    const numericPrice = parseInt(price.replace(/[^0-9]/g, ''));
    return billingCycle === 'monthly' ? numericPrice : Math.round(numericPrice * 0.8);
  };

  const getBillingText = (price: string) => {
    const numericPrice = parseInt(price.replace(/[^0-9]/g, ''));
    if (billingCycle === 'monthly') {
      return `$${numericPrice.toLocaleString()}/month`;
    } else {
      return `$${Math.round(numericPrice * 0.8).toLocaleString()}/month (billed annually)`;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      <FuturisticAnimatedBackground2029 />
      
      <Head>
        <title>2029 Comprehensive Pricing - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive 2029 pricing for AI autonomous ecosystems, emerging tech breakthroughs, and practical business solutions. Transparent pricing with flexible billing options." />
        <meta name="keywords" content="2029 pricing, AI services pricing, quantum technology pricing, business solutions pricing, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/2029-comprehensive-pricing" />
      </Head>

      <UltraFuturisticNavigation2029 />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-32">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-8">
              2029 Comprehensive Pricing
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Transparent pricing for our revolutionary 2029 services. Choose the perfect plan 
              for your business transformation journey.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className="text-gray-400">Monthly</span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
                className={`relative w-16 h-8 bg-gray-700 rounded-full transition-colors duration-300 ${
                  billingCycle === 'annual' ? 'bg-purple-600' : ''
                }`}
              >
                <div
                  className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                    billingCycle === 'annual' ? 'translate-x-8' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className="text-gray-400">Annual (20% off)</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full border-2 transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'border-purple-500 bg-purple-500/20 text-purple-300'
                    : 'border-gray-600 text-gray-400 hover:border-gray-500 hover:text-gray-300'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
                <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Service Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {filteredServices.length} cutting-edge services available to transform your business. 
              Each service includes comprehensive features, support, and implementation.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-2xl blur-xl group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-gray-500 transition-all duration-500 h-full">
                  {/* Service Header */}
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl mb-4">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-purple-400 mb-2">
                      {getBillingText(service.price)}
                    </div>
                    <div className="text-sm text-gray-400">
                      {billingCycle === 'annual' && (
                        <span className="text-green-400">Save 20% with annual billing</span>
                      )}
                    </div>
                  </div>

                  {/* Categories */}
                  <div className="flex flex-wrap gap-2 mb-6 justify-center">
                    {service.category.slice(0, 3).map((cat, catIndex) => (
                      <span
                        key={catIndex} className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-600">
                        {cat}
                      </span>
                    ))}
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Benefits */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center gap-2 text-gray-300 text-sm">
                          <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Market Info */}
                  <div className="grid grid-cols-2 gap-4 mb-6 text-center">
                    <div>
                      <div className="text-gray-400 text-xs mb-1">Market Size</div>
                      <div className="text-sm font-semibold text-blue-400">{service.marketSize}</div>
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs mb-1">ROI</div>
                      <div className="text-sm font-semibold text-green-400">{service.roi}</div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-3">
                    <Link
                      href={`/services/${service.id}`} className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-sm">
                      Learn More
                    </Link>
                    <Link
                      href="/contact" className="flex-1 inline-flex items-center justify-center px-4 py-3 border border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300 text-sm">
                      Get Started
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Solutions */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Enterprise Solutions
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Need a custom solution or enterprise package? We offer tailored solutions 
              for large organizations with specific requirements.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Custom Development</h3>
                <p className="text-gray-300 mb-6">
                  Tailored solutions built specifically for your business needs and requirements.
                </p>
                <div className="text-2xl font-bold text-purple-400 mb-4">Custom Pricing</div>
                <Link
                  href="/contact" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                  Contact Sales
                </Link>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
                <p className="text-gray-300 mb-6">
                  Advanced security features and compliance for enterprise environments.
                </p>
                <div className="text-2xl font-bold text-purple-400 mb-4">Custom Pricing</div>
                <Link
                  href="/contact" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                  Contact Sales
                </Link>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Global Deployment</h3>
                <p className="text-gray-300 mb-6">
                  Multi-region deployment and global support for international organizations.
                </p>
                <div className="text-2xl font-bold text-purple-400 mb-4">Custom Pricing</div>
                <Link
                  href="/contact" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                  Contact Sales
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Contact our team to discuss your specific needs and get a personalized quote 
              for our revolutionary 2029 services.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <Phone className="w-6 h-6 text-purple-400" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <Mail className="w-6 h-6 text-blue-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <MapPin className="w-6 h-6 text-green-400" />
                <span>{contactInfo.address}</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-lg">
                  Contact Us Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/2029-innovative-services-showcase" className="inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 text-lg">
                  View All Services
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <UltraFuturisticFooter2029 />
    </div>
  );
}