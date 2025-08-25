import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';

export default function Index() {
  return (
    <>
      <SEO
        title="Welcome | Zion Tech Group"
        description="Your comprehensive marketplace for all things technology and AI"
        keywords="technology marketplace, AI services, IT solutions, digital transformation, Zion Tech Group"
        canonical="https://ziontechgroup.com"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
              Your comprehensive marketplace for all things technology and AI. Connect with top talent, 
              discover innovative services, and access cutting-edge equipment and resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/marketplace" 
                className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
              >
                Explore Marketplace
              </Link>
              <Link 
                to="/about" 
                className="bg-transparent border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Quick Navigation Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {/* Find Talent */}
            <Link to="/talent" className="group">
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-8 hover:border-zion-cyan transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-zion-blue-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Find Talent</h3>
                <p className="text-zion-slate-light mb-6">
                  Connect with skilled professionals in AI, cybersecurity, cloud computing, and more. 
                  Find the perfect match for your project or team.
                </p>
                <div className="flex items-center text-zion-cyan group-hover:text-zion-cyan-light transition-colors">
                  <span className="font-semibold">Browse Talent</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Discover Services */}
            <Link to="/services" className="group">
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-8 hover:border-zion-cyan transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Discover Services</h3>
                <p className="text-zion-slate-light mb-6">
                  Explore comprehensive IT services including cybersecurity, Green IT solutions, 
                  AI implementation, and infrastructure management.
                </p>
                <div className="flex items-center text-zion-purple group-hover:text-zion-purple-light transition-colors">
                  <span className="font-semibold">View Services</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Equipment & Resources */}
            <Link to="/equipment" className="group">
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-8 hover:border-zion-cyan transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Equipment & Resources</h3>
                <p className="text-zion-slate-light mb-6">
                  Access cutting-edge technology equipment, hardware, and resources to power 
                  your projects and accelerate innovation.
                </p>
                <div className="flex items-center text-green-400 group-hover:text-green-300 transition-colors">
                  <span className="font-semibold">Browse Equipment</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Post Opportunities */}
            <Link to="/post-job" className="group">
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-8 hover:border-zion-cyan transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Post Opportunities</h3>
                <p className="text-zion-slate-light mb-6">
                  Share job opportunities, project requirements, or service needs with our 
                  community of technology professionals and businesses.
                </p>
                <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                  <span className="font-semibold">Post Now</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Create Profile */}
            <Link to="/create-profile" className="group">
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-8 hover:border-zion-cyan transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Create Profile</h3>
                <p className="text-zion-slate-light mb-6">
                  Build your professional profile to showcase your skills, services, or 
                  business offerings to our growing community.
                </p>
                <div className="flex items-center text-yellow-400 group-hover:text-yellow-300 transition-colors">
                  <span className="font-semibold">Get Started</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Learn & Connect */}
            <Link to="/blog" className="group">
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-8 hover:border-zion-cyan transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Learn & Connect</h3>
                <p className="text-zion-slate-light mb-6">
                  Stay updated with industry insights, technology trends, and connect with 
                  like-minded professionals through our blog and community features.
                </p>
                <div className="flex items-center text-red-400 group-hover:text-red-300 transition-colors">
                  <span className="font-semibold">Read Blog</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>

          {/* Featured Sections */}
          <div className="space-y-16">
            {/* AI & Technology Focus */}
            <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark rounded-2xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Leading the AI & Technology Revolution
                  </h2>
                  <p className="text-zion-slate-light text-lg mb-6">
                    Zion Tech Group is at the forefront of artificial intelligence, machine learning, 
                    and digital transformation. We connect businesses with the expertise and resources 
                    they need to thrive in the digital age.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      to="/about" 
                      className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                      About Us
                    </Link>
                    <Link 
                      to="/contact" 
                      className="bg-transparent border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                      Get in Touch
                    </Link>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-16 h-16 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Community & Growth */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Join Our Growing Community
                </h2>
                <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
                  Connect with thousands of technology professionals, businesses, and innovators 
                  who are shaping the future of technology.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-zion-cyan mb-2">500+</div>
                  <div className="text-zion-slate-light">Active Professionals</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-zion-purple mb-2">200+</div>
                  <div className="text-zion-slate-light">Business Partners</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">1000+</div>
                  <div className="text-zion-slate-light">Successful Projects</div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              Whether you're looking for talent, services, or want to showcase your expertise, 
              Zion Tech Group is your gateway to success in the technology marketplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/create-profile" 
                className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
              >
                Create Your Profile
              </Link>
              <Link 
                to="/marketplace" 
                className="bg-transparent border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
              >
                Explore Marketplace
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}