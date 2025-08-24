import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SmartHeader from '../components/SmartHeader';
import SmartFooter from '../components/SmartFooter';

export default function Cookies() {
  return (
    <>
      <Head>
        <title>Cookie Policy - Zion Tech Group | Cookie Usage & Management</title>
        <meta name="description" content="Zion Tech Group's Cookie Policy. Learn about how we use cookies, what types we collect, and how you can manage your cookie preferences." />
        <meta name="keywords" content="cookie policy, cookies, tracking, privacy, Zion Tech Group, data collection" />
        <meta property="og:title" content="Cookie Policy - Zion Tech Group" />
        <meta property="og:description" content="Understanding how we use cookies to improve your experience." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/cookies" />
        <link rel="canonical" href="https://ziontechgroup.com/cookies" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <SmartHeader />
        
        <main id="main-content" className="pt-16">
          {/* Hero Section */}
          <section className="relative py-20 px-6">
            <div className="mx-auto max-w-7xl">
              <div className="text-center">
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                  Cookie Policy
                </h1>
                <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                  Understanding how we use cookies to enhance your experience
                </p>
                <p className="text-white/60 mt-4">Last updated: January 15, 2025</p>
              </div>
            </div>
          </section>

          {/* Policy Content */}
          <section className="py-20 px-6">
            <div className="mx-auto max-w-4xl">
              <div className="prose prose-invert prose-lg max-w-none">
                <div className="bg-white/5 rounded-lg p-8 border border-white/10">
                  <h2 className="text-3xl font-bold text-white mb-6">1. What Are Cookies?</h2>
                  <p className="text-white/80 mb-4">
                    Cookies are small text files that are placed on your device (computer, tablet, or mobile phone) when you visit our website. They help us provide you with a better experience by:
                  </p>
                  <ul className="text-white/80 space-y-2">
                    <li>• Remembering your preferences and settings</li>
                    <li>• Analyzing how you use our website</li>
                    <li>• Providing personalized content and advertisements</li>
                    <li>• Improving website functionality and performance</li>
                    <li>• Ensuring security and preventing fraud</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-lg p-8 border border-white/10 mt-8">
                  <h2 className="text-3xl font-bold text-white mb-6">2. Types of Cookies We Use</h2>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">2.1 Essential Cookies</h3>
                  <p className="text-white/80 mb-4">
                    These cookies are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas, and form submissions. The website cannot function properly without these cookies.
                  </p>
                  <ul className="text-white/80 mb-6 space-y-2">
                    <li>• <strong>Authentication cookies:</strong> Remember your login status</li>
                    <li>• <strong>Security cookies:</strong> Protect against fraud and security threats</li>
                    <li>• <strong>Session cookies:</strong> Maintain your session during your visit</li>
                  </ul>

                  <h3 className="text-2xl font-bold text-white mb-4">2.2 Performance Cookies</h3>
                  <p className="text-white/80 mb-4">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. They help us improve the website's performance and user experience.
                  </p>
                  <ul className="text-white/80 mb-6 space-y-2">
                    <li>• <strong>Analytics cookies:</strong> Track page views, time spent, and user behavior</li>
                    <li>• <strong>Performance monitoring:</strong> Monitor website speed and responsiveness</li>
                    <li>• <strong>Error tracking:</strong> Identify and fix technical issues</li>
                  </ul>

                  <h3 className="text-2xl font-bold text-white mb-4">2.3 Functionality Cookies</h3>
                  <p className="text-white/80 mb-4">
                    These cookies enable enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
                  </p>
                  <ul className="text-white/80 mb-6 space-y-2">
                    <li>• <strong>Preference cookies:</strong> Remember your language, region, and other settings</li>
                    <li>• <strong>Feature cookies:</strong> Enable advanced website features</li>
                    <li>• <strong>Social media cookies:</strong> Enable social media sharing and integration</li>
                  </ul>

                  <h3 className="text-2xl font-bold text-white mb-4">2.4 Marketing Cookies</h3>
                  <p className="text-white/80">
                    These cookies are used to track visitors across websites to display relevant and engaging advertisements. They help us and our advertising partners deliver more targeted advertising.
                  </p>
                </div>

                <div className="bg-white/5 rounded-lg p-8 border border-white/10 mt-8">
                  <h2 className="text-3xl font-bold text-white mb-6">3. Specific Cookies We Use</h2>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-white/80">
                      <thead>
                        <tr className="border-b border-white/20">
                          <th className="text-left py-3 px-4 font-semibold">Cookie Name</th>
                          <th className="text-left py-3 px-4 font-semibold">Purpose</th>
                          <th className="text-left py-3 px-4 font-semibold">Duration</th>
                          <th className="text-left py-3 px-4 font-semibold">Type</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-white/10">
                          <td className="py-3 px-4">session_id</td>
                          <td className="py-3 px-4">Maintains your session during your visit</td>
                          <td className="py-3 px-4">Session</td>
                          <td className="py-3 px-4">Essential</td>
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="py-3 px-4">auth_token</td>
                          <td className="py-3 px-4">Remembers your login status</td>
                          <td className="py-3 px-4">30 days</td>
                          <td className="py-3 px-4">Essential</td>
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="py-3 px-4">_ga</td>
                          <td className="py-3 px-4">Google Analytics tracking</td>
                          <td className="py-3 px-4">2 years</td>
                          <td className="py-3 px-4">Performance</td>
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="py-3 px-4">_gid</td>
                          <td className="py-3 px-4">Google Analytics session tracking</td>
                          <td className="py-3 px-4">24 hours</td>
                          <td className="py-3 px-4">Performance</td>
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="py-3 px-4">preferences</td>
                          <td className="py-3 px-4">Stores your website preferences</td>
                          <td className="py-3 px-4">1 year</td>
                          <td className="py-3 px-4">Functionality</td>
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="py-3 px-4">language</td>
                          <td className="py-3 px-4">Remembers your language preference</td>
                          <td className="py-3 px-4">1 year</td>
                          <td className="py-3 px-4">Functionality</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4">ad_tracking</td>
                          <td className="py-3 px-4">Enables targeted advertising</td>
                          <td className="py-3 px-4">90 days</td>
                          <td className="py-3 px-4">Marketing</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-8 border border-white/10 mt-8">
                  <h2 className="text-3xl font-bold text-white mb-6">4. Third-Party Cookies</h2>
                  <p className="text-white/80 mb-4">
                    Some cookies on our website are set by third-party services that we use to enhance functionality and analyze performance:
                  </p>
                  <ul className="text-white/80 mb-6 space-y-2">
                    <li>• <strong>Google Analytics:</strong> Website analytics and performance monitoring</li>
                    <li>• <strong>Google Ads:</strong> Advertising and conversion tracking</li>
                    <li>• <strong>Facebook Pixel:</strong> Social media advertising and analytics</li>
                    <li>• <strong>LinkedIn Insight:</strong> Professional network advertising</li>
                    <li>• <strong>Hotjar:</strong> User behavior analysis and heatmaps</li>
                  </ul>
                  <p className="text-white/80">
                    These third-party services have their own privacy policies and cookie practices. We recommend reviewing their policies to understand how they use your data.
                  </p>
                </div>

                <div className="bg-white/5 rounded-lg p-8 border border-white/10 mt-8">
                  <h2 className="text-3xl font-bold text-white mb-6">5. Managing Your Cookie Preferences</h2>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">5.1 Browser Settings</h3>
                  <p className="text-white/80 mb-4">
                    You can control and manage cookies through your browser settings. Most browsers allow you to:
                  </p>
                  <ul className="text-white/80 mb-6 space-y-2">
                    <li>• View and delete existing cookies</li>
                    <li>• Block cookies from specific websites</li>
                    <li>• Block all cookies</li>
                    <li>• Set preferences for different types of cookies</li>
                  </ul>

                  <h3 className="text-2xl font-bold text-white mb-4">5.2 Cookie Consent Management</h3>
                  <p className="text-white/80 mb-4">
                    When you first visit our website, you'll see a cookie consent banner that allows you to:
                  </p>
                  <ul className="text-white/80 mb-6 space-y-2">
                    <li>• Accept all cookies</li>
                    <li>• Accept only essential cookies</li>
                    <li>• Customize your cookie preferences</li>
                    <li>• Learn more about our cookie policy</li>
                  </ul>

                  <h3 className="text-2xl font-bold text-white mb-4">5.3 Opt-Out Options</h3>
                  <p className="text-white/80">
                    For certain types of cookies, particularly marketing and analytics cookies, you can opt out through third-party services:
                  </p>
                  <ul className="text-white/80 mt-4 space-y-2">
                    <li>• <strong>Google Analytics:</strong> <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">Google Analytics Opt-out Browser Add-on</a></li>
                    <li>• <strong>Google Ads:</strong> <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">Google Ads Settings</a></li>
                    <li>• <strong>Facebook:</strong> <a href="https://www.facebook.com/settings?tab=ads" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">Facebook Ad Preferences</a></li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-lg p-8 border border-white/10 mt-8">
                  <h2 className="text-3xl font-bold text-white mb-6">6. Impact of Disabling Cookies</h2>
                  <p className="text-white/80 mb-4">
                    While you can disable cookies, please note that doing so may affect your experience on our website:
                  </p>
                  <ul className="text-white/80 space-y-2">
                    <li>• <strong>Essential cookies:</strong> Disabling these may prevent the website from functioning properly</li>
                    <li>• <strong>Performance cookies:</strong> Disabling these may limit our ability to improve the website</li>
                    <li>• <strong>Functionality cookies:</strong> Disabling these may reduce personalized features</li>
                    <li>• <strong>Marketing cookies:</strong> Disabling these may result in less relevant advertisements</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-lg p-8 border border-white/10 mt-8">
                  <h2 className="text-3xl font-bold text-white mb-6">7. Updates to This Policy</h2>
                  <p className="text-white/80 mb-4">
                    We may update this Cookie Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by:
                  </p>
                  <ul className="text-white/80 mb-6 space-y-2">
                    <li>• Posting the updated policy on our website</li>
                    <li>• Updating the "Last updated" date at the top of this policy</li>
                    <li>• Displaying a notice on our website about the changes</li>
                  </ul>
                  <p className="text-white/80">
                    Your continued use of our website after any changes indicates your acceptance of the updated Cookie Policy.
                  </p>
                </div>

                <div className="bg-white/5 rounded-lg p-8 border border-white/10 mt-8">
                  <h2 className="text-3xl font-bold text-white mb-6">8. Contact Us</h2>
                  <p className="text-white/80 mb-4">
                    If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                  </p>
                  <div className="space-y-2 text-white/80">
                    <p><strong>Email:</strong> privacy@ziontechgroup.com</p>
                    <p><strong>Phone:</strong> +1 (302) 464-0950</p>
                    <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709</p>
                  </div>
                  <p className="text-white/80 mt-4">
                    We're committed to transparency and will be happy to address any concerns you may have about our cookie practices.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Cookie Management Tools */}
          <section className="py-20 px-6 bg-white/5">
            <div className="mx-auto max-w-4xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Manage Your Cookie Preferences</h2>
                <p className="text-xl text-white/70 max-w-3xl mx-auto">
                  Take control of your privacy and cookie settings
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/5 rounded-lg p-8 border border-white/10 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">⚙️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Cookie Settings</h3>
                  <p className="text-white/70 mb-6">
                    Customize which types of cookies you want to allow on our website
                  </p>
                  <button className="px-6 py-3 bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                    Manage Cookies
                  </button>
                </div>
                
                <div className="bg-white/5 rounded-lg p-8 border border-white/10 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">🔒</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Privacy Center</h3>
                  <p className="text-white/70 mb-6">
                    Learn more about how we protect your privacy and data
                  </p>
                  <Link 
                    href="/privacy" 
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 inline-block"
                  >
                    View Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-6">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Questions About Cookies?</h2>
              <p className="text-xl text-white/80 mb-8">
                We're here to help you understand and manage your cookie preferences
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Contact Us
                </Link>
                <Link 
                  href="/privacy" 
                  className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </section>
        </main>

        <SmartFooter />
      </div>
    </>
  );
}