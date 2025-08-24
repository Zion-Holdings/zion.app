import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  ArrowRight, CheckCircle, Code, Github, ExternalLink as ExternalLinkIcon
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "AI-Powered Business Intelligence Platform",
      description: "Revolutionary business intelligence platform that uses AI to transform raw data into actionable insights, helping enterprises make data-driven decisions in real-time.",
      category: "AI & Machine Learning",
      client: "Fortune 500 Financial Services",
      technologies: ["React", "Python", "TensorFlow", "AWS", "PostgreSQL"],
      image: "/api/placeholder/600/400",
      link: "https://ziontechgroup.com/ai-business-intelligence",
      github: "https://github.com/ziontechgroup/ai-bi-platform",
      results: ["300% increase in data processing speed", "40% reduction in decision-making time", "99.9% accuracy in predictive analytics"]
    },
    {
      id: 2,
      title: "Quantum Cybersecurity Framework",
      description: "Next-generation cybersecurity solution that leverages quantum computing principles to create unbreakable encryption and advanced threat detection systems.",
      category: "Cybersecurity",
      client: "Government Defense Agency",
      technologies: ["Quantum Algorithms", "Rust", "WebAssembly", "Docker", "Kubernetes"],
      image: "/api/placeholder/600/400",
      link: "https://ziontechgroup.com/quantum-cybersecurity",
      github: "https://github.com/ziontechgroup/quantum-cyber",
      results: ["Zero security breaches in 2 years", "Quantum-resistant encryption", "Real-time threat detection"]
    },
    {
      id: 3,
      title: "Edge Computing Orchestration Platform",
      description: "Intelligent edge computing platform that optimizes application deployment and management across distributed infrastructure for maximum performance and efficiency.",
      category: "Edge Computing",
      client: "Global IoT Network Provider",
      technologies: ["Go", "Kubernetes", "Edge Computing", "IoT", "Machine Learning"],
      image: "/api/placeholder/600/400",
      link: "https://ziontechgroup.com/edge-computing-orchestration",
      github: "https://github.com/ziontechgroup/edge-orchestrator",
      results: ["50% reduction in latency", "80% improvement in resource utilization", "Scalable to 10,000+ edge nodes"]
    },
    {
      id: 4,
      title: "Space Technology Innovation Hub",
      description: "Cutting-edge space technology platform that combines AI, quantum computing, and advanced robotics for autonomous space exploration and resource management.",
      category: "Space Technology",
      client: "Space Exploration Corporation",
      technologies: ["AI/ML", "Quantum Computing", "Robotics", "Satellite Systems", "Python"],
      image: "/api/placeholder/600/400",
      link: "https://ziontechgroup.com/space-technology",
      github: "https://github.com/ziontechgroup/space-innovation",
      results: ["Autonomous mission planning", "Real-time satellite optimization", "Advanced resource discovery"]
    },
    {
      id: 5,
      title: "Neural Interface Development Kit",
      description: "Revolutionary brain-computer interface development platform that enables researchers and developers to create next-generation neural interfaces.",
      category: "Neural Interfaces",
      client: "Medical Research Institute",
      technologies: ["Neural Networks", "Signal Processing", "Machine Learning", "C++", "Python"],
      image: "/api/placeholder/600/400",
      link: "https://ziontechgroup.com/neural-interface",
      github: "https://github.com/ziontechgroup/neural-interface",
      results: ["10x faster signal processing", "99.5% accuracy in pattern recognition", "Real-time neural feedback"]
    },
    {
      id: 6,
      title: "Autonomous DevOps Platform",
      description: "AI-powered DevOps platform that automates the entire software development lifecycle, from code review to deployment and monitoring.",
      category: "DevOps",
      client: "Tech Startup Accelerator",
      technologies: ["AI/ML", "Docker", "Kubernetes", "CI/CD", "Monitoring"],
      image: "/api/placeholder/600/400",
      link: "https://ziontechgroup.com/autonomous-devops",
      github: "https://github.com/ziontechgroup/autonomous-devops",
      results: ["90% reduction in deployment time", "Zero-downtime deployments", "Automated incident response"]
    }
  ];

  const categories = ["All", "AI & Machine Learning", "Cybersecurity", "Edge Computing", "Space Technology", "Neural Interfaces", "DevOps"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <Head>
        <title>Our Work - Zion Tech Group | Portfolio of Revolutionary Technology Solutions</title>
        <meta name="description" content="Explore Zion Tech Group's portfolio of cutting-edge technology solutions including AI, quantum computing, cybersecurity, and space technology innovations." />
        <meta property="og:title" content="Our Work - Zion Tech Group" />
        <meta property="og:description" content="Portfolio of revolutionary technology solutions and innovations." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="portfolio, projects, AI solutions, quantum computing, cybersecurity, space technology, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/portfolio" />
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
              Our Work
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
              Revolutionary technology solutions that are transforming industries and pushing the boundaries of what&apos;s possible
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-2xl'
                      : 'bg-white/5 border border-white/20 text-white/80 hover:bg-white/10 hover:border-white/40'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-800 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Code className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-slate-800/80 rounded-lg flex items-center justify-center text-white/80 hover:text-white hover:bg-slate-700/80 transition-all duration-300"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-slate-800/80 rounded-lg flex items-center justify-center text-white/80 hover:text-white hover:bg-slate-700/80 transition-all duration-300"
                      >
                        <ExternalLinkIcon className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white/60 mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-white/5 text-white/70 text-xs rounded-md border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-white/5 text-white/70 text-xs rounded-md border border-white/10">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white/60 mb-2">Key Results</h4>
                    <ul className="space-y-1">
                      {project.results.slice(0, 2).map((result, idx) => (
                        <li key={idx} className="flex items-center text-sm text-white/70">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Client */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white/60 mb-1">Client</h4>
                    <p className="text-white/80 text-sm">{project.client}</p>
                  </div>

                  {/* CTA */}
                  <div className="flex space-x-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-white text-center transition-all duration-300 transform hover:scale-105"
                    >
                      View Project
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-white/20 hover:border-white/40 rounded-lg text-white/80 hover:text-white transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              Ready to Start Your Next Project?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let&apos;s collaborate to bring your vision to life with cutting-edge technology solutions that drive real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
              >
                Start a Project
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