import Link from "next/link";

export const metadata = {
  title: "Accessibility Statement - Zion Tech Group",
  description: "Zion Tech Group's commitment to digital accessibility and ensuring our website is usable by people with disabilities.",
  keywords: "accessibility, digital accessibility, WCAG, disability access, Zion Tech Group",
};

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Accessibility Statement</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Zion Tech Group is committed to ensuring digital accessibility for people with disabilities. 
            We are continually improving the user experience for everyone and applying the relevant 
            accessibility standards.
          </p>
          <div className="text-sm text-gray-400 mt-4">
            Last updated: December 15, 2024
          </div>
        </div>

        {/* Statement Content */}
        <div className="space-y-12">
          {/* Commitment */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
            <p className="text-gray-300 mb-4">
              Zion Tech Group believes that digital accessibility is a fundamental human right. 
              We are committed to making our website and digital services accessible to people 
              with disabilities, including those who use assistive technologies.
            </p>
            <p className="text-gray-300">
              We strive to ensure that our website meets or exceeds the Web Content Accessibility 
              Guidelines (WCAG) 2.1 Level AA standards, which are widely recognized as the 
              international standard for web accessibility.
            </p>
          </section>

          {/* Standards */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Accessibility Standards</h2>
            <p className="text-gray-300 mb-4">
              Our website is designed and developed to meet the following accessibility standards:
            </p>
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">WCAG 2.1 Level AA Compliance</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-green-400 font-semibold mr-3 mt-1">✓</span>
                  <span className="text-gray-300">Perceivable: Content is presented in ways that users can perceive</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-400 font-semibold mr-3 mt-1">✓</span>
                  <span className="text-gray-300">Operable: Interface components and navigation are operable</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-400 font-semibold mr-3 mt-1">✓</span>
                  <span className="text-gray-300">Understandable: Content and interface are understandable</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-400 font-semibold mr-3 mt-1">✓</span>
                  <span className="text-gray-300">Robust: Content can be interpreted reliably by assistive technologies</span>
                </div>
              </div>
            </div>
          </section>

          {/* Features */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Accessibility Features</h2>
            <p className="text-gray-300 mb-6">
              Our website includes the following accessibility features:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card p-4">
                <h3 className="font-semibold text-gray-200 mb-3">Keyboard Navigation</h3>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li>• Full keyboard navigation support</li>
                  <li>• Visible focus indicators</li>
                  <li>• Logical tab order</li>
                  <li>• Skip navigation links</li>
                </ul>
              </div>
              
              <div className="card p-4">
                <h3 className="font-semibold text-gray-200 mb-3">Screen Reader Support</h3>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li>• Semantic HTML structure</li>
                  <li>• ARIA labels and landmarks</li>
                  <li>• Alternative text for images</li>
                  <li>• Descriptive link text</li>
                </ul>
              </div>
              
              <div className="card p-4">
                <h3 className="font-semibold text-gray-200 mb-3">Visual Accessibility</h3>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li>• High contrast color schemes</li>
                  <li>• Resizable text support</li>
                  <li>• Clear typography</li>
                  <li>• Consistent visual hierarchy</li>
                </ul>
              </div>
              
              <div className="card p-4">
                <h3 className="font-semibold text-gray-200 mb-3">Content Accessibility</h3>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li>• Plain language writing</li>
                  <li>• Clear headings and structure</li>
                  <li>• Descriptive form labels</li>
                  <li>• Error message clarity</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Assistive Technologies */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Assistive Technology Support</h2>
            <p className="text-gray-300 mb-4">
              Our website is designed to work with the following assistive technologies:
            </p>
            <div className="card p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-200 mb-3">Screen Readers</h3>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• JAWS (Windows)</li>
                    <li>• NVDA (Windows)</li>
                    <li>• VoiceOver (macOS/iOS)</li>
                    <li>• TalkBack (Android)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-200 mb-3">Other Technologies</h3>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Speech recognition software</li>
                    <li>• Switch navigation devices</li>
                    <li>• Magnification software</li>
                    <li>• High contrast mode</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Known Issues */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Known Accessibility Issues</h2>
            <p className="text-gray-300 mb-4">
              We are aware of some accessibility issues and are working to resolve them:
            </p>
            <div className="card p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-200 mb-2">PDF Documents</h3>
                  <p className="text-sm text-gray-300">
                    Some PDF documents may not be fully accessible to screen readers. 
                    We are working to ensure all PDFs meet accessibility standards.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-200 mb-2">Third-Party Content</h3>
                  <p className="text-sm text-gray-300">
                    Some third-party content, such as embedded videos or forms, may not 
                    meet our accessibility standards. We are working with providers to improve this.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-200 mb-2">Complex Interactive Elements</h3>
                  <p className="text-sm text-gray-300">
                    Some advanced interactive features may require additional accessibility improvements. 
                    We are continuously enhancing these elements.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Testing */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Accessibility Testing</h2>
            <p className="text-gray-300 mb-4">
              We regularly test our website for accessibility using a combination of methods:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
              <li>Automated accessibility testing tools</li>
              <li>Manual testing with assistive technologies</li>
              <li>User testing with people with disabilities</li>
              <li>Expert accessibility audits</li>
              <li>Regular accessibility reviews and updates</li>
            </ul>
            <p className="text-gray-300">
              Our accessibility testing is ongoing, and we continuously work to identify 
              and resolve any accessibility barriers.
            </p>
          </section>

          {/* Feedback */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Feedback and Support</h2>
            <p className="text-gray-300 mb-4">
              We welcome feedback on the accessibility of our website. If you experience 
              accessibility barriers or have suggestions for improvement, please contact us:
            </p>
            <div className="card p-6">
              <div className="space-y-3">
                <div>
                  <span className="font-semibold text-gray-200">Accessibility Email:</span>
                  <a href="mailto:accessibility@ziontechgroup.com" className="text-blue-400 hover:text-blue-300 ml-2">
                    accessibility@ziontechgroup.com
                  </a>
                </div>
                <div>
                  <span className="font-semibold text-gray-200">General Contact:</span>
                  <a href="mailto:info@ziontechgroup.com" className="text-blue-400 hover:text-blue-300 ml-2">
                    info@ziontechgroup.com
                  </a>
                </div>
                <div>
                  <span className="font-semibold text-gray-200">Phone:</span>
                  <a href="tel:+1-555-123-4567" className="text-blue-400 hover:text-blue-300 ml-2">
                    +1 (555) 123-4567
                  </a>
                </div>
                <div>
                  <span className="font-semibold text-gray-200">Address:</span>
                  <span className="text-gray-300 ml-2">
                    Zion Tech Group<br />
                    123 Innovation Drive<br />
                    San Francisco, CA 94105<br />
                    United States
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Accessibility Improvement Timeline</h2>
            <p className="text-gray-300 mb-4">
              We are committed to continuous improvement of our website's accessibility. 
              Here's our current timeline for addressing known issues:
            </p>
            <div className="card p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-200 mb-2">Immediate (Within 30 days)</h3>
                  <p className="text-sm text-gray-300">
                    Fix critical accessibility barriers and ensure basic navigation works with all assistive technologies.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-200 mb-2">Short-term (Within 90 days)</h3>
                  <p className="text-sm text-gray-300">
                    Resolve known accessibility issues and improve form accessibility and error handling.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-200 mb-2">Long-term (Within 6 months)</h3>
                  <p className="text-sm text-gray-300">
                    Achieve full WCAG 2.1 Level AA compliance and implement advanced accessibility features.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Compliance */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Compliance Status</h2>
            <p className="text-gray-300 mb-4">
              Our current accessibility compliance status:
            </p>
            <div className="card p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-200">WCAG 2.1 Level A:</span>
                  <span className="text-green-400 font-semibold">✓ Compliant</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-200">WCAG 2.1 Level AA:</span>
                  <span className="text-yellow-400 font-semibold">⚠ Partially Compliant</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-200">WCAG 2.1 Level AAA:</span>
                  <span className="text-red-400 font-semibold">✗ Not Compliant</span>
                </div>
              </div>
              <p className="text-sm text-gray-300 mt-4">
                We are actively working to achieve full Level AA compliance and continuously 
                improve our accessibility standards.
              </p>
            </div>
          </section>

          {/* Additional Resources */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Additional Resources</h2>
            <p className="text-gray-300 mb-4">
              For more information about digital accessibility, please visit:
            </p>
            <div className="card p-6">
              <ul className="space-y-3">
                <li>
                  <a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                    WCAG 2.1 Quick Reference Guide
                  </a>
                  <span className="text-gray-400 text-sm ml-2">- Official accessibility guidelines</span>
                </li>
                <li>
                  <a href="https://www.w3.org/WAI/standards-guidelines/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                    W3C Web Accessibility Initiative
                  </a>
                  <span className="text-gray-400 text-sm ml-2">- International accessibility standards</span>
                </li>
                <li>
                  <a href="https://www.ada.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                    Americans with Disabilities Act (ADA)
                  </a>
                  <span className="text-gray-400 text-sm ml-2">- U.S. disability rights information</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Updates */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Updates to This Statement</h2>
            <p className="text-gray-300 mb-4">
              We may update this Accessibility Statement from time to time to reflect changes 
              in our accessibility practices or compliance status.
            </p>
            <p className="text-gray-300">
              We will notify users of any material changes by updating the "Last updated" 
              date at the top of this page.
            </p>
          </section>
        </div>

        {/* CTA Section */}
        <section className="text-center mt-16">
          <div className="card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30">
            <h2 className="text-2xl font-bold mb-4">Help Us Improve Accessibility</h2>
            <p className="text-gray-300 mb-6">
              Your feedback helps us make our website more accessible for everyone. 
              Contact us with your suggestions or to report accessibility issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <a href="mailto:accessibility@ziontechgroup.com" className="btn-secondary">
                Accessibility Feedback
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}