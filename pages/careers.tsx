import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Brain, 
  Atom, 
  Shield, 
  Rocket,
  Star,
  CheckCircle,
  TrendingUp,
  Zap,
  Heart,
  Briefcase,
  Network,
  Gift,
  Headphones,
  MapPin,
  Clock,
  DollarSign,
  GraduationCap,
  Coffee,
  Gamepad2,
  Palette,
  Music,
  BookOpen,
  Calendar,
  Phone,
  Mail,
  ExternalLink
} from 'lucide-react';
import Link from 'next/link';

export default function Careers() {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');

  const departments = [
    { id: 'all', name: 'All Departments', count: 25 },
    { id: 'engineering', name: 'Engineering', count: 12 },
    { id: 'ai-research', name: 'AI Research', count: 6 },
    { id: 'quantum', name: 'Quantum Computing', count: 4 },
    { id: 'sales', name: 'Sales & Marketing', count: 3 }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'ai-research',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$120K - $180K',
      description: 'Lead development of cutting-edge AI consciousness and neural network technologies.',
      requirements: [
        'PhD in Computer Science, AI, or related field',
        'Experience with large language models and neural networks',
        'Proficiency in Python, PyTorch, TensorFlow',
        'Published research in AI/ML conferences'
      ],
      benefits: [
        'Competitive salary and equity',
        'Flexible remote work',
        'Professional development budget',
        'Health, dental, and vision insurance'
      ]
    },
    {
      id: 2,
      title: 'Quantum Computing Scientist',
      department: 'quantum',
      location: 'Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$100K - $150K',
      description: 'Research and develop quantum algorithms and quantum-AI convergence solutions.',
      requirements: [
        'PhD in Physics, Computer Science, or related field',
        'Experience with quantum computing frameworks',
        'Knowledge of quantum algorithms and quantum mechanics',
        'Experience with quantum machine learning'
      ],
      benefits: [
        'Competitive salary and equity',
        'State-of-the-art quantum computing access',
        'Conference attendance and research funding',
        'Comprehensive benefits package'
      ]
    },
    {
      id: 3,
      title: 'Full Stack Developer',
      department: 'engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$90K - $140K',
      description: 'Build scalable web applications and APIs for our AI and quantum technology platforms.',
      requirements: [
        'Experience with React, Node.js, and TypeScript',
        'Knowledge of cloud platforms (AWS, Azure, GCP)',
        'Experience with microservices architecture',
        'Strong problem-solving skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Remote work flexibility',
        'Latest development tools and equipment',
        'Professional development opportunities'
      ]
    },
    {
      id: 4,
      title: 'AI Product Manager',
      department: 'ai-research',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$110K - $160K',
      description: 'Drive product strategy and development for our AI consciousness evolution platform.',
      requirements: [
        'Experience in AI/ML product management',
        'Strong technical background',
        'Excellent communication skills',
        'Experience with enterprise software'
      ],
      benefits: [
        'Competitive salary and equity',
        'Remote work flexibility',
        'Product leadership opportunities',
        'Comprehensive benefits package'
      ]
    },
    {
      id: 5,
      title: 'Quantum Software Engineer',
      department: 'quantum',
      location: 'Middletown, DE',
      type: 'Full-time',
      experience: '2+ years',
      salary: '$80K - $130K',
      description: 'Develop software for quantum computing applications and quantum-AI integration.',
      requirements: [
        'Bachelor\'s in Computer Science or related field',
        'Experience with Python and quantum computing libraries',
        'Knowledge of quantum algorithms',
        'Strong software engineering skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Quantum computing lab access',
        'Training and certification programs',
        'Health and wellness benefits'
      ]
    }
  ];

  const companyValues = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible and encourage creative thinking.'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: 'Collaboration',
      description: 'Great ideas come from diverse teams working together towards common goals.'
    },
    {
      icon: <Rocket className="w-8 h-8 text-emerald-400" />,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from code quality to customer experience.'
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-400" />,
      title: 'Work-Life Balance',
      description: 'We believe in sustainable productivity and supporting our team\'s well-being.'
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6 text-green-400" />,
      title: 'Competitive Compensation',
      description: 'Above-market salaries, equity packages, and performance bonuses'
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-400" />,
      title: 'Remote Work',
      description: 'Flexible remote work options with home office setup support'
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-purple-400" />,
      title: 'Learning & Development',
      description: 'Unlimited learning budget, conference attendance, and certification programs'
    },
    {
      icon: <Heart className="w-6 h-6 text-pink-400" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance with wellness programs'
    },
    {
      icon: <Calendar className="w-6 h-6 text-cyan-400" />,
      title: 'Flexible Time Off',
      description: 'Unlimited PTO, paid holidays, and flexible scheduling'
    },
    {
      icon: <Gift className="w-6 h-6 text-emerald-400" />,
      title: 'Perks & Benefits',
      description: 'Latest equipment, team events, and professional development opportunities'
    }
  ];

  const filteredJobs = selectedDepartment === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === selectedDepartment);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-8">
              Help us build the future of AI, quantum computing, and emerging technologies. 
              Join a team of innovators, researchers, and engineers pushing the boundaries of what's possible.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#open-positions" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300">
                View Open Positions
              </Link>
              <Link href="/contact" className="px-8 py-4 border-2 border-cyan-500/40 text-cyan-300 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              The principles that guide our culture and define how we work together.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-white/70 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Benefits & Perks</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              We take care of our team with comprehensive benefits and a supportive work environment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex-shrink-0 mt-1">{benefit.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-white/70 text-sm">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="open-positions" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Find the perfect role for your skills and career goals.
            </p>
          </motion.div>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDepartment(dept.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedDepartment === dept.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                {dept.name} ({dept.count})
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-white/70 text-sm">
                      <div className="flex items-center space-x-2">
                        <Briefcase className="w-4 h-4" />
                        <span>{job.department.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span>{job.experience}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-4 h-4" />
                        <span>{job.salary}</span>
                      </div>
                    </div>
                  </div>
                  <Link
                    href={`/contact?position=${encodeURIComponent(job.title)}`}
                    className="mt-4 lg:mt-0 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300"
                  >
                    Apply Now
                  </Link>
                </div>

                <p className="text-white/80 mb-6">{job.description}</p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-white/70 text-sm">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {job.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start">
                          <Star className="w-4 h-4 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-white/70 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center py-12"
            >
              <p className="text-white/70 text-lg">No positions available in this department at the moment.</p>
              <p className="text-white/50 text-sm mt-2">Check back soon or contact us for general inquiries.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Don't See the Right Role?</h2>
            <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
              We're always looking for talented individuals to join our team. Send us your resume and let's discuss how you can contribute to our mission.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-6 h-6 text-cyan-400" />
                <span className="text-white">careers@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-6 h-6 text-cyan-400" />
                <span className="text-white">+1 302 464 0950</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300">
                Send Resume
              </Link>
              <Link href="/about" className="px-8 py-4 border-2 border-cyan-500/40 text-cyan-300 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300">
                Learn About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}