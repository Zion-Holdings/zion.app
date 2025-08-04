import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

const Careers: NextPage = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Positions' },
    { id: 'engineering', name: 'Engineering' },
    { id: 'product', name: 'Product' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'sales', name: 'Sales' },
    { id: 'operations', name: 'Operations' }
  ]

  const positions = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      category: 'engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Join our core engineering team to build the next generation of AI-powered marketplace technology. You\'ll work on cutting-edge features that connect businesses with innovative solutions.',
      requirements: [
        'Expert in React, Node.js, and TypeScript',
        'Experience with AI/ML integration',
        'Strong understanding of scalable architecture',
        'Experience with cloud platforms (AWS/GCP)',
        'Excellent problem-solving skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Remote-first culture',
        'Flexible working hours',
        'Professional development budget',
        'Health insurance and benefits'
      ]
    },
    {
      id: 2,
      title: 'AI/ML Engineer',
      category: 'engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Help us build intelligent systems that power our marketplace matching algorithms and recommendation engines.',
      requirements: [
        'Strong background in machine learning',
        'Experience with Python, TensorFlow/PyTorch',
        'Knowledge of NLP and recommendation systems',
        'Experience with MLOps and deployment',
        'Strong mathematical foundation'
      ],
      benefits: [
        'Work on cutting-edge AI projects',
        'Access to latest AI tools and resources',
        'Conference and training opportunities',
        'Collaboration with AI research community'
      ]
    },
    {
      id: 3,
      title: 'Product Manager',
      category: 'product',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Lead product strategy and execution for our marketplace platform, focusing on user experience and business growth.',
      requirements: [
        'Experience in B2B marketplace products',
        'Strong analytical and data-driven approach',
        'Excellent communication and leadership skills',
        'Experience with agile methodologies',
        'Understanding of AI/ML products'
      ],
      benefits: [
        'Shape the future of marketplace technology',
        'Work with cutting-edge AI features',
        'Direct impact on business growth',
        'Collaboration with engineering and design teams'
      ]
    },
    {
      id: 4,
      title: 'Growth Marketing Manager',
      category: 'marketing',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Drive user acquisition and growth strategies for our AI-powered marketplace platform.',
      requirements: [
        'Experience in B2B marketing',
        'Strong understanding of digital marketing channels',
        'Experience with marketing automation tools',
        'Data-driven approach to marketing',
        'Experience with marketplace or SaaS products'
      ],
      benefits: [
        'Work on innovative marketing campaigns',
        'Access to advanced analytics tools',
        'Creative freedom to experiment',
        'Direct impact on company growth'
      ]
    },
    {
      id: 5,
      title: 'Enterprise Sales Representative',
      category: 'sales',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build relationships with enterprise clients and help them leverage Zion\'s AI-powered marketplace solutions.',
      requirements: [
        'Experience in B2B enterprise sales',
        'Understanding of technology solutions',
        'Strong presentation and negotiation skills',
        'Experience with CRM systems',
        'Knowledge of AI/ML market'
      ],
      benefits: [
        'Competitive commission structure',
        'Unlimited earning potential',
        'Professional development opportunities',
        'Work with cutting-edge technology'
      ]
    },
    {
      id: 6,
      title: 'Customer Success Manager',
      category: 'operations',
      location: 'Remote',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Ensure customer satisfaction and success by helping clients maximize the value of Zion\'s marketplace platform.',
      requirements: [
        'Experience in customer success or account management',
        'Strong communication and problem-solving skills',
        'Understanding of marketplace dynamics',
        'Experience with customer success tools',
        'Ability to work with technical and non-technical clients'
      ],
      benefits: [
        'Direct impact on customer satisfaction',
        'Work with diverse client base',
        'Opportunity to shape product features',
        'Professional growth in customer success'
      ]
    }
  ]

  const filteredPositions = activeCategory === 'all' 
    ? positions 
    : positions.filter(position => position.category === activeCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>Careers - Zion</title>
        <meta name="description" content="Join Zion's mission to democratize access to technology and innovation. Explore career opportunities in our AI-powered marketplace." />
      </Head>

      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/marketplace" className="text-gray-300 hover:text-white transition-colors">
                Marketplace
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
              <Link href="/auth/login" className="text-gray-300 hover:text-white transition-colors">
                Login
              </Link>
              <Link href="/auth/signup" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg transition-all duration-200">
                Join Zion Now
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Our Mission
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Help us democratize access to technology and innovation. We're building the future of AI-powered marketplaces, and we need talented individuals who share our vision.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-300">Team Members</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-purple-400 mb-2">25+</div>
              <div className="text-gray-300">Countries</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
              <div className="text-gray-300">Remote First</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Flexible Hours</div>
            </div>
          </div>
        </div>

        {/* Why Join Zion */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Join Zion?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-3">Innovation First</h3>
              <p className="text-gray-300">
                Work on cutting-edge AI technology that's transforming how businesses connect and collaborate.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-3xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold text-white mb-3">Global Impact</h3>
              <p className="text-gray-300">
                Help democratize access to technology for businesses worldwide, regardless of their size or location.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-3xl mb-4">💎</div>
              <h3 className="text-xl font-semibold text-white mb-3">Growth Opportunities</h3>
              <p className="text-gray-300">
                Fast-paced environment with opportunities to learn, grow, and take on new challenges.
              </p>
            </div>
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Open Positions</h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg border transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-purple-600/20 border-purple-500 text-purple-300'
                    : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Positions List */}
          <div className="space-y-6">
            {filteredPositions.map((position) => (
              <div key={position.id} className="bg-white/5 border border-white/10 rounded-lg p-8 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {position.location}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.815-9-2.145M21 13.255A23.931 23.931 0 0012 15c-3.183 0-6.22-.815-9-2.145M21 13.255A23.931 23.931 0 0012 15c-3.183 0-6.22-.815-9-2.145" />
                        </svg>
                        {position.type}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {position.experience}
                      </span>
                    </div>
                  </div>
                  <Link 
                    href={`/careers/${position.id}`}
                    className="mt-4 md:mt-0 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg transition-all duration-200"
                  >
                    Apply Now
                  </Link>
                </div>
                
                <p className="text-gray-300 mb-6">{position.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, index) => (
                        <li key={index} className="text-gray-300 flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {position.benefits.map((benefit, index) => (
                        <li key={index} className="text-gray-300 flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Culture Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Culture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold text-white mb-2">Mission-Driven</h3>
              <p className="text-gray-300 text-sm">
                Every team member is aligned with our mission to democratize technology access.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-lg font-semibold text-white mb-2">Collaborative</h3>
              <p className="text-gray-300 text-sm">
                We believe in the power of diverse perspectives and collaborative problem-solving.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-lg font-semibold text-white mb-2">Growth-Oriented</h3>
              <p className="text-gray-300 text-sm">
                Continuous learning and professional development are core to our culture.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold text-white mb-2">Fast-Paced</h3>
              <p className="text-gray-300 text-sm">
                We move quickly, iterate often, and embrace change as an opportunity.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-white/5 border border-white/10 rounded-lg p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Join Us?</h2>
            <p className="text-xl text-gray-300 mb-6">
              Don't see a position that fits? We're always looking for talented individuals to join our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg transition-all duration-200 font-semibold"
              >
                Contact Us
              </Link>
              <Link 
                href="/about"
                className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg transition-all duration-200 font-semibold"
              >
                Learn More About Zion
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-md border-t border-white/10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Zion. All rights reserved. | The First Free AI-Powered Marketplace</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Careers 