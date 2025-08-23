import React from 'react';
import { motion } from 'framer-motion';
import { Award, TrendingUp, Users, Globe, Brain, Rocket, Target, CheckCircle, Shield } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function CaseStudies() {
  const caseStudies = [
    {
      icon: <Brain className="w-12 h-12 text-cyan-400" />,
      title: "AI-Powered Healthcare Transformation",
      description: "How a major hospital system improved patient outcomes by 40% using our AI diagnostic platform",
      industry: "Healthcare",
      results: "40% improvement in patient outcomes",
      href: "/case-studies/healthcare-ai-transformation"
    },
    {
      icon: <Rocket className="w-12 h-12 text-blue-400" />,
      title: "Startup Scale Acceleration",
      description: "A fintech startup achieved 10x growth in 18 months with our automation solutions",
      industry: "Fintech",
      results: "10x growth in 18 months",
      href: "/case-studies/fintech-startup-scale"
    },
    {
      icon: <Shield className="w-12 h-12 text-purple-400" />,
      title: "Government Security Modernization",
      description: "Federal agency implemented zero-trust security architecture reducing threats by 85%",
      industry: "Government",
      results: "85% reduction in security threats",
      href: "/case-studies/government-security"
    },
    {
      icon: <Globe className="w-12 h-12 text-green-400" />,
      title: "Enterprise Cloud Migration",
      description: "Global manufacturing company reduced IT costs by 60% with multi-cloud infrastructure",
      industry: "Manufacturing",
      results: "60% reduction in IT costs",
      href: "/case-studies/enterprise-cloud-migration"
    },
    {
      icon: <Target className="w-12 h-12 text-yellow-400" />,
      title: "AI Content Automation Success",
      description: "Marketing agency increased content production by 300% using our AI platform",
      industry: "Marketing",
      results: "300% increase in content production",
      href: "/case-studies/ai-content-automation"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-pink-400" />,
      title: "Data Analytics Transformation",
      description: "Retail chain improved decision-making speed by 5x with advanced analytics",
      industry: "Retail",
      results: "5x faster decision-making",
      href: "/case-studies/retail-analytics"
    }
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
                Discover how organizations across industries are transforming their businesses 
                with our cutting-edge technology solutions and achieving remarkable results.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className="p-8 bg-black/40 border border-gray-800 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 group cursor-pointer"
                  onClick={() => window.location.href = study.href}
                >
                  <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {study.icon}
                  </div>
                  <div className="text-center mb-4">
                    <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                      {study.industry}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 text-center">{study.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-center mb-4">{study.description}</p>
                  <div className="text-center">
                    <div className="text-cyan-400 font-semibold text-lg">{study.results}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Write Your Success Story?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let us help you achieve similar results with our proven technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
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