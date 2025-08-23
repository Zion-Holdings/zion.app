import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Users, Rocket, Brain, Atom, Shield, Star, Award, 
  TrendingUp, Zap, Target, Building, Code, Cloud, Lock,
  Database, Network, Server, Monitor, Heart, Globe, Lightbulb
} from 'lucide-react';

export default function Careers() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Join Our Team
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Help us revolutionize technology and shape the future of AI, quantum computing, and space exploration.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Our Culture</h2>
              <p className="text-xl text-gray-300">Innovation, collaboration, and pushing the boundaries of what's possible</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Lightbulb className="w-12 h-12 text-cyan-400" />,
                  title: "Innovation First",
                  description: "We encourage creative thinking and breakthrough ideas that challenge conventional wisdom."
                },
                {
                  icon: <Users className="w-12 h-12 text-blue-400" />,
                  title: "Collaborative Excellence",
                  description: "Work with brilliant minds across disciplines to solve humanity's greatest challenges."
                },
                {
                  icon: <Rocket className="w-12 h-12 text-green-400" />,
                  title: "Rapid Growth",
                  description: "Accelerate your career with cutting-edge projects and continuous learning opportunities."
                },
                {
                  icon: <Globe className="w-12 h-12 text-purple-400" />,
                  title: "Global Impact",
                  description: "Your work will influence technology and society on a global scale."
                },
                {
                  icon: <Heart className="w-12 h-12 text-pink-400" />,
                  title: "Work-Life Balance",
                  description: "Flexible schedules, remote work options, and a supportive environment for your well-being."
                },
                {
                  icon: <Award className="w-12 h-12 text-yellow-400" />,
                  title: "Recognition & Rewards",
                  description: "Outstanding performance is recognized with competitive compensation and growth opportunities."
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className="p-8 bg-black/40 border border-gray-800 rounded-2xl hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Open Positions</h2>
              <p className="text-xl text-gray-300">Join our mission to revolutionize technology and create the future</p>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  title: "Senior AI Research Engineer",
                  department: "AI & Machine Learning",
                  location: "Remote / Middletown, DE",
                  type: "Full-time",
                  description: "Lead research in AI consciousness, emotional intelligence, and autonomous systems.",
                  requirements: [
                    "PhD in Computer Science, AI, or related field",
                    "5+ years experience in AI research and development",
                    "Expertise in deep learning, NLP, and computer vision",
                    "Experience with large language models and AI ethics"
                  ],
                  icon: <Brain className="w-8 h-8 text-cyan-400" />
                },
                {
                  title: "Quantum Computing Specialist",
                  department: "Quantum Technology",
                  location: "Remote / Middletown, DE",
                  type: "Full-time",
                  description: "Develop quantum algorithms and quantum-classical hybrid solutions.",
                  requirements: [
                    "MS/PhD in Physics, Computer Science, or related field",
                    "3+ years experience in quantum computing",
                    "Knowledge of quantum algorithms and quantum programming",
                    "Experience with Qiskit, Cirq, or similar frameworks"
                  ],
                  icon: <Atom className="w-8 h-8 text-blue-400" />
                },
                {
                  title: "Space Technology Engineer",
                  department: "Space Technology",
                  location: "Remote / Middletown, DE",
                  type: "Full-time",
                  description: "Design and develop space exploration and resource mining technologies.",
                  requirements: [
                    "BS/MS in Aerospace Engineering, Physics, or related field",
                    "3+ years experience in space technology development",
                    "Knowledge of orbital mechanics and space systems",
                    "Experience with satellite technology and space robotics"
                  ],
                  icon: <Rocket className="w-8 h-8 text-purple-400" />
                },
                {
                  title: "Cybersecurity Architect",
                  department: "Security",
                  location: "Remote / Middletown, DE",
                  type: "Full-time",
                  description: "Design quantum-secure infrastructure and zero-trust security architectures.",
                  requirements: [
                    "BS/MS in Computer Science, Cybersecurity, or related field",
                    "5+ years experience in cybersecurity architecture",
                    "Expertise in zero-trust security and quantum cryptography",
                    "Experience with SOC 2 compliance and security frameworks"
                  ],
                  icon: <Shield className="w-8 h-8 text-green-400" />
                },
                {
                  title: "DevOps Engineer",
                  department: "Engineering",
                  location: "Remote / Middletown, DE",
                  type: "Full-time",
                  description: "Build and maintain cloud infrastructure and CI/CD pipelines.",
                  requirements: [
                    "BS in Computer Science or related field",
                    "3+ years experience in DevOps and cloud infrastructure",
                    "Expertise in AWS, Azure, or GCP",
                    "Experience with Kubernetes, Docker, and automation tools"
                  ],
                  icon: <Cloud className="w-8 h-8 text-orange-400" />
                },
                {
                  title: "Product Manager",
                  department: "Product",
                  location: "Remote / Middletown, DE",
                  type: "Full-time",
                  description: "Lead product strategy and development for AI and quantum solutions.",
                  requirements: [
                    "BS in Business, Engineering, or related field",
                    "5+ years experience in product management",
                    "Experience with AI/ML products and enterprise software",
                    "Strong analytical and strategic thinking skills"
                  ],
                  icon: <Target className="w-8 h-8 text-pink-400" />
                }
              ].map((position, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                  className="p-6 bg-black/40 border border-gray-800 rounded-xl hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">{position.icon}</div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h3 className="text-xl font-bold text-white">{position.title}</h3>
                        <div className="flex gap-2 mt-2 md:mt-0">
                          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                            {position.type}
                          </span>
                          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full border border-blue-500/30">
                            {position.department}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-3">{position.description}</p>
                      <p className="text-sm text-gray-400 mb-4">📍 {position.location}</p>
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-2">Requirements:</h4>
                        <ul className="space-y-1">
                          {position.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="text-sm text-gray-300 flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-4">
                        <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits & Perks */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Benefits & Perks</h2>
              <p className="text-xl text-gray-300">We take care of our team with comprehensive benefits and unique perks</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  category: "Health & Wellness",
                  items: [
                    "Comprehensive health insurance",
                    "Dental and vision coverage",
                    "Mental health support",
                    "Fitness and wellness programs",
                    "Flexible work arrangements"
                  ]
                },
                {
                  category: "Professional Growth",
                  items: [
                    "Continuous learning budget",
                    "Conference attendance",
                    "Certification programs",
                    "Mentorship opportunities",
                    "Career development planning"
                  ]
                },
                {
                  category: "Work Environment",
                  items: [
                    "Remote-first culture",
                    "Flexible hours",
                    "Modern equipment",
                    "Collaborative spaces",
                    "Innovation time"
                  ]
                },
                {
                  category: "Financial Benefits",
                  items: [
                    "Competitive salary",
                    "Equity participation",
                    "Performance bonuses",
                    "401(k) matching",
                    "Student loan assistance"
                  ]
                },
                {
                  category: "Team & Culture",
                  items: [
                    "Regular team events",
                    "Hackathons and innovation days",
                    "Community service opportunities",
                    "Diversity and inclusion programs",
                    "Recognition programs"
                  ]
                },
                {
                  category: "Technology Access",
                  items: [
                    "Latest AI and quantum tools",
                    "Cloud computing credits",
                    "Research lab access",
                    "Prototype development",
                    "Open source contributions"
                  ]
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
                  className="p-6 bg-black/40 border border-gray-800 rounded-xl hover:border-cyan-500/50 transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-white mb-4">{benefit.category}</h3>
                  <ul className="space-y-2">
                    {benefit.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-gray-300 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Application Process</h2>
              <p className="text-xl text-gray-300">Simple steps to join our revolutionary team</p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Apply",
                  description: "Submit your application with resume and cover letter through our portal."
                },
                {
                  step: "02",
                  title: "Review",
                  description: "Our team reviews your application and assesses fit for the role."
                },
                {
                  step: "03",
                  title: "Interview",
                  description: "Participate in technical and cultural interviews with our team."
                },
                {
                  step: "04",
                  title: "Join",
                  description: "Receive offer and join our mission to revolutionize technology."
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.6 + index * 0.2 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Us?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Help us build the future of technology and make a lasting impact on humanity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Our Team
                </a>
                <a
                  href="/about"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
                >
                  Learn More About Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}