import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AccessibilityPage() {
  return (
    <>
      <Head>
        <title>Accessibility | Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group's commitment to web accessibility and inclusive design for all users." />
        <meta property="og:title" content="Accessibility | Zion Tech Group" />
        <meta property="og:description" content="Our commitment to web accessibility and inclusive design." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8">
              ← Back to Home
            </Link>
            
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Accessibility Statement
              </h1>
              
              <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-white/80 mb-6">
                  Zion Tech Group is committed to ensuring digital accessibility for people with disabilities. 
                  We are continually improving the user experience for everyone and applying the relevant accessibility standards.
                </p>
                
                <h2 className="text-2xl font-bold mb-4 text-cyan-300">Our Commitment</h2>
                <p className="text-white/80 mb-6">
                  We believe that websites and digital content should be accessible to all users, regardless of their abilities. 
                  Our commitment to accessibility is reflected in our design, development, and testing processes.
                </p>
                
                <h2 className="text-2xl font-bold mb-4 text-cyan-300">Accessibility Features</h2>
                <ul className="text-white/80 mb-6 space-y-2">
                  <li>• High contrast color schemes for better visibility</li>
                  <li>• Keyboard navigation support</li>
                  <li>• Screen reader compatibility</li>
                  <li>• Alternative text for images</li>
                  <li>• Semantic HTML structure</li>
                  <li>• Responsive design for all devices</li>
                </ul>
                
                <h2 className="text-2xl font-bold mb-4 text-cyan-300">Standards Compliance</h2>
                <p className="text-white/80 mb-6">
                  We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. 
                  These guidelines explain how to make web content more accessible for people with disabilities.
                </p>
                
                <h2 className="text-2xl font-bold mb-4 text-cyan-300">Continuous Improvement</h2>
                <p className="text-white/80 mb-6">
                  We are committed to continuously improving the accessibility of our website. 
                  We regularly review our site and make improvements based on user feedback and accessibility testing.
                </p>
                
                <h2 className="text-2xl font-bold mb-4 text-cyan-300">Contact Us</h2>
                <p className="text-white/80 mb-6">
                  If you experience any accessibility barriers or have suggestions for improvement, 
                  please contact us. We value your feedback and are committed to making our website accessible to all users.
                </p>
              </div>
              
              <div className="text-center mt-8">
                <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}