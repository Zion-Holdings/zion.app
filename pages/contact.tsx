import React from 'react';
import Head from 'next/head';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact | Zion Tech Group — Autonomous Innovation Hub</title>
        <meta name="description" content="Get in touch with Zion Tech Group for autonomous technology solutions, AI consulting, and innovation partnerships." />
        <meta property="og:title" content="Contact | Zion Tech Group — Autonomous Innovation Hub" />
        <meta property="og:description" content="Get in touch with Zion Tech Group for autonomous technology solutions, AI consulting, and innovation partnerships." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <nav className="mb-8">
              <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Home
              </a>
            </nav>
            
            <header className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Get in Touch
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Ready to transform your business with autonomous technology? Let's discuss how we can help you achieve your goals.
              </p>
            </header>

            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <div className="bg-white/10 rounded-2xl p-8 border border-white/20">
                <h2 className="text-2xl font-bold mb-6 text-white/90">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-white/80 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-white/80 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50"
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
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50"
                      placeholder="Enter your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-white/80 mb-2">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50"
                    >
                      <option value="">Select a service</option>
                      <option value="ai-ml">AI & Machine Learning</option>
                      <option value="cloud-infrastructure">Cloud & Infrastructure</option>
                      <option value="cybersecurity">Cybersecurity</option>
                      <option value="robotics-automation">Robotics & Automation</option>
                      <option value="business-intelligence">Business Intelligence</option>
                      <option value="consulting">Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50"
                      placeholder="Tell us about your project or inquiry..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-white/10 rounded-2xl p-8 border border-white/20">
                  <h2 className="text-2xl font-bold mb-6 text-white/90">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">📍</div>
                      <div>
                        <h3 className="font-semibold text-cyan-300 mb-2">Global Headquarters</h3>
                        <p className="text-white/80">
                          Zion Tech Tower<br />
                          1234 Innovation Drive<br />
                          Silicon Valley, CA 94025<br />
                          United States
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="text-2xl">🌍</div>
                      <div>
                        <h3 className="font-semibold text-fuchsia-300 mb-2">Regional Offices</h3>
                        <p className="text-white/80">
                          London, UK • Berlin, Germany<br />
                          Tokyo, Japan • Singapore<br />
                          Sydney, Australia • Toronto, Canada
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="text-2xl">📧</div>
                      <div>
                        <h3 className="font-semibold text-green-300 mb-2">Email</h3>
                        <p className="text-white/80">
                          <a href="mailto:hello@ziontech.group" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                            hello@ziontech.group
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="text-2xl">📞</div>
                      <div>
                        <h3 className="font-semibold text-yellow-300 mb-2">Phone</h3>
                        <p className="text-white/80">
                          <a href="tel:+1-800-ZION-TECH" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                            +1 (800) ZION-TECH
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 rounded-2xl p-8 border border-white/20">
                  <h2 className="text-2xl font-bold mb-6 text-white/90">Business Hours</h2>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-white/80">Monday - Friday</span>
                      <span className="text-white/90 font-medium">9:00 AM - 6:00 PM PST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/80">Saturday</span>
                      <span className="text-white/90 font-medium">10:00 AM - 4:00 PM PST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/80">Sunday</span>
                      <span className="text-white/90 font-medium">Closed</span>
                    </div>
                    <div className="pt-3 border-t border-white/20">
                      <p className="text-sm text-white/60">
                        24/7 emergency support available for enterprise clients
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 rounded-2xl p-8 border border-white/20">
                  <h2 className="text-2xl font-bold mb-6 text-white/90">Quick Links</h2>
                  <div className="space-y-3">
                    <a href="/services" className="block text-cyan-400 hover:text-cyan-300 transition-colors">
                      → View Our Services
                    </a>
                    <a href="/about" className="block text-cyan-400 hover:text-cyan-300 transition-colors">
                      → Learn About Us
                    </a>
                    <a href="/reports/updates/update-2025-08-15-0406" className="block text-cyan-400 hover:text-cyan-300 transition-colors">
                      → Latest Updates
                    </a>
                    <a href="/careers" className="block text-cyan-400 hover:text-cyan-300 transition-colors">
                      → Join Our Team
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <section className="mt-20 text-center">
              <h2 className="text-3xl font-bold mb-8 text-white/90">Ready to Start Your Journey?</h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Join thousands of companies that have already transformed their business with our autonomous technology solutions.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <a href="/services" className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-300">
                  Explore Services
                </a>
                <a href="/about" className="border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:border-cyan-400/50 hover:text-cyan-300 transition-all duration-300">
                  About Us
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}