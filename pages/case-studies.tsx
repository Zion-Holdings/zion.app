import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  FileText, 
  BarChart3, 
  TrendingUp, 
  Users, 
  Building, 
  Heart, 
  DollarSign, 
  Cpu,
  CheckCircle,
  ArrowRight,
  Star,
  Sparkles,
  Globe,
  Shield,
  Cloud,
  Brain
} from 'lucide-react';

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      title: "AI-Powered Healthcare Transformation",
      company: "Global Healthcare Network",
      industry: "Healthcare",
      challenge: "Complex patient data management and diagnostic accuracy",
      solution: "AI consciousness platform with quantum-secured data processing",
      results: [
        "40% improvement in diagnostic accuracy",
        "60% reduction in data processing time",
        "99.9% data security compliance",
        "Enhanced patient outcomes and satisfaction"
      ],
      icon: Heart,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Quantum Financial Trading Platform",
      company: "International Investment Bank",
      industry: "Financial Services",
      challenge: "Real-time market analysis and risk assessment",
      solution: "Quantum AI trading platform with autonomous decision making",
      results: [
        "25% increase in trading performance",
        "90% faster risk assessment",
        "Zero security breaches",
        "Scalable to global markets"
      ],
      icon: DollarSign,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Autonomous Manufacturing Optimization",
      company: "Advanced Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Production inefficiency and quality control",
      solution: "AI autonomous business orchestrator with edge computing",
      results: [
        "35% increase in production efficiency",
        "50% reduction in defects",
        "24/7 autonomous operation",
        "Predictive maintenance optimization"
      ],
      icon: Cpu,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Enterprise Security Transformation",
      company: "Fortune 500 Technology Company",
      industry: "Technology",
      challenge: "Advanced cyber threats and compliance requirements",
      solution: "Zero Trust Quantum Network with AI consciousness",
      results: [
        "100% threat detection rate",
        "Zero false positives",
        "Complete compliance achievement",
        "Real-time security monitoring"
      ],
      icon: Shield,
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Cloud Infrastructure Revolution",
      company: "Global E-commerce Platform",
      industry: "E-commerce",
      challenge: "Scalability and performance during peak traffic",
      solution: "Quantum Cloud Hybrid Platform with autonomous scaling",
      results: [
        "10x performance improvement",
        "99.99% uptime guarantee",
        "Automatic scaling during peaks",
        "50% cost reduction"
      ],
      icon: Cloud,
      color: "from-orange-500 to-yellow-500"
    },
    {
      title: "Content Creation Automation",
      company: "Digital Marketing Agency",
      industry: "Marketing",
      challenge: "High-volume content creation with quality standards",
      solution: "Autonomous Content Creation Suite with AI consciousness",
      results: [
        "10x faster content production",
        "Consistent brand voice",
        "SEO optimization automation",
        "Multi-language support"
      ],
      icon: Brain,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const industries = [
    "Healthcare", "Financial Services", "Manufacturing", "Technology", 
    "E-commerce", "Marketing", "Education", "Government"
  ];

  const metrics = [
    { number: "500+", label: "Successful Implementations", icon: CheckCircle },
    { number: "99.9%", label: "Client Satisfaction Rate", icon: Star },
    { number: "40%", label: "Average Performance Improvement", icon: TrendingUp },
    { number: "24/7", label: "Support Availability", icon: Users }
  ];

  return (
    <Layout
      title="Case Studies - Zion Tech Group"
      description="Explore real-world success stories and implementations of our revolutionary AI consciousness, quantum computing, and autonomous technology solutions."
      keywords="case studies, success stories, implementations, AI consciousness, quantum computing, autonomous technology, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <FileText className="w-4 h-4 mr-2" />
                Success Stories
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Real-World
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Success Stories
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Discover how our revolutionary technology solutions are transforming businesses 
                across industries with AI consciousness, quantum computing, and autonomous operations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <metric.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{metric.number}</div>
                  <div className="text-gray-300 text-sm">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Case Studies
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Real implementations with measurable results across diverse industries
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${study.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <study.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{study.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span className="flex items-center">
                          <Building className="w-4 h-4 mr-1" />
                          {study.company}
                        </span>
                        <span className="flex items-center">
                          <Globe className="w-4 h-4 mr-1" />
                          {study.industry}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-blue-400 mb-2">Challenge</h4>
                      <p className="text-gray-300 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-green-400 mb-2">Solution</h4>
                      <p className="text-gray-300 text-sm">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-purple-400 mb-2">Results</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-start space-x-2 text-sm">
                            <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our solutions are transforming businesses across diverse sectors
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 rounded-lg p-4 text-center hover:bg-white/10 transition-all duration-300"
                >
                  <span className="text-blue-400 text-sm font-medium">{industry}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the hundreds of organizations already transforming their operations with our technology
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                  Start Your Journey
                </button>
                <button className="px-8 py-4 border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CaseStudies;