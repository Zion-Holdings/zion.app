import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Zap, Target, Users, Globe, ArrowRight, Activity } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function BrainComputerInterface() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Brain-Computer Interface
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Direct neural connection between human consciousness and artificial intelligence. 
                Control technology with your thoughts, enhance cognitive abilities, and unlock human potential.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What is BCI */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Brain className="w-8 h-8 text-cyan-400" />
                  <h2 className="text-3xl font-bold text-white">What is Brain-Computer Interface?</h2>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Brain-Computer Interface (BCI) technology creates a direct communication pathway between the human brain 
                  and external devices. By interpreting neural signals, we enable direct control of computers, prosthetics, 
                  and AI systems through pure thought.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Our advanced BCI systems use cutting-edge neuroscience and AI to decode brain activity patterns, 
                  enabling unprecedented human-computer interaction and cognitive enhancement.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <div className="w-full h-96 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl border border-purple-500/30 flex items-center justify-center">
                  <div className="text-center">
                    <Cpu className="w-24 h-24 text-purple-400 mx-auto mb-4" />
                    <p className="text-purple-400 text-lg font-semibold">Neural Interface Matrix</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300">Revolutionary BCI capabilities</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-12 h-12 text-cyan-400" />,
                  title: "Neural Signal Processing",
                  description: "Advanced algorithms that decode brain activity patterns in real-time with high accuracy."
                },
                {
                  icon: <Zap className="w-12 h-12 text-blue-400" />,
                  title: "Thought-to-Action",
                  description: "Direct control of devices and systems through pure mental commands."
                },
                {
                  icon: <Target className="w-12 h-12 text-purple-400" />,
                  title: "Cognitive Enhancement",
                  description: "Augment memory, learning, and problem-solving capabilities through neural stimulation."
                },
                {
                  icon: <Users className="w-12 h-12 text-green-400" />,
                  title: "Human-AI Collaboration",
                  description: "Seamless integration between human consciousness and artificial intelligence."
                },
                {
                  icon: <Globe className="w-12 h-12 text-yellow-400" />,
                  title: "Virtual Reality Control",
                  description: "Navigate digital worlds and virtual environments using only your thoughts."
                },
                {
                  icon: <Activity className="w-12 h-12 text-pink-400" />,
                  title: "Biometric Monitoring",
                  description: "Real-time health monitoring and early warning systems for neurological conditions."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                  className="p-8 bg-black/40 border border-gray-800 rounded-2xl hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Applications</h2>
              <p className="text-xl text-gray-300">Transformative BCI solutions for human enhancement</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Medical Rehabilitation",
                  description: "Restore mobility and communication for patients with paralysis or speech disorders.",
                  benefits: ["Motor function restoration", "Communication recovery", "Quality of life improvement"]
                },
                {
                  title: "Gaming & Entertainment",
                  description: "Control games and virtual experiences through pure thought and imagination.",
                  benefits: ["Immersive gameplay", "Thought-controlled VR", "Enhanced user experience"]
                },
                {
                  title: "Productivity Enhancement",
                  description: "Control computers and software applications using mental commands.",
                  benefits: ["Hands-free operation", "Increased efficiency", "Accessibility improvement"]
                },
                {
                  title: "Research & Development",
                  description: "Advance neuroscience research and develop new BCI applications.",
                  benefits: ["Scientific breakthroughs", "Technology advancement", "Human potential expansion"]
                }
              ].map((app, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 + index * 0.1 }}
                  className="p-8 bg-black/40 border border-gray-800 rounded-2xl hover:border-cyan-500/50 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-white mb-3">{app.title}</h3>
                  <p className="text-gray-300 mb-4">{app.description}</p>
                  <ul className="space-y-2">
                    {app.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-cyan-400">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Technology Stack</h2>
              <p className="text-xl text-gray-300">Cutting-edge technologies powering our BCI platform</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
                className="space-y-6"
              >
                <div className="p-6 bg-black/40 border border-gray-800 rounded-xl">
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">EEG & fNIRS Sensors</h3>
                  <p className="text-gray-300">High-resolution brain activity monitoring using advanced neuroimaging techniques.</p>
                </div>
                <div className="p-6 bg-black/40 border border-gray-800 rounded-xl">
                  <h3 className="text-xl font-bold text-blue-400 mb-3">Neural Signal Processing</h3>
                  <p className="text-gray-300">AI-powered algorithms for real-time brain signal interpretation and classification.</p>
                </div>
                <div className="p-6 bg-black/40 border border-gray-800 rounded-xl">
                  <h3 className="text-xl font-bold text-purple-400 mb-3">Machine Learning Models</h3>
                  <p className="text-gray-300">Deep learning systems trained on extensive neural data for accurate pattern recognition.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 2.0 }}
                className="space-y-6"
              >
                <div className="p-6 bg-black/40 border border-gray-800 rounded-xl">
                  <h3 className="text-xl font-bold text-green-400 mb-3">Real-time Processing</h3>
                  <p className="text-gray-300">Ultra-low latency systems for instant thought-to-action response.</p>
                </div>
                <div className="p-6 bg-black/40 border border-gray-800 rounded-xl">
                  <h3 className="text-xl font-bold text-yellow-400 mb-3">Adaptive Learning</h3>
                  <p className="text-gray-300">Systems that learn and adapt to individual brain patterns and preferences.</p>
                </div>
                <div className="p-6 bg-black/40 border border-gray-800 rounded-xl">
                  <h3 className="text-xl font-bold text-pink-400 mb-3">Safety Protocols</h3>
                  <p className="text-gray-300">Comprehensive safety measures and ethical guidelines for BCI usage.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.2 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Connect Your Mind?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Experience the future of human-computer interaction and unlock your full potential.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                >
                  Get Started <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/quantum-services"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}