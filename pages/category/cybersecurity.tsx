import type { NextPage } from 'next';import ModernLayout from '../components/layout/ModernLayout'

import Head from 'next/head';
import Link from 'next/link';

const CybersecurityPage: NextPage = () => {
  return (
  <ModernLayout>
    return (
    <ModernLayout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>Cybersecurity - Zion AI Marketplace</title>
        <meta name="description" content="Find top cybersecurity services and professionals on Zion AI Marketplace." />
        <meta name="keywords" content="cybersecurity, AI marketplace, IT services, Zion" />
      
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></Head>

      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-white">
                  <Link href="/" className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    Zion
                  </Link>
                </h1>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/marketplace" className="text-gray-300 hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors">
                Marketplace
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors">
                About
              </Link>
              <Link href="/auth/login" className="text-gray-300 hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors">
                Login
              </Link>
              <Link href="/auth/signup" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-4 rounded-md text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                Join Zion
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-44 lg:py-32">
            <div className="text-center">
              <div className="mb-8">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    Cybersecurity
                  </span>
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Discover top professionals and services in the cybersecurity space.
                </p>
              </div>
              
              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/marketplace" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                  Browse Services
                </Link>
                <Link href="/auth/signup" className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                  Join as Provider
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-36">
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="text-gray-300 leading-relaxed">
              <p className="mb-6">Discover top professionals and services in the cybersecurity space on Zion AI Marketplace. Our platform connects you with verified experts who deliver exceptional results.</p>

<p className="mb-6">Our cybersecurity category features a diverse range of services including consulting, development, implementation, and ongoing support. Whether you're a startup looking to scale or an enterprise seeking optimization, we have the right professionals for your needs.</p>

<p className="mb-6">Key benefits of our cybersecurity marketplace include:</p>
<p className="mb-6">- Verified professionals with proven track records</p>
<p className="mb-6">- Transparent pricing and project management</p>
<p className="mb-6">- AI-powered matching for optimal client-provider fit</p>
<p className="mb-6">- Secure payment processing and dispute resolution</p>
<p className="mb-6">- Ongoing support and quality assurance</p>

<p className="mb-6">Success stories from our cybersecurity marketplace demonstrate the value our platform delivers. Clients report significant improvements in efficiency, cost savings, and project outcomes when working with Zion-verified professionals.</p>

<p className="mb-6">Join thousands of satisfied clients who have found their ideal cybersecurity solutions through our marketplace. Start your project today and experience the difference that professional expertise makes.</p>

            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black/20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Zion</h3>
              <p className="text-gray-400 text-sm">
                The future of AI-powered marketplace technology.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Marketplace</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/marketplace" className="text-gray-400 hover:text-white transition-colors">Browse Services</Link></li>
                <li><Link href="/talents" className="text-gray-400 hover:text-white transition-colors">AI Talents</Link></li>
                <li><Link href="/equipment" className="text-gray-400 hover:text-white transition-colors">Equipment</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/help" className="text-gray-400 hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Zion. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  
  </ModernLayout>

  </ModernLayout>
)
}

export default CybersecurityPage