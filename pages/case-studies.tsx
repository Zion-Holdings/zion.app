import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Users, Target, Award, Globe, 
  ArrowRight, Star, Shield, CheckCircle, TrendingUp,
  Infinity, Eye, Sparkles, Clock, Zap, Building,
  ChartBar, Rocket, Brain, Atom, Database, ShoppingBag
} from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const featuredCaseStudies = [
    {
      title: "Global Bank Digital Transformation",
      company: "Fortune 500 Financial Institution",
      industry: "Banking & Finance",
      challenge: "Legacy systems causing 40% slower transaction processing and security vulnerabilities",
      solution: "Implemented AI-powered fraud detection, quantum-resistant encryption, and cloud-native architecture",
      results: [
        "99.9% reduction in fraud attempts",
        "300% faster transaction processing",
        "$50M annual cost savings",
        "Zero security breaches in 2 years"
      ],
      technologies: ["AI/ML", "Quantum Security", "Cloud Migration", "Microservices"],
      color: "from-blue-500 to-cyan-500",
      icon: Building
    },
    {
      title: "Manufacturing AI Revolution",
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Production inefficiencies leading to 25% waste and quality control issues",
      solution: "Deployed AI-powered predictive maintenance, computer vision quality control, and autonomous robotics",
      results: [
        "85% reduction in production waste",
        "60% improvement in quality control",
        "40% increase in production efficiency",
        "$30M annual revenue increase"
      ],
      technologies: ["Computer Vision", "Predictive Analytics", "IoT", "Robotics"],
      color: "from-emerald-500 to-teal-500",
      icon: Rocket
    },
    {
      title: "Healthcare AI Platform",
      company: "Regional Healthcare Network",
      industry: "Healthcare",
      challenge: "Diagnostic accuracy at 78% and patient wait times averaging 3 hours",
      solution: "Built AI-powered diagnostic platform with quantum computing for medical imaging analysis",
      results: [
        "95% diagnostic accuracy improvement",
        "80% reduction in wait times",
        "30% faster treatment decisions",
        "10,000+ lives improved annually"
      ],
      technologies: ["AI Diagnostics", "Quantum Computing", "Medical Imaging", "Predictive Medicine"],
      color: "from-purple-500 to-pink-500",
      icon: Brain
    }
  ];

  const industryCaseStudies = [
    {
      industry: "Financial Services",
      icon: Building,
      color: "from-blue-500 to-cyan-500",
      studies: [
        { title: "Credit Risk Assessment AI", company: "Regional Bank", impact: "90% faster loan processing" },
        { title: "Blockchain Compliance Platform", company: "Investment Firm", impact: "100% regulatory compliance" },
        { title: "Fraud Detection System", company: "Credit Union", impact: "99.5% fraud prevention rate" }
      ]
    },
    {
      industry: "Healthcare",
      icon: Brain,
      color: "from-emerald-500 to-teal-500",
      studies: [
        { title: "Patient Data Analytics", company: "Hospital Network", impact: "40% improved patient outcomes" },
        { title: "Drug Discovery Platform", company: "Pharmaceutical Co", impact: "3x faster drug development" },
        { title: "Telemedicine AI", company: "Clinic Chain", impact: "60% reduced appointment no-shows" }
      ]
    },
    {
      industry: "Manufacturing",
      icon: Rocket,
      color: "from-purple-500 to-pink-500",
      studies: [
        { title: "Supply Chain Optimization", company: "Auto Manufacturer", impact: "50% inventory reduction" },
        { title: "Predictive Maintenance", company: "Industrial Corp", impact: "80% fewer equipment failures" },
        { title: "Quality Control AI", company: "Electronics Co", impact: "95% defect detection rate" }
      ]
    },
    {
      industry: "Retail & E-commerce",
      icon: ShoppingBag,
      color: "from-orange-500 to-red-500",
      studies: [
        { title: "Customer Personalization", company: "Online Retailer", impact: "45% increase in conversion" },
        { title: "Inventory Management", company: "Fashion Brand", impact: "30% reduction in stockouts" },
        { title: "Demand Forecasting", company: "Grocery Chain", impact: "25% improved profit margins" }
      ]
    }
  ];

  const successMetrics = [
    { metric: "500+", label: "Successful Implementations", icon: CheckCircle },
    { metric: "$2B+", label: "Client Value Generated", icon: TrendingUp },
    { metric: "99.9%", label: "Client Satisfaction Rate", icon: Star },
    { metric: "24/7", label: "Support Available", icon: Clock }
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
                <Sparkles className="w-4 h-4 mr-2" />
                Real Results
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                Case Studies
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Discover how organizations worldwide are achieving extraordinary results 
                with Zion Tech Group's revolutionary technology solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {successMetrics.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{item.metric}</div>
                  <div className="text-gray-300 text-sm md:text-base">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore detailed case studies showcasing transformative results across industries
              </p>
            </motion.div>

            <div className="space-y-12">
              {featuredCaseStudies.map((study, index) => (
                <motion.div
                  key={study.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="p-8 rounded-2xl bg-gray-900/50 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Left Column - Company Info */}
                      <div className="lg:col-span-1">
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${study.color} flex items-center justify-center mb-6`}>
                          <study.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">{study.title}</h3>
                        <div className="space-y-3 mb-6">
                          <div>
                            <span className="text-gray-400 text-sm">Company:</span>
                            <p className="text-white font-medium">{study.company}</p>
                          </div>
                          <div>
                            <span className="text-gray-400 text-sm">Industry:</span>
                            <p className="text-white font-medium">{study.industry}</p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-gray-800/50 text-cyan-400 rounded-full text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Middle Column - Challenge & Solution */}
                      <div className="lg:col-span-1">
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                            <Target className="w-5 h-5 text-red-400 mr-2" />
                            The Challenge
                          </h4>
                          <p className="text-gray-300 leading-relaxed">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                            <Sparkles className="w-5 h-5 text-cyan-400 mr-2" />
                            Our Solution
                          </h4>
                          <p className="text-gray-300 leading-relaxed">{study.solution}</p>
                        </div>
                      </div>

                      {/* Right Column - Results */}
                      <div className="lg:col-span-1">
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                          <ChartBar className="w-5 h-5 text-green-400 mr-2" />
                          Results Achieved
                        </h4>
                        <div className="space-y-3">
                          {study.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{result}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-6">
                          <a
                            href="/contact"
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                          >
                            Learn More <ArrowRight className="w-4 h-4 ml-2" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Case Studies */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Industry Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore case studies organized by industry to find relevant examples for your business
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {industryCaseStudies.map((industry, index) => (
                <motion.div
                  key={industry.industry}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="p-8 rounded-2xl bg-gray-900/50 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-6`}>
                      <industry.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-6">{industry.industry}</h3>
                    <div className="space-y-4">
                      {industry.studies.map((study, studyIndex) => (
                        <div key={studyIndex} className="p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                          <h4 className="text-lg font-semibold text-white mb-2">{study.title}</h4>
                          <p className="text-gray-400 text-sm mb-2">{study.company}</p>
                          <p className="text-cyan-400 text-sm font-medium">{study.impact}</p>
                        </div>
                      ))}
                    </div>
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
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of organizations that have transformed their business 
                with Zion Tech Group's revolutionary technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Journey <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  Explore Solutions <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CaseStudiesPage;