import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Brain, Shield, Rocket, Cpu, Database, Atom, Target, Star, 
  Sparkles, Zap, Users, Award, Clock, CheckCircle, Globe, Code, Server,
  ChevronRight, ExternalLink, TrendingUp, BarChart3, Cloud, Network,
  MapPin, Briefcase, GraduationCap, Heart, Zap as ZapIcon
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function CareersPage() {
  const openPositions = [
    {
      id: 1,
      title: "Senior AI/ML Engineer",
      department: "Artificial Intelligence",
      location: "Remote / San Francisco, CA",
      type: "Full-time",
      experience: "5+ years",
      description: "Join our AI team to build next-generation machine learning models and autonomous systems that are revolutionizing industries.",
      requirements: [
        "Strong background in machine learning, deep learning, and AI",
        "Experience with PyTorch, TensorFlow, and modern ML frameworks",
        "Knowledge of distributed systems and cloud infrastructure",
        "Experience with large language models and generative AI",
        "Strong software engineering principles and practices"
      ],
      benefits: [
        "Competitive salary with equity options",
        "Flexible remote work policy",
        "Comprehensive health benefits",
        "Professional development budget",
        "Cutting-edge technology stack"
      ],
      skills: ["Python", "PyTorch", "TensorFlow", "AWS", "Kubernetes", "Docker"]
    },
    {
      id: 2,
      title: "Quantum Computing Researcher",
      department: "Quantum Technology",
      location: "Remote / Boston, MA",
      type: "Full-time",
      experience: "3+ years",
      description: "Research and develop quantum algorithms and quantum-resistant cryptographic solutions for next-generation security systems.",
      requirements: [
        "PhD in Physics, Computer Science, or related field",
        "Experience with quantum computing frameworks (Qiskit, Cirq)",
        "Knowledge of quantum algorithms and quantum information theory",
        "Experience with quantum-resistant cryptography",
        "Strong mathematical and analytical skills"
      ],
      benefits: [
        "Competitive salary with equity options",
        "Research publication support",
        "Conference and workshop attendance",
        "Collaboration with leading quantum researchers",
        "State-of-the-art quantum computing access"
      ],
      skills: ["Quantum Computing", "Python", "Qiskit", "Cirq", "Cryptography", "Mathematics"]
    },
    {
      id: 3,
      title: "DevOps Platform Engineer",
      department: "Platform Engineering",
      location: "Remote / Austin, TX",
      type: "Full-time",
      experience: "4+ years",
      description: "Build and maintain our autonomous DevOps platform that automates the entire software development lifecycle.",
      requirements: [
        "Strong experience with Kubernetes, Docker, and cloud platforms",
        "Experience with CI/CD pipelines and automation",
        "Knowledge of infrastructure as code (Terraform, CloudFormation)",
        "Experience with monitoring and observability tools",
        "Strong scripting and automation skills"
      ],
      benefits: [
        "Competitive salary with equity options",
        "Flexible remote work policy",
        "Comprehensive health benefits",
        "Professional development budget",
        "Latest DevOps tools and technologies"
      ],
      skills: ["Kubernetes", "Docker", "AWS", "Terraform", "Python", "Go"]
    },
    {
      id: 4,
      title: "Frontend Developer",
      department: "Product Development",
      location: "Remote / New York, NY",
      type: "Full-time",
      experience: "3+ years",
      description: "Build beautiful, responsive user interfaces for our cutting-edge technology platforms using modern web technologies.",
      requirements: [
        "Strong experience with React, TypeScript, and modern CSS",
        "Experience with state management (Redux, Zustand)",
        "Knowledge of responsive design and accessibility",
        "Experience with testing frameworks (Jest, React Testing Library)",
        "Strong attention to detail and user experience"
      ],
      benefits: [
        "Competitive salary with equity options",
        "Flexible remote work policy",
        "Comprehensive health benefits",
        "Professional development budget",
        "Latest frontend tools and technologies"
      ],
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Jest", "Framer Motion"]
    },
    {
      id: 5,
      title: "Cybersecurity Engineer",
      department: "Security",
      location: "Remote / Washington, DC",
      type: "Full-time",
      experience: "4+ years",
      description: "Develop and implement quantum-resistant cybersecurity solutions and threat detection systems for enterprise clients.",
      requirements: [
        "Strong background in cybersecurity and network security",
        "Experience with threat detection and incident response",
        "Knowledge of encryption and cryptographic protocols",
        "Experience with security tools and frameworks",
        "Understanding of compliance and regulatory requirements"
      ],
      benefits: [
        "Competitive salary with equity options",
        "Flexible remote work policy",
        "Comprehensive health benefits",
        "Professional development budget",
        "Latest security tools and technologies"
      ],
      skills: ["Cybersecurity", "Python", "Network Security", "Encryption", "Compliance", "Threat Detection"]
    }
  ];

  const companyValues = [
    {
      icon: Brain,
      title: "Innovation First",
      description: "We push the boundaries of what's possible, always exploring new technologies and approaches."
    },
    {
      icon: Heart,
      title: "People Matter",
      description: "Our team is our greatest asset. We invest in growth, well-being, and work-life balance."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "We build solutions that solve real-world problems and make a positive difference."
    },
    {
      icon: ZapIcon,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from code quality to customer experience."
    }
  ];

  const benefits = [
    "Competitive salary with equity options",
    "Flexible remote work policy",
    "Comprehensive health, dental, and vision insurance",
    "401(k) with company matching",
    "Unlimited paid time off",
    "Professional development budget",
    "Latest technology and equipment",
    "Regular team events and activities",
    "Mental health and wellness support",
    "Parental leave and family support"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <Head>
        <title>Careers - Zion Tech Group | Join Our Revolutionary Technology Team</title>
        <meta name="description" content="Join Zion Tech Group's revolutionary technology team. Explore career opportunities in AI, quantum computing, cybersecurity, and more." />
        <meta property="og:title" content="Careers - Zion Tech Group" />
        <meta property="og:description" content="Join our revolutionary technology team and help shape the future." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="careers, jobs, AI engineer, quantum computing, cybersecurity, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/careers" />
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
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
              Help us build the future of technology. Join a team that's revolutionizing AI, quantum computing, and cybersecurity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#open-positions"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
              >
                View Open Positions
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Values */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Values
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              The principles that guide everything we do and make Zion Tech Group an amazing place to work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-white/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Work With Us
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              We believe in taking care of our team with comprehensive benefits and a supportive work environment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 p-4 bg-slate-800/50 backdrop-blur-xl rounded-xl border border-white/10"
              >
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-white/80">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Ready to join our revolutionary technology team? Explore our current openings below.
            </p>
          </motion.div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 p-8 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-white/60 mb-4">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        <span>{position.department}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{position.type}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4" />
                        <span>{position.experience}</span>
                      </div>
                    </div>
                    <p className="text-white/80 mb-4">{position.description}</p>
                  </div>
                  <div className="lg:ml-6 lg:flex-shrink-0">
                    <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105">
                      Apply Now
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-white/70">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {position.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-white/70">
                          <Star className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-3">Skills & Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {position.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30"
                      >
                        {skill}
                      </span>
                    ))}
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
              Don't See the Right Fit?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team. Send us your resume and let's discuss how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
              >
                Send Resume
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="mailto:careers@ziontechgroup.com"
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10"
              >
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}
