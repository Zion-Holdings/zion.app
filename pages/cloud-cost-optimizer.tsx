import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Check, ArrowRight, Cloud, Star, TrendingDown, Shield, Zap, BarChart3, DollarSign, Clock, Users, Globe, Award } from 'lucide-react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';

export default function CloudCostOptimizerPage() {
  const service = enhancedRealMicroSaasServices.find(s => s.link.endsWith('/cloud-cost-optimizer'));
  if (!service) return null;

  const features = [
    {
      title: 'Auto Rightsizing',
      description: 'Automatically optimize instance sizes based on actual usage patterns',
      icon: <TrendingDown className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Idle Resource Cleanup',
      description: 'Identify and terminate unused resources to eliminate waste',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Spot Instance Orchestration',
      description: 'Leverage spot instances for significant cost savings',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Anomaly Detection',
      description: 'AI-powered detection of unusual spending patterns',
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const benefits = [
    'Reduce cloud costs by 30-50%',
    'Automated optimization recommendations',
    'Real-time cost monitoring and alerts',
    'Multi-cloud support (AWS, Azure, GCP)',
    'FinOps dashboard and reporting',
    'Compliance and governance features'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small teams and startups',
      features: ['Basic cost optimization', 'Resource monitoring', 'Email alerts', 'Basic reporting']
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing organizations',
      features: ['Advanced optimization', 'AI-powered recommendations', 'Custom alerts', 'Detailed analytics', 'Multi-cloud support']
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large enterprises with complex needs',
      features: ['Custom optimization rules', 'Dedicated support', 'SLA guarantees', 'Advanced compliance', 'White-label options']
    }
  ];

  return (
    <Layout>
      <SEO
        title={`${service.name} - Zion Tech Group`}
        description={service.description}
        keywords={["cloud cost optimization", "FinOps", "cloud savings", "resource optimization", "Zion Tech Group"]}
        canonical="https://ziontechgroup.com/cloud-cost-optimizer"
      />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 mb-6">
              <Cloud className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              {service.name}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {service.tagline}
            </p>
            
            {/* Service Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">{service.price}</div>
                <div className="text-sm text-gray-400">{service.period}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">{service.trialDays}</div>
                <div className="text-sm text-gray-400">Day Trial</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">{service.setupTime}</div>
                <div className="text-sm text-gray-400">Setup</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">{service.rating.toFixed(1)}</div>
                <div className="text-sm text-gray-400">Rating</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Features */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/5 rounded-2xl border border-cyan-500/30 p-8"
              >
                <h2 className="text-3xl font-bold text-white mb-6">Optimization Capabilities</h2>
                <p className="text-gray-300 mb-8 text-lg">{service.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {features.map((feature, index) => (
                    <div key={feature.title} className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-3`}>
                        {feature.icon}
                      </div>
                      <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-300 text-sm">{feature.description}</p>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">Key Benefits</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start space-x-3 text-gray-200">
                      <Check className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Right Column - Pricing & Contact */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white/5 rounded-2xl border border-cyan-500/30 p-6 h-fit"
              >
                <div className="flex items-end justify-between mb-4">
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">
                      {service.price}
                      <span className="text-gray-400 text-base">{service.period}</span>
                    </div>
                    <div className="text-gray-400 text-sm">
                      {service.trialDays}-day free trial • Setup: {service.setupTime}
                    </div>
                  </div>
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 mr-1" />
                    {service.rating.toFixed(1)}
                  </div>
                </div>
                
                <a
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-semibold mb-6"
                >
                  Start Saving
                  <ArrowRight className="w-5 h-5" />
                </a>
                
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>{service.contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-purple-400" />
                    <span>{service.contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-green-400" />
                    <span className="text-xs">{service.contactInfo.address}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-3xl font-bold text-white mb-8 text-center"
          >
            Pricing Plans
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <h3 className="text-white font-semibold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-white mb-2">
                  {plan.price}
                  <span className="text-base text-gray-400">{plan.period}</span>
                </div>
                <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                <ul className="space-y-2 text-gray-300 text-sm mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 text-sm font-medium"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Optimize Your Cloud Costs?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Start saving money on your cloud infrastructure today with our intelligent optimization platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-semibold"
              >
                Start Saving
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/services"
                className="flex items-center gap-2 px-8 py-4 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20 font-semibold"
              >
                View All Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
