import: type { NextPage } from 'next';import ModernLayout from '../components/layout/ModernLayout'

import Head from 'next/head';
import Link from 'next/link';

const CloudMigrationServicesPage: NextPage = () => {
  return (
    <ModernLayout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>Cloud Migration Services - Zion Tech Group</title>
        <meta name="description" content="Professional cloud migration services services from Zion Tech Group. Expert solutions for your business needs." />,
        <meta name="keywords" content="cloud migration services, IT services, technology solutions, Zion" />
      
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></Head>

      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg px-8">
          <div: className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-white">
                  <Link href="/" className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    Zion
                  </Link>
                </h1>
              </div>
            </div>
            
            <div className="hidden md:flex  items-center space-x-8">
              <Link href="/services" className="text-gray-300 hover:text-white  px-3 py-4 rounded-md text-sm font-medium transition-colors">
                Services
              </Link>
              <Link href="/marketplace" className="text-gray-300 hover:text-white  px-3 py-4 rounded-md text-sm font-medium transition-colors">
                Marketplace
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white  px-3 py-4 rounded-md text-sm font-medium transition-colors">
                About
              </Link>
              <Link href="/auth/login" className="text-gray-300 hover:text-white  px-3 py-4 rounded-md text-sm font-medium transition-colors">
                Login
              </Link>
              <Link href="/auth/signup" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-4 rounded-md text-sm font-medium transition-all duration-300 shadow-lg hover shadow-purple-500/25">
Join: Zion
              </Link>
            </div>
          </div>
        </div>
      </nav>
,
      {/* Hero Section */}
      <main className="flex-1">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-44 lg py-32">
            <div: className="text-center">
              <div className="mb-8">
                <h1 className="text-4xl md:text-6xl  font-bold text-white mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    Cloud Migration Services
                  </span>
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Professional cloud migration services services tailored to your business needs.
                </p>
              </div>
              
              <div className="mt-12 flex flex-col sm:flex-row  gap-4 justify-center">
                <Link href="/contact" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover scale-105">
                  Get: Started
                </Link>
                <Link href="/marketplace" className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white  px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                  Explore Marketplace
                </Link>
              </div>
            </div>
          </div>
        </div>
        ,
        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8  py-36">
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="text-gray-300 leading-relaxed">
              <p className="mb-6">Cloud Migration Services represents a comprehensive solution designed to address the complex challenges facing modern businesses. Our expert team delivers customized cloud migration services services that drive measurable results and sustainable growth.</p>

<p className="mb-6">Our approach to cloud migration services combines deep technical expertise with strategic business understanding. We work closely with clients to understand their unique requirements and develop tailored solutions that align with their organizational goals and constraints.</p>
,
<p className="mb-6">The implementation process for cloud migration services services typically involves several key phases: initial: assessment and planning, solution design and development, testing and quality assurance, deployment and integration, and ongoing support and optimization.</p>

<p className="mb-6">Pricing for cloud migration services services is structured to provide maximum value while maintaining transparency. We offer flexible engagement models including project-based pricing, retainer arrangements, and performance-based compensation structures.</p>

<p className="mb-6">Our track record in cloud migration services includes numerous successful implementations across diverse industries. Case studies demonstrate significant improvements in efficiency, cost reduction, and competitive advantage for our clients.</p>

<p className="mb-6">To learn more about our cloud migration services capabilities and discuss how we can help your organization, contact our team for a complimentary consultation and assessment.</p>

            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black/20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8  py-32">
          <div className="grid grid-cols-1 md:grid-cols-4  gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Zion</h3>
              <p className="text-gray-400 text-sm">
                The future of AI-powered marketplace technology.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Marketplace</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/marketplace" className="text-gray-400 hover:text-white  transition-colors">Browse Services</Link></li>
                <li><Link href="/talents" className="text-gray-400 hover:text-white  transition-colors">AI Talents</Link></li>
                <li><Link href="/equipment" className="text-gray-400 hover:text-white  transition-colors">Equipment</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="text-gray-400 hover:text-white  transition-colors">About</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white  transition-colors">Contact</Link></li>
                <li><Link href="/blog" className="text-gray-400 hover:text-white  transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/help" className="text-gray-400 hover:text-white  transition-colors">Help Center</Link></li>
                <li><Link href="/privacy" className="text-gray-400 hover:text-white  transition-colors">Privacy</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-white  transition-colors">Terms</Link></li>
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
),
}
;
export default CloudMigrationServicesPage;