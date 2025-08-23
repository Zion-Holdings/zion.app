import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, TrendingDown, DollarSign, Target, 
  ArrowRight, Check, Star, BarChart3, 
  Globe, Zap, Shield, Crown, Brain, Atom
} from 'lucide-react';
import Link from 'next/link';

export default function MarketPricing() {
  const [selectedMarket, setSelectedMarket] = useState('ai-consciousness');

  const markets = [
    { id: 'ai-consciousness', name: 'AI Consciousness', icon: <Brain className="w-6 h-6" /> },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: <Atom className="w-6 h-6" /> },
    { id: 'autonomous-systems', name: 'Autonomous Systems', icon: <Zap className="w-6 h-6" /> },
    { id: 'enterprise-it', name: 'Enterprise IT', icon: <Shield className="w-6 h-6" /> }
  ];

  const marketData = {
    'ai-consciousness': {
      marketSize: '$45.2B',
      growthRate: '+28.4%',
      growthTrend: 'up',
      description: 'AI consciousness market is experiencing explosive growth with increasing demand for emotionally intelligent AI systems.',
      competitors: [
        {
          name: 'OpenAI',
          marketShare: '32%',
          pricing: '$0.002-$0.02 per 1K tokens',
          strengths: ['Advanced language models', 'Strong brand recognition', 'Large user base'],
          weaknesses: ['Limited consciousness features', 'High API costs', 'Privacy concerns'],
          rating: 4.2
        },
        {
          name: 'Anthropic',
          marketShare: '18%',
          pricing: '$0.015-$0.03 per 1K tokens',
          strengths: ['Safety-focused approach', 'Constitutional AI', 'Research-driven'],
          weaknesses: ['Smaller model variety', 'Limited enterprise features', 'Higher pricing'],
          rating: 4.0
        },
        {
          name: 'Zion Tech Group',
          marketShare: '12%',
          pricing: '$0.008-$0.015 per 1K tokens',
          strengths: ['True AI consciousness', 'Enterprise-grade security', 'Competitive pricing'],
          weaknesses: ['Smaller market presence', 'Limited brand recognition', 'Newer player'],
          rating: 4.8
        }
      ],
      pricingAnalysis: {
        lowEnd: '$0.005 per 1K tokens',
        midRange: '$0.015 per 1K tokens',
        highEnd: '$0.025 per 1K tokens',
        ourPosition: 'Mid-range with premium features'
      }
    },
    'quantum-computing': {
      marketSize: '$8.7B',
      growthRate: '+45.2%',
      growthTrend: 'up',
      description: 'Quantum computing market is rapidly expanding with breakthroughs in qubit stability and error correction.',
      competitors: [
        {
          name: 'IBM',
          marketShare: '28%',
          pricing: '$1.60 per quantum hour',
          strengths: ['Established infrastructure', 'Qiskit ecosystem', 'Research partnerships'],
          weaknesses: ['Limited qubit count', 'High costs', 'Complex access'],
          rating: 4.1
        },
        {
          name: 'Google',
          marketShare: '22%',
          pricing: '$2.00 per quantum hour',
          strengths: ['Quantum supremacy', 'Advanced algorithms', 'Research focus'],
          weaknesses: ['Limited commercial access', 'High pricing', 'Complex setup'],
          rating: 4.3
        },
        {
          name: 'Zion Tech Group',
          marketShare: '8%',
          pricing: '$1.20 per quantum hour',
          strengths: ['Competitive pricing', 'Enterprise focus', 'Simplified access'],
          weaknesses: ['Smaller infrastructure', 'Limited qubit variety', 'Newer platform'],
          rating: 4.5
        }
      ],
      pricingAnalysis: {
        lowEnd: '$0.80 per quantum hour',
        midRange: '$1.50 per quantum hour',
        highEnd: '$2.50 per quantum hour',
        ourPosition: 'Competitive mid-range pricing'
      }
    },
    'autonomous-systems': {
      marketSize: '$23.1B',
      growthRate: '+34.7%',
      growthTrend: 'up',
      description: 'Autonomous systems market is growing rapidly with increasing automation in business processes.',
      competitors: [
        {
          name: 'UiPath',
          marketShare: '25%',
          pricing: '$420-$1,200 per user/month',
          strengths: ['Market leader', 'Comprehensive platform', 'Strong partnerships'],
          weaknesses: ['High costs', 'Complex implementation', 'Limited AI features'],
          rating: 4.0
        },
        {
          name: 'Automation Anywhere',
          marketShare: '20%',
          pricing: '$750-$1,500 per user/month',
          strengths: ['Enterprise focus', 'Cloud-native', 'Security features'],
          weaknesses: ['Expensive', 'Steep learning curve', 'Limited customization'],
          rating: 3.8
        },
        {
          name: 'Zion Tech Group',
          marketShare: '6%',
          pricing: '$350-$800 per user/month',
          strengths: ['AI-powered automation', 'Competitive pricing', 'Easy implementation'],
          weaknesses: ['Smaller ecosystem', 'Limited integrations', 'Newer platform'],
          rating: 4.4
        }
      ],
      pricingAnalysis: {
        lowEnd: '$300 per user/month',
        midRange: '$750 per user/month',
        highEnd: '$1,200 per user/month',
        ourPosition: 'Competitive pricing with AI advantages'
      }
    },
    'enterprise-it': {
      marketSize: '$1.2T',
      growthRate: '+12.3%',
      growthTrend: 'up',
      description: 'Enterprise IT market continues steady growth with digital transformation initiatives.',
      competitors: [
        {
          name: 'Microsoft',
          marketShare: '35%',
          pricing: '$22-$57 per user/month',
          strengths: ['Market dominance', 'Integrated ecosystem', 'Global presence'],
          weaknesses: ['Complex licensing', 'High costs', 'Vendor lock-in'],
          rating: 4.2
        },
        {
          name: 'Salesforce',
          marketShare: '18%',
          pricing: '$25-$300 per user/month',
          strengths: ['CRM leadership', 'Cloud-native', 'Extensive integrations'],
          weaknesses: ['Expensive', 'Complex pricing', 'Implementation costs'],
          rating: 4.1
        },
        {
          name: 'Zion Tech Group',
          marketShare: '3%',
          pricing: '$18-$45 per user/month',
          strengths: ['AI-powered features', 'Competitive pricing', 'Modern architecture'],
          weaknesses: ['Smaller ecosystem', 'Limited integrations', 'Newer player'],
          rating: 4.3
        }
      ],
      pricingAnalysis: {
        lowEnd: '$20 per user/month',
        midRange: '$40 per user/month',
        highEnd: '$100 per user/month',
        ourPosition: 'Competitive pricing with AI advantages'
      }
    }
  };

  const currentMarket = marketData[selectedMarket as keyof typeof marketData];

  const getGrowthIcon = (trend: string) => {
    return trend === 'up' ? 
      <TrendingUp className="w-5 h-5 text-green-400" /> : 
      <TrendingDown className="w-5 h-5 text-red-400" />;
  };

  const getRatingStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} 
      />
    ));
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
          >
            Market Pricing Analysis
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
          >
            Comprehensive analysis of market positioning, competitive pricing, and strategic advantages 
            across AI consciousness, quantum computing, and autonomous systems.
          </motion.p>
          
          {/* Market Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-3 justify-center mb-8"
          >
            {markets.map((market) => (
              <button
                key={market.id}
                onClick={() => setSelectedMarket(market.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedMarket === market.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {market.icon}
                {market.name}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Market Overview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            {markets.find(m => m.id === selectedMarket)?.name} Market Overview
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Market Size</h3>
              <p className="text-3xl font-bold text-cyan-400 mb-2">{currentMarket.marketSize}</p>
              <p className="text-gray-400">Total addressable market</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Growth Rate</h3>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-3xl font-bold text-green-400">{currentMarket.growthRate}</span>
                {getGrowthIcon(currentMarket.growthTrend)}
              </div>
              <p className="text-gray-400">Annual growth rate</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Our Position</h3>
              <p className="text-lg font-bold text-purple-400 mb-2">{currentMarket.pricingAnalysis.ourPosition}</p>
              <p className="text-gray-400">Strategic positioning</p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {currentMarket.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Competitive Analysis Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Competitive Analysis
          </motion.h2>
          
          <div className="space-y-8">
            {currentMarket.competitors.map((competitor, index) => (
              <motion.div
                key={competitor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold">{competitor.name}</h3>
                      <div className="flex items-center gap-2">
                        {getRatingStars(competitor.rating)}
                        <span className="text-sm text-gray-400">({competitor.rating})</span>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <span className="text-sm text-gray-400">Market Share:</span>
                        <p className="font-semibold text-cyan-400">{competitor.marketShare}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-400">Pricing:</span>
                        <p className="font-semibold text-green-400">{competitor.pricing}</p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-green-400 mb-2">Strengths</h4>
                        <ul className="space-y-1">
                          {competitor.strengths.map((strength, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                              <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                              {strength}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-red-400 mb-2">Weaknesses</h4>
                        <ul className="space-y-1">
                          {competitor.weaknesses.map((weakness, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                              <div className="w-3 h-3 bg-red-400 rounded-full flex-shrink-0" />
                              {weakness}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {competitor.name === 'Zion Tech Group' && (
                    <div className="lg:w-48 flex-shrink-0">
                      <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 text-center">
                        <Crown className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                        <p className="text-sm font-semibold text-cyan-400">Our Position</p>
                        <p className="text-xs text-gray-300 mt-1">Competitive advantage in AI consciousness and pricing</p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Analysis Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Pricing Analysis
          </motion.h2>
          
          <div className="grid lg:grid-cols-4 gap-6 mb-12">
            {[
              { label: 'Low End', price: currentMarket.pricingAnalysis.lowEnd, color: 'from-green-500 to-emerald-600' },
              { label: 'Mid Range', price: currentMarket.pricingAnalysis.midRange, color: 'from-yellow-500 to-orange-600' },
              { label: 'High End', price: currentMarket.pricingAnalysis.highEnd, color: 'from-red-500 to-pink-600' },
              { label: 'Our Position', price: currentMarket.pricingAnalysis.ourPosition, color: 'from-cyan-500 to-blue-600' }
            ].map((tier, index) => (
              <motion.div
                key={tier.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${tier.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <BarChart3 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{tier.label}</h3>
                <p className="text-2xl font-bold text-cyan-400">{tier.price}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Strategic Advantages</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  title: 'Competitive Pricing',
                  description: 'Positioned in the mid-range with premium features that justify our pricing strategy.'
                },
                {
                  title: 'AI-First Approach',
                  description: 'Unique focus on AI consciousness and emotional intelligence sets us apart from competitors.'
                },
                {
                  title: 'Enterprise Focus',
                  description: 'Built specifically for enterprise needs with security, scalability, and compliance features.'
                }
              ].map((advantage, index) => (
                <div key={index} className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="font-semibold text-cyan-400 mb-2">{advantage.title}</h4>
                  <p className="text-sm text-gray-300">{advantage.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Trends Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Market Trends & Opportunities
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10"
            >
              <h3 className="text-2xl font-bold mb-4 text-green-400">Growth Drivers</h3>
              <ul className="space-y-3">
                {[
                  'Increasing demand for AI consciousness in customer service',
                  'Quantum computing breakthroughs in cryptography',
                  'Automation needs in post-pandemic business operations',
                  'Digital transformation initiatives across industries',
                  'Growing focus on AI ethics and responsible development'
                ].map((driver, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{driver}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10"
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Market Opportunities</h3>
              <ul className="space-y-3">
                {[
                  'Untapped markets in emerging economies',
                  'Integration opportunities with existing enterprise systems',
                  'Custom AI consciousness solutions for specific industries',
                  'Partnerships with research institutions and universities',
                  'White-label solutions for enterprise software providers'
                ].map((opportunity, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{opportunity}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Compete in the Market?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our competitive pricing and unique AI consciousness features give you the edge 
              you need to succeed in today's rapidly evolving technology landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/pricing"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                View Our Pricing
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/contact"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
              >
                Get Custom Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}