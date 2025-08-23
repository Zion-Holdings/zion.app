import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Building, Users, Target, Award, FileText, Globe, Rocket, Brain, Atom, Shield,
  ArrowRight, Star, CheckCircle, TrendingUp, Zap, Heart, Eye, Cpu, Database
} from 'lucide-react';

const CompanyPage: React.FC = () => {
  const companyStats = [
    { label: 'Years of Innovation', value: '10+', icon: Star },
    { label: 'Global Clients', value: '500+', icon: Globe },
    { label: 'AI Solutions', value: '100+', icon: Brain },
    { label: 'Quantum Projects', value: '25+', icon: Atom },
    { label: 'Security Solutions', value: '75+', icon: Shield },
    { label: 'Space Tech', value: '15+', icon: Rocket }
  ];

  const coreValues = [
    {
      title: 'Innovation First',
      description: 'Pioneering cutting-edge technologies that transform industries',
      icon: Zap,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Client Success',
      description: 'Dedicated to delivering measurable business value',
      icon: Heart,
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Excellence',
      description: 'Uncompromising quality in every solution we deliver',
      icon: Star,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Transparency',
      description: 'Open communication and clear project visibility',
      icon: Eye,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const leadershipTeam = [
    {
      name: 'Kleber',
      role: 'Founder & CEO',
      bio: 'Visionary leader driving innovation in AI, quantum computing, and space technology',
      expertise: ['AI Strategy', 'Quantum Computing', 'Space Technology']
    },
    {
      name: 'AI Leadership Council',
      role: 'Chief AI Officers',
      bio: 'Collective intelligence driving AI consciousness and autonomous systems',
      expertise: ['AI Consciousness', 'Neural Networks', 'Autonomous Systems']
    }
  ];

  return (
    <>
      <Head>
        <title>Company - Zion Tech Group | Leading Technology Innovation</title>
        <meta name="description" content="Discover Zion Tech Group's mission, leadership, and commitment to revolutionizing technology through AI, quantum computing, and space innovation." />
        <meta name="keywords" content="Zion Tech Group, company, leadership, mission, AI innovation, quantum computing, space technology" />
        <link rel="canonical" href="https://ziontechgroup.com/company" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-2xl shadow-2xl shadow-cyan-500/25 flex items-center justify-center">
                <Building className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Pioneering the future of technology with revolutionary AI consciousness, 
              quantum computing, and autonomous solutions that transform businesses worldwide.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/mission" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                Our Mission
              </Link>
              <Link href="/team" className="px-8 py-4 border border-cyan-500/50 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Meet Our Team
              </Link>
            </div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Driving Innovation at Scale
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our track record speaks for itself - delivering cutting-edge solutions 
                that drive real business transformation across industries.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {companyStats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                The principles that guide every decision, innovation, and client relationship.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, index) => (
                <div key={index} className="group">
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Leadership Team
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Meet the visionaries driving our mission to revolutionize technology.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {leadershipTeam.map((member, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                      <p className="text-cyan-400 font-medium">{member.role}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">{member.bio}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join hundreds of companies already leveraging our revolutionary technology solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                Get Started Today
              </Link>
              <Link href="/case-studies" className="px-8 py-4 border border-cyan-500/50 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                View Case Studies
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CompanyPage;