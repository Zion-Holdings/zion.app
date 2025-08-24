import React from 'react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';

export default function Cookies() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Cookie Policy - Zion Tech Group" 
        description="Learn about how Zion Tech Group uses cookies and similar technologies on our website"
        keywords="cookie policy, cookies, privacy, data collection, Zion Tech Group"
        canonical="https://ziontechgroup.com/cookies"
      />

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Cookie Policy
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            This policy explains how Zion Tech Group uses cookies and similar technologies 
            to enhance your browsing experience and provide personalized services.
          </p>
          <p className="text-sm text-gray-400 mt-4">
            Last updated: January 15, 2025
          </p>
        </div>

        {/* What Are Cookies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">What Are Cookies?</h2>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <p className="text-gray-300 leading-relaxed mb-6">
              Cookies are small text files that are stored on your device (computer, tablet, or mobile) 
              when you visit our website. They help us remember your preferences, analyze how you use 
              our site, and provide you with a better, more personalized experience.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Cookies do not contain any personal information that can identify you individually, 
              but they may contain information about your device and how you interact with our website.
            </p>
          </div>
        </div>

        {/* Types of Cookies We Use */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Types of Cookies We Use</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Essential Cookies</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                These cookies are necessary for the website to function properly. They enable basic 
                functions like page navigation, access to secure areas, and form submissions.
              </p>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Session management</li>
                <li>• Security features</li>
                <li>• Basic functionality</li>
              </ul>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Analytics Cookies</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                These cookies help us understand how visitors interact with our website by collecting 
                and reporting information anonymously.
              </p>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Website usage statistics</li>
                <li>• Performance monitoring</li>
                <li>• User behavior analysis</li>
              </ul>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Preference Cookies</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                These cookies remember your choices and preferences to provide you with a more 
                personalized experience on our website.
              </p>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Language preferences</li>
                <li>• Theme settings</li>
                <li>• Customized content</li>
              </ul>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Marketing Cookies</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                These cookies are used to track visitors across websites to display relevant 
                advertisements and measure the effectiveness of marketing campaigns.
              </p>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Targeted advertising</li>
                <li>• Campaign effectiveness</li>
                <li>• Cross-site tracking</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How We Use Cookies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">How We Use Cookies</h2>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Website Functionality</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Remember your login status and preferences</li>
                  <li>• Enable secure transactions and form submissions</li>
                  <li>• Provide personalized content and recommendations</li>
                  <li>• Optimize website performance and user experience</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Analytics & Improvement</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Analyze website traffic and user behavior</li>
                  <li>• Identify and fix technical issues</li>
                  <li>• Improve website design and functionality</li>
                  <li>• Measure the effectiveness of our content</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Third-Party Cookies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Third-Party Cookies</h2>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <p className="text-gray-300 leading-relaxed mb-6">
              Some cookies on our website are set by third-party services that we use to enhance 
              functionality and provide additional features. These services may include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Analytics Services</h4>
                <p className="text-gray-300 text-sm">Google Analytics, Mixpanel</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Marketing Tools</h4>
                <p className="text-gray-300 text-sm">Facebook Pixel, Google Ads</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Customer Support</h4>
                <p className="text-gray-300 text-sm">Intercom, Zendesk</p>
              </div>
            </div>
          </div>
        </div>

        {/* Managing Cookies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Managing Your Cookie Preferences</h2>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Browser Settings</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  You can control and manage cookies through your browser settings. Most browsers 
                  allow you to view, delete, and block cookies from specific websites.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Please note that blocking certain cookies may affect the functionality of our 
                  website and your user experience.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Cookie Consent</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  When you first visit our website, you'll see a cookie consent banner that 
                  allows you to accept or decline non-essential cookies.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  You can change your preferences at any time by clicking the cookie settings 
                  link in the footer of our website.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Updates to Policy */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Updates to This Policy</h2>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <p className="text-gray-300 leading-relaxed mb-4">
              We may update this Cookie Policy from time to time to reflect changes in our 
              practices or for other operational, legal, or regulatory reasons.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We will notify you of any material changes by posting the new policy on our 
              website and updating the "Last updated" date at the top of this page.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Questions About Cookies?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            If you have any questions about our use of cookies or this Cookie Policy, 
            please don't hesitate to contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-medium text-lg"
            >
              Contact Us
            </Link>
            <Link 
              to="/privacy"
              className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 font-medium text-lg"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}