import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Cookies: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group Cookie Policy - Learn how we use cookies and tracking technologies on our website." />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <h1 className="text-4xl font-bold text-white mb-8">Cookie Policy</h1>
          
          <div className="text-gray-300 space-y-6">
            <div>
              <p className="text-sm text-gray-400 mb-2">Last updated: {new Date().toLocaleDateString()}</p>
            </div>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, analyzing how you use our site, and personalizing content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Cookies</h2>
              <p className="mb-4">We use cookies for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Marketing Cookies:</strong> Used for targeted advertising and analytics</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-medium text-white mb-2">3.1 Essential Cookies</h3>
              <p className="mb-4">
                These cookies are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas, and form submissions. The website cannot function properly without these cookies.
              </p>

              <h3 className="text-xl font-medium text-white mb-2">3.2 Performance Cookies</h3>
              <p className="mb-4">
                These cookies collect information about how visitors use our website, such as which pages are visited most often and if users get error messages. This information is used to improve website performance and user experience.
              </p>

              <h3 className="text-xl font-medium text-white mb-2">3.3 Functional Cookies</h3>
              <p className="mb-4">
                These cookies allow the website to remember choices you make (such as your username, language, or region) and provide enhanced, more personal features. They may also be used to provide services you have requested.
              </p>

              <h3 className="text-xl font-medium text-white mb-2">3.4 Marketing Cookies</h3>
              <p>
                These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for individual users and thereby more valuable for publishers and third-party advertisers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Third-Party Cookies</h2>
              <p className="mb-4">
                We may use third-party services that place cookies on your device. These services include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Google Analytics:</strong> Website analytics and performance monitoring</li>
                <li><strong>Google Ads:</strong> Advertising and remarketing services</li>
                <li><strong>Social Media:</strong> Social media integration and sharing</li>
                <li><strong>Customer Support:</strong> Live chat and support tools</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Cookie Duration</h2>
              <p className="mb-4">Cookies on our website may be:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Session Cookies:</strong> Temporary cookies that expire when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> Remain on your device for a set period or until manually deleted</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Managing Your Cookie Preferences</h2>
              <p className="mb-4">You can control and manage cookies in several ways:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Browser Settings:</strong> Most browsers allow you to refuse cookies or delete existing cookies</li>
                <li><strong>Cookie Consent:</strong> Use our cookie consent banner to manage preferences</li>
                <li><strong>Third-Party Opt-Out:</strong> Opt out of specific third-party services</li>
              </ul>
              <p className="mt-4">
                Please note that disabling certain cookies may affect the functionality of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Your Rights</h2>
              <p className="mb-4">Under applicable data protection laws, you have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Withdraw consent for non-essential cookies</li>
                <li>Request information about cookies we use</li>
                <li>Request deletion of cookie data</li>
                <li>Object to processing of cookie data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Updates to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="space-y-2">
                <p><strong>Email:</strong> <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">kleber@ziontechgroup.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">+1 302 464 0950</a></p>
                <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. Additional Resources</h2>
              <p className="mb-4">
                For more information about cookies and how to manage them, you can visit:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">All About Cookies</a></li>
                <li><a href="https://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Your Online Choices</a></li>
                <li><a href="https://www.networkadvertising.org" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Network Advertising Initiative</a></li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cookies;