import React from 'react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';

export default function News() {
  const newsItems = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary Quantum Edge Computing Platform',
      excerpt: 'Our latest quantum computing solution delivers unprecedented performance for distributed applications, marking a major milestone in edge computing technology.',
      date: '2025-01-15',
      category: 'Product Launch',
      image: '/images/news/quantum-edge-launch.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Zion Tech Group Named Top AI Company by Tech Innovation Awards',
      excerpt: 'Recognition for our groundbreaking work in autonomous AI systems and machine learning solutions that are transforming industries worldwide.',
      date: '2025-01-10',
      category: 'Awards',
      image: '/images/news/ai-awards.jpg'
    },
    {
      id: 3,
      title: 'Partnership Announced with Leading Healthcare Provider',
      excerpt: 'Strategic collaboration to deploy AI-powered diagnostic tools across multiple healthcare facilities, improving patient outcomes and operational efficiency.',
      date: '2025-01-05',
      category: 'Partnerships',
      image: '/images/news/healthcare-partnership.jpg'
    },
    {
      id: 4,
      title: 'New Research Paper on Quantum Machine Learning Published',
      excerpt: 'Our research team publishes groundbreaking findings on the intersection of quantum computing and machine learning algorithms.',
      date: '2024-12-28',
      category: 'Research',
      image: '/images/news/quantum-ml-research.jpg'
    },
    {
      id: 5,
      title: 'Zion Tech Group Expands Global Operations',
      excerpt: 'Opening new offices in Europe and Asia to better serve our growing international client base and accelerate global innovation.',
      date: '2024-12-20',
      category: 'Company News',
      image: '/images/news/global-expansion.jpg'
    },
    {
      id: 6,
      title: 'Cybersecurity Solutions Achieve Industry Certification',
      excerpt: 'Our advanced cybersecurity platform receives SOC2 Type II certification, demonstrating the highest standards of security and compliance.',
      date: '2024-12-15',
      category: 'Security',
      image: '/images/news/cybersecurity-certification.jpg'
    }
  ];

  const categories = ['All', 'Product Launch', 'Awards', 'Partnerships', 'Research', 'Company News', 'Security'];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="News & Updates - Zion Tech Group" 
        description="Stay updated with the latest news, press releases, and announcements from Zion Tech Group"
        keywords="news, updates, press releases, announcements, Zion Tech Group"
        canonical="https://ziontechgroup.com/news"
      />

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            News & Updates
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Stay informed about the latest developments, product launches, partnerships, 
            and innovations from Zion Tech Group as we continue to shape the future of technology.
          </p>
        </div>

        {/* Featured News */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Featured News</h2>
          {newsItems.filter(item => item.featured).map((item) => (
            <div key={item.id} className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-3xl p-8 border border-cyan-500/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-cyan-500 text-white text-sm font-medium rounded-full">
                      {item.category}
                    </span>
                    <span className="text-gray-400 text-sm">
                      {new Date(item.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">{item.excerpt}</p>
                  <Link 
                    to={`/news/${item.id}`}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-medium"
                  >
                    Read Full Article
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                <div className="w-full h-64 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center">
                  <svg className="w-16 h-16 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Latest News Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.filter(item => !item.featured).map((item) => (
              <div key={item.id} className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 group">
                <div className="w-full h-48 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-t-2xl flex items-center justify-center">
                  <svg className="w-12 h-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs font-medium rounded-full">
                      {item.category}
                    </span>
                    <span className="text-gray-400 text-xs">
                      {new Date(item.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>
                  <Link 
                    to={`/news/${item.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium group"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Press Kit & Media */}
        <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-3xl p-8 border border-purple-500/20 mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Press Kit & Media Resources</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Journalists and media professionals can access our press kit, company logos, 
              high-resolution images, and executive bios for media coverage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/press-kit.zip"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-medium"
              >
                Download Press Kit
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
              <Link 
                to="/contact"
                className="inline-flex items-center px-6 py-3 border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500/10 transition-all duration-300 font-medium"
              >
                Contact PR Team
              </Link>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Stay Updated</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Subscribe to our newsletter to receive the latest news, product updates, 
            and insights directly in your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-r-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}