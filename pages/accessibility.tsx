import React from 'react';
import Head from 'next/head';

export default function AccessibilityPage() {
  return (
    <>
      <Head>
        <title>Accessibility — Zion Tech Group</title>
        <meta name="description" content="Accessibility features and commitment to inclusive design at Zion Tech Group." />
        <meta property="og:title" content="Accessibility — Zion Tech Group" />
        <meta property="og:description" content="Accessibility features and commitment to inclusive design at Zion Tech Group." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Accessibility Statement
              </h1>
              <p className="text-xl text-white/80">
                Committed to inclusive design and digital accessibility for all users
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 p-6 rounded-lg border border-white/20 backdrop-blur-xl">
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">♿ Inclusive Design</h3>
                <p className="text-white/80">
                  Our platform is designed with accessibility in mind, ensuring all users can navigate and interact effectively.
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg border border-white/20 backdrop-blur-xl">
                <h3 className="text-xl font-semibold mb-3 text-fuchsia-400">🔍 Screen Reader Support</h3>
                <p className="text-white/80">
                  Full compatibility with screen readers and assistive technologies for users with visual impairments.
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg border border-white/20 backdrop-blur-xl">
                <h3 className="text-xl font-semibold mb-3 text-green-400">⌨️ Keyboard Navigation</h3>
                <p className="text-white/80">
                  Complete keyboard accessibility allowing users to navigate without a mouse or touch device.
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg border border-white/20 backdrop-blur-xl">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">🎨 Visual Accessibility</h3>
                <p className="text-white/80">
                  High contrast options, resizable text, and clear visual hierarchy for better readability.
                </p>
              </div>
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Our Commitment</h2>
                <p className="text-white/80 mb-4">
                  Zion Tech Group is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
                </p>
                <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                  <h4 className="text-lg font-semibold mb-2 text-fuchsia-400">Accessibility Standards</h4>
                  <ul className="list-disc list-inside text-white/80 ml-6">
                    <li>WCAG 2.1 AA compliance</li>
                    <li>Section 508 compliance</li>
                    <li>ADA Title III compliance</li>
                    <li>EN 301 549 V3.2.1 compliance</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-fuchsia-400">Accessibility Features</h2>
                <p className="text-white/80 mb-4">
                  Our platform includes comprehensive accessibility features to support users with various needs.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                    <h4 className="text-lg font-semibold mb-2 text-green-400">Visual Accessibility</h4>
                    <ul className="list-disc list-inside text-white/80 ml-6 text-sm">
                      <li>High contrast mode</li>
                      <li>Resizable text (up to 200%)</li>
                      <li>Clear typography and spacing</li>
                      <li>Color-blind friendly design</li>
                    </ul>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                    <h4 className="text-lg font-semibold mb-2 text-blue-400">Navigation & Interaction</h4>
                    <ul className="list-disc list-inside text-white/80 ml-6 text-sm">
                      <li>Keyboard-only navigation</li>
                      <li>Skip navigation links</li>
                      <li>Logical tab order</li>
                      <li>Focus indicators</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-green-400">Assistive Technology Support</h2>
                <p className="text-white/80 mb-4">
                  We ensure compatibility with a wide range of assistive technologies and devices.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white/10 p-4 rounded-lg border border-white/20 text-center">
                    <div className="text-3xl mb-2">🔊</div>
                    <h4 className="font-semibold text-cyan-400">Screen Readers</h4>
                    <p className="text-white/80 text-sm">JAWS, NVDA, VoiceOver, TalkBack</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg border border-white/20 text-center">
                    <div className="text-3xl mb-2">⌨️</div>
                    <h4 className="font-semibold text-fuchsia-400">Input Devices</h4>
                    <p className="text-white/80 text-sm">Keyboard, Switch, Voice Control</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg border border-white/20 text-center">
                    <div className="text-3xl mb-2">🔍</div>
                    <h4 className="font-semibold text-green-400">Magnification</h4>
                    <p className="text-white/80 text-sm">Zoom, High DPI, Magnifiers</p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-blue-400">Content Accessibility</h2>
                <p className="text-white/80 mb-4">
                  All content is created with accessibility best practices to ensure information is available to all users.
                </p>
                <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                  <h4 className="text-lg font-semibold mb-2 text-yellow-400">Content Standards</h4>
                  <ul className="list-disc list-inside text-white/80 ml-6">
                    <li>Alternative text for images</li>
                    <li>Descriptive link text</li>
                    <li>Proper heading structure</li>
                    <li>Captions and transcripts for media</li>
                    <li>Clear and simple language</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Testing & Compliance</h2>
                <p className="text-white/80 mb-4">
                  We regularly test our platform for accessibility compliance and continuously improve based on user feedback.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                    <h4 className="text-lg font-semibold mb-2 text-purple-400">Automated Testing</h4>
                    <ul className="list-disc list-inside text-white/80 ml-6 text-sm">
                      <li>Lighthouse accessibility audits</li>
                      <li>WAVE accessibility evaluation</li>
                      <li>axe-core automated testing</li>
                      <li>Continuous integration checks</li>
                    </ul>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                    <h4 className="text-lg font-semibold mb-2 text-red-400">Manual Testing</h4>
                    <ul className="list-disc list-inside text-white/80 ml-6 text-sm">
                      <li>Screen reader testing</li>
                      <li>Keyboard navigation testing</li>
                      <li>Color contrast verification</li>
                      <li>User experience testing</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-purple-400">Feedback & Support</h2>
                <p className="text-white/80 mb-4">
                  We welcome feedback on accessibility and are committed to addressing any issues promptly.
                </p>
                <div className="bg-white/10 p-6 rounded-lg border border-white/20">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-cyan-400">Report Accessibility Issues</h4>
                      <p className="text-white/90">
                        If you encounter accessibility barriers or have suggestions for improvement, please contact our accessibility team.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-fuchsia-400">Contact Information</h4>
                      <p className="text-white/90">
                        <strong>Accessibility Team:</strong> accessibility@zion.tech<br />
                        <strong>Phone:</strong> +1 (555) 123-4567<br />
                        <strong>Response Time:</strong> Within 48 hours
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-indigo-400">Continuous Improvement</h2>
                <p className="text-white/80 mb-4">
                  We are committed to ongoing accessibility improvements and staying current with accessibility standards and best practices.
                </p>
                <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                  <ul className="list-disc list-inside text-white/80 ml-6">
                    <li>Regular accessibility audits and reviews</li>
                    <li>User feedback integration</li>
                    <li>Staff accessibility training</li>
                    <li>Industry best practice monitoring</li>
                    <li>Accessibility roadmap development</li>
                  </ul>
                </div>
              </section>
            </div>

            <div className="text-center mt-12">
              <a href="/" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-600 hover:to-fuchsia-600 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105">
                Return to Homepage
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}