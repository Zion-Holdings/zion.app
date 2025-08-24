import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const companyValues = [
    {
      icon: '🚀',
      title: 'Innovation First',
      description: 'We constantly push the boundaries of what\'s possible with cutting-edge technology.'
    },
    {
      icon: '🤝',
      title: 'Partnership',
      description: 'We build long-term relationships based on trust, transparency, and mutual success.'
    },
    {
      icon: '🎯',
      title: 'Results Driven',
      description: 'Every solution we deliver is designed to provide measurable business impact.'
    },
    {
      icon: '🔒',
      title: 'Security & Trust',
      description: 'We prioritize the security and privacy of our clients\' data and systems.'
    },
    {
      icon: '🌍',
      title: 'Global Perspective',
      description: 'We bring international best practices and diverse perspectives to every project.'
    },
    {
      icon: '💡',
      title: 'Continuous Learning',
      description: 'Our team constantly evolves with the latest technologies and industry trends.'
    }
  ];

  const teamMembers = [
    {
      name: 'Kleber',
      role: 'Founder & CEO',
      expertise: 'Technology Strategy, AI/ML, Business Development',
      experience: '15+ years in technology leadership',
      avatar: '👨‍💼'
    },
    {
      name: 'AI Development Team',
      role: 'Machine Learning Engineers',
      expertise: 'AI/ML, Neural Networks, Data Science',
      experience: 'Advanced AI model development',
      avatar: '🤖'
    },
    {
      name: 'Cloud Infrastructure Team',
      role: 'DevOps & Cloud Engineers',
      expertise: 'AWS, Azure, GCP, Kubernetes, Docker',
      experience: 'Enterprise cloud solutions',
      avatar: '☁️'
    },
    {
      name: 'Cybersecurity Team',
      role: 'Security Specialists',
      expertise: 'Penetration Testing, Compliance, Threat Detection',
      experience: 'Enterprise security implementation',
      avatar: '🛡️'
    }
  ];

  const milestones = [
    {
      year: '2024',
      title: 'AI-Powered Solutions Launch',
      description: 'Launched comprehensive AI services including content generation, analytics, and chatbots.'
    },
    {
      year: '2023',
      title: 'Micro SAAS Platform',
      description: 'Developed and launched our micro SAAS solutions for small to medium businesses.'
    },
    {
      year: '2022',
      title: 'Cloud Services Expansion',
      description: 'Expanded cloud migration and optimization services across multiple platforms.'
    },
    {
      year: '2021',
      title: 'Company Foundation',
      description: 'Founded Zion Tech Group with a vision to democratize advanced technology solutions.'
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue-dark py-20">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple opacity-20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-zion-purple rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-zion-cyan rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-zion-cyan-light rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-orbitron">
            <span className="bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-cyan-light bg-clip-text text-transparent">
              About Zion Tech Group
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed">
            We are a forward-thinking technology company dedicated to transforming businesses 
            through innovative micro SAAS solutions, cutting-edge IT services, and advanced AI technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-cyan-light text-zion-blue-dark font-bold rounded-lg hover:from-zion-cyan-light hover:to-zion-cyan transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/50"
            >
              Get In Touch
            </Link>
            <Link
              to="/"
              className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-bold rounded-lg hover:bg-zion-cyan hover:text-zion-blue-dark transition-all duration-300 transform hover:scale-105"
            >
              Explore Services
            </Link>
          </div>
        </section>

        {/* Company Overview */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 font-orbitron">
                <span className="bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent">
                  Our Mission
                </span>
              </h2>
              <p className="text-lg text-zion-slate-light mb-6 leading-relaxed">
                At Zion Tech Group, we believe that advanced technology should be accessible to businesses of all sizes. 
                Our mission is to democratize cutting-edge solutions by providing enterprise-grade technology at micro SAAS prices.
              </p>
              <p className="text-lg text-zion-slate-light mb-6 leading-relaxed">
                We specialize in creating intelligent, scalable solutions that help businesses automate processes, 
                gain insights from data, and stay ahead of the competition in an increasingly digital world.
              </p>
              <p className="text-lg text-zion-slate-light leading-relaxed">
                From AI-powered analytics to comprehensive IT infrastructure, we're your strategic technology partner 
                for the digital future.
              </p>
            </div>
            <div className="bg-gradient-to-br from-zion-blue/50 to-zion-purple/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-zion-cyan text-2xl">✓</span>
                  <span className="text-white">15+ Years of Technology Experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-zion-cyan text-2xl">✓</span>
                  <span className="text-white">AI-First Approach to Problem Solving</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-zion-cyan text-2xl">✓</span>
                  <span className="text-white">Enterprise-Grade Security & Compliance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-zion-cyan text-2xl">✓</span>
                  <span className="text-white">24/7 Support & Maintenance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-zion-cyan text-2xl">✓</span>
                  <span className="text-white">Scalable Solutions That Grow With You</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 font-orbitron">
              <span className="bg-gradient-to-r from-zion-purple-light to-zion-cyan bg-clip-text text-transparent">
                Our Core Values
              </span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              These principles guide everything we do, from how we develop solutions to how we interact with clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyValues.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-zion-blue/50 to-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-zion-cyan/20 group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-zion-slate-light">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 font-orbitron">
              <span className="bg-gradient-to-r from-zion-cyan-light to-zion-purple bg-clip-text text-transparent">
                Meet Our Team
              </span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in technology, 
              AI, cybersecurity, and business transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-zion-purple/20 to-zion-blue-dark/50 backdrop-blur-sm border border-zion-purple/20 rounded-xl p-6 text-center hover:border-zion-purple/40 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-zion-purple/20 group"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-zion-purple-light font-semibold mb-3">{member.role}</p>
                <p className="text-zion-slate-light text-sm mb-3">{member.expertise}</p>
                <p className="text-zion-slate-light text-xs">{member.experience}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Company Milestones */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 font-orbitron">
              <span className="bg-gradient-to-r from-zion-purple to-zion-cyan bg-clip-text text-transparent">
                Our Journey
              </span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              From our founding to becoming a leading technology solutions provider, 
              here are the key milestones in our company's growth.
            </p>
          </div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-zion-blue/50 to-zion-purple/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-8">
                    <div className="text-4xl font-bold text-zion-cyan mb-4">{milestone.year}</div>
                    <h3 className="text-2xl font-bold text-white mb-4">{milestone.title}</h3>
                    <p className="text-zion-slate-light text-lg leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
                <div className="flex-1 text-center">
                  <div className="text-8xl opacity-50">🚀</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 font-orbitron">
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent">
                Our Technology Stack
              </span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We leverage the latest technologies and frameworks to deliver robust, scalable, and secure solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { category: 'AI & Machine Learning', tech: ['TensorFlow', 'PyTorch', 'OpenAI API', 'LangChain'] },
              { category: 'Cloud Platforms', tech: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes'] },
              { category: 'Development', tech: ['React', 'Node.js', 'Python', 'TypeScript'] },
              { category: 'Security', tech: ['OAuth 2.0', 'JWT', 'SSL/TLS', 'Penetration Testing'] }
            ].map((stack, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-zion-blue/30 to-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-white mb-4">{stack.category}</h3>
                <div className="space-y-2">
                  {stack.tech.map((tech, idx) => (
                    <div key={idx} className="text-zion-slate-light text-sm">• {tech}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-zion-blue to-zion-purple rounded-2xl p-12 border border-zion-cyan/20">
            <h2 className="text-3xl font-bold text-white mb-6 font-orbitron">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Let's discuss how Zion Tech Group can help transform your business 
              with our innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-10 py-5 bg-zion-cyan text-zion-blue-dark font-bold rounded-lg hover:bg-zion-cyan-light transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/50"
              >
                Start a Conversation
              </Link>
              <Link
                to="/"
                className="px-10 py-5 border-2 border-zion-cyan text-zion-cyan font-bold rounded-lg hover:bg-zion-cyan hover:text-zion-blue-dark transition-all duration-300 transform hover:scale-105"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;