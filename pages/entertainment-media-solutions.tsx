import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Film, Music, Camera, Gamepad2, Palette, Video, Headphones, 
  Sparkles, Zap, Target, Users, Globe, Star, Award, BookOpen
} from 'lucide-react';

const EntertainmentMediaSolutions: React.FC = () => {
  const solutions = [
    {
      title: 'AI-Powered Content Creation',
      description: 'Revolutionary AI tools for generating high-quality entertainment content',
      icon: <Sparkles className="w-8 h-8 text-purple-400" />,
      features: [
        'AI Video Generation & Editing',
        'Automated Music Composition',
        'Intelligent Story Development',
        'Content Personalization Engine'
      "
    },
    {
      title: 'Digital Media Platforms',
      description: 'Next-generation platforms for content distribution and engagement',
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      features: [
        'Streaming Infrastructure',
        'Interactive Content Delivery',
        'Multi-Platform Distribution',
        'Real-time Analytics'
      "
    },
    {
      title: 'Gaming & Interactive Media',
      description: 'Cutting-edge gaming and interactive entertainment solutions',
      icon: <Gamepad2 className="w-8 h-8 text-green-400" />,
      features: [
        'Cloud Gaming Platforms',
        'VR/AR Experiences',
        'AI Game Development',
        'Interactive Storytelling'
      "
    },
    {
      title: 'Creative Production Tools',
      description: 'Advanced tools for creative professionals and content creators',
      icon: <Palette className="w-8 h-8 text-pink-400" />,
      features: [
        'AI-Assisted Design',
        'Collaborative Workflows',
        'Asset Management',
        'Quality Assurance'
      "
    }
  ];

  const industries = [
    'Film & Television',
    'Music & Audio',
    'Gaming & Esports',
    'Digital Art & Design',
    'Live Events & Streaming',
    'Publishing & Media'
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                Entertainment & Media Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your creative vision with cutting-edge technology solutions designed for the entertainment and media industry
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
                <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Revolutionary Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Discover how our technology is reshaping the entertainment and media landscape
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    {solution.icon}
                    <h3 className="text-2xl font-bold text-white ml-4">{solution.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Star className="w-4 h-4 text-purple-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="py-20 px-4 bg-gray-900/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive solutions across the entire entertainment and media ecosystem
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 text-center border border-gray-700 hover:border-pink-500 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="text-2xl mb-3">
                    {index === 0 && <Film className="w-8 h-8 text-purple-400 mx-auto" />}
                    {index === 1 && <Music className="w-8 h-8 text-blue-400 mx-auto" />}
                    {index === 2 && <Gamepad2 className="w-8 h-8 text-green-400 mx-auto" />}
                    {index === 3 && <Palette className="w-8 h-8 text-pink-400 mx-auto" />}
                    {index === 4 && <Video className="w-8 h-8 text-red-400 mx-auto" />}
                    {index === 5 && <BookOpen className="w-8 h-8 text-yellow-400 mx-auto" />}
                  </div>
                  <h3 className="text-white font-semibold">{industry}</h3>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Ready to Transform Your Media?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the future of entertainment with our cutting-edge technology solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                  Start Your Project
                </button>
                <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                  Schedule Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default EntertainmentMediaSolutions;