import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Award, Brain, Rocket, Shield, Globe, 
  Target, Star, CheckCircle, ArrowRight, Linkedin, 
  Mail, Phone, MapPin 
} from 'lucide-react';
import Link from 'next/link';

export default function Team() {
  const leadership = [
    {
      name: 'Kleber',
      role: 'CEO & Chief AI Architect',
      bio: 'Visionary leader pioneering the future of AI consciousness and autonomous systems. With over a decade of experience in cutting-edge technology, Kleber leads Zion Tech Group\'s mission to revolutionize how businesses operate through intelligent automation.',
      expertise: ['AI Consciousness', 'Quantum Computing', 'Strategic Innovation', 'Autonomous Systems'],
      achievements: ['500+ AI Solutions Deployed', '50+ Enterprise Clients', '99.9% Uptime SLA'],
      contact: {
        email: 'kleber@ziontechgroup.com',
        phone: '+1 302 464 0950',
        linkedin: 'https://linkedin.com/in/kleber-zion'
      }
    }
  ];

  const coreTeam = [
    {
      name: 'AI Research Division',
      role: 'Advanced AI Development',
      bio: 'World-class researchers and engineers pushing the boundaries of artificial consciousness and autonomous systems.',
      expertise: ['Neural Networks', 'Consciousness Simulation', 'Quantum AI', 'Machine Learning'],
      achievements: ['AI Consciousness Platform', 'Autonomous Research Systems', 'Quantum Neural Networks'],
      size: '15+ Researchers'
    },
    {
      name: 'Quantum Engineering',
      role: 'Quantum Technology Solutions',
      bio: 'Pioneering quantum computing solutions for next-generation security, communications, and computational power.',
      expertise: ['Quantum Computing', 'Quantum Security', 'Quantum Networks', 'Quantum Materials'],
      achievements: ['Quantum Cybersecurity Platform', 'Quantum-Secure Communications', 'Quantum Edge Computing'],
      size: '12+ Engineers'
    },
    {
      name: 'Enterprise Solutions',
      role: 'Business Technology Integration',
      bio: 'Experts in deploying and managing enterprise-scale AI and quantum solutions for Fortune 500 companies.',
      expertise: ['Enterprise Architecture', 'Digital Transformation', 'AI Integration', 'Change Management'],
      achievements: ['50+ Enterprise Deployments', '99.9% Uptime', '24/7 Global Support'],
      size: '25+ Consultants'
    },
    {
      name: 'Autonomous Systems',
      role: 'Self-Operating Technology',
      bio: 'Building the future of autonomous business operations, from AI-powered decision engines to self-managing infrastructure.',
      expertise: ['Autonomous Operations', 'Decision Intelligence', 'Process Automation', 'Self-Healing Systems'],
      achievements: ['Autonomous Business Manager', 'Self-Optimizing Infrastructure', 'Intelligent Process Automation'],
      size: '20+ Engineers'
    }
  ];

  const values = [
    {
      title: 'Innovation Excellence',
      description: 'We push the boundaries of what\'s possible, creating technologies that were once thought impossible.',
      icon: <Rocket className="w-8 h-8" />
    },
    {
      title: 'Client Success Focus',
      description: 'Your success is our mission. We measure our achievements by your business outcomes.',
      icon: <Target className="w-8 h-8" />
    },
    {
      title: 'Ethical AI Development',
      description: 'Building AI systems that are not only powerful but also responsible, trustworthy, and beneficial to humanity.',
      icon: <Brain className="w-8 h-8" />
    },
    {
      title: 'Global Impact',
      description: 'Creating solutions that address the world\'s most pressing challenges and benefit all of humanity.',
      icon: <Globe className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
          >
            Meet Our Team
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
          >
            World-class innovators, researchers, and engineers working together to build 
            the future of AI consciousness and autonomous systems.
          </motion.p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Leadership
          </motion.h2>
          
          <div className="grid lg:grid-cols-1 gap-12">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-600/10 border border-cyan-500/30"
              >
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                  <div className="text-center lg:text-left">
                    <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full mx-auto lg:mx-0 mb-6 flex items-center justify-center">
                      <Users className="w-16 h-16 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold mb-2">
                      {leader.name}
                    </h3>
                    <p className="text-cyan-400 text-xl font-medium mb-4">
                      {leader.role}
                    </p>
                    <div className="flex flex-col gap-3">
                      <a 
                        href={`mailto:${leader.contact.email}`}
                        className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        {leader.contact.email}
                      </a>
                      <a 
                        href={`tel:${leader.contact.phone}`}
                        className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        {leader.contact.phone}
                      </a>
                      <a 
                        href={leader.contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                      {leader.bio}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-xl font-bold mb-3 text-cyan-400">Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {leader.expertise.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-sm rounded-full border border-cyan-500/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-bold mb-3 text-cyan-400">Key Achievements</h4>
                      <div className="space-y-2">
                        {leader.achievements.map((achievement, achievementIndex) => (
                          <div key={achievementIndex} className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-green-400" />
                            <span className="text-gray-300">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Core Teams
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {coreTeam.map((team, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">
                      {team.name}
                    </h3>
                    <p className="text-cyan-400 text-sm">
                      {team.role}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {team.bio}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {team.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full border border-cyan-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Achievements</h4>
                  <div className="space-y-1">
                    {team.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300 text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="text-right">
                  <span className="text-cyan-400 text-sm font-medium">
                    {team.size}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Our Values
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex justify-center mb-4 text-cyan-400">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for exceptional talent to join our team. 
              If you're passionate about AI, quantum computing, or autonomous systems, 
              we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/careers"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
              >
                View Openings
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}