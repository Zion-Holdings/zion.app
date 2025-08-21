import React, { useState } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, CheckCircle, XCircle, Crown, Gem, Sparkle, Zap as ZapIcon2 } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';
import { enhancedRealMicroSaasServices, serviceCategories, getServicesByCategory } from '../data/enhanced-real-micro-saas-services';
import { motion } from 'framer-motion';

export default function PricingPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Get services by category
  const servicesToShow = selectedCategory === 'All' 
    ? enhancedRealMicroSaasServices 
    : getServicesByCategory(selectedCategory);

  // Group services by price tier
  const priceTiers = {
    starter: servicesToShow.filter(service => parseFloat(service.price.replace('$', '')) <= 50),
    professional: servicesToShow.filter(service => parseFloat(service.price.replace('$', '')) > 50 && parseFloat(service.price.replace('$', '')) <= 100),
    enterprise: servicesToShow.filter(service => parseFloat(service.price.replace('$', '')) > 100)
  };

  const getYearlyPrice = (monthlyPrice: string) => {
    const price = parseFloat(monthlyPrice.replace('$', ''));
    const yearlyPrice = price * 12 * 0.8; // 20% discount for yearly
    return `$${Math.round(yearlyPrice)}`;
  };

  const getYearlyPeriod = () => billingCycle === 'yearly' ? '/year' : '/month';

  return (
    <UltraFuturisticBackground variant="quantum-holographic-advanced" className="min-h-screen">
      <Head>
        <title>AI-Powered Micro SaaS Pricing | Zion Tech Group - Transparent & Competitive Pricing</title>
        <meta name="description" content="Discover transparent pricing for our AI-powered micro SaaS services. Competitive rates starting from $49/month with volume discounts and enterprise options available." />
        <meta name="keywords" content="AI micro SaaS pricing, AI services pricing, micro SaaS cost, Zion Tech Group pricing, AI solutions pricing" />
        <meta property="og:title" content="AI-Powered Micro SaaS Pricing | Zion Tech Group" />
        <meta property="og:description" content="Transparent pricing for revolutionary AI-powered micro SaaS services" />
        <meta property="og:url" content="https://ziontechgroup.com/pricing" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />
      </Head>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Transparent Pricing
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Choose the perfect AI-powered micro SaaS solution for your business. No hidden fees, simple pricing that scales with your needs.
              </p>
            </motion.div>

            {/* Billing Toggle */}
            <motion.div 
              className="flex items-center justify-center gap-4 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                  billingCycle === 'yearly' ? 'bg-cyan-500' : 'bg-gray-600'
                }`}
              >
                <div
                  className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                    billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly
                <span className="ml-2 text-sm text-cyan-400">Save 20%</span>
              </span>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              className="text-center text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="mb-2">
                <Phone className="inline w-4 h-4 mr-2" />
                {contactInfo.mobile} | 
                <Mail className="inline w-4 h-4 mx-2" />
                {contactInfo.email}
              </p>
              <p className="text-sm">
                <MapPin className="inline w-4 h-4 mr-2" />
                {contactInfo.address}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <UltraFuturisticCard variant="quantum-advanced" className="p-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">Filter by Category</h2>
                <p className="text-gray-300">Choose a specific service category or view all services</p>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                <button
                  onClick={() => setSelectedCategory('All')}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedCategory === 'All'
                      ? 'bg-cyan-500 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                  }`}
                >
                  All Categories
                </button>
                {serviceCategories.filter(cat => cat !== 'All').map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white'
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </UltraFuturisticCard>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Starter Tier */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <UltraFuturisticCard variant="quantum" className="h-full relative">
                  <div className="text-center p-8">
                    <div className="mb-6">
                      <div className="text-4xl mb-4">🚀</div>
                      <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
                      <p className="text-gray-300">Perfect for small businesses and startups</p>
                    </div>
                    
                    <div className="mb-6">
                      <div className="text-4xl font-bold text-cyan-400 mb-2">
                        {billingCycle === 'yearly' ? getYearlyPrice('49') : '$49'}
                        <span className="text-lg text-gray-400">{getYearlyPeriod()}</span>
                      </div>
                      <p className="text-gray-400 text-sm">
                        {billingCycle === 'yearly' ? 'Billed annually (Save $117)' : 'Billed monthly'}
                      </p>
                    </div>

                    <div className="mb-6">
                      <p className="text-gray-300 mb-4">Services included:</p>
                      <div className="space-y-2 text-left">
                        {priceTiers.starter.slice(0, 3).map((service, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-300">
                            <Check className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
                            <span className="truncate">{service.name}</span>
                          </div>
                        ))}
                        {priceTiers.starter.length > 3 && (
                          <div className="text-xs text-gray-500">
                            +{priceTiers.starter.length - 3} more services
                          </div>
                        )}
                      </div>
                    </div>

                    <Button 
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
                      onClick={() => window.open('/contact', '_blank')}
                    >
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </UltraFuturisticCard>
              </motion.div>

              {/* Professional Tier */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <UltraFuturisticCard variant="holographic-advanced" className="h-full relative">
                  {/* Popular Badge */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-2 fill-current" />
                      Most Popular
                    </div>
                  </div>

                  <div className="text-center p-8">
                    <div className="mb-6">
                      <div className="text-4xl mb-4">💎</div>
                      <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
                      <p className="text-gray-300">Ideal for growing businesses and teams</p>
                    </div>
                    
                    <div className="mb-6">
                      <div className="text-4xl font-bold text-fuchsia-400 mb-2">
                        {billingCycle === 'yearly' ? getYearlyPrice('99') : '$99'}
                        <span className="text-lg text-gray-400">{getYearlyPeriod()}</span>
                      </div>
                      <p className="text-gray-400 text-sm">
                        {billingCycle === 'yearly' ? 'Billed annually (Save $237)' : 'Billed monthly'}
                      </p>
                    </div>

                    <div className="mb-6">
                      <p className="text-gray-300 mb-4">Services included:</p>
                      <div className="space-y-2 text-left">
                        {priceTiers.professional.slice(0, 4).map((service, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-300">
                            <Check className="h-4 w-4 text-fuchsia-400 mr-2 flex-shrink-0" />
                            <span className="truncate">{service.name}</span>
                          </div>
                        ))}
                        {priceTiers.professional.length > 4 && (
                          <div className="text-xs text-gray-500">
                            +{priceTiers.professional.length - 4} more services
                          </div>
                        )}
                      </div>
                    </div>

                    <Button 
                      className="w-full bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 text-white"
                      onClick={() => window.open('/contact', '_blank')}
                    >
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </UltraFuturisticCard>
              </motion.div>

              {/* Enterprise Tier */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <UltraFuturisticCard variant="quantum-cyberpunk" className="h-full relative">
                  <div className="text-center p-8">
                    <div className="mb-6">
                      <div className="text-4xl mb-4">👑</div>
                      <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                      <p className="text-gray-300">For large organizations and complex needs</p>
                    </div>
                    
                    <div className="mb-6">
                      <div className="text-4xl font-bold text-orange-400 mb-2">
                        Custom
                      </div>
                      <p className="text-gray-400 text-sm">Contact us for enterprise pricing</p>
                    </div>

                    <div className="mb-6">
                      <p className="text-gray-300 mb-4">Services included:</p>
                      <div className="space-y-2 text-left">
                        {priceTiers.enterprise.slice(0, 4).map((service, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-300">
                            <Check className="h-4 w-4 text-orange-400 mr-2 flex-shrink-0" />
                            <span className="truncate">{service.name}</span>
                          </div>
                        ))}
                        {priceTiers.enterprise.length > 4 && (
                          <div className="text-xs text-gray-500">
                            +{priceTiers.enterprise.length - 4} more services
                          </div>
                        )}
                      </div>
                    </div>

                    <Button 
                      className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white"
                      onClick={() => window.open('/contact', '_blank')}
                    >
                      Contact Sales
                      <MessageSquare className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </UltraFuturisticCard>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Individual Service Pricing */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Individual Service Pricing
              </h2>
              <p className="text-lg text-gray-300">
                Choose specific services that fit your business needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesToShow.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <UltraFuturisticCard
                    variant={service.variant as any}
                    className="h-full cursor-pointer"
                    onClick={() => window.open(service.link, '_blank')}
                  >
                    <div className="text-center p-6">
                      <div className="text-3xl mb-3">{service.icon}</div>
                      {service.popular && (
                        <div className="inline-flex items-center px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs mb-3">
                          <Star className="w-3 h-3 mr-1 fill-current" />
                          Popular
                        </div>
                      )}
                      <h3 className="text-lg font-bold text-white mb-2">
                        {service.name}
                      </h3>
                      <p className="text-gray-300 text-sm mb-3">
                        {service.tagline}
                      </p>
                      <div className="text-sm text-gray-400 mb-2">{service.category}</div>
                      <div className="text-xl font-bold text-cyan-400 mb-3">
                        {billingCycle === 'yearly' ? getYearlyPrice(service.price) : service.price}
                        <span className="text-sm text-gray-400">{getYearlyPeriod()}</span>
                      </div>
                      <div className="text-xs text-gray-500 mb-3">
                        {service.customers.toLocaleString()} customers • {service.rating}★ ({service.reviews} reviews)
                      </div>
                      <div className="inline-flex items-center text-blue-400 text-sm hover:text-blue-300 transition-colors">
                        Learn More <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </UltraFuturisticCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features & Benefits */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                What's Included
              </h2>
              <p className="text-lg text-gray-300">
                Every plan includes these essential features and benefits
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Shield className="w-8 h-8 text-cyan-400" />,
                  title: 'Enterprise Security',
                  description: 'SOC 2 compliance, advanced encryption, and automated security monitoring'
                },
                {
                  icon: <Zap className="w-8 h-8 text-fuchsia-400" />,
                  title: '99.9% Uptime',
                  description: 'Guaranteed reliability with automated scaling and intelligent resource management'
                },
                {
                  icon: <Users className="w-8 h-8 text-green-400" />,
                  title: '24/7 Support',
                  description: 'Round-the-clock technical support and customer success management'
                },
                {
                  icon: <Rocket className="w-8 h-8 text-orange-400" />,
                  title: 'Quick Setup',
                  description: 'Get started in minutes with automated onboarding and intuitive interfaces'
                },
                {
                  icon: <ChartBar className="w-8 h-8 text-purple-400" />,
                  title: 'Analytics & Insights',
                  description: 'Comprehensive reporting and performance analytics for all services'
                },
                {
                  icon: <Globe className="w-8 h-8 text-blue-400" />,
                  title: 'Global Infrastructure',
                  description: 'Worldwide deployment with local data centers for optimal performance'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <UltraFuturisticCard variant="quantum-advanced" className="h-full text-center p-6">
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </UltraFuturisticCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Choose the perfect plan for your business and start your free trial today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg"
                  onClick={() => window.open('/services', '_blank')}
                >
                  View All Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 text-white px-8 py-4 text-lg"
                  onClick={() => window.open('/contact', '_blank')}
                >
                  Contact Sales
                  <MessageSquare className="ml-2 w-5 h-5" />
                </Button>
              </div>
              <div className="mt-8 text-gray-400">
                <p className="mb-2">
                  <Phone className="inline w-4 h-4 mr-2" />
                  {contactInfo.mobile} | 
                  <Mail className="inline w-4 h-4 mx-2" />
                  {contactInfo.email}
                </p>
                <p className="text-sm">
                  <MapPin className="inline w-4 h-4 mr-2" />
                  {contactInfo.address}
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraFuturisticBackground>
  );
}