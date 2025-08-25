import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';

export default function Sitemap() {
  return (
    <>
      <SEO
        title="Sitemap | Zion Tech Group"
        description="Navigate through all pages and sections of the Zion Tech Group website"
        keywords="sitemap, website navigation, Zion Tech Group pages, site structure"
        canonical="https://ziontechgroup.com/sitemap"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sitemap
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Explore all the pages and sections of our comprehensive technology marketplace platform
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Pages */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <svg className="w-6 h-6 text-zion-cyan mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z" />
                </svg>
                Main Pages
              </h2>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></span>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></span>
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></span>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></span>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></span>
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Marketplace */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <svg className="w-6 h-6 text-zion-purple mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Marketplace
              </h2>
              <ul className="space-y-3">
                <li>
                  <Link to="/marketplace" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-zion-purple rounded-full mr-3"></span>
                    Browse Marketplace
                  </Link>
                </li>
                <li>
                  <Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-zion-purple rounded-full mr-3"></span>
                    Find Talent
                  </Link>
                </li>
                <li>
                  <Link to="/equipment" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-zion-purple rounded-full mr-3"></span>
                    Equipment & Resources
                  </Link>
                </li>
                <li>
                  <Link to="/create-profile" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-zion-purple rounded-full mr-3"></span>
                    Create Profile
                  </Link>
                </li>
                <li>
                  <Link to="/post-job" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-zion-purple rounded-full mr-3"></span>
                    Post a Job
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <svg className="w-6 h-6 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Services
              </h2>
              <ul className="space-y-3">
                <li>
                  <Link to="/cybersecurity-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Cybersecurity
                  </Link>
                </li>
                <li>
                  <Link to="/it-onsite-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    IT Onsite Services
                  </Link>
                </li>
                <li>
                  <Link to="/expanded-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Expanded Services
                  </Link>
                </li>
                <li>
                  <Link to="/green-it" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Green IT Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/ai-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    AI & ML Solutions
                  </Link>
                </li>
              </ul>
            </div>

            {/* User Dashboard */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <svg className="w-6 h-6 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                User Dashboard
              </h2>
              <ul className="space-y-3">
                <li>
                  <Link to="/dashboard" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/profile" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Profile Settings
                  </Link>
                </li>
                <li>
                  <Link to="/messages" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Messages
                  </Link>
                </li>
                <li>
                  <Link to="/analytics" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Analytics
                  </Link>
                </li>
                <li>
                  <Link to="/admin/disputes" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Dispute Management
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal & Support */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <svg className="w-6 h-6 text-yellow-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Legal & Support
              </h2>
              <ul className="space-y-3">
                <li>
                  <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/support" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                    Support Center
                  </Link>
                </li>
                <li>
                  <Link to="/help" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                    Help Documentation
                  </Link>
                </li>
              </ul>
            </div>

            {/* Additional Resources */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <svg className="w-6 h-6 text-red-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Additional Resources
              </h2>
              <ul className="space-y-3">
                <li>
                  <Link to="/resources" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                    Resource Library
                  </Link>
                </li>
                <li>
                  <Link to="/tools" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                    Free Tools
                  </Link>
                </li>
                <li>
                  <Link to="/events" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                    Events & Webinars
                  </Link>
                </li>
                <li>
                  <Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                    Partner Network
                  </Link>
                </li>
                <li>
                  <Link to="/newsletter" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                    Newsletter Signup
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="mt-16 bg-gradient-to-r from-zion-purple to-zion-purple-dark rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Help Finding Something?
            </h2>
            <p className="text-zion-slate-light text-lg mb-6 max-w-2xl mx-auto">
              Can't find what you're looking for? Our team is here to help you navigate our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Contact Support
              </Link>
              <Link 
                to="/faq" 
                className="bg-transparent border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                View FAQ
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
