import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  TrendingUp, GraduationCap, Users, Award, Target, 
  ArrowRight, CheckCircle, Star, Infinity, 
  Eye, Sparkles, Clock, Zap, BookOpen, Globe,
  Brain, Atom, Rocket, Shield, Cloud, Cpu,
  Compass, Lightbulb, Trophy, Map
} from 'lucide-react';

const CareerDevelopmentPage: React.FC = () => {
  const careerPaths = [
    {
      title: 'Individual Contributor',
      description: 'Deep technical expertise and individual excellence',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      levels: [
        {
          level: 'Junior',
          title: 'Junior Engineer',
          description: 'Learning and growing in your technical skills',
          requirements: ['Bachelor\'s degree or equivalent', 'Basic programming knowledge', 'Eagerness to learn'],
          responsibilities: ['Code development', 'Testing and debugging', 'Documentation', 'Team collaboration'],
          timeline: '0-2 years'
        },
        {
          level: 'Mid',
          title: 'Software Engineer',
          description: 'Contributing significantly to technical projects',
          requirements: ['2+ years experience', 'Strong technical skills', 'Project delivery experience'],
          responsibilities: ['Feature development', 'Code reviews', 'Technical design', 'Mentoring juniors'],
          timeline: '2-5 years'
        },
        {
          level: 'Senior',
          title: 'Senior Engineer',
          description: 'Technical leadership and complex problem solving',
          requirements: ['5+ years experience', 'Deep technical expertise', 'Leadership experience'],
          responsibilities: ['Technical architecture', 'System design', 'Team leadership', 'Innovation'],
          timeline: '5+ years'
        }
      ]
    },
    {
      title: 'Technical Leadership',
      description: 'Leading technical teams and driving technical strategy',
      icon: Shield,
      color: 'from-blue-500 to-cyan-500',
      levels: [
        {
          level: 'Lead',
          title: 'Technical Lead',
          description: 'Leading technical direction for projects and teams',
          requirements: ['Senior-level technical skills', 'Team leadership experience', 'Strategic thinking'],
          responsibilities: ['Technical strategy', 'Team leadership', 'Architecture decisions', 'Project planning'],
          timeline: '5-8 years'
        },
        {
          level: 'Principal',
          title: 'Principal Engineer',
          description: 'Setting technical direction across multiple teams',
          requirements: ['8+ years experience', 'Cross-team influence', 'Strategic vision'],
          responsibilities: ['Technical strategy', 'Cross-team coordination', 'Innovation leadership', 'Mentorship'],
          timeline: '8+ years'
        },
        {
          level: 'Distinguished',
          title: 'Distinguished Engineer',
          description: 'Industry-recognized technical leadership',
          requirements: ['10+ years experience', 'Industry recognition', 'Strategic impact'],
          responsibilities: ['Company-wide technical strategy', 'Industry thought leadership', 'Innovation vision'],
          timeline: '10+ years'
        }
      ]
    },
    {
      title: 'Management',
      description: 'Leading teams and driving organizational success',
      icon: Users,
      color: 'from-emerald-500 to-teal-500',
      levels: [
        {
          level: 'Manager',
          title: 'Engineering Manager',
          description: 'Leading engineering teams and delivering results',
          requirements: ['Technical background', 'People management skills', 'Project delivery experience'],
          responsibilities: ['Team management', 'Project delivery', 'Career development', 'Technical oversight'],
          timeline: '5-8 years'
        },
        {
          level: 'Director',
          title: 'Engineering Director',
          description: 'Leading multiple teams and strategic initiatives',
          requirements: ['8+ years experience', 'Multi-team management', 'Strategic planning'],
          responsibilities: ['Multi-team leadership', 'Strategic planning', 'Process improvement', 'Stakeholder management'],
          timeline: '8+ years'
        },
        {
          level: 'VP',
          title: 'VP of Engineering',
          description: 'Leading engineering organization and strategy',
          requirements: ['10+ years experience', 'Organizational leadership', 'Strategic vision'],
          responsibilities: ['Engineering strategy', 'Organizational leadership', 'Executive collaboration', 'Industry leadership'],
          timeline: '10+ years'
        }
      ]
    },
    {
      title: 'Specialist',
      description: 'Deep expertise in specific technical domains',
      icon: Atom,
      color: 'from-indigo-500 to-purple-500',
      levels: [
        {
          level: 'Expert',
          title: 'Domain Expert',
          description: 'Deep expertise in specific technical areas',
          requirements: ['5+ years in domain', 'Deep technical knowledge', 'Industry recognition'],
          responsibilities: ['Technical expertise', 'Knowledge sharing', 'Innovation', 'Consultation'],
          timeline: '5+ years'
        },
        {
          level: 'Architect',
          title: 'Solution Architect',
          description: 'Designing complex technical solutions',
          requirements: ['8+ years experience', 'System design expertise', 'Business understanding'],
          responsibilities: ['Solution design', 'Technical strategy', 'Stakeholder collaboration', 'Best practices'],
          timeline: '8+ years'
        },
        {
          level: 'Fellow',
          title: 'Technical Fellow',
          description: 'Highest level of technical expertise and recognition',
          requirements: ['15+ years experience', 'Industry leadership', 'Innovation impact'],
          responsibilities: ['Technical vision', 'Innovation leadership', 'Industry influence', 'Strategic guidance'],
          timeline: '15+ years'
        }
      ]
    }
  ];

  const developmentPrograms = [
    {
      icon: GraduationCap,
      title: 'Technical Skills Development',
      description: 'Continuous learning in cutting-edge technologies',
      programs: [
        'Advanced AI and Machine Learning',
        'Quantum Computing Fundamentals',
        'Space Technology Applications',
        'Cybersecurity Best Practices',
        'Cloud Architecture & DevOps'
      ]
    },
    {
      icon: Users,
      title: 'Leadership Development',
      description: 'Building leadership skills at all levels',
      programs: [
        'Team Leadership Fundamentals',
        'Strategic Thinking & Planning',
        'Communication & Influence',
        'Change Management',
        'Executive Leadership'
      ]
    },
    {
      icon: Globe,
      title: 'Business Acumen',
      description: 'Understanding business context and strategy',
      programs: [
        'Business Strategy Fundamentals',
        'Financial Literacy',
        'Customer Understanding',
        'Market Analysis',
        'Product Management'
      ]
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Creativity',
      description: 'Fostering innovation and creative thinking',
      programs: [
        'Design Thinking',
        'Innovation Methodologies',
        'Creative Problem Solving',
        'Research & Development',
        'Patent & IP Strategy'
      ]
    }
  ];

  const mentorshipPrograms = [
    {
      icon: Users,
      title: 'Formal Mentorship',
      description: 'Structured mentorship relationships with experienced leaders',
      benefits: [
        'One-on-one guidance',
        'Career planning support',
        'Skill development',
        'Network building'
      ]
    },
    {
      icon: Brain,
      title: 'Technical Mentorship',
      description: 'Deep technical guidance from domain experts',
      benefits: [
        'Technical skill development',
        'Best practices sharing',
        'Code review guidance',
        'Architecture insights'
      ]
    },
    {
      icon: Target,
      title: 'Career Mentorship',
      description: 'Strategic career guidance and planning',
      benefits: [
        'Career path planning',
        'Goal setting',
        'Performance improvement',
        'Advancement strategies'
      ]
    },
    {
      icon: Globe,
      title: 'Cross-functional Mentorship',
      description: 'Learning from different areas of the business',
      benefits: [
        'Broad perspective',
        'Cross-functional skills',
        'Business understanding',
        'Network expansion'
      ]
    }
  ];

  const growthMetrics = [
    { number: '95%', label: 'Internal Promotions', icon: TrendingUp },
    { number: '200+', label: 'Training Programs', icon: GraduationCap },
    { number: '50+', label: 'Mentorship Pairs', icon: Users },
    { number: '24/7', label: 'Learning Resources', icon: BookOpen }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
                <TrendingUp className="w-4 h-4 mr-2" />
                Career Growth
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                Career Development
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Your growth is our priority. We provide clear career paths, comprehensive development programs, 
                and continuous learning opportunities to help you achieve your professional goals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Growth Metrics */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {growthMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-4">
                    <metric.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{metric.number}</div>
                  <div className="text-gray-400">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Career Paths */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Career Paths</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer multiple career paths to match your interests, skills, and aspirations. 
                Choose the path that best fits your career goals.
              </p>
            </motion.div>
            
            <div className="space-y-16">
              {careerPaths.map((path, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
                >
                  <div className="flex items-center mb-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${path.color} mr-6`}>
                      <path.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">{path.title}</h3>
                      <p className="text-lg text-gray-400 mt-2">{path.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {path.levels.map((level, levelIndex) => (
                      <div key={levelIndex} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
                        <div className="flex items-center justify-between mb-4">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                            level.level === 'Junior' ? 'bg-green-500/20 text-green-400' :
                            level.level === 'Mid' ? 'bg-blue-500/20 text-blue-400' :
                            level.level === 'Senior' ? 'bg-purple-500/20 text-purple-400' :
                            level.level === 'Lead' ? 'bg-orange-500/20 text-orange-400' :
                            level.level === 'Principal' ? 'bg-red-500/20 text-red-400' :
                            level.level === 'Distinguished' ? 'bg-yellow-500/20 text-yellow-400' :
                            level.level === 'Manager' ? 'bg-emerald-500/20 text-emerald-400' :
                            level.level === 'Director' ? 'bg-indigo-500/20 text-indigo-400' :
                            level.level === 'VP' ? 'bg-pink-500/20 text-pink-400' :
                            level.level === 'Expert' ? 'bg-cyan-500/20 text-cyan-400' :
                            level.level === 'Architect' ? 'bg-violet-500/20 text-violet-400' :
                            'bg-gray-500/20 text-gray-400'
                          }`}>
                            {level.level}
                          </span>
                          <span className="text-sm text-gray-400">{level.timeline}</span>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-3">{level.title}</h4>
                        <p className="text-gray-400 mb-4 leading-relaxed">{level.description}</p>
                        
                        <div className="mb-4">
                          <h5 className="text-sm font-semibold text-white mb-2">Requirements:</h5>
                          <div className="space-y-1">
                            {level.requirements.map((req, reqIndex) => (
                              <div key={reqIndex} className="flex items-center text-sm">
                                <CheckCircle className="w-3 h-3 text-emerald-400 mr-2 flex-shrink-0" />
                                <span className="text-gray-300">{req}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h5 className="text-sm font-semibold text-white mb-2">Responsibilities:</h5>
                          <div className="space-y-1">
                            {level.responsibilities.map((resp, respIndex) => (
                              <div key={respIndex} className="flex items-center text-sm">
                                <CheckCircle className="w-3 h-3 text-emerald-400 mr-2 flex-shrink-0" />
                                <span className="text-gray-300">{resp}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Programs */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Development Programs</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive development programs cover technical skills, leadership, business acumen, 
                and innovation to support your growth in all areas.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {developmentPrograms.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mr-4">
                      <program.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{program.title}</h3>
                  </div>
                  <p className="text-gray-400 mb-6 leading-relaxed">{program.description}</p>
                  <div className="space-y-3">
                    {program.programs.map((prog, progIndex) => (
                      <div key={progIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{prog}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mentorship Programs */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Mentorship Programs</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with experienced professionals who can guide your career development, 
                share knowledge, and help you navigate your professional journey.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {mentorshipPrograms.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
                    <program.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{program.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{program.description}</p>
                  <div className="space-y-2">
                    {program.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm">
                        <CheckCircle className="w-3 h-3 text-emerald-400 mr-2 flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Grow Your Career?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join our team and take advantage of our comprehensive career development programs. 
                We're committed to helping you achieve your professional goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/careers"
                  className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105"
                >
                  <Target className="w-5 h-5 mr-2" />
                  View Open Positions
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 rounded-xl border border-blue-500/50 text-blue-400 font-semibold hover:bg-blue-500/10 transition-all duration-200"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CareerDevelopmentPage;