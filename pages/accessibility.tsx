import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Accessibility: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <title>Accessibility - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group Accessibility Statement - Our commitment to making our website accessible to all users." />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <h1 className="text-4xl font-bold text-white mb-8">Accessibility Statement</h1>
          
          <div className="text-gray-300 space-y-6">
            <div>
              <p className="text-sm text-gray-400 mb-2">Last updated: {new Date().toLocaleDateString()}</p>
            </div>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Our Commitment</h2>
              <p>
                Zion Tech Group is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to ensure our website is accessible to all users.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Conformance Status</h2>
              <p>
                We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. These guidelines explain how to make web content more accessible for people with disabilities and more user-friendly for everyone.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Accessibility Features</h2>
              <p className="mb-4">Our website includes the following accessibility features:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Keyboard Navigation:</strong> All interactive elements can be accessed using a keyboard</li>
                <li><strong>Screen Reader Support:</strong> Compatible with major screen readers</li>
                <li><strong>Alt Text:</strong> Descriptive alt text for images and graphics</li>
                <li><strong>Color Contrast:</strong> Sufficient color contrast for text readability</li>
                <li><strong>Resizable Text:</strong> Text can be resized up to 200% without loss of functionality</li>
                <li><strong>Focus Indicators:</strong> Clear focus indicators for keyboard navigation</li>
                <li><strong>Semantic HTML:</strong> Proper heading structure and semantic markup</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Known Limitations</h2>
              <p className="mb-4">
                While we strive to ensure our website is fully accessible, some areas may have limitations:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Some third-party content may not be fully accessible</li>
                <li>Older PDF documents may not be screen reader compatible</li>
                <li>Some interactive elements may require JavaScript to function</li>
              </ul>
              <p className="mt-4">
                We are actively working to address these limitations and improve accessibility across all areas of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Assistive Technologies</h2>
              <p className="mb-4">Our website is compatible with the following assistive technologies:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Screen Readers:</strong> JAWS, NVDA, VoiceOver, TalkBack</li>
                <li><strong>Screen Magnifiers:</strong> ZoomText, Windows Magnifier</li>
                <li><strong>Voice Recognition:</strong> Dragon NaturallySpeaking, Windows Speech Recognition</li>
                <li><strong>Alternative Input Devices:</strong> Head pointers, eye tracking devices</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Testing and Evaluation</h2>
              <p>
                We regularly test our website for accessibility using automated tools, manual testing, and feedback from users with disabilities. Our accessibility testing includes keyboard navigation, screen reader compatibility, color contrast analysis, and semantic markup validation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Feedback and Support</h2>
              <p className="mb-4">
                We welcome your feedback on the accessibility of our website. If you experience accessibility barriers or have suggestions for improvement, please contact us:
              </p>
              <div className="space-y-2">
                <p><strong>Email:</strong> <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">kleber@ziontechgroup.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">+1 302 464 0950</a></p>
                <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Alternative Formats</h2>
              <p>
                If you need information from our website in an alternative format, such as large print, audio, or Braille, please contact us. We will work with you to provide the information in a format that meets your needs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Continuous Improvement</h2>
              <p>
                We are committed to continuously improving the accessibility of our website. We regularly review our accessibility practices, update our website based on user feedback, and stay informed about accessibility best practices and standards.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. Training and Awareness</h2>
              <p>
                Our team receives regular training on web accessibility standards and best practices. We ensure that accessibility is considered throughout the design and development process of our website and digital content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">11. Third-Party Content</h2>
              <p>
                Our website may contain links to third-party websites or content. While we strive to ensure these external resources are accessible, we cannot guarantee their accessibility. If you encounter accessibility issues with third-party content, please let us know.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">12. Updates to This Statement</h2>
              <p>
                We may update this Accessibility Statement from time to time to reflect changes in our practices or to provide additional information. We will notify users of any material changes by posting the updated statement on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">13. Additional Resources</h2>
              <p className="mb-4">
                For more information about web accessibility, you can visit:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><a href="https://www.w3.org/WAI/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Web Accessibility Initiative (WAI)</a></li>
                <li><a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">WCAG 2.1 Quick Reference</a></li>
                <li><a href="https://www.section508.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Section 508 Information</a></li>
                <li><a href="https://www.ada.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Americans with Disabilities Act</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">14. Contact Information</h2>
              <p className="mb-4">
                For accessibility-related questions, concerns, or feedback, please contact our accessibility team:
              </p>
              <div className="space-y-2">
                <p><strong>Accessibility Email:</strong> <a href="mailto:accessibility@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">accessibility@ziontechgroup.com</a></p>
                <p><strong>General Contact:</strong> <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">kleber@ziontechgroup.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">+1 302 464 0950</a></p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Accessibility;