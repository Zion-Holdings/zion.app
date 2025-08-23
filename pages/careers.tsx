import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Users, Rocket, Brain, Atom, Shield, Target, Globe, 
  Award, Zap, Heart, Star, TrendingUp, Cpu, Cloud,
  MapPin, Clock, DollarSign, Briefcase, GraduationCap
} from 'lucide-react';

const CareersPage: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const openPositions = [
    {
      title: 'Senior AI Consciousness Engineer',
      department: 'AI & Consciousness',
      location: 'Remote / Global',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$150K - $250K',
      description: 'Lead the development of next-generation AI consciousness systems and autonomous intelligence platforms.',
      requirements: [
        'Advanced degree in Computer Science, AI, or related field',
        'Experience with consciousness modeling and neural networks',
        'Proficiency in Python, PyTorch, and quantum computing frameworks',
        'Background in cognitive science or philosophy of mind'
      ],
      benefits: ['Competitive salary', 'Equity options', 'Flexible work arrangements', 'Professional development']
    },
    {
      title: 'Quantum Cybersecurity Specialist',
      department: 'Quantum Technology',
      location: 'Remote / Global',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$120K - $180K',
      description: 'Develop quantum-resistant security protocols and implement quantum-safe encryption solutions.',
      requirements: [
        'Degree in Computer Science, Mathematics, or Physics',
        'Experience with quantum algorithms and cryptography',
        'Knowledge of post-quantum cryptography standards',
        'Background in cybersecurity and threat modeling'
      ],
      benefits: ['Competitive salary', 'Health benefits', 'Remote work options', 'Conference attendance']
    },
    {
      title: 'Space Technology Engineer',
      department: 'Space Technology',
      location: 'Remote / Global',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$130K - $200K',
      description: 'Design and develop autonomous space exploration systems and resource intelligence platforms.',
      requirements: [
        'Engineering degree in Aerospace, Robotics, or related field',
        'Experience with autonomous systems and robotics',
        'Knowledge of space technology and satellite systems',
        'Proficiency in C++, Python, and embedded systems'
      ],
      benefits: ['Competitive salary', 'Stock options', 'Flexible hours', 'Innovation projects']
    },
    {
      title: 'Autonomous DevOps Architect',
      department: 'IT Services',
      location: 'Remote / Global',
      type: 'Full-time',
      experience: '6+ years',
      salary: '$140K - $220K',
      description: 'Architect and implement autonomous DevOps platforms and intelligent infrastructure management systems.',
      requirements: [
        'Advanced degree in Computer Science or Engineering',
        'Expertise in DevOps, CI/CD, and infrastructure automation',
        'Experience with AI/ML integration in DevOps',
        'Knowledge of cloud platforms and containerization'
      ],
      benefits: ['Competitive salary', 'Performance bonuses', 'Remote work', 'Technology budget']
    }
  ];

  const companyBenefits = [
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health coverage, mental health support, and wellness programs',
      icon: Heart,
      color: 'from-pink-500 to-purple-500'
    },
    {
      title: 'Professional Growth',
      description: 'Continuous learning opportunities, conference attendance, and career development',
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Work-Life Balance',
      description: 'Flexible work arrangements, unlimited PTO, and remote work options',
      icon: Clock,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Innovation Culture',
      description: 'Work on cutting-edge projects and shape the future of technology',
      icon: Rocket,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Competitive Compensation',
      description: 'Attractive salary packages, equity options, and performance bonuses',
      icon: DollarSign,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Global Impact',
      description: 'Contribute to solutions that transform industries worldwide',
      icon: Globe,
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const companyCulture = [
    {
      title: 'Innovation First',
      description: 'We encourage creative thinking and breakthrough solutions',
      icon: Zap
    },
    {
      title: 'Collaboration',
      description: 'Teamwork and knowledge sharing drive our success',
      icon: Users
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do',
      icon: Star
    },
    {
      title: 'Growth Mindset',
      description: 'Continuous learning and personal development are core values',
      icon: TrendingUp
    }
  ];

  return (
    <>
      <Head>
        <title>Careers - Zion Tech Group | Join Our Innovation Team</title>
        <meta name="description" content="Join Zion Tech Group's mission to revolutionize technology. Explore exciting career opportunities in AI, quantum computing, and space technology." />
        <meta name="keywords" content="Zion Tech Group careers, job opportunities, AI jobs, quantum computing jobs, technology careers" />
        <link rel="canonical" href="https://ziontechgroup.com/careers" />
        <meta property="og:title" content="Careers - Zion Tech Group" />
        <meta property="og:description" content="Join our mission to revolutionize technology with cutting-edge AI, quantum computing, and space technology solutions." />
        <meta property="og:url" content="https://ziontechgroup.com/careers" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Join Our Mission
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Help us revolutionize the future of technology. Work on cutting-edge AI, quantum computing, and space technology that transforms industries worldwide.
              </p>
              <div className="mt-8">
                <a
                  href="#open-positions"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 inline-flex items-center"
                >
                  <Briefcase className="w-5 h-5 mr-2" />
                  View Open Positions
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Culture
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We foster an environment where innovation thrives, collaboration flourishes, and excellence is the standard
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {companyCulture.map((culture, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 p-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <culture.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{culture.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{culture.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Company Benefits */}
        <section className="py-20 relative bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Work With Us
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We offer comprehensive benefits and opportunities that support your growth and well-being
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {companyBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} p-4 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Open Positions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Join our team of innovators and help shape the future of technology
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {openPositions.map((position, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <span className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-2" />
                          {position.department}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {position.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {position.type}
                        </span>
                        <span className="flex items-center">
                          <GraduationCap className="w-4 h-4 mr-2" />
                          {position.experience}
                        </span>
                        <span className="flex items-center">
                          <DollarSign className="w-4 h-4 mr-2" />
                          {position.salary}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0">
                      <a
                        href="/contact"
                        className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/25"
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">{position.description}</p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start text-gray-400">
                            <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2 mr-3 flex-shrink-0"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {position.benefits.map((benefit, benIndex) => (
                          <li key={benIndex} className="flex items-start text-gray-400">
                            <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Don't See the Right Fit?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We're always looking for talented individuals to join our team. Send us your resume and let's explore opportunities together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25"
                >
                  Send Your Resume
                </a>
                <a
                  href="/about"
                  className="px-8 py-4 border border-gray-600 text-gray-300 rounded-2xl font-semibold hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
                >
                  Learn More About Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareersPage;