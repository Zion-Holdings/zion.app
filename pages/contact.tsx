import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us | Zion Tech Group — Autonomous Innovation Hub</title>
        <meta name="description" content="Get in touch with Zion Tech Group to discuss autonomous technology solutions and innovation opportunities." />
        <meta property="og:title" content="Contact Us | Zion Tech Group — Autonomous Innovation Hub" />
        <meta property="og:description" content="Get in touch with Zion Tech Group to discuss autonomous technology solutions and innovation opportunities." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8">
              ← Back to Home
            </Link>
            
            <article className="prose prose-invert prose-lg max-w-none">
              <header className="text-center mb-16">
                <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Get in Touch
                </h1>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Ready to explore the future of autonomous technology? Let's start a conversation about how we can transform your business.
                </p>
              </header>

              <div className="grid gap-12 lg:grid-cols-2">
                {/* Contact Form */}
                <div>
                  <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                    Send Us a Message
                  </h2>
                  <form className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-white/80 mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
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
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
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
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
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
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
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
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                      >
                        <option value="">Select a service</option>
                        <option value="ai-ml">AI & Machine Learning</option>
                        <option value="cloud">Cloud Infrastructure</option>
                        <option value="security">Cybersecurity</option>
                        <option value="analytics">Data Analytics</option>
                        <option value="transformation">Digital Transformation</option>
                        <option value="integration">System Integration</option>
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
                        rows={6}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                        placeholder="Tell us about your project or how we can help..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-300 transform hover:scale-105"
                    >
                      Send Message
                    </button>
                  </form>
                </div>

                {/* Contact Information */}
                <div>
                  <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                    Contact Information
                  </h2>
                  
                  <div className="space-y-8">
                    <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 rounded-lg flex items-center justify-center">
                          <div className="text-2xl">📍</div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-cyan-300">Office Location</h3>
                        </div>
                      </div>
                      <p className="text-white/80">
                        Zion Tech Group<br />
                        123 Innovation Drive<br />
                        Tech Valley, CA 94000<br />
                        United States
                      </p>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-500/20 to-indigo-500/20 rounded-lg flex items-center justify-center">
                          <div className="text-2xl">📧</div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-fuchsia-300">Email</h3>
                        </div>
                      </div>
                      <p className="text-white/80">
                        <a href="mailto:hello@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                          hello@ziontechgroup.com
                        </a>
                      </p>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center">
                          <div className="text-2xl">📞</div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-indigo-300">Phone</h3>
                        </div>
                      </div>
                      <p className="text-white/80">
                        <a href="tel:+1-555-123-4567" className="text-cyan-400 hover:text-cyan-300">
                          +1 (555) 123-4567
                        </a>
                      </p>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 rounded-lg flex items-center justify-center">
                          <div className="text-2xl">🕒</div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-cyan-300">Business Hours</h3>
                        </div>
                      </div>
                      <p className="text-white/80">
                        Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                        Saturday: 10:00 AM - 4:00 PM PST<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-8 bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 rounded-lg border border-cyan-400/30 p-6">
                    <h3 className="text-lg font-semibold mb-3 text-cyan-300">Emergency Support</h3>
                    <p className="text-white/80 mb-4">
                      For urgent technical issues or system emergencies, our autonomous support systems are available 24/7.
                    </p>
                    <a href="mailto:support@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-medium">
                      support@ziontechgroup.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Additional Contact Options */}
              <section className="mt-20">
                <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Other Ways to Connect
                </h2>
                
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="text-center bg-white/5 rounded-lg p-8 border border-white/10">
                    <div className="text-4xl mb-4">💼</div>
                    <h3 className="text-xl font-semibold mb-3 text-cyan-300">LinkedIn</h3>
                    <p className="text-white/70 mb-4">Connect with our team and stay updated on autonomous technology trends.</p>
                    <a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium">
                      Follow Us →
                    </a>
                  </div>
                  
                  <div className="text-center bg-white/5 rounded-lg p-8 border border-white/10">
                    <div className="text-4xl mb-4">🐦</div>
                    <h3 className="text-xl font-semibold mb-3 text-fuchsia-300">Twitter</h3>
                    <p className="text-white/70 mb-4">Get real-time updates on our latest innovations and industry insights.</p>
                    <a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium">
                      Follow Us →
                    </a>
                  </div>
                  
                  <div className="text-center bg-white/5 rounded-lg p-8 border border-white/10">
                    <div className="text-4xl mb-4">📺</div>
                    <h3 className="text-xl font-semibold mb-3 text-indigo-300">YouTube</h3>
                    <p className="text-white/70 mb-4">Watch demos and learn about our autonomous technology solutions.</p>
                    <a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium">
                      Subscribe →
                    </a>
                  </div>
                </div>
              </section>

              {/* CTA Section */}
              <section className="mt-20 text-center">
                <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 rounded-2xl border border-cyan-400/30 p-12">
                  <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                    Ready to Start Your Journey?
                  </h2>
                  <p className="text-white/80 mb-8 text-lg max-w-2xl mx-auto">
                    Let's discuss how autonomous technology can transform your business and accelerate your innovation goals.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/services" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-300 transform hover:scale-105">
                      Explore Our Services
                    </Link>
                    <Link href="/about" className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300">
                      Learn More About Us
                    </Link>
                  </div>
                </div>
              </section>
            </article>
          </div>
        </main>
      </div>
    </>
  );
}