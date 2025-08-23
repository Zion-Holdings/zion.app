import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Atom, 
  Shield, 
  Rocket, 
  Users, 
  Award, 
  Globe, 
  Target,
  CheckCircle,
  Star
} from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Years of Innovation', value: '15+', icon: <Award className="w-6 h-6" /> },
    { label: 'Global Clients', value: '500+', icon: <Globe className="w-6 h-6" /> },
    { label: 'AI Solutions', value: '100+', icon: <Brain className="w-6 h-6" /> },
    { label: 'Success Rate', value: '99.9%', icon: <CheckCircle className="w-6 h-6" /> }
  ];

  const values = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with cutting-edge AI, quantum computing, and space technology.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Trust & Security',
      description: 'Your data and systems are protected with enterprise-grade security and compliance standards.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Client Success',
      description: 'We measure our success by your success, providing dedicated support and continuous optimization.'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Future-Ready',
      description: 'Our solutions are built to scale and evolve with your business needs and technological advances.'
    }
  ];

  const team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Chief Technology Officer',
      bio: 'Visionary leader with 15+ years of experience in AI, quantum computing, and emerging technologies.',
      expertise: ['AI Strategy', 'Quantum Computing', 'Technology Innovation']
    },
    {
      name: 'AI Research Team',
      role: 'Advanced AI Development',
      bio: 'World-class researchers and engineers pushing the boundaries of artificial intelligence and consciousness.',
      expertise: ['Machine Learning', 'Neural Networks', 'AI Ethics']
    },
    {
      name: 'Quantum Engineering',
      role: 'Quantum Technology Specialists',
      bio: 'Experts in quantum computing, cryptography, and quantum-safe infrastructure development.',
      expertise: ['Quantum Algorithms', 'Quantum Security', 'Quantum Infrastructure']
    },
    {
      name: 'Space Technology',
      role: 'Space Innovation Division',
      bio: 'Pioneering space resource mining, satellite technology, and interplanetary solutions.',
      expertise: ['Space Mining', 'Satellite Systems', 'Space Infrastructure']
    }
  ];

  const milestones = [
    {
      year: '2010',
      title: 'Company Founded',
      description: 'Zion Tech Group established with a vision to revolutionize technology'
    },
    {
      year: '2015',
      title: 'AI Breakthrough',
      description: 'First AI-powered business automation platform launched'
    },
    {
      year: '2018',
      title: 'Quantum Initiative',
      description: 'Entered quantum computing research and development'
    },
    {
      year: '2020',
      title: 'Space Technology',
      description: 'Launched space resource mining and satellite technology division'
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Expanded to serve 500+ clients across 50+ countries'
    },
    {
      year: '2025',
      title: 'Future Vision',
      description: 'Leading the next generation of AI consciousness and quantum innovation'
    }
  ];

  return (
    <>
      <Head>
        <title>About Us - Zion Tech Group | Future Technology Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to revolutionize technology with AI, quantum computing, and space technology solutions. Discover our story, team, and vision for the future." />
        <meta name="keywords" content="Zion Tech Group, about us, AI technology, quantum computing, space technology, technology company" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/about" />
        <meta property="og:title" content="About Us - Zion Tech Group" />
        <meta property="og:description" content="Learn about Zion Tech Group's mission to revolutionize technology with AI, quantum computing, and space technology solutions." />
        <meta property="og:url" content="https://ziontechgroup.com/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - Zion Tech Group" />
        <meta name="twitter:description" content="Learn about Zion Tech Group's mission to revolutionize technology with AI, quantum computing, and space technology solutions." />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                About Zion Tech Group
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Pioneering the future of technology with revolutionary AI, quantum computing, and space technology solutions that transform businesses and advance humanity.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Get in Touch
                </a>
                <a href="/services" className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300">
                  Explore Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4 text-cyan-400">
                    {stat.icon}
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  To accelerate human progress through revolutionary technology solutions that solve the world's most complex challenges while ensuring ethical and sustainable development.
                </p>
                <p className="text-lg text-gray-300 mb-6">
                  We believe that technology should serve humanity, not replace it. Our AI, quantum, and space solutions are designed to augment human capabilities and create a better future for all.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Innovation for Humanity</div>
                    <div className="text-gray-400 text-sm">Technology that serves people</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-500/30">
                  <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
                  <p className="text-gray-300 mb-6">
                    To be the global leader in next-generation technology solutions, pioneering breakthroughs in AI consciousness, quantum computing, and space technology that reshape industries and advance civilization.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Star className="w-5 h-5 text-yellow-400" />
                      <span className="text-gray-300">Leading AI consciousness evolution</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Atom className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">Revolutionizing quantum computing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Rocket className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Expanding human presence in space</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                Our Core Values
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                The principles that guide our innovation and shape our relationships with clients, partners, and the global community.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4 text-cyan-400">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {value.title}
                  </h3>
                  <p className="text-gray-400">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                Meet Our Team
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                World-class experts, innovators, and visionaries working together to shape the future of technology.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {member.name}
                  </h3>
                  <div className="text-cyan-400 font-medium mb-3">
                    {member.role}
                  </div>
                  <p className="text-gray-300 mb-4">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                Our Journey
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                From startup to global technology leader - the milestones that shaped our success.
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-cyan-500 to-purple-500"></div>
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'justify-start' : 'justify-end'
                    }`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-6 border border-white/10">
                        <div className="text-2xl font-bold text-cyan-400 mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-white">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-300">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full border-4 border-black"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                Join hundreds of forward-thinking companies already leveraging our revolutionary technology solutions to stay ahead of the competition.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Start Your Journey
                </a>
                <a href="/services" className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300">
                  Explore Solutions
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}