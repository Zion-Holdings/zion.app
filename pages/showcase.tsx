import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ShowcasePage() {
  const projects = [
    {
      id: 1,
      title: "Autonomous Infrastructure Management",
      description: "AI-powered system that automatically monitors, optimizes, and maintains cloud infrastructure without human intervention.",
      technologies: ["AI/ML", "Kubernetes", "Terraform", "Python", "React"],
      image: "🏗️",
      status: "Live",
      category: "Infrastructure"
    },
    {
      id: 2,
      title: "Smart Content Generation Platform",
      description: "Automated content creation system that generates high-quality articles, reports, and marketing materials using advanced NLP.",
      technologies: ["GPT-4", "BERT", "Node.js", "MongoDB", "Vue.js"],
      image: "📝",
      status: "Live",
      category: "Content AI"
    },
    {
      id: 3,
      title: "Predictive Analytics Dashboard",
      description: "Real-time business intelligence platform that predicts trends and provides actionable insights using machine learning.",
      technologies: ["TensorFlow", "Apache Kafka", "PostgreSQL", "D3.js", "TypeScript"],
      image: "📊",
      status: "Live",
      category: "Analytics"
    },
    {
      id: 4,
      title: "IoT Device Management System",
      description: "Comprehensive platform for managing, monitoring, and controlling IoT devices across distributed networks.",
      technologies: ["MQTT", "Redis", "Docker", "Golang", "Flutter"],
      image: "📱",
      status: "Beta",
      category: "IoT"
    },
    {
      id: 5,
      title: "Autonomous Security Monitoring",
      description: "AI-driven cybersecurity platform that detects and responds to threats in real-time using behavioral analysis.",
      technologies: ["Neural Networks", "Elasticsearch", "Python", "React", "GraphQL"],
      image: "🛡️",
      status: "Live",
      category: "Security"
    },
    {
      id: 6,
      title: "Quantum Computing Simulator",
      description: "Educational platform for simulating quantum algorithms and exploring quantum computing concepts.",
      technologies: ["Qiskit", "WebAssembly", "Three.js", "Rust", "Svelte"],
      image: "⚛️",
      status: "Development",
      category: "Quantum"
    }
  ];

  const technologies = [
    { name: "Artificial Intelligence", icon: "🧠", description: "Advanced ML models and neural networks" },
    { name: "Cloud Native", icon: "☁️", description: "Scalable, resilient cloud infrastructure" },
    { name: "DevOps Automation", icon: "⚡", description: "CI/CD pipelines and infrastructure as code" },
    { name: "Edge Computing", icon: "🌐", description: "Distributed computing at the network edge" },
    { name: "Blockchain", icon: "🔗", description: "Decentralized applications and smart contracts" },
    { name: "Cybersecurity", icon: "🔒", description: "Advanced threat detection and prevention" }
  ];

  return (
    <>
      <Head>
        <title>Technology Showcase — Zion Tech Group</title>
        <meta name="description" content="Explore Zion Tech Group's cutting-edge technology projects and innovative solutions across AI, automation, and cloud computing." />
        <meta property="og:title" content="Technology Showcase — Zion Tech Group" />
        <meta property="og:description" content="Explore Zion Tech Group's cutting-edge technology projects and innovative solutions." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Technology Showcase
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Discover our innovative projects and cutting-edge solutions that demonstrate the future of autonomous technology.
            </p>
          </div>

          {/* Navigation */}
          <div className="mb-8">
            <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              ← Back to Home
            </Link>
          </div>

          {/* Technology Stack Overview */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Our Technology Stack
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-cyan-400/30 transition-all">
                  <div className="text-4xl mb-4">{tech.icon}</div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">{tech.name}</h3>
                  <p className="text-white/70">{tech.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Projects */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div key={project.id} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-fuchsia-400/30 transition-all">
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-6xl">{project.image}</div>
                    <div className="flex flex-col items-end">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Live' ? 'bg-green-400/20 text-green-300 border border-green-400/30' :
                        project.status === 'Beta' ? 'bg-yellow-400/20 text-yellow-300 border border-yellow-400/30' :
                        'bg-blue-400/20 text-blue-300 border border-blue-400/30'
                      }`}>
                        {project.status}
                      </span>
                      <span className="text-xs text-white/50 mt-1">{project.category}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-white/70 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-white/80 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-white/10 text-white/70 text-sm rounded-full border border-white/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all">
                    View Project
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Innovation Metrics */}
          <section className="mb-16">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Innovation Metrics
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                  <p className="text-white/70">System Uptime</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-fuchsia-400 mb-2">50+</div>
                  <p className="text-white/70">Active Projects</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
                  <p className="text-white/70">Autonomous Operation</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">1000+</div>
                  <p className="text-white/70">AI Models Deployed</p>
                </div>
              </div>
            </div>
          </section>

          {/* Case Studies */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Success Stories
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Global E-commerce Platform</h3>
                <p className="text-white/70 mb-6">
                  Implemented autonomous inventory management and demand forecasting, resulting in 40% reduction in stockouts and 25% increase in revenue.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/50">Industry: E-commerce</span>
                  <span className="text-sm text-green-400">+40% Efficiency</span>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-fuchsia-400 mb-4">Healthcare Analytics System</h3>
                <p className="text-white/70 mb-6">
                  Developed AI-powered diagnostic assistance platform that improved diagnostic accuracy by 35% and reduced patient wait times by 60%.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/50">Industry: Healthcare</span>
                  <span className="text-sm text-green-400">+35% Accuracy</span>
                </div>
              </div>
            </div>
          </section>

          {/* Get Involved */}
          <section className="text-center">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-white">Ready to Innovate Together?</h2>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                Whether you're looking to implement cutting-edge technology solutions or want to collaborate on innovative projects, we're here to help bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all">
                  Start a Project
                </Link>
                <Link href="/services" className="px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-lg hover:border-cyan-400/50 transition-all">
                  Explore Services
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}