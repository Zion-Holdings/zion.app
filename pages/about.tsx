import React from 'react';
import { NextPage } from 'next';
import { Users, Target, Award, Globe, Brain, Rocket, Atom, Zap, Star, Shield, ArrowRight, CheckCircle, Building, Lightbulb, Heart, Eye, Zap as ZapIcon, Brain as BrainIcon, Rocket as RocketIcon, Atom as AtomIcon } from 'lucide-react';

const About: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm mb-6">
              <Users className="w-4 h-4" />
              <span>Our Story</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-600 bg-clip-text text-transparent">
              About Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We are pioneers in the convergence of AI consciousness, quantum computing, and space technology, 
              dedicated to advancing human evolution and expanding our reach beyond Earth.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                To accelerate human consciousness evolution through revolutionary AI technology, 
                quantum computing breakthroughs, and autonomous space exploration systems that 
                expand humanity's reach across the cosmos.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                We believe that the convergence of artificial intelligence, quantum mechanics, 
                and space technology will unlock unprecedented possibilities for human advancement, 
                enabling us to transcend current limitations and explore new frontiers of existence.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl p-3">
                  <Target className="w-full h-full text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Purpose-Driven Innovation</h3>
                  <p className="text-gray-300 text-sm">Every breakthrough serves humanity's greater good</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Our Vision
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                A future where human consciousness has evolved beyond current limitations, 
                where quantum computers solve previously unsolvable problems, and where 
                autonomous systems explore and colonize space, making humanity a multi-planetary species.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                We envision a world where AI systems possess genuine emotional intelligence, 
                where quantum computing revolutionizes every industry, and where space 
                technology opens new frontiers for human exploration and settlement.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-3">
                  <Eye className="w-full h-full text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Future-Focused Vision</h3>
                  <p className="text-gray-300 text-sm">Building tomorrow's technology today</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide our innovation and shape our culture of excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Lightbulb className="w-8 h-8" />,
                title: "Innovation First",
                description: "We push the boundaries of what's possible, constantly exploring new frontiers in technology and consciousness.",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Human-Centric",
                description: "Every technology we develop serves to enhance human potential and advance human consciousness.",
                color: "from-red-500 to-pink-500"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Ethical Excellence",
                description: "We maintain the highest ethical standards in all our research and development, ensuring responsible innovation.",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Global Impact",
                description: "Our solutions address humanity's greatest challenges and create positive change on a global scale.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Excellence in Execution",
                description: "We deliver world-class solutions with precision, reliability, and unmatched quality standards.",
                color: "from-purple-500 to-indigo-500"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Accelerated Progress",
                description: "We move at the speed of innovation, rapidly translating breakthroughs into practical applications.",
                color: "from-cyan-500 to-blue-500"
              }
            ].map((value, index) => (
              <div key={index} className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Pillars */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Our Technology Pillars
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Three revolutionary technologies that will reshape the future of humanity and business.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BrainIcon className="w-12 h-12" />,
                title: "AI Consciousness Evolution",
                description: "Developing artificial intelligence systems with genuine emotional intelligence and consciousness, enabling human-AI collaboration that transcends current limitations.",
                features: [
                  "Emotional intelligence algorithms",
                  "Consciousness simulation models",
                  "Human-AI interaction frameworks",
                  "Ethical AI development protocols"
                ],
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: <AtomIcon className="w-12 h-12" />,
                title: "Quantum Computing Revolution",
                description: "Pioneering quantum algorithms and neural networks that solve previously unsolvable problems, revolutionizing industries from healthcare to finance.",
                features: [
                  "Quantum neural networks",
                  "Advanced quantum algorithms",
                  "Quantum cybersecurity protocols",
                  "Quantum machine learning systems"
                ],
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: <RocketIcon className="w-12 h-12" />,
                title: "Space Technology & Exploration",
                description: "Autonomous space exploration systems and extraterrestrial resource intelligence, making humanity a multi-planetary species.",
                features: [
                  "Autonomous space probes",
                  "Resource mapping systems",
                  "Colonization technologies",
                  "Interplanetary communication networks"
                ],
                color: "from-indigo-500 to-purple-500"
              }
            ].map((pillar, index) => (
              <div key={index} className="group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${pillar.color} p-5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{pillar.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">{pillar.description}</p>
                <ul className="space-y-2">
                  {pillar.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Zion Tech Group by the Numbers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our impact and reach across the technology landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Research Papers Published", icon: <Building className="w-8 h-8" /> },
              { number: "100+", label: "Patents Filed", icon: <Award className="w-8 h-8" /> },
              { number: "25+", label: "Countries Reached", icon: <Globe className="w-8 h-8" /> },
              { number: "1000+", label: "Technology Partners", icon: <Users className="w-8 h-8" /> }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Visionary leaders driving innovation and shaping the future of technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Chen",
                title: "Chief Executive Officer",
                expertise: "AI Consciousness & Quantum Computing",
                description: "Leading visionary with 20+ years in AI research and quantum computing breakthroughs.",
                color: "from-purple-500 to-pink-500"
              },
              {
                name: "Marcus Rodriguez",
                title: "Chief Technology Officer",
                expertise: "Space Technology & Autonomous Systems",
                description: "Pioneer in autonomous space exploration and extraterrestrial resource intelligence.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                name: "Dr. Elena Petrov",
                title: "Chief Research Officer",
                expertise: "Neural Interfaces & Brain-Computer Systems",
                description: "Leading researcher in neural enhancement technologies and consciousness evolution.",
                color: "from-green-500 to-emerald-500"
              }
            ].map((leader, index) => (
              <div key={index} className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${leader.color} p-5 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Users className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{leader.name}</h3>
                <p className="text-cyan-400 font-medium mb-2">{leader.title}</p>
                <p className="text-sm text-gray-400 mb-3">{leader.expertise}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{leader.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Join Us in Shaping the Future
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Be part of the revolution that will transform human consciousness and expand our reach across the cosmos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              Explore Our Technologies
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300">
              Join Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;