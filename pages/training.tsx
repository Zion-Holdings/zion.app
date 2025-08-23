import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Shield, Rocket, Target, Star, 
  Users, Globe, Zap, CheckCircle,
  ArrowRight, Building, Heart, Eye, Code,
  GraduationCap, BookOpen, Video, Clock, Award,
  TrendingUp, Play, Download, ExternalLink
} from 'lucide-react';

export default function TrainingPage() {
  const trainingPaths = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI Consciousness Specialist',
      description: 'Master the fundamentals of AI consciousness, emotional intelligence, and neural network development',
      duration: '6 months',
      level: 'Advanced',
      modules: 12,
      certification: 'AI Consciousness Certification',
      color: 'from-purple-500 to-pink-500',
      featured: true
    },
    {
      icon: <Atom className="w-8 h-8" />,
      title: 'Quantum Computing Engineer',
      description: 'Learn quantum algorithms, quantum cryptography, and quantum machine learning',
      duration: '8 months',
      level: 'Expert',
      modules: 15,
      certification: 'Quantum Computing Certification',
      color: 'from-blue-500 to-cyan-500',
      featured: true
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Space Technology Architect',
      description: 'Design and implement AI-powered space exploration and resource intelligence systems',
      duration: '7 months',
      level: 'Advanced',
      modules: 14,
      certification: 'Space Technology Certification',
      color: 'from-indigo-500 to-purple-500',
      featured: true
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Autonomous Systems Developer',
      description: 'Build self-managing, consciousness-aware autonomous systems for enterprise applications',
      duration: '5 months',
      level: 'Intermediate',
      modules: 10,
      certification: 'Autonomous Systems Certification',
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  const individualCourses = [
    {
      title: 'Introduction to AI Consciousness',
      description: 'Learn the basics of artificial consciousness and emotional intelligence',
      duration: '4 weeks',
      level: 'Beginner',
      price: '$299',
      instructor: 'Dr. Kleber Santos',
      rating: 4.9,
      students: 1250,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Quantum Neural Networks',
      description: 'Explore the intersection of quantum computing and neural networks',
      duration: '6 weeks',
      level: 'Advanced',
      price: '$499',
      instructor: 'Quantum Research Team',
      rating: 4.8,
      students: 890,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Space Resource Intelligence',
      description: 'Master AI-powered space exploration and resource mapping',
      duration: '5 weeks',
      level: 'Intermediate',
      price: '$399',
      instructor: 'Space Innovation Team',
      rating: 4.7,
      students: 650,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'AI Ethics & Governance',
      description: 'Understand ethical AI development and responsible technology practices',
      duration: '3 weeks',
      level: 'All Levels',
      price: '$199',
      instructor: 'Ethics & Governance Team',
      rating: 4.9,
      students: 2100,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Quantum Cybersecurity',
      description: 'Learn quantum-resistant security and post-quantum cryptography',
      duration: '4 weeks',
      level: 'Intermediate',
      price: '$349',
      instructor: 'Security Research Team',
      rating: 4.6,
      students: 780,
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Autonomous Business Intelligence',
      description: 'Build consciousness-driven business intelligence systems',
      duration: '5 weeks',
      level: 'Advanced',
      price: '$449',
      instructor: 'AI Solutions Team',
      rating: 4.8,
      students: 920,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const learningFeatures = [
    {
      icon: <Video className="w-8 h-8" />,
      title: 'Interactive Video Lessons',
      description: 'Engage with high-quality video content and real-world examples',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Comprehensive Materials',
      description: 'Access to detailed documentation, code examples, and reference guides',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Instructors',
      description: 'Learn from world-class researchers and industry practitioners',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Industry Recognition',
      description: 'Earn certificates recognized by leading technology companies',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'AI Research Director',
      company: 'Tech Innovations Inc.',
      quote: 'The AI Consciousness Specialist program transformed my understanding of artificial intelligence. The practical applications and real-world projects were invaluable.',
      rating: 5,
      avatar: '/images/testimonials/sarah-chen.jpg'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Quantum Engineer',
      company: 'Quantum Solutions Corp.',
      quote: 'Zion Tech Group\'s quantum computing training is world-class. I gained practical skills that immediately applied to my work in quantum cryptography.',
      rating: 5,
      avatar: '/images/testimonials/michael-rodriguez.jpg'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Space Technology Lead',
      company: 'Space Exploration Agency',
      quote: 'The space technology training provided cutting-edge knowledge that helped us develop autonomous space systems. Highly recommended for space professionals.',
      rating: 5,
      avatar: '/images/testimonials/emily-watson.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Training & Certification
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Master the future of technology with our comprehensive training programs in AI consciousness, 
              quantum computing, and space technology. Learn from world-class experts and earn industry-recognized certifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#training-paths"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Explore Programs
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 rounded-2xl font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Training Paths */}
      <section id="training-paths" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Professional Training Paths
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive learning journeys designed to transform you into a technology expert
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {trainingPaths.map((path, index) => (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-black/50 rounded-3xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${path.color} flex items-center justify-center`}>
                        {path.icon}
                      </div>
                      {path.featured && (
                        <span className="px-3 py-1 text-sm bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{path.title}</h3>
                    <p className="text-gray-300 mb-6">{path.description}</p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-3 bg-black/30 rounded-xl border border-white/10">
                        <div className="text-lg font-bold text-cyan-400">{path.duration}</div>
                        <div className="text-xs text-gray-400">Duration</div>
                      </div>
                      <div className="text-center p-3 bg-black/30 rounded-xl border border-white/10">
                        <div className="text-lg font-bold text-cyan-400">{path.modules}</div>
                        <div className="text-xs text-gray-400">Modules</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 text-sm bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30">
                        {path.level}
                      </span>
                      <span className="text-gray-400">{path.certification}</span>
                    </div>
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Courses */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Individual Courses
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Focus on specific skills with our targeted course offerings
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {individualCourses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-black/50 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden">
                  <div className="h-32 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${course.color} flex items-center justify-center`}>
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 text-xs bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30">
                        {course.level}
                      </span>
                      <span className="text-xs text-gray-400">{course.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {course.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-2">{course.description}</p>
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                      <span>{course.instructor}</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span>{course.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-cyan-400">{course.price}</span>
                      <span className="text-sm text-gray-400">{course.students} students</span>
                    </div>
                    <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                      Enroll Course
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Why Choose Our Training?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience world-class education designed for the future of technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {learningFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-black/50 border border-white/10"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center flex-shrink-0`}>
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from professionals who have transformed their careers with our training
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-black/30 border border-white/10"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-300 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="text-sm text-cyan-400">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Ready to Master the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of professionals who have advanced their careers with our cutting-edge training programs. 
              Start your journey to becoming a technology expert today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Start Learning
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="mailto:training@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 rounded-2xl font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Contact Training Team
              </a>
            </div>
            <div className="mt-8 p-6 bg-gradient-to-br from-gray-800/50 to-black/50 rounded-2xl border border-white/10">
              <h3 className="text-xl font-semibold mb-3">Corporate Training</h3>
              <p className="text-gray-300 mb-4">
                We offer customized corporate training programs for teams and organizations. 
                Contact us to discuss your specific training needs.
              </p>
              <div className="flex items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-cyan-400" />
                  <span className="text-gray-300">Team Training</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-cyan-400" />
                  <span className="text-gray-300">Custom Programs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-cyan-400" />
                  <span className="text-gray-300">Group Certifications</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}