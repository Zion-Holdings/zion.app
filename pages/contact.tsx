import React from 'react';
import Head from 'next/head';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Zion Tech Group | Get in Touch</title>
        <meta name="description" content="Contact Zion Tech Group to learn more about our autonomous technology solutions and how we can help transform your business." />
        <meta property="og:title" content="Contact Zion Tech Group | Get in Touch" />
        <meta property="og:description" content="Contact Zion Tech Group to learn more about our autonomous technology solutions and how we can help transform your business." />
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
                Ready to explore the future of autonomous technology? Let's discuss how Zion Tech Group can transform your business.
              </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-cyan-300">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="bg-white/5 rounded-lg p-6 border border-white/20">
                    <h3 className="text-xl font-semibold mb-3 text-white/90">General Inquiries</h3>
                    <div className="space-y-2 text-white/70">
                      <p>Email: hello@zion.tech</p>
                      <p>Phone: +1 (555) 123-4567</p>
                      <p>Hours: Mon-Fri 9AM-6PM EST</p>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-6 border border-white/20">
                    <h3 className="text-xl font-semibold mb-3 text-white/90">Technical Support</h3>
                    <div className="space-y-2 text-white/70">
                      <p>Email: support@zion.tech</p>
                      <p>24/7 AI-powered assistance</p>
                      <p>Response time: < 5 minutes</p>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-6 border border-white/20">
                    <h3 className="text-xl font-semibold mb-3 text-white/90">Business Development</h3>
                    <div className="space-y-2 text-white/70">
                      <p>Email: partnerships@zion.tech</p>
                      <p>Strategic partnerships & enterprise</p>
                      <p>Custom solutions & integrations</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 rounded-lg p-6 border border-cyan-500/30">
                  <h3 className="text-xl font-semibold mb-3 text-cyan-300">Global Presence</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm text-white/70">
                    <div>
                      <p className="font-semibold text-white/90">North America</p>
                      <p>New York, NY</p>
                      <p>San Francisco, CA</p>
                      <p>Toronto, Canada</p>
                    </div>
                    <div>
                      <p className="font-semibold text-white/90">Europe</p>
                      <p>London, UK</p>
                      <p>Berlin, Germany</p>
                      <p>Amsterdam, NL</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-cyan-300">Send us a Message</h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-white/90 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-white/90 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-white/90 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors"
                      placeholder="Enter your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-white/90 mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="technical">Technical Support</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="demo">Request Demo</option>
                      <option value="pricing">Pricing Information</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-400 to-purple-400 text-black font-semibold px-8 py-4 rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all text-lg"
                  >
                    Send Message
                  </button>
                </form>

                <div className="mt-8 text-center text-sm text-white/60">
                  <p>We typically respond within 2 hours during business hours</p>
                  <p className="mt-2">For urgent matters, call our 24/7 support line</p>
                </div>
              </div>
            </div>

            <section className="mt-20">
              <h2 className="text-3xl font-bold mb-8 text-center text-cyan-300">Frequently Asked Questions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-lg p-6 border border-white/20">
                  <h3 className="text-lg font-semibold mb-3 text-white/90">How quickly can you implement autonomous solutions?</h3>
                  <p className="text-white/70">Most solutions can be deployed within 2-4 weeks, depending on complexity and customization requirements.</p>
                </div>
                <div className="bg-white/5 rounded-lg p-6 border border-white/20">
                  <h3 className="text-lg font-semibold mb-3 text-white/90">Do you offer custom AI model training?</h3>
                  <p className="text-white/70">Yes, we specialize in custom AI model development tailored to your specific business needs and data.</p>
                </div>
                <div className="bg-white/5 rounded-lg p-6 border border-white/20">
                  <h3 className="text-lg font-semibold mb-3 text-white/90">What industries do you serve?</h3>
                  <p className="text-white/70">We work across all industries including healthcare, finance, manufacturing, retail, and technology.</p>
                </div>
                <div className="bg-white/5 rounded-lg p-6 border border-white/20">
                  <h3 className="text-lg font-semibold mb-3 text-white/90">Is there ongoing support after implementation?</h3>
                  <p className="text-white/70">Absolutely! We provide 24/7 support, regular updates, and continuous optimization of your systems.</p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}