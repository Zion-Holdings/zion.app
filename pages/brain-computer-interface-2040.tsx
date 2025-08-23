import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Brain, Cpu, Zap, Target, Users, Award, Clock, CheckCircle, Eye, Heart } from 'lucide-react';

export default function BrainComputerInterface2040() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 rounded-full text-pink-300 text-sm mb-6">
                <Brain className="w-4 h-4" />
                Revolutionary 2040 Technology
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Brain-Computer Interface
                </span>
                <br />
                <span className="text-white">2040</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Experience the future of human-computer interaction with our revolutionary brain-computer interface, 
                enabling direct neural communication and enhanced cognitive capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Experience Interface
                </button>
                <button className="px-8 py-4 border-2 border-pink-400 text-pink-400 font-semibold rounded-xl hover:bg-pink-400 hover:text-black transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary BCI Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our brain-computer interface represents the pinnacle of neural technology, 
                combining advanced neuroscience with cutting-edge computing capabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "Neural Communication",
                  description: "Direct brain-to-computer communication for seamless interaction.",
                  color: "from-pink-500 to-purple-500"
                },
                {
                  icon: <Cpu className="w-8 h-8" />,
                  title: "Cognitive Enhancement",
                  description: "Enhanced memory, learning, and cognitive processing capabilities.",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Real-time Processing",
                  description: "Instant neural signal processing and response generation.",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  icon: <Eye className="w-8 h-8" />,
                  title: "Visual Augmentation",
                  description: "Enhanced visual perception and augmented reality integration.",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <Heart className="w-8 h-8" />,
                  title: "Emotional Intelligence",
                  description: "Advanced emotional recognition and response systems.",
                  color: "from-red-500 to-pink-500"
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Precision Control",
                  description: "High-precision control of external devices and systems.",
                  color: "from-indigo-500 to-purple-500"
                }
              ].map((feature, index) => (
                <div key={index} className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-pink-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Neural Technology Stack
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Built on the most advanced neural and computing technologies available in 2040, ensuring seamless brain-computer integration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Neural Signal Processing",
                "Advanced EEG Technology",
                "Machine Learning Algorithms",
                "Real-time Data Analysis",
                "Neural Network Integration",
                "Cognitive Enhancement Tools",
                "Brain Mapping Systems",
                "Neural Interface Protocols"
              ].map((tech, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-gray-800/30 border border-gray-700/30 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary BCI Applications
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our brain-computer interface enables breakthrough applications across healthcare, gaming, and productivity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Healthcare",
                  description: "Assistive technology for paralysis, communication disorders, and rehabilitation.",
                  icon: "🏥"
                },
                {
                  title: "Gaming & Entertainment",
                  description: "Immersive gaming experiences with direct neural control and feedback.",
                  icon: "🎮"
                },
                {
                  title: "Productivity",
                  description: "Enhanced work capabilities through direct brain-computer interaction.",
                  icon: "💼"
                },
                {
                  title: "Education",
                  description: "Accelerated learning and enhanced memory retention capabilities.",
                  icon: "📚"
                },
                {
                  title: "Accessibility",
                  description: "Improved accessibility for individuals with physical disabilities.",
                  icon: "♿"
                },
                {
                  title: "Research",
                  description: "Advanced neuroscience research and brain mapping capabilities.",
                  icon: "🔬"
                }
              ].map((useCase, index) => (
                <div key={index} className="p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-pink-500/50 transition-all duration-300">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-400">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience Neural Interface Technology?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join us in the brain-computer interface revolution and experience the future of human-computer interaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </button>
              <button className="px-8 py-4 border-2 border-pink-400 text-pink-400 font-semibold rounded-xl hover:bg-pink-400 hover:text-black transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}