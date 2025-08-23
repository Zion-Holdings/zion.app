import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Users, Briefcase, GraduationCap, Heart, 
  ArrowRight, MapPin, Clock, DollarSign,
  CheckCircle, Globe, Zap, Brain, Atom,
  Rocket, Award, Star
} from 'lucide-react';
import Link from 'next/link';

const Careers: React.FC = () => {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'AI & Machine Learning',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$120,000 - $180,000',
      description: 'Lead the development of cutting-edge AI consciousness and quantum computing solutions.',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Machine Learning', 'AI'],
      urgent: true
    },
    {
      title: 'Quantum Computing Specialist',
      department: 'Quantum Technologies',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$100,000 - $150,000',
      description: 'Develop and implement quantum computing solutions for enterprise clients.',
      skills: ['Quantum Computing', 'Python', 'Qiskit', 'Physics', 'Mathematics'],
      urgent: false
    },
    {
      title: 'Cybersecurity Engineer',
      department: 'Security',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$110,000 - $160,000',
      description: 'Design and implement advanced cybersecurity solutions for enterprise clients.',
      skills: ['Cybersecurity', 'Network Security', 'Penetration Testing', 'Compliance', 'Incident Response'],
      urgent: true
    },
    {
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$90,000 - $140,000',
      description: 'Build scalable web applications and microservices for our platform.',
      skills: ['React', 'Node.js', 'TypeScript', 'Cloud Computing', 'Microservices'],
      urgent: false
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We push boundaries and embrace bold ideas that challenge the status quo",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Human-Centric",
      description: "Technology serves humanity, not the other way around",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, from code to customer experience",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Collaboration",
      description: "Great achievements come from great teams working together",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const benefits = [
    {
      title: "Competitive Compensation",
      description: "Above-market salaries with equity options and performance bonuses",
      icon: <DollarSign className="w-8 h-8" />
    },
    {
      title: "Flexible Work",
      description: "Remote-first culture with flexible hours and work-life balance",
      icon: <Clock className="w-8 h-8" />
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health coverage, mental health support, and wellness programs",
      icon: <Heart className="w-8 h-8" />
    },
    {
      title: "Learning & Growth",
      description: "Continuous learning opportunities, conferences, and career development",
      icon: <GraduationCap className="w-8 h-8" />
    },
    {
      title: "Innovation Time",
      description: "20% time for personal projects and innovation initiatives",
      icon: <Rocket className="w-8 h-8" />
    },
    {
      title: "Global Impact",
      description: "Work on technologies that will shape the future of humanity",
      icon: <Globe className="w-8 h-8" />
    }
  ];

  const culture = [
    {
      title: "Diverse & Inclusive",
      description: "We celebrate diversity and create an inclusive environment where everyone thrives"
    },
    {
      title: "Continuous Learning",
      description: "Lifelong learning is core to our culture - we invest in your growth and development"
    },
    {
      title: "Work-Life Harmony",
      description: "We believe in sustainable productivity and supporting your personal well-being"
    },
    {
      title: "Impact-Driven",
      description: "Every project has the potential to change the world - we work with purpose"
    }
  ];

  return (
    <Layout 
      title="Careers - Zion Tech Group"
      description="Join Zion Tech Group and help shape the future of technology. Explore exciting career opportunities in AI, quantum computing, cybersecurity, and more."
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Join Our Mission
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Help us revolutionize technology and shape the future of humanity. Join a team of 
                visionaries, innovators, and problem-solvers working on the most cutting-edge technologies.
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                At Zion Tech Group, we're building the technologies of tomorrow. Join our team of 
                innovators, dreamers, and problem-solvers who are passionate about making a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#positions"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  View Open Positions
                </a>
                <a
                  href="#culture"
                  className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
                >
                  Learn About Culture
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission Statement Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-4xl font-bold mb-6">Why Zion Tech Group?</h2>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  We're not just building technology—we're building the future. Our mission is to 
                  create technologies that enhance human potential, solve humanity's greatest challenges, 
                  and pave the way for a more enlightened and connected world.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  When you join Zion Tech Group, you become part of a movement that's redefining what's 
                  possible. You'll work alongside brilliant minds, tackle unprecedented challenges, and 
                  leave a lasting impact on the world.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30"
              >
                <div className="text-center">
                  <Rocket className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Shape the Future</h3>
                  <p className="text-gray-300 leading-relaxed">
                    "We're at the forefront of the most transformative technologies in human history. 
                    Every line of code, every algorithm, every breakthrough brings us closer to a future 
                    where technology serves humanity's highest aspirations."
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                The principles that guide everything we do and every decision we make
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg mr-4">
                      {value.icon}
                    </div>
                    <h3 className="text-2xl font-semibold">{value.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Benefits & Perks</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We take care of our team so you can focus on changing the world
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg w-16 h-16 mb-4 flex items-center justify-center">
                    <div className="text-cyan-400">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30" id="culture">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Our Culture</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                A culture of innovation, collaboration, and continuous growth
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {culture.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-cyan-400">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8" id="positions">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Open Positions</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Join our team and help build the technologies of tomorrow
              </p>
            </motion.div>

            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <motion.div
                  key={position.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-2xl font-semibold">{position.title}</h3>
                        {position.urgent && (
                          <span className="px-3 py-1 bg-red-500/20 text-red-400 text-sm rounded-full border border-red-500/30">
                            Urgent
                          </span>
                        )}
                      </div>
                      <p className="text-gray-400 mb-4">{position.description}</p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-cyan-400" />
                          <span className="text-sm text-gray-300">{position.department}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-cyan-400" />
                          <span className="text-sm text-gray-300">{position.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-cyan-400" />
                          <span className="text-sm text-gray-300">{position.type}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-cyan-400" />
                          <span className="text-sm text-gray-300">{position.experience}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {position.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="lg:ml-8 lg:text-right">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">{position.salary}</div>
                      <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Join Us?</h2>
              <p className="text-xl text-gray-400 mb-8">
                Don't see the perfect role? We're always looking for exceptional talent. 
                Send us your resume and let's explore how you can contribute to our mission.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us
                </Link>
                <a
                  href="mailto:careers@ziontechgroup.com"
                  className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
                >
                  Send Resume
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Careers;