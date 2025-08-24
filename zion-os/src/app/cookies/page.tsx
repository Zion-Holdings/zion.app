import Link from "next/link";

export const metadata = {
  title: "Cookie Policy - Zion Tech Group",
  description: "Zion Tech Group's cookie policy explaining how we use cookies and similar technologies on our website.",
  keywords: "cookie policy, cookies, tracking technologies, website cookies, Zion Tech Group",
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Cookie Policy</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            This policy explains how Zion Tech Group uses cookies and similar technologies 
            to enhance your experience on our website.
          </p>
          <div className="text-sm text-gray-400 mt-4">
            Last updated: December 15, 2024
          </div>
        </div>

        {/* Policy Content */}
        <div className="space-y-12">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold mb-4">What Are Cookies?</h2>
            <p className="text-gray-300 mb-4">
              Cookies are small text files that are placed on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences, 
              analyzing how you use our site, and personalizing content.
            </p>
            <p className="text-gray-300">
              Cookies can be either "session cookies" (which are deleted when you close your browser) 
              or "persistent cookies" (which remain on your device for a set period of time).
            </p>
          </section>

          {/* Types of Cookies */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Types of Cookies We Use</h2>
            
            <h3 className="text-xl font-semibold mb-3">Essential Cookies</h3>
            <p className="text-gray-300 mb-4">
              These cookies are necessary for the website to function properly. They enable basic 
              functions like page navigation, access to secure areas, and form submissions. The website 
              cannot function properly without these cookies.
            </p>
            <div className="card p-4 mb-6">
              <h4 className="font-semibold text-gray-200 mb-2">Examples:</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Authentication cookies for secure login</li>
                <li>• Session management cookies</li>
                <li>• Security and fraud prevention cookies</li>
                <li>• Load balancing cookies</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mb-3">Analytics Cookies</h3>
            <p className="text-gray-300 mb-4">
              These cookies help us understand how visitors interact with our website by collecting 
              and reporting information anonymously. This helps us improve our website and services.
            </p>
            <div className="card p-4 mb-6">
              <h4 className="font-semibold text-gray-200 mb-2">Examples:</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Google Analytics cookies</li>
                <li>• Page view and session duration tracking</li>
                <li>• User behavior analysis</li>
                <li>• Performance monitoring</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mb-3">Marketing Cookies</h3>
            <p className="text-gray-300 mb-4">
              These cookies are used to track visitors across websites to display relevant and 
              engaging advertisements. They may also be used to limit the number of times you see 
              an advertisement and measure the effectiveness of advertising campaigns.
            </p>
            <div className="card p-4 mb-6">
              <h4 className="font-semibold text-gray-200 mb-2">Examples:</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Social media advertising cookies</li>
                <li>• Retargeting cookies</li>
                <li>• Campaign performance tracking</li>
                <li>• Personalized content delivery</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mb-3">Preference Cookies</h3>
            <p className="text-gray-300 mb-4">
              These cookies allow our website to remember information that changes the way it behaves 
              or looks, such as your preferred language or the region you are in.
            </p>
            <div className="card p-4">
              <h4 className="font-semibold text-gray-200 mb-2">Examples:</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Language preference cookies</li>
                <li>• Theme and layout preferences</li>
                <li>• Accessibility settings</li>
                <li>• User interface customization</li>
              </ul>
            </div>
          </section>

          {/* Third-Party Cookies */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Third-Party Cookies</h2>
            <p className="text-gray-300 mb-4">
              In addition to our own cookies, we may also use various third-party cookies to report 
              usage statistics and deliver advertisements on and through our website.
            </p>
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">Third-Party Services We Use:</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-200 mb-2">Google Analytics</h4>
                  <p className="text-sm text-gray-300">
                    We use Google Analytics to understand how visitors interact with our website. 
                    Google Analytics uses cookies to collect information about your use of our website.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-200 mb-2">Social Media Platforms</h4>
                  <p className="text-sm text-gray-300">
                    Our website may include social media features that set cookies to enable 
                    functionality and track your activity across our site and social platforms.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-200 mb-2">Advertising Networks</h4>
                  <p className="text-sm text-gray-300">
                    We may work with advertising partners who use cookies to deliver relevant 
                    advertisements and track campaign performance.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Cookie Management */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Managing Your Cookie Preferences</h2>
            <p className="text-gray-300 mb-4">
              You have several options for managing cookies on our website:
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Browser Settings</h3>
            <p className="text-gray-300 mb-4">
              Most web browsers allow you to control cookies through their settings preferences. 
              You can typically:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
              <li>View and delete existing cookies</li>
              <li>Block cookies from specific websites</li>
              <li>Block all cookies</li>
              <li>Set preferences for different types of cookies</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Cookie Consent Tool</h3>
            <p className="text-gray-300 mb-4">
              When you first visit our website, you'll see a cookie consent banner that allows you to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
              <li>Accept all cookies</li>
              <li>Reject non-essential cookies</li>
              <li>Customize your cookie preferences</li>
              <li>Learn more about our cookie usage</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Opt-Out Links</h3>
            <p className="text-gray-300 mb-4">
              For third-party cookies, you can often opt out directly through the service provider:
            </p>
            <div className="card p-4">
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Google Analytics Opt-out</a></li>
                <li>• <a href="https://www.facebook.com/help/568137493302217" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Facebook Cookie Settings</a></li>
                <li>• <a href="https://help.twitter.com/en/rules-and-policies/twitter-cookies" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Twitter Cookie Policy</a></li>
              </ul>
            </div>
          </section>

          {/* Impact of Disabling Cookies */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Impact of Disabling Cookies</h2>
            <p className="text-gray-300 mb-4">
              While you can disable cookies, please be aware that doing so may affect the functionality 
              of our website:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card p-4">
                <h3 className="font-semibold text-gray-200 mb-2">Essential Cookies</h3>
                <p className="text-sm text-gray-300">
                  Disabling essential cookies may prevent the website from functioning properly, 
                  including login functionality and form submissions.
                </p>
              </div>
              <div className="card p-4">
                <h3 className="font-semibold text-gray-200 mb-2">Analytics Cookies</h3>
                <p className="text-sm text-gray-300">
                  Disabling analytics cookies will prevent us from understanding how our website 
                  is used and making improvements.
                </p>
              </div>
              <div className="card p-4">
                <h3 className="font-semibold text-gray-200 mb-2">Marketing Cookies</h3>
                <p className="text-sm text-gray-300">
                  Disabling marketing cookies may result in less relevant advertisements 
                  and content personalization.
                </p>
              </div>
              <div className="card p-4">
                <h3 className="font-semibold text-gray-200 mb-2">Preference Cookies</h3>
                <p className="text-sm text-gray-300">
                  Disabling preference cookies means the website won't remember your 
                  settings and preferences.
                </p>
              </div>
            </div>
          </section>

          {/* Data Collection */}
          <section>
            <h2 className="text-2xl font-bold mb-4">What Information Do Cookies Collect?</h2>
            <p className="text-gray-300 mb-4">
              Cookies may collect various types of information, including:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4">
              <li>IP address and general location information</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on each page</li>
              <li>Referring website</li>
              <li>Device identifiers</li>
              <li>User preferences and settings</li>
            </ul>
            <p className="text-gray-300">
              This information is typically collected anonymously and used to improve our website 
              and provide a better user experience.
            </p>
          </section>

          {/* Updates to Policy */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Updates to This Cookie Policy</h2>
            <p className="text-gray-300 mb-4">
              We may update this Cookie Policy from time to time to reflect changes in our practices 
              or for other operational, legal, or regulatory reasons.
            </p>
            <p className="text-gray-300">
              We will notify you of any material changes by posting the new Cookie Policy on this page 
              and updating the "Last updated" date. Your continued use of our website after any changes 
              constitutes acceptance of the updated policy.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about our use of cookies or this Cookie Policy, 
              please contact us:
            </p>
            <div className="card p-6">
              <div className="space-y-3">
                <div>
                  <span className="font-semibold text-gray-200">Email:</span>
                  <a href="mailto:privacy@ziontechgroup.com" className="text-blue-400 hover:text-blue-300 ml-2">
                    privacy@ziontechgroup.com
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

          {/* Additional Information */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Additional Information</h2>
            <p className="text-gray-300 mb-4">
              For more information about our data practices, you may also want to review:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><Link href="/privacy" className="text-blue-400 hover:text-blue-300">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-blue-400 hover:text-blue-300">Terms of Service</Link></li>
              <li><Link href="/accessibility" className="text-blue-400 hover:text-blue-300">Accessibility Statement</Link></li>
            </ul>
          </section>
        </div>

        {/* CTA Section */}
        <section className="text-center mt-16">
          <div className="card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30">
            <h2 className="text-2xl font-bold mb-4">Questions About Cookies?</h2>
            <p className="text-gray-300 mb-6">
              We're committed to transparency about our use of cookies and tracking technologies. 
              Contact us if you have any questions or concerns.
            </p>
            <Link href="/contact" className="btn-primary">
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}