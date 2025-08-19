import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AccessibilityPage() {
  return (
    <>
      <Head>
        <title>Accessibility — Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group's commitment to digital accessibility and inclusive design for all users." />
        <meta property="og:title" content="Accessibility — Zion Tech Group" />
        <meta property="og:description" content="Zion Tech Group's commitment to digital accessibility and inclusive design for all users." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Accessibility
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              We're committed to making our digital experiences accessible to everyone, regardless of ability or technology.
            </p>
          </div>

          {/* Navigation */}
          <div className="mb-8">
            <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              ← Back to Home
            </Link>
          </div>

          {/* Accessibility Commitment */}
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Our Accessibility Commitment
            </h2>
            <p className="text-white/80 text-lg text-center mb-8">
              Zion Tech Group is dedicated to ensuring digital accessibility for people with disabilities. We're continually working to improve the user experience for everyone and apply the relevant accessibility standards.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-cyan-400 text-4xl mb-4">♿</div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">WCAG 2.1 AA</h3>
                <p className="text-white/70">We strive to meet Web Content Accessibility Guidelines 2.1 AA standards across our digital properties.</p>
              </div>
              
              <div className="text-center">
                <div className="text-fuchsia-400 text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold text-fuchsia-400 mb-3">Inclusive Design</h3>
                <p className="text-white/70">Our design process considers accessibility from the beginning, not as an afterthought.</p>
              </div>
            </div>
          </div>

          {/* Accessibility Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-cyan-400/30 transition-all">
              <div className="text-cyan-400 text-3xl mb-4">👁️</div>
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Visual Accessibility</h3>
              <p className="text-white/70">High contrast ratios, clear typography, and alternative text for images.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-fuchsia-400/30 transition-all">
              <div className="text-fuchsia-400 text-3xl mb-4">⌨️</div>
              <h3 className="text-xl font-bold text-fuchsia-400 mb-3">Keyboard Navigation</h3>
              <p className="text-white/70">Full keyboard accessibility with visible focus indicators and logical tab order.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-purple-400/30 transition-all">
              <div className="text-purple-400 text-3xl mb-4">🔊</div>
              <h3 className="text-xl font-bold text-purple-400 mb-3">Screen Reader Support</h3>
              <p className="text-white/70">Semantic HTML, ARIA labels, and proper heading structure for assistive technologies.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-yellow-400/30 transition-all">
              <div className="text-yellow-400 text-3xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-yellow-400 mb-3">Responsive Design</h3>
              <p className="text-white/70">Mobile-friendly interfaces that work across all devices and screen sizes.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-green-400/30 transition-all">
              <div className="text-green-400 text-3xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-green-400 mb-3">Color Considerations</h3>
              <p className="text-white/70">Color choices that work for users with color vision deficiencies.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-blue-400/30 transition-all">
              <div className="text-blue-400 text-3xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-blue-400 mb-3">Clear Content</h3>
              <p className="text-white/70">Simple language, clear headings, and logical content structure.</p>
            </div>
          </div>

          {/* Testing and Compliance */}
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Testing and Compliance
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Automated Testing</h3>
                <p className="text-white/80">
                  We use automated accessibility testing tools to identify and fix common accessibility issues during development.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-fuchsia-400 mb-3">Manual Testing</h3>
                <p className="text-white/80">
                  Our team conducts manual accessibility testing using screen readers, keyboard navigation, and other assistive technologies.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-purple-400 mb-3">User Feedback</h3>
                <p className="text-white/80">
                  We welcome feedback from users with disabilities to help us improve our accessibility features.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-3">Continuous Improvement</h3>
                <p className="text-white/80">
                  Accessibility is an ongoing process, and we're committed to regular reviews and improvements.
                </p>
              </div>
            </div>
          </div>

          {/* Contact and Feedback */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-white">Help Us Improve</h2>
            <p className="text-white/70 mb-6">
              We're committed to making our website accessible to everyone. If you experience any accessibility barriers or have suggestions for improvement, please let us know.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors">
                Contact Us
              </Link>
              <a href="mailto:accessibility@zion.tech" className="px-6 py-3 bg-fuchsia-500 hover:bg-fuchsia-600 text-white rounded-lg transition-colors">
                accessibility@zion.tech
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}