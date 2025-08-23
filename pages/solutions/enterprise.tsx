import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Building, Target, Shield, Cpu, Database, Cloud, 
  ArrowRight, Star, CheckCircle, TrendingUp, Users, Globe,
  Zap, Lock, BarChart3, Rocket, Brain, Atom, Server
} from 'lucide-react';

const EnterpriseSolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: "Enterprise AI & Machine Learning",
      description: "Scalable AI solutions designed for enterprise-scale operations and data processing",
      features: ["Custom AI Models", "Enterprise Data Integration", "Scalable Infrastructure", "AI Governance"],
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      href: "/services?category=ai-ml"
    },
    {
      title: "Quantum Enterprise Computing",
      description: "Next-generation quantum solutions for enterprise computational challenges",
      features: ["Quantum Security", "High-Performance Computing", "Quantum-Resistant Encryption", "Enterprise Integration"],
      icon: Atom,
      color: "from-blue-500 to-cyan-500",
      href: "/services?category=quantum"
    },
    {
      title: "Enterprise Cybersecurity",
      description: "Comprehensive security solutions protecting enterprise assets and data",
      features: ["Zero Trust Architecture", "Advanced Threat Detection", "Compliance Management", "24/7 Monitoring"],
      icon: Shield,
      color: "from-red-500 to-orange-500",
      href: "/services?category=cybersecurity"
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions optimized for enterprise workloads and performance",
      features: ["Multi-Cloud Strategy", "Auto-Scaling", "Cost Optimization", "Disaster Recovery"],
      icon: Cloud,
      color: "from-indigo-500 to-purple-500",
      href: "/services?category=cloud"
    },
    {
      title: "Data Analytics & Intelligence",
      description: "Enterprise-grade data solutions for insights and decision-making",
      features: ["Real-time Analytics", "Predictive Modeling", "Data Governance", "Business Intelligence"],
      icon: Database,
      color: "from-emerald-500 to-teal-500",
      href: "/services?category=data"
    },
    {
      title: "DevOps & Automation",
      description: "Streamlined development and operations for enterprise efficiency",
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Alerting", "Performance Optimization"],
      icon: Cpu,
      color: "from-yellow-500 to-orange-500",
      href: "/services?category=devops"
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Scalability",
      description: "Solutions that grow with your business needs",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Security",
      description: "Enterprise-grade security and compliance",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimized for maximum efficiency and speed",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Support",
      description: "24/7 expert support and maintenance",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const industries = [
    {
      name: "Financial Services",
      description: "Secure, compliant solutions for banking and fintech",
      icon: BarChart3,
      color: "from-emerald-500 to-teal-500"
    },
    {
      name: "Healthcare",
      description: "HIPAA-compliant technology solutions",
      icon: Users,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Manufacturing",
      description: "IoT and automation for smart manufacturing",
      icon: Cpu,
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Retail & E-commerce",
      description: "Omnichannel solutions for modern retail",
      icon: Globe,
      color: "from-purple-500 to-pink-500"
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
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
                <Building className="w-4 h-4 mr-2" />
                Enterprise Solutions
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                Enterprise Technology Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Transform your enterprise with cutting-edge technology solutions designed for scale, 
                security, and performance. From AI to quantum computing, we deliver the future of business technology.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comprehensive Enterprise Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our enterprise solutions are built for scale, designed for performance, 
                and engineered for the future of business technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 h-full">
                    <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${solution.color} p-1`}>
                      <div className="w-full h-full rounded-2xl bg-gray-800 flex items-center justify-center">
                        <solution.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{solution.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <a
                      href={solution.href}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group-hover:translate-x-1 transform duration-300"
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

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Enterprise Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Enterprise-grade technology solutions designed for the most demanding business environments.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  className="text-center group"
                >
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${benefit.color} p-1`}>
                      <div className="w-full h-full rounded-2xl bg-gray-800 flex items-center justify-center">
                        <benefit.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Industry Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tailored technology solutions for specific industry challenges and requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 text-center">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${industry.color} p-1`}>
                      <div className="w-full h-full rounded-2xl bg-gray-800 flex items-center justify-center">
                        <industry.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{industry.name}</h3>
                    <p className="text-gray-300 leading-relaxed">{industry.description}</p>
                  </div>
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Enterprise?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our enterprise solutions can drive innovation, 
                efficiency, and growth for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  View All Services
                  <Rocket className="w-5 h-5 ml-2" />
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