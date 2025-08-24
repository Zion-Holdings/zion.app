import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const values = [
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'Pushing the boundaries of what\'s possible with cutting-edge technology'
    },
    {
      icon: '🤝',
      title: 'Partnership',
      description: 'Building long-term relationships based on trust and mutual success'
    },
    {
      icon: '💡',
      title: 'Excellence',
      description: 'Delivering exceptional quality in every project and solution'
    },
    {
      icon: '🌍',
      title: 'Impact',
      description: 'Creating positive change through technology and innovation'
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief AI Officer',
      expertise: 'Machine Learning, Neural Networks, AI Ethics',
      avatar: '👩‍💼'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Engineering',
      expertise: 'Full-Stack Development, Cloud Architecture, DevOps',
      avatar: '👨‍💻'
    },
    {
      name: 'Dr. James Kim',
      role: 'Cybersecurity Director',
      expertise: 'Security Auditing, Compliance, Incident Response',
      avatar: '👨‍🔒'
    },
    {
      name: 'Lisa Thompson',
      role: 'VP of Operations',
      expertise: 'Project Management, Client Relations, Strategic Planning',
      avatar: '👩‍📊'
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Zion Tech Group established with a vision to democratize AI technology'
    },
    {
      year: '2021',
      title: 'First AI Solutions',
      description: 'Successfully deployed machine learning solutions for Fortune 500 clients'
    },
    {
      year: '2022',
      title: 'Cybersecurity Division',
      description: 'Launched comprehensive cybersecurity services and compliance solutions'
    },
    {
      year: '2023',
      title: 'Cloud Expansion',
      description: 'Expanded cloud services and infrastructure solutions across multiple platforms'
    },
    {
      year: '2024',
      title: 'Global Reach',
      description: 'Serving clients across 25+ countries with innovative technology solutions'
    }
  ];

  return (
    <>
      <Head>
        <title>About | Zion Tech Group - Our Story & Mission</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to democratize AI technology and drive innovation across industries." />
        <meta property="og:title" content="About | Zion Tech Group" />
        <meta property="og:description" content="Discover our story, mission, and the team behind Zion Tech Group's innovative technology solutions." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
          <div className="relative container mx-auto px-6 py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                We're on a mission to democratize artificial intelligence and make cutting-edge technology accessible to businesses of all sizes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold mb-6 text-white">Our Mission</h2>
                <p className="text-lg text-white/80 mb-6">
                  At Zion Tech Group, we believe that artificial intelligence and advanced technology should be accessible to every organization, regardless of size or industry.
                </p>
                <p className="text-lg text-white/80 mb-6">
                  Our mission is to bridge the gap between cutting-edge research and practical business applications, delivering AI solutions that drive real value and measurable results.
                </p>
                <p className="text-lg text-white/80">
                  We're committed to ethical AI development, ensuring that our solutions are not only powerful but also responsible and aligned with human values.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white/10 backdrop-blur-xl rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Why Choose Zion?</h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-3">✓</span>
                    Expert team with deep AI and technology expertise
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-3">✓</span>
                    Proven track record of successful implementations
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-3">✓</span>
                    Commitment to ethical and responsible AI development
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-3">✓</span>
                    24/7 support and ongoing optimization services
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-white">Our Core Values</h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                The principles that guide everything we do and every decision we make
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
                  <p className="text-white/70">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-white">Meet Our Leadership Team</h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Experienced professionals passionate about technology and innovation
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300"
                >
                  <div className="text-6xl mb-4">{member.avatar}</div>
                  <h3 className="text-xl font-bold mb-2 text-white">{member.name}</h3>
                  <p className="text-cyan-400 mb-3 font-semibold">{member.role}</p>
                  <p className="text-white/70 text-sm">{member.expertise}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-white">Our Journey</h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Key milestones in our mission to democratize AI technology
              </p>
            </motion.div>
            
            <div className="max-w-4xl mx-auto">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="flex-1 text-center">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-full inline-block font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-cyan-400 rounded-full mx-4"></div>
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                    <p className="text-white/70">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-6 text-white">Ready to Work With Us?</h2>
              <p className="text-xl text-white/70 mb-8">
                Join the hundreds of organizations that have already transformed their business with Zion Tech Group's innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  Get Started Today
                </Link>
                <Link 
                  href="/services"
                  className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  Explore Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
