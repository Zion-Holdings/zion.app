import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Rocket, Users, Target, Zap, Brain, Atom, Shield, 
  ArrowRight, CheckCircle, Star, TrendingUp, Globe, 
  Cpu, Database, Cloud, Lock, DollarSign, Lightbulb
} from 'lucide-react';

const StartupSolutionsPage: React.FC = () => {
  const startupSolutions = [
    {
      title: "AI-Powered Growth Platform",
      description: "Scalable AI solutions to accelerate startup growth and market penetration",
      features: [
        "Customer behavior analysis",
        "Predictive market insights",
        "Automated marketing optimization",
        "Growth hacking tools"
      ],
      icon: <Brain className="w-8 h-8" />,
      category: "AI & Growth",
      pricing: "Starting at $99/month"
    },
    {
      title: "Quantum-Ready Infrastructure",
      description: "Future-proof cloud infrastructure with quantum computing capabilities",
      features: [
        "Scalable cloud hosting",
        "Quantum-ready APIs",
        "Auto-scaling resources",
        "Cost optimization"
      ],
      icon: <Atom className="w-8 h-8" />,
      category: "Infrastructure",
      pricing: "Starting at $49/month"
    },
    {
      title: "Startup Security Suite",
      description: "Comprehensive security solutions designed for growing businesses",
      features: [
        "Threat detection",
        "Compliance automation",
        "Secure authentication",
        "Data protection"
      ],
      icon: <Shield className="w-8 h-8" />,
      category: "Cybersecurity",
      pricing: "Starting at $79/month"
    },
    {
      title: "Autonomous DevOps Platform",
      description: "AI-powered development and deployment automation",
      features: [
        "Automated testing",
        "Continuous deployment",
        "Performance monitoring",
        "Error tracking"
      ],
      icon: <Cpu className="w-8 h-8" />,
      category: "DevOps",
      pricing: "Starting at $69/month"
    },
    {
      title: "Business Intelligence Dashboard",
      description: "Real-time insights and analytics for data-driven decisions",
      features: [
        "Custom dashboards",
        "Real-time analytics",
        "Automated reporting",
        "KPI tracking"
      ],
      icon: <Target className="w-8 h-8" />,
      category: "Analytics",
      pricing: "Starting at $59/month"
    },
    {
      title: "Customer Success Automation",
      description: "AI-powered customer engagement and retention platform",
      features: [
        "Automated onboarding",
        "Proactive support",
        "Customer health scoring",
        "Retention analytics"
      ],
      icon: <Users className="w-8 h-8" />,
      category: "Customer Success",
      pricing: "Starting at $89/month"
    }
  ];

  const benefits = [
    {
      title: "Scalable",
      description: "Grow with your business needs",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Affordable",
      description: "Startup-friendly pricing",
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      title: "Fast Setup",
      description: "Get started in minutes",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Expert Support",
      description: "Dedicated startup support",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const startupStages = [
    {
      stage: "Ideation",
      solutions: ["AI Market Research", "Prototype Development", "MVP Testing"],
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      stage: "Launch",
      solutions: ["Growth Platform", "Security Suite", "Analytics Dashboard"],
      icon: <Rocket className="w-6 h-6" />
    },
    {
      stage: "Scale",
      solutions: ["Enterprise Infrastructure", "Advanced AI", "Global Expansion"],
      icon: <Globe className="w-6 h-6" />
    }
  ];

  return (
    <Layout 
      title="Startup Solutions - Zion Tech Group"
      description="Accelerate your startup's growth with Zion Tech Group's scalable AI, quantum computing, and autonomous technology solutions."
      keywords="startup solutions, AI growth platform, quantum infrastructure, startup technology, scalable solutions, Zion Tech Group"
    >
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-cyan-400 mb-6">
                <Rocket className="w-20 h-20 mx-auto" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Startup Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Accelerate your startup's growth with revolutionary AI consciousness, 
                quantum computing, and autonomous technology solutions designed for scale.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#solutions" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center space-x-2">
                  <span>Explore Solutions</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="/contact" className="border border-cyan-500/50 text-cyan-400 px-8 py-3 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                  Get Started
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Startup Stages */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Solutions for Every Stage
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From ideation to scale, we have solutions designed for each phase 
                of your startup journey.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {startupStages.map((stage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 text-center hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="text-cyan-400 mb-6 flex justify-center">
                    {stage.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {stage.stage}
                  </h3>
                  <div className="space-y-3">
                    {stage.solutions.map((solution, solutionIndex) => (
                      <div key={solutionIndex} className="text-gray-300">
                        {solution}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section id="solutions" className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Startup Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Affordable, scalable technology solutions designed specifically 
                for startups and growing businesses.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {startupSolutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="text-cyan-400 mb-4">
                    {solution.icon}
                  </div>
                  <span className="inline-block bg-cyan-500/20 text-cyan-300 text-xs px-3 py-1 rounded-full border border-cyan-500/30 mb-4">
                    {solution.category}
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {solution.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mb-4">
                    <span className="text-cyan-400 font-semibold">
                      {solution.pricing}
                    </span>
                  </div>
                  <a
                    href="/contact"
                    className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Startup Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how other startups have accelerated their growth with our solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Star className="w-6 h-6 text-yellow-400" />
                  <span className="text-yellow-400 font-semibold">TechStart AI</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  "10x Growth in 6 Months"
                </h3>
                <p className="text-gray-300 mb-4">
                  "Zion Tech Group's AI growth platform helped us scale from 100 to 10,000 users 
                  in just 6 months. The automated insights and optimization tools were game-changing."
                </p>
                <div className="text-sm text-gray-400">
                  - Sarah Chen, CEO & Co-founder
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Star className="w-6 h-6 text-yellow-400" />
                  <span className="text-yellow-400 font-semibold">QuantumFlow</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  "Future-Proof Infrastructure"
                </h3>
                <p className="text-gray-300 mb-4">
                  "Their quantum-ready infrastructure gave us a competitive edge. We're now 
                  positioned to leverage quantum computing as it becomes mainstream."
                </p>
                <div className="text-sm text-gray-400">
                  - Marcus Rodriguez, CTO
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Accelerate Your Growth?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join hundreds of startups that are already leveraging our revolutionary 
                technology to gain competitive advantages and scale faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/solutions"
                  className="border border-cyan-500/50 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300"
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
};

export default StartupSolutionsPage;