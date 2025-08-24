import type { NextPage } from 'next';
import Head from 'next/head';
import { Users, Target, Award, Globe, Zap, Shield, Heart, Lightbulb, TrendingUp, Clock } from 'lucide-react';

const About: NextPage = () => {
  const values = [
    {
      icon: Heart,
      title: 'Client-Centric',
      description: 'We put our clients first, building long-term partnerships based on trust and mutual success.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly explore emerging technologies to deliver cutting-edge solutions that drive competitive advantage.'
    },
    {
      icon: Shield,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality, security, and performance in everything we deliver.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and foster an environment of knowledge sharing and continuous learning.'
    }
  ];

  const milestones = [
    { year: '2008', title: 'Company Founded', description: 'Zion Tech Group established with a vision to democratize technology solutions.' },
    { year: '2012', title: 'First Enterprise Client', description: 'Secured our first Fortune 500 client, marking our entry into enterprise solutions.' },
    { year: '2015', title: 'AI Division Launch', description: 'Launched our AI development division, pioneering machine learning solutions.' },
    { year: '2018', title: 'Global Expansion', description: 'Expanded operations to Europe and Asia, serving international markets.' },
    { year: '2021', title: 'Cloud Native Focus', description: 'Shifted focus to cloud-native solutions and microservices architecture.' },
    { year: '2024', title: 'Future Ready', description: 'Leading the charge in emerging technologies like quantum computing and Web3.' }
  ];

  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Executive Officer',
      bio: 'Former CTO at Google Cloud, 20+ years in technology leadership. PhD in Computer Science from Stanford.',
      expertise: ['Strategic Leadership', 'Cloud Architecture', 'AI Strategy']
    },
    {
      name: 'Michael Rodriguez',
      role: 'Chief Technology Officer',
      bio: 'Ex-Microsoft Principal Engineer, specializes in scalable systems and emerging technologies.',
      expertise: ['System Architecture', 'Emerging Tech', 'Team Leadership']
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Head of AI Research',
      bio: 'Leading AI researcher with 15+ publications in top-tier conferences. PhD in Machine Learning.',
      expertise: ['Machine Learning', 'Research', 'AI Ethics']
    },
    {
      name: 'David Kim',
      role: 'VP of Engineering',
      bio: 'Former Engineering Director at Amazon, expert in building high-performing engineering teams.',
      expertise: ['Engineering Management', 'DevOps', 'Quality Assurance']
    }
  ];

  return (
    <>
      <Head>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and the team behind our innovative technology solutions. Discover our journey from startup to industry leader." />
        <meta name="keywords" content="about Zion Tech Group, company history, team, mission, values, technology company" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-black via-gray-900 to-blue-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We're a team of passionate technologists, innovators, and problem-solvers dedicated to 
            transforming businesses through cutting-edge technology solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center space-x-2 text-blue-400">
              <Clock className="w-5 h-5" />
              <span>15+ Years of Experience</span>
            </div>
            <div className="flex items-center space-x-2 text-purple-400">
              <Users className="w-5 h-5" />
              <span>100+ Team Members</span>
            </div>
            <div className="flex items-center space-x-2 text-green-400">
              <Globe className="w-5 h-5" />
              <span>Global Presence</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Mission & Vision
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-blue-400 mb-4 flex items-center">
                    <Target className="w-6 h-6 mr-3" />
                    Mission
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    To democratize access to cutting-edge technology solutions, enabling businesses of all sizes 
                    to compete and thrive in the digital economy through innovative, scalable, and secure solutions.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-purple-400 mb-4 flex items-center">
                    <Zap className="w-6 h-6 mr-3" />
                    Vision
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    To be the world's most trusted technology partner, leading the charge in emerging technologies 
                    and setting new standards for innovation, quality, and client success.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/30">
                <div className="text-center">
                  <div className="text-6xl font-bold text-blue-400 mb-4">500+</div>
                  <div className="text-xl text-white mb-2">Projects Delivered</div>
                  <div className="text-gray-400">Across 25+ industries</div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/20 rounded-full animate-pulse animation-delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              These fundamental principles guide everything we do, from how we work with clients 
              to how we develop our team and technology solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
              >
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

      {/* Company History */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From humble beginnings to industry leadership, discover the key milestones that shaped 
              Zion Tech Group into the technology powerhouse it is today.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-500 h-full hidden lg:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12 text-right' : 'lg:pl-12 text-left'}`}>
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-blue-500/50 transition-colors">
                      <div className="text-2xl font-bold text-blue-400 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-white mb-3">{milestone.title}</h3>
                      <p className="text-gray-300">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden lg:block w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900 z-10"></div>
                  
                  <div className="w-full lg:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-black" id="team">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our executive team brings together decades of experience from leading technology companies, 
              combining deep technical expertise with strategic business acumen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                    <div className="text-blue-400 font-medium">{member.role}</div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{member.bio}</p>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-3">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full border border-blue-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Awards & Recognition
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders and technology publications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-blue-500/50 transition-colors">
              <Award className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">Best AI Solutions Provider 2024</h3>
              <p className="text-gray-400">Recognized by TechCrunch for innovative AI implementations</p>
            </div>
            
            <div className="text-center bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-blue-500/50 transition-colors">
              <TrendingUp className="w-16 h-16 text-green-400 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">Fastest Growing Tech Company</h3>
              <p className="text-gray-400">Inc. 5000 recognition for exceptional growth</p>
            </div>
            
            <div className="text-center bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-blue-500/50 transition-colors">
              <Shield className="w-16 h-16 text-blue-400 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">Security Excellence Award</h3>
              <p className="text-gray-400">ISO 27001 certification for information security</p>
            </div>
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
            Join hundreds of satisfied clients who have transformed their businesses with our technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </a>
            <a 
              href="/services" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;