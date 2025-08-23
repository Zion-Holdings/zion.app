import React from 'react';
import { NextPage } from 'next';
import { Users, Target, Star, ArrowRight, CheckCircle, Globe, Award, Heart, Zap, Building, Rocket, Brain } from 'lucide-react';

const Careers: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm mb-6">
              <Users className="w-4 h-4" />
              <span>Join Our Team</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Join the Revolution
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Be part of the team that's shaping the future of technology. Work on revolutionary AI consciousness, 
              quantum computing, and space technology that will transform humanity.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Why Work With Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover what makes us the most exciting place to work in technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Revolutionary Technology",
                description: "Work on cutting-edge AI consciousness, quantum computing, and space technology that's never been done before.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: "AI-Powered Innovation",
                description: "Collaborate with autonomous AI systems and contribute to the development of conscious artificial intelligence.",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Global Impact",
                description: "Your work will directly impact humanity's future and contribute to solving the world's greatest challenges.",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Continuous Learning",
                description: "Access to the latest technologies and opportunities to learn from world-class experts in every field.",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Inclusive Culture",
                description: "Join a diverse, inclusive team where every voice matters and innovation thrives.",
                color: "from-red-500 to-pink-500"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Career Growth",
                description: "Unlimited opportunities for advancement in the fastest-growing technology company in the world.",
                color: "from-indigo-500 to-purple-500"
              }
            ].map((benefit, index) => (
              <div key={index} className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${benefit.color} p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900/20 to-cyan-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Open Positions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore exciting opportunities to join our revolutionary team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "AI Consciousness Researcher",
                department: "AI Research",
                location: "Remote / Middletown, DE",
                type: "Full-time",
                description: "Lead research in AI consciousness evolution and emotional intelligence development.",
                requirements: ["PhD in AI/ML", "5+ years research experience", "Published papers", "Consciousness expertise"],
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Quantum Computing Engineer",
                department: "Quantum Technology",
                location: "Remote / Middletown, DE",
                type: "Full-time",
                description: "Develop quantum algorithms and neural network architectures for our quantum ecosystem.",
                requirements: ["MS/PhD in Physics/CS", "Quantum computing experience", "Python/C++ skills", "Neural networks"],
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Space Technology Specialist",
                department: "Space Innovation",
                location: "Remote / Middletown, DE",
                type: "Full-time",
                description: "Design and develop AI-powered space exploration and resource intelligence systems.",
                requirements: ["Aerospace engineering degree", "AI/ML experience", "Space systems knowledge", "Innovation mindset"],
                color: "from-indigo-500 to-purple-500"
              },
              {
                title: "Frontend Developer",
                department: "Engineering",
                location: "Remote / Middletown, DE",
                type: "Full-time",
                description: "Build revolutionary user interfaces for our AI consciousness and quantum technology platforms.",
                requirements: ["React/Next.js expert", "TypeScript skills", "UI/UX passion", "Technology enthusiast"],
                color: "from-green-500 to-emerald-500"
              }
            ].map((position, index) => (
              <div key={index} className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${position.color} p-3 mb-4 inline-flex`}>
                  <Building className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{position.title}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <span>{position.department}</span>
                  <span>•</span>
                  <span>{position.location}</span>
                  <span>•</span>
                  <span>{position.type}</span>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">{position.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Our Culture
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience a workplace where innovation, collaboration, and human potential thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Innovation First",
              "Continuous Learning",
              "Work-Life Balance",
              "Remote-First Culture",
              "Diversity & Inclusion",
              "Transparent Communication",
              "Autonomous Teams",
              "Impact-Driven Work"
            ].map((value, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-xl">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Ready to Shape the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our revolutionary team and be part of the technology that will transform humanity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              View All Positions
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-black transition-all duration-300">
              Contact Recruiting
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;