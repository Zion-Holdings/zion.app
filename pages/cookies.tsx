import React from 'react';
import Layout from '../components/Layout';

export default function Cookies() {
  return (
    <Layout>
      <div className="text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Cookies Policy
              </h1>
              <p className="text-xl text-gray-300">
                Last updated: {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-invert prose-lg max-w-none">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies</h2>
                <p className="text-gray-300 mb-4">
                  Cookies are small text files that are placed on your device when you visit our website. 
                  They help us provide you with a better experience and allow us to improve our website.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">How We Use Cookies</h2>
                <p className="text-gray-300 mb-4">
                  We use cookies for several purposes:
                </p>
                <ul className="text-gray-300 mb-6 space-y-2">
                  <li>• To remember your preferences and settings</li>
                  <li>• To analyze how our website is used</li>
                  <li>• To provide personalized content and advertisements</li>
                  <li>• To improve our website functionality</li>
                  <li>• To ensure security and prevent fraud</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-4">Types of Cookies We Use</h2>
                
                <h3 className="text-xl font-bold text-white mb-3">Essential Cookies</h3>
                <p className="text-gray-300 mb-4">
                  These cookies are necessary for the website to function properly. They enable basic functions 
                  like page navigation and access to secure areas of the website.
                </p>

                <h3 className="text-xl font-bold text-white mb-3">Analytics Cookies</h3>
                <p className="text-gray-300 mb-4">
                  These cookies help us understand how visitors interact with our website by collecting and 
                  reporting information anonymously.
                </p>

                <h3 className="text-xl font-bold text-white mb-3">Functional Cookies</h3>
                <p className="text-gray-300 mb-4">
                  These cookies enable enhanced functionality and personalization, such as remembering your 
                  preferences and settings.
                </p>

                <h3 className="text-xl font-bold text-white mb-3">Marketing Cookies</h3>
                <p className="text-gray-300 mb-4">
                  These cookies are used to track visitors across websites to display relevant and engaging 
                  advertisements.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">Third-Party Cookies</h2>
                <p className="text-gray-300 mb-4">
                  Some cookies on our website are placed by third-party services that appear on our pages. 
                  We use these services to:
                </p>
                <ul className="text-gray-300 mb-6 space-y-2">
                  <li>• Analyze website traffic and usage patterns</li>
                  <li>• Provide social media features</li>
                  <li>• Deliver targeted advertisements</li>
                  <li>• Monitor website performance</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-4">Managing Cookies</h2>
                <p className="text-gray-300 mb-4">
                  You can control and manage cookies in several ways:
                </p>
                <ul className="text-gray-300 mb-6 space-y-2">
                  <li>• Browser settings: Most browsers allow you to refuse cookies or delete them</li>
                  <li>• Cookie consent: We will ask for your consent before placing non-essential cookies</li>
                  <li>• Third-party opt-outs: Many third-party services provide opt-out mechanisms</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-4">Cookie Preferences</h2>
                <p className="text-gray-300 mb-4">
                  You can change your cookie preferences at any time by clicking the "Cookie Settings" 
                  button below or by adjusting your browser settings.
                </p>

                <div className="bg-gray-700/50 p-4 rounded-lg mb-6">
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    Cookie Settings
                  </button>
                </div>

                <h2 className="text-2xl font-bold text-white mb-4">Updates to This Policy</h2>
                <p className="text-gray-300 mb-4">
                  We may update this cookies policy from time to time to reflect changes in our practices 
                  or for other operational, legal, or regulatory reasons.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                <p className="text-gray-300 mb-4">
                  If you have any questions about our use of cookies, please contact us at:
                </p>
                <div className="bg-gray-700/50 p-4 rounded-lg">
                  <p className="text-gray-300">
                    <strong>Email:</strong> kleber@ziontechgroup.com<br />
                    <strong>Phone:</strong> +1 302 464 0950<br />
                    <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709, United States
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}