import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { FileText, TrendingUp, Users, Globe, Rocket, Brain, Shield, Cpu } from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "AI-Powered Customer Service Transformation",
      company: "Global Retail Corporation",
      industry: "Retail",
      challenge: "High customer service costs and long response times",
      solution: "Implemented AI-powered chatbots and automated ticket routing",
      results: "40% reduction in support costs, 60% faster response times",
      icon: Brain,
      href: "/case-studies/ai-customer-service-retail"
    },
    {
      title: "Quantum Computing for Financial Modeling",
      company: "Investment Bank Ltd",
      industry: "Financial Services",
      challenge: "Complex risk calculations taking days to complete",
      solution: "Deployed quantum computing algorithms for portfolio optimization",
      results: "90% faster calculations, improved risk assessment accuracy",
      icon: Cpu,
      href: "/case-studies/quantum-financial-modeling"
    },
    {
      title: "Enterprise Security Overhaul",
      company: "Healthcare Provider Network",
      industry: "Healthcare",
      challenge: "Multiple security vulnerabilities and compliance gaps",
      solution: "Implemented zero-trust architecture and automated compliance monitoring",
      results: "100% compliance achievement, 80% reduction in security incidents",
      icon: Shield,
      href: "/case-studies/healthcare-security-overhaul"
    },
    {
      title: "Cloud Migration Success Story",
      company: "Manufacturing Conglomerate",
      industry: "Manufacturing",
      challenge: "Legacy systems limiting scalability and innovation",
      solution: "Multi-cloud migration with automated deployment pipelines",
      results: "50% cost reduction, 3x faster deployment cycles",
      icon: Rocket,
      href: "/case-studies/manufacturing-cloud-migration"
    },
    {
      title: "Data Analytics Revolution",
      company: "Logistics Company",
      industry: "Logistics",
      challenge: "Poor visibility into supply chain performance",
      solution: "Real-time analytics platform with predictive insights",
      results: "25% improvement in delivery times, 30% cost savings",
      icon: TrendingUp,
      href: "/case-studies/logistics-data-analytics"
    },
    {
      title: "Process Automation Implementation",
      company: "Insurance Provider",
      industry: "Insurance",
      challenge: "Manual claims processing causing delays and errors",
      solution: "End-to-end automation of claims workflow",
      results: "70% faster processing, 95% accuracy improvement",
      icon: Users,
      href: "/case-studies/insurance-process-automation"
    }
  ];

  const industries = [
    "All Industries",
    "Financial Services",
    "Healthcare",
    "Retail",
    "Manufacturing",
    "Logistics",
    "Technology"
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Case Studies
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Real-world examples of how our solutions transform businesses. 
                Discover the measurable impact of our technology implementations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Industry Filter */}
        <section className="py-10 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {industries.map((industry, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                    index === 0
                      ? 'bg-cyan-500 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700/50'
                  }`}
                >
                  {industry}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {caseStudies.map((study, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden group"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                        <study.icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <span className="text-sm text-cyan-400 font-medium">{study.industry}</span>
                        <div className="text-xs text-gray-400">{study.company}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h3>
                    
                    <div className="space-y-3 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-300 mb-1">Challenge</h4>
                        <p className="text-sm text-gray-400">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-300 mb-1">Solution</h4>
                        <p className="text-sm text-gray-400">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-300 mb-1">Results</h4>
                        <p className="text-sm text-gray-400">{study.results}</p>
                      </div>
                    </div>
                    
                    <a
                      href={study.href}
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group"
                    >
                      <span className="text-sm font-medium">Read Full Case Study</span>
                      <FileText className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let us help you achieve similar results with our proven solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border border-cyan-500 text-cyan-400 font-bold rounded-2xl hover:bg-cyan-500/10 transition-all duration-300"
                >
                  View Our Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}