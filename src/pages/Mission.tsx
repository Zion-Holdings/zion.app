import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { 
  Building, 
  Users, 
  Globe, 
  Zap,
  Heart,
  ArrowRight,
  CheckCircle,
  Star,
  Lightbulb,
  Shield,
  Network
} from 'lucide-react';

const missionValues = [
  {
    title: 'Innovation First',
    description: 'We push the boundaries of what\'s possible through cutting-edge technology and creative solutions',
    icon: Lightbulb,
    color: 'from-yellow-500 to-orange-600'
  },
  {
    title: 'Human-Centric',
    description: 'Technology serves humanity - we build solutions that enhance human potential and well-being',
    icon: Heart,
    color: 'from-red-500 to-pink-600'
  },
  {
    title: 'Global Impact',
    description: 'We create solutions that address global challenges and benefit communities worldwide',
    icon: Globe,
    color: 'from-blue-500 to-cyan-600'
  },
  {
    title: 'Excellence',
    description: 'We maintain the highest standards of quality and performance in everything we do',
    icon: Star,
    color: 'from-purple-500 to-indigo-600'
  }
];

const strategicGoals = [
  {
    goal: 'AI Revolution',
    description: 'Democratize access to advanced AI technology and make it accessible to businesses of all sizes',
    icon: Building,
    timeline: '2025-2030'
  },
  {
    goal: 'Quantum Computing',
    description: 'Lead the quantum computing revolution and bring quantum advantage to practical applications',
    icon: Zap,
    timeline: '2025-2035'
  },
  {
    goal: 'Sustainable Tech',
    description: 'Develop environmentally conscious technology solutions that reduce carbon footprint',
    icon: Globe,
    timeline: '2025-2040'
  },
  {
    goal: 'Global Connectivity',
    description: 'Bridge the digital divide and connect underserved communities worldwide',
    icon: Network,
    timeline: '2025-2045'
  }
];

const impactAreas = [
  {
    area: 'Healthcare',
    description: 'Revolutionizing medical diagnostics and patient care through AI and quantum computing',
    icon: Heart,
    metrics: '10M+ patients impacted'
  },
  {
    area: 'Education',
    description: 'Transforming learning experiences with personalized AI-driven education platforms',
    icon: Users,
    metrics: '5M+ students reached'
  },
  {
    area: 'Environment',
    description: 'Developing sustainable technology solutions for climate change and conservation',
    icon: Globe,
    metrics: '50% reduction in carbon footprint'
  },
  {
    area: 'Business',
    description: 'Empowering businesses with intelligent automation and data-driven insights',
    icon: Building,
    metrics: '1000+ businesses transformed'
  }
];

export default function Mission() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Our Mission - Zion Tech Group" 
        description="Discover Zion Tech Group's mission to revolutionize technology and create positive global impact through innovation."
        keywords="mission, vision, values, innovation, technology, global impact"
        canonical="https://ziontechgroup.com/mission"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-zion-blue-dark via-black to-zion-purple-dark overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mr-4">
              <Building className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gradient">
              Our Mission
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            To revolutionize technology and create positive global impact through innovation, 
            empowering humanity to solve the world's most complex challenges.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/about"
              className="btn-primary text-lg px-8 py-4 inline-flex items-center"
            >
              Learn More
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="btn-secondary text-lg px-8 py-4"
            >
              Join Us
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gradient">
              Mission Statement
            </h2>
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <p className="text-2xl text-white leading-relaxed mb-6">
                "To pioneer the future of technology by developing revolutionary AI, quantum computing, 
                and autonomous systems that transform industries, empower individuals, and create 
                sustainable solutions for global challenges."
              </p>
              <p className="text-xl text-gray-300">
                We believe that technology should serve humanity, not replace it. Our mission is to 
                create intelligent systems that augment human capabilities and solve problems that 
                were once considered impossible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gradient">
              Our Vision
            </h2>
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mr-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Vision 2050</h3>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed">
                By 2050, we envision a world where AI and quantum computing are seamlessly integrated 
                into everyday life, solving humanity's greatest challenges from climate change to 
                healthcare, while maintaining the highest ethical standards and human values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gradient">
              Core Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide our decisions and shape our culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {missionValues.map((value, index) => (
              <div
                key={index}
                className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-zion-purple/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-zion-cyan transition-colors duration-300">
                    {value.title}
                  </h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Goals */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gradient">
              Strategic Goals
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our roadmap to achieving our mission and vision
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {strategicGoals.map((goal, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                    <goal.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{goal.goal}</h3>
                    <span className="text-zion-cyan text-sm font-medium">{goal.timeline}</span>
                  </div>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gradient">
              Areas of Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              How we're making a difference across key sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactAreas.map((area, index) => (
              <div
                key={index}
                className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-zion-purple/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                    <area.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{area.area}</h3>
                </div>
                <p className="text-gray-300 mb-4">{area.description}</p>
                <div className="pt-4 border-t border-gray-700/50">
                  <span className="text-zion-cyan text-sm font-medium">{area.metrics}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-purple-dark to-zion-blue-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Join Us in Our Mission
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Together, we can revolutionize technology and create a better future for humanity. 
            Be part of the solution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/careers"
              className="btn-primary text-lg px-8 py-4 inline-flex items-center"
            >
              Join Our Team
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="btn-secondary text-lg px-8 py-4"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}