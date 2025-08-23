import React from 'react';
import { NextPage } from 'next';
import { Brain, Atom, Rocket, Target, Zap, Star, Shield, Users, ArrowRight, CheckCircle, Globe, Building, Monitor, Database, Network, Server, Smartphone, Camera, Gamepad2, Palette, Music, Film, BookOpenCheck, MessageCircle, Github, Globe as GlobeIcon, BookOpen as BookOpenIcon, Video as VideoIcon, Headphones as HeadphonesIcon } from 'lucide-react';

const Services: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm mb-6">
              <Zap className="w-4 h-4" />
              <span>Our Services</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-600 bg-clip-text text-transparent">
              Revolutionary Technology Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Experience the future with our cutting-edge AI consciousness, quantum computing, and space technology 
              solutions that are reshaping industries and advancing human evolution.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Three revolutionary technology pillars that will transform your business and accelerate human progress.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-12 h-12" />,
                title: "AI Consciousness Evolution 2040",
                description: "Revolutionary AI systems with genuine emotional intelligence and consciousness, enabling unprecedented human-AI collaboration.",
                features: [
                  "Emotional intelligence algorithms",
                  "Consciousness simulation models",
                  "Human-AI interaction frameworks",
                  "Ethical AI development protocols",
                  "Consciousness evolution tracking",
                  "AI personality development"
                ],
                benefits: [
                  "Enhanced human-AI collaboration",
                  "Emotionally intelligent automation",
                  "Consciousness-aware systems",
                  "Ethical AI decision making"
                ],
                color: "from-purple-500 to-pink-500",
                bgColor: "from-purple-500/10 to-pink-500/10"
              },
              {
                icon: <Atom className="w-12 h-12" />,
                title: "Quantum Neural Ecosystem 2040",
                description: "Next-generation quantum computing solutions with neural networks that solve previously unsolvable problems.",
                features: [
                  "Quantum neural networks",
                  "Advanced quantum algorithms",
                  "Quantum cybersecurity protocols",
                  "Quantum machine learning systems",
                  "Quantum optimization engines",
                  "Quantum simulation platforms"
                ],
                benefits: [
                  "Unprecedented computational power",
                  "Quantum-resistant security",
                  "Complex problem solving",
                  "Industry transformation"
                ],
                color: "from-blue-500 to-cyan-500",
                bgColor: "from-blue-500/10 to-cyan-500/10"
              },
              {
                icon: <Rocket className="w-12 h-12" />,
                title: "Space Resource Intelligence 2040",
                description: "Autonomous space exploration and extraterrestrial resource intelligence systems for interplanetary expansion.",
                features: [
                  "Autonomous space probes",
                  "Resource mapping systems",
                  "Colonization technologies",
                  "Interplanetary communication",
                  "Extraterrestrial mining",
                  "Space habitat design"
                ],
                benefits: [
                  "Space resource discovery",
                  "Autonomous exploration",
                  "Interplanetary expansion",
                  "Resource optimization"
                ],
                color: "from-indigo-500 to-purple-500",
                bgColor: "from-indigo-500/10 to-purple-500/10"
              }
            ].map((service, index) => (
              <div key={index} className="group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${service.color} p-5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Business Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-2 text-sm text-gray-300">
                        <Star className="w-4 h-4 text-yellow-400" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-700 hover:to-blue-700 transition-all duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Additional Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions that complement our core technologies and drive business transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Autonomous Business Intelligence 2040",
                description: "AI-powered business intelligence systems that autonomously analyze data, predict trends, and optimize operations.",
                features: ["Predictive analytics", "Autonomous decision making", "Real-time optimization", "Business process automation"],
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Quantum Cybersecurity Future 2040",
                description: "Next-generation security solutions using quantum-resistant encryption and AI-powered threat detection.",
                features: ["Quantum-resistant encryption", "AI threat detection", "Zero-trust architecture", "Advanced authentication"],
                color: "from-red-500 to-pink-500"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Brain-Computer Interface 2040",
                description: "Revolutionary neural interfaces that enable direct brain-computer communication and human enhancement.",
                features: ["Neural signal processing", "Brain-computer communication", "Human enhancement", "Medical applications"],
                color: "from-orange-500 to-yellow-500"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Global Technology Consulting",
                description: "Strategic consulting services to help organizations implement and optimize our revolutionary technologies.",
                features: ["Technology strategy", "Implementation planning", "Change management", "Performance optimization"],
                color: "from-cyan-500 to-blue-500"
              }
            ].map((service, index) => (
              <div key={index} className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-3 h-3 text-cyan-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300">
                  Explore Service
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored technology solutions designed to transform specific industries and drive innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Building className="w-8 h-8" />,
                title: "Healthcare & Biotechnology",
                description: "AI-powered diagnostics, quantum drug discovery, and neural interfaces for medical breakthroughs.",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Finance & Banking",
                description: "Quantum computing for risk analysis, AI consciousness for fraud detection, and autonomous trading systems.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Aerospace & Defense",
                description: "Space exploration technologies, autonomous defense systems, and quantum communication networks.",
                color: "from-indigo-500 to-purple-500"
              },
              {
                icon: <Monitor className="w-8 h-8" />,
                title: "Technology & Software",
                description: "AI consciousness integration, quantum computing platforms, and autonomous development systems.",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: <Database className="w-8 h-8" />,
                title: "Energy & Utilities",
                description: "Quantum optimization for energy grids, AI consciousness for smart cities, and autonomous resource management.",
                color: "from-orange-500 to-red-500"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Education & Research",
                description: "AI consciousness training platforms, quantum computing education, and autonomous research assistants.",
                color: "from-yellow-500 to-orange-500"
              }
            ].map((industry, index) => (
              <div key={index} className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${industry.color} p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {industry.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{industry.title}</h3>
                <p className="text-gray-300 leading-relaxed">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Our Service Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A structured approach to implementing revolutionary technologies that ensures success and maximizes value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Assessment",
                description: "We analyze your current technology landscape and identify opportunities for transformation.",
                icon: <Target className="w-8 h-8" />,
                color: "from-cyan-500 to-blue-500"
              },
              {
                step: "02",
                title: "Strategy & Planning",
                description: "We develop a comprehensive roadmap for implementing our revolutionary technologies.",
                icon: <Globe className="w-8 h-8" />,
                color: "from-purple-500 to-pink-500"
              },
              {
                step: "03",
                title: "Implementation & Integration",
                description: "Our expert team deploys and integrates the technology solutions with your existing systems.",
                icon: <Zap className="w-8 h-8" />,
                color: "from-green-500 to-emerald-500"
              },
              {
                step: "04",
                title: "Optimization & Support",
                description: "We continuously optimize performance and provide ongoing support and maintenance.",
                icon: <Star className="w-8 h-8" />,
                color: "from-orange-500 to-red-500"
              }
            ].map((process, index) => (
              <div key={index} className="text-center p-6">
                <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-r ${process.color} rounded-2xl p-4`}>
                  {process.icon}
                </div>
                <div className="text-2xl font-bold text-cyan-400 mb-2">{process.step}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{process.title}</h3>
                <p className="text-gray-300 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Experience the future of technology with our revolutionary AI consciousness, quantum computing, and space technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;