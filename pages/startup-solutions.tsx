import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Zap, Brain, Users, Target, Award, Globe, Shield, Cpu, TrendingUp } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function StartupSolutions() {
  const solutions = [
    {
      icon: Rocket,
      title: 'MVP Development',
      description: 'Rapid MVP development to validate your startup idea',
      features: ['Quick prototyping', 'User feedback', 'Iterative development', 'Cost optimization'],
      href: '/mvp-development'
    },
    {
      icon: Zap,
      title: 'Startup Automation',
      description: 'Automate key processes to scale your startup efficiently',
      features: ['Process automation', 'Workflow optimization', 'Resource management', 'Growth scaling'],
      href: '/startup-automation'
    },
    {
      icon: Brain,
      title: 'AI-Powered Growth',
      description: 'Leverage AI to accelerate your startup growth',
      features: ['Growth analytics', 'Customer insights', 'Marketing automation', 'Performance optimization'],
      href: '/ai-powered-growth'
    },
    {
      icon: Users,
      title: 'Startup HR Solutions',
      description: 'Build and manage your startup team effectively',
      features: ['Talent acquisition', 'Performance management', 'Culture building', 'Scalable processes'],
      href: '/startup-hr-solutions'
    },
    {
      icon: Target,
      title: 'Market Entry Strategy',
      description: 'Strategic guidance for entering new markets',
      features: ['Market research', 'Competitive analysis', 'Entry planning', 'Risk assessment'],
      href: '/market-entry-strategy'
    },
    {
      icon: Award,
      title: 'Funding Preparation',
      description: 'Prepare your startup for funding and investment',
      features: ['Financial modeling', 'Pitch deck creation', 'Investor relations', 'Due diligence prep'],
      href: '/funding-preparation'
    }
  ];

  const stats = [
    { number: '100+', label: 'Startups Helped', icon: Rocket },
    { number: '90%', label: 'Success Rate', icon: Target },
    { number: '24/7', label: 'Support', icon: Users },
    { number: '50+', label: 'Industries', icon: Globe }
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
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-400 via-rose-500 to-red-400 bg-clip-text text-transparent mb-6">
                Startup Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Accelerate your startup growth with our innovative solutions. 
                From MVP development to AI-powered growth strategies.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-pink-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Startup Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive solutions designed to accelerate startup growth and success
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <a href={solution.href} className="block">
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full hover:bg-gray-700/50 transition-all duration-300 hover:scale-105">
                      <div className="w-16 h-16 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <solution.icon className="w-8 h-8 text-pink-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{solution.title}</h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">{solution.description}</p>
                      <ul className="space-y-2">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400">
                            <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Launch Your Startup Success
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our startup experts help you build and scale your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-rose-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
                <a
                  href="/solutions"
                  className="px-8 py-4 border border-pink-500 text-pink-400 font-semibold rounded-xl hover:bg-pink-500/10 transition-all duration-300"
                >
                  View All Solutions
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}