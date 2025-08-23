import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Rocket, Target, Users, TrendingUp, 
  ArrowRight, Star, CheckCircle, Zap,
  Infinity, Eye, Sparkles, Clock, DollarSign,
  Cloud, Shield, BarChart3, Lightbulb
} from 'lucide-react';

const StartupSolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: Rocket,
      title: "MVP Development",
      description: "Fast-track your product to market with rapid MVP development",
      features: ["Rapid prototyping", "User feedback integration", "Iterative development", "Cost-effective solutions"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Cloud,
      title: "Scalable Infrastructure",
      description: "Cloud solutions that grow with your startup",
      features: ["Auto-scaling", "Pay-as-you-grow", "High availability", "Cost optimization"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Startup Security",
      description: "Essential security without enterprise complexity",
      features: ["Basic compliance", "Data protection", "Secure authentication", "Threat prevention"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: BarChart3,
      title: "Growth Analytics",
      description: "Data-driven insights to accelerate your growth",
      features: ["User analytics", "Performance metrics", "Growth tracking", "A/B testing"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Fast Deployment",
      description: "Get to market quickly with rapid development"
    },
    {
      icon: DollarSign,
      title: "Cost Effective",
      description: "Solutions designed for startup budgets"
    },
    {
      icon: TrendingUp,
      title: "Scalable",
      description: "Grow without technical debt"
    },
    {
      icon: Users,
      title: "Startup Focused",
      description: "Built for startup challenges and needs"
    }
  ];

  const stages = [
    {
      phase: "Ideation",
      description: "Validate your concept with market research and prototyping",
      services: ["Market research", "Concept validation", "MVP planning"]
    },
    {
      phase: "Development",
      description: "Build your product with modern, scalable technology",
      services: ["Full-stack development", "Cloud infrastructure", "Security implementation"]
    },
    {
      phase: "Launch",
      description: "Deploy and optimize for user acquisition",
      services: ["Deployment", "Performance optimization", "Analytics setup"]
    },
    {
      phase: "Scale",
      description: "Grow your user base and optimize operations",
      services: ["Scaling infrastructure", "Advanced analytics", "Process automation"]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
                <Rocket className="w-4 h-4 mr-2" />
                Startup Solutions
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                Startup Technology Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Accelerate your startup's growth with technology solutions designed for speed, 
                scalability, and success. Built for founders who move fast and think big.
              </p>
            </motion.div>
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
                Technology solutions that understand startup challenges and accelerate growth
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${solution.color} mb-6`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{solution.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center group">
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Growth Stages Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Solutions for Every Growth Stage
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From idea to scale, we support your startup's journey
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stages.map((stage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6 text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-4">
                    <span className="text-2xl font-bold text-purple-400">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{stage.phase}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{stage.description}</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {stage.services.map((service, serviceIndex) => (
                      <li key={serviceIndex}>• {service}</li>
                    ))}
                  </ul>
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
                Why Startups Choose Zion Tech Group
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We understand startup challenges and deliver solutions that drive growth
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
                    <benefit.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
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
                Let's build the technology foundation that will scale your startup to success
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center group">
                  Start Building
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button className="border border-gray-600 hover:border-purple-500 text-gray-300 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300">
                  Free Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default StartupSolutionsPage;