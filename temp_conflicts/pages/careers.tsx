import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Users, Rocket, Brain, Shield, Globe, Award, 
  Zap, Heart, Star, MapPin, Clock, DollarSign,
  ExternalLink, Send, ArrowRight
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'ai', name: 'AI & Machine Learning' },
    { id: 'quantum', name: 'Quantum Computing' },
    { id: 'engineering', name: 'Engineering' },
    { id: 'research', name: 'Research & Development' },
    { id: 'business', name: 'Business Development' }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: "Senior AI Research Scientist",
      department: "ai",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      experience: "5+ years",
      salary: "$150K - $250K",
      description: "Lead cutting-edge research in autonomous AI systems and consciousness evolution.",
      requirements: [
        "PhD in Computer Science, AI, or related field",
        "Experience with large language models and neural networks",
        "Published research in top AI conferences",
        "Experience with quantum computing concepts"
      ],
      benefits: [
        "Competitive salary and equity",
        "Flexible work arrangements",
        "Professional development budget",
        "Health and wellness benefits"
      ]
    },
    {
      id: 2,
      title: "Quantum Software Engineer",
      department: "quantum",
      location: "San Francisco, CA",
      type: "Full-time",
      experience: "3+ years",
      salary: "$120K - $180K",
      description: "Develop quantum algorithms and software for our quantum computing platform.",
      requirements: [
        "Bachelor's degree in Computer Science or Physics",
        "Experience with quantum programming languages",
        "Knowledge of quantum algorithms and cryptography",
        "Python and C++ programming skills"
      ],
      benefits: [
        "Competitive salary and equity",
        "State-of-the-art quantum computing access",
        "Collaboration with leading researchers",
        "Comprehensive benefits package"
      ]
    },
    {
      id: 3,
      title: "Senior Full-Stack Engineer",
      department: "engineering",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      salary: "$130K - $190K",
      description: "Build scalable web applications and microservices for our AI platform.",
      requirements: [
        "Experience with React, Node.js, and TypeScript",
        "Knowledge of cloud infrastructure (AWS/Azure)",
        "Experience with microservices architecture",
        "Strong problem-solving skills"
      ],
      benefits: [
        "Remote-first culture",
        "Competitive salary and equity",
        "Latest development tools and equipment",
        "Professional development opportunities"
      ]
    },
    {
      id: 4,
      title: "AI Ethics Researcher",
      department: "research",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      experience: "3+ years",
      salary: "$100K - $150K",
      description: "Research and develop ethical frameworks for autonomous AI systems.",
      requirements: [
        "Master's or PhD in Philosophy, Ethics, or AI",
        "Understanding of AI safety and alignment",
        "Experience with policy development",
        "Strong analytical and writing skills"
      ],
      benefits: [
        "Competitive salary and equity",
        "Impact on AI safety and governance",
        "Collaboration with global experts",
        "Professional development support"
      ]
    },
    {
      id: 5,
      title: "Business Development Manager",
      department: "business",
      location: "San Francisco, CA",
      type: "Full-time",
      experience: "5+ years",
      salary: "$120K - $180K + Commission",
      description: "Drive business growth through strategic partnerships and client relationships.",
      requirements: [
        "Experience in B2B technology sales",
        "Knowledge of AI and quantum computing markets",
        "Strong networking and communication skills",
        "Proven track record of exceeding targets"
      ],
      benefits: [
        "Competitive base salary + commission",
        "Performance-based bonuses",
        "Travel and networking opportunities",
        "Career advancement potential"
      ]
    }
  ];

  const filteredJobs = selectedDepartment === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === selectedDepartment);

  const values = [
    {
      icon: Brain,
      title: "Innovation First",
      description: "We push boundaries and explore uncharted territories in technology"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Great ideas come from diverse teams working together"
    },
    {
      icon: Rocket,
      title: "Impact Driven",
      description: "We build technology that makes a real difference in the world"
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "We believe in sustainable innovation and personal well-being"
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Compensation",
      description: "Above-market salaries, equity, and performance bonuses"
    },
    {
      icon: Globe,
      title: "Remote-First Culture",
      description: "Work from anywhere with flexible schedules"
    },
    {
      icon: Zap,
      title: "Cutting-Edge Technology",
      description: "Access to the latest AI and quantum computing tools"
    },
    {
      icon: Star,
      title: "Professional Growth",
      description: "Continuous learning and career development opportunities"
    },
    {
      icon: Shield,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and mental health coverage"
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Regular recognition and rewards for outstanding contributions"
    }
  ];

  return (
    <>
      <Head>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group's mission to revolutionize technology. Explore career opportunities in AI, quantum computing, and autonomous innovation." />
        <meta name="keywords" content="Zion Tech Group careers, AI jobs, quantum computing jobs, technology careers, innovation jobs" />
        <meta property="og:title" content="Careers - Zion Tech Group" />
        <meta property="og:description" content="Join our team of innovators and shape the future of technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/careers" />
      </Head>

      <EnhancedNavigation />

      <main className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
                Join Our Mission
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8">
                Help us revolutionize technology through autonomous AI, quantum computing, 
                and consciousness evolution. Be part of the future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#openings"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  View Open Positions
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-20 px-6 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Our Culture
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                We're building more than technology - we're building the future
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="p-6 rounded-2xl bg-slate-700/50 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-700/70 text-center">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-white/70 leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Benefits & Perks
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                We take care of our team so you can focus on changing the world
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="p-6 rounded-2xl bg-slate-800/50 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-800/70">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-white/70 leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section id="openings" className="py-20 px-6 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Open Positions
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
                Join our team of innovators and help shape the future of technology
              </p>

              {/* Department Filter */}
              <div className="flex flex-wrap justify-center gap-3">
                {departments.map((dept) => (
                  <button
                    key={dept.id}
                    onClick={() => setSelectedDepartment(dept.id)}
                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      selectedDepartment === dept.id
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                        : 'bg-slate-700/50 text-white/70 hover:bg-slate-700/70 hover:text-white'
                    }`}
                  >
                    {dept.name}
                  </button>
                ))}
              </div>
            </motion.div>

            <div className="space-y-6">
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="p-8 rounded-2xl bg-slate-700/50 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-700/70">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                            {job.title}
                          </h3>
                          <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-sm font-medium rounded-full border border-blue-500/30">
                            {job.type}
                          </span>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-6 mb-4 text-white/70">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{job.experience}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <DollarSign className="w-4 h-4" />
                            <span>{job.salary}</span>
                          </div>
                        </div>

                        <p className="text-white/80 mb-4 leading-relaxed">{job.description}</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-white mb-2">Requirements:</h4>
                            <ul className="space-y-1">
                              {job.requirements.map((req, idx) => (
                                <li key={idx} className="text-white/70 text-sm flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-white mb-2">Benefits:</h4>
                            <ul className="space-y-1">
                              {job.benefits.map((benefit, idx) => (
                                <li key={idx} className="text-white/70 text-sm flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="lg:flex-shrink-0">
                        <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                          <Send className="w-4 h-4" />
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {filteredJobs.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center py-12"
                >
                  <p className="text-white/70 text-lg mb-4">
                    No open positions in this department at the moment.
                  </p>
                  <p className="text-white/50">
                    Check back soon or send us your resume for future opportunities!
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-blue-600/20 to-cyan-600/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-white">
                Don't See the Perfect Role?
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                We're always looking for talented individuals who are passionate about 
                technology and innovation. Send us your resume and let's discuss how 
                you can contribute to our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Your Resume</span>
                </a>
                <a
                  href="mailto:careers@ziontechgroup.com"
                  className="px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Email Us</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <EnhancedFooter />
    </>
  );
}
