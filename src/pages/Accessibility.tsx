import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Accessibility, Eye, Ear, Hand, Brain, CheckCircle } from 'lucide-react';

export default function AccessibilityPage() {
  return (
    <>
      <Helmet>
        <title>Accessibility - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group is committed to making our website accessible to all users. Learn about our accessibility features and commitment to inclusive design." />
        <meta name="keywords" content="accessibility, inclusive design, web accessibility, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/accessibility" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Accessibility</span> Commitment
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              Zion Tech Group is dedicated to ensuring our website is accessible to all users, 
              regardless of their abilities or assistive technologies.
            </p>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Our Accessibility Commitment</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-zion-slate-light text-lg leading-relaxed mb-6">
                  We believe that technology should be accessible to everyone. Our team is committed to 
                  creating an inclusive digital experience that meets or exceeds accessibility standards 
                  and guidelines.
                </p>
                <p className="text-zion-slate-light text-lg leading-relaxed">
                  We continuously work to improve accessibility by following WCAG 2.1 AA guidelines, 
                  conducting regular audits, and incorporating feedback from users with disabilities.
                </p>
              </div>
              <div className="bg-zion-blue-light/20 rounded-xl p-8 border border-zion-purple/30">
                <div className="bg-zion-cyan/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Accessibility className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">Inclusive by Design</h3>
                <p className="text-zion-slate-light text-center">
                  Accessibility is built into our development process from the ground up, 
                  not added as an afterthought.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Accessibility Features */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Accessibility Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 text-center">
                <div className="bg-zion-cyan/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Visual Accessibility</h3>
                <ul className="text-zion-slate-light text-sm space-y-1">
                  <li>• High contrast options</li>
                  <li>• Scalable text</li>
                  <li>• Clear typography</li>
                  <li>• Alt text for images</li>
                </ul>
              </div>

              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 text-center">
                <div className="bg-zion-cyan/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Ear className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Audio Accessibility</h3>
                <ul className="text-zion-slate-light text-sm space-y-1">
                  <li>• Screen reader support</li>
                  <li>• Audio descriptions</li>
                  <li>• Caption support</li>
                  <li>• Volume controls</li>
                </ul>
              </div>

              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 text-center">
                <div className="bg-zion-cyan/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Hand className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Motor Accessibility</h3>
                <ul className="text-zion-slate-light text-sm space-y-1">
                  <li>• Keyboard navigation</li>
                  <li>• Large click targets</li>
                  <li>• Voice commands</li>
                  <li>• Customizable timing</li>
                </ul>
              </div>

              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 text-center">
                <div className="bg-zion-cyan/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Cognitive Accessibility</h3>
                <ul className="text-zion-slate-light text-sm space-y-1">
                  <li>• Simple navigation</li>
                  <li>• Clear instructions</li>
                  <li>• Consistent layout</li>
                  <li>• Error prevention</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Standards Compliance */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Standards & Compliance</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30">
                  <h3 className="text-2xl font-bold text-white mb-4">WCAG 2.1 AA Compliance</h3>
                  <p className="text-zion-slate-light mb-4">
                    We strive to meet or exceed Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards, 
                    which are internationally recognized accessibility guidelines.
                  </p>
                  <ul className="text-zion-slate-light text-sm space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 mt-0.5 flex-shrink-0" />
                      <span>Perceivable - Information is presented in ways users can perceive</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 mt-0.5 flex-shrink-0" />
                      <span>Operable - Interface components are navigable and usable</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 mt-0.5 flex-shrink-0" />
                      <span>Understandable - Information and operation are clear</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 mt-0.5 flex-shrink-0" />
                      <span>Robust - Content is compatible with assistive technologies</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30">
                  <h3 className="text-2xl font-bold text-white mb-4">Ongoing Improvements</h3>
                  <p className="text-zion-slate-light mb-4">
                    Our accessibility journey is ongoing. We regularly:
                  </p>
                  <ul className="text-zion-slate-light text-sm space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 mt-0.5 flex-shrink-0" />
                      <span>Conduct accessibility audits</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 mt-0.5 flex-shrink-0" />
                      <span>Test with assistive technologies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 mt-0.5 flex-shrink-0" />
                      <span>Gather user feedback</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 mt-0.5 flex-shrink-0" />
                      <span>Update based on new guidelines</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need Accessibility Help?</h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              If you encounter any accessibility issues or have suggestions for improvement, 
              we want to hear from you. Your feedback helps us create a better experience for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Report an Issue
              </Link>
              <Link 
                to="/help-center" 
                className="bg-transparent border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Help
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}