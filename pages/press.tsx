import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

const Press: NextPage = () => {
  const [activeTab, setActiveTab] = useState('press-releases')

  const pressReleases = [
    {
      id: 1,
      title: 'Zion Launches First Free AI-Powered Marketplace',
      date: '2024-01-15',
      excerpt: 'Revolutionary platform democratizes access to high-tech services and AI talent',
      content: 'Zion, the first free AI-powered marketplace for high-tech products, on-demand IT services, AI talents, innovation, and equipment, officially launched today. The platform aims to democratize access to cutting-edge technology solutions regardless of business size or location.',
      category: 'Product Launch'
    },
    {
      id: 2,
      title: 'Zion Secures $10M in Series A Funding',
      date: '2024-01-10',
      excerpt: 'Investment to accelerate platform development and global expansion',
      content: 'Zion has successfully closed a $10 million Series A funding round led by prominent venture capital firms. The investment will be used to accelerate platform development, expand global operations, and enhance AI-powered matching algorithms.',
      category: 'Funding'
    },
    {
      id: 3,
      title: 'Zion Partners with Leading AI Research Institutions',
      date: '2024-01-05',
      excerpt: 'Strategic partnerships to advance AI marketplace technology',
      content: 'Zion has announced strategic partnerships with leading AI research institutions to advance marketplace technology and develop next-generation AI matching algorithms. These partnerships will enhance the platform\'s ability to connect businesses with the right solutions.',
      category: 'Partnership'
    }
  ]

  const mediaKit = {
    logo: {
      primary: '/images/zion-logo-primary.png',
      secondary: '/images/zion-logo-secondary.png',
      icon: '/images/zion-icon.png'
    },
    brandColors: {
      primary: '#8B5CF6',
      secondary: '#EC4899',
      accent: '#6366F1'
    },
    companyInfo: {
      name: 'Zion Tech Group',
      founded: '2024',
      headquarters: 'Global (Remote-First)',
      industry: 'AI-Powered Marketplace',
      website: 'https://ziontechgroup.netlify.app'
    }
  }

  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      title: 'CEO & Co-Founder',
      bio: 'Former AI researcher with 10+ years experience in machine learning and marketplace technology.',
      image: '/images/team/sarah-chen.jpg',
      email: 'sarah.chen@ziontechgroup.com'
    },
    {
      name: 'Alex Rodriguez',
      title: 'CTO & Co-Founder',
      bio: 'Expert in scalable architecture and AI systems with experience at leading tech companies.',
      image: '/images/team/alex-rodriguez.jpg',
      email: 'alex.rodriguez@ziontechgroup.com'
    },
    {
      name: 'Emma Thompson',
      title: 'Head of Product',
      bio: 'Product leader with deep experience in marketplace platforms and user experience design.',
      image: '/images/team/emma-thompson.jpg',
      email: 'emma.thompson@ziontechgroup.com'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>Press - Zion</title>
        <meta name="description" content="Press releases, media kit, and company information for Zion - The first free AI-powered marketplace." />
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
              <Link href="/careers" className="text-gray-300 hover:text-white transition-colors">
                Careers
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
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Press & Media
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Stay updated with the latest news, press releases, and company information
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {[
            { id: 'press-releases', name: 'Press Releases', icon: '📰' },
            { id: 'media-kit', name: 'Media Kit', icon: '🎨' },
            { id: 'team', name: 'Leadership', icon: '👥' },
            { id: 'contact', name: 'Media Contact', icon: '📧' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg border transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-purple-600/20 border-purple-500 text-purple-300'
                  : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === 'press-releases' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white mb-6">Latest Press Releases</h2>
              {pressReleases.map((release) => (
                <div key={release.id} className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="inline-block bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium mb-2">
                        {release.category}
                      </span>
                      <h3 className="text-xl font-semibold text-white mb-2">{release.title}</h3>
                      <p className="text-gray-400 text-sm">{new Date(release.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{release.excerpt}</p>
                  <p className="text-gray-300 leading-relaxed">{release.content}</p>
                  <button className="mt-4 text-purple-400 hover:text-purple-300 font-medium">
                    Read Full Release →
                  </button>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'media-kit' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white mb-6">Media Kit</h2>
              
              {/* Company Information */}
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-4">Company Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-400">Company Name</p>
                    <p className="text-white font-medium">{mediaKit.companyInfo.name}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Founded</p>
                    <p className="text-white font-medium">{mediaKit.companyInfo.founded}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Headquarters</p>
                    <p className="text-white font-medium">{mediaKit.companyInfo.headquarters}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Industry</p>
                    <p className="text-white font-medium">{mediaKit.companyInfo.industry}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Website</p>
                    <p className="text-white font-medium">{mediaKit.companyInfo.website}</p>
                  </div>
                </div>
              </div>

              {/* Brand Colors */}
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-4">Brand Colors</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-500 rounded-lg mx-auto mb-2"></div>
                    <p className="text-gray-400 text-sm">Primary</p>
                    <p className="text-white font-medium">{mediaKit.brandColors.primary}</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-pink-500 rounded-lg mx-auto mb-2"></div>
                    <p className="text-gray-400 text-sm">Secondary</p>
                    <p className="text-white font-medium">{mediaKit.brandColors.secondary}</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-indigo-500 rounded-lg mx-auto mb-2"></div>
                    <p className="text-gray-400 text-sm">Accent</p>
                    <p className="text-white font-medium">{mediaKit.brandColors.accent}</p>
                  </div>
                </div>
              </div>

              {/* Download Assets */}
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-4">Download Assets</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button className="bg-purple-600/20 border border-purple-500 text-purple-300 px-4 py-2 rounded-lg hover:bg-purple-600/30 transition-colors">
                    Download Logo Pack
                  </button>
                  <button className="bg-purple-600/20 border border-purple-500 text-purple-300 px-4 py-2 rounded-lg hover:bg-purple-600/30 transition-colors">
                    Download Media Kit PDF
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'team' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white mb-6">Leadership Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamMembers.map((member) => (
                  <div key={member.name} className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl">👤</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white text-center mb-1">{member.name}</h3>
                    <p className="text-purple-400 text-center mb-3">{member.title}</p>
                    <p className="text-gray-300 text-sm text-center mb-4">{member.bio}</p>
                    <div className="text-center">
                      <a href={`mailto:${member.email}`} className="text-purple-400 hover:text-purple-300 text-sm">
                        {member.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white mb-6">Media Contact</h2>
              
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-4">Press Inquiries</h3>
                <p className="text-gray-300 mb-4">
                  For press inquiries, interview requests, or media partnerships, please contact our press team.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-400">Press Email</p>
                    <p className="text-white font-medium">press@ziontechgroup.com</p>
                  </div>
                  <div>
                    <p className="text-gray-400">General Media</p>
                    <p className="text-white font-medium">media@ziontechgroup.com</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Response Time</p>
                    <p className="text-white font-medium">Within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-4">Quick Facts</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-400">Platform Launch</p>
                    <p className="text-white font-medium">January 2024</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Users</p>
                    <p className="text-white font-medium">10,000+</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Services Listed</p>
                    <p className="text-white font-medium">500+</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Countries</p>
                    <p className="text-white font-medium">25+</p>
                  </div>
                </div>
              </div>
            </div>
          )}
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

export default Press 