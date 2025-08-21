import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';

export default function CookiesPage() {
  return (
    <>
      <Head>
        <title>Cookie Policy | Zion Tech Group</title>
        <meta name="description" content="Cookie Policy for Zion Tech Group - Learn about how we use cookies and similar technologies." />
        <meta property="og:title" content="Cookie Policy | Zion Tech Group" />
        <meta property="og:description" content="Cookie Policy for Zion Tech Group." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-cursor-darker via-cursor-dark to-cursor-darker overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,122,204,0.08),transparent_50%)]" />
        
        <div className="relative z-10 container-cursor text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 gradient-text">
            Cookie Policy
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
            How we use cookies and similar technologies to improve your experience
          </p>
        </div>
      </section>

      {/* Cookie Policy Content */}
      <section className="py-24 bg-gradient-to-b from-cursor-dark to-cursor-darker">
        <div className="container-cursor">
          <div className="max-w-4xl mx-auto space-y-12">
            <Card className="hover:border-cursor-blue/30">
              <h2 className="text-3xl font-bold mb-6 text-cursor-blue">What Are Cookies?</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and analyzing how you use our site.
              </p>
            </Card>

            <Card className="hover:border-cursor-blue/30">
              <h2 className="text-3xl font-bold mb-6 text-cursor-blue">How We Use Cookies</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use cookies for several purposes:
              </p>
              <ul className="text-gray-400 leading-relaxed space-y-2">
                <li>• Essential cookies for website functionality</li>
                <li>• Analytics cookies to understand site usage</li>
                <li>• Preference cookies to remember your settings</li>
                <li>• Security cookies to protect against fraud</li>
              </ul>
            </Card>

            <Card className="hover:border-cursor-blue/30">
              <h2 className="text-3xl font-bold mb-6 text-cursor-blue">Types of Cookies We Use</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Essential Cookies</h3>
                  <p className="text-gray-400 leading-relaxed">
                    These cookies are necessary for the website to function properly and cannot be disabled.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Analytics Cookies</h3>
                  <p className="text-gray-400 leading-relaxed">
                    These cookies help us understand how visitors interact with our website.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Preference Cookies</h3>
                  <p className="text-gray-400 leading-relaxed">
                    These cookies remember your choices and preferences for a better experience.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="hover:border-cursor-blue/30">
              <h2 className="text-3xl font-bold mb-6 text-cursor-blue">Managing Your Cookie Preferences</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You can control and manage cookies in several ways:
              </p>
              <ul className="text-gray-400 leading-relaxed space-y-2">
                <li>• Browser settings to block or delete cookies</li>
                <li>• Cookie consent management tools</li>
                <li>• Third-party opt-out mechanisms</li>
              </ul>
            </Card>

            <Card className="hover:border-cursor-blue/30">
              <h2 className="text-3xl font-bold mb-6 text-cursor-blue">Third-Party Cookies</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Some cookies on our site are set by third-party services that we use, such as analytics providers and social media platforms.
              </p>
              <p className="text-gray-400 leading-relaxed">
                These third parties have their own privacy policies and cookie practices.
              </p>
            </Card>

            <Card className="hover:border-cursor-blue/30">
              <h2 className="text-3xl font-bold mb-6 text-cursor-blue">Updates to This Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
              </p>
            </Card>

            <Card className="hover:border-cursor-blue/30">
              <h2 className="text-3xl font-bold mb-6 text-cursor-blue">Contact Us</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about our use of cookies, please contact us through our website or email us directly.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}