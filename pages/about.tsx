import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Users, Target, Award, Globe, Zap, Shield, TrendingUp, Lightbulb } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible, embracing emerging technologies and creative solutions.'
    },
    {
      icon: Shield,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality in everything we do, from code to customer service.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and foster strong partnerships with our clients and within our team.'
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We focus on delivering measurable business outcomes and tangible value for our clients.'
    }
  ];

  const milestones = [
    {
      year: '2010',
      title: 'Company Founded',
      description: 'Zion Tech Group was established with a vision to transform businesses through innovative technology solutions.'
    },
    {
      year: '2015',
      title: 'First AI Project',
      description: 'Successfully delivered our first AI-powered solution, marking the beginning of our AI expertise.'
    },
    {
      year: '2018',
      title: 'Cloud Migration Specialists',
      description: 'Became certified partners with major cloud providers and expanded our cloud services portfolio.'
    },
    {
      year: '2020',
      title: 'Digital Transformation Leader',
      description: 'Helped over 100 companies navigate digital transformation during the global pandemic.'
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Opened offices in Europe and Asia, serving clients across multiple continents.'
    },
    {
      year: '2025',
      title: 'AI-First Company',
      description: 'Launched our AI-first approach, integrating artificial intelligence into all our service offerings.'
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Executive Officer',
      bio: 'Former Google AI researcher with 15+ years of experience in machine learning and business strategy.',
      expertise: ['AI Strategy', 'Business Development', 'Team Leadership']
    },
    {
      name: 'Michael Rodriguez',
      role: 'Chief Technology Officer',
      bio: 'Ex-Microsoft architect specializing in cloud-native applications and scalable infrastructure.',
      expertise: ['Cloud Architecture', 'System Design', 'DevOps']
    },
    {
      name: 'Emily Watson',
      role: 'Chief Innovation Officer',
      bio: 'Blockchain pioneer and former startup founder with expertise in emerging technologies.',
      expertise: ['Blockchain', 'Innovation Strategy', 'Product Development']
    },
    {
      name: 'David Kim',
      role: 'Head of Engineering',
      bio: 'Full-stack development expert with experience building applications for Fortune 500 companies.',
      expertise: ['Software Engineering', 'Team Management', 'Quality Assurance']
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Enterprise Clients' },
    { number: '15+', label: 'Years Experience' },
    { number: '99.9%', label: 'Client Satisfaction' }
  ];

  return (
    <>
      <Head>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and team. Discover how we've been transforming businesses through innovative technology solutions for over 15 years." />
        <meta name="keywords" content="about Zion Tech Group, company history, team, mission, values, technology company" />
      </Head>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-blue-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a team of passionate technologists, innovators, and problem-solvers dedicated to 
            transforming businesses through cutting-edge technology solutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Mission & Vision
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-blue-400 mb-3">Mission</h3>
                  <p className="text-gray-300 leading-relaxed">
                    To empower businesses with innovative technology solutions that drive growth, 
                    efficiency, and competitive advantage in the digital age.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-purple-400 mb-3">Vision</h3>
                  <p className="text-gray-300 leading-relaxed">
                    To be the leading technology partner for forward-thinking organizations, 
                    known for delivering transformative solutions that shape the future of business.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/30">
                <div className="text-center">
                  <div className="text-6xl font-bold text-blue-400 mb-4">15+</div>
                  <div className="text-xl text-white mb-2">Years of Innovation</div>
                  <div className="text-gray-400">Transforming businesses worldwide</div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/20 rounded-full animate-pulse animation-delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape our relationships 
              with clients, partners, and each other.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Milestones */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From humble beginnings to becoming a global technology leader, here are the key 
              milestones that shaped our company.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-600 h-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-black"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
                      <div className="text-2xl font-bold text-blue-400 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-white mb-3">{milestone.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our experienced leadership team brings together decades of expertise in technology, 
              business, and innovation to drive our company forward.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center group hover:border-blue-500/30 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <div className="text-blue-400 font-medium mb-3">{member.role}</div>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{member.bio}</p>
                
                <div className="space-y-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <div key={skillIndex} className="text-xs text-gray-300 bg-gray-800/50 rounded-full px-3 py-1 inline-block mx-1">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Work with Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of satisfied clients who have transformed their businesses 
            with our innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              <span>Start Your Project</span>
            </Link>
            <Link 
              href="/services" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              <span>Explore Our Services</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;