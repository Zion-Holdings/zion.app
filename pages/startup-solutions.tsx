import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Rocket, Zap, TrendingUp, Users, Globe, Shield, Brain, Cpu } from 'lucide-react';

export default function StartupSolutions() {
  const features = [
    {
      icon: Rocket,
      title: "Rapid Scaling",
      description: "Solutions designed to grow with your startup from day one"
    },
    {
      icon: Zap,
      title: "Cost Effective",
      description: "Affordable pricing that fits startup budgets and growth plans"
    },
    {
      icon: TrendingUp,
      title: "Growth Focused",
      description: "Technology that accelerates your startup's growth trajectory"
    },
    {
      icon: Users,
      title: "Team Friendly",
      description: "Easy-to-use tools that your entire team can adopt quickly"
    },
    {
      icon: Globe,
      title: "Global Ready",
      description: "Built to scale globally from the start"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Enterprise-grade security without enterprise complexity"
    }
  ];

  const solutions = [
    {
      title: "AI-Powered MVP",
      href: "/ai-powered-mvp",
      description: "Build intelligent MVPs with AI capabilities from day one"
    },
    {
      title: "Startup Cloud Platform",
      href: "/startup-cloud-platform",
      description: "Scalable cloud infrastructure designed for startups"
    },
    {
      title: "Growth Analytics",
      href: "/growth-analytics",
      description: "Data-driven insights to fuel your startup's growth"
    },
    {
      title: "Customer Acquisition",
      href: "/customer-acquisition",
      description: "AI-powered tools to acquire and retain customers"
    },
    {
      title: "Team Collaboration",
      href: "/team-collaboration",
      description: "Collaboration tools that scale with your team"
    },
    {
      title: "Funding Preparation",
      href: "/funding-preparation",
      description: "Technology solutions that make you investor-ready"
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
                Startup Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Technology solutions designed specifically for startups. 
                Scale fast, stay lean, and build the future with our startup-focused platform.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Startup Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive solutions designed for startup success
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((solution, index) => (
                <motion.a
                  key={index}
                  href={solution.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 hover:bg-gray-700/50 transition-all duration-300 group"
                >
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-300">{solution.description}</p>
                  <div className="mt-4 flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <span className="text-sm">Learn More</span>
                    <Rocket className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Scale Your Startup?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our startup experts help you build and scale your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
                <a
                  href="/solutions"
                  className="px-8 py-4 border border-cyan-500 text-cyan-400 font-bold rounded-2xl hover:bg-cyan-500/10 transition-all duration-300"
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