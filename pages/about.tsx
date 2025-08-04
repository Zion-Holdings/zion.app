
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { CheckCircle, Users, Globe, Shield, Zap, Target, Award } from 'lucide-react'

const About: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>About Zion - The First Free AI-Powered Marketplace</title>
        <meta name="description" content="Learn about Zion, the revolutionary AI-powered marketplace connecting businesses with cutting-edge technology solutions, talent, and equipment." />
      </Head>

      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion</span>
              </Link>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/marketplace" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Marketplace
              </Link>
              <Link href="/services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Services
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The First Free AI-Powered Marketplace revolutionizing how businesses connect with cutting-edge technology solutions, talent, and equipment.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-black/20 backdrop-blur-md rounded-lg p-8 border border-white/10">
            <Target className="w-12 h-12 text-purple-400 mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300">
              To democratize access to AI and technology solutions by creating the world's first free, comprehensive marketplace that connects businesses with the tools, talent, and resources they need to thrive in the digital age.
            </p>
          </div>
          
          <div className="bg-black/20 backdrop-blur-md rounded-lg p-8 border border-white/10">
            <Globe className="w-12 h-12 text-purple-400 mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-gray-300">
              A world where every business, regardless of size, has equal access to cutting-edge AI technology, expert talent, and innovative solutions that drive growth and transformation.
            </p>
          </div>
        </div>

        {/* What We Offer */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10">
              <Users className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">AI Talent Network</h3>
              <p className="text-gray-300">
                Connect with verified AI experts, developers, and technology professionals from around the world.
              </p>
            </div>
            
            <div className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10">
              <Zap className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">AI-Powered Services</h3>
              <p className="text-gray-300">
                Access cutting-edge AI services including analytics, automation, cybersecurity, and more.
              </p>
            </div>
            
            <div className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10">
              <Shield className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Secure Transactions</h3>
              <p className="text-gray-300">
                Built-in escrow services, warranty protection, and dispute resolution for peace of mind.
              </p>
            </div>
            
            <div className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10">
              <Award className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Quality Assurance</h3>
              <p className="text-gray-300">
                Rigorous verification processes and skill assessments to ensure top-quality services.
              </p>
            </div>
            
            <div className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10">
              <Globe className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Global Reach</h3>
              <p className="text-gray-300">
                Access talent and services from anywhere in the world with our global marketplace.
              </p>
            </div>
            
            <div className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10">
              <CheckCircle className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Free Platform</h3>
              <p className="text-gray-300">
                No hidden fees, no subscription costs - completely free to use for all users.
              </p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-white">AI Service Matching</h4>
                  <p className="text-gray-300">Intelligent algorithms match you with the perfect services and talent.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Real-time Communication</h4>
                  <p className="text-gray-300">Built-in chat and collaboration tools for seamless communication.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Secure Payments</h4>
                  <p className="text-gray-300">Escrow services and secure payment processing for all transactions.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Quality Verification</h4>
                  <p className="text-gray-300">Comprehensive skill verification and quality assurance processes.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Advanced Analytics</h4>
                  <p className="text-gray-300">Detailed insights and analytics for better decision making.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Project Management</h4>
                  <p className="text-gray-300">Integrated project management tools for seamless workflow.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Dispute Resolution</h4>
                  <p className="text-gray-300">Fair and efficient dispute resolution system for all parties.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-white">24/7 Support</h4>
                  <p className="text-gray-300">Round-the-clock customer support and help desk services.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using Zion to accelerate their growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/marketplace" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
              Explore Marketplace
            </Link>
            <Link href="/contact" className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
