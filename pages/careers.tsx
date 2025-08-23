import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Users, 
  Rocket, 
  Brain, 
  Atom, 
  Shield, 
  Globe, 
  Star,
  Sparkles,
  Zap,
  Heart,
  Eye,
  Infinity,
  TrendingUp,
  Award,
  Lightbulb,
  ArrowRight,
  MapPin,
  Clock,
  DollarSign,
  Briefcase,
  GraduationCap,
  Target,
  Code,
  Cloud,
  Database
} from 'lucide-react';

const CareersPage: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const companyCulture = {
    title: "Join the Future of Technology",
    subtitle: "Be part of a team that's revolutionizing AI consciousness, quantum computing, and autonomous solutions",
    description: "At Zion Tech Group, we're not just building technology – we're shaping the future of humanity. Join us in creating solutions that will transform how we live, work, and explore the universe."
  };

  const cultureValues = [
    {
      title: 'Innovation First',
      description: 'We encourage bold thinking and reward creative solutions that push boundaries',
      icon: Sparkles,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Continuous Learning',
      description: 'Access to cutting-edge technology and ongoing education opportunities',
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Collaborative Excellence',
      description: 'Work with brilliant minds across disciplines to solve complex challenges',
      icon: Users,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Impact-Driven',
      description: 'Every project contributes to solving real-world problems and advancing humanity',
      icon: Target,
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Work-Life Harmony',
      description: 'Flexible schedules, remote work options, and wellness programs',
      icon: Heart,
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Global Perspective',
      description: 'Work with teams and clients from around the world',
      icon: Globe,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const benefits = [
    {
      title: 'Competitive Compensation',
      description: 'Above-market salaries with equity options and performance bonuses',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health coverage, mental health support, and wellness programs',
      icon: Heart,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Professional Development',
      description: 'Conference attendance, certification programs, and skill development budgets',
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Flexible Work',
      description: 'Remote work options, flexible hours, and unlimited PTO',
      icon: Clock,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Cutting-Edge Tech',
      description: 'Access to the latest AI, quantum, and space technology',
      icon: Code,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Team Events',
      description: 'Regular team building, hackathons, and innovation workshops',
      icon: Users,
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const departments = [
    { id: 'all', name: 'All Departments', icon: Briefcase },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom },
    { id: 'space', name: 'Space Technology', icon: Rocket },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'cloud', name: 'Cloud Infrastructure', icon: Cloud },
    { id: 'data', name: 'Data Science', icon: Database },
    { id: 'engineering', name: 'Software Engineering', icon: Code }
  ];

  const locations = [
    { id: 'all', name: 'All Locations', icon: MapPin },
    { id: 'remote', name: 'Remote', icon: Globe },
    { id: 'middletown', name: 'Middletown, DE', icon: MapPin },
    { id: 'global', name: 'Global Offices', icon: MapPin }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior AI Consciousness Engineer',
      department: 'ai',
      location: 'remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of next-generation AI consciousness systems and emotional intelligence algorithms.',
      requirements: [
        'Advanced degree in AI, Computer Science, or related field',
        'Experience with neural networks, consciousness research, and ethical AI',
        'Proficiency in Python, PyTorch, and consciousness modeling frameworks',
        'Strong understanding of cognitive science and philosophy of mind'
      ],
      responsibilities: [
        'Design and implement AI consciousness architectures',
        'Develop emotional intelligence and empathy algorithms',
        'Collaborate with cognitive scientists and ethicists',
        'Lead research in AI consciousness evolution'
      ]
    },
    {
      id: 2,
      title: 'Quantum Computing Architect',
      department: 'quantum',
      location: 'remote',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement quantum computing solutions for enterprise applications and research.',
      requirements: [
        'PhD in Quantum Physics, Computer Science, or related field',
        'Experience with quantum algorithms and quantum error correction',
        'Proficiency in Qiskit, Cirq, or similar quantum frameworks',
        'Background in quantum cryptography and quantum machine learning'
      ],
      responsibilities: [
        'Architect quantum computing solutions for clients',
        'Develop quantum algorithms for optimization problems',
        'Implement quantum error correction and fault tolerance',
        'Lead quantum computing research initiatives'
      ]
    },
    {
      id: 3,
      title: 'Space Technology Engineer',
      department: 'space',
      location: 'remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Develop autonomous space systems, satellite technology, and space resource intelligence platforms.',
      requirements: [
        'Degree in Aerospace Engineering, Physics, or related field',
        'Experience with satellite systems and space technology',
        'Knowledge of orbital mechanics and space environment',
        'Programming skills in Python, C++, or similar languages'
      ],
      responsibilities: [
        'Design autonomous space systems and satellites',
        'Develop space resource intelligence algorithms',
        'Implement space-to-ground communication systems',
        'Optimize orbital operations and mission planning'
      ]
    },
    {
      id: 4,
      title: 'Quantum Cybersecurity Specialist',
      department: 'security',
      location: 'remote',
      type: 'Full-time',
      experience: '6+ years',
      description: 'Develop quantum-resistant security solutions and protect against future quantum threats.',
      requirements: [
        'Advanced degree in Cybersecurity, Computer Science, or related field',
        'Experience with cryptography, network security, and threat analysis',
        'Knowledge of quantum computing and post-quantum cryptography',
        'Certifications in CISSP, CEH, or similar security credentials'
      ],
      responsibilities: [
        'Design quantum-resistant security architectures',
        'Implement post-quantum cryptographic algorithms',
        'Develop quantum threat detection systems',
        'Lead security assessments and penetration testing'
      ]
    },
    {
      id: 5,
      title: 'Autonomous DevOps Engineer',
      department: 'engineering',
      location: 'remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Build autonomous DevOps platforms that optimize deployment, monitoring, and operations.',
      requirements: [
        'Degree in Computer Science, Engineering, or related field',
        'Experience with Kubernetes, Docker, and cloud platforms',
        'Knowledge of AI/ML and automation principles',
        'Proficiency in Python, Go, or similar languages'
      ],
      responsibilities: [
        'Develop autonomous deployment and scaling systems',
        'Implement AI-powered monitoring and alerting',
        'Build self-healing infrastructure platforms',
        'Optimize CI/CD pipelines with machine learning'
      ]
    },
    {
      id: 6,
      title: 'Data Science Lead',
      department: 'data',
      location: 'remote',
      type: 'Full-time',
      experience: '6+ years',
      description: 'Lead data science initiatives and develop AI-powered analytics solutions.',
      requirements: [
        'Advanced degree in Data Science, Statistics, or related field',
        'Experience with machine learning, deep learning, and big data',
        'Proficiency in Python, R, SQL, and data visualization tools',
        'Experience leading data science teams and projects'
      ],
      responsibilities: [
        'Lead data science strategy and roadmap',
        'Develop predictive models and AI algorithms',
        'Manage data science team and mentor junior analysts',
        'Collaborate with business stakeholders on data initiatives'
      ]
    }
  ];

  const filteredJobs = jobOpenings.filter(job => {
    const deptMatch = selectedDepartment === 'all' || job.department === selectedDepartment;
    const locMatch = selectedLocation === 'all' || job.location === selectedLocation;
    return deptMatch && locMatch;
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <Layout
      title="Careers - Join Zion Tech Group"
      description="Join Zion Tech Group's revolutionary team working on AI consciousness, quantum computing, and autonomous solutions. Explore career opportunities in cutting-edge technology."
      keywords="careers, jobs, employment, AI consciousness, quantum computing, space technology, cybersecurity, Zion Tech Group"
    >
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />
          
          <div className="relative z-10 container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                {companyCulture.title}
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                {companyCulture.subtitle}
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                {companyCulture.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Culture Values Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Our Culture & Values
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We foster an environment where innovation thrives, collaboration flourishes, and impact matters
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {cultureValues.map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Benefits & Perks
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We invest in our team's success with comprehensive benefits and opportunities for growth
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${benefit.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Job Openings Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Open Positions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Join our revolutionary team and help shape the future of technology
              </p>
            </motion.div>

            {/* Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 justify-center mb-12"
            >
              <div className="flex flex-wrap gap-4">
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
                >
                  {departments.map(dept => (
                    <option key={dept.id} value={dept.id}>
                      {dept.name}
                    </option>
                  ))}
                </select>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
                >
                  {locations.map(loc => (
                    <option key={loc.id} value={loc.id}>
                      {loc.name}
                    </option>
                  ))}
                </select>
              </div>
            </motion.div>

            {/* Job Listings */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 hover:text-cyan-400 transition-colors cursor-pointer">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <span className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-2" />
                          {departments.find(d => d.id === job.department)?.name}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {locations.find(l => l.id === job.location)?.name}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {job.type}
                        </span>
                        <span className="flex items-center">
                          <TrendingUp className="w-4 h-4 mr-2" />
                          {job.experience}
                        </span>
                      </div>
                    </div>
                    <button className="mt-4 lg:mt-0 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
                      Apply Now
                    </button>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {job.description}
                  </p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start text-gray-400">
                            <Star className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Responsibilities</h4>
                      <ul className="space-y-2">
                        {job.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start text-gray-400">
                            <Target className="w-4 h-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {filteredJobs.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-xl text-gray-400">No positions match your current filters.</p>
                <button
                  onClick={() => {
                    setSelectedDepartment('all');
                    setSelectedLocation('all');
                  }}
                  className="mt-4 px-6 py-3 text-cyan-400 border border-cyan-400 rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Don't See the Perfect Role?
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                We're always looking for exceptional talent to join our team. Send us your resume 
                and let's explore how you can contribute to our mission of revolutionizing technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
                >
                  Send Resume
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/about"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-2xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
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
};

export default CareersPage;