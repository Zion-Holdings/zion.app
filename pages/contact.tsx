import React from 'react';
import Head from 'next/head';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Zion Tech Group | Get in Touch</title>
        <meta name="description" content="Contact Zion Tech Group for inquiries about our autonomous technology solutions and AI-powered innovations." />
        <meta property="og:title" content="Contact Zion Tech Group | Get in Touch" />
        <meta property="og:description" content="Contact Zion Tech Group for inquiries about our autonomous technology solutions and AI-powered innovations." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <header className="mb-12 text-center">
              <nav className="mb-8">
                <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  ← Back to Home
                </a>
              </nav>
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Contact Us
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Ready to explore the future of autonomous technology? Get in touch with our team.
              </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <section>
                <h2 className="text-3xl font-bold mb-8">Send a Message</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors"
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
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors"
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
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="technology">Technology Questions</option>
                      <option value="automation">Automation Services</option>
                      <option value="research">Research Collaboration</option>
                      <option value="general">General Inquiry</option>
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
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                      placeholder="Tell us about your inquiry..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-200 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                
                <div className="space-y-8">
                  <div className="bg-white/10 p-6 rounded-xl border border-white/20">
                    <h3 className="text-xl font-semibold mb-3 text-cyan-400">General Inquiries</h3>
                    <p className="text-white/80 mb-3">
                      Have questions about our autonomous technology solutions?
                    </p>
                    <a 
                      href="mailto:info@ziontech.group" 
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      info@ziontech.group
                    </a>
                  </div>

                  <div className="bg-white/10 p-6 rounded-xl border border-white/20">
                    <h3 className="text-xl font-semibold mb-3 text-fuchsia-400">Partnership Opportunities</h3>
                    <p className="text-white/80 mb-3">
                      Interested in collaborating with us?
                    </p>
                    <a 
                      href="mailto:partnerships@ziontech.group" 
                      className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors"
                    >
                      partnerships@ziontech.group
                    </a>
                  </div>

                  <div className="bg-white/10 p-6 rounded-xl border border-white/20">
                    <h3 className="text-xl font-semibold mb-3 text-purple-400">Technical Support</h3>
                    <p className="text-white/80 mb-3">
                      Need help with our technology?
                    </p>
                    <a 
                      href="mailto:support@ziontech.group" 
                      className="text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      support@ziontech.group
                    </a>
                  </div>

                  <div className="bg-white/10 p-6 rounded-xl border border-white/20">
                    <h3 className="text-xl font-semibold mb-3 text-green-400">Research Collaboration</h3>
                    <p className="text-white/80 mb-3">
                      Want to collaborate on research projects?
                    </p>
                    <a 
                      href="mailto:research@ziontech.group" 
                      className="text-green-400 hover:text-green-300 transition-colors"
                    >
                      research@ziontech.group
                    </a>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-xl border border-cyan-500/20">
                  <h3 className="text-lg font-semibold mb-3 text-cyan-400">Response Time</h3>
                  <p className="text-white/80 text-sm">
                    We typically respond to all inquiries within 24 hours. For urgent matters, 
                    please include "URGENT" in your subject line.
                  </p>
                </div>
              </section>
            </div>

            <section className="mt-16 text-center">
              <h2 className="text-3xl font-bold mb-6">Connect With Us</h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Follow our journey as we revolutionize technology through autonomous innovation 
                and AI-powered solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a 
                  href="https://github.com/Zion-Holdings" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-white/20 text-white/80 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200"
                >
                  GitHub
                </a>
                <a 
                  href="https://twitter.com/ziontechgroup" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-white/20 text-white/80 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200"
                >
                  Twitter
                </a>
                <a 
                  href="https://linkedin.com/company/zion-tech-group" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-white/20 text-white/80 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200"
                >
                  LinkedIn
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}