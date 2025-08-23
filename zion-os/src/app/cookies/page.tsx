export default function CookiesPage() {
  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="relative mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cookie <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-xl text-white/80 max-w-4xl mx-auto">
              Information about how we use cookies and similar technologies on our website to enhance your browsing experience.
            </p>
          </div>
        </div>
      </section>

      {/* Cookie Content */}
      <section className="mb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies?</h2>
              <p className="text-white/80 mb-4">
                Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit a website. They help websites remember information about your visit, such as your preferred language and other settings, which can make your next visit easier and more useful.
              </p>
              <p className="text-white/80">
                Cookies are widely used to make websites work more efficiently and to provide information to website owners.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Cookies</h2>
              <p className="text-white/80 mb-4">
                Zion Tech Group uses cookies and similar technologies for several purposes:
              </p>
              <ul className="text-white/70 space-y-2 mb-4">
                <li>• To remember your preferences and settings</li>
                <li>• To analyze website traffic and usage patterns</li>
                <li>• To provide personalized content and advertisements</li>
                <li>• To improve website functionality and performance</li>
                <li>• To ensure security and prevent fraud</li>
                <li>• To understand how visitors interact with our content</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Types of Cookies We Use</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Essential Cookies</h3>
                  <p className="text-white/70 mb-2">
                    These cookies are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas, and form submissions.
                  </p>
                  <p className="text-white/60 text-sm">
                    Examples: Authentication cookies, security cookies, session cookies
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Performance Cookies</h3>
                  <p className="text-white/70 mb-2">
                    These cookies collect information about how visitors use our website, such as which pages are visited most often and if users get error messages.
                  </p>
                  <p className="text-white/60 text-sm">
                    Examples: Google Analytics cookies, website performance monitoring
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Functionality Cookies</h3>
                  <p className="text-white/70 mb-2">
                    These cookies allow the website to remember choices you make and provide enhanced, more personal features.
                  </p>
                  <p className="text-white/60 text-sm">
                    Examples: Language preferences, region settings, user preferences
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Marketing Cookies</h3>
                  <p className="text-white/70 mb-2">
                    These cookies are used to track visitors across websites to display relevant and engaging advertisements.
                  </p>
                  <p className="text-white/60 text-sm">
                    Examples: Social media cookies, advertising network cookies
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Third-Party Cookies</h2>
              <p className="text-white/80 mb-4">
                Some cookies on our website are set by third-party services that we use to enhance your experience:
              </p>
              <ul className="text-white/70 space-y-2 mb-4">
                <li>• <strong>Google Analytics:</strong> To analyze website traffic and user behavior</li>
                <li>• <strong>Social Media Platforms:</strong> To enable social sharing and integration</li>
                <li>• <strong>Advertising Networks:</strong> To display relevant advertisements</li>
                <li>• <strong>Customer Support Tools:</strong> To provide live chat and support services</li>
              </ul>
              <p className="text-white/80">
                These third-party services have their own privacy policies and cookie practices.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Cookie Duration</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Session Cookies</h3>
                  <p className="text-white/70">
                    These cookies are temporary and are deleted when you close your browser. They are used to maintain your session while you browse our website.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Persistent Cookies</h3>
                  <p className="text-white/70">
                    These cookies remain on your device for a set period or until you delete them. They help us remember your preferences and settings for future visits.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Managing Your Cookie Preferences</h2>
              <p className="text-white/80 mb-4">
                You have several options for managing cookies:
              </p>
              <ul className="text-white/70 space-y-2 mb-4">
                <li>• <strong>Browser Settings:</strong> Most browsers allow you to control cookies through their settings</li>
                <li>• <strong>Cookie Consent:</strong> Use our cookie consent banner to manage preferences</li>
                <li>• <strong>Third-Party Opt-Out:</strong> Use opt-out tools provided by third-party services</li>
                <li>• <strong>Delete Cookies:</strong> Remove existing cookies from your device</li>
              </ul>
              <p className="text-white/80">
                Please note that disabling certain cookies may affect website functionality and your user experience.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Browser-Specific Instructions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Chrome</h3>
                  <p className="text-white/70 text-sm">
                    Settings → Privacy and security → Cookies and other site data
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Firefox</h3>
                  <p className="text-white/70 text-sm">
                    Options → Privacy & Security → Cookies and Site Data
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Safari</h3>
                  <p className="text-white/70 text-sm">
                    Preferences → Privacy → Manage Website Data
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Edge</h3>
                  <p className="text-white/70 text-sm">
                    Settings → Cookies and site permissions → Cookies and site data
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Updates to This Policy</h2>
              <p className="text-white/80 mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by:
              </p>
              <ul className="text-white/70 space-y-2 mb-4">
                <li>• Posting the updated policy on our website</li>
                <li>• Updating the "Last Updated" date at the top of this policy</li>
                <li>• Sending you an email notification for significant changes</li>
              </ul>
              <p className="text-white/80">
                We encourage you to review this policy periodically to stay informed about our cookie practices.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-white/80 mb-4">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="space-y-2 text-white/70">
                <p><strong>Email:</strong> privacy@ziontechgroup.com</p>
                <p><strong>Phone:</strong> +1 (302) 464-0950</p>
                <p><strong>Address:</strong> Zion Tech Group, Global Operations</p>
              </div>
              <p className="text-white/80 mt-4">
                We will respond to your inquiry within 30 days of receipt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need Help with Cookie Settings?</h2>
          <p className="text-xl text-white/70 mb-8">
            We're here to help you understand and manage your cookie preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-200"
            >
              Contact Us
            </a>
            <a
              href="/privacy"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all duration-200"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}