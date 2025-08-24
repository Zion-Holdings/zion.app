import Link from 'next/link';

export const metadata = {
  title: 'About Us - Zion Tech Group',
  description: 'Learn about Zion Tech Group, our mission, leadership team, and commitment to AI-powered innovation and technology excellence.',
};

export default function AboutPage() {
  const leadership = [
    {
      name: 'Kleber',
      title: 'Founder & CEO',
      bio: 'Visionary leader driving innovation in AI and autonomous business technologies.',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'AI Leadership Team',
      title: 'Chief AI Officers',
      bio: 'Expert team of AI researchers and engineers pushing the boundaries of artificial intelligence.',
      image: '/api/placeholder/150/150'
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We believe in pushing the boundaries of what\'s possible with AI and technology.',
      icon: '🚀'
    },
    {
      title: 'Client Success',
      description: 'Your success is our success. We\'re committed to delivering measurable results.',
      icon: '🎯'
    },
    {
      title: 'Ethical AI',
      description: 'We develop AI solutions that are responsible, transparent, and beneficial to society.',
      icon: '🤝'
    },
    {
      title: 'Continuous Learning',
      description: 'We stay ahead of the curve by constantly evolving our knowledge and capabilities.',
      icon: '📚'
    }
  ];

  const milestones = [
    {
      year: '2024',
      title: 'Company Founded',
      description: 'Zion Tech Group established with a vision to revolutionize business through AI.'
    },
    {
      year: '2025',
      title: 'First AI Platform Launch',
      description: 'Successfully deployed our first autonomous business operations platform.'
    },
    {
      year: '2026',
      title: 'Enterprise Expansion',
      description: 'Expanded services to serve Fortune 500 companies and government agencies.'
    },
    {
      year: '2027',
      title: 'Quantum Computing Division',
      description: 'Launched quantum computing services and research initiatives.'
    },
    {
      year: '2028',
      title: 'Space Technology Innovation',
      description: 'Pioneered breakthrough space technology solutions and partnerships.'
    },
    {
      year: '2029',
      title: 'Global AI Leadership',
      description: 'Recognized as a global leader in AI-powered business transformation.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About Zion Tech Group</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Pioneering the future of business through AI-powered innovation, autonomous systems, and cutting-edge technology solutions.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Zion Tech Group, we're on a mission to democratize AI technology and make autonomous business operations accessible to organizations of all sizes.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We believe that every business deserves access to the transformative power of artificial intelligence, and we're committed to building solutions that drive real, measurable results.
              </p>
              <p className="text-lg text-gray-600">
                Our team of experts combines deep technical knowledge with practical business acumen to deliver solutions that not only work but also scale with your business.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision 2030</h3>
              <p className="text-gray-700">
                To become the world's leading provider of AI-powered business solutions, enabling organizations to achieve unprecedented levels of efficiency, innovation, and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do and every decision we make.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center shadow-lg">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">
              Meet the visionary leaders driving innovation at Zion Tech Group.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
                  {leader.name.charAt(0)}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{leader.title}</p>
                <p className="text-gray-600">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">
              Key milestones in our mission to revolutionize business through AI.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-lg shadow-lg p-6">
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
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Join Us on This Journey</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Ready to transform your business with AI-powered innovation? Let's discuss how Zion Tech Group can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}