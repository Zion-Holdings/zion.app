import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Eye, Volume2, MousePointer, Smartphone, Monitor, Globe } from 'lucide-react';

const Accessibility: NextPage = () => {
  return (
    <div className="relative z-10 container-responsive py-8">
        
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"></div>
          <div className="absolute inset-0 bg-holographic bg-[length:400%_400%] animate-holographic-shift opacity-10"></div>
        </div>
      
      <Head>
        <title>Accessibility - Zion</title>
        <meta name="description" content="Zion's accessibility features and commitment to making our AI-powered marketplace accessible to all users." />
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
              <Link href="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Accessibility at <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are committed to making our AI-powered marketplace accessible to all users, regardless of their abilities or disabilities.
          </p>
        </div>

        <div className="space-y-12">
          {/* Commitment Section */}
          <div className="bg-black/20 backdrop-blur-md rounded-lg p-8 border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-6">Our Commitment</h2>
            <p className="text-gray-300 mb-6">
              Zion is dedicated to ensuring that our platform is accessible to everyone. We believe that technology should be inclusive and that everyone should have equal access to the opportunities our marketplace provides.
            </p>
            <p className="text-gray-300">
              We continuously work to improve accessibility and welcome feedback from our users to help us make our platform better for everyone.
            </p>
          </div>

          {/* Accessibility Features */}
          <div>
            <h2 className="text-3xl font-bold text-white text-center mb-12">Accessibility Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10">
                <Eye className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Visual Accessibility</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• High contrast color schemes</li>
                  <li>• Adjustable font sizes</li>
                  <li>• Clear typography and spacing</li>
                  <li>• Alternative text for images</li>
                  <li>• Focus indicators for navigation</li>
                </ul>
              </div>
              
              <div className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10">
                <Volume2 className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Audio Accessibility</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Screen reader compatibility</li>
                  <li>• Audio descriptions for content</li>
                  <li>• Caption support for videos</li>
                  <li>• Voice navigation options</li>
                  <li>• Audio feedback for interactions</li>
                </ul>
              </div>
              
              <div className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10">
                <MousePointer className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Motor Accessibility</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Keyboard navigation support</li>
                  <li>• Voice control compatibility</li>
                  <li>• Large click targets</li>
                  <li>• Customizable input methods</li>
                  <li>• Gesture alternatives</li>
                </ul>
              </div>
              
              <div className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10">
                <Smartphone className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Mobile Accessibility</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Responsive design</li>
                  <li>• Touch-friendly interfaces</li>
                  <li>• Mobile screen reader support</li>
                  <li>• Gesture alternatives</li>
                  <li>• Optimized for mobile devices</li>
                </ul>
              </div>
              
              <div className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10">
                <Monitor className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Cognitive Accessibility</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Clear and simple language</li>
                  <li>• Consistent navigation</li>
                  <li>• Predictable layouts</li>
                  <li>• Error prevention</li>
                  <li>• Help and guidance features</li>
                </ul>
              </div>
              
              <div className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10">
                <Globe className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Language Accessibility</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Multi-language support</li>
                  <li>• Translation services</li>
                  <li>• Cultural considerations</li>
                  <li>• Localized content</li>
                  <li>• Language preferences</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Standards Compliance */}
          <div className="bg-black/20 backdrop-blur-md rounded-lg p-8 border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-6">Standards Compliance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">WCAG 2.1 Compliance</h3>
                <p className="text-gray-300 mb-4">
                  We strive to meet WCAG 2.1 Level AA standards, which include:
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Perceivable content and interface</li>
                  <li>• Operable navigation and functionality</li>
                  <li>• Understandable information and operation</li>
                  <li>• Robust compatibility with assistive technologies</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Additional Standards</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Section 508 compliance</li>
                  <li>• ADA Title III compliance</li>
                  <li>• EN 301 549 accessibility</li>
                  <li>• ISO 9241-171 ergonomics</li>
                  <li>• Local accessibility regulations</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Assistive Technologies */}
          <div>
            <h2 className="text-3xl font-bold text-white text-center mb-12">Assistive Technology Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">Screen Readers</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• JAWS (Windows)</li>
                  <li>• NVDA (Windows)</li>
                  <li>• VoiceOver (macOS/iOS)</li>
                  <li>• TalkBack (Android)</li>
                  <li>• Orca (Linux)</li>
                </ul>
              </div>
              
              <div className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">Other Assistive Tools</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Voice recognition software</li>
                  <li>• Switch navigation devices</li>
                  <li>• Eye tracking systems</li>
                  <li>• Magnification software</li>
                  <li>• Alternative input devices</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Testing and Feedback */}
          <div className="bg-black/20 backdrop-blur-md rounded-lg p-8 border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-6">Testing and Feedback</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Our Testing Process</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Automated accessibility testing</li>
                  <li>• Manual testing with assistive technologies</li>
                  <li>• User testing with people with disabilities</li>
                  <li>• Regular accessibility audits</li>
                  <li>• Continuous monitoring and improvement</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Your Feedback</h3>
                <p className="text-gray-300 mb-4">
                  We welcome feedback on accessibility issues and suggestions for improvement.
                </p>
                <Link href="/contact" className="text-purple-400 hover:text-purple-300 transition-colors">
                  Contact us about accessibility →
                </Link>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h2 className="text-3xl font-bold text-white text-center mb-12">Accessibility Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">For Users</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Accessibility user guide</li>
                  <li>• Keyboard shortcuts</li>
                  <li>• Screen reader tutorials</li>
                  <li>• Accessibility settings</li>
                  <li>• Troubleshooting guide</li>
                </ul>
              </div>
              
              <div className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">For Developers</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Accessibility development guidelines</li>
                  <li>• Testing tools and resources</li>
                  <li>• Best practices documentation</li>
                  <li>• Compliance checklists</li>
                  <li>• Training materials</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Need Help with Accessibility?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Our team is here to help ensure you have the best possible experience on our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                Contact Support
              </Link>
              <Link href="/help-desk-support" className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                Help Center
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accessibility 