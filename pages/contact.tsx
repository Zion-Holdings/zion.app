import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Zion Tech Group | Get in Touch</title>
        <meta name="description" content="Contact Zion Tech Group for inquiries about our autonomous technology solutions, partnerships, or collaboration opportunities." />
        <meta property="og:title" content="Contact Zion Tech Group" />
        <meta property="og:description" content="Contact Zion Tech Group for inquiries about our autonomous technology solutions." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="mb-8">
            <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              ← Back to Home
            </Link>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <header className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Get in Touch
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Ready to explore the future of autonomous technology? Let's discuss how we can 
                transform your business with intelligent automation solutions.
              </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <section className="bg-white/10 p-8 rounded-2xl border border-white/20 backdrop-blur-xl">
                <h2 className="text-2xl font-bold mb-6 text-white">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-white/80 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-white/80 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      placeholder="Enter your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="consultation">Technology Consultation</option>
                      <option value="demo">Product Demo Request</option>
                      <option value="support">Technical Support</option>
                      <option value="careers">Career Opportunities</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-cyan-400 to-purple-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-500 transition-all duration-200 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </section>

              {/* Contact Information */}
              <section className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-white">Contact Information</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">Email</h3>
                        <p className="text-white/70">hello@ziontechgroup.com</p>
                        <p className="text-white/70">support@ziontechgroup.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">Phone</h3>
                        <p className="text-white/70">+1 (555) 123-4567</p>
                        <p className="text-white/70">Mon-Fri: 9:00 AM - 6:00 PM EST</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-rose-400 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">Office</h3>
                        <p className="text-white/70">123 Innovation Drive</p>
                        <p className="text-white/70">Tech Valley, CA 94000</p>
                        <p className="text-white/70">United States</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 p-6 rounded-xl border border-blue-500/30">
                  <h3 className="text-xl font-semibold mb-4 text-blue-300">Why Choose Zion Tech Group?</h3>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">✓</span>
                      <span>Cutting-edge autonomous technology</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">✓</span>
                      <span>Proven track record of innovation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">✓</span>
                      <span>24/7 autonomous system monitoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">✓</span>
                      <span>Global support and implementation</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 p-6 rounded-xl border border-green-500/30">
                  <h3 className="text-xl font-semibold mb-4 text-green-300">Response Time</h3>
                  <p className="text-white/80 mb-3">
                    We typically respond to all inquiries within 2-4 hours during business hours, 
                    thanks to our autonomous response systems.
                  </p>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">2-4 Hours</div>
                    <div className="text-sm text-white/60">Average Response Time</div>
                  </div>
                </div>
              </section>
            </div>

            {/* Additional Contact Methods */}
            <section className="mt-16 text-center">
              <h2 className="text-3xl font-bold mb-8 text-white">Other Ways to Connect</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 p-6 rounded-xl border border-white/20">
                  <div className="text-4xl mb-4">💼</div>
                  <h3 className="text-xl font-semibold mb-3 text-cyan-400">LinkedIn</h3>
                  <p className="text-white/70 mb-4">Connect with our team and stay updated on our latest innovations.</p>
                  <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">Follow Us →</a>
                </div>
                <div className="bg-white/10 p-6 rounded-xl border border-white/20">
                  <div className="text-4xl mb-4">🐦</div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">Twitter</h3>
                  <p className="text-white/70 mb-4">Get real-time updates on our autonomous systems and tech insights.</p>
                  <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">Follow Us →</a>
                </div>
                <div className="bg-white/10 p-6 rounded-xl border border-white/20">
                  <div className="text-4xl mb-4">📧</div>
                  <h3 className="text-xl font-semibold mb-3 text-purple-400">Newsletter</h3>
                  <p className="text-white/70 mb-4">Subscribe to our monthly insights on autonomous technology trends.</p>
                  <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">Subscribe →</a>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}