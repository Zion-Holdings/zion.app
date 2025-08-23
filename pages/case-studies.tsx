import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  TrendingUp, 
  Users, 
  Clock, 
  Target, 
  CheckCircle, 
  ArrowRight,
  Star,
  Zap,
  Globe,
  Shield,
  Rocket,
  Brain,
  Database,
  Cloud,
  Lock
} from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const featuredCaseStudies = [
    {
      id: 1,
      title: "Global Bank Digital Transformation",
      company: "Fortune 500 Financial Institution",
      industry: "Banking & Finance",
      challenge: "Legacy system modernization and AI-powered fraud detection implementation",
      solution: "Implemented quantum-resistant security, AI fraud detection, and cloud-native architecture",
      results: [
        "99.9% fraud detection accuracy",
        "60% reduction in operational costs",
        "3x faster transaction processing",
        "Zero security breaches in 2 years"
      ],
      metrics: {
        revenueIncrease: "45%",
        costReduction: "60%",
        efficiencyGain: "300%",
        timeToMarket: "70%"
      },
      technologies: ["AI/ML", "Quantum Security", "Cloud Native", "Blockchain"],
      image: "/api/placeholder/600/400",
      slug: "global-bank-digital-transformation"
    },
    {
      id: 2,
      title: "Healthcare AI Platform Revolution",
      company: "Leading Healthcare Network",
      industry: "Healthcare",
      challenge: "Patient data analysis and predictive diagnostics across 50+ hospitals",
      solution: "AI-powered diagnostic platform with quantum computing for complex medical imaging",
      results: [
        "95% diagnostic accuracy improvement",
        "40% reduction in diagnosis time",
        "Real-time patient monitoring",
        "Predictive health insights"
      ],
      metrics: {
        revenueIncrease: "35%",
        costReduction: "45%",
        efficiencyGain: "250%",
        timeToMarket: "80%"
      },
      technologies: ["AI/ML", "Quantum Computing", "IoT", "Big Data"],
      image: "/api/placeholder/600/400",
      slug: "healthcare-ai-platform-revolution"
    },
    {
      id: 3,
      title: "Manufacturing AI Automation",
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Production line optimization and predictive maintenance across 15 facilities",
      solution: "AI-powered predictive maintenance and autonomous quality control systems",
      results: [
        "85% reduction in downtime",
        "30% increase in production efficiency",
        "Predictive maintenance accuracy: 92%",
        "Zero quality-related recalls"
      ],
      metrics: {
        revenueIncrease: "55%",
        costReduction: "40%",
        efficiencyGain: "400%",
        timeToMarket: "65%"
      },
      technologies: ["AI/ML", "IoT", "Predictive Analytics", "Robotics"],
      image: "/api/placeholder/600/400",
      slug: "manufacturing-ai-automation"
    }
  ];

  const industryCaseStudies = [
    {
      industry: "Financial Services",
      count: 12,
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
      description: "Digital transformation and AI-powered financial solutions"
    },
    {
      industry: "Healthcare",
      count: 8,
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      description: "AI diagnostics and patient care optimization"
    },
    {
      industry: "Manufacturing",
      count: 15,
      icon: Target,
      color: "from-orange-500 to-red-500",
      description: "Smart manufacturing and predictive maintenance"
    },
    {
      industry: "Retail & E-commerce",
      count: 10,
      icon: Globe,
      color: "from-purple-500 to-pink-500",
      description: "Customer experience and supply chain optimization"
    },
    {
      industry: "Technology",
      count: 18,
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      description: "AI platforms and cloud infrastructure"
    },
    {
      industry: "Government",
      count: 6,
      icon: Shield,
      color: "from-indigo-500 to-purple-500",
      description: "Digital government and cybersecurity solutions"
    }
  ];

  const successMetrics = [
    {
      metric: "Average Revenue Increase",
      value: "42%",
      description: "Across all client implementations",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500"
    },
    {
      metric: "Cost Reduction",
      value: "51%",
      description: "Average operational cost savings",
      icon: Target,
      color: "from-blue-500 to-cyan-500"
    },
    {
      metric: "Efficiency Gain",
      value: "320%",
      description: "Average productivity improvement",
      icon: Zap,
      color: "from-purple-500 to-pink-500"
    },
    {
      metric: "Client Satisfaction",
      value: "98%",
      description: "Based on post-implementation surveys",
      icon: Star,
      color: "from-yellow-500 to-orange-500"
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
                <CheckCircle className="w-4 h-4 mr-2" />
                Success Stories
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                Case Studies
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Discover how Zion Tech Group has transformed businesses across industries 
                with revolutionary AI, quantum computing, and automation solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Success Metrics Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Proven Results
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our solutions consistently deliver measurable business impact across all industries.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {successMetrics.map((item, index) => (
                <motion.div
                  key={item.metric}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center mx-auto mb-4`}>
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{item.value}</div>
                  <div className="text-lg font-semibold text-cyan-400 mb-2">{item.metric}</div>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Case Studies Section */}
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
                Real-world examples of how our revolutionary technology solutions drive business transformation.
              </p>
            </motion.div>

            <div className="space-y-12">
              {featuredCaseStudies.map((study, index) => (
                <motion.article
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-gray-800/50 border border-gray-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="p-8 lg:p-12">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">
                          {study.industry}
                        </span>
                        <span className="text-gray-400 text-sm">{study.company}</span>
                      </div>
                      
                      <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                        {study.title}
                      </h3>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-cyan-400 mb-2">Challenge</h4>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-cyan-400 mb-2">Solution</h4>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-cyan-400 mb-2">Key Results</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, idx) => (
                            <li key={idx} className="flex items-center text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-cyan-400 mb-2">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600/50"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <Link
                        href={`/case-studies/${study.slug}`}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                      >
                        Read Full Case Study
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                    </div>
                    
                    <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8 lg:p-12">
                      <div className="mb-8">
                        <h4 className="text-2xl font-bold text-white mb-6">Impact Metrics</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
                            <div className="text-2xl font-bold text-cyan-400">{study.metrics.revenueIncrease}</div>
                            <div className="text-sm text-gray-400">Revenue Increase</div>
                          </div>
                          <div className="text-center p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
                            <div className="text-2xl font-bold text-green-400">{study.metrics.costReduction}</div>
                            <div className="text-sm text-gray-400">Cost Reduction</div>
                          </div>
                          <div className="text-center p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
                            <div className="text-2xl font-bold text-purple-400">{study.metrics.efficiencyGain}</div>
                            <div className="text-sm text-gray-400">Efficiency Gain</div>
                          </div>
                          <div className="text-center p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
                            <div className="text-2xl font-bold text-orange-400">{study.metrics.timeToMarket}</div>
                            <div className="text-sm text-gray-400">Faster Time to Market</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <CheckCircle className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-gray-400">Success Story</p>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Solutions Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Industry Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore case studies and success stories across different industries and sectors.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industryCaseStudies.map((industry, index) => (
                <motion.div
                  key={industry.industry}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:bg-gray-800/70">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${industry.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <industry.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{industry.industry}</h3>
                    <p className="text-gray-400 mb-4">{industry.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-cyan-400 font-medium">{industry.count} case studies</span>
                      <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        <span className="text-sm font-medium">Explore</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
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
              <p className="text-xl text-gray-300 mb-8">
                Join the hundreds of companies that have transformed their business with Zion Tech Group's revolutionary solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Transformation
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-2xl hover:bg-cyan-500 hover:text-black transition-all duration-300"
                >
                  Explore Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CaseStudiesPage;