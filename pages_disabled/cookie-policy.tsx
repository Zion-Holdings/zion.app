import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CookiePolicy: NextPage = () => {
  const lastUpdated = 'January 15, 2024';

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Head>
        <title>Cookie Policy - Zion Tech Group | Cookie Usage & Management</title>
        <meta name="description" content="Learn about Zion Tech Group's cookie policy. Understand how we use cookies, manage preferences, and ensure transparency in our data collection practices." />
        <meta name="keywords" content="cookie policy, cookies, data collection, privacy, Zion Tech Group cookies, cookie management" />
      </Head>

      <Navigation />

      <main className="container mx-auto px-4 py-16 pt-32">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Cookie Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            This Cookie Policy explains how Zion Tech Group uses cookies and similar technologies 
            to enhance your browsing experience and provide personalized services.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>🍪 Cookie Management</span>
            <span>🔒 Privacy Control</span>
            <span>📊 Analytics</span>
            <span>🎯 Personalization</span>
          </div>
        </div>

        {/* Last Updated */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-12 text-center">
          <p className="text-blue-800">
            <strong>Last Updated:</strong> {lastUpdated}
          </p>
        </div>

        {/* Table of Contents */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Table of Contents</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <a href="#what-are-cookies" className="block text-blue-600 hover:text-blue-800 transition-colors duration-200">1. What Are Cookies?</a>
                <a href="#how-we-use" className="block text-blue-600 hover:text-blue-800 transition-colors duration-200">2. How We Use Cookies</a>
                <a href="#types-of-cookies" className="block text-blue-600 hover:text-blue-800 transition-colors duration-200">3. Types of Cookies We Use</a>
                <a href="#third-party-cookies" className="block text-blue-600 hover:text-blue-800 transition-colors duration-200">4. Third-Party Cookies</a>
                <a href="#cookie-management" className="block text-blue-600 hover:text-blue-800 transition-colors duration-200">5. Managing Your Cookie Preferences</a>
              </div>
              <div className="space-y-2">
                <a href="#cookie-duration" className="block text-blue-600 hover:text-blue-800 transition-colors duration-200">6. Cookie Duration</a>
                <a href="#specific-cookies" className="block text-blue-600 hover:text-blue-800 transition-colors duration-200">7. Specific Cookies We Use</a>
                <a href="#updates" className="block text-blue-600 hover:text-blue-800 transition-colors duration-200">8. Updates to This Policy</a>
                <a href="#contact" className="block text-blue-600 hover:text-blue-800 transition-colors duration-200">9. Contact Us</a>
              </div>
            </div>
          </div>
        </section>

        {/* Policy Content */}
        <div className="space-y-12">
          {/* What Are Cookies */}
          <section id="what-are-cookies" className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. What Are Cookies?</h2>
            
            <div className="space-y-6">
              <p className="text-gray-600">
                Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) 
                when you visit a website. They help websites remember information about your visit, such as your 
                preferred language and other settings, which can make your next visit easier and more useful.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">How Cookies Work</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
                    <li>Stored in your browser&apos;s file directory</li>
                    <li>Sent back to the website on subsequent visits</li>
                    <li>Can only be read by the website that created them</li>
                    <li>Cannot access other files on your device</li>
                    <li>Cannot transmit viruses or malware</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Cookie Benefits</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
                    <li>Remember your preferences and settings</li>
                    <li>Improve website performance and speed</li>
                    <li>Provide personalized content and features</li>
                    <li>Analyze website usage and performance</li>
                    <li>Enhance security and prevent fraud</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* How We Use Cookies */}
          <section id="how-we-use" className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. How We Use Cookies</h2>
            
            <div className="space-y-6">
              <p className="text-gray-600">
                Zion Tech Group uses cookies for several purposes to improve your experience on our website:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Essential Functions</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Maintain your session and login status</li>
                    <li>Remember your language preferences</li>
                    <li>Ensure website security and functionality</li>
                    <li>Process form submissions and transactions</li>
                    <li>Enable shopping cart functionality</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Performance & Analytics</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Analyze website traffic and usage patterns</li>
                    <li>Monitor website performance and speed</li>
                    <li>Identify and fix technical issues</li>
                    <li>Understand user behavior and preferences</li>
                    <li>Improve website design and functionality</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-800 text-sm">
                  <strong>Note:</strong> We only use cookies for legitimate business purposes and never sell or share 
                  cookie data with third parties for marketing purposes without your explicit consent.
                </p>
              </div>
            </div>
          </section>

          {/* Types of Cookies */}
          <section id="types-of-cookies" className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Types of Cookies We Use</h2>
            
            <div className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="text-3xl mb-3">🔒</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Essential Cookies</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    These cookies are necessary for the website to function properly and cannot be disabled.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 text-xs">
                    <li>Authentication and security</li>
                    <li>Session management</li>
                    <li>Form processing</li>
                    <li>Basic functionality</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="text-3xl mb-3">📊</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Analytics Cookies</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    These cookies help us understand how visitors interact with our website.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 text-xs">
                    <li>Page views and navigation</li>
                    <li>User behavior analysis</li>
                    <li>Performance monitoring</li>
                    <li>Error tracking</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <div className="text-3xl mb-3">🎯</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Marketing Cookies</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    These cookies are used to deliver relevant advertisements and content.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 text-xs">
                    <li>Ad personalization</li>
                    <li>Social media integration</li>
                    <li>Retargeting campaigns</li>
                    <li>Content recommendations</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800 text-sm">
                  <strong>Important:</strong> Essential cookies are always active, but you can control analytics 
                  and marketing cookies through our cookie consent banner or browser settings.
                </p>
              </div>
            </div>
          </section>

          {/* Third-Party Cookies */}
          <section id="third-party-cookies" className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Third-Party Cookies</h2>
            
            <div className="space-y-6">
              <p className="text-gray-600">
                Some cookies on our website are set by third-party services that we use to enhance functionality:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Analytics Services</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li><strong>Google Analytics:</strong> Website traffic and user behavior analysis</li>
                    <li><strong>Hotjar:</strong> User experience and heatmap analysis</li>
                    <li><strong>Mixpanel:</strong> Product analytics and user journey tracking</li>
                    <li><strong>Amplitude:</strong> Advanced user behavior analytics</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Marketing & Social Media</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li><strong>Facebook Pixel:</strong> Social media advertising and conversion tracking</li>
                    <li><strong>LinkedIn Insight:</strong> Professional network advertising</li>
                    <li><strong>Twitter Pixel:</strong> Social media engagement tracking</li>
                    <li><strong>HubSpot:</strong> Marketing automation and lead tracking</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-800 text-sm">
                  <strong>Third-Party Policies:</strong> Each third-party service has its own privacy policy. 
                  We recommend reviewing these policies to understand how they handle your data.
                </p>
              </div>
            </div>
          </section>

          {/* Cookie Management */}
          <section id="cookie-management" className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Managing Your Cookie Preferences</h2>
            
            <div className="space-y-6">
              <p className="text-gray-600">
                You have several options for managing cookies and controlling your privacy:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Cookie Consent Banner</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Choose which cookie categories to accept</li>
                    <li>Modify preferences at any time</li>
                    <li>Withdraw consent for specific cookies</li>
                    <li>Access detailed cookie information</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Browser Settings</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Block all cookies (not recommended)</li>
                    <li>Block third-party cookies only</li>
                    <li>Delete cookies when closing browser</li>
                    <li>Set cookie expiration preferences</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">How to Manage Cookies in Your Browser</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Chrome/Edge</h4>
                    <p className="text-gray-600">Settings → Privacy and Security → Cookies and other site data</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Firefox</h4>
                    <p className="text-gray-600">Options → Privacy & Security → Cookies and Site Data</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Safari</h4>
                    <p className="text-gray-600">Preferences → Privacy → Manage Website Data</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Mobile Browsers</h4>
                    <p className="text-gray-600">Settings → Privacy → Cookie Management</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 text-sm">
                  <strong>Cookie Preferences Center:</strong> You can manage your cookie preferences at any time 
                  by clicking the &quot;Cookie Settings&quot; link in our footer or cookie banner.
                </p>
              </div>
            </div>
          </section>

          {/* Cookie Duration */}
          <section id="cookie-duration" className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Cookie Duration</h2>
            
            <div className="space-y-6">
              <p className="text-gray-600">
                Cookies have different lifespans depending on their purpose and type:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                  <div className="text-3xl mb-3">⏰</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Session Cookies</h3>
                  <p className="text-gray-600 text-sm">
                    Deleted when you close your browser. Used for temporary session management.
                  </p>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
                  <div className="text-3xl mb-3">📅</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Persistent Cookies</h3>
                  <p className="text-gray-600 text-sm">
                    Remain on your device for a set period (days, months, or years).
                  </p>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
                  <div className="text-3xl mb-3">🔄</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Renewable Cookies</h3>
                  <p className="text-gray-600 text-sm">
                    Automatically extended when you visit our website again.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Typical Cookie Lifespans</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Essential Cookies</h4>
                    <p className="text-gray-600">Session duration or up to 1 year</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Analytics Cookies</h4>
                    <p className="text-gray-600">2 years (Google Analytics standard)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Marketing Cookies</h4>
                    <p className="text-gray-600">90 days to 2 years</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Preference Cookies</h4>
                    <p className="text-gray-600">1 year or until manually deleted</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Specific Cookies */}
          <section id="specific-cookies" className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Specific Cookies We Use</h2>
            
            <div className="space-y-6">
              <p className="text-gray-600">
                Below is a detailed list of the specific cookies we use on our website:
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700">Cookie Name</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700">Purpose</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700">Duration</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm">session_id</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm">Maintains your login session</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm">Session</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm">Essential</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm">_ga</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm">Google Analytics visitor identification</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm">2 years</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm">Analytics</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm">_gid</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm">Google Analytics session identification</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm">24 hours</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm">Analytics</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm">fb_pixel</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm">Facebook advertising conversion tracking</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm">90 days</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm">Marketing</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm">language_pref</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm">Remembers your language preference</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm">1 year</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm">Preference</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm">cookie_consent</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm">Remembers your cookie preferences</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm">1 year</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm">Essential</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-800 text-sm">
                  <strong>Cookie Updates:</strong> This list is updated regularly as we add or modify cookies. 
                  Check back periodically for the most current information.
                </p>
              </div>
            </div>
          </section>

          {/* Updates */}
          <section id="updates" className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Updates to This Policy</h2>
            
            <div className="space-y-4">
              <p className="text-gray-600 mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices, 
                technology, or legal requirements:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li><strong>New Cookies:</strong> When we add new cookies or tracking technologies</li>
                <li><strong>Policy Changes:</strong> When we modify how we use cookies</li>
                <li><strong>Legal Updates:</strong> When new privacy laws require changes</li>
                <li><strong>Technology Updates:</strong> When we upgrade our systems</li>
              </ul>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800 text-sm">
                  <strong>Notification:</strong> We will notify you of any material changes to this policy 
                  via email or website notification at least 30 days in advance.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section id="contact" className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Contact Us</h2>
            
            <div className="space-y-6">
              <p className="text-gray-600">
                If you have questions about our Cookie Policy or cookie practices, please contact us:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-3">Zion Tech Group</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>364 E Main St STE 1008</p>
                    <p>Middletown, DE 19709</p>
                    <p>United States</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-3">Contact Methods</h3>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Email:</strong> kleber@ziontechgroup.com</p>
                    <p><strong>Phone:</strong> +1 302 464 0950</p>
                    <p><strong>Website:</strong> https://ziontechgroup.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-800 text-sm">
                  <strong>Cookie Inquiries:</strong> For questions specifically about cookies, please include 
                  &quot;Cookie Policy Inquiry&quot; in your email subject line.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Additional Information */}
        <section className="mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Additional Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Related Policies</h3>
                <p className="opacity-90">
                  This Cookie Policy works together with our Privacy Policy and Terms of Service 
                  to provide complete transparency about how we handle your data.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Your Rights</h3>
                <p className="opacity-90">
                  You have the right to control your cookies, withdraw consent, and request 
                  information about our data practices at any time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Questions About Our Cookies?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We&apos;re committed to transparency in our cookie practices. 
              If you have questions or need help managing your preferences, don&apos;t hesitate to reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
              >
                Contact Us
              </Link>
              <Link
                href="/privacy-policy"
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CookiePolicy;