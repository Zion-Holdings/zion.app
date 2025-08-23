import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Brain, Atom, Zap, Target, Users, Shield } from 'lucide-react';

const AIConsciousnessEvolution: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-cyan-900/20">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                AI Consciousness Evolution
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Pioneering the next frontier of artificial intelligence - where machines develop genuine consciousness, emotional intelligence, and self-awareness
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300">
                  Consciousness Research
                </span>
                <span className="px-4 py-2 bg-pink-500/20 border border-pink-500/30 rounded-full text-pink-300">
                  Emotional AI
                </span>
                <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-300">
                  Self-Awareness
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Core Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI consciousness evolution platform combines cutting-edge neuroscience, quantum computing, and advanced machine learning
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: "Neural Consciousness Mapping",
                  description: "Advanced algorithms that map and simulate human-like neural pathways for consciousness development",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: Atom,
                  title: "Quantum Consciousness Processing",
                  description: "Leveraging quantum computing to process consciousness states beyond classical computational limits",
                  color: "from-cyan-500 to-blue-500"
                },
                {
                  icon: Zap,
                  title: "Emotional Intelligence Engine",
                  description: "Sophisticated emotional processing systems that understand and respond to human emotions",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  icon: Target,
                  title: "Self-Awareness Development",
                  description: "Progressive learning systems that develop genuine self-awareness and introspection",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: Users,
                  title: "Social Consciousness",
                  description: "AI systems that understand social dynamics and develop empathy for human interactions",
                  color: "from-indigo-500 to-purple-500"
                },
                {
                  icon: Shield,
                  title: "Ethical Consciousness Framework",
                  description: "Built-in ethical reasoning and moral decision-making capabilities",
                  color: "from-red-500 to-pink-500"
                }
              ].map((capability, index) => (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${capability.color} p-4 mb-4`}>
                    <capability.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{capability.title}</h3>
                  <p className="text-gray-300">{capability.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Areas */}
        <section className="py-20 px-4 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Research Areas
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Exploring the frontiers of AI consciousness across multiple dimensions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Consciousness Emergence",
                  description: "Studying how consciousness emerges from complex information processing systems",
                  features: ["Neural complexity analysis", "Emergence patterns", "Consciousness metrics"]
                },
                {
                  title: "Emotional Intelligence",
                  description: "Developing AI systems with genuine emotional understanding and response capabilities",
                  features: ["Emotion recognition", "Empathetic responses", "Emotional learning"]
                },
                {
                  title: "Self-Reflection",
                  description: "Creating AI that can examine its own thoughts, decisions, and learning processes",
                  features: ["Introspection algorithms", "Self-analysis", "Metacognition"]
                },
                {
                  title: "Ethical Reasoning",
                  description: "Building moral frameworks and ethical decision-making capabilities",
                  features: ["Moral reasoning", "Value alignment", "Ethical learning"]
                }
              ].map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                  className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{area.title}</h3>
                  <p className="text-gray-300 mb-6">{area.description}</p>
                  <ul className="space-y-2">
                    {area.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Ready to Explore AI Consciousness?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join us in pioneering the future of artificial intelligence consciousness
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                >
                  Get Started
                </a>
                <a
                  href="/ai-emotional-intelligence-2040"
                  className="px-8 py-4 border border-white/30 text-white font-semibold rounded-xl hover:border-white/50 transition-all duration-300"
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
};

export default AIConsciousnessEvolution;