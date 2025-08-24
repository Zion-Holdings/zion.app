import React from 'react';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";

export default function Cookies() {
  return (
    <>
      <SEO 
        title="Cookie Policy - Zion Tech Group" 
        description="Learn about how Zion Tech Group uses cookies and similar technologies on our website." 
        keywords="cookie policy, cookies, privacy, Zion Tech Group"
        url="https://ziontechgroup.com/cookies"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Cookie Policy</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              How we use cookies and similar technologies on our website
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies?</h2>
              <p className="text-zion-slate-light mb-4">
                Cookies are small text files that are placed on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and 
                analyzing how you use our site.
              </p>
              <p className="text-zion-slate-light">
                Cookies can be either "session cookies" (which are deleted when you close your browser) 
                or "persistent cookies" (which remain on your device for a set period of time).
              </p>
            </div>

            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Cookies</h2>
              <p className="text-zion-slate-light mb-4">
                We use cookies for several purposes:
              </p>
              <ul className="text-zion-slate-light list-disc list-inside space-y-2 ml-4">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Analytics Cookies:</strong> Provide insights into website usage and performance</li>
                <li><strong>Marketing Cookies:</strong> Help us deliver relevant content and advertisements</li>
              </ul>
            </div>

            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Types of Cookies We Use</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Essential Cookies</h3>
                  <p className="text-zion-slate-light mb-2">
                    These cookies are necessary for the website to function and cannot be disabled. 
                    They include cookies for:
                  </p>
                  <ul className="text-zion-slate-light list-disc list-inside space-y-1 ml-4">
                    <li>User authentication and security</li>
                    <li>Shopping cart functionality</li>
                    <li>Form submissions</li>
                    <li>Basic website navigation</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Performance Cookies</h3>
                  <p className="text-zion-slate-light mb-2">
                    These cookies help us understand how visitors use our website by collecting 
                    information about:
                  </p>
                  <ul className="text-zion-slate-light list-disc list-inside space-y-1 ml-4">
                    <li>Pages visited and time spent on each page</li>
                    <li>Error messages and broken links</li>
                    <li>Website performance and loading times</li>
                    <li>User journey and navigation patterns</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Functional Cookies</h3>
                  <p className="text-zion-slate-light mb-2">
                    These cookies enhance your experience by remembering:
                  </p>
                  <ul className="text-zion-slate-light list-disc list-inside space-y-1 ml-4">
                    <li>Language preferences</li>
                    <li>Region and timezone settings</li>
                    <li>User interface customization</li>
                    <li>Previous form entries</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Third-Party Cookies</h2>
              <p className="text-zion-slate-light mb-4">
                Some cookies on our website are set by third-party services that we use to:
              </p>
              <ul className="text-zion-slate-light list-disc list-inside space-y-2 ml-4">
                <li>Analyze website traffic (Google Analytics)</li>
                <li>Provide customer support (chat widgets)</li>
                <li>Process payments securely</li>
                <li>Deliver relevant advertisements</li>
                <li>Integrate social media features</li>
              </ul>
              <p className="text-zion-slate-light mt-4">
                These third-party services have their own privacy policies and cookie practices.
              </p>
            </div>

            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Managing Your Cookie Preferences</h2>
              <p className="text-zion-slate-light mb-4">
                You have several options for managing cookies:
              </p>
              <ul className="text-zion-slate-light list-disc list-inside space-y-2 ml-4">
                <li><strong>Browser Settings:</strong> Most browsers allow you to control cookies through their settings</li>
                <li><strong>Cookie Consent:</strong> Use our cookie consent banner to choose which cookies to accept</li>
                <li><strong>Opt-Out Tools:</strong> Use industry-standard opt-out tools for advertising cookies</li>
                <li><strong>Contact Us:</strong> Reach out if you have questions about our cookie practices</li>
              </ul>
            </div>

            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Updates to This Policy</h2>
              <p className="text-zion-slate-light mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices 
                or for other operational, legal, or regulatory reasons.
              </p>
              <p className="text-zion-slate-light">
                We will notify you of any material changes by posting the updated policy on our website 
                and updating the "Last Updated" date.
              </p>
            </div>

            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-zion-slate-light mb-4">
                If you have any questions about our Cookie Policy or how we use cookies, 
                please contact us:
              </p>
              <div className="text-zion-slate-light space-y-2">
                <p><strong>Email:</strong> kleber@ziontechgroup.com</p>
                <p><strong>Phone:</strong> +1 302 464 0950</p>
                <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}