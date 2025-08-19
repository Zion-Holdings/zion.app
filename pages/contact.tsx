import React from 'react';
import Head from 'next/head';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Zion Tech Group | Get in Touch</title>
        <meta name="description" content="Get in touch with Zion Tech Group. We're here to help with your autonomous technology needs and AI innovation projects." />
        <meta property="og:title" content="Contact Zion Tech Group" />
        <meta property="og:description" content="Get in touch with Zion Tech Group." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Ready to explore the future of autonomous technology? Let's connect and discuss how we can help transform your vision into reality.
            </p>
            
            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="/about" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                About Us
              </a>
              <a href="/services" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-fuchsia-400/50">
                Our Services
              </a>
              <a href="/case-studies" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-green-400/50">
                Case Studies
              </a>
              <a href="/team" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-blue-400/50">
                Our Team
              </a>
            </div>
          </section>

          <section className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6 text-cyan-400">Get in Touch</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      placeholder="your.email@example.com"
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
                      <option value="ai-development">AI Development</option>
                      <option value="automation">Automation Services</option>
                      <option value="consulting">Consulting</option>
                      <option value="partnership">Partnership</option>
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
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      placeholder="Tell us about your project or inquiry..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-bold py-3 px-6 rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-4 text-fuchsia-400">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="text-2xl mr-4">📧</div>
                      <div>
                        <div className="font-semibold">Email</div>
                        <div className="text-white/70">hello@zion.tech</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="text-2xl mr-4">🌐</div>
                      <div>
                        <div className="font-semibold">Website</div>
                        <div className="text-white/70">zion.tech</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="text-2xl mr-4">📍</div>
                      <div>
                        <div className="font-semibold">Location</div>
                        <div className="text-white/70">Global (Remote First)</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-4 text-green-400">Business Hours</h3>
                  <div className="space-y-2 text-white/70">
                    <div>Monday - Friday: 9:00 AM - 6:00 PM UTC</div>
                    <div>Saturday: 10:00 AM - 2:00 PM UTC</div>
                    <div>Sunday: Closed</div>
                  </div>
                  <div className="mt-4 text-sm text-white/50">
                    * Our AI systems operate 24/7 for continuous support
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Why Choose Zion Tech Group?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-xl font-semibold mb-2">Fast Response</h3>
                  <p className="text-white/70">Get a response within 24 hours, often much sooner</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🤖</div>
                  <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
                  <p className="text-white/70">Leverage our autonomous systems for your projects</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🌍</div>
                  <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
                  <p className="text-white/70">We work with clients worldwide, 24/7</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}