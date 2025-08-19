import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us | Zion Tech Group - Get in Touch</title>
        <meta name="description" content="Get in touch with Zion Tech Group. Contact our team for inquiries about autonomous AI systems, automation solutions, and technological partnerships." />
        <meta property="og:title" content="Contact Us | Zion Tech Group - Get in Touch" />
        <meta property="og:description" content="Get in touch with Zion Tech Group. Contact our team for inquiries about autonomous AI systems, automation solutions, and technological partnerships." />
        <meta name="twitter:card" content="summary_large_image" />
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
                Ready to explore the future of autonomous technology? Let's discuss how we can transform your business 
                with intelligent automation and AI-powered solutions.
              </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <section>
                <h2 className="text-2xl font-bold mb-6 text-cyan-300">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-white/80 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors"
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
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors"
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
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors"
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
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors"
                      placeholder="Enter your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="automation">Automation Solutions</option>
                      <option value="ai-systems">AI Systems</option>
                      <option value="consulting">Consulting Services</option>
                      <option value="support">Technical Support</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-600 hover:to-fuchsia-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="text-2xl font-bold mb-6 text-cyan-300">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">📍</div>
                      <div>
                        <h3 className="text-lg font-semibold text-fuchsia-300 mb-2">Headquarters</h3>
                        <p className="text-white/80">
                          Zion Tech Group<br />
                          Innovation District<br />
                          Tech Valley, CA 94000<br />
                          United States
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">📧</div>
                      <div>
                        <h3 className="text-lg font-semibold text-fuchsia-300 mb-2">Email</h3>
                        <p className="text-white/80">
                          <a href="mailto:hello@zion.tech" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                            hello@zion.tech
                          </a><br />
                          <a href="mailto:support@zion.tech" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                            support@zion.tech
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">🌐</div>
                      <div>
                        <h3 className="text-lg font-semibold text-fuchsia-300 mb-2">Online</h3>
                        <p className="text-white/80">
                          <a href="https://zion.tech" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                            zion.tech
                          </a><br />
                          <a href="https://github.com/Zion-Holdings" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                            GitHub
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">⏰</div>
                      <div>
                        <h3 className="text-lg font-semibold text-fuchsia-300 mb-2">Business Hours</h3>
                        <p className="text-white/80">
                          Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                          Saturday: 10:00 AM - 4:00 PM PST<br />
                          Sunday: Closed
                        </p>
                        <p className="text-cyan-300 text-sm mt-2">
                          Our autonomous systems operate 24/7
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="mt-8 space-y-4">
                  <h3 className="text-lg font-semibold text-cyan-300">Quick Actions</h3>
                  <div className="grid grid-cols-1 gap-3">
                    <Link 
                      href="/automation"
                      className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-lg hover:border-cyan-400/30 transition-all duration-200 group"
                    >
                      <div className="text-xl">🤖</div>
                      <div>
                        <div className="font-medium text-white group-hover:text-cyan-300 transition-colors">
                          Explore Automation Solutions
                        </div>
                        <div className="text-sm text-white/60">See our autonomous systems in action</div>
                      </div>
                    </Link>
                    
                    <Link 
                      href="/blog"
                      className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-lg hover:border-cyan-400/30 transition-all duration-200 group"
                    >
                      <div className="text-xl">📚</div>
                      <div>
                        <div className="font-medium text-white group-hover:text-cyan-300 transition-colors">
                          Read Our Blog
                        </div>
                        <div className="text-sm text-white/60">Latest insights and trends</div>
                      </div>
                    </Link>
                    
                    <Link 
                      href="/about"
                      className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-lg hover:border-cyan-400/30 transition-all duration-200 group"
                    >
                      <div className="text-xl">ℹ️</div>
                      <div>
                        <div className="font-medium text-white group-hover:text-cyan-300 transition-colors">
                          Learn About Us
                        </div>
                        <div className="text-sm text-white/60">Our mission and vision</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}