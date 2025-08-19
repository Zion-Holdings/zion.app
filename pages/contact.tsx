import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

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
          <div className="mb-8">
            <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              ← Back to Home
            </Link>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Contact Us
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Ready to explore the future of autonomous technology? Get in touch with our team.
              </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
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
                    <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      placeholder="Your company name"
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
                      <option value="technology">Technology Questions</option>
                      <option value="demo">Request Demo</option>
                      <option value="support">Technical Support</option>
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
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6 text-cyan-300">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                    <h3 className="text-lg font-semibold mb-3 text-green-400">General Inquiries</h3>
                    <p className="text-white/80 mb-2">info@ziontechgroup.com</p>
                    <p className="text-white/80">+1 (555) 123-4567</p>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                    <h3 className="text-lg font-semibold mb-3 text-blue-400">Technical Support</h3>
                    <p className="text-white/80 mb-2">support@ziontechgroup.com</p>
                    <p className="text-white/80">Available 24/7</p>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                    <h3 className="text-lg font-semibold mb-3 text-purple-400">Partnership</h3>
                    <p className="text-white/80 mb-2">partnerships@ziontechgroup.com</p>
                    <p className="text-white/80">Let's build the future together</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4 text-cyan-300">Office Location</h3>
                  <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                    <p className="text-white/80 mb-2">Zion Tech Group</p>
                    <p className="text-white/80 mb-2">123 Innovation Drive</p>
                    <p className="text-white/80 mb-2">Tech Valley, CA 94000</p>
                    <p className="text-white/80">United States</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4 text-cyan-300">Business Hours</h3>
                  <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                    <p className="text-white/80 mb-2">Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                    <p className="text-white/80 mb-2">Saturday: 10:00 AM - 4:00 PM PST</p>
                    <p className="text-white/80">Sunday: Closed</p>
                    <p className="text-white/60 text-sm mt-2">* Technical support available 24/7</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold mb-6 text-cyan-300">Connect With Us</h2>
              <div className="flex justify-center space-x-6">
                <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20 hover:border-cyan-400 transition-colors">
                    <span className="text-xl">💼</span>
                  </div>
                </a>
                <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20 hover:border-cyan-400 transition-colors">
                    <span className="text-xl">🐦</span>
                  </div>
                </a>
                <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  <span className="sr-only">GitHub</span>
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20 hover:border-cyan-400 transition-colors">
                    <span className="text-xl">📚</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}