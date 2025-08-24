import { useState, useEffect } from 'react';
import { SEO } from '@/components/SEO';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('mission');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const companyStats = [
    { number: '500+', label: 'Projects Delivered', icon: '🚀', color: 'from-blue-500/20 to-cyan-500/20' },
    { number: '50+', label: 'Team Members', icon: '👥', color: 'from-green-500/20 to-emerald-500/20' },
    { number: '10+', label: 'Years Experience', icon: '⏰', color: 'from-purple-500/20 to-pink-500/20' },
    { number: '100%', label: 'Client Satisfaction', icon: '⭐', color: 'from-orange-500/20 to-red-500/20' }
  ];

  const coreValues = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of technology to create cutting-edge solutions that drive business transformation.',
      icon: '💡',
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      title: 'Client Success',
      description: 'Your success is our success. We partner with you to achieve measurable business outcomes.',
      icon: '🎯',
      color: 'from-green-500/20 to-emerald-500/20'
    },
    {
      title: 'Quality Excellence',
      description: 'We maintain the highest standards of quality in every project, ensuring reliable and scalable solutions.',
      icon: '✅',
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      title: 'Continuous Learning',
      description: 'We stay ahead of technology trends and continuously improve our skills and processes.',
      icon: '📚',
      color: 'from-orange-500/20 to-red-500/20'
    }
  ];

  const teamMembers = [
    {
      name: 'Kleber Santos',
      position: 'Founder & CEO',
      bio: 'Visionary leader with 15+ years in technology and business transformation. Expert in AI, cloud architecture, and strategic planning.',
      image: '👨‍💼',
      expertise: ['AI Strategy', 'Cloud Architecture', 'Business Transformation'],
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      name: 'Sarah Chen',
      position: 'CTO',
      bio: 'Technology innovator specializing in scalable architectures, AI/ML systems, and emerging technologies. 12+ years of technical leadership.',
      image: '👩‍💻',
      expertise: ['System Architecture', 'AI/ML', 'Emerging Tech'],
      color: 'from-green-500/20 to-emerald-500/20'
    },
    {
      name: 'Marcus Rodriguez',
      position: 'Head of AI Solutions',
      bio: 'AI specialist with deep expertise in machine learning, natural language processing, and computer vision applications.',
      image: '🤖',
      expertise: ['Machine Learning', 'NLP', 'Computer Vision'],
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      name: 'Emily Watson',
      position: 'VP of Client Success',
      bio: 'Client relationship expert focused on ensuring project success and building long-term partnerships.',
      image: '👩‍💼',
      expertise: ['Client Relations', 'Project Management', 'Strategic Planning'],
      color: 'from-orange-500/20 to-red-500/20'
    }
  ];

  const timeline = [
    {
      year: '2014',
      title: 'Company Founded',
      description: 'Zion Tech Group established with a vision to democratize technology solutions for businesses.',
      icon: '🏗️'
    },
    {
      year: '2016',
      title: 'First Major Project',
      description: 'Successfully delivered enterprise cloud migration for Fortune 500 company.',
      icon: '☁️'
    },
    {
      year: '2018',
      title: 'AI Division Launch',
      description: 'Launched specialized AI solutions division to meet growing market demand.',
      icon: '🤖'
    },
    {
      year: '2020',
      title: 'Global Expansion',
      description: 'Expanded operations to serve international clients and opened new offices.',
      icon: '🌍'
    },
    {
      year: '2022',
      title: 'Innovation Hub',
      description: 'Established innovation hub for research and development of cutting-edge solutions.',
      icon: '🔬'
    },
    {
      year: '2024',
      title: 'Future Forward',
      description: 'Leading the way in AI-powered business solutions and digital transformation.',
      icon: '🚀'
    }
  ];

  const certifications = [
    { name: 'ISO 27001', description: 'Information Security Management', icon: '🔒' },
    { name: 'AWS Partner', description: 'Advanced Consulting Partner', icon: '☁️' },
    { name: 'Microsoft Gold', description: 'Cloud Platform Partner', icon: '💻' },
    { name: 'Google Cloud', description: 'Premier Partner', icon: '🌐' },
    { name: 'CMMI Level 5', description: 'Process Maturity', icon: '📊' }
  ];

  const tabs = [
    { id: 'mission', label: 'Mission & Vision', icon: '🎯' },
    { id: 'values', label: 'Core Values', icon: '💎' },
    { id: 'team', label: 'Our Team', icon: '👥' },
    { id: 'history', label: 'Our History', icon: '📅' },
    { id: 'certifications', label: 'Certifications', icon: '🏆' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <SEO 
        title="About Us - Zion Tech Group"
        description="Learn about Zion Tech Group's mission, values, team, and commitment to delivering innovative technology solutions that drive business success."
        keywords="about Zion Tech Group, company mission, team, values, technology company, AI solutions, IT services"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                About Zion Tech Group
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              We are a forward-thinking technology company dedicated to transforming businesses 
              through innovative AI solutions, cutting-edge development, and strategic consulting.
            </p>

            {/* Company Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {companyStats.map((stat, index) => (
                <div 
                  key={index} 
                  className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl mb-2 animate-bounce">{stat.icon}</div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Our Mission & Vision
              </h2>
              
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center">
                    <span className="mr-3">🎯</span>
                    Mission
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    To empower businesses with cutting-edge technology solutions that drive innovation, 
                    efficiency, and growth. We believe technology should be accessible, scalable, and 
                    transformative for organizations of all sizes.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold text-purple-400 mb-4 flex items-center">
                    <span className="mr-3">🔮</span>
                    Vision
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    To be the leading technology partner for businesses seeking digital transformation, 
                    AI innovation, and sustainable growth. We envision a future where technology 
                    seamlessly enhances human potential and business capabilities.
                  </p>
                </div>
              </div>
            </div>
            
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '0.2s' }}>
              <div className="bg-gradient-to-br from-slate-800/50 to-blue-900/50 rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h3>
                
                <div className="space-y-4">
                  {[
                    'Proven track record of 500+ successful projects',
                    'Expert team with 10+ years of experience',
                    'Cutting-edge AI and emerging technology expertise',
                    'Client-focused approach with 100% satisfaction rate',
                    'Comprehensive solutions from strategy to implementation',
                    'Ongoing support and continuous improvement'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <span className="text-green-400 text-xl mt-1">✓</span>
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape our company culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <div 
                key={index} 
                className={`bg-gradient-to-br ${value.color} rounded-xl border border-white/20 hover:border-cyan-500/50 transition-all duration-300 group hover:transform hover:scale-105 card-hover ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="p-6 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300 text-sm">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experienced professionals passionate about technology and committed to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className={`bg-gradient-to-br ${member.color} rounded-xl border border-white/20 hover:border-cyan-500/50 transition-all duration-300 group hover:transform hover:scale-105 card-hover ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="p-6 text-center">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {member.image}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                  
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/20"
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

      {/* Company History Timeline */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From startup to industry leader - our path of innovation and growth.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px w-0.5 h-full bg-gradient-to-b from-cyan-500 to-blue-500"></div>
            
            <div className="space-y-12">
              {timeline.map((milestone, index) => (
                <div 
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  } ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-500/50 transition-all duration-300">
                      <div className="text-3xl mb-3">{milestone.icon}</div>
                      <div className="text-2xl font-bold text-cyan-400 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                      <p className="text-gray-300 text-sm">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Partnerships */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Certifications & Partnerships
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our commitment to excellence is recognized by industry leaders and standards organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-slate-800/50 to-blue-900/50 rounded-xl border border-white/20 hover:border-cyan-500/50 transition-all duration-300 group hover:transform hover:scale-105 card-hover text-center p-6"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {cert.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{cert.name}</h3>
                <p className="text-gray-300 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-12 text-white text-center">
            <h3 className="text-4xl font-bold mb-4">
              Ready to Work With Us?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Join hundreds of satisfied clients who have transformed their businesses with Zion Tech Group.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/request-quote"
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Quote
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
              >
                Contact Our Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;