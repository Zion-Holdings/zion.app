export const metadata = {
  title: "Cookie Policy - Zion Tech Group",
  description: "Learn about how Zion Tech Group uses cookies and similar technologies on our website. Understand your cookie preferences and choices.",
  keywords: "cookie policy, cookies, tracking technologies, Zion Tech Group cookies",
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Cookie Policy</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">What Are Cookies?</h2>
            <p className="text-gray-300 mb-4">
              Cookies are small text files that are placed on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences, 
              analyzing how you use our site, and personalizing content.
            </p>
            <p className="text-gray-300">
              Cookies can be either "session cookies" (which are deleted when you close your browser) 
              or "persistent cookies" (which remain on your device for a set period).
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">How We Use Cookies</h2>
            <p className="text-gray-300 mb-4">
              We use cookies for several purposes:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
              <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
              <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
              <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
              <li><strong>Analytics Cookies:</strong> Provide insights into website usage and performance</li>
              <li><strong>Marketing Cookies:</strong> Deliver relevant content and advertisements</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Types of Cookies We Use</h2>
            
            <h3 className="text-xl font-semibold mb-3">Essential Cookies</h3>
            <p className="text-gray-300 mb-4">
              These cookies are necessary for the website to function and cannot be switched off. 
              They are usually only set in response to actions made by you, such as setting your 
              privacy preferences, logging in, or filling in forms.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Performance Cookies</h3>
            <p className="text-gray-300 mb-4">
              These cookies allow us to count visits and traffic sources so we can measure and 
              improve the performance of our site. They help us know which pages are the most 
              and least popular and see how visitors move around the site.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Functional Cookies</h3>
            <p className="text-gray-300 mb-4">
              These cookies enable the website to provide enhanced functionality and personalization. 
              They may be set by us or by third-party providers whose services we have added to our pages.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Analytics Cookies</h3>
            <p className="text-gray-300 mb-4">
              We use analytics cookies to understand how visitors interact with our website. 
              This helps us improve our services and user experience.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Third-Party Cookies</h2>
            <p className="text-gray-300 mb-4">
              Some cookies on our website are set by third-party services that we use, including:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
              <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
              <li><strong>Social Media Platforms:</strong> For social media integration and sharing</li>
              <li><strong>Advertising Networks:</strong> For relevant advertising content</li>
              <li><strong>Content Management Systems:</strong> For website functionality</li>
            </ul>
            <p className="text-gray-300">
              These third-party services have their own privacy policies and cookie practices. 
              We encourage you to review their policies for more information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Managing Your Cookie Preferences</h2>
            <p className="text-gray-300 mb-4">
              You have several options for managing cookies:
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Browser Settings</h3>
            <p className="text-gray-300 mb-4">
              Most web browsers allow you to control cookies through their settings. You can:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
              <li>Delete existing cookies</li>
              <li>Block cookies from being set</li>
              <li>Set preferences for specific websites</li>
              <li>Clear cookies when you close your browser</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Cookie Consent</h3>
            <p className="text-gray-300 mb-4">
              When you first visit our website, you'll see a cookie consent banner. You can:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
              <li>Accept all cookies</li>
              <li>Reject non-essential cookies</li>
              <li>Customize your preferences</li>
              <li>Change your preferences at any time</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Impact of Disabling Cookies</h2>
            <p className="text-gray-300 mb-4">
              Please note that if you choose to disable certain cookies, some features of our 
              website may not function properly:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
              <li>Personalization features may not work</li>
              <li>Some content may not display correctly</li>
              <li>Performance monitoring may be limited</li>
              <li>User experience may be affected</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Updates to This Policy</h2>
            <p className="text-gray-300">
              We may update this Cookie Policy from time to time to reflect changes in our 
              practices or for other operational, legal, or regulatory reasons. We will notify 
              you of any material changes by posting the updated policy on our website.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about our use of cookies or this Cookie Policy, 
              please contact us:
            </p>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <p className="text-gray-300 mb-2">
                <strong>Email:</strong> 
                <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300 ml-2">
                  kleber@ziontechgroup.com
                </a>
              </p>
              <p className="text-gray-300 mb-2">
                <strong>Phone:</strong> 
                <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300 ml-2">
                  +1 (302) 464-0950
                </a>
              </p>
              <p className="text-gray-300">
                <strong>Address:</strong> 
                <span className="ml-2">Global Operations - Serving clients worldwide</span>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}