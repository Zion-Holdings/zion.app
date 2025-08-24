import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Brain, Globe, Shield, Cpu, Database, Users, GraduationCap } from 'lucide-react';
import Link from 'next/link';

const EducationTechnologySolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: 'Learning Management Systems',
      description: 'Modern LMS platforms for educational institutions',
      icon: <BookOpen className="w-8 h-8 text-blue-400" />,
      features: ['Course Management', 'Student Portals', 'Assessment Tools', 'Progress Tracking']
    },
    {
      title: 'AI-Powered Learning',
      description: 'Intelligent tutoring and personalized learning experiences',
      icon: <Brain className="w-8 h-8 text-green-400" />,
      features: ['Adaptive Learning', 'Intelligent Tutoring', 'Performance Analytics', 'Personalized Content']
    },
    {
      title: 'Virtual Classrooms',
      description: 'Advanced virtual learning environments and tools',
      icon: <Globe className="w-8 h-8 text-purple-400" />,
      features: ['Video Conferencing', 'Interactive Whiteboards', 'Screen Sharing', 'Breakout Rooms']
    },
    {
      title: 'Student Analytics',
      description: 'Data-driven insights for student success',
      icon: <Database className="w-8 h-8 text-yellow-400" />,
      features: ['Performance Metrics', 'Engagement Tracking', 'Early Warning Systems', 'Success Predictions']
    }
  ];

  const edtechBenefits = [
    'Improved Student Engagement', 'Personalized Learning', 'Better Outcomes', 'Cost Efficiency'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Education
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Technology Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform education with innovative technology solutions. 
            From AI-powered learning to virtual classrooms, we help educational institutions deliver better learning experiences.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                {solution.icon}
                <h3 className="text-2xl font-bold text-white ml-4">{solution.title}</h3>
              </div>
              <p className="text-gray-300 mb-6">{solution.description}</p>
              <ul className="space-y-2">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* EdTech Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            EdTech Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {edtechBenefits.map((benefit, index) => (
              <div key={index} className="bg-white/20 rounded-lg p-4 text-center">
                <div className="text-white font-semibold">{benefit}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">25%</div>
            <div className="text-gray-300">Better Outcomes</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">40%</div>
            <div className="text-gray-300">Cost Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">90%</div>
            <div className="text-gray-300">Student Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-300">Learning Access</div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Transform Education with Technology
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Let's discuss how our education technology solutions can improve learning outcomes and student engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Get Education Assessment
              </Link>
              <Link 
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EducationTechnologySolutionsPage;