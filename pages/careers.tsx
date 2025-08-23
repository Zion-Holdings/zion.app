import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Users, 
  Heart, 
  Zap, 
  Globe, 
  Award, 
  ArrowRight,
  MapPin,
  Clock,
  DollarSign,
  Send,
  CheckCircle,
  Star,
  Brain,
  Atom,
  Rocket,
  Shield
} from 'lucide-react';

export default function Careers() {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments', icon: <Briefcase className="w-5 h-5" /> },
    { id: 'ai', name: 'AI & Machine Learning', icon: <Brain className="w-5 h-5" /> },
    { id: 'quantum', name: 'Quantum Computing', icon: <Atom className="w-5 h-5" /> },
    { id: 'space', name: 'Space Technology', icon: <Rocket className="w-5 h-5" /> },
    { id: 'engineering', name: 'Engineering', icon: <Zap className="w-5 h-5" /> },
    { id: 'security', name: 'Cybersecurity', icon: <Shield className="w-5 h-5" /> }
  ];

  const locations = [
    { id: 'all', name: 'All Locations', icon: <Globe className="w-5 h-5" /> },
    { id: 'remote', name: 'Remote', icon: <Globe className="w-5 h-5" /> },
    { id: 'middletown', name: 'Middletown, DE', icon: <MapPin className="w-5 h-5" /> },
    { id: 'newyork', name: 'New York, NY', icon: <MapPin className="w-5 h-5" /> },
    { id: 'siliconvalley', name: 'Silicon Valley, CA', icon: <MapPin className="w-5 h-5" /> }
  ];

  const jobs = [
    {
      id: 1,
      title: 'Senior AI Research Scientist',
      department: 'ai',
      location: 'remote',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$150,000 - $250,000',
      description: 'Lead cutting-edge research in AI consciousness, neural networks, and autonomous systems.',
      requirements: [
        'PhD in Computer Science, AI, or related field',
        'Experience with large language models and neural networks',
        'Published research in top AI conferences',
        'Experience leading research teams'
      ],
      benefits: [
        'Competitive salary with equity',
        'Flexible remote work',
        'Conference attendance and research budget',
        'Cutting-edge technology access'
      ]
    },
    {
      id: 2,
      title: 'Quantum Software Engineer',
      department: 'quantum',
      location: 'remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$120,000 - $180,000',
      description: 'Develop quantum algorithms and software for our quantum computing platform.',
      requirements: [
        'MS/PhD in Physics, Computer Science, or related field',
        'Experience with quantum programming languages (Qiskit, Cirq)',
        'Understanding of quantum algorithms and quantum mechanics',
        'Strong programming skills in Python'
      ],
      benefits: [
        'Competitive salary with equity',
        'Remote work flexibility',
        'Quantum computing lab access',
        'Professional development opportunities'
      ]
    },
    {
      id: 3,
      title: 'Space Technology Engineer',
      department: 'space',
      location: 'middletown',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$130,000 - $200,000',
      description: 'Design and develop space resource mining and satellite technology solutions.',
      requirements: [
        'BS/MS in Aerospace Engineering or related field',
        'Experience with satellite systems and space technology',
        'Knowledge of orbital mechanics and propulsion systems',
        'Experience with CAD and simulation software'
      ],
      benefits: [
        'Competitive salary with equity',
        'On-site and remote hybrid work',
        'Space technology lab access',
        'Professional certification support'
      ]
    },
    {
      id: 4,
      title: 'Senior Cybersecurity Engineer',
      department: 'security',
      location: 'remote',
      type: 'Full-time',
      experience: '6+ years',
      salary: '$140,000 - $220,000',
      description: 'Lead cybersecurity initiatives and develop quantum-safe security solutions.',
      requirements: [
        'BS/MS in Cybersecurity, Computer Science, or related field',
        'Experience with penetration testing and security architecture',
        'Knowledge of quantum cryptography and post-quantum security',
        'Relevant certifications (CISSP, CEH, etc.)'
      ],
      benefits: [
        'Competitive salary with equity',
        'Remote work flexibility',
        'Security conference attendance',
        'Advanced security training'
      ]
    },
    {
      id: 5,
      title: 'Full Stack Developer',
      department: 'engineering',
      location: 'remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$100,000 - $150,000',
      description: 'Build scalable web applications and microservices for our technology platforms.',
      requirements: [
        'BS in Computer Science or related field',
        'Experience with React, Node.js, and cloud platforms',
        'Knowledge of microservices architecture',
        'Experience with DevOps and CI/CD'
      ],
      benefits: [
        'Competitive salary with equity',
        'Remote work flexibility',
        'Latest development tools and equipment',
        'Professional development budget'
      ]
    },
    {
      id: 6,
      title: 'AI Ethics Specialist',
      department: 'ai',
      location: 'remote',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$110,000 - $170,000',
      description: 'Develop ethical frameworks and governance policies for AI systems.',
      requirements: [
        'MS/PhD in Ethics, Philosophy, or related field',
        'Experience with AI ethics and responsible AI',
        'Understanding of AI governance and policy',
        'Experience working with cross-functional teams'
      ],
      benefits: [
        'Competitive salary with equity',
        'Remote work flexibility',
        'Ethics conference attendance',
        'Research publication support'
      ]
    }
  ];

  const filteredJobs = jobs.filter(job => {
    const departmentMatch = selectedDepartment === 'all' || job.department === selectedDepartment;
    const locationMatch = selectedLocation === 'all' || job.location === selectedLocation;
    return departmentMatch && locationMatch;
  });

  const culture = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Innovation First',
      description: 'We encourage creative thinking and breakthrough ideas that push the boundaries of what\'s possible.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaborative Excellence',
      description: 'Work with world-class experts across disciplines to solve humanity\'s greatest challenges.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Human-Centric',
      description: 'Technology serves humanity. We prioritize ethical development and human well-being.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Fast-Paced Growth',
      description: 'Rapid learning, career advancement, and opportunities to work on cutting-edge projects.'
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Competitive Compensation',
      description: 'Above-market salaries, equity packages, and performance bonuses'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Remote-First Culture',
      description: 'Work from anywhere with flexible schedules and work-life balance'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Professional Development',
      description: 'Continuous learning, conference attendance, and certification support'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Cutting-Edge Technology',
      description: 'Access to the latest AI, quantum, and space technology platforms'
    }
  ];

  return (
    <>
      <Head>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group's team of innovators working on AI, quantum computing, and space technology. Explore career opportunities and help shape the future." />
        <meta name="keywords" content="careers Zion Tech Group, AI jobs, quantum computing careers, space technology jobs, technology careers" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/careers" />
        <meta property="og:title" content="Careers - Zion Tech Group" />
        <meta property="og:description" content="Join Zion Tech Group's team of innovators working on AI, quantum computing, and space technology." />
        <meta property="og:url" content="https://ziontechgroup.com/careers" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Careers - Zion Tech Group" />
        <meta name="twitter:description" content="Join Zion Tech Group's team of innovators working on AI, quantum computing, and space technology." />
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
                Join Our Mission
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Help us revolutionize technology and shape the future of AI, quantum computing, and space exploration. Join a team of visionaries building tomorrow's solutions today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#open-positions" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  View Open Positions
                </a>
                <a href="/contact" className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300">
                  Get in Touch
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Culture Section */}
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
                Our Culture
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                At Zion Tech Group, we foster an environment of innovation, collaboration, and continuous learning. Join a team that values creativity, ethics, and human progress.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {culture.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4 text-cyan-400">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
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
                Why Work With Us?
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                We offer comprehensive benefits and opportunities that support your growth, well-being, and career advancement.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-xl border border-white/10"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-cyan-400">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-400">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Listings Section */}
        <section className="py-20" id="open-positions">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                Open Positions
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Explore exciting opportunities to join our team of innovators and help shape the future of technology.
              </p>
            </motion.div>

            {/* Filters */}
            <div className="mb-8 flex flex-wrap gap-4 justify-center">
              <div className="flex flex-wrap gap-2">
                {departments.map((dept) => (
                  <button
                    key={dept.id}
                    onClick={() => setSelectedDepartment(dept.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                      selectedDepartment === dept.id
                        ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                        : 'bg-white/5 border-white/20 text-gray-300 hover:border-cyan-500/30 hover:text-cyan-400'
                    }`}
                  >
                    {dept.icon}
                    <span>{dept.name}</span>
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {locations.map((loc) => (
                  <button
                    key={loc.id}
                    onClick={() => setSelectedLocation(loc.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                      selectedLocation === loc.id
                        ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                        : 'bg-white/5 border-white/20 text-gray-300 hover:border-cyan-500/30 hover:text-cyan-400'
                    }`}
                  >
                    {loc.icon}
                    <span>{loc.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Job Cards */}
            <div className="space-y-6">
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 p-6"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-white">
                          {job.title}
                        </h3>
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                          {job.type}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span className="capitalize">{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{job.experience}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4" />
                          <span>{job.salary}</span>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-4">
                        {job.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-white mb-2">Requirements:</h4>
                          <ul className="space-y-1">
                            {job.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-2">Benefits:</h4>
                          <ul className="space-y-1">
                            {job.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                                <Star className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="lg:flex-shrink-0">
                      <a
                        href={`/contact?position=${encodeURIComponent(job.title)}`}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                      >
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-gray-400 text-lg">
                  No positions match your current filters. Try adjusting your selection or check back later for new opportunities.
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Application Process */}
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
                How to Apply
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our application process is designed to be simple and efficient, ensuring we find the best talent to join our mission.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Submit Application',
                  description: 'Send us your resume and cover letter through our contact form or email.',
                  icon: <Send className="w-8 h-8" />
                },
                {
                  step: '02',
                  title: 'Initial Review',
                  description: 'Our team reviews your application and reaches out within 48 hours.',
                  icon: <CheckCircle className="w-8 h-8" />
                },
                {
                  step: '03',
                  title: 'Interview Process',
                  description: 'Technical interviews, culture fit discussions, and final team review.',
                  icon: <Users className="w-8 h-8" />
                }
              ].map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                    {step.icon}
                  </div>
                  <div className="text-2xl font-bold text-cyan-400 mb-2">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-400">
                    {step.description}
                  </p>
                </motion.div>
              ))}
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
                Ready to Join Our Mission?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                Don't see the perfect role? We're always looking for talented individuals who share our passion for innovation and technology. Send us your resume and let's discuss how you can contribute to our mission.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Send Your Resume
                </a>
                <a href="/about" className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300">
                  Learn More About Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}