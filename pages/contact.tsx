import React from 'react';
import Head from 'next/head';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Zion Tech Group | Get in Touch</title>
        <meta name="description" content="Contact Zion Tech Group for inquiries about our autonomous technology solutions, partnerships, or technical support." />
        <meta property="og:title" content="Contact Zion Tech Group | Get in Touch" />
        <meta property="og:description" content="Contact Zion Tech Group for inquiries about our autonomous technology solutions, partnerships, or technical support." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <nav className="mb-8">
              <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Home
              </a>
            </nav>
            
            <header className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Get in Touch
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Ready to explore the future of autonomous technology? We'd love to hear from you.
              </p>
            </header>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-white">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">📍</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-cyan-400 mb-1">Location</h3>
                      <p className="text-white/80">Innovation District<br />Tech Valley, CA 94000</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">📧</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-fuchsia-400 mb-1">Email</h3>
                      <p className="text-white/80">hello@ziontech.group</p>
                      <p className="text-white/80">support@ziontech.group</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">🌐</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-purple-400 mb-1">Website</h3>
                      <p className="text-white/80">ziontech.group</p>
                      <p className="text-white/80">bolt.new.zion.app</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">⏰</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-400 mb-1">Response Time</h3>
                      <p className="text-white/80">Within 24 hours</p>
                      <p className="text-white/80">Emergency: 2-4 hours</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10 rounded-xl border border-cyan-500/20">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-3">Why Choose Zion Tech Group?</h3>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• 24/7 autonomous system monitoring</li>
                    <li>• Cutting-edge AI technology</li>
                    <li>• Proven track record of innovation</li>
                    <li>• Dedicated support team</li>
                  </ul>
                </div>
              </div>
              
              <div>
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
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300"
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
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300"
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
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-2">
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300"
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
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="technical">Technical Support</option>
                      <option value="demo">Request Demo</option>
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
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300 resize-none"
                      placeholder="Tell us about your inquiry..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
                
                <div className="mt-6 text-center">
                  <p className="text-white/60 text-sm">
                    By submitting this form, you agree to our{' '}
                    <a href="/privacy" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </div>
            </div>
            
            <section className="mt-20 text-center">
              <h2 className="text-2xl font-bold mb-6 text-white">Connect With Us</h2>
              <div className="flex justify-center gap-6">
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🐦</span>
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">💼</span>
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">📷</span>
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">📺</span>
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}