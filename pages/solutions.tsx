import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Target, Brain, Atom, Shield, Zap, Star, Building2, Heart, DollarSign, Factory, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

const Solutions: React.FC = () => {
  const industrySolutions = [
    {
      name: 'Healthcare',
      icon: <Heart className="w-8 h-8 text-red-400" />,
      description: 'AI-powered healthcare diagnostics, patient care, and medical research solutions',
      solutions: [
        { name: 'Healthcare AI Solutions', href: '/healthcare-ai-solutions', description: 'AI diagnostics and patient care' },
        { name: 'AI Healthcare Analytics', href: '/ai-healthcare-analytics', description: 'Healthcare data analytics' },
        { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics', description: 'Advanced diagnostic tools' },
        { name: 'Biotech AI Research Platform', href: '/biotech-ai-research-platform', description: 'Biotechnology research' }
      ],
      color: 'from-red-500 to-pink-600'
    },
    {
      name: 'Finance',
      icon: <DollarSign className="w-8 h-8 text-green-400" />,
      description: 'Financial technology solutions for banking, trading, and risk management',
      solutions: [
        { name: 'Financial Solutions', href: '/financial-solutions', description: 'Comprehensive financial tech' },
        { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence', description: 'AI-powered financial insights' },
        { name: 'AI Financial Risk Management', href: '/ai-financial-risk', description: 'Risk assessment and management' },
        { name: 'AI Financial Planning Platform', href: '/ai-financial-planning-platform', description: 'Financial planning tools' },
        { name: 'Quantum Financial Trading', href: '/quantum-financial-trading', description: 'Quantum trading algorithms' }
      ],
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Manufacturing',
      icon: <Factory className="w-8 h-8 text-blue-400" />,
      description: 'Manufacturing automation and AI-powered production optimization',
      solutions: [
        { name: 'Manufacturing AI Solutions', href: '/manufacturing-ai-solutions', description: 'AI manufacturing automation' },
        { name: 'AI Manufacturing Optimization', href: '/ai-manufacturing-optimization', description: 'Production optimization' },
        { name: 'Autonomous Manufacturing', href: '/autonomous-manufacturing', description: 'Fully automated production' },
        { name: 'Industrial Automation AI', href: '/industrial-automation-ai', description: 'Industrial AI systems' }
      ],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'Retail & E-commerce',
      icon: <ShoppingCart className="w-8 h-8 text-purple-400" />,
      description: 'Retail technology solutions for customer experience and operations',
      solutions: [
        { name: 'Retail Technology Solutions', href: '/retail-technology-solutions', description: 'Retail tech innovations' },
        { name: 'AI Customer Journey Analytics', href: '/ai-customer-journey-analytics', description: 'Customer experience optimization' },
        { name: 'AI Website Personalization', href: '/ai-website-personalization', description: 'Personalized shopping experiences' },
        { name: 'AI Content Personalization Engine', href: '/ai-content-personalization-engine', description: 'Content optimization' }
      ],
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Government & Public Sector',
      icon: <Building2 className="w-8 h-8 text-yellow-400" />,
      description: 'Government technology solutions for public services and infrastructure',
      solutions: [
        { name: 'Government Technology Solutions', href: '/government-technology-solutions', description: 'Public sector tech' },
        { name: 'AI-Powered Cybersecurity', href: '/ai-powered-cybersecurity', description: 'Government security' },
        { name: 'Zero Trust Security Platform', href: '/zero-trust-security-platform', description: 'Advanced security architecture' },
        { name: 'SOC 2 Compliance Automation', href: '/soc2-compliance-automation', description: 'Compliance automation' }
      ],
      color: 'from-yellow-500 to-orange-600'
    },
    {
      name: 'Energy & Utilities',
      icon: <Zap className="w-8 h-8 text-amber-400" />,
      description: 'Energy optimization and utility management solutions',
      solutions: [
        { name: 'Energy & Utilities Solutions', href: '/energy-utilities-solutions', description: 'Energy management tech' },
        { name: 'Quantum Energy Platform', href: '/quantum-energy-platform', description: 'Quantum energy optimization' },
        { name: 'Quantum Energy Optimization', href: '/quantum-energy-optimization', description: 'Energy efficiency algorithms' },
        { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform', description: 'Sustainability solutions' }
      ],
      color: 'from-amber-500 to-yellow-600'
    }
  ];

  const crossIndustrySolutions = [
    {
      category: 'AI & Machine Learning',
      solutions: [
        { name: 'AI Consciousness Evolution 2029', href: '/ai-consciousness-evolution-2029', description: 'Advanced AI consciousness platform' },
        { name: 'AI Autonomous Business Operations', href: '/ai-autonomous-business-operations-platform', description: 'Fully autonomous business processes' },
        { name: 'AI Business Intelligence Suite', href: '/ai-business-intelligence-suite', description: 'Comprehensive business intelligence' }
      ]
    },
    {
      category: 'Quantum Computing',
      solutions: [
        { name: 'Quantum Neural Network Platform', href: '/quantum-neural-network-platform', description: 'Quantum neural computing' },
        { name: 'Quantum Cybersecurity Platform', href: '/quantum-cybersecurity-platform', description: 'Quantum security solutions' },
        { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure-platform', description: 'Quantum cloud services' }
      ]
    },
    {
      category: 'Space Technology',
      solutions: [
        { name: 'Space Resource Mining Platform', href: '/space-resource-mining-platform', description: 'Space exploration technology' },
        { name: 'AI-Powered Space Technology', href: '/ai-powered-space-technology', description: 'AI space solutions' },
        { name: 'Space Technology AI Platform', href: '/space-technology-ai-platform', description: 'Space AI platform' }
      ]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="flex items-center justify-center mb-6">
                <Target className="w-16 h-16 text-cyan-400 mr-4" />
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Industry Solutions
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Tailored technology solutions designed specifically for your industry. 
                From healthcare to finance, manufacturing to government, we have the expertise 
                to transform your business.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Industry Solutions */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Industry-Specific Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our solutions are built with deep industry knowledge and tailored to address 
                the unique challenges and opportunities in your sector.
              </p>
            </motion.div>

            <div className="space-y-16">
              {industrySolutions.map((industry, industryIndex) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: industryIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl flex items-center justify-center">
                      {industry.icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">{industry.name}</h3>
                      <p className="text-gray-300 text-lg">{industry.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industry.solutions.map((solution, solutionIndex) => (
                      <motion.div
                        key={solution.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: solutionIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="group"
                      >
                        <Link href={solution.href}>
                          <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 h-full">
                            <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                              {solution.name}
                            </h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                              {solution.description}
                            </p>
                            <div className="mt-4 flex items-center text-cyan-400 text-sm font-medium">
                              Learn More
                              <Star className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cross-Industry Solutions */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Cross-Industry Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our core technology platforms that deliver value across all industries, 
                from AI consciousness to quantum computing and space technology.
              </p>
            </motion.div>

            <div className="space-y-12">
              {crossIndustrySolutions.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    {category.solutions.map((solution, solutionIndex) => (
                      <motion.div
                        key={solution.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: solutionIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="group"
                      >
                        <Link href={solution.href}>
                          <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 h-full">
                            <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                              {solution.name}
                            </h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                              {solution.description}
                            </p>
                            <div className="mt-4 flex items-center text-cyan-400 text-sm font-medium">
                              Explore Solution
                              <Star className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Solutions */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Solutions?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our industry solutions combine deep domain expertise with cutting-edge technology 
                to deliver measurable business value.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-12 h-12 text-cyan-400" />,
                  title: 'Industry Expertise',
                  description: 'Deep understanding of your industry challenges and regulatory requirements'
                },
                {
                  icon: <Atom className="w-12 h-12 text-blue-400" />,
                  title: 'Cutting-Edge Technology',
                  description: 'Latest AI, quantum computing, and space technology innovations'
                },
                {
                  icon: <Shield className="w-12 h-12 text-green-400" />,
                  title: 'Proven Results',
                  description: 'Track record of successful implementations across industries'
                }
              ].map((advantage, index) => (
                <motion.div
                  key={advantage.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center p-6"
                >
                  <div className="flex justify-center mb-4">{advantage.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{advantage.title}</h3>
                  <p className="text-gray-300">{advantage.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Industry?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our industry-specific solutions can address your unique 
                challenges and drive innovation in your sector.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                    Get Started
                  </button>
                </Link>
                <Link href="/services">
                  <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300">
                    View All Services
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Solutions;