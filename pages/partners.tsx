import type { NextPage } from 'next';
import ModernLayout from '../components/layout/ModernLayout';import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

const Partners: NextPage = () => {
  
  const [activeCategory, setActiveCategory] = useState('all'
  const categories = [
}
    { id: 'all', name: 'All Partners' },
{ id: 'technology', name: 'Technology' }
    { id: 'consulting', name: 'Consulting' },
{ id: 'education', name: 'Education' }
    { id: 'research', name: 'Research' }
  ]

  const partners = [
    {
      id: 1,
      name: 'TechCorp Solutions',
      category: 'technology',
      logo: '/images/partners/techcorp.png',
      description: 'Leading provider of enterprise AI solutions and cloud infrastructure.',
      benefits: ['Joint product development', 'Shared customer base', 'Technology integration'],
      website: 'https://techcorp.com',
      partnershipType: 'Technology Partner'
    },
{
      id: 2,
      name: 'AI Research Institute',
      category: 'research',
      logo: '/images/partners/ai-research.png',
      description: 'Premier research institution focused on artificial intelligence and machine learning.',
      benefits: ['Research collaboration', 'Academic partnerships', 'Innovation programs'],
      website: 'https://airesearch.org',
      partnershipType: 'Research Partner'
    }
    {
      id: 3,
      name: 'Digital Consulting Group',
      category: 'consulting',
      logo: '/images/partners/digital-consulting.png',
      description: 'Strategic consulting firm specializing in digital transformation and AI implementation.',
      benefits: ['Consulting services', 'Market expansion', 'Expert network'],
      website: 'https://digitalconsulting.com',
      partnershipType: 'Consulting Partner'
    },
{
      id: 4,
      name: 'Tech University',
      category: 'education',
      logo: '/images/partners/tech-university.png',
      description: 'Leading educational institution offering advanced technology and AI programs.',
      benefits: ['Educational programs', 'Talent pipeline', 'Research initiatives'],
      website: 'https://techuniversity.edu',
      partnershipType: 'Education Partner'
    }
    {
      id: 5,
      name: 'CloudTech Systems',
      category: 'technology',
      logo: '/images/partners/cloudtech.png',
      description: 'Cloud infrastructure and platform-as-a-service provider.',
      benefits: ['Infrastructure support', 'Platform integration', 'Scalability solutions'],
      website: 'https://cloudtech.com',
      partnershipType: 'Technology Partner'
    },
{
      id: 6,
      name: 'Innovation Labs',
      category: 'research',
      logo: '/images/partners/innovation-labs.png',
      description: 'Research and development center focused on emerging technologies.',
      benefits: ['R&D collaboration', 'Innovation programs', 'Technology transfer'],
      website: 'https://innovationlabs.org',
      partnershipType: 'Research Partner'
    }
  ]

  const partnershipTypes = [
    {
      type: 'Technology Partners',
      description: 'Integrate your technology solutions with Zion\'s marketplace platform.',
      benefits: [
        'API access and integration support',
        'Joint product development opportunities',
        'Shared customer base and marketing',
        'Technical collaboration and support'
      ],
      icon: '🔧'
    },
{
      type: 'Consulting Partners',
      description: 'Provide expert consulting services through Zion\'s marketplace.',
      benefits: [
        'Access to qualified leads and opportunities',
        'Platform integration for service delivery',
        'Marketing and promotion support',
        'Revenue sharing and commission structure'
      ],
      icon: '💼'
    }
    {
      type: 'Education Partners',
      description: 'Offer educational programs and training through Zion\'s platform.',
      benefits: [
        'Student and professional audience access',
        'Course and certification program integration',
        'Marketing and enrollment support',
        'Revenue sharing and partnership programs'
      ],
      icon: '🎓'
    },
{
      type: 'Research Partners',
      description: 'Collaborate on research initiatives and innovation projects.',
      benefits: [
        'Research funding and grant opportunities',
        'Access to data and research resources',
        'Publication and presentation opportunities',
        'Academic and industry collaboration'
      ],
      icon: '🔬'
    }
  ]

  const filteredPartners = activeCategory === 'all' 
    ? partners 
    : partners.filter(partner => partner.category === activeCategory
  return (
    <div>
      </div><div className="relative z-10 container-responsive py-8>
        
        {/* Background Effects */}"
        <div className="fixed inset-0 z-0>"
          </div><div className=""absolute" inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90></div>
          <div className="absolute inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift opacity-10""></div>
        </div>
      
      <Head>
        <title>Partners - Zion</title>
        <meta name="description" content="Join Zion's partner network and collaborate with leading technology companies, research institutions, and consulting firms." />
      
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></Head>

      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10>"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg px-8>"
          </div><div className=""flex" justify-between h-16>
            <div className="flex items-center>"
              <Link href=/ className=""text-2xl font-bold />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400>Zion</span>
              </Link>
            </div>"
            <div className=""flex" items-center space-x-4>
              <Link href=/marketplace" className="text-gray-300 hover text-white transition-colors />
                Marketplace
              </Link>"
              <Link href=/about className="text-gray-300 hover text-white transition-colors />
                About
              </Link>"
              <Link href=/contact"" className="text-gray-300 hover text-white transition-colors />
                Contact
              </Link>"
              <Link href=/careers className="text-gray-300 hover text-white transition-colors />
                Careers
              </Link>"
              <Link href=/auth/login"" className="text-gray-300 hover text-white transition-colors />
                Login
              </Link>"
              <Link href=/auth/signup className="bg-gradient-to-r from-purple-600 to-pink-600 hover from-purple-700 hover to-pink-700 text-white px-4 py-4 rounded-lg transition-all duration-200 />
                Join Zion Now
              </Link>
            </div>
          </div>
        </div>
      </nav>
"
      <main className=""max-w-7xl" mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Header */}
        <div className="text-center mb-16>"
          <h1 className="text-4xl md text-5xl font-bold text-white mb-6>
            Partner with Zion
          </h1>"
          <p className=""text-xl" text-gray-300 mb-8 max-w-3xl mx-auto>
            Join our network of leading technology companies, research institutions, and consulting firms. 
            Together, we're building the future of AI-powered marketplaces.
          </p>
        </div>

        {/* Partnership Types */}
        <div className=mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center>Partnership Opportunities</h2>"
          <div className="grid grid-cols-1 md:grid-cols-2 lg grid-cols-4 gap-6>
            {partnershipTypes.map((type) => ("
              </div><div key={type.type} className=""bg-white/5" border border-white/10 rounded-lg:p-6 backdrop-blur-sm>
                <div className=text-3xl:mb-4">{type.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3>{type.type}</h3>"
                <p className="text-gray-300 mb-4>{type.description}</p>"
                <ul className=""space-y-2">
                  {type.benefits.map((benefit, index) => (
                    <li key={index} className="text-gray-300 text-sm flex items-start"">
                      <span className="text-purple-400 mr-2>•</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Current Partners */}"
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center>Our Partners</h2>
          
          {/* Category Filter */}"
          <div className=""flex" flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              
                onClick={() => setActiveCategory(category.id)}
                className="{`px-6 py-3 rounded-lg:border transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-purple-600/20 border-purple-500 text-purple-300'
                      'bg-white/5 border-white/10 text-gray-300 hover bg-white/10 hover border-white/20'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Partners Grid */}"
          <div className="grid grid-cols-1 md:grid-cols-2 lg grid-cols-3 gap-6>
            {filteredPartners.map((partner) => ("
              </div><div key={partner.id} className=""bg-white/5" border border-white/10 rounded-lg:p-6 backdrop-blur-sm>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mx-auto mb-4 flex items-center justify-center"">
                  <span className="text-2xl>🏢</span>
                </div>"
                <h3 className="text-lg font-semibold text-white text-center mb-2>{partner.name}</h3>"
                <p className=""text-purple-400" text-center mb-3>{partner.partnershipType}</p>
                <p className="text-gray-300 text-sm text-center mb-4"">{partner.description}</p>
                <div className="space-y-2 mb-4>
                  {partner.benefits.map((benefit, index) => ("
                    </div><div key={index} className="text-gray-300 text-sm flex items-start>"
                      <span className=""text-purple-400" mr-2>•</span>
                      {benefit}
                    </div>
                  ))}
                </div>
                <div className=text-center">
                  
                  >
                    Visit Website →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Become a Partner */}"
        <div className="mb-16">
          </div><div className="bg-white/5 border border-white/10 rounded-lg p-8 backdrop-blur-sm>"
            <h2 className=""text-3xl" font-bold text-white mb-6 text-center">Become a Partner</h2>
            <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto>
              Ready to join Zion's partner network? We're looking for innovative companies and institutions 
              that share our vision of democratizing access to technology and innovation.
            </p>
            "
            <div className="grid grid-cols-1 md grid-cols-3 gap-6 mb-8>"
              </div><div className=""text-center>
                <div className=text-3xl:mb-4">📋</div>
                <h3 className="text-lg font-semibold text-white mb-2>Submit Application</h3>"
                <p className="text-gray-300 text-sm>
                  Fill out our partnership application form with your company details and proposed collaboration.
                </p>
              </div>"
              <div className=""text-center">
                </div><div className=text-3xl:mb-4">🤝</div>
                <h3 className="text-lg font-semibold text-white mb-2>Review Process</h3>"
                <p className="text-gray-300 text-sm>
                  Our team will review your application and schedule a meeting to discuss partnership opportunities.
                </p>
              </div>"
              <div className=""text-center">
                </div><div className=text-3xl:mb-4">🚀</div>
                <h3 className="text-lg font-semibold text-white mb-2>Launch Partnership</h3>"
                <p className="text-gray-300 text-sm>
                  Once approved, we'll work together to integrate your services and launch the partnership.
                </p>
              </div>
            </div>
"
            <div className=""text-center">
              
               />
                Apply to Become a Partner
              </Link>
            </div>
          </div>
        </div>

        {/* Partnership Benefits */}"
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center>Partnership Benefits</h2>"
          <div className=""grid" grid-cols-1 md:grid-cols-2 gap-8">
            </div><div className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm>"
              <h3 className="text-xl font-semibold text-white mb-4>For Technology Companies</h3>"
              <ul className=""space-y-3">
                <li className="text-gray-300 flex items-start"">
                  <span className="text-purple-400 mr-2>•</span>
                  Access to Zion's global marketplace and customer base
                </li>"
                <li className="text-gray-300 flex items-start>"
                  <span className=""text-purple-400" mr-2>•</span>
                  API integration and technical support
                </li>
                <li className="text-gray-300 flex items-start"">
                  <span className="text-purple-400 mr-2>•</span>
                  Joint marketing and promotional opportunities
                </li>"
                <li className="text-gray-300 flex items-start>"
                  <span className=""text-purple-400" mr-2>•</span>
                  Revenue sharing and commission structure
                </li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm"">
              <h3 className="text-xl font-semibold text-white mb-4>For Research Institutions</h3>"
              <ul className="space-y-3">
                <li className="text-gray-300 flex items-start>"
                  <span className=""text-purple-400" mr-2">•</span>
                  Access to real-world data and use cases
                </li>
                <li className="text-gray-300 flex items-start>"
                  <span className="text-purple-400 mr-2>•</span>
                  Collaboration on research projects and publications
                </li>"
                <li className=""text-gray-300" flex items-start>
                  <span className="text-purple-400 mr-2"">•</span>
                  Student and faculty engagement opportunities
                </li>
                <li className="text-gray-300 flex items-start>"
                  <span className="text-purple-400 mr-2>•</span>
                  Technology transfer and commercialization support
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}"
        <div className=""text-center">
          </div><div className="bg-white/5 border border-white/10 rounded-lg p-8 backdrop-blur-sm"">
            <h2 className="text-3xl font-bold text-white mb-4>Ready to Partner?</h2>"
            <p className="text-xl text-gray-300 mb-6>
              Join Zion's network of innovative partners and help us democratize access to technology.
            </p>"
            <div className=""flex" flex-col sm:flex-row gap-4 justify-center>
              
               />
                Contact Partnership Team
              </Link>
              
               />
                Learn More About Zion
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}"
      <footer className=""bg-black/40" backdrop-blur-md:border-t border-white/10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg px-8 py-8>"
          </div><div className="text-center text-gray-400"">
            <p>&copy; 2024 Zion. All rights reserved. | The First Free AI-Powered Marketplace</p>
          </div>
        </div>
      </footer>
    </div>
  
  </div>

  </div>

  </div>

};

export default Partners )))