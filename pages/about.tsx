import React from 'react';
import Head from 'next/head';

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Executive Officer',
      bio: 'Former AI researcher at Stanford, leading Zion\'s mission to democratize autonomous automation.',
      image: '👩‍💼',
      expertise: ['AI Strategy', 'Business Development', 'Research Leadership']
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Chief Technology Officer',
      bio: 'Cloud architecture expert with 15+ years building scalable systems at Google and AWS.',
      image: '👨‍💻',
      expertise: ['Cloud Architecture', 'DevOps', 'System Design']
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Head of AI Research',
      bio: 'PhD in Machine Learning from MIT, specializing in autonomous systems and neural networks.',
      image: '👩‍🔬',
      expertise: ['Machine Learning', 'Neural Networks', 'Research']
    },
    {
      name: 'Alex Kim',
      role: 'VP of Product',
      bio: 'Product leader with experience at Slack and Notion, focused on user experience and automation.',
      image: '👨‍💼',
      expertise: ['Product Strategy', 'UX Design', 'Automation']
    },
    {
      name: 'Priya Patel',
      role: 'Head of Engineering',
      bio: 'Full-stack engineering leader with expertise in building robust, scalable applications.',
      image: '👩‍💻',
      expertise: ['Full-Stack Development', 'Team Leadership', 'Architecture']
    },
    {
      name: 'David Thompson',
      role: 'Chief Security Officer',
      bio: 'Cybersecurity expert with background in government and enterprise security systems.',
      image: '👨‍🔒',
      expertise: ['Cybersecurity', 'Compliance', 'Risk Management']
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Zion Technologies was founded with a vision to democratize autonomous automation.'
    },
    {
      year: '2021',
      title: 'First AI Model',
      description: 'Developed our first autonomous content generation model with 95% accuracy.'
    },
    {
      year: '2022',
      title: 'Cloud Platform Launch',
      description: 'Launched Zion Cloud, our autonomous automation platform for businesses.'
    },
    {
      year: '2023',
      title: 'Enterprise Adoption',
      description: 'Reached 100+ enterprise customers and $10M in annual recurring revenue.'
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Expanded to 25+ countries with localized automation solutions.'
    },
    {
      year: '2025',
      title: 'AI Breakthrough',
      description: 'Achieved 99.9% automation success rate across all customer deployments.'
    }
  ];

  const values = [
    {
      icon: '🚀',
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI and automation.'
    },
    {
      icon: '🤝',
      title: 'Customer Success',
      description: 'Our success is measured by the success of our customers and their automation goals.'
    },
    {
      icon: '🔒',
      title: 'Security & Trust',
      description: 'We prioritize the security and privacy of our customers\' data above all else.'
    },
    {
      icon: '🌍',
      title: 'Global Impact',
      description: 'We believe automation should be accessible to businesses of all sizes worldwide.'
    },
    {
      icon: '📚',
      title: 'Continuous Learning',
      description: 'Our team is constantly learning and evolving with the latest AI advancements.'
    },
    {
      icon: '⚡',
      title: 'Speed & Efficiency',
      description: 'We move fast and help our customers do the same through intelligent automation.'
    }
  ];

  return (
    <>
      <Head>
        <title>About Zion | Our Story & Mission</title>
        <meta name="description" content="Learn about Zion's mission to democratize autonomous automation, our team of experts, and our journey to transform business operations worldwide." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Zion
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Transforming businesses worldwide through intelligent, autonomous automation
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At Zion, we believe that every business deserves access to the power of autonomous automation. 
              Our mission is to democratize AI-driven automation, making it accessible, affordable, and 
              effective for organizations of all sizes across every industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Democratize Automation</h3>
              <p className="text-gray-600">
                Making advanced AI automation accessible to businesses of all sizes, not just enterprise giants.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Accelerate Growth</h3>
              <p className="text-gray-600">
                Helping businesses scale faster and more efficiently through intelligent automation.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Global Impact</h3>
              <p className="text-gray-600">
                Creating positive change across industries and geographies through automation innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Zion was born from a simple observation: while large enterprises were rapidly adopting 
                  AI and automation, smaller businesses were being left behind due to cost, complexity, 
                  and lack of expertise.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our founders, coming from leading tech companies and research institutions, saw an 
                  opportunity to level the playing field. They envisioned a world where any business 
                  could harness the power of autonomous automation to compete and thrive.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Today, Zion serves thousands of businesses worldwide, from startups to Fortune 500 
                  companies, helping them automate operations, generate content, and scale efficiently 
                  through our intelligent platform.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Achievements</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">500+ enterprise customers worldwide</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">99.9% automation success rate</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">$50M+ in customer savings generated</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700">25+ countries served</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700">24/7 autonomous operation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8 text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8 text-center">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.expertise.map((skill, skillIndex) => (
                    <span key={skillIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Our Journey</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-2xl shadow-xl p-6">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl shadow-xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">
              Join Us on This Journey
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Whether you're a customer, partner, or potential team member, we'd love to connect 
              and explore how we can work together to shape the future of automation.
            </p>
            <div className="space-x-4">
              <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-colors">
                Get Started Today
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors">
                Join Our Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}