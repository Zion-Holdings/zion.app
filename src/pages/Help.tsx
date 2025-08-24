import React from 'react';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";

export default function Help() {
  return (
    <>
      <SEO 
        title="Help Center - Zion Tech Group" 
        description="Get help and support for using Zion Tech Group's AI and tech marketplace platform." 
        keywords="help, support, Zion marketplace, user guide, assistance"
        url="https://ziontechgroup.com/help"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Help Center</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Find answers, guides, and support for using our platform
            </p>
          </div>

          {/* Search Section */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help..."
                className="w-full p-4 bg-zion-blue-dark border border-zion-blue-light text-white placeholder-zion-slate-light rounded-lg"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-zion-cyan text-zion-blue-dark p-2 rounded-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Help Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 hover:border-zion-cyan/50 transition-colors">
              <div className="text-center">
                <div className="bg-zion-blue inline-flex p-4 rounded-full mb-4">
                  <svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 5.477 5.754 5 7.5 5s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.523 18.246 19 16.5 19c-1.746 0-3.332-.477-4.5-1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Getting Started</h3>
                <p className="text-zion-slate-light mb-4">
                  New to Zion? Learn the basics and get up and running quickly.
                </p>
                <a href="/faq" className="text-zion-cyan hover:text-zion-cyan-light font-medium">
                  View Guides →
                </a>
              </div>
            </div>

            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 hover:border-zion-cyan/50 transition-colors">
              <div className="text-center">
                <div className="bg-zion-blue inline-flex p-4 rounded-full mb-4">
                  <svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Account & Profile</h3>
                <p className="text-zion-slate-light mb-4">
                  Manage your account, profile, and settings.
                </p>
                <a href="/contact" className="text-zion-cyan hover:text-zion-cyan-light font-medium">
                  Get Help →
                </a>
              </div>
            </div>

            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 hover:border-zion-cyan/50 transition-colors">
              <div className="text-center">
                <div className="bg-zion-blue inline-flex p-4 rounded-full mb-4">
                  <svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Security & Privacy</h3>
                <p className="text-zion-slate-light mb-4">
                  Learn about our security measures and privacy policies.
                </p>
                <a href="/privacy" className="text-zion-cyan hover:text-zion-cyan-light font-medium">
                  Learn More →
                </a>
              </div>
            </div>

            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 hover:border-zion-cyan/50 transition-colors">
              <div className="text-center">
                <div className="bg-zion-blue inline-flex p-4 rounded-full mb-4">
                  <svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Services & Features</h3>
                <p className="text-zion-slate-light mb-4">
                  Understand how to use our marketplace features effectively.
                </p>
                <a href="/marketplace" className="text-zion-cyan hover:text-zion-cyan-light font-medium">
                  Explore →
                </a>
              </div>
            </div>

            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 hover:border-zion-cyan/50 transition-colors">
              <div className="text-center">
                <div className="bg-zion-blue inline-flex p-4 rounded-full mb-4">
                  <svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Troubleshooting</h3>
                <p className="text-zion-slate-light mb-4">
                  Common issues and their solutions.
                </p>
                <a href="/faq" className="text-zion-cyan hover:text-zion-cyan-light font-medium">
                  Find Solutions →
                </a>
              </div>
            </div>

            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 hover:border-zion-cyan/50 transition-colors">
              <div className="text-center">
                <div className="bg-zion-blue inline-flex p-4 rounded-full mb-4">
                  <svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Contact Support</h3>
                <p className="text-zion-slate-light mb-4">
                  Can't find what you need? Get in touch with our team.
                </p>
                <a href="/contact" className="text-zion-cyan hover:text-zion-cyan-light font-medium">
                  Contact Us →
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Quick Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <a href="/faq" className="text-zion-cyan hover:text-zion-cyan-light p-3 rounded-lg hover:bg-zion-blue-light/10 transition-colors">
                Frequently Asked Questions
              </a>
              <a href="/privacy" className="text-zion-cyan hover:text-zion-cyan-light p-3 rounded-lg hover:bg-zion-blue-light/10 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-zion-cyan hover:text-zion-cyan-light p-3 rounded-lg hover:bg-zion-blue-light/10 transition-colors">
                Terms of Service
              </a>
              <a href="/sitemap" className="text-zion-cyan hover:text-zion-cyan-light p-3 rounded-lg hover:bg-zion-blue-light/10 transition-colors">
                Site Map
              </a>
            </div>
          </div>

          {/* Contact Support */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Still Need Help?</h2>
            <p className="text-zion-slate-light mb-6">
              Our support team is available to help you with any questions or issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-block bg-zion-cyan text-zion-blue-dark px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors"
              >
                Contact Support
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="inline-block bg-zion-blue-dark border border-zion-cyan text-zion-cyan px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan/10 transition-colors"
              >
                Email Support
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}