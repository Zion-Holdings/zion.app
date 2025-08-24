<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Users, Award, Globe, Zap, Shield, Target } from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function AboutPage() {
  const values = [
    {
      icon: Zap,
      title: "Innovation First",
      description: "We push the boundaries of what's possible, constantly exploring new technologies and approaches."
    },
    {
      icon: Shield,
      title: "Security & Trust",
      description: "Enterprise-grade security is built into everything we do, ensuring your data and systems are protected."
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "We measure success by the tangible impact our solutions have on your business outcomes."
    },
    {
      icon: Users,
      title: "Client Partnership",
      description: "We work as an extension of your team, deeply understanding your challenges and goals."
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "50+", label: "Enterprise Clients" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <>
      <Head>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to transform businesses through cutting-edge technology solutions and innovation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              We&apos;re a team of innovators, engineers, and visionaries dedicated to transforming businesses through cutting-edge technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-white/70 mb-6 leading-relaxed">
                At Zion Tech Group, we believe that technology should be a force for good, driving innovation and creating value for businesses and society. Our mission is to democratize access to cutting-edge technology solutions, making them accessible to organizations of all sizes.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                We&apos;re committed to building solutions that not only solve today&apos;s challenges but also anticipate tomorrow&apos;s opportunities. Through our expertise in AI, quantum computing, cybersecurity, and digital transformation, we help businesses stay ahead of the curve and achieve sustainable growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10 p-8 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Why We Exist</h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>To bridge the gap between cutting-edge research and practical business applications</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>To make enterprise-grade technology accessible to growing businesses</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>To accelerate digital transformation and innovation across industries</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>To build a more secure, efficient, and intelligent digital future</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Core Values</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              These principles guide everything we do, from how we develop solutions to how we work with our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 p-4 mx-auto mb-6 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-white/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Leadership Team</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Meet the visionaries and experts who are driving innovation and shaping the future of technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10 p-6 backdrop-blur-xl text-center"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 mx-auto mb-4 flex items-center justify-center">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Kleber Santos</h3>
              <p className="text-cyan-400 mb-3">Founder & CEO</p>
              <p className="text-white/70 text-sm">
                Visionary leader with over 15 years of experience in technology innovation and business transformation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10 p-6 backdrop-blur-xl text-center"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 mx-auto mb-4 flex items-center justify-center">
                <Globe className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Sarah Chen</h3>
              <p className="text-cyan-400 mb-3">CTO</p>
              <p className="text-white/70 text-sm">
                Technology expert specializing in AI, quantum computing, and enterprise architecture.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10 p-6 backdrop-blur-xl text-center"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-teal-600 mx-auto mb-4 flex items-center justify-center">
                <Award className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Michael Rodriguez</h3>
              <p className="text-cyan-400 mb-3">Head of Security</p>
              <p className="text-white/70 text-sm">
                Cybersecurity expert with deep knowledge of quantum-resistant encryption and threat detection.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Work With Us?</h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Join hundreds of forward-thinking companies already leveraging our expertise to transform their businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-xl text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                Get Started
              </a>
              <a
                href="#services"
                className="px-8 py-4 border-2 border-white/20 hover:border-white/40 rounded-xl text-white font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
              >
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </>
  );
}
=======
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const About: NextPage = () => {
  const companyStats = [
    { number: '10+', label: 'Years of Experience', icon: '🎓' },
    { number: '500+', label: 'Projects Delivered', icon: '✅' },
    { number: '99.9%', label: 'Client Satisfaction', icon: '⭐' },
    { number: '24/7', label: 'Support Available', icon: '🔄' },
    { number: '50+', label: 'Team Members', icon: '👥' },
    { number: '15+', label: 'Technology Partners', icon: '🤝' }
  ];

  const coreValues = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, constantly exploring emerging technologies and creative solutions.',
      icon: '🚀',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Client Success',
      description: 'Your success is our success. We measure our achievements by the impact we create for our clients.',
      icon: '🎯',
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in every project, ensuring exceptional quality and reliability.',
      icon: '🏆',
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Continuous Learning',
      description: 'We stay ahead of the curve by continuously learning and adapting to new technologies and methodologies.',
      icon: '📚',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const expertise = [
    {
      category: 'Artificial Intelligence & Machine Learning',
      technologies: ['GPT-4', 'Computer Vision', 'Natural Language Processing', 'Predictive Analytics', 'Neural Networks'],
      icon: '🤖',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      category: 'Cloud & Infrastructure',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform'],
      icon: '☁️',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      category: 'Cybersecurity',
      technologies: ['Threat Detection', 'Penetration Testing', 'Compliance', 'Security Audits', 'Incident Response'],
      icon: '🛡️',
      color: 'from-red-500 to-pink-600'
    },
    {
      category: 'Web & Mobile Development',
      technologies: ['React', 'Next.js', 'Node.js', 'React Native', 'Flutter', 'Progressive Web Apps'],
      icon: '💻',
      color: 'from-green-500 to-emerald-600'
    },
    {
      category: 'Data & Analytics',
      technologies: ['Big Data', 'Data Warehousing', 'Business Intelligence', 'Real-time Analytics', 'Data Visualization'],
      icon: '📊',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      category: 'DevOps & Automation',
      technologies: ['CI/CD', 'Infrastructure as Code', 'Monitoring', 'Automation', 'Performance Optimization'],
      icon: '⚡',
      color: 'from-violet-500 to-purple-600'
    }
  ];

  const achievements = [
    {
      year: '2024',
      title: 'Quantum AI Platform Launch',
      description: 'Successfully launched the first quantum-powered AI analytics platform for enterprise clients.'
    },
    {
      year: '2023',
      title: '500+ Projects Milestone',
      description: 'Reached a major milestone of delivering 500+ successful projects across various industries.'
    },
    {
      year: '2022',
      title: 'AI Innovation Award',
      description: 'Received the prestigious AI Innovation Award for our breakthrough in autonomous DevOps.'
    },
    {
      year: '2021',
      title: 'Global Expansion',
      description: 'Expanded operations to serve clients across 25+ countries with localized solutions.'
    },
    {
      year: '2020',
      title: 'Cybersecurity Excellence',
      description: 'Achieved industry recognition for our advanced cybersecurity threat detection platform.'
    }
  ];

  const team = [
    {
      name: 'Kleber Santos',
      role: 'Founder & CEO',
      expertise: 'AI Strategy, Business Development, Technology Innovation',
      experience: '15+ years in technology leadership',
      avatar: '👨‍💼'
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      expertise: 'AI/ML, Quantum Computing, Research & Development',
      experience: '12+ years in AI research',
      avatar: '👩‍🔬'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Engineering',
      expertise: 'Cloud Architecture, DevOps, System Design',
      experience: '10+ years in software engineering',
      avatar: '👨‍💻'
    },
    {
      name: 'Emily Watson',
      role: 'VP of Client Success',
      expertise: 'Client Relations, Project Management, Strategic Consulting',
      experience: '8+ years in client success',
      avatar: '👩‍💼'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Head>
        <title>About Us - Zion Tech Group | Leading Technology Solutions Provider</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, expertise, and commitment to delivering innovative technology solutions. Discover our team, achievements, and core values." />
        <meta name="keywords" content="about Zion Tech Group, technology company, AI experts, cloud specialists, cybersecurity professionals" />
      </Head>

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            We are a forward-thinking technology company dedicated to transforming businesses through innovative solutions. 
            Our mission is to empower organizations with cutting-edge technology that drives growth and success.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>🚀 Innovation-Driven</span>
            <span>💡 Problem Solvers</span>
            <span>🤝 Client-Focused</span>
            <span>🌍 Global Reach</span>
          </div>
        </div>

        {/* Company Stats */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg mb-6">
                To democratize access to cutting-edge technology solutions, enabling businesses of all sizes to leverage 
                the power of AI, cloud computing, and digital transformation to achieve unprecedented growth and success.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-yellow-300 mr-3">✓</span>
                  Empower businesses with innovative solutions
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-300 mr-3">✓</span>
                  Drive digital transformation across industries
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-300 mr-3">✓</span>
                  Create sustainable technological advancement
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-600 to-teal-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg mb-6">
                To be the global leader in innovative technology solutions, setting new standards for excellence, 
                innovation, and client success in the digital age.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-yellow-300 mr-3">→</span>
                  Pioneer next-generation technologies
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-300 mr-3">→</span>
                  Transform industries through innovation
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-300 mr-3">→</span>
                  Build a sustainable digital future
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className={`bg-gradient-to-r ${value.color} w-16 h-16 rounded-full flex items-center justify-center text-2xl text-white mx-auto mb-4`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Areas of Expertise */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Areas of Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {expertise.map((area, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className={`bg-gradient-to-r ${area.color} w-16 h-16 rounded-lg flex items-center justify-center text-2xl text-white mb-4`}>
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{area.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {area.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Achievements */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Key Achievements
          </h2>
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-lg min-w-[80px] text-center">
                    {achievement.year}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership Team */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Leadership Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                <p className="text-sm text-gray-600 mb-3">{member.expertise}</p>
                <p className="text-xs text-gray-500">{member.experience}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Work with Us?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Let&apos;s discuss how our expertise and innovative solutions can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
              >
                Get in Touch
              </Link>
              <Link
                href="/services"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
>>>>>>> a8f0f845e290c358af6875dc27c33d0b4e7e2446
=======
import Head from 'next/head';
import Link from 'next/link';

export default function Placeholder() {
  return (
    <main className="min-h-screen p-8">
      <Head>
        <title>About - Placeholder</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-semibold mb-2">About</h1>
        <p className="text-gray-600 mb-6">Auto-generated placeholder for missing route: <code>/about</code>.</p>
        <Link href="/"><a className="text-blue-600 hover:underline">Back to Home</a></Link>
      </div>
    </main>
  );
}
>>>>>>> 6d7be8fce1d5e66d749ea8dd439e0663bfd83322
