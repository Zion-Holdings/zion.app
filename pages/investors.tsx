import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  DollarSign, Brain, Rocket, Shield, Zap, Target, Atom, 
  Lock, Cloud, Settings, Eye, Award, Clock, Heart, 
  Lightbulb, Search, Grid, List, TrendingUp, 
  User, ShoppingCart, Bell, HelpCircle, FileText, 
  Video, Headphones, Code, Database, Network, Server, 
  Monitor, Smartphone, Camera, Gamepad2, Palette, 
  Music, Film, BookOpenCheck, Building, MessageCircle, 
  Sparkles, ArrowRight, CheckCircle, Star, Globe, BarChart3, Handshake, Users
} from 'lucide-react';

const InvestorsPage: React.FC = () => {
  const investmentOpportunities = [
    {
      id: 'series-a',
      name: 'Series A Funding',
      description: 'Strategic growth funding for market expansion',
      features: ['Market Expansion', 'Product Development', 'Team Growth', 'Strategic Partnerships'],
      amount: '$10M - $25M',
      equity: '15-25%',
      popular: true,
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      id: 'series-b',
      name: 'Series B Funding',
      description: 'Scale funding for rapid growth and market leadership',
      features: ['International Expansion', 'Advanced R&D', 'Acquisitions', 'Market Leadership'],
      amount: '$25M - $50M',
      equity: '10-20%',
      popular: false,
      icon: <Rocket className="w-8 h-8" />
    },
    {
      id: 'strategic-investment',
      name: 'Strategic Investment',
      description: 'Partnership-focused strategic investments',
      features: ['Strategic Partnerships', 'Technology Access', 'Market Access', 'Joint Ventures'],
      amount: 'Custom',
      equity: '5-15%',
      popular: false,
      icon: <Handshake className="w-8 h-8" />
    },
    {
      id: 'debt-financing',
      name: 'Debt Financing',
      description: 'Non-dilutive capital for growth initiatives',
      features: ['Non-dilutive Capital', 'Flexible Terms', 'Asset-backed', 'Growth Funding'],
      amount: '$5M - $20M',
      equity: '0%',
      popular: false,
      icon: <DollarSign className="w-8 h-8" />
    },
    {
      id: 'venture-debt',
      name: 'Venture Debt',
      description: 'Flexible debt solutions for venture-backed companies',
      features: ['Flexible Terms', 'Warrant Coverage', 'Growth Capital', 'Bridge Financing'],
      amount: '$2M - $10M',
      equity: '0-2%',
      popular: false,
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      id: 'ipo-preparation',
      name: 'IPO Preparation',
      description: 'Pre-IPO funding and preparation support',
      features: ['IPO Readiness', 'Financial Preparation', 'Regulatory Compliance', 'Market Positioning'],
      amount: '$50M+',
      equity: '5-10%',
      popular: false,
      icon: <Building className="w-8 h-8" />
    }
  ];

  const investmentHighlights = [
    {
      title: 'Market Leadership',
      description: 'Leading position in AI and quantum computing',
      icon: <Star className="w-6 h-6" />
    },
    {
      title: 'Revenue Growth',
      description: 'Consistent double-digit revenue growth',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: 'Technology Innovation',
      description: 'Breakthrough technologies and patents',
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: 'Global Reach',
      description: 'Expanding international presence',
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: 'Strong Team',
      description: 'Experienced leadership and talent',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'Strategic Partnerships',
      description: 'Key partnerships with industry leaders',
      icon: <Handshake className="w-6 h-6" />
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Investment Opportunities - Zion Tech Group"
        description="Join us in shaping the future of technology. Explore investment opportunities in AI, quantum computing, and emerging technologies."
        keywords="investment, funding, series A, series B, strategic investment, venture capital, AI investment, quantum computing investment"
      />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-[60vh] flex items-center justify-center px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent">
                Investment Opportunities
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join us in shaping the future of technology with investment opportunities in AI, quantum computing, and emerging technologies
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
                >
                  Invest Now
                </a>
                <a 
                  href="/contact" 
                  className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Investment Highlights */}
        <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Investment Highlights
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover why Zion Tech Group is an attractive investment opportunity
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {investmentHighlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-yellow-500 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-yellow-500/20 rounded-lg mr-3">
                      {highlight.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{highlight.title}</h3>
                  </div>
                  <p className="text-gray-300">{highlight.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Opportunities */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Investment Opportunities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the investment opportunity that aligns with your investment strategy
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {investmentOpportunities.map((opportunity, index) => (
                <motion.div
                  key={opportunity.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border transition-all duration-300 hover:scale-105 ${
                    opportunity.popular 
                      ? 'border-yellow-500 shadow-lg shadow-yellow-500/25' 
                      : 'border-gray-700 hover:border-yellow-500'
                  }`}
                >
                  {opportunity.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="inline-flex p-3 bg-yellow-500/20 rounded-full mb-4">
                      {opportunity.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{opportunity.name}</h3>
                    <p className="text-gray-300 mb-4">{opportunity.description}</p>
                    <div className="text-3xl font-bold text-yellow-400 mb-2">
                      {opportunity.amount}
                    </div>
                    <div className="text-lg text-gray-400 mb-2">
                      Equity: {opportunity.equity}
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {opportunity.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href="/contact" 
                    className="w-full block text-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-orange-700 transition-all duration-300"
                  >
                    Invest Now
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Ready to Invest?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join us in building the future of technology and unlock exceptional returns
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Investing
                </a>
                <a 
                  href="/contact" 
                  className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Meeting
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default InvestorsPage;