import React from 'react';
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GradientHeading } from "@/components/GradientHeading";

export default function Cookies() {
  return (
    <div className="min-h-screen bg-zion-blue">
      <SEO
        title="Cookie Policy"
        description="Learn how Zion Tech Group uses cookies and similar technologies to improve your experience on our platform."
        canonical="https://ziontechgroup.com/cookies"
      />
      <Header />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <GradientHeading>Cookie Policy</GradientHeading>
            
            <div className="prose prose-invert max-w-none mt-8">
              <p className="text-zion-slate-light text-lg mb-6">
                This Cookie Policy explains how Zion Tech Group ("we", "us", or "our") uses cookies and similar technologies when you visit our website and use our services.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-4">What Are Cookies?</h2>
              <p className="text-zion-slate-light mb-6">
                Cookies are small text files that are stored on your device when you visit a website. They help us provide you with a better experience by remembering your preferences and analyzing how you use our site.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-4">Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-semibold text-zion-cyan mb-3">Essential Cookies</h3>
              <p className="text-zion-slate-light mb-4">
                These cookies are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas, and form submissions.
              </p>

              <h3 className="text-xl font-semibold text-zion-cyan mb-3">Performance Cookies</h3>
              <p className="text-zion-slate-light mb-4">
                These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website and services.
              </p>

              <h3 className="text-xl font-semibold text-zion-cyan mb-3">Functional Cookies</h3>
              <p className="text-zion-slate-light mb-4">
                These cookies enable enhanced functionality and personalization, such as remembering your language preferences and login status.
              </p>

              <h3 className="text-xl font-semibold text-zion-cyan mb-3">Marketing Cookies</h3>
              <p className="text-zion-slate-light mb-4">
                These cookies are used to track visitors across websites to display relevant and engaging advertisements.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-4">How to Manage Cookies</h2>
              <p className="text-zion-slate-light mb-4">
                You can control and manage cookies in several ways:
              </p>
              <ul className="list-disc list-inside text-zion-slate-light mb-6 space-y-2">
                <li>Browser settings: Most browsers allow you to refuse cookies or delete them</li>
                <li>Device settings: You can manage cookies through your device settings</li>
                <li>Third-party tools: Use browser extensions or tools to manage cookies</li>
              </ul>

              <h2 className="text-2xl font-semibold text-white mb-4">Updates to This Policy</h2>
              <p className="text-zion-slate-light mb-6">
                We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <p className="text-zion-slate-light mb-6">
                If you have any questions about our use of cookies, please contact us at{' '}
                <a href="mailto:support@ziontechgroup.com" className="text-zion-cyan hover:underline">
                  support@ziontechgroup.com
                </a>
              </p>

              <div className="bg-zion-blue-light/20 border border-zion-purple/20 rounded-lg p-6 mt-8">
                <p className="text-zion-slate-light text-sm">
                  <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}