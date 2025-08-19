import React from 'react';
import Head from 'next/head';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Zion Tech Group — Get in Touch</title>
        <meta name="description" content="Contact Zion Tech Group for autonomous innovation solutions, AI automation, and cutting-edge technology consulting." />
        <meta property="og:title" content="Contact Zion Tech Group — Get in Touch" />
        <meta property="og:description" content="Contact Zion Tech Group for autonomous innovation solutions, AI automation, and cutting-edge technology consulting." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Ready to explore autonomous innovation? Let's discuss how Zion Tech Group 
              can transform your technology landscape.
            </p>
          </section>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-xl">
              <h2 className="text-2xl font-bold mb-6 text-cyan-400">Send us a Message</h2>
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
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
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
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
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
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
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
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                    placeholder="Enter your company name"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-white/80 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  >
                    <option value="">Select a service</option>
                    <option value="automation">Autonomous Cloud Automation</option>
                    <option value="ai-content">AI Content Generation</option>
                    <option value="self-healing">Self-Healing Systems</option>
                    <option value="consulting">Technology Consulting</option>
                    <option value="custom">Custom Solution</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-xl">
                <h2 className="text-2xl font-bold mb-6 text-fuchsia-400">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-cyan-400 rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <h3 className="font-semibold text-white">Email</h3>
                      <p className="text-white/70">hello@ziontech.group</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-cyan-400 rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <h3 className="font-semibold text-white">Phone</h3>
                      <p className="text-white/70">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-cyan-400 rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <h3 className="font-semibold text-white">Office Hours</h3>
                      <p className="text-white/70">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-xl">
                <h2 className="text-2xl font-bold mb-6 text-cyan-400">Why Choose Zion Tech Group?</h2>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-fuchsia-400 rounded-full mr-3"></span>
                    Autonomous Innovation Systems
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-fuchsia-400 rounded-full mr-3"></span>
                    24/7 Self-Managing Operations
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-fuchsia-400 rounded-full mr-3"></span>
                    AI-Powered Content Generation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-fuchsia-400 rounded-full mr-3"></span>
                    Continuous System Optimization
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-fuchsia-400 rounded-full mr-3"></span>
                    Global Technology Expertise
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-xl">
                <h2 className="text-2xl font-bold mb-6 text-fuchsia-400">Response Time</h2>
                <p className="text-white/70 mb-4">
                  We typically respond to all inquiries within 24 hours. For urgent matters, 
                  please indicate the priority in your message.
                </p>
                <div className="flex items-center space-x-2 text-cyan-400">
                  <span className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></span>
                  <span className="text-sm">Usually responds within 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}