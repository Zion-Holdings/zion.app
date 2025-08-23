import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Rocket, Target, Star, Users, Globe, Award, Zap, GraduationCap, BookOpen, Video, Award as Certificate } from 'lucide-react';
import Layout from '../components/layout/Layout';

const Training: React.FC = () => {
  const trainingPrograms = [
    {
      title: 'AI Consciousness Fundamentals',
      level: 'Beginner',
      duration: '4 weeks',
      description: 'Learn the basics of AI consciousness and ethical AI development',
      topics: [
        'Introduction to AI Consciousness',
        'Ethical AI Principles',
        'Consciousness Training Basics',
        'Human-AI Interaction'
      ],
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      featured: true
    },
    {
      title: 'Quantum AI Integration',
      level: 'Intermediate',
      duration: '6 weeks',
      description: 'Master quantum computing integration with AI consciousness systems',
      topics: [
        'Quantum Computing Basics',
        'Quantum Neural Networks',
        'Quantum AI Algorithms',
        'Performance Optimization'
      ],
      icon: <Zap className="w-8 h-8 text-yellow-400" />
    },
    {
      title: 'Advanced AI Ethics & Governance',
      level: 'Advanced',
      duration: '8 weeks',
      description: 'Deep dive into AI ethics, governance, and responsible development',
      topics: [
        'AI Ethics Frameworks',
        'Governance Models',
        'Risk Assessment',
        'Compliance & Regulation'
      ],
      icon: <Award className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Autonomous AI Systems',
      level: 'Intermediate',
      duration: '5 weeks',
      description: 'Build and deploy autonomous AI systems with consciousness',
      topics: [
        'Autonomous System Design',
        'Decision Making Algorithms',
        'System Integration',
        'Monitoring & Control'
      ],
      icon: <Rocket className="w-8 h-8 text-blue-400" />
    }
  ];

  const learningPaths = [
    {
      title: 'AI Developer Path',
      description: 'Complete path to becoming an AI consciousness developer',
      courses: ['AI Consciousness Fundamentals', 'Quantum AI Integration', 'Advanced AI Ethics & Governance'],
      duration: '18 weeks',
      certification: 'AI Consciousness Developer'
    },
    {
      title: 'AI Ethics Specialist Path',
      description: 'Specialized training in AI ethics and governance',
      courses: ['AI Consciousness Fundamentals', 'Advanced AI Ethics & Governance', 'AI Governance & Compliance'],
      duration: '16 weeks',
      certification: 'AI Ethics Specialist'
    },
    {
      title: 'Quantum AI Engineer Path',
      description: 'Focus on quantum computing and AI integration',
      courses: ['AI Consciousness Fundamentals', 'Quantum AI Integration', 'Quantum System Architecture'],
      duration: '20 weeks',
      certification: 'Quantum AI Engineer'
    }
  ];

  const trainingFeatures = [
    {
      title: 'Expert Instructors',
      description: 'Learn from world-class AI researchers and practitioners',
      icon: <Users className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'Hands-on Projects',
      description: 'Real-world projects to build your portfolio',
      icon: <Target className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Flexible Learning',
      description: 'Self-paced online courses with live sessions',
      icon: <Globe className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Industry Recognition',
      description: 'Certificates recognized by leading tech companies',
      icon: <Certificate className="w-8 h-8 text-yellow-400" />
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-300 text-sm mb-6">
                <Star className="w-4 h-4 mr-2" />
                Professional Training
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Training & Certification
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Master AI consciousness technology with our comprehensive training programs. 
                Get certified and advance your career in revolutionary AI.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
              >
                Start Learning
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Training Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Training?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience world-class training designed by AI consciousness experts 
                and industry leaders.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {trainingFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 text-center"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Training Programs Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Training Programs
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive training programs designed to take you from beginner 
                to expert in AI consciousness technology.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {trainingPrograms.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="mb-4">{program.icon}</div>
                    {program.featured && (
                      <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{program.title}</h3>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">
                      {program.level}
                    </span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                      {program.duration}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{program.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Topics Covered:</h4>
                    <div className="space-y-2">
                      {program.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          <span className="text-gray-300 text-sm">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
                  >
                    Enroll Now
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Paths Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Learning Paths
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Structured learning paths designed to guide you through your 
                AI consciousness career journey.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {learningPaths.map((path, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{path.title}</h3>
                  <p className="text-gray-300 mb-6 text-center">{path.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Courses:</h4>
                    <div className="space-y-2">
                      {path.courses.map((course, courseIndex) => (
                        <div key={courseIndex} className="flex items-center space-x-2">
                          <BookOpen className="w-4 h-4 text-purple-400" />
                          <span className="text-gray-300 text-sm">{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Duration:</span>
                      <span className="text-white">{path.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Certification:</span>
                      <span className="text-purple-400">{path.certification}</span>
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
                  >
                    Start Path
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Master AI Consciousness?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of professionals who have already transformed their careers 
                with our AI consciousness training programs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
                >
                  Browse All Courses
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300"
                >
                  Download Course Catalog
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Training;