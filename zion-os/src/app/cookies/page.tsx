import Link from "next/link";

export const metadata = {
  title: "Cookie Policy - Zion Tech Group",
  description: "Learn how Zion Tech Group uses cookies and tracking technologies to improve your experience on our website.",
  keywords: "cookie policy, cookies, tracking, privacy, Zion Tech Group",
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Cookie Policy</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            How we use cookies and tracking technologies to enhance your experience
          </p>
          <p className="text-sm text-gray-400">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Cookie Policy Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="card space-y-8">
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold mb-4">What Are Cookies?</h2>
              <p className="text-gray-300 leading-relaxed">
                Cookies are small text files that are stored on your device (computer, tablet, or mobile) 
                when you visit a website. They help websites remember information about your visit, such as 
                your preferred language and other settings, which can make your next visit easier and more 
                useful to you.
              </p>
            </div>

            {/* How We Use Cookies */}
            <div>
              <h2 className="text-2xl font-bold mb-4">How We Use Cookies</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Zion Tech Group uses cookies and similar tracking technologies for several purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Analytics Cookies:</strong> Provide insights into website usage and performance</li>
                <li><strong>Marketing Cookies:</strong> Deliver relevant content and advertisements</li>
              </ul>
            </div>

            {/* Types of Cookies */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Types of Cookies We Use</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-green-400">Essential Cookies</h3>
                  <p className="text-gray-300 mb-3">
                    These cookies are necessary for the website to function and cannot be switched off. 
                    They are usually only set in response to actions made by you, such as setting your 
                    privacy preferences, logging in, or filling in forms.
                  </p>
                  <p className="text-gray-400 text-sm">
                    <strong>Examples:</strong> Authentication cookies, security cookies, session cookies
                  </p>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">Performance Cookies</h3>
                  <p className="text-gray-300 mb-3">
                    These cookies allow us to count visits and traffic sources so we can measure and 
                    improve the performance of our site. They help us know which pages are the most 
                    and least popular and see how visitors move around the site.
                  </p>
                  <p className="text-gray-400 text-sm">
                    <strong>Examples:</strong> Google Analytics, performance monitoring, error tracking
                  </p>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-purple-400">Functional Cookies</h3>
                  <p className="text-gray-300 mb-3">
                    These cookies enable the website to provide enhanced functionality and personalization. 
                    They may be set by us or by third-party providers whose services we have added to our pages.
                  </p>
                  <p className="text-gray-400 text-sm">
                    <strong>Examples:</strong> Language preferences, region settings, user interface customization
                  </p>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-yellow-400">Marketing Cookies</h3>
                  <p className="text-gray-300 mb-3">
                    These cookies may be set through our site by our advertising partners. They may be 
                    used by those companies to build a profile of your interests and show you relevant 
                    advertisements on other sites.
                  </p>
                  <p className="text-gray-400 text-sm">
                    <strong>Examples:</strong> Social media cookies, advertising networks, remarketing
                  </p>
                </div>
              </div>
            </div>

            {/* Third-Party Cookies */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Third-Party Cookies</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Some cookies on our website are set by third-party services that we use to enhance 
                your experience. These third parties include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li><strong>Google Analytics:</strong> Website analytics and performance monitoring</li>
                <li><strong>Social Media Platforms:</strong> Social sharing and integration features</li>
                <li><strong>Advertising Networks:</strong> Relevant content and advertisement delivery</li>
                <li><strong>Customer Support Tools:</strong> Live chat and support functionality</li>
                <li><strong>Content Delivery Networks:</strong> Faster website loading and performance</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                These third parties have their own privacy policies and cookie policies. We encourage 
                you to review their policies to understand how they use cookies and your information.
              </p>
            </div>

            {/* Cookie Management */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Managing Your Cookie Preferences</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You have several options for managing cookies on our website:
              </p>
              
              <div className="space-y-4">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-blue-400">Browser Settings</h4>
                  <p className="text-gray-300 text-sm">
                    Most web browsers allow you to control cookies through their settings preferences. 
                    You can typically find these settings in the "Options" or "Preferences" menu of your browser.
                  </p>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-green-400">Cookie Consent Tool</h4>
                  <p className="text-gray-300 text-sm">
                    We provide a cookie consent tool that allows you to choose which types of cookies 
                    you want to accept. You can access this tool at any time through our website footer.
                  </p>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-purple-400">Third-Party Opt-Outs</h4>
                  <p className="text-gray-300 text-sm">
                    For third-party cookies, you may be able to opt out directly through the third-party 
                    provider's website or opt-out tools.
                  </p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mt-4">
                Please note that disabling certain cookies may affect the functionality of our website 
                and your user experience.
              </p>
            </div>

            {/* Specific Cookies */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Specific Cookies We Use</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 px-4 font-semibold">Cookie Name</th>
                      <th className="text-left py-3 px-4 font-semibold">Purpose</th>
                      <th className="text-left py-3 px-4 font-semibold">Duration</th>
                      <th className="text-left py-3 px-4 font-semibold">Type</th>
                    </tr>
                  </thead>
                  <tbody className="space-y-2">
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4">session_id</td>
                      <td className="py-3 px-4">Maintains your session while browsing</td>
                      <td className="py-3 px-4">Session</td>
                      <td className="py-3 px-4 text-green-400">Essential</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4">_ga</td>
                      <td className="py-3 px-4">Google Analytics tracking</td>
                      <td className="py-3 px-4">2 years</td>
                      <td className="py-3 px-4 text-blue-400">Performance</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4">_gid</td>
                      <td className="py-3 px-4">Google Analytics session tracking</td>
                      <td className="py-3 px-4">24 hours</td>
                      <td className="py-3 px-4 text-blue-400">Performance</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4">language_pref</td>
                      <td className="py-3 px-4">Remembers your language preference</td>
                      <td className="py-3 px-4">1 year</td>
                      <td className="py-3 px-4 text-purple-400">Functional</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4">theme_pref</td>
                      <td className="py-3 px-4">Remembers your theme preference</td>
                      <td className="py-3 px-4">1 year</td>
                      <td className="py-3 px-4 text-purple-400">Functional</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Data Collection */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Information Collected by Cookies</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Cookies may collect the following types of information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Website usage data (pages visited, time spent, links clicked)</li>
                <li>User preferences and settings</li>
                <li>Authentication and session information</li>
                <li>Performance and error data</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                This information is used to improve our website, provide personalized experiences, 
                and analyze website performance. We do not use cookies to collect personally 
                identifiable information without your consent.
              </p>
            </div>

            {/* Updates to Policy */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Updates to This Cookie Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices, 
                technology, or legal requirements. We will notify you of any material changes by posting 
                the updated policy on our website and updating the "Last updated" date.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="bg-gray-800/50 rounded-lg p-6 space-y-3">
                <p className="text-gray-300">
                  <strong>Email:</strong> 
                  <a href="mailto:privacy@ziontechgroup.com" className="text-blue-400 hover:text-blue-300 ml-2">
                    privacy@ziontechgroup.com
                  </a>
                </p>
                <p className="text-gray-300">
                  <strong>Phone:</strong> 
                  <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300 ml-2">
                    +1 (302) 464-0950
                  </a>
                </p>
                <p className="text-gray-300">
                  <strong>Address:</strong> Zion Tech Group<br/>
                  <span className="ml-4">123 Innovation Drive</span><br/>
                  <span className="ml-4">Tech Valley, CA 94000</span><br/>
                  <span className="ml-4">United States</span>
                </p>
              </div>
            </div>

            {/* Additional Resources */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Additional Resources</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                For more information about cookies and online privacy, you may find these resources helpful:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li><Link href="/privacy" className="text-blue-400 hover:text-blue-300">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-blue-400 hover:text-blue-300">Terms of Service</Link></li>
                <li><a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">All About Cookies</a></li>
                <li><a href="https://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Your Online Choices</a></li>
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
              Manage Your Cookie Preferences
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Take control of your privacy and customize your cookie settings to match your preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Cookie Settings
              </button>
              <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}