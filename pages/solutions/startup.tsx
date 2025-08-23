import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Rocket, Zap, Target, TrendingUp, 
  ArrowRight, Star, CheckCircle, Clock,
  Infinity, Eye, Sparkles, Users, Brain,
  Atom, Shield, Cpu, Cloud, DollarSign, Lightbulb
} from 'lucide-react';

const StartupSolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: Rocket,
      title: "Startup Growth Platform",
      description: "Accelerate your startup's growth with AI-powered tools and automation",
      features: ["AI Growth Hacking", "Customer Acquisition", "Market Analysis", "Performance Tracking"],
      color: "from-orange-500 to-red-500",
      href: "/startup-growth-platform"
    },
    {
      icon: Brain,
      title: "AI Startup Suite",
      description: "Cutting-edge AI solutions designed for startup innovation and efficiency",
      features: ["AI Product Development", "Automated Operations", "Intelligent Analytics", "Scalable AI Infrastructure"],
      color: "from-purple-500 to-pink-500",
      href: "/ai-startup-suite"
    },
    {
      icon: Cloud,
      title: "Startup Cloud Infrastructure",
      description: "Cost-effective cloud solutions that scale with your startup",
      features: ["Pay-as-you-grow", "Auto-scaling", "Cost Optimization", "Quick Deployment"],
      color: "from-blue-500 to-cyan-500",
      href: "/startup-cloud-infrastructure"
    },
    {
      icon: Shield,
      title: "Startup Security Essentials",
      description: "Essential security solutions for startup protection and compliance",
      features: ["Basic Security Setup", "Compliance Assistance", "Threat Protection", "Security Training"],
      color: "from-green-500 to-emerald-500",
      href: "/startup-security-essentials"
    },
    {
      icon: Zap,
      title: "Startup Automation Tools",
      description: "Automate repetitive tasks and focus on what matters most",
      features: ["Workflow Automation", "Process Optimization", "Time Savings", "Error Reduction"],
      color: "from-yellow-500 to-orange-500",
      href: "/startup-automation-tools"
    },
    {
      icon: Target,
      title: "Startup Analytics Platform",
      description: "Data-driven insights to make informed business decisions",
      features: ["Real-time Analytics", "User Behavior Tracking", "Performance Metrics", "Growth Insights"],
      color: "from-indigo-500 to-purple-500",
      href: "/startup-analytics-platform"
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Cost Effective",
      description: "Solutions designed for startup budgets"
    },
    {
      icon: Zap,
      title: "Fast Implementation",
      description: "Quick setup and deployment"
    },
    {
      icon: TrendingUp,
      title: "Scalable Growth",
      description: "Grow with your business needs"
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "Cutting-edge technology solutions"
    }
  ];

  const stats = [
    { number: "1000+", label: "Startups Served", icon: Rocket },
    { number: "90%", label: "Growth Rate", icon: TrendingUp },
    { number: "48hrs", label: "Setup Time", icon: Clock },
    { number: "24/7", label: "Support Available", icon: Users }
  ];

  const startupStages = [
    {
      stage: "Idea Stage",
      description: "Validate your concept and build MVP",
      solutions: ["AI Market Research", "Prototype Development", "User Testing Tools"]
    },
    {
      stage: "Launch Stage",
      description: "Get to market quickly and efficiently",
      solutions: ["Cloud Infrastructure", "Security Setup", "Analytics Platform"]
    },
    {
      stage: "Growth Stage",
      description: "Scale operations and expand market reach",
      solutions: ["AI Automation", "Customer Success Tools", "Performance Optimization"]
    },
    {
      stage: "Scale Stage",
      description: "Prepare for enterprise-level operations",
      solutions: ["Advanced AI Solutions", "Enterprise Security", "Global Infrastructure"]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 text-orange-300 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Startup Solutions
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Startup Technology Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Accelerate your startup's success with cutting-edge AI, cloud infrastructure, 
                and automation solutions designed for rapid growth and innovation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl mb-4">
                    <stat.icon className="w-8 h-8 text-orange-400" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Startup Stages Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Solutions for Every Startup Stage
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From idea to scale, we have the right solutions for your startup's journey.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {startupStages.map((stage, index) => (
                <motion.div
                  key={stage.stage}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300"
                >
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl mb-4">
                      <span className="text-orange-400 font-bold text-lg">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{stage.stage}</h3>
                    <p className="text-gray-300 text-sm">{stage.description}</p>
                  </div>
                  
                  <ul className="space-y-2">
                    {stage.solutions.map((solution, solutionIndex) => (
                      <li key={solutionIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-3 h-3 text-orange-400 mr-2 flex-shrink-0" />
                        {solution}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Startup-Focused Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our solutions are specifically designed for startups, with rapid deployment, 
                cost-effectiveness, and scalability in mind.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${solution.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{solution.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-orange-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href={solution.href}
                    className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors duration-300 group-hover:translate-x-1"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Startups Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We understand the unique challenges startups face and provide solutions that drive success.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-10 h-10 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Accelerate Your Startup?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our startup solutions can help you grow faster and smarter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-2xl hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Startup Quote <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border-2 border-orange-500 text-orange-400 font-semibold rounded-2xl hover:bg-orange-500 hover:text-white transition-all duration-300"
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

export default StartupSolutionsPage;