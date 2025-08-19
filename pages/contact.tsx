import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us | Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group. We'd love to hear from you about our autonomous technology solutions." />
        <meta property="og:title" content="Contact Us | Zion Tech Group" />
        <meta property="og:description" content="Get in touch with Zion Tech Group. We'd love to hear from you about our autonomous technology solutions." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8">
              ← Back to Home
            </Link>
            
            <article className="prose prose-invert prose-lg max-w-none">
              <header className="text-center mb-16">
                <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Contact Us
                </h1>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Have questions about our autonomous technology? Want to learn more about our automation systems?
                  We'd love to hear from you.
                </p>
              </header>

              <section className="mb-16">
                <h2 className="text-3xl font-bold text-cyan-300 mb-6">Get In Touch</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white/10 rounded-lg p-6 border border-cyan-400/30">
                    <h3 className="text-xl font-semibold text-cyan-300 mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-cyan-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-cyan-400 text-sm">📧</span>
                        </div>
                        <div>
                          <div className="font-semibold text-white">Email</div>
                          <div className="text-white/80">hello@zion.tech</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-fuchsia-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-fuchsia-400 text-sm">🌐</span>
                        </div>
                        <div>
                          <div className="font-semibold text-white">Website</div>
                          <div className="text-white/80">zion.tech</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-green-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-green-400 text-sm">📱</span>
                        </div>
                        <div>
                          <div className="font-semibold text-white">GitHub</div>
                          <div className="text-white/80">github.com/Zion-Holdings</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-6 border border-fuchsia-400/30">
                    <h3 className="text-xl font-semibold text-fuchsia-300 mb-4">Response Time</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-white/80">Initial Response</span>
                        <span className="text-green-400 font-semibold">Within 24 hours</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/80">Technical Support</span>
                        <span className="text-green-400 font-semibold">Same day</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/80">Emergency Issues</span>
                        <span className="text-green-400 font-semibold">Immediate</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-bold text-cyan-300 mb-6">Send Us a Message</h2>
                <div className="bg-white/10 rounded-lg p-8 border border-white/20">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-white/80 mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50"
                          placeholder="Your first name"
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
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50"
                          placeholder="Your last name"
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
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50"
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
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="automation">Automation Systems</option>
                        <option value="technology">Technology Solutions</option>
                        <option value="partnership">Partnership Opportunities</option>
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
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50"
                        placeholder="Tell us about your inquiry or how we can help you..."
                      ></textarea>
                    </div>
                    
                    <div className="text-center">
                      <button
                        type="submit"
                        className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 hover:from-cyan-300 hover:to-fuchsia-300 text-black font-semibold rounded-lg transition-all transform hover:scale-105"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-bold text-cyan-300 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                    <h3 className="text-lg font-semibold text-cyan-300 mb-2">What makes Zion Tech Group unique?</h3>
                    <p className="text-white/80">
                      We specialize in autonomous technology systems that operate independently, continuously learning
                      and improving without human intervention. Our 227+ automation workflows ensure 99.99% uptime.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                    <h3 className="text-lg font-semibold text-fuchsia-300 mb-2">How do your automation systems work?</h3>
                    <p className="text-white/80">
                      Our systems use advanced AI and machine learning to monitor, detect, and automatically respond
                      to opportunities for improvement, optimization, and maintenance.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                    <h3 className="text-lg font-semibold text-green-300 mb-2">Can I integrate with your systems?</h3>
                    <p className="text-white/80">
                      Yes! We offer various integration options and can work with you to create custom solutions
                      that fit your specific needs and requirements.
                    </p>
                  </div>
                </div>
              </section>

              <footer className="border-t border-white/20 pt-8 text-center">
                <p className="text-white/60">
                  We're excited to hear from you and explore how our autonomous technology can benefit your organization.
                </p>
              </footer>
            </article>
          </div>
        </main>
      </div>
    </>
  );
}