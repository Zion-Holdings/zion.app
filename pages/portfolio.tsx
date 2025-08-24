import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Brain, Shield, Rocket, Cpu, Database, Globe, 
  Users, Target, Star, CheckCircle, TrendingUp, Zap, ExternalLink
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function PortfolioPage() {
  const featuredProjects = [
    {
      title: "AI-Powered Financial Analytics Platform",
      client: "Global Investment Bank",
      industry: "Financial Services",
      description: "Developed a comprehensive AI platform that analyzes market data in real-time, providing predictive insights for investment decisions. The system processes millions of data points daily and delivers actionable recommendations.",
      technologies: ["Machine Learning", "Real-time Analytics", "Cloud Infrastructure", "API Integration"],
      results: [
        "40% improvement in investment decision accuracy",
        "60% reduction in analysis time",
        "25% increase in portfolio returns",
        "Real-time market monitoring capabilities"
      ],
      image: "/portfolio/financial-analytics.jpg",
      category: "AI & Machine Learning",
      duration: "6 months",
      teamSize: "12 engineers"
    },
    {
      title: "Quantum-Resistant Cybersecurity System",
      client: "Healthcare Technology Company",
      industry: "Healthcare",
      description: "Implemented a comprehensive cybersecurity solution using quantum-resistant encryption algorithms. The system protects sensitive patient data and ensures compliance with HIPAA and other healthcare regulations.",
      technologies: ["Quantum Cryptography", "Zero-Trust Architecture", "AI Threat Detection", "Compliance Management"],
      results: [
        "99.99% security uptime guarantee",
        "Zero security breaches in 18 months",
        "Full HIPAA compliance achieved",
        "90% reduction in threat response time"
      ],
      image: "/portfolio/cybersecurity.jpg",
      category: "Cybersecurity",
      duration: "8 months",
      teamSize: "15 specialists"
    },
    {
      title: "Satellite Data Optimization Platform",
      client: "Agricultural Technology Firm",
      industry: "Agriculture",
      description: "Built a platform that processes satellite imagery to provide farmers with real-time insights about crop health, soil conditions, and weather patterns. The system helps optimize agricultural practices and increase yields.",
      technologies: ["Satellite Imagery Processing", "Machine Learning", "IoT Integration", "Mobile Applications"],
      results: [
        "30% increase in crop yields",
        "25% reduction in water usage",
        "Real-time monitoring of 50,000+ acres",
        "Predictive analytics for weather events"
      ],
      image: "/portfolio/satellite-agriculture.jpg",
      category: "Space Technology",
      duration: "10 months",
      teamSize: "18 engineers"
    }
  ];

  const caseStudies = [
    {
      title: "Digital Transformation for Manufacturing",
      client: "Automotive Manufacturer",
      industry: "Manufacturing",
      challenge: "Legacy systems were slowing down production and increasing costs. The company needed to modernize their operations while maintaining production continuity.",
      solution: "Implemented a comprehensive digital transformation including IoT sensors, predictive maintenance, and AI-powered quality control systems.",
      results: [
        "45% reduction in production downtime",
        "35% improvement in product quality",
        "20% reduction in operational costs",
        "Real-time production monitoring"
      ],
      technologies: ["IoT", "Predictive Analytics", "Cloud Computing", "AI Quality Control"],
      image: "/portfolio/manufacturing.jpg"
    },
    {
      title: "Edge Computing for Retail",
      client: "National Retail Chain",
      industry: "Retail",
      challenge: "The retail chain needed to process customer data in real-time to provide personalized experiences while ensuring data privacy and security.",
      solution: "Deployed edge computing infrastructure across 500+ locations with AI-powered customer analytics and real-time inventory management.",
      results: [
        "35% increase in customer satisfaction",
        "25% improvement in inventory accuracy",
        "Real-time customer personalization",
        "Enhanced data security and privacy"
      ],
      technologies: ["Edge Computing", "AI Analytics", "Real-time Processing", "Data Privacy"],
      image: "/portfolio/retail-edge.jpg"
    },
    {
      title: "AI Research Assistant Platform",
      client: "Research Institution",
      industry: "Education & Research",
      challenge: "Researchers needed a tool to accelerate literature reviews, data analysis, and hypothesis generation across multiple disciplines.",
      solution: "Developed an autonomous AI research assistant that can analyze scientific papers, identify patterns, and suggest research directions.",
      results: [
        "80% reduction in literature review time",
        "Discovery of 15+ new research connections",
        "Automated data analysis capabilities",
        "Cross-disciplinary research insights"
      ],
      technologies: ["Natural Language Processing", "Machine Learning", "Knowledge Graphs", "Automated Analysis"],
      image: "/portfolio/ai-research.jpg"
    }
  ];

  const industries = [
    {
      name: "Financial Services",
      projects: 25,
      description: "AI-powered analytics, risk assessment, and fraud detection systems",
      icon: TrendingUp
    },
    {
      name: "Healthcare",
      projects: 18,
      description: "Patient data security, medical imaging AI, and healthcare analytics",
      icon: Shield
    },
    {
      name: "Manufacturing",
      projects: 22,
      description: "IoT integration, predictive maintenance, and quality control systems",
      icon: Cpu
    },
    {
      name: "Retail & E-commerce",
      projects: 20,
      description: "Customer analytics, inventory optimization, and personalized experiences",
      icon: Users
    },
    {
      name: "Agriculture",
      projects: 12,
      description: "Satellite monitoring, precision farming, and crop optimization",
      icon: Globe
    },
    {
      name: "Education & Research",
      projects: 15,
      description: "AI research tools, educational platforms, and data analysis systems",
      icon: Brain
    }
  ];

  const technologies = [
    { name: "Machine Learning & AI", count: 45, icon: Brain },
    { name: "Cybersecurity", count: 38, icon: Shield },
    { name: "Cloud Computing", count: 42, icon: Globe },
    { name: "IoT & Edge Computing", count: 28, icon: Cpu },
    { name: "Data Analytics", count: 35, icon: Database },
    { name: "Space Technology", count: 15, icon: Rocket }
  ];

  return (
    <>
      <Head>
        <title>Our Portfolio - Zion Tech Group</title>
        <meta name="description" content="Explore our portfolio of successful technology implementations across industries. See how we've transformed businesses with AI, cybersecurity, space technology, and more." />
        <meta name="keywords" content="portfolio, case studies, projects, AI implementations, cybersecurity solutions, space technology, Zion Tech Group" />
        <meta property="og:title" content="Our Portfolio - Zion Tech Group" />
        <meta property="og:description" content="Explore our portfolio of successful technology implementations across industries." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/portfolio" />
      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}Portfolio
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-8">
              Discover how we've transformed businesses across industries with cutting-edge technology solutions. 
              From AI-powered analytics to quantum cybersecurity, our projects demonstrate the real-world impact 
              of innovative technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#featured"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105"
              >
                View Projects
              </a>
              <a
                href="#case-studies"
                className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200"
              >
                Read Case Studies
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-4xl font-bold text-slate-900 mb-2">150+</div>
              <div className="text-slate-600">Projects Completed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-slate-900 mb-2">25+</div>
              <div className="text-slate-600">Industries Served</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-slate-900 mb-2">98%</div>
              <div className="text-slate-600">Client Satisfaction</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-4xl font-bold text-slate-900 mb-2">500+</div>
              <div className="text-slate-600">Happy Clients</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="featured" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Featured Projects</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Highlighting some of our most impactful and innovative technology implementations.
            </p>
          </motion.div>

          <div className="space-y-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-8 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ExternalLink className="w-10 h-10" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-blue-100">{project.client}</p>
                      <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm mt-3">
                        {project.industry}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="mb-6">
                      <p className="text-slate-600 leading-relaxed mb-4">{project.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                        <div>
                          <span className="font-medium text-slate-700">Category:</span>
                          <p className="text-slate-600">{project.category}</p>
                        </div>
                        <div>
                          <span className="font-medium text-slate-700">Duration:</span>
                          <p className="text-slate-600">{project.duration}</p>
                        </div>
                        <div>
                          <span className="font-medium text-slate-700">Team Size:</span>
                          <p className="text-slate-600">{project.teamSize}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-900 mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">Key Results:</h4>
                      <ul className="space-y-2">
                        {project.results.map((result, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-slate-600">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Case Studies</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Deep dives into how we solved complex business challenges with innovative technology solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-8 hover:bg-slate-100 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3">{study.title}</h3>
                <div className="mb-4">
                  <span className="text-sm font-medium text-blue-600">{study.client}</span>
                  <span className="text-slate-400 mx-2">•</span>
                  <span className="text-sm text-slate-600">{study.industry}</span>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Challenge:</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{study.challenge}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Solution:</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{study.solution}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Results:</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="text-sm text-slate-600 flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech) => (
                      <span key={tech} className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Industries We Serve</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Our expertise spans across diverse industries, delivering tailored solutions for unique business challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{industry.name}</h3>
                <p className="text-white/70 mb-4 leading-relaxed">{industry.description}</p>
                <div className="text-2xl font-bold text-blue-400">{industry.projects}+ Projects</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Technologies We Master</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Cutting-edge technologies that power our innovative solutions and drive business transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-8 text-center hover:bg-slate-100 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{tech.name}</h3>
                <div className="text-3xl font-bold text-blue-600">{tech.count}+ Projects</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how we can help transform your business with cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105"
              >
                Get Started Today
              </a>
              <a
                href="/contact"
                className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200"
              >
                Schedule Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </>
  );
}