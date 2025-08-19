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
          <div className="mb-12">
            <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8">
              <span className="mr-2">←</span>
              Back to Home
            </Link>
            <h1 className="text-4xl font-bold mb-4">Accessibility</h1>
            <p className="text-xl text-white/80">Ensuring our digital experiences are accessible to everyone</p>
          </div>

          {/* Accessibility Commitment */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-400/30 rounded-xl p-8">
              <h2 className="text-2xl font-semibold mb-4 text-green-400">Our Accessibility Commitment</h2>
              <p className="text-white/80 mb-4">
                Zion Tech Group is committed to ensuring digital accessibility for people with disabilities. We believe that 
                technology should be inclusive and accessible to everyone, regardless of their abilities or how they interact with digital content.
              </p>
              <p className="text-white/80">
                We continuously work to improve the accessibility of our website and digital services to meet or exceed 
                the Web Content Accessibility Guidelines (WCAG) 2.1 AA standards.
              </p>
            </div>
          </section>

          {/* Accessibility Features */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Accessibility Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-green-400/30 transition-all">
                <div className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Screen Reader Support</h3>
                <p className="text-white/70">Full compatibility with screen readers including proper heading structure and ARIA labels.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-400/30 transition-all">
                <div className="w-12 h-12 bg-blue-400/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485-7.071 7.071a2 2 0 01-2.828 0L2.343 15.343a2 2 0 010-2.828l5.657-5.657z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Keyboard Navigation</h3>
                <p className="text-white/70">Complete keyboard accessibility with visible focus indicators and logical tab order.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-400/30 transition-all">
                <div className="w-12 h-12 bg-purple-400/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">High Contrast</h3>
                <p className="text-white/70">High contrast color schemes and customizable text sizing for better readability.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-yellow-400/30 transition-all">
                <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Alternative Text</h3>
                <p className="text-white/70">Descriptive alt text for all images and multimedia content for screen reader users.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-cyan-400/30 transition-all">
                <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Audio Descriptions</h3>
                <p className="text-white/70">Audio descriptions for video content and transcripts for audio content.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-fuchsia-400/30 transition-all">
                <div className="w-12 h-12 bg-fuchsia-400/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-fuchsia-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Customizable Interface</h3>
                <p className="text-white/70">Adjustable font sizes, spacing, and color schemes to meet individual needs.</p>
              </div>
            </div>
          </section>

          {/* WCAG Compliance */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">WCAG 2.1 AA Compliance</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-green-400">Perceivable</h3>
                <ul className="space-y-2 text-white/70">
                  <li>• Text alternatives for non-text content</li>
                  <li>• Captions and other alternatives for multimedia</li>
                  <li>• Content that can be presented in different ways</li>
                  <li>• Content that is easy to see and hear</li>
                </ul>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Operable</h3>
                <ul className="space-y-2 text-white/70">
                  <li>• Keyboard accessible functionality</li>
                  <li>• Sufficient time to read and use content</li>
                  <li>• Content that doesn't cause seizures</li>
                  <li>• Navigable content and orientation</li>
                </ul>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">Understandable</h3>
                <ul className="space-y-2 text-white/70">
                  <li>• Readable and understandable text</li>
                  <li>• Predictable website operation</li>
                  <li>• Input assistance for users</li>
                  <li>• Clear error identification</li>
                </ul>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">Robust</h3>
                <ul className="space-y-2 text-white/70">
                  <li>• Compatible with current and future tools</li>
                  <li>• Valid HTML and CSS markup</li>
                  <li>• ARIA labels and landmarks</li>
                  <li>• Semantic HTML structure</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Testing and Monitoring */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Testing and Monitoring</h2>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2 text-cyan-400">Automated Testing</h3>
                  <p className="text-white/70">Regular automated accessibility testing using industry-standard tools.</p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2 text-fuchsia-400">Manual Testing</h3>
                  <p className="text-white/70">Manual testing with assistive technologies and keyboard navigation.</p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2 text-green-400">User Feedback</h3>
                  <p className="text-white/70">Continuous improvement based on user feedback and accessibility audits.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Accessibility Team */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-400/30 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4 text-green-400">Accessibility Support</h2>
              <p className="text-white/80 mb-6">
                We're committed to making our website accessible to everyone. If you experience any accessibility barriers 
                or have suggestions for improvement, please contact our accessibility team.
              </p>
              <div className="space-y-2 text-white/70">
                <p>Email: accessibility@zion.tech</p>
                <p>Phone: +1-800-ZION-ACC</p>
                <p>Response Time: Within 48 hours</p>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <div className="mt-12 text-center">
            <Link href="/contact" className="px-6 py-3 bg-green-400 hover:bg-green-300 text-black font-semibold rounded-lg transition-colors mr-4">
              Contact Accessibility Team
            </Link>
            <Link href="/privacy" className="px-6 py-3 border border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-semibold rounded-lg transition-colors">
              Privacy Policy
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}