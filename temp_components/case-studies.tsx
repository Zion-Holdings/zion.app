import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Brain, Shield, Rocket, Cpu, Database, Atom, Target, Star, 
  Sparkles, Zap, Users, Award, Clock, CheckCircle, Globe, Code, Server,
  ChevronRight, ExternalLink, TrendingUp, BarChart3, Cloud, Network,
  DollarSign, ChartBar, Target as TargetIcon, Lightbulb
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Business Intelligence Transformation",
      client: "Fortune 500 Financial Services",
      industry: "Financial Services",
      challenge: "The client struggled with siloed data systems, manual reporting processes, and limited real-time insights, resulting in delayed decision-making and missed opportunities.",
      solution: "Implemented our AI-powered Business Intelligence platform that unified data sources, automated reporting, and provided real-time predictive analytics.",
      results: [
        "300% increase in data processing speed",
        "40% reduction in decision-making time",
        "99.9% accuracy in predictive analytics",
        "$2.5M annual cost savings",
        "Real-time dashboard access for 500+ users"
      ],
      technologies: ["Python", "TensorFlow", "AWS", "PostgreSQL", "React", "D3.js"],
      duration: "6 months",
      team: "8 engineers",
      image: "/api/placeholder/600/400",
      category: "AI & Machine Learning"
    },
    {
      id: 2,
      title: "Quantum Cybersecurity Implementation",
      client: "Government Defense Agency",
      industry: "Government & Defense",
      challenge: "Critical infrastructure faced increasing cyber threats from quantum computing attacks, requiring future-proof security solutions that could withstand next-generation attacks.",
      solution: "Deployed our Quantum Cybersecurity Framework with quantum-resistant encryption, AI-powered threat detection, and zero-trust architecture.",
      results: [
        "Zero security breaches in 2 years",
        "Quantum-resistant encryption implemented",
        "Real-time threat detection and response",
        "99.99% uptime guarantee met",
        "Compliance with all security standards"
      ],
      technologies: ["Quantum Algorithms", "Rust", "WebAssembly", "Docker", "Kubernetes"],
      duration: "8 months",
      team: "12 engineers",
      image: "/api/placeholder/600/400",
      category: "Cybersecurity"
    },
    {
      id: 3,
      title: "Edge Computing Orchestration Platform",
      client: "Global IoT Network Provider",
      industry: "IoT & Telecommunications",
      challenge: "Managing 10,000+ edge nodes across multiple continents with varying network conditions and resource constraints, leading to inconsistent performance and high operational costs.",
      solution: "Built intelligent edge computing orchestration platform that optimized application deployment, resource allocation, and real-time monitoring across distributed infrastructure.",
      results: [
        "50% reduction in latency",
        "80% improvement in resource utilization",
        "Scalable to 10,000+ edge nodes",
        "30% reduction in operational costs",
        "99.9% uptime across all nodes"
      ],
      technologies: ["Go", "Kubernetes", "Edge Computing", "IoT", "Machine Learning"],
      duration: "10 months",
      team: "15 engineers",
      image: "/api/placeholder/600/400",
      category: "Edge Computing"
    },
    {
      id: 4,
      title: "Space Technology Innovation Hub",
      client: "Space Exploration Corporation",
      industry: "Space & Aerospace",
      challenge: "Complex space missions required autonomous decision-making, real-time satellite optimization, and advanced resource discovery capabilities that traditional systems couldn't provide.",
      solution: "Developed comprehensive space technology platform combining AI, quantum computing, and advanced robotics for autonomous space exploration and resource management.",
      results: [
        "Autonomous mission planning implemented",
        "Real-time satellite optimization",
        "Advanced resource discovery algorithms",
        "Mission success rate increased to 95%",
        "Reduced mission planning time by 60%"
      ],
      technologies: ["AI/ML", "Quantum Computing", "Robotics", "Satellite Systems", "Python"],
      duration: "12 months",
      team: "20 engineers",
      image: "/api/placeholder/600/400",
      category: "Space Technology"
    },
    {
      id: 5,
      title: "Neural Interface Development Kit",
      client: "Medical Research Institute",
      industry: "Healthcare & Research",
      challenge: "Researchers needed advanced tools to develop brain-computer interfaces for medical applications, requiring sophisticated signal processing and pattern recognition capabilities.",
      solution: "Created comprehensive neural interface development kit with advanced signal processing, machine learning algorithms, and real-time neural feedback systems.",
      results: [
        "10x faster signal processing",
        "99.5% accuracy in pattern recognition",
        "Real-time neural feedback",
        "Enabled 15+ research projects",
        "Published 8 peer-reviewed papers"
      ],
      technologies: ["Neural Networks", "Signal Processing", "Machine Learning", "C++", "Python"],
      duration: "9 months",
      team: "10 engineers",
      image: "/api/placeholder/600/400",
      category: "Neural Interfaces"
    },
    {
      id: 6,
      title: "Autonomous DevOps Platform",
      client: "Tech Startup Accelerator",
      industry: "Technology & Startups",
      challenge: "Multiple startups struggled with manual deployment processes, inconsistent environments, and lack of automated testing, leading to deployment failures and development delays.",
      solution: "Built AI-powered DevOps platform that automated the entire software development lifecycle, from code review to deployment and monitoring.",
      results: [
        "90% reduction in deployment time",
        "Zero-downtime deployments",
        "Automated incident response",
        "99.9% deployment success rate",
        "50% reduction in development cycle time"
      ],
      technologies: ["AI/ML", "Docker", "Kubernetes", "CI/CD", "Monitoring"],
      duration: "7 months",
      team: "12 engineers",
      image: "/api/placeholder/600/400",
      category: "DevOps"
    }
  ];

  const categories = ["All", "AI & Machine Learning", "Cybersecurity", "Edge Computing", "Space Technology", "Neural Interfaces", "DevOps"];
  const industries = ["All", "Financial Services", "Government & Defense", "IoT & Telecommunications", "Space & Aerospace", "Healthcare & Research", "Technology & Startups"];
  
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [selectedIndustry, setSelectedIndustry] = React.useState("All");

  const filteredCaseStudies = caseStudies.filter(study => {
    const categoryMatch = selectedCategory === "All" || study.category === selectedCategory;
    const industryMatch = selectedIndustry === "All" || study.industry === selectedIndustry;
    return categoryMatch && industryMatch;
  });

  const stats = [
    { number: "500+", label: "Projects Delivered", icon: CheckCircle },
    { number: "50+", label: "Enterprise Clients", icon: Users },
    { number: "99.9%", label: "Success Rate", icon: Star },
    { number: "$100M+", label: "Value Delivered", icon: DollarSign }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <Head>
        <title>Case Studies - Zion Tech Group | Real Results from Revolutionary Technology Solutions</title>
        <meta name="description" content="Explore real-world case studies showcasing how Zion Tech Group's AI, quantum computing, and cybersecurity solutions deliver measurable results for clients." />
        <meta property="og:title" content="Case Studies - Zion Tech Group" />
        <meta property="og:description" content="Real results from revolutionary technology solutions." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="case studies, client success, AI solutions, quantum computing, cybersecurity, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/case-studies" />
      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
              Case Studies
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
              Real results from revolutionary technology solutions that transform businesses and industries
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex flex-wrap justify-center gap-2">
                <span className="text-white/60 text-sm font-medium">Category:</span>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                        : 'bg-white/5 border border-white/20 text-white/80 hover:bg-white/10 hover:border-white/40'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              <span className="text-white/60 text-sm font-medium">Industry:</span>
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setSelectedIndustry(industry)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedIndustry === industry
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'bg-white/5 border border-white/20 text-white/80 hover:bg-white/10 hover:border-white/40'
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCaseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                {/* Header */}
                <div className="p-6 border-b border-white/10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full mb-3">
                        {study.category}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                        {study.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-white/60">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>{study.client}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Globe className="w-4 h-4" />
                          <span>{study.industry}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Challenge */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <TargetIcon className="w-5 h-5 text-red-400" />
                      The Challenge
                    </h4>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-yellow-400" />
                      Our Solution
                    </h4>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {study.solution}
                    </p>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-green-400" />
                      Results & Impact
                    </h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-white/70">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Project Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-white/5 rounded-xl border border-white/10">
                    <div>
                      <div className="text-xs text-white/60 mb-1">Duration</div>
                      <div className="text-sm text-white font-medium">{study.duration}</div>
                    </div>
                    <div>
                      <div className="text-xs text-white/60 mb-1">Team Size</div>
                      <div className="text-sm text-white font-medium">{study.team}</div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white/60 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-white/5 text-white/70 text-xs rounded-md border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex space-x-3">
                    <button className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-white text-center transition-all duration-300 transform hover:scale-105">
                      View Full Case Study
                    </button>
                    <button className="px-4 py-2 border border-white/20 hover:border-white/40 rounded-lg text-white/80 hover:text-white transition-all duration-300">
                      Download PDF
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredCaseStudies.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/5 flex items-center justify-center">
                <TargetIcon className="w-10 h-10 text-white/40" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No Case Studies Found</h3>
              <p className="text-white/60 mb-6">
                Try adjusting your filters to see more case studies.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSelectedIndustry("All");
                }}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-white transition-all duration-300"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-3xl border border-white/10 p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Achieve Similar Results?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how our revolutionary technology solutions can transform your business and deliver measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/services"
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10"
              >
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}
