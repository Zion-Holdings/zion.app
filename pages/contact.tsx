import React from 'react';
import Head from 'next/head';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Zion Tech Group | Get in Touch</title>
        <meta name="description" content="Contact Zion Tech Group for inquiries about our autonomous technology solutions, partnerships, or career opportunities." />
        <meta property="og:title" content="Contact Zion Tech Group | Get in Touch" />
        <meta property="og:description" content="Contact Zion Tech Group for inquiries about our autonomous technology solutions, partnerships, or career opportunities." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <header className="text-center mb-16">
              <nav className="mb-6 text-left">
                <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  ← Back to Home
                </a>
              </nav>
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Contact Us
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Ready to explore the future of autonomous technology? Let's start a conversation.
              </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <section className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold mb-6 text-cyan-300">Send us a Message</h2>
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
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
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
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
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
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
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
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
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
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="technology">Technology Consultation</option>
                      <option value="career">Career Opportunities</option>
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
                      rows={5}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent resize-none"
                      placeholder="Tell us about your inquiry..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </section>

              {/* Contact Information */}
              <section className="space-y-8">
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                  <h2 className="text-2xl font-bold mb-6 text-cyan-300">Get in Touch</h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="text-2xl mr-4">📧</div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">Email</h3>
                        <p className="text-cyan-400">hello@ziontech.group</p>
                        <p className="text-white/60 text-sm">We typically respond within 24 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="text-2xl mr-4">🌍</div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">Global Offices</h3>
                        <p className="text-white/80">San Francisco, London, Tokyo, Singapore</p>
                        <p className="text-white/60 text-sm">Available 24/7 for urgent matters</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="text-2xl mr-4">📱</div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">Phone</h3>
                        <p className="text-cyan-400">+1 (555) 123-4567</p>
                        <p className="text-white/60 text-sm">Monday - Friday, 9 AM - 6 PM PST</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                  <h2 className="text-2xl font-bold mb-6 text-cyan-300">Quick Links</h2>
                  <div className="space-y-4">
                    <a 
                      href="/about" 
                      className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10"
                    >
                      <h3 className="font-semibold text-cyan-300 mb-1">About Us</h3>
                      <p className="text-white/60 text-sm">Learn about our mission and values</p>
                    </a>
                    
                    <a 
                      href="/careers" 
                      className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10"
                    >
                      <h3 className="font-semibold text-cyan-300 mb-1">Careers</h3>
                      <p className="text-white/60 text-sm">Join our team of innovators</p>
                    </a>
                    
                    <a 
                      href="/partners" 
                      className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10"
                    >
                      <h3 className="font-semibold text-cyan-300 mb-1">Partnerships</h3>
                      <p className="text-white/60 text-sm">Explore collaboration opportunities</p>
                    </a>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                  <h2 className="text-2xl font-bold mb-6 text-cyan-300">Follow Us</h2>
                  <div className="flex space-x-4">
                    <a 
                      href="#" 
                      className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                    >
                      <span className="text-white font-semibold">LinkedIn</span>
                    </a>
                    <a 
                      href="#" 
                      className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                    >
                      <span className="text-white font-semibold">Twitter</span>
                    </a>
                    <a 
                      href="#" 
                      className="p-3 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg hover:from-pink-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                    >
                      <span className="text-white font-semibold">Instagram</span>
                    </a>
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