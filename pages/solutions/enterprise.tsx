import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
  Users, 
  Shield, 
  Cloud, 
  Database, 
  Cpu, 
  Zap, 
  Lock, 
  Globe, 
  Target,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  BarChart3,
  Server,
  Network,
  Smartphone,
  Code,
  Brain,
  Atom,
  Rocket,
  ShoppingBag
} from 'lucide-react';
import Layout from '../../components/layout/Layout';
import SEO from '../../components/SEO';

const EnterpriseSolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: 'Enterprise AI & Machine Learning',
      description: 'Transform your business with intelligent automation and predictive analytics',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Custom AI model development',
        'Predictive analytics platforms',
        'Intelligent process automation',
        'Natural language processing',
        'Computer vision solutions',
        'AI-powered decision support'
      ],
      benefits: [
        '30% increase in operational efficiency',
        'Real-time insights and analytics',
        'Automated decision making',
        'Enhanced customer experience'
      ]
    },
    {
      title: 'Quantum Computing Solutions',
      description: 'Leverage quantum computing for complex problem-solving and optimization',
      icon: Atom,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Quantum algorithm development',
        'Optimization problem solving',
        'Cryptography and security',
        'Financial modeling',
        'Drug discovery simulation',
        'Climate modeling'
      ],
      benefits: [
        'Exponential performance gains',
        'Breakthrough problem-solving capabilities',
        'Future-proof technology investment',
        'Competitive advantage in research'
      ]
    },
    {
      title: 'Space Technology Integration',
      description: 'Access space-based computing and satellite technology solutions',
      icon: Rocket,
      color: 'from-indigo-500 to-purple-500',
      features: [
        'Satellite communication systems',
        'Space-based data centers',
        'Orbital computing platforms',
        'Space resource intelligence',
        'Interplanetary communication',
        'Space cybersecurity'
      ],
      benefits: [
        'Global connectivity solutions',
        'Redundant infrastructure',
        'Space-based computing power',
        'Innovation leadership position'
      ]
    },
    {
      title: 'Advanced Cybersecurity',
      description: 'Protect your enterprise with next-generation security solutions',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      features: [
        'Zero Trust architecture',
        'Quantum-resistant encryption',
        'AI-powered threat detection',
        'Advanced endpoint protection',
        'Security automation',
        'Compliance management'
      ],
      benefits: [
        '99.99% threat detection rate',
        'Automated security response',
        'Regulatory compliance',
        'Reduced security incidents'
      ]
    },
    {
      title: 'Cloud Infrastructure & DevOps',
      description: 'Scalable cloud solutions with automated deployment and management',
      icon: Cloud,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Multi-cloud architecture',
        'Container orchestration',
        'Serverless computing',
        'Infrastructure as Code',
        'Continuous deployment',
        'Auto-scaling solutions'
      ],
      benefits: [
        '50% reduction in infrastructure costs',
        '99.9% uptime guarantee',
        'Automated scaling',
        'Faster time to market'
      ]
    },
    {
      title: 'Data Analytics & Intelligence',
      description: 'Unlock insights from your data with advanced analytics platforms',
      icon: Database,
      color: 'from-yellow-500 to-orange-500',
      features: [
        'Real-time data processing',
        'Predictive analytics',
        'Business intelligence dashboards',
        'Data governance',
        'Machine learning pipelines',
        'Data visualization'
      ],
      benefits: [
        'Data-driven decision making',
        'Real-time business insights',
        'Improved operational efficiency',
        'Enhanced customer understanding'
      ]
    }
  ];

  const industries = [
    {
      name: 'Financial Services',
      icon: BarChart3,
      solutions: ['Risk management', 'Fraud detection', 'Algorithmic trading', 'Regulatory compliance'],
      color: 'from-emerald-500 to-green-500'
    },
    {
      name: 'Healthcare',
      icon: Users,
      solutions: ['Patient care optimization', 'Drug discovery', 'Medical imaging AI', 'Healthcare analytics'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Manufacturing',
      icon: Cpu,
      solutions: ['Predictive maintenance', 'Quality control', 'Supply chain optimization', 'IoT integration'],
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Retail & E-commerce',
      icon: ShoppingBag,
      solutions: ['Customer personalization', 'Inventory optimization', 'Demand forecasting', 'Omnichannel integration'],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Assessment',
      description: 'We analyze your current infrastructure and identify opportunities for transformation',
      icon: Target
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'Our experts design custom solutions tailored to your specific business needs',
      icon: Code
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We deploy solutions with minimal disruption to your ongoing operations',
      icon: Zap
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuous monitoring and optimization to ensure peak performance',
      icon: TrendingUp
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Enterprise Solutions - Zion Tech Group"
        description="Transform your enterprise with cutting-edge technology solutions including AI, quantum computing, space technology, and advanced cybersecurity."
        keywords={["enterprise solutions", "AI", "quantum computing", "space technology", "cybersecurity", "cloud infrastructure", "Zion Tech Group"]}
      />
      
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                Enterprise Solutions
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Transform your enterprise with cutting-edge technology solutions that drive innovation, 
                efficiency, and competitive advantage in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
                <a
                  href="#solutions"
                  className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-300"
                >
                  Explore Solutions
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section id="solutions" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Comprehensive Solutions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our enterprise solutions combine cutting-edge technology with proven methodologies 
                to deliver transformative results for your business.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-400/20">
                    {/* Icon */}
                    <div className={`w-16 h-16 mb-6 rounded-full bg-gradient-to-br ${solution.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {solution.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {solution.description}
                    </p>
                    
                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                            <CheckCircle className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                        Business Benefits
                      </h4>
                      <ul className="space-y-2">
                        {solution.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                            <Star className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* CTA */}
                    <a
                      href="/contact"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-200"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Solutions */}
        <section className="py-20 relative bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Industry-Specific Solutions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Tailored solutions designed for the unique challenges and opportunities in your industry.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-blue-400/50 transition-all duration-300">
                    {/* Icon */}
                    <div className={`w-16 h-16 mb-6 rounded-full bg-gradient-to-br ${industry.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <industry.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {industry.name}
                    </h3>
                    
                    {/* Solutions */}
                    <div className="space-y-3">
                      {industry.solutions.map((solution, solutionIndex) => (
                        <div key={solutionIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                          {solution}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Our Implementation Process
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                A proven methodology that ensures successful delivery and maximum value from your technology investment.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className="relative">
                    {/* Step Number */}
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                      {step.step}
                    </div>
                    
                    {/* Icon */}
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 relative bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Enterprise?
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Let's discuss how our enterprise solutions can drive innovation and growth in your organization. 
                Schedule a consultation with our experts today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Consultation
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-300"
                >
                  View All Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default EnterpriseSolutionsPage;