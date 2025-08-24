import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { GraduationCap, Brain, Target, Users, BarChart3, CheckCircle, ArrowRight, Star, Globe, Cpu, Shield, Rocket, Clock, TrendingUp, BookOpen, Video, Headphones, Award } from 'lucide-react';

const AIPoweredSalesTraining: React.FC = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "AI Learning",
      description: "Intelligent personalized learning paths",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      title: "Adaptive Training",
      description: "Training that adapts to your progress",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Target,
      title: "Performance Tracking",
      description: "Real-time progress monitoring",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "AI-powered sales coaching",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const trainingModules = [
    "Advanced sales techniques and strategies",
    "AI-powered customer behavior analysis",
    "Sales automation and process optimization",
    "Lead qualification and scoring mastery",
    "Sales pipeline management excellence",
    "Customer relationship building skills"
  ];

  const trainingFormats = [
    {
      title: "Interactive Learning",
      description: "Engaging multimedia content with AI-powered interactions",
      icon: Video,
      benefits: ["Video lessons", "Interactive exercises", "Real-time feedback"]
    },
    {
      title: "Virtual Coaching",
      description: "AI-powered sales coaching and mentorship",
      icon: Users,
      benefits: ["Personalized guidance", "24/7 availability", "Progress tracking"]
    },
    {
      title: "Practice Scenarios",
      description: "Real-world sales scenarios for hands-on practice",
      icon: Target,
      benefits: ["Role-playing", "Skill assessment", "Performance analytics"]
    },
    {
      title: "Certification Program",
      description: "Comprehensive certification in AI-powered sales",
      icon: Award,
      benefits: ["Industry recognition", "Skill validation", "Career advancement"]
    }
  ];

  const benefits = [
    "Improve sales performance by 200%",
    "Master AI-powered sales techniques",
    "Reduce training time by 60%",
    "Increase conversion rates by 150%",
    "Build confidence in sales interactions",
    "Stay ahead of industry trends"
  ];

  const learningPath = [
    {
      stage: "Foundation",
      description: "Core sales principles and AI fundamentals",
      duration: "2 weeks",
      skills: ["Sales basics", "AI concepts", "Customer psychology"]
    },
    {
      stage: "Intermediate",
      description: "Advanced techniques and AI applications",
      duration: "4 weeks",
      skills: ["AI tools", "Advanced strategies", "Automation"]
    },
    {
      stage: "Expert",
      description: "Mastery of AI-powered sales excellence",
      duration: "6 weeks",
      skills: ["Expert techniques", "Innovation", "Leadership"]
    }
  ];

  return (
    <Layout
      title="AI-powered Sales Training 2045 - Zion Tech Group"
      description="Revolutionary AI-powered sales training platform that provides personalized learning paths, adaptive training, and expert mentorship for sales excellence."
      keywords="AI sales training, sales training, sales coaching, sales certification, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
                <GraduationCap className="w-4 h-4 mr-2" />
                Sales Training Technology
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                AI-powered
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Sales Training
                </span>
                <span className="block text-3xl md:text-4xl text-gray-300 mt-4">2045 Edition</span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
                Master the art of sales with our revolutionary AI training platform. 
                Personalized learning paths, adaptive training, and expert mentorship for sales excellence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center"
                >
                  Start Training
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-blue-500/30 text-blue-300 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300"
                >
                  Training Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Revolutionary Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the cutting-edge capabilities that make our sales training platform truly revolutionary
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group"
                >
                  <div className={`p-6 rounded-2xl bg-gradient-to-br ${feature.color} bg-opacity-10 border border-white/10 hover:border-white/20 transition-all duration-300 h-full`}>
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Training Modules Section */}
        <section className="py-20 bg-gradient-to-r from-blue-500/5 to-cyan-500/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Training Modules
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive training coverage for every aspect of modern sales
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trainingModules.map((module, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-lg text-gray-300">{module}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Training Formats Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Training Formats
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Multiple learning formats to suit your preferred style
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {trainingFormats.map((format, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                    <format.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{format.title}</h3>
                  <p className="text-gray-300 text-lg mb-6">{format.description}</p>
                  <ul className="space-y-2">
                    {format.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Path Section */}
        <section className="py-20 bg-gradient-to-r from-blue-500/5 to-cyan-500/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Learning Path
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Structured progression from foundation to expert level
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {learningPath.map((stage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center p-8"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{stage.stage}</h3>
                  <p className="text-gray-300 text-lg mb-4">{stage.description}</p>
                  <div className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-4">
                    {stage.duration}
                  </div>
                  <ul className="space-y-2 text-left">
                    {stage.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Training Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See the incredible impact of AI-powered sales training
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-gray-300 font-medium">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-3xl p-12">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Master Sales?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Start your AI-powered sales training journey and achieve sales excellence.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 text-lg"
                >
                  Start Training Now
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIPoweredSalesTraining;