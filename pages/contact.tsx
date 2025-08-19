import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

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
          </section>

          <section className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6 text-cyan-400">Get in Touch</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-white/80 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                        placeholder="First name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-white/80 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
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
                    <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="ai-development">AI Development & Custom Solutions</option>
                      <option value="automation">Process Automation Services</option>
                      <option value="cloud-infrastructure">Cloud Infrastructure & DevOps</option>
                      <option value="data-analytics">Data Analytics & Business Intelligence</option>
                      <option value="consulting">Technology Consulting</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="support">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-white/80 mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                    >
                      <option value="">Select project type</option>
                      <option value="new-project">New Project Development</option>
                      <option value="existing-system">Existing System Enhancement</option>
                      <option value="migration">System Migration</option>
                      <option value="consultation">Consultation & Strategy</option>
                      <option value="training">Training & Implementation</option>
                      <option value="maintenance">Ongoing Support & Maintenance</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-white/80 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-10k">Under $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-plus">$100,000+</option>
                      <option value="discuss">Let's discuss</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                    ></textarea>
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="newsletter"
                      name="newsletter"
                      className="mt-1 w-4 h-4 text-cyan-400 bg-white/10 border-white/20 rounded focus:ring-cyan-400 focus:ring-2"
                    />
                    <label htmlFor="newsletter" className="text-sm text-white/70">
                      Subscribe to our newsletter for AI automation insights and updates
                    </label>
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
                        <div className="text-xs text-white/50">Response within 24 hours</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="text-2xl mr-4">🌐</div>
                      <div>
                        <div className="font-semibold">Website</div>
                        <div className="text-white/70">zion.tech</div>
                        <div className="text-xs text-white/50">Explore our services</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="text-2xl mr-4">📍</div>
                      <div>
                        <div className="font-semibold">Location</div>
                        <div className="text-white/70">Global (Remote First)</div>
                        <div className="text-xs text-white/50">Serving clients worldwide</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="text-2xl mr-4">💬</div>
                      <div>
                        <div className="font-semibold">Live Chat</div>
                        <div className="text-white/70">Available 24/7</div>
                        <div className="text-xs text-white/50">AI-powered support</div>
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
                  <div className="mt-4 p-3 bg-green-400/20 rounded-lg">
                    <div className="text-sm text-green-300">
                      <strong>Emergency Support:</strong> Available 24/7 for critical issues
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-4 text-blue-400">Quick Contact Options</h3>
                  <div className="space-y-3">
                    <Link href="/services" className="flex items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                      <span className="text-xl mr-3">🚀</span>
                      <span className="text-white/80">Browse Our Services</span>
                    </Link>
                    <Link href="/case-studies" className="flex items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                      <span className="text-xl mr-3">📊</span>
                      <span className="text-white/80">View Case Studies</span>
                    </Link>
                    <Link href="/resources" className="flex items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                      <span className="text-xl mr-3">📚</span>
                      <span className="text-white/80">Access Resources</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Section */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-purple-400">Meet Our Team</h2>
              <p className="text-white/80 mb-8 text-center max-w-3xl mx-auto">
                Our expert team combines deep technical knowledge with business acumen to deliver exceptional AI automation solutions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                    SC
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">Dr. Sarah Chen</h3>
                  <p className="text-cyan-400 text-sm mb-2">Chief AI Officer</p>
                  <p className="text-white/70 text-xs">15+ years in AI research and development</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                    DK
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">David Kim</h3>
                  <p className="text-fuchsia-400 text-sm mb-2">VP of Engineering</p>
                  <p className="text-white/70 text-xs">Expert in scalable automation systems</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                    EW
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">Dr. Emily Watson</h3>
                  <p className="text-green-400 text-sm mb-2">Head of Data Science</p>
                  <p className="text-white/70 text-xs">Specialist in predictive analytics</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                    MR
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">Mike Rodriguez</h3>
                  <p className="text-blue-400 text-sm mb-2">Cloud Architect</p>
                  <p className="text-white/70 text-xs">Infrastructure and DevOps expert</p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-yellow-400">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="border-b border-white/20 pb-4">
                  <h3 className="text-lg font-semibold text-white mb-2">How quickly can you start a project?</h3>
                  <p className="text-white/70">Most projects can begin within 1-2 weeks of initial consultation. We prioritize rapid deployment and can often start with a proof-of-concept within days.</p>
                </div>
                <div className="border-b border-white/20 pb-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Do you provide ongoing support?</h3>
                  <p className="text-white/70">Yes, we offer comprehensive support packages including 24/7 monitoring, regular updates, and continuous optimization of your AI systems.</p>
                </div>
                <div className="border-b border-white/20 pb-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Can you work with existing systems?</h3>
                  <p className="text-white/70">Absolutely! We specialize in integrating with legacy systems and can enhance existing infrastructure with AI capabilities.</p>
                </div>
                <div className="border-b border-white/20 pb-4">
                  <h3 className="text-lg font-semibold text-white mb-2">What industries do you serve?</h3>
                  <p className="text-white/70">We work across all industries including manufacturing, healthcare, finance, retail, and technology. Our solutions are adaptable to any business domain.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">How do you ensure data security?</h3>
                  <p className="text-white/70">We implement enterprise-grade security measures including encryption, access controls, and compliance with industry standards like GDPR, HIPAA, and SOC 2.</p>
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