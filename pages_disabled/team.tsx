import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Brain, Shield, Rocket, Cpu, Database, Atom, 
  Users, Award, Globe, Target, Star, Zap,
  Linkedin, Twitter, Github, Mail, ExternalLink
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function TeamPage() {
  const leadership = [
    {
      name: "Dr. Kleber Santos",
      role: "Founder & Chief Executive Officer",
      bio: "Visionary leader with 15+ years of experience in AI, quantum computing, and technology innovation. Former research scientist at leading tech companies including Google AI and Microsoft Research. PhD in Computer Science from Stanford University with focus on artificial intelligence and machine learning.",
      expertise: ["AI & Machine Learning", "Quantum Computing", "Strategic Leadership", "Technology Innovation"],
      image: "/team/kleber-santos.jpg",
      linkedin: "https://linkedin.com/in/kleber-santos",
      twitter: "https://twitter.com/klebersantos",
      github: "https://github.com/klebersantos"
    },
    {
      name: "Dr. Sarah Chen",
      role: "Chief Technology Officer",
      bio: "Expert in neural networks, autonomous systems, and AI consciousness research. PhD in Computer Science from MIT with groundbreaking research on artificial general intelligence. Former lead researcher at OpenAI and DeepMind. Published over 50 peer-reviewed papers on AI and cognitive science.",
      expertise: ["Neural Networks", "Autonomous Systems", "AI Consciousness", "Research & Development"],
      image: "/team/sarah-chen.jpg",
      linkedin: "https://linkedin.com/in/sarah-chen",
      twitter: "https://twitter.com/sarahchen",
      github: "https://github.com/sarahchen"
    }
  ];

  const executives = [
    {
      name: "Marcus Rodriguez",
      role: "Head of Quantum Security",
      bio: "Leading researcher in quantum-resistant cryptography and post-quantum security protocols. Former NSA cryptographer with expertise in quantum key distribution and quantum-safe algorithms. PhD in Mathematics from Princeton University.",
      expertise: ["Quantum Cryptography", "Post-Quantum Security", "Cryptographic Protocols", "Security Architecture"],
      image: "/team/marcus-rodriguez.jpg",
      linkedin: "https://linkedin.com/in/marcus-rodriguez",
      twitter: "https://twitter.com/marcusrodriguez",
      github: "https://github.com/marcusrodriguez"
    },
    {
      name: "Dr. Elena Petrova",
      role: "Space Technology Director",
      bio: "Former NASA scientist specializing in AI-powered space resource optimization and mission planning. Expert in satellite systems, orbital mechanics, and space exploration technologies. PhD in Aerospace Engineering from Caltech.",
      expertise: ["Space Technology", "Satellite Systems", "AI Mission Planning", "Resource Optimization"],
      image: "/team/elena-petrova.jpg",
      linkedin: "https://linkedin.com/in/elena-petrova",
      twitter: "https://twitter.com/elenapetrova",
      github: "https://github.com/elenapetrova"
    },
    {
      name: "Alex Thompson",
      role: "Chief Operations Officer",
      bio: "Operations expert with 20+ years in scaling technology companies. Former VP of Operations at Tesla and SpaceX. Specializes in building efficient, scalable operations for high-growth technology companies.",
      expertise: ["Operations Management", "Company Scaling", "Process Optimization", "Team Leadership"],
      image: "/team/alex-thompson.jpg",
      linkedin: "https://linkedin.com/in/alex-thompson",
      twitter: "https://twitter.com/alexthompson",
      github: "https://github.com/alexthompson"
    },
    {
      name: "Dr. Maya Patel",
      role: "Head of AI Research",
      bio: "Leading researcher in artificial intelligence and machine learning. PhD in AI from Carnegie Mellon University. Former research scientist at Google Brain and Facebook AI Research. Expert in large language models and AI ethics.",
      expertise: ["AI Research", "Machine Learning", "Large Language Models", "AI Ethics"],
      image: "/team/maya-patel.jpg",
      linkedin: "https://linkedin.com/in/maya-patel",
      twitter: "https://twitter.com/mayapatel",
      github: "https://github.com/mayapatel"
    }
  ];

  const advisors = [
    {
      name: "Dr. Robert Kim",
      role: "AI Ethics Advisor",
      bio: "World-renowned expert in AI ethics and responsible AI development. Professor at Harvard University and former advisor to the White House on AI policy. Author of 'The Ethics of Artificial Intelligence'.",
      expertise: ["AI Ethics", "Policy Development", "Responsible AI", "Public Policy"],
      image: "/team/robert-kim.jpg",
      linkedin: "https://linkedin.com/in/robert-kim",
      twitter: "https://twitter.com/robertkim",
      github: "https://github.com/robertkim"
    },
    {
      name: "Dr. Lisa Zhang",
      role: "Quantum Computing Advisor",
      bio: "Pioneer in quantum computing and quantum algorithms. Former chief scientist at IBM Quantum and professor at MIT. Expert in quantum machine learning and quantum advantage.",
      expertise: ["Quantum Computing", "Quantum Algorithms", "Quantum ML", "Research Leadership"],
      image: "/team/lisa-zhang.jpg",
      linkedin: "https://linkedin.com/in/lisa-zhang",
      twitter: "https://twitter.com/lisazhang",
      github: "https://github.com/lisazhang"
    }
  ];

  const stats = [
    { number: "50+", label: "Team Members", icon: Users },
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "25+", label: "Countries", icon: Globe },
    { number: "100+", label: "Patents", icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Our Team — Zion Tech Group | World-Class AI & Quantum Technology Experts</title>
        <meta name="description" content="Meet the exceptional team behind Zion Tech Group. World-class experts in AI, quantum computing, and technology innovation driving the future." />
        <meta property="og:title" content="Zion Tech Group Team" />
        <meta property="og:description" content="Meet our world-class team of AI and quantum technology experts." />
        <meta name="keywords" content="team, experts, AI researchers, quantum scientists, technology leaders" />
        <link rel="canonical" href="https://ziontechgroup.com/team" />
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
              Meet Our Team
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              World-class experts in AI, quantum computing, and technology innovation, 
              united by a shared vision of transforming the future through technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-slate-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Leadership Team</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Visionary leaders driving innovation and shaping the future of technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {leadership.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex items-center justify-center border-4 border-slate-600 flex-shrink-0">
                    <Users className="w-12 h-12 text-slate-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-blue-400 font-medium mb-4">{member.role}</p>
                    <p className="text-slate-300 leading-relaxed mb-6">{member.bio}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Areas of Expertise:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-slate-700/50 rounded-full text-slate-300 text-sm border border-slate-600"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {member.twitter && (
                        <a
                          href={member.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300"
                        >
                          <Twitter className="w-5 h-5" />
                        </a>
                      )}
                      {member.github && (
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Team */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Executive Team</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Seasoned executives and domain experts leading our core technology initiatives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {executives.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 hover:border-slate-600/50 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-slate-600">
                    <Users className="w-10 h-10 text-slate-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-blue-400 font-medium">{member.role}</p>
                </div>
                
                <p className="text-slate-300 leading-relaxed mb-6 text-center">{member.bio}</p>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 text-center">Expertise:</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-slate-700/50 rounded-full text-slate-300 text-sm border border-slate-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center space-x-4">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Advisory Board</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Distinguished advisors providing strategic guidance and industry expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advisors.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8"
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-slate-600">
                    <Star className="w-10 h-10 text-slate-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-blue-400 font-medium">{member.role}</p>
                </div>
                
                <p className="text-slate-300 leading-relaxed mb-6 text-center">{member.bio}</p>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 text-center">Expertise:</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-slate-700/50 rounded-full text-slate-300 text-sm border border-slate-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center space-x-4">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              We&apos;re always looking for exceptional talent to join our mission of 
              transforming the world through technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/careers"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                View Open Positions
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}