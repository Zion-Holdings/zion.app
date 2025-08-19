import React from 'react';
import Head from 'next/head';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us | Zion Tech Group - Get in Touch</title>
        <meta name="description" content="Contact Zion Tech Group to discuss autonomous technology solutions, automation services, and innovation consulting for your business." />
        <meta property="og:title" content="Contact Us | Zion Tech Group - Get in Touch" />
        <meta property="og:description" content="Contact Zion Tech Group to discuss autonomous technology solutions, automation services, and innovation consulting for your business." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Ready to transform your business with autonomous technology? 
              Let's start a conversation about your future.
            </p>
          </section>

          <section className="mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-bold mb-8 text-cyan-300">Get In Touch</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-fuchsia-400 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">📍</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">Global Headquarters</h3>
                      <p className="text-white/70">
                        Zion Tech Group<br />
                        Innovation District<br />
                        Tech Valley, CA 94000<br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-fuchsia-400 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">📧</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">Email</h3>
                      <p className="text-white/70">
                        <a href="mailto:hello@ziontech.group" className="text-cyan-300 hover:text-cyan-200 transition-colors">
                          hello@ziontech.group
                        </a><br />
                        <a href="mailto:partnerships@ziontech.group" className="text-cyan-300 hover:text-cyan-200 transition-colors">
                          partnerships@ziontech.group
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-fuchsia-400 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">🌐</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">Connect Online</h3>
                      <p className="text-white/70">
                        <a href="https://linkedin.com/company/ziontechgroup" className="text-cyan-300 hover:text-cyan-200 transition-colors block">
                          LinkedIn
                        </a>
                        <a href="https://twitter.com/ziontechgroup" className="text-cyan-300 hover:text-cyan-200 transition-colors block">
                          Twitter
                        </a>
                        <a href="https://github.com/ziontechgroup" className="text-cyan-300 hover:text-cyan-200 transition-colors block">
                          GitHub
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-8 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10">
                  <h3 className="text-2xl font-bold mb-4 text-fuchsia-300">Why Choose Zion Tech Group?</h3>
                  <ul className="space-y-3 text-white/80">
                    <li>• 24/7 Autonomous Operation</li>
                    <li>• Continuous Innovation</li>
                    <li>• Global Scale Solutions</li>
                    <li>• Proven Results</li>
                    <li>• Future-Ready Technology</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/10 p-8 rounded-2xl border border-white/10">
                <h2 className="text-3xl font-bold mb-8 text-fuchsia-300">Send Us a Message</h2>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-white/80 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
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
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
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
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
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
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      placeholder="Enter your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-white/80 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="ai-systems">Autonomous AI Systems</option>
                      <option value="automation">Automation Solutions</option>
                      <option value="cybersecurity">Cybersecurity & Compliance</option>
                      <option value="cloud">Cloud Infrastructure</option>
                      <option value="analytics">Data Analytics</option>
                      <option value="consulting">Innovation Consulting</option>
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
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white py-4 rounded-xl font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}