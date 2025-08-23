import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, Star, ArrowRight, Phone, Mail, Globe,
  Brain, Atom, Shield, Target, Rocket, Zap,
  TrendingUp, Users, Award, Clock, DollarSign
} from 'lucide-react';
import { services2025AdvertisingCampaign } from '../data/2025-services-advertising-campaign';

const Services2025Launch = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="2025 Advanced Services Launch - Zion Tech Group"
        description="Transform your business with AI, IT, and Micro SAAS solutions. Discover autonomous AI, quantum-ready infrastructure, and intelligent business automation."
        keywords={["AI services", "IT solutions", "micro SAAS", "autonomous AI", "quantum computing", "business automation", "Zion Tech Group"]}
        canonical="https://ziontechgroup.com/2025-services-launch"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {services2025AdvertisingCampaign.campaignTitle}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              {services2025AdvertisingCampaign.campaignSubtitle}
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              {services2025AdvertisingCampaign.campaignDescription}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Schedule Free Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Request Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Campaign Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group 2025 Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of business technology with our comprehensive suite of intelligent solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services2025AdvertisingCampaign.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-slate-500 transition-all duration-300"
              >
                <div className={`text-4xl mb-4 bg-gradient-to-r ${highlight.color} bg-clip-text text-transparent`}>
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {highlight.title}
                </h3>
                <p className="text-gray-300">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our three main service categories, each designed to transform different aspects of your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services2025AdvertisingCampaign.serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-br from-slate-700 to-slate-600 p-8 rounded-xl border border-slate-500"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{category.name}</h3>
                <p className="text-gray-300 mb-6">{category.description}</p>
                
                <div className="space-y-3 mb-6">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-center text-gray-300">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{service}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-slate-500 pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Total Value:</span>
                    <span className="text-2xl font-bold text-green-400">{category.totalValue}</span>
                  </div>
                  <p className="text-green-400 text-sm">{category.savings}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Transformation Package
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed to fit businesses of all sizes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services2025AdvertisingCampaign.pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`bg-gradient-to-br p-8 rounded-xl border ${
                  index === 1 
                    ? 'from-blue-600 to-purple-600 border-blue-500 scale-105' 
                    : 'from-slate-700 to-slate-600 border-slate-500'
                }`}
              >
                {index === 1 && (
                  <div className="bg-yellow-400 text-slate-900 text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                    MOST POPULAR
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  <span className="text-gray-300">{tier.period}</span>
                </div>
                <p className="text-gray-300 mb-6">{tier.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {tier.includes.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-center mb-6">
                  <p className="text-green-400 font-semibold mb-2">{tier.savings}</p>
                  <p className="text-gray-300 text-sm">Total Value: {tier.totalValue}</p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    index === 1
                      ? 'bg-white text-slate-900 hover:bg-gray-100'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                  }`}
                >
                  {tier.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Business Outcomes
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience unprecedented improvements in efficiency, cost savings, and performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services2025AdvertisingCampaign.keyBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 mb-4">{benefit.description}</p>
                <div className="bg-gradient-to-r from-green-400 to-blue-400 text-slate-900 px-4 py-2 rounded-lg font-semibold">
                  {benefit.metrics}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Success Stories from Our Clients
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how leading companies are transforming their operations with Zion Tech Group
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services2025AdvertisingCampaign.successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-br from-slate-700 to-slate-600 p-6 rounded-xl border border-slate-500"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {story.company.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-white">{story.company}</h4>
                    <p className="text-gray-400 text-sm">{story.industry}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <h5 className="text-white font-semibold mb-2">Challenge:</h5>
                  <p className="text-gray-300 text-sm">{story.challenge}</p>
                </div>

                <div className="mb-4">
                  <h5 className="text-white font-semibold mb-2">Solution:</h5>
                  <p className="text-gray-300 text-sm">{story.solution}</p>
                </div>

                <div className="mb-4">
                  <h5 className="text-white font-semibold mb-2">Results:</h5>
                  <p className="text-green-400 font-semibold text-sm">{story.results}</p>
                </div>

                <blockquote className="text-gray-300 text-sm italic border-l-4 border-blue-500 pl-4">
                  "{story.testimonial}"
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Analysis */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Market Opportunity & Competitive Advantage
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Position your business at the forefront of the AI and automation revolution
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Market Landscape</h3>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-slate-700 to-slate-600 p-6 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300">Total Market Size:</span>
                    <span className="text-3xl font-bold text-green-400">
                      {services2025AdvertisingCampaign.marketAnalysis.totalMarketSize}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">Growing rapidly with AI adoption</p>
                </div>

                <div className="bg-gradient-to-r from-slate-700 to-slate-600 p-6 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300">Annual Growth Rate:</span>
                    <span className="text-2xl font-bold text-blue-400">
                      {services2025AdvertisingCampaign.marketAnalysis.growthRate}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">Accelerating across all sectors</p>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-semibold text-white mb-4">Key Market Trends:</h4>
                <ul className="space-y-2">
                  {services2025AdvertisingCampaign.marketAnalysis.keyTrends.map((trend, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <TrendingUp className="w-5 h-5 text-green-400 mr-3" />
                      {trend}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Our Competitive Advantage</h3>
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 rounded-xl">
                <p className="text-white text-lg leading-relaxed">
                  {services2025AdvertisingCampaign.marketAnalysis.competitiveAdvantage}
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center text-white">
                  <Award className="w-6 h-6 text-yellow-400 mr-3" />
                  <span>Most comprehensive service portfolio</span>
                </div>
                <div className="flex items-center text-white">
                  <Atom className="w-6 h-6 text-purple-400 mr-3" />
                  <span>Quantum-ready infrastructure</span>
                </div>
                <div className="flex items-center text-white">
                  <Brain className="w-6 h-6 text-blue-400 mr-3" />
                  <span>Advanced autonomous AI capabilities</span>
                </div>
                <div className="flex items-center text-white">
                  <Shield className="w-6 h-6 text-green-400 mr-3" />
                  <span>Enterprise-grade security & compliance</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Calculate Your Return on Investment
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how Zion Tech Group solutions can transform your business metrics
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-gradient-to-br from-slate-700 to-slate-600 p-6 rounded-xl text-center border border-slate-500"
            >
              <DollarSign className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Implementation Cost</h3>
              <p className="text-2xl font-bold text-green-400">
                {services2025AdvertisingCampaign.roiCalculator.averageImplementationCost}
              </p>
              <p className="text-gray-300 text-sm">One-time setup investment</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-slate-700 to-slate-600 p-6 rounded-xl text-center border border-slate-500"
            >
              <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Monthly Savings</h3>
              <p className="text-2xl font-bold text-blue-400">
                {services2025AdvertisingCampaign.roiCalculator.averageMonthlySavings}
              </p>
              <p className="text-gray-300 text-sm">Ongoing operational savings</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gradient-to-br from-slate-700 to-slate-600 p-6 rounded-xl text-center border border-slate-500"
            >
              <Clock className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Payback Period</h3>
              <p className="text-2xl font-bold text-purple-400">
                {services2025AdvertisingCampaign.roiCalculator.paybackPeriod}
              </p>
              <p className="text-gray-300 text-sm">Time to recover investment</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-br from-slate-700 to-slate-600 p-6 rounded-xl text-center border border-slate-500"
            >
              <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Annual ROI</h3>
              <p className="text-2xl font-bold text-yellow-400">
                {services2025AdvertisingCampaign.roiCalculator.annualROI}
              </p>
              <p className="text-gray-300 text-sm">Return on investment</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-12"
          >
            <div className="bg-gradient-to-r from-green-600 to-blue-600 p-8 rounded-xl inline-block">
              <h3 className="text-2xl font-bold text-white mb-2">Three-Year ROI</h3>
              <p className="text-4xl font-bold text-white">
                {services2025AdvertisingCampaign.roiCalculator.threeYearROI}
              </p>
              <p className="text-green-100 text-lg">Compound returns over time</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Limited Time Special Offers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Take advantage of exclusive discounts and special pricing for early adopters
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services2025AdvertisingCampaign.specialOffers.map((offer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-br from-slate-700 to-slate-600 p-6 rounded-xl border border-slate-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 text-sm font-bold transform rotate-12 translate-x-2 -translate-y-1">
                  {offer.discount}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{offer.title}</h3>
                <p className="text-gray-300 mb-4">{offer.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Valid Until:</span>
                    <span className="text-white font-semibold">{offer.validUntil}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Code:</span>
                    <span className="text-green-400 font-bold">{offer.code}</span>
                  </div>
                  {offer.commission && (
                    <div className="flex justify-between">
                      <span className="text-gray-400">Commission:</span>
                      <span className="text-blue-400 font-bold">{offer.commission}</span>
                    </div>
                  )}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  Claim Offer
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {services2025AdvertisingCampaign.callToAction.primary.title}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {services2025AdvertisingCampaign.callToAction.primary.subtitle}
            </p>
            
            <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-lg inline-block mb-8">
              <p className="font-semibold">
                {services2025AdvertisingCampaign.callToAction.primary.urgency}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                {services2025AdvertisingCampaign.callToAction.primary.buttonText}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                {services2025AdvertisingCampaign.callToAction.secondary.buttonText}
              </motion.button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="text-center">
                <Phone className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Call Us</h3>
                <p className="text-gray-300">{services2025AdvertisingCampaign.contact.sales.phone}</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Email Us</h3>
                <p className="text-gray-300">{services2025AdvertisingCampaign.contact.sales.email}</p>
              </div>
              <div className="text-center">
                <Globe className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-300">{services2025AdvertisingCampaign.contact.sales.website}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-slate-700">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            © 2025 Zion Tech Group. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            {services2025AdvertisingCampaign.contact.address}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Services2025Launch;