import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact — Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for inquiries about our autonomous technology solutions." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <section className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Get in Touch
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Ready to explore the future of autonomous technology? We'd love to hear from you.
              </p>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-cyan-400">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">📍</div>
                    <div>
                      <h3 className="font-semibold text-lg">Location</h3>
                      <p className="text-white/70">Global Operations</p>
                      <p className="text-white/70">Cloud-Native Infrastructure</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">🌐</div>
                    <div>
                      <h3 className="font-semibold text-lg">Website</h3>
                      <a href="https://github.com/Zion-Holdings/zion.app" className="text-cyan-400 hover:text-cyan-300">
                        github.com/Zion-Holdings/zion.app
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">📧</div>
                    <div>
                      <h3 className="font-semibold text-lg">Email</h3>
                      <p className="text-white/70">info@zion.tech</p>
                      <p className="text-sm text-white/50">(General inquiries)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">🔧</div>
                    <div>
                      <h3 className="font-semibold text-lg">Technical Support</h3>
                      <p className="text-white/70">support@zion.tech</p>
                      <p className="text-sm text-white/50">(Technical issues)</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-white/10 rounded-2xl border border-white/20">
                  <h3 className="text-xl font-bold mb-4 text-fuchsia-400">Response Time</h3>
                  <p className="text-white/80 mb-4">
                    Our autonomous systems ensure rapid response times:
                  </p>
                  <ul className="space-y-2 text-white/70">
                    <li>• General inquiries: Within 24 hours</li>
                    <li>• Technical support: Within 4 hours</li>
                    <li>• Emergency issues: Within 1 hour</li>
                    <li>• Automated responses: Instant</li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-fuchsia-400">Send a Message</h2>
                
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
                      <option value="general">General Inquiry</option>
                      <option value="technical">Technical Support</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="feedback">Feedback</option>
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
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      placeholder="Tell us how we can help..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-600 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
                  >
                    Send Message
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-sm text-white/60">
                    By submitting this form, you agree to our{' '}
                    <Link href="/privacy" className="text-cyan-400 hover:text-cyan-300">
                      Privacy Policy
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Contact Methods */}
            <section className="mt-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-green-400">Other Ways to Connect</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20 text-center">
                  <div className="text-4xl mb-4">📱</div>
                  <h3 className="text-xl font-bold mb-3">Social Media</h3>
                  <p className="text-white/70 mb-4">
                    Follow us for the latest updates and insights
                  </p>
                  <div className="space-y-2">
                    <a href="#" className="block text-cyan-400 hover:text-cyan-300">LinkedIn</a>
                    <a href="#" className="block text-cyan-400 hover:text-cyan-300">Twitter</a>
                    <a href="#" className="block text-cyan-400 hover:text-cyan-300">GitHub</a>
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20 text-center">
                  <div className="text-4xl mb-4">📚</div>
                  <h3 className="text-xl font-bold mb-3">Documentation</h3>
                  <p className="text-white/70 mb-4">
                    Explore our comprehensive guides and APIs
                  </p>
                  <Link href="/api-documentation" className="text-cyan-400 hover:text-cyan-300">
                    View Documentation
                  </Link>
                </div>
                
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20 text-center">
                  <div className="text-4xl mb-4">🤝</div>
                  <h3 className="text-xl font-bold mb-3">Community</h3>
                  <p className="text-white/70 mb-4">
                    Join our developer community
                  </p>
                  <Link href="/contributing" className="text-cyan-400 hover:text-cyan-300">
                    Contribute
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}