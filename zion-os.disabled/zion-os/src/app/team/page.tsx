import Link from 'next/link';

export const metadata = {
  title: 'Our Team - Zion Tech Group',
  description: 'Meet the exceptional team of experts at Zion Tech Group, leading innovation in AI, quantum computing, and technology solutions.',
};

export default function TeamPage() {
  const leadership = [
    {
      name: 'Dr. Kleber Santos',
      position: 'Founder & Chief Executive Officer',
      bio: 'Visionary leader with over 15 years of experience in AI research, technology innovation, and business transformation. Dr. Santos has pioneered breakthrough developments in autonomous AI systems and quantum computing applications.',
      expertise: ['AI Research & Development', 'Strategic Leadership', 'Technology Innovation', 'Business Transformation'],
      education: 'Ph.D. in Computer Science, MIT',
      experience: '15+ years in AI and Technology',
      image: '/team/kleber-santos.jpg',
      linkedin: 'https://linkedin.com/in/klebersantos',
      email: 'kleber@ziontechgroup.com'
    },
    {
      name: 'Dr. Sarah Chen',
      position: 'Chief Technology Officer',
      bio: 'Leading expert in quantum computing and autonomous systems architecture. Dr. Chen has developed cutting-edge quantum algorithms and AI systems that are transforming industries worldwide.',
      expertise: ['Quantum Computing', 'System Architecture', 'AI Engineering', 'Research & Development'],
      education: 'Ph.D. in Quantum Physics, Stanford University',
      experience: '12+ years in Quantum Computing',
      image: '/team/sarah-chen.jpg',
      linkedin: 'https://linkedin.com/in/sarahchen',
      email: 'sarah@ziontechgroup.com'
    },
    {
      name: 'Michael Rodriguez',
      position: 'Chief Operating Officer',
      bio: 'Experienced operations leader specializing in scaling technology companies and optimizing business processes. Michael has successfully led multiple AI solution deployments for Fortune 500 companies.',
      expertise: ['Operations Management', 'Business Scaling', 'AI Deployment', 'Process Optimization'],
      education: 'MBA, Harvard Business School',
      experience: '18+ years in Operations',
      image: '/team/michael-rodriguez.jpg',
      linkedin: 'https://linkedin.com/in/michaelrodriguez',
      email: 'michael@ziontechgroup.com'
    },
    {
      name: 'Dr. Emily Watson',
      position: 'Chief Research Officer',
      bio: 'Pioneering researcher in AI consciousness and autonomous systems. Dr. Watson leads our research initiatives in artificial consciousness and human-AI collaboration.',
      expertise: ['AI Consciousness Research', 'Autonomous Systems', 'Research Leadership', 'Ethical AI'],
      education: 'Ph.D. in Cognitive Science, UC Berkeley',
      experience: '14+ years in AI Research',
      image: '/team/emily-watson.jpg',
      linkedin: 'https://linkedin.com/in/emilywatson',
      email: 'emily@ziontechgroup.com'
    }
  ];

  const technicalTeam = [
    {
      name: 'Dr. David Kim',
      position: 'Senior AI Research Scientist',
      bio: 'Expert in machine learning algorithms and neural network architectures. Dr. Kim has published over 50 research papers in top AI conferences.',
      expertise: ['Machine Learning', 'Neural Networks', 'Deep Learning', 'AI Research'],
      education: 'Ph.D. in Machine Learning, Carnegie Mellon University',
      experience: '10+ years in AI Research'
    },
    {
      name: 'Dr. Lisa Park',
      position: 'Senior Quantum Computing Engineer',
      bio: 'Specialist in quantum algorithms and quantum machine learning. Dr. Park has developed quantum solutions for complex optimization problems.',
      expertise: ['Quantum Algorithms', 'Quantum Machine Learning', 'Optimization', 'Quantum Computing'],
      education: 'Ph.D. in Physics, Caltech',
      experience: '8+ years in Quantum Computing'
    },
    {
      name: 'Dr. James Wilson',
      position: 'Senior Cybersecurity Architect',
      bio: 'Leading expert in AI-powered cybersecurity and quantum-resistant cryptography. Dr. Wilson has designed security systems for major financial institutions.',
      expertise: ['Cybersecurity', 'Quantum Cryptography', 'AI Security', 'System Architecture'],
      education: 'Ph.D. in Computer Security, Georgia Tech',
      experience: '12+ years in Cybersecurity'
    },
    {
      name: 'Dr. Maria Garcia',
      position: 'Senior Data Scientist',
      bio: 'Expert in big data analytics and business intelligence. Dr. Garcia has helped organizations transform their data into actionable insights.',
      expertise: ['Data Science', 'Business Intelligence', 'Analytics', 'Machine Learning'],
      education: 'Ph.D. in Statistics, University of Chicago',
      experience: '9+ years in Data Science'
    }
  ];

  const advisoryBoard = [
    {
      name: 'Prof. Robert Johnson',
      position: 'Advisory Board Member',
      bio: 'Distinguished professor of computer science at MIT and leading authority in artificial intelligence and machine learning.',
      expertise: ['AI Research', 'Academic Leadership', 'Technology Policy', 'Innovation'],
      affiliation: 'MIT Computer Science & AI Laboratory'
    },
    {
      name: 'Dr. Jennifer Lee',
      position: 'Advisory Board Member',
      bio: 'Former CTO of a Fortune 100 technology company and expert in enterprise technology transformation.',
      expertise: ['Enterprise Technology', 'Digital Transformation', 'Technology Strategy', 'Leadership'],
      affiliation: 'Technology Innovation Institute'
    },
    {
      name: 'Prof. Michael Brown',
      position: 'Advisory Board Member',
      bio: 'Renowned quantum physicist and researcher in quantum computing applications for industry.',
      expertise: ['Quantum Physics', 'Quantum Computing', 'Research Leadership', 'Industry Applications'],
      affiliation: 'Stanford Quantum Computing Institute'
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, constantly exploring new frontiers in technology.',
      icon: '🚀'
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards of quality in everything we do, from research to client delivery.',
      icon: '⭐'
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives to solve complex challenges.',
      icon: '🤝'
    },
    {
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and ethical principles in all our interactions.',
      icon: '🔒'
    },
    {
      title: 'Continuous Learning',
      description: 'We foster a culture of continuous improvement and knowledge sharing.',
      icon: '📚'
    },
    {
      title: 'Impact',
      description: 'We focus on creating meaningful, real-world impact through our technology solutions.',
      icon: '🌍'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Meet Our Team</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            World-class experts in AI, quantum computing, and technology innovation 
            working together to transform the future of business.
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visionary leaders driving innovation and transformation across industries
            </p>
          </div>
          
          <div className="space-y-16">
            {leadership.map((leader, index) => (
              <div key={index} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <div className="w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto lg:mx-0 flex items-center justify-center text-white text-6xl font-bold mb-6">
                    {leader.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                  <p className="text-xl text-blue-600 font-medium mb-4">{leader.position}</p>
                  <p className="text-lg text-gray-600 mb-6">{leader.bio}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Areas of Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {leader.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Education:</span>
                      <p className="text-gray-600">{leader.education}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Experience:</span>
                      <p className="text-gray-600">{leader.experience}</p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={`mailto:${leader.email}`}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      📧 Email
                    </a>
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      💼 LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert engineers, scientists, and researchers driving technological innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technicalTeam.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4 text-center">{member.position}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Education:</span>
                    <p className="text-gray-600">{member.education}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Experience:</span>
                    <p className="text-gray-600">{member.experience}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Advisory Board</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Distinguished advisors providing strategic guidance and industry expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advisoryBoard.map((advisor, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                  {advisor.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{advisor.name}</h3>
                <p className="text-purple-600 font-medium mb-3">{advisor.position}</p>
                <p className="text-gray-600 text-sm mb-4">{advisor.bio}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Expertise:</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {advisor.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 font-medium">{advisor.affiliation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our team and shape our company culture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Be part of a team that's shaping the future of technology and AI
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Work With Us?</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span>Work on cutting-edge AI and quantum computing projects</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span>Collaborate with world-class researchers and engineers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span>Make real-world impact through innovative technology</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span>Continuous learning and professional development</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span>Competitive compensation and benefits</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Open Positions</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Senior AI Research Scientist</h4>
                  <p className="text-sm text-gray-600">Join our AI consciousness research team</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Quantum Computing Engineer</h4>
                  <p className="text-sm text-gray-600">Develop quantum algorithms and solutions</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Full-Stack Developer</h4>
                  <p className="text-sm text-gray-600">Build our next-generation platforms</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Data Scientist</h4>
                  <p className="text-sm text-gray-600">Transform data into actionable insights</p>
                </div>
              </div>
              
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  View All Positions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work With Our Team?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you're looking to collaborate, join our team, or learn more about our expertise, 
            we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Get in Touch
            </Link>
            <Link
              href="/careers"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              View Careers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}