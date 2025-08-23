import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  BookOpen, 
  GraduationCap, 
  Award, 
  Users, 
  Clock, 
  Star, 
  Play,
  Video,
  FileText,
  Code,
  Brain,
  Atom,
  Shield,
  Rocket,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Download,
  Calendar,
  MapPin,
  DollarSign,
  Globe,
  Zap,
  Target,
  Lightbulb,
  MessageCircle,
  Phone,
  Mail
} from 'lucide-react';
import Link from 'next/link';

export default function Training() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const categories = [
    { id: 'all', name: 'All Courses', count: 25, icon: <BookOpen className="w-5 h-5" /> },
    { id: 'ai', name: 'AI & Machine Learning', count: 8, icon: <Brain className="w-5 h-5" /> },
    { id: 'quantum', name: 'Quantum Computing', count: 6, icon: <Atom className="w-5 h-5" /> },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 5, icon: <Shield className="w-5 h-5" /> },
    { id: 'cloud', name: 'Cloud & DevOps', count: 4, icon: <Rocket className="w-5 h-5" /> },
    { id: 'development', name: 'Development', count: 2, icon: <Code className="w-5 h-5" /> }
  ];

  const levels = [
    { id: 'all', name: 'All Levels', count: 25 },
    { id: 'beginner', name: 'Beginner', count: 10 },
    { id: 'intermediate', name: 'Intermediate', count: 8 },
    { id: 'advanced', name: 'Advanced', count: 7 }
  ];

  const courses = [
    {
      id: 1,
      title: 'AI Consciousness Evolution Fundamentals',
      category: 'ai',
      level: 'beginner',
      description: 'Learn the basics of AI consciousness and how to build systems with genuine awareness.',
      duration: '8 weeks',
      hours: '40 hours',
      price: '$999',
      instructor: 'Dr. Sarah Chen',
      rating: 4.9,
      students: 1250,
      featured: true,
      format: 'Online + Live Sessions',
      certification: 'AI Consciousness Specialist',
      topics: [
        'Introduction to AI Consciousness',
        'Neural Network Fundamentals',
        'Emotional Intelligence in AI',
        'Ethical AI Development',
        'Practical Applications'
      ]
    },
    {
      id: 2,
      title: 'Advanced Quantum Computing',
      category: 'quantum',
      level: 'advanced',
      description: 'Master quantum algorithms and quantum-AI convergence for real-world applications.',
      duration: '12 weeks',
      hours: '60 hours',
      price: '$1,499',
      instructor: 'Dr. James Kim',
      rating: 4.8,
      students: 850,
      featured: true,
      format: 'Online + Lab Access',
      certification: 'Quantum Computing Expert',
      topics: [
        'Quantum Mechanics Fundamentals',
        'Quantum Algorithms',
        'Quantum Machine Learning',
        'Quantum Error Correction',
        'Quantum-AI Integration'
      ]
    },
    {
      id: 3,
      title: 'Zero Trust Security Implementation',
      category: 'cybersecurity',
      level: 'intermediate',
      description: 'Implement comprehensive zero trust security architectures for enterprise environments.',
      duration: '6 weeks',
      hours: '30 hours',
      price: '$799',
      instructor: 'Marcus Rodriguez',
      rating: 4.7,
      students: 1100,
      featured: false,
      format: 'Online + Hands-on Labs',
      certification: 'Zero Trust Security Professional',
      topics: [
        'Zero Trust Principles',
        'Identity & Access Management',
        'Network Security',
        'Data Protection',
        'Compliance & Governance'
      ]
    },
    {
      id: 4,
      title: 'AI-Powered DevOps Automation',
      category: 'cloud',
      level: 'intermediate',
      description: 'Automate your DevOps workflows with AI and machine learning techniques.',
      duration: '5 weeks',
      hours: '25 hours',
      price: '$699',
      instructor: 'Dr. Sarah Chen',
      rating: 4.6,
      students: 950,
      featured: false,
      format: 'Online + Practical Projects',
      certification: 'AI DevOps Engineer',
      topics: [
        'DevOps Fundamentals',
        'AI Integration in CI/CD',
        'Automated Testing',
        'Performance Optimization',
        'Monitoring & Observability'
      ]
    },
    {
      id: 5,
      title: 'Quantum Internet Security',
      category: 'quantum',
      level: 'advanced',
      description: 'Build quantum-resistant security protocols for the future internet.',
      duration: '10 weeks',
      hours: '50 hours',
      price: '$1,299',
      instructor: 'Dr. James Kim',
      rating: 4.9,
      students: 650,
      featured: false,
      format: 'Online + Research Projects',
      certification: 'Quantum Security Specialist',
      topics: [
        'Quantum Cryptography',
        'Post-Quantum Algorithms',
        'Quantum Key Distribution',
        'Network Security',
        'Future-Proofing'
      ]
    },
    {
      id: 6,
      title: 'AI Ethics & Governance',
      category: 'ai',
      level: 'intermediate',
      description: 'Develop ethical AI systems and governance frameworks for responsible AI deployment.',
      duration: '4 weeks',
      hours: '20 hours',
      price: '$599',
      instructor: 'Dr. Sarah Chen',
      rating: 4.8,
      students: 800,
      featured: false,
      format: 'Online + Case Studies',
      certification: 'AI Ethics Professional',
      topics: [
        'AI Ethics Principles',
        'Bias & Fairness',
        'Transparency & Explainability',
        'Privacy & Security',
        'Regulatory Compliance'
      ]
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const featuredCourses = filteredCourses.filter(course => course.featured);
  const regularCourses = filteredCourses.filter(course => !course.featured);

  const certificationPrograms = [
    {
      name: 'AI Consciousness Specialist',
      description: 'Master the fundamentals of AI consciousness and emotional intelligence',
      duration: '6 months',
      courses: 4,
      price: '$2,999',
      level: 'Advanced'
    },
    {
      name: 'Quantum Computing Expert',
      description: 'Comprehensive quantum computing and quantum-AI convergence',
      duration: '8 months',
      courses: 5,
      price: '$3,999',
      level: 'Advanced'
    },
    {
      name: 'Cybersecurity Professional',
      description: 'Complete cybersecurity and zero trust implementation',
      duration: '4 months',
      courses: 3,
      price: '$1,999',
      level: 'Intermediate'
    }
  ];

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
              Training & Certification
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-8">
              Master cutting-edge AI, quantum computing, and cybersecurity technologies 
              with our comprehensive training programs and professional certifications.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search courses, instructors, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-white/50 focus:outline-none focus:border-cyan-500/50 transition-all duration-300"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <span className="text-white/70 text-sm">Category:</span>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm focus:outline-none focus:border-cyan-500/50 transition-all duration-300"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-white/70 text-sm">Level:</span>
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm focus:outline-none focus:border-cyan-500/50 transition-all duration-300"
                >
                  {levels.map(level => (
                    <option key={level.id} value={level.id}>
                      {level.name} ({level.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Courses */}
      {featuredCourses.length > 0 && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Featured Courses</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Our most popular and highly-rated courses taught by industry experts.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-semibold rounded-full">
                          Featured
                        </span>
                        <span className="inline-block px-3 py-1 bg-white/10 text-white/70 text-xs rounded-full">
                          {categories.find(cat => cat.id === course.category)?.name}
                        </span>
                        <span className={`inline-block px-3 py-1 text-xs rounded-full ${
                          course.level === 'beginner' ? 'bg-green-500/20 text-green-400' :
                          course.level === 'intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-yellow-400">
                        <Star className="w-5 h-5 fill-current" />
                        <span className="text-white font-semibold">{course.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {course.title}
                    </h3>
                    
                    <p className="text-white/70 mb-6 leading-relaxed">
                      {course.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <Users className="w-5 h-5 text-cyan-400" />
                          <span className="text-white/70 text-sm">{course.students} students enrolled</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Clock className="w-5 h-5 text-purple-400" />
                          <span className="text-white/70 text-sm">{course.duration} • {course.hours}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <GraduationCap className="w-5 h-5 text-emerald-400" />
                          <span className="text-white/70 text-sm">{course.instructor}</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <Play className="w-5 h-5 text-pink-400" />
                          <span className="text-white/70 text-sm">{course.format}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Award className="w-5 h-5 text-yellow-400" />
                          <span className="text-white/70 text-sm">{course.certification}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <DollarSign className="w-5 h-5 text-green-400" />
                          <span className="text-white font-semibold">{course.price}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">What You'll Learn</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {course.topics.map((topic, topicIndex) => (
                          <div key={topicIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span className="text-white/70 text-sm">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      href={`/training/${course.id}`}
                      className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 text-center inline-block"
                    >
                      Enroll Now
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Courses */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">All Courses</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Explore our complete catalog of training courses and learning paths.
            </p>
          </motion.div>

          {regularCourses.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-block px-3 py-1 bg-white/10 text-white/70 text-xs rounded-full">
                        {categories.find(cat => cat.id === course.category)?.name}
                      </span>
                      <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                        course.level === 'beginner' ? 'bg-green-500/20 text-green-400' :
                        course.level === 'intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {course.title}
                    </h3>
                    
                    <p className="text-white/70 text-sm mb-4 line-clamp-3">
                      {course.description}
                    </p>

                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-white/60">Duration:</span>
                        <span className="text-white">{course.duration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/60">Instructor:</span>
                        <span className="text-white">{course.instructor}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/60">Rating:</span>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white">{course.rating}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-cyan-400">{course.price}</span>
                      <Link
                        href={`/training/${course.id}`}
                        className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm hover:bg-cyan-500/30 transition-all duration-300"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center py-12"
            >
              <p className="text-white/70 text-lg">No courses found matching your criteria.</p>
              <p className="text-white/50 text-sm mt-2">Try adjusting your search or filters.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Certification Programs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Professional Certifications</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Earn industry-recognized certifications that validate your expertise and advance your career.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {certificationPrograms.map((program, index) => (
              <motion.div
                key={program.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <Award className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{program.name}</h3>
                  <p className="text-white/70 text-sm">{program.description}</p>
                </div>

                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/70">Duration:</span>
                    <span className="text-white">{program.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Courses:</span>
                    <span className="text-white">{program.courses}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Level:</span>
                    <span className="text-white">{program.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Price:</span>
                    <span className="text-cyan-400 font-semibold">{program.price}</span>
                  </div>
                </div>

                <Link
                  href="/training/certifications"
                  className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 text-center inline-block"
                >
                  View Program
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Resources */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Learning Resources</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Access free resources, tutorials, and learning materials to support your journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Link href="/docs" className="block p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <FileText className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Documentation</h3>
                <p className="text-white/70 text-sm">Comprehensive guides and references</p>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Link href="/blog" className="block p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                <BookOpen className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Blog & Articles</h3>
                <p className="text-white/70 text-sm">Latest insights and tutorials</p>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Link href="/webinars" className="block p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300">
                <Video className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Webinars</h3>
                <p className="text-white/70 text-sm">Live sessions and recordings</p>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Link href="/community" className="block p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
                <Users className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Community</h3>
                <p className="text-white/70 text-sm">Connect with learners</p>
              </Link>
            </motion.div>
          </div>
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
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Learning?</h2>
            <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
              Join thousands of professionals advancing their careers with our cutting-edge technology training.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-6 h-6 text-cyan-400" />
                <span className="text-white">+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-6 h-6 text-cyan-400" />
                <span className="text-white">training@ziontechgroup.com</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/training/catalog" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300">
                Browse All Courses
              </Link>
              <Link href="/contact" className="px-8 py-4 border-2 border-cyan-500/40 text-cyan-300 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300">
                Contact Training Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}