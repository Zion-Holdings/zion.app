import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const companyStats = [
    { number: '200+', label: 'Micro SaaS Services', description: 'Revolutionary solutions for modern businesses' },
    { number: '99.99%', label: 'Uptime Guarantee', description: 'Reliable infrastructure you can count on' },
    { number: '21', label: 'Day Free Trials', description: 'Risk-free evaluation of our services' },
    { number: '24/7', label: 'AI Support', description: 'Round-the-clock intelligent assistance' },
    { number: '50+', label: 'Technologies', description: 'Cutting-edge tools and frameworks' },
    { number: '1000+', label: 'Happy Clients', description: 'Satisfied customers worldwide' }
  ];

  const coreValues = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, constantly exploring new technologies and approaches.',
      icon: '🚀'
    },
    {
      title: 'Client Success',
      description: 'Your success is our success. We\'re committed to delivering solutions that drive real business value.',
      icon: '🎯'
    },
    {
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in every project, ensuring reliability and performance.',
      icon: '⭐'
    },
    {
      title: 'Continuous Learning',
      description: 'Our team stays ahead of the curve, constantly learning and adapting to new technologies.',
      icon: '📚'
    }
  ];

  const teamMembers = [
    {
      name: 'Kleber Santos',
      role: 'Founder & CEO',
      bio: 'Visionary leader with over 15 years of experience in technology and business innovation.',
      expertise: ['Strategic Leadership', 'Technology Vision', 'Business Development'],
      image: '👨‍💼'
    },
    {
      name: 'AI Development Team',
      role: 'Machine Learning Engineers',
      bio: 'Expert team specializing in cutting-edge AI solutions and machine learning applications.',
      expertise: ['Deep Learning', 'NLP', 'Computer Vision', 'Predictive Analytics'],
      image: '🤖'
    },
    {
      name: 'Cloud Infrastructure Team',
      role: 'DevOps Engineers',
      bio: 'Infrastructure specialists ensuring scalable, secure, and reliable cloud solutions.',
      expertise: ['AWS/Azure/GCP', 'Kubernetes', 'Serverless', 'Security'],
      image: '☁️'
    }
  ];

  const technologies = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'Go', 'Rust'] },
    { category: 'AI/ML', items: ['TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face'] },
    { category: 'Cloud', items: ['AWS', 'Azure', 'GCP', 'Kubernetes'] },
    { category: 'Database', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'] },
    { category: 'Security', items: ['OAuth 2.0', 'JWT', 'SSL/TLS', 'Penetration Testing'] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Head>
        <title>About Zion Tech Group - Our Mission, Team & Values</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to revolutionize technology solutions. Discover our team, values, and commitment to innovation in micro SaaS and AI services." />
        <meta name="keywords" content="about Zion Tech Group, company mission, team, values, technology innovation, Delaware tech company" />
        <meta property="og:title" content="About Zion Tech Group - Our Mission, Team & Values" />
        <meta property="og:description" content="Learn about Zion Tech Group's mission to revolutionize technology solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/about" />
        <link rel="canonical" href="https://ziontechgroup.com/about" />
      </Head>

      {/* Hero Section */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Zion Tech Group</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 leading-relaxed"
          >
            We're a forward-thinking technology company dedicated to revolutionizing how businesses operate through innovative micro SaaS solutions, cutting-edge AI services, and robust cloud infrastructure.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              To democratize access to cutting-edge technology solutions, enabling businesses of all sizes to leverage the power of AI, cloud computing, and innovative software to drive growth and transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors duration-300"
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
                <div className="text-gray-300 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-lg p-8 hover:bg-gray-700 transition-colors duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the brilliant minds behind our innovative solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors duration-300"
              >
                <div className="text-6xl mb-4 text-center">{member.image}</div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <div className="text-blue-400 font-semibold mb-3">{member.role}</div>
                <p className="text-gray-300 mb-4">{member.bio}</p>
                <div className="space-y-1">
                  {member.expertise.map((skill, skillIndex) => (
                    <div key={skillIndex} className="text-sm text-gray-400 flex items-center">
                      <span className="text-green-400 mr-2">•</span>
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Technologies We Master</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our expertise spans the entire technology stack
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-4">{tech.category}</h3>
                <div className="space-y-2">
                  {tech.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="text-gray-300 flex items-center">
                      <span className="text-blue-400 mr-2">▸</span>
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Work With Us?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how we can help transform your business with our innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-white text-blue-600 font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Get in Touch
              </a>
              <a
                href="tel:+13024640950"
                className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}