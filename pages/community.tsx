import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Users, MessageCircle, Globe, Rocket, Brain, Atom, Shield, 
  ArrowRight, Star, Zap, Heart, Eye, TrendingUp, Lightbulb,
  Calendar, Award, CheckCircle, Building, Code, Database, FileText
} from 'lucide-react';

const CommunityPage: React.FC = () => {
  const communityFeatures = [
    {
      title: 'Expert Forums',
      description: 'Connect with AI, quantum computing, and space technology experts',
      icon: Users,
      color: 'from-cyan-500 to-blue-500',
      benefits: ['Ask Questions', 'Share Knowledge', 'Network with Peers', 'Get Expert Advice']
    },
    {
      title: 'Innovation Hub',
      description: 'Collaborate on cutting-edge technology projects',
      icon: Rocket,
      color: 'from-purple-500 to-pink-500',
      benefits: ['Project Collaboration', 'Innovation Challenges', 'Research Partnerships', 'Open Source Projects']
    },
    {
      title: 'Learning Groups',
      description: 'Join specialized learning communities and study groups',
      icon: Brain,
      color: 'from-blue-500 to-indigo-500',
      benefits: ['Study Groups', 'Workshops', 'Certification Prep', 'Skill Development']
    },
    {
      title: 'Events & Meetups',
      description: 'Attend virtual and in-person community events',
      icon: Calendar,
      color: 'from-green-500 to-emerald-500',
      benefits: ['Virtual Meetups', 'Conference Access', 'Networking Events', 'Expert Panels']
    }
  ];

  const activeDiscussions = [
    {
      title: 'AI Consciousness Evolution Implementation',
      author: 'Dr. Sarah Chen',
      category: 'AI & Machine Learning',
      replies: 47,
      views: '2.3k',
      lastActivity: '2 hours ago',
      href: '/ai-consciousness-evolution-2045'
    },
    {
      title: 'Quantum Neural Networks in Production',
      author: 'Marcus Rodriguez',
      category: 'Quantum Computing',
      replies: 23,
      views: '1.8k',
      lastActivity: '5 hours ago',
      href: '/quantum-neural-network-platform'
    },
    {
      title: 'Space Resource Intelligence Platform',
      author: 'Dr. Elena Petrova',
      category: 'Space Technology',
      replies: 31,
      views: '1.5k',
      lastActivity: '1 day ago',
      href: '/space-resource-intelligence-2045'
    },
    {
      title: 'Zero Trust Security Architecture',
      author: 'Alex Thompson',
      category: 'Cybersecurity',
      replies: 56,
      views: '3.1k',
      lastActivity: '3 hours ago',
      href: '/zero-trust-network-architecture-platform'
    }
  ];

  const upcomingEvents = [
    {
      title: 'AI Consciousness Workshop',
      date: 'Dec 15, 2025',
      time: '2:00 PM EST',
      type: 'Virtual Workshop',
      attendees: '150+',
      href: '/webinars'
    },
    {
      title: 'Quantum Computing Meetup',
      date: 'Dec 20, 2025',
      time: '7:00 PM EST',
      type: 'Virtual Meetup',
      attendees: '75+',
      href: '/webinars'
    },
    {
      title: 'Space Technology Summit',
      date: 'Jan 10, 2026',
      time: '9:00 AM EST',
      type: 'Virtual Conference',
      attendees: '500+',
      href: '/webinars'
    }
  ];

  const communityStats = [
    { label: 'Active Members', value: '10,000+', icon: Users },
    { label: 'Expert Contributors', value: '500+', icon: Star },
    { label: 'Projects Shared', value: '2,000+', icon: Rocket },
    { label: 'Knowledge Articles', value: '5,000+', icon: FileText },
    { label: 'Events Hosted', value: '100+', icon: Calendar },
    { label: 'Countries', value: '45+', icon: Globe }
  ];

  return (
    <>
      <Head>
        <title>Community - Zion Tech Group | Connect & Collaborate</title>
        <meta name="description" content="Join the Zion Tech Group community of innovators, experts, and technology enthusiasts. Connect, collaborate, and learn from peers worldwide." />
        <meta name="keywords" content="community, forums, collaboration, networking, AI experts, quantum computing, space technology, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/community" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-2xl shadow-2xl shadow-cyan-500/25 flex items-center justify-center">
                <Users className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Community
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Connect with innovators, experts, and technology enthusiasts from around the world. 
              Share knowledge, collaborate on projects, and shape the future of technology together.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/community/forums" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                Join Forums
              </Link>
              <Link href="/webinars" className="px-8 py-4 border border-cyan-500/50 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Attend Events
              </Link>
            </div>
          </div>
        </section>

        {/* Community Stats */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Growing Community
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Join thousands of technology professionals and enthusiasts worldwide.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {communityStats.map((stat, index) => (
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

        {/* Community Features */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Community Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover all the ways you can connect, learn, and grow with our community.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {communityFeatures.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{feature.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  
                  <Link href={`/community/${feature.title.toLowerCase().replace(/\s+/g, '-')}`} className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                    <span className="font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Active Discussions */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Active Discussions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Join the conversation on cutting-edge technology topics.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {activeDiscussions.map((discussion, index) => (
                <Link key={index} href={discussion.href} className="group">
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">
                        {discussion.category}
                      </span>
                      <span className="text-sm text-gray-400">{discussion.lastActivity}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-4">
                      {discussion.title}
                    </h3>
                    
                    <div className="flex items-center text-sm text-gray-400 mb-4">
                      <span>By {discussion.author}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span className="flex items-center">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        {discussion.replies} replies
                      </span>
                      <span className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {discussion.views} views
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Upcoming Events
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Mark your calendar for these exciting community events.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <Link key={index} href={event.href} className="group">
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Calendar className="w-8 h-8 text-cyan-400" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-4">
                      {event.title}
                    </h3>
                    
                    <div className="space-y-2 text-sm text-gray-400 mb-6">
                      <div>{event.date} at {event.time}</div>
                      <div className="text-cyan-400">{event.type}</div>
                      <div>{event.attendees} attending</div>
                    </div>
                    
                    <div className="inline-flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span className="font-medium">Join Event</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Connect with like-minded innovators and start your journey with Zion Tech Group.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                Get Started
              </Link>
              <Link href="/webinars" className="px-8 py-4 border border-cyan-500/50 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Browse Events
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CommunityPage;