import React from 'react';
import Head from 'next/head';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Zion Tech Group | Get in Touch</title>
        <meta name="description" content="Contact Zion Tech Group to discuss autonomous technology solutions, partnerships, or learn more about our innovative automation systems." />
        <meta property="og:title" content="Contact Zion Tech Group" />
        <meta property="og:description" content="Contact Zion Tech Group to discuss autonomous technology solutions, partnerships, or learn more about our innovative automation systems." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Contact Us
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Ready to explore the future of autonomous technology? Let's start a conversation.
              </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <section className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6 text-cyan-300">Get in Touch</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
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
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      placeholder="your.email@example.com"
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
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-200"
                  >
                    Send Message
                  </button>
                </form>
              </section>

              <section className="space-y-8">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                  <h3 className="text-xl font-bold mb-4 text-fuchsia-300">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-white">Email</p>
                        <p className="text-white/70">hello@ziontech.group</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-fuchsia-500/20 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-fuchsia-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-white">Location</p>
                        <p className="text-white/70">Global Operations</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                  <h3 className="text-xl font-bold mb-4 text-fuchsia-300">Business Hours</h3>
                  <div className="space-y-2 text-white/70">
                    <p>Monday - Friday: 24/7 Autonomous Operations</p>
                    <p>Saturday - Sunday: Continuous Monitoring</p>
                    <p className="text-cyan-400 font-medium">Our AI systems never sleep!</p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                  <h3 className="text-xl font-bold mb-4 text-fuchsia-300">Response Time</h3>
                  <div className="space-y-2 text-white/70">
                    <p>Initial Response: Within 2 hours</p>
                    <p>Detailed Proposal: Within 24 hours</p>
                    <p className="text-green-400 font-medium">AI-powered quick responses</p>
                  </div>
                </div>
              </section>
            </div>

            <div className="mt-16 text-center">
              <a 
                href="/" 
                className="inline-flex items-center px-6 py-3 border border-white/20 text-white font-medium rounded-xl hover:bg-white/10 transition-all duration-200"
              >
                ← Back to Home
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}