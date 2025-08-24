import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Building, Car, Heart, DollarSign, GraduationCap, 
  Shield, Factory, Globe, Brain, Atom, Rocket,
  ArrowRight, CheckCircle, Star, Users, Zap
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function SolutionsPage() {
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const industries = [
    { id: 'all', name: 'All Industries', icon: <Globe className="w-6 h-6" /> },
    { id: 'finance', name: 'Financial Services', icon: <DollarSign className="w-6 h-6" /> },
    { id: 'healthcare', name: 'Healthcare', icon: <Heart className="w-6 h-6" /> },
    { id: 'manufacturing', name: 'Manufacturing', icon: <Factory className="w-6 h-6" /> },
    { id: 'automotive', name: 'Automotive', icon: <Car className="w-6 h-6" /> },
    { id: 'education', name: 'Education', icon: <GraduationCap className="w-6 h-6" /> },
    { id: 'retail', name: 'Retail & E-commerce', icon: <Building className="w-6 h-6" /> },
    { id: 'government', name: 'Government', icon: <Shield className="w-6 h-6" /> }
  ];

  const solutions = [
    // Financial Services
    {
      id: 'quantum-financial-trading',
      title: 'Quantum Financial Trading Platform',
      industry: 'finance',
      description: 'Revolutionary quantum computing platform for high-frequency trading, portfolio optimization, and risk assessment.',
      features: [
        'Quantum portfolio optimization',
        'Real-time risk assessment',
        'High-frequency trading algorithms',
        'Market prediction models',
        'Regulatory compliance tools'
      ],
      benefits: [
        '90% faster portfolio optimization',
        'Real-time risk monitoring',
        'Increased trading efficiency',
        'Reduced operational costs'
      ],
      icon: <Atom className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-600',
      price: 'Starting at $5,999/month'
    },
    {
      id: 'ai-fraud-detection',
      title: 'AI-Powered Fraud Detection',
      industry: 'finance',
      description: 'Advanced AI system that detects fraudulent transactions in real-time using machine learning and behavioral analysis.',
      features: [
        'Real-time transaction monitoring',
        'Behavioral pattern analysis',
        'Machine learning algorithms',
        'Automated fraud alerts',
        'Compliance reporting'
      ],
      benefits: [
        '99.9% fraud detection accuracy',
        'Real-time response to threats',
        'Reduced false positives',
        'Compliance automation'
      ],
      icon: <Brain className="w-8 h-8" />,
      color: 'from-purple-500 to-indigo-600',
      price: 'Starting at $2,499/month'
    },
    // Healthcare
    {
      id: 'ai-diagnostic-assistant',
      title: 'AI Diagnostic Assistant',
      industry: 'healthcare',
      description: 'Intelligent diagnostic system that assists healthcare professionals with accurate diagnosis and treatment recommendations.',
      features: [
        'Medical image analysis',
        'Symptom assessment',
        'Treatment recommendations',
        'Drug interaction checking',
        'Patient history analysis'
      ],
      benefits: [
        '95% diagnostic accuracy',
        'Faster diagnosis times',
        'Reduced medical errors',
        'Improved patient outcomes'
      ],
      icon: <Brain className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-600',
      price: 'Starting at $3,999/month'
    },
    {
      id: 'quantum-drug-discovery',
      title: 'Quantum Drug Discovery Platform',
      industry: 'healthcare',
      description: 'Quantum computing platform that accelerates drug discovery through molecular simulation and optimization.',
      features: [
        'Molecular simulation',
        'Drug optimization',
        'Protein folding analysis',
        'Clinical trial optimization',
        'High-throughput screening'
      ],
      benefits: [
        '10x faster drug discovery',
        'Improved drug efficacy',
        'Reduced development costs',
        'Better patient outcomes'
      ],
      icon: <Atom className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-600',
      price: 'Starting at $6,999/month'
    },
    // Manufacturing
    {
      id: 'autonomous-manufacturing',
      title: 'Autonomous Manufacturing System',
      industry: 'manufacturing',
      description: 'AI-powered manufacturing system that optimizes production processes and predicts maintenance needs.',
      features: [
        'Production optimization',
        'Predictive maintenance',
        'Quality control automation',
        'Supply chain optimization',
        'Energy efficiency management'
      ],
      benefits: [
        '25% increase in productivity',
        '30% reduction in downtime',
        'Improved product quality',
        'Reduced energy costs'
      ],
      icon: <Factory className="w-8 h-8" />,
      color: 'from-orange-500 to-red-600',
      price: 'Starting at $4,499/month'
    },
    {
      id: 'smart-inventory-management',
      title: 'Smart Inventory Management',
      industry: 'manufacturing',
      description: 'Intelligent inventory system that predicts demand and optimizes stock levels using AI and machine learning.',
      features: [
        'Demand forecasting',
        'Stock optimization',
        'Automated reordering',
        'Supplier management',
        'Real-time tracking'
      ],
      benefits: [
        '40% reduction in stockouts',
        '25% lower inventory costs',
        'Improved supplier relationships',
        'Better cash flow management'
      ],
      icon: <Brain className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-600',
      price: 'Starting at $1,999/month'
    },
    // Automotive
    {
      id: 'autonomous-vehicle-platform',
      title: 'Autonomous Vehicle Platform',
      industry: 'automotive',
      description: 'Advanced platform for developing and testing autonomous vehicles with AI-powered decision making.',
      features: [
        'AI decision engine',
        'Sensor fusion',
        'Path planning',
        'Safety systems',
        'Testing simulation'
      ],
      benefits: [
        'Faster development cycles',
        'Improved safety testing',
        'Reduced development costs',
        'Better performance'
      ],
      icon: <Car className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-600',
      price: 'Starting at $8,999/month'
    },
    // Education
    {
      id: 'ai-education-platform',
      title: 'AI Education Platform',
      industry: 'education',
      description: 'Personalized learning platform that adapts to each student&apos;s needs using artificial intelligence.',
      features: [
        'Personalized learning paths',
        'Adaptive assessments',
        'Progress tracking',
        'Content recommendations',
        'Teacher assistance tools'
      ],
      benefits: [
        'Improved learning outcomes',
        'Personalized instruction',
        'Better student engagement',
        'Reduced teacher workload'
      ],
      icon: <GraduationCap className="w-8 h-8" />,
      color: 'from-pink-500 to-rose-600',
      price: 'Starting at $2,999/month'
    },
    // Retail
    {
      id: 'ai-customer-experience',
      title: 'AI Customer Experience Platform',
      industry: 'retail',
      description: 'Intelligent platform that personalizes customer experiences and optimizes retail operations.',
      features: [
        'Customer behavior analysis',
        'Personalized recommendations',
        'Inventory optimization',
        'Pricing optimization',
        'Customer service automation'
      ],
      benefits: [
        '30% increase in sales',
        'Improved customer satisfaction',
        'Better inventory management',
        'Reduced operational costs'
      ],
      icon: <Building className="w-8 h-8" />,
      color: 'from-violet-500 to-purple-600',
      price: 'Starting at $3,499/month'
    },
    // Government
    {
      id: 'quantum-cybersecurity',
      title: 'Quantum Cybersecurity Suite',
      industry: 'government',
      description: 'Future-proof cybersecurity solution using quantum-resistant encryption and AI threat detection.',
      features: [
        'Quantum-resistant encryption',
        'AI threat detection',
        'Zero-trust architecture',
        'Compliance tools',
        '24/7 monitoring'
      ],
      benefits: [
        'Future-proof security',
        'Advanced threat detection',
        'Regulatory compliance',
        'Reduced security risks'
      ],
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-pink-600',
      price: 'Starting at $4,999/month'
    }
  ];

  const filteredSolutions = solutions.filter(solution => 
    selectedIndustry === 'all' || solution.industry === selectedIndustry
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Solutions — Zion Tech Group | Industry-Specific Technology Solutions</title>
        <meta name="description" content="Discover Zion Tech Group's industry-specific solutions for finance, healthcare, manufacturing, automotive, education, retail, and government sectors." />
        <meta property="og:title" content="Solutions — Zion Tech Group" />
        <meta property="og:description" content="Industry-specific technology solutions that transform businesses across all sectors. From AI to quantum computing, we have the solution for you." />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://ziontechgroup.com/solutions" />
      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
              Industry Solutions
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Tailored technology solutions designed specifically for your industry. 
              From AI to quantum computing, we transform businesses across all sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setSelectedIndustry(industry.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                  selectedIndustry === industry.id
                    ? 'bg-cyan-500 border-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-gray-800/30 border-gray-600 text-gray-300 hover:border-cyan-500/50 hover:text-white'
                }`}
              >
                {industry.icon}
                <span>{industry.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {filteredSolutions.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <h3 className="text-2xl font-bold text-white mb-4">No solutions found</h3>
              <p className="text-gray-300">Try selecting a different industry or contact us for custom solutions.</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredSolutions.map((solution, index) => (
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/30 backdrop-blur-xl rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="p-8">
                    {/* Solution Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center`}>
                        {solution.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-semibold text-cyan-400">{solution.price}</div>
                      </div>
                    </div>

                    {/* Solution Content */}
                    <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                    <p className="text-gray-300 leading-relaxed mb-6">{solution.description}</p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-2" />
                        Key Features
                      </h4>
                      <div className="space-y-2">
                        {solution.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center">
                        <Zap className="w-4 h-4 text-yellow-400 mr-2" />
                        Business Benefits
                      </h4>
                      <div className="space-y-2">
                        {solution.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center space-x-3">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <a
                      href={`/solutions/${solution.id}`}
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Custom Solutions Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Need a Custom Solution?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Don&apos;t see exactly what you need? Our team of experts can create custom solutions 
              tailored to your specific industry requirements and business challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/services"
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10"
              >
                View All Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Success Stories</h2>
            <p className="text-xl text-gray-300">See how our solutions are transforming industries</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                industry: 'Financial Services',
                company: 'Global Bank Corp',
                result: '40% increase in trading efficiency with our quantum trading platform',
                icon: <DollarSign className="w-8 h-8" />
              },
              {
                industry: 'Healthcare',
                company: 'Metro Medical Center',
                result: '95% diagnostic accuracy improvement with AI diagnostic assistant',
                icon: <Heart className="w-8 h-8" />
              },
              {
                industry: 'Manufacturing',
                company: 'Tech Manufacturing Inc',
                result: '25% productivity increase with autonomous manufacturing system',
                icon: <Factory className="w-8 h-8" />
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  {story.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{story.industry}</h3>
                <p className="text-cyan-400 font-semibold mb-3">{story.company}</p>
                <p className="text-gray-300 text-sm">{story.result}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}