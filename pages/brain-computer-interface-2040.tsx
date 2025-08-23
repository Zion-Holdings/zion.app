import React from 'react';
import { NextPage } from 'next';
import { Brain, Zap, Target, Star, ArrowRight, CheckCircle, Users, TrendingUp, Cpu, Network, Eye, Heart } from 'lucide-react';

const BrainComputerInterface2040: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-pink-900/20 to-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 rounded-full text-pink-300 text-sm mb-6">
              <Brain className="w-4 h-4" />
              <span>Revolutionary 2040 Technology</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-600 bg-clip-text text-transparent">
              Brain-Computer Interface 2040
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Experience the future of human-computer interaction with our revolutionary brain-computer interface platform that 
              enables direct neural communication with technology, unlocking unprecedented possibilities for human enhancement.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-xl hover:from-pink-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Experience Neural Interface
            </button>
            <button className="px-8 py-4 border-2 border-pink-400 text-pink-400 font-semibold rounded-xl hover:bg-pink-400 hover:text-black transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Revolutionary Neural Interface
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our brain-computer interface platform delivers unprecedented capabilities that bridge the gap between human consciousness and artificial intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Direct Neural Control",
                description: "Control computers, devices, and systems directly through thought, eliminating the need for physical interfaces.",
                color: "from-pink-500 to-purple-500"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Enhanced Cognition",
                description: "Augment human cognitive abilities with AI assistance, memory enhancement, and accelerated learning.",
                color: "from-purple-500 to-indigo-500"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Neural Communication",
                description: "Enable direct brain-to-brain communication and shared experiences between multiple users.",
                color: "from-indigo-500 to-blue-500"
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Virtual Reality Integration",
                description: "Seamlessly merge virtual and physical reality through direct neural interface with immersive experiences.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Assistive Technology",
                description: "Restore mobility and communication for individuals with disabilities through advanced neural interfaces.",
                color: "from-cyan-500 to-teal-500"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Performance Enhancement",
                description: "Optimize human performance in various fields through AI-assisted neural enhancement systems.",
                color: "from-teal-500 to-green-500"
              }
            ].map((feature, index) => (
              <div key={index} className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-pink-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Revolutionary Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how our brain-computer interface is transforming industries and enabling new forms of human-computer interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Healthcare & Rehabilitation",
                description: "Restore mobility, communication, and independence for patients with neurological conditions and disabilities.",
                icon: <Heart className="w-6 h-6" />,
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Gaming & Entertainment",
                description: "Immersive gaming experiences and virtual reality that respond directly to player thoughts and emotions.",
                icon: <TrendingUp className="w-6 h-6" />,
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Education & Training",
                description: "Accelerated learning through direct neural interface with educational content and skill development.",
                icon: <Target className="w-6 h-6" />,
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Professional Enhancement",
                description: "Improve productivity and decision-making in professional environments through AI-assisted neural enhancement.",
                icon: <Zap className="w-6 h-6" />,
                color: "from-orange-500 to-red-500"
              }
            ].map((app, index) => (
              <div key={index} className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${app.color} p-3 mb-4 inline-flex`}>
                  {app.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{app.title}</h3>
                <p className="text-gray-300 leading-relaxed">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Advanced Neural Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built on the most advanced neuroscience and AI technologies available in 2040, ensuring safe and effective neural interfaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Neural Signal Processing",
              "AI Pattern Recognition",
              "Non-invasive Sensors",
              "Real-time Analysis",
              "Safety Protocols",
              "Neural Mapping",
              "Cognitive Enhancement",
              "Privacy Protection"
            ].map((tech, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-xl">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Ready to Experience Neural Interface?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join us in the neural interface revolution and discover how brain-computer interfaces are reshaping the future of human-computer interaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-xl hover:from-pink-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border-2 border-pink-400 text-pink-400 font-semibold rounded-xl hover:bg-pink-400 hover:text-black transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrainComputerInterface2040;