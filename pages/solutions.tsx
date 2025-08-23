import React from 'react';
import Layout from '../components/layout/Layout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Heart, DollarSign, Factory, ShoppingCart, Building2, 
  GraduationCap, Leaf, Shield, ArrowRight, Star, CheckCircle,
  Users, Globe, Cpu, Database, Network, Target
} from 'lucide-react';

const SolutionsPage: React.FC = () => {
  const industrySolutions = [
    {
      category: 'Healthcare & Life Sciences',
      solutions: [
        {
          name: 'Healthcare AI Solutions',
          description: 'AI-powered diagnostic tools, patient care optimization, and medical research platforms',
          href: '/healthcare-solutions',
          featured: true,
          icon: <Heart className="w-6 h-6" />
        },
        {
          name: 'AI Healthcare Diagnostics',
          description: 'Advanced diagnostic systems using machine learning and medical imaging',
          href: '/ai-healthcare-diagnostics',
          icon: <Cpu className="w-6 h-6" />
        },
        {
          name: 'Biotech AI Research Platform',
          description: 'AI-driven research tools for biotechnology and pharmaceutical development',
          href: '/biotech-ai-research-platform',
          icon: <Database className="w-6 h-6" />
        }
      ]
    },
    {
      category: 'Financial Services',
      solutions: [
        {
          name: 'Financial Solutions',
          description: 'Comprehensive financial technology solutions for modern enterprises',
          href: '/financial-solutions',
          featured: true,
          icon: <DollarSign className="w-6 h-6" />
        },
        {
          name: 'AI Financial Intelligence',
          description: 'Intelligent financial analysis and decision-making platforms',
          href: '/ai-financial-intelligence',
          icon: <Globe className="w-6 h-6" />
        },
        {
          name: 'Quantum Financial Trading',
          description: 'Quantum-powered trading algorithms and financial modeling',
          href: '/quantum-financial-trading',
          icon: <Network className="w-6 h-6" />
        }
      ]
    },
    {
      category: 'Manufacturing & Industry',
      solutions: [
        {
          name: 'Manufacturing AI Solutions',
          description: 'AI-powered automation and optimization for manufacturing processes',
          href: '/manufacturing-ai-solutions',
          featured: true,
          icon: <Factory className="w-6 h-6" />
        },
        {
          name: 'Industrial Automation AI',
          description: 'Intelligent automation systems for industrial operations',
          href: '/industrial-automation-ai',
          icon: <Cpu className="w-6 h-6" />
        },
        {
          name: 'Autonomous Manufacturing',
          description: 'Self-managing manufacturing systems with AI oversight',
          href: '/autonomous-manufacturing',
          icon: <Database className="w-6 h-6" />
        }
      ]
    },
    {
      category: 'Retail & E-commerce',
      solutions: [
        {
          name: 'Retail Technology Solutions',
          description: 'Advanced technology solutions for modern retail operations',
          href: '/retail-technology-solutions',
          featured: true,
          icon: <ShoppingCart className="w-6 h-6" />
        },
        {
          name: 'AI Customer Journey Analytics',
          description: 'Comprehensive customer behavior analysis and optimization',
          href: '/ai-customer-journey-analytics',
          icon: <Users className="w-6 h-6" />
        },
        {
          name: 'AI Content Personalization',
          description: 'Dynamic content adaptation based on customer preferences',
          href: '/ai-content-personalization-engine',
          icon: <Globe className="w-6 h-6" />
        }
      ]
    },
    {
      category: 'Government & Public Sector',
      solutions: [
        {
          name: 'Government Technology Solutions',
          description: 'Innovative technology solutions for government agencies and public services',
          href: '/government-technology-solutions',
          featured: true,
          icon: <Building2 className="w-6 h-6" />
        },
        {
          name: 'AI Ethics & Governance Framework',
          description: 'Comprehensive frameworks for responsible AI deployment',
          href: '/ai-ethics-governance-framework',
          icon: <Shield className="w-6 h-6" />
        },
        {
          name: 'Cybersecurity Solutions',
          description: 'Advanced security solutions for government and enterprise',
          href: '/cybersecurity',
          icon: <Shield className="w-6 h-6" />
        }
      ]
    },
    {
      category: 'Education & Training',
      solutions: [
        {
          name: 'Education Technology Solutions',
          description: 'Innovative technology solutions for modern education and training',
          href: '/education-technology-solutions',
          featured: true,
          icon: <GraduationCap className="w-6 h-6" />
        },
        {
          name: 'AI Education Platform',
          description: 'Intelligent learning systems and educational content platforms',
          href: '/ai-education-platform',
          icon: <Cpu className="w-6 h-6" />
        },
        {
          name: 'Training Solutions',
          description: 'Comprehensive training and development platforms',
          href: '/training',
          icon: <Users className="w-6 h-6" />
        }
      ]
    },
    {
      category: 'Sustainability & Energy',
      solutions: [
        {
          name: 'Energy & Utilities Solutions',
          description: 'Technology solutions for energy optimization and sustainability',
          href: '/energy-utilities-solutions',
          featured: true,
          icon: <Leaf className="w-6 h-6" />
        },
        {
          name: 'AI Sustainability Platform',
          description: 'AI-driven sustainability monitoring and optimization',
          href: '/ai-sustainability-platform',
          icon: <Globe className="w-6 h-6" />
        },
        {
          name: 'Quantum Energy Platform',
          description: 'Quantum computing solutions for energy optimization',
          href: '/quantum-energy-platform',
          icon: <Network className="w-6 h-6" />
        }
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Industry Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Tailored technology solutions designed specifically for your industry's unique challenges and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/demo"
                className="border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-md hover:bg-white/10"
              >
                Request Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From healthcare to manufacturing, we deliver specialized solutions that address your industry's unique needs.
            </p>
          </motion.div>

          <div className="space-y-16">
            {industrySolutions.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-white mb-8 text-center">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.solutions.map((solution, solutionIndex) => (
                    <motion.div
                      key={solution.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: solutionIndex * 0.1 }}
                      viewport={{ once: true }}
                      className={`bg-gradient-to-br from-gray-900/50 to-gray-800/50 border rounded-2xl p-6 backdrop-blur-sm hover:border-green-500/40 transition-all duration-300 ${
                        solution.featured ? 'border-green-500/30' : 'border-gray-700/50'
                      }`}
                    >
                      {solution.featured && (
                        <div className="flex items-center mb-4">
                          <Star className="w-5 h-5 text-yellow-400 mr-2" />
                          <span className="text-yellow-400 text-sm font-semibold">Featured</span>
                        </div>
                      )}
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                        {solution.icon}
                      </div>
                      <h4 className="text-xl font-bold text-white mb-3">{solution.name}</h4>
                      <p className="text-gray-300 mb-4 text-sm">{solution.description}</p>
                      <Link
                        href={solution.href}
                        className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors text-sm font-medium"
                      >
                        Learn More <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-900/20 to-emerald-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our industry-specific solutions can drive innovation and growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-300"
              >
                Start Your Transformation
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-md hover:bg-white/10"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default SolutionsPage;