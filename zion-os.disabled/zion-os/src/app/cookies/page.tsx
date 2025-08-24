export const metadata = {
  title: 'Cookie Policy - Zion Tech Group',
  description: 'Zion Tech Group Cookie Policy - Learn how we use cookies and similar technologies on our website.',
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
          <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-600 mb-4">
                This Cookie Policy explains how Zion Tech Group ("we," "our," or "us") uses cookies and similar 
                technologies when you visit our website. This policy should be read alongside our Privacy Policy, 
                which explains how we use your personal information.
              </p>
              <p className="text-gray-600">
                By using our website, you agree that we can place cookies and similar technologies on your device 
                as described in this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. What Are Cookies?</h2>
              <p className="text-gray-600 mb-4">
                Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) 
                when you visit a website. They are widely used to make websites work more efficiently and to 
                provide information to website owners.
              </p>
              <p className="text-gray-600 mb-4">
                Cookies can be categorized in several ways:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li><strong>Session cookies:</strong> These are temporary cookies that are deleted when you close your browser</li>
                <li><strong>Persistent cookies:</strong> These remain on your device for a set period or until you delete them</li>
                <li><strong>First-party cookies:</strong> These are set by the website you are visiting</li>
                <li><strong>Third-party cookies:</strong> These are set by external services or websites</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Cookies</h2>
              <p className="text-gray-600 mb-4">
                We use cookies and similar technologies for the following purposes:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Essential Cookies</h3>
              <p className="text-gray-600 mb-4">
                These cookies are necessary for the website to function properly. They enable basic functions 
                such as page navigation, access to secure areas, and form submissions. The website cannot 
                function properly without these cookies.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Performance Cookies</h3>
              <p className="text-gray-600 mb-4">
                These cookies collect information about how visitors use our website, such as which pages 
                are visited most often and if users get error messages. This information is used to improve 
                how our website works.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3.3 Functionality Cookies</h3>
              <p className="text-gray-600 mb-4">
                These cookies allow the website to remember choices you make (such as your username, language, 
                or region) and provide enhanced, more personal features.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3.4 Analytics Cookies</h3>
              <p className="text-gray-600 mb-4">
                We use analytics cookies to understand how visitors interact with our website. This helps us 
                improve our website and provide better user experiences.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Types of Cookies We Use</h2>
              
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 rounded-lg">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-900">Cookie Name</th>
                      <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-900">Purpose</th>
                      <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-900">Duration</th>
                      <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-900">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-600">session_id</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-600">Maintains user session</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-600">Session</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-600">Essential</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-600">_ga</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-600">Google Analytics tracking</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-600">2 years</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-600">Analytics</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-600">_gid</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-600">Google Analytics session tracking</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-600">24 hours</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-600">Analytics</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-600">preferences</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-600">Stores user preferences</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-600">1 year</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-600">Functionality</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Third-Party Cookies</h2>
              <p className="text-gray-600 mb-4">
                Some cookies on our website are set by third-party services. These include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li><strong>Google Analytics:</strong> We use Google Analytics to understand how visitors use our website</li>
                <li><strong>Social Media:</strong> Social media platforms may set cookies when you interact with social media features on our website</li>
                <li><strong>Advertising:</strong> Third-party advertising services may set cookies for targeted advertising</li>
              </ul>
              <p className="text-gray-600">
                We do not control these third-party cookies. Please refer to the privacy policies of these 
                third-party services for more information about how they use cookies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Managing Cookies</h2>
              <p className="text-gray-600 mb-4">
                You have several options for managing cookies:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">6.1 Browser Settings</h3>
              <p className="text-gray-600 mb-4">
                Most web browsers allow you to manage cookies through their settings. You can:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>View cookies stored on your device</li>
                <li>Delete cookies</li>
                <li>Block cookies from specific websites</li>
                <li>Block all cookies</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">6.2 Cookie Consent</h3>
              <p className="text-gray-600 mb-4">
                When you first visit our website, you will see a cookie consent banner. You can:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Accept all cookies</li>
                <li>Reject non-essential cookies</li>
                <li>Customize your cookie preferences</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">6.3 Opt-Out Links</h3>
              <p className="text-gray-600 mb-4">
                For third-party cookies, you can often opt out through the service provider's website:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li><a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 hover:text-blue-700">Google Analytics Opt-out</a></li>
                <li><a href="https://www.facebook.com/help/cookies" className="text-blue-600 hover:text-blue-700">Facebook Cookie Settings</a></li>
                <li><a href="https://twitter.com/settings/account" className="text-blue-600 hover:text-blue-700">Twitter Cookie Settings</a></li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Impact of Disabling Cookies</h2>
              <p className="text-gray-600 mb-4">
                If you choose to disable cookies, please be aware that:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Some website features may not function properly</li>
                <li>Your user experience may be affected</li>
                <li>We may not be able to provide personalized content</li>
                <li>Some analytics and performance data may not be collected</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Updates to This Policy</h2>
              <p className="text-gray-600 mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices or 
                for other operational, legal, or regulatory reasons.
              </p>
              <p className="text-gray-600">
                We will notify you of any material changes by posting the updated policy on our website 
                and updating the "Last updated" date at the top of this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about this Cookie Policy or our use of cookies, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Zion Tech Group</strong></p>
                <p className="text-gray-700 mb-2">Email: privacy@ziontechgroup.com</p>
                <p className="text-gray-700 mb-2">Phone: +1 (302) 464-0950</p>
                <p className="text-gray-700">Address: 1000 N Market Street, Suite 1000, Wilmington, DE 19801</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Additional Resources</h2>
              <p className="text-gray-600 mb-4">
                For more information about cookies and how to manage them, you may find these resources helpful:
              </p>
              <ul className="list-disc pl-6 text-gray-600">
                <li><a href="https://www.allaboutcookies.org/" className="text-blue-600 hover:text-blue-700">All About Cookies</a></li>
                <li><a href="https://www.youronlinechoices.com/" className="text-blue-600 hover:text-blue-700">Your Online Choices</a></li>
                <li><a href="https://www.networkadvertising.org/" className="text-blue-600 hover:text-blue-700">Network Advertising Initiative</a></li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}