import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  Building, Heart, Factory, Shield, 
  GraduationCap, ShoppingCart, Globe,
  ArrowRight, Zap, Target, Users,
  TrendingUp, Lock, Cpu, Database
} from 'lucide-react';

export default function Industries() {
  const industries = [
    {
      title: "Banking & Finance",
      icon: Building,
      color: "from-blue-500 to-cyan-500",
      description: "Revolutionize financial services with AI-powered solutions for banking, insurance, and fintech",
      challenges: [
        "Regulatory compliance complexity",
        "Fraud detection and prevention",
        "Customer experience optimization",
        "Risk management and assessment"
      ],
      solutions: [
        "AI-Powered Risk Assessment",
        "Fraud Detection Systems",
        "Regulatory Compliance Automation",
        "Customer Behavior Analytics"
      ],
      stats: ["30% fraud reduction", "50% faster processing", "99.9% compliance rate"]
    },
    {
      title: "Healthcare & Life Sciences",
      icon: Heart,
      color: "from-red-500 to-pink-500",
      description: "Transform patient care and medical research with cutting-edge technology solutions",
      challenges: [
        "Patient data security and privacy",
        "Diagnostic accuracy and speed",
        "Drug discovery efficiency",
        "Healthcare cost optimization"
      ],
      solutions: [
        "AI Diagnostic Tools",
        "Drug Discovery Platforms",
        "Patient Data Analytics",
        "Medical Imaging Analysis"
      ],
      stats: ["40% faster diagnosis", "Improved patient outcomes", "25% cost reduction"]
    },
    {
      title: "Manufacturing & Industry 4.0",
      icon: Factory,
      color: "from-green-500 to-emerald-500",
      description: "Smart manufacturing solutions for the modern industrial revolution and automation",
      challenges: [
        "Predictive maintenance",
        "Quality control automation",
        "Supply chain optimization",
        "Energy efficiency management"
      ],
      solutions: [
        "IoT Integration Platforms",
        "Predictive Maintenance Systems",
        "Quality Control Automation",
        "Supply Chain Optimization"
      ],
      stats: ["25% efficiency increase", "Reduced downtime", "Lower operational costs"]
    },
    {
      title: "Government & Public Sector",
      icon: Shield,
      color: "from-purple-500 to-indigo-500",
      description: "Modernize government operations with secure, scalable digital transformation solutions",
      challenges: [
        "Digital transformation",
        "Cybersecurity threats",
        "Citizen service delivery",
        "Process automation"
      ],
      solutions: [
        "Digital Government Platforms",
        "Cybersecurity Solutions",
        "Citizen Service Portals",
        "Process Automation Systems"
      ],
      stats: ["Improved efficiency", "Enhanced security", "Better citizen experience"]
    },
    {
      title: "Education & Research",
      icon: GraduationCap,
      color: "from-yellow-500 to-orange-500",
      description: "Empower learning and research with intelligent technology platforms and analytics",
      challenges: [
        "Personalized learning delivery",
        "Research data management",
        "Student performance tracking",
        "Collaboration enhancement"
      ],
      solutions: [
        "AI-Powered Learning Platforms",
        "Research Data Analytics",
        "Student Performance Tracking",
        "Virtual Learning Environments"
      ],
      stats: ["Personalized learning", "Improved research outcomes", "Enhanced collaboration"]
    },
    {
      title: "Retail & E-commerce",
      icon: ShoppingCart,
      color: "from-pink-500 to-rose-500",
      description: "Drive growth and customer satisfaction with intelligent retail and e-commerce solutions",
      challenges: [
        "Customer behavior analysis",
        "Inventory optimization",
        "Personalized marketing",
        "Supply chain management"
      ],
      solutions: [
        "Customer Analytics Platforms",
        "Inventory Optimization Systems",
        "Personalized Marketing Tools",
        "Supply Chain Management"
      ],
      stats: ["Increased sales", "Better customer experience", "Operational efficiency"]
    }
  ];

  const capabilities = [
    {
      title: "AI & Machine Learning",
      description: "Advanced algorithms and models for intelligent automation and decision-making",
      icon: Cpu
    },
    {
      title: "Cybersecurity",
      description: "Enterprise-grade security solutions to protect your digital assets",
      icon: Lock
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions for modern business needs",
      icon: Database
    },
    {
      title: "Data Analytics",
      description: "Comprehensive data analysis and business intelligence solutions",
      icon: TrendingUp
    }
  ];

  return (
    <Layout>
      <div className="text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Industries We Serve
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Deep industry expertise combined with cutting-edge technology to solve your sector's 
                unique challenges and drive transformation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                  Explore Industries
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Industries Overview */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Industry Expertise</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                We understand the unique challenges and opportunities in each industry sector
              </p>
            </motion.div>

            <div className="space-y-16">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 0 ? '' : 'lg:grid-flow-col-dense'
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={index % 2 === 0 ? '' : 'lg:col-start-2'}>
                    <div className={`w-20 h-20 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <industry.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4 text-white">{industry.title}</h3>
                    <p className="text-xl text-gray-300 mb-6">{industry.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Challenges:</h4>
                      <ul className="space-y-2">
                        {industry.challenges.map((challenge) => (
                          <li key={challenge} className="flex items-center text-gray-300">
                            <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Our Solutions:</h4>
                      <ul className="space-y-2">
                        {industry.solutions.map((solution) => (
                          <li key={solution} className="flex items-center text-gray-300">
                            <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Expected Results:</h4>
                      <div className="flex flex-wrap gap-2">
                        {industry.stats.map((stat) => (
                          <span key={stat} className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm">
                            {stat}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10 ${
                    index % 2 === 0 ? 'lg:col-start-2' : ''
                  }`}>
                    <div className="text-center">
                      <div className={`w-32 h-32 bg-gradient-to-br ${industry.color} rounded-3xl mx-auto mb-6 flex items-center justify-center opacity-20`}>
                        <industry.icon className="w-16 h-16 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-4">Industry Expertise</h4>
                      <p className="text-gray-400 mb-4">
                        Our team has deep experience in {industry.title.toLowerCase()} and understands 
                        the unique challenges and opportunities in your sector.
                      </p>
                      <div className="flex justify-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                          <Users className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Core Capabilities</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Technology expertise that spans across all industries
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  className="flex items-start space-x-4 p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <capability.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{capability.title}</h3>
                    <p className="text-gray-400">{capability.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ready to Transform Your Industry?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Let's discuss how our industry expertise and technology solutions can address your 
                unique challenges and drive unprecedented growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  Start Your Transformation
                </button>
                <button className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  View Case Studies
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}