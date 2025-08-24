import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Users, Brain, Shield, Rocket, Cpu, Database, 
  Globe, Award, Star, Linkedin, Mail, ArrowRight
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function TeamPage() {
  const leadership = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Technology Officer",
      bio: "Former AI researcher at Stanford with 15+ years in machine learning and quantum computing. Leading our quantum initiatives and AI research programs.",
      expertise: ["AI/ML", "Quantum Computing", "Research & Development"],
      education: "Ph.D. Computer Science, Stanford University",
      experience: "15+ years",
      image: "/team/sarah-chen.jpg",
      linkedin: "https://linkedin.com/in/sarah-chen",
      email: "sarah.chen@ziontechgroup.com"
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Cybersecurity",
      bio: "Ex-NSA cybersecurity expert with deep expertise in quantum-resistant encryption and threat intelligence. Protecting businesses against tomorrow's threats.",
      expertise: ["Cybersecurity", "Quantum Encryption", "Threat Intelligence"],
      education: "M.S. Cybersecurity, MIT",
      experience: "20+ years",
      image: "/team/marcus-rodriguez.jpg",
      linkedin: "https://linkedin.com/in/marcus-rodriguez",
      email: "marcus.rodriguez@ziontechgroup.com"
    },
    {
      name: "Dr. Elena Petrova",
      role: "VP of Research",
      bio: "Space technology specialist with experience at NASA and SpaceX. Leading our space technology division and satellite optimization initiatives.",
      expertise: ["Space Technology", "Satellite Systems", "Orbital Mechanics"],
      education: "Ph.D. Aerospace Engineering, Caltech",
      experience: "12+ years",
      image: "/team/elena-petrova.jpg",
      linkedin: "https://linkedin.com/in/elena-petrova",
      email: "elena.petrova@ziontechgroup.com"
    },
    {
      name: "James Kim",
      role: "Chief Innovation Officer",
      bio: "Serial entrepreneur and AI ethics advocate. Driving responsible AI development and ensuring our solutions benefit humanity.",
      expertise: ["AI Ethics", "Innovation Strategy", "Business Development"],
      education: "MBA, Harvard Business School",
      experience: "18+ years",
      image: "/team/james-kim.jpg",
      linkedin: "https://linkedin.com/in/james-kim",
      email: "james.kim@ziontechgroup.com"
    }
  ];

  const departments = [
    {
      name: "AI & Machine Learning",
      description: "Developing cutting-edge AI solutions for business transformation",
      teamSize: "25+ engineers",
      focus: ["Natural Language Processing", "Computer Vision", "Predictive Analytics", "Neural Networks"],
      icon: Brain
    },
    {
      name: "Cybersecurity",
      description: "Protecting businesses with quantum-resistant security solutions",
      teamSize: "20+ specialists",
      focus: ["Quantum Encryption", "Threat Detection", "Compliance", "Incident Response"],
      icon: Shield
    },
    {
      name: "Space Technology",
      description: "Leveraging space resources for business innovation",
      teamSize: "15+ engineers",
      focus: ["Satellite Optimization", "Earth Observation", "Space Resources", "Orbital Analytics"],
      icon: Rocket
    },
    {
      name: "Edge Computing",
      description: "Deploying intelligent applications at the edge",
      teamSize: "18+ developers",
      focus: ["IoT Management", "Edge Orchestration", "Real-time Processing", "Distributed Systems"],
      icon: Cpu
    },
    {
      name: "Data & Analytics",
      description: "Transforming data into actionable business insights",
      teamSize: "22+ analysts",
      focus: ["Big Data Processing", "Business Intelligence", "Data Visualization", "Predictive Modeling"],
      icon: Database
    },
    {
      name: "Digital Transformation",
      description: "Modernizing businesses with cutting-edge technology",
      teamSize: "30+ consultants",
      focus: ["Process Automation", "Cloud Migration", "Legacy Modernization", "Change Management"],
      icon: Globe
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We push the boundaries of what's possible, constantly exploring new technologies and approaches.",
      icon: Star
    },
    {
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to customer service.",
      icon: Award
    },
    {
      title: "Collaboration",
      description: "We believe the best solutions come from diverse teams working together towards common goals.",
      icon: Users
    },
    {
      title: "Integrity",
      description: "We operate with honesty, transparency, and ethical principles in all our business dealings.",
      icon: Shield
    }
  ];

  const stats = [
    { number: "100+", label: "Team Members" },
    { number: "25+", label: "Countries Represented" },
    { number: "15+", label: "Years Combined Experience" },
    { number: "50+", label: "Patents & Publications" }
  ];

  return (
    <>
      <Head>
        <title>Our Team - Zion Tech Group</title>
        <meta name="description" content="Meet the exceptional team behind Zion Tech Group. World-class experts in AI, cybersecurity, space technology, and digital transformation." />
        <meta name="keywords" content="team, leadership, experts, AI specialists, cybersecurity experts, space technology, Zion Tech Group" />
        <meta property="og:title" content="Our Team - Zion Tech Group" />
        <meta property="og:description" content="Meet the exceptional team behind Zion Tech Group. World-class experts in AI, cybersecurity, space technology, and digital transformation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/team" />
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
              Meet Our
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}Team
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-8">
              World-class experts, innovators, and problem-solvers working together to transform businesses 
              with cutting-edge technology. Our diverse team brings decades of combined experience from 
              leading institutions and companies worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#leadership"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105"
              >
                Meet Leadership
              </a>
              <a
                href="#departments"
                className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200"
              >
                Explore Departments
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-slate-900 mb-2">{stat.number}</div>
                <div className="text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Leadership Team</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Meet the visionary leaders driving innovation and growth at Zion Tech Group.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {leadership.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                    <p className="text-slate-600 leading-relaxed mb-4">{member.bio}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-slate-900 mb-2">Expertise:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill) => (
                          <span key={skill} className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <span className="font-medium text-slate-700">Education:</span>
                        <p className="text-slate-600">{member.education}</p>
                      </div>
                      <div>
                        <span className="font-medium text-slate-700">Experience:</span>
                        <p className="text-slate-600">{member.experience}</p>
                      </div>
                    </div>
                    
                    <div className="flex space-x-4">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section id="departments" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Departments</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Specialized teams working together to deliver comprehensive technology solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-8 hover:bg-slate-100 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
                  <dept.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3">{dept.name}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{dept.description}</p>
                
                <div className="mb-4">
                  <span className="text-sm font-medium text-blue-600">{dept.teamSize}</span>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Focus Areas:</h4>
                  <ul className="space-y-1">
                    {dept.focus.map((area) => (
                      <li key={area} className="text-sm text-slate-600 flex items-center space-x-2">
                        <ArrowRight className="w-3 h-3 text-blue-500" />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              The principles that guide our team and shape our company culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-white/70 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Join Our Team</h2>
            <p className="text-xl text-blue-100 mb-8">
              We're always looking for talented individuals who share our passion for innovation and excellence. 
              Explore opportunities to work with cutting-edge technology and make a real impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/careers"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105"
              >
                View Open Positions
              </a>
              <a
                href="/contact"
                className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </>
  );
}