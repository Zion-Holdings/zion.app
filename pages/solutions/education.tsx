import React from 'react';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Brain, 
  Shield, 
  Database, 
  Cloud, 
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Globe,
  Rocket,
  Activity,
  Zap,
  Lock,
  BarChart3,
  BookOpen,
  TrendingUp
} from 'lucide-react';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';

const EducationSolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: 'AI-Powered Learning Platform',
      description: 'Intelligent learning systems with personalized education experiences',
      icon: <Brain className="w-8 h-8" />,
      features: ['Adaptive Learning', 'Personalized Content', 'Progress Tracking', 'Intelligent Tutoring'],
      href: '/ai-education-platform',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Virtual Reality Learning',
      description: 'Immersive VR experiences for enhanced education and training',
      icon: <BookOpen className="w-8 h-8" />,
      features: ['3D Learning Environments', 'Interactive Simulations', 'Virtual Field Trips', 'Hands-on Training'],
      href: '/vr-learning-platform',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Student Analytics Platform',
      description: 'Comprehensive analytics for student performance and engagement',
      icon: <BarChart3 className="w-8 h-8" />,
      features: ['Performance Tracking', 'Engagement Metrics', 'Predictive Analytics', 'Intervention Planning'],
      href: '/student-analytics-platform',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Educational Cybersecurity',
      description: 'Advanced security solutions for educational institutions',
      icon: <Shield className="w-8 h-8" />,
      features: ['Student Data Protection', 'Network Security', 'Compliance Management', 'Threat Detection'],
      href: '/education-cybersecurity',
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Learning Management System',
      description: 'Comprehensive LMS with AI-powered features',
      icon: <Cloud className="w-8 h-8" />,
      features: ['Course Management', 'Content Creation', 'Assessment Tools', 'Collaboration Features'],
      href: '/learning-management-system',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  const stats = [
    { label: 'Educational Institutions', value: '200+', icon: <GraduationCap className="w-6 h-6" /> },
    { label: 'Students Served', value: '2M+', icon: <Users className="w-6 h-6" /> },
    { label: 'Learning Improvement', value: '45%', icon: <Star className="w-6 h-6" /> },
    { label: 'Engagement Increase', value: '60%', icon: <TrendingUp className="w-6 h-6" /> }
  ];

  const features = [
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Student Privacy',
      description: 'FERPA compliant student data protection'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Real-time Learning',
      description: 'Instant feedback and adaptive content'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Global Access',
      description: 'Available worldwide with local content'
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Scalable Platform',
      description: 'Grows with your educational needs'
    }
  ];

  return (
    <UltraFuturisticBackground variant="quantum">
      <div className="min-h-screen">
        <SEO 
          title="Education Solutions - Zion Tech Group | AI-Powered Educational Technology" 
          description="Transform education with Zion Tech Group's AI learning platforms, VR experiences, analytics, cybersecurity, and LMS solutions. Drive student engagement and learning outcomes." 
          canonical="https://ziontechgroup.com/solutions/education/" 
        />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Education Solutions
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Revolutionizing education with AI-powered learning platforms, virtual reality experiences, intelligent analytics, and comprehensive learning management systems. Transform how students learn and educators teach.
            </motion.p>
            
            {/* Stats Grid */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="flex justify-center mb-2 text-cyan-400">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-4xl font-bold text-center text-white mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Our Education Solutions
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${solution.color} flex items-center justify-center mb-4`}>
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                  <p className="text-gray-300 mb-4">{solution.description}</p>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={solution.href}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-4xl font-bold text-center text-white mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Why Choose Our Education Solutions?
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ready to Transform Education?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join the education revolution with our AI-powered solutions. Improve student outcomes, increase engagement, and create personalized learning experiences.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 hover:scale-105"
              >
                Get Started Today <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraFuturisticBackground>
  );
};

export default EducationSolutionsPage;