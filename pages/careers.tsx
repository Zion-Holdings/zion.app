import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Users, 
  Zap, 
  Globe, 
  Heart, 
  Star,
  ArrowRight,
  Clock,
  MapPin,
  DollarSign
} from 'lucide-react';

const Careers = () => {
  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health coverage, mental health support, and wellness programs'
    },
    {
      icon: Users,
      title: 'Team Culture',
      description: 'Collaborative environment with diverse, talented professionals'
    },
    {
      icon: Globe,
      title: 'Remote First',
      description: 'Work from anywhere with flexible schedules and global opportunities'
    },
    {
      icon: Zap,
      title: 'Innovation Time',
      description: 'Dedicated time for personal projects and cutting-edge research'
    },
    {
      icon: Star,
      title: 'Career Growth',
      description: 'Continuous learning, mentorship, and advancement opportunities'
    },
    {
      icon: Briefcase,
      title: 'Flexible Benefits',
      description: 'Customizable benefits package to suit your lifestyle needs'
    },
  ];

  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'AI Research',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$120K - $180K',
      description: 'Lead development of AI consciousness systems and quantum computing applications'
    },
    {
      title: 'Quantum Computing Specialist',
      department: 'Quantum Research',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$100K - $150K',
      description: 'Research and develop quantum algorithms for business applications'
    },
    {
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '2+ years',
      salary: '$80K - $120K',
      description: 'Build scalable web applications and microservices architecture'
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$90K - $140K',
      description: 'Design and maintain cloud infrastructure and automation systems'
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$110K - $160K',
      description: 'Lead product strategy for AI-powered business solutions'
    },
    {
      title: 'Data Scientist',
      department: 'Data Science',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$95K - $145K',
      description: 'Develop machine learning models and data-driven insights'
    },
  ];

  return (
    <>
      <Head>
        <title>Careers at Zion Tech Group - Join Our Innovation Team</title>
        <meta name="description" content="Join Zion Tech Group's mission to revolutionize technology. Explore career opportunities in AI, quantum computing, and autonomous systems. Work with cutting-edge technology and shape the future." />
        <meta name="keywords" content="Zion Tech Group careers, job opportunities, AI jobs, quantum computing careers, technology jobs, remote work, innovation careers" />
        <meta property="og:title" content="Careers at Zion Tech Group - Join Our Innovation Team" />
        <meta property="og:description" content="Join Zion Tech Group's mission to revolutionize technology. Explore career opportunities in AI, quantum computing, and autonomous systems." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/careers" />
        <link rel="canonical" href="https://ziontechgroup.com/careers" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Join Our Mission
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-blue-200 max-w-3xl mx-auto mb-8"
            >
              Help us revolutionize technology through AI consciousness, quantum computing, 
              and autonomous systems. Be part of the future.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a
                href="#open-positions"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 inline-flex items-center"
              >
                View Open Positions
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-white text-center mb-16"
            >
              Why Join Zion Tech Group?
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center hover:bg-white/20 transition-colors duration-300"
                >
                  <benefit.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-blue-200">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">Our Culture</h2>
                <p className="text-lg text-blue-200 mb-6">
                  At Zion Tech Group, we foster a culture of innovation, collaboration, and continuous learning. 
                  Our team members are passionate about pushing the boundaries of what's possible.
                </p>
                <p className="text-lg text-blue-200 mb-6">
                  We believe in empowering our employees to take ownership of their work, 
                  experiment with new ideas, and contribute to our mission of revolutionizing technology.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400">50+</div>
                    <div className="text-blue-200">Team Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400">25+</div>
                    <div className="text-blue-200">Countries</div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20"
              >
                <h3 className="text-2xl font-bold text-white mb-4">Values That Drive Us</h3>
                <ul className="space-y-3 text-blue-200">
                  <li className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 mr-3" />
                    Innovation at the core of everything we do
                  </li>
                  <li className="flex items-center">
                    <Users className="w-5 h-5 text-blue-400 mr-3" />
                    Collaboration and diverse perspectives
                  </li>
                  <li className="flex items-center">
                    <Zap className="w-5 h-5 text-purple-400 mr-3" />
                    Continuous learning and growth
                  </li>
                  <li className="flex items-center">
                    <Heart className="w-5 h-5 text-red-400 mr-3" />
                    Work-life balance and well-being
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section id="open-positions" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-white text-center mb-16"
            >
              Open Positions
            </motion.h2>
            <div className="grid gap-6">
              {openPositions.map((position, index) => (
                <motion.div
                  key={position.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-colors duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                      <p className="text-blue-200 mb-4">{position.description}</p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div className="flex items-center text-blue-200">
                          <Briefcase className="w-4 h-4 mr-2" />
                          {position.department}
                        </div>
                        <div className="flex items-center text-blue-200">
                          <MapPin className="w-4 h-4 mr-2" />
                          {position.location}
                        </div>
                        <div className="flex items-center text-blue-200">
                          <Clock className="w-4 h-4 mr-2" />
                          {position.type}
                        </div>
                        <div className="flex items-center text-blue-200">
                          <DollarSign className="w-4 h-4 mr-2" />
                          {position.salary}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0 lg:ml-6">
                      <a
                        href="/contact"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300 inline-flex items-center"
                      >
                        Apply Now
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-white mb-6"
            >
              Don't See the Right Role?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-blue-200 mb-8"
            >
              We're always looking for talented individuals who are passionate about 
              technology and innovation. Send us your resume and let's discuss opportunities.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Send Resume
              </a>
              <a
                href="/about"
                className="bg-transparent hover:bg-white/10 text-white font-bold py-3 px-8 rounded-lg border border-white transition-colors duration-300"
              >
                Learn More
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Careers;