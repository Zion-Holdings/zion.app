import React from 'react';
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Cookies() {
  return (
    <div className="min-h-screen bg-zion-blue">
      <SEO
        title="Cookie Policy | Zion Tech Group"
        description="Learn about how Zion Tech Group uses cookies to improve your browsing experience and provide personalized content."
        keywords="cookie policy, privacy, data collection, website cookies"
        canonical="https://ziontechgroup.com/cookies"
      />
      <Header />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8">Cookie Policy</h1>
            
            <div className="bg-zion-blue-dark rounded-lg p-8 border border-zion-blue-light">
              <p className="text-zion-slate-light mb-6">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">What Are Cookies?</h2>
                  <p className="text-zion-slate-light leading-relaxed">
                    Cookies are small text files that are placed on your device when you visit our website. 
                    They help us provide you with a better experience by remembering your preferences, 
                    analyzing how you use our site, and personalizing content.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">How We Use Cookies</h2>
                  <p className="text-zion-slate-light mb-4">
                    We use cookies for several purposes:
                  </p>
                  <ul className="list-disc list-inside text-zion-slate-light space-y-2 ml-4">
                    <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                    <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
                    <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                    <li><strong>Marketing Cookies:</strong> Deliver relevant advertisements and content</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Types of Cookies We Use</h2>
                  
                  <div className="space-y-6">
                    <div className="border-l-4 border-zion-cyan pl-4">
                      <h3 className="text-xl font-medium text-white mb-2">Essential Cookies</h3>
                      <p className="text-zion-slate-light">
                        These cookies are necessary for the website to function and cannot be switched off. 
                        They include cookies for security, authentication, and basic site functionality.
                      </p>
                    </div>

                    <div className="border-l-4 border-zion-purple pl-4">
                      <h3 className="text-xl font-medium text-white mb-2">Analytics Cookies</h3>
                      <p className="text-zion-slate-light">
                        Help us understand how visitors interact with our website by collecting and reporting 
                        information anonymously. This helps us improve our services.
                      </p>
                    </div>

                    <div className="border-l-4 border-zion-purple-light pl-4">
                      <h3 className="text-xl font-medium text-white mb-2">Preference Cookies</h3>
                      <p className="text-zion-slate-light">
                        Allow our website to remember information that changes the way it behaves or looks, 
                        such as your preferred language or region.
                      </p>
                    </div>

                    <div className="border-l-4 border-zion-cyan pl-4">
                      <h3 className="text-xl font-medium text-white mb-2">Marketing Cookies</h3>
                      <p className="text-zion-slate-light">
                        Used to track visitors across websites to display relevant and engaging advertisements.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Third-Party Cookies</h2>
                  <p className="text-zion-slate-light leading-relaxed">
                    Some cookies on our website are set by third-party services that we use to enhance 
                    functionality, such as analytics providers, advertising networks, and social media platforms. 
                    These third parties have their own privacy policies and cookie policies.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Managing Your Cookie Preferences</h2>
                  <p className="text-zion-slate-light mb-4">
                    You can control and manage cookies in several ways:
                  </p>
                  <ul className="list-disc list-inside text-zion-slate-light space-y-2 ml-4">
                    <li>Use your browser settings to delete or block cookies</li>
                    <li>Set your browser to ask for permission before setting cookies</li>
                    <li>Use our cookie consent manager (if available)</li>
                    <li>Contact us to update your preferences</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Browser Settings</h2>
                  <p className="text-zion-slate-light leading-relaxed">
                    Most web browsers allow you to manage cookies through their settings. You can usually find 
                    these settings in the "Options" or "Preferences" menu of your browser. Please note that 
                    disabling certain cookies may affect the functionality of our website.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Updates to This Policy</h2>
                  <p className="text-zion-slate-light leading-relaxed">
                    We may update this Cookie Policy from time to time to reflect changes in our practices 
                    or for other operational, legal, or regulatory reasons. We will notify you of any material 
                    changes by posting the new policy on this page.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
                  <p className="text-zion-slate-light leading-relaxed">
                    If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                  </p>
                  <div className="mt-4 p-4 bg-zion-blue-light rounded-lg">
                    <p className="text-zion-slate-light">
                      <strong>Email:</strong> privacy@ziontechgroup.com<br />
                      <strong>Address:</strong> Zion Tech Group, San Francisco, CA<br />
                      <strong>Phone:</strong> +1 (555) 123-4567
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}