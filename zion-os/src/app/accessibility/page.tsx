import Link from "next/link";

export const metadata = {
  title: "Accessibility Statement - Zion Tech Group",
  description: "Learn about Zion Tech Group's commitment to digital accessibility and how we ensure our website is accessible to all users.",
  keywords: "accessibility, digital accessibility, WCAG, inclusive design, Zion Tech Group",
};

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Accessibility Statement</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Our commitment to ensuring digital accessibility for all users
          </p>
          <p className="text-sm text-gray-400">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Accessibility Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="card space-y-8">
            {/* Commitment */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Commitment to Accessibility</h2>
              <p className="text-gray-300 leading-relaxed">
                Zion Tech Group is committed to ensuring digital accessibility for people with disabilities. 
                We are continually improving the user experience for everyone and applying the relevant 
                accessibility standards to ensure we provide equal access to all users.
              </p>
            </div>

            {/* Standards */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Accessibility Standards</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA 
                standards. These guidelines explain how to make web content more accessible for people 
                with disabilities and more user-friendly for everyone.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our website is designed to be accessible to users with various abilities, including those 
                who use assistive technologies such as screen readers, voice recognition software, and 
                alternative input devices.
              </p>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Accessibility Features</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our website includes the following accessibility features:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">Navigation & Structure</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Clear and consistent navigation</li>
                    <li>• Logical heading structure</li>
                    <li>• Skip navigation links</li>
                    <li>• Breadcrumb navigation</li>
                  </ul>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-green-400">Content & Text</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• High contrast text</li>
                    <li>• Resizable text support</li>
                    <li>• Clear and simple language</li>
                    <li>• Alternative text for images</li>
                  </ul>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-purple-400">Forms & Interaction</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Proper form labels</li>
                    <li>• Error message identification</li>
                    <li>• Keyboard navigation support</li>
                    <li>• Focus indicators</li>
                  </ul>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-yellow-400">Media & Multimedia</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Captions for videos</li>
                    <li>• Audio descriptions</li>
                    <li>• Transcripts for audio content</li>
                    <li>• Pause/stop controls</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Assistive Technologies */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Assistive Technology Support</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our website is designed to work with the following assistive technologies:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li><strong>Screen Readers:</strong> Compatible with JAWS, NVDA, VoiceOver, and other screen readers</li>
                <li><strong>Voice Recognition Software:</strong> Works with Dragon NaturallySpeaking and similar tools</li>
                <li><strong>Alternative Input Devices:</strong> Supports switch devices, eye tracking, and other assistive input methods</li>
                <li><strong>Browser Accessibility Features:</strong> Compatible with built-in browser accessibility tools</li>
                <li><strong>Mobile Accessibility:</strong> Optimized for mobile screen readers and accessibility features</li>
              </ul>
            </div>

            {/* Testing */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Accessibility Testing</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We regularly test our website for accessibility using a combination of:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>Automated accessibility testing tools</li>
                <li>Manual testing with assistive technologies</li>
                <li>User testing with people with disabilities</li>
                <li>Expert accessibility audits</li>
                <li>Regular accessibility reviews and updates</li>
              </ul>
            </div>

            {/* Known Issues */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Known Accessibility Issues</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We are aware of some accessibility limitations and are working to address them:
              </p>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-yellow-400">Areas for Improvement</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>Some complex data visualizations may not be fully accessible to screen readers</li>
                  <li>Certain interactive elements may require mouse interaction</li>
                  <li>Some third-party content may not meet our accessibility standards</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  We are actively working to resolve these issues and improve the overall accessibility 
                  of our website.
                </p>
              </div>
            </div>

            {/* Feedback */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Feedback and Support</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We welcome your feedback on the accessibility of our website. If you experience 
                accessibility barriers or have suggestions for improvement, please contact us:
              </p>
              <div className="bg-gray-800/50 rounded-lg p-6 space-y-3">
                <p className="text-gray-300">
                  <strong>Accessibility Email:</strong> 
                  <a href="mailto:accessibility@ziontechgroup.com" className="text-blue-400 hover:text-blue-300 ml-2">
                    accessibility@ziontechgroup.com
                  </a>
                </p>
                <p className="text-gray-300">
                  <strong>General Contact:</strong> 
                  <a href="mailto:info@ziontechgroup.com" className="text-blue-400 hover:text-blue-300 ml-2">
                    info@ziontechgroup.com
                  </a>
                </p>
                <p className="text-gray-300">
                  <strong>Phone:</strong> 
                  <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300 ml-2">
                    +1 (302) 464-0950
                  </a>
                </p>
              </div>
              <p className="text-gray-300 leading-relaxed mt-4">
                We aim to respond to accessibility feedback within 2 business days and will work 
                to address any issues identified.
              </p>
            </div>

            {/* Alternative Formats */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Alternative Formats</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you need information from our website in an alternative format, we can provide:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>Large print documents</li>
                <li>Audio recordings</li>
                <li>Braille materials</li>
                <li>Electronic text files</li>
                <li>Alternative communication methods</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                Please contact us to request alternative formats, and we will work to provide 
                the information in a format that meets your needs.
              </p>
            </div>

            {/* Training */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Staff Training</h2>
              <p className="text-gray-300 leading-relaxed">
                Our team receives regular training on digital accessibility best practices, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 mt-4">
                <li>WCAG guidelines and requirements</li>
                <li>Creating accessible content</li>
                <li>Testing with assistive technologies</li>
                <li>Addressing accessibility feedback</li>
                <li>Inclusive design principles</li>
              </ul>
            </div>

            {/* Continuous Improvement */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Continuous Improvement</h2>
              <p className="text-gray-300 leading-relaxed">
                We are committed to continuously improving the accessibility of our website. 
                This includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 mt-4">
                <li>Regular accessibility audits and reviews</li>
                <li>Staying updated with accessibility standards and best practices</li>
                <li>Incorporating accessibility into our development process</li>
                <li>User testing and feedback integration</li>
                <li>Training and awareness programs for our team</li>
              </ul>
            </div>

            {/* Compliance */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Compliance Status</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our website is designed to meet or exceed the following accessibility standards:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2 text-green-400">WCAG 2.1 Level AA</h3>
                  <p className="text-gray-300 text-sm">
                    We strive to meet WCAG 2.1 Level AA standards for all new content and features.
                  </p>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2 text-blue-400">Section 508</h3>
                  <p className="text-gray-300 text-sm">
                    Our website complies with Section 508 of the Rehabilitation Act requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Additional Resources</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                For more information about digital accessibility, you may find these resources helpful:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li><a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">WCAG 2.1 Quick Reference</a></li>
                <li><a href="https://www.w3.org/WAI/standards-guidelines/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">W3C Accessibility Standards</a></li>
                <li><a href="https://www.section508.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Section 508 Information</a></li>
                <li><a href="https://www.ada.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">ADA Information</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Help Us Improve Accessibility
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Your feedback helps us create a more accessible experience for all users. 
              Contact us with your suggestions or accessibility concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Contact Us
              </Link>
              <a href="mailto:accessibility@ziontechgroup.com" className="btn-secondary text-lg px-8 py-4">
                Accessibility Feedback
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}