import React from 'react';
import { NextPage } from 'next';
import { Rocket, Brain, Zap, Target, Star, ArrowRight, CheckCircle, Users, TrendingUp, Globe, Satellite } from 'lucide-react';

const SpaceResourceIntelligence2040: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-indigo-900/20 to-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-full text-indigo-300 text-sm mb-6">
              <Rocket className="w-4 h-4" />
              <span>Revolutionary 2040 Technology</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-600 bg-clip-text text-transparent">
              Space Resource Intelligence 2040
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Revolutionize space exploration and resource management with our AI-powered platform that enables intelligent 
              discovery, extraction, and utilization of extraterrestrial resources across the solar system.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Explore Space AI
            </button>
            <button className="px-8 py-4 border-2 border-indigo-400 text-indigo-400 font-semibold rounded-xl hover:bg-indigo-400 hover:text-black transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Revolutionary Space Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our space resource intelligence platform combines cutting-edge AI with advanced space technology to unlock the vast potential of extraterrestrial resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Autonomous Space Exploration",
                description: "AI-powered spacecraft and rovers that independently explore, map, and analyze celestial bodies for resource potential.",
                color: "from-indigo-500 to-purple-500"
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Resource Intelligence Mapping",
                description: "Advanced AI algorithms that identify, classify, and quantify valuable resources across planetary surfaces and subsurface.",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Real-time Resource Analysis",
                description: "Instant analysis of resource composition, quality, and extraction feasibility using onboard AI processing.",
                color: "from-pink-500 to-red-500"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Extraction Optimization",
                description: "AI-optimized extraction strategies that maximize resource yield while minimizing environmental impact.",
                color: "from-red-500 to-orange-500"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Planetary Resource Networks",
                description: "Intelligent coordination of resource extraction and transportation across multiple celestial bodies.",
                color: "from-orange-500 to-yellow-500"
              },
              {
                icon: <Satellite className="w-8 h-8" />,
                title: "Space Infrastructure Management",
                description: "AI-driven management of space stations, mining operations, and resource processing facilities.",
                color: "from-yellow-500 to-green-500"
              }
            ].map((feature, index) => (
              <div key={index} className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:scale-105">
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
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Revolutionary Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how our space resource intelligence is transforming humanity's relationship with space and enabling sustainable resource utilization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Lunar Resource Mining",
                description: "Intelligent extraction of helium-3, rare earth elements, and water ice from the lunar surface for sustainable space operations.",
                icon: <Star className="w-6 h-6" />,
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Mars Resource Intelligence",
                description: "Comprehensive mapping and analysis of Martian resources including water, minerals, and atmospheric components for future colonization.",
                icon: <TrendingUp className="w-6 h-6" />,
                color: "from-red-500 to-orange-500"
              },
              {
                title: "Asteroid Mining Operations",
                description: "AI-powered identification and extraction of valuable metals and minerals from near-Earth asteroids for terrestrial and space use.",
                icon: <Target className="w-6 h-6" />,
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Space Manufacturing",
                description: "In-situ resource utilization for manufacturing space infrastructure, reducing launch costs and enabling sustainable space development.",
                icon: <Zap className="w-6 h-6" />,
                color: "from-purple-500 to-pink-500"
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Advanced Space Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built on the most advanced space technologies available in 2040, ensuring reliable and efficient space resource operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Quantum AI Processors",
              "Advanced Robotics Systems",
              "Space-grade Materials",
              "Autonomous Navigation",
              "Resource Detection Sensors",
              "3D Printing in Space",
              "Energy Harvesting",
              "Communication Networks"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Ready to Explore Space Resources?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join us in the space revolution and discover how our AI-powered platform is unlocking the vast potential of extraterrestrial resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border-2 border-indigo-400 text-indigo-400 font-semibold rounded-xl hover:bg-indigo-400 hover:text-black transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpaceResourceIntelligence2040;