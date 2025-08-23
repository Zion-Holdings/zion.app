import React from 'react';
import Head from 'next/head';
import { Shield, Eye, Heart, Users, CheckCircle, AlertTriangle, Info } from 'lucide-react';

const AccessibilityPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Accessibility - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group is committed to making our website accessible to all users. Learn about our accessibility features and compliance." />
        <meta name="keywords" content="accessibility, web accessibility, WCAG, inclusive design, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/accessibility" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <Shield className="mx-auto h-16 w-16 text-cyan-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Accessibility
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are committed to ensuring digital accessibility for people with disabilities. 
              Our website strives to meet WCAG 2.1 AA standards and provide an inclusive experience for all users.
            </p>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Accessibility Commitment
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Zion Tech Group believes that technology should be accessible to everyone. 
                We continuously work to improve the accessibility of our website and digital services.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                <Eye className="h-12 w-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Visual Accessibility</h3>
                <p className="text-gray-300">
                  High contrast ratios, resizable text, and screen reader compatibility for users with visual impairments.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                <Users className="h-12 w-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">User Experience</h3>
                <p className="text-gray-300">
                  Keyboard navigation, clear navigation structure, and consistent layout for all users.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                <Heart className="h-12 w-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Inclusive Design</h3>
                <p className="text-gray-300">
                  Design principles that consider diverse abilities and create experiences for everyone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              Accessibility Features
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Keyboard Navigation</h3>
                    <p className="text-gray-300">Full keyboard accessibility with visible focus indicators</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Screen Reader Support</h3>
                    <p className="text-gray-300">Compatible with major screen readers including JAWS, NVDA, and VoiceOver</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">High Contrast</h3>
                    <p className="text-gray-300">High contrast color schemes for better visibility</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Resizable Text</h3>
                    <p className="text-gray-300">Text can be resized up to 200% without loss of functionality</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Alt Text</h3>
                    <p className="text-gray-300">Descriptive alt text for all images and graphics</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Semantic HTML</h3>
                    <p className="text-gray-300">Proper heading structure and semantic markup</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Form Labels</h3>
                    <p className="text-gray-300">Clear labels and error messages for all form fields</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Skip Links</h3>
                    <p className="text-gray-300">Skip navigation links for keyboard users</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
                WCAG 2.1 AA Compliance
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">What We've Achieved</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li>• Perceivable: Content is presented in ways users can perceive</li>
                    <li>• Operable: Interface components are operable by all users</li>
                    <li>• Understandable: Information and operation are understandable</li>
                    <li>• Robust: Content is compatible with current and future tools</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Ongoing Improvements</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li>• Regular accessibility audits and testing</li>
                    <li>• User feedback integration</li>
                    <li>• Technology updates and improvements</li>
                    <li>• Staff training and awareness</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Report Accessibility Issues
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              We welcome feedback on accessibility. If you encounter any accessibility barriers or have suggestions for improvement, please let us know.
            </p>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <Info className="h-8 w-8 text-cyan-400" />
                <h3 className="text-xl font-semibold text-white">Contact Information</h3>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <p><strong>Email:</strong> accessibility@ziontechgroup.com</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p><strong>Response Time:</strong> We aim to respond within 48 hours</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <AlertTriangle className="mx-auto h-8 w-8 text-yellow-400 mb-4" />
              <p className="text-gray-300">
                <strong>Note:</strong> This accessibility statement was last updated on August 23, 2025. 
                We are committed to maintaining and improving the accessibility of our website.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AccessibilityPage;