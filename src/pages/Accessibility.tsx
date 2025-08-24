import React from 'react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';

export default function Accessibility() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Accessibility - Zion Tech Group" 
        description="Zion Tech Group's commitment to web accessibility and information about accessibility features"
        keywords="accessibility, web accessibility, WCAG, inclusive design, Zion Tech Group"
        canonical="https://ziontechgroup.com/accessibility"
      />

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Accessibility
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Zion Tech Group is committed to ensuring digital accessibility for people with disabilities. 
            We believe that technology should be inclusive and accessible to everyone.
          </p>
          <p className="text-sm text-gray-400 mt-4">
            Last updated: January 15, 2025
          </p>
        </div>

        {/* Commitment Statement */}
        <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-3xl p-8 border border-cyan-500/20 mb-16">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Commitment</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We are dedicated to making our website accessible to all users, including those with 
              disabilities. We strive to meet or exceed the Web Content Accessibility Guidelines (WCAG) 
              2.1 Level AA standards and continuously work to improve the accessibility of our digital 
              platforms.
            </p>
          </div>
        </div>

        {/* Accessibility Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Accessibility Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Visual Accessibility</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• High contrast color schemes</li>
                <li>• Resizable text options</li>
                <li>• Clear typography and spacing</li>
                <li>• Alternative text for images</li>
              </ul>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8M7 4h10M7 4v16h10V4M7 4H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2h-2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Keyboard Navigation</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Full keyboard accessibility</li>
                <li>• Logical tab order</li>
                <li>• Skip navigation links</li>
                <li>• Focus indicators</li>
              </ul>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Screen Reader Support</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Semantic HTML structure</li>
                <li>• ARIA labels and roles</li>
                <li>• Descriptive link text</li>
                <li>• Form field labels</li>
              </ul>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Content Structure</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Clear heading hierarchy</li>
                <li>• Descriptive page titles</li>
                <li>• Consistent navigation</li>
                <li>• Logical content flow</li>
              </ul>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
              </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Customization Options</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Font size adjustment</li>
                <li>• Color scheme options</li>
                <li>• Animation controls</li>
                <li>• Layout preferences</li>
              </ul>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Testing & Compliance</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Regular accessibility audits</li>
                <li>• WCAG 2.1 AA compliance</li>
                <li>• User testing with assistive technology</li>
                <li>• Continuous improvement</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Assistive Technology */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Assistive Technology Compatibility</h2>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <p className="text-gray-300 leading-relaxed mb-6">
              Our website is designed to work with a variety of assistive technologies and tools:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Screen Readers</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• JAWS (Windows)</li>
                  <li>• NVDA (Windows)</li>
                  <li>• VoiceOver (macOS/iOS)</li>
                  <li>• TalkBack (Android)</li>
                  <li>• Orca (Linux)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Other Tools</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Magnification software</li>
                  <li>• Speech recognition software</li>
                  <li>• Alternative input devices</li>
                  <li>• High contrast mode</li>
                  <li>• Text-to-speech tools</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Known Issues */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Known Accessibility Issues</h2>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <p className="text-gray-300 leading-relaxed mb-6">
              We are aware of some accessibility issues and are working to resolve them:
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="w-3 h-3 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div>
                  <h4 className="text-white font-semibold mb-1">PDF Documents</h4>
                  <p className="text-gray-300 text-sm">
                    Some older PDF documents may not be fully accessible to screen readers. 
                    We are working to convert these to accessible formats.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="w-3 h-3 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div>
                  <h4 className="text-white font-semibold mb-1">Third-Party Content</h4>
                  <p className="text-gray-300 text-sm">
                    Some third-party integrations may have limited accessibility features. 
                    We are working with vendors to improve accessibility.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="w-3 h-3 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div>
                  <h4 className="text-white font-semibold mb-1">Video Content</h4>
                  <p className="text-gray-300 text-sm">
                    Some video content may not have complete closed captions or audio descriptions. 
                    We are adding these features to all video content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feedback & Support */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Feedback & Support</h2>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <p className="text-gray-300 leading-relaxed mb-6">
              We welcome feedback on the accessibility of our website. If you experience any 
              accessibility barriers or have suggestions for improvement, please contact us:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Contact Methods</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Email: accessibility@ziontechgroup.com</li>
                  <li>• Phone: +1 302 464 0950</li>
                  <li>• Contact form on our website</li>
                  <li>• Feedback widget (bottom right of page)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Response Time</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We aim to respond to accessibility feedback within 2 business days and 
                  will work with you to address any issues you encounter.
                </p>
                <p className="text-gray-300 text-sm">
                  For urgent accessibility issues, please call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Continuous Improvement */}
        <div className="bg-gradient-to-r from-green-900/20 to-teal-900/20 rounded-3xl p-8 border border-green-500/20 mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Continuous Improvement</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              We are committed to continuously improving the accessibility of our website. 
              Our accessibility team regularly reviews our digital platforms and works to 
              implement best practices and address any accessibility barriers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">Monthly</div>
                <p className="text-gray-300">Accessibility audits</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">Quarterly</div>
                <p className="text-gray-300">User testing sessions</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">Annually</div>
                <p className="text-gray-300">Policy updates</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Help Us Improve</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Your feedback helps us create a more accessible experience for everyone. 
            Together, we can make technology more inclusive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-medium text-lg"
            >
              Contact Us
            </Link>
            <a 
              href="mailto:accessibility@ziontechgroup.com"
              className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 font-medium text-lg"
            >
              Send Feedback
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}