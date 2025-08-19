import React from 'react';
import Head from 'next/head';

export default function Accessibility() {
  return (
    <>
      <Head>
        <title>Accessibility — Zion Tech Group</title>
        <meta name="description" content="Accessibility information and commitment for Zion Tech Group's autonomous systems and services." />
        <meta property="og:title" content="Accessibility — Zion Tech Group" />
        <meta property="og:description" content="Accessibility information and commitment for Zion Tech Group's autonomous systems and services." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Accessibility
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Committed to making our autonomous systems and services accessible to everyone, regardless of ability or technology.
            </p>
          </section>

          <div className="max-w-6xl mx-auto">
            {/* Accessibility Commitment */}
            <section className="mb-16 p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/20">
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Our Accessibility Commitment</h2>
              <p className="text-white/80 mb-6">
                Zion Tech Group is committed to ensuring digital accessibility for people with disabilities. 
                We are continually improving the user experience for everyone and applying the relevant accessibility standards.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-2">♿</div>
                  <h3 className="text-xl font-semibold text-white mb-2">Universal Design</h3>
                  <p className="text-white/70 text-sm">Built with accessibility in mind from the start</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">🔍</div>
                  <h3 className="text-xl font-semibold text-white mb-2">Continuous Testing</h3>
                  <p className="text-white/70 text-sm">Regular accessibility audits and improvements</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">📱</div>
                  <h3 className="text-xl font-semibold text-white mb-2">Multi-Platform</h3>
                  <p className="text-white/70 text-sm">Accessible across all devices and assistive technologies</p>
                </div>
              </div>
            </section>

            {/* Accessibility Standards */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-cyan-400">Accessibility Standards</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* WCAG Compliance */}
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-4 text-white">WCAG 2.1 AA Compliance</h3>
                  <p className="text-white/80 mb-4">
                    Our systems strive to meet Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards, 
                    which are internationally recognized guidelines for web accessibility.
                  </p>
                  <ul className="space-y-2 text-white/80">
                    <li>• Perceivable: Content is presented in ways users can perceive</li>
                    <li>• Operable: Interface components are navigable and operable</li>
                    <li>• Understandable: Information and operation are understandable</li>
                    <li>• Robust: Content is compatible with current and future technologies</li>
                  </ul>
                </div>

                {/* Section 508 */}
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-4 text-white">Section 508 Compliance</h3>
                  <p className="text-white/80 mb-4">
                    Our services comply with Section 508 of the Rehabilitation Act, ensuring federal agencies 
                    and organizations receiving federal funding can access our systems.
                  </p>
                  <ul className="space-y-2 text-white/80">
                    <li>• Software applications and operating systems</li>
                    <li>• Web-based information and applications</li>
                    <li>• Telecommunications products</li>
                    <li>• Video and multimedia products</li>
                  </ul>
                </div>

                {/* International Standards */}
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-4 text-white">International Standards</h3>
                  <p className="text-white/80 mb-4">
                    We follow accessibility standards from around the world to ensure global accessibility compliance.
                  </p>
                  <ul className="space-y-2 text-white/80">
                    <li>• EN 301 549 (European Union)</li>
                    <li>• AODA (Accessibility for Ontarians with Disabilities Act)</li>
                    <li>• ISO/IEC 40500 (International Organization for Standardization)</li>
                    <li>• JIS X 8341 (Japanese Industrial Standards)</li>
                  </ul>
                </div>

                {/* Industry Best Practices */}
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-4 text-white">Industry Best Practices</h3>
                  <p className="text-white/80 mb-4">
                    Beyond compliance, we implement industry best practices for inclusive design and user experience.
                  </p>
                  <ul className="space-y-2 text-white/80">
                    <li>• Inclusive design principles</li>
                    <li>• User research with diverse populations</li>
                    <li>• Accessibility testing with assistive technologies</li>
                    <li>• Continuous improvement based on user feedback</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Accessibility Features */}
            <section className="mb-16 p-8 bg-white/5 rounded-2xl border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-fuchsia-400">Accessibility Features</h2>
              <p className="text-white/80 mb-6">
                Our autonomous systems include a comprehensive set of accessibility features designed to support 
                users with various abilities and preferences.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Visual Accessibility */}
                <div className="bg-slate-900 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-3">Visual Accessibility</h3>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• High contrast mode</li>
                    <li>• Adjustable font sizes</li>
                    <li>• Color-blind friendly palettes</li>
                    <li>• Clear typography and spacing</li>
                    <li>• Alternative text for images</li>
                  </ul>
                </div>

                {/* Keyboard Navigation */}
                <div className="bg-slate-900 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-3">Keyboard Navigation</h3>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• Full keyboard accessibility</li>
                    <li>• Logical tab order</li>
                    <li>• Keyboard shortcuts</li>
                    <li>• Focus indicators</li>
                    <li>• Skip navigation links</li>
                  </ul>
                </div>

                {/* Screen Reader Support */}
                <div className="bg-slate-900 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-3">Screen Reader Support</h3>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• Semantic HTML structure</li>
                    <li>• ARIA labels and landmarks</li>
                    <li>• Descriptive link text</li>
                    <li>• Form field labels</li>
                    <li>• Status announcements</li>
                  </ul>
                </div>

                {/* Audio & Captioning */}
                <div className="bg-slate-900 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-3">Audio & Captioning</h3>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• Closed captions for videos</li>
                    <li>• Audio descriptions</li>
                    <li>• Transcripts for audio content</li>
                    <li>• Volume controls</li>
                    <li>• Audio pause/resume</li>
                  </ul>
                </div>

                {/* Motor Accessibility */}
                <div className="bg-slate-900 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-3">Motor Accessibility</h3>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• Large click targets</li>
                    <li>• Adjustable timing</li>
                    <li>• Voice control support</li>
                    <li>• Gesture alternatives</li>
                    <li>• Error prevention</li>
                  </ul>
                </div>

                {/* Cognitive Accessibility */}
                <div className="bg-slate-900 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-3">Cognitive Accessibility</h3>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• Clear navigation structure</li>
                    <li>• Consistent design patterns</li>
                    <li>• Plain language content</li>
                    <li>• Error recovery assistance</li>
                    <li>• Progress indicators</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Assistive Technology Support */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-green-400">Assistive Technology Support</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Screen Readers */}
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-4 text-white">Screen Readers</h3>
                  <p className="text-white/80 mb-4">
                    Our systems are fully compatible with popular screen readers and assistive technologies.
                  </p>
                  <ul className="space-y-2 text-white/80">
                    <li>• JAWS (Windows)</li>
                    <li>• NVDA (Windows)</li>
                    <li>• VoiceOver (macOS/iOS)</li>
                    <li>• TalkBack (Android)</li>
                    <li>• Orca (Linux)</li>
                  </ul>
                </div>

                {/* Alternative Input Devices */}
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-4 text-white">Alternative Input Devices</h3>
                  <p className="text-white/80 mb-4">
                    Support for various input methods and assistive devices.
                  </p>
                  <ul className="space-y-2 text-white/80">
                    <li>• Switch devices</li>
                    <li>• Eye tracking systems</li>
                    <li>• Voice recognition software</li>
                    <li>• Head pointers</li>
                    <li>• Sip and puff devices</li>
                  </ul>
                </div>

                {/* Browser Accessibility */}
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-4 text-white">Browser Accessibility</h3>
                  <p className="text-white/80 mb-4">
                    Optimized for accessibility features in modern web browsers.
                  </p>
                  <ul className="space-y-2 text-white/80">
                    <li>• Chrome accessibility features</li>
                    <li>• Firefox accessibility tools</li>
                    <li>• Safari VoiceOver support</li>
                    <li>• Edge accessibility options</li>
                    <li>• High contrast modes</li>
                  </ul>
                </div>

                {/* Mobile Accessibility */}
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-4 text-white">Mobile Accessibility</h3>
                  <p className="text-white/80 mb-4">
                    Full accessibility support across mobile devices and platforms.
                  </p>
                  <ul className="space-y-2 text-white/80">
                    <li>• iOS accessibility features</li>
                    <li>• Android accessibility services</li>
                    <li>• Touch gesture alternatives</li>
                    <li>• Mobile screen readers</li>
                    <li>• Voice control support</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Testing & Validation */}
            <section className="mb-16 p-8 bg-white/5 rounded-2xl border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-yellow-400">Testing & Validation</h2>
              <p className="text-white/80 mb-6">
                We employ multiple testing methodologies to ensure our accessibility standards are met and maintained.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Automated Testing</h3>
                  <ul className="space-y-2 text-white/80">
                    <li>• Accessibility audit tools (axe-core, WAVE)</li>
                    <li>• Color contrast analyzers</li>
                    <li>• HTML validation and semantic checking</li>
                    <li>• Automated accessibility testing in CI/CD</li>
                    <li>• Regular accessibility scanning</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Manual Testing</h3>
                  <ul className="space-y-2 text-white/80">
                    <li>• Screen reader testing with real users</li>
                    <li>• Keyboard navigation testing</li>
                    <li>• Color blindness simulation</li>
                    <li>• Mobile accessibility testing</li>
                    <li>• User experience testing with diverse populations</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Accessibility Resources */}
            <section className="mb-16 p-8 bg-white/5 rounded-2xl border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-indigo-400">Accessibility Resources</h2>
              <p className="text-white/80 mb-6">
                Learn more about accessibility and how to use our systems effectively.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-900 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-3">User Guides</h3>
                  <ul className="space-y-2 text-white/80">
                    <li><a href="/api-documentation" className="text-cyan-400 hover:text-cyan-300">Accessibility API Guide</a></li>
                    <li><a href="/component-library" className="text-cyan-400 hover:text-cyan-300">Accessible Components</a></li>
                    <li><a href="/reports" className="text-cyan-400 hover:text-cyan-300">Accessibility Reports</a></li>
                  </ul>
                </div>
                
                <div className="bg-slate-900 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-3">Support & Training</h3>
                  <ul className="space-y-2 text-white/80">
                    <li><a href="/contact" className="text-cyan-400 hover:text-cyan-300">Accessibility Support</a></li>
                    <li><a href="/contact" className="text-cyan-400 hover:text-cyan-300">Training Materials</a></li>
                    <li><a href="/contact" className="text-cyan-400 hover:text-cyan-300">Feedback & Suggestions</a></li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Feedback & Support */}
            <section className="p-8 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl border border-green-500/20">
              <h2 className="text-3xl font-bold mb-6 text-green-400">We Value Your Feedback</h2>
              <p className="text-white/80 mb-6">
                Your feedback helps us improve accessibility for everyone. If you encounter accessibility barriers 
                or have suggestions for improvement, please let us know.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="/contact" className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors">
                  Report Accessibility Issue
                </a>
                <a href="/contact" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-colors">
                  Request Accessibility Features
                </a>
                <a href="/contact" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-colors">
                  Accessibility Support
                </a>
              </div>
              
              <div className="mt-6 p-4 bg-slate-900 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">Accessibility Contact</h3>
                <p className="text-white/80 text-sm">
                  For accessibility-specific inquiries: 
                  <span className="text-green-400 font-mono ml-2">accessibility@zion.tech</span>
                </p>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}