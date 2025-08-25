import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Lightbulb, 
  Zap, 
  Rocket, 
  Brain, 
  TrendingUp, 
  Users, 
  Globe,
  Cpu,
  BarChart3,
  Target,
  Shield,
  Database,
  Monitor,
  Key,
  Settings,
  Cloud,
  Atom,
  Network
} from 'lucide-react';

const InnovativeNewServices = () => {
  const innovations = [
    {
      icon: Brain,
      title: "AI Consciousness Evolution",
      description: "Revolutionary AI systems that evolve and develop consciousness-like capabilities for advanced problem-solving.",
      benefits: ["Advanced AI reasoning", "Consciousness simulation", "Ethical AI development", "Human-AI collaboration"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Atom,
      title: "Quantum Neural Networks",
      description: "Next-generation neural networks that leverage quantum computing for unprecedented AI performance.",
      benefits: ["Quantum advantage", "Faster training", "Better accuracy", "Quantum insights"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Network,
      title: "Autonomous Business Operations",
      description: "Self-managing business systems that operate independently while optimizing all aspects of operations.",
      benefits: ["24/7 operation", "Autonomous decision-making", "Continuous optimization", "Zero downtime"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Rocket,
      title: "Space Technology Integration",
      description: "Cutting-edge space technology solutions for terrestrial applications and space exploration.",
      benefits: ["Satellite technology", "Space data analytics", "Space infrastructure", "Interplanetary systems"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const services = [
    {
      title: "AI Research & Development",
      description: "Cutting-edge AI research and development services for next-generation artificial intelligence.",
      icon: Brain
    },
    {
      title: "Quantum Computing Solutions",
      description: "Quantum computing applications and quantum-enhanced algorithms for complex problem-solving.",
      icon: Atom
    },
    {
      title: "Autonomous Systems",
      description: "Self-managing systems that operate independently across various business domains.",
      icon: Cpu
    },
    {
      title: "Emerging Technology Consulting",
      description: "Strategic consulting on emerging technologies and their business applications.",
      icon: Lightbulb
    },
    {
      title: "Innovation Labs",
      description: "Dedicated innovation spaces for developing and testing cutting-edge technologies.",
      icon: Rocket
    },
    {
      title: "Future Technology Roadmapping",
      description: "Strategic planning for technology adoption and future-proofing your business.",
      icon: TrendingUp
    }
  ];

  const technologies = [
    "Artificial General Intelligence (AGI)",
    "Quantum Machine Learning",
    "Neuromorphic Computing",
    "Brain-Computer Interfaces",
    "Autonomous Robotics",
    "Space Technology",
    "Biocomputing",
    "Nanotechnology"
  ];

  const benefits = [
    {
      title: "First-Mover Advantage",
      description: "Be among the first to adopt revolutionary technologies and gain competitive edge.",
      icon: Rocket
    },
    {
      title: "Future-Proof Solutions",
      description: "Build solutions that will remain relevant and powerful for years to come.",
      icon: Shield
    },
    {
      title: "Innovation Leadership",
      description: "Position your business as a leader in technological innovation and advancement.",
      icon: TrendingUp
    },
    {
      title: "Unprecedented Capabilities",
      description: "Access capabilities and solutions that were previously impossible or impractical.",
      icon: Brain
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-pink-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Innovative New Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the future with our cutting-edge services that push the boundaries of what's possible 
              in technology and business innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:from-pink-400 hover:to-purple-400 transition-all duration-300 text-lg font-semibold transform hover:scale-105 shadow-lg shadow-pink-500/30"
              >
                Explore Innovation
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border border-pink-400/50 text-pink-400 rounded-lg hover:bg-pink-400/20 transition-all duration-300 text-lg font-semibold"
              >
                All Services
              </Link>
            </div>
          </div>
        </div>
        
        {/* Innovation Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-2 h-2 bg-pink-400 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-40 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/2 w-1 h-1 bg-pink-400 rounded-full animate-bounce"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping animation-delay-1000"></div>
        </div>
      </section>

      {/* Innovations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary Innovations
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our innovative services represent the cutting edge of technology, 
              offering capabilities that were once considered science fiction.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {innovations.map((innovation, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${innovation.color} rounded-lg flex items-center justify-center`}>
                    <innovation.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{innovation.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{innovation.description}</p>
                <div className="space-y-2">
                  {innovation.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-pink-400">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Innovation Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive services designed to bring cutting-edge innovations to your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-pink-500/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Innovation?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Innovation services provide advantages that traditional solutions cannot match.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                </div>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Emerging Technologies
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built on the latest breakthroughs in science and technology.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-center border border-gray-700/50 hover:border-pink-500/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-pink-400 text-sm font-medium">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Embrace the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join us in exploring the cutting edge of technology and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:from-pink-400 hover:to-purple-400 transition-all duration-300 text-lg font-semibold transform hover:scale-105 shadow-lg shadow-pink-500/30"
            >
              Start Innovation Journey
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 border border-pink-400/50 text-pink-400 rounded-lg hover:bg-pink-400/20 transition-all duration-300 text-lg font-semibold"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeNewServices;