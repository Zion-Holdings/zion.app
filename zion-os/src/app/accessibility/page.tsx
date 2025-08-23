export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Accessibility
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
            We are committed to making our website and services accessible to everyone, including people with disabilities.
          </p>
        </div>
      </section>

      {/* Accessibility Commitment */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Accessibility Commitment
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Zion Tech Group is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We believe that technology should be inclusive and accessible to all users, regardless of their abilities or disabilities. Our commitment to accessibility reflects our broader mission to create technology solutions that benefit everyone.
              </p>
              <p className="text-lg text-gray-600">
                We strive to maintain compliance with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards and are working towards Level AAA compliance.
              </p>
            </div>
            <div className="bg-green-50 p-8 rounded-xl">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">WCAG 2.1 AA Compliant</h3>
                    <p className="text-gray-600">Meeting international accessibility standards</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Mobile Accessible</h3>
                    <p className="text-gray-600">Optimized for all devices and screen sizes</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Screen Reader Compatible</h3>
                    <p className="text-gray-600">Full compatibility with assistive technologies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Accessibility Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our website includes various accessibility features to ensure an inclusive user experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Keyboard Navigation</h3>
              <p className="text-gray-600">
                Full keyboard navigation support for users who cannot use a mouse. All interactive elements can be accessed and operated using keyboard controls.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Screen Reader Support</h3>
              <p className="text-gray-600">
                Compatible with popular screen readers including JAWS, NVDA, VoiceOver, and TalkBack. Proper heading structure and ARIA labels for enhanced navigation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485-7.071-7.071a2 2 0 010-2.829z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">High Contrast Mode</h3>
              <p className="text-gray-600">
                High contrast color schemes and sufficient color contrast ratios to ensure text and interactive elements are easily distinguishable for users with visual impairments.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Alternative Text</h3>
              <p className="text-gray-600">
                Descriptive alternative text for all images, ensuring that users with visual impairments can understand the content and context of visual elements.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Responsive Design</h3>
              <p className="text-gray-600">
                Mobile-responsive design that adapts to different screen sizes and orientations, ensuring accessibility across all devices and platforms.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Text Resizing</h3>
              <p className="text-gray-600">
                Text can be resized up to 200% without loss of functionality or layout issues, accommodating users who need larger text for better readability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WCAG Compliance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              WCAG 2.1 Compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We follow the Web Content Accessibility Guidelines to ensure our website meets accessibility standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Level AA Compliance</h3>
              <p className="text-gray-600 mb-6">
                Our website meets WCAG 2.1 Level AA standards, which includes:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Perceivable: Content is presented in ways users can perceive
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Operable: Interface components are operable by all users
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Understandable: Information and operation are understandable
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Robust: Content can be interpreted reliably by assistive technologies
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ongoing Improvements</h3>
              <p className="text-gray-600 mb-6">
                We are continuously working to improve accessibility and working towards Level AAA compliance:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Regular accessibility audits and testing
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  User feedback integration
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Technology updates and improvements
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Staff training and awareness
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Report Accessibility Issues
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We welcome feedback on accessibility issues and suggestions for improvement
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-sm">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Our Accessibility Team</h3>
                <p className="text-gray-600">
                  If you encounter accessibility issues or have suggestions for improvement, please contact us:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Email</h4>
                  <a href="mailto:accessibility@ziontechgroup.com" className="text-blue-600 hover:text-blue-700">
                    accessibility@ziontechgroup.com
                  </a>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Phone</h4>
                  <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-700">
                    +1 (302) 464-0950
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">Response Time</h4>
                <p className="text-gray-600">
                  We aim to respond to accessibility feedback within 2 business days and will work to resolve issues promptly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Help Us Improve Accessibility
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Your feedback helps us create a more inclusive and accessible experience for all users.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-green-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact Us
            </a>
            <a href="/privacy" className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}