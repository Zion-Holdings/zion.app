
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  Award,
  Globe,
  Heart,
  Zap,
  Shield,
  ArrowRight,
  Brain,
  Star,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

const About = () => {
  const stats = [
    { number: "500+", label: "Enterprise Clients", icon: Users },
    { number: "50+", label: "Countries Served", icon: Globe },
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
    { number: "10x", label: "Performance Improvement", icon: Award }
  ];

  const values = [
    {
      icon: Heart,
      title: "Innovation First",
      description: "We push the boundaries of what's possible with cutting-edge AI and quantum technologies"
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Building secure, reliable solutions that our clients can depend on"
    },
    {
      icon: Users,
      title: "Client Success",
      description: "Your success is our success - we're committed to delivering measurable results"
    },
    {
      icon: Star,
      title: "Future-Focused",
      description: "Anticipating tomorrow's challenges and building solutions today"
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Zion Tech Group established with a vision to revolutionize technology"
    },
    {
      year: "2021",
      title: "First AI Solutions",
      description: "Launched our first AI autonomous systems for enterprise clients"
    },
    {
      year: "2022",
      title: "Quantum Breakthrough",
      description: "Introduced quantum computing infrastructure solutions"
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Expanded operations to 50+ countries worldwide"
    },
    {
      year: "2024",
      title: "Industry Leadership",
      description: "Recognized as a leader in AI and quantum technology"
    },
    {
      year: "2025",
      title: "Future Vision",
      description: "Continuing to pioneer the next generation of technology solutions"
    }
  ];

  const team = [
    {
      name: "Kleber Santos",
      role: "CEO & Founder",
      description: "Visionary leader with 15+ years in technology innovation",
      image: "/images/team/kleber-santos.jpg"
    },
    {
      name: "Dr. Sarah Chen",
      role: "CTO",
      description: "Quantum computing expert with PhD from MIT",
      image: "/images/team/sarah-chen.jpg"
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of AI Research",
      description: "Leading our AI autonomous systems development",
      image: "/images/team/marcus-rodriguez.jpg"
    },
    {
      name: "Dr. Emily Watson",
      role: "Chief Security Officer",
      description: "Cybersecurity specialist with government experience",
      image: "/images/team/emily-watson.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Pioneering the future of technology with revolutionary AI autonomous systems, 
            quantum computing, and autonomous solutions that transform businesses worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="btn-primary text-lg px-8 py-4 flex items-center space-x-2"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/careers" 
              className="btn-secondary text-lg px-8 py-4"
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                Our Mission
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                To democratize access to cutting-edge technology and empower organizations 
                to achieve unprecedented levels of efficiency, security, and innovation.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                We believe that the future belongs to those who can harness the power of 
                artificial intelligence, quantum computing, and autonomous systems. Our 
                mission is to make these technologies accessible, reliable, and transformative 
                for businesses of all sizes.
              </p>
              <Link 
                to="/mission" 
                className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors text-lg font-medium"
              >
                <span>Learn More About Our Mission</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">AI Innovation</h3>
                <p className="text-gray-400 text-sm">Revolutionary autonomous systems</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Quantum Computing</h3>
                <p className="text-gray-400 text-sm">Next-generation processing power</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Cybersecurity</h3>
                <p className="text-gray-400 text-sm">Advanced protection solutions</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Industry Solutions</h3>
                <p className="text-gray-400 text-sm">Tailored for your business</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              By The Numbers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our impact in numbers - delivering results that speak for themselves
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Our Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Key milestones in our mission to transform technology
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-500 to-blue-500 h-full"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full absolute left-1/2 transform -translate-x-1/2 z-10`}></div>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                      <p className="text-gray-300">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the visionaries driving innovation at Zion Tech Group
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                <div className="text-cyan-400 font-medium mb-2">{member.role}</div>
                <p className="text-gray-400 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              to="/team" 
              className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors text-lg font-medium"
            >
              <span>Meet the Full Team</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Ready to Join the Future?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover how Zion Tech Group can transform your business with cutting-edge technology
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="btn-primary text-lg px-8 py-4"
            >
              Start Your Journey
            </Link>
            <Link 
              to="/services" 
              className="btn-secondary text-lg px-8 py-4"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
