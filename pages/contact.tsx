import React from 'react';
import Head from 'next/head';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us | Zion Tech Group - Get in Touch</title>
        <meta name="description" content="Contact Zion Tech Group for autonomous AI solutions, cloud automation, and technology consulting. Let's discuss how we can transform your business." />
        <meta property="og:title" content="Contact Us | Zion Tech Group - Get in Touch" />
        <meta property="og:description" content="Contact Zion Tech Group for autonomous AI solutions, cloud automation, and technology consulting. Let's discuss how we can transform your business." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="max-w-6xl mx-auto">
            <div className="mb-8">
              <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Home
              </a>
            </div>
            
            <header className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Contact Us
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Ready to revolutionize your business with autonomous AI? Let's discuss how Zion Tech Group can help you achieve unprecedented efficiency and innovation.
              </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h2 className="text-3xl font-bold mb-6 text-cyan-300">Get In Touch</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
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
                    <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-2">
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
                    <label htmlFor="service" className="block text-sm font-medium text-white/80 mb-2">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="ai-agents">AI Agent Development</option>
                      <option value="cloud-automation">Cloud Automation</option>
                      <option value="continuous-deployment">Continuous Deployment</option>
                      <option value="security-compliance">Security & Compliance</option>
                      <option value="data-analytics">Data Analytics</option>
                      <option value="consulting">Innovation Consulting</option>
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
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors"
                      placeholder="Tell us about your project or requirements..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold mb-6 text-cyan-300">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="text-cyan-400 mr-3 mt-1">📍</div>
                      <div>
                        <div className="font-semibold text-white">Address</div>
                        <div className="text-white/80">Innovation District<br />Tech Hub, Floor 15<br />Silicon Valley, CA 94025</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="text-cyan-400 mr-3 mt-1">📧</div>
                      <div>
                        <div className="font-semibold text-white">Email</div>
                        <div className="text-white/80">hello@ziontech.group</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="text-cyan-400 mr-3 mt-1">📱</div>
                      <div>
                        <div className="font-semibold text-white">Phone</div>
                        <div className="text-white/80">+1 (555) 123-4567</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold mb-6 text-cyan-300">Business Hours</h3>
                  <div className="space-y-3 text-white/80">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM PST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM PST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                    <div className="text-green-400 font-semibold mb-2">24/7 AI Support</div>
                    <div className="text-white/80 text-sm">Our autonomous AI systems are available around the clock to assist you.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 border border-cyan-500/30 rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold mb-6 text-cyan-300">Ready to Get Started?</h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Join the revolution in autonomous technology. Our AI systems are ready to transform your business operations today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/services" className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-300">
                  View Services
                </a>
                <a href="/about" className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  Learn More
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}