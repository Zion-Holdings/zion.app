import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Clock, 
  Target, 
  ArrowRight, 
  Star,
  Brain,
  Atom,
  Rocket,
  Shield,
  Cloud,
  Zap,
  CheckCircle,
  Globe,
  Building,
  BarChart3
} from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: "AI-Powered Customer Intelligence Platform",
      client: "Fortune 500 Retail Corporation",
      industry: "Retail & E-commerce",
      challenge: "The client needed to understand customer behavior across multiple channels and predict purchasing patterns to increase sales and customer retention.",
      solution: "We developed a comprehensive AI platform that analyzes customer interactions, purchase history, and browsing behavior to provide personalized recommendations and predictive insights.",
      results: [
        "35% increase in customer engagement",
        "28% improvement in conversion rates",
        "42% reduction in customer churn",
        "$12M additional annual revenue"
      ],
      technologies: ["AI/ML", "Big Data", "Cloud Computing", "Real-time Analytics"],
      duration: "6 months",
      team: "8 developers",
      featured: true
    },
    {
      title: "Quantum-Safe Cybersecurity Infrastructure",
      client: "Global Financial Institution",
      industry: "Financial Services",
      challenge: "The client required a future-proof cybersecurity solution that could withstand quantum computing attacks while maintaining high performance for critical financial transactions.",
      solution: "We implemented a hybrid quantum-resistant cryptography system with post-quantum algorithms, ensuring security against both classical and quantum threats.",
      results: [
        "100% quantum-resistant security",
        "Zero security breaches in 18 months",
        "15% faster transaction processing",
        "Compliance with all regulatory requirements"
      ],
      technologies: ["Quantum Cryptography", "Post-Quantum Algorithms", "Zero Trust Security", "Blockchain"],
      duration: "8 months",
      team: "12 developers",
      featured: true
    },
    {
      title: "Space Resource Intelligence Platform",
      client: "Space Mining Corporation",
      industry: "Space Technology",
      challenge: "The client needed to identify and analyze potential mining sites on asteroids and other celestial bodies for rare earth elements and valuable minerals.",
      solution: "We developed an AI-powered platform that processes satellite data, spectral analysis, and orbital mechanics to identify optimal mining locations and calculate resource potential.",
      results: [
        "85% accuracy in resource identification",
        "40% reduction in exploration costs",
        "3 new viable mining sites discovered",
        "$50M potential resource value identified"
      ],
      technologies: ["AI/ML", "Satellite Data Processing", "Spectral Analysis", "Orbital Mechanics"],
      duration: "10 months",
      team: "15 developers",
      featured: false
    },
    {
      title: "Autonomous DevOps Platform",
      client: "Technology Startup",
      industry: "Software Development",
      challenge: "The client needed to automate their entire development pipeline from code commit to production deployment, reducing manual errors and deployment time.",
      solution: "We built an intelligent DevOps platform that automatically handles testing, security scanning, deployment, and monitoring with self-healing capabilities.",
      results: [
        "90% reduction in deployment time",
        "99.9% deployment success rate",
        "75% reduction in manual errors",
        "24/7 autonomous operation"
      ],
      technologies: ["DevOps Automation", "AI/ML", "Kubernetes", "CI/CD", "Monitoring"],
      duration: "4 months",
      team: "6 developers",
      featured: false
    },
    {
      title: "AI Content Personalization Engine",
      client: "Media Streaming Platform",
      industry: "Entertainment & Media",
      challenge: "The client wanted to increase user engagement by providing highly personalized content recommendations based on individual preferences and viewing patterns.",
      solution: "We developed an advanced AI engine that analyzes user behavior, content metadata, and contextual information to deliver personalized recommendations in real-time.",
      results: [
        "45% increase in user engagement",
        "32% improvement in content discovery",
        "28% longer viewing sessions",
        "95% user satisfaction rate"
      ],
      technologies: ["AI/ML", "Real-time Processing", "Big Data", "Recommendation Systems"],
      duration: "5 months",
      team: "10 developers",
      featured: false
    },
    {
      title: "Quantum Neural Network Platform",
      client: "Research Institution",
      industry: "Academic Research",
      challenge: "The client needed to accelerate complex scientific simulations and machine learning tasks that were computationally intensive for classical computers.",
      solution: "We built a hybrid quantum-classical neural network platform that leverages quantum computing for specific calculations while maintaining classical computing for other operations.",
      results: [
        "1000x faster computation for specific tasks",
        "Breakthrough in protein folding simulation",
        "New research papers published",
        "International recognition and awards"
      ],
      technologies: ["Quantum Computing", "Neural Networks", "Hybrid Systems", "Scientific Computing"],
      duration: "12 months",
      team: "20 developers",
      featured: false
    }
  ];

  const industries = [
    { name: "All Industries", count: caseStudies.length, active: true },
    { name: "Financial Services", count: 1, active: false },
    { name: "Retail & E-commerce", count: 1, active: false },
    { name: "Space Technology", count: 1, active: false },
    { name: "Software Development", count: 1, active: false },
    { name: "Entertainment & Media", count: 1, active: false },
    { name: "Academic Research", count: 1, active: false }
  ];

  const stats = [
    { label: "Projects Completed", value: "150+", icon: CheckCircle },
    { label: "Client Satisfaction", value: "98%", icon: Star },
    { label: "Average ROI", value: "340%", icon: TrendingUp },
    { label: "Countries Served", value: "25+", icon: Globe }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Case <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Studies</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Real-world examples of how our cutting-edge technology solutions have transformed 
                businesses and delivered measurable results across industries.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Filter */}
        <section className="py-12 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {industries.map((industry, index) => (
                <button
                  key={industry.name}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    industry.active
                      ? 'bg-cyan-500 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {industry.name} ({industry.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Featured Success Stories
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Our most impactful projects that demonstrate the transformative power of our technology
              </p>
            </motion.div>
            
            <div className="space-y-12">
              {caseStudies.filter(study => study.featured).map((study, index) => (
                <motion.div
                  key={study.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-sm font-medium">
                          {study.industry}
                        </span>
                        <span className="text-sm text-gray-400">{study.duration}</span>
                      </div>
                      
                      <h3 className="text-3xl font-bold text-white mb-4">
                        {study.title}
                      </h3>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-2">Client</h4>
                        <p className="text-gray-300">{study.client}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-2">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-gray-700 text-cyan-400 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-1">
                      <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-lg p-6 border border-cyan-500/30">
                        <h4 className="text-lg font-semibold text-white mb-4">Results</h4>
                        <div className="space-y-3">
                          {study.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="flex items-center space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{result}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-6 pt-6 border-t border-cyan-500/30">
                          <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                            <span>Project Duration</span>
                            <span>{study.duration}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm text-gray-400">
                            <span>Team Size</span>
                            <span>{study.team}</span>
                          </div>
                        </div>
                        
                        <button className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                          View Full Case Study
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All Case Studies Grid */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                All Case Studies
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Explore our complete portfolio of successful implementations
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.article
                  key={study.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-700 text-cyan-400 text-xs font-medium">
                        {study.industry}
                      </span>
                      <span className="text-xs text-gray-400">{study.duration}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {study.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                      {study.challenge}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Results:</h4>
                      <div className="space-y-1">
                        {study.results.slice(0, 2).map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-3 h-3 text-green-400" />
                            <span className="text-xs text-gray-400">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">{study.client}</span>
                      <a
                        href={`/case-studies/${study.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors duration-300"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-500/30"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our cutting-edge technology solutions can transform your business 
                and deliver measurable results like the ones you've seen here.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Start Your Project
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  <Building className="w-5 h-5 mr-2" />
                  Explore Services
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